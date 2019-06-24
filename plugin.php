<?php
/**
 * Plugin Name: Table of Contents
 */

 namespace GutenTOC;

defined( 'ABSPATH' ) || exit;

/**
 * Load all translations for our plugin from the MO file.
*/
add_action( 'init', __NAMESPACE__ . '\\load_textdomain' );
add_action( 'init', __NAMESPACE__ . '\\register_block' );

function load_textdomain() {
	load_plugin_textdomain( 'gutentoc', false, basename( __DIR__ ) . '/languages' );
}

/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 *
 * Passes translations to JavaScript.
 */
function register_block() {

	if ( ! function_exists( 'register_block_type' ) ) {
		// Gutenberg is not active.
		return;
	}

	wp_register_script(
		'gutentoc',
		plugins_url( 'build/index.js', __FILE__ ),
		[ 'wp-blocks', 'wp-i18n', 'wp-element' ],
		filemtime( plugin_dir_path( __FILE__ ) . 'build/index.js' )
	);

	register_block_type( 'gutentoc/toc', [
		'editor_script' => 'gutentoc',
		'render_callback' => __NAMESPACE__ . '\\render_callback'
	 ] );

  if ( function_exists( 'wp_set_script_translations' ) ) {
    /**
     * May be extended to wp_set_script_translations( 'my-handle', 'my-domain',
     * plugin_dir_path( MY_PLUGIN ) . 'languages' ) ). For details see
     * https://make.wordpress.org/core/2018/11/09/new-javascript-i18n-support-in-wordpress/
     */
    wp_set_script_translations( 'gutentoc', 'gutentoc-domain' );
  }

}

function render_callback( $attributes, $content ) {
	$blocks = parse_blocks( get_the_content( get_the_ID()));
	if ( empty( $blocks ) ) {
		return 'No contents.';
	}

	$headings = array_values( array_filter( $blocks, function( $block ){
		return $block['blockName'] === 'core/heading';
	}) );
	if ( empty( $headings ) ) {
		return 'No headings.';
	}
	$heading_contents = array_column( $headings, 'innerHTML');
	$output = '<div class="toc">';
		$output .= 'Table of contents';
		$output .= '<ul>';
			foreach ( $heading_contents as $heading_content ) {
				preg_match( '/\\n<h[2-6]>(.*)<\/h[2-6]>\\n/', $heading_content , $matches );
				$link = sanitize_title_with_dashes( $matches[1]);
				$output .= '<li><a href="#' . $link . '">' . $matches[1] . '</a></li>';
			}
		$output .= '</ul>';
	$output .= '</div>';
	return $output;
}

add_filter( 'render_block', __NAMESPACE__ . '\\filter_block', 10, 2 );

function filter_block( $block_content, $block ) {
	if ( $block['blockName'] !== 'core/heading' ) {
		return $block_content;
	}
	preg_match( '/\\n<(h[2-6])>(.*)<\/(h[2-6])>\\n/', $block_content , $matches );
	$link = sanitize_title_with_dashes( $matches[2] );
	return "\n<{$matches[1]}><span id='{$link}'>" . $matches[2] . "</span></{$matches[3]}>\n";
}

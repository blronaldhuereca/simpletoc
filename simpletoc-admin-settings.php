<?php

function simpletoc_add_settings_page() {
    add_options_page(
        __('SimpleTOC Settings', 'simpletoc'),
        __('SimpleTOC', 'simpletoc'),
        'manage_options',
        'simpletoc',
        'simpletoc_settings_page'
    );
}
add_action('admin_menu', 'simpletoc_add_settings_page');

function simpletoc_settings_page() {
    if (!current_user_can('manage_options')) {
        return;
    }
    ?>
    <div class="wrap">
        <h1><?php _e('SimpleTOC Global Settings', 'simpletoc'); ?></h1>
        <form method="post" action="options.php">
            <?php
                settings_fields('simpletoc_settings');
                do_settings_sections('simpletoc');
                submit_button();
            ?>
        </form>
    </div>
    <?php
}


// Wrap the settings registration in a function
function simpletoc_register_settings() {
    $wrapper_enabled_filter = apply_filters('simpletoc_wrapper_enabled', null);

    if ($wrapper_enabled_filter === null) {
        register_setting('simpletoc_settings', 'simpletoc_wrapper_enabled');
    }

    add_settings_section(
        'simpletoc_wrapper_section',
        __('Global settings', 'simpletoc'),
        'simpletoc_wrapper_section_callback',
        'simpletoc'
    );

    add_settings_field(
        'simpletoc_wrapper_enabled',
        __('Wrapper div', 'simpletoc'),
        'simpletoc_wrapper_enabled_callback',
        'simpletoc',
        'simpletoc_wrapper_section'
    );
}

// Hook the settings registration function to the 'admin_init' action
add_action('admin_init', 'simpletoc_register_settings');

function simpletoc_wrapper_section_callback() {
    $wrapper_enabled_filter = apply_filters('simpletoc_wrapper_enabled', null);
    echo '<p>' . __('Enforce these settings globally, ignoring any block-level configurations.', 'simpletoc') . '</p>';
}

function simpletoc_wrapper_enabled_callback() {
    $wrapper_enabled = get_option('simpletoc_wrapper_enabled', false);

    if (has_filter('simpletoc_wrapper_enabled')) {
        echo '<input type="checkbox" name="simpletoc_wrapper_enabled" id="simpletoc_wrapper_enabled" value="1" checked="checked" disabled="disabled" />';
        echo '<label for="simpletoc_wrapper_enabled" class="description">' . __('Setting controlled by "simpletoc_wrapper_enabled" filter. Remove filter to adjust setting.', 'simpletoc') . '</label>';
    } else {
        echo '<input type="checkbox" name="simpletoc_wrapper_enabled" id="simpletoc_wrapper_enabled" value="1" ' . checked(1, $wrapper_enabled, false) . ' />';
        echo '<label for="simpletoc_wrapper_enabled" class="description">' . __('Additionally adds the role "navigation" and ARIA attributes.', 'simpletoc') . '</label>';
    }
}

(()=>{"use strict";var e={n:t=>{var l=t&&t.__esModule?()=>t.default:()=>t;return e.d(l,{a:l}),l},d:(t,l)=>{for(var n in l)e.o(l,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:l[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=window.React,l=window.wp.blocks,n=JSON.parse('{"$schema":"https://json.schemastore.org/block.json","apiVersion":2,"name":"simpletoc/toc","version":"6.4.0","title":"SimpleTOC","category":"layout","icon":"<svg clip-rule=\'evenodd\' fill-rule=\'evenodd\' stroke-linejoin=\'round\' stroke-miterlimit=\'2\' viewBox=\'0 0 500 500\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'m365.983 78.248c2.72-32.415 29.921-57.908 63.029-57.908 34.91 0 63.253 28.342 63.253 63.252s-28.343 63.252-63.253 63.252v269.582c0 25.232-20.485 45.718-45.718 45.718h-313.62c-25.233 0-45.719-20.486-45.719-45.718v-292.46c0-25.233 20.486-45.718 45.719-45.718z\' fill=\'#070D0D\'/><g fill=\'#fff\'><path d=\'m423.898 112.744v-24.188h-24.008v-10.108h24.008v-24.008h10.229v24.008h24.008v10.108h-24.008v24.188z\'/><path d=\'m120.04 403.105c-16.883 0-30.511-13.719-30.511-30.714 0-16.79 13.628-30.714 30.511-30.714 16.679 0 30.511 13.924 30.511 30.714 0 16.995-13.832 30.714-30.511 30.714z\'/><path d=\'m170.891 362.153h183.063v20.476h-183.063z\'/><path d=\'m120.04 300.725c-16.883 0-30.511-13.719-30.511-30.714 0-16.79 13.628-30.714 30.511-30.714 16.679 0 30.511 13.924 30.511 30.714 0 16.995-13.832 30.714-30.511 30.714z\'/><path d=\'m170.891 259.773h183.063v20.476h-183.063z\'/><path d=\'m120.04 198.345c-16.883 0-30.511-13.719-30.511-30.714 0-16.791 13.628-30.714 30.511-30.714 16.679 0 30.511 13.923 30.511 30.714 0 16.995-13.832 30.714-30.511 30.714z\'/><path d=\'m170.891 157.393h183.063v20.476h-183.063z\'/></g></svg>","keywords":["TOC","Table of Contents","SimpleTOC","Index"],"supports":{"align":["wide","full"]},"description":"Adds a Table of Contents.","attributes":{"no_title":{"type":"boolean","default":false},"title_level":{"type":"integer","default":2},"title_text":{"type":"string"},"use_ol":{"type":"boolean","default":false},"remove_indent":{"type":"boolean","default":false},"add_smooth":{"type":"boolean","default":false},"use_absolute_urls":{"type":"boolean","default":false},"max_level":{"type":"integer","default":6},"min_level":{"type":"integer","default":1},"updated":{"type":"integer"},"accordion":{"type":"boolean","default":false},"hidden":{"type":"boolean","default":false},"wrapper":{"type":"boolean","default":false},"autoupdate":{"type":"boolean","default":true}},"textdomain":"simpletoc","editorScript":"file:index.js","editorStyle":"file:index.css"}'),o=window.wp.i18n,a=window.wp.element,i=window.wp.blockEditor,c=window.wp.editor,r=window.wp.serverSideRender;var s=e.n(r);const d=window.wp.primitives,m=(0,t.createElement)(d.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(d.Path,{d:"M11.1 15.8H20v-1.5h-8.9v1.5zm0-8.6v1.5H20V7.2h-8.9zM6 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"})),h=(0,t.createElement)(d.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(d.Path,{d:"M11.1 15.8H20v-1.5h-8.9v1.5zm0-8.6v1.5H20V7.2h-8.9zM5 6.7V10h1V5.3L3.8 6l.4 1 .8-.3zm-.4 5.7c-.3.1-.5.2-.7.3l.1 1.1c.2-.2.5-.4.8-.5.3-.1.6 0 .7.1.2.3 0 .8-.2 1.1-.5.8-.9 1.6-1.4 2.5h2.7v-1h-1c.3-.6.8-1.4.9-2.1.1-.3 0-.8-.2-1.1-.5-.6-1.3-.5-1.7-.4z"})),u=(0,t.createElement)(d.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(d.Path,{d:"M4 7.2v1.5h16V7.2H4zm8 8.6h8v-1.5h-8v1.5zm-4-4.6l-4 4 4 4 1-1-3-3 3-3-1-1z"})),v=(0,t.createElement)(d.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(d.Path,{d:"M4 7.2v1.5h16V7.2H4zm8 8.6h8v-1.5h-8v1.5zm-8-3.5l3 3-3 3 1 1 4-4-4-4-1 1z"})),p=(0,t.createElement)(d.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(d.Path,{d:"m11.3 17.2-5-5c-.1-.1-.1-.3 0-.4l2.3-2.3-1.1-1-2.3 2.3c-.7.7-.7 1.8 0 2.5l5 5H7.5v1.5h5.3v-5.2h-1.5v2.6zm7.5-6.4-5-5h2.7V4.2h-5.2v5.2h1.5V6.8l5 5c.1.1.1.3 0 .4l-2.3 2.3 1.1 1.1 2.3-2.3c.6-.7.6-1.9-.1-2.5z"})),_=window.wp.components;function g({level:e,isPressed:l=!1}){const n={0:"M18.3 4H9.9v-.1l-.9.2c-2.3.4-4 2.4-4 4.8s1.7 4.4 4 4.8l.7.1V20h1.5V5.5h2.9V20h1.5V5.5h2.7V4z",1:"M9 5h2v10H9v-4H5v4H3V5h2v4h4V5zm6.6 0c-.6.9-1.5 1.7-2.6 2v1h2v7h2V5h-1.4z",2:"M7 5h2v10H7v-4H3v4H1V5h2v4h4V5zm8 8c.5-.4.6-.6 1.1-1.1.4-.4.8-.8 1.2-1.3.3-.4.6-.8.9-1.3.2-.4.3-.8.3-1.3 0-.4-.1-.9-.3-1.3-.2-.4-.4-.7-.8-1-.3-.3-.7-.5-1.2-.6-.5-.2-1-.2-1.5-.2-.4 0-.7 0-1.1.1-.3.1-.7.2-1 .3-.3.1-.6.3-.9.5-.3.2-.6.4-.8.7l1.2 1.2c.3-.3.6-.5 1-.7.4-.2.7-.3 1.2-.3s.9.1 1.3.4c.3.3.5.7.5 1.1 0 .4-.1.8-.4 1.1-.3.5-.6.9-1 1.2-.4.4-1 .9-1.6 1.4-.6.5-1.4 1.1-2.2 1.6V15h8v-2H15z",3:"M12.1 12.2c.4.3.8.5 1.2.7.4.2.9.3 1.4.3.5 0 1-.1 1.4-.3.3-.1.5-.5.5-.8 0-.2 0-.4-.1-.6-.1-.2-.3-.3-.5-.4-.3-.1-.7-.2-1-.3-.5-.1-1-.1-1.5-.1V9.1c.7.1 1.5-.1 2.2-.4.4-.2.6-.5.6-.9 0-.3-.1-.6-.4-.8-.3-.2-.7-.3-1.1-.3-.4 0-.8.1-1.1.3-.4.2-.7.4-1.1.6l-1.2-1.4c.5-.4 1.1-.7 1.6-.9.5-.2 1.2-.3 1.8-.3.5 0 1 .1 1.6.2.4.1.8.3 1.2.5.3.2.6.5.8.8.2.3.3.7.3 1.1 0 .5-.2.9-.5 1.3-.4.4-.9.7-1.5.9v.1c.6.1 1.2.4 1.6.8.4.4.7.9.7 1.5 0 .4-.1.8-.3 1.2-.2.4-.5.7-.9.9-.4.3-.9.4-1.3.5-.5.1-1 .2-1.6.2-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1l1.1-1.4zM7 9H3V5H1v10h2v-4h4v4h2V5H7v4z",4:"M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm10-2h-1v2h-2v-2h-5v-2l4-6h3v6h1v2zm-3-2V7l-2.8 4H16z",5:"M12.1 12.2c.4.3.7.5 1.1.7.4.2.9.3 1.3.3.5 0 1-.1 1.4-.4.4-.3.6-.7.6-1.1 0-.4-.2-.9-.6-1.1-.4-.3-.9-.4-1.4-.4H14c-.1 0-.3 0-.4.1l-.4.1-.5.2-1-.6.3-5h6.4v1.9h-4.3L14 8.8c.2-.1.5-.1.7-.2.2 0 .5-.1.7-.1.5 0 .9.1 1.4.2.4.1.8.3 1.1.6.3.2.6.6.8.9.2.4.3.9.3 1.4 0 .5-.1 1-.3 1.4-.2.4-.5.8-.9 1.1-.4.3-.8.5-1.3.7-.5.2-1 .3-1.5.3-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1-.1-.1 1-1.5 1-1.5zM9 15H7v-4H3v4H1V5h2v4h4V5h2v10z",6:"M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm8.6-7.5c-.2-.2-.5-.4-.8-.5-.6-.2-1.3-.2-1.9 0-.3.1-.6.3-.8.5l-.6.9c-.2.5-.2.9-.2 1.4.4-.3.8-.6 1.2-.8.4-.2.8-.3 1.3-.3.4 0 .8 0 1.2.2.4.1.7.3 1 .6.3.3.5.6.7.9.2.4.3.8.3 1.3s-.1.9-.3 1.4c-.2.4-.5.7-.8 1-.4.3-.8.5-1.2.6-1 .3-2 .3-3 0-.5-.2-1-.5-1.4-.9-.4-.4-.8-.9-1-1.5-.2-.6-.3-1.3-.3-2.1s.1-1.6.4-2.3c.2-.6.6-1.2 1-1.6.4-.4.9-.7 1.4-.9.6-.3 1.1-.4 1.7-.4.7 0 1.4.1 2 .3.5.2 1 .5 1.4.8 0 .1-1.3 1.4-1.3 1.4zm-2.4 5.8c.2 0 .4 0 .6-.1.2 0 .4-.1.5-.2.1-.1.3-.3.4-.5.1-.2.1-.5.1-.7 0-.4-.1-.8-.4-1.1-.3-.2-.7-.3-1.1-.3-.3 0-.7.1-1 .2-.4.2-.7.4-1 .7 0 .3.1.7.3 1 .1.2.3.4.4.6.2.1.3.3.5.3.2.1.5.2.7.1z"};return n.hasOwnProperty(e)?(0,t.createElement)(_.SVG,{width:"24",height:"24",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",isPressed:l},(0,t.createElement)(_.Path,{d:n[e]})):null}const w=[0,1,2,3,4,5,6],b={className:"block-library-heading-level-dropdown"};function E({selectedLevel:e,onChange:l}){return(0,t.createElement)(_.ToolbarDropdownMenu,{popoverProps:b,icon:(0,t.createElement)(g,{level:e}),label:(0,o.__)("Change heading level tag"),controls:w.map((n=>{{const o=n===e;return{icon:(0,t.createElement)(g,{level:n,isPressed:o}),isActive:o,onClick(){l(n)}}}}))})}const f=window.wp.data,C=(0,t.createElement)("svg",{clipRule:"evenodd",fillRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:"2",viewBox:"0 0 500 500",xmlns:"http://www.w3.org/2000/svg"},(0,t.createElement)("path",{d:"m365.983 78.248c2.72-32.415 29.921-57.908 63.029-57.908 34.91 0 63.253 28.342 63.253 63.252s-28.343 63.252-63.253 63.252v269.582c0 25.232-20.485 45.718-45.718 45.718h-313.62c-25.233 0-45.719-20.486-45.719-45.718v-292.46c0-25.233 20.486-45.718 45.719-45.718zm-245.943 324.857c-16.883 0-30.511-13.719-30.511-30.714 0-16.79 13.628-30.714 30.511-30.714 16.679 0 30.511 13.924 30.511 30.714 0 16.995-13.832 30.714-30.511 30.714zm50.851-40.952h183.063v20.476h-183.063zm-50.851-61.428c-16.883 0-30.511-13.719-30.511-30.714 0-16.79 13.628-30.714 30.511-30.714 16.679 0 30.511 13.924 30.511 30.714 0 16.995-13.832 30.714-30.511 30.714zm50.851-40.952h183.063v20.476h-183.063zm-50.851-61.428c-16.883 0-30.511-13.719-30.511-30.714 0-16.791 13.628-30.714 30.511-30.714 16.679 0 30.511 13.923 30.511 30.714 0 16.995-13.832 30.714-30.511 30.714zm50.851-40.952h183.063v20.476h-183.063zm253.007-44.649v-24.188h-24.008v-10.108h24.008v-24.008h10.229v24.008h24.008v10.108h-24.008v24.188z"}));(0,l.registerBlockType)(n,{icon:C,edit:function({attributes:e,setAttributes:l}){const{hideTOC:n,hidden:r,accordion:d}=e;(0,a.useEffect)((()=>{void 0===n&&(r||d)&&l({hideTOC:!0})}),[]);const g=(0,i.useBlockProps)(),w=(0,f.useSelect)((e=>{const t=e("core").getSite()?.simpletoc_autoupdate_enabled;return 1!==Number(t)}),[]),{autoupdate:b}=e,{returnisSaving:C,returnisSavingNonPostEntityChanges:z}=(0,f.useSelect)((e=>{const{isSavingPost:t,isSavingNonPostEntityChanges:l}=e(c.store);return{returnisSaving:t(),returnisSavingNonPostEntityChanges:l()}})),H=(0,t.createElement)(i.BlockControls,{group:"block"},!(e.no_title||e.accordion||e.hidden)&&(0,t.createElement)(E,{selectedLevel:e.title_level,onChange:e=>l({title_level:Number(e)})}),(0,t.createElement)(_.ToolbarButton,{icon:m,title:(0,o.__)("Convert to unordered list","simpletoc"),describedBy:(0,o.__)("Convert to unordered list","simpletoc"),isActive:!1===e.use_ol,onClick:()=>{l({use_ol:!1})}}),(0,t.createElement)(_.ToolbarButton,{icon:h,title:(0,o.__)("Convert to ordered list","simpletoc"),describedBy:(0,o.__)("Convert to ordered list","simpletoc"),isActive:!0===e.use_ol,onClick:()=>{l({use_ol:!0})}}),(0,t.createElement)(_.ToolbarButton,{icon:u,title:(0,o.__)("Indent list","simpletoc"),describedBy:(0,o.__)("Indent list","simpletoc"),isActive:!0===e.remove_indent,onClick:()=>{l({remove_indent:!0})}}),(0,t.createElement)(_.ToolbarButton,{icon:v,title:(0,o.__)("Outdent list","simpletoc"),describedBy:(0,o.__)("Outdent list","simpletoc"),isActive:!1===e.remove_indent,onClick:()=>{l({remove_indent:!1})}}),(!e.autoupdate||!w)&&(0,t.createElement)(_.ToolbarButton,{icon:p,label:(0,o.__)("Update table of contents","simpletoc"),onClick:()=>l({updated:Date.now()})})),y=(0,t.createElement)(i.InspectorControls,null,(0,t.createElement)(_.Panel,null,(0,t.createElement)(_.PanelBody,null,!e.no_title&&(0,t.createElement)(_.PanelRow,null,(0,t.createElement)(_.TextControl,{label:(0,o.__)("Heading Text","simpletoc"),help:(0,o.__)("Set the heading text of the block.","simpletoc")+" "+(0,o.__)("Default value","simpletoc")+": "+(0,o.__)("Table of Contents","simpletoc"),value:e.title_text,onChange:e=>l({title_text:e||(0,o.__)("Table of Contents","simpletoc")})})),(0,t.createElement)(_.PanelRow,null,(0,t.createElement)(_.ToggleControl,{label:(0,o.__)("Remove heading","simpletoc"),checked:e.no_title,onChange:()=>l({no_title:!e.no_title})})),(0,t.createElement)(_.PanelRow,null,(0,t.createElement)(_.SelectControl,{label:(0,o.__)("Minimum level","simpletoc"),help:(0,o.__)("Minimum depth of the headings.","simpletoc"),value:e.min_level,options:[{label:(0,o.__)("Including","simpletoc")+" H6",value:"6"},{label:(0,o.__)("Including","simpletoc")+" H5",value:"5"},{label:(0,o.__)("Including","simpletoc")+" H4",value:"4"},{label:(0,o.__)("Including","simpletoc")+" H3",value:"3"},{label:(0,o.__)("Including","simpletoc")+" H2",value:"2"},{label:(0,o.__)("Including","simpletoc")+" H1 ("+(0,o.__)("default","simpletoc")+")",value:"1"}],onChange:e=>l({min_level:Number(e)})})),(0,t.createElement)(_.PanelRow,null,(0,t.createElement)(_.SelectControl,{label:(0,o.__)("Maximum level","simpletoc"),help:(0,o.__)("Maximum depth of the headings.","simpletoc"),value:e.max_level,options:[{label:(0,o.__)("Including","simpletoc")+" H6 ("+(0,o.__)("default","simpletoc")+")",value:"6"},{label:(0,o.__)("Including","simpletoc")+" H5",value:"5"},{label:(0,o.__)("Including","simpletoc")+" H4",value:"4"},{label:(0,o.__)("Including","simpletoc")+" H3",value:"3"},{label:(0,o.__)("Including","simpletoc")+" H2",value:"2"},{label:(0,o.__)("Including","simpletoc")+" H1",value:"1"}],onChange:e=>l({max_level:Number(e)})})))),(0,t.createElement)(_.Panel,null,(0,t.createElement)(_.PanelBody,{title:(0,o.__)("Advanced Features","simpletoc"),icon:"settings",initialOpen:!1},(0,t.createElement)(_.PanelRow,null,(0,t.createElement)("div",{style:{marginBottom:"1em",border:"1px solid rgba(0, 0, 0, 0.05)",padding:"0.5em",backgroundColor:"#f7f7f7"}},(0,t.createElement)("p",null,(0,t.createElement)("strong",null,(0,o.__)("Think about making a donation if you use any of these features.","simpletoc"))),(0,t.createElement)(_.ExternalLink,{href:"https://marc.tv/out/donate"},(0,o.__)("Donate here!","simpletoc")))),(0,t.createElement)(_.PanelRow,null,(0,t.createElement)(_.ToggleControl,{label:(0,o.__)("Hide SimpleTOC","simpletoc"),checked:e.hideTOC,onChange:e=>{l(e?{hideTOC:!0,hidden:!0}:{hideTOC:!1,hidden:!1,accordion:!1})}})),e.hideTOC&&(0,t.createElement)(_.PanelRow,null,(0,t.createElement)(_.RadioControl,{label:(0,o.__)("Type","simpletoc"),selected:e.hidden?"hidden":"accordion",options:[{label:"Hide with a clickable dropdown (using <details> tag).",value:"hidden"},{label:"Hide in accordion menu. Adds minimal JS and CSS.",value:"accordion"}],onChange:e=>{l({hidden:"hidden"===e,accordion:"accordion"===e})}})),(0,t.createElement)(_.PanelRow,null,(0,t.createElement)(_.ToggleControl,{label:(0,o.__)("Smooth scrolling support","simpletoc"),help:(0,o.__)('Adds the following CSS to the HTML element: "scroll-behavior: smooth;"',"simpletoc"),checked:e.add_smooth,onChange:()=>l({add_smooth:!e.add_smooth})})),(0,t.createElement)(_.PanelRow,null,(0,t.createElement)(_.ToggleControl,{label:(0,o.__)("Use absolute urls","simpletoc"),help:(0,o.__)("Adds the permalink url to the fragment.","simpletoc"),checked:e.use_absolute_urls,onChange:()=>l({use_absolute_urls:!e.use_absolute_urls})})),(0,t.createElement)(_.PanelRow,null,(0,t.createElement)(_.ToggleControl,{label:(0,o.__)("Wrapper div","simpletoc"),help:(0,o.__)('Additionally adds the role "navigation" and ARIA attributes.',"simpletoc"),checked:e.wrapper,onChange:()=>l({wrapper:!e.wrapper})})),(0,t.createElement)(_.PanelRow,null,(0,t.createElement)(_.ToggleControl,{label:(0,o.__)("Automatic refresh","simpletoc"),help:(0,o.__)("Automatic updating of the table of contents.","simpletoc"),checked:e.autoupdate,onChange:()=>l({autoupdate:!e.autoupdate})})))));return(0,t.createElement)("div",{...g},H,y,w&&b&&(C||z)?(0,t.createElement)(_.Spinner,null):(0,t.createElement)(s(),{block:"simpletoc/toc",attributes:e}))},save:function(){return null}})})();
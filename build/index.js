!function(){"use strict";var e={n:function(l){var t=l&&l.__esModule?function(){return l.default}:function(){return l};return e.d(t,{a:t}),t},d:function(l,t){for(var o in t)e.o(t,o)&&!e.o(l,o)&&Object.defineProperty(l,o,{enumerable:!0,get:t[o]})},o:function(e,l){return Object.prototype.hasOwnProperty.call(e,l)}};!function(e,l,t){var o=window.wp.element,n=window.wp.blocks,a=JSON.parse('{"$schema":"https://json.schemastore.org/block.json","apiVersion":2,"name":"simpletoc/toc","version":"5.0.7","title":"SimpleTOC","category":"layout","keywords":["TOC","Table of Contents","SimpleTOC","Inhaltsverzeichnis","Index"],"icon":"simpletocicon","description":"Adds a Table of Contents.","attributes":{"no_title":{"type":"boolean","default":false},"use_ol":{"type":"boolean","default":false},"remove_indent":{"type":"boolean","default":false},"add_smooth":{"type":"boolean","default":false},"use_absolute_urls":{"type":"boolean","default":false},"max_level":{"type":"integer","default":6}},"supports":{"align":["wide","full"]},"textdomain":"simpletoc","editorScript":"file:index.js","editorStyle":"file:editor.css"}'),s=window.wp.i18n,i=window.wp.blockEditor,c=window.wp.serverSideRender,r=t.n(c),m=window.wp.components;const u=(0,o.createElement)("svg",{"fill-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2",viewBox:"0 0 500 500",xmlns:"http://www.w3.org/2000/svg"},(0,o.createElement)("path",{d:"m365.983 78.248c2.72-32.415 29.921-57.908 63.029-57.908 34.91 0 63.253 28.342 63.253 63.252s-28.343 63.252-63.253 63.252v269.582c0 25.232-20.485 45.718-45.718 45.718h-313.62c-25.233 0-45.719-20.486-45.719-45.718v-292.46c0-25.233 20.486-45.718 45.719-45.718zm-245.943 324.857c-16.883 0-30.511-13.719-30.511-30.714 0-16.79 13.628-30.714 30.511-30.714 16.679 0 30.511 13.924 30.511 30.714 0 16.995-13.832 30.714-30.511 30.714zm50.851-40.952h183.063v20.476h-183.063zm-50.851-61.428c-16.883 0-30.511-13.719-30.511-30.714 0-16.79 13.628-30.714 30.511-30.714 16.679 0 30.511 13.924 30.511 30.714 0 16.995-13.832 30.714-30.511 30.714zm50.851-40.952h183.063v20.476h-183.063zm-50.851-61.428c-16.883 0-30.511-13.719-30.511-30.714 0-16.791 13.628-30.714 30.511-30.714 16.679 0 30.511 13.923 30.511 30.714 0 16.995-13.832 30.714-30.511 30.714zm50.851-40.952h183.063v20.476h-183.063zm253.007-44.649v-24.188h-24.008v-10.108h24.008v-24.008h10.229v24.008h24.008v10.108h-24.008v24.188z"}));(0,n.registerBlockType)(a,{icon:u,edit:function(e){let{attributes:l,setAttributes:t}=e;const n=(0,i.useBlockProps)();return(0,o.createElement)("div",n,(0,o.createElement)(i.InspectorControls,null,(0,o.createElement)(m.Panel,null,(0,o.createElement)(m.PanelBody,null,(0,o.createElement)(m.PanelRow,null,(0,o.createElement)(m.SelectControl,{label:(0,s.__)("Maximum Level","simpletoc"),help:(0,s.__)("Maximum depth of the headings.","simpletoc"),value:l.max_level,options:[{label:(0,s.__)("Including","simpletoc")+" H6 ("+(0,s.__)("Show all","simpletoc")+")",value:"6"},{label:(0,s.__)("Including","simpletoc")+" H5",value:"5"},{label:(0,s.__)("Including","simpletoc")+" H4",value:"4"},{label:(0,s.__)("Including","simpletoc")+" H3",value:"3"},{label:(0,s.__)("Including","simpletoc")+" H2",value:"2"}],onChange:e=>t({max_level:Number(e)})})),(0,o.createElement)(m.PanelRow,null,(0,o.createElement)(m.ToggleControl,{label:(0,s.__)("Remove heading","simpletoc"),help:(0,s.__)('Disable the "Table of contents" block heading and add your own heading block.',"simpletoc"),checked:l.no_title,onChange:()=>t({no_title:!l.no_title})})),(0,o.createElement)(m.PanelRow,null,(0,o.createElement)(m.ToggleControl,{label:(0,s.__)("Use an ordered list","simpletoc"),help:(0,s.__)("Replace the <ul> tag with an <ol> tag. This adds decimal numbers to each heading in the TOC.","simpletoc"),checked:l.use_ol,onChange:()=>t({use_ol:!l.use_ol})})),(0,o.createElement)(m.PanelRow,null,(0,o.createElement)(m.ToggleControl,{label:(0,s.__)("Remove list indent","simpletoc"),help:(0,s.__)("No bullet points or numbers at the first level.","simpletoc"),checked:l.remove_indent,onChange:()=>t({remove_indent:!l.remove_indent})})),(0,o.createElement)(m.PanelRow,null,(0,o.createElement)(m.ToggleControl,{label:(0,s.__)("Use absolute urls","simpletoc"),help:(0,s.__)("Adds the permalink url to the fragment.","simpletoc"),checked:l.use_absolute_urls,onChange:()=>t({use_absolute_urls:!l.use_absolute_urls})})),(0,o.createElement)(m.PanelRow,null,(0,o.createElement)(m.ToggleControl,{label:(0,s.__)("Smooth scrolling support","simpletoc"),help:(0,s.__)('Add the css class "smooth-scroll" to the links. This enables smooth scrolling in some themes like GeneratePress.',"simpletoc"),checked:l.add_smooth,onChange:()=>t({add_smooth:!l.add_smooth})}))))),(0,o.createElement)(i.BlockControls,null,(0,o.createElement)(m.ToolbarGroup,null,(0,o.createElement)(m.ToolbarButton,{className:"components-icon-button components-toolbar__control",label:(0,s.__)("Update table of contents","simpletoc"),onClick:()=>t({updated:Date.now()}),icon:"update"}))),(0,o.createElement)(r(),{block:"simpletoc/toc",attributes:l}))},save:function(e){let{attributes:l}=e;return null}})}(0,0,e)}();
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-03a06b9e"],{"0e4f":function(e,t,n){"use strict";n("c5b4")},"446e":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("label",{attrs:{for:e.slug}},[e._v(" "+e._s(e.label)),e.isRequired?n("span",{staticClass:"required"},[e._v("*")]):e._e()]),n("input",{attrs:{id:e.slug,type:"text",placeholder:e.placeholder,required:e.isRequired,disabled:e.disabled},domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target.value)}}}),e.note?n("small",{staticClass:"note"},[n("Markdown",{attrs:{content:e.note}})],1):e._e()])},i=[],s=n("2b0e"),l=n("84f8"),r=n("e6e0"),o=s["a"].extend({name:"TextInput",components:{Markdown:r["a"]},props:{label:{type:String,required:!0},value:{type:String,required:!0},placeholder:{type:String,required:!1},isRequired:{type:Boolean,required:!1},disabled:{type:Boolean,required:!1},note:{type:String,required:!1}},computed:{slug:function(){return Object(l["a"])("text",this.label,this.value)}}}),c=o,u=(n("6091"),n("2877")),d=Object(u["a"])(c,a,i,!1,null,"c1fbdf8e",null);t["a"]=d.exports},6091:function(e,t,n){"use strict";n("fae3")},8169:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-results"},[n("h2",[e._v("Output values")]),n("div",[n("h3",[e._v("Preview")]),n("Markdown",{attrs:{content:e.result}})],1),n("div",[n("h3",[e._v("Code")]),n("Code",{attrs:{code:e.result}})],1)])},i=[],s=n("2b0e"),l=n("1cf6"),r=n("e6e0"),o=s["a"].extend({name:"Results",components:{Markdown:r["a"],Code:l["a"]},props:{result:String}}),c=o,u=n("2877"),d=Object(u["a"])(c,a,i,!1,null,null,null);t["a"]=d.exports},"84f8":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));n("ac1f"),n("5319"),n("a15b");function a(e){return e.replace(/^\/+/,"")}function i(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var a=t.join("-");return a.replace(/^\s+|\s+$/g,"").toLowerCase().replace(/[^a-z0-9 -]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-")}},c5b4:function(e,t,n){},ca2c:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-notes"},[n("h2",[e._v("Notes")]),n("p",[n("Markdown",{attrs:{content:e.message}})],1)])},i=[],s=n("2b0e"),l=n("e6e0"),r=s["a"].extend({name:"Help",components:{Markdown:l["a"]},props:{message:String}}),o=r,c=n("2877"),u=Object(c["a"])(o,a,i,!1,null,null,null);t["a"]=u.exports},fae3:function(e,t,n){},feec:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"images container-lg"},[e._m(0),n("div",{staticClass:"row"},[n("div",{staticClass:"col-6"},[n("div",{staticClass:"app-input"},[n("h2",[e._v("Input values")]),n("form",{on:{submit:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.preventDefault(),e.submit(t))}}},[n("fieldset",{attrs:{name:"links"}},[n("legend",[e._v("Links")]),n("TextInput",{attrs:{label:"Source",placeholder:"e.g. /sample.png",note:"Local path or URL.",isRequired:""},model:{value:e.imgSrc,callback:function(t){e.imgSrc=t},expression:"imgSrc"}}),n("TextInput",{attrs:{label:"Click target",placeholder:"e.g. https://example.com",note:"Local path or external URL. Such as docs/ or link to project site."},model:{value:e.linkTarget,callback:function(t){e.linkTarget=t},expression:"linkTarget"}})],1),n("br"),n("fieldset",{attrs:{name:"text"}},[n("legend",[e._v("Text")]),n("TextInput",{attrs:{label:"Alt text",placeholder:"e.g. Sample screenshot",note:"Fallback image text on broken link. If not set, the image path will be used"},model:{value:e.altText,callback:function(t){e.altText=t},expression:"altText"}}),n("br"),n("TextInput",{attrs:{label:"Title",note:"Text to show on hover. If not set, then the alt text input's value will be used."},model:{value:e.imgTitle,callback:function(t){e.imgTitle=t},expression:"imgTitle"}})],1),n("br"),n("fieldset",{attrs:{id:"appearance"}},[n("legend",[e._v("Appearance")]),n("TextInput",{attrs:{label:"Width",placeholder:"e.g. 400",note:"Measured in pixels, but no px symbol is needed. If you set width only, then height will default to 'auto', which works well on mobile and desktop."},model:{value:e.width,callback:function(t){e.width=t},expression:"width"}}),n("br"),n("TextInput",{attrs:{label:"Height",placeholder:"e.g. 400",note:"Warning: You probably don't need to set height. If you set height but not width, then you might get a squashed image on mobile view."},model:{value:e.height,callback:function(t){e.height=t},expression:"height"}})],1),n("br"),n("input",{staticClass:"btn",attrs:{type:"submit",value:"Submit"}})])])]),n("div",{staticClass:"col-6"},[n("Results",{attrs:{result:e.result}})],1)]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("Help",{attrs:{message:e.helpMessage}})],1)])])},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("h1",[e._v("Image")]),n("p",[e._v(" Add an image to your README.md file, such as your logo or a sample screenshot of your app. This is just a badge section, but displaying an image using markdown and HTML. An image is provided to make it easier to test sizing, but this image will not be used when you reuse the code elsewhere. ")])])])}],s=(n("99af"),n("2b0e")),l=n("84f8"),r=n("ca2c"),o=n("8169"),c=n("446e"),u=n("7cba");function d(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=arguments.length>4?arguments[4]:void 0,s=arguments.length>5?arguments[5]:void 0,l=n?' title="'.concat(n,'"'):"",r=t?' alt="'.concat(t,'"'):"",o=i?' width="'.concat(i,'"'):"",c=s?' height="'.concat(s,'"'):"",u='<img src="'.concat(e,'"').concat(r).concat(l).concat(o).concat(c," />");return a&&(u='<a href="'.concat(a,'">\n    ').concat(u,"\n</a>")),u}var h="<p>\n  Styling has been setup so that images in the preview pane will not\n  extend beyond the width of the preview area, even no width or a\n  large width has been set.\n</p>\n<p>\n  Tip: Pressing the <kbd>Enter</kbd> key after updating a text field\n  will also submit.\n</p>\n<p>\n  Setting <i>width</i> and <i>height</i> is optional, but this can\n  help in certain cases. For example, a screenshot or logo will be set\n  by GitHub to <i>100%</i> of the page width making it look large and\n  take up vertical space, so reduce height or width manually.\n</p>\n<p>\n  Setting height can also make sure the height of the tag is set\n  before the image loads, so it reserves the space - if the height is\n  larger than the original image though then the image will looked\n  stretched.\n</p>\n<p>\n  Warning: If you set height only to say 400, then the image in the\n  README.md will look fine on desktop but ends up looking distorted on\n  mobile.\n</p>",p=s["a"].extend({name:"ImageView",components:{Help:r["a"],Results:o["a"],TextInput:c["a"]},data:function(){return{imgSrc:"/sample.png",linkTarget:"",altText:"Sample screenshot",imgTitle:"",width:"400",height:"",result:"_Your output will appear here_",helpMessage:h}},computed:{altTextOut:function(){return Object(l["b"])(this.altText||this.imgSrc)},imgTitleOut:function(){return Object(l["b"])(this.imgTitle||this.altText)}},methods:{submit:function(){console.debug("Process inputs and render results");var e=d(this.imgSrc,this.altTextOut,this.imgTitleOut,this.linkTarget,this.width,this.height),t=Object(u["a"])({altText:this.altTextOut,imageTarget:this.imgSrc,linkTarget:this.linkTarget,hoverTitle:this.imgTitleOut});this.result='_HTML image_\n\n<div align="center">\n    '.concat(e,'\n</div>\n\n\n_Markdown image_\n\n<div align="center">\n\n').concat(t,"\n\n</div>\n      ")}}}),g=p,m=(n("0e4f"),n("2877")),b=Object(m["a"])(g,a,i,!1,null,null,null);t["default"]=b.exports}}]);
//# sourceMappingURL=chunk-03a06b9e.8b1563e7.js.map
webpackJsonp([0],{0:function(e,t,r){e.exports=r(1)},1:function(e,t,r){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}var n=r(2),o=i(n),a=r(159),s=i(a),l=r(160);r(173),s["default"].render(o["default"].createElement(l.Works,null),document.querySelector(".app"))},160:function(e,t,r){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=function(){function e(e,t){var r=[],i=!0,n=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(i=(a=s.next()).done)&&(r.push(a.value),!t||r.length!==t);i=!0);}catch(l){n=!0,o=l}finally{try{!i&&s["return"]&&s["return"]()}finally{if(n)throw o}}return r}return function(t,r){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},c=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}();Object.defineProperty(t,"__esModule",{value:!0}),t.Works=void 0;var d=r(2),u=i(d),p=r(161),f=i(p),m=r(168),b=i(m),h=r(169),g=r(170),v=r(172),y=function(e){function t(e){n(this,t);var r=o(this,Object.getPrototypeOf(t).call(this,e));return r.state={isBannerActive:!1,isDemoActive:!1,demoZoomSrc:"",demoZoomDescription:""},r}return a(t,e),c(t,[{key:"render",value:function(){var e=this.props.workData;return u["default"].createElement("div",null,u["default"].createElement(h.WorkBanner,l({isBannerActive:this.state.isBannerActive,isDemoActive:this.state.isDemoActive,toggleActive:this.toggleActive.bind(this)},e.info)),u["default"].createElement(f["default"],{transitionName:"react",transitionEnterTimeout:700,transitionLeaveTimeout:700},this.state.isDemoActive&&u["default"].createElement(g.WorkDemo,{key:"WorkDemo",screenshots:e.screenshots,zoomIn:this.toggleDemoZoom.bind(this)}),this.state.demoZoomSrc&&u["default"].createElement(g.WorkDemoZoom,{key:this.state.demoZoomSrc,src:this.state.demoZoomSrc,description:this.state.demoZoomDescription,zoomOut:this.toggleDemoZoom.bind(this,"","")})))}},{key:"toggleActive",value:function(e){var t=this,r=this.state.isDemoActive?[700,0]:[0,700],i=s(r,2),n=i[0],o=i[1];setTimeout(function(){t.setState({isBannerActive:!t.state.isBannerActive})},n),setTimeout(function(){t.setState({isDemoActive:!t.state.isDemoActive})},o);var a=document.getElementById(e);a.removeAttribute("id"),window.location.hash=e,a.setAttribute("id",e)}},{key:"toggleDemoZoom",value:function(e,t){this.setState({demoZoomSrc:e,demoZoomDescription:t})}}]),t}(u["default"].Component);y.propTypes={workData:u["default"].PropTypes.object.isRequired};var _=function(e){return u["default"].createElement("div",{className:"footer vertically_center"},u["default"].createElement("span",{className:"footer__link text_uppercase"},u["default"].createElement("a",{href:"mailto:robertu0717@gmail.com",target:"_blank"},"EMAIL")),u["default"].createElement("span",{className:"footer__link text_uppercase"},u["default"].createElement("a",{href:"https://github.com/RoberMac",target:"_blank"},"GitHub")),u["default"].createElement("span",{className:"footer__link text_uppercase"},u["default"].createElement(v.ToggleText,{text:["Wechat","RoberMac"]})))};t.Works=function(e){var t=b["default"].map(function(e){return u["default"].createElement("div",{className:"work",key:e.info.screen_name,id:e.info.screen_name},u["default"].createElement(y,{workData:e}))});return u["default"].createElement("div",null,t,u["default"].createElement(_,null))}},168:function(e,t){e.exports=[{info:{name:"｜",screen_name:"Oneline",createdAt:14397408e5,description:"聚合 Twitter、Instagram 和 微博",website:"https://one---line.com",repository:"https://github.com/RoberMac/Oneline"},screenshots:[{description:"授權介面",id:"Oneline_0"},{description:"時間線",id:"Oneline_1"},{description:"用戶信息",id:"Oneline_2"},{description:"#標籤",id:"Oneline_3"},{description:"地理位置（微博）",id:"Oneline_4"},{description:"地理位置（Instagram）",id:"Oneline_5"},{description:"轉推",id:"Oneline_6"},{description:"寫推",id:"Oneline_7"},{description:"私信",id:"Oneline_8"}]},{info:{name:"新聞，舊聞。",screen_name:"ShinyaApp-News",createdAt:14341248e5,description:"",website:"http://news.shenyepoxiao.com",repository:"https://github.com/RoberMac/ShinyaApp-News"},screenshots:[{description:"「新聞，」",id:"ShinyaApp-News_0"},{description:"「舊聞。」",id:"ShinyaApp-News_1"},{description:"時光機",id:"ShinyaApp-News_2"},{description:"搜尋",id:"ShinyaApp-News_3"},{description:"RWD",id:"ShinyaApp-News_4"}]},{info:{name:"Pod Picker",screen_name:"PodPicker",createdAt:14323104e5,description:"A Podcast Timeline Generator",website:"https://robermac.github.io/PodPicker/",repository:"https://github.com/RoberMac/PodPicker"},screenshots:[{description:"FIRST CONTANT",id:"PodPicker_0"},{description:"THE PICKER'S GUIDE",id:"PodPicker_1"},{description:"POSTPICKER - 編輯",id:"PodPicker_2"},{description:"POSTPICKER - 預覽",id:"PodPicker_3"},{description:"POSTPICKER - 修改",id:"PodPicker_4"},{description:"POSTPICKER - 清空",id:"PodPicker_5"},{description:"POSTPICKER - 刪除",id:"PodPicker_6"},{description:"POSTPICKER - 導出",id:"PodPicker_7"}]},{info:{name:"深夜，破曉。",screen_name:"ShinyaApp",createdAt:14263488e5,description:"",website:"https://shenyepoxiao.com",repository:"https://github.com/RoberMac/ShinyaApp"},screenshots:[{description:"登入",id:"ShinyaApp_0"},{description:"尋找帳戶",id:"ShinyaApp_1"},{description:"提及",id:"ShinyaApp_2"},{description:"查看圖片",id:"ShinyaApp_3"},{description:"查看圖片",id:"ShinyaApp_4"},{description:"用戶信息",id:"ShinyaApp_5"},{description:"天氣",id:"ShinyaApp_6"},{description:"新聞",id:"ShinyaApp_7"},{description:"設置",id:"ShinyaApp_8"},{description:"RWD",id:"ShinyaApp_9"}]},{info:{name:"Doradidae",screen_name:"Doradidae",createdAt:14044032e5,description:"修改任何页面的文本",website:"http://robermac.github.io/Doradidae",repository:"https://github.com/RoberMac/Doradidae"},screenshots:[{description:"主頁一",id:"Doradidae_0"},{description:"主頁二",id:"Doradidae_1"},{description:"演示 - 支付寶",id:"Doradidae_2"},{description:"演示 - Apple",id:"Doradidae_3"}]}]},169:function(e,t,r){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.WorkBanner=void 0;var n=r(2),o=i(n),a=r(161),s=i(a),l=function(e){return o["default"].createElement("div",{className:"work__banner__description animate--general"},o["default"].createElement("p",null,e.description),o["default"].createElement("a",{href:e.website,target:"_blank"},o["default"].createElement("span",{className:"work__banner__link-btn work__banner__link-btn--red animate--faster"})),o["default"].createElement("a",{href:e.repository,target:"_blank"},o["default"].createElement("span",{className:"work__banner__link-btn work__banner__link-btn--blue animate--faster"})))};l.propTypes={description:o["default"].PropTypes.string.isRequired,website:o["default"].PropTypes.string.isRequired,repository:o["default"].PropTypes.string.isRequired};var c=t.WorkBanner=function(e){var t=e.screen_name,r=e.isBannerActive?"work__banner--active":"",i="work__banner "+r+" vertically_center animate--general",n="work__banner__logo work__banner__logo--"+t+" animate--general",a="/src/img/icon-sprites.svg#"+t;return o["default"].createElement("div",{className:i},o["default"].createElement("button",{className:n,onClick:e.toggleActive.bind(null,t),type:"button"},o["default"].createElement("svg",{viewBox:"0 0 100 100",className:"animate--general"},o["default"].createElement("use",{xlinkHref:a}))),o["default"].createElement(s["default"],{transitionName:"react",transitionEnterTimeout:700,transitionLeaveTimeout:700},e.isDemoActive?o["default"].createElement(l,e):null))};c.propTypes={screen_name:o["default"].PropTypes.string.isRequired,isBannerActive:o["default"].PropTypes.bool.isRequired,isDemoActive:o["default"].PropTypes.bool.isRequired,toggleActive:o["default"].PropTypes.func.isRequired}},170:function(e,t,r){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.WorkDemoZoom=t.WorkDemo=void 0;var n=r(2),o=i(n),a=r(171),s=i(a),l=t.WorkDemo=function(e){var t=e.screenshots.map(function(t){var r="/src/img/screenshots/large/"+t.id+".jpg",i="/src/img/screenshots/thumb/"+t.id+".jpg",n=t.description;return o["default"].createElement("img",{key:t.id,src:i,onClick:e.zoomIn.bind(null,r,n)})});return o["default"].createElement("div",{className:"work__demo overflow--x animate--general"},t)};l.propTypes={screenshots:o["default"].PropTypes.array.isRequired,zoomIn:o["default"].PropTypes.func.isRequired};var c=t.WorkDemoZoom=function(e){var t="work__demo--zoom__description "+(e.src.indexOf("PodPicker")>=0?"text_uppercase":"");return o["default"].createElement("div",{className:"work__demo--zoom animate--general",onClick:e.zoomOut},o["default"].createElement(s["default"],{type:"image",src:e.src}),o["default"].createElement("span",{className:t},e.description))};c.propTypes={zoomOut:o["default"].PropTypes.func.isRequired,src:o["default"].PropTypes.string.isRequired,description:o["default"].PropTypes.string.isRequired}},171:function(e,t,r){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}();Object.defineProperty(t,"__esModule",{value:!0});var l=r(2),c=i(l),d=function(e){function t(e){n(this,t);var r=o(this,Object.getPrototypeOf(t).call(this,e));return r.state={loadState:"loading"},r}return a(t,e),s(t,[{key:"render",value:function(){return c["default"].createElement("div",{className:"media vertically_center"},c["default"].createElement("div",{className:"spinner spinner--"+this.state.loadState}),"image"===this.props.type?c["default"].createElement("img",{style:{display:"loadFail"===this.state.loadState?"none":"initial"},onLoad:this.setLoadState.bind(this,"loaded"),onError:this.setLoadState.bind(this,"loadFail"),src:this.props.src}):c["default"].createElement("video",{style:{display:"loadFail"===this.state.loadState?"none":"initial"},onLoad:this.setLoadState.bind(this,"loaded"),onError:this.setLoadState.bind(this,"loadFail"),src:this.props.src}))}},{key:"setLoadState",value:function(e){this.setState({loadState:e})}}]),t}(c["default"].Component);t["default"]=d,d.propTypes={type:c["default"].PropTypes.oneOf(["image","video"]),src:c["default"].PropTypes.string.isRequired}},172:function(e,t,r){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=function(){function e(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,r,i){return r&&e(t.prototype,r),i&&e(t,i),t}}();Object.defineProperty(t,"__esModule",{value:!0}),t.ToggleText=void 0;var l=r(2),c=i(l),d=t.ToggleText=function(e){function t(e){n(this,t);var r=o(this,Object.getPrototypeOf(t).call(this,e));return r.state={currentText:e.text[0]},r}return a(t,e),s(t,[{key:"render",value:function(){return c["default"].createElement("span",{style:{cursor:"pointer"},onClick:this.toggleText.bind(this)},this.state.currentText)}},{key:"toggleText",value:function(){var e=this.props.text,t=e.length,r=e.indexOf(this.state.currentText),i=e[r>=t-1?0:r+1];this.setState({currentText:i})}}]),t}(c["default"].Component);d.propTypes={text:c["default"].PropTypes.arrayOf(c["default"].PropTypes.string)}},173:function(e,t,r){var i=r(174);"string"==typeof i&&(i=[[e.id,i,""]]);r(176)(i,{});i.locals&&(e.exports=i.locals)},174:function(e,t,r){t=e.exports=r(175)(),t.push([e.id,'a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:\'\';content:none}table{border-collapse:collapse;border-spacing:0}html{height:100%;overflow:hidden;background-color:#fff}body{font-family:Helvetica Neue,Palatino,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;font-size:14px;font-weight:400;-webkit-tap-highlight-color:transparent;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility}*{box-sizing:border-box}h1,h2,h3,h4,h5,h6{font-weight:600;margin:1em 0;text-align:center}h1{font-size:2em}h2{font-size:1.5em}h3{font-size:1.17em}h4{font-size:1.12em}h5{font-size:.83em}h6{font-size:.75em}a,a:visited{color:inherit;text-decoration:none;outline:none}svg{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-transform:translateZ(0);transform:translateZ(0)}::-webkit-scrollbar{width:0;height:0}::-webkit-scrollbar-thumb{background:#666;border-radius:1px}::-webkit-scrollbar-track{background:transparent}body{scrollbar-face-color:#666;scrollbar-track-color:transparent}.btn,button,input,select,textarea{display:inline-block;margin:0;padding:0;border:0;outline:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-radius:3px;letter-spacing:normal;word-spacing:normal;text-transform:none;text-indent:0;text-shadow:none;font-size:11px;text-rendering:auto;-webkit-writing-mode:horizontal-tb}textarea{display:block;padding:7px;resize:none;white-space:pre-wrap;word-wrap:break-word;font-family:inherit;font-size:inherit}.btn,button{background-color:transparent;cursor:pointer;text-align:center}img,video{border:none;outline:none}.vertically_center{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.animate--slower{-webkit-transition:all 1.7s cubic-bezier(.22,.61,.36,1);transition:all 1.7s cubic-bezier(.22,.61,.36,1)}.animate--general{-webkit-transition:all .7s cubic-bezier(.22,.61,.36,1);transition:all .7s cubic-bezier(.22,.61,.36,1)}.animate--faster{-webkit-transition:all .3s cubic-bezier(.22,.61,.36,1);transition:all .3s cubic-bezier(.22,.61,.36,1)}.animate--faster.react-enter,.animate--faster.react-leave.react-leave-active,.animate--general.react-enter,.animate--general.react-leave.react-leave-active{opacity:0}.animate--faster.react-enter.react-enter-active,.animate--faster.react-leave,.animate--general.react-enter.react-enter-active,.animate--general.react-leave{opacity:1}.overflow--x{overflow-x:auto;overflow-y:hidden}.overflow--x,.overflow--y{-webkit-overflow-scrolling:touch}.overflow--y{overflow-x:hidden;overflow-y:auto}.text_uppercase{letter-spacing:2px;text-transform:uppercase}@-webkit-keyframes podpicker{0%{opacity:1;filter:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feGaussianBlur stdDeviation="0" /></filter></svg>#filter\');-webkit-filter:blur(0);filter:blur(0)}to{opacity:0;filter:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feGaussianBlur stdDeviation="2" /></filter></svg>#filter\');-webkit-filter:blur(2px);filter:blur(2px)}}@keyframes podpicker{0%{opacity:1;filter:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feGaussianBlur stdDeviation="0" /></filter></svg>#filter\');-webkit-filter:blur(0);filter:blur(0)}to{opacity:0;filter:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feGaussianBlur stdDeviation="2" /></filter></svg>#filter\');-webkit-filter:blur(2px);filter:blur(2px)}}@-webkit-keyframes doradidae{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(5deg);transform:rotate(5deg)}}@keyframes doradidae{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(5deg);transform:rotate(5deg)}}@-webkit-keyframes spinnerLoading{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes spinnerLoading{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.app{top:0;right:0;position:absolute;width:100%;height:100%}.work{position:relative;width:100%;height:77vh;margin-bottom:3px;background-color:#f1f1f1}.work__banner{top:0;right:0;position:absolute;width:100%;height:100%;text-align:center}.work__banner--active{height:calc(63% - 7px)}.work__banner__logo svg{height:10vh}.work__banner__logo--Oneline svg{fill:#000}.work__banner__logo--Oneline:hover svg{-webkit-transform:scaleY(1.5);-ms-transform:scaleY(1.5);transform:scaleY(1.5)}.work__banner__logo--ShinyaApp-News svg{border:1px solid #000;border-radius:7px;background-color:#f1f1f1}.work__banner__logo--ShinyaApp-News:hover svg{background-color:#000}.work__banner__logo--PodPicker:hover svg{-webkit-animation:podpicker .7s infinite alternate linear;animation:podpicker .7s infinite alternate linear}.work__banner__logo--Doradidae:hover svg{-webkit-animation:doradidae .2s ease infinite alternate;animation:doradidae .2s ease infinite alternate}.work__banner__description{top:31.5vh;left:0;position:absolute;width:100%;font-size:14px;font-weight:100}.work__banner__link-btn{display:inline-block;width:17px;height:7px;margin:17px 3px;padding:3px;border-radius:3px;filter:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feColorMatrix type="matrix" color-interpolation-filters="sRGB" values="0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0" /></filter></svg>#filter\');-webkit-filter:grayscale(100%);filter:grayscale(100%)}.work__banner__link-btn--red{background-color:#e9392c}.work__banner__link-btn--blue{background-color:#3d57c7}.work__banner__link-btn:hover{filter:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feColorMatrix type="matrix" color-interpolation-filters="sRGB" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" /></filter></svg>#filter\');-webkit-filter:grayscale(0);filter:grayscale(0)}.work__demo{bottom:7px;position:absolute;width:100%;height:37%;white-space:nowrap}.work__demo img{height:100%;margin-right:7px;cursor:-webkit-zoom-in;cursor:zoom-in}.work__demo img:first-child{margin-left:7px}.work__demo--zoom{top:0;right:0;position:absolute;width:100%;height:100%;background-color:#000;background-color:rgba(0,0,0,.7);cursor:-webkit-zoom-out;cursor:zoom-out}.work__demo--zoom img,.work__demo--zoom video{max-height:97%;max-width:97%}.work__demo--zoom__description{right:7px;bottom:1.5%;position:absolute;padding:3px;font-size:12px;font-weight:100;color:#000;background-color:#cececf;border-radius:3px}.footer{position:relative;width:100%;height:23vh;background-color:#f1f1f1}.footer__link{display:inline-block;margin:0 7px;font-size:14px;font-weight:400;border-bottom:1px solid #000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.media{top:0;right:0;position:absolute;width:100%;height:100%}.spinner{top:calc(50% - 20px);right:calc(50% - 20px);width:40px;height:40px;margin:0 auto;border:1px solid #fff;border-radius:20px;-webkit-animation:spinnerLoading 1.7s infinite linear;animation:spinnerLoading 1.7s infinite linear}.spinner,.spinner:before{position:absolute;-webkit-transition:all 7.7s ease-in-out;transition:all 7.7s ease-in-out}.spinner:before{content:\'\';top:0;left:0;width:10px;height:10px;border-radius:5px;background-color:#f1f1f1}.spinner--loaded{display:none}.spinner--loadFail{border-color:#e6162d}.spinner--loadFail:before{top:-999px}@media (max-device-width:1024px),(max-width:1024px){.work__banner__link-btn{filter:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feColorMatrix type="matrix" color-interpolation-filters="sRGB" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" /></filter></svg>#filter\');-webkit-filter:grayscale(0);filter:grayscale(0)}}',""])},175:function(e,t){"use strict";e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var r=this[t];r[2]?e.push("@media "+r[2]+"{"+r[1]+"}"):e.push(r[1])}return e.join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},n=0;n<this.length;n++){var o=this[n][0];"number"==typeof o&&(i[o]=!0)}for(n=0;n<t.length;n++){var a=t[n];"number"==typeof a[0]&&i[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),e.push(a))}},e}},176:function(e,t,r){function i(e,t){for(var r=0;r<e.length;r++){var i=e[r],n=f[i.id];if(n){n.refs++;for(var o=0;o<n.parts.length;o++)n.parts[o](i.parts[o]);for(;o<i.parts.length;o++)n.parts.push(c(i.parts[o],t))}else{for(var a=[],o=0;o<i.parts.length;o++)a.push(c(i.parts[o],t));f[i.id]={id:i.id,refs:1,parts:a}}}}function n(e){for(var t=[],r={},i=0;i<e.length;i++){var n=e[i],o=n[0],a=n[1],s=n[2],l=n[3],c={css:a,media:s,sourceMap:l};r[o]?r[o].parts.push(c):t.push(r[o]={id:o,parts:[c]})}return t}function o(e,t){var r=h(),i=y[y.length-1];if("top"===e.insertAt)i?i.nextSibling?r.insertBefore(t,i.nextSibling):r.appendChild(t):r.insertBefore(t,r.firstChild),y.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");r.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=y.indexOf(e);t>=0&&y.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",o(e,t),t}function l(e){var t=document.createElement("link");return t.rel="stylesheet",o(e,t),t}function c(e,t){var r,i,n;if(t.singleton){var o=v++;r=g||(g=s(t)),i=d.bind(null,r,o,!1),n=d.bind(null,r,o,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=l(t),i=p.bind(null,r),n=function(){a(r),r.href&&URL.revokeObjectURL(r.href)}):(r=s(t),i=u.bind(null,r),n=function(){a(r)});return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else n()}}function d(e,t,r,i){var n=r?"":i.css;if(e.styleSheet)e.styleSheet.cssText=_(t,n);else{var o=document.createTextNode(n),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function u(e,t){var r=t.css,i=t.media;t.sourceMap;if(i&&e.setAttribute("media",i),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}function p(e,t){var r=t.css,i=(t.media,t.sourceMap);i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var n=new Blob([r],{type:"text/css"}),o=e.href;e.href=URL.createObjectURL(n),o&&URL.revokeObjectURL(o)}var f={},m=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},b=m(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),h=m(function(){return document.head||document.getElementsByTagName("head")[0]}),g=null,v=0,y=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=b()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var r=n(e);return i(r,t),function(e){for(var o=[],a=0;a<r.length;a++){var s=r[a],l=f[s.id];l.refs--,o.push(l)}if(e){var c=n(e);i(c,t)}for(var a=0;a<o.length;a++){var l=o[a];if(0===l.refs){for(var d=0;d<l.parts.length;d++)l.parts[d]();delete f[l.id]}}}};var _=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()}});
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4184:function(e,r){var t;!function(){"use strict";var n={}.hasOwnProperty;function c(){for(var e=[],r=0;r<arguments.length;r++){var t=arguments[r];if(t){var s=typeof t;if("string"===s||"number"===s)e.push(t);else if(Array.isArray(t)){if(t.length){var i=c.apply(null,t);i&&e.push(i)}}else if("object"===s)if(t.toString===Object.prototype.toString)for(var o in t)n.call(t,o)&&t[o]&&e.push(o);else e.push(t.toString())}}return e.join(" ")}e.exports?(c.default=c,e.exports=c):void 0===(t=function(){return c}.apply(r,[]))||(e.exports=t)}()},733:function(e,r,t){"use strict";t.d(r,{z:function(){return h}});var n=t(4942),c=t(4925),s=(t(7294),t(4184)),i=t.n(s),o=t(5893),a=["isLoading","href","className","children"];function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function h(e){var r=e.isLoading,t=e.href,n=e.className,s=e.children,l=(0,c.Z)(e,a),h=i()("ui-button",r&&"is-loading",n),f=(0,o.jsxs)(o.Fragment,{children:[r&&(0,o.jsx)("div",{className:"ui-spinner",children:(0,o.jsx)("div",{className:"ui-spinner-icon"})}),s]}),p=u({className:h,href:t||void 0},l);return t?(0,o.jsx)("a",u(u({},p),{},{children:f})):(0,o.jsx)("button",u(u({},p),{},{children:f}))}},1318:function(e,r,t){"use strict";t.d(r,{Z:function(){return N}});var n=t(5671),c=t(3144),s=t(9340),i=t(6215),o=t(1120),a=t(7294),l=t(9008),u=t(7326),h=t(4942),f=t(1664),p=t(4925),d=t(1163),j=t(5893),v=["router","children"];function m(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function x(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?m(Object(t),!0).forEach((function(r){(0,h.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var g=(0,d.withRouter)((function(e){var r=e.router,t=e.children,n=(0,p.Z)(e,v);return(0,j.jsx)(f.default,x(x({},n),{},{children:a.cloneElement(a.Children.only(t),{className:r.pathname===n.href?"is-active":null})}))}));var b=function(e){var r=e.isOpen,t=e.toggleMenu;return(0,j.jsxs)("nav",{className:r?"is-open":"",children:[(0,j.jsx)(g,{href:"/",children:(0,j.jsx)("a",{children:"01. Home."})}),(0,j.jsx)(g,{href:"/about",children:(0,j.jsx)("a",{children:"02. About."})}),(0,j.jsx)(g,{href:"/projects",children:(0,j.jsx)("a",{children:"03. Projects."})}),(0,j.jsx)(g,{href:"/contact",children:(0,j.jsx)("a",{children:"04. Contact."})}),(0,j.jsx)("div",{className:"header-nav-close",onClick:t})]})};function y(e){var r=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,n=(0,o.Z)(e);if(r){var c=(0,o.Z)(this).constructor;t=Reflect.construct(n,arguments,c)}else t=n.apply(this,arguments);return(0,i.Z)(this,t)}}var O=function(e){(0,s.Z)(t,e);var r=y(t);function t(){var e;(0,n.Z)(this,t);for(var c=arguments.length,s=new Array(c),i=0;i<c;i++)s[i]=arguments[i];return e=r.call.apply(r,[this].concat(s)),(0,h.Z)((0,u.Z)(e),"state",{isMenuOpen:!1}),(0,h.Z)((0,u.Z)(e),"toggleMenu",(function(){e.setState({isMenuOpen:!e.state.isMenuOpen})})),e}return(0,c.Z)(t,[{key:"render",value:function(){return(0,j.jsxs)("header",{children:[(0,j.jsx)(f.default,{href:"/",children:(0,j.jsxs)("div",{className:"header-logo",children:[(0,j.jsx)("span",{className:"accent-color",children:"vasil "}),"rimar",(0,j.jsx)("span",{className:"accent-color",children:"."})]})}),(0,j.jsx)(b,{isOpen:this.state.isMenuOpen,toggleMenu:this.toggleMenu}),(0,j.jsx)("div",{className:"header-menu-toggle",onClick:this.toggleMenu,children:(0,j.jsx)("svg",{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 294.843 294.843",children:(0,j.jsxs)("g",{children:[(0,j.jsx)("path",{d:"M147.421,0C66.133,0,0,66.133,0,147.421c0,40.968,17.259,80.425,47.351,108.255c2.433,2.25,6.229,2.101,8.479-0.331 c2.25-2.434,2.102-6.229-0.332-8.479C27.854,221.3,12,185.054,12,147.421C12,72.75,72.75,12,147.421,12 s135.421,60.75,135.421,135.421s-60.75,135.421-135.421,135.421c-3.313,0-6,2.687-6,6s2.687,6,6,6 c81.289,0,147.421-66.133,147.421-147.421S228.71,0,147.421,0z"}),(0,j.jsx)("path",{d:"M84.185,90.185h126.473c3.313,0,6-2.687,6-6s-2.687-6-6-6H84.185c-3.313,0-6,2.687-6,6S80.872,90.185,84.185,90.185z"}),(0,j.jsx)("path",{d:"M84.185,153.421h126.473c3.313,0,6-2.687,6-6s-2.687-6-6-6H84.185c-3.313,0-6,2.687-6,6S80.872,153.421,84.185,153.421z"}),(0,j.jsx)("path",{d:"M216.658,210.658c0-3.313-2.687-6-6-6H84.185c-3.313,0-6,2.687-6,6s2.687,6,6,6h126.473 C213.971,216.658,216.658,213.971,216.658,210.658z"})]})})})]})}}]),t}(a.Component),w=t(1516);function P(e){var r=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,n=(0,o.Z)(e);if(r){var c=(0,o.Z)(this).constructor;t=Reflect.construct(n,arguments,c)}else t=n.apply(this,arguments);return(0,i.Z)(this,t)}}var N=function(e){(0,s.Z)(t,e);var r=P(t);function t(){return(0,n.Z)(this,t),r.apply(this,arguments)}return(0,c.Z)(t,[{key:"componentDidMount",value:function(){w.ZP.initialize("UA-146807687-1"),w.ZP.pageview(window.location.pathname+window.location.search)}},{key:"render",value:function(){return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(l.default,{children:[(0,j.jsx)("title",{children:"Vasil Rimar -  Software Developer from Toronto"}),(0,j.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),(0,j.jsx)("link",{href:"https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,700",rel:"stylesheet"})]}),(0,j.jsx)("div",{className:" header-container container",children:(0,j.jsx)(O,{})}),(0,j.jsx)("div",{className:"bg"}),this.props.children]})}}]),t}(a.Component)},1316:function(e,r,t){"use strict";var n=t(4942),c=t(5893);function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}r.Z=function(e){return(0,c.jsxs)("div",i(i({className:"social-icons"},e),{},{children:[(0,c.jsx)("a",{className:"social-icon",href:"https://www.linkedin.com/in/vasil-rimar-06655459/",target:"_blank",children:(0,c.jsxs)("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[(0,c.jsx)("title",{children:"LinkedIn"}),(0,c.jsx)("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})]})}),(0,c.jsx)("a",{className:"social-icon",href:"https://github.com/vrimar",target:"_blank",children:(0,c.jsxs)("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[(0,c.jsx)("title",{children:"GitHub"}),(0,c.jsx)("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"})]})}),(0,c.jsx)("a",{className:"social-icon",href:"https://dribbble.com/vrimar",target:"_blank",children:(0,c.jsxs)("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:[(0,c.jsx)("title",{children:"Dribbble"}),(0,c.jsx)("path",{d:"M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"})]})})]}))}},6124:function(e,r,t){"use strict";t.r(r);t(1664);var n=t(1318),c=t(1316),s=t(733),i=t(5893);r.default=function(){return(0,i.jsx)(n.Z,{children:(0,i.jsx)("div",{className:"container home-container",children:(0,i.jsxs)("div",{className:"home-banner",children:[(0,i.jsxs)("h1",{children:[(0,i.jsx)("span",{className:"accent-color",children:"vasil "}),"rimar",(0,i.jsx)("span",{className:"accent-color",children:"."})]}),(0,i.jsx)("p",{children:"Software developer from Toronto"}),(0,i.jsxs)("p",{children:["Currently working with ",(0,i.jsx)("span",{className:"accent-color",children:"b3Intelligence"})]}),(0,i.jsxs)("div",{className:"home-banner-footer",children:[(0,i.jsx)(s.z,{href:"/contact",children:"Say hello"}),(0,i.jsx)(c.Z,{})]})]})})})}},8581:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(6124)}])}},function(e){e.O(0,[774,768,888,179],(function(){return r=8581,e(e.s=r);var r}));var r=e.O();_N_E=r}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{122:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(138),o=n(127),c=n(128),s=n(130);var u=function(e){var t=e.metadata;return r.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog list page navigation"},r.a.createElement("div",{className:"pagination-nav__item"},t.previous&&r.a.createElement(s.a,{className:"pagination-nav__link",to:t.previous.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},"Previous"),r.a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&r.a.createElement(s.a,{className:"pagination-nav__link",to:t.next.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},"Next"),r.a.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))},l=n(136);var d=function(){var e=Object(o.a)().siteConfig.title,t=Object(l.useActivePlugin)({failfast:!0}).pluginId,n=Object(l.useActiveVersion)(t),a=Object(l.useDocVersionSuggestions)(t),i=a.latestDocSuggestion,c=a.latestVersionSuggestion;if(!c)return r.a.createElement(r.a.Fragment,null);var u,d=null!=i?i:(u=c).docs.find((function(e){return e.id===u.mainDocId}));return r.a.createElement("div",{className:"alert alert--warning margin-bottom--md",role:"alert"},"current"===n.name?r.a.createElement("div",null,"This is unreleased documentation for ",e," ",r.a.createElement("strong",null,n.label)," version."):r.a.createElement("div",null,"This is documentation for ",e," ",r.a.createElement("strong",null,n.label),", which is no longer actively maintained."),r.a.createElement("div",{className:"margin-top--md"},"For up-to-date documentation, see the"," ",r.a.createElement("strong",null,r.a.createElement(s.a,{to:d.path},"latest version"))," ","(",c.label,")."))};var m=function(e,t,n){var r=Object(a.useState)(void 0),i=r[0],o=r[1];Object(a.useEffect)((function(){var a,r;function c(){var c=function(){var e=0,t=null;for(a=document.getElementsByClassName("anchor");e<a.length&&!t;){var r=a[e],i=r.getBoundingClientRect().top;i>=0&&i<=n&&(t=r),e+=1}return t}();if(c){var s=0,u=!1;for(r=document.getElementsByClassName(e);s<r.length&&!u;){var l=r[s],d=l.href,m=decodeURIComponent(d.substring(d.indexOf("#")+1));c.id===m&&(i&&i.classList.remove(t),l.classList.add(t),o(l),u=!0),s+=1}}}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),function(){document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}))},f=n(58),v=n.n(f),g="table-of-contents__link";function p(e){var t=e.headings,n=e.isChild;return t.length?r.a.createElement("ul",{className:n?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("a",{href:"#"+e.id,className:g,dangerouslySetInnerHTML:{__html:e.value}}),r.a.createElement(p,{isChild:!0,headings:e.children}))}))):null}var h=function(e){var t=e.headings;return m(g,"table-of-contents__link--active",100),r.a.createElement("div",{className:v.a.tableOfContents},r.a.createElement(p,{headings:t}))},E=n(131),b=n(59),w=n.n(b);t.default=function(e){var t,n=Object(o.a)().siteConfig,a=void 0===n?{}:n,s=a.url,m=a.title,f=e.content,v=f.metadata,g=v.description,p=v.title,b=v.permalink,O=v.editUrl,N=v.lastUpdatedAt,y=v.lastUpdatedBy,_=f.frontMatter,j=_.image,D=_.keywords,L=_.hide_title,V=_.hide_table_of_contents,x=Object(l.useActivePlugin)({failfast:!0}).pluginId,k=Object(l.useVersions)(x),A=Object(l.useActiveVersion)(x),C=k.length>1,P=p?p+" | "+m:m,S=Object(c.a)(j,{absolute:!0});return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null,r.a.createElement("title",null,P),r.a.createElement("meta",{property:"og:title",content:P}),g&&r.a.createElement("meta",{name:"description",content:g}),g&&r.a.createElement("meta",{property:"og:description",content:g}),D&&D.length&&r.a.createElement("meta",{name:"keywords",content:D.join(",")}),j&&r.a.createElement("meta",{property:"og:image",content:S}),j&&r.a.createElement("meta",{property:"twitter:image",content:S}),j&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+p}),b&&r.a.createElement("meta",{property:"og:url",content:s+b}),b&&r.a.createElement("link",{rel:"canonical",href:s+b})),r.a.createElement("div",{className:Object(E.a)("container padding-vert--lg",w.a.docItemWrapper)},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:Object(E.a)("col",(t={},t[w.a.docItemCol]=!V,t))},r.a.createElement(d,null),r.a.createElement("div",{className:w.a.docItemContainer},r.a.createElement("article",null,C&&r.a.createElement("div",null,r.a.createElement("span",{className:"badge badge--secondary"},"Version: ",A.label)),!L&&r.a.createElement("header",null,r.a.createElement("h1",{className:w.a.docTitle},p)),r.a.createElement("div",{className:"markdown"},r.a.createElement(f,null))),(O||N||y)&&r.a.createElement("div",{className:"margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},O&&r.a.createElement("a",{href:O,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("svg",{fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 40 40",style:{marginRight:"0.3em",verticalAlign:"sub"}},r.a.createElement("g",null,r.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"}))),"Edit this page")),(N||y)&&r.a.createElement("div",{className:"col text--right"},r.a.createElement("em",null,r.a.createElement("small",null,"Last updated"," ",N&&r.a.createElement(r.a.Fragment,null,"on"," ",r.a.createElement("time",{dateTime:new Date(1e3*N).toISOString(),className:w.a.docLastUpdatedAt},new Date(1e3*N).toLocaleDateString()),y&&" "),y&&r.a.createElement(r.a.Fragment,null,"by ",r.a.createElement("strong",null,y)),!1))))),r.a.createElement("div",{className:"margin-vert--lg"},r.a.createElement(u,{metadata:v})))),!V&&f.rightToc&&r.a.createElement("div",{className:"col col--3"},r.a.createElement(h,{headings:f.rightToc})))))}},127:function(e,t,n){"use strict";var a=n(0),r=n(20);t.a=function(){var e=Object(a.useContext)(r.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},128:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var a=n(127),r=n(129);function i(){var e=Object(a.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,o=i.forcePrependBaseUrl,c=void 0!==o&&o,s=i.absolute,u=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(c)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+l:l}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},129:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},130:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(13),o=n(129),c=n(10),s=Object(a.createContext)({collectLink:function(){}}),u=n(128),l=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};t.a=function(e){var t,n,d,m=e.isNavLink,f=e.to,v=e.href,g=e.activeClassName,p=e["data-noBrokenLinkCheck"],h=l(e,["isNavLink","to","href","activeClassName","data-noBrokenLinkCheck"]),E=Object(u.b)().withBaseUrl,b=Object(a.useContext)(s),w=f||v,O=Object(o.a)(w),N=null==w?void 0:w.replace("pathname://",""),y=void 0!==N?function(e){return e.startsWith("/")}(n=N)?E(n):n:void 0,_=Object(a.useRef)(!1),j=m?i.e:i.c,D=c.a.canUseIntersectionObserver;Object(a.useEffect)((function(){return!D&&O&&window.docusaurus.prefetch(y),function(){D&&d&&d.disconnect()}}),[y,D,O]);var L=null!==(t=null==y?void 0:y.startsWith("#"))&&void 0!==t&&t,V=!y||!O||L;return y&&O&&!L&&!p&&b.collectLink(y),V?r.a.createElement("a",Object.assign({href:y},!O&&{target:"_blank",rel:"noopener noreferrer"},h)):r.a.createElement(j,Object.assign({},h,{onMouseEnter:function(){_.current||(window.docusaurus.preload(y),_.current=!0)},innerRef:function(e){var t,n;D&&e&&O&&(t=e,n=function(){window.docusaurus.prefetch(y)},(d=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(t),d.disconnect(),n())}))}))).observe(t))},to:y||""},m&&{activeClassName:g}))}},131:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},133:function(e,t,n){"use strict";n.r(t);var a=n(13);n.d(t,"MemoryRouter",(function(){return a.d})),n.d(t,"Prompt",(function(){return a.f})),n.d(t,"Redirect",(function(){return a.g})),n.d(t,"Route",(function(){return a.h})),n.d(t,"Router",(function(){return a.i})),n.d(t,"StaticRouter",(function(){return a.j})),n.d(t,"Switch",(function(){return a.k})),n.d(t,"__RouterContext",(function(){return a.l})),n.d(t,"generatePath",(function(){return a.m})),n.d(t,"matchPath",(function(){return a.n})),n.d(t,"useHistory",(function(){return a.o})),n.d(t,"useLocation",(function(){return a.p})),n.d(t,"useParams",(function(){return a.q})),n.d(t,"useRouteMatch",(function(){return a.r})),n.d(t,"withRouter",(function(){return a.s})),n.d(t,"BrowserRouter",(function(){return a.a})),n.d(t,"HashRouter",(function(){return a.b})),n.d(t,"Link",(function(){return a.c})),n.d(t,"NavLink",(function(){return a.e}))},136:function(e,t,n){try{e.exports=n(140)}catch(a){e.exports={}}},140:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePlugin=void 0;var a=n(133),r=n(141),i=n(142),o=function(e){return r.usePluginData("docusaurus-plugin-content-docs",e)};t.useActivePlugin=function(e){void 0===e&&(e={});var t=r.useAllPluginInstancesData("docusaurus-plugin-content-docs"),n=a.useLocation().pathname;return i.getActivePlugin(t,n,e)},t.useVersions=function(e){return o(e).versions},t.useLatestVersion=function(e){var t=o(e);return i.getLatestVersion(t)},t.useActiveVersion=function(e){var t=o(e),n=a.useLocation().pathname;return i.getActiveVersion(t,n)},t.useActiveDocContext=function(e){var t=o(e),n=a.useLocation().pathname;return i.getActiveDocContext(t,n)},t.useDocVersionSuggestions=function(e){var t=o(e),n=a.useLocation().pathname;return i.getDocVersionSuggestions(t,n)}},141:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return r})),n.d(t,"useAllPluginInstancesData",(function(){return i})),n.d(t,"usePluginData",(function(){return o}));var a=n(127);function r(){var e=Object(a.a)().globalData;if(!e)throw new Error("Docusaurus global data not found");return e}function i(e){var t=r()[e];if(!t)throw new Error("Docusaurus plugin global data not found for pluginName="+e);return t}function o(e,t){void 0===t&&(t="default");var n=i(e)[t];if(!n)throw new Error("Docusaurus plugin global data not found for pluginName="+e+" and pluginId="+t);return n}},142:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;var a=n(133);t.getActivePlugin=function(e,t,n){void 0===n&&(n={});var r=Object.entries(e).find((function(e){e[0];var n=e[1];return!!a.matchPath(t,{path:n.path,exact:!1,strict:!1})})),i=r?{pluginId:r[0],pluginData:r[1]}:void 0;if(!i&&n.failfast)throw new Error("Can't find active docs plugin for pathname="+t+", while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: "+Object.values(e).map((function(e){return e.path})).join(", "));return i},t.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))},t.getActiveVersion=function(e,n){var r=t.getLatestVersion(e);return[].concat(e.versions.filter((function(e){return e!==r})),[r]).find((function(e){return!!a.matchPath(n,{path:e.path,exact:!1,strict:!1})}))},t.getActiveDocContext=function(e,n){var r,i,o=t.getActiveVersion(e,n),c=null==o?void 0:o.docs.find((function(e){return!!a.matchPath(n,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:o,activeDoc:c,alternateDocVersions:c?(r=c.id,i={},e.versions.forEach((function(e){e.docs.forEach((function(t){t.id===r&&(i[e.name]=t)}))})),i):{}}},t.getDocVersionSuggestions=function(e,n){var a=t.getLatestVersion(e),r=t.getActiveDocContext(e,n),i=r.activeVersion!==a;return{latestDocSuggestion:i?null==r?void 0:r.alternateDocVersions[a.name]:void 0,latestVersionSuggestion:i?a:void 0}}}}]);
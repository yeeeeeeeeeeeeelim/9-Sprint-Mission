(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(4938)}])},8121:function(e,t,r){"use strict";r.d(t,{P:function(){return throttle}});let throttle=(e,t)=>{let r;return n=>{r||(r=setTimeout(()=>{e(n),r=null},t))}}},7498:function(e,t){"use strict";var r,n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{PrefetchKind:function(){return r},ACTION_REFRESH:function(){return o},ACTION_NAVIGATE:function(){return i},ACTION_RESTORE:function(){return l},ACTION_SERVER_PATCH:function(){return a},ACTION_PREFETCH:function(){return u},ACTION_FAST_REFRESH:function(){return s},ACTION_SERVER_ACTION:function(){return c}});let o="refresh",i="navigate",l="restore",a="server-patch",u="prefetch",s="fast-refresh",c="server-action";(n=r||(r={})).AUTO="auto",n.FULL="full",n.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},30:function(e,t,r){"use strict";function getDomainLocale(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return getDomainLocale}}),r(2866),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3271:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return h}});let n=r(8754),o=r(1757),i=o._(r(7294)),l=n._(r(3935)),a=n._(r(9201)),u=r(3914),s=r(5494),c=r(869);r(1905);let f=r(1823),d=n._(r(4545)),p={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function handleLoading(e,t,r,n,o,i){let l=null==e?void 0:e.src;if(!e||e["data-loaded-src"]===l)return;e["data-loaded-src"]=l;let a="decode"in e?e.decode():Promise.resolve();a.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&o(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,o=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}})}function getDynamicProps(e){let[t,r]=i.version.split("."),n=parseInt(t,10),o=parseInt(r,10);return n>18||18===n&&o>=3?{fetchPriority:e}:{fetchpriority:e}}let g=(0,i.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:o,height:l,width:a,decoding:u,className:s,style:c,fetchPriority:f,placeholder:d,loading:p,unoptimized:g,fill:h,onLoadRef:m,onLoadingCompleteRef:v,setBlurComplete:_,setShowAltText:b,onLoad:y,onError:w,...P}=e;return i.default.createElement("img",{...P,...getDynamicProps(f),loading:p,width:a,height:l,decoding:u,"data-nimg":h?"fill":"1",className:s,style:c,sizes:o,srcSet:n,src:r,ref:(0,i.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(w&&(e.src=e.src),e.complete&&handleLoading(e,d,m,v,_,g))},[r,d,m,v,_,w,g,t]),onLoad:e=>{let t=e.currentTarget;handleLoading(t,d,m,v,_,g)},onError:e=>{b(!0),"empty"!==d&&_(!0),w&&w(e)}})});function ImagePreload(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...getDynamicProps(r.fetchPriority)};return t&&l.default.preload?(l.default.preload(r.src,n),null):i.default.createElement(a.default,null,i.default.createElement("link",{key:"__nimg-"+r.src+r.srcSet+r.sizes,rel:"preload",href:r.srcSet?void 0:r.src,...n}))}let h=(0,i.forwardRef)((e,t)=>{let r=(0,i.useContext)(f.RouterContext),n=(0,i.useContext)(c.ImageConfigContext),o=(0,i.useMemo)(()=>{let e=p||n||s.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[n]),{onLoad:l,onLoadingComplete:a}=e,h=(0,i.useRef)(l);(0,i.useEffect)(()=>{h.current=l},[l]);let m=(0,i.useRef)(a);(0,i.useEffect)(()=>{m.current=a},[a]);let[v,_]=(0,i.useState)(!1),[b,y]=(0,i.useState)(!1),{props:w,meta:P}=(0,u.getImgProps)(e,{defaultLoader:d.default,imgConf:o,blurComplete:v,showAltText:b});return i.default.createElement(i.default.Fragment,null,i.default.createElement(g,{...w,unoptimized:P.unoptimized,placeholder:P.placeholder,fill:P.fill,onLoadRef:h,onLoadingCompleteRef:m,setBlurComplete:_,setShowAltText:y,ref:t}),P.priority?i.default.createElement(ImagePreload,{isAppRouter:!r,imgAttributes:w}):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5170:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return _}});let n=r(8754),o=n._(r(7294)),i=r(4450),l=r(2227),a=r(4364),u=r(109),s=r(3607),c=r(1823),f=r(9031),d=r(920),p=r(30),g=r(7192),h=r(7498),m=new Set;function prefetch(e,t,r,n,o,i){if(!i&&!(0,l.isLocalURL)(t))return;if(!n.bypassPrefetchedCheck){let o=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,i=t+"%"+r+"%"+o;if(m.has(i))return;m.add(i)}let a=i?e.prefetch(t,o):e.prefetch(t,r,n);Promise.resolve(a).catch(e=>{})}function formatStringOrUrl(e){return"string"==typeof e?e:(0,a.formatUrl)(e)}let v=o.default.forwardRef(function(e,t){let r,n;let{href:a,as:m,children:v,prefetch:_=null,passHref:b,replace:y,shallow:w,scroll:P,locale:j,onClick:E,onMouseEnter:S,onTouchStart:C,legacyBehavior:O=!1,...x}=e;r=v,O&&("string"==typeof r||"number"==typeof r)&&(r=o.default.createElement("a",null,r));let I=o.default.useContext(c.RouterContext),R=o.default.useContext(f.AppRouterContext),M=null!=I?I:R,k=!I,N=!1!==_,A=null===_?h.PrefetchKind.AUTO:h.PrefetchKind.FULL,{href:L,as:z}=o.default.useMemo(()=>{if(!I){let e=formatStringOrUrl(a);return{href:e,as:m?formatStringOrUrl(m):e}}let[e,t]=(0,i.resolveHref)(I,a,!0);return{href:e,as:m?(0,i.resolveHref)(I,m):t||e}},[I,a,m]),T=o.default.useRef(L),D=o.default.useRef(z);O&&(n=o.default.Children.only(r));let H=O?n&&"object"==typeof n&&n.ref:t,[U,F,G]=(0,d.useIntersection)({rootMargin:"200px"}),B=o.default.useCallback(e=>{(D.current!==z||T.current!==L)&&(G(),D.current=z,T.current=L),U(e),H&&("function"==typeof H?H(e):"object"==typeof H&&(H.current=e))},[z,H,L,G,U]);o.default.useEffect(()=>{M&&F&&N&&prefetch(M,L,z,{locale:j},{kind:A},k)},[z,L,F,j,N,null==I?void 0:I.locale,M,k,A]);let W={ref:B,onClick(e){O||"function"!=typeof E||E(e),O&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),M&&!e.defaultPrevented&&function(e,t,r,n,i,a,u,s,c,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,r=t.getAttribute("target");return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,l.isLocalURL)(r)))return;e.preventDefault();let navigate=()=>{let e=null==u||u;"beforePopState"in t?t[i?"replace":"push"](r,n,{shallow:a,locale:s,scroll:e}):t[i?"replace":"push"](n||r,{forceOptimisticNavigation:!f,scroll:e})};c?o.default.startTransition(navigate):navigate()}(e,M,L,z,y,w,P,j,k,N)},onMouseEnter(e){O||"function"!=typeof S||S(e),O&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),M&&(N||!k)&&prefetch(M,L,z,{locale:j,priority:!0,bypassPrefetchedCheck:!0},{kind:A},k)},onTouchStart(e){O||"function"!=typeof C||C(e),O&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),M&&(N||!k)&&prefetch(M,L,z,{locale:j,priority:!0,bypassPrefetchedCheck:!0},{kind:A},k)}};if((0,u.isAbsoluteUrl)(z))W.href=z;else if(!O||b||"a"===n.type&&!("href"in n.props)){let e=void 0!==j?j:null==I?void 0:I.locale,t=(null==I?void 0:I.isLocaleDomain)&&(0,p.getDomainLocale)(z,e,null==I?void 0:I.locales,null==I?void 0:I.domainLocales);W.href=t||(0,g.addBasePath)((0,s.addLocale)(z,e,null==I?void 0:I.defaultLocale))}return O?o.default.cloneElement(n,W):o.default.createElement("a",{...x,...W},r)}),_=v;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},920:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return useIntersection}});let n=r(7294),o=r(3436),i="function"==typeof IntersectionObserver,l=new Map,a=[];function useIntersection(e){let{rootRef:t,rootMargin:r,disabled:u}=e,s=u||!i,[c,f]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);(0,n.useEffect)(()=>{if(i){if(s||c)return;let e=d.current;if(e&&e.tagName){let n=function(e,t,r){let{id:n,observer:o,elements:i}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=a.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=l.get(n)))return t;let o=new Map,i=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:i,elements:o},a.push(r),l.set(r,t),t}(r);return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),l.delete(n);let e=a.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:r});return n}}else if(!c){let e=(0,o.requestIdleCallback)(()=>f(!0));return()=>(0,o.cancelIdleCallback)(e)}},[s,r,t,c,d.current]);let g=(0,n.useCallback)(()=>{f(!1)},[]);return[p,c,g]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3914:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return getImgProps}}),r(1905);let n=r(2393),o=r(5494);function isStaticRequire(e){return void 0!==e.default}function getInt(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function getImgProps(e,t){var r;let i,l,a,{src:u,sizes:s,unoptimized:c=!1,priority:f=!1,loading:d,className:p,quality:g,width:h,height:m,fill:v=!1,style:_,onLoad:b,onLoadingComplete:y,placeholder:w="empty",blurDataURL:P,fetchPriority:j,layout:E,objectFit:S,objectPosition:C,lazyBoundary:O,lazyRoot:x,...I}=e,{imgConf:R,showAltText:M,blurComplete:k,defaultLoader:N}=t,A=R||o.imageConfigDefault;if("allSizes"in A)i=A;else{let e=[...A.deviceSizes,...A.imageSizes].sort((e,t)=>e-t),t=A.deviceSizes.sort((e,t)=>e-t);i={...A,allSizes:e,deviceSizes:t}}let L=I.loader||N;delete I.loader,delete I.srcSet;let z="__next_img_default"in L;if(z){if("custom"===i.loader)throw Error('Image with src "'+u+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=L;L=t=>{let{config:r,...n}=t;return e(n)}}if(E){"fill"===E&&(v=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[E];e&&(_={..._,...e});let t={responsive:"100vw",fill:"100vw"}[E];t&&!s&&(s=t)}let T="",D=getInt(h),H=getInt(m);if("object"==typeof(r=u)&&(isStaticRequire(r)||void 0!==r.src)){let e=isStaticRequire(u)?u.default:u;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(l=e.blurWidth,a=e.blurHeight,P=P||e.blurDataURL,T=e.src,!v){if(D||H){if(D&&!H){let t=D/e.width;H=Math.round(e.height*t)}else if(!D&&H){let t=H/e.height;D=Math.round(e.width*t)}}else D=e.width,H=e.height}}let U=!f&&("lazy"===d||void 0===d);(!(u="string"==typeof u?u:T)||u.startsWith("data:")||u.startsWith("blob:"))&&(c=!0,U=!1),i.unoptimized&&(c=!0),z&&u.endsWith(".svg")&&!i.dangerouslyAllowSVG&&(c=!0),f&&(j="high");let F=getInt(g),G=Object.assign(v?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:S,objectPosition:C}:{},M?{}:{color:"transparent"},_),B=k||"empty"===w?null:"blur"===w?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:D,heightInt:H,blurWidth:l,blurHeight:a,blurDataURL:P||"",objectFit:G.objectFit})+'")':'url("'+w+'")',W=B?{backgroundSize:G.objectFit||"cover",backgroundPosition:G.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:B}:{},K=function(e){let{config:t,src:r,unoptimized:n,width:o,quality:i,sizes:l,loader:a}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:u,kind:s}=function(e,t,r){let{deviceSizes:n,allSizes:o}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:o,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let i=[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))];return{widths:i,kind:"x"}}(t,o,l),c=u.length-1;return{sizes:l||"w"!==s?l:"100vw",srcSet:u.map((e,n)=>a({config:t,src:r,quality:i,width:e})+" "+("w"===s?e:n+1)+s).join(", "),src:a({config:t,src:r,quality:i,width:u[c]})}}({config:i,src:u,unoptimized:c,width:D,quality:F,sizes:s,loader:L}),V={...I,loading:U?"lazy":d,fetchPriority:j,width:D,height:H,decoding:"async",className:p,style:{...G,...W},sizes:K.sizes,srcSet:K.srcSet,src:K.src},q={unoptimized:c,priority:f,placeholder:w,fill:v};return{props:V,meta:q}}},2393:function(e,t){"use strict";function getImageBlurSvg(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:o,blurDataURL:i,objectFit:l}=e,a=n?40*n:t,u=o?40*o:r,s=a&&u?"viewBox='0 0 "+a+" "+u+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+s+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(s?"none":"contain"===l?"xMidYMid":"cover"===l?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+i+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return getImageBlurSvg}})},645:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{unstable_getImgProps:function(){return unstable_getImgProps},default:function(){return u}});let n=r(8754),o=r(3914),i=r(1905),l=r(3271),a=n._(r(4545)),unstable_getImgProps=e=>{(0,i.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,o.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},u=l.Image},4545:function(e,t){"use strict";function defaultLoader(e){let{config:t,src:r,width:n,quality:o}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),defaultLoader.__next_img_default=!0;let r=defaultLoader},4938:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return App}});var n=r(5893),o=r(5675),i=r.n(o),l=r(1664),a=r.n(l),u=r(4079),s=r.n(u),c=r(1163),f=r(7294),d=r(8121);function Header(){let e=(0,c.useRouter)(),t=e.pathname,r=t.startsWith("/boards"),o=window.innerWidth,[l,u]=(0,f.useState)(o);(0,f.useEffect)(()=>{let e=(0,d.P)(()=>{let e=window.innerWidth;u(e)},500);return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]);let p=l>=768?[153,51]:[81,40];return(0,n.jsx)("header",{className:s().header,children:(0,n.jsxs)("nav",{className:s().nav,children:[(0,n.jsxs)("div",{className:s().menu,children:[(0,n.jsx)(a(),{href:"/",children:(0,n.jsx)(i(),{src:l>=768?"/logo-big.png":"/logo-mobile.png",width:p[0],height:p[1],alt:"판다마켓"})}),(0,n.jsxs)("div",{className:s().category,children:[(0,n.jsx)(a(),{href:"/boards",className:"".concat(s()["category-item"]," ").concat(r?s().active:""),children:"자유게시판"}),(0,n.jsx)(a(),{href:"/",className:s()["category-item"],children:"중고마켓"})]})]}),(0,n.jsx)(i(),{src:"/user.png",width:40,height:40,alt:"프로필"})]})})}function App(e){let{Component:t,pageProps:r}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Header,{}),(0,n.jsx)(t,{...r})]})}r(415)},415:function(){},4079:function(e){e.exports={header:"Header_header__KwdYD",nav:"Header_nav__tNWGY",menu:"Header_menu__0AeTE",category:"Header_category__YGVNG","category-item":"Header_category-item__Zh0Cj",active:"Header_active__c7HdO"}},5675:function(e,t,r){e.exports=r(645)},1664:function(e,t,r){e.exports=r(5170)},1163:function(e,t,r){e.exports=r(9974)}},function(e){var __webpack_exec__=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return __webpack_exec__(6840),__webpack_exec__(9974)}),_N_E=e.O()}]);
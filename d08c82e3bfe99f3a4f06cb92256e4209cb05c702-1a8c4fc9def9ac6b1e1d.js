(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"9eSz":function(e,t,a){"use strict";var i=a("TqRt");t.__esModule=!0,t.default=void 0;var r,n=i(a("PJYZ")),s=i(a("VbXa")),d=i(a("8OQS")),o=i(a("pVnL")),l=i(a("q1tI")),u=i(a("17x9")),c=function(e){var t=(0,o.default)({},e),a=t.resolutions,i=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,a=e.fixed,i=g(t||a||[]);return i&&i.src},g=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},h=Object.create({}),m=function(e){var t=c(e),a=p(t);return h[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,S=y&&window.IntersectionObserver,v=new WeakMap;function w(e){return e.map((function(e){var t=e.src,a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},i&&l.default.createElement("source",{type:"image/webp",media:r,srcSet:i,sizes:n}),a&&l.default.createElement("source",{media:r,srcSet:a,sizes:n}))}))}function E(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function x(e){return e.map((function(e){var t=e.src,a=e.media,i=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:i})}))}function L(e){return e.map((function(e){var t=e.src,a=e.media,i=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:i})}))}function I(e,t){var a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?i:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var R=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),v.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return a&&(a.observe(e),v.set(e,t)),function(){a.unobserve(e),v.delete(e)}},O=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",d=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?I(e,!0):"")+I(e)})).join("")+"<img "+l+s+d+a+i+t+n+r+o+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},z=l.default.forwardRef((function(e,t){var a=e.src,i=e.imageVariants,r=e.generateSources,n=e.spreadProps,s=e.ariaHidden,d=l.default.createElement(V,(0,o.default)({ref:t,src:a},n,{ariaHidden:s}));return i.length>1?l.default.createElement("picture",null,r(i),d):d})),V=l.default.forwardRef((function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,n=e.style,s=e.onLoad,u=e.onError,c=e.loading,f=e.draggable,p=e.ariaHidden,g=(0,d.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,o.default)({"aria-hidden":p,sizes:a,srcSet:i,src:r},g,{onLoad:s,onError:u,ref:t,loading:c,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));V.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var C=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=y&&m(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&S&&!a.isCritical&&!a.seenBefore;var i=a.isCritical||y&&(b||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=l.default.createRef(),a.placeholderRef=t.placeholderRef||l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:y}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=R(e,(function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=c(e),(a=p(t))&&(h[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=c(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,s=e.imgStyle,d=void 0===s?{}:s,u=e.placeholderStyle,f=void 0===u?{}:u,p=e.placeholderClassName,h=e.fluid,m=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,S=e.Tag,v=e.itemProp,E=e.loading,I=e.draggable,R=h||m;if(!R)return null;var C=!1===this.state.fadeIn||this.state.imgLoaded,H=!0===this.state.fadeIn&&!this.state.imgCached,T=(0,o.default)({opacity:C?1:0,transition:H?"opacity "+y+"ms":"none"},d),k="boolean"==typeof b?"lightgray":b,q={transitionDelay:y+"ms"},N=(0,o.default)({opacity:this.state.imgLoaded?0:1},H&&q,d,f),j={title:t,alt:this.state.isVisible?"":a,style:N,className:p,itemProp:v},P=this.state.isHydrated?g(R):R[0];if(h)return l.default.createElement(S,{className:(i||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden",maxWidth:P.maxWidth?P.maxWidth+"px":null,maxHeight:P.maxHeight?P.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(P.srcSet)},l.default.createElement(S,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/P.aspectRatio+"%"}}),k&&l.default.createElement(S,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:k,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},H&&q)}),P.base64&&l.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:P.base64,spreadProps:j,imageVariants:R,generateSources:L}),P.tracedSVG&&l.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:P.tracedSVG,spreadProps:j,imageVariants:R,generateSources:x}),this.state.isVisible&&l.default.createElement("picture",null,w(R),l.default.createElement(V,{alt:a,title:t,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:E,draggable:I})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,o.default)({alt:a,title:t,loading:E},P,{imageVariants:R}))}}));if(m){var W=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:P.width,height:P.height},n);return"inherit"===n.display&&delete W.display,l.default.createElement(S,{className:(i||"")+" gatsby-image-wrapper",style:W,ref:this.handleRef,key:"fixed-"+JSON.stringify(P.srcSet)},k&&l.default.createElement(S,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:k,width:P.width,opacity:this.state.imgLoaded?0:1,height:P.height},H&&q)}),P.base64&&l.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:P.base64,spreadProps:j,imageVariants:R,generateSources:L}),P.tracedSVG&&l.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:P.tracedSVG,spreadProps:j,imageVariants:R,generateSources:x}),this.state.isVisible&&l.default.createElement("picture",null,w(R),l.default.createElement(V,{alt:a,title:t,width:P.width,height:P.height,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:E,draggable:I})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,o.default)({alt:a,title:t,loading:E},P,{imageVariants:R}))}}))}return null},t}(l.default.Component);C.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var H=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),T=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});function k(e){return function(t,a,i){var r;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+i+"`, but their values are both `undefined`.");u.default.checkPropTypes(((r={})[a]=e,r),t,"prop",i)}}C.propTypes={resolutions:H,sizes:T,fixed:k(u.default.oneOfType([H,u.default.arrayOf(H)])),fluid:k(u.default.oneOfType([T,u.default.arrayOf(T)])),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var q=C;t.default=q},HhSm:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var i=a("q1tI"),r=a.n(i),n=a("vOnD"),s=n.d.div.withConfig({displayName:"date__DateContainer",componentId:"qa61hb-0"})(["justify-content:center;flex-basis:90px;height:90px;width:90px;margin-right:32px;padding:16px;text-align:center;border-radius:2px;background:#07c;color:#fff;line-height:1.125;"]),d=n.d.span.withConfig({displayName:"date__MonthContainer",componentId:"qa61hb-1"})(["display:flex;justify-content:center;font-size:16px;text-transform:uppercase;letter-spacing:0.1em;}"]),o=n.d.span.withConfig({displayName:"date__DayContainer",componentId:"qa61hb-2"})(["display:flex;justify-content:center;font-size:32px;font-weight:700;letter-spacing:0.02em;margin-bottom:-4px;}"]),l=function(e){var t=e.date;if(!t)return null;var a=t.split(" ");return r.a.createElement(s,null,r.a.createElement(d,null,a[0]),r.a.createElement(o,null,a[1]))}}}]);
//# sourceMappingURL=d08c82e3bfe99f3a4f06cb92256e4209cb05c702-1a8c4fc9def9ac6b1e1d.js.map
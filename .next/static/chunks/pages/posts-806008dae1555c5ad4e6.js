_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"52dC":function(t,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts",function(){return i("gnXo")}])},"8OQS":function(t,e){t.exports=function(t,e){if(null==t)return{};var i,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)i=r[n],e.indexOf(i)>=0||(o[i]=t[i]);return o}},Aiso:function(t,e,i){t.exports=i("dQHF")},"Gf/z":function(t,e,i){t.exports={post:"post-item_post__3XTCn",image:"post-item_image__1Nx-U",content:"post-item_content__3VHsU"}},HWtI:function(t,e,i){t.exports={grid:"post-grid_grid__2U48e"}},UWYU:function(t,e,i){"use strict";e.__esModule=!0,e.imageConfigDefault=e.VALID_LOADERS=void 0;e.VALID_LOADERS=["default","imgix","cloudinary","akamai"];e.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[]}},VsDU:function(t,e,i){t.exports={posts:"all-posts_posts__XRtru"}},dEHY:function(t,e,i){"use strict";e.__esModule=!0,e.toBase64=function(t){return window.btoa(t)}},dQHF:function(t,e,i){"use strict";var n=i("J4zp"),o=i("RIqP"),r=i("TqRt");e.__esModule=!0,e.default=function(t){var e=t.src,i=t.sizes,r=t.unoptimized,s=void 0!==r&&r,u=t.priority,p=void 0!==u&&u,g=t.loading,h=t.className,b=t.quality,v=t.width,y=t.height,_=t.objectFit,A=t.objectPosition,z=t.loader,O=void 0===z?w:z,S=(0,a.default)(t,["src","sizes","unoptimized","priority","loading","className","quality","width","height","objectFit","objectPosition","loader"]),E=i?"responsive":"intrinsic",k=!1;"unsized"in S?(k=Boolean(S.unsized),delete S.unsized):"layout"in S&&(S.layout&&(E=S.layout),delete S.layout);0;var N=!p&&("lazy"===g||"undefined"===typeof g);e&&e.startsWith("data:")&&(s=!0,N=!1);var q,D,I,U=(0,f.useIntersection)({rootMargin:"200px",disabled:!N}),H=n(U,2),L=H[0],P=H[1],R=!N||P,W=j(v),B=j(y),V=j(b),C={visibility:R?"inherit":"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:_,objectPosition:A};if("undefined"!==typeof W&&"undefined"!==typeof B&&"fill"!==E){var F=B/W,X=isNaN(F)?"100%":"".concat(100*F,"%");"responsive"===E?(q={display:"block",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},D={display:"block",boxSizing:"border-box",paddingTop:X}):"intrinsic"===E?(q={display:"inline-block",maxWidth:"100%",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},D={boxSizing:"border-box",display:"block",maxWidth:"100%"},I='<svg width="'.concat(W,'" height="').concat(B,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===E&&(q={overflow:"hidden",boxSizing:"border-box",display:"inline-block",position:"relative",width:W,height:B})}else"undefined"===typeof W&&"undefined"===typeof B&&"fill"===E&&(q={display:"block",overflow:"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",margin:0});var M={src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",srcSet:void 0,sizes:void 0};R&&(M=function(t){var e=t.src,i=t.unoptimized,n=t.layout,r=t.width,a=t.quality,s=t.sizes,c=t.loader;if(i)return{src:e,srcSet:void 0,sizes:void 0};var d=function(t,e){if("number"!==typeof t||"fill"===e||"responsive"===e)return{widths:m,kind:"w"};return{widths:o(new Set([t,2*t].map((function(t){return x.find((function(e){return e>=t}))||x[x.length-1]})))),kind:"x"}}(r,n),l=d.widths,u=d.kind,f=l.length-1;return{src:c({src:e,quality:a,width:l[f]}),sizes:s||"w"!==u?s:"100vw",srcSet:l.map((function(t,i){return"".concat(c({src:e,quality:a,width:t})," ").concat("w"===u?t:i+1).concat(u)})).join(", ")}}({src:e,unoptimized:s,layout:E,width:W,quality:V,sizes:i,loader:O}));k&&(q=void 0,D=void 0,C=void 0);return c.default.createElement("div",{style:q},D?c.default.createElement("div",{style:D},I?c.default.createElement("img",{style:{maxWidth:"100%",display:"block",margin:0,border:"none",padding:0},alt:"","aria-hidden":!0,role:"presentation",src:"data:image/svg+xml;base64,".concat((0,l.toBase64)(I))}):null):null,c.default.createElement("img",Object.assign({},S,M,{decoding:"async",className:h,ref:L,style:C})),p?c.default.createElement(d.default,null,c.default.createElement("link",{key:"__nimg-"+M.src+M.srcSet+M.sizes,rel:"preload",as:"image",href:M.srcSet?void 0:M.src,imagesrcset:M.srcSet,imagesizes:M.sizes})):null)};var a=r(i("8OQS")),s=r(i("pVnL")),c=r(i("q1tI")),d=r(i("8Kt/")),l=i("dEHY"),u=i("UWYU"),f=i("vNVm");var p=new Map([["imgix",function(t){var e=t.root,i=t.src,n=t.width,o=t.quality,r=["auto=format","fit=max","w="+n],a="";o&&r.push("q="+o);r.length&&(a="?"+r.join("&"));return"".concat(e).concat(y(i)).concat(a)}],["cloudinary",function(t){var e=t.root,i=t.src,n=t.width,o=t.quality,r=["f_auto","c_limit","w_"+n,"q_"+(o||"auto")].join(",")+"/";return"".concat(e).concat(r).concat(y(i))}],["akamai",function(t){var e=t.root,i=t.src,n=t.width;return"".concat(e).concat(y(i),"?imwidth=").concat(n)}],["default",function(t){var e=t.root,i=t.src,n=t.width,o=t.quality;0;return"".concat(e,"?url=").concat(encodeURIComponent(i),"&w=").concat(n,"&q=").concat(o||75)}]]),g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default"}||u.imageConfigDefault,m=g.deviceSizes,h=g.imageSizes,b=g.loader,v=g.path,x=(g.domains,[].concat(o(m),o(h)));function j(t){return"number"===typeof t?t:"string"===typeof t?parseInt(t,10):void 0}function w(t){var e=p.get(b);if(e)return e((0,s.default)({root:v},t));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(u.VALID_LOADERS.join(", "),". Received: ").concat(b))}function y(t){return"/"===t[0]?t.slice(1):t}m.sort((function(t,e){return t-e})),x.sort((function(t,e){return t-e}))},gnXo:function(t,e,i){"use strict";i.r(e),i.d(e,"__N_SSG",(function(){return l}));var n=i("nKUr"),o=i("g4pe"),r=i.n(o),a=i("VsDU"),s=i.n(a),c=i("leBI"),d=function(t){return Object(n.jsxs)("section",{className:s.a.posts,children:[Object(n.jsx)("h1",{children:"All posts"}),Object(n.jsx)(c.a,{posts:t.posts})]})},l=!0;e.default=function(t){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)(r.a,{children:[Object(n.jsx)("title",{children:"All Posts"}),Object(n.jsx)("meta",{name:"description",content:"A list of all programming-related tutorials and posts"})]}),Object(n.jsx)(d,{posts:t.allPosts})]})}},leBI:function(t,e,i){"use strict";var n=i("nKUr"),o=i("Gf/z"),r=i.n(o),a=i("YFqc"),s=i.n(a),c=i("Aiso"),d=i.n(c),l=function(t){var e=t.post,i=e.title,o=e.image,a=e.excerpt,c=e.date,l=e.slug,u=new Date(c).toLocaleDateString("en-US",{day:"numeric",month:"long",year:"numeric"}),f="/images/posts/".concat(l,"/").concat(o),p="/posts/".concat(l);return Object(n.jsx)("li",{className:r.a.post,children:Object(n.jsx)(s.a,{href:p,children:Object(n.jsxs)("a",{children:[Object(n.jsx)("div",{className:r.a.image,children:Object(n.jsx)(d.a,{src:f,alt:i,width:300,height:200,layout:"responsive"})}),Object(n.jsxs)("div",{className:r.a.content,children:[Object(n.jsx)("h3",{children:i}),Object(n.jsx)("time",{children:u}),Object(n.jsx)("p",{children:a})]})]})})})},u=i("HWtI"),f=i.n(u);e.a=function(t){var e=t.posts;return Object(n.jsx)("ul",{className:f.a.grid,children:e.map((function(t){return Object(n.jsx)(l,{post:t},t.slug)}))})}},pVnL:function(t,e){function i(){return t.exports=i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},i.apply(this,arguments)}t.exports=i}},[["52dC",0,1,2,3,4]]]);
_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"52dC":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts",function(){return n("gnXo")}])},"Gf/z":function(e,t,n){e.exports={post:"post-item_post__3XTCn",image:"post-item_image__1Nx-U",content:"post-item_content__3VHsU"}},HWtI:function(e,t,n){e.exports={grid:"post-grid_grid__2U48e"}},VsDU:function(e,t,n){e.exports={posts:"all-posts_posts__XRtru"}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var o=n("J4zp"),s=n("284h");t.__esModule=!0,t.default=void 0;var c=s(n("q1tI")),r=n("elyg"),a=n("nOHt"),l=n("vNVm"),i={};function u(e,t,n,o){if(e&&(0,r.isLocalURL)(t)){e.prefetch(t,n,o).catch((function(e){0}));var s=o&&"undefined"!==typeof o.locale?o.locale:e&&e.locale;i[t+"%"+n+(s?"%"+s:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,a.useRouter)(),s=n&&n.pathname||"/",f=c.default.useMemo((function(){var t=(0,r.resolveHref)(s,e.href,!0),n=o(t,2),c=n[0],a=n[1];return{href:c,as:e.as?(0,r.resolveHref)(s,e.as):a||c}}),[s,e.href,e.as]),p=f.href,d=f.as,h=e.children,j=e.replace,m=e.shallow,_=e.scroll,g=e.locale;"string"===typeof h&&(h=c.default.createElement("a",null,h));var v=c.Children.only(h),x=v&&"object"===typeof v&&v.ref,b=(0,l.useIntersection)({rootMargin:"200px"}),O=o(b,2),y=O[0],w=O[1],N=c.default.useCallback((function(e){y(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,y]);(0,c.useEffect)((function(){var e=w&&t&&(0,r.isLocalURL)(p),o="undefined"!==typeof g?g:n&&n.locale,s=i[p+"%"+d+(o?"%"+o:"")];e&&!s&&u(n,p,d,{locale:o})}),[d,p,w,g,t,n]);var E={ref:N,onClick:function(e){v.props&&"function"===typeof v.props.onClick&&v.props.onClick(e),e.defaultPrevented||function(e,t,n,o,s,c,a,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,r.isLocalURL)(n))&&(e.preventDefault(),null==a&&(a=o.indexOf("#")<0),t[s?"replace":"push"](n,o,{shallow:c,locale:l,scroll:a}).then((function(e){e&&a&&document.body.focus()})))}(e,n,p,d,j,m,_,g)},onMouseEnter:function(e){(0,r.isLocalURL)(p)&&(v.props&&"function"===typeof v.props.onMouseEnter&&v.props.onMouseEnter(e),u(n,p,d,{priority:!0}))}};if(e.passHref||"a"===v.type&&!("href"in v.props)){var L="undefined"!==typeof g?g:n&&n.locale,U=(0,r.getDomainLocale)(d,L,n&&n.locales,n&&n.domainLocales);E.href=U||(0,r.addBasePath)((0,r.addLocale)(d,L,n&&n.defaultLocale))}return c.default.cloneElement(v,E)};t.default=f},g4pe:function(e,t,n){e.exports=n("8Kt/")},gnXo:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return u}));var o=n("nKUr"),s=n("g4pe"),c=n.n(s),r=n("VsDU"),a=n.n(r),l=n("leBI"),i=function(e){return Object(o.jsxs)("section",{className:a.a.posts,children:[Object(o.jsx)("h1",{children:"All posts"}),Object(o.jsx)(l.a,{posts:e.posts})]})},u=!0;t.default=function(e){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)(c.a,{children:[Object(o.jsx)("title",{children:"All Posts"}),Object(o.jsx)("meta",{name:"description",content:"A list of all programming-related tutorials and posts"})]}),Object(o.jsx)(i,{posts:e.allPosts})]})}},leBI:function(e,t,n){"use strict";var o=n("nKUr"),s=n("Gf/z"),c=n.n(s),r=n("YFqc"),a=n.n(r),l=n("Aiso"),i=n.n(l),u=function(e){var t=e.post,n=t.title,s=t.image,r=t.excerpt,l=t.date,u=t.slug,f=new Date(l).toLocaleDateString("en-US",{day:"numeric",month:"long",year:"numeric"}),p="/images/posts/".concat(u,"/").concat(s),d="/posts/".concat(u);return Object(o.jsx)("li",{className:c.a.post,children:Object(o.jsx)(a.a,{href:d,children:Object(o.jsxs)("a",{children:[Object(o.jsx)("div",{className:c.a.image,children:Object(o.jsx)(i.a,{src:p,alt:n,width:300,height:200,layout:"responsive"})}),Object(o.jsxs)("div",{className:c.a.content,children:[Object(o.jsx)("h3",{children:n}),Object(o.jsx)("time",{children:f}),Object(o.jsx)("p",{children:r})]})]})})})},f=n("HWtI"),p=n.n(f);t.a=function(e){var t=e.posts;return Object(o.jsx)("ul",{className:p.a.grid,children:t.map((function(e){return Object(o.jsx)(u,{post:e},e.slug)}))})}}},[["52dC",0,1,2,3,4]]]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{145:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return f});var r=a(7),n=a.n(r),i=a(0),s=a.n(i),o=a(148),l=a(157),d=a(152),c=a(153),u=a(149),A=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title,a=e.allMarkdownRemark.edges;return s.a.createElement(d.a,{location:this.props.location,title:t},s.a.createElement(c.a,{title:"博客首页",keywords:["blog","gatsby","javascript","react"]}),s.a.createElement(l.a,null),a.map(function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug;return s.a.createElement("div",{key:t.fields.slug},s.a.createElement("h3",{style:{marginBottom:Object(u.a)(.25)}},s.a.createElement(o.Link,{style:{boxShadow:"none"},to:t.fields.slug},a)),s.a.createElement("small",null,t.frontmatter.date),s.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.excerpt}}))}))},t}(s.a.Component);t.default=A;var f="1623555389"},148:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return A}),a.d(t,"StaticQuery",function(){return f});var r=a(0),n=a.n(r),i=a(4),s=a.n(i),o=a(147),l=a.n(o);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var d=a(150),c=a.n(d);a.d(t,"PageRenderer",function(){return c.a});var u=a(33);a.d(t,"parsePath",function(){return u.a});var A=n.a.createContext({}),f=function(e){return n.a.createElement(A.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},149:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return d});var r=a(162),n=a.n(r),i=a(163),s=a.n(i);s.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete s.a.googleFonts;var o=new n.a(s.a);var l=o.rhythm,d=o.scale},150:function(e,t,a){var r;e.exports=(r=a(151))&&r.default||r},151:function(e,t,a){"use strict";a.r(t);a(32);var r=a(0),n=a.n(r),i=a(4),s=a.n(i),o=a(52),l=a(2),d=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return n.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};d.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=d},152:function(e,t,a){"use strict";a(32);var r=a(7),n=a.n(r),i=a(0),s=a.n(i),o=a(148),l=a(149),d=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e,t=this.props,a=t.location,r=t.title,n=t.children;return e="/"===a.pathname?s.a.createElement("h1",{style:Object.assign({},Object(l.b)(1.5),{marginBottom:Object(l.a)(1.5),marginTop:0})},s.a.createElement(o.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r)):s.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},s.a.createElement(o.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r)),s.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(l.a)(24),padding:Object(l.a)(1.5)+" "+Object(l.a)(.75)}},e,n,s.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",s.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))},t}(s.a.Component);t.a=d},153:function(e,t,a){"use strict";var r=a(154),n=a(0),i=a.n(n),s=a(4),o=a.n(s),l=a(164),d=a.n(l),c=a(148);function u(e){var t=e.description,a=e.lang,n=e.meta,s=e.keywords,o=e.title;return i.a.createElement(c.StaticQuery,{query:A,render:function(e){var r=t||e.site.siteMetadata.description;return i.a.createElement(d.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:r},{property:"og:title",content:o},{property:"og:description",content:r},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:r}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(n)})},data:r})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=u;var A="1025518380"},154:function(e){e.exports={data:{site:{siteMetadata:{title:"鹊巢小筑",description:"一个分享前端技术的博客",author:"Sean"}}}}},157:function(e,t,a){"use strict";a(158);var r=a(160),n=a(0),i=a.n(n),s=a(148),o=a(161),l=a.n(o),d=a(149);var c="4007731267";t.a=function(){return i.a.createElement(s.StaticQuery,{query:c,render:function(e){var t=e.site.siteMetadata,a=t.author,r=t.social;return i.a.createElement("div",{style:{display:"flex",marginBottom:Object(d.a)(2.5)}},i.a.createElement(l.a,{fixed:e.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(d.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),i.a.createElement("p",null,"你好，我是 ",i.a.createElement("strong",null,a)," ","，很高兴和你分享我的一些网页前端经验和想法。",i.a.createElement("br",null),i.a.createElement("a",{href:"https://twitter.com/"+r.twitter},"你可以在twitter上关注我")))},data:r})}},158:function(e,t,a){"use strict";a(159)("fixed",function(e){return function(){return e(this,"tt","","")}})},159:function(e,t,a){var r=a(11),n=a(24),i=a(16),s=/"/g,o=function(e,t,a,r){var n=String(i(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),o+">"+n+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),r(r.P+r.F*n(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},160:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAQADAQAAAAAAAAAAAAAAAAUBAgQD/8QAFwEAAwEAAAAAAAAAAAAAAAAAAAECA//aAAwDAQACEAMQAAABp+O/OKuwHyyCsLQnX//EABwQAQEAAQUBAAAAAAAAAAAAAAECAwAQERMhMf/aAAgBAQABBQKnlq7TT9ckzQlGbzbFJ1//xAAYEQACAwAAAAAAAAAAAAAAAAAAAQMQMf/aAAgBAwEBPwF1KLD/xAAVEQEBAAAAAAAAAAAAAAAAAAAQAv/aAAgBAgEBPwEk/8QAGhAAAgMBAQAAAAAAAAAAAAAAAAEQESExUf/aAAgBAQAGPwLuFOGelouFh//EABoQAQEAAwEBAAAAAAAAAAAAAAERACExURD/2gAIAQEAAT8hVFQGEygpGa6/A7tNwhTrhhlKOao7M8fcLMFK5//aAAwDAQACAAMAAAAQOwi//8QAGBEAAwEBAAAAAAAAAAAAAAAAAAExwSH/2gAIAQMBAT8QZLrZTOkj/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAEQETH/2gAIAQIBAT8QSuT0/8QAHRABAAIDAQADAAAAAAAAAAAAAQARIUFRMXGBof/aAAgBAQABPxC/5S68D77CQxle29vPjkMEA1kVg1UR2oB1m2EGFYkdmC38lWJlWY71nRtr2f/Z",width:50,height:50,src:"/static/eed9b2ce11f94dfa8e5d1b35937cb853/d2d31/profile-pic.jpg",srcSet:"/static/eed9b2ce11f94dfa8e5d1b35937cb853/d2d31/profile-pic.jpg 1x,\n/static/eed9b2ce11f94dfa8e5d1b35937cb853/0b804/profile-pic.jpg 1.5x,\n/static/eed9b2ce11f94dfa8e5d1b35937cb853/753c3/profile-pic.jpg 2x,\n/static/eed9b2ce11f94dfa8e5d1b35937cb853/31ca8/profile-pic.jpg 3x"}}},site:{siteMetadata:{author:"Sean",social:{twitter:"seanbruce520"}}}}}},161:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0,t.default=void 0;var n,i=r(a(7)),s=r(a(51)),o=r(a(155)),l=r(a(156)),d=r(a(0)),c=r(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},A={},f=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return A[a]||!1},p=[];var h=function(e,t){(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){p.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),n).observe(e),p.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",n=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",i=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.opacity?e.opacity:"1";return"<picture>"+r+n+"<img "+o+l+t+s+i+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+d+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},m=d.default.forwardRef(function(e,t){var a=e.style,r=e.onLoad,n=e.onError,i=(0,o.default)(e,["style","onLoad","onError"]);return d.default.createElement("img",(0,l.default)({},i,{onLoad:r,onError:n,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});m.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var y=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,n=!1,i=t.fadeIn,o=f(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,n=!0),"undefined"==typeof window&&(r=!1),t.critical&&(r=!0,n=!1);var l=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:r,imgLoaded:!1,IOSupported:n,fadeIn:i,hasNoScript:l,seenBefore:o},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:f(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&h(e,function(){t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:f(t.props)}),t.setState({isVisible:!0,imgLoaded:!1})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,A[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,A=void 0===c?{}:c,f=e.placeholderClassName,p=e.fluid,h=e.fixed,y=e.backgroundColor,b=e.Tag,w="boolean"==typeof y?"lightgray":y,E=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},o,A),v=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},o),S={title:t,alt:this.state.isVisible?"":a,style:E,className:f};if(p){var j=p;return d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(j.srcSet)},d.default.createElement(b,{style:{width:"100%",paddingBottom:100/j.aspectRatio+"%"}}),j.base64&&d.default.createElement(m,(0,l.default)({src:j.base64},S)),j.tracedSVG&&d.default.createElement(m,(0,l.default)({src:j.tracedSVG},S)),w&&d.default.createElement(b,{title:t,style:{backgroundColor:w,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&d.default.createElement("picture",null,j.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:j.srcSetWebp,sizes:j.sizes}),d.default.createElement("source",{srcSet:j.srcSet,sizes:j.sizes}),d.default.createElement(m,{alt:a,title:t,src:j.src,style:v,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},j))}}))}if(h){var Q=h,R=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:Q.width,height:Q.height},i);return"inherit"===i.display&&delete R.display,d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:R,ref:this.handleRef,key:"fixed-"+JSON.stringify(Q.srcSet)},Q.base64&&d.default.createElement(m,(0,l.default)({src:Q.base64},S)),Q.tracedSVG&&d.default.createElement(m,(0,l.default)({src:Q.tracedSVG},S)),w&&d.default.createElement(b,{title:t,style:{backgroundColor:w,width:Q.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:Q.height}}),this.state.isVisible&&d.default.createElement("picture",null,Q.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:Q.srcSetWebp,sizes:Q.sizes}),d.default.createElement("source",{srcSet:Q.srcSet,sizes:Q.sizes}),d.default.createElement(m,{alt:a,title:t,width:Q.width,height:Q.height,src:Q.src,style:v,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t,width:Q.width,height:Q.height},Q))}}))}return null},t}(d.default.Component);y.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var b=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),w=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});y.propTypes={resolutions:b,sizes:w,fixed:b,fluid:w,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string};var E=y;t.default=E}}]);
//# sourceMappingURL=component---src-pages-index-js-f14794b2cd5c1ae6c3ab.js.map
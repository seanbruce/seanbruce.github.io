(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{151:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return f});a(34);var r=a(7),n=a.n(r),i=a(0),s=a.n(i),o=a(154),l=a(161),d=a(158),c=a(159),u=a(155),A=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title,a=this.props.pageContext,r=a.previous,n=a.next,i=e.frontmatter.tags?e.frontmatter.tags:[];return s.a.createElement(d.a,{location:this.props.location,title:t},s.a.createElement(c.a,{title:e.frontmatter.title,description:e.excerpt,keywords:i}),s.a.createElement("h1",null,e.frontmatter.title),s.a.createElement("p",{style:Object.assign({},Object(u.b)(-.2),{display:"block",marginBottom:Object(u.a)(1),marginTop:Object(u.a)(-1)})},e.frontmatter.date),s.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}),s.a.createElement("hr",{style:{marginBottom:Object(u.a)(1)}}),s.a.createElement(l.a,null),s.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},s.a.createElement("li",null,r&&s.a.createElement(o.a,{to:r.fields.slug,rel:"prev"},"← ",r.frontmatter.title)),s.a.createElement("li",null,n&&s.a.createElement(o.a,{to:n.fields.slug,rel:"next"},n.frontmatter.title," →"))))},t}(s.a.Component);t.default=A;var f="919839848"},154:function(e,t,a){"use strict";a.d(t,"b",function(){return c});var r=a(0),n=a.n(r),i=a(4),s=a.n(i),o=a(33),l=a.n(o);a.d(t,"a",function(){return l.a});a(156);var d=n.a.createContext({}),c=function(e){return n.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};c.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},155:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return d});var r=a(166),n=a.n(r),i=a(167),s=a.n(i);s.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete s.a.googleFonts;var o=new n.a(s.a);var l=o.rhythm,d=o.scale},156:function(e,t,a){var r;e.exports=(r=a(157))&&r.default||r},157:function(e,t,a){"use strict";a.r(t);a(34);var r=a(0),n=a.n(r),i=a(4),s=a.n(i),o=a(55),l=a(2),d=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return n.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};d.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=d},158:function(e,t,a){"use strict";a(34),a(168);var r=a(7),n=a.n(r),i=a(169),s=a.n(i),o=a(0),l=a.n(o),d=a(154),c=a(170),u=a(155);function A(){var e=s()(["\n  margin-left: auto;\n  margin-right: auto;\n  max-width: ",";\n  padding: ",";\n"]);return A=function(){return e},e}var f=c.a.div(A(),function(e){return e.maxWidth},function(e){return e.padding}),p=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e,t=this.props,a=t.location,r=t.title,n=t.children,i=new RegExp("/\\d");return e="/"===a.pathname||i.test(a.pathname)?l.a.createElement("h1",{style:Object.assign({},Object(u.b)(1.5),{marginBottom:Object(u.a)(1.5),marginTop:0})},l.a.createElement(d.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r)):l.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},l.a.createElement(d.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r)),l.a.createElement(f,{maxWidth:Object(u.a)(24),padding:Object(u.a)(1.5)+" "+Object(u.a)(.75)},e,n,l.a.createElement("footer",null,"© ",(new Date).getFullYear(),", 博客文章均为原创，转载需获得作者同意"))},t}(l.a.Component);t.a=p},159:function(e,t,a){"use strict";var r=a(160),n=a(0),i=a.n(n),s=a(4),o=a.n(s),l=a(171),d=a.n(l),c=a(154);function u(e){var t=e.description,a=e.lang,n=e.meta,s=e.keywords,o=e.title;return i.a.createElement(c.b,{query:A,render:function(e){var r=t||e.site.siteMetadata.description;return i.a.createElement(d.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:r},{property:"og:title",content:o},{property:"og:description",content:r},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:r}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(n)})},data:r})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=u;var A="1025518380"},160:function(e){e.exports={data:{site:{siteMetadata:{title:"鹊巢小筑",description:"一个分享前端技术的博客",author:"Sean"}}}}},161:function(e,t,a){"use strict";a(162);var r=a(164),n=a(0),i=a.n(n),s=a(154),o=a(165),l=a.n(o),d=a(155);var c="4007731267";t.a=function(){return i.a.createElement(s.b,{query:c,render:function(e){var t=e.site.siteMetadata,a=t.author,r=t.social;return i.a.createElement("div",{style:{display:"flex",marginBottom:Object(d.a)(2.5)}},i.a.createElement(l.a,{fixed:e.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(d.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),i.a.createElement("p",null,"你好，我是 ",i.a.createElement("strong",null,a)," ","，很高兴和你分享我的一些网页前端经验和想法。",i.a.createElement("br",null),i.a.createElement("a",{href:"https://twitter.com/"+r.twitter},"你可以在twitter上关注我")))},data:r})}},162:function(e,t,a){"use strict";a(163)("fixed",function(e){return function(){return e(this,"tt","","")}})},163:function(e,t,a){var r=a(11),n=a(24),i=a(20),s=/"/g,o=function(e,t,a,r){var n=String(i(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),o+">"+n+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),r(r.P+r.F*n(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},164:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAQADAQAAAAAAAAAAAAAAAAUBAgQD/8QAFwEAAwEAAAAAAAAAAAAAAAAAAAECA//aAAwDAQACEAMQAAABp+O/OKuwHyyCsLQnX//EABwQAQEAAQUBAAAAAAAAAAAAAAECAwAQERMhMf/aAAgBAQABBQKnlq7TT9ckzQlGbzbFJ1//xAAYEQACAwAAAAAAAAAAAAAAAAAAAQMQMf/aAAgBAwEBPwF1KLD/xAAVEQEBAAAAAAAAAAAAAAAAAAAQAv/aAAgBAgEBPwEk/8QAGhAAAgMBAQAAAAAAAAAAAAAAAAEQESExUf/aAAgBAQAGPwLuFOGelouFh//EABoQAQEAAwEBAAAAAAAAAAAAAAERACExURD/2gAIAQEAAT8hVFQGEygpGa6/A7tNwhTrhhlKOao7M8fcLMFK5//aAAwDAQACAAMAAAAQOwi//8QAGBEAAwEBAAAAAAAAAAAAAAAAAAExwSH/2gAIAQMBAT8QZLrZTOkj/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAEQETH/2gAIAQIBAT8QSuT0/8QAHRABAAIDAQADAAAAAAAAAAAAAQARIUFRMXGBof/aAAgBAQABPxC/5S68D77CQxle29vPjkMEA1kVg1UR2oB1m2EGFYkdmC38lWJlWY71nRtr2f/Z",width:50,height:50,src:"/static/eed9b2ce11f94dfa8e5d1b35937cb853/c15d6/profile-pic.jpg",srcSet:"/static/eed9b2ce11f94dfa8e5d1b35937cb853/c15d6/profile-pic.jpg 1x,\n/static/eed9b2ce11f94dfa8e5d1b35937cb853/43c20/profile-pic.jpg 1.5x,\n/static/eed9b2ce11f94dfa8e5d1b35937cb853/da97e/profile-pic.jpg 2x,\n/static/eed9b2ce11f94dfa8e5d1b35937cb853/3e75a/profile-pic.jpg 3x"}}},site:{siteMetadata:{author:"Sean",social:{twitter:"seanbruce520"}}}}}},165:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0,t.default=void 0;var n,i=r(a(7)),s=r(a(35)),o=r(a(76)),l=r(a(77)),d=r(a(0)),c=r(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},A={},f=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return A[a]||!1},p=[];var h=function(e,t){(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){p.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),n).observe(e),p.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",n=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",i=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.opacity?e.opacity:"1";return"<picture>"+r+n+"<img "+o+l+t+s+i+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+d+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},m=d.default.forwardRef(function(e,t){var a=e.style,r=e.onLoad,n=e.onError,i=(0,o.default)(e,["style","onLoad","onError"]);return d.default.createElement("img",(0,l.default)({},i,{onLoad:r,onError:n,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});m.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var b=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,n=!1,i=t.fadeIn,o=f(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,n=!0),"undefined"==typeof window&&(r=!1),t.critical&&(r=!0,n=!1);var l=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:r,imgLoaded:!1,IOSupported:n,fadeIn:i,hasNoScript:l,seenBefore:o},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:f(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&h(e,function(){t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:f(t.props)}),t.setState({isVisible:!0,imgLoaded:!1})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,A[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,A=void 0===c?{}:c,f=e.placeholderClassName,p=e.fluid,h=e.fixed,b=e.backgroundColor,y=e.Tag,E="boolean"==typeof b?"lightgray":b,w=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},o,A),v=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},o),S={title:t,alt:this.state.isVisible?"":a,style:w,className:f};if(p){var j=p;return d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(j.srcSet)},d.default.createElement(y,{style:{width:"100%",paddingBottom:100/j.aspectRatio+"%"}}),j.base64&&d.default.createElement(m,(0,l.default)({src:j.base64},S)),j.tracedSVG&&d.default.createElement(m,(0,l.default)({src:j.tracedSVG},S)),E&&d.default.createElement(y,{title:t,style:{backgroundColor:E,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&d.default.createElement("picture",null,j.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:j.srcSetWebp,sizes:j.sizes}),d.default.createElement("source",{srcSet:j.srcSet,sizes:j.sizes}),d.default.createElement(m,{alt:a,title:t,src:j.src,style:v,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},j))}}))}if(h){var Q=h,R=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:Q.width,height:Q.height},i);return"inherit"===i.display&&delete R.display,d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:R,ref:this.handleRef,key:"fixed-"+JSON.stringify(Q.srcSet)},Q.base64&&d.default.createElement(m,(0,l.default)({src:Q.base64},S)),Q.tracedSVG&&d.default.createElement(m,(0,l.default)({src:Q.tracedSVG},S)),E&&d.default.createElement(y,{title:t,style:{backgroundColor:E,width:Q.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:Q.height}}),this.state.isVisible&&d.default.createElement("picture",null,Q.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:Q.srcSetWebp,sizes:Q.sizes}),d.default.createElement("source",{srcSet:Q.srcSet,sizes:Q.sizes}),d.default.createElement(m,{alt:a,title:t,width:Q.width,height:Q.height,src:Q.src,style:v,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t,width:Q.width,height:Q.height},Q))}}))}return null},t}(d.default.Component);b.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var y=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),E=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});b.propTypes={resolutions:y,sizes:E,fixed:y,fluid:E,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string};var w=b;t.default=w}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-7c22aa50b7fa29b6e1bc.js.map
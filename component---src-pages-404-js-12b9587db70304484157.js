(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{148:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",function(){return l});var a=n(7),r=n.n(a),i=n(0),o=n.n(i),c=n(155),u=n(156),s=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.data.site.siteMetadata.title;return o.a.createElement(c.a,{location:this.props.location,title:t},o.a.createElement(u.a,{title:"404: 页面没有找到"}),o.a.createElement("h1",null,"页面走丢了"),o.a.createElement("p",null,"你要找的页面现在不在家... 改天再来吧。"))},e}(o.a.Component);e.default=s;var l="1097489062"},151:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return f}),n.d(e,"StaticQueryContext",function(){return p}),n.d(e,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(150),u=n.n(c);n.d(e,"Link",function(){return u.a}),n.d(e,"withPrefix",function(){return c.withPrefix}),n.d(e,"navigate",function(){return c.navigate}),n.d(e,"push",function(){return c.push}),n.d(e,"replace",function(){return c.replace}),n.d(e,"navigateTo",function(){return c.navigateTo});var s=n(153),l=n.n(s);n.d(e,"PageRenderer",function(){return l.a});var d=n(33);n.d(e,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(t){return r.a.createElement(p.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},152:function(t,e,n){"use strict";n.d(e,"a",function(){return u}),n.d(e,"b",function(){return s});var a=n(165),r=n.n(a),i=n(166),o=n.n(i);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete o.a.googleFonts;var c=new r.a(o.a);var u=c.rhythm,s=c.scale},153:function(t,e,n){var a;t.exports=(a=n(154))&&a.default||a},154:function(t,e,n){"use strict";n.r(e);n(32);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(53),u=n(2),s=function(t){var e=t.location,n=u.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(c.a,Object.assign({location:e,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=s},155:function(t,e,n){"use strict";n(32),n(167);var a=n(7),r=n.n(a),i=n(168),o=n.n(i),c=n(0),u=n.n(c),s=n(151),l=n(169),d=n(152);function p(){var t=o()(["\n  margin-left: auto;\n  margin-right: auto;\n  max-width: ",";\n  padding: ",";\n"]);return p=function(){return t},t}var m=l.a.div(p(),function(t){return t.maxWidth},function(t){return t.padding}),f=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t,e=this.props,n=e.location,a=e.title,r=e.children,i=new RegExp("/\\d");return t="/"===n.pathname||i.test(n.pathname)?u.a.createElement("h1",{style:Object.assign({},Object(d.b)(1.5),{marginBottom:Object(d.a)(1.5),marginTop:0})},u.a.createElement(s.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a)):u.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},u.a.createElement(s.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},a)),u.a.createElement(m,{maxWidth:Object(d.a)(24),padding:Object(d.a)(1.5)+" "+Object(d.a)(.75)},t,r,u.a.createElement("footer",null,"© ",(new Date).getFullYear(),", 博客文章均为原创，转载需获得作者同意"))},e}(u.a.Component);e.a=f},156:function(t,e,n){"use strict";var a=n(157),r=n(0),i=n.n(r),o=n(4),c=n.n(o),u=n(170),s=n.n(u),l=n(151);function d(t){var e=t.description,n=t.lang,r=t.meta,o=t.keywords,c=t.title;return i.a.createElement(l.StaticQuery,{query:p,render:function(t){var a=e||t.site.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:c},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:a})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},e.a=d;var p="1025518380"},157:function(t){t.exports={data:{site:{siteMetadata:{title:"鹊巢小筑",description:"一个分享前端技术的博客",author:"Sean"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-12b9587db70304484157.js.map
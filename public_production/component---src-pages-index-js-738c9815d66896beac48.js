(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{144:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return h});var n=a(7),r=a.n(n),i=a(0),o=a.n(i),l=a(158),s=a(183),c=a(181),u=a(159),p=a.n(u),m=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title,a=e.allMarkdownRemark.edges;return o.a.createElement(s.a,{location:this.props.location,title:t},o.a.createElement(c.a,{title:"Help & Support",keywords:["knowledge","help","support","trafikito","monitoring"]}),a.map(function(e){var t=e.node,a="/"+t.frontmatter.uri+".html",n=t.frontmatter.title||a;return o.a.createElement("div",{key:t.frontmatter.uri},o.a.createElement(p.a,{variant:"h5"},o.a.createElement(l.Link,{style:{boxShadow:"none"},to:a},n)),o.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.excerpt}}))}))},t}(o.a.Component);t.default=m;var h="1670862056"},158:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return h}),a.d(t,"useStaticQuery",function(){return d});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(156),s=a.n(l);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var c=a(161),u=a.n(c);a.d(t,"PageRenderer",function(){return u.a});var p=a(33);a.d(t,"parsePath",function(){return p.a});var m=r.a.createContext({}),h=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})},d=function(e){r.a.useContext;var t=r.a.useContext(m);if(t[e]&&t[e].data)return t[e].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},161:function(e,t,a){var n;e.exports=(n=a(175))&&n.default||n},163:function(e,t,a){e.exports={popover:"style-module--popover--d2-3x",results:"style-module--results--2yVn2",result_row:"style-module--result_row--3zisV"}},175:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(54),s=a(2),c=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},179:function(e,t,a){a(35),e.exports=function(e){var t=e.url;return new Promise(function(e){var a=new XMLHttpRequest;a.onreadystatechange=function(){4===a.readyState&&200===a.status&&e(a.response)},a.open("GET",t,!0),a.send()})}},180:function(e,t,a){e.exports={main_holder:"style-module--main_holder--330ks",content_holder:"style-module--content_holder--1a1vw"}},181:function(e,t,a){"use strict";var n=a(182),r=a(0),i=a.n(r),o=a(4),l=a.n(o),s=a(174),c=a.n(s),u=a(158);function p(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,l=e.title;return i.a.createElement(u.StaticQuery,{query:m,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:l},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:n})}p.defaultProps={lang:"en",meta:[],keywords:[]},p.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=p;var m="1025518380"},182:function(e){e.exports={data:{site:{siteMetadata:{title:"Trafikito - monitor output of any command",description:"Trafikito is monitoring solution. It runs super light POSIX opens ource agent on linux machine and executes commands you select. Then Trafikito servers will parse the output and do all the magic of monitoring - charts, notifications etc.",author:"Lukas Liesis"}}}}},183:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(0),o=a.n(i),l=a(226),s=a.n(l),c=a(227),u=a.n(c),p=a(159),m=a.n(p),h=a(173),d=a.n(h),f=a(228),y=a.n(f),g=a(229),v=a.n(g),E=a(4),b=a.n(E),k=a(207),w=a.n(k),S=a(211),x=a.n(S),C=a(193),T=a.n(C),q=a(196),O=a.n(q),M=a(205),N=a.n(M),R=a(206),j=a.n(R),L=a(165),D=a.n(L),P=function(e){var t=e.icon,a=e.isActive,n=e.title,r=a?D.a[500]:null,i=a?"#FFFFFF":null;return o.a.createElement(O.a,{button:!0,style:{backgroundColor:r}},t?o.a.createElement(N.a,{style:{color:i}},t):null,o.a.createElement(j.a,{disableTypography:!1,primary:o.a.createElement("span",{style:{color:i}},n)}))};P.propTypes={icon:b.a.oneOfType([b.a.string,b.a.object]),isActive:b.a.bool.isRequired,title:b.a.string.isRequired};var A=P,_=a(212),I=a.n(_),F=a(214),G=a.n(F),H=a(213),J=a.n(H),Q=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.isOpen,t=this.props.handleClose;return o.a.createElement(w.a,{open:e,onClose:t},o.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",margin:"12px 3px"}},o.a.createElement("div",null,o.a.createElement(m.a,{align:"center",variant:"h5"},"Trafikito"),o.a.createElement(m.a,{align:"center",variant:"caption"},"MONITOR ANYTHING"))),o.a.createElement(x.a,null),o.a.createElement(T.a,null,o.a.createElement("a",{className:"lnu",href:"https://trafikito.com",onClick:t},o.a.createElement(A,{isActive:!1,icon:o.a.createElement(I.a,null),title:"Home"})),o.a.createElement("a",{className:"lnu",href:"https://trafikito.com/servers",onClick:t},o.a.createElement(A,{isActive:!1,icon:o.a.createElement(J.a,null),title:"Dashboard"})),o.a.createElement("a",{className:"lnu",href:"https://trafikito.com/user/account/update-details",onClick:t},o.a.createElement(A,{isActive:!1,icon:o.a.createElement(G.a,null),title:"My Account"})),o.a.createElement("a",{className:"lnu",href:"https://trafikito.com/price",onClick:t},o.a.createElement(A,{isActive:!1,title:"Price"})),o.a.createElement("a",{className:"lnu",href:"https://trafikito.com/who-built-this",onClick:t},o.a.createElement(A,{isActive:!1,title:"Who built this?"})),o.a.createElement("a",{className:"lnu",href:"https://trafikito.com/support",onClick:t},o.a.createElement(A,{isActive:!1,title:"Help & Support"}))))},t}(o.a.Component);Q.propTypes={isOpen:b.a.bool.isRequired,handleClose:b.a.func.isRequired};var W=Q,z=(a(215),a(216)),U=a.n(z),V=(a(194),a(217)),X=a.n(V),Y=a(53),B=a.n(Y),K=a(195),Z=a.n(K),$=a(224),ee=a.n($),te=a(163),ae=a.n(te),ne=a(225),re=a.n(ne),ie=(a(73),a(158)),oe=a(219),le=a.n(oe),se=a(218),ce=a(170),ue=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={allData:null,query:""},a.loadData=a.loadData.bind(B()(B()(a))),a.getSearchResult=a.getSearchResult.bind(B()(B()(a))),a}r()(t,e);var a=t.prototype;return a.componentWillMount=function(){this.loadData()},a.getSearchResult=function(){var e=[];return this.state.allData&&(e=se.go(this.state.query,this.state.allData,{key:"title",limit:25})),e},a.loadData=function(){var e=ce.get("searchable-data"),t=null;try{t=JSON.parse(e)}catch(a){localStorage.removeItem("searchable-data"),console.error("#jlekjwkf Search failed because searchable data is invalid JSON.")}this.setState({allData:t})},a.render=function(){var e=this;if(!this.state.allData)return console.log("#kjrlkejge searchable JSON must be ready at local storage before rendering search results."),null;var t=this.getSearchResult(),a=[];return t&&t.length>0&&t.forEach(function(t){var n=se.highlight(se.single(e.state.query,t.obj.title));a.push(o.a.createElement(ie.Link,{to:"/"+t.obj.uri+".html",key:t.obj.uri},o.a.createElement("div",{dangerouslySetInnerHTML:{__html:n},className:ae.a.result_row})))}),o.a.createElement(o.a.Fragment,null,o.a.createElement(m.a,{component:"div"},o.a.createElement(le.a,{autoFocus:!0,label:"Search",placeholder:"",fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},onChange:function(t){return e.setState({query:t.target.value})},value:this.state.query}),o.a.createElement(m.a,{className:ae.a.results,component:"div",variant:"h5"},a)))},t}(o.a.Component),pe=a(170),me=a(179),he=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={open:!1,anchor:null,searchableData:null},a.dataPreload=null,a.preload=a.preload.bind(B()(B()(a))),a}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this,t=pe.get("searchable-data");if(t)try{var a=JSON.parse(t);a&&this.setState({searchableData:a})}catch(n){localStorage.removeItem("searchable-data")}this.dataPreload=setTimeout(function(){e.preload()},2e3)},a.componentWillUnmount=function(){clearTimeout(this.dataPreload)},a.preload=function(){var e=X()(U.a.mark(function e(){var t,a;return U.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==this.state.searchableData){e.next=5;break}return e.next=3,me({url:"https://trafikito.com/support/search.json"});case 3:t=e.sent;try{a=JSON.parse(t),pe.set("searchable-data",t,108e6),this.setState({searchableData:a})}catch(n){localStorage.removeItem("searchable-data")}case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),a.render=function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(d.a,{color:"inherit","aria-label":"Search",style:{marginLeft:3},"aria-owns":this.state.open?"search-popover":void 0,"aria-haspopup":"true",variant:"contained",onClick:function(t){return e.setState({anchor:t.currentTarget,open:!0})}},o.a.createElement(ee.a,null)),this.state.open&&o.a.createElement(Z.a,{id:"search-popover",open:this.state.open,anchorEl:this.state.anchor,onClose:function(t){return e.setState({anchor:null,open:!1})},anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},classes:{paper:ae.a.popover}},null===this.state.searchableData?o.a.createElement(re.a,null):o.a.createElement(ue,null)))},t}(o.a.Component),de=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={isLeftMenuOpen:!1},t}return r()(t,e),t.prototype.render=function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{position:"static"},o.a.createElement(u.a,null,o.a.createElement(d.a,{color:"inherit","aria-label":"Menu",style:{marginLeft:-12,marginRight:6},onClick:function(){return e.setState({isLeftMenuOpen:!0})}},o.a.createElement(y.a,null)),o.a.createElement(m.a,{variant:"h6",color:"inherit",style:{flexGrow:1},noWrap:!0},o.a.createElement(ie.Link,{to:"/",style:{color:"#fff"}},"Help & Support")),o.a.createElement(he,null),o.a.createElement("a",{className:"lnu a-white",href:"https://trafikito.com/user/account/update-details"},o.a.createElement(d.a,{color:"inherit","aria-label":"Account",style:{marginRight:-12}},o.a.createElement(v.a,null))))),o.a.createElement(W,{isOpen:this.state.isLeftMenuOpen,handleClose:function(){return e.setState({isLeftMenuOpen:!1})}}))},t}(o.a.Component),fe=a(180),ye=a.n(fe),ge=a(174),ve=a.n(ge),Ee=a(231),be=a.n(Ee),ke=a(178),we=a(230),Se=a.n(we),xe=Object(ke.createMuiTheme)({palette:{primary:{light:D.a[300],main:D.a[500],dark:D.a[700]},secondary:{light:Se.a[300],main:Se.a[500],dark:Se.a[700]}},typography:{useNextVariants:!0}}),Ce=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement(ke.MuiThemeProvider,{theme:xe},o.a.createElement(be.a,null),o.a.createElement(ve.a,null,o.a.createElement("link",{rel:"stylesheet",href:Object(ie.withPrefix)("/global.css")}),o.a.createElement("meta",{name:"viewport",content:"minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"})),o.a.createElement(m.a,{component:"div",className:ye.a.main_holder},o.a.createElement(de,null),o.a.createElement("div",{className:ye.a.content_holder},o.a.createElement("div",{style:{padding:"24px 6px"}},o.a.createElement("main",null,this.props.children)))))},t}(o.a.Component);t.a=Ce}}]);
//# sourceMappingURL=component---src-pages-index-js-738c9815d66896beac48.js.map
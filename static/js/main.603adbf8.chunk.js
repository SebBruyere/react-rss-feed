(this["webpackJsonpreact-rss-feed"]=this["webpackJsonpreact-rss-feed"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e){e.exports=JSON.parse('{"rss_feeds":["https://www.lemonde.fr/rss/une.xml","https://www.nasa.gov/rss/dyn/breaking_news.rss"]}')},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(7),c=n.n(s),i=(n(13),n(1)),l=n(2),o=n(4),m=n(3),u=function(e){Object(o.a)(n,e);var t=Object(m.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.feedsTitles,t=[];return e.length&&(t=e.map((function(e,t){return r.a.createElement("div",{key:t,className:"mt-4 mb-4"},r.a.createElement("a",null,e))}))),r.a.createElement("div",null,r.a.createElement("h1",null,"Rss Feed"),r.a.createElement("div",null,t))}}]),n}(r.a.Component);n(14);var f=function(e){return r.a.createElement("div",null,r.a.createElement("a",{href:e.item.link,target:"_blank",className:"wrapper-item mb-5"},r.a.createElement("img",{src:e.item.media,rel:"Item Image"}),r.a.createElement("h4",{className:"mt-2 mb-3"},e.item.title),r.a.createElement("p",null,e.item.description)),r.a.createElement("div",{className:"item-footer d-flex justify-content-between"},r.a.createElement("span",null,e.item.pubDate),r.a.createElement("span",null,r.a.createElement("i",null,e.item.feeder))))},d=function(e){Object(o.a)(n,e);var t=Object(m.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.rssItems,t=[];return e.length&&(t=e.map((function(e,t){return r.a.createElement("div",{key:t,className:"row"},r.a.createElement("div",{className:"mt-2 mb-2 col-xs-12"},r.a.createElement(f,{item:e})))}))),r.a.createElement("div",{className:"container-fluid"},t)}}]),n}(r.a.Component),p=n(5),h=function(){function e(){Object(i.a)(this,e),this.proxyURL="https://cors-anywhere.herokuapp.com/"}return Object(l.a)(e,[{key:"fetchRSS",value:function(e){var t=this,a=n(15);try{Promise.all(a.rss_feeds.map((function(e){return fetch(t.proxyURL+e).then((function(e){return e.text()})).then((function(e){return(new window.DOMParser).parseFromString(e,"text/xml")}))}))).then((function(n){var a=n.map((function(e){return t.getItemChildNodes(e)})),r=n.map((function(e){return e.getElementsByTagName("title")[0].innerHTML})),s=a.flat().sort((function(e,t){return new Date(t.pubDate)-new Date(e.pubDate)}));e(s,r)}))}catch(r){console.error(r)}}},{key:"getItemChildNodes",value:function(e){var t=e.getElementsByTagName("item"),n=e.getElementsByTagName("title")[0].innerHTML,a=this.getTags(t[0]);return Object(p.a)(t).map((function(e){var t={feeder:n};return a.map((function(n){var a=e.getElementsByTagName(n)[0];a&&(a.childElementCount?a.hasAttribute("url")&&(a.prefix?t[a.prefix]=a.getAttribute("url"):t[n]=a.getAttribute("url")):t[n]=a.textContent)})),t}))}},{key:"getTags",value:function(e){var t=e.getElementsByTagName("*");return t=Object(p.a)(t).map((function(e){return e.tagName}))}}]),e}(),v=(n(16),n(17),new h),g=function(e){Object(o.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).state={rssItems:[],rssFeedsTitles:[]},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;v.fetchRSS((function(t,n){console.log(t),console.log(n),e.setState({rssItems:t,rssFeedsTitles:n})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-12 col-md-4 text-center mt-4"},r.a.createElement(u,{feedsTitles:this.state.rssFeedsTitles})),r.a.createElement("div",{className:"col-xs-12 col-md-8 mt-4"},r.a.createElement(d,{rssItems:this.state.rssItems})))))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.603adbf8.chunk.js.map
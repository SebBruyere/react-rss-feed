(this["webpackJsonpreact-rss-feed"]=this["webpackJsonpreact-rss-feed"]||[]).push([[0],{17:function(e,t,n){e.exports=n(43)},22:function(e,t,n){},23:function(e,t,n){},41:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(15),s=n.n(r),o=(n(22),n(2)),i=n(3),l=n(5),m=n(4),u=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Hello"))}}]),n}(c.a.Component);n(23);var h=function(e){return c.a.createElement("a",{href:e.item.link,target:"_blank",className:"wrapper-item mb-5"},c.a.createElement("img",{src:e.item.enclosure.link,rel:"Item Image"}),c.a.createElement("h4",{className:"mt-2 mb-3"},e.item.title),c.a.createElement("p",null,e.item.description),console.log(e.item))},f=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.rssItems,t=[];return e.length&&(t=e.map((function(e,t){return c.a.createElement("div",{key:t,className:"row"},c.a.createElement("div",{className:"mt-2 mb-2 col-xs-12"},c.a.createElement(h,{item:e})))}))),c.a.createElement("div",{className:"container-fluid"},t)}}]),n}(c.a.Component),d=n(16),p=n.n(d),v=function(){function e(){Object(o.a)(this,e),this.RSSFeedTest="https://www.lemonde.fr/rss/une.xml",this.APIKey="xe3tuhc9olqsuhvn9fc8fzgtmrgdjcqnl514pxqz",this.baseURL="https://api.rss2json.com/v1/api.json?rss_url="}return Object(i.a)(e,[{key:"fetchRSS",value:function(e){p.a.get("".concat(this.baseURL).concat(this.RSSFeedTest,"&api_key=").concat(this.APIKey)).then((function(t){e(t.data.items)}))}}]),e}(),b=(n(41),n(42),new v),E=function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).state={rssItems:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;b.fetchRSS((function(t){e.setState({rssItems:t})}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-xs-12 col-md-4 text-center mt-4"},c.a.createElement(u,null)),c.a.createElement("div",{className:"col-xs-12 col-md-8 mt-4"},c.a.createElement(f,{rssItems:this.state.rssItems})))))}}]),n}(c.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.e6b7df6b.chunk.js.map
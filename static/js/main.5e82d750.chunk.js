(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,n,t){e.exports=t(64)},35:function(e,n,t){},56:function(e,n,t){},64:function(e,n,t){"use strict";t.r(n);var a=t(8),r=t(47),o=t(0),c=t.n(o),i=t(24),l=t.n(i),s=(t(35),t(9)),u=t(10),d=t(15),m=t(11),p=t(16),h=t(12),v=(t(56),t(14)),b=t.n(v);function f(){var e=Object(a.a)(["\n  query GETREPOS($login: String!) {\n    user(login: $login) {\n      repositoriesContributedTo(last: 5) {\n        totalCount\n        nodes {\n          name\n        }\n      }\n      repositories(last: 50) {\n        totalCount\n        nodes {\n          name\n          url\n          description\n          isFork\n          stargazers(last: 5) {\n            nodes {\n              name\n            }\n            totalCount\n          }\n        }\n      }\n    }\n  }\n"]);return f=function(){return e},e}var E=b()(f()),g=function(e){var n=e.login;return c.a.createElement(h.Query,{query:E,variables:{login:n},fetchPolicy:"network-only"},function(e){var n=e.loading,t=e.data;return!n&&t&&t.user.repositories.nodes.map(function(e,n){return c.a.createElement("div",{className:"sm-12 md-4 col",key:n},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h4",{className:"card-title"},e.name),c.a.createElement("h5",{className:"card-subtitle"},e.stargazers.totalCount),c.a.createElement("h5",{className:"card-subtitle"},e.isFork&&"Forked"),c.a.createElement("p",{className:"card-text"},e.description),c.a.createElement("a",{className:"card-link",href:e.url},"Github Link"))))})||c.a.createElement("div",{className:"row flex-center"},c.a.createElement("p",{className:"flex-center"},"Loading..."))})},y=t(44),O=t.n(y),w=function(e){function n(e){var t;return Object(s.a)(this,n),(t=Object(d.a)(this,Object(m.a)(n).call(this,e))).updateQuery=function(e){var n=e.target.value;t.setState({query:n})},t.onChange=function(e){e.persist(),t.delayedCallback(e)},t.state={query:""},t.delayedCallback=O.a.debounce(t.updateQuery,1e3),t}return Object(p.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){var e=this.state.query;return c.a.createElement("div",null,c.a.createElement("div",{className:"row flex-center"},c.a.createElement("div",{className:"form-group"},c.a.createElement("input",{onChange:this.onChange,placeholder:"type a username",type:"text"}))),c.a.createElement("div",{className:"row"},c.a.createElement(g,{login:e})))}}]),n}(c.a.Component),j=function(e){function n(){return Object(s.a)(this,n),Object(d.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(p.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){return c.a.createElement(h.ApolloProvider,{client:this.props.client},c.a.createElement("div",{className:"App"},c.a.createElement(w,null)))}}]),n}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var C=t(20),N=t(46),k=t(45),q=t(70);function x(){var e=Object(a.a)(['\n      {\n        user(login: "olivierjm") {\n            repositoriesContributedTo(last: 5) {\n            totalCount\n            nodes {\n                name\n              }\n            }\n            repositories(last: 10) {\n            totalCount\n            nodes {\n                id\n                name\n                url\n                description\n                stargazers(last: 5) {\n                nodes {\n                    name\n                }\n              }\n            }\n          }\n        }\n      }\n\n    ']);return x=function(){return e},e}var P=Object(N.a)({uri:"https://api.github.com/graphql"}),T=Object(k.a)(function(e,n){var t=n.headers,a=Object({NODE_ENV:"production",PUBLIC_URL:"."}).REACT_APP_TOKEN;return{headers:Object(r.a)({},t,{authorization:a?"Bearer ".concat(a):""})}}),z=new C.default({link:T.concat(P),cache:new q.a});z.query({query:b()(x())}).then(function(e){return console.log(e)}),l.a.render(c.a.createElement(j,{client:z}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,2,1]]]);
//# sourceMappingURL=main.5e82d750.chunk.js.map
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[266],{145:function(t,r,e){e.d(r,{Z:function(){return c}});e(791);var n=e(689),a=e(87),u=e(184),c=function(t){var r=t.movies,e=(0,n.TH)();return(0,u.jsx)("ul",{children:r.map((function(t){return(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{to:"/movies/".concat(t.id),state:{from:e},children:t.title})},t.id)}))})}},266:function(t,r,e){e.r(r);var n=e(861),a=e(439),u=e(687),c=e.n(u),s=e(791),o=e(690),i=e(145),p=e(184);r.default=function(){var t=(0,s.useState)([]),r=(0,a.Z)(t,2),e=r[0],u=r[1];return(0,s.useEffect)((function(){var t=function(){var t=(0,n.Z)(c().mark((function t(){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,o.AR)();case 3:r=t.sent,u(r),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,p.jsxs)("div",{children:[(0,p.jsx)("h2",{children:"Trending today"}),(0,p.jsx)(i.Z,{movies:e})]})}},690:function(t,r,e){e.d(r,{AR:function(){return o},Hx:function(){return v},Y5:function(){return p},gl:function(){return i},uV:function(){return f}});var n=e(861),a=e(687),u=e.n(a),c=e(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s={params:{api_key:"59d71211f829907de44c68d945469335",language:"en-US"}},o=function(){var t=(0,n.Z)(u().mark((function t(){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.get("trending/movie/day",s);case 3:return r=t.sent,t.abrupt("return",r.data.results);case 7:throw t.prev=7,t.t0=t.catch(0),t.t0;case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,n.Z)(u().mark((function t(r){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.get("search/movie?query=".concat(r),s);case 3:return e=t.sent,t.abrupt("return",e.data.results);case 7:throw t.prev=7,t.t0=t.catch(0),t.t0;case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(r){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(u().mark((function t(r){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.get("movie/".concat(r),s);case 3:return e=t.sent,t.abrupt("return",e.data);case 7:throw t.prev=7,t.t0=t.catch(0),t.t0;case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(r){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(u().mark((function t(r){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.get("movie/".concat(r,"/credits"),s);case 3:return e=t.sent,t.abrupt("return",e.data.cast);case 7:throw t.prev=7,t.t0=t.catch(0),t.t0;case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(r){return t.apply(this,arguments)}}(),v=function(){var t=(0,n.Z)(u().mark((function t(r){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.get("movie/".concat(r,"/reviews"),s);case 3:return e=t.sent,t.abrupt("return",e.data.results);case 7:throw t.prev=7,t.t0=t.catch(0),t.t0;case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(r){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=266.b865b93d.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{377:function(e,t,r){var content=r(422);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(92).default)("38ed5a5f",content,!0,{sourceMap:!1})},421:function(e,t,r){"use strict";r(377)},422:function(e,t,r){var n=r(91)(!1);n.push([e.i,".beer{padding-top:40px;background:#fff}.beer .back{width:100%;height:-webkit-max-content;height:-moz-max-content;height:max-content}.beer__content{margin-top:20px}.beer__img{height:500px;margin-left:40px;position:relative}.beer__tagline{margin-bottom:10px}.beer__title{padding-top:20px}@media(min-width:576px){.beer__content{display:flex}.beer__info{margin-left:40px}}@media(max-width:767.98px){.beer__img{height:calc(-14.28571px + 66.96429vw)}.beer h1{line-height:1;margin-bottom:10px;font-size:1.5em}}@media(max-width:575.98px){.beer{padding-top:10px}.beer__conten{margin-top:0}}",""]),e.exports=n},431:function(e,t,r){"use strict";r.r(t);var n=r(428),o=r(366),c=(r(29),r(28),r(56),r(13)),_=(r(77),r(25),r(0).a.extend({validate:function(e){var t=e.params;return!!/^\d+$/.test(t.id)},asyncData:function(e){return Object(c.a)(regeneratorRuntime.mark((function t(){var r,n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$axios,n=e.params,t.next=3,r.$get("https://api.punkapi.com/v2/beers/".concat(n.id));case 3:return o=t.sent,t.abrupt("return",{beer:o[0]});case 5:case"end":return t.stop()}}),t)})))()},data:function(){return{beer:{},dialog:!1}},methods:{back:function(){this.$router.back()}}})),l=(r(421),r(76)),component=Object(l.a)(_,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"wrapper beer"},[t("div",{staticClass:"back"},[t(n.a,{staticClass:"ma-2",attrs:{color:"gray darken-2",dark:""},on:{click:e.back}},[t(o.a,{attrs:{dark:"",left:""}},[e._v(" mdi-arrow-left ")]),e._v("Back\n    ")],1)],1),e._v(" "),t("div",{staticClass:"beer__content"},[t("div",{staticClass:"beer__img"},[t("img",{attrs:{src:e.beer.image_url,alt:""}})]),e._v(" "),t("div",{staticClass:"beer__info"},[t("h1",{staticClass:"beer__title"},[e._v(e._s(e.beer.name))]),e._v(" "),t("h3",{staticClass:"beer__tagline"},[e._v(e._s(e.beer.tagline))]),e._v(" "),t("p",[t("strong",[e._v("Рейтинг:")]),e._v(" "+e._s(e.beer.abv))]),e._v(" "),t("strong",[e._v("Подойдет под:")]),e._v(" "),t("ul",e._l(e.beer.food_pairing,(function(r,n){return t("li",{key:n},[e._v("\n          "+e._s(r)+"\n        ")])})),0),e._v(" "),t("p",{staticClass:"beer__description"},[t("strong",[e._v("Описание: ")]),e._v(e._s(e.beer.description)+"\n      ")])])])])}),[],!1,null,null,null);t.default=component.exports}}]);
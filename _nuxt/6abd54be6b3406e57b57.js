(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{307:function(t){t.exports=JSON.parse('{"lastUpdate":"2020/04/02 19:00","patients":{"date":"2020/03/31 20:00","data":[{"確定日":"2020-02-05T08:00:00.000Z","居住地":"南部保健所管内","年代":"60代","性別":"女性","退院":"入院勧告解除","date":"2020-03-31"},{"確定日":"2020-02-11T08:00:00.000Z","居住地":"那覇市","年代":"60代","性別":"男性","退院":"入院勧告解除","date":"2020-03-31"},{"確定日":"2020-02-06T08:00:00.000Z","居住地":"豊見城市","年代":"80代","性別":"男性","退院":"入院勧告解除","date":"2020-03-31"},{"確定日":"2020-03-21T08:00:00.000Z","居住地":"中部保健所管内","年代":"10代","性別":"女性","退院":"入院勧告解除","date":"2020-03-31"},{"確定日":"2020-03-23T08:00:00.000Z","居住地":"南部保健所管内","年代":"20代","性別":"男性","退院":"入院","date":"2020-03-31"},{"確定日":"2020-03-24T08:00:00.000Z","居住地":"東京都","年代":"40代","性別":"男性","退院":"入院","date":"2020-03-31"},{"確定日":"2020-03-26T08:00:00.000Z","居住地":"那覇市","年代":"30代","性別":"男性","退院":"入院","date":"2020-03-31"},{"確定日":"2020-03-28T08:00:00.000Z","居住地":"那覇市","年代":"30代","性別":"女性","退院":"入院","date":"2020-03-31"},{"確定日":"2020-03-28T08:00:00.000Z","居住地":"那覇市","年代":"20代","性別":"女性","退院":"入院","date":"2020-03-31"},{"確定日":"2020-03-29T08:00:00.000Z","居住地":"那覇市","年代":"40代","性別":"男性","退院":"入院","date":"2020-03-31"}]},"main_summary":{"attr":"検査実施人数","value":333,"children":[{"attr":"陽性患者数（県外感染者含む）","value":10,"children":[{"attr":"入院中","value":6,"children":[{"attr":"軽症・中等症","value":0},{"attr":"重症","value":0}]},{"attr":"退院","value":4},{"attr":"死亡","value":0}]}]},"contacts":{"date":"2020/03/27 20:00","data":[{"日付":"2020-03-12T08:00:00.000Z","曜日":"木","9-13時":10,"13-17時":0,"17-21時":0,"date":"2020-03-12","w":4,"short_date":"03/12","小計":0}]},"querents":{"date":"2020/03/31 22:00","data":[{"日付":"2020-03-12T08:00:00.000Z","曜日":"木","9-17時":0,"17-翌9時":0,"date":"2020-03-12","w":222,"short_date":"03/12","小計":0}]},"patients_summary":{"date":"2020/03/31 22:00","data":[{"日付":"2020-02-14T08:00:00.000Z","小計":1},{"日付":"2020-02-19T08:00:00.000Z","小計":1},{"日付":"2020-02-20T08:00:00.000Z","小計":1},{"日付":"2020-03-23T08:00:00.000Z","小計":1},{"日付":"2020-03-24T08:00:00.000Z","小計":1},{"日付":"2020-03-26T08:00:00.000Z","小計":1},{"日付":"2020-03-28T08:00:00.000Z","小計":2},{"日付":"2020-03-29T08:00:00.000Z","小計":1},{"日付":"2020-03-30T08:00:00.000Z","小計":0},{"日付":"2020-03-31T08:00:00.000Z","小計":0},{"日付":"2020-04-01T08:00:00.000Z","小計":0}]}}')},312:function(t,e,o){"use strict";var r=o(0),n=o(320),l=r.a.extend({props:{title:{type:String,default:""},titleId:{type:String,default:""},date:{type:String,default:""},loading:{type:Boolean,required:!1,default:!1}},data:function(){return{openGraphEmbed:!1,displayShare:!1,showOverlay:!1}},computed:{formattedDate:function(){return Object(n.b)(this.date)},graphEmbedValue:function(){var t='<iframe width="560" height="315" src="'+this.permalink(!0,!0)+'" frameborder="0"></iframe>';return t}},watch:{displayShare:function(t){t?document.documentElement.addEventListener("click",this.toggleShareMenu):document.documentElement.removeEventListener("click",this.toggleShareMenu)}},methods:{toggleShareMenu:function(t){t.stopPropagation(),this.displayShare=!this.displayShare},closeShareMenu:function(){this.displayShare=!1},isCopyAvailable:function(){return!!navigator.clipboard},copyEmbedCode:function(){var t=this;navigator.clipboard.writeText(this.graphEmbedValue).then((function(){t.closeShareMenu(),t.showOverlay=!0,setTimeout((function(){t.showOverlay=!1}),2e3)}))},stopClosingShareMenu:function(t){t.stopPropagation()},permalink:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],embed=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e="/cards/"+this.titleId;return embed&&(e+="?embed=true"),e=this.localePath(e),t&&(e=location.protocol+"//"+location.host+e),e},twitter:function(){var t="https://twitter.com/intent/tweet?text="+this.title+" / "+this.$t("東京都")+this.$t("新型コロナウイルス感染症")+this.$t("対策サイト")+"&url="+this.permalink(!0)+"&hashtags=StopCovid19JP";window.open(t)},facebook:function(){var t="https://www.facebook.com/sharer.php?u="+this.permalink(!0);window.open(t)},line:function(){var t="https://social-plugins.line.me/lineit/share?url="+this.permalink(!0);window.open(t)}}}),d=(o(351),o(8)),c=o(44),h=o.n(c),w=o(301),f=o(535),m=o(295),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-card",{staticClass:"DataView",attrs:{loading:t.loading}},[o("div",{staticClass:"DataView-Inner"},[o("div",{staticClass:"DataView-Header"},[o("h3",{staticClass:"DataView-Title",class:t.$slots.infoPanel?"with-infoPanel":""},[t._v("\n        "+t._s(t.title)+"\n      ")]),t._v(" "),t._t("infoPanel")],2),t._v(" "),o("div",{staticClass:"DataView-Description"},[t._t("description")],2),t._v(" "),o("div",[t._t("button")],2),t._v(" "),o("div",{staticClass:"DataView-CardText"},[t._t("default")],2),t._v(" "),o("div",{staticClass:"DataView-Description"},[t._t("footer-description")],2),t._v(" "),o("div",{staticClass:"DataView-Footer"},[o("div",{staticClass:"Footer-Left"},[t._t("footer"),t._v(" "),o("div",[o("a",{staticClass:"Permalink",attrs:{href:t.permalink()}},[o("time",{attrs:{datetime:t.formattedDate}},[t._v("\n              "+t._s(t.$t("{date} 更新",{date:t.date}))+"\n            ")])])])],2),t._v(" "),"true"!=this.$route.query.embed?o("div",{staticClass:"Footer-Right"},[o("button",{staticClass:"DataView-Share-Opener",on:{click:t.toggleShareMenu}},[o("svg",{attrs:{width:"14",height:"16",viewBox:"0 0 14 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-label":t.$t("{title}のグラフをシェア",{title:t.title})}},[o("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7.59999 3.5H9.5L7 0.5L4.5 3.5H6.39999V11H7.59999V3.5ZM8.5 5.75H11.5C11.9142 5.75 12.25 6.08579 12.25 6.5V13.5C12.25 13.9142 11.9142 14.25 11.5 14.25H2.5C2.08579 14.25 1.75 13.9142 1.75 13.5V6.5C1.75 6.08579 2.08579 5.75 2.5 5.75H5.5V4.5H2.5C1.39543 4.5 0.5 5.39543 0.5 6.5V13.5C0.5 14.6046 1.39543 15.5 2.5 15.5H11.5C12.6046 15.5 13.5 14.6046 13.5 13.5V6.5C13.5 5.39543 12.6046 4.5 11.5 4.5H8.5V5.75Z",fill:"#808080"}})])]),t._v(" "),t.displayShare?o("div",{staticClass:"DataView-Share-Buttons py-2",on:{click:t.stopClosingShareMenu}},[o("div",{staticClass:"Close-Button"},[o("v-icon",{attrs:{"aria-label":t.$t("閉じる")},on:{click:t.closeShareMenu}},[t._v("\n              mdi-close\n            ")])],1),t._v(" "),o("h4",[t._v(t._s(t.$t("埋め込み用コード")))]),t._v(" "),o("div",{staticClass:"EmbedCode"},[t.isCopyAvailable()?o("v-icon",{staticClass:"EmbedCode-Copy",attrs:{"aria-label":t.$t("クリップボードにコピー")},on:{click:t.copyEmbedCode}},[t._v("\n              far fa-clipboard\n            ")]):t._e(),t._v("\n            "+t._s(t.graphEmbedValue)+"\n          ")],1),t._v(" "),o("div",{staticClass:"Buttons"},[o("button",{attrs:{"aria-label":t.$t("LINEで{title}のグラフをシェア",{title:t.title})},on:{click:t.line}},[o("picture",[o("source",{staticClass:"icon-resize line",attrs:{srcset:"/line.webp",type:"image/webp"}}),t._v(" "),o("img",{staticClass:"icon-resize line",attrs:{src:"/line.png",alt:"LINE"}})])]),t._v(" "),o("button",{attrs:{"aria-label":t.$t("Twitterで{title}のグラフをシェア",{title:t.title})},on:{click:t.twitter}},[o("picture",[o("source",{staticClass:"icon-resize twitter",attrs:{srcset:"/twitter.webp",type:"image/webp"}}),t._v(" "),o("img",{staticClass:"icon-resize twitter",attrs:{src:"/twitter.png",alt:"Twitter"}})])]),t._v(" "),o("button",{attrs:{"aria-label":t.$t("facebookで{title}のグラフをシェア",{title:t.title})},on:{click:t.facebook}},[o("picture",[o("source",{staticClass:"icon-resize facebook",attrs:{srcset:"/facebook.webp",type:"image/webp"}}),t._v(" "),o("img",{staticClass:"icon-resize facebook",attrs:{src:"/facebook.png",alt:"facebook"}})])])])]):t._e()]):t._e()])]),t._v(" "),t.showOverlay?o("div",{staticClass:"overlay"},[o("div",{staticClass:"overlay-text"},[t._v("\n      "+t._s(t.$t("埋め込みコードをコピーしました"))+"\n    ")]),t._v(" "),o("v-footer",{staticClass:"DataView-Footer"},[o("time",{attrs:{datetime:t.date}},[t._v(t._s(t.$t("{date} 更新",{date:t.date})))]),t._v(" "),t._t("footer")],2)],1):t._e()])}),[],!1,null,null,null);e.a=component.exports;h()(component,{VCard:w.a,VFooter:f.a,VIcon:m.a})},313:function(t,e,o){var content=o(352);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(12).default)("4d5720d6",content,!0,{sourceMap:!1})},320:function(t,e,o){"use strict";o.d(e,"b",(function(){return l})),o.d(e,"a",(function(){return d}));var r=o(18),n=o.n(r),l=function(t){return n()(t).format("YYYY-MM-DDTHH:mm:ss")},d=function(t){return n()(t).format("YYYY-MM-DD")}},351:function(t,e,o){"use strict";var r=o(313);o.n(r).a},352:function(t,e,o){(e=o(11)(!1)).push([t.i,".DataView{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9 !important;border-radius:4px;height:100%}.DataView-Header{display:flex;align-items:flex-start;flex-flow:column;padding:0 10px}@media screen and (min-width: 769px){.DataView-Header{padding:0 5px}}@media screen and (min-width: 1171px){.DataView-Header{width:100%;flex-flow:row;flex-wrap:wrap;padding:0}}.DataView-DataInfo-summary{color:#4d4d4d;font-family:Hiragino Sans,sans-serif;font-style:normal;font-size:30px;line-height:30px;white-space:nowrap}.DataView-DataInfo-summary-unit{font-size:.6em;width:100%}.DataView-DataInfo-date{font-size:12px;line-height:12px;color:#707070;width:100%;display:inline-block}.DataView-Inner{display:flex;flex-flow:column;justify-content:space-between;padding:22px;height:100%}.DataView-Title{width:100%;margin-bottom:10px;font-size:1.25rem;line-height:1.5;font-weight:normal;color:#4d4d4d}@media screen and (min-width: 1171px){.DataView-Title{margin-bottom:0}.DataView-Title.with-infoPanel{width:50%}}.DataView-CardText{margin:16px 0}.DataView-Description{margin:10px 0 0;font-size:12px;color:#707070}.DataView-Description ul,.DataView-Description ol{list-style-type:none;padding:0}.DataView-Footer{font-size:12px;font-size:0.75rem;padding:0 !important;display:flex;justify-content:space-between;color:#707070 !important;text-align:right;background-color:#fff !important}.DataView-Footer .Permalink{color:#707070 !important}.DataView-Footer .OpenDataLink{text-decoration:none}.DataView-Footer .OpenDataLink .ExternalLinkIcon{vertical-align:text-bottom}.DataView-Footer .Footer-Left{text-align:left}.DataView-Footer .Footer-Right{position:relative;display:flex;align-items:flex-end}.DataView-Footer .Footer-Right .DataView-Share-Opener{cursor:pointer;margin-right:6px}.DataView-Footer .Footer-Right .DataView-Share-Opener>svg{width:auto !important}.DataView-Footer .Footer-Right .DataView-Share-Opener:focus{outline:dotted #707070 1px}.DataView-Footer .Footer-Right .DataView-Share-Buttons{position:absolute;padding:8px;right:-4px;bottom:1.5em;width:240px;border:solid 1px #d9d9d9;background:#fff !important;border-radius:8px;text-align:left;font-size:1rem;z-index:2}.DataView-Footer .Footer-Right .DataView-Share-Buttons>*{padding:4px 0}.DataView-Footer .Footer-Right .DataView-Share-Buttons>.Close-Button{display:flex;justify-content:flex-end;color:#707070}.DataView-Footer .Footer-Right .DataView-Share-Buttons>.Close-Button button{border-radius:50%;border:1px solid #fff}.DataView-Footer .Footer-Right .DataView-Share-Buttons>.Close-Button button:focus{border:1px dotted #707070;outline:none}.DataView-Footer .Footer-Right .DataView-Share-Buttons>.EmbedCode{position:relative;padding:4px;padding-right:30px;color:#030303;border:solid 1px #eee;border-radius:8px;font-size:12px}.DataView-Footer .Footer-Right .DataView-Share-Buttons>.EmbedCode .EmbedCode-Copy{position:absolute;top:.3em;right:.3em;color:#707070}.DataView-Footer .Footer-Right .DataView-Share-Buttons>.EmbedCode button{border-radius:50%;border:solid 1px #eee}.DataView-Footer .Footer-Right .DataView-Share-Buttons>.EmbedCode button:focus{border:1px dotted #707070;outline:none}.DataView-Footer .Footer-Right .DataView-Share-Buttons>.Buttons{display:flex;justify-content:center;margin-top:4px}.DataView-Footer .Footer-Right .DataView-Share-Buttons>.Buttons .icon-resize{border-radius:50%;font-size:30px}.DataView-Footer .Footer-Right .DataView-Share-Buttons>.Buttons .icon-resize.twitter{color:#fff;background:#2a96eb}.DataView-Footer .Footer-Right .DataView-Share-Buttons>.Buttons .icon-resize.facebook{color:#364e8a}.DataView-Footer .Footer-Right .DataView-Share-Buttons>.Buttons .icon-resize.line{color:#1cb127}.DataView-Footer .Footer-Right .DataView-Share-Buttons>.Buttons button{width:30px;height:30px;margin-left:4px;margin-right:4px}.DataView-Footer .Footer-Right .DataView-Share-Buttons>.Buttons button:focus{border-radius:50%;border:1px dotted #707070;outline:none}.DataView .overlay{position:absolute;display:flex;align-items:center;justify-content:center;z-index:1;top:0;left:0;width:100%;height:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:.8}.DataView .overlay>.overlay-text{text-align:center;padding:2em;width:60%;background:#4d4d4d;border-radius:8px;color:#fff !important}textarea{font:400 11px system-ui;width:100%;height:2.4rem}",""]),t.exports=e},359:function(t,e,o){var content=o(453);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(12).default)("5abdac94",content,!0,{sourceMap:!1})},452:function(t,e,o){"use strict";var r=o(359);o.n(r).a},453:function(t,e,o){(e=o(11)(!1)).push([t.i,".MainPage .DataBlock[data-v-52592c90]{margin:20px -8px}@media screen and (min-width: 769px){.MainPage .DataBlock .DataCard[data-v-52592c90]{padding:10px}}@media screen and (max-width: 600px){.MainPage .DataBlock .DataCard[data-v-52592c90]{padding:4px 8px}}",""]),t.exports=e},543:function(t,e,o){"use strict";o.r(e);var r=o(0),n=o(308),l=o(307),d=o(378),c={components:{MapCard:o(375).a}},h=o(8),w=o(44),f=o.n(w),m=o(302),component=Object(h.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"12"}},[e("map-card",{attrs:{title:"",caption:this.$t("※7:30〜8:30の平均値"),"title-id":"tokyo-city-heatmap","chart-id":"tokyo-city-chart","map-id":"tokyo-city-map","initial-bounds":[[139.695239,35.676437],[139.773774,35.694493]],"map-height":640,"map-options":{interactive:!0},unit:"人",url:"https://ds.yahoo.co.jp/datapolicy/","source-link-header":this.$t("※本データは2020年3月31日までの掲載となります"),"heatmap-legend":[2e4,4e4,6e4],"link-string":this.$t("ヤフー・データソリューション"),date:""}})],1)}),[],!1,null,null,null),v=component.exports;f()(component,{VCol:m.a});var D=r.a.extend({components:{PageHeader:n.a,TokyoCityMapCard:v},data:function(){var data={Data:l,headerItem:{icon:"mdi-chart-timeline-variant",title:this.$t("東京都23区の人口推移（参考値）"),date:l.lastUpdate},newsItems:d.newsItems};return data},head:function(){return{title:this.$t("東京都23区の人口推移（参考値）")}}}),x=(o(452),o(303)),V=Object(h.a)(D,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"MainPage"},[e("page-header",{attrs:{icon:this.headerItem.icon}},[this._v("\n    "+this._s(this.headerItem.title)+"\n  ")]),this._v(" "),e("v-row",{staticClass:"DataBlock"},[e("tokyo-city-map-card")],1)],1)}),[],!1,null,"52592c90",null);e.default=V.exports;f()(V,{VRow:x.a})}}]);
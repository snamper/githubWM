define(function(require,exports,module){var h=require("http://a.myhd.wumeiwang.com/hdgw/model/domains/dist/domains.js");require("../css/style.css#");require("http://a.myhd.wumeiwang.com/hdgw/view/public/font-face/css/font-face.css#");var c=require("http://a.myhd.wumeiwang.com/hdgw/model/lib/jquery/seajs-jquery-1.8.3.min.js"),b=require("http://a.myhd.wumeiwang.com/hdgw/model/lib/juicer/seajs-juicer-min.js"),d=require("http://a.myhd.wumeiwang.com/hdgw/model/wmbox/dist/wmbox.js"),a=require("http://a.myhd.wumeiwang.com/hdgw/model/wmforimg/dist/forimg.js");var f=[31,28,31,30,31,30,31,31,30,31,30,31];var g=function(v,j,r,p){var k,s,n,t,o,q=[],l=1,u;k=new Date(v,j,1);s=new Date(v,j,r);v=k.getFullYear()-0;j=k.getMonth()-0;if(j===2){f[1]=(v%40==0&&v%100!=0)||v%400==0?29:28}n=new Date(v,j,f[j]);o=f[k.getMonth()];t=k.getDay();t=t?(t-1):6;while(t--){q.push('<li class="mid_item"><a href="#"></a></li>')}for(;l<=o;l++){q.push('<li class="mid_item"><a href="#">'+l+"</a></li>")}t=7-n.getDay();while(t--){q.push('<li class="mid_item"><a href="#"></a></li>')}p.empty().append(q.join(""));u=p.closest(".multipledate_item").find(".ym_data");u.empty().append(v+"年"+(j+1)+"月")};var e=function(o){var k=new Date(),l,n,j,i=[];var m=c.extend({length:2,startYear:k.getFullYear(),startMonth:k.getMonth(),startDate:k.getDate(),offset:{}},o);if(typeof m.ele==="string"||m.ele instanceof jQuery){n=m.length;l=c(['<div class="multipledate_box">','<div class="multipledate_main">','<a href="#" class="iconfont change_btn prev">&#xf016e;</a>','<a href="#" class="iconfont change_btn next">&#xf016d;</a>','<div class="multipledate_limit">','<ul class="multipledate_list">',"</ul>","</div>","</div>","</div>"].join(""));while(n--){l.find(".multipledate_list").append('<li class="multipledate_item"><div class="ym_data"></div><p class="week_data"><span>一</span><span>二</span><span>三</span><span>四</span><span>五</span><span>六</span><span>日</span></p><div class="mid_data"><ul class="mid_list"></ul></div></li>')}n=10;while(n--){i.push('<option value="'+(m.startYear+3-n)+'">'+(m.startYear+3-n)+"</option>")}j=d.relyBox({rely:m.ele,offset:m.offset,content:l,callback:function(){var q=0,p=this;var s=new Date().getTime();for(;q<=m.length;q++){g(m.startYear,m.startMonth+q,m.startMonth,this.wmBox.find(".mid_list:eq("+q+")"))}console.log(new Date().getTime()-s);var r=new a.Slide({forImgBoxEle:p.wmBox.find(".multipledate_main"),forImgBoxListEle:".multipledate_list",forImgItemEle:".multipledate_item",callback:function(){}});this.wmBox.on("click",".prev",function(){r.prev();return false});this.wmBox.on("click",".next",function(){r.next();return false})}});j.show();return j}return false};exports.show=function(i){return e(i)}});
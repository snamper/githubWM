define(function(require,exports,module){var i=require("http://a.myhd.wumeiwang.com/hdgw/model/domains/dist/domains.js");var b=require("http://a.myhd.wumeiwang.com/hdgw/model/lib/jquery/seajs-jquery-1.8.3.min.js"),g=require("http://a.myhd.wumeiwang.com/hdgw/model/lib/dist/lib.js");var f=i.api+"/behavior/wmfootlog";var a={};var h=function(){var e=navigator.userAgent;if(b.browser.webkit){a.browser="webkit"}if(b.browser.safari){a.browser="safari"}if(b.browser.opera){a.browser="opera"}if(b.browser.msie){a.browser="msie"}if(b.browser.mozilla){a.browser="mozilla"}if(!a.browser&&!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)){a.client_side="IOS"}else{if(!a.browser&&(e.indexOf("Android")>-1||e.indexOf("Linux")>-1)){a.client_side="Android"}else{if(!a.browser&&(e.indexOf("iPhone")>-1||e.indexOf("Mac")>-1)){a.client_side="iPhone"}else{if(!a.browser&&e.indexOf("iPad")>-1){a.client_side="iPad"}else{if(!a.browser&&e.indexOf("Safari")==-1){a.client_side="webApp"}else{a.client_side=encodeURIComponent((!!e.match(/AppleWebKit.*Mobile/)||!!e.match(/Windows Phone/)||!!e.match(/Android/)||!!e.match(/MQQBrowser/))?"手机端":"PC端")}}}}}a.version=b.browser.version;a.activ_time=0;a.resolution=window.screen.width+"*"+window.screen.height;d()};var d=function(){var m=b(window),j=b("body");var l=new Date(),e;var k=function(){var n=new Date();var o=JSON.parse(g.cookie("user_iptocity"))||{};a.time_seconds=n.getTime()-l.getTime();a.time_start=encodeURIComponent(l.getFullYear()+"年"+(l.getMonth()+1)+"月"+l.getDate()+"日 "+l.getHours()+":"+l.getMinutes()+":"+l.getSeconds());a.time_end=encodeURIComponent(n.getFullYear()+"年"+(n.getMonth()+1)+"月"+n.getDate()+"日 "+n.getHours()+":"+n.getMinutes()+":"+n.getSeconds());a.url=window.location.href;a.address_code=o.areaCode||"";a.address_name=encodeURIComponent(o.areaName||"");a.userId=g.cookie("wm.user.id")||"";b.ajax({url:f,async:false,type:"get",dataType:"jsonp",data:a})};window.onbeforeunload=function(){a.type=encodeURIComponent("关闭页面");k()};m.on("blur",function(){clearInterval(e);e=null});m.on("focus ",function(){if(!e){e=setInterval(function(){a.activ_time++;if(a.activ_time===5){a.type=encodeURIComponent("活跃5秒");k()}},1000)}});m.focus();j.on("click.statistics","a",function(){var p=b(this),n=p.attr("href"),o=p.attr("target");if(o==="_blank"){a.type=encodeURIComponent("新窗口打开");a.des_url=n;k()}else{if(n!=="#"){a.type=encodeURIComponent("当前页面跳转");a.des_url=n;k()}}})};try{h()}catch(c){}require.setURL=function(e){if(typeof e==="string"){f=e}else{throw"PRT's setURL parameter type error！"}}});
define(function(require,exports,module){var a=require("http://a.myhd.wumeiwang.com/hdgw/model/domains/dist/domains.js");var e=require("http://a.myhd.wumeiwang.com/hdgw/model/lib/jquery/seajs-jquery-1.8.3.min.js");var c=function(i,f){var h=[{id:9,name:"魔羯座",ico:"&#xf0048;"},{id:10,name:"水瓶座",ico:"&#xf004c;"},{id:11,name:"双鱼座",ico:"&#xf004a;"},{id:0,name:"白羊座",ico:"&#xf0040;"},{id:1,name:"金牛座",ico:"&#xf0042;"},{id:2,name:"双子座",ico:"&#xf004b;"},{id:3,name:"巨蟹座",ico:"&#xf0047;"},{id:4,name:"狮子座",ico:"&#xf004f;"},{id:5,name:"处女座",ico:"&#xf0041;"},{id:6,name:"天秤座",ico:"&#xf004d;"},{id:7,name:"天蝎座",ico:"&#xf004e;"},{id:8,name:"射手座",ico:"&#xf0049;"}];var g=[20,19,21,21,21,22,23,23,23,23,22,22];return h[i-(f<g[i-1]?1:0)]||h[0]},d=function(f){var g=[{id:9,name:"猴",ico:"&#xf0059;"},{id:10,name:"鸡",ico:"&#xf005b;"},{id:11,name:"狗",ico:"&#xf0058;"},{id:12,name:"猪",ico:"&#xf0065;"},{id:1,name:"鼠",ico:"&#xf0061;"},{id:2,name:"牛",ico:"&#xf005e;"},{id:3,name:"虎",ico:"&#xf005a;"},{id:4,name:"兔",ico:"&#xf0062;"},{id:5,name:"龙",ico:"&#xf005c;"},{id:6,name:"蛇",ico:"&#xf005f;"},{id:7,name:"马",ico:"&#xf005d;"},{id:8,name:"羊",ico:"&#xf0063;"}];return g[f%12]},b=function(f,h,g){e.ajax({url:"http://api.uihoo.com/astro/astro.http.php",data:{fun:f,id:h,format:"jsonp"},type:"get",dataType:"jsonp",success:function(i){typeof g==="function"&&g(i)},error:function(){typeof g==="function"&&g()}})};exports.getConstellation=function(f,g){return c(f,g)};exports.getZodiac=function(f){return d(f)};exports.getConstellation8gua=function(f,h,g){b(f,h,g)}});
define(function(require,exports,module){var a=require("http://a.myhd.wumeiwang.com/hdgw/model/domains/dist/domains.js");var c=require("http://a.myhd.wumeiwang.com/hdgw/model/lib/jquery/seajs-jquery-1.8.3.min.js"),b=require("http://a.myhd.wumeiwang.com/hdgw/model/wmbox/dist/wmbox.js");window.document.domain="hdgw.com";return function(e){var d=c('<iframe src="'+a.account+'/tools/loginbox" width="520" height="320" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>');return b.alert({boxId:"wmloginbox",boxCls:"wmloginbox",titleText:"会员登录",content:d,btns:[],callback:function(){typeof e==="function"&&e.call(this)}})}});
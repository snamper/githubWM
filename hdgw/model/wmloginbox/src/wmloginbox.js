/*
登录弹窗
*/
define(function (require, exports, module) {
    "require:nomunge,exports:nomunge,module:nomunge";
    var domains = require('http://a.myhd.wumeiwang.com/hdgw/model/domains/dist/domains.js');
    var $ = require("http://a.myhd.wumeiwang.com/hdgw/model/lib/jquery/seajs-jquery-1.8.3.min.js"),
        box = require("http://a.myhd.wumeiwang.com/hdgw/model/wmbox/dist/wmbox.js");
    window.document.domain = "hdgw.com";
    return function (callback) {
        var $iframe = $('<iframe src="' + domains.account + '/tools/loginbox" width="520" height="320" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>');
        return box.alert({
            boxId: "wmloginbox",
            boxCls: "wmloginbox",
            titleText: "会员登录",
            content: $iframe,
            btns: [],
            callback: function () {
                typeof callback === "function" && callback.call(this);
            }
        });
    }
});

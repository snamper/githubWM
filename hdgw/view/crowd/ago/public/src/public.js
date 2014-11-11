define(function (require, exports, module) {
    "require:nomunge,exports:nomunge,module:nomunge";
    var domains = require('http://a.myhd.wumeiwang.com/hdgw/model/domains/dist/domains.js');
    var $ = require("http://a.myhd.wumeiwang.com/hdgw/model/lib/jquery/seajs-jquery-1.8.3.min.js"),
        top_data = require('http://a.myhd.wumeiwang.com/hdgw/view/ago/public/wm_top_data/dist/top_data.js')
    ;
    require('http://a.myhd.wumeiwang.com/hdgw/view/crowd/ago/public/set_data/dist/set_data.js');
    var init = function () {
        top_data();
        bind();
    };

    var bind = function () {
        
    };

    init();

})
define(function (require, exports, module) {
    "require:nomunge,exports:nomunge,module:nomunge";
    var domains = require('http://a.myhd.wumeiwang.com/hdgw/model/domains/dist/domains.js');
    var $ = require("http://a.myhd.wumeiwang.com/hdgw/model/lib/jquery/seajs-jquery-1.8.3.min.js"),
        nav = require("http://a.myhd.wumeiwang.com/hdgw/view/ago/public/wm_nav_v1.0/dist/nav.js"),
        lib = require("http://a.myhd.wumeiwang.com/hdgw/model/lib/dist/lib.js"),
        tips = require("http://a.myhd.wumeiwang.com/hdgw/model/wmtips/dist/wmtips.js"),
        compatible = require('http://a.myhd.wumeiwang.com/hdgw/model/wmcompatible/dist/wmcompatible.js'),
        box = require('http://a.myhd.wumeiwang.com/hdgw/model/wmbox/dist/wmbox.js'),
        top_data = require('http://a.myhd.wumeiwang.com/hdgw/view/ago/public/wm_top_data/dist/top_data.js');
    require("http://a.myhd.wumeiwang.com/hdgw/view/ago/public/wm_activate/dist/activate.js");
    //message_box = require('http://a.myhd.wumeiwang.com/hdgw/view/public/wm_message_box/dist/message_box.js'),
    //leftLib = require('http://a.myhd.wumeiwang.com/hdgw/view/public/wm_leftlib/dist/leftlib.js');

    require('http://a.myhd.wumeiwang.com/hdgw/view/public/css/suspended.css#');
    //require('http://a.myhd.wumeiwang.com/hdgw/view/public/wm_form/css/style.css#');
    var $body = $("body"),
        $page = $body.find("#page");

    var init = function () {
        top_data();
        $page.find(".sub_nav_item.curr").removeClass("curr");
        $page.find(".sub_nav_item:eq(" + (global_setting.menuIndex || 0) + ")").addClass("curr");
        if (!compatible.isPlaceholder) {
            $page.find(".head_con [placeholder]").removeAttr("placeholder");
        }
        bind();
        compatible.placeholder();
        //message_box.Create();
    };
    var bind = function () {
        var $page = $body.find("#page");
        var $head_search = $body.find(".head_search");
        $page.on("click", ".theme_marketplace .pull_link", function () {
            var $this = $(this), errTip;
            errTip = $this.data("errTip");
            if (!errTip) {
                errTip = new tips({
                    ele: $this,
                    con: '<p>谢谢您的关注！<br><b>' + $.trim($this.text()) + '</b>正在建设中，不要心急哦！</p>',
                    close: 2000,
                    direction: 'rt',
                    offset: {
                        left: 20
                    }
                });
                $this.data("errTip", errTip);
            }
            errTip.show();
            return false;
        });

        $page.on("click", ".bus_letter", function () {
            var $this = $(this), errTip;
            errTip = $this.data("errTip");
            if (!errTip) {
                errTip = new tips({
                    ele: $this,
                    con: '<p>谢谢您的关注！<br>商家站内信还在开发中，不要心急哦！</p>',
                    close: 2000,
                    direction: 'rt',
                    offset: {
                        left: 20
                    }
                });
                $this.data("errTip", errTip);
            }
            errTip.show();
            return false;
        });
        $page.on("click", ".add_favorite", function () {
            lib.addFavorite(window.location.href, "互动购物");
            return false;
        });

        $page.on("click", ".to_shop", function () {
            var $this = $(this), $form = $this.closest("form");
            if ($.trim($form.find(".search_txt").val())) {
                $form.attr("action", $this.attr("href"));
                $form.submit();
            }
            return false;
        });
        $page.on("click", ".to_commodity", function () {
            var $this = $(this), $form = $this.closest("form");
            if ($.trim($form.find(".search_txt").val())) {
                $form.attr("action", $this.attr("href"));
                $form.submit();
            }
            return false;
        });
    };
    init();
});

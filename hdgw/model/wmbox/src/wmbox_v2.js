/*
弹窗_v2
*/
/*
    有一个老板，开了家玩具场，造了一批玩具，结果发现没卖出去多少，于是找来了专家请教。
    专家说，你看人家的玩具卖的多好，老板说是啊，我们就造这些玩具吧，于是又造了一批玩具，有趣的事情发生了，玩具还是没卖出去多少，
    这个时候来了个专家2，说你看那家的玩具卖的不错吧？老板又点头了，于是又造了一批。。。
    这个故事看起来很傻逼，但是又有多少人知道，这个有多现实
*/
define(function (require, exports, module) {
    "require:nomunge,exports:nomunge,module:nomunge";
    var domains = require('http://a.myhd.wumeiwang.com/hdgw/model/domains/dist/domains.js');
    require("../css/style.css#");
    require("../../../view/public/wm_btn/css/style.css#");
    var $ = require("http://a.myhd.wumeiwang.com/hdgw/model/lib/jquery/seajs-jquery-1.8.3.min.js"),
     juicer = require("http://a.myhd.wumeiwang.com/hdgw/model/lib/juicer/seajs-juicer-min.js");
    var $body = $("body");
    var _global = (function () {
        var _itemHeap = {};
        var _index = 0;
        return {
            heap: function (key, examples) {
                if (key && examples) {
                    _itemHeap[key] = examples;
                    _index++;
                    return this;
                }
                if (key && !examples) {
                    return _itemHeap[key];
                }
            },
            removeHeap: function (key) {
                _index--;
                _itemHeap[key] = null;
                return this;
            },
            getIndex: function () {
                return _index;
            }
        }
    })();
    //base对象内的函数只能被call或者apply
    var _base = {
        create: function (options) {
            var self = this;
            var _opacity = options.opacity || "0.5";
            var _mask = '<div class="wmBox-mask"style="display:block; top: 0; bottom: 0; left: 0; right: 0; z-index: 1000; background-color: #000; filter: alpha(opacity=' + _opacity * 100 + '); opacity:' + _opacity + '; position: fixed;  _position: absolute;zoom: 1;_height:' + $body.height() + '"><iframe class="sdialog-mask-iframe" style="display: none; _display: block; width: 100%; height: 100%; filter: alpha(opacity=0); opacity: 0;" frameborder="0" src="javascript:\'\';"></iframe></div>';
            this.wmBox = $(this._html.render(options));
            this.mask = $(_mask);
            this.index = _global.getIndex() + (options.basezIndex || 10001);
            this.wmBox.css("z-index", this.index + 1);
            this.mask.css("z-index", this.index);
            this.key = "box_" + (_global.getIndex() + 1);
        },
        bind: function () {
            var self = this;
            this.mask.click(function (event) {
                event.preventDefault();
                event.stopPropagation()
            });
            this.mask.mousemove(function (event) {
                event.preventDefault();
                event.stopPropagation()
            });
            this.wmBox.on("click", ".sure,.close", function (event) {
                self.close();
                event.preventDefault();
            });
            this.wmBox.on("click", ".hide", function (event) {
                self.hide();
                event.preventDefault();
            });
            this.wmBox.on("click", ".sure", function (event) {
                if (typeof self.sureCallBack === "function") {
                    self.sureCallBack.call(self);
                }
                event.preventDefault();
            });
            this.wmBox.on("click", ".wm_btn_item", function (event) {
                var $this = $(this),
                    _i = $this.attr("dataindex");
                if (self.btns && typeof self.btns[_i].callback === "function") {
                    self.btns[_i].callback.call(self, $this);
                }
                event.preventDefault();
            });
            this.wmBox.on("click.stopPropagation", function (event) {
                event.stopPropagation();
            });
            this.wmBox.mousemove(function (event) {
                event.stopPropagation();
            });
        },
        abstractFun: function () {
            this.hide = function () {
                throw "hide方法未实现！";
            };
            this.show = function () {
                throw "show方法未实现！";
            };
            this.close = function () {
                throw "close方法未实现！";
            };
            this.position = function () {
                throw "position方法未实现！";
            };
            this.setCon = function () {
                throw "setCon方法未实现！";
            };
            this.setIndex = function () {
                throw "setIndex方法未实现！";
            };
            this.setTitle = function () {
                throw "setTitle方法未实现！";
            };
        }
    };
    //判断IE6
    var isIE6 = $.browser.msie && $.browser.version === "6.0";
    //在IE6下 弹窗是否被初始化固定定位
    var hasBox = false;
    //初始化固定，记住 只有IE6那鸟货才有这动画....
    var initFixed = function () {
        if (isIE6) {
            hasBox = true;
            var $win = $(window), $body = $("body"), body = $body[0], _windowH = $win.height();
            $win.on("scroll.fixed", function () {
                var $this = $(this), t = Math.random() * 99999;
                $this.data("t", t);
                (function (t) {
                    setTimeout(function () {
                        if (t == $this.data("t")) {
                            var self = $("body > .fixed_box:visible");
                            if (self.length) {
                                var scrollTop = body.scrollTop || document.documentElement.scrollTop || window.pageYOffset || 0;
                                var _top = _windowH / 2 - self.outerHeight() / 2;
                                self.css("margin-top", 0);
                                self.animate({ "top": scrollTop + _top });
                            }
                        }
                    }, 500)
                })(t);
            });
        }
    };
    //常规弹窗
    var _alert = function (options, callback) {
        var self = this, _options, cssObj;
        this._html = juicer([
            '<div class="wmBox ${boxCls} fixed_box" id="${boxId}">',
                '<div class="wmBox-head">',
                    '<h3 class="wmBox-title">${titleText}</h3>',
                    '<a class="close" href="javascript:void(0);">&times;</a>',
                '</div>',
                '<div class="wmBox-content">$${content}</div>',
                '<div class="wmBox-botton">',
                    '{@each btns as btnsitem,i}',
                    '<a class="wm_btn_item ui_btn ${btnsitem.cls} ${btnsitem.res}" href="#" dataindex="${i}"><span class="ui_btn_txt">${btnsitem.text}</span></a>',
                    '{@/each}',
                '</div>',
            '</div>'
        ].join(''));
        _options = $.extend({
            "titleText": "系统提示",
            "content": "",
            "mask": true,
            "btns": [
                { cls: "ui_btn_h23red6", res: "sure", text: "确定" }
            ]
        }, options);
        _options.callback = options ? options.callback || callback : undefined;
        _base.create.call(this, options);
        _base.bind.call(this);
        _base.abstractFun.call(this);
        this.btns = _options.btns;
        $body.append(this.mask).append(this.wmBox);
        if (isIE6) {
            cssObj = { "zoom": 1, "width": self.wmBox.outerWidth() };
            this.wmBox.find(".wmBox-head").css(cssObj);
            this.wmBox.find(".wmBox-botton").css(cssObj);
        }
        this.position = function () {
            self.wmBox.css({
                "marginTop": -(self.wmBox.outerHeight() / 2) + "px",
                "marginLeft": -(self.wmBox.outerWidth() / 2) + "px"
            });
        };
        this.show = function (callback) {
            self.wmBox.show();
            self.mask.css("display", "block");
            self.position();
            typeof callback === "function" && callback();
        };
        this.setTitle = function (txt) {
            self.wmBox.find(".wmBox-title").empty().append(txt);
        };
        this.close = function (callback) {
            self.wmBox.fadeOut(function () {
                $(this).remove();
                typeof callback === "function" && callback();
            });
            self.mask.fadeOut(function () {
                $(this).remove();
            });
            _global.removeHeap(self.key);
        };
        this.hide = function () {
            self.wmBox.fadeOut();
            self.mask.fadeOut();
        };
        this.setIndex = function (zindex) {
            self.wmBox.css("z-index", zindex + 1);
            self.mask.css("z-index", zindex);
        };
        this.wmBox.attr("top", this.wmBox.css("top"));
        typeof _options.callback === "function" && _options.callback.call(this);
        !hasBox && initFixed();
        hasBox && isIE6 && $(window).scroll();
    };
    //依赖弹窗
    var _relyBox = function (options, callback) {
        var self = this, _options, cssObj, relyOffset, $win, scrollLeft, scrollTop;
        if (!options.rely) {
            throw "relyBox rely parameter is null or undefined";
        }
        this.rely = $(options.rely);
        $win = $(window);
        scrollLeft = $win.scrollLeft();
        scrollTop = $win.scrollTop();
        relyOffset = this.rely.offset();
        this._html = juicer([
            '<div class="wmBox wm_relyBox ${boxCls}" id="${boxId}">',
                '<div class="wmBox-content">$${content}</div>',
                '<div class="wmBox-botton">',
                    '{@each btns as btnsitem,i}',
                    '<a class="wm_btn_item ui_btn ${btnsitem.cls} ${btnsitem.res}" href="#" dataindex="${i}"><span class="ui_btn_txt">${btnsitem.text}</span></a>',
                    '{@/each}',
                '</div>',
            '</div>'
        ].join(''));
        _options = $.extend({
            "content": "",
            "mask": false,
            "offset": {
                top: 0,
                left: 0
            },
            "btns": [
                { cls: "ui_btn_h22red10", res: "sure", text: "确定" },
                { cls: "ui_btn_h22gray6", res: "close", text: "取消" }
            ]
        }, options);
        _options.callback = options ? options.callback || callback : undefined;
        _base.create.call(this, options);
        _base.bind.call(this);
        _base.abstractFun.call(this);
        this.btns = _options.btns;
        $body.append(this.wmBox);
        if (isIE6) {
            cssObj = { "zoom": 1, "width": _wmBox.outerWidth() }
            _wmBox.find(".wmBox-botton").css(cssObj);

        }
        this.show = function (callback) {
            self.position();
            self.wmBox.show();
            typeof callback === "function" && callback.call(self);
        };
        this.position = function () {
            scrollLeft = $win.scrollLeft();
            scrollTop = $win.scrollTop();
            relyOffset = self.rely.offset();
            var _left = relyOffset.left - (_options.offset.left || 0);
            if (_left + self.wmBox.outerWidth() > $body.outerWidth()) {
                _left = relyOffset.left - self.wmBox.outerWidth() + self.rely.outerWidth();
            }
            self.wmBox.css({
                "marginTop": "0px",
                "marginLeft": "0px",
                "top": relyOffset.top + self.rely.outerHeight() + 5 + (_options.offset.top || 0),
                "left": _left - scrollLeft
            });
        };
        this.hide = function () {
            self.wmBox.fadeOut();
        };
        this.close = function (callback) {
            self.wmBox.fadeOut(function () {
                $(this).remove();
                typeof callback === "function" && callback();
            });
            _global.removeHeap(self.key);
        };
        this.setIndex = function (zindex) {
            self.wmBox.css("z-index", zindex + 1);
            self.mask.css("z-index", zindex);
        }
        typeof _options.callback === "function" && _options.callback.call(this);

    };
    //无边框弹窗
    var _invBox = function (options, callback) {
        var self = this, _options, cssObj;
        this._html = juicer([
            '<div class="wmBox invBox ${boxCls} fixed_box" id="${boxId}">',
                '<div class="wmBox-content">$${content}</div>',
            '</div>'
        ].join(''));
        _options = $.extend({
            "content": "",
            "mask": true
        }, options);
        _options.callback = options ? options.callback || callback : undefined;
        _options.callback = options ? options.callback || callback : undefined;
        _base.create.call(this, options);
        _base.bind.call(this);
        _base.abstractFun.call(this);
        $body.append(this.mask).append(this.wmBox);
        this.btns = _options.btns;
        if (isIE6) {
            cssObj = { "zoom": 1, "width": _wmBox.outerWidth() }
            _wmBox.find(".wmBox-head").css(cssObj);
            _wmBox.find(".wmBox-botton").css(cssObj);
        }
        this.position = function () {
            self.wmBox.css({
                "marginTop": -(self.wmBox.outerHeight() / 2) + "px",
                "marginLeft": -(self.wmBox.outerWidth() / 2) + "px"
            })
        };
        this.show = function (callback) {
            self.wmBox.show();
            self.mask.css("display", "block");
            self.position();
            typeof callback === "function" && callback.call(self);
        };
        this.hide = function () {
            self.wmBox.fadeOut();
            self.mask.fadeOut();
        };
        this.setIndex = function (zindex) {
            self.wmBox.css("z-index", zindex + 1);
            self.mask.css("z-index", zindex);
        };
        typeof _options.callback === "function" && _options.callback.call(this);
        this.wmBox.attr("top", this.wmBox.css("top"));
        !hasBox && initFixed();
        hasBox && isIE6 && $(window).scroll();
    };
    
    exports.alert = function (options, callback) {
        var boxy = new _alert(options, callback);
        _global.heap(boxy.key, boxy);
        boxy.show();
        return boxy;
    };

    exports.relyBox = function (options, callback) {
        var boxy = new _relyBox(options, callback);
        _global.heap(boxy.key, boxy);
        boxy.show();
        return boxy;
    };

    exports.invBox = function (options, callback) {
        var boxy = new _invBox(options, callback);
        _global.heap(boxy.key, boxy);
        boxy.show();
        return boxy;
    };
    //获取存在的弹窗个数，被close销毁的讲会被排除
    exports.getIndex = function () {
        return _global.getIndex();
    };
    //获取未销毁的box
    exports.getBox = function (key) {
        return _global.heap(key);
    };
  
});
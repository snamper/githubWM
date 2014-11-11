seajs.config({
    'alias': {
        'domains': 'http://a.myhd.wumeiwang.com/hdgw/model/domains/dist/domains.js',
        'public': 'http://a.myhd.wumeiwang.com/hdgw/view/public/dist/public.js',
        'operationsPublic': 'http://a.myhd.wumeiwang.com/hdgw/view/operations/public/dist/public.js',
        'jquery': 'http://a.myhd.wumeiwang.com/hdgw/model/lib/jquery/seajs-jquery-1.8.3.min.js',
        'juicer': 'http://a.myhd.wumeiwang.com/hdgw/model/lib/juicer/seajs-juicer-min.js',
        'lib': 'http://a.myhd.wumeiwang.com/hdgw/model/lib/dist/lib.js',
        'wmupload': 'http://a.myhd.wumeiwang.com/hdgw/model/wmupload/dist/wmupload.js',
        'wmbox': 'http://a.myhd.wumeiwang.com/hdgw/model/wmbox/dist/wmbox.js',
        'wmpage': 'http://a.myhd.wumeiwang.com/hdgw/model/wmpage/dist/wmpage.js',
        'verification': 'http://a.myhd.wumeiwang.com/hdgw/model/wmverification/dist/wmverification.js',
        'wmupload': 'http://a.myhd.wumeiwang.com/hdgw/model/wmupload/dist/wmupload.js',
        'jquery.ui.core': 'http://a.myhd.wumeiwang.com/hdgw/model/seajs_jqueryui/development-bundle/ui/jquery.ui.core.js',
        'jquery.ui.widget': 'http://a.myhd.wumeiwang.com/hdgw/model/seajs_jqueryui/development-bundle/ui/jquery.ui.widget.js',
        'jquery.ui.datepicker': 'http://a.myhd.wumeiwang.com/hdgw/model/seajs_jqueryui/development-bundle/ui/jquery.ui.datepicker.js',
        'datepicker-zh-CN': 'http://a.myhd.wumeiwang.com/hdgw/model/seajs_jqueryui/development-bundle/ui/i18n/jquery.ui.datepicker-zh-CN.js',
        'core-css': 'http://a.myhd.wumeiwang.com/hdgw/model/seajs_jqueryui/development-bundle/themes/base/jquery.ui.core.css#',
        'theme-css': 'http://a.myhd.wumeiwang.com/hdgw/model/seajs_jqueryui/development-bundle/themes/base/jquery.ui.theme.css#',
        'datepicker-css': 'http://a.myhd.wumeiwang.com/hdgw/model/seajs_jqueryui/development-bundle/themes/base/jquery.ui.datepicker.css#',
        'wmtips': 'http://a.myhd.wumeiwang.com/hdgw/model/wmtips/dist/wmtips.js',
        'qq_server': 'http://a.myhd.wumeiwang.com/hdgw/view/public/wm_qq_server/dist/qq_server.js',
        'wmlazyload': 'http://a.myhd.wumeiwang.com/hdgw/model/wmlazyload/dist/wmlazyload.js'
    },
    'map': [
       [/^(.*\.(?:css|js))(.*)$/i, '$1?t=2014081501']
    ]
});
(function () {
    var dev = false, //上线时，修改为false
        scripts = document.scripts,
        script = scripts[scripts.length - 1],
        boot = script.getAttribute('data-init'),
        dir = script.getAttribute('src');

    dir = dir.slice(0, dir.lastIndexOf('/') + 1);
    //dev 
    if (dev) {
        dir = dir + 'src/';
    } else {
        dir = dir + 'dist/';
    }
    /*
     * 上面获取路径脚本需要立刻执行
     * 将加载脚本放到domReady后执行，避免ie浏览器终止操作错误
     */
    seajs.use('jquery', function ($) {
        $(function () {
            seajs.use('public');
            seajs.use('operationsPublic');
            if (boot) {
                seajs.use(dir + boot);
            }
        });
    });
})();

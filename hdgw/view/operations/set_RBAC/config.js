seajs.config({
    'alias': {
        'domains': 'http://a.myhd.wumeiwang.com/hdgw/model/domains/dist/domains.js',
        'public': 'http://a.myhd.wumeiwang.com/hdgw/view/public/dist/public.js',
        'operationsPublic': 'http://a.myhd.wumeiwang.com/hdgw/view/operations/public/dist/public.js',
        'jquery': 'http://a.myhd.wumeiwang.com/hdgw/model/lib/jquery/seajs-jquery-1.8.3.min.js',
        'juicer': 'http://a.myhd.wumeiwang.com/hdgw/model/lib/juicer/seajs-juicer-min.js',
        'lib': 'http://a.myhd.wumeiwang.com/hdgw/model/lib/dist/lib.js',
        'juicer': 'http://a.myhd.wumeiwang.com/hdgw/model/lib/juicer/seajs-juicer-min.js',
        'wmbox': 'http://a.myhd.wumeiwang.com/hdgw/model/wmbox/dist/wmbox.js',
        'wmpage': 'http://a.myhd.wumeiwang.com/hdgw/model/wmpage/dist/wmpage.js',
        'verification': 'http://a.myhd.wumeiwang.com/hdgw/model/wmverification/dist/wmverification.js',
        'classbox': 'http://a.myhd.wumeiwang.com/hdgw/model/wmclassbox/dist/classbox.js',
        'chk_model': 'http://a.myhd.wumeiwang.com/hdgw/view/operations/set_RBAC/dist/chk_model.js',
        'chk_model_page': 'http://a.myhd.wumeiwang.com/hdgw/view/operations/set_RBAC/dist/chk_model_page.js',
        'api': 'http://a.myhd.wumeiwang.com/hdgw/view/operations/set_RBAC/dist/api.js'
    },
    'map': [
       [/^(.*\.(?:css|js))(.*)$/i, '$1?t=2014111101']
    ],
    debug:2
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

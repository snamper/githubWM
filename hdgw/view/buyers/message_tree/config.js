seajs.config({
    'alias': {
        'domains': 'http://a.myhd.wumeiwang.com/hdgw/model/domains/dist/domains.js',
        'public': 'http://a.myhd.wumeiwang.com/hdgw/view/public/dist/public.js',
        'buyersPublic': 'http://a.myhd.wumeiwang.com/hdgw/view/buyers/public/dist/public.js',
        'lib': 'http://a.myhd.wumeiwang.com/hdgw/model/lib/dist/lib.js',
        'jquery': 'http://a.myhd.wumeiwang.com/hdgw/model/lib/jquery/seajs-jquery-1.8.3.min.js',
        'juicer': 'http://a.myhd.wumeiwang.com/hdgw/model/lib/juicer/seajs-juicer-min.js',
        'points_promotion': "http://a.myhd.wumeiwang.com/hdgw/view/public/points_promotion/dist/points_promotion.js",
        'wmbox': 'http://a.myhd.wumeiwang.com/hdgw/model/wmbox/dist/wmbox.js',
        'forimg': 'http://a.myhd.wumeiwang.com/hdgw/model/wmforimg/dist/forimg.js',
        'wmpage': 'http://a.myhd.wumeiwang.com/hdgw/model/wmpage/dist/wmpage.js',
        'site_in_message': 'http://a.myhd.wumeiwang.com/hdgw/view/public/wm_user_relationship/dist/site_in_message.js',
        'friend': 'http://a.myhd.wumeiwang.com/hdgw/view/public/wm_user_relationship/dist/friend.js',
        'wmtips': 'http://a.myhd.wumeiwang.com/hdgw/model/wmtips/dist/wmtips.js',
        'wmverification': 'http://a.myhd.wumeiwang.com/hdgw/model/wmverification/dist/wmverification.js',
    },
    'map': [
       [/^(.*\.(?:css|js))(.*)$/i, '$1?t=2014090501']
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
            seajs.use('buyersPublic');
            if (boot) {
                seajs.use(dir + boot);
            }
        });
    });
})();

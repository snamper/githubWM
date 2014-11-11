seajs.config({
    'base': '/',
    'alias': {
        'domains': 'http://a.myhd.wumeiwang.com/hdgw/model/domains/dist/domains.js',
        'public': 'http://a.myhd.wumeiwang.com/hdgw/view/public/dist/public.js',
        'crowdAgoPublic': 'http://a.myhd.wumeiwang.com/hdgw/view/crowd/ago/public/dist/public.js',
        'jquery': 'http://a.myhd.wumeiwang.com/hdgw/model/lib/jquery/seajs-jquery-1.8.3.min.js',
        'juicer': 'http://a.myhd.wumeiwang.com/hdgw/model/lib/juicer/seajs-juicer-min.js',
        'lib': 'http://a.myhd.wumeiwang.com/hdgw/model/lib/dist/lib.js',
        'wmbox': 'http://a.myhd.wumeiwang.com/hdgw/model/wmbox/dist/wmbox.js',
        'search_crowd': 'http://a.myhd.wumeiwang.com/hdgw/view/crowd/public/search_crowd/dist/search_crowd.js',
        'friend': 'http://a.myhd.wumeiwang.com/hdgw/view/public/wm_user_relationship/dist/friend.js'
    },
    'map': [
       [/^(.*\.(?:css|js))(.*)$/i, '$1?t=2014102902']
    ]
});
(function () {
    var dev = false,  //上线时，修改为false
		scripts = document.scripts,
		script = scripts[scripts.length - 1],
		boot = script.getAttribute('data-init'),
		dir = script.getAttribute('src')
    ;
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
            seajs.use('crowdAgoPublic');
            if (boot) {
                seajs.use(dir + boot);
            }
        });
    });
})();
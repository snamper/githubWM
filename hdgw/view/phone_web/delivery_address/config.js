seajs.config({
    'base': '/',
    'alias': {
        'domains': 'http://a.myhd.wumeiwang.com/hdgw/model/domains/dist/domains.js',
        'phonePublic': 'http://a.myhd.wumeiwang.com/hdgw/view/phone_web/public/dist/public.js',
        'zepto': 'http://a.myhd.wumeiwang.com/hdgw/model/lib/zepto/seajs-zepto-min.js',
        'touchjs': 'http://a.myhd.wumeiwang.com/hdgw/model/lib/zepto/seajs-touch-min.js',
        'jquery': 'http://a.myhd.wumeiwang.com/hdgw/model/lib/jquery/seajs-jquery-1.8.3.min.js',
        'jquerymobile': 'http://a.myhd.wumeiwang.com/hdgw/model/lib/jquery/jquery.mobile.custom.min.js',
        'wmarea': 'http://a.myhd.wumeiwang.com/hdgw/model/wmarea/dist/wmarea.js',
        'wmverification': 'http://a.myhd.wumeiwang.com/hdgw/model/wmverification/dist/wmverification.js'
    },
    'map': [
       [/^(.*\.(?:css|js))(.*)$/i, '$1?t=2014011101']
    ]
});
(function () {
    var scripts = document.scripts,
       script = scripts[scripts.length - 1],
       boot = script.getAttribute('data-init'),
       dir = script.getAttribute('src');
    dir = dir.slice(0, dir.lastIndexOf('/') + 1);
    seajs.use('zepto', function ($) {
        $(function () {
            seajs.use('phonePublic');
            if (boot) {
                seajs.use(dir + "dist/" + boot);
            }
        });
    });
})();

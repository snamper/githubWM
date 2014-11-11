seajs.config({
    'base': '/',
    'alias': {
        'domains': 'http://a.myhd.wumeiwang.com/hdgw/model/domains/dist/domains.js',
        'public': 'http://a.myhd.wumeiwang.com/hdgw/view/public/dist/public.js',
        'afterPublic': 'http://a.myhd.wumeiwang.com/hdgw/view/after/public/dist/public.js',
        'jquery': 'http://a.myhd.wumeiwang.com/hdgw/model/lib/jquery/seajs-jquery-1.8.3.min.js',
        'lib': 'http://a.myhd.wumeiwang.com/hdgw/model/lib/dist/lib.js',
        'wmverification': 'http://a.myhd.wumeiwang.com/hdgw/model/wmverification/dist/wmverification.js',
        'wmtips': 'http://a.myhd.wumeiwang.com/hdgw/model/wmtips/dist/wmtips.js',
        'wmbox': 'http://a.myhd.wumeiwang.com/hdgw/model/wmbox/dist/wmbox.js'
    },
    'map': [
       [/^(.*\.(?:css|js))(.*)$/i, '$1?t=2014011101']
    ]
});
(function () {
    seajs.use('jquery', function ($) {
        $(function () {
            seajs.use('public');
            seajs.use('afterPublic');
            seajs.use('http://a.myhd.wumeiwang.com/hdgw/view/security/bind/dist/bind_phone.js');
        });
    });
})();

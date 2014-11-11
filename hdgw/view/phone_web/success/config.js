seajs.config({
    'base': '/',
    'alias': {
        'domains': 'http://a.myhd.wumeiwang.com/hdgw/model/domains/dist/domains.js',
        'phonePublic': 'http://a.myhd.wumeiwang.com/hdgw/view/phone_web/public/dist/public.js',
        'zepto': 'http://a.myhd.wumeiwang.com/hdgw/model/lib/zepto/seajs-zepto-min.js'
    },
    'map': [
       [/^(.*\.(?:css|js))(.*)$/i, '$1?t=2014082101']
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

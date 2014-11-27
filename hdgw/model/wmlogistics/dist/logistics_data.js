define(function(require,exports,module){var a=require("http://a.myhd.wumeiwang.com/hdgw/model/domains/dist/domains.js");var b={list:[{key:"A",list:[{key:"auspost",name:"澳大利亚邮政"},{key:"aae",name:"AAE"},{key:"anxindakuaixi",name:"安信达"}]},{key:"B",list:[{key:"baifudongfang",name:"百福东方"},{key:"bht",name:"BHT"},{key:"youzhengguonei",name:"包裹/平邮/挂号信"},{key:"bangsongwuliu",name:"邦送物流"}]},{key:"C",list:[{key:"cces",name:"希伊艾斯（CCES）"},{key:"coe",name:"中国东方（COE）"},{key:"chuanxiwuliu",name:"传喜物流"},{key:"canpost",name:"加拿大邮政"},{key:"canpostfr",name:"加拿大邮政"}]},{key:"D",list:[{key:"datianwuliu",name:"大田物流"},{key:"debangwuliu",name:"德邦物流"},{key:"dpex",name:"DPEX"},{key:"dhl",name:"DHL-中国件"},{key:"dhlen",name:"DHL-国际件"},{key:"dhlde",name:"DHL-德国件件"},{key:"dsukuaidi",name:"D速快递"},{key:"disifang",name:"递四方"}]},{key:"E",list:[{key:"ems",name:"EMS"},{key:"emsen",name:"EMSEN"}]},{key:"F",list:[{key:"fedex",name:"Fedex-国际件"},{key:"fedexcn",name:"Fedex-国内件"},{key:"fedexus",name:"Fedex-美国件"},{key:"feikangda",name:"飞康达物流"},{key:"feikuaida",name:"飞快达"},{key:"rufengda",name:"凡客如风达"},{key:"fengxingtianxia",name:"风行天下"},{key:"feibaokuaidi",name:"飞豹快递"}]},{key:"G",list:[{key:"ganzhongnengda",name:"港中能达"},{key:"guotongkuaidi",name:"国通快递"},{key:"guangdongyouzhengwuliu",name:"广东邮政"},{key:"youzhengguoji",name:"国际邮件"},{key:"gls",name:"GLS"},{key:"gongsuda",name:"共速达"}]},{key:"H",list:[{key:"huitongkuaidi",name:"汇通快运"},{key:"huiqiangkuaidi",name:"汇强快递"},{key:"tiandihuayu",name:"华宇物流"},{key:"hengluwuliu",name:"恒路物流"},{key:"huaxialongwuliu",name:"华夏龙"},{key:"tiantian",name:"海航天天"},{key:"haiwaihuanqiu",name:"海外环球"},{key:"hebeijianhua",name:"河北建华"},{key:"haimengsudi",name:"海盟速递"},{key:"huaqikuaiyun",name:"华企快运"},{key:"haihongwangsong",name:"山东海红"}]},{key:"J",list:[{key:"jiajiwuliu",name:"佳吉物流"},{key:"jiayiwuliu",name:"佳怡物流"},{key:"jiayunmeiwuliu",name:"加运美"},{key:"jinguangsudikuaijian",name:"京广速递"},{key:"jixianda",name:"急先达"},{key:"jinyuekuaidi",name:"晋越快递"},{key:"jietekuaidi",name:"捷特快递"},{key:"jindawuliu",name:"金大物流"},{key:"jialidatong",name:"嘉里大通"}]},{key:"K",list:[{key:"kuaijiesudi",name:"快捷速递"},{key:"kangliwuliu",name:"康力物流"},{key:"kuayue",name:"跨越物流"}]},{key:"L",list:[{key:"lianhaowuliu",name:"联昊通"},{key:"longbanwuliu",name:"龙邦物流"},{key:"lanbiaokuaidi",name:"蓝镖快递"},{key:"lejiedi",name:"乐捷递"},{key:"lianbangkuaidi",name:"联邦快递"},{key:"lianbangkuaidien",name:"联邦快递-国际"},{key:"lijisong",name:"立即送"},{key:"longlangkuaidi",name:"隆浪快递"}]},{key:"M",list:[{key:"menduimen",name:"门对门"},{key:"meiguokuaidi",name:"美国快递"},{key:"mingliangwuliu",name:"明亮物流"}]},{key:"O",list:[{key:"ocs",name:"OCS"},{key:"ontrac",name:"onTrac"}]},{key:"Q",list:[{key:"quanchenkuaidi",name:"全晨快递"},{key:"quanjitong",name:"全际通"},{key:"quanritongkuaidi",name:"全日通"},{key:"quanyikuaidi",name:"全一快递"},{key:"quanfengkuaidi",name:"全峰快递"},{key:"sevendays",name:"七天连锁"}]},{key:"S",list:[{key:"shentong",name:"申通"},{key:"shunfeng",name:"顺丰速递"},{key:"shunfengen",name:"顺丰国际"},{key:"santaisudi",name:"三态速递"},{key:"shenghuiwuliu",name:"盛辉物流"},{key:"suer",name:"速尔物流"},{key:"shengfengwuliu",name:"盛丰物流"},{key:"shangda",name:"上大物流"},{key:"saiaodi",name:"赛澳递"},{key:"sxhongmajia",name:"山西红马甲"},{key:"shenganwuliu",name:"圣安物流"},{key:"suijiawuliu",name:"穗佳物流"}]},{key:"T",list:[{key:"tnt",name:"TNT"},{key:"tnten",name:"TNTEN"},{key:"tonghetianxia",name:"通和天下"}]},{key:"U",list:[{key:"ups",name:"UPS"},{key:"upsen",name:"UPSEN"},{key:"youshuwuliu",name:"优速物流"},{key:"usps",name:"USPS"}]},{key:"W",list:[{key:"wanjiawuliu",name:"万家物流"},{key:"wanxiangwuliu",name:"万象物流"},{key:"weitepai",name:"微特派"}]},{key:"X",list:[{key:"xinbangwuliu",name:"新邦物流"},{key:"xinfengwuliu",name:"信丰物流"},{key:"neweggozzo",name:"新蛋奥硕物流"},{key:"hkpost",name:"香港邮政"}]},{key:"Y",list:[{key:"yuantong",name:"圆通速递"},{key:"yunda",name:"韵达快运"},{key:"yuntongkuaidi",name:"运通快递"},{key:"yuanchengwuliu",name:"远成物流"},{key:"yafengsudi",name:"亚风速递"},{key:"yibangwuliu",name:"一邦速递"},{key:"yuanweifeng",name:"源伟丰快递"},{key:"yuanzhijiecheng",name:"元智捷诚"},{key:"yuefengwuliu",name:"越丰物流"},{key:"yuananda",name:"源安达"},{key:"yuanfeihangwuliu",name:"原飞航"},{key:"zhongxinda",name:"忠信达快递"},{key:"yinjiesudi",name:"银捷速递"}]},{key:"Z",list:[{key:"zhongtong",name:"中通速递"},{key:"zhaijisong",name:"宅急送"},{key:"ztky",name:"中铁物流"},{key:"zhongtiewuliu",name:"中铁快运"},{key:"zhongyouwuliu",name:"中邮物流"},{key:"zhongsukuaidi",name:"中速快件"},{key:"zhimakaimen",name:"芝麻开门"},{key:"zhengzhoujianhua",name:"郑州建华"},{key:"zhongtianwanyun",name:"中天万运"}]}]};return b});
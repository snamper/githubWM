define(function(require,exports,module){var h=require("domains");var d=require("jquery"),a=require("wmlazyload"),f=require("wmpage"),c=require("juicer"),b=require("forimg");require("core-css");require("theme-css");require("datepicker-css");require("jquery.ui.core")(d);require("jquery.ui.widget")(d);require("jquery.ui.datepicker")(d);require("datepicker-zh-CN")(d);var g=function(){a.init();var j=c(["{@each data as item}",'<li class="for_img_item">','<a href="http://item.hdgw.com/${item.product_id}.html" target="_blank" title="${item.product_name}"><img src="${item.product_img_default}" /><span class="promotion_name">${item.product_name}</span></a>',"</li>","{@/each}"].join(""));d(".gifts_item").each(function(){var l=d(this),k=l.attr("data_id");d.ajax({url:h.member+"/asyn/present/promotion.json",data:{present_id:k||"13"},dataType:"jsonp",success:function(m){if(m.response.data){l.find(".wm_forimg_list").empty().append(j.render(m.response));if(l.find(".for_img_item").length>6){new b.Slide({forImgBoxEle:l.find(".promotion_box"),callback:function(){this.automatic(true)}})}}},error:function(){}})});if(global_setting&&global_setting.PageInfo&&global_setting.PageInfo.totalcount){var i=f.Create({url:h.sell+"/order/list?"+d(".seleft_box .wm_form").serialize(),element:".wm_page",size:global_setting.PageInfo.pagesize,index:global_setting.PageInfo.pageindex,sum:global_setting.PageInfo.totalcount,pagekey:global_setting.PageInfo.pagekey,front:true})}e()};var e=function(){var i=d("#page");i.find(".show_date_box").datepicker();i.on("click",".del",function(){var k=d(this),j=k.closest(".gifts_item");if(confirm("确定删除获赠记录吗？")){j.fadeOut(function(){j.remove()})}return false})};g()});
define(function(require,exports,module){var a=require("http://a.myhd.wumeiwang.com/hdgw/model/domains/dist/domains.js");var c=require("http://a.myhd.wumeiwang.com/hdgw/model/lib/jquery/seajs-jquery-1.8.3.min.js"),b=require("http://a.myhd.wumeiwang.com/hdgw/model/lib/juicer/seajs-juicer-min.js");var d=function(){var i,f,g,h,e;if(!("placeholder" in document.createElement("input"))){h=c("body");f='<label style="position:absolute;padding:0 5px;display:block;color:#ccc;cursor:text" class="placeholder_lable"></label>';i=c("[placeholder]:visible");i.each(function(){var l=c(this),k,j;g=c(f);k=l.attr("id");if(k){g.attr("for",k)}else{k="placeholderid"+Math.random()*999;g.attr("for",k);l.attr("id",k)}j=l.offset();j.top+=parseFloat(l.css("padding-top"));j.left+=parseFloat(l.css("padding-left"));g.offset(j);if(l.val()){g.css("display","none")}g.empty().append(l.attr("placeholder"));h.append(g)});i.on("focus",function(){var j=c(this);c(".placeholder_lable[for='"+j.attr("id")+"']").css("display","none")});i.on("blur",function(){var j=c(this);setTimeout(function(){!c.trim(j.val()).length&&c(".placeholder_lable[for='"+j.attr("id")+"']").css("display","block")},100)});c(window).on("resize.placeholder",function(){i.each(function(){var l=c(this),k,j;k=l.attr("id");j=l.offset();j.top+=parseFloat(l.css("padding-top"));j.left+=parseFloat(l.css("padding-left"));h.find(".placeholder_lable[for='"+k+"']").offset(j)})})}};exports.placeholder=d;exports.isPlaceholder=function(){return"placeholder" in document.createElement("input")}});
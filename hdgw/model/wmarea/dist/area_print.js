define(function(require,exports,module){var e=require("http://a.myhd.wumeiwang.com/hdgw/model/lib/jquery/seajs-jquery-1.8.3.min.js");var f=require("src/area_data.js");var a=[],h=[],g=[];a.push("var _data = {</br>");a.push("</br>//省</br>");a.push("data_province: (function () {</br>");a.push("return {</br>");for(var d in f.data_province){h.push('"'+d+'0000":"'+f.data_province[d]+'"')}a.push(h.join(",</br>"));a.push("}");a.push("</br>})(),");a.push("</br>//市</br>");a.push("data_city: (function () {</br>");a.push("return {</br>");for(d in f.data_city){h=[];g=[];g.push('"'+d+'0000": [');var b=f.data_city[d];for(var c in b){b[c].value&&h.push('{value:"'+b[c].value+'00",name:"'+b[c].name+'"}')}g.push(h.join(",")+"],</br>");a.push(g.join(""))}a.push("</br>};");a.push("</br>})(),");a.push("</br>//区/县</br>");a.push("data_districts: (function () {</br>");a.push("return {</br>");for(d in f.data_districts){h=[];g=[];g.push('"'+d+'00": [');var b=f.data_districts[d];for(var c in b){b[c].value&&h.push('{value:"'+b[c].value+'",name:"'+b[c].name+'"}')}g.push(h.join(",")+"],</br>");a.push(g.join(""))}a.push("</br>};");a.push("</br>})(),");a.push("</br>};");e("body").empty().append(a.join(""))});
/**
 * Created by Administrator on 2017/1/6.
 */
//获取地址栏参数
(function($){
    $.fn.zmBind=function(event,selector,fn){
        if(arguments.length==2&&typeof selector==='function'){
            fn=selector;
            selector=undefined;
        }
        return this.on(event,selector,function(e){
            fn.apply(this,[e]);
        });
    };
    $.fn.zmActionOn = function(event,selector,fn){
        if(arguments.length==2&&typeof selector==='function'){
            fn=selector;
            selector=undefined;
        }
        return this.on(event,selector,function(e){
            zmEditor.action.getInitState();
            fn.apply(this,[e]);
            zmEditor.action.save();
        });
    };
    $.zmGetUrlParam = function(name) {
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r!=null) return unescape(r[2]); return null;
    };
    $.zmAjax = function(obj){
        if(!obj.error){
            obj.error=function(){alert('数据库连接出错啦啦啦啦~~~~')}
        }
        return $.ajax(obj)
    }
    $.fn.zmGetColor = function() {
        $('#picker01').colpick({flat:true});
    };
    /*颜色控件*/
    // $.fn.zmColorPicker = function(e){
    //     var _this = $(this);
    //     var div=$('<div id="content" class="zm-colorPicker-more zm-movableBox">'
    //         +'<div class="zm-colorPicker-topStyle zm-movable-header"><span class="zm-colorPick-titleText">颜色拾取器</span><span id="zm-renoveColorPicker" class="fa fa-remove"></div>'
    //         +'<div id="pickers0">'
    //         +'<div id="picker01"></div>'
    //         +'<div id="addcolor1"><span >经典颜色：</span><ul id="zm-frequentlyColorSpan">'
    //         +'<li style="background-color: #d7d7d7;"></li><li style="background-color: #bcbcbc;"></li><li style="background-color: #a1a1a1;"></li><li style="background-color: #868686;"></li><li style="background-color: #6b6b6b;"></li><li style="background-color: #434343;"></li><li style="background-color: #1b1b1b;"></li>'
    //         +'<li style="background-color: #ffebcd;"></li><li style="background-color: #ffdead;"></li><li style="background-color:#deb887;"></li><li style="background-color: #b99d5a;"></li><li style="background-color: #c59544;"></li><li style="background-color: #cd853f;"></li><li style="background-color: #d2691e;"></li>'
    //         +'<li style="background-color:#ffa07a;"></li><li style="background-color: #ff7f50;"></li><li style="background-color:#ff6347;"></li><li style="background-color:#ff4500;"></li><li style="background-color: #f4b613 ;"></li><li style="background-color: #ffa500;"></li><li style="background-color:#ff8c00;"></li>'
    //         +'<li style="background-color:#ffb3a7;"></li><li style="background-color:#f47983;"></li><li style="background-color: #db5a6b;"></li><li style="background-color:#c93756;"></li><li style="background-color:#ff4777;"></li><li style="background-color: #f00056;"></li><li style="background-color: #ff2121;"></li>'
    //         +'<li style="background-color:#bce672;"></li><li style="background-color: #c9dd22;"></li><li style="background-color: #afdd22;"></li><li style="background-color: #96ce54;"></li><li style="background-color: #4ab1a7;"></li><li style="background-color: #21a675;"></li><li style="background-color: #057748;"></li>'
    //         +'<li style="background-color: #dda0dd;"></li><li style="background-color:#ee82ee;"></li><li style="background-color:#da70d6;"></li><li style="background-color:#ba55d3;"></li><li style="background-color:#9370db;"></li><li style="background-color:#8a2be2;"></li><li style="background-color: #9400d3;"></li>'
    //         +'<li style="background-color:#70f3ff;"></li><li style="background-color: #3eede7;"></li><li style="background-color:#44cef6;"></li><li style="background-color: #1685a9;"></li><li style="background-color:#177cb0;"></li><li style="background-color:#2e4e7e;"></li><li style="background-color:#003472;"></li>'
    //         +'<li style="background-color:#a88462;"></li><li style="background-color:#896c39;"></li><li style="background-color:#845a33;"></li><li style="background-color:#955539;"></li><li style="background-color:#845a33;"></li><li style="background-color:#6e511e;"></li><li style="background-color:#7c4b00;"></li>'
    //         +'</ul></div>'
    //         +'<div id="zm-addColorBtn">添加到喜欢列表</div>'
    //         +'<span id="zm-eyedropper" class="fa fa-eyedropper"></span>'
    //         // +'<span id="zm-renoveColorPicker" class="fa fa-remove"></span>'
    //         +'<div id="addcolor"><span>我喜欢的颜色：</span><ul id="zm-newColorSpan"><li class="zm-ColorSpan001"></li><li class="zm-ColorSpan001"></li><li class="zm-ColorSpan001"></li><li class="zm-ColorSpan001"></li><li class="zm-ColorSpan001"></li><li class="zm-ColorSpan001"></li><li class="zm-ColorSpan001"></li><li class="zm-ColorSpan001"></li><li class="zm-ColorSpan001"></li><li class="zm-ColorSpan001"></li><li class="zm-ColorSpan001"></li><li class="zm-ColorSpan001"></li><li class="zm-ColorSpan001"></li><li class="zm-ColorSpan001"></li><li class="zm-ColorSpan001"></li><li class="zm-ColorSpan001"></li><li class="zm-ColorSpan001"></li><li class="zm-ColorSpan001"></li><li class="zm-ColorSpan001"></li><li class="zm-ColorSpan001"></li><ul></div>'
    //         +'</div>'
    //         +'</div>');
    //     _this.append(div);
    //     //console.log("成功添加");
    // };
    $.fn.zmColorPicker = function(e){
        var _this = $(this);
        var div=$('<div id="content" class="zm-colorPicker-more zm-movableBox">'
            +'<div class="zm-colorPicker-topStyle zm-movable-header"><span class="zm-colorPick-titleText">颜色拾取器</span><span id="zm-renoveColorPicker" class="fa fa-remove"></div>'
            +'<div id="pickers0">'
            +'<span class="zm-colorPick-spanPosition zm-colorPickspan1">新颜色</span><span class="zm-colorPick-spanPosition zm-colorPickspan2">当前色</span><span class="zm-colorPick-spanPosition zm-colorPickspan3">RGB</span><span class="zm-colorPick-spanPosition zm-colorPickspan4">HLS</span>'
            +'<div id="addcolor1"><span >颜色选择：</span><span >经典颜色：</span><ul id="zm-frequentlyColorSpan">'
            +'<li style="background-color: #d7d7d7;"></li><li style="background-color: #bcbcbc;"></li><li style="background-color: #a1a1a1;"></li><li style="background-color: #868686;"></li><li style="background-color: #6b6b6b;"></li><li style="background-color: #434343;"></li><li style="background-color: #1b1b1b;"></li>'
            +'<li style="background-color: #ffebcd;"></li><li style="background-color: #ffdead;"></li><li style="background-color:#deb887;"></li><li style="background-color: #b99d5a;"></li><li style="background-color: #c59544;"></li><li style="background-color: #cd853f;"></li><li style="background-color: #d2691e;"></li>'
            +'<li style="background-color:#ffa07a;"></li><li style="background-color: #ff7f50;"></li><li style="background-color:#ff6347;"></li><li style="background-color:#ff4500;"></li><li style="background-color: #f4b613 ;"></li><li style="background-color: #ffa500;"></li><li style="background-color:#ff8c00;"></li>'
            +'<li style="background-color:#ffb3a7;"></li><li style="background-color:#f47983;"></li><li style="background-color: #db5a6b;"></li><li style="background-color:#c93756;"></li><li style="background-color:#ff4777;"></li><li style="background-color: #f00056;"></li><li style="background-color: #ff2121;"></li>'
            +'<li style="background-color:#bce672;"></li><li style="background-color: #c9dd22;"></li><li style="background-color: #afdd22;"></li><li style="background-color: #96ce54;"></li><li style="background-color: #4ab1a7;"></li><li style="background-color: #21a675;"></li><li style="background-color: #057748;"></li>'
            +'<li style="background-color: #dda0dd;"></li><li style="background-color:#ee82ee;"></li><li style="background-color:#da70d6;"></li><li style="background-color:#ba55d3;"></li><li style="background-color:#9370db;"></li><li style="background-color:#8a2be2;"></li><li style="background-color: #9400d3;"></li>'
            +'<li style="background-color:#70f3ff;"></li><li style="background-color: #3eede7;"></li><li style="background-color:#44cef6;"></li><li style="background-color: #1685a9;"></li><li style="background-color:#177cb0;"></li><li style="background-color:#2e4e7e;"></li><li style="background-color:#003472;"></li>'
            +'<li style="background-color:#a88462;"></li><li style="background-color:#896c39;"></li><li style="background-color:#845a33;"></li><li style="background-color:#955539;"></li><li style="background-color:#845a33;"></li><li style="background-color:#6e511e;"></li><li style="background-color:#7c4b00;"></li>'
            +'</ul></div>'
            +'<div id="zm-addColorBtn"><span class="zm-colorPick-spanIcon"></span>添加到我喜欢</div>'
            +'<span id="zm-eyedropper" class="fa fa-eyedropper"></span>'
            +'<div id="addcolor"><span>我喜欢的颜色：</span><ul id="zm-newColorSpan"><li class="zm-ColorSpan001"></li><li class="zm-ColorSpan001"></li><li class="zm-ColorSpan001"></li><li class="zm-ColorSpan001"></li><li class="zm-ColorSpan001"></li><li class="zm-ColorSpan001"></li><li class="zm-ColorSpan001"></li><li class="zm-ColorSpan001"></li><li class="zm-ColorSpan001"></li><li class="zm-ColorSpan001"></li><li class="zm-ColorSpan001"></li><li class="zm-ColorSpan001"></li><li class="zm-ColorSpan001"></li><li class="zm-ColorSpan001"></li><li class="zm-ColorSpan001"></li><li class="zm-ColorSpan001"></li><li class="zm-ColorSpan001"></li><li class="zm-ColorSpan001"></li><li class="zm-ColorSpan001"></li><li class="zm-ColorSpan001"></li><ul></div>'
            +'<div id="picker01"></div>'
            +'</div>'
            +'</div>');
        _this.append(div);
        //console.log("成功添加");
    };

})(jQuery);


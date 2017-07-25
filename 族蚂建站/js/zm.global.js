/**
 * Created by Administrator on 2017/7/6.
 */
/*
 * name:switch
 * html:<label class="zm-switch-box"><span class="zm-switch"><span class="fa fa-check "></span></span></label>
 * */
$(document).on("click",".zm-switch-box",function(){
    $(this).toggleClass("zm-switch-box-on");
    $(this).find('.fa').toggleClass('fa-check fa-minus')
});
/*
 * name:checkbox
 * html:<label class="zm-checkbox-box"><span class="zm-checkbox"><span class="zm-checkbox-icon fa fa-check"></span></span><span class="zm-checkbox-name">密码限制</span><span class="zm-checkbox-prompt">（*访问时需输入指定密码）</span></label>
 * */
$(document).on("click",".zm-checkbox-box",function(){
    var _this = $(this);
    _this.find(".zm-checkbox-icon").toggle();
    _this.siblings(".zm-checkbox-box").find(".zm-checkbox-icon").hide();
});
/*
 * name：tooltip
 /* 鼠标滑过提示效果   */
/* 为元素添加zm-tooltip类名，添加属性data-title="需提示的文字"
 * */
$(document).on('click','.zm-tooltip',function(){
    $('.zm-tooltipBox').remove();
});
$(document).on("mouseover",".zm-tooltip",function(e){
    var _this = $(this);
    $('body').append('<div class="zm-tooltipBox"></div>')
    var _tooltip = $('.zm-tooltipBox');
    _tooltip.html(_this.attr("data-zm-title")).stop().fadeIn();
    var l=_this.offset().left;
    var t=_this.offset().top;
    var w=_this.outerWidth();
    var h=_this.outerHeight();
    var tip_w=_tooltip.outerWidth();
    var tip_h=_tooltip.outerHeight();
    _tooltip.css({"left":l-tip_w/2+w/2,"top":t-tip_h-15})
});
$(document).on("mouseout",".zm-tooltip",function(){
    $(".zm-tooltipBox").remove();
});

String.prototype.toBoolean = function(){
    return this.valueOf()==='true'?true:false
};
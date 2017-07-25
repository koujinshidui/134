
/**
 * Created by Administrator on 2016/11/27.
 */
$(function(){
    //
    zmEditor.init();
});
//jsonp请求数据
//        var list
//            function jsonpCallback(result) {
//                //console.log(JSON.parse(result))
//            }
//        var JSONP=document.createElement("script");
//        JSONP.type="text/javascript";
//        JSONP.src="http://192.168.0.127:8080/sysComponent/queryForEditor?callback=jsonpCallback";
//        document.getElementsByTagName("head")[0].appendChild(JSONP);
//$.getJSON("http://192.168.0.127:8080/sysComponent/queryForEditor?callback=?",
//    function(result) {
//        console.log(result)
//    });
//$.ajax({
//    url:"http://192.168.0.127:8080/sysComponent/queryForEditor",
//    dataType:'jsonp',
//    data:'',
//    jsonp:'callback',
//    success:function(result) {
//        console.log(result)
//    },
//    timeout:3000
//});
//进入编辑器选择类型
$('.zm-editor-type li').click(function(){
    $('.zm-editor-beforeBox').remove()
})
var windowH=$(window).height();
$(function(){
    $('.zm-helpCenter-body-part2').css({'height':windowH-168}).mCustomScrollbar({theme:"minimal"});
    $(".zm-components").find(".zm-components-ulBox>div").css({"height":windowH-200});
    $(".zm-components").find(".zm-components-ulBox>div").mCustomScrollbar({theme:"minimal"});//滚动条
    $(".zm-components").find(".zm-components-detail-term").css({"height":windowH-200});
    var id = $.zmGetUrlParam('fId')
    $.ajax({
        url: zmEditor.url.getComponentById,
        type : "post",
        data : {"id":id},
        success: function(e){
            var data = e.data;
            zmManage.componentEditor()
            zmManage.component.myList.edit(id,data.fName,data.fContext,data.fType,data.fComponentType)
            $('.zm-editor-beforeBox').hide();
        },
        error:function(){
            console.log("error")
        }
    })
})
//展开组件列表
$(document).on('click',".zm-components-type-switch",function(){
    var _this = $(this);
    if($('.zm-components-detail').data('isSort')){
        zmManage.componentListIsSort();
        return;
    }
    // _this.find(".fa").toggle();
    var componentsUl = _this.siblings('.zm-components-ulBox');
    componentsUl.stop().slideToggle();
    $('.zm-components-type-switch').toggleClass('zm-components-type-switch-cur');
    $('.zm-components-li-svgBox2').remove();
    $('.zm-components-type-curLi').removeClass('zm-components-type-curLi')
    // var componentsTitle = _this.find('.zm-components-type-switch-title');
    // if(componentsUl.css('display')=="none"){
    //     componentsTitle.hide();
    // }
    // else{
    //     componentsTitle.show();
    // }
    $(".zm-components-detail").stop().fadeOut()
})
/*关闭组件详情列表*/
$(document).on("click",".zm-components-detail-close",function(){
    if($('.zm-components-detail').data('isSort')){
        zmManage.componentListIsSort()();
        return;
    }
    $('.zm-components-li-svgBox2').remove();
    $(".zm-components-detail").hide()
});
/*点击组件类型，显示组件详情*/
$(".zm-components-ul li").on("click",function(){
    zmEditor.component.showDetail(this);
});

/*窗口大小改变事件监听*/
$(window).resize(function(){
    windowH = $(window).height();
    $('.zm-helpCenter-body-part2').css({'height':windowH-168});
    $(".zm-components").find(".zm-components-ulBox>div").css({"height":windowH-200});
    $(".zm-components").find(".zm-components-detail-term").css({"height":windowH-200});
    //$('.zm-dialog-box .zm-dialog-content').css({"height":windowH-200});
    var w = parseInt($(".zm-editor-ruler-x-width").html());
    zmEditor.setRuler(w)
})
//换肤
//        $(".zm-skin li").click(function(){
//            var skin = $(this).attr("class");
//            console.log(skin);
//            var iClass =skin+" zm-header-top"
//            $(".zm-header-top").removeAttr("class").addClass(iClass)
//
//            ///radio.js
//        })
/*切换用户列表（暂时无用）*/
$(document).on('click','.zm-user-choice-siteBox-ul>li',function(){
    var _this = $(this);
    var choice = _this.html();
    var nowUser = _this.closest('.zm-user-choice-siteBox').find('.zm-user-choice-nowSite-val');
    nowUser.html(choice);
    nowUser.attr('title',choice)
})


// $(document).on("click",".zm-edit-slider-tabs .add",function(){
//     var a = $(".zm-edit-slider-val").val();
//     if (a >= 2 && a < 9) {
//         $(".zm-edit-slider-val").val(++a);
//     }
// });
// $(document).on("click",".zm-edit-slider-tabs .subtract",function(){
//     var a = $(".zm-edit-slider-val").val();
//     if (a > 2 && a <=9) {
//         $(".zm-edit-slider-val").val(--a);
//     }
// });


/**
 * Created by guixuefeng on 2017/4/25.
 */
$.fn.zmchoiceRadio=function () {
    // e.stopPropagation();
    //上下滚动条zm-choiceVideo-middleL
    $(".zm-choiceFile-optionsList").mCustomScrollbar({theme:"minimal"});
    $(".zm-choiceGoodsRm").mCustomScrollbar({theme:"minimal"});
    $(".zm-choiceService-middleLTop").mCustomScrollbar({theme:"minimal"});
    $(".zm-choiceGoods-middleLTop").mCustomScrollbar({theme:"minimal"});
    $(".zm-choiceRadio-middleL").mCustomScrollbar({theme:"minimal"});
    $(".zm-choiceRadio-middleR").mCustomScrollbar({theme:"minimal"});
    $(".zm-choiceFile-middleWrap").mCustomScrollbar({theme:"minimal"});
    $(".zm-choiceFileCopyToClassify1").mCustomScrollbar({theme:"minimal"});
    $(".zm-choicePicture-middleLTop").mCustomScrollbar({theme:"minimal"});
    $(".zm-choiceVideo-middleL").mCustomScrollbar({theme:"minimal"});
    // 展开提示删除重命名框
    $(document).off("click",".zm-choiceFile-tipSet");
    $(document).on("click",".zm-choiceFile-tipSet",function (e) {
        //$(this).parents(".left-level-main").find(".level-con").removeClass("active");
        $(this).find(".zm-choiceFile-tipSet-con").slideToggle(100);
        //$(this).closest(".zm-choiceFile-categroyStyle-wrap").find(".choiceFilel2-box").slideDown(200);
        //e.stopPropagation();
    });
    $(document).on("click",function(e){
        e = window.event || e;
        var obj = $(e.srcElement || e.target);
        var tipSet=obj.closest(".zm-choiceFile-tipSet");
        if(tipSet){
            $(".zm-choiceFile-tipSet-con").hide();
            tipSet.find(".zm-choiceFile-tipSet-con").show();
        }

    });
    //上传文件按钮的hover效果
    $(document).on("mouseover mouseout",".zm-choicePart-upFileBtn",function (event) {
        var _this=$(this)
        if(event.type=="mouseover"){
            _this.closest(".zm-choiceFile-btn2").addClass("zm-choiceFile-btnFile1");
        }else{
            _this.closest(".zm-choiceFile-btn2").removeClass("zm-choiceFile-btnFile1");
        }
    });
    //图片和视频头部的TAB切换
     $(".zm-choiceFile-topL").off("click");
     $(".zm-choiceFile-topL").on("click",function () {
         var _this=$(this);
         var index=_this.index();
         _this.addClass("zm-choiceFile-topL-nowClick").removeClass("zm-choiceFile-topL-lastClick").siblings().addClass("zm-choiceFile-topL-lastClick").removeClass("zm-choiceFile-topL-nowClick");
         _this.closest(".zm-choiceFile-top").next().find(".zm-choiceFile-middleBoxList").eq(index).show().siblings(".zm-choiceFile-middleBoxList").hide();
         if(index==1){
             _this.siblings(".zm-choiceFile-topTextTitle").hide();
         }else{
             _this.siblings(".zm-choiceFile-topTextTitle").show();
         }
     });
     //音频，专辑，新闻，博客的选择下拉框
    $(".top-iconSpan").off("click");
    $(".top-iconSpan").on("click",function () {
        $(this).siblings(".zm-choiceFile-optionsBox").find(".zm-choiceFile-optionsList").slideToggle();
    });

   // 图片列表的hover事件
   //  $(".zm-choiceR-lists").hover(function () {
   //      console.log(111111111)
   //      $(this).find(".zm-choiceRlist3").css("display","block");
   //      $(this).find(".zm-choiceRadio-cheak").css("display","block");
   //  },function () {
   //      $(this).find(".zm-choiceRlist3").css("display","none");
   //      if($(this).find(".zm-choiceRadio-cheak").hasClass("fa-check")){
   //          $(this).find(".zm-choiceRadio-cheak").css("display","block");
   //      }else{
   //          $(this).find(".zm-choiceRadio-cheak").css("display","none");
   //      }
   //  })
    //*****************
    $('.zm-choiceFile-wrap').on('mouseover mouseout','.zm-choiceFile-check',function(event){
        if(event.type=='mouseover'){
            $(this).find(".zm-choiceRlist3").css("display","block");
            $(this).find(".zm-choiceRlist4").css("display","block");
            $(this).find(".zm-choiceRadio-cheak").css("display","block");
        }else{
            $(this).find(".zm-choiceRlist3").css("display","none");
            $(this).find(".zm-choiceRlist4").css("display","none");
            if($(this).find(".zm-choiceRadio-cheak").hasClass("fa-check")){
                $(this).find(".zm-choiceRadio-cheak").css("display","block");
            }else{
                $(this).find(".zm-choiceRadio-cheak").css("display","none");
            }
        }
    });
    //搜索框样式变化
    $(document).find(".zm-choiceFile-search").on("focus",function () {
        $(this).attr("placeholder","")
    });
    $(document).find(".zm-choiceFile-search").on("blur",function () {
       var a=$(this).attr("data-type");
       var b="";
        switch (a){
            case "radio":
                b="请输入音频标题";
                break;
            case "album":
                b="请输入专辑标题";
                break;
            case "picture":
                b="请输入图片标题";
                break;
            case "video":
                b="请输入视频标题";
                break;
            case "news":
                b="请输入新闻标题";
                break;
            case "blogger":
                b="请输入博客标题";
                break;
            case "goods":
                b="请输入商品标题";
                break;
            case "service":
                b="请输入服务标题";
                break;
            case "file":
                b="请输入文件标题";
                break;
        }
        $(this).attr("placeholder",b)
    });
    //**********
    //图片列表被选中初始化
    //图片列表的选中
    //其它文件
    // $(".zm-choiceFile-wrap").off("click",".zm-choiceRadio-cheak");
    // $(".zm-choiceFile-wrap").on("click",".zm-choiceRadio-cheak",function () {
    //     var _this=$(this);
    //     //var a=_this.closest(".zm-choiceR-lists").find(".zm-choiceR-listWrap");
    //     _this.toggleClass("fa-check")
    //     zmChoiceRadio.choiceRadiolist();
    //     var a=$(".zm-choiceFile-wrap").find(".fa-check").length;
    //     $(".zm-choiceFile-allListCheckNumber").html(a)
    // });
    //**************
    $(".zm-choiceFile-wrap").off("click",".zm-choiceFile-check");
    $(".zm-choiceFile-wrap").on("click",".zm-choiceFile-check",function () {
        var _this=$(this);
        //var a=_this.closest(".zm-choiceR-lists").find(".zm-choiceR-listWrap");
        _this.find(".zm-choiceRadio-cheak").toggleClass("fa-check");
        zmChoiceRadio.choiceRadiolist();
        var a=$(".zm-choiceFile-middleBoxList1").find(".fa-check").length;
        $(".zm-choiceFile-allListCheckNumber").html(a)
    });
    //******************
    //新闻 博客
    // $(".zm-choiceFile-wrap").off("click",".zm-ChoiceNews-cheak");
    $(".zm-choiceFile-middleBoxList1").on("click",".zm-ChoiceNews-cheak",function () {
        var _this=$(this);
        _this.toggleClass("fa-check");
        var a=$(".zm-choiceFile-middleBoxList1").find(".fa-check").length;
        console.log(a)
        $(".zm-choiceFile-allListCheckNumber").html(a);
    });
    //全选
    $(".zm-choiceFilebtn-allCheck").off("click");
    $(".zm-choiceFilebtn-allCheck").on("click",function () {
        var _this=$(this);
        var a=_this.closest(".zm-choiceFile-middleBoxList1").find(".zm-choiceFile-check");
        $.each(a,function (i,value) {
            var b=a.eq(i).find(".zm-choiceRadio-cheak");
            if(!b.hasClass("fa-check")){
                b.addClass("fa-check")
            }
        });
        zmChoiceRadio.choiceRadiolist();
        var c=$(".zm-choiceFile-middleBoxList1").find(".fa-check").length;
        $(".zm-choiceFile-allListCheckNumber").html(c)
    });
    //新闻
    $(".zm-choiceNewsBtn-allCheck").off("click");
    $(".zm-choiceNewsBtn-allCheck").on("click",function () {
        var _this=$(this);
        var a=_this.closest(".zm-choiceFile-wrap").find(".zm-choiceFile-check");
        $.each(a,function (i,value) {
            var b=a.eq(i).find(".zm-ChoiceNews-cheak");
            if(!b.hasClass("fa-check")){
                b.addClass("fa-check")
            }
        })
        var a=$(".zm-choiceFile-wrap").find(".fa-check").length;
        $(".zm-choiceFile-allListCheckNumber").html(a)
    });
    //反选
    $(".zm-choiceFilebtn-backCheck").off("click");
    $(".zm-choiceFilebtn-backCheck").on("click",function () {
        var _this=$(this);
        var a=_this.closest(".zm-choiceFile-middleBoxList1").find(".zm-choiceFile-check");
        $.each(a,function (i,value) {
            var b=a.eq(i).find(".zm-choiceRadio-cheak");
            b.toggleClass( "fa-check" );
        });
        zmChoiceRadio.choiceRadiolist();
        var c=$(".zm-choiceFile-middleBoxList1").find(".fa-check").length;
        $(".zm-choiceFile-allListCheckNumber").html(c)
    });
    //新闻
    $(".zm-choiceNewsBtn-backCheck").off("click");
    $(".zm-choiceNewsBtn-backCheck").on("click",function () {
        var _this=$(this);
        var a=_this.closest(".zm-choiceFile-wrap").find(".zm-choiceFile-check");
        $.each(a,function (i,value) {
            var b=a.eq(i).find(".zm-ChoiceNews-cheak");
            b.toggleClass( "fa-check" );
        });
        var a=$(".zm-choiceFile-wrap").find(".fa-check").length;
        $(".zm-choiceFile-allListCheckNumber").html(a);
    })
    //全不选
    $(".zm-choiceFilebtn-noCheck").off("click");
    $(".zm-choiceFilebtn-noCheck").on("click",function () {
        var _this=$(this);
        var a=_this.closest(".zm-choiceFile-middleBoxList1").find(".zm-choiceFile-check");
        $.each(a,function (i,value) {
            var b=a.eq(i).find(".zm-choiceRadio-cheak");
            if(b.hasClass("fa-check")){
                b.removeClass("fa-check")
            }
        })
        zmChoiceRadio.choiceRadiolist();
        var c=$(".zm-choiceFile-middleBoxList1").find(".fa-check").length;
        $(".zm-choiceFile-allListCheckNumber").html(c)
    });
    //新闻
    $(".zm-choiceNewsBtn-noCheck").off("click");
    $(".zm-choiceNewsBtn-noCheck").on("click",function () {
        var _this=$(this);
        var a=_this.closest(".zm-choiceFile-wrap").find(".zm-choiceFile-check");
        $.each(a,function (i,value) {
            var b=a.eq(i).find(".zm-ChoiceNews-cheak");
            if(b.hasClass("fa-check")){
                b.removeClass("fa-check")
            }
        });
        var a=$(".zm-choiceRadio-middleR").find(".fa-check").length;
        $(".zm-choiceFile-allListCheckNumber").html(a);
    });
    //添加专辑中的上传图片
    $(".zm-addAblum-file").uploadPreview({ Img: "addblumRimg-Pic", Width: 130, Height: 130 });
     //列表操作图标的提示框hover效果
    $(document).on('mouseenter mouseleave','.zm-choiceRlist3 span',function(event){
        var _this=$(this);
        var index=_this.index();
        var indexTitle=_this.siblings(".zm-choiceFile-titleBox").find(".zm-choiceFile-titleList").eq(index);
        if(event.type=='mouseenter'){
            indexTitle.show()
        }else{
            indexTitle.hide();
        }
    });

    //类目重命名按钮
    $(document).off("click",".tipSet-con-list-rename");
    $(document).on("click",".tipSet-con-list-rename",function () {
        var obj=$(this).closest(".zm-choiceFile-categoryStyle").find("input[type=text]");
        obj.attr("disabled",false);
        obj.focus();
        $(this).parent(".zm-choiceFile-tipSet-con").hide();
        return false;
    });
    $(document).on("blur",".zm-choiceFile-categoryStyle input[type=text]",function () {
        if($(this).val()==""||$(this).next().css("display")=="block"){
            $(this).attr("disabled",false);
            $(this).focus();
        }else{
            $(this).attr("disabled",true);
        }
    });
    $(document).find(".zm-choiceFile-categoryStyle input[type=text]").each(function () {
        if($(this).val()==""||$(this).next().css("display")=="block"){
            $(this).attr("disabled",false)
        }
        zmChoiceRadio.choiceFilerename();
    })
}
//zmChoiceRadio.getPictureDragClassifyToMove
var zmChoiceRadio={
    //下载文件的方法
    choiceFileDwnLoadFile:function (options) {
        var config = $.extend(true, { method: 'post' }, options);
        console.log(config)
        var $iframe = $('<iframe id="down-file-iframe" />');
        var $form = $('<form target="down-file-iframe" method="' + config.method + '" />');
        $form.attr('action', config.url);
        for (var key in config.data) {
            $form.append('<input type="hidden" name="' + key + '" value="' + config.data[key] + '" />');
        }
        $iframe.append($form);
        $(document.body).append($iframe);
        $form[0].submit();
        $iframe.remove();
    },
    //选择音频的选择并添加按钮获取的数据
    choiceAndAddRadio:function (e) {
        var _this=$(e);
        var fid,fName,fCoverUrl,fCode,fMusicSrc,creator;
        var a=[];
        var c=_this.closest(".zm-choiceFile-wrap").find(".fa-check").closest(".zm-choiceR-lists");
        if(c.length==1){
                fid=c.attr("data-fid");
                fName=c.attr("data-fName");
                fCoverUrl=c.attr("data-fCoverUrl");
                fCode=c.attr("data-fCode");
                fMusicSrc=c.attr("data-fMusicSrc");
                creator=c.attr("data-creator");
            var b={"fId":fid,"fName":fName,"fCoverUrl":fCoverUrl,"fCode":fCode,"fMusicSrc":fMusicSrc,"creator":creator};
            a.push(b)
        }else if(c.length>1){
            for(var i=0;i<c.length;i++){
                    fid=$(c[i]).attr("data-fid");
                    fName=$(c[i]).attr("data-fName");
                    fCoverUrl=$(c[i]).attr("data-fCoverUrl");
                    fCode=$(c[i]).attr("data-fCode");
                    fMusicSrc=$(c[i]).attr("data-fMusicSrc");
                    creator=c.attr("data-creator");
                var b={"fId":fid,"fName":fName,"fCoverUrl":fCoverUrl,"fCode":fCode,"fMusicSrc":fMusicSrc,"creator":creator};
                a.push(b)
            }
        }else{

        }
        return a;

    },
    //选择专辑的选择并添加按钮获取的数据
    choiceAndAddAlbum:function (e) {
        var _this=$(e);
        var fid,fName,fCoverUrl;
        var a=[];
        var c=_this.closest(".zm-choiceFile-wrap").find(".fa-check").closest(".zm-choiceR-lists");
        if(c.length==1){
            fid=c.attr("data-fid");
            fName=c.attr("data-fName");
            fCoverUrl=c.attr("data-fCoverUrl");
            var b={"fId":fid,"fName":fName,"fCoverUrl":fCoverUrl};
            a.push(b)
        }else if(c.length>1){
            for(var i=0;i<c.length;i++){
                fid=$(c[i]).attr("data-fid");
                fName=$(c[i]).attr("data-fName");
                fCoverUrl=$(c[i]).attr("data-fCoverUrl");
                var b={"fId":fid,"fName":fName,"fCoverUrl":fCoverUrl};
                a.push(b)
            }
        }else{

        }
        return a;
    },
    //选择图片的选择并添加按钮获取的数据
    choiceAndAddPicture:function (e) {
        var _this=$(e);
        var fid,fName,fCoverUrl;
        var a=[];
        var c=_this.closest(".zm-choiceFile-wrap").find(".fa-check").closest(".zm-choiceR-lists");
        if(c.length==1){
            fid=c.attr("data-fid");
            fName=c.attr("data-fName");
            fCoverUrl=c.attr("data-fsrc");
            var b={"fId":fid,"fName":fName,"fCoverUrl":fCoverUrl};
            a.push(b)
        }else if(c.length>1){
            for(var i=0;i<c.length;i++){
                fid=$(c[i]).attr("data-fid");
                fName=$(c[i]).attr("data-fName");
                fCoverUrl=$(c[i]).attr("data-fsrc");
                var b={"fId":fid,"fName":fName,"fCoverUrl":fCoverUrl};
                a.push(b)
            }
        }else{

        }
        return a;
    },
    //选择视频的选择并添加按钮获取的数据
    choiceAndAddVideo:function (e) {
        var _this=$(e);
        var fid,finfoId,fdramaName,fvideoUrl,fvideoImage,fdetailCount,fshopId,finfoName,fvideoTime;
        var a=[];
        //data-fid="'+a[i].fId+'" data-finfoId="'+a[i].fInfoId+'" data-fdramaName="'+a[i].fDramaName+'" data-fvideoUrl="'+a[i].fVideoUrl+'" data-fvideoImage="'+a[i].fVideoImage+'" data-fdetailCount="'+a[i].fDetailCount+'" data-fshopId="'+a[i].fShopId+'" data-finfoName="'+a[i].fInfoName+'" data-fvideoTime="'+a[i].fVideoTime+'"
        var c=_this.closest(".zm-choiceFile-wrap").find(".fa-check").closest(".zm-choiceV-lists");
        if(c.length==1){
            fid=c.attr("data-fid");
            finfoId=c.attr("data-finfoId");
            fdramaName=c.attr("data-fdramaName");
            fvideoUrl=c.attr("data-fvideoUrl");
            fvideoImage=c.attr("data-fvideoImage");
            fdetailCount=c.attr("data-fdetailCount");
            fshopId=c.attr("data-fshopId");
            finfoName=c.attr("data-finfoName");
            fvideoTime=c.attr("data-fvideoTime");
            var b={"fId":fid,"finfoId":finfoId,"fdramaName":fdramaName,"fvideoUrl":fvideoUrl,"fvideoImage":fvideoImage,"fdetailCount":fdetailCount,"fshopId":fshopId,"finfoName":finfoName," fvideoTime": fvideoTime};
            a.push(b)
        }else if(c.length>1){
            for(var i=0;i<c.length;i++){
                fid=$(c[i]).attr("data-fid");
                finfoId=$(c[i]).attr("data-finfoId");
                fdramaName=$(c[i]).attr("data-fdramaName");
                fvideoUrl=$(c[i]).attr("data-fvideoUrl");
                fvideoImage=$(c[i]).attr("data-fvideoImage");
                fdetailCount=$(c[i]).attr("data-fdetailCount");
                fshopId=$(c[i]).attr("data-fshopId");
                finfoName=$(c[i]).attr("data-finfoName");
                fvideoTime=$(c[i]).attr("data-fvideoTime");
                var b={"fId":fid,"finfoId":finfoId,"fdramaName":fdramaName,"fvideoUrl":fvideoUrl,"fvideoImage":fvideoImage,"fdetailCount":fdetailCount,"fshopId":fshopId,"finfoName":finfoName," fvideoTime": fvideoTime};
                a.push(b)
            }
        }else{

        }
        return a;
    },
    //选择博客的选择并添加按钮获取的数据
    choiceAndAddBlogger:function (e) {
        var _this=$(e);
        //data-fReadCount='"+a[i].fReadCount+"' data-fForwardCount='"+a[i].fForwardCount+"' data-fLikeCount='"+a[i].fLikeCount+"'
        var fBlogContent,fId,fBlogCode,fBlogTitle,fCreateUserAccount,fReadCount,fForwardCount,fLikeCount;
        var a=[];
        var c=_this.closest(".zm-choiceFile-wrap").find(".fa-check").closest(".zm-choiceBloggerList");
        if(c.length==1){
            fBlogContent=c.attr("data-fBlogContent");
            fId=c.attr("data-fId");
            fBlogCode=c.attr("data-fBlogCode");
            fBlogTitle=c.attr("data-fBlogTitle");
            fCreateUserAccount=c.attr("data-fCreateUserAccount");
            fReadCount=c.attr("data-fReadCount");
            fForwardCount=c.attr("data-fForwardCount");
            fLikeCount=c.attr("data-fLikeCount");
            var b={"fBlogContent":fBlogContent,"fId":fId,"fBlogCode":fBlogCode,"fBlogTitle":fBlogTitle,"fCreateUserAccount":fCreateUserAccount,"fReadCount":fReadCount,"fForwardCount":fForwardCount,"fLikeCount":fLikeCount};
            a.push(b)
        }else if(c.length>1){
            for(var i=0;i<c.length;i++){
                fBlogContent=$(c[i]).attr("data-fBlogContent");
                fId=$(c[i]).attr("data-fId");
                fBlogCode=$(c[i]).attr("data-fBlogCode");
                fBlogTitle=$(c[i]).attr("data-fBlogTitle");
                fCreateUserAccount=$(c[i]).attr("data-fCreateUserAccount");
                fReadCount=$(c[i]).attr("data-fReadCount");
                fForwardCount=$(c[i]).attr("data-fForwardCount");
                fLikeCount=$(c[i]).attr("data-fLikeCount");
                var b={"fBlogContent":fBlogContent,"fId":fId,"fBlogCode":fBlogCode,"fBlogTitle":fBlogTitle,"fCreateUserAccount":fCreateUserAccount,"fReadCount":fReadCount,"fForwardCount":fForwardCount,"fLikeCount":fLikeCount};
                a.push(b)
            }
        }else{

        }
        return a;
    },
    //列表被选中的样式
    choiceRadiolist:function () {
        var a=$(".zm-choiceFile-wrap").find(".zm-choiceRadio-cheak");
        $.each(a,function (i,value) {
            if(a.eq(i).hasClass("fa-check")){
                a.eq(i).show();
                a.eq(i).closest(".zm-choiceFile-check").find(".zm-choiceFile-listWrap").show();
            }else{
                a.eq(i).hide();
                a.eq(i).closest(".zm-choiceFile-check").find(".zm-choiceFile-listWrap").hide();
            }
        })
    },
    callBack:{
        choiceAddRadio : function(e){
            var a=e;
            console.log(a)
        },
        choiceAddAlbum : function(e){
            var a=e;
            console.log(a)
        },
        choiceAddPicture : function(e){
            var a=e;
            console.log(a)
        },
        choiceAddVideo : function(e){
            var a=e;
            console.log(a)
        },
        choiceAddBlogger : function(e){
            var a=e;
            console.log(a)
        },
    },
    //类目重命名提示icon
    choiceFilerename:function(){
        // $(document).find(".zm-choiceFile-categoryStyle input[type=text]").off("keyup")
        $(document).find(".zm-choiceFile-categoryStyle input[type=text]").on("keyup",function () {
            var _this=$(this);
            var a=$(document).find(".zm-choiceFile-categoryStyle input[type=text]").not(_this);
            var b=_this.closest(".zm-choiceFile-categoryStyle").find(".zm-choiceFile-sameNameTitle");
            for(var i=0;i<a.length;i++){
                if(_this.val()==a.eq(i).val()){
                    b.show();
                   _this.attr("disabled",false)
                    break;
                }else{
                    b.hide();
                }
            }
        })
    },
    //二级类目菜单伸展
    childrenToggle:function(e){
        var _this = $(e)
        var thisNode = _this.closest(".zm-choiceFile-categoryStyle");
        var html = _this.html();
        if(html=="+"){
            _this.html("-")
        }
        else{
            _this.html("+")
        }
        thisNode.siblings(".choiceFilel2-box").slideToggle()
        event.stopPropagation();
        //return;

    },
    //三级类目菜单伸展
    threeChildrenToggle:function(e){
        var _this = $(e)
        var thisNode = _this.closest(".zm-choiceFile-categoryStyle");
        var html = _this.html();
        if(html=="+"){
            _this.html("-")
        }
        else{
            _this.html("+")
        }
        thisNode.siblings(".choiceFile-box12").slideToggle()
        thisNode.next(".choiceFile-box13").slideToggle()
        //e.stopPropagation();
        event.stopPropagation()
        //return false;

    },
    //选择音频文件模块页面
    choiceRadio:function(e) {
        var choiceNumber=(e.multiple);
       if(choiceNumber=='false'){
           choiceNumber=true;
       }else{
           choiceNumber=false;
       }
        var callback=e.callBack;
        // zmChoiceRadio.callBack.radio_ = e.callBack;
        zmEditor.dialog.loading("html/href/choiceRadio.html", function (e) {
            $.fn.zmchoiceRadio();
            //ajax获取类目列表
            $.ajax({
                type: "post",
                url:zmEditor.url.getRadioCategory,
                dataType: "json",
                success: function(e){
                    var b=e.data;
                    var c='';
                    $.each(b, function(k,value) {
                       var d='<div class="choiceFilel1-box zm-choiceFile-categroyStyle-wrap">'
                            +'<div class="zm-choiceFile-categoryStyle" data-fid="'+b[k].fId+'" data-fName="'+b[k].fName+'">'
                           +'<span class="zm-choiceRadio-categoryStyle"></span>'
                           +'<input class="zm-chiceInput-blur" type="text" value="'+b[k].fName+'" readonly></div></div>'
                        c +=d;
                    });
                    var ch=' <div class="zm-choiceFile-category"><span class="zm-choiceRadio-categoryTop">音频类目</span></div><div class="choiceFilel1-box zm-choiceFile-categroyStyle-wrap">'
                        +'<div class="zm-choiceFile-categoryStyle" data-fid="0">'
                        +'<span class="zm-choiceRadio-categoryStyle"></span>'
                        +'<input class="zm-chiceInput-blur" type="text" value="全部音频" readonly></div></div><div class="choiceFilel1-box zm-choiceFile-categroyStyle-wrap">'
                        +'<div class="zm-choiceFile-categoryStyle" data-fid="-1">'
                        +'<span class="zm-choiceRadio-categoryStyle"></span>'
                        +'<input class="zm-chiceInput-blur" type="text" value="未分配专辑的单曲" readonly></div></div>'+c+' <div class="zm-choiceFile-trash zm-choiceFile-categoryStyle" data-fid="-2"><span style="color:#49b1a9;font-size: 16px;" class="fa fa-trash"></span>'
                        +'<span style="font-weight: bold">回收站</span></div><div style="width: 200px;height: 120px"></div>'
                    $(".zm-choiceRadio-middleL").html(ch)
                    //首次进入页面类目添加背景样式
                    $(".zm-choiceFile-categoryStyle:first").addClass("zm-choiceFile-ClassifyBackgroundColor");
                    //首次获取音频列表
                    zmChoiceRadio.getAjaxRadioList(0);
                  //点击音频列表修改名称
                    $(".zm-choiceRadio-middleR").on("click",".zm-chRlist-pencil",function () {
                        $(this).closest(".zm-choiceR-lists").find(".zm-choiceRlist1").css("display","block")
                    })
                    $(".zm-choiceRadio-middleR").on("keyup",".zm-choiceRlist1",function () {
                        $(this).closest(".zm-choiceR-lists").find(".zm-choiceRlist2").html($(this).val())
                    })
                    //对列表音频重命名
                    $(document).off("blur",".zm-choiceRlist1");
                    $(document).on("blur",".zm-choiceRlist1",function () {
                        $(this).css("display","none");
                        var fid=$(this).closest(".zm-choiceR-lists").attr("data-fid")
                        var fName=$(this).closest(".zm-choiceR-lists").find(".zm-choiceRlist2").html();
                        zmChoiceRadio.choiceRadioTochangeName(fid,fName)
                    })
                      //点击类目获取相应的图片列表
                    $(document).off("click",".zm-choiceFile-categoryStyle")
                    $(document).on("click",".zm-choiceFile-categoryStyle",function () {
                        var _this=$(this);
                        var a=_this.attr("data-fid");
                        $.each($(".zm-choiceFile-wrap").find(".zm-choiceFile-categoryStyle"),function (i,value) {
                            $(value).removeClass("zm-choiceFile-ClassifyBackgroundColor")
                        })
                        _this.addClass("zm-choiceFile-ClassifyBackgroundColor")
                        zmChoiceRadio.getAjaxRadioList(a)
                    });
                    //刷新页面
                    $(".zm-choiceRadioBtn-refresh").on("click",function () {
                        var fId=$(".zm-choiceFile-wrap").find(".zm-choiceFile-ClassifyBackgroundColor").attr("data-fid")
                        zmChoiceRadio.getAjaxRadioList(fId)
                    })

                     //批量还原
                    $(".zm-choicePictureHistory").on("click",function () {
                        var imgLIscheak=[];
                        $(".zm-choiceRadio-middleR").find(".zm-choiceRadio-cheak").each(function (i,value) {
                            var _that=$(this);
                            if(_that.hasClass('fa-check')){
                                imgLIscheak.push(_that.closest(".zm-choiceFile-check").attr("data-fid"))
                                console.log(_that.closest(".zm-choiceFile-check").attr("data-fid"))
                            }
                        })
                        var fIds=imgLIscheak.join(",")
                        console.log(fIds)
                        zmChoiceRadio.toBatchRestoreRadio(fIds)
                    })
                    //单个还原
                    $(document).on("click",".zm-chRlist-history",function () {
                        var _this=$(this);
                        var fIds=_this.closest(".zm-choiceFile-check").attr("data-fid");
                        zmChoiceRadio.toBatchRestoreRadio(fIds)
                    })
                    //选择音频弹出框标题
                    $(".zm-dialog-title:last").html("选择音频文件");
                    // $.fn.zmchoiceRadio();
                    //判断是单选还是多选
                    if(choiceNumber){
                        $(".zm-choiceFile-btn1").unbind("click");
                        $(".zm-choiceFile-wrap").on("click",".zm-choiceRadio-cheak",function () {
                            if($(this).hasClass("fa-check")){
                                $(this).closest(".zm-choiceR-lists").siblings(".zm-choiceR-lists").find(".zm-choiceRadio-cheak").removeClass("fa-check");
                                $(this).closest(".zm-choiceR-lists").siblings(".zm-choiceR-lists").find(".zm-choiceFile-listWrap").css("display","none");
                                var a=$(".zm-choiceFile-wrap").find(".fa-check").length;
                                $(".zm-choiceFile-allListCheckNumber").html(a);
                            }
                        })
                    }
                    $('.zm-choiceFile-choiceAddRadio').off("click");
                    $('.zm-choiceFile-choiceAddRadio').on("click",function () {
                        var _this=$(this);
                        var a=zmChoiceRadio.choiceAndAddRadio( _this);
                        _this.closest(".zm-dialog-box").remove();
                        if(callback){
                            callback(a)
                        }
                    })
                },
                error:function(){
                    console.error("出错了")
                }
            })
        })
    },
    //选择专辑文件模块页面
    choiceAlbum: function (e) {
        var choiceNumber=(e.multiple);
        if(choiceNumber=='false'){
            choiceNumber=true;
        }else{
            choiceNumber=false;
        }
        var callback=e.callBack;
        zmEditor.dialog.loading("html/href/choiceAlbum.html", function () {
            //这里写回调函数
            $(".zm-dialog-title:last").html("选择专辑")
            $.ajax({
                type: "post",
                url:zmEditor.url.getAlbumList,
                dataType: "json",
                data:{ "iDisplayStart":0,"iDisplayLength":32},
                success: function(e){
                    var a=e.data;
                    var listHtml='';
                    $.each(a,function (i,value) {
                        listHtml +='<li class="zm-choiceR-lists zm-choiceA-list zm-choiceFile-check" data-fid="'+a[i].fId+'" data-fname="'+a[i].fName+'" data-fcoverUrl="'+a[i].fCoverUrl+'"><img class="zm-choiceR-listsimg" src="'+a[i].fCoverUrl+'" alt="">'
                            +'<input class="zm-choiceRlist1" value="" type="text" ><div class="zm-choiceRlist4">'
                            +'<span class="zm-choiceRlist2" style="color: #FFFFFF">'+a[i].fName+'</span></div>'
                            +'<span class="zm-choiceRadio-cheak zm-choiceRadio-cheakPosition fa"></span><div class="zm-choiceRlist3">'
                            +'<span class="fa fa-pencil zm-chRlist-pencil"></span><span class="fa fa-trash zm-chRlist-trash" onclick="zmChoiceRadio.deleteFileTitle(this)" delete-title="album1"></span>'
                            +'<span class="fa fa-download zm-chRlist-download"></span><span class="fa fa-history zm-chRlist-history"></span></div>'
                            +'<div class="zm-choiceR-listWrap zm-choiceFile-listWrap"><div style="width: 126px;height: 126px;opacity: .5;background-color:#9ad5d3"></div>'
                            +'</div></li>'
                    })
                    $(".zm-choiceFile-middleInner").append($(listHtml))
                    var c=$(".zm-choiceAlbum-middle").find(".zm-choiceR-lists").length;
                    $(".zm-choiceFile-allListNumber").html(c)
                    var g=$("zm-choiceAlbum-middle").find(".fa-check").length;
                    $(".zm-choiceFile-allListCheckNumber").html(g);
                    var gg=$(".zm-choiceFile-wrap").find(".zm-choiceR-listsimg");
                    zmChoiceRadio.imgScaleMethod(gg);
                    //滚轮的scroll事件实现监控滚动条分页
                    var numberLength=3;
                    $(".zm-choiceFile-middleWrap").on("mousewheel",function () {
                        var a=parseInt($(".zm-choiceFile-middleWrap").find(".mCSB_container").css("top"));
                        console.log(a)
                        if(a<=-100){
                            numberLength++;
                            console.log(numberLength)
                            var playStart=(numberLength-1)*8+1;
                            var playLength=16;
                            console.log(playStart,playLength)
                               zmChoiceRadio.getAjaxAlbumList(playStart,playLength,"")
                        }
                    });
                    //刷新页面
                    $(".zm-choiceAlbumBtn-refresh").on("click",function () {
                        zmChoiceRadio.getAjaxAlbumList(0,32)
                        numberLength=2;
                    })
                    //点击专辑列表修改名称
                    $(".zm-choiceAlbum-middle").on("click",".zm-chRlist-pencil",function () {
                        $(this).closest(".zm-choiceR-lists").find(".zm-choiceRlist1").css("display","block")
                    })
                    $(".zm-choiceAlbum-middle").on("keyup",".zm-choiceRlist1",function () {
                        $(this).closest(".zm-choiceR-lists").find(".zm-choiceRlist2").html($(this).val())
                    })
                    //对列表专辑重命名
                    $(document).off("blur",".zm-choiceRlist1");
                    $(document).on("blur",".zm-choiceRlist1",function () {
                        $(this).css("display","none");
                        var _id=$(this).closest(".zm-choiceR-lists").attr("data-fid");
                        var fName=$(this).closest(".zm-choiceR-lists").find(".zm-choiceRlist2").text();
                        console.log(_id,fName);
                        zmChoiceRadio.choiceAlbumToChangeName(_id,fName)
                    })
                    $.fn.zmchoiceRadio()
                    //判断是单选还是多选
                    if(choiceNumber){
                        $(".zm-choiceFile-btn1").unbind("click");
                        $(".zm-choiceFile-wrap").on("click",".zm-choiceRadio-cheak",function () {
                            if($(this).hasClass("fa-check")){
                                $(this).closest(".zm-choiceR-lists").siblings(".zm-choiceR-lists").find(".zm-choiceRadio-cheak").removeClass("fa-check");
                                $(this).closest(".zm-choiceR-lists").siblings(".zm-choiceR-lists").find(".zm-choiceFile-listWrap").css("display","none");
                                var a=$(".zm-choiceFile-wrap").find(".fa-check").length;
                                $(".zm-choiceFile-allListCheckNumber").html(a);
                            }
                        })
                    }
                    $('.zm-choiceFile-choiceAddAlbum').off("click");
                    $('.zm-choiceFile-choiceAddAlbum').on("click",function () {
                        var _this=$(this);
                        var a=zmChoiceRadio.choiceAndAddAlbum( _this);
                        _this.closest(".zm-dialog-box").remove();
                        if(callback){
                            callback(a)
                        }
                    })
                }
            })
        })
    },
    //选择专辑文件模块的添加专辑页面
    addAlbum: function () {
        //loadDialog
        zmEditor.dialog.loading("html/href/addAlbum.html", function () {
           $(".zm-dialog-title:last").html("添加专辑");
           //  $(".zm-addAblumBtntrue").closest(".zm-dialog").find(".zm-dialog-box").html("添加专辑")
           //  console.log( $(".zm-addAblumBtntrue").closest(".zm-dialog").find(".zm-dialog-title"))
            $('.zm-addAlbum-content input').on('keyup',function(){
                var _this=$(this).closest(".zm-addAlbum-content").find(".zm-addAblum-title")
                if(zmChoiceRadio.getByteLen($(this).val())>50){
                   _this.css("display","block");
                }else {
                    _this.css("display","none");
                }
            })
            //获取语言类型列表
            $.get(zmEditor.url.getAddAlbumLanguageType,function (e) {
                var a=e.data;
                var b='';
                for(var i=0;i<a.length;i++){
                    var languageKey ='<option data-fid="'+a[i].fId+'" value="'+a[i].fText+'">'+a[i].fText+'</option>';
                    b+=languageKey;
                }
                $(".zm-addAlbum-albumLanguage").append(b);
            })
            //获取专辑类型列表
            $.get(zmEditor.url.getAddAlbumType,function (e) {
                var a=e.data;
                var b='';
                for(var i=0;i<a.length;i++){
                    var languageKey ='<option data-fid="'+a[i].fId+'" value="'+a[i].fText+'">'+a[i].fText+'</option>';
                    b+=languageKey;
                }
                $(".zm-addAlbum-albumType").append(b);
            })
            //显示上传的图片
            $(".zm-addAblum-file").uploadPreview({ Img: "addblumRimg-Pic", Width: 130, Height: 130 });
            //评论设置的点击事件
            $(".zm-addAblum-partFourRi label:first").addClass("choice")
            $(".zm-addAblum-partFourRi label").on("click",function () {
                $(this).closest(".zm-addAblum-partFourRi").find("label").removeClass("choice")
                $(this).toggleClass("choice");
            })
            //select的change事件
            $(".zm-addAblum-wrap").on("change",".zm-addAlbum-albumType",function () {
                if($(this).val()=="==请选择=="){
                    console.log(12144)
                    $(".zm-addAlbum-albumType").next("div").css("display","block");
                }else{
                    $(".zm-addAlbum-albumType").next("div").css("display","none");
                }
            })
            $(".zm-addAblum-wrap").on("change",".zm-addAlbum-albumLanguage",function () {
                if($(this).val()=="==请选择=="){
                    console.log(12144)
                    $(".zm-addAlbum-albumLanguage").next("div").css("display","block");
                }else{
                    $(".zm-addAlbum-albumLanguage").next("div").css("display","none");
                }
            })

            //上传图片并传给后台
            var toUpImgUrl;
            $(document).off("change",".zm-addAblum-partTwoRi input[type=file]");
            $(document).on("change",".zm-addAblum-partTwoRi input[type=file]",function(){
                var usFile=$('.zm-addAblum-file')[0].files[0];
                var form=new FormData();
                form.append("uploadFile",usFile);
                $.ajax({
                    type:"post",
                    url:zmEditor.url.getAddAlbumUpPicture,
                    processData:false,//对象数组转换为字符串
                    contentType:false,//编码
                    cache:false,//缓存
                    data:form,
                    async:true,
                    success:function(data){
                        toUpImgUrl=data;
                    }
                })
            });
            $(".zm-addAblumBtntrue").on("click",function () {
                var fame=$(".zm-addAlbum-fame").val();
                var falias=$(".zm-addAlbum-falias").val();
                var releaseData=$(".zm-addAlbum-releaseData").val();
                var singCompany=$(".zm-addAlbum-singCompany").val();
                var discount=$(".zm-addAlbum-discount").val();
                var albumType=$(".zm-addAlbum-albumType").val();
                var albumLanguage=$(".zm-addAlbum-albumLanguage").val();
                var albumIntroduce=$(".zm-addAblum-introduce").val();
                var commentConfig=$(".zm-addAblum-partFourRi").find(".choice").attr("data-type")
                var upFile=toUpImgUrl;
                if(albumType=="==请选择=="){
                    $(".zm-addAlbum-albumType").next("div").css("display","block");
                }else{
                    $(".zm-addAlbum-albumType").next("div").css("display","none");
                }
                if(albumLanguage=="==请选择=="){
                    $(".zm-addAlbum-albumLanguage").next("div").css("display","block");
                }else{
                    $(".zm-addAlbum-albumLanguage").next("div").css("display","none");
                }
                var a,b;
                var zmAddAlbumWrit=$(".zm-addAblum-wrap .zm-addAlbum-writing")
                for(var i=0;i<zmAddAlbumWrit.length;i++){
                    if($(zmAddAlbumWrit[i]).val()==""){
                         a=false;
                        break;
                    }else{
                        a=true;
                    }
                }
                var zmAddAlbumTitle=$(".zm-addAblum-wrap .zm-addAblum-title");
                for(var i=0;i<zmAddAlbumTitle.length;i++){
                    if($(zmAddAlbumTitle[i]).css("display")=="block"){
                        b=false;
                        break;
                    }else{
                        b=true;
                    }
                }
                if(a&&b){
                    $.ajax({
                        type: "post",
                        url:zmEditor.url.getAddAlbumUpdateAlbum,
                        dataType: "json",
                        data:{'fName':fame,'fAlias':falias,'fCoverUrl':upFile,'fReleaseDateStr':releaseData,'fAlbumType':albumType,'fAlbumLanguage':albumLanguage,'fSingCompany':singCompany,'fSummary':albumIntroduce,'fCommentConfig':commentConfig,'fPackDiscount':discount},
                        success: function(e){
                        }
                    })
                    $(this).closest(".zm-dialog-box").remove();
                }
                // if($(".zm-addAlbum-writing").val()!=""&&$(".zm-addAblum-title").css("display")=="none"){

                // }
            })


        })
    },
    //选择图片文件模块页面
    choicePicture:function (e) {
        var choiceNumber=(e.multiple);
        if(choiceNumber=='false'){
            choiceNumber=true;
        }else{
            choiceNumber=false;
        }
        var callback=e.callBack;
        zmEditor.dialog.loading("html/href/choicePicture.html", function (e) {
            $.fn.zmchoiceRadio();
            //ajax获取类目列表
            $.ajax({
                type: "post",
                url:zmEditor.url.getPictureCategory,
                dataType: "json",
                success: function(e){
                    var a=e.data;
                    var _this=$(".zm-choicePicture-middleLTop");
                    var first=a;
                    var len1 = first.length;
                    var firstHtml="";
                    var toggleHtml="";
                    var toggleHtml1='<span class="zm-choiceFile-children-toggle" onclick="zmChoiceRadio.threeChildrenToggle(this)">+</span>';
                    var toggleHtml2="";
                    for(var i=0;i<len1;i++){
                        var second = first[i].childrenList;
                        var name1=first[i].fName;
                        var fId1=first[i].fId;
                        var len2= second.length;
                        var secondHtml="";
                        for(var k=0;k<len2;k++){
                            var name2=second[k].fName;
                            var fId2=second[k].fId;
                            var fParentId2=second[k].fParentId;
                            secondHtml+='<div class="zm-choiceFile-categoryStyle zm-choiceFile-dragMove" data-type="picture2" data-fid="'+fId2+'" data-fParentId="'+fParentId2+'" data-fName="'+name2+'" ><input class="zm-choiceFile-classifyInput" type="text" value="'+name2+'" disabled="">'
                                +'<span class="fa fa-exclamation zm-choiceFile-sameNameTitle"></span><div class="zm-choiceFile-tipSet">'
                                +'<div class="zm-choiceFile-tipSet-con" style="display: none;"> <i class="tipSet-con-dot"></i>'
                                +'<div class="tipSet-con-list tipSet-con-list-rename"><i class="rename"></i>重命名</div>'
                                +'<div class="tipSet-con-list" onclick="zmChoiceRadio.deleteThreeClassifyTitle(this)"><i class="delete"></i>删除</div>'
                                +'</div></div></div>'
                        }
                        if(len2==0){
                            toggleHtml=toggleHtml2;
                        }
                        else{
                            toggleHtml=toggleHtml1;
                        }
                        firstHtml+='<div class="choiceFile-box11 zm-choiceFile-dragMove"><div class="zm-choiceFile-categoryStyle" data-type="picture1" data-fid="'+fId1+'"  data-fName="'+name1+'">'
                            +'<span class="zm-choicePicture-categoryStyle"></span>'
                            +''+toggleHtml+''
                            +'<input class="zm-choiceFile-classifyInput" type="text" value="'+name1+'" disabled="">'
                            +'<span class="fa fa-exclamation zm-choiceFile-sameNameTitle"></span><div class="zm-choiceFile-tipSet">'
                            +'<div class="zm-choiceFile-tipSet-con" style="display: none;"><i class="tipSet-con-dot"></i>'
                            +'<div class="tipSet-con-list tipSet-con-list-add2 newAdd-Or-delete"><i class="add"></i> 添加子类</div>'
                            +'<div class="tipSet-con-list tipSet-con-list-rename"><i class="rename"></i>重命名</div>'
                            +'<div class="tipSet-con-list" onclick="zmChoiceRadio.deleteThreeClassifyTitle(this)"><i class="delete"></i>删除</div>'
                            +'</div></div></div>'
                            +'<div class="choiceFile-box12 zm-choiceFiles-box">'+secondHtml+'</div>'
                            +'</div>';
                    }
                    var trashHtml='<div class="zm-choiceFile-trash zm-choiceFile-categoryStyle" data-fid="-1"><span style="color:#49b1a9;font-size: 16px;" class="fa fa-trash"></span>'
                        +'<span style="font-weight: bold">回收站</span></div><div style="width: 200px;height: 120px"></div>';
                    var topHtml='<div class="zm-choiceFile-category"><span class="zm-choicePicture-categoryTop">图片类目</span></div>';
                    var allHtml=topHtml+firstHtml+trashHtml;
                    _this.html(allHtml);
                    // //首次获取图片列表
                    zmChoiceRadio.getAjaxPictureList(0,"",0,24)
                    $.fn.zmchoiceRadio();
                    //点击类目添加背景样式
                    $(".zm-choiceFile-categoryStyle").each(function () {
                        if($(this).attr("data-fid")=="0"||$(this).attr("data-fid")=="1"){
                            $(this).find(".zm-choiceFile-children-toggle").remove();
                            $(this).find(".zm-choiceFile-tipSet").remove();
                            $(this).closest(".choiceFile-box11").removeClass("zm-choiceFile-dragMove");
                            if($(this).attr("data-fid")=="0"){
                                $(this).addClass("zm-choiceFile-ClassifyBackgroundColor")
                            }
                        }
                    });
                    //点击类目获取相应的图片列表
                    $(".zm-choicePicture-middleLTop").on("click",".zm-choiceFile-categoryStyle",function () {
                        var _this=$(this);
                        var a=_this.attr("data-fid");
                        $.each($(document).find(".zm-choiceFile-categoryStyle"),function (i,value) {
                            $(value).removeClass("zm-choiceFile-ClassifyBackgroundColor")
                        })
                        _this.addClass("zm-choiceFile-ClassifyBackgroundColor")
                        zmChoiceRadio.getAjaxPictureList(a,"",0,24)
                    })
                    //滚轮的scroll事件实现监控滚动条分页
                    var numberLength=1;
                    $(".zm-choiceRadio-middleR").on("mousewheel",function () {
                        var a=parseInt($(".zm-choiceRadio-middleR").find(".mCSB_container").css("top"));
                        if(a<=-50){
                            numberLength++;
                            console.log(numberLength);
                            var playStart=(numberLength-1)*24+1;
                            var playLength=24;
                            var fId=$(".zm-choiceFile-wrap").find(".zm-choiceFile-ClassifyBackgroundColor").attr("data-fid");
                            console.log(playStart,playLength);
                            zmChoiceRadio.getAjaxPictureList(fId,"",playStart,playLength)
                        }
                    });
                    $(".zm-choicePictureBtn-refresh").on("click",function () {
                        var fId=$(".zm-choiceFile-wrap").find(".zm-choiceFile-ClassifyBackgroundColor").attr("data-fid");
                        zmChoiceRadio.getAjaxPictureList(fId,"",0,24);
                        numberLength=2;
                    })
                    //增加图片大类
                    //***************************************************************************
                    $(document).off("click",".choicePicture-addBigclassify");
                    $(document).on("click",".choicePicture-addBigclassify",function () {
                        var a=$(document).find(".zm-choicePicture-middleL").find("input[type=text]"),b;
                        $.each(a,function (i,value) {
                            if($(value).val()==""){
                                b=false;
                            }else{
                                b=true;
                            }
                        })
                        if(b){
                            var h=$('<div class="choiceFile-box11 zm-choiceFile-dragMove"><div class="zm-choiceFile-categoryStyle" data-type="picture1">'
                                +'<span class="zm-choicePicture-categoryStyle"></span>'
                                +'<input class="zm-choiceFile-classifyInput" type="text" value="" disabled="">'
                                +'<span class="fa fa-exclamation zm-choiceFile-sameNameTitle"></span><div class="zm-choiceFile-tipSet">'
                                +'<div class="zm-choiceFile-tipSet-con" style="display: none;"><i class="tipSet-con-dot"></i>'
                                +'<div class="tipSet-con-list tipSet-con-list-add2 newAdd-Or-delete"><i class="add"></i> 添加子类</div>'
                                +'<div class="tipSet-con-list tipSet-con-list-rename"><i class="rename"></i>重命名</div>'
                                +'<div class="tipSet-con-list" onclick="zmChoiceRadio.deleteThreeClassifyTitle(this)"><i class="delete"></i>删除</div>'
                                +'</div></div></div>'
                                +'<div class="choiceFile-box12"></div>'
                                +'</div>')
                            $(".zm-choiceFile-trash").before(h);
                            var obj= h.find("input[type=text]");
                            obj.attr("disabled",false);
                            obj.focus();
                            zmChoiceRadio.choiceFilerename();
                        }
                    });
                    //添加商品小类目
                    $(".zm-choiceFile-wrap").off("click",".tipSet-con-list-add2");
                    $(".zm-choiceFile-wrap").on("click",".tipSet-con-list-add2",function () {
                        var _this=$(this);
                        var toggleHtml6='<span class="zm-choiceFile-children-toggle" onclick="zmChoiceRadio.threeChildrenToggle(this)">-</span>';
                        var a=_this.closest(".choiceFile-box11").find(".choiceFile-box12>.zm-choiceFile-categoryStyle");
                        console.log(a.length)
                        if(a.length==0){
                            _this.closest(".choiceFile-box11").find(".zm-choiceFile-classifyInput").before($(toggleHtml6));
                            _this.closest(".choiceFile-box11").find(".choiceFile-box12").css("display","block")
                        }
                        var b=$('<div class="zm-choiceFile-categoryStyle zm-choiceFile-dragMove" data-type="picture2"><input class="zm-choiceFile-classifyInput" type="text" value="" disabled="">'
                            +'<span class="fa fa-exclamation zm-choiceFile-sameNameTitle"></span><div class="zm-choiceFile-tipSet">'
                            +'<div class="zm-choiceFile-tipSet-con" style="display: none;"> <i class="tipSet-con-dot"></i>'
                            +'<div class="tipSet-con-list tipSet-con-list-rename"><i class="rename"></i>重命名</div>'
                            +'<div class="tipSet-con-list" onclick="zmChoiceRadio.deleteThreeClassifyTitle(this)"><i class="delete"></i>删除</div>'
                            +'</div></div></div>');
                        _this.closest(".zm-choiceFile-categoryStyle").next(".choiceFile-box12").append(b);
                        var obj= b.find("input[type=text]");
                        obj.attr("disabled",false);
                        obj.focus();
                        zmChoiceRadio.choiceFilerename();
                    });
                    //失焦时发送增加和修改类目的参数
                    $(document).off("blur",".zm-choiceFile-classifyInput");
                    $(document).on("blur",".zm-choiceFile-classifyInput",function () {
                        var _this=$(this);
                        var fId,fName,fParentId;
                        if(_this.closest(".zm-choiceFile-categoryStyle").attr("data-fid")){
                            fId=_this.closest(".zm-choiceFile-categoryStyle").attr("data-fid");
                        }else{
                            fId=null;
                        }
                        if( _this.closest(".zm-choiceFile-categoryStyle").parent(".choiceFile-box12").prev().attr("data-fid")){
                            fParentId=_this.closest(".zm-choiceFile-categoryStyle").parent(".choiceFile-box12").prev().attr("data-fid");
                        }else{
                            fParentId=null;
                        }
                        fName=_this.val();
                        if(_this.attr("disabled")&&_this.next().css("display")=="none"){
                            zmChoiceRadio.choicePictureAddClassify(fId,fName,fParentId,function(id){
                                $(document).find(".zm-choiceFile-categoryStyle").each(function () {
                                    var _this=$(this);
                                    if(typeof(_this.attr("data-fid"))=="undefined"){
                                        _this.attr("data-fid",id);
                                    }
                                })
                            })
                        };
                        event.stopPropagation();
                    });
                    //上传图片并传给后台（选择图片）
                    $(document).off("change","#zm-choicePicture-upPicBtn");
                    $(document).on("change","#zm-choicePicture-upPicBtn",function(){
                        var fid=$(".zm-choicePicture-middleLTop").find(".zm-choiceFile-ClassifyBackgroundColor").attr("data-fid");
                        var upfile=$('#zm-choicePicture-upPicBtn')[0].files[0];
                        var form=new FormData();
                        form.append("upfile",upfile);
                        form.append("fFileId",fid);
                        $.ajax({
                            type:"post",
                            url:zmEditor.url.getPictureUpPicture,
                            processData:false,//对象数组转换为字符串
                            contentType:false,//编码
                            cache:false,//缓存
                            data:form,
                            async:true,
                            success:function(data){
                             zmChoiceRadio.getAjaxPictureList(fid,"",0,24);
                            }
                        })
                    });
                    //点击图片列表修改名称
                    $(".zm-choiceRadio-middleR").on("click",".zm-chRlist-pencil",function () {
                        event.stopPropagation();
                        $(this).closest(".zm-choiceR-lists").find(".zm-choiceRlist1").show();
                    });
                    $(".zm-choiceRadio-middleR").on("click",".zm-choiceRlist1",function () {
                        event.stopPropagation();
                    });
                    $(".zm-choiceRadio-middleR").on("keyup",".zm-choiceRlist1",function () {
                        event.stopPropagation();
                        $(this).closest(".zm-choiceR-lists").find(".zm-choiceRlist2").html($(this).val())
                    });

                    //对列表图片重命名
                    $(document).off("blur",".zm-choiceRlist1");
                    $(document).on("blur",".zm-choiceRlist1",function () {
                        $(this).css("display","none");
                        var _id=$(this).closest(".zm-choiceR-lists").attr("data-imgid")
                        var fName=$(this).closest(".zm-choiceR-lists").find(".zm-choiceRlist2").text();
                        zmChoiceRadio.choicePictureTochangeName(_id,fName)
                    })
                    //批量还原
                    $(document).on("click",".zm-choicePictureHistory",function () {
                        var imgLIscheak=[];
                        $(".zm-choiceRadio-middleR").find(".zm-choiceRadio-cheak").each(function (i,value) {
                            //console.log(i,value)
                            var _that=$(this);
                           // console.log(_that)
                            if(_that.hasClass('fa-check')){
                                imgLIscheak.push(_that.closest(".zm-choiceFile-check").attr("data-imgid"))
                                console.log(_that.closest(".zm-choiceFile-check").attr("data-imgid"))
                                _that.closest(".zm-choiceR-lists").remove();
                            }
                        });
                        var imageIds=imgLIscheak.join(",");
                        console.log(imageIds);
                        zmChoiceRadio.toBatchRestore(imageIds)
                    })
                    //单个还原
                    $(".zm-choiceRadio-middleR").on("click",".zm-chRlist-history",function () {
                        event.stopPropagation();
                        var _this=$(this);
                        var imageIds=_this.closest(".zm-choiceFile-check").attr("data-imgid");
                        zmChoiceRadio.toBatchRestore(imageIds)
                        _this.closest(".zm-choiceR-lists").remove();
                    });
                    //选择图片弹出框标题
                    $(".zm-dialog-title:last").html("选择图片文件");
                    //向图片列表中增加拖放图片功能
                    zmChoiceRadio.dragLocalImgUpdate('zm-choicePicture-spli',function(data){
                        var ingBox=[];
                        var fid=$(".zm-choicePicture-middleLTop").find(".zm-choiceFile-ClassifyBackgroundColor").attr("data-fid");
                        $.each(data,function (i) {
                            ingBox.push(data[i].fileList)
                        })
                        if(ingBox.length!=0){
                            for(var i=0;i<ingBox.length;i++){
                                var form=new FormData();
                                form.append("upfile",ingBox[i]);
                                form.append("fFileId",fid);
                                zmChoiceRadio.getuploadImage(form,fid)
                            }
                        }
                    });
                    //拖动类目排序
                    //*****************************
                    $(document).off("mousedown.zm-page-setting-limousedown",".zm-choiceFile-categoryStyle");
                    $(document).on("mousedown.zm-page-setting-limousedown",".zm-choiceFile-categoryStyle",function(e){
                        //e.preventDefault();
                        e.stopPropagation();
                        var _this = $(this),box=_this.hasClass(".zm-choiceFile-dragMove")? _this:_this.closest(".zm-choiceFile-dragMove"),temp,moveXX,
                            downX = e.pageX,
                            downY = e.pageY,
                            downLeft = _this.offset().left,
                            downTop = _this.offset().top,
                            width = _this.outerWidth(),
                            height = _this.outerHeight(),move=true,moveX,moveY,showOrhide=false;
                        temp = $('<li style="box-sizing:border-box;margin-top: 5px;border:1px dashed #4ab1a7;font-size:16px;background:#ccc;color:#4ab1a7;text-align: center;padding:0;' +
                            'height:26px;width:' + "180px" + ';line-height: ' + height + 'px;"></li>');
                        //$(document).off("mousemove.zm-page-setting-li")
                        $(document).on("mousemove.zm-page-setting-li",function(e){
                           // e.preventDefault();
                            moveX = e.pageX;
                            moveY = e.pageY;
                            if(Math.abs(moveY-downY)<3)return false;//如果移动小于3
                            if(Math.abs(moveY-downY)>3||Math.abs(moveY-downY)==3&&move){//如果大于等于3
                                box.after(temp);
                                move=false;
                                box.css({position: 'fixed', left: downLeft, top: downTop});
                            }
                            box.siblings(".zm-choiceFile-dragMove").not(_this).not(temp).each(function(){ //获取所有的一级Li,过滤去定位的li，以及用来占位的li
                                var o = $(this);
                                var l = o.offset().left;
                                var r = o.offset().left+o.outerWidth();
                                var t = o.offset().top;
                                var b = o.offset().top+o.outerHeight();
                                if(moveY>t&&moveY<b){ // 根据定位的初始li的初始坐标和移动坐标值的差来和每个li的坐标值来做比较来设置站位的li的位置。 //moveX>l&&moveX<r&&  水平方向按下限制范围。
                                    if(moveY>(b-t)/2+t){
                                        temp.insertAfter(o)
                                    }else{
                                        temp.insertBefore(o)
                                    }
                                }
                            })
                            //nav始终限制在页面设置框内.
                            moveXX=moveX - downX;
                            if(moveXX<45&&moveXX>-50){
                                moveXX=moveX - downX
                            }else if(moveXX>45){
                                moveXX=45;
                            }else if(moveXX<-50){
                                moveXX=-50;
                            };
                            //nav始终限制在页面设置框内.
                            box.css({"left": moveXX + downLeft , "top": moveY - downY + downTop,"z-index":999});
                        });
                        $(document).on("mouseup.zm-page-setting-li",function (e) {
                            $(document).off('.zm-page-setting-li');
                            box.children("div").css("background-color","");
                            box.attr('style','');
                            if(Math.abs(moveY-downY)>3||Math.abs(moveY-downY)==3){
                                temp.replaceWith(box);
                                if(showOrhide){$(box).css("display","block")};
                                box.css({"transform":""});
                                zmChoiceRadio.getChoiceFileDragClassify(box,"picture")
                            }
                        })
                    });
                    //******************************************************************************************************
                    //判断是单选还是多选
                    if(choiceNumber){
                        $(".zm-choiceFile-btn1").unbind("click");
                        $(".zm-choiceFile-wrap").on("click",".zm-choiceRadio-cheak",function () {
                            if($(this).hasClass("fa-check")){
                                $(this).closest(".zm-choiceR-lists").siblings(".zm-choiceR-lists").find(".zm-choiceRadio-cheak").removeClass("fa-check");
                                $(this).closest(".zm-choiceR-lists").siblings(".zm-choiceR-lists").find(".zm-choiceFile-listWrap").css("display","none");
                                var a=$(".zm-choiceFile-wrap").find(".fa-check").length;
                                $(".zm-choiceFile-allListCheckNumber").html(a);
                            }
                        })
                    }
                    $('.zm-choiceFile-choiceAddPicture').off("click");
                    $('.zm-choiceFile-choiceAddPicture').on("click",function () {
                        var _this=$(this);
                        var a=zmChoiceRadio.choiceAndAddPicture( _this);
                        _this.closest(".zm-dialog-box").remove();
                        if(callback){
                            callback(a)
                        }
                    })
                },
                error:function(){
                    console.error("出错了")
                }
            })
        })
    },
    //选择视频文件模块页面
    choiceVideo:function (e) {
        var choiceNumber=(e.multiple);
        if(choiceNumber=='false'){
            choiceNumber=true;
        }else{
            choiceNumber=false;
        }
        var callback=e.callBack;
        zmEditor.dialog.loading("html/href/choiceVideo.html", function (e) {
            //ajax获取类目列表
            $.ajax({
                type: "post",
                url:zmEditor.url.getVideoCategory,
                dataType: "json",
                success: function(e){
                    var a=e.data;
                    var _this=$(".zm-choicePicture-middleLTop");
                    var first=a;
                    var len1 = first.length;
                    var firstHtml="";
                    var toggleHtml="";
                    var toggleHtml1='<span class="zm-choiceFile-children-toggle" onclick="zmChoiceRadio.threeChildrenToggle(this)">+</span>';
                    var toggleHtml2="";
                    for(var i=0;i<len1;i++){
                        var second = first[i].list;
                        var name1=first[i].fName;
                        var fId1=first[i].fId;
                        var len2= second.length;
                        var secondHtml="";
                        for(var k=0;k<len2;k++){
                            var name2=second[k].fName;
                            var fId2=second[k].fId;
                            var fParentId2=second[k].fParentId;
                            secondHtml+='<div class="zm-choiceFile-categoryStyle zm-choiceFile-dragMove" data-type="video2" data-fid="'+fId2+'" data-fName="'+name2+'" data-fparentid="'+fParentId2+'" ><input class="zm-choiceFile-classifyInput" type="text" value="'+name2+'" disabled="">'
                                +'<span class="fa fa-exclamation zm-choiceFile-sameNameTitle"></span><div class="zm-choiceFile-tipSet">'
                                +'<div class="zm-choiceFile-tipSet-con" style="display: none;"> <i class="tipSet-con-dot"></i>'
                                +'<div class="tipSet-con-list tipSet-con-list-rename"><i class="rename"></i>重命名</div>'
                                +'<div class="tipSet-con-list" onclick="zmChoiceRadio.deleteThreeClassifyTitle(this)"><i class="delete"></i>删除</div>'
                                +'</div></div></div>'
                        }
                        if(len2==0){
                            toggleHtml=toggleHtml2;
                        }
                        else{
                            toggleHtml=toggleHtml1;
                        }
                        firstHtml+='<div class="choiceFile-box11 zm-choiceFile-dragMove"><div class="zm-choiceFile-categoryStyle" data-type="video1" data-fid="'+fId1+'"  data-fName="'+name1+'">'
                            +'<span class="zm-choiceVideo-categoryStyle"></span>'
                            +''+toggleHtml+''
                            +'<input class="zm-choiceFile-classifyInput" type="text" value="'+name1+'" disabled="">'
                            +'<span class="fa fa-exclamation zm-choiceFile-sameNameTitle"></span><div class="zm-choiceFile-tipSet">'
                            +'<div class="zm-choiceFile-tipSet-con" style="display: none;"><i class="tipSet-con-dot"></i>'
                            +'<div class="tipSet-con-list tipSet-con-list-add2 newAdd-Or-delete"><i class="add"></i> 添加子类</div>'
                            +'<div class="tipSet-con-list tipSet-con-list-rename"><i class="rename"></i>重命名</div>'
                            +'<div class="tipSet-con-list" onclick="zmChoiceRadio.deleteThreeClassifyTitle(this)"><i class="delete"></i>删除</div>'
                            +'</div></div></div>'
                            +'<div class="choiceFile-box12 zm-choiceFiles-box">'+secondHtml+'</div>'
                            +'</div>';
                    }
                    var trashHtml='<div class="zm-choiceFile-trash zm-choiceFile-categoryStyle" data-fid="-1"><span style="color:#49b1a9;font-size: 16px;" class="fa fa-trash"></span>'
                        +'<span style="font-weight: bold">回收站</span></div><div style="width: 200px;height: 120px"></div>';
                    var topHtml='<div class="zm-choiceFile-category"><span class="zm-choiceVideo-categoryTop">视频类目</span></div>';
                    var allHtml=topHtml+firstHtml+trashHtml;
                    _this.html(allHtml);
                    // //首次获取图片列表
                    zmChoiceRadio.getAjaxVideoList(0,"",0,12,function (d) {
                        var a=d;
                        console.log(a)
                    })
                    $.fn.zmchoiceRadio();
                    //点击类目添加背景样式
                    $(".zm-choiceFile-categoryStyle").each(function () {
                        if($(this).attr("data-fid")=="0"||$(this).attr("data-fid")=="1"){
                            $(this).find(".zm-choiceFile-children-toggle").remove();
                            $(this).find(".zm-choiceFile-tipSet").remove();
                            $(this).closest(".choiceFile-box11").removeClass("zm-choiceFile-dragMove");
                            if($(this).attr("data-fid")=="0"){
                                $(this).addClass("zm-choiceFile-ClassifyBackgroundColor")
                            }
                        }
                    })
                    //点击类目获取相应的视频列表
                    $(document).on("click",".zm-choiceFile-clickVideo .zm-choiceFile-categoryStyle",function () {
                        var _this=$(this);
                        var a=_this.attr("data-fid");
                        $.each($(document).find(".zm-choiceFile-categoryStyle"),function (i,value) {
                            $(value).removeClass("zm-choiceFile-ClassifyBackgroundColor")
                        });
                        _this.addClass("zm-choiceFile-ClassifyBackgroundColor");
                        //zmChoiceRadio.getAjaxPictureList(a,"",0,24)
                        zmChoiceRadio.getAjaxVideoList(a,"",0,12)
                    });
                    //滚轮的scroll事件实现监控滚动条分页
                    var numberLength=2;
                    $(".zm-choiceRadio-middleR").on("mousewheel",function () {
                        var a=parseInt($(".zm-choiceRadio-middleR").find(".mCSB_container").css("top"));
                        if(a<=-50){
                            numberLength++;
                            console.log(numberLength)
                            var playStart=(numberLength-1)*12+1;
                            var playLength=12;
                            var fId=$(".zm-choiceFile-wrap").find(".zm-choiceFile-ClassifyBackgroundColor").attr("data-fid")
                            console.log(playStart,playLength)
                            zmChoiceRadio.getAjaxPictureList(fId,"",playStart,playLength,function (d) {
                                var a=d;
                                console.log(a)
                            })
                        }
                    });
                    $(".zm-choicePictureBtn-refresh").on("click",function () {
                        var fId=$(".zm-choiceFile-wrap").find(".zm-choiceFile-ClassifyBackgroundColor").attr("data-fid");
                        zmChoiceRadio.getAjaxPictureList(fId,"",0,12)
                        numberLength=2;
                    })
                    //增加视频大类
                    //***************************************************************************
                    $(document).off("click",".choicePicture-addBigclassify");
                    $(document).on("click",".choicePicture-addBigclassify",function () {
                        var a=$(document).find(".zm-choicePicture-middleL").find("input[type=text]"),b;
                        $.each(a,function (i,value) {
                            if($(value).val()==""){
                                b=false;
                            }else{
                                b=true;
                            }
                        })
                        if(b){
                            var h=$('<div class="choiceFile-box11 zm-choiceFile-dragMove"><div class="zm-choiceFile-categoryStyle" data-type="picture1">'
                                +'<span class="zm-choiceVideo-categoryStyle"></span>'
                                +'<input class="zm-choiceFile-classifyInput" type="text" value="" disabled="">'
                                +'<span class="fa fa-exclamation zm-choiceFile-sameNameTitle"></span><div class="zm-choiceFile-tipSet">'
                                +'<div class="zm-choiceFile-tipSet-con" style="display: none;"><i class="tipSet-con-dot"></i>'
                                +'<div class="tipSet-con-list tipSet-con-list-add2 newAdd-Or-delete"><i class="add"></i> 添加子类目</div>'
                                +'<div class="tipSet-con-list tipSet-con-list-rename"><i class="rename"></i>重命名</div>'
                                +'<div class="tipSet-con-list" onclick="zmChoiceRadio.deleteThreeClassifyTitle(this)"><i class="delete"></i>删除</div>'
                                +'</div></div></div>'
                                +'<div class="choiceFile-box12"></div>'
                                +'</div>')
                            $(".zm-choiceFile-trash").before(h);
                            var obj= h.find("input[type=text]");
                            obj.attr("disabled",false);
                            obj.focus();
                            //zmChoiceRadio.choiceFilerename();
                        }
                    })
                    //添加视频小类目
                    $(".zm-choiceFile-wrap").off("click",".tipSet-con-list-add2");
                    $(".zm-choiceFile-wrap").on("click",".tipSet-con-list-add2",function () {
                        var _this=$(this);
                        var toggleHtml6='<span class="zm-choiceFile-children-toggle" onclick="zmChoiceRadio.threeChildrenToggle(this)">-</span>';
                        var a=_this.closest(".choiceFile-box11").find(".choiceFile-box12>.zm-choiceFile-categoryStyle")
                        console.log(a.length);
                        if(a.length==0){
                            _this.closest(".choiceFile-box11").find(".zm-choiceFile-classifyInput").before($(toggleHtml6));
                            _this.closest(".choiceFile-box11").find(".choiceFile-box12").css("display","block")

                        }
                        var b=$('<div class="zm-choiceFile-categoryStyle zm-choiceFile-dragMove" data-type="picture2"><input class="zm-choiceFile-classifyInput" type="text" value="" disabled="">'
                            +'<span class="fa fa-exclamation zm-choiceFile-sameNameTitle"></span><div class="zm-choiceFile-tipSet">'
                            +'<div class="zm-choiceFile-tipSet-con" style="display: none;"> <i class="tipSet-con-dot"></i>'
                            +'<div class="tipSet-con-list tipSet-con-list-rename"><i class="rename"></i>重命名</div>'
                            +'<div class="tipSet-con-list" onclick="zmChoiceRadio.deleteThreeClassifyTitle(this)"><i class="delete"></i>删除</div>'
                            +'</div></div></div>');
                        _this.closest(".zm-choiceFile-categoryStyle").next(".choiceFile-box12").append(b);
                        var obj= b.find("input[type=text]");
                        obj.attr("disabled",false);
                        obj.focus();
                        zmChoiceRadio.choiceFilerename();
                    });
                    //失焦时发送增加和修改类目的参数
                    $(document).off("blur",".zm-choiceFile-classifyInput")
                    $(document).on("blur",".zm-choiceFile-classifyInput",function () {
                        var _this=$(this);
                        var fId,fName,fParentId;
                        if(_this.closest(".zm-choiceFile-categoryStyle").attr("data-fid")){
                            fId=_this.closest(".zm-choiceFile-categoryStyle").attr("data-fid");
                        }else{
                            fId=null;
                        }
                        if( _this.closest(".zm-choiceFile-categoryStyle").parent(".choiceFile-box12").prev().attr("data-fid")){
                            fParentId=_this.closest(".zm-choiceFile-categoryStyle").parent(".choiceFile-box12").prev().attr("data-fid");
                        }else{
                            fParentId=null;
                        }
                        fName=_this.val();
                        if(_this.attr("disabled")){
                            zmChoiceRadio.choiceVideoAddClassify(fId,fName,fParentId,function(id){
                                $(document).find(".zm-choiceFile-categoryStyle").each(function () {
                                    var _this=$(this);
                                    if(typeof(_this.attr("data-fid"))=="undefined"){
                                        _this.attr("data-fid",id);
                                    }
                                })
                            })
                        };
                        event.stopPropagation();
                    });

                    //点击视频列表修改名称
                    $(".zm-choiceRadio-middleR").on("click",".zm-chRlist-pencil",function () {
                        var a=$(this).closest(".zm-choiceV-lists").find(".zm-choiceRlist1");
                        var b=$(this).closest(".zm-choiceFile-check").find(".zm-choiceVlist2")
                      if(a.val()==""){
                          a.val(b.html())
                      }
                        a.css("display","block")
                    })
                    $(".zm-choiceRadio-middleR").on("keyup",".zm-choiceRlist1",function () {
                        $(this).closest(".zm-choiceV-lists").find(".zm-choiceVlist2").html($(this).val())
                    })

                    //对列表视频重命名
                    $(document).off("blur",".zm-choiceRlist1");
                    $(document).on("blur",".zm-choiceRlist1",function () {
                        $(this).css("display","none");
                       var fId=$(this).closest(".zm-choiceV-lists").attr("data-fid")
                       var fInfoName=$(this).closest(".zm-choiceV-lists").find(".zm-choiceRlist1").val();
                        zmChoiceRadio.choiceVideoToChangeName(fId,fInfoName)
                    });
                    //批量还原
                    $(document).on("click",".zm-choicePictureHistory",function () {
                        var imgLIscheak=[];
                        $(".zm-choiceRadio-middleR").find(".zm-choiceRadio-cheak").each(function (i,value) {
                            //console.log(i,value)
                            var _that=$(this);
                            // console.log(_that)
                            if(_that.hasClass('fa-check')){
                                imgLIscheak.push(_that.closest(".zm-choiceFile-check").attr("data-fid"))
                                console.log(_that.closest(".zm-choiceFile-check").attr("data-fid"))
                            }
                        })
                        var imageIds=imgLIscheak.join(",");
                        console.log(imageIds)
                        zmChoiceRadio.toBatchRestoreVideo(imageIds)
                    })
                    //单个还原
                    $(document).on("click",".zm-chRlist-history",function () {
                        var _this=$(this);
                        var imageIds=_this.closest(".zm-choiceFile-check").attr("data-fid");
                        zmChoiceRadio.toBatchRestoreVideo(imageIds)
                    })

                    //拖动类目排序
                    //*****************************
                    $(document).off("mousedown.zm-page-setting-limousedown",".zm-choiceFile-categoryStyle");
                    $(document).on("mousedown.zm-page-setting-limousedown",".zm-choiceFile-categoryStyle",function(e){
                        var moveType="video";
                        //e.preventDefault();
                        e.stopPropagation();
                        var _this = $(this),box=_this.hasClass(".zm-choiceFile-dragMove")? _this:_this.closest(".zm-choiceFile-dragMove"),temp,moveXX,
                            downX = e.pageX,
                            downY = e.pageY,
                            downLeft = _this.offset().left,
                            downTop = _this.offset().top,
                            width = _this.outerWidth(),
                            height = _this.outerHeight(),move=true,moveX,moveY,showOrhide=false;
                        temp = $('<li style="box-sizing:border-box;margin-top: 5px;border:1px dashed #4ab1a7;font-size:16px;background:#ccc;color:#4ab1a7;text-align: center;padding:0;' +
                            'height:26px;width:' + "180px" + ';line-height: ' + height + 'px;"></li>');
                        //$(document).off("mousemove.zm-page-setting-li")
                        $(document).on("mousemove.zm-page-setting-li",function(e){
                            // e.preventDefault();
                            moveX = e.pageX;
                            moveY = e.pageY;
                            if(Math.abs(moveY-downY)<3)return false;//如果移动小于3
                            if(Math.abs(moveY-downY)>3||Math.abs(moveY-downY)==3&&move){//如果大于等于3
                                box.after(temp);
                                move=false;
                                box.css({position: 'fixed', left: downLeft, top: downTop});
                            }
                            box.siblings(".zm-choiceFile-dragMove").not(_this).not(temp).each(function(){ //获取所有的一级Li,过滤去定位的li，以及用来占位的li
                                var o = $(this);
                                // var l = o.offset().left;
                                // var r = o.offset().left+o.outerWidth();
                                var t = o.offset().top;
                                var b = o.offset().top+o.outerHeight();
                                if(moveY>t&&moveY<b){ // 根据定位的初始li的初始坐标和移动坐标值的差来和每个li的坐标值来做比较来设置站位的li的位置。 //moveX>l&&moveX<r&&  水平方向按下限制范围。
                                    if(moveY>(b-t)/2+t){
                                        temp.insertAfter(o)
                                    }else{
                                        temp.insertBefore(o)
                                    }
                                }
                            });
                            //nav始终限制在页面设置框内.
                            moveXX=moveX - downX;
                            if(moveXX<45&&moveXX>-50){
                                moveXX=moveX - downX
                            }else if(moveXX>45){
                                moveXX=45;
                            }else if(moveXX<-50){
                                moveXX=-50;
                            };
                            //nav始终限制在页面设置框内.
                            box.css({"left": moveXX + downLeft , "top": moveY - downY + downTop,"z-index":999});
                        });
                        $(document).on("mouseup.zm-page-setting-li",function (e) {
                            $(document).off('.zm-page-setting-li');
                            box.children("div").css("background-color","");
                            box.attr('style','');
                            if(Math.abs(moveY-downY)>3||Math.abs(moveY-downY)==3){
                                temp.replaceWith(box);
                                if(showOrhide){$(box).css("display","block")};
                                box.css({"transform":""});
                                zmChoiceRadio.getChoiceFileDragClassify(box,moveType)
                            }
                        })
                    });
                    //******************************************************************************************************


                    //判断是单选还是多选
                    if(choiceNumber){
                        $(".zm-choiceFile-btn1").unbind("click");
                        $(".zm-choiceFile-wrap").on("click",".zm-choiceRadio-cheak",function () {
                            if($(this).hasClass("fa-check")){
                                $(this).closest(".zm-choiceR-lists").siblings(".zm-choiceR-lists").find(".zm-choiceRadio-cheak").removeClass("fa-check");
                                $(this).closest(".zm-choiceR-lists").siblings(".zm-choiceR-lists").find(".zm-choiceFile-listWrap").css("display","none");
                                var a=$(".zm-choiceFile-wrap").find(".fa-check").length;
                                $(".zm-choiceFile-allListCheckNumber").html(a);
                            }
                        })
                    }
                    $('.zm-choiceFile-choiceAddVideo').off("click");
                    $('.zm-choiceFile-choiceAddVideo').on("click",function () {
                        var _this=$(this);
                        var a=zmChoiceRadio.choiceAndAddVideo( _this);
                        _this.closest(".zm-dialog-box").remove();
                        if(callback){

                            callback(a)
                        }
                    });
                    //选择视频弹出框标题
                    $(".zm-dialog-title:last").html("选择视频");
                },
                error:function(){
                    console.error("出错了")
                }
            });
            $.ajax({
                type: "post",
                url:"http://192.168.0.127:8090/videoUploadFree/queryCategory",
                dataType: "json",
                success:function (e) {
                    var a=e;
                    console.log(a)
                    var allHtml="";
                    for(var i=0;i<a.length;i++){
                        allHtml+='<li data-fid="'+a[i].fId+'">'+a[i].fCategoryName+'</li>'
                    }
                    $(".zm-choiceFile-middleBoxList2 .zm-choiceVideo-middleL-wrapBox").html(allHtml);
                    //首次获取列表
                    var b=$(".zm-choiceFile-middleBoxList2").find(".zm-choiceVideo-middleL-wrapBox>li").eq(0).attr("data-fid");
                    $(".zm-choiceFile-middleBoxList2").find(".zm-choiceVideo-middleL-wrapBox>li").eq(0).addClass("zm-choiceFile-ClassifyBackgroundColor")
                    zmChoiceRadio.getAjaxFreeSourcesVideoList( b);
                    //点击类目获取列表
                    $(".zm-choiceFile-middleBoxList2").on("click",".zm-choiceVideo-middleL-wrapBox>li",function () {
                        var _this=$(this);
                        var leiMu=_this.attr("data-fid");
                        _this.addClass("zm-choiceFile-ClassifyBackgroundColor").siblings().removeClass("zm-choiceFile-ClassifyBackgroundColor");
                        zmChoiceRadio.getAjaxFreeSourcesVideoList(leiMu);
                    });
                }
            })
        })
    },
    //选择新闻文件模块页面
    choiceNews:function () {
        zmEditor.dialog.loading("html/href/choiceNews.html", function (e) {
            //ajax获取类目列表
            $.ajax({
                type: "post",
                url:zmEditor.url.getNewsCategory,
                dataType: "json",
                success: function(e){
                    var a=e.data;
                    var _this=$(".zm-choicePicture-middleLTop");
                    var first=a;
                    var len1 = first.length;
                    var firstHtml="";
                    var toggleHtml="";
                    var toggleHtml1='<span class="zm-choiceFile-children-toggle" onclick="zmChoiceRadio.threeChildrenToggle(this)">+</span>';
                    var toggleHtml2="";
                    for(var i=0;i<len1;i++){
                        var second = first[i].childrenList;
                        var name1=first[i].fName;
                        var fId1=first[i].fId;
                        var len2= second.length;
                        var secondHtml="";
                        for(var k=0;k<len2;k++){
                            var name2=second[k].fName;
                            var fId2=second[k].fId;
                            var fParentId2=second[k].fParentId;
                            secondHtml+='<div class="zm-choiceFile-categoryStyle zm-choiceFile-dragMove" data-type="picture2" data-fid="'+fId2+'" data-fParentId="'+fParentId2+'" data-fName="'+name2+'" ><input class="zm-choiceFile-classifyInput" type="text" value="'+name2+'" disabled="">'
                                +'<span class="fa fa-exclamation zm-choiceFile-sameNameTitle"></span><div class="zm-choiceFile-tipSet">'
                                +'<div class="zm-choiceFile-tipSet-con" style="display: none;"> <i class="tipSet-con-dot"></i>'
                                +'<div class="tipSet-con-list tipSet-con-list-rename"><i class="rename"></i>重命名</div>'
                                +'<div class="tipSet-con-list" onclick="zmChoiceRadio.deleteThreeClassifyTitle(this)"><i class="delete"></i>删除</div>'
                                +'</div></div></div>'
                        }
                        if(len2==0){
                            toggleHtml=toggleHtml2;
                        }
                        else{
                            toggleHtml=toggleHtml1;
                        }
                        firstHtml+='<div class="choiceFile-box11 zm-choiceFile-dragMove"><div class="zm-choiceFile-categoryStyle" data-type="picture1" data-fid="'+fId1+'"  data-fName="'+name1+'">'
                            +'<span class="zm-choicePicture-categoryStyle"></span>'
                            +''+toggleHtml+''
                            +'<input class="zm-choiceFile-classifyInput" type="text" value="'+name1+'" disabled="">'
                            +'<span class="fa fa-exclamation zm-choiceFile-sameNameTitle"></span><div class="zm-choiceFile-tipSet">'
                            +'<div class="zm-choiceFile-tipSet-con" style="display: none;"><i class="tipSet-con-dot"></i>'
                            +'<div class="tipSet-con-list tipSet-con-list-add2 newAdd-Or-delete"><i class="add"></i> 添加子类</div>'
                            +'<div class="tipSet-con-list tipSet-con-list-rename"><i class="rename"></i>重命名</div>'
                            +'<div class="tipSet-con-list" onclick="zmChoiceRadio.deleteThreeClassifyTitle(this)"><i class="delete"></i>删除</div>'
                            +'</div></div></div>'
                            +'<div class="choiceFile-box12 zm-choiceFiles-box">'+secondHtml+'</div>'
                            +'</div>';
                    }

                    var trashHtml='<div class="zm-choiceFile-trash zm-choiceFile-categoryStyle" data-fid="-1"><span style="color:#49b1a9;font-size: 16px;" class="fa fa-trash"></span>'
                        +'<span style="font-weight: bold">回收站</span></div><div style="width: 200px;height: 120px"></div>';
                    var topHtml='<div class="zm-choiceFile-category"><span class="zm-choicePicture-categoryTop">图片类目</span></div>';
                    var allHtml=topHtml+firstHtml+trashHtml;
                    _this.html(allHtml);
                    // //首次获取图片列表
                    zmChoiceRadio.getAjaxPictureList(0)
                    $.fn.zmchoiceRadio();
                    //点击类目添加背景样式
                    $(".zm-choiceFile-categoryStyle").each(function () {
                        if($(this).attr("data-fid")=="0"||$(this).attr("data-fid")=="1"){
                            $(this).find(".zm-choiceFile-children-toggle").remove();
                            $(this).find(".zm-choiceFile-tipSet").remove();
                            if($(this).attr("data-fid")=="0"){
                                $(this).addClass("zm-choiceFile-ClassifyBackgroundColor")
                            }
                        }
                    })
                    //点击类目获取相应的新闻列表
                    $(document).on("click",".zm-choiceFile-categoryStyle",function () {
                        var _this=$(this);
                        var a=_this.attr("data-fid");
                        $.each($(document).find(".zm-choiceFile-categoryStyle"),function (i,value) {
                            $(value).removeClass("zm-choiceFile-ClassifyBackgroundColor")
                        })
                        _this.addClass("zm-choiceFile-ClassifyBackgroundColor")
                        zmChoiceRadio.getAjaxPictureList(a)
                    })

                    //增加新闻大类
                    //***************************************************************************
                    //增加新闻大类
                    $(document).off("click",".choicePicture-addBigclassify");
                    $(document).on("click",".choicePicture-addBigclassify",function () {
                        var a=$(document).find(".zm-choicePicture-middleL").find("input[type=text]"),b;
                        $.each(a,function (i,value) {
                            if($(value).val()==""){
                                b=false;
                            }else{
                                b=true;
                            }
                        })
                        if(b){
                            var h=$('<div class="choiceFile-box11 zm-choiceFile-dragMove"><div class="zm-choiceFile-categoryStyle" data-type="picture2">'
                                +'<span class="zm-choicePicture-categoryStyle"></span>'
                                +'<input class="zm-choiceFile-classifyInput" type="text" value="" disabled="">'
                                +'<span class="fa fa-exclamation zm-choiceFile-sameNameTitle"></span><div class="zm-choiceFile-tipSet">'
                                +'<div class="zm-choiceFile-tipSet-con" style="display: none;"><i class="tipSet-con-dot"></i>'
                                +'<div class="tipSet-con-list tipSet-con-list-add2 newAdd-Or-delete"><i class="add"></i> 添加子类目</div>'
                                +'<div class="tipSet-con-list tipSet-con-list-rename"><i class="rename"></i>重命名</div>'
                                +'<div class="tipSet-con-list" onclick="zmChoiceRadio.deleteThreeClassifyTitle(this)"><i class="delete"></i>删除</div>'
                                +'</div></div></div>'
                                +'<div class="choiceFile-box12"></div>'
                                +'</div>')
                            $(".zm-choiceFile-trash").before(h);
                            var obj= h.find("input[type=text]");
                            obj.attr("disabled",false);
                            obj.focus();
                            //zmChoiceRadio.choiceFilerename();
                        }
                    })
                    //添加新闻小类目
                    $(".zm-choiceFile-wrap").off("click",".tipSet-con-list-add2");
                    $(".zm-choiceFile-wrap").on("click",".tipSet-con-list-add2",function () {
                        var _this=$(this);
                        var toggleHtml6='<span class="zm-choiceFile-children-toggle" onclick="zmChoiceRadio.threeChildrenToggle(this)">-</span>';
                        var a=_this.closest(".choiceFile-box11").find(".choiceFile-box12>.zm-choiceFile-categoryStyle")
                        console.log(a.length)
                        if(a.length==0){
                            _this.closest(".choiceFile-box11").find(".zm-choiceFile-classifyInput").before($(toggleHtml6));
                            _this.closest(".choiceFile-box11").find(".choiceFile-box12").css("display","block");
                        }
                        var b=$('<div class="zm-choiceFile-categoryStyle zm-choiceFile-dragMove" data-type="picture2"><input class="zm-choiceFile-classifyInput" type="text" value="" disabled="">'
                            +'<span class="fa fa-exclamation zm-choiceFile-sameNameTitle"></span><div class="zm-choiceFile-tipSet">'
                            +'<div class="zm-choiceFile-tipSet-con" style="display: none;"> <i class="tipSet-con-dot"></i>'
                            +'<div class="tipSet-con-list tipSet-con-list-rename"><i class="rename"></i>重命名</div>'
                            +'<div class="tipSet-con-list" onclick="zmChoiceRadio.deleteThreeClassifyTitle(this)"><i class="delete"></i>删除</div>'
                            +'</div></div></div>');
                        _this.closest(".zm-choiceFile-categoryStyle").next(".choiceFile-box12").append(b);
                        var obj= b.find("input[type=text]");
                        obj.attr("disabled",false);
                        obj.focus();
                        zmChoiceRadio.choiceFilerename();
                    });
                    //失焦时发送增加和修改类目的参数
                    $(document).off("blur",".zm-choiceFile-classifyInput")
                    $(document).on("blur",".zm-choiceFile-classifyInput",function () {
                        var _this=$(this);
                        var fId,fName,fParentId;
                        if(_this.closest(".zm-choiceFile-categoryStyle").attr("data-fid")){
                            fId=_this.closest(".zm-choiceFile-categoryStyle").attr("data-fid");
                        }else{
                            fId=null;
                        }
                        if( _this.closest(".zm-choiceFile-categoryStyle").parent(".choiceFilel2-box").prev().attr("data-fid")){
                            fParentId=_this.closest(".zm-choiceFile-categoryStyle").parent(".choiceFilel2-box").prev().attr("data-fid");
                        }else{
                            fParentId=null;
                        }
                        fName=_this.val();
                        if(_this.attr("disabled")){
                            zmChoiceRadio.choiceNewsAddClassify(fId,fName,fParentId,function(id){
                                $(document).find(".zm-choiceFile-categoryStyle").each(function () {
                                    var _this=$(this);
                                    if(typeof(_this.attr("data-fid"))=="undefined"){
                                        _this.attr("data-fid",id);
                                    }
                                })

                            })
                        };

                    });
                    //选择音频弹出框标题
                    $(".zm-dialog-title:last").html("选择新闻");
                },
                error:function(){
                    console.error("出错了")
                }
            })
        })

    },
    //选择博客文件模块页面
    choiceBlogger: function (e)  {
        var choiceNumber=(e.multiple);
        if(choiceNumber=='false'){
            choiceNumber=true;
        }else{
            choiceNumber=false;
        }
        var callback=e.callBack;
        //loadDialog
        zmEditor.dialog.loading("html/href/choiceBlogger.html", function () {
            //这里写回调函数
            $.ajax({
                type: "post",
                url:zmEditor.url.getBloggerCategory,
                dataType: "json",
                data:{ "iDisplayStart":0,"iDisplayLength":12},
                success: function(e){
                    var countLength=e.count;
                    console.log(countLength)
                    var a=e.aaData;
                    var listHtml='';
                    $.each(a,function (i,value) {
                        var timeStamp=a[i].fProcessStartTime;
                        var date = new Date(timeStamp);
                        var timeY = date.getFullYear() + '-';
                        var timeM = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
                        var timeD = date.getDate() + ' ';
                        var timeH = date.getHours() + ':';
                        var timem = date.getMinutes()>10? date.getMinutes():"0"+date.getMinutes();
                        var timeLeft=timeY+timeM+timeD;
                        var timeRight=timeH+timem;
                        var fImg=$(value.fBlogContent).find('img').eq(0).attr("src")? $(value.fBlogContent).find('img').eq(0).attr("src"):"imgs/carousel05.png";
                        listHtml +="<li class='zm-choiceBloggerList zm-choiceFile-check' data-fBlogContent='"+a[i].fBlogContent+"' data-fId='"+a[i].fId+"' data-fBlogCode='"+a[i].fBlogCode+"' data-fBlogTitle='"+a[i].fBlogTitle+"' data-fCreateUserAccount='"+a[i].fCreateUserAccount+"' data-fReadCount='"+a[i].fReadCount+"' data-fForwardCount='"+a[i].fForwardCount+"' data-fLikeCount='"+a[i].fLikeCount+"'>"
                            +'<div class="zm-choiceBloggerListLeft"><span class="zm-ChoiceNews-cheak fa"></span><img class="zm-choiceNewsImg" src="'+fImg+'" alt="">'
                            +'</div><div class="zm-choiceBloggerListRight"><div class="zm-choiceBloggerLrtop"><input class="zm-choiceNlist1" value="" type="text" >'
                            +'<div class="zm-choiceNews-ListTitle">'+a[i].fBlogTitle+'</div>'
                            +'<span class="zm-choiceNewsListTime">'+timeLeft+timeRight+'</span></div><div class="zm-choiceBloggerLrboom">'
                            +'<div class="zm-choiceBloggerList-contentText">'+$(value.fBlogContent).text()+'</div>'
                            +'<span class="fa fa-trash" onclick="zmChoiceRadio.deleteFileTitle(this)" delete-title="blogger1"></span>'
                            +'<span class="fa fa-pencil zm-chNlist-pencil"></span></div></div></li>'
                    });
                    $(".zm-choiceFile-middleInner").append($(listHtml));
                    var c=$(".zm-choiceFile-middleInner").find(".zm-choiceBloggerList").length;
                    $(".zm-choiceFile-allListNumber").html(c)
                    // var g=$("zm-choiceFile-middleInner").find(".fa-check").length;
                    // $(".zm-choiceFile-allListCheckNumber").append($(g));
                    //滚轮的scroll事件实现监控滚动条分页
                    var numberLength=2;
                    $(".zm-choiceFile-middleWrap").on("mousewheel",function () {
                        //var a=parseInt($(".zm-choiceFile-wrap").find(".mCSB_container").css("top"));
                        var a=parseInt($(".zm-choiceFile-wrap").find("#mCSB_5_dragger_vertical").css("top"));
                        console.log($(".zm-choiceFile-wrap").find("#mCSB_5_dragger_vertical"),a)
                       if(a>=212){
                           $(".zm-choiceFile-wrap").find("#mCSB_5_dragger_vertical").css("top","0px")
                           numberLength++;
                           console.log(numberLength);
                           var playStart=(numberLength-1)*6+1;
                           var playLength=6;
                           console.log(playStart,playLength);
                           zmChoiceRadio.getAjaxBloggerList(playStart,playLength);
                       }
                    });
                    //点击博客列表修改名称
                    $(".zm-choiceAlbum-middle").on("click",".zm-chNlist-pencil",function () {
                        console.log(1)
                        $(this).closest(".zm-choiceBloggerList").find(".zm-choiceNlist1").css("display","block")
                    })
                    $(".zm-choiceAlbum-middle").on("keyup",".zm-choiceNlist1",function () {
                        $(this).closest(".zm-choiceBloggerList").find(".zm-choiceNews-ListTitle").html($(this).val())
                    });
                        //点击重命名博客标题
                    $(document).off("blur",".zm-choiceNlist1");
                    $(document).on("blur",".zm-choiceNlist1",function () {
                        $(this).css("display","none");
                        var _id=$(this).closest(".zm-choiceBloggerList ").attr("data-fid");
                        var fName=$(this).closest(".zm-choiceBloggerList ").find(".zm-choiceNlist1").val();
                        console.log(_id,fName);
                        zmChoiceRadio.choiceBloggerTochangeName(_id,fName)
                    });
                    //刷新页面
                    $(".zm-choiceNewsBtn-refresh").on("click",function () {
                        $(this).parent().next().find(".zm-choiceFile-allListCheckNumber").text(0);
                        zmChoiceRadio.getAjaxBloggerList(0,12);
                        numberLength=2;
                    });
                    //判断是单选还是多选
                    if(choiceNumber){
                        $(".zm-choiceFile-btn1").unbind("click");
                        $(".zm-choiceFile-wrap").on("click",".zm-ChoiceNews-cheak",function () {
                            if($(this).hasClass("fa-check")){
                                $(this).closest(".zm-choiceFile-check").siblings(".zm-choiceFile-check").find(".zm-ChoiceNews-cheak").removeClass("fa-check");
                                var a=$(".zm-choiceFile-wrap").find(".fa-check").length;
                                $(".zm-choiceFile-allListCheckNumber").html(a);
                            }
                        })
                    }
                    $('.zm-choiceFile-choiceAddBlogger').off("click");
                    $('.zm-choiceFile-choiceAddBlogger').on("click",function () {
                        var _this=$(this);
                        var a=zmChoiceRadio.choiceAndAddBlogger( _this);
                        _this.closest(".zm-dialog-box").remove();
                        if(callback){
                            callback(a)
                        }
                    })
                }
            });

            $(".zm-dialog-title:last").html("选择博客")
            $.fn.zmchoiceRadio()

        })
    },
    //选择商品文件模块页面`
    choiceGoods: function () {
        //loadDialog
        zmEditor.dialog.loading("html/href/choiceGoods.html", function () {
            //这里写回调函数
            $.ajax({
                type: "post",
                url:zmEditor.url.getGoodsCategory,
                dataType: "json",
                success: function(e){
                    var a=e.data;
                    var _this=$(".zm-choiceGoods-middleLTop");
                    var first=a;
                    var len1 = first.length;
                    var firstHtml="";
                    var toggleHtml="";
                    var toggleHtml1='<span class="zm-choiceFile-children-toggle" onclick="zmChoiceRadio.threeChildrenToggle(this)">+</span>';
                    var toggleHtml2="";
                    for(var i=0;i<len1;i++){
                        var second = first[i].list;
                        var name1=first[i].fName;
                        var fId1=first[i].fId;
                        var fParentId1=first[i].fParentId;
                        var fSort1=first[i].fSort;
                        var len2= second.length;
                        var secondHtml="";
                        for(var j=0;j<len2;j++){
                            var third=second[j].list;
                            var name2=second[j].fName;
                            var fId2=second[j].fId;
                            var fParentId2=second[j].fParentId;
                            var fSort2=second[j].fSort;
                            var len3=third.length;
                            var thirdHtml="";
                            for(var k=0;k<len3;k++){
                                var name3=third[k].fName;
                                var fId3=third[k].fId;
                                var fParentId3=third[k].fParentId;
                                var fSort3=third[k].fSort;
                                thirdHtml+='<div class="zm-choiceFile-categoryStyle" data-type="goods1" data-flagNumber="3" data-fId="'+fId3+'" data-fParentId="'+fParentId3+'" data-fSort="'+fSort3+'"><input class="zm-choiceFile-classifyInput" type="text" value="'+name3+'" disabled="">'
                                    +'<span class="fa fa-exclamation zm-choiceFile-sameNameTitle"></span><div class="zm-choiceFile-tipSet">'
                                    +'<div class="zm-choiceFile-tipSet-con" style="display: none;"> <i class="tipSet-con-dot"></i>'
                                    +'<div class="tipSet-con-list tipSet-con-list-rename"><i class="rename"></i>重命名</div>'
                                    +'<div class="tipSet-con-list" onclick="zmChoiceRadio.deleteThreeClassifyTitle(this)"><i class="delete"></i>删除</div>'
                                    +'</div></div></div>'
                            }
                            if(len3==0){
                                toggleHtml=toggleHtml2;
                            }
                            else{
                                toggleHtml=toggleHtml1;
                            }
                            secondHtml+='<div class="zm-choiceFile-categoryStyle" data-type="goods1" data-flagNumber="2" data-fId="'+fId2+'" data-fParentId="'+fParentId2+'" data-fSort="'+fSort2+'"><span class="zm-choicePicture-categoryStyle"></span>'
                                +''+toggleHtml+''
                                +'<input class="zm-choiceFile-classifyInput" type="text" value="'+name2+'" disabled="">'
                                +'<span class="fa fa-exclamation zm-choiceFile-sameNameTitle"></span><div class="zm-choiceFile-tipSet">'
                                +'<div class="zm-choiceFile-tipSet-con" style="display: none;"> <i class="tipSet-con-dot"></i>'
                                +'<div class="tipSet-con-list tipSet-con-list-add2 newAdd-Or-delete"><i class="add"></i> 添加子类</div>'
                                +'<div class="tipSet-con-list tipSet-con-list-rename"><i class="rename"></i>重命名</div>'
                                +'<div class="tipSet-con-list" onclick="zmChoiceRadio.deleteThreeClassifyTitle(this)"><i class="delete"></i>删除</div>'
                                +'</div></div>'
                                +'</div>'
                                +'<div class="choiceFile-box13">'+thirdHtml+'</div>'
                        }
                        if(len2==0){
                            toggleHtml=toggleHtml2;
                            secondHtml='';
                        }
                        else{
                            toggleHtml=toggleHtml1;
                            secondHtml=secondHtml;
                        }
                        firstHtml+='<div class="choiceFile-box11"><div class="zm-choiceFile-categoryStyle" data-type="goods1" data-flagNumber="1" data-fId="'+fId1+'" data-fParentId="'+fParentId1+'" data-fSort="'+fSort1+'">'
                            +'<span class="zm-choicePicture-categoryStyle"></span>'
                            +''+toggleHtml+''
                            +'<input class="zm-choiceFile-classifyInput" type="text" value="'+name1+'" disabled="">'
                            +'<span class="fa fa-exclamation zm-choiceFile-sameNameTitle"></span><div class="zm-choiceFile-tipSet">'
                            +'<div class="zm-choiceFile-tipSet-con" style="display: none;"><i class="tipSet-con-dot"></i>'
                            +'<div class="tipSet-con-list tipSet-con-list-add newAdd-Or-delete"><i class="add"></i> 添加子类</div>'
                            +'<div class="tipSet-con-list tipSet-con-list-rename"><i class="rename"></i>重命名</div>'
                            +'<div class="tipSet-con-list" onclick="zmChoiceRadio.deleteThreeClassifyTitle(this)"><i class="delete"></i>删除</div>'
                            +'</div></div></div>'
                            +'<div class="choiceFile-box12">'+secondHtml+'</div>'
                            +'</div>';
                    }
                    var trashHtml='<div class="zm-choiceFile-trash zm-choiceFile-categoryStyle" data-fid="-1"><span style="color:#49b1a9;font-size: 16px;" class="fa fa-trash"></span>'
                        +'<span style="font-weight: bold">回收站</span></div><div style="width: 200px;height: 120px"></div>';
                    var topHtml='<div class="choiceFile-box11"><div class="zm-choiceFile-categoryStyle" data-fId="0">'
                        +'<span class="zm-choicePicture-categoryStyle" ></span>'
                        +'<input class="zm-choiceFile-classifyInput" type="text" value="全部商品" disabled="">'
                        +'<span class="fa fa-exclamation zm-choiceFile-sameNameTitle"></span>'
                        +'</div>'
                        +'</div>';
                    var allHtml=topHtml+firstHtml+trashHtml;
                    _this.html(allHtml);
                    $.fn.zmchoiceRadio()
                    zmChoiceRadio.getAjaxGoodsList()

                    $(".zm-choiceFile-categoryStyle").each(function () {
                        if($(this).attr("data-fid")=="0"){
                                $(this).addClass("zm-choiceFile-ClassifyBackgroundColor")
                        }
                    })

                    //点击类目获取相应的视频列表
                    $(document).on("click",".zm-choiceFile-categoryStyle",function () {
                        var _this=$(this);
                        //var a=_this.attr("data-choiceClassify")
                        var b=_this.attr("data-fid");
                        $.each($(document).find(".zm-choiceFile-categoryStyle"),function (i,value) {
                            $(value).removeClass("zm-choiceFile-ClassifyBackgroundColor")
                        })
                        _this.addClass("zm-choiceFile-ClassifyBackgroundColor")
                        zmChoiceRadio.getAjaxGoodsList (b)
                        return;
                    })

                    //增加商品大类
                    $(document).off("click",".choicePicture-addBigclassify");
                    $(document).on("click",".choicePicture-addBigclassify",function () {
                        var a=$(document).find(".zm-choiceGoods-middleL").find("input[type=text]"),b;
                        $.each(a,function (i,value) {
                            if($(value).val()==""){
                                b=false;
                            }else{
                                b=true;
                            }
                        })
                        if(b){
                            var h=$('<div class="choiceFile-box11"><div class="zm-choiceFile-categoryStyle">'
                                +'<span class="zm-choicePicture-categoryStyle"></span>'
                                +'<input class="zm-choiceFile-classifyInput" type="text" value="" disabled="">'
                                +'<span class="fa fa-exclamation zm-choiceFile-sameNameTitle"></span><div class="zm-choiceFile-tipSet">'
                                +'<div class="zm-choiceFile-tipSet-con" style="display: none;"><i class="tipSet-con-dot"></i>'
                                +'<div class="tipSet-con-list tipSet-con-list-add newAdd-Or-delete"><i class="add"></i> 添加子类目</div>'
                                +'<div class="tipSet-con-list tipSet-con-list-rename"><i class="rename"></i>重命名</div>'
                                +'<div class="tipSet-con-list" onclick="zmChoiceRadio.deleteThreeClassifyTitle(this)"><i class="delete"></i>删除</div>'
                                +'</div></div></div>'
                                +'<div class="choiceFile-box12"></div>'
                                +'</div>')
                            $(".zm-choiceFile-trash").before(h);
                            var obj= h.find("input[type=text]");
                            obj.attr("disabled",false);
                            obj.focus();
                            //zmChoiceRadio.choiceFilerename();
                        }
                    })
                    // //增加商品中类
                    $(".zm-choiceFile-wrap").off("click",".tipSet-con-list-add");
                    $(".zm-choiceFile-wrap").on("click",".tipSet-con-list-add",function () {
                        var _this=$(this);
                        var toggleHtml6='<span class="zm-choiceFile-children-toggle" onclick="zmChoiceRadio.threeChildrenToggle(this)">-</span>';
                        var a=_this.closest(".choiceFile-box11").find(".choiceFile-box12>.zm-choiceFile-categoryStyle")
                        //var a1=a.length;.find(".zm-choiceFile-categoryStyle")||false;
                        console.log(a.length)
                        if(a.length==0){
                            _this.closest(".choiceFile-box11").find(".zm-choiceFile-classifyInput").before($(toggleHtml6))
                            _this.closest(".choiceFile-box11").find(".choiceFile-box12").css("display","block")

                        }
                        var b=$('<div class="zm-choiceFile-categoryStyle" ><span class="zm-choicePicture-categoryStyle"></span>'
                            +'<input class="zm-choiceFile-classifyInput" type="text" value="" disabled="">'
                            +'<span class="fa fa-exclamation zm-choiceFile-sameNameTitle"></span><div class="zm-choiceFile-tipSet">'
                            +'<div class="zm-choiceFile-tipSet-con" style="display: none;"> <i class="tipSet-con-dot"></i>'
                            +'<div class="tipSet-con-list tipSet-con-list-add2 newAdd-Or-delete"><i class="add"></i> 添加子类目</div>'
                            +'<div class="tipSet-con-list tipSet-con-list-rename"><i class="rename"></i>重命名</div>'
                            +'<div class="tipSet-con-list" onclick="zmChoiceRadio.deleteThreeClassifyTitle(this)"><i class="delete"></i>删除</div>'
                            +'</div></div>'
                            +'</div>'
                            +'<div class="choiceFile-box13"></div>');
                        _this.closest(".choiceFile-box11").find(".choiceFile-box12").append(b);
                        var obj= b.find("input[type=text]");
                        obj.attr("disabled",false);
                        obj.focus();
                        zmChoiceRadio.choiceFilerename();
                    });

                    //添加商品小类目
                    $(".zm-choiceFile-wrap").off("click",".tipSet-con-list-add2");
                    $(".zm-choiceFile-wrap").on("click",".tipSet-con-list-add2",function () {
                        var _this=$(this);
                        var toggleHtml6='<span class="zm-choiceFile-children-toggle" onclick="zmChoiceRadio.threeChildrenToggle(this)">-</span>';
                        var a=_this.closest(".choiceFile-box12").find(".choiceFile-box13>.zm-choiceFile-categoryStyle")
                        console.log(a.length)
                        if(a.length==0){
                            _this.closest(".choiceFile-box12").find(".zm-choiceFile-classifyInput").before($(toggleHtml6))
                            _this.closest(".choiceFile-box12").find(".choiceFile-box13").css("display","block")

                        }
                        var b=$('<div class="zm-choiceFile-categoryStyle"><input class="zm-choiceFile-classifyInput" type="text" value="" disabled="">'
                            +'<span class="fa fa-exclamation zm-choiceFile-sameNameTitle"></span><div class="zm-choiceFile-tipSet">'
                            +'<div class="zm-choiceFile-tipSet-con" style="display: none;"> <i class="tipSet-con-dot"></i>'
                            +'<div class="tipSet-con-list tipSet-con-list-rename"><i class="rename"></i>重命名</div>'
                            +'<div class="tipSet-con-list" onclick="zmChoiceRadio.deleteThreeClassifyTitle(this)"><i class="delete"></i>删除</div>'
                            +'</div></div></div>');
                        _this.closest(".zm-choiceFile-categoryStyle").next(".choiceFile-box13").append(b);
                        var obj= b.find("input[type=text]");
                        obj.attr("disabled",false);
                        obj.focus();
                        zmChoiceRadio.choiceFilerename();
                    });
                    //input框失去焦点是向后台发送数据请求增加类目
                    $(document).off("blur",".zm-choiceFile-classifyInput")
                    $(document).on("blur",".zm-choiceFile-classifyInput",function () {
                        var _this=$(this);
                        var fName,fParentId;
                        var fChoice=_this.closest(".zm-choiceFile-categoryStyle").parent();
                        console.log(fChoice)
                        if(fChoice.hasClass("choiceFile-box11")){
                            console.log(1213)
                            fParentId="0"
                        }else if(fChoice.hasClass("choiceFile-box13")){
                            fParentId=_this.closest(".choiceFile-box12").children(".zm-choiceFile-categoryStyle").attr("data-fid");
                        }else{
                            fParentId=_this.closest(".choiceFile-box11").children(".zm-choiceFile-categoryStyle").attr("data-fid");
                        }
                        fName=_this.val();
                        if(_this.attr("disabled")){
                            zmChoiceRadio.choiceGoodsAddClassify(fName,fParentId,function(id){
                                $(document).find(".zm-choiceFile-categoryStyle").each(function () {
                                    var _this=$(this);
                                    if(typeof(_this.attr("data-fid"))=="undefined"){
                                        _this.attr("data-fid",id);
                                    }
                                })

                            })
                        };

                    });

                }
            })
            $(".zm-dialog-title:last").html("选择商品")
        })
    },
    //选择服务文件模块页面
    choiceService: function () {
        //loadDialog
        zmEditor.dialog.loading("html/href/choiceService.html", function () {
            $.ajax({
                type: "post",
                url:zmEditor.url.getServiceCategory,
                dataType: "json",
                success: function(e){
                    var a=e.data;
                    var _this=$(".zm-choiceService-middleLTop");
                    var first=a;
                    var len1 = first.length;
                    var firstHtml="";
                    var toggleHtml="";
                    var toggleHtml1='<span class="zm-choiceFile-children-toggle" onclick="zmChoiceRadio.threeChildrenToggle(this)">+</span>';
                    var toggleHtml2="";
                    for(var i=0;i<len1;i++){
                        var second = first[i].list;
                        var name1=first[i].fName;
                        var fid1=first[i].fId;
                        var fParentId1=first[i].fParentId;
                        var fSort1=first[i].fSort;
                        var len2= second.length;
                        var secondHtml="";
                        for(var k=0;k<len2;k++){
                            var name2=second[k].fName;
                            var fid2=second[k].fId;
                            var fParentId2=second[k].fParentId;
                            var fSort2=second[k].fSort;
                            secondHtml+='<div class="zm-choiceFile-categoryStyle zm-choiceFile-dragMove" data-type="service2" data-fId="'+fid2+'" data-fName="'+name2+'" data-fParentId="'+fParentId2+'" data-fSort="'+fSort2+'" ><input class="zm-choiceFile-classifyInput" type="text" value="'+name2+'" disabled="">'
                                +'<span class="fa fa-exclamation zm-choiceFile-sameNameTitle"></span><div class="zm-choiceFile-tipSet">'
                                +'<div class="zm-choiceFile-tipSet-con" style="display: none;"> <i class="tipSet-con-dot"></i>'
                                +'<div class="tipSet-con-list tipSet-con-list-rename"><i class="rename"></i>重命名</div>'
                                +'<div class="tipSet-con-list" onclick="zmChoiceRadio.deleteThreeClassifyTitle(this)"><i class="delete"></i>删除</div>'
                                +'</div></div></div>'
                        }
                        if(len2==0){
                            toggleHtml=toggleHtml2;
                        }
                        else{
                            toggleHtml=toggleHtml1;
                        }
                        firstHtml+='<div class="choiceFile-box11 zm-choiceFile-dragMove" data-fSort="'+fSort1+'"><div class="zm-choiceFile-categoryStyle" data-type="service1" data-fId="'+fid1+'" data-fName="'+name1+'" data-fParentId="'+fParentId1+'" data-fSort="'+fSort1+'">'
                            +'<span class="zm-choiceService-categoryStyle"></span>'
                            +''+toggleHtml+''
                            +'<input class="zm-choiceFile-classifyInput" type="text" value="'+name1+'" disabled="">'
                            +'<span class="fa fa-exclamation zm-choiceFile-sameNameTitle"></span><div class="zm-choiceFile-tipSet">'
                            +'<div class="zm-choiceFile-tipSet-con" style="display: none;"><i class="tipSet-con-dot"></i>'
                            +'<div class="tipSet-con-list tipSet-con-list-add2 newAdd-Or-delete"><i class="add"></i> 添加子类</div>'
                            +'<div class="tipSet-con-list tipSet-con-list-rename"><i class="rename"></i>重命名</div>'
                            +'<div class="tipSet-con-list" onclick="zmChoiceRadio.deleteThreeClassifyTitle(this)"><i class="delete"></i>删除</div>'
                            +'</div></div></div>'
                            +'<div class="choiceFile-box12">'+secondHtml+'</div>'
                            +'</div>';
                    }

                    var trashHtml='<div class="zm-choiceFile-trash zm-choiceFile-categoryStyle" data-fid="-1"><span style="color:#49b1a9;font-size: 16px;" class="fa fa-trash"></span>'
                        +'<span style="font-weight: bold">回收站</span></div><div style="width: 200px;height: 120px"></div>';
                    var topHtml='<div class="zm-choiceFile-category"><span class="zm-choiceService-categoryTop">服务类目</span></div><div class="choiceFile-box11"><div class="zm-choiceFile-categoryStyle" data-fId="0">'
                        +'<span class="zm-choiceService-categoryStyle" ></span>'
                        +'<input class="zm-choiceFile-classifyInput" type="text" value="全部服务" disabled="">'
                        +'<span class="fa fa-exclamation zm-choiceFile-sameNameTitle"></span>'
                        +'</div>'
                        +'</div>'
                        +'<div class="choiceFile-box11"><div class="zm-choiceFile-categoryStyle" data-fId="-2">'
                        +'<span class="zm-choiceService-categoryStyle" ></span>'
                        +'<input class="zm-choiceFile-classifyInput" type="text" value="未分配服务" disabled="">'
                        +'<span class="fa fa-exclamation zm-choiceFile-sameNameTitle"></span>'
                        +'</div>'
                        +'</div>';
                    var allHtml=topHtml+firstHtml+trashHtml;
                    _this.html(allHtml);
                    var numberLength=1;
                    //首次获取服务列表
                    zmChoiceRadio.getAjaxServiceList("0","",1,6);
                    $.fn.zmchoiceRadio();
                    //点击类目添加背景样式
                    $(".zm-choiceFile-categoryStyle").each(function () {
                        if($(this).attr("data-fid")=="0"){
                                $(this).addClass("zm-choiceFile-ClassifyBackgroundColor");
                        }
                    })
                    //点击类目获取相应的服务列表
                    $(document).on("click",".zm-choiceFile-categoryStyle",function () {
                        numberLength=1;
                        var _this=$(this);
                        var a=_this.attr("data-fid");
                        $.each($(document).find(".zm-choiceFile-categoryStyle"),function (i,value) {
                            $(value).removeClass("zm-choiceFile-ClassifyBackgroundColor")
                        });
                        _this.addClass("zm-choiceFile-ClassifyBackgroundColor");
                        zmChoiceRadio.getAjaxServiceList(a,"",1,6);
                    })
                  //滚轮的scroll事件实现监控滚动条分页
                    $(".zm-choiceGoodsRm").on("mousewheel",function () {
                        var a=parseInt($(".zm-choiceGoodsRm").find(".mCSB_container").css("top"));
                        if(a<=-40){
                            numberLength++;
                            var fId=$(".zm-choiceFile-wrap").find(".zm-choiceFile-ClassifyBackgroundColor").attr("data-fid");
                            zmChoiceRadio.getAjaxServiceList(fId,"",numberLength,6);
                        }
                    });
                    $(".zm-choiceServiceBtn-refresh").on("click",function () {
                        var fId=$(".zm-choiceFile-wrap").find(".zm-choiceFile-ClassifyBackgroundColor").attr("data-fid")
                        zmChoiceRadio.getAjaxServiceList(fId,"",1,6)
                        numberLength=1;
                    })

                    //增加服务大类
                    $(document).off("click",".choicePicture-addBigclassify");
                    $(document).on("click",".choicePicture-addBigclassify",function () {
                        var a=$(document).find(".zm-choiceService-middleL").find("input[type=text]"),b;
                        $.each(a,function (i,value) {
                            if($(value).val()==""){
                                b=false;
                            }else{
                                b=true;
                            }
                        })
                        if(b){
                            var h=$('<div class="choiceFile-box11 zm-choiceFile-dragMove"><div class="zm-choiceFile-categoryStyle" data-type="service1">'
                                +'<span class="zm-choiceService-categoryStyle"></span>'
                                +'<input class="zm-choiceFile-classifyInput" type="text" value="" disabled="">'
                                +'<span class="fa fa-exclamation zm-choiceFile-sameNameTitle"></span><div class="zm-choiceFile-tipSet">'
                                +'<div class="zm-choiceFile-tipSet-con" style="display: none;"><i class="tipSet-con-dot"></i>'
                                +'<div class="tipSet-con-list tipSet-con-list-add2 newAdd-Or-delete"><i class="add"></i> 添加子类目</div>'
                                +'<div class="tipSet-con-list tipSet-con-list-rename"><i class="rename"></i>重命名</div>'
                                +'<div class="tipSet-con-list" onclick="zmChoiceRadio.deleteThreeClassifyTitle(this)"><i class="delete"></i>删除</div>'
                                +'</div></div></div>'
                                +'<div class="choiceFile-box12"></div>'
                                +'</div>');
                            $(".zm-choiceFile-trash").before(h);
                            var obj= h.find("input[type=text]");
                            obj.attr("disabled",false);
                            obj.focus();
                            //zmChoiceRadio.choiceFilerename();
                        }
                    });
                    //添加服务小类目
                    $(".zm-choiceFile-wrap").off("click",".tipSet-con-list-add2");
                    $(".zm-choiceFile-wrap").on("click",".tipSet-con-list-add2",function () {
                        var _this=$(this);
                        var toggleHtml6='<span class="zm-choiceFile-children-toggle" onclick="zmChoiceRadio.threeChildrenToggle(this)">-</span>';
                        var a=_this.closest(".choiceFile-box11").find(".choiceFile-box12>.zm-choiceFile-categoryStyle")
                        if(a.length==0){
                            _this.closest(".choiceFile-box11").find(".zm-choiceFile-classifyInput").before($(toggleHtml6))
                            _this.closest(".choiceFile-box11").find(".choiceFile-box12").css("disabled","block")
                        }
                        var b=$('<div class="zm-choiceFile-categoryStyle zm-choiceFile-dragMove" data-type="service2"><input class="zm-choiceFile-classifyInput" type="text" value="" readonly="">'
                            +'<span class="fa fa-exclamation zm-choiceFile-sameNameTitle"></span><div class="zm-choiceFile-tipSet">'
                            +'<div class="zm-choiceFile-tipSet-con" style="display: none;"> <i class="tipSet-con-dot"></i>'
                            +'<div class="tipSet-con-list tipSet-con-list-rename"><i class="rename"></i>重命名</div>'
                            +'<div class="tipSet-con-list" onclick="zmChoiceRadio.deleteThreeClassifyTitle(this)"><i class="delete"></i>删除</div>'
                            +'</div></div></div>');
                        _this.closest(".zm-choiceFile-categoryStyle").next(".choiceFile-box12").append(b);
                        var obj= b.find("input[type=text]");
                        obj.attr("disabled",false);
                        obj.focus();
                        zmChoiceRadio.choiceFilerename();
                    });
                    //失焦时发送增加和修改类目的参数
                    $(document).off("blur",".zm-choiceFile-classifyInput");
                    $(document).on("blur",".zm-choiceFile-classifyInput",function () {
                        var _this=$(this);
                        var fId,fName,fParentId;
                        if(_this.closest(".zm-choiceFile-categoryStyle").attr("data-fid")){
                            fId=_this.closest(".zm-choiceFile-categoryStyle").attr("data-fid");
                        }else{
                            fId=null;
                        }
                        if( _this.closest(".zm-choiceFile-categoryStyle").parent(".choiceFile-box12").prev().attr("data-fid")){
                            fParentId=_this.closest(".zm-choiceFile-categoryStyle").parent(".choiceFile-box12").prev().attr("data-fid");
                        }else{
                            fParentId=null;
                        }
                        fName=_this.val();
                        if(_this.attr("disabled")){
                            zmChoiceRadio.choiceServiceAddClassify(fId,fName,fParentId,function(id){
                                $(document).find(".zm-choiceFile-categoryStyle").each(function () {
                                    var _this=$(this);
                                    if(typeof(_this.attr("data-fid"))=="undefined"){
                                        _this.attr("data-fid",id);
                                    }
                                })
                            })
                        };
                       // event.stopPropagation();
                    });
                    //拖动类目排序
                    //*****************************
                    $(document).off("mousedown.zm-page-setting-limousedown",".zm-choiceFile-categoryStyle");
                    $(document).on("mousedown.zm-page-setting-limousedown",".zm-choiceFile-categoryStyle",function(e){
                        var moveType="service";
                        //e.preventDefault();
                        e.stopPropagation();
                        var _this = $(this),box=_this.hasClass(".zm-choiceFile-dragMove")? _this:_this.closest(".zm-choiceFile-dragMove"),temp,moveXX,
                            downX = e.pageX,
                            downY = e.pageY,
                            downLeft = _this.offset().left,
                            downTop = _this.offset().top,
                            width = _this.outerWidth(),
                            height = _this.outerHeight(),move=true,moveX,moveY,showOrhide=false;
                        temp = $('<li style="box-sizing:border-box;margin-top: 5px;border:1px dashed #4ab1a7;font-size:16px;background:#ccc;color:#4ab1a7;text-align: center;padding:0;' +
                            'height:26px;width:' + "180px" + ';line-height: ' + height + 'px;"></li>');
                        //$(document).off("mousemove.zm-page-setting-li")
                        $(document).on("mousemove.zm-page-setting-li",function(e){
                            // e.preventDefault();
                            moveX = e.pageX;
                            moveY = e.pageY;
                            if(Math.abs(moveY-downY)<3)return false;//如果移动小于3
                            if(Math.abs(moveY-downY)>3||Math.abs(moveY-downY)==3&&move){//如果大于等于3
                                box.after(temp);
                                move=false;
                                box.css({position: 'fixed', left: downLeft, top: downTop});
                            }
                            box.siblings(".zm-choiceFile-dragMove").not(_this).not(temp).each(function(){ //获取所有的一级Li,过滤去定位的li，以及用来占位的li
                                var o = $(this);
                                var l = o.offset().left;
                                var r = o.offset().left+o.outerWidth();
                                var t = o.offset().top;
                                var b = o.offset().top+o.outerHeight();
                                if(moveY>t&&moveY<b){ // 根据定位的初始li的初始坐标和移动坐标值的差来和每个li的坐标值来做比较来设置站位的li的位置。 //moveX>l&&moveX<r&&  水平方向按下限制范围。
                                    if(moveY>(b-t)/2+t){
                                        temp.insertAfter(o)
                                    }else{
                                        temp.insertBefore(o)
                                    }
                                }
                            })
                            //nav始终限制在页面设置框内.
                            moveXX=moveX - downX;
                            if(moveXX<45&&moveXX>-50){
                                moveXX=moveX - downX
                            }else if(moveXX>45){
                                moveXX=45;
                            }else if(moveXX<-50){
                                moveXX=-50;
                            };
                            //nav始终限制在页面设置框内.
                            box.css({"left": moveXX + downLeft , "top": moveY - downY + downTop,"z-index":999});
                        });
                        $(document).on("mouseup.zm-page-setting-li",function (e) {
                            $(document).off('.zm-page-setting-li');
                            box.children("div").css("background-color","");
                            box.attr('style','');
                            if(Math.abs(moveY-downY)>3||Math.abs(moveY-downY)==3){
                                temp.replaceWith(box);
                                if(showOrhide){$(box).css("display","block")};
                                box.css({"transform":""});
                                zmChoiceRadio.getChoiceFileDragClassify(box,moveType)
                            }
                        })
                    });
                    //******************************************************************************************************
                },
                error:function(){
                    console.error("出错了")
                }
            })
            //这里写回调函数
            $(".zm-dialog-title:last").html("选择服务")
        })
    },
    //内容背景设置
    pageDesign:function(){
        zmEditor.dialog.loading("html/pageDesign/pageCont.html");
    },
    //全屏背景设置
    pageFullS:function(){
        $('.zm-dialog-box').remove();
        zmEditor.dialog.loading("html/pageDesign/pageFull.html");
    },
    //页面选择
    pageChoice:function(){
        zmEditor.dialog.loading("html/pageDesign/pageChoose.html");
    },
    lightBox:function(){
        zmEditor.dialog.loading("html/pageDesign/lightBox.html");
    },
    //选择文件模块页面
    choiceFile:function(e) {
        zmEditor.dialog.loading("html/href/choiceFile.html", function (e) {
            $.fn.zmchoiceRadio()
            //ajax获取类目列表
            $.ajax({
                type: "post",
                url:zmEditor.url.getPictureCategory,
                dataType: "json",
                success: function(e){
                    var b=e.data;
                    var c='';
                    $.each(b, function(k,value) {

                        var d='<div class="choiceFilel1-box zm-choiceFile-categroyStyle-wrap"><div class="zm-choiceFile-categoryStyle" data-type="picture1" data-fid="'+b[k].fId+'" data-fName="'+b[k].fName+'">'
                            +'<span class="zm-choiceFiles-categoryStyle"></span>'
                            +'<input class="zm-choiceFile-classifyInput" type="text" value="'+b[k].fName+'" readonly>'
                            +'<span class="fa fa-exclamation zm-choiceFile-sameNameTitle"></span>'
                            +'<div class="zm-choiceFile-tipSet">'
                            +'<div class="zm-choiceFile-tipSet-con">'
                            +'<i class="tipSet-con-dot"></i>'
                            +'<div class="tipSet-con-list tipSet-con-list-rename">'
                            +'<i class="rename"></i>'
                            +'重命名'
                            +'</div>'
                            +'<div class="tipSet-con-list" onclick="zmChoiceRadio.deleteClassifyTitle(this)">'
                            +'<i class="delete"></i>'
                            +'删除'
                            +'</div>'
                            +'</div>'
                            +'</div>'
                            +'</div></div>';

                        c+=d;
                    });
                    var ch='<div class="zm-choiceFile-category"><span class="zm-choiceFiles-categoryTop">全部文件类目</span></div>'+c+' <div class="zm-choiceFile-trash zm-choiceFile-categoryStyle" data-fid="-1"><span style="color:#49b1a9;font-size: 16px;" class="fa fa-trash"></span>'
                        +'<span style="font-weight: bold">回收站</span></div><div style="width: 200px;height: 120px"></div>'
                    $(".zm-choicePicture-middleLTop").html(ch);
                    //首次获取图片列表
                   // zmChoiceRadio.getAjaxPictureList(0)
                    $.fn.zmchoiceRadio();
                    //点击类目获取相应的图片列表
                    $(document).on("click",".zm-choiceFile-categoryStyle",function () {
                        var _this=$(this);
                        var a=_this.attr("data-fid");
                        $.each($(document).find(".zm-choiceFile-categoryStyle"),function (i,value) {
                            $(value).removeClass("zm-choiceFile-ClassifyBackgroundColor")
                        })

                        _this.addClass("zm-choiceFile-ClassifyBackgroundColor")
                       // zmChoiceRadio.getAjaxPictureList(a)
                    })

                    //增加文件大类
                    $(document).off("click",".choicePicture-addBigclassify");
                    $(document).on("click",".choicePicture-addBigclassify",function () {
                        var a=$(document).find(".zm-choicePicture-middleL").find("input[type=text]"),b;
                        $.each(a,function (i,value) {
                            if($(value).val()==""){
                                b=false;
                            }else{
                                b=true;
                            }
                        })
                        if(b){
                            var h=$('<div class="choiceFilel1-box zm-choiceFile-categroyStyle-wrap">'
                                +'<div class="zm-choiceFile-categoryStyle">'
                                +'<span class="zm-choiceFiles-categoryStyle"></span>'
                                +'<input class="zm-choiceFile-classifyInput" type="text" value="" readonly="readonly"><div class="zm-choiceFile-tipSet"><span class="fa fa-exclamation zm-choiceFile-sameNameTitle"></span>'
                                +'<div class="zm-choiceFile-tipSet-con" style="display: none;"><i class="tipSet-con-dot"></i>'
                                +'<div class="tipSet-con-list tipSet-con-list-rename"><i class="rename"></i>重命名</div><div class="tipSet-con-list" onclick="zmChoiceRadio.deleteClassifyTitle(this)"><i class="delete"></i>删除</div>'
                                +'</div></div></div><div class="choiceFilel2-box" style="display: block;"></div></div>')
                            $(".zm-choiceFile-trash").before(h);
                            var obj= h.find("input[type=text]");
                            obj.attr("readonly",false);
                            obj.focus();
                            zmChoiceRadio.choiceFilerename();
                        }
                    })

                    //上传文件并传给后台（选择文件）
                    $(document).off("change",".zm-choicePicture-upPicWtn input[type=file]");
                    $(document).on("change",".zm-choicePicture-upPicWtn input[type=file]",function(){
                        var fid=$(".zm-choicePicture-middleLTop").find(".zm-choiceFile-ClassifyBackgroundColor").attr("data-fid");
                        var upfile=$('#zm-choicePicture-upPicBtn')[0].files[0];
                        var form=new FormData();
                        form.append("upfile",upfile);
                        form.append("fFileId",fid);
                        $.ajax({
                            type:"post",
                            url:zmEditor.url.getPictureUpPicture,
                            processData:false,//对象数组转换为字符串
                            contentType:false,//编码
                            cache:false,//缓存
                            data:form,
                            async:true,
                            success:function(data){
                               // zmChoiceRadio.getAjaxPictureList(fid)
                            }
                        })
                    });

                    //点击文件列表标题名称
                    $(".zm-choiceRadio-middleR").on("click",".zm-chRlist-pencil",function () {
                        $(this).closest(".zm-choiceR-lists").find(".zm-choiceRlist1").css("display","block")
                    })
                    $(".zm-choiceRadio-middleR").on("keyup",".zm-choiceRlist1",function () {
                        $(this).closest(".zm-choiceR-lists").find(".zm-choiceRlist2").html($(this).val())
                    })

                    //对列表文件重命名
                    $(document).off("blur",".zm-choiceRlist1");
                    $(document).on("blur",".zm-choiceRlist1",function () {
                        $(this).css("display","none");
                        var _id=$(this).closest(".zm-choiceR-lists").attr("data-imgid")
                        var fName=$(this).closest(".zm-choiceR-lists").find(".zm-choiceRlist2").text()
                        //zmChoiceRadio.choicePictureTochangeName(_id,fName)
                    })

                    //批量还原
                    $(document).on("click",".zm-choicePictureHistory",function () {
                        var imgLIscheak=[];
                        $(".zm-choiceRadio-middleR").find(".zm-choiceRadio-cheak").each(function (i,value) {
                            //console.log(i,value)
                            var _that=$(this);
                            // console.log(_that)
                            if(_that.hasClass('fa-check')){
                                imgLIscheak.push(_that.closest(".zm-choiceFile-check").attr("data-imgid"))
                                console.log(_that.closest(".zm-choiceFile-check").attr("data-imgid"))
                            }
                        })
                        var imageIds=imgLIscheak.join(",")
                        console.log(imageIds)
                        zmChoiceRadio.toBatchRestore(imageIds)
                    })
                    //单个还原
                    $(document).on("click",".zm-chRlist-history",function () {
                        var _this=$(this);
                        var imageIds=_this.closest(".zm-choiceFile-check").attr("data-imgid");
                        zmChoiceRadio.toBatchRestore(imageIds)
                    })
                    //选择文件弹出框标题
                    $(".zm-dialog-title:last").html("选择文件");
                    //向文件列表中增加拖放文件功能
                    zmChoiceRadio.dragLocalFilesUpdate('zm-choicePicture-spli',function(data){
                        var fileBox=[];
                        var fid=$(".zm-choicePicture-middleLTop").find(".zm-choiceFile-ClassifyBackgroundColor").attr("data-fid");
                        console.log(data)
                        $.each(data,function (i) {
                            fileBox.push(data[i].fileList)
                        })
                        if(fileBox.length!=0){
                            for(var i=0;i<ingBox.length;i++){
                                var form=new FormData();
                                form.append("upfile",fileBox[i]);
                                form.append("fFileId",fid);

                            }
                        }
                    });
                    //判断是单选还是多选
                    if(choiceNumber){
                        $(".zm-choiceFile-btn1").unbind("click");
                        $(".zm-choiceFile-wrap").on("click",".zm-choiceRadio-cheak",function () {
                            if($(this).hasClass("fa-check")){
                                $(this).closest(".zm-choiceR-lists").siblings(".zm-choiceR-lists").find(".zm-choiceRadio-cheak").removeClass("fa-check");
                                $(this).closest(".zm-choiceR-lists").siblings(".zm-choiceR-lists").find(".zm-choiceFile-listWrap").css("display","none");
                                var a=$(".zm-choiceFile-wrap").find(".fa-check").length;
                                $(".zm-choiceFile-allListCheckNumber").html(a);
                            }
                        })
                    }
                    $('.zm-choiceFile-choiceAddPicture').off("click");
                    $('.zm-choiceFile-choiceAddPicture').on("click",function () {
                        var _this=$(this);
                        var a=zmChoiceRadio.choiceAndAddPicture( _this);
                        _this.closest(".zm-dialog-box").remove();
                        if(callback){
                            callback(a)
                        }
                    })
                },
                error:function(){
                    console.error("出错了")
                }
            })
        })
    },
    //移动到分类的弹出框
    choiceAddclassify:function (e) {
        var _this=$(e);
        var oldTagId=_this.closest(".zm-choiceFile-wrap").find(".zm-choiceFile-ClassifyBackgroundColor").attr("data-fid");
        var a='',b='';
        var flag = _this.attr("data-choiceAdd");
        switch (flag){
            case "radio":
                $.ajax({
                    type:"post",
                    url:zmEditor.url.getRadioCategory,
                    dataType: "json",
                    success:function (e) {
                        var g=e.data;
                        var c='';
                        $.each(g, function(k,value) {
                            var d='<div class="zm-choicePictureToAdd"  data-fid="'+g[k].fId+'">'
                                +'<span class="zm-choiceToAddCheck fa"></span>'
                                +'<span class="zm-choiceRadioToAddStyle"></span>'
                                +'<span style="float: left;margin-left: 5px">'+g[k].fName+'</span>'
                                +'</div>'  ;
                            c+=d;
                        });
                        var b=$(c);
                        $(".zm-choiceFileCopyToClassify12").append(b);
                        $(".zm-choiceToAddCheck").on("click",function () {
                            if($(this).hasClass("fa-check")){
                                $(this).removeClass("fa-check")
                            }else{
                                $(this).addClass("fa-check")
                            }
                        })
                    }
                })
                a="复制到专辑";
                break;
            case "picture":
                $.ajax({
                    type:"post",
                    url:zmEditor.url.getPictureCategory,
                    dataType: "json",
                    success:function (e) {
                        var g=e.data;
                        var c='';
                        $.each(g, function(k,value) {
                            var h;
                            var d='<div class="zm-choicePictureToAdd"  data-fid="'+g[k].fId+'">'
                                +'<span class="zm-choicePictureToChanger">+</span>'
                                +'<span class="zm-choiceToAddCheck fa"></span>'
                                +'<span class="zm-choicePictureToAddStyle"></span>'
                                +'<span style="float: left;margin-left: 5px">'+g[k].fName+'</span>'
                                +'</div>'  ;
                            if(g[k].childrenList.length>0){
                                var e='';
                                $.each(value.childrenList,function(i,o){
                                    e+='<div class="zm-choicePictureToAdd" data-fid="'+value.childrenList[i].fId+'" >'
                                        +'<span class="zm-choiceToAddCheck fa"></span>'
                                        +'<span style="float: left;margin-left: 5px">'+value.childrenList[i].fName+'</span>'
                                        +'</div>'
                                })
                                var f='<div class="choicePictureAddTo-box">'+e+'</div>';
                                h='<div class="choicePictureToAdd-box11 zm-choiceFile-categroyStyle-wrap">'+d+f+'</div>'
                            }else{
                                h='<div class="choicePictureToAdd-box11 zm-choiceFile-categroyStyle-wrap">'+d+'<div class="choicePictureAddTo-box"></div></div>'
                            }
                            c+=h;

                        });
                        var b=$(c);
                        $(".zm-choiceFileCopyToClassify12").append(b);

                        $(".zm-choicePictureToAdd").each(function () {
                            if($(this).attr("data-fid")=="0"||$(this).attr("data-fid")=="1"){
                                $(this).find(".zm-choicePictureToChanger").remove();
                            }
                        });
                        $(" .zm-choicePictureToChanger").on("click",function () {
                            if($(this).html()=="+"){
                                $(this).html("-");
                            }else{
                                $(this).html("+");
                            }
                            $(this).parents().siblings(".choicePictureAddTo-box").slideToggle(400);
                            $(this).toggleClass("active");
                            return false;
                        })

                        $(".zm-choiceToAddCheck").on("click",function () {
                            if($(this).hasClass("fa-check")){
                                $(this).removeClass("fa-check")
                            }else{
                                $(this).addClass("fa-check")
                            }
                        })

                    }
                })
                a='复制到图片';
                break;
            case "video":
                $.ajax({
                    type:"post",
                    url:zmEditor.url.getVideoCategory,
                    dataType: "json",
                    success:function (e) {
                        var g=e.data;
                        var c='';
                        $.each(g, function(k,value) {
                            var h;
                            var d='<div class="zm-choicePictureToAdd" data-choiceClassify="fShopFirstCategory"  data-fid="'+g[k].fId+'">'
                                +'<span class="zm-choicePictureToChanger">+</span>'
                                +'<span class="zm-choiceVideoToAddStyle"></span>'
                                +'<span style="float: left;margin-left: 5px">'+g[k].fName+'</span>'
                                +'</div>';
                            if(g[k].list.length>0){
                                var e='';
                                $.each(value.list,function(i,o){
                                    e+='<div class="zm-choicePictureToAdd" data-choiceClassify="fShopSecondCategory" data-fid="'+value.list[i].fId+'" >'
                                        +'<span class="zm-choiceToAddCheck fa"></span>'
                                        +'<span style="float: left;margin-left: 5px">'+value.list[i].fName+'</span>'
                                        +'</div>'
                                });
                                var f='<div class="choicePictureAddTo-box">'+e+'</div>';
                                h='<div class="choicePictureToAdd-box11 zm-choiceFile-categroyStyle-wrap">'+d+f+'</div>'
                            }else{
                                h='<div class="choicePictureToAdd-box11 zm-choiceFile-categroyStyle-wrap">'+d+'<div class="choicePictureAddTo-box"></div></div>'
                            }
                            c+=h;

                        });
                        var b=$(c);
                        $(".zm-choiceFileCopyToClassify12").append(b);

                        $(".zm-choicePictureToAdd").each(function () {
                            if($(this).attr("data-fid")=="0"){
                                $(this).closest(".zm-choiceFile-categroyStyle-wrap").remove();
                            }
                        })
                        $(" .zm-choicePictureToChanger").on("click",function () {
                            if($(this).html()=="+"){
                                $(this).html("-");
                            }else{
                                $(this).html("+");
                            }
                            $(this).parents().siblings(".choicePictureAddTo-box").slideToggle(400);
                            $(this).toggleClass("active");
                            return false;
                        })

                        $(".zm-choiceToAddCheck").on("click",function () {
                            if($(this).hasClass("fa-check")){
                                $(this).removeClass("fa-check")
                            }else{
                                $(this).closest(".zm-choiceFileCopyToClassify12").find(".zm-choiceToAddCheck").not($(this)).removeClass("fa-check")
                                $(this).addClass("fa-check")
                            }
                        })

                    }
                })
                a='请选择你要移动到的分类';
                break;
            case "news":
                $.ajax({
                    type:"post",
                    url:zmEditor.url.getNewsCategory,
                    dataType: "json",
                    success:function (e) {
                        var g=e.data;
                        var c='';
                        $.each(g, function(k,value) {
                            var h;
                            var d='<div class="zm-choicePictureToAdd" data-choiceClassify="fristId"  data-fid="'+g[k].fId+'">'
                                +'<span class="zm-choicePictureToChanger">+</span>'
                                +'<span class="zm-choiceVideoToAddStyle"></span>'
                                +'<span style="float: left;margin-left: 5px">'+g[k].fName+'</span>'
                                +'</div>'  ;
                            if(g[k].list.length>0){
                                var e='';
                                $.each(value.list,function(i,o){
                                    e+='<div class="zm-choicePictureToAdd" data-choiceClassify="sencondId" data-fid="'+value.list[i].fId+'" >'
                                        +'<span class="zm-choiceToAddCheck fa"></span>'
                                        +'<span style="float: left;margin-left: 5px">'+value.list[i].fName+'</span>'
                                        +'</div>'
                                })
                                var f='<div class="choicePictureAddTo-box">'+e+'</div>';
                                h='<div class="choicePictureToAdd-box11 zm-choiceFile-categroyStyle-wrap">'+d+f+'</div>'
                            }else{
                                h='<div class="choicePictureToAdd-box11 zm-choiceFile-categroyStyle-wrap">'+d+'<div class="choicePictureAddTo-box"></div></div>'
                            }
                            c+=h;

                        });
                        var b=$(c);
                        $(".zm-choiceFileCopyToClassify12").append(b);

                        $(".zm-choicePictureToAdd").each(function () {
                            if($(this).attr("data-fid")=="0"){
                                $(this).closest(".zm-choiceFile-categroyStyle-wrap").remove();
                            }
                        })
                        $(" .zm-choicePictureToChanger").on("click",function () {
                            if($(this).html()=="+"){
                                $(this).html("-");
                            }else{
                                $(this).html("+");
                            }
                            $(this).parents().siblings(".choicePictureAddTo-box").slideToggle(400);
                            $(this).toggleClass("active");
                            return false;
                        })

                        $(".zm-choiceToAddCheck").on("click",function () {
                            if($(this).hasClass("fa-check")){
                                $(this).removeClass("fa-check")
                            }else{
                                $(this).closest(".zm-choiceFileCopyToClassify12").find(".zm-choiceToAddCheck").not($(this)).removeClass("fa-check")
                                $(this).addClass("fa-check")
                            }
                        })

                    }
                })
                a='请选择你要移动到的分类';
                break;
            case "goods":
                $.ajax({
                    type:"post",
                    url:zmEditor.url.getGoodsCategory,
                    dataType: "json",
                    success:function (e) {
                        var a=e.data;
                        var first=a;
                        var len1 = first.length;
                        var firstHtml="";
                        var toggleHtml="";
                        var toggleHtml0='<span class="zm-choiceToAddCheck fa"></span><span class="zm-choiceVideoToAddStyle"></span>'
                        var toggleHtml1='<span class="zm-choicePictureToChanger">+</span><span class="zm-choiceVideoToAddStyle"></span>';
                        var toggleHtml2="";
                        for(var i=0;i<len1;i++){
                            var second = first[i].list;
                            var name1=first[i].fName;
                            var fId1=first[i].fId;
                            var len2= second.length;
                            var secondHtml="";
                            for(var j=0;j<len2;j++){
                                var third=second[j].list;
                                var name2=second[j].fName;
                                var fId2=second[j].fId;
                                var len3=third.length;
                                var thirdHtml="";
                                for(var k=0;k<len3;k++){
                                    var name3=third[k].fName;
                                    var fId3=third[k].fId;
                                    thirdHtml+='<div class="zm-choicePictureToAdd" data-choiceClassify="sencondId" data-fid="'+fId3+'" >'
                                                     +'<span class="zm-choiceToAddCheck fa"></span>'
                                                     +'<span style="float: left;margin-left: 5px">'+name3+'</span>'
                                                     +'</div>'
                                }
                                if(len3==0){
                                    toggleHtml=toggleHtml0;
                                }
                                else{
                                    toggleHtml=toggleHtml1;
                                }
                                secondHtml+='<div class="zm-choicePictureToAdd" data-choiceClassify="sencondId" data-fid="'+fId2+'" >'
                                    +''+toggleHtml+''
                                    +'<span style="float: left;margin-left: 5px">'+name2+'</span>'
                                    +'</div>'
                                    +'<div class="choicePictureAddTo-box0">'+thirdHtml+'</div>'
                            }
                            if(len2==0){
                                toggleHtml=toggleHtml0;
                                secondHtml='';
                            }
                            else{
                                toggleHtml=toggleHtml1;
                                secondHtml=secondHtml;
                            }
                            firstHtml+='<div class="choicePictureToAdd-box11 zm-choiceFile-categroyStyle-wrap"><div class="zm-choicePictureToAdd" data-choiceClassify="fristId"  data-fid="'+fId1+'">'
                                         +''+toggleHtml+''
                                         // +'<span class="zm-choicePictureToChanger">+</span>'
                                         // +'<span class="zm-choiceVideoToAddStyle"></span>'
                                         +'<span style="float: left;margin-left: 5px">'+name1+'</span>'
                                         +'</div>'
                                         +'<div class="choicePictureAddTo-box">'+secondHtml+'</div>'
                                         +'</div>';
                        }
                        b=$(firstHtml);
                        $(".zm-choiceFileCopyToClassify12").append(b);

                        $(".zm-choicePictureToAdd").each(function () {
                            if($(this).attr("data-fid")=="0"){
                                $(this).closest(".zm-choiceFile-categroyStyle-wrap").remove();
                            }
                        })
                        $(" .zm-choicePictureToChanger").on("click",function () {
                            if($(this).html()=="+"){
                                $(this).html("-");
                            }else{
                                $(this).html("+");
                            }
                            $(this).parents().siblings(".choicePictureAddTo-box").slideToggle(400);
                            $(this).parents().next(".choicePictureAddTo-box0").slideToggle(400);
                            $(this).toggleClass("active");
                            return false;
                        })

                        $(".zm-choiceToAddCheck").on("click",function () {
                            if($(this).hasClass("fa-check")){
                                $(this).removeClass("fa-check")
                            }else{
                                $(this).closest(".zm-choiceFileCopyToClassify12").find(".zm-choiceToAddCheck").not($(this)).removeClass("fa-check")
                                $(this).addClass("fa-check")
                            }
                        })

                    }
                })
                a='请选择你要移动到的分类';
                break;
            case "files":
                $.ajax({
                    type:"post",
                    url:zmEditor.url.getRadioCategory,
                    dataType: "json",
                    success:function (e) {
                        var g=e.data;
                        var c='';
                        $.each(g, function(k,value) {
                            var d='<div class="zm-choiceFilesToAdd"  data-fid="'+g[k].fId+'">'
                                +'<span class="zm-choiceRadioToAddStyle zm-choiceFilesToAddStyle0"></span>'
                                +'<span style="float: left;margin-left: 5px">'+g[k].fName+'</span>'
                                +'</div>'  ;
                            c+=d;
                        });
                        var b=$(c);
                        $(".zm-choiceFileCopyToClassify12").append(b);
                        $(".zm-choiceFilesToAdd").on("click",function () {
                            var _this=$(this);
                            _this.find(".zm-choiceRadioToAddStyle").removeClass("zm-choiceFilesToAddStyle0").addClass("zm-choiceFilesToAddStyle1");
                            _this.addClass("zm-choiceFilesToAddFontColor");
                            _this.siblings().find(".zm-choiceRadioToAddStyle").removeClass("zm-choiceFilesToAddStyle1").addClass("zm-choiceFilesToAddStyle0");
                            _this.siblings().removeClass("zm-choiceFilesToAddFontColor")
                        })

                    }
                })
                a='请选择你要移动到的分类';
                break;
            case "service":
                $.ajax({
                    type:"post",
                    url:zmEditor.url.getServiceCategory,
                    dataType: "json",
                    success:function (e) {
                        var a=e.data;
                        var first=a;
                        var len1 = first.length;
                        var firstHtml="";
                        var toggleHtml="";
                        var toggleHtml0='<span class="zm-choiceToAddCheck fa"></span><span class="zm-choiceVideoToAddStyle"></span>'
                        var toggleHtml1='<span class="zm-choicePictureToChanger">+</span><span class="zm-choiceVideoToAddStyle"></span>';
                        var toggleHtml2="";
                        for(var i=0;i<len1;i++){
                            var second = first[i].list;
                            var name1=first[i].fName;
                            var fId1=first[i].fId;
                            var len2= second.length;
                            var secondHtml="";
                            for(var j=0;j<len2;j++){
                                var name2=second[j].fName;
                                var fId2=second[j].fId;
                                var thirdHtml="";
                                secondHtml+='<div class="zm-choicePictureToAdd" data-choiceClassify="sencondId" data-fid="'+fId2+'" >'
                                        +'<span class="zm-choiceToAddCheck fa"></span>'
                                        +'<span style="float: left;margin-left: 5px">'+name2+'</span>'
                                        +'</div>'
                            }
                            if(len2==0){
                                toggleHtml=toggleHtml0;
                                secondHtml='';
                            }
                            else{
                                toggleHtml=toggleHtml1;
                                secondHtml=secondHtml;
                            }
                            firstHtml+='<div class="choicePictureToAdd-box11 zm-choiceFile-categroyStyle-wrap"><div class="zm-choicePictureToAdd" data-choiceClassify="fristId"  data-fid="'+fId1+'">'
                                +''+toggleHtml+''
                                +'<span style="float: left;margin-left: 5px">'+name1+'</span>'
                                +'</div>'
                                +'<div class="choicePictureAddTo-box">'+secondHtml+'</div>'
                                +'</div>';
                        }
                        b=$(firstHtml);
                        $(".zm-choiceFileCopyToClassify12").append(b);

                        $(".zm-choicePictureToAdd").each(function () {
                            if($(this).attr("data-fid")=="0"){
                                $(this).closest(".zm-choiceFile-categroyStyle-wrap").remove();
                            }
                        })
                        $(" .zm-choicePictureToChanger").on("click",function () {
                            if($(this).html()=="+"){
                                $(this).html("-");
                            }else{
                                $(this).html("+");
                            }
                            $(this).parents().siblings(".choicePictureAddTo-box").slideToggle(400);
                            $(this).parents().next(".choicePictureAddTo-box0").slideToggle(400);
                            $(this).toggleClass("active");
                            return false;
                        })

                        $(".zm-choiceToAddCheck").on("click",function () {
                            if($(this).hasClass("fa-check")){
                                $(this).removeClass("fa-check")
                            }else{
                                $(this).closest(".zm-choiceFileCopyToClassify12").find(".zm-choiceToAddCheck").not($(this)).removeClass("fa-check")
                                $(this).addClass("fa-check")
                            }
                        })

                    }
                })
                a='请选择你要移动到的分类';
                break;
        }
        zmEditor.dialog.open(
            {
                title: a,
                content: '<div class="zm-choiceFileCopyToClassify"><div class="zm-choiceFileCopyToClassify1"><div class="zm-choiceFileCopyToClassify12">'+b+'</div></div><div class="zm-radioAlbumbtn">'
                +'<div class="zm-choiceFileCopyBtn-cancel">取消</div><div class="zm-choiceFileCopyBtn-keep">保存</div></div></div>',
                width: 540,
                height: 450,
                movable:true,
                // animate:'slide',
                target: $('.zm-choiceFile-wrap')
            },function () {
                $.fn.zmchoiceRadio()
                $(".zm-choiceFileCopyBtn-cancel").on("click",function () {
                    $(this).closest(".zm-dialog-box").remove();
                })
                $(".zm-choiceFileCopyBtn-keep").on("click",function () {
                    switch (flag){
                        case "radio":
                            var radioLIscheak=[];
                            $(".zm-choiceRadio-middleR").find(".zm-choiceRadio-cheak").each(function () {
                                var _this=$(this);
                                if(_this.hasClass('fa-check')){
                                    radioLIscheak.push(_this.closest(".zm-choiceR-lists").attr("data-fid"))
                                }
                            })
                            var cheakedboxList=[];
                            var radioIds=radioLIscheak.join(",")
                            $(".zm-choiceFileCopyToClassify1").find(".zm-choicePictureToAdd").each(function () {
                                var _this=$(this);
                                if(_this.find(".zm-choiceToAddCheck").hasClass("fa-check")){
                                    cheakedboxList.push(_this.attr("data-fid"))
                                }
                            })
                            var categoryIds=cheakedboxList.join(",")
                            zmChoiceRadio.choiceToMOveRadio(radioIds,categoryIds)

                            break;
                        case "picture":
                            var imgLIscheak=[];
                            $(".zm-choiceRadio-middleR").find(".zm-choiceRadio-cheak").each(function () {
                                var _this=$(this);
                                if(_this.hasClass('fa-check')){
                                    imgLIscheak.push(_this.closest(".zm-choiceR-lists").attr("data-imgid"))
                                }
                            })
                            var cheakedboxList=[];
                            var imageIds=imgLIscheak.join(",")
                                $(".zm-choiceFileCopyToClassify1").find(".zm-choicePictureToAdd").each(function () {
                                    var _this=$(this);
                                    if(_this.find(".zm-choiceToAddCheck").hasClass("fa-check")){
                                        cheakedboxList.push(_this.attr("data-fid"))
                                    }
                                })
                                var categoryIds=cheakedboxList.join(",")
                                zmChoiceRadio.choiceToMOvePicture(imageIds,categoryIds)
                            break;
                        case "video":
                            var videoLIscheak=[];
                            $(".zm-choiceRadio-middleR").find(".zm-choiceRadio-cheak").each(function () {
                                var _this=$(this);
                                if(_this.hasClass('fa-check')){
                                    videoLIscheak.push(_this.closest(".zm-choiceV-lists").attr("data-fid"))
                                }
                            })
                            var fids=videoLIscheak.join(",");
                            var checkIds=$(".zm-choiceFileCopyToClassify12").find(".fa-check")||false;
                            if(checkIds){
                                var checkClassfiy=checkIds.closest(".zm-choicePictureToAdd").attr("data-fid");
                                checkSecondId=checkClassfiy;
                                checkFirstId=checkIds.closest(".choicePictureAddTo-box").siblings(".zm-choicePictureToAdd").attr("data-fid");
                            }
                            zmChoiceRadio.choiceToMOveVideo(fids,checkFirstId,checkSecondId)
                            break;
                        case "news":
                            var newsLIscheak=[];
                            $(".zm-choiceRadio-spli").find(".zm-ChoiceNews-cheak").each(function () {
                                var _this=$(this);
                                if(_this.hasClass('fa-check')){
                                    newsLIscheak.push(_this.closest(".zm-choiceNewsList").attr("data-fid"))
                                }
                            })
                            var fids=newsLIscheak.join(",");
                            var checkIds=$(".zm-choiceFileCopyToClassify12").find(".fa-check")||false;
                            var checkFirstId,checkSecondId;
                            if(checkIds){
                                var checkClassfiy=checkIds.closest(".zm-choicePictureToAdd").attr("data-fid");
                                    checkSecondId=checkClassfiy;
                                    checkFirstId=checkIds.closest(".choicePictureAddTo-box").siblings(".zm-choicePictureToAdd").attr("data-fid");
                            }
                            zmChoiceRadio.choiceToMOveNews(fids,checkFirstId,checkSecondId)
                            break;
                        case "goods":
                            var goodsLIscheak=[];
                            $(".zm-choiceGoodsSpli").find(".zm-ChoiceNews-cheak").each(function () {
                                var _this=$(this);
                                if(_this.hasClass('fa-check')){
                                    goodsLIscheak.push(_this.closest(".zm-choiceGoodsList").attr("data-fidstr"))
                                }
                            })
                            var fids=goodsLIscheak.join(",");
                            var checkIds=$(".zm-choiceFileCopyToClassify12").find(".fa-check")||false;
                            var checkFirstId,checkSecondId;
                            if(checkIds){
                                var checkClassfiy=checkIds.closest(".zm-choicePictureToAdd").attr("data-fid");
                            }
                            zmChoiceRadio.choiceToMOveGoods(oldTagId,checkClassfiy,fids)
                            break;
                        case "service":
                            var serviceCheak=[];
                            $(".zm-choiceGoodsSpli").find(".zm-ChoiceNews-cheak").each(function () {
                                var _this=$(this);
                                if(_this.hasClass('fa-check')){
                                    serviceCheak.push(_this.closest(".zm-choiceGoodsList").attr("data-fid"))
                                }
                            })
                            var fids=serviceCheak.join(",");
                            var checkIds=$(".zm-choiceFileCopyToClassify12").find(".fa-check")||false;
                            var checkFirstId,checkSecondId;
                            if(checkIds){
                                var checkClassfiy=checkIds.closest(".zm-choicePictureToAdd").attr("data-fid");
                            }
                            zmChoiceRadio.choiceToMOveService(fids,oldTagId,checkClassfiy);
                            break;
                    }
                    $(this).closest(".zm-dialog-box").remove();
                })
            })
    },
    //下载文件
    downLoadFile:function (e) {
        event.stopPropagation();
        var _this=$(e);
        var flag=_this.attr("downLoad-type")
        var fileUrl,fileName;
        switch (flag){
            case "radio":
                break;
            case "picture":
               fileUrl=_this.closest(".zm-choiceR-lists").attr("data-fSrc");
                fileName=_this.closest(".zm-choiceR-lists").attr("data-fName")
            // zmChoiceRadio.toBatchDownLoadFile(fileUrl,fileName)
                zmChoiceRadio.choiceFileDwnLoadFile({
                    url:zmEditor.url.getChoiceDownLoadFile, //请求的url
                    data:{"url":fileUrl,"fileName":fileName}//要发送的数据
                })
                break;
            case "video":
                fileUrl=_this.closest(".zm-choiceV-lists").attr("data-fvideourl");
                fileName=_this.closest(".zm-choiceV-lists").attr("data-finfoname")
                // zmChoiceRadio.toBatchDownLoadFile(fileUrl,fileName)
                zmChoiceRadio.choiceFileDwnLoadFile({
                    url:zmEditor.url.getChoiceDownLoadFile, //请求的url
                    data:{"url":fileUrl,"fileName":fileName}//要发送的数据
                })
                break;

        }
    },
    //提示框删除文件列表的
    deleteFileTitle:function (e) {
        event.stopPropagation();
        var _this=$(e);
        var fFileId=_this.closest(".zm-choiceFile-wrap").find(".zm-choiceFile-ClassifyBackgroundColor").attr("data-fid");
        var flag =_this.attr("delete-title");
        var b="";
        switch (flag){
            case "radio1":
                b="删除音频文件至回收站吗？";
                break;
            case "album1":
                b='删除专辑，专辑中的音频将被转移至"未分配专辑"，的音频文件夹，确定要删除所选择专辑么？';
                break;
            case "picture1":
                b="删除图片文件至回收站吗？";
                break;
            case "video1":
                b="删除视频文件至回收站吗？";
                break;
            case "news1":
                b="删除新闻文件至回收站吗？";
                break;
            case "blogger1":
                b="删除博客将导致该博客永久性被删除，且无法恢复！你确认要删除吗？";
                break;
        }
        zmEditor.dialog.open(
            {
                title: '提示语',
                content: ' <div class="zm-choiceFile-deleteTitle-wrap"><div class="zm-choiceFile-deleteTitle-text">'+b+'</div></div>',
                footer: $('<div class="choiceFile-deleteTitle-footer"><div class="zm-choiceFile-deleteTitle-btnBox"><span class="zm-choiceFile-deleteTitle-cancel">取消</span><span class="zm-choiceFile-deleteTitle-keep">确认删除</span></div></div>'),
                width: 280,
                height: 118,
                movable:true,
                // animate:'slide',
                target: $('.zm-choiceFile-wrap')
            },
            function(){
                var zmdialogBox= $(".zm-choiceFile-deleteTitle-wrap").closest(".zm-dialog-box");
                zmdialogBox.css("border-radius","0px");
                zmdialogBox.find(".zm-dialog-header").css({"height":"32px","line-height":"32px","padding-right":"10px","padding-left":"10px","border-radius":"0"});
                zmdialogBox.find(".zm-dialog-close").css("margin-top","3px");
                zmdialogBox.find(".zm-dialog-help").remove();
                zmdialogBox.find(".zm-dialog").css("border-radius","0");
                $(".zm-choiceFile-deleteTitle-cancel").on("click",function () {
                    $(this).closest(".zm-dialog-box").remove();
                })
                $(".zm-choiceFile-deleteTitle-keep").on("click",function () {
                    switch (flag){
                        case "radio1":
                            var musicIds=_this.closest(".zm-choiceR-lists").attr("data-fid");
                            console.log(musicIds,fFileId);
                            zmChoiceRadio.toBatchMusicDelete(musicIds,fFileId);
                            break;
                        case "album1":
                            var albumIds=_this.closest(".zm-choiceR-lists").attr("data-fid");
                            console.log(albumIds);
                            zmChoiceRadio.toBatchAlbumDelete(albumIds);
                            _this.closest(".zm-choiceR-lists").remove();
                            break;
                        case "picture1":
                            var imageIds=_this.closest(".zm-choiceR-lists").attr("data-imgid");
                            zmChoiceRadio.toBatchImageDelete(imageIds,fFileId);
                            _this.closest(".zm-choiceR-lists").remove();
                            break;
                        case "video1":
                            var imageIds=_this.closest(".zm-choiceV-lists").attr("data-fid");
                            zmChoiceRadio.toBatchVideoDelete(imageIds);
                            _this.closest(".zm-choiceV-lists").remove();
                            break;
                        case "news1":
                            var imageIds=_this.closest(".zm-choiceNewsList").attr("data-fid");
                            zmChoiceRadio.toBatchNewsRestore(imageIds);
                            break;
                        case "blogger1":
                            var imageIds=_this.closest(".zm-choiceBloggerList").attr("data-fid");
                            zmChoiceRadio.toBatchBloggerRestore(imageIds);
                            break;
                    }
                    $(this).closest(".zm-dialog-box").remove();
                })
            })//回调函数

    },
    //提示框批量删除文件列表的
    batchDeleteFileTitle:function (e) {
        var _this=$(e);
        var fFileId=_this.closest(".zm-choiceFile-wrap").find(".zm-choiceFile-ClassifyBackgroundColor").attr("data-fid");
        var flag =_this.attr("data-deleteType");
        var a=_this.closest(".zm-choiceFile-wrap").find(".fa-check").length;
        var b="";
        switch (flag){
            case "radio":
                    b='删除音频文件至回收站吗？'
                break;
            case "album":
                if(a==0){
                    b='请选择你要删除的专辑！'
                }else{
                    b='删除专辑，专辑中的音频将被转移至"未分配专辑"，的音频文件夹，确定要删除所选择专辑么？';
                }
                break;
            case "picture":
                if(a==0){
                    b='请选择你要删除的图片！'
                }else if(fFileId==0||fFileId==1){
                    b='从“全部图片库”或“未分配类目图片”类中删除图片将导致文件被转移到回收站，你也可以在回收站中还原该图片';
                }else{
                    b='从其它类目中删除图片，图片不会进入回收站，确定删除吗？';
                }
                break;
            case "video":
                if(a==0){
                    b='请选择你要删除的视频！'
                }else{
                    b='从回收站删除视频将导致该视频永久性删除，且无法恢复，你确认要删除吗？'
                }
                break;
            case "news":
                if(a==0){
                    b='请选择你要删除的新闻！'
                }else{
                    b='确认删除你选择的新闻吗？'
                }
                break;
            case "blogger":
                if(a==0){
                    b='请选择你要删除的博客！'
                }else{
                    b='删除博客将导致该博客永久性被删除，且无法恢复！你确认要删除吗？'
                }
                break;
            case "goods":
                if(a==0){
                    b='请选择你要删除的商品！'
                }else{
                    b='你确定要删除所选择商品吗？'
                }
                break;
            case "service":
                b="确定要删除所选择服务吗？";
                break;
        }
        zmEditor.dialog.open(
            {
                title: '提示语',
                content: ' <div class="zm-choiceFile-deleteTitle-wrap"><div class="zm-choiceFile-deleteTitle-text">'+b+'</div></div>',
                footer: $('<div class="choiceFile-deleteTitle-footer"><div class="zm-choiceFile-deleteTitle-btnBox"><span class="zm-choiceFile-deleteTitle-cancel">取消</span><span class="zm-choiceFile-deleteTitle-keep">确认删除</span></div></div>'),
                width: 280,
                height: 118,
                movable:true,
                // animate:'slide',
                target: $('.zm-choiceFile-wrap')
            },
            function(){
                var zmdialogBox= $(".zm-choiceFile-deleteTitle-wrap").closest(".zm-dialog-box");
                zmdialogBox.css("border-radius","0px")
                zmdialogBox.find(".zm-dialog-header").css({"height":"32px","line-height":"32px","padding-right":"10px","padding-left":"10px","border-radius":"0"})
                zmdialogBox.find(".zm-dialog-close").css("margin-top","3px")
                zmdialogBox.find(".zm-dialog-help").remove()
                zmdialogBox.find(".zm-dialog").css("border-radius","0")
                $(".zm-choiceFile-deleteTitle-cancel").on("click",function () {
                    $(this).closest(".zm-dialog-box").remove();
                })
                $(".zm-choiceFile-deleteTitle-keep").on("click",function () {
                    switch (flag){
                        case "radio":
                            var radioIscheak=[];
                            $(".zm-choiceRadio-middleR").find(".zm-choiceRadio-cheak").each(function (i,value) {
                                var _that=$(this);
                                if(_that.hasClass('fa-check')){
                                    radioIscheak.push(_that.closest(".zm-choiceFile-check").attr("data-fid"))
                                }
                            })
                            radioIscheak= radioIscheak.join(",")
                            zmChoiceRadio.toBatchMusicDelete (radioIscheak)
                            break;
                        case "album":
                            var albumIscheak=[];
                            $(".zm-choiceAlbum-middle").find(".zm-choiceRadio-cheak").each(function (i,value) {
                                var _that=$(this);
                                if(_that.hasClass('fa-check')){
                                    albumIscheak.push(_that.closest(".zm-choiceFile-check").attr("data-fid"))
                                    _that.closest(".zm-choiceR-lists").remove();
                                }
                            })
                            albumIscheak= albumIscheak.join(",")
                            zmChoiceRadio.toBatchAlbumDelete(albumIscheak);

                            break;
                        case "picture":
                            var imgLIscheak=[];
                            $(".zm-choiceRadio-middleR").find(".zm-choiceRadio-cheak").each(function (i,value) {
                                var _that=$(this);
                                if(_that.hasClass('fa-check')){
                                    imgLIscheak.push(_that.closest(".zm-choiceFile-check").attr("data-imgid"))
                                    _that.closest(".zm-choiceR-lists").remove();
                                }
                            })
                             imgLIscheak=imgLIscheak.join(",")
                            zmChoiceRadio.toBatchImageDelete(imgLIscheak,fFileId);

                            break;
                        case "video":
                            var imgLIscheak=[];
                            $(".zm-choiceRadio-middleR").find(".zm-choiceRadio-cheak").each(function (i,value) {
                                var _that=$(this);
                                if(_that.hasClass('fa-check')){
                                    imgLIscheak.push(_that.closest(".zm-choiceFile-check").attr("data-fid"))
                                    _this.closest(".zm-choiceR-lists").remove();
                                }
                            });
                            imgLIscheak=imgLIscheak.join(",")
                            zmChoiceRadio.toBatchVideoDelete(imgLIscheak)
                            break;
                        case "blogger":
                            var imgLIscheak=[];
                            $(".zm-choiceAlbum-middle").find(".zm-ChoiceNews-cheak").each(function (i,value) {
                                var _that=$(this);
                                if(_that.hasClass('fa-check')){
                                    imgLIscheak.push(_that.closest(".zm-choiceBloggerList").attr("data-fid"))
                                }
                            })
                            imgLIscheak=imgLIscheak.join(",")
                            console.log(imgLIscheak)
                            zmChoiceRadio.toBatchBloggerRestore(imgLIscheak)
                            break;
                        case "news":
                            var newsIscheak=[];
                            $(".zm-choiceRadio-spli").find(".zm-ChoiceNews-cheak").each(function (i,value) {
                                var _that=$(this);
                                if(_that.hasClass('fa-check')){
                                    newsIscheak.push(_that.closest(".zm-choiceNewsList").attr("data-fid"))
                                }
                            })
                            newsIscheak=newsIscheak.join(",")
                            console.log(imgLIscheak)
                            zmChoiceRadio.toBatchNewsRestore(newsIscheak)
                            break;
                        case "goods":
                            var goodsIscheak=[];
                            $(".zm-choiceGoodsSpli").find(".zm-ChoiceNews-cheak").each(function (i,value) {
                                var _that=$(this);
                                if(_that.hasClass('fa-check')){
                                    goodsIscheak.push(_that.closest(".zm-choiceGoodsList").attr("data-fIdStr"))
                                }
                            })
                            goodsIscheak=goodsIscheak.join(",");
                            console.log(goodsIscheak);
                            zmChoiceRadio.toBatchRestoreGoods(goodsIscheak);
                            break;
                        case "service":
                            var serviceCheak=[];
                            $(".zm-choiceService-middleR").find(".zm-ChoiceNews-cheak").each(function (i,value) {
                                var _that=$(this);
                                if(_that.hasClass('fa-check')){
                                    serviceCheak.push(_that.closest(".zm-choiceFile-check").attr("data-fid"))
                                }
                            })
                            serviceCheak=serviceCheak.join(",")
                            zmChoiceRadio.toBatchServiceRestore(serviceCheak)
                            break;
                    }
                    $(this).closest(".zm-dialog-box").remove();
                })

            })//回调函数
    },
    //图片模块的图片放大轮播
    choicePictureChangerBig:function (e) {
        event.stopPropagation();
        console.log(1234)
        var e=$(e);
        var _allList=e.closest(".zm-choiceRadio-middleR").find(".zm-choiceR-lists");
        var b='';
        _allList.each(function(index) {
            var _this= _allList.eq(index).find("img").prop("src")
            b+='<li> <img src='+_this+'></li>'
        })
        zmEditor.dialog.open(
            {
                title: '图片放大轮播',
                content: ' <div class="zm-allpicTo"><div class="zm-wrapimg"><ul  class="zm-imgBigbackground">'+b+'</ul>'
                +'<div class="zm-imgleftBtn"><</div><div class="zm-imgrightBtn">></div></div>'
                +'</div>',
                footer: $('<div class="zm-wrapimgBottom"><span>文件名:</span><span class="zm-wrapImgName">Dsc_0129.png</span><br /><span>图片尺寸:</span>'
                    +'<span class="zm-wrapImgSize">1216 x 1060</span></div>'),
                width: 530,
                height:450,
                movable:true,
                target: $('.zm-choiceFile-wrap')
            },
            function(){
                var gg=$(".zm-imgBigbackground").find("img");
                //zmChoiceRadio.imgScaleMethod(gg)
                zmChoiceRadio.videoScaleMethod(gg);

                $(".zm-allpicTo").hover(function () {
                    $(".zm-wrapimg div").show();
                },function () {
                    $(".zm-wrapimg div").hide();
                })
                var a=e.closest(".zm-choiceR-lists").index();
                var name1=_allList.eq(a).attr("data-fname");
                var size1=_allList.eq(a).attr("data-width");
                var size2=_allList.eq(a).attr("data-height");
                var size3=size1+'x'+size2;
                $(".zm-wrapImgName").html(name1);
                $(".zm-wrapImgSize").html(size3);
                $(".zm-imgBigbackground").css("left",-510*a+"px");
                $(".zm-imgleftBtn").on("click",function () {
                    if(a==0){
                        a=_allList.length;
                    }
                    a--;
                    var name1=_allList.eq(a).attr("data-fname");
                    var size1=_allList.eq(a).attr("data-width");
                    var size2=_allList.eq(a).attr("data-height");
                    var size3=size1+'x'+size2;
                    $(".zm-wrapImgName").html(name1);
                    $(".zm-wrapImgSize").html(size3);
                    $(".zm-imgBigbackground").animate({"left":-510*a+"px"},"200")
                    //$(".zm-imgBigbackground").css("left",-510*a+"px");
                })
                //$(".zm-imgBigbackground").css("left",-510*a+"px");
                $(".zm-imgrightBtn").on("click",function () {
                    a++;
                    if(a==_allList.length){
                        a=0;
                    }
                    var name1=_allList.eq(a).attr("data-fname");
                    var size1=_allList.eq(a).attr("data-width");
                    var size2=_allList.eq(a).attr("data-height");
                    var size3=size1+'x'+size2;
                    $(".zm-wrapImgName").html(name1);
                    $(".zm-wrapImgSize").html(size3);
                    //console.log(a)
                    $(".zm-imgBigbackground").animate({"left":-510*a+"px"},"200");
                })
            })//回调函数
    },
    //获取选择专辑模块的专辑列表
    getAjaxAlbumList:function (playStart,playLength,fBlogTitle) {
        $.ajax({
            type: "post",
            url:zmEditor.url.getAlbumList,
            dataType: "json",
            data:{ "iDisplayStart":playStart,"iDisplayLength":playLength,"fBlogTitle":fBlogTitle},
            success: function(e){
                var a=e.aaData;
                var listHtml='';
                $.each(a,function (i,value) {
                    listHtml +='<li class="zm-choiceR-lists zm-choiceA-list zm-choiceFile-check" data-fid="'+a[i].fId+'" data-fname="'+a[i].fName+'" data-fcoverUrl="'+a[i].fCoverUrl+'"><img class="zm-choiceR-listsimg" src="'+a[i].fCoverUrl+'" alt="">'
                        +'<input class="zm-choiceRlist1" value="" type="text" ><div class="zm-choiceRlist4">'
                        +'<span class="zm-choiceRlist2" style="color: #FFFFFF">'+a[i].fName+'</span></div>'
                        +'<span class="zm-choiceRadio-cheak zm-choiceRadio-cheakPosition fa"></span><div class="zm-choiceRlist3">'
                        +'<span class="fa fa-pencil zm-chRlist-pencil"></span><span class="fa fa-trash zm-chRlist-trash" onclick="zmChoiceRadio.deleteFileTitle(this)" delete-title="album1"></span>'
                        +'<span class="fa fa-download zm-chRlist-download"></span><span class="fa fa-history zm-chRlist-history"></span></div>'
                        +'<div class="zm-choiceR-listWrap zm-choiceFile-listWrap"><div style="width: 126px;height: 126px;opacity: .5;background-color:#9ad5d3"></div>'
                        +'</div></li>'
                })
                if(playStart=="0"){
                    $(".zm-choiceFile-middleInner").html($(listHtml))
                }else{
                    $(".zm-choiceFile-middleInner").append($(listHtml))
                }
                var c=$(".zm-choiceAlbum-middle").find(".zm-choiceR-lists").length;
                $(".zm-choiceFile-allListNumber").html(c)
                var g=$("zm-choiceFile-middleInner").find(".fa-check").length;
                $(".zm-choiceFile-allListCheckNumber").append($(g));
                var gg=$(".zm-choiceFile-wrap").find(".zm-choiceR-listsimg");
                zmChoiceRadio.imgScaleMethod(gg);
            }
        })
    },
    //获取选择图片模块的图片列表
    getAjaxPictureList:function (fId,keyWorld,playStart,playLength) {
        $.ajax({
            type: "post",
            url:zmEditor.url.getPictureList,
            dataType: "json",
            data: {'fId' : fId,'keyWorlds' :keyWorld,'pageIndex' :playStart,'pageSize': playLength},
            success: function(e){
                var a=e.data;
                var listHtml='';
                $.each(a,function (i,value) {
                    listHtml +='<li class="zm-choiceR-lists zm-choiceFile-check" data-imgid="'+a[i]._id+'" data-fName="'+a[i].fName+'"  data-fSrc="'+a[i].fPath+'" data-FileId="'+a[i].fFileId+'"><img class="zm-choiceR-listsimg" src="'+a[i].fPath+'" alt="">'
                        +'<input class="zm-choiceRlist1" value="" type="text" ><span class="zm-choiceRlist2">'+a[i].fName+'</span><span class="zm-choiceRadio-cheak zm-choiceRadio-cheakPosition fa"></span>'
                        +'<div class="zm-choiceRlist3"><span class="fa fa-search" onclick="zmChoiceRadio.choicePictureChangerBig(this)"></span>'
                        +'<span class="fa fa-pencil zm-chRlist-pencil"></span><span class="fa fa-trash zm-chRlist-trash" onclick="zmChoiceRadio.deleteFileTitle(this)" delete-title="picture1"></span>'
                        +'<span class="fa fa-download zm-chRlist-download" onclick="zmChoiceRadio.downLoadFile(this)" downLoad-type="picture"></span><span class="fa fa-history zm-chRlist-history"></span><div class="zm-choiceFile-titleBox">'
                        +'<div class="zm-choiceFile-titleList zm-choiceFile-titleList1"><p class="zm-choiceFile-triangleText">放大图片</p><p class="zm-choiceFile-triangleIcon"></p></div>'
                        +'<div class="zm-choiceFile-titleList zm-choiceFile-titleList2"><p class="zm-choiceFile-triangleText">修改文件名称</p><p class="zm-choiceFile-triangleIcon"></p>'
                        +'</div><div class="zm-choiceFile-titleList zm-choiceFile-titleList3"><p class="zm-choiceFile-triangleText">删除音频</p><p class="zm-choiceFile-triangleIcon"></p></div>'
                        +'<div class="zm-choiceFile-titleList zm-choiceFile-titleList4"><p class="zm-choiceFile-triangleText">下载到本地</p><p style="margin-left: 18px" class="zm-choiceFile-triangleIcon"></p></div><div class="zm-choiceFile-titleList zm-choiceFile-titleList5">'
                        +'<p class="zm-choiceFile-triangleText">还原文件</p><p style="margin-left: 32px" class="zm-choiceFile-triangleIcon"></p></div></div></div><div class="zm-choiceR-listWrap zm-choiceFile-listWrap">'
                        +'<div style="width: 126px;height: 126px;opacity: .5;background-color:#9ad5d3"></div></div></li>'
                })
                if(playStart=="0"){
                    $(".zm-choiceRadio-spli").html($(listHtml));
                }else{
                    $(".zm-choiceRadio-spli").append($(listHtml));
                }
               // $(".zm-choiceRadio-spli").html($(listHtml));
                var gg=$(".zm-choiceRadio-spli").find(".zm-choiceR-listsimg");
                zmChoiceRadio.imgScaleMethod(gg);
                 if(fId=="-1"){
                    $(".zm-choiceRadio-spli").find(".zm-chRlist-history").css("display","block");
                 }
                 var c=$(".zm-choiceFile-middleBoxList1").find(".zm-choiceR-lists").length;
                 $(".zm-choiceFile-allListNumber").html(c);
                var g=$(".zm-choicePicture-spli").find(".fa-check").length;
                $(".zm-choiceFile-allListCheckNumber").html(g)
            }
        })
    },
    //获取选择博客模块的博客列表
    getAjaxBloggerList:function (playStart,playLength,fBlogTitle) {
        $.ajax({
            type: "post",
            url:zmEditor.url.getBloggerCategory,
            dataType: "json",
            data:{ "iDisplayStart":playStart,"iDisplayLength":playLength,"fBlogTitle":fBlogTitle},
            success: function(e){
                var a=e.aaData;
                var listHtml='';
                $.each(a,function (i,value) {
                    var timeStamp=a[i].fProcessStartTime;
                    var date = new Date(timeStamp);
                    var timeY = date.getFullYear() + '-';
                    var timeM = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
                    var timeD = date.getDate() + ' ';
                    var timeH = date.getHours() + ':';
                    var timem = date.getMinutes()>10? date.getMinutes():"0"+date.getMinutes() ;
                    var timeLeft=timeY+timeM+timeD;
                    var timeRight=timeH+timem;
                    var fImg=$(value.fBlogContent).find('img').eq(0).attr("src")? $(value.fBlogContent).find('img').eq(0).attr("src"):"imgs/carousel05.png";
                    listHtml +="<li class='zm-choiceBloggerList zm-choiceFile-check' data-fBlogContent='"+a[i].fBlogContent+"' data-fId='"+a[i].fId+"' data-fBlogCode='"+a[i].fBlogCode+"' data-fBlogTitle='"+a[i].fBlogTitle+"' data-fCreateUserAccount='"+a[i].fCreateUserAccount+"' data-fReadCount='"+a[i].fReadCount+"' data-fForwardCount='"+a[i].fForwardCount+"' data-fLikeCount='"+a[i].fLikeCount+"'>"
                        +'<div class="zm-choiceBloggerListLeft"><span class="zm-ChoiceNews-cheak fa"></span><img class="zm-choiceNewsImg" src="'+fImg+'" alt="">'
                        +'</div><div class="zm-choiceBloggerListRight"><div class="zm-choiceBloggerLrtop"><input class="zm-choiceNlist1" value="" type="text" >'
                        +'<div class="zm-choiceNews-ListTitle">'+a[i].fBlogTitle+'</div>'
                        +'<span class="zm-choiceNewsListTime">'+timeLeft+timeRight+'</span></div><div class="zm-choiceBloggerLrboom">'
                        +'<div class="zm-choiceBloggerList-contentText">'+$(value.fBlogContent).text()+'</div>'
                        +'<span class="fa fa-trash" onclick="zmChoiceRadio.deleteFileTitle(this)" delete-title="blogger1"></span>'
                        +'<span class="fa fa-pencil zm-chNlist-pencil"></span></div></div></li>'
                })
                if(playStart=="0"){
                    $(".zm-choiceFile-middleInner").html($(listHtml))
                }else{
                    $(".zm-choiceFile-middleInner").append($(listHtml))
                }
                var c=$(".zm-choiceFile-middleInner").find(".zm-choiceBloggerList").length;
                $(".zm-choiceFile-allListNumber").html(c)
                var g=$("zm-choiceFile-middleInner").find(".fa-check").length;
                $(".zm-choiceFile-allListCheckNumber").append($(g));
            }

        })
    },
    //获取选择视频模块的视频列表
    getAjaxVideoList:function (fid,keyWorld,pageIndex,pageSize,cb) {
        $.ajax({
            type: "post",
            url:zmEditor.url.getVideoList,
            dataType: "json",
            data: {'fId':fid ,'keyWorlds':keyWorld,'pageIndex':pageIndex,'pageSize':pageSize},
            success: function(e){
                var a=e.data;
                var listHtml='';
                var d=[];
                for(var i=0;i<a.length;i++){
                    var fNo=a[i].fNo;
                    var fId=a[i].fId;
                    var fPoster=a[i].fPoster;
                    var fFilmTime=zmChoiceRadio.formatMinute(a[i].fFilmLength);
                    var fName=a[i].fName;
                    listHtml +='<li class="zm-choiceV-lists zm-choiceFile-check" data-fid="'+fId+'" data-fName="'+fName+'" data-fNo="'+fNo+'" data-fPoster="'+fPoster+'"><div class="zm-choiceV-lisTop">'
                        +'<img class="zm-choiceV-listsImg" src="'+fPoster+'" alt=""><span class="zm-choiceRadio-cheak zm-choiceV-check fa"></span>'
                        +'<div class="zm-choiceVideoTime" style="opacity: 1;">'+fFilmTime+'</div><div class="zm-choiceRlist3" style="width: 200px">'
                        +'<span class="fa fa-pencil zm-chRlist-pencil"></span>'
                        +'<span class="fa fa-trash zm-chRlist-trash" onclick="zmChoiceRadio.deleteFileTitle(this)" delete-title="video1"></span>'
                        +'<span class="fa fa-download zm-chRlist-download" onclick="zmChoiceRadio.downLoadFile(this)" download-type="video"></span><span class="fa fa-history zm-chRlist-history"></span></div>'
                        +'<div class="zm-choiceV-listWrap zm-choiceFile-listWrap">'
                        +'<div style="width:200px;height:124px;opacity:.5;background-color:#9ad5d3"></div></div></div>'
                        +'<div class="zm-choiceV-lisBoot"><input class="zm-choiceRlist1" value="" type="text" >'
                        +'<span class="zm-choiceVlist2">'+fName+'</span></div></li>';
                    d[fId]=a[i];
                }
                if(cb){

                }
                if(pageIndex=="0"){
                    $(".zm-choiceFile-contentVideo").html($(listHtml))
                }else{
                    $(".zm-choiceFile-contentVideo").append($(listHtml))
                }
                //$(".zm-choiceRadio-spli").html($(listHtml));
                var gg=$(".zm-choiceRadio-spli").find(".zm-choiceV-listsImg");
                zmChoiceRadio.videoScaleMethod(gg);
                if(fid=="-1"){
                    $(".zm-choiceRadio-spli").find(".zm-chRlist-history").css("display","block");
                }
                var c=$(".zm-choiceFile-middleBoxList1").find(".zm-choiceV-lists").length;
                $(".zm-choiceFile-allListNumber").html(c);
                var g=$(".zm-choiceFile-middleBoxList1").find(".fa-check").length;
                $(".zm-choiceFile-allListCheckNumber").html(g);
            }
        })
    },
    //获取选择视频模块免费资源库的视频列表
    getAjaxFreeSourcesVideoList:function (fFreeImageCategory) {
        $.ajax({
            type: "post",
            url:'http://192.168.0.127:8090/videoUploadFree/queryByPage',
            dataType: "json",
            data: {'fFreeImageCategory':fFreeImageCategory },
            success: function(e){
                var a=e.aaData;
                var listHtml='';
                for(var i=0;i<a.length;i++){
                    var fUrl=a[i].fUrl;
                    var fId=a[i].f_parent_id;
                    var fImgUrl=a[i].fImgUrl;
                    var fFilmTime=a[i].fVideoTime;
                    var fName=a[i].fRegularFileName;
                    listHtml +='<li class="zm-choiceV-lists zm-choiceFile-check" data-fid="'+fId+'" data-fUrl="'+fUrl+'"><div class="zm-choiceV-lisTop">'
                        +'<img class="zm-choiceV-listsImg" src="'+fImgUrl+'" alt=""><span class="zm-choiceRadio-cheak zm-choiceV-check fa"></span>'
                        +'<div class="zm-choiceVideoTime" style="opacity: 1;">'+fFilmTime+'</div><div class="zm-choiceRlist3" style="width: 200px">'
                        +'<span class="fa fa-play-circle-o zm-chRlist-playBtn"></span></div><div class="zm-choiceV-listWrap zm-choiceFile-listWrap">'
                        +'<div style="width: 200px;height: 124px;opacity: .5;background-color:#9ad5d3"></div></div></div><div class="zm-choiceV-lisBoot"> '
                        +'<input class="zm-choiceRlist1" value="" type="text" ><span class="zm-choiceVlist2">'+fName+'</span></div></li>';
                }
                    $(".zm-choiceFile-middleBoxList2 .zm-choiceFile-videoResource").html($(listHtml));
                var gg=$(".zm-choiceFile-middleBoxList2 .zm-choiceFile-videoResource").find(".zm-choiceV-listsImg");
                zmChoiceRadio.videoScaleMethod(gg);
            }
        })
    },
    //获取选择新闻模块的新闻列表
    getAjaxNewsList:function (obr,obj,obe) {
        var dataContent;
        var choiceclassify=obr;
        var choicefid=obj;
        if(choiceclassify=="fristId"){
            dataContent={"fristId" : choicefid,"sencondId" : ""}
        }else if(choiceclassify=="sencondId"){
            dataContent={"fristId" : obe,"sencondId" : choicefid}
        }else{
            dataContent={"fristId" : choiceclassify}
        }
        $.ajax({
            type: "post",
            url:zmEditor.url.getNewsList,
            dataType: "json",
            data: dataContent,
            success: function(e){
                var a=e.data;
                var listHtml='';
                $.each(a,function (i,value) {
                    var timeStamp=a[i].fProcessStartTime;
                    var date = new Date(timeStamp);
                    var timeY = date.getFullYear() + '-';
                    var timeM = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
                    var timeD = date.getDate() >10? date.getDate()+"&nbsp":"0"+date.getDate()+"&nbsp";
                    var timeH = date.getHours() + ':';
                    var timem = date.getMinutes()>10? date.getMinutes():"0"+date.getMinutes() ;
                    var timeLeft=timeY+timeM+timeD;
                    var timeRight=timeH+timem;
                    var fImg=$(value.fContent).find('img').eq(0).attr("src")? $(value.fBlogContent).find('img').eq(0).attr("src"):"imgs/carousel05.png";
                    listHtml +=' <li class="zm-choiceNewsList zm-choiceFile-check" data-fId="'+a[i].fId+'" data-fBlogCode="'+a[i].fBlogCode+'" data-fBlogTitle="'+a[i].fBlogTitle+'"     data-fCreateUserAccount="'+a[i].fCreateUserAccount+'" data-fid="'+a[i].fId+'" data-fid="'+a[i].fId+'">'
                        +'<div class="zm-choiceNewsListLeft"><span class="zm-ChoiceNews-cheak fa"></span>'
                        +'<img class="zm-choiceNewsImg" src="'+fImg+'" alt=""></div>'
                        +'<div class="zm-choiceNewsListRight"><div class="zm-choiceNewsLrtop">'
                        +'<input class="zm-choiceNlist1" value="" type="text" ><div class="zm-choiceNews-ListTitle zm-choiceNews-titleList">'+a[i].fNewsTitle+'</div>'
                        +'<span>评论（'+a[i].replyCount+'）</span><span>|</span><span>收藏</span><span>|</span><span>转发（'+a[i].fForwardCount+'）</span><span>|</span><span>点赞（'+a[i].fLikeCount+'）</span>'
                        +'<span class="zm-choiceNewsListTime">'+timeLeft+timeRight+'</span>'
                        +'</div><div class="zm-choiceNewsLrboom"><div class="zm-choiceNewsList-contentText">'+$(value.fContent).text()+'</div> '
                        +'<span class="fa fa-trash" onclick="zmChoiceRadio.deleteFileTitle(this)" delete-title="news1"></span>'
                        +'<span class="fa fa-pencil zm-chNlist-pencil"></span></div></div></li>'
                })

                $(".zm-choiceRadio-spli").html($(listHtml))

                if(obj=="-1"){
                    $(".zm-choiceRadio-spli").find(".zm-chRlist-history").css("display","block")
                }
                var c=$(".zm-choiceRadio-spli").find(".zm-choiceNewsList").length;
                $(".zm-choiceFile-allListNumber").html(c)
                var g=$(".zm-choiceRadio-middleR").find(".fa-check").length;
                $(".zm-choiceFile-allListCheckNumber").html(g)
            }
        })
    },
    //获取选择音频模块的音频列表
    getAjaxRadioList:function (obj) {
        $.ajax({
            type: "post",
            url:zmEditor.url.getRadioList,
            dataType: "json",
            data: {'albumFid' : obj},
            success: function(e){
                var a=e.data;
                //var a=[{"fId":1,"fName":"snow","fCoverUrl":"http://image.zuma.com/upload/860427012247613508.jpg","fCode":"5312","fMusicSrc":"12345"},{"fId":1,"fName":"什么鬼","fCoverUrl":"http://image.zuma.com/upload/860427012247613508.jpg","fCode":"5312","fMusicSrc":"12345"}];
                var listHtml='';
                $.each(a,function (i,value) {
                    listHtml +='<li class="zm-choiceR-lists zm-choiceFile-check" data-fid="'+a[i].fId+'" data-fName="'+a[i].fName+'" data-fCoverUrl="'+a[i].fCoverUrl+'" data-fCode="'+a[i].fCode+'" data-fMusicSrc="'+a[i].fMusicSrc+'" data-creator="'+a[i].creator+'" ><div class="zm-choiceRadio-imgIcon"><?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg t="1498801459007" class="zm-choiceRadio-icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5000" xmlns:xlink="http://www.w3.org/1999/xlink" width="80" height="80"><defs><style type="text/css"></style></defs><path d="M747.52 405.76c-20.48 0-37.12 16.64-37.12 37.12V499.2c0 97.28-81.92 176.64-181.76 176.64-99.84 0-181.76-79.36-181.76-176.64v-56.32c0-20.48-16.64-37.12-37.12-37.12-20.48 0-37.12 16.64-37.12 37.12V499.2c0 125.44 94.72 230.4 218.88 247.04v93.44h-79.36v74.24h232.96v-74.24h-79.36v-93.44c124.16-17.92 218.88-121.6 218.88-247.04v-56.32c0-20.48-16.64-37.12-37.12-37.12z" fill="" p-id="5001"></path><path d="M528.64 632.32c83.2 0 151.04-67.84 151.04-151.04v-217.6c0-83.2-67.84-151.04-151.04-151.04-83.2 0-151.04 67.84-151.04 151.04v216.32c0 84.48 67.84 152.32 151.04 152.32z m80.64-441.6c12.8 0 24.32 10.24 24.32 24.32 0 12.8-10.24 24.32-24.32 24.32-12.8 0-24.32-10.24-24.32-24.32 0-14.08 11.52-24.32 24.32-24.32z m0 74.24c12.8 0 24.32 10.24 24.32 24.32 0 12.8-10.24 24.32-24.32 24.32-12.8 0-24.32-10.24-24.32-24.32 0-12.8 11.52-24.32 24.32-24.32z m0 75.52c12.8 0 24.32 10.24 24.32 24.32 0 12.8-10.24 24.32-24.32 24.32-12.8 0-24.32-10.24-24.32-24.32 0-14.08 11.52-24.32 24.32-24.32z m0 74.24c12.8 0 24.32 10.24 24.32 24.32 0 12.8-10.24 24.32-24.32 24.32-12.8 0-24.32-10.24-24.32-24.32 0-14.08 11.52-24.32 24.32-24.32z m0 74.24c12.8 0 24.32 10.24 24.32 24.32 0 12.8-10.24 24.32-24.32 24.32-12.8 0-24.32-10.24-24.32-24.32 0-14.08 11.52-24.32 24.32-24.32z m-79.36-298.24c12.8 0 24.32 10.24 24.32 24.32 0 12.8-10.24 24.32-24.32 24.32-12.8 0-24.32-10.24-24.32-24.32 0-14.08 10.24-24.32 24.32-24.32z m0 74.24c12.8 0 24.32 10.24 24.32 24.32 0 12.8-10.24 24.32-24.32 24.32-12.8 0-24.32-10.24-24.32-24.32 0-12.8 10.24-24.32 24.32-24.32z m0 75.52c12.8 0 24.32 10.24 24.32 24.32 0 12.8-10.24 24.32-24.32 24.32-12.8 0-24.32-10.24-24.32-24.32 0-14.08 10.24-24.32 24.32-24.32z m0 74.24c12.8 0 24.32 10.24 24.32 24.32 0 12.8-10.24 24.32-24.32 24.32-12.8 0-24.32-10.24-24.32-24.32 0-14.08 10.24-24.32 24.32-24.32z m0 74.24c12.8 0 24.32 10.24 24.32 24.32 0 12.8-10.24 24.32-24.32 24.32-12.8 0-24.32-10.24-24.32-24.32 0-14.08 10.24-24.32 24.32-24.32z m-79.36-298.24c12.8 0 24.32 10.24 24.32 24.32 0 12.8-10.24 24.32-24.32 24.32-12.8 0-24.32-10.24-24.32-24.32 0-14.08 10.24-24.32 24.32-24.32z m0 74.24c12.8 0 24.32 10.24 24.32 24.32 0 12.8-10.24 24.32-24.32 24.32-12.8 0-24.32-10.24-24.32-24.32 0-12.8 10.24-24.32 24.32-24.32z m0 75.52c12.8 0 24.32 10.24 24.32 24.32 0 12.8-10.24 24.32-24.32 24.32-12.8 0-24.32-10.24-24.32-24.32 0-14.08 10.24-24.32 24.32-24.32z m0 74.24c12.8 0 24.32 10.24 24.32 24.32 0 12.8-10.24 24.32-24.32 24.32-12.8 0-24.32-10.24-24.32-24.32 0-14.08 10.24-24.32 24.32-24.32z m0 74.24c12.8 0 24.32 10.24 24.32 24.32 0 12.8-10.24 24.32-24.32 24.32-12.8 0-24.32-10.24-24.32-24.32 0-14.08 10.24-24.32 24.32-24.32z" fill="" p-id="5002"></path></svg></div>'
                        +'<input class="zm-choiceRlist1" value="" type="text" data-fid="'+a[i].fId+'" ><span class="zm-choiceRlist2">'+a[i].fName+'</span><span class="zm-choiceRadio-cheak zm-choiceRadio-cheakPosition fa"></span>'
                        +'<div class="zm-choiceRlist3">'
                        +'<span class="fa fa-pencil zm-chRlist-pencil"></span><span class="fa fa-trash zm-chRlist-trash" onclick="zmChoiceRadio.deleteFileTitle(this)" delete-title="radio1"></span>'
                        +'<span class="fa fa-download zm-chRlist-download"></span><span class="fa fa-history zm-chRlist-history"></span></div><div class="zm-choiceR-listWrap zm-choiceFile-listWrap">'
                        +'<div style="width: 126px;height: 126px;opacity: .5;background-color:#9ad5d3"></div></div></li>'
                });

                $(".zm-choiceRadio-spli").html($(listHtml));
                if(obj=="-1"){
                    $(".zm-choiceRadio-spli").find(".zm-chRlist-history").css("display","block");
                };
                var c=$(".zm-choiceRadio-middleR").find(".zm-choiceR-lists").length;
                $(".zm-choiceFile-allListNumber").html(c);
                var g=$(".zm-choiceRadio-middleR").find(".fa-check").length;
                $(".zm-choiceFile-allListCheckNumber").html(g);
                var gg=$(".zm-choiceFile-wrap").find(".zm-choiceR-listsimg");
                zmChoiceRadio.imgScaleMethod(gg);
            }
        })
    },
    //获取选择商品模块的商品列表
    getAjaxGoodsList:function (obj) {
        $.ajax({
            type: "post",
            url:zmEditor.url.getGoodsList,
            dataType: "json",
            data: {'catrgoryId' : obj},
            success: function(e){
                var a=e.data;
                var listHtml='';
                $.each(a,function (i,value) {
                    listHtml +=' <li class="zm-choiceGoodsList zm-choiceFile-check" data-fProductCode="'+a[i].fProductCode+'" data-fIdStr="'+a[i].fIdStr+'" data-fMainUrl="'+a[i].fMainUrl+'" data-fState="'+a[i].fState+'" data-fSkuCode="'+a[i].fSkuCode+'" data-fName="'+a[i].fName+'" data-fTagId="'+a[i].fTagId+'">'
                        +'<div class="zm-choiceNewsListLeft"><span class="zm-ChoiceNews-cheak fa"></span><img class="zm-choiceNewsImg" src="'+a[i].fMainUrl+'" alt="">'
                        +'</div><div class="zm-choiceGoodsListRight"><span style="width:100px">'+a[i].fState+'</span><span style="width:80px">'+a[i].fSkuCode+'</span><span style="width:110px">'+a[i].fSkuCode+'</span>'
                        +'<span style="width:426px">'+a[i].fName+'</span></div></li>'
                })
                $(".zm-choiceGoodsSpli").html($(listHtml))
                var c=$(".zm-choiceGoodsSpli").find(".zm-choiceR-lists").length;
                $(".zm-choiceFile-allListNumber").html(c)
                var g=$(".zm-choiceRadio-middleR").find(".fa-check").length;
                $(".zm-choiceFile-allListCheckNumber").html(g)
            }
        })
    },
    //获取选择服务模块的服务列表
    getAjaxServiceList:function (categoryId,servicetName,pageSize,startNum) {
        $.ajax({
            type: "post",
            url:zmEditor.url.getServiceList,
            dataType: "json",
            data: {'fId' :categoryId,'keyWorld' : servicetName,'pageIndex' :pageSize,'pageSize' :startNum},
            success: function(e){
                var a=e.data;
                console.log(a.length)
                var listHtml='';
                $.each(a,function (i,value) {
                    listHtml +=' <li class="zm-choiceGoodsList zm-choiceFile-check" data-fServiceId="'+a[i].fServiceId+'" data-fid="'+a[i].fId+'" data-fIdStr="'+a[i].fIdStr+'" data-fMainUrl="'+a[i].fMainUrl+'" data-fState="'+a[i].fState+'" data-fServiceSku="'+a[i].fServiceSku+'" data-fName="'+a[i].fName+'" data-fTagId="'+a[i].fTagId+'">'
                        +'<div class="zm-choiceNewsListLeft"><span class="zm-ChoiceNews-cheak fa"></span><img class="zm-choiceNewsImg" src="'+a[i].fMainImage+'" alt=""></div>'
                        +'<div class="zm-choiceGoodsListRight"><span style="width:100px">在线</span><span style="width:80px">'+a[i].fServiceSku+'</span><span style="width:110px">'+a[i].fServiceId+'</span>'
                        +'<span style="width:438px">'+a[i].fName+'</span></div></li>'
                });
                if(pageSize=="1"){
                    $(".zm-choiceGoodsSpli").html($(listHtml))
                }else{
                    $(".zm-choiceGoodsSpli").append($(listHtml))
                }

                //$(".zm-choiceGoodsSpli").html($(listHtml))
                var c=$(".zm-choiceGoodsSpli").find(".zm-choiceGoodsList").length;
                $(".zm-choiceFile-allListNumber").html(c)
                var g=$(".zm-choiceRadio-middleR").find(".fa-check").length;
                $(".zm-choiceFile-allListCheckNumber").html(g)

            }
        })
    },
    //删除图片列表路由
    toBatchImageDelete:function (imgLIscheak,fFileId) {
        $.ajax({
            type:"post",
            url:zmEditor.url.getPictureDeleteList,
            dataType: "json",
            data: {'_ids':imgLIscheak,'fFileId':fFileId},
            success:function (e) {
                //zmChoiceRadio.getAjaxPictureList(fFileId,"",0,24)
            }
        })
    },
    //下载文件路由
    toBatchDownLoadFile:function (fileSrc,fileName) {
        // window.open('http://192.168.0.132:8980/zm_business_basic_webapp/resource/downLoadFile?url='+fileSrc+'&fileName='+fileName+'')
        var form=new FormData();
        form.append("url",fileSrc);
        form.append("fileName",fileName);
        console.log(fileSrc,fileName)
        $.ajax({
            type:"post",
            url:zmEditor.url.getChoiceDownLoadFile,
            processData:false,//对象数组转换为字符串
            contentType:false,//编码
            cache:false,//缓存
            data:form,
            async:true,
            success:function (e) {
            }
        })
    },
    //删除音频路由
    toBatchMusicDelete:function (musicIds) {
        $.ajax({
            type:"post",
            url:zmEditor.url.getRadioDeleteList,
            dataType: "json",
            data: {'ids':musicIds},
            success:function (e) {
               // zmChoiceRadio.getAjaxRadioList(fFileId)
            }
        })
    },
    //删除视频路由
    toBatchVideoDelete:function (musicIds) {
        $.ajax({
            type:"post",
            url:zmEditor.url.getVideoDeleteList,
            dataType: "json",
            data: {'fIds':musicIds,'fIsDelete':"1"},
            success:function (e) {
                //zmChoiceRadio.getAjaxVideoList(obr,obj);
            }
        })
    },
    //批量还原图片的路由
    toBatchRestore:function (_ids) {
        $.ajax({
            type:"post",
            url:zmEditor.url.getPictureRestoreList,
            dataType: "json",
            data: {'_ids':_ids},
            success:function (e) {

            }
        })
    },
    //删除博客路由
    toBatchBloggerRestore:function (imgLIscheak) {
        $.ajax({
            type:"post",
            url:zmEditor.url.getBloggerDeleteList,
            dataType: "json",
            data: {'ids':imgLIscheak},
            success:function (e) {
                console.log(111111)
                zmChoiceRadio.getAjaxNewsList(0,12)
            }
        })
    },
    //删除新闻路由
    toBatchNewsRestore:function (imgLIscheak) {
        $.ajax({
            type:"post",
            url:zmEditor.url.getNewsDeleteList,
            dataType: "json",
            data: {'ids':imgLIscheak},
            success:function (e) {
                console.log(111111)
                zmChoiceRadio.getAjaxBloggerList(obr,obj,obe)
            }
        })
    },
    //批量还原音频的路由
    toBatchRestoreRadio:function (_ids) {
        $.ajax({
            type:"post",
            url:zmEditor.url.getRadioRestoreList,
            dataType: "json",
            data: {'fIds':_ids},
            success:function (e) {
                console.log(111111)
                zmChoiceRadio.getAjaxRadioList(-1)
            }
        })
    },
    //还原视频路由
    toBatchRestoreVideo:function (_ids) {
        $.ajax({
            type:"post",
            url:zmEditor.url.getVideoRestoreList,
            dataType: "json",
            data: {'fIds':_ids,'fIsDelete':"2"},
            success:function (e) {
                console.log(111111)
                zmChoiceRadio.getAjaxVideoList(-1,"",0,12)
            }
        })
    },
    //删除图片类目路由
    toBatchAlbumDelete:function (fId) {
        $.ajax({
            type:"post",
            url:zmEditor.url.getAlbumDeleteList,
            dataType: "json",
            data : {'ids':fId},
            success:function (e) {
            }
        })
    },
    //批量删除商品的路由
    toBatchRestoreGoods:function (_ids) {
        $.ajax({
            type:"post",
            url:zmEditor.url.getGoodsDeleteList,
            dataType: "json",
            data: {'ids':_ids},
            success:function (e) {
                console.log(111111)
               // zmChoiceRadio.getAjaxRadioList(-1)
            }
        })
    },
    //批量删除服务路由
    toBatchServiceRestore:function (_ids) {
        $.ajax({
            type:"post",
            url:zmEditor.url.getServiceDeleteList,
            dataType: "json",
            data: {'ids':_ids},
            success:function (e) {
                console.log(111111)
                zmChoiceRadio.getAjaxServiceList()
            }
        })
    },
    //删除图片类目路由
    deleteClassify:function (fId) {
        $.ajax({
            type:"post",
            url:zmEditor.url.getPictureDeleteCategory,
            dataType: "json",
            data : {'fId':fId,'confirm':'ok'},
            success:function (e) {
            }
        })
    },
    //删除视频类目路由
    deleteVideoClassify:function (fId) {
        $.ajax({
            type:"post",
            url:zmEditor.url.getVideoDeleteCategory,
            dataType: "json",
            data : {'fId':fId},
            success:function (e) {
            }
        })
    },
    //删除新闻类目路由
    deleteNewsClassify:function (fId) {
        $.ajax({
            type:"post",
            url:zmEditor.url.getNewsDeleteCategory,
            dataType: "json",
            data : {'d':fId},
            success:function (e) {
            }
        })
    },
    //删除商品类目路由
    deleteGoodsClassify:function (fId) {
        $.ajax({
            type:"post",
            url:zmEditor.url.getGoodsDeleteCategory,
            dataType: "json",
            data : {'categoryId':fId},
            success:function (e) {
            }
        })
    },
    //删除服务类目路由
    deleteServiceClassify:function (fId) {
        $.ajax({
            type:"post",
            url:zmEditor.url.getServiceDeleteCategory,
            dataType: "json",
            data : {'categoryId':fId},
            success:function (e) {
            }
        })
    },
    //删除类目提示
    deleteClassifyTitle:function (e) {
        var _this=$(e);
        var a=_this.closest(".zm-choiceFile-categoryStyle").attr("data-fid");
        var flag =_this.closest(".zm-choiceFile-categoryStyle").attr("data-type");
        var b="";
        switch (flag){
            case "picture1":
                if(a==0||a==1){
                    b='从“全部图片库”或“未分配类目图片”类中删除图片将导致文件被转移到回收站，你也可以在回收站中还原该图片';
                }else{
                    b='该类目项下有子类目，删除该类目其子类目也将被删除，确定删除吗？'
                }
                break;
            case "picture2":
                b='该类目项下有图片，请先删除或转移图片到其它文件夹！';
                break;
            case "video1":
                b='该类目项下有视频，请先删除或转移视频到其它文件夹！';
                break;
            case "videoe2":
                b='该类目项下有视频，请先删除或转移视频到其它文件夹！';
                break;
        }
        zmEditor.dialog.open(
            {
                title: '提示语',
                content: ' <div class="zm-choiceFile-deleteTitle-wrap"><div class="zm-choiceFile-deleteTitle-text">'+b+'</div></div>',
                footer: $('<div class="choiceFile-deleteTitle-footer"><div class="zm-choiceFile-deleteTitle-btnBox"><span class="zm-choiceFile-deleteTitle-cancel">取消</span><span class="zm-choiceFile-deleteTitle-keep">确认删除</span></div></div>'),
                width: 280,
                height: 118,
                movable:true,
                // animate:'slide',
                target: $('.zm-choiceFile-wrap')
            },
            function(){
                var zmdialogBox= $(".zm-choiceFile-deleteTitle-wrap").closest(".zm-dialog-box");
                zmdialogBox.css("border-radius","0px")
                zmdialogBox.find(".zm-dialog-header").css({"height":"32px","line-height":"32px","padding-right":"10px","padding-left":"10px","border-radius":"0"})
                zmdialogBox.find(".zm-dialog-close").css("margin-top","6px")
                zmdialogBox.find(".zm-dialog-help").remove()
                zmdialogBox.find(".zm-dialog").css("border-radius","0")
                $(".zm-choiceFile-deleteTitle-cancel").on("click",function () {
                    $(this).closest(".zm-dialog-box").remove();
                })
                $(".zm-choiceFile-deleteTitle-keep").on("click",function () {
                    switch (flag){
                        case "picture1":
                            _this.closest(".choiceFile-box11").remove();
                            zmChoiceRadio.deleteClassify(a);
                            break;
                        case "picture2":
                            _this.closest(".zm-choiceFile-categoryStyle").remove();
                            zmChoiceRadio.deleteClassify(a);
                            break;
                        case "video1":
                            _this.closest(".choiceFile-box11").remove();
                            zmChoiceRadio.deleteVideoClassify(a);
                            break;
                        case "video2":
                            _this.closest(".zm-choiceFile-categoryStyle").remove();
                            zmChoiceRadio.deleteVideoClassify(a);
                            break;
                    }
                    $(this).closest(".zm-dialog-box").remove();
                })

            })//回调函数
    },
    //三级类目删除提示
    deleteThreeClassifyTitle:function (e) {
        var _this=$(e);
        var a=_this.closest(".zm-choiceFile-categoryStyle").attr("data-fid");
        var flag =_this.closest(".zm-choiceFile-categoryStyle").attr("data-type");
        var flagNumber=_this.closest(".zm-choiceFile-categoryStyle").attr("data-flagNumber");
        var listLength=_this.closest(".zm-choiceFile-wrap").find(".zm-choiceFile-check").length;
        var b="";
        if(flagNumber=="3"&&listLength==0){
            zmChoiceRadio.deleteGoodsClassify(a);
        }else{
            switch (flag){
                case "goods1":
                    b='该类目项下有子类目，删除该类目其子类目也将被删除，确定删除吗？';
                    break;
                case "picture1":
                    b='该类目项下有图片，请先删除或转移图片到其它文件夹！';
                    break;
                case "picture2":
                    b='该类目项下有图片，请先删除或转移图片到其它文件夹！';
                    break;
                case "video1":
                    b='该类目项下有视频，请先删除或转移视频到其它文件夹！';
                    break;
                case "video2":
                    b='该类目项下有视频，请先删除或转移视频到其它文件夹！';
                    break;
                case "service1":
                    b='该类目项下有服务，请先删除或转移服务到其它文件夹！';
                    break;
                case "service2":
                    b='该类目项下有服务，请先删除或转移服务到其它文件夹！';
                    break;
            }
            zmEditor.dialog.open(
                {
                    title: '提示语',
                    content: ' <div class="zm-choiceFile-deleteTitle-wrap"><div class="zm-choiceFile-deleteTitle-text">'+b+'</div></div>',
                    footer: $('<div class="choiceFile-deleteTitle-footer"><div class="zm-choiceFile-deleteTitle-btnBox"><span class="zm-choiceFile-deleteTitle-cancel">取消</span><span class="zm-choiceFile-deleteTitle-keep">确认删除</span></div></div>'),
                    width: 280,
                    height: 118,
                    movable:true,
                    // animate:'slide',
                    target: $('.zm-choiceFile-wrap')
                },
                function(){
                    var zmdialogBox= $(".zm-choiceFile-deleteTitle-wrap").closest(".zm-dialog-box");
                    zmdialogBox.css("border-radius","0px");
                    zmdialogBox.find(".zm-dialog-header").css({"height":"32px","line-height":"32px","padding-right":"10px","padding-left":"10px","border-radius":"0"})
                    zmdialogBox.find(".zm-dialog-close").css("margin-top","6px");
                    zmdialogBox.find(".zm-dialog-help").remove();
                    zmdialogBox.find(".zm-dialog").css("border-radius","0");
                    $(".zm-choiceFile-deleteTitle-cancel").on("click",function () {
                        $(this).closest(".zm-dialog-box").remove();
                    })
                    $(".zm-choiceFile-deleteTitle-keep").on("click",function () {
                        console.log(flag,a)
                        switch (flag){
                            case "picture1":
                                _this.closest(".choiceFile-box11").remove();
                                zmChoiceRadio.deleteClassify(a);
                                break;
                            case "picture2":
                                _this.closest(".zm-choiceFile-categoryStyle").remove();
                                zmChoiceRadio.deleteClassify(a);
                                break;
                            case "video1":
                                _this.closest(".choiceFile-box11").remove();
                                zmChoiceRadio.deleteVideoClassify(a);
                                break;
                            case "video2":
                                _this.closest(".zm-choiceFile-categoryStyle").remove();
                                zmChoiceRadio.deleteVideoClassify(a);
                                break;
                            case "service1":
                                _this.closest(".zm-choiceFile-categoryStyle").remove();
                                zmChoiceRadio.deleteServiceClassify(a);
                                break;
                            case "service2":
                                _this.closest(".zm-choiceFile-categoryStyle").remove();
                                zmChoiceRadio.deleteServiceClassify(a);
                                break;
                        }
                        $(this).closest(".zm-dialog-box").remove();
                    })

                })//回调函数
        }
    },
    //图片增加或修改类目
    choicePictureAddClassify:function (fId,fName,fParentId,cb) {
        $.ajax({
            type: "post",
            url:zmEditor.url.getPictureAddOrReviserCategory,
            dataType: "json",
            data : {'fId':fId,'fName':fName,'fParentId':fParentId},
            success: function (e) {
                //console.log("新增或修改成功")
                var data=e.data;
                if(cb){cb(data);}
            }
        })
    },
    //视频增加或修改类目
    choiceVideoAddClassify:function (fId,fName,fParentId,cb) {
        $.ajax({
            type: "post",
            url:zmEditor.url.getVideoAddOrReviserCategory,
            dataType: "json",
            data : {'fId':fId,'fName':fName,'fParentId':fParentId},
            success: function (e) {
                //console.log("新增或修改成功")
                var data=e.data;
                if(cb){cb(data);}
            }
        })
    },
    //新闻增加或修改类目
    choiceNewsAddClassify:function (fId,fName,fParentId,cb) {
        $.ajax({
            type: "post",
            url:zmEditor.url.getNewsAddOrReviserCategory,
            dataType: "json",
            data : {'cName':fName,'id':fId,'parentId':fParentId},
            success: function (e) {
                //console.log("新增或修改成功")
                var data=e.data;
                if(cb){cb(data);}
            }
        })
    },
    //商品增加或修改类目
    choiceGoodsAddClassify:function (fName,fParentId,cb) {
        $.ajax({
            type: "post",
            url:zmEditor.url.getGoodsAddCategory,
            dataType: "json",
            data : {'fName':fName,'fParentId':fParentId},
            success: function (e) {
                //console.log("新增或修改成功")
                var data=e.data;
                console.log(data)
                if(cb){cb(data);}
            }
        })
    },
    //增加服务类目
    choiceServiceAddClassify:function (fId,fName,fParentId,cb) {
        console.log(4321)
        $.ajax({
            type: "post",
            url:zmEditor.url.getServiceAddCategory,
            dataType: "json",
            data : {'fId':fId,'fName':fName,'fParentId':fParentId},
            success: function (e) {
                console.log("新增或修改成功")
                var data=e.data;
                console.log(data)
                if(cb){cb(data);}
            }
        })
    },
    //修改图片名称路由
    choicePictureTochangeName:function (_id,fName) {
        $.ajax({
            type:"post",
            url:zmEditor.url.getPictureReviserList,
            dataType: "json",
            data: {'_id':_id,'fName':fName},
            success:function (e) {
                console.log("he")
            }
        })
    },
    //修改专辑名称路由
    choiceAlbumToChangeName:function (fId,fName) {
        $.ajax({
            type:"post",
            url:zmEditor.url.getAlbumReviserList,
            dataType: "json",
            data: {'fId':fId,'fName':fName},
            success:function (e) {
                console.log("he")
            }
        })
    },
    //修改博客名称路由
    choiceBloggerTochangeName:function (fId,fName) {
        $.ajax({
            type:"post",
            url:zmEditor.url.getBloggerReviserList,
            dataType: "json",
            data: {'fId':fId,'fBlogTitle':fName},
            success:function (e) {
                console.log("blogger")
            }
        })
    },
    //修改新闻名称路由
    choiceNewsTochangeName:function (fId,fName) {
        $.ajax({
            type:"post",
            url:zmEditor.url.getNewsReviserList,
            dataType: "json",
            data: {'id':fId,'name':fName},
            success:function (e) {
                console.log("blogger")
            }
        })
    },
    //修改视频名称路由
    choiceVideoToChangeName:function (_id,fName) {
        $.ajax({
            type:"post",
            url:zmEditor.url.getVideoReviserList,
            dataType: "json",
            data: {'fIds':_id,'fName':fName},
            success:function (e) {
                console.log("he")
            }
        })
    },
    //修改音频名称路由
    choiceRadioTochangeName:function (fid,fName) {
        $.ajax({
            type:"post",
            url:zmEditor.url.getRadioReviserList,
            dataType: "json",
            data: {'fId':fid,'fName':fName},
            success:function (e) {
                console.log("he")
            }
        })
    },
    //图片移动到分类路由
    choiceToMOvePicture:function (imageIds,categoryIds) {
        // console.log(imageIds,categoryIds)
        $.ajax({
            type:"post",
            url:zmEditor.url.getPictureMoveToClassify,
            dataType: "json",
            data: {'_ids':imageIds,'fFileId':categoryIds},
            success:function (e) {
            }
        })
    },
    //音频移动到分类路由
    choiceToMOveRadio:function (radioIds,categoryIds) {
        // console.log(imageIds,categoryIds)
        $.ajax({
            type:"post",
            url: zmEditor.url.getRadioMoveToClassify,
            dataType: "json",
            data: {'musicIds':radioIds,'albumIds':categoryIds},
            success:function (e) {
            }
        })
    },
    //搜索文件列表按钮路由
    searchFileListBtn:function (e) {
        console.log(1)
        var _this=$(e);
        var flag =_this.attr("data-searchType");
        var searchCotent=_this.siblings(".zm-choiceFile-search").val();
        var fid=_this.closest(".zm-choiceFile-wrap").find(".zm-choiceFile-ClassifyBackgroundColor").attr("data-fid");
        var fBlogTitle;
        if(searchCotent!=""){
            fBlogTitle=searchCotent;
        }else{
            fBlogTitle="";
        }
        switch (flag){
            case "radio":
                $.ajax({
                    type: "post",
                    url:zmEditor.url.getRadioList,
                    dataType: "json",
                    data: {'fName' : searchCotent},
                    success: function(e){
                        var a=e.data;
                        var listHtml='';
                        $.each(a,function (i,value) {
                            listHtml +='<li class="zm-choiceR-lists zm-choiceFile-check" data-fid="'+a[i].fId+'" data-fName="'+a[i].fName+'" data-fCoverUrl="'+a[i].fCoverUrl+'" data-fCode="'+a[i].fCode+'" data-fMusicSrc="'+a[i].fMusicSrc+'" data-creator="'+a[i].creator+'" ><img class="zm-choiceR-listsimg" src="'+a[i].fCoverUrl+'"  alt="">'
                                +'<input class="zm-choiceRlist1" value="" type="text" data-fid="'+a[i].fId+'" ><span class="zm-choiceRlist2">'+a[i].fName+'</span><span class="zm-choiceRadio-cheak zm-choiceRadio-cheakPosition fa"></span>'
                                +'<div class="zm-choiceRlist3">'
                                +'<span class="fa fa-pencil zm-chRlist-pencil"></span><span class="fa fa-trash zm-chRlist-trash" onclick="zmChoiceRadio.deleteFileTitle(this)" delete-title="radio1"></span>'
                                +'<span class="fa fa-download zm-chRlist-download"></span><span class="fa fa-history zm-chRlist-history"></span></div><div class="zm-choiceR-listWrap zm-choiceFile-listWrap">'
                                +'<div style="width: 126px;height: 126px;opacity: .5;background-color:#9ad5d3"></div></div></li>'
                        });
                        $(".zm-choiceRadio-spli").html($(listHtml));
                        if(obj=="-1"){
                            $(".zm-choiceRadio-spli").find(".zm-chRlist-history").css("display","block");
                        };
                        var c=$(".zm-choiceRadio-middleR").find(".zm-choiceR-lists").length;
                        $(".zm-choiceFile-allListNumber").html(c);
                        var g=$(".zm-choiceRadio-middleR").find(".fa-check").length;
                        $(".zm-choiceFile-allListCheckNumber").html(g);
                        var gg=$(".zm-choiceFile-wrap").find(".zm-choiceR-listsimg");
                        zmChoiceRadio.imgScaleMethod(gg);
                    }
                });
                break;
            case "album":
                $.ajax({
                        type: "post",
                        url:zmEditor.url.getAlbumList,
                        dataType: "json",
                        data:{ "iDisplayStart":"0","iDisplayLength":"12","fName":fBlogTitle},
                        success: function(e){
                            var a=e.data;
                            var listHtml='';
                            $.each(a,function (i,value) {
                                listHtml +='<li class="zm-choiceR-lists zm-choiceA-list zm-choiceFile-check" data-fid="'+a[i].fId+'" data-fname="'+a[i].fName+'" data-fcoverUrl="'+a[i].fCoverUrl+'"><img class="zm-choiceR-listsimg" src="'+a[i].fCoverUrl+'" alt="">'
                                    +'<input class="zm-choiceRlist1" value="" type="text" ><div class="zm-choiceRlist4">'
                                    +'<span class="zm-choiceRlist2" style="color: #FFFFFF">'+a[i].fName+'</span></div>'
                                    +'<span class="zm-choiceRadio-cheak zm-choiceRadio-cheakPosition fa"></span><div class="zm-choiceRlist3">'
                                    +'<span class="fa fa-pencil zm-chRlist-pencil"></span><span class="fa fa-trash zm-chRlist-trash"></span>'
                                    +'<span class="fa fa-download zm-chRlist-download"></span><span class="fa fa-history zm-chRlist-history"></span></div>'
                                    +'<div class="zm-choiceR-listWrap zm-choiceFile-listWrap"><div style="width: 126px;height: 126px;opacity: .5;background-color:#9ad5d3"></div>'
                                    +'</div></li>'
                            })
                            $(".zm-choiceFile-middleInner").html($(listHtml))
                            var c=$(".zm-choiceAlbum-middle").find(".zm-choiceR-lists").length;
                            $(".zm-choiceFile-allListNumber").html(c)
                            var g=$("zm-choiceAlbum-middle").find(".fa-check").length;
                            $(".zm-choiceFile-allListCheckNumber").html(g);
                            var gg=$(".zm-choiceFile-wrap").find(".zm-choiceR-listsimg");
                            zmChoiceRadio.imgScaleMethod(gg);
                        }
                })
                break;
            case "picture":
                $.ajax({
                    type: "post",
                    url:zmEditor.url.getPictureList,
                    dataType: "json",
                    data: {'fId' :fid,'keyWord':fBlogTitle},
                    success: function(e){
                        var a=e.data;
                        var listHtml='';
                        $.each(a,function (i,value) {
                            listHtml +='<li class="zm-choiceR-lists zm-choiceFile-check" data-imgid="'+a[i]._id+'" data-fName="'+a[i].fName+'"  data-fSrc="'+a[i].fPath+'" data-FileId="'+a[i].fFileId+'"><img class="zm-choiceR-listsimg" src="'+a[i].fPath+'" alt="">'
                                +'<input class="zm-choiceRlist1" value="" type="text" ><span class="zm-choiceRlist2">'+a[i].fName+'</span><span class="zm-choiceRadio-cheak zm-choiceRadio-cheakPosition fa"></span>'
                                +'<div class="zm-choiceRlist3"><span class="fa fa-search" onclick="zmChoiceRadio.choicePictureChangerBig(this)"></span>'
                                +'<span class="fa fa-pencil zm-chRlist-pencil"></span><span class="fa fa-trash zm-chRlist-trash" onclick="zmChoiceRadio.deleteFileTitle(this)" delete-title="picture1"></span>'
                                +'<span class="fa fa-download zm-chRlist-download" onclick="zmChoiceRadio.downLoadFile(this)" downLoad-type="picture"></span><span class="fa fa-history zm-chRlist-history"></span></div><div class="zm-choiceR-listWrap zm-choiceFile-listWrap">'
                                +'<div style="width: 126px;height: 126px;opacity: .5;background-color:#9ad5d3"></div></div></li>'
                        })
                        $(".zm-choiceRadio-spli").html($(listHtml));
                        var gg=$(".zm-choiceRadio-spli").find(".zm-choiceR-listsimg");
                        zmChoiceRadio.imgScaleMethod(gg)
                        if(obj=="-1"){
                            $(".zm-choiceRadio-spli").find(".zm-chRlist-history").css("display","block")
                        }
                        var c=$(".zm-choiceRadio-middleR").find(".zm-choiceR-lists").length;
                        $(".zm-choiceFile-allListNumber").html(c)
                        var g=$(".zm-choiceRadio-middleR").find(".fa-check").length;
                        $(".zm-choiceFile-allListCheckNumber").html(g)
                    }
                })
                break;
            case "video":
                $.ajax({
                    type: "post",
                    url:zmEditor.url.getVideoList,
                    dataType: "json",
                    data: {'fId' :fid,'keyWords':fBlogTitle,'pageIndex':'0','pageSize':'100000'},
                    success: function(e){
                        var a=e.data;
                        var listHtml='';
                        var d=[];
                        for(var i=0;i<a.length;i++){
                            var fNo=a[i].fNo;
                            var fId=a[i].fId;
                            var fPoster=a[i].fPoster;
                            var fFilmTime=zmChoiceRadio.formatMinute(a[i].fFilmLength);
                            var fName=a[i].fName;
                            listHtml +='<li class="zm-choiceV-lists zm-choiceFile-check" data-fid="'+fId+'" data-fName="'+fName+'" data-fNo="'+fNo+'" data-fPoster="'+fPoster+'"><div class="zm-choiceV-lisTop">'
                                +'<img class="zm-choiceV-listsImg" src="'+fPoster+'" alt=""><span class="zm-choiceRadio-cheak zm-choiceV-check fa"></span>'
                                +'<div class="zm-choiceVideoTime" style="opacity: 1;">'+fFilmTime+'</div><div class="zm-choiceRlist3" style="width: 200px">'
                                +'<span class="fa fa-pencil zm-chRlist-pencil"></span>'
                                +'<span class="fa fa-trash zm-chRlist-trash" onclick="zmChoiceRadio.deleteFileTitle(this)" delete-title="video1"></span>'
                                +'<span class="fa fa-download zm-chRlist-download" onclick="zmChoiceRadio.downLoadFile(this)" download-type="video"></span><span class="fa fa-history zm-chRlist-history"></span></div>'
                                +'<div class="zm-choiceV-listWrap zm-choiceFile-listWrap">'
                                +'<div style="width: 200px;height: 124px;opacity: .5;background-color:#9ad5d3"></div></div></div>'
                                +'<div class="zm-choiceV-lisBoot"><input class="zm-choiceRlist1" value="" type="text" >'
                                +'<span class="zm-choiceVlist2">'+fName+'</span></div></li>';
                            d[fId]=a[i];
                        }

                        $(".zm-choiceRadio-spli").html($(listHtml));

                        var gg=$(".zm-choiceRadio-spli").find(".zm-choiceV-listsImg");
                        zmChoiceRadio.videoScaleMethod(gg);
                        if(fid=="-1"){
                            $(".zm-choiceRadio-spli").find(".zm-chRlist-history").css("display","block")
                        }
                        var c=$(".zm-choiceRadio-middleR").find(".zm-choiceV-lists").length;
                        $(".zm-choiceFile-allListNumber").html(c)
                        var g=$(".zm-choiceRadio-middleR").find(".fa-check").length;
                        $(".zm-choiceFile-allListCheckNumber").html(g)
                    }
                })
                break;
            case "news":
                break;
            case "blogger":
                $.ajax({
                    type: "post",
                    url:zmEditor.url.getBloggerCategory,
                    dataType: "json",
                    data:{ "iDisplayStart":"0","iDisplayLength":"12","fBlogTitle":fBlogTitle},
                    success: function(e){
                        var a=e.aaData;
                        var listHtml='';
                        $.each(a,function (i,value) {
                            var timeStamp=a[i].fProcessStartTime;
                            var date = new Date(timeStamp);
                            var timeY = date.getFullYear() + '-';
                            var timeM = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
                            var timeD = date.getDate() + ' ';
                            var timeH = date.getHours() + ':';
                            var timem = date.getMinutes()>10? date.getMinutes():"0"+date.getMinutes() ;
                            var timeLeft=timeY+timeM+timeD;
                            var timeRight=timeH+timem;
                            var fImg=$(value.fBlogContent).find('img').eq(0).attr("src")? $(value.fBlogContent).find('img').eq(0).attr("src"):"imgs/carousel05.png";
                            listHtml +='<li class="zm-choiceBloggerList zm-choiceFile-check" data-fId="'+a[i].fId+'" data-fBlogCode="'+a[i].fBlogCode+'" data-fBlogTitle="'+a[i].fBlogTitle+'"     data-fCreateUserAccount="'+a[i].fCreateUserAccount+'" data-fid="'+a[i].fId+'" data-fid="'+a[i].fId+'">'
                                +'<div class="zm-choiceBloggerListLeft"><span class="zm-ChoiceNews-cheak fa"></span><img class="zm-choiceNewsImg" src="'+fImg+'" alt="">'
                                +'</div><div class="zm-choiceBloggerListRight"><div class="zm-choiceBloggerLrtop"><input class="zm-choiceNlist1" value="" type="text" >'
                                +'<div class="zm-choiceNews-ListTitle">'+a[i].fBlogTitle+'</div><span>品论（36）</span><span>|</span><span>收藏</span><span>|</span>'
                                +'<span>转发（15）</span><span>|</span><span>点赞（58）</span><span class="zm-choiceNewsListTime">'+timeLeft+timeRight+'</span></div><div class="zm-choiceBloggerLrboom">'
                                +'<div class="zm-choiceBloggerList-contentText">'+$(value.fBlogContent).text()+'</div>'
                                +'<span class="fa fa-trash" onclick="zmChoiceRadio.deleteFileTitle(this)" delete-title="blogger1"></span>'
                                +'<span class="fa fa-pencil zm-chNlist-pencil"></span></div></div></li>'
                        })
                        $(".zm-choiceFile-middleInner").html($(listHtml))
                        var c=$(".zm-choiceFile-middleInner").find(".zm-choiceBloggerList").length;
                        $(".zm-choiceFile-allListNumber").html(c)
                        var g=$("zm-choiceFile-middleInner").find(".fa-check").length;
                        $(".zm-choiceFile-allListCheckNumber").append($(g));
                    }
                })
                break;
            case "service":
                $.ajax({
                    type: "post",
                    url:zmEditor.url.getServiceList,
                    dataType: "json",
                    data: {'fId' :fid,'keyWorlds':fBlogTitle,'pageIndex':'1','pageSize':'100000'},
                    success: function(e){
                        var a=e.data;
                        console.log(a.length)
                        var listHtml='';
                        $.each(a,function (i,value) {
                            listHtml +=' <li class="zm-choiceGoodsList zm-choiceFile-check" data-fServiceId="'+a[i].fServiceId+'" data-fid="'+a[i].fId+'" data-fIdStr="'+a[i].fIdStr+'" data-fMainUrl="'+a[i].fMainUrl+'" data-fState="'+a[i].fState+'" data-fServiceSku="'+a[i].fServiceSku+'" data-fName="'+a[i].fName+'" data-fTagId="'+a[i].fTagId+'">'
                                +'<div class="zm-choiceNewsListLeft"><span class="zm-ChoiceNews-cheak fa"></span><img class="zm-choiceNewsImg" src="'+a[i].fMainImage+'" alt=""></div>'
                                +'<div class="zm-choiceGoodsListRight"><span style="width:100px">在线</span><span style="width:80px">'+a[i].fServiceSku+'</span><span style="width:110px">'+a[i].fServiceId+'</span>'
                                +'<span style="width:438px">'+a[i].fName+'</span></div></li>'
                        });
                            $(".zm-choiceGoodsSpli").html($(listHtml));
                        var c=$(".zm-choiceGoodsSpli").find(".zm-choiceGoodsList").length;
                        $(".zm-choiceFile-allListNumber").html(c)
                        var g=$(".zm-choiceRadio-middleR").find(".fa-check").length;
                        $(".zm-choiceFile-allListCheckNumber").html(g)

                    }
                })
                break;

        }
    },
    //视频移动到分类
    choiceToMOveVideo:function (fids,checkFirstId,checkSecondId) {
        $.ajax({
            type:"post",
            url:zmEditor.url.getVideoMoveToClassify,
            dataType: "json",
            data: {'fIds':fids,'fShopFirstCategory':checkFirstId,'fShopSecondCategory':checkSecondId},
            success:function (e) {
            }
        })
    },
    //新闻移动到分类
    choiceToMOveNews:function (fids,checkFirstId,checkSecondId) {
        $.ajax({
            type:"post",
            url:zmEditor.url.getNewsMoveToClassify,
            dataType: "json",
            data: {'newsId':fids,'firstCategoryId':checkFirstId,'secondCategoryId':checkSecondId},
            success:function (e) {
            }
        })
    },
    //商品移动到分类路由
    choiceToMOveGoods:function (oldTagId,newTagId,productId) {
        $.ajax({
            type:"post",
            url:zmEditor.url.getGoodsMoveToClassify,
            dataType: "json",
            data: {'oldTagId':oldTagId,'newTagId':newTagId,'ids':productId},
            success:function (e) {
            }
        })
    },
    //服务移动到分类路由
    choiceToMOveService:function (serviceId,oldCATId,newCATId) {
        $.ajax({
            type:"post",
            url:zmEditor.url.getServiceMoveToClassify,
            dataType: "json",
            data: {'serviceId':serviceId,'oldCATId':oldCATId,'newCATId':newCATId},
            success:function (e) {
            }
        })
    },
    choiceRadiodiyiban: function (b,abc) {
        var flage=b;
        zmEditor.dialog.loading("html/href/choiceRadio.html", function (e) {
            //ajax获取类目列表
            $.ajax({
                type: "post",
                url:'http://192.168.0.132:8880/zm_business_basic_webapp/imageSource/allCategory',
                dataType: "json",
                success: function(e){
                    var b=e.data;
                    var c='';
                    $.each(b, function(k,value) {
                        var h;
                        var d='<div class="zm-choiceFile-categoryStyle" data-fid="'+b[k].fId+'" data-fName="'+b[k].fName+'">'
                            +'<span class="zm-choiceFile-children-toggle" onclick="zmChoiceRadio.childrenToggle(this)">+</span>'
                            +'<span class="zm-choiceRadio-categoryStyle"></span>'
                            +'<input type="text" value="'+b[k].fName+'" readonly>'
                            +'<div class="zm-choiceFile-tipSet">'
                            +'<div class="zm-choiceFile-tipSet-con">'
                            +'<i class="tipSet-con-dot"></i>'
                            +'<div class="tipSet-con-list tipSet-con-list-add newAdd-Or-delete">'
                            +'<i class="add"></i>'
                            +' 添加子类目'
                            +'</div>'
                            +'<div class="tipSet-con-list tipSet-con-list-rename">'
                            +'<i class="rename"></i>'
                            +'重命名'
                            +'</div>'
                            +'<div class="tipSet-con-list tipSet-con-list-delete4 delete-Leimu">'
                            +'<i class="delete"></i>'
                            +'删除'
                            +'</div>'

                            +'</div>'
                            +'</div>'
                            +'</div>'  ;
                        if(b[k].childrenList.length>0){
                            var e='';
                            $.each(value.childrenList,function(i,o){
                                e+='<div class="zm-choiceFile-categoryStyle" data-fid="'+value.childrenList[i].fId+'" data-fParentId="'+value.childrenList[i].fParentId+'" data-fName="'+value.childrenList[i].fName+'">'
                                    +' <input type="text"value="'+value.childrenList[i].fName+'" readonly>'
                                    +' <div class="zm-choiceFile-tipSet">'
                                    +' <div class="zm-choiceFile-tipSet-con">'
                                    +' <i class="tipSet-con-dot"></i>'
                                    +'<div class="tipSet-con-list tipSet-con-list-rename">'
                                    +' <i class="rename"></i>重命名'
                                    +'</div>'
                                    +' <div class="tipSet-con-list tipSet-con-list-delete2 delete-Leimu">'
                                    +' <i class="delete"></i>删除'
                                    +'</div>'
                                    +' </div>'
                                    +' </div></div>'
                            })
                            var f='<div class="choiceFilel2-box">'+e+'</div>';
                            h='<div class="choiceFilel1-box zm-choiceFile-categroyStyle-wrap">'+d+f+'</div>'
                        }else{
                            h='<div class="choiceFilel1-box zm-choiceFile-categroyStyle-wrap">'+d+'<div class="choiceFilel2-box"></div></div>'
                        }
                        c+=h;

                    });
                    var ch='<div class="zm-choiceFile-category"><span class="zm-choiceRadio-categoryTop">音频类目</span></div>'+c+' <div class="zm-choiceFile-trash" data-fid="-1"><span style="color:#49b1a9;font-size: 16px;" class="fa fa-trash"></span>'
                        +'<span style="font-weight: bold">回收站</span></div><div style="width: 200px;height: 120px"></div>'
                    $(".zm-choiceRadio-middleL").html(ch)
                    //点击类目添加背景样式
                    $(".zm-choiceFile-categoryStyle").each(function () {
                        if($(this).attr("data-fid")=="0"||$(this).attr("data-fid")=="1"){
                            $(this).find(".zm-choiceFile-children-toggle").remove();
                            $(this).find(".zm-choiceFile-tipSet").remove();
                            if($(this).attr("data-fid")=="0"){
                                $(this).find(".zm-chiceInput-blur").addClass("zm-choicePicBackgroundColor");
                                $(this).addClass("zm-choicePicBackgroundColor")
                            }

                        }
                    })
                    //点击音频列表修改名称
                    $(".zm-chRlist-pencil").on("click",function () {
                        console.log(1)
                        $(this).closest(".zm-choiceR-lists").find(".zm-choiceRlist1").css("display","block")
                    })
                    $(".zm-choiceRlist1").on("keyup",function () {
                        $(this).closest(".zm-choiceR-lists").find(".zm-choiceRlist2").html($(this).val())
                    })
                    //首次获取图片列表
                    zmChoiceFile.getajaxListPic(0);
                    //对列表图片重命名
                    $(document).off("blur",".zm-choiceRlist1");
                    $(document).on("blur",".zm-choiceRlist1",function () {
                        $(this).css("display","none");
                        var _id=$(this).closest(".zm-radioList").attr("data-imgid")
                        var fName=$(this).closest(".zm-radioList").find(".zm-radioList1-2").text()
                        zmChoiceFile.imgTochangeName(_id,fName)
                    })

                    //点击类目获取相应的图片列表以及导航按钮
                    $(document).on("click",".zm-chicePicimg",function () {
                        var _this=$(this);
                        var a=_this.attr("data-fid");
                        $.each($(document).find(".zm-chicePicimg"),function (i,value) {
                            $(value).find(".level-con").removeClass("zm-choicePicBackgroundColor")
                            $(value).find(".level-con input").removeClass("zm-choicePicBackgroundColor")
                        })

                        _this.find(".level-con").addClass("zm-choicePicBackgroundColor")
                        _this.find(".level-con input").addClass("zm-choicePicBackgroundColor")
                        zmChoiceFile.getajaxListPic(a);
                    })
                    //删除类目
                    $(document).off("click",".delete-Leimu")
                    $(document).on("click",".delete-Leimu",function () {
                        var _this=$(this);
                        var fId;
                        if( _this.closest(".zm-chicePicimg").attr("data-fid")){
                            fId=_this.closest(".zm-chicePicimg").attr("data-fid");
                        }else{
                            fId=null;
                        }
                        zmChoiceFile.deleteLimu(fId)

                    })
                    //失焦时发送增加和修改类目的参数
                    $(document).off("blur",".zm-chiceInput-blur")
                    $(document).on("blur",".zm-chiceInput-blur",function () {
                        var _this=$(this);
                        var fId,fName,fParentId;
                        if(_this.closest(".zm-chicePicimg").attr("data-fid")){
                            fId=_this.closest(".zm-chicePicimg").attr("data-fid");
                        }else{
                            fId=null;
                        }
                        if( _this.closest(".zm-chicePicimg").parent(".level2-box").prev().attr("data-fid")){
                            fParentId=_this.closest(".zm-chicePicimg").parent(".level2-box").prev().attr("data-fid");
                        }else{
                            fParentId=null;
                        }
                        fName=_this.val();
                        if(!_this.attr("readonly")){
                            console.log(fId,fName,fParentId)
                            zmChoiceFile.newAddRevise(fId,fName,fParentId,function(id){
                                $(document).find(".zm-chicePicimg").each(function () {
                                    var _this=$(this);
                                    if(typeof(_this.attr("data-fid"))=="undefined"){
                                        _this.attr("data-fid",id);
                                    }
                                })

                            })
                        };

                    });

                    //清空回收站
                    $(document).on("click",".zm-choicePic-clearTrash",function () {
                        zmChoiceFile.emptyTrash()
                        $(document).find(".zm-radioSpli").html("");
                    })
                    //批量还原
                    $(document).on("click",".zm-radioRtbtn3",function () {
                        var imgLIscheak=[];
                        // console.log($(".zm-radioMiddleRight").find(".zm-radioList2").attr("checked",true))
                        $(".zm-radioMiddleRight").find(".zm-radioList2").each(function () {
                            //console.log(value.checked())
                            var _that=$(this);
                            if(_that.is(':checked')){
                                imgLIscheak.push(_that.closest(".zm-radioList").attr("data-imgid"))
                            }
                        })
                        var imageIds=imgLIscheak.join(",")
                        zmChoiceFile.batchRestore(imageIds)
                    })
                    //单个还原
                    $(document).on("click",".zm-repeat",function () {
                        var _this=$(this);

                        zmChoiceFile.batchRestore(imageIds)
                    })

                    //选择音频弹出框标题
                    $(".zm-dialog-title").html("选择音频文件")
                    //选择并添加按钮时判断单选还是多选
                    if(flage&&flage=='1'){
                        $(".zm-radioSpli").on("click",".zm-radioList2",function () {
                            $(this).parents(".zm-radioList").siblings(".zm-radioList").find(".zm-radioList2").removeAttr("checked");
                        })
                    }
                    //radio.js
                    $.fn.zmchoiceRadio()

                    //向图片列表中增加拖放图片功能
                },
                error:function(){
                    console.error("出错了")
                }
            })
        })
        if(abc){
            abc();
        }
    },
    //拖拽文件至盒子
    dragLocalFilesUpdate: function (ele, cb) {
        $(document).on({
            dragleave: function (e) {
                e.preventDefault();
            }, drop: function (e) {
                e.preventDefault();
            },
            dragenter: function (e) {
                e.preventDefault();
            }, dragover: function (e) {
                e.preventDefault();
            }
        });
        var box = document.getElementById(ele);
        box.addEventListener("drop", function (e) {
            e.preventDefault();
            var filesArr = [];
            var fileList = e.dataTransfer.files;
            console.log(fileList)
            console.log(fileList.length)
            if (fileList.length == 0) {
                return false;
            }
            for (var i = 0; i < fileList.length; i++) {
                if (fileList[i].type.indexOf('application') != -1 ) {
                    console.log(fileList[i])
                    filesArr.push(fileList[i])
                }
            }
            if (cb) {
                cb(filesArr);
            }
        }, false);
    },
    //拖拽上传图片ele:string图片盒子ID、cb回调函数(data)
    // data:array[imgTitle:图片名称,imgUrl:图片名称路径,fileList:图片全部信息]
    dragLocalImgUpdate: function (ele, cb) {
        $(document).on({
            dragleave: function (e) {
                e.preventDefault();
            }, drop: function (e) {
                e.preventDefault();
            },
            dragenter: function (e) {
                e.preventDefault();
            }, dragover: function (e) {
                e.preventDefault();
            }
        });
        var box = document.getElementById(ele);
        box.addEventListener("drop", function (e) {
            e.preventDefault();
            var imgArr = [];
            var fileList = e.dataTransfer.files;
            if (fileList.length == 0) {
                return false;
            }
            for (var i = 0; i < fileList.length; i++) {
                if (fileList[i].type.indexOf('image') != -1 && Math.floor((fileList[i].size) / 1048576) < 5) {
                    imgArr.push({
                        imgUrl: window.URL.createObjectURL(fileList[i]),
                        imgTitle: fileList[i].name,
                        fileList: fileList[i]
                    })
                }
            }
            if (cb) {
                cb(imgArr);
            }
        }, false);
    },
    //选择图片页面图片等比缩放不失真的方法
    imgScaleMethod:function (imgTarget) {
        var a=imgTarget;
        $.each(a,function () {
            var _this=$(this);
            var realWidth;
            var realHeight;
            $('<img>').attr("src",_this.attr("src")).load(function() {
                 realWidth = this.width;
                 realHeight = this.height;
                 _this.closest(".zm-choiceR-lists").attr("data-width", realWidth);
                _this.closest(".zm-choiceR-lists").attr("data-height", realHeight);
                if(realWidth/realHeight>=1){
                    _this.css("width","100%")
                }else{
                    _this.css("height","100%")
                }
            });
        })
    },
    videoScaleMethod:function (imgTarget) {
        var a=imgTarget;
        $.each(a,function () {
            var _this=$(this);
            var realWidth;
            var realHeight;
            var scale;
            $('<img>').attr("src",_this.attr("src")).load(function() {
                realWidth = this.width;
                realHeight = this.height;
                scale=realWidth/realHeight;
                //1.62
                if(scale<1.54){
                    _this.css("height","100%");
                }else{
                    _this.css("width","100%");
                }
            });
        })
    },
    //上传图片接口
    getuploadImage:function (form,fid) {
        $.ajax({
            type:"post",
            url:zmEditor.url.getPictureUploadImg,
            processData:false,//对象数组转换为字符串
            contentType:false,//编码
            cache:false,//缓存
            data:form,
            async:true,
            success:function(data){
                //console.log(data)
                zmChoiceRadio.getAjaxPictureList(fid,"",0,24);
            }
        })
    },
    //拖拽图片类目接口
    getPictureDragClassifyToMove:function (pictureClassify) {
        $.ajax({
            type:"post",
            url:zmEditor.url.getPictureDragMoveClassify,
            dataType: "json",
            data: {'idArr':pictureClassify},
            success:function (e) {
            }
        })
    },
    //拖拽图片类目时向后台传数据
    getChoiceFileDragClassify:function (b,c) {
        var a=b;
        var flag=c;
        var alls;
        var pictureClassify=[];
        var serviceClassy=[];
        var pictureClassifyImg;
        if(a.hasClass("choiceFile-box11")){
            alls=$(".choiceFile-box11");
            $.each(alls,function () {
                var _this=$(this).children(".zm-choiceFile-categoryStyle").attr("data-fid");
                pictureClassify.push(_this);
                //serviceClassy.push(parseInt(_this));
            })
            pictureClassifyImg=pictureClassify.join(",");

        }else{
            alls=a.closest(".choiceFile-box12").find(".zm-choiceFile-categoryStyle");
            $.each(alls,function () {
                var _this=$(this).attr("data-fid");
                pictureClassify.push(_this);
               // serviceClassy.push(parseInt(_this));
            })
            pictureClassifyImg=pictureClassify.join(",");
        }
        console.log(pictureClassifyImg,serviceClassy)
        if(pictureClassify.length>1){
            switch (flag){
                case "picture":
                    zmChoiceRadio.getPictureDragClassifyToMove(pictureClassifyImg);
                    break;
                case "video":
                    zmChoiceRadio.getVideoDragClassifyToMove(pictureClassifyImg);
                    break;
                case "service":
                    zmChoiceRadio.getServiceDragClassifyToMove(pictureClassifyImg);
                    break;
            }
        }
    },
    //拖拽视频类目接口
    getVideoDragClassifyToMove:function (pictureClassify) {
        $.ajax({
            type:"post",
            url:zmEditor.url.getVideoDragMoveClassify,
            dataType: "json",
            data: {'idArr':pictureClassify},
            success:function (e) {
            }
        })
    },
    //拖拽服务类目接口
    getServiceDragClassifyToMove:function (pictureClassify) {
        //pictureClassify=JSON.stringify(pictureClassify);
        $.ajax({
            type:"post",
            url:zmEditor.url.getServiceDragMoveClassify,
            dataType: "json",
            data: {'idArr':pictureClassify},
            success:function (e) {
            }
        })
    },
    //选择专辑页面的条件筛选接口
    choiceConditionOption:function(e){
        var _this=$(e);
        var val = _this.val();
        $.ajax({
            type:"post",
            url:zmEditor.url.getAlbumOptionList,
            dataType: "json",
            data: {'fStageName':val},
            success:function (data) {
                zmChoiceRadio.choiceConditionOptionCallBck(data)
            }
        })
},
    //选择音频页面的条件筛选接口
    choiceRadioConditionOption:function(e){
        var _this=$(e);
        var val = _this.val();
        $.ajax({
            type:"post",
            url:zmEditor.url.getAlbumOptionList,
            dataType: "json",
            data: {'fStageName':val},
            success:function (data) {
                zmChoiceRadio.choiceRadioConditionOptionCallBck(data)
            }
        })
    },
    //选择专辑页面的条件筛选
    choiceConditionOptionCallBck:function (data) {
        var str="";
        for(var i=0;i<data.length;i++){
            str += "<div onclick='zmChoiceRadio.choiceConditionOptionsList(this)'>"+data[i]+"</div>";
        }
        $(".zm-choiceFile-optionsList").html(str);
        $(".zm-choiceFile-optionsList").css("display","block");
    },
    //选择专辑页面的条件筛选
    choiceRadioConditionOptionCallBck:function (data) {
        var str="";
        for(var i=0;i<data.length;i++){
            str += "<div onclick='zmChoiceRadio.choiceRadioConditionOptionsList(this)'>"+data[i]+"</div>";
        }
        $(".zm-choiceFile-optionsList").html(str);
        $(".zm-choiceFile-optionsList").css("display","block");
    },
    //专辑条件筛选
    choiceConditionOptionsList:function (e) {
        var _this=$(e);
        _this.closest(".zm-choiceFile-optionsList").prev().val( _this.html());
        _this.closest(".zm-choiceFile-optionsList").css("display","none");
        zmChoiceRadio.getChoiceAlbumOptionAlbumList(e)
    },
    //音频条件筛选
    choiceRadioConditionOptionsList:function (e) {
        var _this=$(e);
        _this.closest(".zm-choiceFile-optionsList").prev().val( _this.html());
        _this.closest(".zm-choiceFile-optionsList").css("display","none");
        zmChoiceRadio.getChoiceRAdioOptionAlbumList(e)
    },
    //获取字符串长度（汉字算两个字符，字母数字算一个）
    getByteLen:function (val) {
        var len = 0;
        for (var i = 0; i < val.length; i++) {
            var a = val.charAt(i);
            if (a.match(/[^\x00-\xff]/ig) != null) {
                len += 2;
            }
            else {
                len += 1;
            }
        }
        return len;
    },
    //选择专辑的条件筛选获取专辑列表接口
    getChoiceAlbumOptionAlbumList:function (e) {
        var _this=$(e);
        var val = _this.val()|| _this.html();
        console.log(val)
        $.ajax({
            type:"post",
            url:zmEditor.url.getAlbumList,
            dataType: "json",
            data: {'playStart':'0','playLength':'32','fStageName':val},
            success:function (e) {
                var a=e.aaData;
                var listHtml='';
                $.each(a,function (i,value) {
                    listHtml +='<li class="zm-choiceR-lists zm-choiceA-list zm-choiceFile-check" data-fid="'+a[i].fId+'" data-fname="'+a[i].fName+'" data-fcoverUrl="'+a[i].fCoverUrl+'"><img class="zm-choiceR-listsimg" src="'+a[i].fCoverUrl+'" alt="">'
                        +'<input class="zm-choiceRlist1" value="" type="text" ><div class="zm-choiceRlist4">'
                        +'<span class="zm-choiceRlist2" style="color: #FFFFFF">'+a[i].fName+'</span></div>'
                        +'<span class="zm-choiceRadio-cheak zm-choiceRadio-cheakPosition fa"></span><div class="zm-choiceRlist3">'
                        +'<span class="fa fa-pencil zm-chRlist-pencil"></span><span class="fa fa-trash zm-chRlist-trash" onclick="zmChoiceRadio.deleteFileTitle(this)" delete-title="album1"></span>'
                        +'<span class="fa fa-download zm-chRlist-download"></span><span class="fa fa-history zm-chRlist-history"></span></div>'
                        +'<div class="zm-choiceR-listWrap zm-choiceFile-listWrap"><div style="width: 126px;height: 126px;opacity: .5;background-color:#9ad5d3"></div>'
                        +'</div></li>'
                })
                    $(".zm-choiceFile-middleInner").html($(listHtml))
                var c=$(".zm-choiceFile-middleInner").find(".zm-choiceBloggerList").length;
                $(".zm-choiceFile-allListNumber").html(c);
                var g=$("zm-choiceFile-middleInner").find(".fa-check").length;
                $(".zm-choiceFile-allListCheckNumber").append($(g));
                var gg=$(".zm-choiceFile-wrap").find(".zm-choiceR-listsimg");
                zmChoiceRadio.imgScaleMethod(gg);
            }
        })
    },
    //选择音频的条件筛选获取音频列表接口
    getChoiceRAdioOptionAlbumList:function (e) {
        var _this=$(e);
        var val = _this.val()|| _this.html();
        console.log(val);
        $.ajax({
            type: "post",
            url:zmEditor.url.getRadioList,
            dataType: "json",
            data: {'fStageName' :val},
            success: function(e){
                var a=e.data;
                var listHtml='';
                $.each(a,function (i,value) {
                    listHtml +='<li class="zm-choiceR-lists zm-choiceFile-check" data-fid="'+a[i].fId+'" data-fName="'+a[i].fName+'" data-fCoverUrl="'+a[i].fCoverUrl+'" data-fCode="'+a[i].fCode+'" data-fMusicSrc="'+a[i].fMusicSrc+'" data-creator="'+a[i].creator+'" ><img class="zm-choiceR-listsimg" src="'+a[i].fCoverUrl+'"  alt="">'
                        +'<input class="zm-choiceRlist1" value="" type="text" data-fid="'+a[i].fId+'" ><span class="zm-choiceRlist2">'+a[i].fName+'</span><span class="zm-choiceRadio-cheak zm-choiceRadio-cheakPosition fa"></span>'
                        +'<div class="zm-choiceRlist3">'
                        +'<span class="fa fa-pencil zm-chRlist-pencil"></span><span class="fa fa-trash zm-chRlist-trash" onclick="zmChoiceRadio.deleteFileTitle(this)" delete-title="radio1"></span>'
                        +'<span class="fa fa-download zm-chRlist-download"></span><span class="fa fa-history zm-chRlist-history"></span></div><div class="zm-choiceR-listWrap zm-choiceFile-listWrap">'
                        +'<div style="width: 126px;height: 126px;opacity: .5;background-color:#9ad5d3"></div></div></li>'
                });
                $(".zm-choiceRadio-spli").html($(listHtml));
                if(obj=="-1"){
                    $(".zm-choiceRadio-spli").find(".zm-chRlist-history").css("display","block");
                };
                var c=$(".zm-choiceRadio-middleR").find(".zm-choiceR-lists").length;
                $(".zm-choiceFile-allListNumber").html(c);
                var g=$(".zm-choiceRadio-middleR").find(".fa-check").length;
                $(".zm-choiceFile-allListCheckNumber").html(g);
                var gg=$(".zm-choiceFile-wrap").find(".zm-choiceR-listsimg");
                zmChoiceRadio.imgScaleMethod(gg);
            }
        });
    },
    //选择视频列表的时间转换
    formatMinute:function (n) {
        var h = parseInt(n / 60);
        var m = n % 60;
        if(h < 10){
            h = '0' + h;
        }
        if(m < 10){
            m = '0' + m
        }
        return h + ':' + m
    }
}
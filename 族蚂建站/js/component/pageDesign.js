zmEditor.component.setItems.pageDesign = function(ele){
    /******************** 公共元素 ********************/
    var bg = $(".zm-component-bg");
    var target = ele;
    var bg_BGC = bg.find(".zm-bg-full-BGC");
    var bg_IV = bg.find(".zm-bg-full-IV");
    var bg_CC = bg.find(".zm-bg-full-CC");
    var repository = target.find(".zm-edit-pageFull-tab-repository");
    var setOption = target.find(".zm-edit-pageFull-tab-setting");
    var ul = target.find(".repository-list");
    var li = ul.children("li");
    var video = bg_IV.find("video");
    var SE = target.find(".scrollEffect");
    var PE = target.find(".playerEffect");
    /*********** 初始化 **********/
    setTimeout(function(){
        $(".zm-edit-pageFull").closest(".zm-dialog-box").children(".zm-dialog-bg").remove();
    },100);
    repository.append(zmEditor.component.setItems.templateELement.resourceHTML);


    $(".coverColor").append(zmEditor.component.setItems.slider(bg_CC,{title: "覆盖颜色",style: "noTab_color",isColor: true,param: "backgroundColor"}));
    $(".bgColor").append(zmEditor.component.setItems.slider(bg_BGC,{title: "背景底色",style: "noTab_color",isColor: true,param: "backgroundColor"}));
    /******************** 结束 *********************/
    /******************** 预览窗 *******************/
    var prev_bg = target.find(".preview-bg");
    var prev_set_wrap = target.find(".preview-setting");
    var prev_cho_wrap = target.find(".preview-choice");
    var btn_set = target.find(".setting-set");
    var btn_sty = target.find(".styles");
    var btn_ply = target.find(".setting-play");
    var btn_color = target.find(".preview-choice-color");
    var btn_image = target.find(".preview-choice-image");
    var btn_video = target.find(".preview-choice-video");
    var prev_a = prev_bg.find(".prev-a");
    var prev_b = prev_bg.find(".prev-b");
    var prev_c = prev_bg.find(".prev-c");
    /********** 初始化 **********/
    btn_color.append(zmEditor.component.setItems.strings.color(bg_BGC,{style: "mini",param: "backgroundColor"}));
    prev_a.css("backgroundColor",bg_BGC.css("backgroundColor"));
    prev_b.css("backgroundImage",bg_IV.css("backgroundImage"));
    prev_c.css("backgroundColor",bg_CC.css("backgroundColor"));
    /********** 事件 **********/
    btn_set.on("click",function(){
        $(this).parent().hide();
        btn_sty.show();
        prev_cho_wrap.hide();
        repository.slideUp(200);
        setOption.slideDown(200);
        if(bg.attr("data-type") == "video"){
            SE.hide();
            PE.show();
        }else{
            SE.show();
            PE.hide();
        }
    });
    btn_sty.on("click",function(){
        $(this).hide();
        btn_set.parent().show();
        prev_cho_wrap.show();
        setOption.slideUp(200);
        repository.slideDown(200);
    });
    btn_color.on("click",function(){
        prev_set_wrap.hide();
        bg_BGC.css("zIndex","4");
        prev_a.css("zIndex","4");
        bg.attr("data-type","color");
        var prevColor = setInterval(function(){
            var _color = bg_BGC.css("backgroundColor");
            prev_a.css("backgroundColor",_color);
            if(btn_color.find("#content").css("display") == "none"){
                clearInterval(prevColor);
            }
        },100);
    });
    btn_image.on("click",function(){
        prev_set_wrap.show();
        bg_BGC.css("zIndex","1");
        prev_a.css("zIndex","1");
        zmChoiceRadio.choicePicture({multiple: 'false',callBack: image_return});
    });
    btn_video.on("click",function(){
        prev_set_wrap.show();
        bg_BGC.css("zIndex","1");
        prev_a.css("zIndex","1");
        zmChoiceRadio.choiceVideo({multiple: 'false',callBack: video_return});
    });
    btn_ply.on("click",function(){
        if(video[0].paused){
            video[0].play();
        }
    });
    /********** 函数 **********/
    /******************** 结束 *******************/

    /******************** 资源库 *******************/
    /********** 初始化 **********/

    /********** 事件 ***********/

    repository.on("click","li",function(){
        var _this = $(this);
        prev_set_wrap.show();
        bg_BGC.css("zIndex","1");
        prev_a.css("zIndex","1");
        _this.addClass("active").siblings().removeClass("active");
        var _url = _this.attr("data-prev-bg");
        var _type = _this.attr("data-prev-type");
        switch(_type){
            case "video":
                btn_ply.show();
                video.attr("src",_url);
                prev_b.css("backgroundImage",_this.css("backgroundImage"));
                bg.attr("data-type","video");
                break;
            case "image":
                btn_ply.hide();
                video.removeAttr("src");
                bg_IV.css("backgroundImage",_url);
                prev_b.css("backgroundImage",_url);
                bg.attr("data-type","image");

                break;
            default:
                btn_ply.hide();
                video.removeAttr("src");
                bg_IV.css("backgroundImage",_url);
                prev_b.css("backgroundImage",_url);
                bg.attr("data-type","image");

                break;
        }
    });
    // li.on("mouseenter mouseleave",function(e){
    //     var _this = $(this);
    //     var _url,pop;
    //     if(e.type == "mouseenter"){
    //         var _type = _this.attr("data-bg-type");
    //         var x = e.clientX;
    //         var y = e.clientY;
    //         var l = e.offsetX;
    //         var t = e.offsetY;
    //         var w = _this.width();
    //         var h = _this.height();
    //         var prev_x = x - l + w + 15;
    //         var prev_y = y - t - 65;
    //         if(_type == "video"){
    //             _url = _this.attr("data-url");
    //             pop = previewPane_video();
    //             pop.find("video").attr("src",_url);
    //             pop.css({left: prev_x,top: prev_y,zIndex: 1001});
    //             $("body").append(pop);
    //
    //         }else{
    //             _url = _this.children().css("backgroundImage");
    //             pop = previewPane_image();
    //             pop.find("div:first-child").css("backgroundImage",_url);
    //             pop.css({left: prev_x,top: prev_y,zIndex: 1001});
    //             $("body").append(pop);
    //         }
    //     }
    //     if(e.type == "mouseleave"){
    //         $("body").find(".prev_pop_video").remove();
    //         $("body").find(".prev_pop_img").remove();
    //     }
    // });
    /******************** 结束 *******************/

    /******************** 纹理相关 *******************/
    var veinList = target.find(".coverVein-styles").children("span");
    var depth = target.find(".coverVein-level span");
    /********** 初始化 **********/
    veinList.eq(bg_CC.attr("data-vein")).addClass("active");
    if(bg_CC.attr("data-level") == "dark"){
        depth.eq(1).addClass("active");
    }else{
        depth.eq(0).addClass("active");
    }
    /********** 事 件 **********/
    veinList.on("click",function(){
        var _this = $(this);
        var _index = veinList.index(_this);
        veinList.removeClass("active");
        _this.addClass("active");
        bg_CC.attr("data-vein",_index);
        veinSwitch(bg_CC);
    });
    depth.on("click",function(){
        var _this = $(this);
        _this.addClass("active").siblings().removeClass("active");
        if(_this.hasClass("light")){
            bg_CC.attr("data-level","light");
        }else{
            bg_CC.attr("data-level","dark");
        }
        veinSwitch(bg_CC);
    });
    /********* 功能函数 **********/
    //切换纹理函数
    function veinSwitch(ele){
        var level = ele.attr("data-level");
        var index = ele.attr("data-vein");
        console.log(level,index,$(this));
        if(level == "dark"){
            switch(index){
                case "0":
                    ele.css("background-image","none");
                    break;
                case "1":
                    ele.css("background-image","url(http://192.168.0.122/image/bg/dark_01.png");
                    break;
                case "2":
                    ele.css("backgroundImage","url(http://192.168.0.122/image/bg/dark_02.png");
                    break;
                case "3":
                    ele.css("backgroundImage","url(http://192.168.0.122/image/bg/dark_03.png");
                    break;
                case "4":
                    ele.css("backgroundImage","url(http://192.168.0.122/image/bg/dark_04.png");
                    break;
                case "5":
                    ele.css("backgroundImage","url(http://192.168.0.122/image/bg/dark_05.png");
                    break;
                case "6":
                    ele.css("backgroundImage","url(http://192.168.0.122/image/bg/dark_06.png");
                    break;
                case "7":
                    ele.css("backgroundImage","url(http://192.168.0.122/image/bg/dark_07.png");
                    break;
            }
        }else{
            switch(index){
                case "0":
                    ele.css("backgroundImage","none");
                    break;
                case "1":
                    ele.css("background-image","url(http://192.168.0.122/image/bg/light_01.png)");
                    break;
                case "2":
                    ele.css("background-image","url(http://192.168.0.122/image/bg/light_02.png)");
                    break;
                case "3":
                    ele.css("backgroundImage","url(http://192.168.0.122/image/bg/light_03.png)");
                    break;
                case "4":
                    ele.css("backgroundImage","url(http://192.168.0.122/image/bg/light_04.png)");
                    break;
                case "5":
                    ele.css("backgroundImage","url(http://192.168.0.122/image/bg/light_05.png)");
                    break;
                case "6":
                    ele.css("backgroundImage","url(http://192.168.0.122/image/bg/light_06.png)");
                    break;
                case "7":
                    ele.css("backgroundImage","url(http://192.168.0.122/image/bg/light_07.png)");
                    break;
            }
        }
    }
    /******************** 纹理结束 *******************/

    /******************** 滚动效果 *******************/
    var img_roll = SE.find(".scrollNone");
    var img_fixed = SE.find(".scrollFixed");
    var cycleView = $(".zm-bg-cycle");
    /********** 初始化 **********/
    if(bg.attr("data-scroll-type") == "roll"){
        img_roll.addClass("active");
    }else{
        img_fixed.addClass("active");
    }

    /********** 事件 **********/
    img_fixed.on("click",function(){
        var _this = $(this);
        _this.addClass("active");
        img_roll.removeClass("active");
        bg.attr("data-scroll-type","fixed");

        var _url = cycleView.css("backgroundImage");
        bg_IV.css({"backgroundImage": _url,"backgroundSize": "auto"});
        cycleView.css({"backgroundImage": "none"});


    });
    img_roll.on("click",function(){
        var _this = $(this);
        _this.addClass("active");
        img_fixed.removeClass("active");
        bg.attr("data-scroll-type","roll");
        var _url = bg_IV.css("backgroundImage");
        cycleView.css({"backgroundImage": _url,"backgroundSize": "cover"});
        bg_IV.css("backgroundImage","none");
    });
    /******************** 滚动结束 *******************/
    /******************** 播放效果 *******************/
    var playSpeed = target.find(".speed-list");
    var speedBtn = playSpeed.children("div");
    var speedUl = playSpeed.find("ul");
    var speedLi = speedUl.find("li");
    var speedIcon = playSpeed.find(".icon");
    var label = target.find(".playerEffect-loop").find("label");
    /********** 初始化 **********/
    switch(video[0].playbackRate){
        case 0.25:
            speedBtn.children("span").html("0.25倍速播放");
            break;
        case 0.50:
            speedBtn.children("span").html("0.50倍速播放");
            break;
        case 1.00:
            speedBtn.children("span").html("正常播放");
            break;
        case 1.25:
            speedBtn.children("span").html("1.25倍速播放");
            break;
        case 1.50:
            speedBtn.children("span").html("1.50倍数播放");
            break;
        case 2.00:
            speedBtn.children("span").html("2.00倍数播放");
            break;
    }
    if(video.attr("loop") == "loop"){
        label.addClass("zm-switch-box-on");
        label.children().children().removeClass("fa-minus").addClass("fa-check");
    }else{
        label.removeClass("zm-switch-box-on");
    }
    /********** 事 件 **********/
    speedBtn.on("click",function(){
        speedUl.stop().slideToggle();
        speedIcon.toggleClass("fa-angle-down fa-angle-up");
    });
    speedLi.on("click",function(){
        var _this = $(this);
        var _index = speedLi.index(_this);
        var val = _this.text();
        speedBtn.children("span").html(val);
        switch(_index){
            case 0:
                video[0].playbackRate = 0.25;
                break;
            case 1:
                video[0].playbackRate = 0.50;
                break;
            case 2:
                video[0].playbackRate = 1.00;
                break;
            case 3:
                video[0].playbackRate = 1.25;
                break;
            case 4:
                video[0].playbackRate = 1.50;
                break;
            case 5:
                video[0].playbackRate = 2.00;
                break;
        }
        speedUl.slideUp();
    });
    label.on("click",function(){
        var _this = $(this);
        if(_this.hasClass("zm-switch-box-on")){
            video.removeAttr("loop");
        }else{
            video.attr("loop","loop");
            video[0].play();
        }
    });
    /******************** 结束 ********************/

    function image_return(data){
        btn_ply.hide();
        bg.attr("data-type","image");
        bg_IV.css("backgroundImage",'url('+data[0].fCoverUrl+')');
        prev_b.css("backgroundImage",'url('+data[0].fCoverUrl+')');

        console.log(data);
    }
    function video_return(data){
        btn_ply.show();
        bg.attr("data-type","video");
        console.log(data);
    }
}
/**
 * Created by yerui on 2017/3/10.
 */

zmEditor.component.banner = {
    setting:function(box){
        var iSelected = zmEditor.component.nowEdit(),datatType,config1;
        datatType=iSelected.find(".zm-component-banner").attr("data-type-banner");
        if(datatType=="video"){
             config1 =[
                {type:'bannerStyleChange',element:iSelected,flag:{template:zmEditor.component.setItems.templateELement.StyleChange}},
                {type:'bannerController',element:iSelected,flag:{className:'.banner.Resize',crossORvertical:"cross"}},
                // {type: "fugaiwenli",element: iSelected,flag: {template:zmEditor.component.setItems.templateELement.fiGaiWenli}},
                {type: "vein",element: iSelected.find(".zm-bg-banner-vein")},
                {type: "slider",element: iSelected,flag: {title: "背景颜色",style: "noTab_color",isColor: true,param: "backgroundColor",goal: ".zm-component-banner>.zm-bg-banner-BGC"}},
                {type: "slider",element: iSelected,flag: {title: "覆盖颜色",style: "noTab_color",isColor: true,param: "backgroundColor",goal: ".zm-component-banner>.zm-bg-banner-vein"}},
                {type: "PlaybackEffect",element: iSelected,flag:{PlaybackEffectCallabck:zmEditor.component.banner.PlaybackEffectCallabck}} ,
            ];
            box.css({"width":"350px","height":"730px"});
        }
        if(datatType=="color"){
             config1 =[
                {type:'bannerStyleChange',element:iSelected,flag:{template:zmEditor.component.setItems.templateELement.StyleChange}},
                {type:'bannerController',element:iSelected,flag:{className:'.banner.Resize',crossORvertical:"cross"}},
                {type: "slider",element: iSelected,flag: {title: "背景颜色",style: "noTab_color",isColor: true,param: "backgroundColor",goal: ".zm-component-banner>.zm-bg-banner-BGC"}},
            ];
        }
        
        if(datatType=="image"){
             config1 =[
                {type:'bannerStyleChange',element:iSelected,flag:{template:zmEditor.component.setItems.templateELement.StyleChange}},
                {type:'bannerController',element:iSelected,flag:{className:'.banner.Resize',crossORvertical:"cross"}},
                {type: "vein",element: iSelected.find(".zm-bg-banner-vein")},//,flag: {title: "覆盖颜色",style: "noTab_color",isColor: true,param: "backgroundColor",goal: ".zm-component-banner"}
                {type: "slider",element: iSelected,flag: {title: "背景颜色",style: "noTab_color",isColor: true,param: "backgroundColor",goal: ".zm-component-banner>.zm-bg-banner-BGC"}},
                {type: "pictureShowScale",element: iSelected,flag:{pictureShowScaleCallabck:zmEditor.component.banner.pictureShowScaleCallabck}} ,
            ];
            box.css({"width":"350px","height":"730px"});
        }
        if(datatType=="Combination"){
            config1 =[
                {type:'bannerStyleChange',element:iSelected,flag:{template:zmEditor.component.setItems.templateELement.StyleChange}},
                {type:'bannerController',element:iSelected,flag:{className:'.banner.Resize',crossORvertical:"cross"}},
                // {type: "fugaiwenli",element: iSelected,flag: {template:zmEditor.component.setItems.templateELement.fiGaiWenli}},
                {type: "vein",element: iSelected.find(".zm-bg-banner-vein")},
                {type: "slider",element: iSelected,flag: {title: "背景颜色",style: "noTab_color",isColor: true,param: "backgroundColor",goal: ".zm-component-banner>.zm-bg-banner-BGC"}},
                {type: "pictureShowScale",element: iSelected,flag:{pictureShowScaleCallabck:zmEditor.component.banner.pictureShowScaleCallabck}} ,
            ];
            box.css({"width":"350px","height":"730px"});
        }
        var tabs = zmEditor.component.setItems.config(config1);


        return tabs;
    }
};
// // 横条样式组件下颜色组件被点击时更新函数
// zmEditor.component.banner.bannerSettingBackground=function(iSelected,Backgroundcomponent){
//     Backgroundcomponent.find(".zm-colorPicker").on("click",function(e){
//         zmEditor.component.banner.colorComponentCilck(iSelected);
//     })
// };
// 横条样式 bannerTop函数
zmEditor.component.banner.bannerSetting=function(ele,obj,tabs){
    var element;
    element=$('<div> </div>');
    element.append(zmEditor.component.setItems.templateELement.previewHTML);
    element.append('<div class="zm-edit-pageFull-title" style="height: 40px;line-height: 40px;border-bottom: 1px solid #ccc;padding-left: 25px;">族蚂资源库</div>');
    var iSelected=zmEditor.component.setItems.strings.future(ele,obj);
    zmEditor.component.banner.bannerupdateThreeButtoon(element,iSelected);
    element.find(".setting").children(".setting-set").attr("onclick",'zmEditor.component.setting(this)');
    element.find(".preview-choice-image").attr("onclick",'zmChoiceRadio.choicePicture({multiple: 0,callBack:zmEditor.component.banner.bannerSettingAddPicture})');
    element.find(".preview-choice-video").attr("onclick",'zmChoiceRadio.choiceVideo({multiple :0,callBack:zmEditor.component.banner.bannerSettingAddVideo})');
    zmEditor.component.banner.bannerSettingAddPicture = function (obj){
        if(obj[0].fCoverUrl){
            zmEditor.component.banner.bannerTypeComponentCilck(iSelected,"image",".zm-bg-banner-PIC");
            element.find(".setting-play").hide();
            // iSelected.find(".zm-component-banner").children(".zm-bg-banner-PIC").css("background-image","url("+obj[0].fCoverUrl+")");
            zmEditor.component.banner.bannerThreeButtomClickToElement(iSelected,"images",obj[0].fCoverUrl); // 数据响应到视图元素

            zmEditor.component.banner.bannerupdateThreeButtoon(element,iSelected,{"images":obj[0].fCoverUrl});
        }else{
          return;
        }
    };
    zmEditor.component.banner.bannerSettingAddVideo = function (obj){
        if(obj.fvideoUrl){
            zmEditor.component.banner.bannerTypeComponentCilck(iSelected,"video",".zm-bg-banner-Video",{"video":obj[0].fvideoUrl});
            element.find(".setting-play").show();
        }else{
            element.find(".setting-play").hide();
        }
    };
    // element.find(".preview-choice-color").on("click",function (e) {
    //         debugger;
    //     switch ( iSelected.children("div").attr("data-type-banner")){
    //         case "img":
    //             iSelected.children().remove();
    //             iSelected.append($('<div data-type-banner="color" style="width:100%;height:100%;"><div class="zm-component-banner bannerSingle" style="height: 100%; width: 100%; background-color: rgb(255, 0, 0);"></div></div>'));
    //             // iSelected.children("div").attr("data-type-banner","color");
    //             // iSelected.find(".zm-component-banner").css("back");
    //             break;
    //         case "video":
    //             iSelected.children().remove();
    //             iSelected.append($('<div data-type-banner="color" style="width:100%;height:100%;"><div class="zm-component-banner bannerSingle" style="height: 100%; width: 100%; background-color: rgb(255, 0, 0);"></div></div>'));
    //             break;
    //         case "color":
    //
    //             break;
    //         default:
    //             break;
    //     }
    //
    // })
    // 点击颜色按钮对应代码
    var btn_color = element.find(".preview-choice-color");
    var bg_BGC = iSelected;
    //添加颜色组件
    btn_color.append(zmEditor.component.setItems.strings.color(bg_BGC,{style: "mini",param: "backgroundColor",goal:".zm-bg-banner-BGC"}));
    // 绑定颜色组件点击时需要更新的3个设置按钮的背景样式
    // 点击颜色组件
    btn_color.on("click",function(){
        zmEditor.component.banner.bannerTypeComponentCilck(iSelected,"color",".zm-bg-banner-BGC");
        // zmEditor.component.banner.colorComponentUpdate(element,iSelected,btn_color,zmEditor.component.banner.bannerupdateThreeButtoon(element,iSelected),zmEditor.component.banner.bannerThreeButtomClickToElement,{iSelected:iSelected,buttonType:"color",reousce:btn_color.css("background-color")});
        zmEditor.component.banner.colorComponentUpdate(element,iSelected,btn_color,zmEditor.component.banner.bannerupdateThreeButtoon);

        var colorSelect= setInterval(function(){ zmEditor.component.banner.bannerThreeButtomClickToElement(iSelected,"color",element.find(".prev-a").css("background-color"))
            if(element.find("#content").css("display") == "none"){
                clearInterval(colorSelect);
            }
        },100)
        element.find(".setting-play").hide();
    });

    // var callbackElement=zmEditor.component.setItems.COLOR(iSelected,{param:"backgroundColor",goal:".zm-bg-banner-BGC",templateELement:element.find(".preview-choice-color").children("div:eq(1)").css("color","#000").end(),colorCallback:function(element){
    //     switch ( iSelected.children(".zm-component-banner").attr("data-type-banner")){
    //         case "img":
    //             iSelected.children(".zm-component-banner").children("div").hide();
    //             iSelected.children(".zm-component-banner").children(".zm-bg-banner-BGC").show().css({"width":"100%","height":"100%"});
    //             break;
    //         case "video":
    //             iSelected.children(".zm-component-banner").children("div").hide();
    //             iSelected.children(".zm-component-banner").children(".zm-bg-banner-BGC").show().css({"width":"100%","height":"100%"});
    //             break;
    //         case "color":
    //             break;
    //         default:
    //             break;
    //     }
    //
    // }});
    // element.find(".preview-choice-color").append(callbackElement);//这个添加color组件
    // 添加的视频预览窗

    var elementFindVideo,elementFindVideoSetINterval,elementFindVideoSrc;
     elementFindVideo=tabs.closest(".zm-dialog-box").find("div[data-type-banner='video']").find(".zm-bg-banner-Video");
         elementFindVideoSrc=elementFindVideo.children("video").attr("src");
         elementFindVideo.on("mouseenter",function(event){
             if($(".zm-bg-banner-elementFindVideo").length>0){ $(".zm-bg-banner-elementFindVideo").remove()};
             tabs.closest(".zm-dialog-box").after($(
              '<div class="zm-bg-banner-elementFindVideo" style="z-index:100;background-color: rgba(188, 188, 188,1);position: absolute;top: '+(elementFindVideo.offset().top-110)+'px;left: '+(parseFloat(elementFindVideo.offset().left)+parseFloat(elementFindVideo.closest(".zm-bg-banner-Video").css("width"))+26)+'px; width: 420px;height: 300px; padding:5px;">' +
              '<div class="zm-bg-banner-paddingWhite" style="width: 100%;height:285px;background-color: rgba(242, 242, 242, 1);padding: 40px 0 20px 0">' +
              '<div class="zm-bg-banner-elementFindVideoText" style="position: absolute;left: 175px;top: 15px;color: #4BB1A6;">视频预览</div>' +
              '<div class="zm-bg-banner-elementFindVideoText" style="position: absolute;left: 0;bottom: 12px;padding: 0 10px;width: 100%;"><span style="float: left">Banana</span> <span style="float: right">0:18</span></div>' +
              '<div class="zm-bg-banner-paddingblack" style="width: 100%;height:225px;padding: 50px 0;background-color: #000;"><video  width="100%" height="100%" loop="loop" autoplay="true" src="'+elementFindVideoSrc+'" style="object-fit: fill;"></video>' +
              '</div></div></div>'
             ))
         });
         elementFindVideo.on("mouseleave",function(event){
             if($(".zm-bg-banner-elementFindVideo").length>0){ $(".zm-bg-banner-elementFindVideo").remove()};
         });
         clearInterval(elementFindVideoSetINterval);
    return element;
};
//点击按钮出现弹框的回调函数拿到数据渲染给不同类型的banner
zmEditor.component.banner.bannerThreeButtomClickToElement=function(iSelected,buttonType,reousce){
    var findBanner=iSelected.find(".zm-component-banner");Combination=findBanner.children(".zm-bg-banner-Combination");
    if(findBanner.attr("data-type-banner")=="Combination"){
        switch (buttonType){
            case"images":
                Combination.css("background-image","url("+reousce+")");
                Combination.attr("data-bg-banner","images");
                break;
            case"color":
                Combination.css("background-color",reousce);
                Combination.css("background-image","");
                Combination.attr("data-bg-banner","color");
                break;
            case"video":
               // code`````
                Combination.attr("data-bg-banner","video");
                break;
            default:
                break;
        }
    }else{
        switch (buttonType){
            case"images":
                findBanner.children(".zm-bg-banner-PIC").css("background-image","url("+reousce+")");
                break;
            case"color":
                findBanner.children(".zm-bg-banner-BGC").css("background-color",reousce);
                break;
            case"video":

                break;
            default:
                break;
        }
    }
};
// 点击颜色组件改变banner下的 zm-bg-banner-BGC 内容显示
zmEditor.component.banner.bannerTypeComponentCilck=function(iSelected,bannerType,bannerTypeClass){
    if(iSelected.find(".zm-component-banner").attr("data-type-banner")=="Combination"){return}
    // iSelected.find(".zm-component-banner").attr("data-type-banner","color");
    iSelected.find(".zm-component-banner").attr("data-type-banner",bannerType);
    iSelected.find(".zm-component-banner").children("div").hide();
    iSelected.find(".zm-component-banner").children(bannerTypeClass).show();
    iSelected.find(".zm-component-banner").children(bannerTypeClass).show().css({"width":"100%","height":"100%"});
};
// 横条样式框下的颜色组件更新对应元素 zm-bg-banner-BGC 的颜色
zmEditor.component.banner.colorComponentUpdate=function(element,iSelected,ColorComponentFather,callBack,callBack1,callBack1Obj){
    var prevColor = setInterval(function(){
        if(callBack){callBack(element,iSelected)};
        // if(callBack1){callBack1(callBack1Obj.iSelected,callBack1Obj.buttonType,callBack1Obj.reousce)}
        if(ColorComponentFather.find("#content").css("display") == "none"){
            clearInterval(prevColor);
        }
    },100);
};
// 横条样式3个设置按钮的背景样式更新函数
zmEditor.component.banner.bannerupdateThreeButtoon=function (element,iSelected){
    var prevA=element.find(".prev-a");
    var prevB=element.find(".prev-b");
    var prevC=element.find(".prev-c");
    var prevArr=[prevA,prevB,prevC]
    var iSelectedFindbanner=iSelected.find(".zm-component-banner");
    switch (iSelectedFindbanner.attr("data-type-banner")){
        case "image":
            prevArr.forEach(function(element,index){
                element.css("z-index","1");
            })
            prevB.css({
                "background-image":iSelectedFindbanner.children(".zm-bg-banner-PIC").css("background-image"),
                "background-size":"100% 100%",
                "z-index":"4",
            })
            break;
        case "color":
            prevArr.forEach(function(element,index){
                element.css("z-index","1");
            })
            prevA.css({
                "background-color":iSelectedFindbanner.children(".zm-bg-banner-BGC").css("background-color"),
                "z-index":"4",
            });
            break;
        case "video":
            prevArr.forEach(function(element,index){
                element.css("z-index","1");
            })
            prevB.css({
                "background-image":"url("+iSelectedFindbanner.children(".zm-bg-banner-Video").attr("data-image-url")+")",
                "background-size":"100% 100%",
                "z-index":"4",
            });
            element.find(".setting-play").off("click");
            element.find(".setting-play").on("click",function (event) {
                var video=iSelected.find(".zm-bg-banner-Video").children("video");
                // debugger;
                if(video[0].paused){
                    video[0].play();
                }else{
                    video[0].pause();
                }
            });
            break;
        case "Combination":
            switch(iSelectedFindbanner.children(".zm-bg-banner-Combination").attr("data-bg-banner")){
                case"color":
                    prevArr.forEach(function(element,index){
                        element.css("z-index","1");
                    })
                    prevA.css({
                        "background-color":iSelectedFindbanner.children(".zm-bg-banner-BGC").css("background-color"),
                        "z-index":"4",
                    });
                    break;
                case"images":
                    prevArr.forEach(function(element,index){
                        element.css("z-index","1");
                    })
                    prevB.css({
                        "background-image":iSelectedFindbanner.children(".zm-bg-banner-Combination").css("background-image"),
                        "background-size":"100% 100%",
                        "z-index":"4",
                    })
                    break;

                case"video":

                    break;
                default:
                    break;
            }
            break;
        default:
            break;
    }
    if(iSelectedFindbanner.attr("data-type-banner")=="video"){element.find(".setting-play").show();}else{element.find(".setting-play").hide();}
};

// 播放效果函数
zmEditor.component.banner.PlaybackEffectCallabck=function (element,iSelected) {

    element.find(".zm-icon-sanjiaoYe").on("click",function(event){
        element.find(".PlaybackEffectDivDiolag").slideDown();
    });
    element.find(".PlaybackEffectDivDiolag").on("mouseleave",function(event){
      $(this).hide();
    });
    element.find(".PlaybackEffectDivDiolag>div").on("click",function(event){
        var num;
        element.find(".playShowText").text($(this).text());
        element.find(".PlaybackEffectDivDiolag").hide();
        num=Number($(this).attr("data-video-rate"));
        zmEditor.component.video.playbackRate(iSelected.find("video")[0],num);
        iSelected.children("div[data-banner-record='true']").attr("data-banner-video-rate",num);
    });
 // 循环播放函数
    if(iSelected.find("video")[0]["loop"]){
        element.find(".zm-switch-box").addClass("zm-switch-box-on");
        element.find(".zm-switch").children("span").removeClass("fa-minus").addClass("fa-check ");
    }
   element.find(".zm-switch-box").on("click",function(event){
    if(!($(this).hasClass("zm-switch-box-on"))&&!(element.find(".zm-switch").children("span").hasClass("fa-check"))){
        iSelected.find("video").attr("loop","true");
        iSelected.children("div[data-banner-record='true']").attr('data-banner-video-loop',"true")

    }else{
        iSelected.find("video").removeAttr("loop");
        iSelected.children("div[data-banner-record='true']").attr('data-banner-video-loop',"false")
    }
   })
    // 循环播放函数
    // 播放速率函数
    switch (iSelected.children("div[data-banner-record='true']").attr('data-banner-video-rate')){
        case 0.25:
            normalPlayText(0)
            break;
        case 0.5:
            normalPlayText(1)
            break;
        case 1:
            normalPlayText(2)
            break;
        case 1.25:
            normalPlayText(3)
            break;
        case 1.5:
            normalPlayText(4)
            break;
        case 2:
            normalPlayText(5)
            break;
        default:
            break;
    }
    // 播放速率函数
    function  normalPlayText(num){
        element.find(".PlaybackEffectDiv>span:eq(0)").text(element.find(".PlaybackEffectDivDiolag").children("div:eq("+num+")").text());
    }
   };

zmEditor.component.video.playbackRate=function (video,rate){
    var _this;
    if(video){_this=video}else{_this=this};
    if(arguments.length==2){
        if((typeof rate)!= "number"){ new Error("rate need a number")};
        _this.playbackRate=rate;
        return _this;
    }
    if(arguments.length==1){
        return _this.playbackRate;
    }
};
// 图片显示比例函数
zmEditor.component.banner.pictureShowScaleCallabck=function(element,iSelected){
    var pic=iSelected.children("div[data-banner-record='true']").attr("data-banner-image-displaymode");
    switch (pic){
        case"originalProportion":
            element.find(".zm-comptent-showScalHtml-showDialog-show").text("原始比例");
            break;
        case"adaptive":
            element.find(".zm-comptent-showScalHtml-showDialog-show").text("自适应");
            break;
        case"repeat":
            element.find(".zm-comptent-showScalHtml-showDialog-show").text("平铺");
            break;
        default:
            break;
    }
    zmEditor.component.banner.pictureShowScaleCallabckStyleLnitialize(iSelected);
    // if(pic.css("background-size")=="100% 100%"){
    //     console.log(pic.css("background-repeat"));
    //     element.find(".zm-comptent-showScalHtml-showDialog-show").text("自适应");
    // }
    // if(pic.css("background-repeat")=="repeat"){
    //     element.find(".zm-comptent-showScalHtml-showDialog-show").text("平铺");
    // }
    // if(pic.css("background-size")!="100% 100%"&&pic.css("background-repeat")!="repeat"){
    //     element.find(".zm-comptent-showScalHtml-showDialog-show").text("原始比例");
    // }
    element.find(".zm-icon-sanjiaoYe").on("click",function(){
        element.find(".zm-comptent-showScalHtml-showDialog").slideDown();
        element.find(".zm-comptent-showScalHtml-showDialog-show").hide();
    });
    element.find(".zm-comptent-showScalHtml-showDialog").on("mouseleave",function(){
        element.find(".zm-comptent-showScalHtml-showDialog-show").show();
        $(this).hide();
        });
    element.find(".zm-comptent-showScalHtml-showDialog").children("div").on("click",function(){
        element.find(".zm-comptent-showScalHtml-showDialog").hide();
        element.find(".zm-comptent-showScalHtml-showDialog-show").text($(this).text());
        switch ($(this)[0].classList[0]){
            case "zm-comptent-showScalHtml-showDialogLi1": //原始比例 originalProportion
                // iSelected.find("div.zm-bg-banner-PIC").css("background-size","").css("background-repeat","no-repeat");
                iSelected.children("div[data-banner-record='true']").attr("data-banner-image-displayMode","originalProportion");
                break;
            case "zm-comptent-showScalHtml-showDialogLi2": // 自适应 adaptive
                // iSelected.find("div.zm-bg-banner-PIC").css("background-size","100% 100%").css("background-repeat","no-repeat");
                iSelected.children("div[data-banner-record='true']").attr("data-banner-image-displayMode","adaptive");
                break;
            case "zm-comptent-showScalHtml-showDialogLi3"://平铺  repeat
                // iSelected.find("div.zm-bg-banner-PIC").css("background-size","").css("background-repeat","repeat");
                iSelected.children("div[data-banner-record='true']").attr("data-banner-image-displayMode","repeat");
                break;
            default:
                break;
        }
        zmEditor.component.banner.pictureShowScaleCallabckStyleLnitialize(iSelected);
    });
};

zmEditor.component.banner.pictureShowScaleCallabckStyleLnitialize=function(iSelected){
    var  findSelcet;
    switch (iSelected.find(".zm-component-banner").attr("data-type-banner")){
        case "Combination":
            findSelcet="div.zm-bg-banner-Combination"
            break;
        case"image":
            findSelcet="div.zm-bg-banner-PIC";
            break;
            default:
            break;
    }
     switch (iSelected.children("div[data-banner-record='true']").attr("data-banner-image-displayMode")){
         case "originalProportion": //原始比例 originalProportion
             iSelected.find(findSelcet).css("background-size","").css("background-repeat","no-repeat");
             break;
         case "adaptive": // 自适应 adaptive
             iSelected.find(findSelcet).css("background-size","100% 100%").css("background-repeat","no-repeat");
             break;
         case "repeat"://平铺  repeat
             iSelected.find(findSelcet).css("background-size","").css("background-repeat","repeat");
             break;
         default:
             break;
     }
 };
// banner拖拽比例函数
zmEditor.component.banner.didMount=function(mian,obj){
    switch (mian.find(".zm-component-banner").attr("data-type-banner")){
        case"color":
            mian.css({"width":obj["width"],"height":obj.height});
            mian.children("div").css({"width":"100%","height":"100%"});
            mian.find(".zm-component-banner").css({"width":"100%","height":"100%"});
            mian.find(".zm-bg-banner-BGC").css({"width":"100%","height":"100%"});
            break;
        case"image":
            mian.css({"width":obj.width,"height":parseFloat(obj.height)*4+"px"});
            mian.children("div").css({"width":"100%","height":"100%"});
            mian.find(".zm-component-banner").css({"width":"100%","height":"100%"});
            mian.find(".zm-bg-banner-PIC").css({"width":"100%","height":"100%"});
            break;
        case"video":
            mian.css({"width":obj.width,"height":parseFloat(obj.height)*4+"px"});
            mian.children("div").css({"width":"100%","height":"100%"});
            mian.find(".zm-component-banner").css({"width":"100%","height":"100%"});
            mian.find(".zm-bg-banner-Video").css({"width":"100%","height":"100%"});
            break;
        case"Combination":
            mian.css({"width":obj.width,"height":parseFloat(obj.height)*4+"px"});
            mian.children("div").css({"width":"100%","height":"100%"});
            mian.find(".zm-component-banner").css({"width":"100%","height":"100%"});
            mian.find(".zm-bg-banner-Combination").css({"width":"100%","height":"100%"});
            break;
        default:
            break;
    }
};
//族蚂资源库切换函数
zmEditor.component.banner.changeStyle=function(_this,iSelected){
    var select,element;
    select=_this.children("div").children("div").children("div").clone(true);
    select.css({"height":"100%","width":"100%"});
    select.children("div").css({"height":"100%","width":"100%"});
    iSelected.children("div").children("div").replaceWith(select);
    element=$("div.zm-component-settingPanel");
    element.each(function(index,ele){
        if($(ele).find(".zm-dialog-header").children(".zm-dialog-title").text()=="横条设置"){
            element=$(ele);
            return false;
        }
    })
    zmEditor.component.banner.bannerupdateThreeButtoon(element,iSelected);
};

// 所谓的原始比例下拖拽函数
zmEditor.component.banner.dragDrop=function(w,h,component){
console.log(component);
var width,height,bili;
if(component.find(".zm-component-banner").attr("data-type-banner")=="image"){
    if(component.children("div[data-banner-record='true']").attr("data-banner-image-displaymode")=="originalProportion"){
        width=parseFloat(component.css("width"));
        height=parseFloat(component.css("height"));
        bili= width/height;
     if(w){


     }
     if(h){


     }

    }
}
};
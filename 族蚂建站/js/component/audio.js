zmEditor.component.audio={
    setting:function(box){
        var nowEdit = zmEditor.component.nowEdit();
        var config01_1 = [
            {type: "styleSelect",element: nowEdit},
            {type: "slider",element: nowEdit.find(".zm-edit-components-audio-player-svg"),flag: {title: "边框颜色",style: "tab_color",isColor: true,param: "borderColor"}},
            {type: "slider",element: nowEdit.find(".zm-edit-components-audio-player-svg"),flag: {title: "边框颜色<br>&nbsp;(悬停)",style: "tab_color",isColor: true,param: "hoverBorderColor"}},
            {type: "slider",element: nowEdit.find(".zm-edit-components-audio-player-svg"),flag: {title: "边框宽度",style: "tab_noColor",isColor: false,param: "borderWidth",size: [0,10]}},
            {type: "slider",element: nowEdit.find(".zm-edit-components-audio-player-svg"),flag: {title: "填充颜色",style: "tab_color",isColor: true,param: "backgroundColor"}},
            {type: "slider",element: nowEdit.find(".zm-edit-components-audio-player-svg"),flag: {title: "填充颜色<br>&nbsp;(悬停)",style: "tab_color",isColor: true,param: "hoverBackgroundColor"}},
            {type: "slider",element: nowEdit.find("svg"),flag: {title: "箭头颜色",style: "tab_color",isColor: true,param: "fill"}},
            {type: "slider",element: nowEdit.find("svg"),flag: {title: "箭头颜色<br>&nbsp;(悬停)",style: "tab_color",isColor: true,param: "hoverFill"}}
        ];
        var config01_2 = [
            {type: "boxShadow",element: nowEdit.find(".zm-edit-components-audio-player-svg"),flag: {style: "tab"}}
        ];
        var config01_3 = [
            {type: "popup",element: nowEdit,flag: {title: "选择音频",type: "miniPlayer",tog: "none",ms: "false"}},
            {type: "showName",element: nowEdit.find(".zm-edit-components-audio-message")},
            {type: "importName",element: nowEdit.find(".zm-edit-components-audio-message")},
            {type: "audioFont",element: nowEdit.find(".zm-edit-components-audio-message"),flag: {style: "mini",param: "color"}},
            {type: "slider",element: nowEdit.find(".zm-edit-components-audio-message"),flag: {title: "文字颜色<br>&nbsp;(悬停)",style: "noTab_color",isColor: true,param: "hoverColor"}},
            {type: "slider",element: nowEdit.find(".zm-edit-components-audio-message"),flag: {title: "标题字间距",style: "noTab_noColor",isColor: false,param: "letter-spacing",size: [0,20]}},
            {type: "playMode",element: nowEdit.find(".zm-edit-components-audio-player-svg")}
        ];
        var config02_1 = [
            {type: "slider",element: nowEdit,flag: {title: "背景颜色",style: "tab_color",isColor: true,param: "backgroundColor"}},
            {type: "slider",element: nowEdit.find(".zm-edit-components-audio-intact-icon > span:eq(0)"),flag: {title: "收藏图标<br>颜色",style: "tab_color",isColor: true,param: "color"}},
            {type: "slider",element: nowEdit.find(".zm-edit-components-audio-intact-icon > span:eq(1)"),flag: {title: "转发图标<br>颜色",style: "tab_color",isColor: true,param: "color"}},
        ];
        var config02_2 = [
            {type: "slider",element: nowEdit.find(".zm-edit-components-audio-wrap"),flag: {title: "边线颜色",style: "tab_color",isColor: true,param: "borderColor"}},
            {type: "slider",element: nowEdit.find(".zm-edit-components-audio-wrap"),flag: {title: "光标悬浮<br>边线颜色",style: "tab_color",isColor: true,param: "hoverBorderColor"}},
            {type: "slider",element: nowEdit.find(".zm-edit-components-audio-wrap"),flag: {title: "填充颜色",style: "tab_color",isColor: true,param: "backgroundColor"}},
            {type: "slider",element: nowEdit.find(".zm-edit-components-audio-wrap"),flag: {title: "光标悬浮<br>填充颜色",style: "tab_color",isColor: true,param: "hoverBackgroundColor"}},
            {type: "slider",element: nowEdit.find("svg"),flag: {title: "播放键颜色",style: "tab_color",isColor: true,param: "fill"}},
            {type: "slider",element: nowEdit.find("svg"),flag: {title: "光标悬浮<br>播放键颜色",style: "tab_color",isColor: true,param: "hoverFill"}},
        ];
        var config02_3 = [
            {type: "selAlbum",element: nowEdit.find(".zm-edit-components-audio-wrap")},
            {type: "importName",element: nowEdit.find(".zm-edit-components-audio-intact-title")},
            {type: "audioFont",element: nowEdit.find(".zm-edit-components-audio-intact-title"),flag: {style: "mini",param: "color"}},
            {type: "slider",element: nowEdit.find(".zm-edit-components-audio-intact-title"),flag: {title: "标题<br>字间距",style: "noTab_noColor",isColor: false,param: "letter-spacing",size: [0,20]}},

        ];
        var config03_1 = [
            {type: "slider",element: nowEdit.find(".zm-audio-player-panel"),flag: {title: "(面板)<br>填充颜色",style: "tab_color",isColor: true,param: "backgroundColor"}},
            {type: "albumInfo",element: nowEdit.find(".player-album-message"),flag: {style: "tab_mini",param: "color"}},
            {type: "commentInfo",element: nowEdit.find(".player-otherInfo-message"),flag: {style: "tab_mini",param: "color"}},
            {type: "slider",element: nowEdit.find(".player-otherInfo-button span"),flag: {title: "下载按钮<br>背景颜色",style: "tab_color",isColor: true,param: "backgroundColor"}},
            {type: "slider",element: nowEdit.find(".player-otherInfo-button span"),flag: {title: "光标悬浮<br>按钮颜色",style: "tab_color",isColor: true,param: "hoverBackgroundColor"}},
            {type: "loadInfo",element: nowEdit.find(".player-otherInfo-button span"),flag: {style: "tab_mini",param: "color"}},
            {type: "slider",element: nowEdit.find(".player-otherInfo-message"),flag: {title: "分割线<br>&nbsp;颜色",style: "tab_color",isColor: true,param: "borderColor"}},
            {type: "slider",element: nowEdit.find(".player-otherInfo-message"),flag: {title: "分割线<br>&nbsp;粗细",style: "tab_noColor",isColor: false,param: "borderWidth",size: [0,5]}}
        ];
        var config03_2 = [
            {type: "slider",element: nowEdit.find(".zm-edit-components-audio-wrap"),flag: {title: "边线颜色",style: "tab_color",isColor: true,param: "borderColor"}},
            {type: "slider",element: nowEdit.find(".zm-edit-components-audio-wrap"),flag: {title: "光标悬浮<br>边线颜色",style: "tab_color",isColor: true,param: "hoverBorderColor"}},
            {type: "slider",element: nowEdit.find(".zm-edit-components-audio-wrap"),flag: {title: "填充颜色",style: "tab_color",isColor: true,param: "backgroundColor"}},
            {type: "slider",element: nowEdit.find(".zm-edit-components-audio-wrap"),flag: {title: "光标悬浮<br>填充颜色",style: "tab_color",isColor: true,param: "hoverBackgroundColor"}},
            {type: "slider",element: nowEdit.find(".zm-edit-components-audio-wrap svg"),flag: {title: "播放键<br>颜色",style: "tab_color",isColor: true,param: "fill"}},
            {type: "slider",element: nowEdit.find(".zm-edit-components-audio-wrap svg"),flag: {title: "光标悬浮<br>播放键颜色",style: "tab_color",isColor: true,param: "hoverFill"}},
        ];
        var config03_3 = [
            {type: "showOnOff"},
            {type: "slider",element: nowEdit.find(".zm-audio-player-list"),flag: {title: "列表区<br>背景色",style: "noTab_color",isColor: true,param: "backgroundColor"}},
            {type: "listFont",element: nowEdit.find(".zm-audio-player-list .list-name,.list-albumName,.list-singer,.list-time,.list-load,.list-playNumber,.list-loadNumber"),flag: {style: "mini",param: "color"}},
            {type: "slider",element: nowEdit.find(".zm-audio-player-list"),flag: {title: "(光标悬停)<br>文字颜色",style: "noTab_color",isColor: true,param: "hoverColor"}},
            {type: "slider",element: nowEdit.find(".zm-audio-player-list li"),flag: {title: "音频列表<br>行间距",style: "noTab_noColor",isColor: false,param: "height",size: [36,80]}},
            {type: "slider",element: nowEdit.find(".zm-audio-player-list li"),flag: {title: "分割线<br>颜色",style: "noTab_color",isColor: true,param: "borderBottomColor"}},
            {type: "slider",element: nowEdit.find(".zm-audio-player-list li"),flag: {title: "分割线<br>粗细",style: "noTab_noColor",isColor: false,param: "borderBottomWidth",size: [0,5]}},
            {type: "slider",element: nowEdit.find(".zm-audio-player-list").find(".list-icon"),flag: {title: "图标颜色",style: "noTab_color",isColor: true,param: "color"}},
            {type: "slider",element: nowEdit.find(".zm-audio-player-list").find(".list-icon"),flag: {title: "(光标悬停)<br>图标颜色",style: "noTab_color",isColor: true,param: "hoverColor"}},
            {type: "popup",element: nowEdit,flag: {title: "选择音频",type: "panelPlayer",tog: "none",ms: "true"}}
        ];
        var config04_1 = [
            {type: "fullScreen",element: nowEdit},
            {type: "layout",element: nowEdit.find(".zm-edit-components-list-wrap")},
            {type: "sideLine",element: nowEdit.find(".zm-edit-components-list-wrap")},
            {type: "aspectRatio",element: nowEdit.find(".zm-edit-components-list-wrap"),flag: {goal: ".zm-edit-components-list-unit-image-wrap"}},
            {type: "suspensionEffect",element: nowEdit.find(".zm-edit-components-list-wrap")},
            {type: "slider",element: nowEdit.find(".zm-edit-components-list-wrap"),flag: {title: "边框颜色",style: "noTab_color",isColor: true,param: "borderColor",goal: ".border_on_off"}},
            {type: "slider",element: nowEdit.find(".zm-edit-components-list-wrap"),flag: {title: "边框宽度",style: "noTab_noColor",isColor: false,param: "borderWidth",size: [0,5],goal: ".border_on_off"}},
            {type: "slider",element: nowEdit,flag: {title: "背景颜色",style: "noTab_color",isColor: true,param: "backgroundColor"}},
            {type: "RankControl",element: nowEdit.find(".zm-edit-components-list-wrap"),flag: {type: "album"}},
            {type: "loadMore",element: nowEdit.find(".zm-edit-components-list-loadMore")}
        ];
        var config04_2 = [
            {type: "albumChoice",element: nowEdit},
            {type: "albumSort",element: nowEdit.find(".zm-edit-components-list-wrap")}
        ];
        var config04_3 = [
            {type: "albumSinger",element: nowEdit.find(".zm-edit-components-list-unit-message-01"),flag: {style: "mini",param: "color"}},
            {type: "albumName",element: nowEdit.find(".zm-edit-components-list-unit-message-02"),flag: {style: "mini",param: "color"}},
            {type: "albumLoad",element: nowEdit.find(".zm-edit-components-list-unit-message-03"),flag: {style: "mini",param: "color"}},
            {type: "albumTime",element: nowEdit.find(".zm-edit-components-list-unit-message-04"),flag: {style: "mini",param: "color"}}
        ];
        var config04_4 = [
            {type: "boxShadow",element: nowEdit.find(".zm-edit-components-list-wrap"),flag: {style: "noTab",goal: ".zm-edit-components-list-unit"}}
        ];
        var config05_1 = [
            {type: "slider",element: nowEdit.find(".zm-audio-player-panel"),flag: {title: "(面板)<br>填充颜色",style: "tab_color",isColor: true,param: "backgroundColor"}},
            {type: "albumInfo",element: nowEdit.find(".player-album-Info > div"),flag: {style: "tab_mini",param: "color"}},
            {type: "commentInfo",element: nowEdit.find(".player-album-collect"),flag: {style: "tab_mini",param: "color"}},
            {type: "slider",element: nowEdit.find(".player-album-button span"),flag: {title: "下载按钮<br>背景颜色",style: "tab_color",isColor: true,param: "backgroundColor"}},
            {type: "slider",element: nowEdit.find(".player-album-button span"),flag: {title: "(光标悬浮)<br>按钮颜色",style: "tab_color",isColor: true,param: "hoverBackgroundColor"}},
            {type: "loadInfo",element: nowEdit.find(".player-album-button span"),flag: {style: "tab_mini",param: "color"}},
            {type: "slider",element: nowEdit.find(".zm-audio-player-list li"),flag: {title: "分割线<br>&nbsp;颜色",style: "tab_color",isColor: true,param: "borderBottomColor"}},
            {type: "slider",element: nowEdit.find(".zm-audio-player-list li"),flag: {title: "分割线<br>&nbsp;粗细",style: "tab_noColor",isColor: false,param: "borderBottomWidth",size: [0,5]}}

        ];
        var config05_2 = [
            {type: "slider",element: nowEdit.find(".zm-edit-components-audio-wrap"),flag: {title: "边线颜色",style: "tab_color",isColor: true,param: "borderColor"}},
            {type: "slider",element: nowEdit.find(".zm-edit-components-audio-wrap"),flag: {title: "(光标悬浮)<br>边线颜色",style: "tab_color",isColor: true,param: "hoverBorderColor"}},
            {type: "slider",element: nowEdit.find(".zm-edit-components-audio-wrap"),flag: {title: "填充颜色",style: "tab_color",isColor: true,param: "backgroundColor"}},
            {type: "slider",element: nowEdit.find(".zm-edit-components-audio-wrap"),flag: {title: "(光标悬浮)<br>填充颜色",style: "tab_color",isColor: true,param: "hoverBackgroundColor"}},
            {type: "slider",element: nowEdit.find(".zm-edit-components-audio-wrap svg"),flag: {title: "播放键<br>颜色",style: "tab_color",isColor: true,param: "fill"}},
            {type: "slider",element: nowEdit.find(".zm-edit-components-audio-wrap svg"),flag: {title: "(光标悬浮)<br>播放键颜色",style: "tab_color",isColor: true,param: "hoverFill"}},
        ];
        var config05_3 = [
            {type: "slider",element: nowEdit.find(".zm-audio-player-list"),flag: {title: "列表区<br>背景色",style: "noTab_color",isColor: true,param: "backgroundColor"}},
            {type: "listFont",element: nowEdit.find(".zm-audio-player-list .list-name,.list-time,.list-load"),flag: {style: "mini",param: "color"}},
            {type: "slider",element: nowEdit.find(".zm-audio-player-list"),flag: {title: "(光标悬停)<br>文字颜色",style: "noTab_color",isColor: true,param: "hoverColor"}},
            {type: "slider",element: nowEdit.find(".zm-audio-player-list li"),flag: {title: "音频列表<br>行间距",style: "noTab_noColor",isColor: false,param: "height",size: [36,80]}},
            {type: "slider",element: nowEdit.find(".zm-audio-player-list li"),flag: {title: "分割线<br>颜色",style: "noTab_color",isColor: true,param: "borderBottomColor"}},
            {type: "slider",element: nowEdit.find(".zm-audio-player-list li"),flag: {title: "分割线<br>粗细",style: "noTab_noColor",isColor: false,param: "borderBottomWidth",size: [0,5]}},
            {type: "popup",element: nowEdit,flag: {title: "选择音频",type: "audio",tog: "none",ms: "true",callBack: pop_return_audio}}
        ];
        var tabs01,tabs01_c1,tabs01_c2,tabs02,tabs03,tabs04,tabs1List,tabsList;
        if(nowEdit.hasClass("mini_player")){
            tabs01_c1 = zmEditor.component.setItems.config(config01_1);
            tabs01_c2 = zmEditor.component.setItems.config(config01_2);
            tabs02 = zmEditor.component.setItems.config(config01_3);
            tabs1List = [{title: "常规",content: tabs01_c1},{title: "阴影",content: tabs01_c2}];
            tabs01 = zmEditor.component.setItems.tabs_child(tabs1List);
            tabsList = [{title:"图标",content:tabs01},{title:"音频",content:tabs02}];
        }
        if(nowEdit.hasClass("play_panel")){
            tabs01_c1 = zmEditor.component.setItems.config(config02_1);
            tabs01_c2 = zmEditor.component.setItems.config(config02_2);
            tabs02 = zmEditor.component.setItems.config(config02_3);
            tabs1List = [{title: "常规",content: tabs01_c1},{title: "播放键",content: tabs01_c2}];
            tabs01 = zmEditor.component.setItems.tabs_child(tabs1List);
            tabsList = [{title:"面板",content:tabs01},{title:"音频",content:tabs02}];
        }
        if(nowEdit.hasClass("panel_list")){
            tabs01_c1 = zmEditor.component.setItems.config(config03_1);
            tabs01_c2 = zmEditor.component.setItems.config(config03_2);
            tabs02 = zmEditor.component.setItems.config(config03_3);
            tabs1List = [{title: "常规",content: tabs01_c1},{title: "播放键",content: tabs01_c2}];
            tabs01 = zmEditor.component.setItems.tabs_child(tabs1List);
            tabsList = [{title:"面板",content:tabs01},{title:"音频",content:tabs02}];
        }
        if(nowEdit.hasClass("panel_list_mini")){
            tabs01_c1 = zmEditor.component.setItems.config(config05_1);
            tabs01_c2 = zmEditor.component.setItems.config(config05_2);
            tabs02 = zmEditor.component.setItems.config(config05_3);
            tabs1List = [{title: "常规",content: tabs01_c1},{title: "播放键",content: tabs01_c2}];
            tabs01 = zmEditor.component.setItems.tabs_child(tabs1List);
            tabsList = [{title:"面板",content:tabs01},{title:"音频",content:tabs02}];
        }
        if(nowEdit.hasClass("list_album")){
            tabs01 = zmEditor.component.setItems.config(config04_1);
            tabs02 = zmEditor.component.setItems.config(config04_2);
            tabs03 = zmEditor.component.setItems.config(config04_3);
            tabs04 = zmEditor.component.setItems.config(config04_4);
            tabsList = [{title: "布局",content: tabs01},{title: "专辑",content: tabs02},{title: "文字",content: tabs03},{title: "阴影",content: tabs04}];
        }
        var tabs = zmEditor.component.setItems.tabs(tabsList);
        box.css({"width":"350px","height":"685px"});
        return tabs;
    },
    method:{
        styleSelect:function(ele){
            var e = $('<div class="zm-components-audio-method-styleSelect">'
                +'<span class="zm-edit-text-title">样式选择</span>'
                +'<div class="audio-style-list">'
                +'<span class="left-icon"><i class="fa fa-angle-double-left"></i></span>'
                +'<div class="style-content"><ul>'
                +'<li><span class="style_w_01 style_r_01 style_b"></span></li>'
                +'<li><span class="style_w_01 style_r_02 style_b"></span></li>'
                +'<li><span class="style_w_01 style_b"></span></li>'
                +'<li><span class="style_w_01 style_r_01 style_bg_01"></span></li>'
                +'<li><span class="style_w_01 style_r_02 style_bg_01"></span></li>'
                +'<li><span class="style_w_01 style_bg_01"></span></li>'
                +'<li><span class="style_w_01 style_r_01 style_bg_02"></span></li>'
                +'<li><span class="style_w_01 style_r_02 style_bg_02"></span></li>'
                +'<li><span class="style_w_01 style_bg_02"></span></li>'
                +'<li><span class="style_w_02 style_r_03 style_b"></span></li>'
                +'<li><span class="style_w_02 style_r_04 style_b"></span></li>'
                +'<li><span class="style_w_02 style_b"></span></li>'
                +'<li><span class="style_w_02 style_r_03 style_bg_01"></span></li>'
                +'<li><span class="style_w_02 style_r_04 style_bg_01"></span></li>'
                +'<li><span class="style_w_02 style_bg_01"></span></li>'
                +'<li><span class="style_w_02 style_r_03 style_bg_02"></span></li>'
                +'<li><span class="style_w_02 style_r_04 style_bg_02"></span></li>'
                +'<li><span class="style_w_02 style_bg_02"></span></li>'
                +'</ul></div>'
                +'<span class="right-icon"><i class="fa fa-angle-double-right"></i></span>'
                +'</div></div>'
            );
            var btn_l = e.find(".left-icon");
            var btn_r = e.find(".right-icon");
            var ul = e.find(".style-content > ul");
            var state = true;
            var span = ul.find("li");
            btn_l.on("click",function(){
                var l = parseInt(ul.css("left"));
                if(l < 0){
                    if(state){
                        state = false;
                        if(l < 0){
                            ul.animate({left: "+=225px"},500,function(){
                                state = true;
                            });
                        }
                    }
                }

            });
            btn_r.on("click",function(){
                var l = parseInt(ul.css("left"));
                if(l > -1800){
                    if(state){
                        state = false;
                        ul.animate({left: "-=225px"},500,function(){
                            state = true;
                        });
                    }
                }

            });
            span.on("click",function(){
                var _this = $(this);
                var _index = span.index(this);
                ele.removeClass("mini-style-01 mini-style-02 mini-style-03 mini-style-04 mini-style-05 mini-style-06 mini-style-07 mini-style-08 mini-style-09 mini-style-10 mini-style-11 mini-style-12 mini-style-13 mini-style-14 mini-style-15 mini-style-16 mini-style-17 mini-style-18");
                _index++;
                if(_index < 10){
                    _index = "0"+_index;
                }
                ele.addClass("mini-style-"+_index);
            });

            return e;
        },
        showName:function(ele){
            var e = $('<div class="zm-components-audio-method-showName">'
                +'<span class="zm-edit-text-title">显示音频名称</span><label class="zm-switch-box zm-switch-box-on"><span class="zm-switch"><span class="fa fa-check"></span></span></label>'
                +'</div>'
            );
            var btn = e.find(".zm-switch-box");
            var judge = ele.css("display");
            if(judge == "none"){
                btn.removeClass("zm-switch-box-on");
                btn.children().children().removeClass("fa-check").addClass("fa-minus");
            }
            btn.on("click",function(){
                var _this = $(this);
                if(_this.is(".zm-switch-box-on")){
                    ele.css("display","none");
                }else{
                    ele.css("display","flex");
                }
            });
            return e;
        },
        importName:function(ele){
            var e = $('<div class="zm-components-audio-method-importName">'
                +'<div class="audio-importName-singer"><span>创作人</span><input type="text" placeholder="未知创作人"></div>'
                +'<div class="audio-importName-title"><span>音频标题</span><input type="text" placeholder="未知音频"></div>'
                +'</div>');
            var singer = e.find(".audio-importName-singer").find("input");
            var title = e.find(".audio-importName-title").find("input");
            singer.attr("placeholder",ele.find(".composer").text());
            title.attr("placeholder",ele.find(".songName").text());
            singer.on("blur",function(){
                var _this = $(this);
                var _val = _this.val();
                if(_val != ""){
                    ele.find(".composer").text(_val);
                    _this.attr("placeholder",_val).val("");
                }
            });
            title.on("blur",function(){
                var _this = $(this);
                var _val = _this.val();
                if(_val != ""){
                    ele.find(".songName").text(_val);
                    _this.attr("placeholder",_val).val("");
                }
            });
            e.find("input").on("input",function(){
                limitLength($(this),20);
            })
            return e;
        },
        audioFont:function(ele,obj){
            var e = $('<div class="zm-components-audio-method-audioFont">'
                +'<span class="zm-edit-text-title">标题文字设置</span>'
                +'<div class="wrap"></div>'
                +'</div>'
            );
            var _wrap = e.find(".wrap");
            var fs = zmEditor.component.setItems.strings.fontStyle(ele,obj);
            _wrap.append(fs);
            return e;
        },
        //播放方式
        playMode:function(ele){
           var e = $('<div class="zm-components-audio-method-playMode">'
                +'<span class="zm-edit-text-title">播放方式</span>'
                +'<div><label></label><span>播放一次</span></div>'
                +'<div><label></label><span>循环播放</span></div>'
                +'</div>');
           var label = e.find("label");
           console.log(ele);
           if(ele.attr("data-type-mode") == "loop"){
               label.eq(1).addClass("choice");
           }else{
               label.eq(0).addClass("choice");

           }
           label.on("click",function(){
               var _this = $(this);
               var _index = label.index(_this);
               label.removeClass("choice");
               _this.addClass("choice");
               switch(_index){
                   case 0:
                       ele.attr("data-type-mode","once");
                       break;
                   case 1:
                       ele.attr("data-type-mode","loop");
                       break;
               }
           });


            return e;
        },
        selAlbum:function(ele){
            var e = $('<div class="zm-components-audio-method-selAlbum popup_wind">'
                +'<span class="zm-edit-text-title">选择音频</span>'
                +'<div class="choose-music">'
                +'<div class="onlySong"><label class="check"></label><span>音频</span></div>'
                +'<div class="onlyAlbum"><label></label><span>专辑</span></div>'
                +'<input type="button" value="设置" class="choose"></div>'
                +'<ul class="zm-edit-popup-list"><li><i class="fa fa-unlink fa-flip-horizontal"></i><span>当前未设置任何链接 !</span></li></ul>'
                +'</div>'
            );

            var label = e.find("label");
            var choose = e.find(".choose");

            //初始化
            if(ele.attr("data-music-type") != "album"){
                ele.attr("data-music-type","audio");
            }

            //事件
            label.on("click",function(){
                var _this = $(this);
                var _index = label.index(this);
                label.removeClass("check");
                _this.addClass("check");
                switch(_index){
                    case 0:
                        ele.attr("data-music-type","audio");
                        break;
                    case 1:
                        ele.attr("data-music-type","album");
                        break;
                }
            });
            choose.on("click",function(){
                var judge = ele.attr("data-music-type");
                if(judge == "audio"){
                    zmChoiceRadio.choiceRadio({multiple: "true",callBack: pop_return_audio});
                }
                if(judge == "album"){
                    zmChoiceRadio.choiceAlbum({multiple: "false",callBack: pop_return_album});
                }
            });

            return e;
        },
        albumInfo:function(ele,obj){
            var e = $('<div class="zm-components-audio-method-albumInfo">'
                +'<span class="zm-edit-text-title">专辑信息文字设置</span>'
                +'<div class="albumInfo-wrap"></div>'
                +'</div>');
            var wrap = e.find(".albumInfo-wrap");
            var font = zmEditor.component.setItems.strings.fontStyle(ele,obj);
            wrap.append(font);
            return e;
        },
        commentInfo:function(ele,obj){
            var e = $('<div class="zm-components-audio-method-commentInfo">'
                +'<span class="zm-edit-text-title">播放/评论统计区文字设置</span>'
                +'<div class="commentInfo-wrap"></div>'
                +'</div>'
            );
            var wrap = e.find(".commentInfo-wrap");
            var font = zmEditor.component.setItems.strings.fontStyle(ele,obj);
            wrap.append(font);

            return e;
        },
        loadInfo:function(ele,obj){
            var e = $('<div class="zm-components-audio-method-loadInfo">'
                +'<span class="zm-edit-text-title">下载按钮文字设置</span>'
                +'<div class="loadInfo-wrap"></div>'
                +'</div>')
            var wrap = e.find(".loadInfo-wrap");
            var font = zmEditor.component.setItems.strings.fontStyle(ele,obj);
            wrap.append(font);
            return e;
        },
        showOnOff:function(ele){
            var e = $('<div class="zm-components-audio-method-showOnOff">'
                +'<div><span class="zm-edit-text-title">显示专辑名称</span><label class="zm-switch-box zm-switch-box-on"><span class="zm-switch"><span class="fa fa-check"></span></span></label></div>'
                +'<div><span class="zm-edit-text-title">显示创作人</span><label class="zm-switch-box zm-switch-box-on"><span class="zm-switch"><span class="fa fa-check"></span></span></label></div>'
                +'<div><span class="zm-edit-text-title">显示播放次数</span><label class="zm-switch-box zm-switch-box-on"><span class="zm-switch"><span class="fa fa-check"></span></span></label></div>'
                +'<div><span class="zm-edit-text-title">显示下载次数</span><label class="zm-switch-box zm-switch-box-on"><span class="zm-switch"><span class="fa fa-check"></span></span></label></div>'
                +'</div>');
            var label = e.find("label");
            if(ele.find(".list-albumName").css("display") == "none"){
                label.eq(0).removeClass("zm-switch-box-on");
                label.eq(0).children().children().toggleClass("fa-check fa-minus");
            }
            if(ele.find(".list-singer").css("display") == "none"){
                label.eq(1).removeClass("zm-switch-box-on");
                label.eq(1).children().children().toggleClass("fa-check fa-minus");
            }
            if(ele.find(".list-playNumber").css("display") == "none"){
                label.eq(2).removeClass("zm-switch-box-on");
                label.eq(2).children().children().toggleClass("fa-check fa-minus");
            }
            if(ele.find(".list-loadNumber").css("display") == "none"){
                label.eq(3).removeClass("zm-switch-box-on");
                label.eq(3).children().children().toggleClass("fa-check fa-minus");
            }
            label.on("click",function(){
                var _this = $(this);
                var _index = label.index(this);
                var albumName = ele.find(".list-albumName");
                var singer = ele.find(".list-singer");
                var playNumber = ele.find(".list-playNumber");
                var loadNumber = ele.find(".list-loadNumber");
                switch(_index){
                    case 0:
                        albumName.toggle();
                        break;
                    case 1:
                        singer.toggle();
                        break;
                    case 2:
                        playNumber.toggle();
                        break;
                    case 3:
                        loadNumber.toggle();
                        break;
                }
            });
            return e;
        },
        listFont:function(ele,obj){
            var e = $('<div class="zm-components-audio-method-listFont">'
                +'<span class="zm-edit-text-title">音频文字设置</span>'
                +'<div class="listFont-wrap"></div>'
                +'</div>');
            var wrap = e.find(".listFont-wrap");
            var font = zmEditor.component.setItems.strings.fontStyle(ele,obj);
            wrap.append(font);
            return e;
        },
        albumLayout:function(ele){
            var e = $('<div class="zm-components-audio-method-albumLayout">'
                +'<span class="zm-edit-text-title">布局样式</span>'
                +'<div class="zm-components-audio-player-albumLayout-wrap">'
                +'<div><span class="shadow"><span class="fa fa-navicon" style="text-align:start"></span></span><label class="choice"></label></div>'
                +'<div><span><span class="fa fa-navicon" style="text-align:center"></span></span><label></label></div>'
                +'<div><span><span class="fa fa-navicon" style="text-align:right"></span></span><label></label></div>'
                +'<div><span></span><label></label></div>'
                +'</div></div>'
            );
            var label = e.find("label");
            var list = e.find(".zm-components-audio-player-albumLayout-wrap").children();
            var wrap = list.children("span");
            list.on("click",function(){
                var _name = ele.find(".zm-albumCont-album-message-name");
                var _load = ele.find(".zm-albumCont-album-message-loadAlbum");
                var _pubDate = ele.find(".zm-albumCont-album-message-pubDate");
                var _message = ele.find(".zm-albumCont-album-message-box");
                var _index = list.index(this);
                _message.show();
                switch(_index){
                    case 0:
                        _name.css("justify-content","flex-start");
                        _load.css("justify-content","flex-start");
                        _pubDate.css("justify-content","flex-start");
                        break;
                    case 1:
                        _name.css("justify-content","center");
                        _load.css("justify-content","center");
                        _pubDate.css("justify-content","center");
                        break;
                    case 2:
                        _name.css("justify-content","flex-end");
                        _load.css("justify-content","flex-end");
                        _pubDate.css("justify-content","flex-end");
                        break;
                    case 3:
                        _message.hide();
                        break;
                }
                label.removeClass("choice");
                label.eq(_index).addClass("choice");
                wrap.removeClass("shadow");
                wrap.eq(_index).addClass("shadow");
            });
            return e;
        },
        albumBorSty:function(ele){
            var e = $('<div class="zm-components-audio-method-albumBorSty">'
                +'<span class="zm-edit-text-title">边框样式</span>'
                +'<div class="zm-components-audio-method-albumBorSty-wrap">'
                +'<div><span class="shadow"><span></span></span><label class="choice"></label></div>'
                +'<div><span><span></span></span><label></label></div>'
                +'<div><span><span></span></span><label></label></div>'
                +'<div><span><span></span></span><label></label></div>'
                +'</div></div>');

            var label = e.find("label");
            var list = e.find(".zm-components-audio-method-albumBorSty-wrap").children();
            var shadow = list.children("span");
            list.on("click",function(){
                var _index = list.index(this);
                var imgBor = ele.find(".zm-albumCont-album-image-wrap");
                var albBor = ele.find(".zm-audio-player-list-albumCont-album");
                imgBor.removeClass("set_border");
                albBor.removeClass("set_border");
                switch(_index){
                    case 0:
                        break;
                    case 1:
                        imgBor.addClass("set_border");
                        break;
                    case 2:
                        imgBor.addClass("set_border");
                        albBor.addClass("set_border");
                        break;
                    case 3:
                        albBor.addClass("set_border");
                        break;
                }

            });

            return e;
        },
        albumChoice:function(ele){
            var e = $('<div class="zm-components-albumChoice">'
                +'<div><span class="zm-edit-text-title">专辑选择</span><button class="zm-components-albumChoice-button">设置</button></div>'
                +'<ul class="mCustomScrollbar" data-mcs-theme="minimal">'
                +'<li><i class="fa fa-unlink fa-flip-horizontal"></i><p>当前未设置任何链接 !</p></li>'
                +'</ul></div>');
            var btn = e.find(".zm-components-albumChoice-button");
            var ul = e.find("ul");
            btn.on("click",function(){
                zmChoiceRadio.choiceAlbum({multiple: "true",callBack: popup_album});
            });
            //初始化设置项

            //弹窗回调函数
            function popup_album(data){
                //数据存入local
                setLocal(ele,{key: ele.attr("id"),value: data});
                //展示在页面
                setListAlbum(ele,data);
                //展示在设置项
                setInstAlbum(ul,data);
            }
            return e;
        },
        albumSort:function(ele){
            var e = $('<div class="zm-components-albumSort">'
                +'<span class="zm-edit-text-title">专辑排序</span>'
                +'<div><label class="choice"></label><span>随机排序</span></div>'
                +'<div><label></label><span>专辑创建时间先后</span></div>'
                +'</div>');
            var label = e.find("label");
            label.on("click",function(){
                var _this = $(this);
                var index = label.index(this);
                label.removeClass("choice");
                _this.addClass("choice");
                var unit = ele.find(".zm-edit-components-list-unit");
                var row = ele.find("li").length;//行
                var col = unit.length/row;//列
                switch(index){
                    case 0:
                        ele.empty();
                        unit.sort(ArrSort);
                        for(var i=0;i<row;i++){
                            var li = $('<li class="clearFloat"></li>');
                            for(var j=0;j<col;j++){
                                li.append(unit[i*col+j]);
                            }
                            ele.append(li);
                        }
                        break;
                    case 1:
                        console.log("时间");
                        break;
                }
            });
            function ArrSort(a,b){
                return 0.5 - Math.random();
            }
            return e;
        },
        albumSinger:function(ele,obj){
            var e = $('<div class="zm-components-albumSinger zm-edit-components-albumMess">'
                +'<div class="zm-components-albumSinger-mess"><label><i class="fa fa-check"></i></label><span>创作人</span></div>'
                +'<div class="zm-components-albumSinger-wrap"></div>'
                +'<div class="zm-components-albumSinger-shadow"></div>'
                +'</div>');
            var wrap = e.find(".zm-components-albumSinger-wrap");
            var font = zmEditor.component.setItems.strings.fontStyle(ele,obj);
            wrap.append(font);
            var label = e.find("label");
            var icon = label.children();
            var shadow = e.find(".zm-components-albumSinger-shadow");
            if(ele.css("display") == "none"){
                icon.removeClass("fa-check");
                shadow.show();
            }else{
                icon.addClass("fa-check");
                shadow.hide();
            }
            label.on("click",function(){
                if(icon.is(".fa-check")){
                    icon.removeClass("fa-check");
                    shadow.show();
                    ele.hide(500);
                }else{
                    icon.addClass("fa-check");
                    shadow.hide();
                    ele.show(500);
                }
            });
            return e;
        },
        albumName:function(ele,obj){
            var e = $('<div class="zm-components-albumName zm-edit-components-albumMess">'
                +'<div class="zm-components-albumName-mess"><label><i class="fa fa-check"></i></label><span>专辑名称</span></div>'
                +'<div class="zm-components-albumName-wrap"></div>'
                +'<div class="zm-components-albumName-shadow"></div>'
                +'</div>');
            var wrap = e.find(".zm-components-albumName-wrap");
            var font = zmEditor.component.setItems.strings.fontStyle(ele,obj);
            wrap.append(font);
            var label = e.find("label");
            var icon = label.children();
            var shadow = e.find(".zm-components-albumName-shadow");
            if(ele.css("display") == "none"){
                icon.removeClass("fa-check");
                shadow.show();
            }else{
                icon.addClass("fa-check");
                shadow.hide();
            }
            label.on("click",function(){
                if(icon.is(".fa-check")){
                    icon.removeClass("fa-check");
                    shadow.show();
                    ele.hide(500);
                }else{
                    icon.addClass("fa-check");
                    shadow.hide();
                    ele.show(500);
                }
            });




            return e;
        },
        albumLoad:function(ele,obj){
            var e = $('<div class="zm-components-albumLoad zm-edit-components-albumMess">'
                +'<div class="zm-components-albumLoad-mess"><label><i class="fa fa-check"></i></label><span>下载收费</span></div>'
                +'<div class="zm-components-albumLoad-wrap"></div>'
                +'<div class="zm-components-albumLoad-shadow"></div>'
                +'</div>');
            var wrap = e.find(".zm-components-albumLoad-wrap");
            var font = zmEditor.component.setItems.strings.fontStyle(ele,obj);
            wrap.append(font);
            var label = e.find("label");
            var icon = label.children();
            var shadow = e.find(".zm-components-albumLoad-shadow");
            if(ele.css("display") == "none"){
                icon.removeClass("fa-check");
                shadow.show();
            }else{
                icon.addClass("fa-check");
                shadow.hide();
            }
            label.on("click",function(){
                if(icon.is(".fa-check")){
                    icon.removeClass("fa-check");
                    shadow.show();
                    ele.hide(500);
                }else{
                    icon.addClass("fa-check");
                    shadow.hide();
                    ele.show(500);
                }
            });
            return e;
        },
        albumTime:function(ele,obj){
            var e = $('<div class="zm-components-albumTime zm-edit-components-albumMess">'
                +'<div class="zm-components-albumTime-mess"><label><i class="fa fa-check"></i></label><span>发布时间</span></div>'
                +'<div class="zm-components-albumTime-wrap"></div>'
                +'<div class="zm-components-albumTime-shadow"></div>'
                +'</div>');
            var wrap = e.find(".zm-components-albumTime-wrap");
            var font = zmEditor.component.setItems.strings.fontStyle(ele,obj);
            wrap.append(font);
            var label = e.find("label");
            var icon = label.children();
            var shadow = e.find(".zm-components-albumTime-shadow");
            if(ele.css("display") == "none"){
                icon.removeClass("fa-check");
                shadow.show();
            }else{
                icon.addClass("fa-check");
                shadow.hide();
            }
            label.on("click",function(){
                if(icon.is(".fa-check")){
                    icon.removeClass("fa-check");
                    shadow.show();
                    ele.hide(500);
                }else{
                    icon.addClass("fa-check");
                    shadow.hide();
                    ele.show(500);
                }
            });

            return e;
        },
        setAudioStyle:function(iSelected,ele){
            var _index = ele.parent().find("li").index(ele);
            switch(_index){
                case 0:
                    iSelected.removeClass("mini-style-01 mini-style-02 mini-style-03 mini-style-04 mini-style-05 mini-style-06 mini-style-07 mini-style-08 mini-style-09 mini-style-10 mini-style-11 mini-style-12 mini-style-13 mini-style-14 mini-style-15 mini-style-16 mini-style-17 mini-style-18").addClass("mini-style-01");
                    break;
                case 1:
	                iSelected.removeClass("mini-style-01 mini-style-02 mini-style-03 mini-style-04 mini-style-05 mini-style-06 mini-style-07 mini-style-08 mini-style-09 mini-style-10 mini-style-11 mini-style-12 mini-style-13 mini-style-14 mini-style-15 mini-style-16 mini-style-17 mini-style-18").addClass("mini-style-02");
                    break;
                case 2:
	                iSelected.removeClass("mini-style-01 mini-style-02 mini-style-03 mini-style-04 mini-style-05 mini-style-06 mini-style-07 mini-style-08 mini-style-09 mini-style-10 mini-style-11 mini-style-12 mini-style-13 mini-style-14 mini-style-15 mini-style-16 mini-style-17 mini-style-18").addClass("mini-style-03");
	                break;
                case 3:
	                iSelected.removeClass("mini-style-01 mini-style-02 mini-style-03 mini-style-04 mini-style-05 mini-style-06 mini-style-07 mini-style-08 mini-style-09 mini-style-10 mini-style-11 mini-style-12 mini-style-13 mini-style-14 mini-style-15 mini-style-16 mini-style-17 mini-style-18").addClass("mini-style-04");
	                break;
                case 4:
	                iSelected.removeClass("mini-style-01 mini-style-02 mini-style-03 mini-style-04 mini-style-05 mini-style-06 mini-style-07 mini-style-08 mini-style-09 mini-style-10 mini-style-11 mini-style-12 mini-style-13 mini-style-14 mini-style-15 mini-style-16 mini-style-17 mini-style-18").addClass("mini-style-05");
	                break;
                case 5:
	                iSelected.removeClass("mini-style-01 mini-style-02 mini-style-03 mini-style-04 mini-style-05 mini-style-06 mini-style-07 mini-style-08 mini-style-09 mini-style-10 mini-style-11 mini-style-12 mini-style-13 mini-style-14 mini-style-15 mini-style-16 mini-style-17 mini-style-18").addClass("mini-style-06");
	                break;
                case 6:
	                iSelected.removeClass("mini-style-01 mini-style-02 mini-style-03 mini-style-04 mini-style-05 mini-style-06 mini-style-07 mini-style-08 mini-style-09 mini-style-10 mini-style-11 mini-style-12 mini-style-13 mini-style-14 mini-style-15 mini-style-16 mini-style-17 mini-style-18").addClass("mini-style-07");
	                break;
                case 7:
	                iSelected.removeClass("mini-style-01 mini-style-02 mini-style-03 mini-style-04 mini-style-05 mini-style-06 mini-style-07 mini-style-08 mini-style-09 mini-style-10 mini-style-11 mini-style-12 mini-style-13 mini-style-14 mini-style-15 mini-style-16 mini-style-17 mini-style-18").addClass("mini-style-08");
                    break;
                case 8:
	                iSelected.removeClass("mini-style-01 mini-style-02 mini-style-03 mini-style-04 mini-style-05 mini-style-06 mini-style-07 mini-style-08 mini-style-09 mini-style-10 mini-style-11 mini-style-12 mini-style-13 mini-style-14 mini-style-15 mini-style-16 mini-style-17 mini-style-18").addClass("mini-style-09");
                    break;
                case 9:
	                iSelected.removeClass("mini-style-01 mini-style-02 mini-style-03 mini-style-04 mini-style-05 mini-style-06 mini-style-07 mini-style-08 mini-style-09 mini-style-10 mini-style-11 mini-style-12 mini-style-13 mini-style-14 mini-style-15 mini-style-16 mini-style-17 mini-style-18").addClass("mini-style-10");
                    break;
                case 10:
	                iSelected.removeClass("mini-style-01 mini-style-02 mini-style-03 mini-style-04 mini-style-05 mini-style-06 mini-style-07 mini-style-08 mini-style-09 mini-style-10 mini-style-11 mini-style-12 mini-style-13 mini-style-14 mini-style-15 mini-style-16 mini-style-17 mini-style-18").addClass("mini-style-11");
                    break;
                case 11:
	                iSelected.removeClass("mini-style-01 mini-style-02 mini-style-03 mini-style-04 mini-style-05 mini-style-06 mini-style-07 mini-style-08 mini-style-09 mini-style-10 mini-style-11 mini-style-12 mini-style-13 mini-style-14 mini-style-15 mini-style-16 mini-style-17 mini-style-18").addClass("mini-style-12");
                    break;
                case 12:
	                iSelected.removeClass("mini-style-01 mini-style-02 mini-style-03 mini-style-04 mini-style-05 mini-style-06 mini-style-07 mini-style-08 mini-style-09 mini-style-10 mini-style-11 mini-style-12 mini-style-13 mini-style-14 mini-style-15 mini-style-16 mini-style-17 mini-style-18").addClass("mini-style-13");
                    break;
                case 13:
	                iSelected.removeClass("mini-style-01 mini-style-02 mini-style-03 mini-style-04 mini-style-05 mini-style-06 mini-style-07 mini-style-08 mini-style-09 mini-style-10 mini-style-11 mini-style-12 mini-style-13 mini-style-14 mini-style-15 mini-style-16 mini-style-17 mini-style-18").addClass("mini-style-14");
                    break;
                case 14:
	                iSelected.removeClass("mini-style-01 mini-style-02 mini-style-03 mini-style-04 mini-style-05 mini-style-06 mini-style-07 mini-style-08 mini-style-09 mini-style-10 mini-style-11 mini-style-12 mini-style-13 mini-style-14 mini-style-15 mini-style-16 mini-style-17 mini-style-18").addClass("mini-style-15");
                    break;
                case 15:
	                iSelected.removeClass("mini-style-01 mini-style-02 mini-style-03 mini-style-04 mini-style-05 mini-style-06 mini-style-07 mini-style-08 mini-style-09 mini-style-10 mini-style-11 mini-style-12 mini-style-13 mini-style-14 mini-style-15 mini-style-16 mini-style-17 mini-style-18").addClass("mini-style-16");
                    break;
                case 16:
	                iSelected.removeClass("mini-style-01 mini-style-02 mini-style-03 mini-style-04 mini-style-05 mini-style-06 mini-style-07 mini-style-08 mini-style-09 mini-style-10 mini-style-11 mini-style-12 mini-style-13 mini-style-14 mini-style-15 mini-style-16 mini-style-17 mini-style-18").addClass("mini-style-17");
                    break;
                case 17:
	                iSelected.removeClass("mini-style-01 mini-style-02 mini-style-03 mini-style-04 mini-style-05 mini-style-06 mini-style-07 mini-style-08 mini-style-09 mini-style-10 mini-style-11 mini-style-12 mini-style-13 mini-style-14 mini-style-15 mini-style-16 mini-style-17 mini-style-18").addClass("mini-style-18");
                    break;
            }
        },
    },
};
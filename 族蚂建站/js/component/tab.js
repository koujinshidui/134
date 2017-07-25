/**
 * Created by liuhuan on 2017/2/23.
 */
zmEditor.component.tab={
    setting:function(box){
        var nowEdit = zmEditor.component.nowEdit();
        var config1_c1 = [
            {type: "channelTab",element: nowEdit.find(".zm-edit-components-tabs-tit-channel"), flag: {title: "是否显示"}},
            {type: "channelLink",element: nowEdit.find(".zm-edit-components-tabs-tit-channel")},
            {type: "Family",element: nowEdit.find(".zm-edit-components-tabs-tit-channel"), flag: {title: "字体", style: ""}},
            {type: "slider",element: nowEdit.find(".zm-edit-components-tabs-tit-channel"),flag: {title: "文字大小<br><span>&nbsp;&nbsp;(像素)</span>", style: "tab_noColor",isColor:false, param: "fontSize", size: [12,80]}},
            {type: "slider",element: nowEdit.find(".zm-edit-components-tabs-tit-channel"),flag: {title: "文字颜色", style: "tab_color",isColor:true, param: "color"}},
            {type: "fontStyle",element: nowEdit.find(".zm-edit-components-tabs-tit-channel")},
            {type: "slider",element: nowEdit.find(".zm-edit-components-tabs-tit-channel"),flag: {title: "文字颜色<br><span>(光标悬停)</span>", style: "tab_color",isColor: true,param: "hoverColor"}}
        ];
        var config1_c2 = [
            {type: "slider", element: nowEdit.find(".zm-edit-components-tabs-tit"), flag: {title: "头部高度<br><span>&nbsp;&nbsp;(像素)</span>", style: "tab_noColor",isColor:false, param: "height", size: [20,80]}},
            {type: "slider", element: nowEdit.find(".zm-edit-components-tabs-tit"), flag: {title: "背景颜色", style: "tab_color",isColor:true, param: "backgroundColor"}},
            {type: "slider", element: nowEdit.find(".zm-edit-components-tabs-tit"), flag: {title: "边框颜色", style: "tab_color",isColor:true, param: "borderColor"}},
            {type: "slider", element: nowEdit.find(".zm-edit-components-tabs-tit"), flag: {title: "边框宽度<br><span>&nbsp;&nbsp;(像素)</span>", style: "tab_noColor",isColor:false, param: "borderWidth", size: [0,5]}},
            {type: "tabTopBdCol",element: nowEdit.find(".zm-edit-components-tabs-tit")},
            {type: "tabBotBdCol",element: nowEdit.find(".zm-edit-components-tabs-tit")}
        ];
        var config2_c1 = [
            {type: "tabTitLink",element:nowEdit}
        ];
        var config2_c2 = [
            {type: "Family",element: nowEdit.find(".zm-edit-components-tabs-tit-lab"),flag: {title: "字体", style: ""}},
            {type: "slider",element: nowEdit.find(".zm-edit-components-tabs-tit-lab"),flag: {title: "文字大小<br><span>&nbsp;&nbsp;(像素)</span>", style: "tab_noColor", isColor: false, param: "fontSize", size: [12,80]}},
            {type: "slider",element: nowEdit.find(".zm-edit-components-tabs-tit-lab"),flag: {title: "文字颜色", style: "tab_color",isColor: true, param: "color"}},
            {type: "fontStyle",element: nowEdit.find(".zm-edit-components-tabs-tit-lab")}
        ];
        var config2_c3 = [
            {type: "tabTitAlign",element: nowEdit.find(".zm-edit-components-tabs-tit-lab")}
        ];
        var config2_c4 = [
            {type: "tabLabTopBdCol",element: nowEdit.find(".zm-edit-components-tabs-tit-lab")},
            {type: "tabLabBotBdCol",element: nowEdit.find(".zm-edit-components-tabs-tit-lab")},
            {type: "slider",element: nowEdit.find(".zm-edit-components-tabs-tit-lab"),flag: {title: "文字颜色<br><span>(光标悬停)</span>",style: "tab_color",isColor: true,param: "hoverColor",goal: "li"}},
            {type: "slider",element: nowEdit.find(".zm-edit-components-tabs-tit-lab"),flag: {title: "背景颜色",style: "tab_color",isColor: true,param: "hoverBackgroundColor",goal: "li"}}
        ];
        var config3 = [
            {type: "slider",element: nowEdit.find(".zm-edit-components-tabs-cont"),flag: {title: "边框颜色", style:"noTab_color", isColor: true, param:"borderColor"}},
            {type: "slider",element: nowEdit.find(".zm-edit-components-tabs-cont"),flag: {title: "边框宽度", style: "noTab_noColor", isColor: false, param: "borderWidth", size: [0,10]}},
            {type: "slider",element: nowEdit.find(".zm-edit-components-tabs-cont"),flag: {title: "背景颜色", style:"noTab_color", isColor: true, param: "backgroundColor"}}
        ];
        var config4 = [
            {type: "boxShadow",element: nowEdit,flag: {style: "noTab"}}
        ];
        var tabs1_c1 = zmEditor.component.setItems.config(config1_c1);
        var tabs1_c2 = zmEditor.component.setItems.config(config1_c2);
        var tabs2_c1 = zmEditor.component.setItems.config(config2_c1);
        var tabs2_c2 = zmEditor.component.setItems.config(config2_c2);
        var tabs2_c3 = zmEditor.component.setItems.config(config2_c3);
        var tabs2_c4 = zmEditor.component.setItems.config(config2_c4);
        var tabs3 = zmEditor.component.setItems.config(config3);
        var tabs4 = zmEditor.component.setItems.config(config4);
        var tabs1List = [{title:"<span class='fa fa-th-large'></span><br>标题",content:tabs1_c1},{title:"<span class='fa fa-home fa-lg'></span><br>头部",content:tabs1_c2}];
        var tabs1 = zmEditor.component.setItems.tabs_child(tabs1List);
        var tabs2List = [{title:"<span class='fa fa-list-alt'></span><br>选项",content:tabs2_c1},{title:"<span class='fa fa-font'></span><br>文字",content:tabs2_c2},{title:"<span class='fa fa-cubes'></span><br>布局",content:tabs2_c3},{title:"<span class='fa fa-hand-o-up'></span><br>悬停",content:tabs2_c4}];
        var tabs2 = zmEditor.component.setItems.tabs_child(tabs2List);
        var tabsList = [{title:"常规",content:tabs1},{title:"选项卡",content:tabs2},{title:"内容区",content:tabs3},{title:"阴影",content:tabs4}];
        var tabs = zmEditor.component.setItems.tabs(tabsList);
        box.css({"width":"350px","height":"685px"});
        return tabs;
    },
    method:{
        channelTab:function(ele,obj){
            var e = $('<div class="zm-edit-components-tabs-channel clearFloat">'
                +'<span class="zm-edit-text-title"></span>'
                +'<label class="zm-switch-box"><span class="zm-switch"><span class="fa fa-minus"></span></span></label>'
                +'<div class="zm-edit-components-tabs-channel-shadow"></div>'
                +'</div>'
            );
            var _shadow = e.find(".zm-edit-components-tabs-channel-shadow");
            var _btn = e.find(".zm-switch-box");
            e.find(".zm-edit-text-title").text(obj.title);
            //初始化按钮状态
            if(ele.attr("data-judge-channel") == "true"){
                _shadow.hide();
                _btn.addClass("zm-switch-box-on");
                _btn.children().children().removeClass("fa-minus").addClass("fa-check");
            }
            _btn.zmActionOn("click",function(){
                var judge = ele.attr("data-judge-channel");
                if(judge == "true"){
                    _shadow.stop().slideDown();
                    ele.attr("data-judge-channel","false").stop().slideUp();
                }else{
                    _shadow.stop().slideUp();
                    ele.attr("data-judge-channel","true").stop().slideDown();
                }
            });
            return e;
        }, //频道开关 ok
        channelLink:function(ele){
            var e = $('<div class="zm-edit-components-tabs-channel-link">'
                +'<div class="zm-edit-components-tabs-channel-link-name"><span class="zm-edit-text-title">标题名称</span><input type="text" placeholder="频道名称"/></div>'
                +'<div class="zm-edit-components-tabs-channel-link-link"><span class="zm-edit-text-title">链接</span><label class="zm-switch-box"><span class="zm-switch"><span class="fa fa-minus"></span></span></label><span class="zm-set-link">设置</span></div>'
                +'<div class="zm-edit-components-tabs-channel-link-text"><span class="zm-edit-text-title">页面</span><span class="zm-edit-components-tabs-channel-link-text-name"></span></div>'
                +'</div>'
            );
            var _input = e.find(".zm-edit-components-tabs-channel-link-name > input");
            var onOff = e.find("label");
            var _popLink = e.find(".zm-set-link");
            var _text = e.find(".zm-edit-components-tabs-channel-link-text-name");
            _input.attr("placeholder",ele.children().text());
            if(ele.attr("data-type-link") == "true"){
                onOff.addClass("zm-switch-box-on");
                onOff.children().children().removeClass("fa-minus").addClass("fa-check");
                _popLink.addClass("choiceColor").attr("onclick","zmEditor.dialog.setHref(this)");
            }
            _input.zmActionOn("input",function(){
                limitLength($(this),20);
                var text = $(this).val();
                ele.find("span").text(text);
            });
            onOff.zmActionOn("click",function(){
                var _this = $(this);
                if(_this.hasClass("zm-switch-box-on")){
                    ele.attr("data-type-link","false");
                    _popLink.removeClass("choiceColor");
                }else{
                    ele.attr("data-type-link","true");
                    _popLink.addClass("choiceColor");
                }
            });
            _popLink.on("click",function(){
                var _this = $(this);
                if(_this.hasClass("choiceColor")){
                    zmEditor.dialog.setHref(ele,e);

                }
            });
            return e;
        }, //频道链接 ok
        tabTopBdCol:function(ele) {
            var e = $('<div class="zm-edit-components-tabs-top-border">'
                +'<div class="zm-edit-components-tabs-top-border-onOff"><span class="zm-edit-text-title">上边框</span><label class="zm-switch-box"><span class="zm-switch"><span class="fa fa-minus"></span></span></label></div>'
                +'<div class="zm-edit-components-tabs-top-border-wrap">'
                +'<div class="zm-edit-components-tabs-top-border-col"></div>'
                +'<div class="zm-edit-components-tabs-top-border-hei"></div>'
                +'</div></div>');

	        var wrap = e.find(".zm-edit-components-tabs-top-border-wrap");
	        var _col = e.find(".zm-edit-components-tabs-top-border-col");
	        var _hei = e.find(".zm-edit-components-tabs-top-border-hei");
	        var col = zmEditor.component.setItems.slider(ele,{title: "颜色",style: "tab_color",isColor: true,param: "borderTopColor"});
	        var hei = zmEditor.component.setItems.slider(ele,{title: "高度<br><span>(像素)</span>",style: "tab_noColor",isColor: false,param: "borderTopWidth",size: [0,10]});
	        var label = e.find(".zm-switch-box");

	        var whole_color;//整体边框颜色设置项
            var whole_size;//整体边框高度设置
            setTimeout(function(){
	            whole_color = e.siblings().eq(2);
	            whole_size = e.siblings().eq(3);
            },100);
	        //初始化
	        _col.append(col);
	        _hei.append(hei);
	        if(ele.attr("data-judge-topBorder") == 'true') {
		        label.addClass("zm-switch-box-on");
		        label.children().children().removeClass("fa-minus").addClass("fa-check");
		        wrap.slideUp();
	        }
	        //事件
            label.on("click",function(){
                var judge_t = ele.attr("data-judge-topBorder");
                if(judge_t == "true") {
                    console.log("关闭上边框");
	                wrap.slideUp();
                    ele.attr({"data-tb": ele.css("borderTop"),"data-judge-topBorder": "false"}).css("borderTop","none");

                }else{
                    console.log("打开上边框");
                    //1.记录整体边框属性
                    //2.整体边框属性置零
                    //3.设置项相应改变
                    //4.添加上边框属性
                    //5.设置项相应改变
	                ele.attr({"data-bd": ele.css("border"),"data-judge-topBorder":"true"}).css("border","0 solid rgba(0,0,0,0)");

	                zmEditor.component.setItems.resetOption(whole_color);
	                zmEditor.component.setItems.resetOption(whole_size);

                    // whole_color.find(".zm-edit-slider-child").css("left","0");
                    // whole_color.find(".zm-edit-slider-val").val("0");
                    // whole_color.find(".zm-colorPicker-switch").css("backgroundColor","transparent");
                    // whole_size



	                wrap.slideDown();
                }
            });
            return e;
        },//上门楣 ok
        tabBotBdCol:function(ele){
            var e = $('<div class="zm-edit-components-tabs-bottom-border">'
                +'<div class="zm-edit-components-tabs-bottom-border-onOff"><span class="zm-edit-text-title">下边框</span><label class="zm-switch-box"><span class="zm-switch"><span class="fa fa-minus"></span></span></label></div>'
                +'<div class="zm-edit-components-tabs-bottom-border-wrap">'
                +'<div class="zm-edit-components-tabs-bottom-border-col"></div>'
                +'<div class="zm-edit-components-tabs-bottom-border-hei"></div>'
                +'</div>'
                // +'<div class="zm-edit-components-tabs-temporary"></div>'
                +'</div>'
            );
            var col = zmEditor.component.setItems.slider(ele,{title: "颜色",style: "tab_color",isColor: true,param: "borderBottomColor"});
            var hei = zmEditor.component.setItems.slider(ele,{title: "高度<br><span>(像素)</span>",style: "tab_noColor",isColor: false,param: "borderBottomWidth",size: [0,10]});
            var _col = e.find(".zm-edit-components-tabs-bottom-border-col");
            var _hei = e.find(".zm-edit-components-tabs-bottom-border-hei");
            _col.append(col);
            _hei.append(hei);

            // var shadowTop = e.find(".zm-edit-components-tabs-temporary");
            var wrap = e.find(".zm-edit-components-tabs-bottom-border-wrap");
            var onOff = e.find(".zm-switch-box");
            var initJudge = ele.attr("data-judge-botBorder");
            if(initJudge == 'true'){
                onOff.addClass("zm-switch-box-on");
                onOff.children().children().removeClass("fa-minus").addClass("fa-check");
                wrap.slideDown();
                // shadow.hide();
                // shadowTop.show();
            }
            onOff.zmActionOn("click",function(){
                var judge_b = ele.attr("data-judge-botBorder");
                var judge_t = ele.attr("data-judge-topBorder");
                if(judge_b == "true"){
                    wrap.slideToggle();
                    // shadow.fadeToggle("500");
                    // shadowTop.fadeToggle("500");
                    ele.attr("data-judge-botBorder","false").css("borderBottomStyle","none");
                    if(judge_t != "true"){
                        ele.css("borderStyle","solid");
                    }
                }else{
                    if(judge_t != "true"){
                        ele.css("borderStyle","none");
                    }
                    wrap.slideToggle();
                    // shadow.fadeToggle("500");
                    // shadowTop.fadeToggle("500");
                    ele.attr("data-judge-botBorder","true").css({"borderBottomStyle":"solid"});
                }
            });
            return e;
        },//下门楣 ok
        tabTitLink:function(ele){
            var e = $('<div class="zm-edit-components-tabs-link">'
                +'<div class="zm-edit-components-tabs-lab"><span>选项名称</span><span>链接开关</span><span>设置</span></div>'
                +'<div class="zm-edit-components-tabs-cont"></div>'
                +'<div class="zm-edit-components-tabs-add"><div><i class="fa fa-plus"></i><span>选项</span></div></div>'
                +'</div>'
            );
            var str = '<div class="zm-edit-components-tabs-titleLink"><span class="zm-edit-components-tabs-link-close fa fa-remove"></span><input type="text" maxlength="16"  class="zm-edit-components-tabs-text" placeholder="请输入名称" maxlength="8"/><label class="zm-switch-box"><span class="zm-switch"><span class="fa fa-minus"></span></span></label><span class="zm-edit-components-tabs-popup">设置</span></div>';
            var wrap = e.find(".zm-edit-components-tabs-cont");
            var num = ele.find(".zm-edit-components-tabs-tit-lab > li").length;
            for(var i=0;i<num;i++){
                wrap.append(str);
            }
            var add = e.find(".zm-edit-components-tabs-add > div");
            //初始化
            var lab = ele.find(".zm-edit-components-tabs-tit-lab > li");
            var btn = e.find(".zm-switch-box");
            var set = e.find(".zm-edit-components-tabs-popup");
            var input = wrap.find("input");
            input.each(function(index){
                var _this = $(this);
                _this.attr("placeholder",lab.children().eq(index).text());
            });
            lab.each(function(index){
                var _this = $(this);
                var _tit = _this.attr("data-type-info");
                if(_this.attr("data-type-link") == 'true'){
                    btn.eq(index).addClass("zm-switch-box-on");
                    btn.eq(index).children().children().removeClass("fa-minus").addClass("fa-check");
                    set.eq(index).addClass("choiceColor").attr({"onclick":"zmEditor.dialog.setHref(this)"});
                    if(_tit){
                        set.eq(index).attr("title",_tit);
                    }
                }
            });
            //结束
            add.zmActionOn("click",function(){
                var length = e.find(".zm-edit-components-tabs-titleLink").length;
                if( length < 9){
                    wrap.append(str);
                    ele.find(".zm-edit-components-tabs-tit-lab").append("<li><span>标题</span></li>");
                    ele.find(".zm-edit-components-tabs-cont").append("<div title='请自行拖曳内容到组件内'></div>");
                    add.removeAttr("disabled");
                    if(length == 8){
                        add.attr("disabled","disabled");
                    }
                }
            });
            e.zmActionOn("click",".zm-switch-box",function(){
                var _this = $(this);
                var _index = e.find(".zm-switch-box").index(this);
                var lab = ele.find(".zm-edit-components-tabs-tit-lab > li");
                if(_this.hasClass("zm-switch-box-on")){
                    _this.removeClass(".zm-switch-box-on");
                    _this.parent().find(".zm-edit-components-tabs-popup").removeClass("choiceColor").attr("onclick","");
                    lab.eq(_index).attr("data-type-link",'false');
                }else{
                    _this.addClass(".zm-switch-box-on");
                    _this.parent().find(".zm-edit-components-tabs-popup").addClass("choiceColor").attr("onclick","zmEditor.dialog.setHref(this)");
                    lab.eq(_index).attr("data-type-link","true");
                }
            });
            e.zmActionOn("click",".zm-edit-components-tabs-link-close",function(){
                var closeList = e.find(".zm-edit-components-tabs-link-close");
                var labList = ele.find(".zm-edit-components-tabs-tit-lab > li");
                var contList = ele.find(".zm-edit-components-tabs-cont > div");
                var _this = $(this);
                var _index = closeList.index(_this);
                labList.eq(_index).remove();
                contList.eq(_index).remove();
                $(this).closest(".zm-edit-components-tabs-titleLink").remove();
                return false;
            });
            e.zmActionOn("focus",".zm-edit-components-tabs-text",function(){
                var _this = $(this);
                var _index = e.find(".zm-edit-components-tabs-text").index(_this);
                var titlist = ele.find(".zm-edit-components-tabs-tit-lab > li > span");
                e.on("input",".zm-edit-components-tabs-text",function(){
                    var text = _this.val();
                    titlist.eq(_index).text(text);
                });
            });
            return e;
        },//网址选择 ok
        tabTitAlign:function(ele){
            var e = $('<div class="zm-edit-components-tabs-align">'
                +'<span class="zm-edit-components-text-title">对齐方式</span>'
                +'<div class="zm-edit-components-tabs-radios-left"><label></label><span><i class="fa fa-align-left" style="border-right: 2px solid #fff;"></i><i class="fa fa-align-left" style="border-right: 2px solid #fff;"></i><i class="fa fa-align-left"></i></span></div>'
                +'<div class="zm-edit-components-tabs-radios-right"><label></label><span><i class="fa fa-align-right" style="float: right;"></i><i class="fa fa-align-right" style="border-right: 2px solid #fff;float: right;"></i><i class="fa fa-align-right" style="border-right: 2px solid #fff;float: right;"></i></span></div>'
                +'<div class="zm-edit-components-tabs-radios-center"><label></label><span><i class="fa fa-align-center" style="border-right: 2px solid #fff;width: 75px;"></i><i class="fa fa-align-center" style="border-right: 2px solid #fff;width: 75px;"></i><i class="fa fa-align-center" style="width: 75px;"></i></span></div>'
                +'</div>'
            );
            var label = e.find("label");
            var type = ele.attr("data-type-align");
            switch(type){
                case "left":
                    label.eq(0).addClass("choice");
                    break;
                case "right":
                    label.eq(1).addClass("choice");
                    break;
                case "center":
                    label.eq(2).addClass("choice");
                    break;
                default:
                    label.eq(0).addClass("choice");
                    break;
            }
            label.zmActionOn("click",function(){
                var _this = $(this);
                var _index = label.index(this);
                switch(_index){
                    case 0 :
                        ele.css("justify-content","flex-start");
                        ele.find("li").css("flex","");
                        ele.attr("data-type-align","left");
                        break;
                    case 1 :
                        ele.css("justify-content","flex-end");
                        ele.find("li").css("flex","");
                        ele.attr("data-type-align","right");
                        break;
                    case 2 :
                        ele.find("li").css("flex","1");
                        ele.attr("data-type-align","center");
                        break;
                }
                label.removeClass("choice");
                _this.addClass("choice");
            });
            return e;
        },//对齐方式 ok
        tabLabTopBdCol:function(ele) {
            var e = $('<div class="zm-edit-components-tabs-top-border">'
                +'<div class="zm-edit-components-tabs-top-border-onOff"><span class="zm-edit-text-title">上边线</span><label class="zm-switch-box"><span class="zm-switch"><span class="fa fa-minus"></span></span></label></div>'
                +'<div class="zm-edit-components-tabs-top-border-wrap">'
                +'<div class="zm-edit-components-tabs-top-border-col"></div>'
                +'<div class="zm-edit-components-tabs-top-border-hei"></div>'
                +'</div>'
                +'</div>'
            );
            var col = zmEditor.component.setItems.slider(ele,{title: "颜色",style: "tab_color",isColor: true,param: "hoverBorderTopColor",goal: "li"});
            var hei = zmEditor.component.setItems.slider(ele,{title: "高度",style: "tab_noColor",isColor: false,param: "hoverBorderTopWidth",size: [0,20],goal: "li"});
            var _col = e.find(".zm-edit-components-tabs-top-border-col");
            var _hei = e.find(".zm-edit-components-tabs-top-border-hei");
            _col.append(col);
            _hei.append(hei);

            var wrap = e.find(".zm-edit-components-tabs-top-border-wrap");
            var onOff = e.find(".zm-switch-box");
            var initJudge = ele.find("li").attr("data-judge-HTC");
            if(initJudge == "true"){
                wrap.show();
                onOff.addClass("zm-switch-box-on");
                onOff.children().children().removeClass("fa-minus").addClass("fa-check");
            }
            onOff.zmActionOn("click",function(){
                var judge = ele.find("li").attr("data-judge-HTC");
                if(judge == "true"){
                    wrap.slideUp();
                    ele.find("li").attr("data-judge-HTC","false");
                    ele.find("li").css('borderTopStyle','none');
                }else{
                    wrap.slideDown();
                    ele.find("li").attr("data-judge-HTC","true");
                    ele.find("li").css('borderTopStyle','solid');
                }
            });
            return e;
        },//上边线 ok
        tabLabBotBdCol:function(ele){
            var e = $('<div class="zm-edit-components-tabs-bottom-border">'
                +'<div class="zm-edit-components-tabs-bottom-border-onOff"><span class="zm-edit-text-title">下边线</span><label class="zm-switch-box"><span class="zm-switch"><span class="fa fa-minus"></span></span></label></div>'
                +'<div class="zm-edit-components-tabs-bottom-border-wrap">'
                +'<div class="zm-edit-components-tabs-bottom-border-col"></div>'
                +'<div class="zm-edit-components-tabs-bottom-border-hei"></div>'
                +'</div></div>'
            );
            var col = zmEditor.component.setItems.slider(ele,{title: "颜色",style: "tab_color",isColor: true,param: "hoverBorderBottomColor",goal: "li"});
            var hei = zmEditor.component.setItems.slider(ele,{title: "高度",style: "tab_noColor",isColor: false,param: "hoverBorderBottomWidth",size: [0,20],goal: "li"});
            var _col = e.find(".zm-edit-components-tabs-bottom-border-col");
            var _hei = e.find(".zm-edit-components-tabs-bottom-border-hei");
            _col.append(col);
            _hei.append(hei);

            var wrap = e.find(".zm-edit-components-tabs-bottom-border-wrap");
            var onOff = e.find(".zm-switch-box");
            var initJudge = ele.find("li").attr("data-judge-HBC");
            if(initJudge == "true"){
                wrap.show();
                onOff.addClass("zm-switch-box-on");
                onOff.children().children().removeClass("fa-minus").addClass("fa-check");
            }
            onOff.zmActionOn("click",function(){
                var judge = ele.find("li").attr("data-judge-HBC");
                if(judge == "true"){
                    wrap.slideUp();
                    ele.find("li").css('borderBottomStyle','none').attr("data-judge-HBC","false");
                }else{
                    wrap.slideDown();
                    ele.find("li").css('borderBottomStyle','solid').attr("data-judge-HBC","true");
                }
            });
            return e;
        } //下边线 ok
    }
};
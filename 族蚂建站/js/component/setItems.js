/**
 * Created by Administrator on 2017/2/23.
 */
//组件设置项
zmEditor.component.setItems={
    config:function(e){
        var len = e.length,items=[];
        var com_type = zmEditor.component.nowBox1().attr('data-zm-component-type');
        for(var i = 0;i<len;i++){
            var _type=e[i].type,_element=e[i].element;
            _element=(_element==undefined||_element=='')?zmEditor.component.nowEdit():_element;
            if(zmEditor.component.setItems[_type]){
                if(typeof zmEditor.component.setItems[_type]=='function'){
                    // console.info(this instanceof jQuery); //false
                    // console.info($(this) instanceof jQuery); //true
                    items.push(zmEditor.component.setItems[_type](_element,e[i].flag).addClass("zm-edit-item"));
                    // if(zmEditor.component.setItems[_type](_element,e[i].flag) instanceof jQuery){
                    //     items.push(zmEditor.component.setItems[_type](_element,e[i].flag).addClass("zm-edit-item"));
                    // }
                    // else{
                    //     console.error('Zuma Error : 配置方法【'+_type+'】，无返回值！！！');
                    //     return;
                    // }
                }
            }
            else {
                if(typeof zmEditor.component[com_type].setItems[_type]=='function'){
                    items.push(zmEditor.component[com_type].setItems[_type](_element,e[i].flag).addClass("zm-edit-item"));
                }
                else{
                    console.error('Zuma Error : 配置参数【' + _type + '】，在setItems.js中找不到对应方法！！！');
                    return;
                }
            }
        }
        // return items;
        var tabs=$('<div></div>');
        items.forEach(function(e){
            tabs.append(e);
        });
        return tabs;
    },
    tabs: function (list) {
        var tabs = $('<div class="zm-tab"><ul class="zm-tab-title"></ul><div class="zm-tab-content"></div></div>');
        var title = tabs.find(".zm-tab-title");
        var content = tabs.find(".zm-tab-content");
        var len = list.length;
        var width = 100 / len + "%";
        var curLiClass = "zm-tab-title-cur";
        var curDivClass = "zm-tab-content-cur";
        for (var i = 0; i < len; i++) {
            var curLi = "";
            if (i == 0) {
                curLi = curLiClass;
                list[i].content.addClass("zm-tab-content-cur")
            }
            // title.append('<li class="' + curLi + '" style="width:' + width + '">' + list[i].title + '</li>');
            title.append('<li class="' + curLi + '" >' + list[i].title + '</li>');
            list[i].content.addClass('zm-tab-content-sub')
            content.append(list[i].content);
        }
        tabs.on("click", ".zm-tab-title li", function () {
            // var thisLi = $(this);
            // thisLi.addClass(curLiClass).siblings().removeClass(curLiClass)
            // var content = thisLi.closest(".zm-tab").find(".zm-tab-content");
            // var thisTab = content.children("div").eq(thisLi.index())
            //thisTab.addClass(curDivClass).siblings().removeClass(curDivClass);
            var thisLi = $(this);
            // var box = thisLi.closest('.zm-tab-content');
            // box.css({'overflow':'hidden'})
            var thisIndex = thisLi.index();
            var oldLiIndex = thisLi.closest('ul').find('li.'+curLiClass).index();
            if(thisIndex==oldLiIndex){return;}
            thisLi.addClass(curLiClass).siblings().removeClass(curLiClass);
            var content = thisLi.closest(".zm-tab").find(".zm-tab-content");
            var thisTab = content.children("div").eq(thisIndex);
            if(thisIndex>oldLiIndex){
                thisTab.css({'left':'350px','display':'block'})
                    .stop().animate({'left':0},300).siblings().hide()
            }
            if(thisIndex<oldLiIndex){
                thisTab.css({'left':'-350px','display':'block'})
                    .stop().animate({'left':0},300).siblings().hide()
            }
        });
        tabs.find('.zm-tab-content .zm-tab-content-sub').css({height: '600px'})
        return tabs;
    },
    tabs_other:function(list){
        var tabs = $('<div class="zm-tab-other"><ul class="zm-tab-other-title"></ul><div class="zm-tab-other-content"></div></div>');
        var title = tabs.find(".zm-tab-other-title");
        var content = tabs.find(".zm-tab-other-content");
        var len = list.length;
        for (var i = 0; i < len; i++) {
            var curLi = "";
            // if (i == 0) {
            //     curLi = "zm-tab-other-title-cur";
            //     list[i].content.addClass("zm-tab-other-content-cur")
            // }
            if (list[i].isShow) {
                curLi = "zm-tab-other-title-cur";
                list[i].content.addClass("zm-tab-other-content-cur");
            }
            var iLi = $('<li class="' + curLi + '" >' + list[i].title + '</li>');
            if (list[i].isShow) {
                iLi.find('label').addClass('choice')//桂学锋特用
            }
            iLi.data('data-zm-fn',list[i].callBack)
            title.append(iLi);
            list[i].content.addClass('zm-tab-other-content-sub');
            content.append(list[i].content);
        }
        tabs.on("click", ".zm-tab-other-title li", function () {
            var thisLi = $(this);
            eval('('+thisLi.data('data-zm-fn')+')()');
            thisLi.addClass("zm-tab-other-title-cur").siblings().removeClass("zm-tab-other-title-cur");
            thisLi.closest('ul').find('label').removeClass('choice')//桂学锋特用
            thisLi.find('label').addClass('choice');//桂学锋特用
            var content = thisLi.closest(".zm-tab-other").find(".zm-tab-other-content");
            var thisTab = content.find("div.zm-tab-other-content-sub").eq(thisLi.index())
            // thisTab.addClass("zm-tab-other-content-cur").siblings().removeClass("zm-tab-other-content-cur")
            // thisTab.stop().fadeIn().siblings().stop().fadeOut();
            thisTab.show().siblings().hide();
        });
        tabs.find('.zm-edit-item').css({paddingLeft:0,paddingRight:0,margin:'0 20px'});
        tabs.find('.zm-tab-child-content .zm-tab-child-content-sub').css({height:'494px'});
        //tabs.find('.zm-tab-other-content>div').css({height:'550px'}).mCustomScrollbar({theme:"minimal"});//加滚动条
        return tabs;
    },
    tabs_child: function (list) {
        var tabs = $('<div class="zm-tab-child"><ul class="zm-tab-child-title"></ul><div class="zm-tab-child-content"></div></div>');
        var title = tabs.find(".zm-tab-child-title");
        var content = tabs.find(".zm-tab-child-content");
        var len = list.length;
        for (var i = 0; i < len; i++){
            var curLi = "";
            if (i == 0) {
                curLi = "zm-tab-child-title-cur";
                list[i].content.addClass("zm-tab-child-content-cur")
            }
            title.append('<li class="' + curLi + '">' + list[i].title + '</li>');
            list[i].content.addClass('zm-tab-child-content-sub');
            content.append(list[i].content);
        }
        tabs.on("click", ".zm-tab-child-title li", function () {
           // console.log('child')
            var thisLi = $(this);
            thisLi.addClass("zm-tab-child-title-cur").siblings().removeClass("zm-tab-child-title-cur")
            var content = thisLi.closest(".zm-tab-child").find(".zm-tab-child-content");
            var thisTab = content.find("div.zm-tab-child-content-sub").eq(thisLi.index())
            // thisTab.addClass("zm-tab-child-content-cur").siblings().removeClass("zm-tab-child-content-cur")
            // thisTab.stop().fadeIn().siblings().stop().fadeOut();
            thisTab.show().siblings().hide();
        });
        tabs.find('.zm-edit-item').css({paddingLeft:0,paddingRight:0,margin:'0 20px'});
        tabs.find('.zm-tab-child-content .zm-tab-child-content-sub').css({height:'600px'});
        //tabs.find('.zm-tab-child-content>div').css({height:'550px'}).mCustomScrollbar({theme:"minimal"});//加滚动条
        return tabs;
    },
    slider: function (ele, obj) {
        var e = zmEditor.component.setItems.strings.strSize();
        var type = obj.param, title = obj.title, style = obj.style, min = 0, max = 100, tar = obj.goal,toFixed=obj.toFixed;
        if (obj.size) {
            min = obj.size[0], max = obj.size[1];
        }
        if (obj.isColor) {
            e = zmEditor.component.setItems.strings.strColor(ele,{param: type,goal: tar});
            min = 0;
            max = 100;
        }
        e.zmSlider({goal: ele, type: type, title: title, style: style, minSize: min, maxSize: max,EM: tar,toFixed:toFixed});
        return e;
    },
    slider1: function (ele, obj) {
        var e = zmEditor.component.setItems.strings.strSize1();
        var type = obj.param, title = obj.title, style = obj.style, min = 0, max = 100, tar = obj.goal,toFixed=obj.toFixed;
        if (obj.size) {
            min = obj.size[0], max = obj.size[1];
        }
        if (obj.isColor) {
            e = zmEditor.component.setItems.strings.strColor(ele,{param: type,goal: tar});
            min = 0;
            max = 100;
        }
        e.zmSlider({goal: ele, type: type, title: title, style: style, minSize: min, maxSize: max,EM: tar,toFixed:toFixed});
        return e;
    },
    strings: {
        strSize: function () {
            return $('<div >'
                + '<span class="zm-edit-text-title"></span>'
                + '<span class="zm-edit-slider-parent"><span class="zm-edit-slider-child"></span><span class="zm-edit-slider-child-hover"></span></span>'
                + '<input type="text" class="zm-edit-slider-val">'
                + '</div>');
        },
        strSize1: function () {
            return $('<div >'
                + '<span class="zm-edit-text-title"></span>'
                + '<span class="zm-edit-slider-parent"><span class="zm-edit-slider-child"></span><span class="zm-edit-slider-child-hover"></span></span>'
                + '<span style="display:inline-block;height: 30px;width:30px;line-height: 30px;text-align: center">1:</span><input type="text" class="zm-edit-slider-val">'
                + '</div>');
        },
        strColor: function (ele,obj) {
            var e = $('<div>'
                + '<span class="zm-edit-text-title"></span>'
                + '<span class="zm-edit-slider-parent"><span class="zm-edit-slider-child"></span><span class="zm-edit-slider-child-hover"></span></span>'
                + '<input type="text" class="zm-edit-slider-val">'
                + '<i>%</i>'
                + '<div class="zm-color-wrap"></div>'
                + '</div>');
            var wrap = e.find(".zm-color-wrap");
            var color = zmEditor.component.setItems.strings.color(ele,obj);
            wrap.append(color);
            return e;
        },
        //obj={style: "normal" || "" || "mini" ,goal: 如果有未来元素 传未来元素的class名 如 ".test001",如果没有.不传此参数}
        family: function (ele,obj) {
            var e = $('<div class="zm-edit-components-select">'
                +'<div class="zm-edit-components-select-show"><span class="zm-edit-components-select-val"></span><i class="zm-edit-components-select-icon fa fa-angle-down"></i></div>'
                +'<ul class="zm-edit-components-select-hide mCustomScrollbar" data-mcs-theme="minimal">'
                +'<li style="font-family: \\9ED1\\4F53">黑体</li>'
                +'<li style="font-family: \\5B8B\\4F53">宋体</li>'
                +'<li style="font-family: \\4EFF\\5B8B">仿宋</li>'
                +'<li style="font-family: \\6977\\4F53">楷体</li>'
                +'<li style="font-family: \\96B6\\4E66">隶书</li>'
                +'<li style="font-family: \\5E7C\\5706">幼圆</li>'
                +'<li style="font-family: \\65B0\\5B8B\\4F53">新宋体</li>'
                +'<li style="font-family: \\5FAE\\8F6F\\96C5\\9ED1">微软雅黑</li>'
                +'<li style="font-family: \\534E\\6587\\7EC6\\9ED1">华文细黑</li>'
                +'<li style="font-family: \\534E\\6587\\9ED1\\4F53">华文黑体</li>'
                +'<li style="font-family: \\534E\\6587\\6977\\4F53">华文楷体</li>'
                +'<li style="font-family: \\534E\\6587\\5B8B\\4F53">华文宋体</li>'
                +'<li style="font-family: \\534E\\6587\\4EFF\\5B8B">华文仿宋</li>'
                +'<li style="font-family: \\534E\\6587\\5F69\\4E91">华文彩云</li>'
                +'<li style="font-family: \\65B9\\6B63\\8212\\4F53">方正舒体</li>'
                +'<li style="font-family: Arial">Arial</li>'
                +'<li style="font-family: Helvetica">Helvetica</li>'
                +'<li style="font-family: Times New Roman">Times New Roman</li>'
                +'<li style="font-family: Kokila">Kokila</li>'
                +'<li style="font-family: Garamond">Garamond</li>'
                +'<li style="font-family: Bodoni MT">Bodoni MT</li>'
                +'<li style="font-family: Calibri">Calibri</li>'
                +'</ul></div>');
            switch (obj.style) {
                case "normal":
                    e.css("width", "210px");
                    break;
                case "mini":
                    e.css("width", "100px");
                    break;
                case "tab_mini":
                    e.css("width","100px");
                    break;
                default:
                    e.css("width", "190px");
                    break;
            }
            var b;
            if(obj.goal){
                b = ele.find(obj.goal).css("font-family");
            }else{
                b = ele.css("font-family");
            }
            var c = b.replace(/"([^"]*)"/g,"$1");
            e.find(".zm-edit-components-select-val").text(c);
            var show = e.find(".zm-edit-components-select-show");
            var ul = e.find(".zm-edit-components-select-hide");
            var icon = e.find(".zm-edit-components-select-icon");
            var li = e.find("li");
            var val = e.find(".zm-edit-components-select-val");
            show.on("click",function(){
                ul.stop().slideToggle("500");
                if(icon.is(".fa-angle-down")){
                    icon.removeClass("fa-angle-down").addClass("fa-angle-up");
                }else{
                    icon.removeClass("fa-angle-up").addClass("fa-angle-down");
                }
            });
            li.zmActionOn("click",function(){
                var _this = $(this);
                var _val = _this.css("font-family");
                var goal;
                if(obj.goal){
                    goal = ele.find(obj.goal);
                }else{
                    goal = ele;
                }
                goal.css("fontFamily", _val);
                val.text(_this.text());
                ul.hide();
                if(icon.is(".fa-angle-down")){
                    icon.removeClass("fa-angle-down").addClass("fa-angle-up");
                }else{
                    icon.removeClass("fa-angle-up").addClass("fa-angle-down");
                }
            });
            $(document).on("click",function(e){
                var target = $(e.target);
                if(target.closest(".zm-edit-components-select").length == 0){
                    ul.stop().slideUp("500");
                    icon.removeClass("fa-angle-up").addClass("fa-angle-down");
                }
            })
            return e;
        },
        //obj={style: ,goal: }参考family
        size: function (ele,obj) {
            var e = $('<div class="zm-edit-components-select">'
                +'<div class="zm-edit-components-select-show"><span class="zm-edit-components-select-val"></span><i class="zm-edit-components-select-icon fa fa-angle-down"></i></div>'
                +'<ul class="zm-edit-components-select-hide mCustomScrollbar" data-mcs-theme="minimal">'
                +'<li>12</li>'
                +'<li>14</li>'
                +'<li>16</li>'
                +'<li>18</li>'
                +'<li>20</li>'
                +'<li>28</li>'
                +'<li>36</li>'
                +'<li>48</li>'
                +'<li>72</li>'
                +'</ul></div>');
            switch (obj.style) {
                case "normal":
                    e.css("width", "100px");
                    break;
                case "mini":
                    e.css("width", "65px");
                    break;
                case "tab_mini":
                    e.css("width","65px");
                    break;
                default:
                    e.css("width", "100px");
                    break;
            }
            var show = e.find(".zm-edit-components-select-show");
            var ul = e.find(".zm-edit-components-select-hide");
            var li = e.find("li");
            var val = e.find(".zm-edit-components-select-val");
            var icon = e.find(".zm-edit-components-select-icon");
            if(obj.goal){
                val.text(parseInt(ele.find(obj.goal).css("fontSize")));
            }else{
                val.text(parseInt(ele.css("fontSize")));
            }
            show.zmActionOn("click",function(){
                ul.stop().slideToggle("500");
                if(icon.is(".fa-angle-down")){
                    icon.removeClass("fa-angle-down").addClass("fa-angle-up");
                }else{
                    icon.removeClass("fa-angle-up").addClass("fa-angle-down");
                }
            });
            li.zmActionOn("click",function(){
                var _this = $(this);
                var _val = _this.text() + "px";
                var goal;
                if(obj.goal){
                    goal = ele.find(obj.goal);
                }else{
                    goal = ele;
                }
                goal.css("fontSize",_val);
                val.text(_this.text());
                ul.hide();
                if(icon.is(".fa-angle-down")){
                    icon.removeClass("fa-angle-down").addClass("fa-angle-up");
                }else{
                    icon.removeClass("fa-angle-up").addClass("fa-angle-down");
                }
            });
            $(document).on("click",function(e){
                var target = $(e.target);
                if(target.closest(".zm-edit-components-select").length == 0){
                    ul.stop().slideUp("500");
                    icon.removeClass("fa-angle-up").addClass("fa-angle-down");
                }
            })

            return e;
        },
        //obj={goal: ,param: ,}//功能
        color:function(ele,obj){
            var e = $('<div class="zm-colorPicker"><span class="zm-colorPicker-switch"></span></div>');
            var option = e.find(".zm-colorPicker-switch");
            var type = obj.param;
            var goal = zmEditor.component.setItems.strings.future(ele,obj);
            var present;
            /****************************** 初始化颜色框 ****************************/
            switch(type){
                case "borderColor":
                    var nc;
                    if(navigator.userAgent.indexOf("Firefox") != -1){
                        nc = zmEditor.component.setItems.getOpaCol({goal: goal,type: "borderTopColor"});
                    }else{
                        nc = zmEditor.component.setItems.getOpaCol({goal: goal,type: type});
                    }
                    zmEditor.component.setItems.setOpaCol({goal: option, type: "backgroundColor", value: nc});
                    break;
                case "color":
                case "backgroundColor":
                case "borderTopColor":
                case "borderBottomColor":
                case "shadowC":
                case "fill":
                case "stroke":
                    var nowColor = zmEditor.component.setItems.getOpaCol({goal: goal,type: type});
                    zmEditor.component.setItems.setOpaCol({goal: option, type: "backgroundColor", value: nowColor});
                    break;
                case "hoverColor":
                case "hoverBackgroundColor":
                case "hoverBorderColor":
                case "hoverBorderTopColor":
                case "hoverBorderBottomColor":
                case "hoverFill":
                    var hover_color = goal.attr("data-type-"+type);
                    var arr = type.slice(5).split("");
                    arr.splice(0,1,arr[0].toLowerCase());
                    var str = arr.join("");
                    if(hover_color){
                        option.css("backgroundColor",hover_color);
                    }else{
                        if(goal.css(str) == undefined){
                            option.css("backgroundColor","rgba(0,0,0,1)");
                        }else{
                            if(goal.css(str) == "rgba(0, 0, 0, 0)"){
                                option.css("backgroundColor","rgb(0,0,0)")

                            }else{
                                option.css("backgroundColor",goal.css(str));
                            }
                        }
                    }
                    break;
                default:
                    console.log("未定义的属性0_1");
                    break;
            }
            /****************************** 引入颜色插件 ****************************/
            e.each(function(){
                $(this).zmColorPicker();
            });
            /****************************** 定义常用颜色 ****************************/
            var colorArr = localStorage.Hcolorarr ? localStorage.Hcolorarr.split(",") : ["#ff461f","#3eede7","#b0a4e3","#edd1d8","#60281e","#1bd1a5","#9d2933","#e29c45","#955539","#fcefe8","#ff461f","#3eede7","#b0a4e3","#edd1d8","#60281e","#1bd1a5","#9d2933","#e29c45","#955539","#fcefe8"];
            /****************************** 弹出颜色选择框 ************************/
            option.on("click",function(e){
                var nowColor=$(this).css("backgroundColor");
                var clientX = e.clientX;
                var clientY = e.clientY;
                var moreBox = $(".zm-colorPicker-more");
                //moreBox.find(".colpick_current_color").css("backgroundColor",nowColor);
                $(".colpick_current_color").css("backgroundColor",nowColor);
                moreBox.hide();//隐藏颜色选择器
                $("#picker01").colpick({flat:true});
                var _this = $(this).closest(".zm-colorPicker");
                var thisMoreBox =_this.find(".zm-colorPicker-more");
                /*ay:颜色组件显示位置控制*/
                //此处直接获取颜色选择器宽高会有未知bug发生，故定死宽高
                // var moreBoxW = parseInt(moreBox.css('width'));
                // var moreBoxH = parseInt(moreBox.css('height'));
                var moreBoxW = 387;
                var moreBoxH = 349;
                var windowW = $(window).width();
                var windowH = $(window).height();
                var iLeft=clientX,iTop=clientY;
                if(windowW-clientX<moreBoxW){
                    iLeft=clientX-moreBoxW;
                }
                if(windowH-clientY<moreBoxH){
                    iTop=clientY-moreBoxH
                }
                thisMoreBox.show().css({"left": iLeft, "top": iTop});
                _this.find("#picker01").append($(".colpick_full"));
                var happR = _this.find("#zm-newColorSpan li");
                var zmColorSpan = happR.splice(0,20);
                console.log(colorArr.length)
                for (var i=0;i<colorArr.length;i++) {
                    zmColorSpan[i].style.backgroundColor=colorArr[i];
                }
                present = zmEditor.component.setItems.getOpaCol({goal: $(this),type: "backgroundColor"});
                $(".colpick_current_color").css("backgroundColor",nowColor)
            });

            /****************************** 拾色器小圆圈设置颜色 ************************/
            e.on("mousemove",".colpick_selector_outer",function () {
                console.log(111111)
                var goal = zmEditor.component.setItems.strings.future(ele,obj);
                var colorBox = e.find(".colpick_new_color");
                var valOpa = present.opacity;
                var valCol = zmEditor.component.setItems.getOpaCol({goal:colorBox,type:'backgroundColor'}).color;
                var _value = {color: valCol,opacity: valOpa};
                switch(type){
                    case "color":
                    case "backgroundColor":
                    case "borderColor":
                    case "borderTopColor":
                    case "borderBottomColor":
                    case "fill":
                    case "stroke":
                        zmEditor.component.setItems.setOpaCol({goal: goal,type: type,value: _value});
                        break;
                    case "shadowC":
                        var _shadow = goal.css("box-shadow");
                        var _str = _shadow.split(" ");
                        var _arr = [];
                        for(i in _str){
                            if(_str[i].indexOf("px") != -1){
                                _arr.push(_str[i]);
                            }
                        }
                        zmEditor.component.setItems.setOpaCol({goal:goal,type:type,value:_value,shadowXYBS:_arr});
                        break;
                    case "hoverColor":
                    case "hoverBackgroundColor":
                    case "hoverBorderColor":
                    case "hoverBorderTopColor":
                    case "hoverBorderBottomColor":
                    case "hoverFill":
                        var str = "rgba("+valCol[0]+","+valCol[1]+","+valCol[2]+","+valOpa+")";
                        goal.attr("data-type-"+type,str);
                        break;
                    default:
                        console.log("未配置的属性0_2");
                        break;
                }
                zmEditor.component.setItems.setOpaCol({goal: option,type: "backgroundColor",value: _value});

            })

            /****************************** 拾色器小长条拉动设置颜色 ************************/
            e.on("mousemove",".colpick_hue_arrs",function () {
                console.log(111111)
                var goal = zmEditor.component.setItems.strings.future(ele,obj);
                var colorBox = e.find(".colpick_new_color");
                var valOpa = present.opacity;
                var valCol = zmEditor.component.setItems.getOpaCol({goal:colorBox,type:'backgroundColor'}).color;
                var _value = {color: valCol,opacity: valOpa};
                switch(type){
                    case "color":
                    case "backgroundColor":
                    case "borderColor":
                    case "borderTopColor":
                    case "borderBottomColor":
                    case "fill":
                    case "stroke":
                        zmEditor.component.setItems.setOpaCol({goal: goal,type: type,value: _value});
                        break;
                    case "shadowC":
                        var _shadow = goal.css("box-shadow");
                        var _str = _shadow.split(" ");
                        var _arr = [];
                        for(i in _str){
                            if(_str[i].indexOf("px") != -1){
                                _arr.push(_str[i]);
                            }
                        }
                        zmEditor.component.setItems.setOpaCol({goal:goal,type:type,value:_value,shadowXYBS:_arr});
                        break;
                    case "hoverColor":
                    case "hoverBackgroundColor":
                    case "hoverBorderColor":
                    case "hoverBorderTopColor":
                    case "hoverBorderBottomColor":
                    case "hoverFill":
                        var str = "rgba("+valCol[0]+","+valCol[1]+","+valCol[2]+","+valOpa+")";
                        goal.attr("data-type-"+type,str);
                        break;
                    default:
                        console.log("未配置的属性0_2");
                        break;
                }
                zmEditor.component.setItems.setOpaCol({goal: option,type: "backgroundColor",value: _value});

            })

            /****************************** 确定按钮设置颜色 ************************/
            e.find("#picker01").on("click",".colpick_submit",function(){
                var goal = zmEditor.component.setItems.strings.future(ele,obj);
                e.find(".colpick_current_color").css("backgroundColor",e.find(".colpick_new_color").css("backgroundColor"))
                var colorBox = e.find(".colpick_current_color");
                var valOpa = present.opacity;
                var valCol = zmEditor.component.setItems.getOpaCol({goal:colorBox,type:'backgroundColor'}).color;
                var _value = {color: valCol,opacity: valOpa};
                switch(type){
                    case "color":
                    case "backgroundColor":
                    case "borderColor":
                    case "borderTopColor":
                    case "borderBottomColor":
                    case "fill":
                    case "stroke":
                        zmEditor.component.setItems.setOpaCol({goal: goal,type: type,value: _value});
                        break;
                    case "shadowC":
                        var _shadow = goal.css("box-shadow");
                        var _str = _shadow.split(" ");
                        var _arr = [];
                        for(var i in _str){
                            if(_str[i].indexOf("px") != -1){
                                _arr.push(_str[i]);
                            }
                        }
                        zmEditor.component.setItems.setOpaCol({goal:goal,type:type,value:_value,shadowXYBS:_arr});
                        break;
                    case "hoverColor":
                    case "hoverBackgroundColor":
                    case "hoverBorderColor":
                    case "hoverBorderTopColor":
                    case "hoverBorderBottomColor":
                    case "hoverFill":
                        var str = "rgba("+valCol[0]+","+valCol[1]+","+valCol[2]+","+valOpa+")";
                        goal.attr("data-type-"+type,str);
                        break;
                    default:
                        console.log("未配置的属性0_2");
                        break;
                }
                zmEditor.component.setItems.setOpaCol({goal: option,type: "backgroundColor",value: _value});
                $(".zm-colorPicker-more").hide();
            });

            /****************************** 经典颜色按钮设置颜色 *********************/
            e.find("#zm-frequentlyColorSpan li").on("mouseenter mouseleave",function(event){
                var goal = zmEditor.component.setItems.strings.future(ele,obj);
                var valOpa = present.opacity;
                var valCol = zmEditor.component.setItems.getOpaCol({goal: $(this),type: "backgroundColor"}).color;
                var _value = {color: valCol,opacity: valOpa};
                var nowColor=zmEditor.component.setItems.getOpaCol({goal:$(".colpick_current_color"),type: "backgroundColor"}).color;
                var now_value={color: nowColor,opacity: valOpa};
                if(event.type=="mouseenter"){
                    switch(type){
                        case "color":
                        case "backgroundColor":
                        case "borderColor":
                        case "borderTopColor":
                        case "borderBottomColor":
                        case "fill":
                        case "stroke":
                            zmEditor.component.setItems.setOpaCol({goal: goal,type: type,value: _value});
                            break;
                        case "shadowC":
                            var _shadow = goal.css("box-shadow");
                            var _str = _shadow.split(" ");
                            var _arr = [];
                            for(i in _str){
                                if(_str[i].indexOf("px") != -1){
                                    _arr.push(_str[i]);
                                }
                            }
                            zmEditor.component.setItems.setOpaCol({goal:goal,type:type,value:_value,shadowXYBS:_arr});
                            break;
                        case "hoverColor":
                        case "hoverBackgroundColor":
                        case "hoverBorderColor":
                        case "hoverBorderTopColor":
                        case "hoverBorderBottomColor":
                        case "hoverFill":
                            var str = "rgba("+valCol[0]+","+valCol[1]+","+valCol[2]+","+valOpa+")";
                            goal.attr("data-type-"+type,str);
                            break;
                        default:
                            console.log("未配置的属性0_3");
                            break;
                    }
                    zmEditor.component.setItems.setOpaCol({goal: option,type: "backgroundColor",value: _value});
                    // $(".zm-colorPicker-more").hide();
                    //  var nowColor=$(this).css("background-color");
                    // $(".colpick_current_color").css("backgroundColor",nowColor)
                }else{
                    switch(type){
                        case "color":
                        case "backgroundColor":
                        case "borderColor":
                        case "borderTopColor":
                        case "borderBottomColor":
                        case "fill":
                        case "stroke":
                            zmEditor.component.setItems.setOpaCol({goal: goal,type: type,value: now_value});
                            break;
                        case "shadowC":
                            var _shadow = goal.css("box-shadow");
                            var _str = _shadow.split(" ");
                            var _arr = [];
                            for(i in _str){
                                if(_str[i].indexOf("px") != -1){
                                    _arr.push(_str[i]);
                                }
                            }
                            zmEditor.component.setItems.setOpaCol({goal:goal,type:type,value:now_value,shadowXYBS:_arr});
                            break;
                        case "hoverColor":
                        case "hoverBackgroundColor":
                        case "hoverBorderColor":
                        case "hoverBorderTopColor":
                        case "hoverBorderBottomColor":
                        case "hoverFill":
                            var str = "rgba("+valCol[0]+","+valCol[1]+","+valCol[2]+","+valOpa+")";
                            goal.attr("data-type-"+type,str);
                            break;
                        default:
                            console.log("未配置的属性0_3");
                            break;
                    }
                    zmEditor.component.setItems.setOpaCol({goal: option,type: "backgroundColor",value: now_value});
                }

            });

            /****************************** 点击经典颜色 *********************/
            e.find("#zm-frequentlyColorSpan li").on("click",function(){
                e.find("#zm-newColorSpan li").css("border","none");
                var _this = $(this);
                _this.css("border","1px solid #ffffff").siblings().css("border","none");
                var nowColor=_this.css("background-color");
                var oxColor = nowColor.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
                delete (oxColor[0]);
                for (var n = 1; n <= 3; ++n) {
                    oxColor[n] = parseInt(oxColor[n]).toString(16);
                    if (oxColor[n].length == 1) oxColor[n] = '0' + oxColor[n];
                }
                var str = oxColor.join('');
                $(".zm-colorPicker-value").val(str);
                $(".colpick_new_color").css("backgroundColor",nowColor)
            });

            /****************************** 喜爱的颜色hover设置颜色 ***********************/
            e.find("#zm-newColorSpan li").on("mouseenter mouseleave",function(event){
                var _this = $(this);
                var goal = zmEditor.component.setItems.strings.future(ele,obj);
                var valOpa = present.opacity;
                var valCol = zmEditor.component.setItems.getOpaCol({goal: _this,type: "backgroundColor"}).color;
                var _value = {color: valCol,opacity: valOpa};
                var nowColor=zmEditor.component.setItems.getOpaCol({goal:$(".colpick_current_color"),type: "backgroundColor"}).color;
                var now_value={color: nowColor,opacity: valOpa};
                if(event.type=="mouseenter"){
                    switch(type){
                        case "color":
                        case "backgroundColor":
                        case "borderColor":
                        case "borderTopColor":
                        case "borderBottomColor":
                        case "fill":
                        case "stroke":
                            zmEditor.component.setItems.setOpaCol({goal: goal,type: type,value: _value});
                            break;
                        case "shadowC":
                            var _shadow = goal.css("box-shadow");
                            var _str = _shadow.split(" ");
                            var _arr = [];
                            for(i in _str){
                                if(_str[i].indexOf("px") != -1){
                                    _arr.push(_str[i]);
                                }
                            }
                            zmEditor.component.setItems.setOpaCol({goal:goal,type:type,value:_value,shadowXYBS:_arr});
                            break;
                        case "hoverColor":
                        case "hoverBackgroundColor":
                        case "hoverBorderColor":
                        case "hoverBorderTopColor":
                        case "hoverBorderBottomColor":
                        case "hoverFill":
                            var str = "rgba("+valCol[0]+","+valCol[1]+","+valCol[2]+","+valOpa+")";
                            goal.attr("data-type-"+type,str);
                            break;
                        default:
                            console.log("未配置的属性0_3");
                            break;
                    }
                    zmEditor.component.setItems.setOpaCol({goal: option,type: "backgroundColor",value: _value});
                    // $(".zm-colorPicker-more").hide();
                    //  var nowColor=$(this).css("background-color");
                    // $(".colpick_current_color").css("backgroundColor",nowColor)
                }else {
                    switch (type) {
                        case "color":
                        case "backgroundColor":
                        case "borderColor":
                        case "borderTopColor":
                        case "borderBottomColor":
                        case "fill":
                        case "stroke":
                            zmEditor.component.setItems.setOpaCol({goal: goal, type: type, value: now_value});
                            break;
                        case "shadowC":
                            var _shadow = goal.css("box-shadow");
                            var _str = _shadow.split(" ");
                            var _arr = [];
                            for (i in _str) {
                                if (_str[i].indexOf("px") != -1) {
                                    _arr.push(_str[i]);
                                }
                            }
                            zmEditor.component.setItems.setOpaCol({
                                goal: goal,
                                type: type,
                                value: now_value,
                                shadowXYBS: _arr
                            });
                            break;
                        case "hoverColor":
                        case "hoverBackgroundColor":
                        case "hoverBorderColor":
                        case "hoverBorderTopColor":
                        case "hoverBorderBottomColor":
                        case "hoverFill":
                            var str = "rgba(" + valCol[0] + "," + valCol[1] + "," + valCol[2] + "," + valOpa + ")";
                            goal.attr("data-type-" + type, str);
                            break;
                        default:
                            console.log("未配置的属性0_3");
                            break;
                    }

                    zmEditor.component.setItems.setOpaCol({goal: option, type: "backgroundColor", value: now_value});
                }
            });
            /****************************** 点击喜欢的颜色 ***************************/
            e.find("#zm-newColorSpan li").zmActionOn("click",function(){
                e.find("#zm-frequentlyColorSpan li").css("border","none");
                var _this = $(this);
                _this.css("border","1px solid #ffffff").siblings().css("border","none");
                var nowColor=_this.css("background-color");
                var oxColor = nowColor.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
                delete (oxColor[0]);
                for (var n = 1; n <= 3; ++n) {
                    oxColor[n] = parseInt(oxColor[n]).toString(16);
                    if (oxColor[n].length == 1) oxColor[n] = '0' + oxColor[n];
                }
                var str = oxColor.join('');
                $(".zm-colorPicker-value").val(str);
                $(".colpick_new_color").css("backgroundColor",nowColor)

            });

            /****************************** 添加喜爱的颜色 ***************************/
            e.find("#pickers0").on("click","#zm-addColorBtn",function(){
                var color = "#"+$(".zm-colorPicker-value").val();
                if($.inArray(color,colorArr) == -1){
                    colorArr.unshift(color);
                    colorArr.pop();
                }
                var lis = e.find("#zm-newColorSpan > li");
                for(var i in colorArr){
                    lis[i].style.backgroundColor = colorArr[i];
                }
                localStorage.Hcolorarr = colorArr;
            });
            /****************************** 点击 X 关闭******************************/
			e.find("#content").on("click","#zm-renoveColorPicker",function() { // 关闭颜色弹窗。
                var target = $(e.target);
                // var _this = $(this);
                var goal = zmEditor.component.setItems.strings.future(ele,obj);
                var valOpa = present.opacity;
                var nowColor=zmEditor.component.setItems.getOpaCol({goal:$(".colpick_current_color"),type: "backgroundColor"}).color;
                var now_value={color: nowColor,opacity: valOpa};
                switch (type) {
                    case "color":
                    case "backgroundColor":
                    case "borderColor":
                    case "borderTopColor":
                    case "borderBottomColor":
                    case "fill":
                    case "stroke":
                        zmEditor.component.setItems.setOpaCol({goal: goal, type: type, value: now_value});
                        break;
                    case "shadowC":
                        var _shadow = goal.css("box-shadow");
                        var _str = _shadow.split(" ");
                        var _arr = [];
                        for (i in _str) {
                            if (_str[i].indexOf("px") != -1) {
                                _arr.push(_str[i]);
                            }
                        }
                        zmEditor.component.setItems.setOpaCol({
                            goal: goal,
                            type: type,
                            value: now_value,
                            shadowXYBS: _arr
                        });
                        break;
                    case "hoverColor":
                    case "hoverBackgroundColor":
                    case "hoverBorderColor":
                    case "hoverBorderTopColor":
                    case "hoverBorderBottomColor":
                    case "hoverFill":
                        var str = "rgba(" + valCol[0] + "," + valCol[1] + "," + valCol[2] + "," + valOpa + ")";
                        goal.attr("data-type-" + type, str);
                        break;
                    default:
                        console.log("未配置的属性0_3");
                        break;
                }

                zmEditor.component.setItems.setOpaCol({goal: option, type: "backgroundColor", value: now_value});
                if (target.closest(".zm-colorPicker-more").length == 0 && target.closest(".zm-colorPicker-switch").length == 0) {
                    $(".zm-colorPicker-more").hide();
                }
            });
			return e;
        },
        //obj={goal: }
        bold:function(ele,obj){
            var e = $('<div class="zm-edit-components-bold" title="加粗"><i class="fa fa-bold"></i></div>');
            //初始化
            if(obj.goal){
                if(ele.find(obj.goal).css("font-weight") == "bold"){
                    e.children().addClass("active");
                }
            }else{
                if(ele.css("font-weight") == "bold"){
                    e.children().addClass("active");
                }
            }
            e.zmActionOn("click",function(){
                var _this = $(this);
                var goal;
                if(obj.goal){
                    goal = ele.find(obj.goal);
                }else{
                    goal = ele;
                }
                if(goal.css("font-weight") == "bold"){
                    goal.css("font-weight","normal");
                    _this.children().removeClass("active");
                }else{
                    goal.css("font-weight","bold");
                    _this.children().addClass("active");
                }
            });
            return e;
        },
        //倾斜
        italic:function(ele,obj){
            var e = $('<div class="zm-edit-components-italic" title="倾斜"><i class="fa fa-italic"></i></div>');
            //初始化
            if(obj.goal){
                if(ele.find(obj.goal).css("fontStyle") == "italic"){
                    e.children().addClass("active");
                }
            }else{
                if(ele.css("fontStyle") == "italic"){
                    e.children().addClass("active");
                }
            }
            e.zmActionOn("click",function(){
                var _this = $(this);
                var goal;
                if(obj.goal){
                    goal = ele.find(obj.goal);
                }else{
                    goal = ele;
                }
                if(goal.css("fontStyle") == "italic"){
                    goal.css("fontStyle","normal");
                    _this.children().removeClass("active");
                }else{
                    goal.css("fontStyle","italic");
                    _this.children().addClass("active")
                }
            });
            return e;
        },
        //字体样式条
        fontStyle:function(ele,obj){
            var e =  $('<div class="zm-edit-components-fontStyle">'
                +'<div></div>'
                +'<div></div>'
                +'<div></div>'
                +'<div></div>'
                +'<div></div>'
                +'</div>');
            var family = e.children("div").eq(0),
                size = e.children("div").eq(1),
                color = e.children("div").eq(2),
                bold = e.children("div").eq(3),
                italic = e.children("div").eq(4);
            var _family = zmEditor.component.setItems.strings.family(ele,obj),
                _size = zmEditor.component.setItems.strings.size(ele,obj),
                _color = zmEditor.component.setItems.strings.color(ele,obj),
                _bold = zmEditor.component.setItems.strings.bold(ele,obj),
                _italic = zmEditor.component.setItems.strings.italic(ele,obj);
            family.append(_family);
            size.append(_size);
            color.append(_color);
            bold.append(_bold);
            italic.append(_italic);
            if(obj.style == "tab_mini"){
                size.css("margin-right","8px");
                color.css("margin-right","0");
                bold.css("margin-right","0");
            }
            return e;
        },
        //判断是获取未来元素还是当前元素
        future:function(ele,obj){ //y
            var goal=ele;
            if(obj.goal){
                goal = ele.find(obj.goal);
            }
            if(obj.findNames){
                var goall=$();
                for(var ChildrenNameA=0;a<obj.findNames.length;ChildrenNameA++){
                    goall[ChildrenNameA]=goal.find(obj.findNames[ChildrenNameA]);
                }
                goall.findNames=true;
                goal=goall;
            }
            if(obj.findCallback){ // 允许自定义选择。
                goal= obj.findCallback(ele);
                goal.custom=true;
            }
            return goal;
        },
        //单一album||product 元素 jq元素
        unityAlbum:function(){
            return $('<div class="zm-edit-components-list-unit border_on_off clearFloat">'
                +'<div class="zm-edit-components-list-unit-image clearFloat">'
                +'<div class="zm-edit-components-list-unit-image-box">'
                +'<div class="zm-edit-components-list-unit-image-wrap border_on_off">'
                +'<div class="zm-edit-components-list-unit-image-layer">'
                +'<img class="suspension-magnify" width="105%" height="105%">'
                +'</div></div></div></div>'
                +'<div class="zm-edit-components-list-album-message unit-message clearFloat">'
                +'<div class="zm-edit-components-list-unit-message-01"><div><span>创&nbsp;&nbsp;作&nbsp;人&nbsp;:&nbsp;</span><a></a></div></div>'
                +'<div class="zm-edit-components-list-unit-message-02"><div><span>专辑名称&nbsp;:&nbsp;</span><a></a></div></div>'
                +'<div class="zm-edit-components-list-unit-message-03"><div><span>下载专辑&nbsp;:&nbsp;</span><a></a></div></div>'
                +'<div class="zm-edit-components-list-unit-message-04"><div><span>发布时间&nbsp;:&nbsp;</span><a></a></div></div>'
                +'</div>'
                +'</div>');
        },
        unityProduct:function(){
            return $('<div class="zm-edit-components-list-unit border_on_off clearFloat">'
                +'<div class="zm-edit-components-list-unit-image clearFloat">'
                +'<div class="zm-edit-components-list-unit-image-box">'
                +'<div class="zm-edit-components-list-unit-image-wrap border_on_off">'
                +'<div class="zm-edit-components-list-unit-image-layer">'
                +'<img class="suspension-magnify" width="105%" height="105%">'
                +'</div></div></div></div>'
                +'<div class="zm-edit-components-list-product-message unit-message clearFloat">'
                +'<div class="zm-edit-components-list-unit-message-01"><div><span></span></div></div>'
                +'<div class="zm-edit-components-list-unit-message-02"><div><span></span><del></del></div></div>'
                +'</div></div>')
        },
        unityAudioLi:function(){
            return $('<li class="clearFloat">'
                    +'<div class="list_left"><div class="list-choice"><i class="fa fa-check"></i></div><div class="list-index"><i>01</i></div></div>'
                    +'<div class="list_cont"><div class="cont_wrap"><div class="list-name"><a>床边故事</a></div><div class="list-album"><a>周杰伦的床边故事</a></div><div class="list-singer"><a>周杰伦</a></div></div></div>'
                    +'<div class="list_right"><div class="list-time"><span>03:46</span></div><div class="list-icon"><div><i class="fa fa-play"></i></div><div><i class="fa fa-share-alt"></i></div></div><div class="list-load"><span><a>下载2.00元</a></span></div><div class="list-playNumber"><span>10.2万次播放</span></div><div class="list-loadNumber"><span>1286次下载</span></div></div>'
                    +'</li>');
        },
        closeLB:function(ele){
            var e = $('<div class="zm-edit-component-setting-onOff">'
	            +'<span class="zm-edit-component-title">点击任何位置关闭灯箱</span>'
		        +'<label class="zm-switch-box"><span class="zm-switch"><span class="fa fa-minus"></span></span></label>'
		        +'</div>');
            var btn = e.find("label");
            if(ele.attr("data-close") == "on"){
                btn.addClass("zm-switch-box-on");
                btn.children().children().removeClass("fa-minus").addClass("fa-ckeck");
            }

            btn.on("click",function(){
                if(btn.hasClass("zm-switch-box-on")){
                    ele.attr("data-close","off")
                }else{
                    ele.attr("data-close","on");
                }
            });
            return e;
        },
    },
	//设置项置零
	resetOption:function(ele){
        var dot = ele.find(".zm-edit-slider-child");
        var strip = ele.find(".zm-edit-slider-child-hover");
        var input = ele.find(".zm-edit-slider-val");
        var color = ele.find(".zm-colorPicker-switch");
        sessionStorage.setItem();
        s.css("left","0");
        h.css("width","0");
        v.val("0");
        c.css("backgroundColor","transparent");
    },
    //纹理覆盖 obj = {el: 目标对象, tar: 预览对象,}
    vein:function(ele){
        var e = $('<div class="zm-edit-component-coverVein">'
            +'<div class="zm-edit-component-coverVein-title">覆盖纹理</div>'
            +'<div class="zm-edit-component-coverVein-styles">'
            +'<span class="active"></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>'
            +'</div>'
            +'<div class="zm-edit-component-coverVein-level" data-level="light"><div><span class="coverVein-level-light active">浅色</span><span class="coverVein-level-dark">深色</span></div></div>'
            +'</div>');

	    var veinList = e.find(".zm-edit-component-coverVein-styles").children("span");
	    var depth = e.find(".zm-edit-component-coverVein-level span");
	    /********** 初始化 **********/
	    veinList.eq(ele.attr("data-vein")).addClass("active");
	    if(ele.attr("data-level") == "dark"){
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
		    ele.attr("data-vein",_index);
		    veinSwitch(ele);
	    });
	    depth.on("click",function(){
		    var _this = $(this);
		    _this.addClass("active").siblings().removeClass("active");
		    if(_this.index()==0){
			    ele.attr("data-level","light");
		    }else{
			    ele.attr("data-level","dark");
		    }
		    veinSwitch(ele);
	    });
	    /********* 功能函数 **********/
	    //切换纹理函数
	    function veinSwitch(ele){
		    var level = ele.attr("data-level");
		    var index = ele.attr("data-vein");
		    if(level == "dark"){
			    switch(index){
				    case "0":
					    ele.css("background-image","none");
					    break;
				    case "1":
					    ele.css("background-image","url(./resource/images/vein/dark_01.png");
					    break;
				    case "2":
					    ele.css("backgroundImage","url(./resource/images/vein/dark_02.png");
					    break;
				    case "3":
					    ele.css("backgroundImage","url(./resource/images/vein/dark_03.png");
					    break;
				    case "4":
					    ele.css("backgroundImage","url(./resource/images/vein/dark_04.png");
					    break;
				    case "5":
					    ele.css("backgroundImage","url(./resource/images/vein/dark_05.png");
					    break;
				    case "6":
					    ele.css("backgroundImage","url(./resource/images/vein/dark_06.png");
					    break;
				    case "7":
					    ele.css("backgroundImage","url(./resource/images/vein/dark_07.png");
					    break;
			    }
		    }else{
			    switch(index){
				    case "0":
					    ele.css("backgroundImage","none");
					    break;
				    case "1":
					    ele.css("background-image","url(./resource/images/vein/light_01.png)");
					    break;
				    case "2":
					    ele.css("background-image","url(./resource/images/vein/light_02.png)");
					    break;
				    case "3":
					    ele.css("backgroundImage","url(./resource/images/vein/light_03.png)");
					    break;
				    case "4":
					    ele.css("backgroundImage","url(./resource/images/vein/light_04.png)");
					    break;
				    case "5":
					    ele.css("backgroundImage","url(./resource/images/vein/light_05.png)");
					    break;
				    case "6":
					    ele.css("backgroundImage","url(./resource/images/vein/light_06.png)");
					    break;
				    case "7":
					    ele.css("backgroundImage","url(./resource/images/vein/light_07.png)");
					    break;
			    }
		    }
	    }
        return e;
    },
    //显示比例
	imgZoom:function(ele){
        var e = $('<div class="zm-edit-component-imgZoom">'
            +'<span class="zm-edit-component-title">显示比例</span>'
            +'<div class="zm-edit-component-zoom">'
            +'<div class="zm-edit-component-zoom-show"><span class="zm-edit-component-zoom-val"></span><i class="zm-edit-component-zoom-icon fa fa-angle-down"></i></div>'
            +'<ul class="zm-edit-component-zoom-hide mCustomScrollbar" data-mcs-theme="minimal">'
            +'<li>原始比例</li>'
            +'<li>自适应</li>'
            +'<li>平铺</li>'
            +'</ul>'
            +'</div>'
            +'</div>');

        var wrap = e.find(".zm-edit-component-zoom-show"),
            val = e.find(".zm-edit-component-zoom-val"),
            ul = e.find('.zm-edit-component-zoom-hide'),
            li = ul.children("li");
        if(ele.css("backgroundRepeat") == "repeat"){
            val.text("平铺")
        }else if(ele.css("backgroundSize") == "cover"){
            val.text("自适应");
        }else if(ele.css("backgroundSize") == "contain"){
            val.text("原始比例");
        }
        wrap.on("click",function(){
            ul.show();
        });
        li.on("click",function(){
           ul.hide();
           val.text($(this).text());
           var _index = li.index($(this));
           switch(_index){
               case 0:
                   ele.css({"backgroundSize": "contain","background-repeat": "no-repeat","background-position": "center"});
                   break;
               case 1:
                   ele.css({"backgroundSize": "cover","background-repeat": "no-repeat"});
                   break;
               case 2:
                   ele.css({"backgroundSize": "auto","background-repeat": "repeat"});
                   break;
           }
        });
        return e;
    },
    //滚动效果
    scrollEffect:function(){},
    //视频效果
    playerEffect:function(ele){
        var e = $('<div class="zm-edit-component-playEffect">'
            +'<div class="zm-edit-component-playEffect-title">播放效果</div>'
            +'<div class="zm-edit-component-playEffect-speed">'
            +'<span class="zm-edit-component-title">播放速度</span>'
            +'<div class="zm-edit-component-speed-wrap">'
            +'<div class="zm-edit-component-speed-show"><span class="zm-edit-component-speed-val">正常播放</span><i class="zm-edit-component-speed-icon fa fa-angle-down"></i></div>'
            +'<ul class="zm-edit-component-speed-hide mCustomScrollbar" data-mcs-theme="minimal">'
            +'<li>1/4慢速</li>'
            +'<li>1/2慢速</li>'
            +'<li>正常播放</li>'
            +'<li>1.25快速</li>'
            +'<li>1.5倍快速</li>'
            +'<li>2倍速</li>'
            +'</ul></div></div>'
            +'<div class="zm-edit-component-playEffect-loop">'
            +'<span class="zm-edit-component-title">循环播放</span>'
            +'<label class="zm-switch-box"><span class="zm-switch"><span class="fa fa-minus"></span></span></label>'
            +'</div></div>');


        var wrap = e.find(".zm-edit-component-speed-show");
        var val = wrap.find(".zm-edit-component-speed-val");
        var ul = e.find(".zm-edit-component-speed-hide");
        var li = ul.children("li");

        wrap.on("click",function(){
           ul.show();
        });
        li.on("click",function(){
           ul.hide();
           var _this = $(this);
           var _index = li.index(_this);
           val.text(_this.text());
           switch(_index){
               case 0:
                   ele[0].playbackRate = 0.25;
                   break;
               case 1:
	               ele[0].playbackRate = 0.5;
                   break;
               case 2:
	               ele[0].playbackRate = 1;
                   break;
               case 3:
	               ele[0].playbackRate = 1.25;
                   break;
               case 4:
	               ele[0].playbackRate = 1.5;
                   break;
               case 5:
	               ele[0].playbackRate = 2;
                   break;
           }
        });

        var btn = e.find("label");
        btn.on("click",function(){
            if($(this).hasClass("zm-switch-box-on")){
                ele.removeAttr("loop")
            }else{
                ele.attr("loop","loop");
                ele[0].play();
            }
        });

        return e;
    },
    //图片视频预览小窗
    previewPane:function(obj){
        var e = $('<div class="zm-QuickPreview-popup">'
            +'<div class="prev_img"><video class="prev_video" loop autoplay></video></div>'
            +'<div class="prev_mes"><span class="prev_name"></span><span class="prev_time"></span></div>'
            +'</div>');
        var _bg = obj.bg,
            _type = obj.type,
            _name = obj.name,
            _time = obj.time;
        var prev_img = e.find(".prev_img"),
            prev_video = e.find(".prev_video"),
            prev_name = e.find(".prev_name"),
            prev_time = e.find(".prev_time");
        switch(_type){
            case "image":
                prev_img.css({"background": _bg,"backgroundSize": "cover"});
                prev_name.text(_name);
                break;
            case "png":
                prev_img.css({"background": _bg});
                prev_name.text(_name);
                break;
            case "video":
	            prev_video.attr("src",_bg);
	            prev_name.text(_name);
	            prev_time.text(_time);
                break;
            default:
                console.log("错误的预览格式");
                break;
        }

        return e;
    },
    //获取颜色 e = { goal: 对象,type: 属性} 返回valCol = { color: [125,125,125],opacity: 0.6}
    getOpaCol:function(e){
        var goal = e.goal;
        var type = e.type;
        var rgba;
        if(type == 'shadowC'){
            str = goal.css('box-shadow');
            var arr = str.split(" ");
            var Arr = [];
            for(var i in arr){
                if(arr[i].indexOf("px") == -1){
                    Arr.push(arr[i]);
                }
            }
            rgba = Arr.join("");
        }else{
            rgba = goal.css(type);
        }
        return zmEditor.component.setItems.rgbaParsing(rgba);
    },
    //设置颜色 e = { goal: 对象,type: 属性,value: valCol}
    setOpaCol: function (e) {
        var _goal = e.goal;
        var _type = e.type;
        var _value = e.value;
        if (_type == 'shadowC') {
            var _arr = e.shadowXYBS;
            var _newStr = "rgba(" + _value.color[0] + "," + _value.color[1] + "," + _value.color[2] + "," + _value.opacity + ")" + " " + _arr[0] + " " + _arr[1] + " " + _arr[2];
            _goal.css("boxShadow", _newStr);
        } else {
            var _colorValue = "rgba(" + _value.color[0] + "," + _value.color[1] + "," + _value.color[2] + "," + _value.opacity + ")";
            if(_goal.closest('.zm-component-shape-box').length>0){
                _goal.closest('.zm-component-shape-box').attr('data-lineColor',_colorValue)
            }
            if(_goal.is('.zm-component-carousel-pageNumStyle')){
                _goal.html('.itsTurn{background-color:'+_colorValue+'!important}')
            }
            _goal.css(_type, _colorValue);
        }
    },
    //选择弹窗设置 obj = {title: "设置项标题",type: "设置项属性(打开什么弹窗的参数)",tog: "none","ms":"",}
    rgbaParsing:function (rgba){ // ye单一功能，解析提取rgba
        var stringArr = rgba.split(",");
        var tone = [];
        var _opacity = 1;
        for(var i in stringArr){
            if(i == 3){
                _opacity = Math.ceil(Number(stringArr[i].match(/\.\d+/))*10)/10;
            }else{
                tone.push(Number(stringArr[i].match(/\d+/)));
            }
        }
        return {color: tone, opacity: _opacity};
    },
    popup:function(ele,obj){
        var e = $('<div class="zm-edit-component-open-popup popup_wind">'
                +'<div><span class="zm-edit-text-title"></span><div class="zm-edit-popup-onOff"><label class="zm-switch-box"><span class="zm-switch"><span class="fa fa-minus"></span></span></label></div><div class="zm-edit-popup-setting"><input type="button" value="设置"></div></div>'
                +'<div><ul class="zm-edit-popup-list"><li><i class="fa fa-unlink fa-flip-horizontal"></i><span>当前未设置任何链接!</span></li></ul></div>'
                +'</div>'
        );
        /***** 获取参数 *****/
        var title = obj.title,
            type = obj.type,
            tog = obj.tog,
            multi = obj.ms;
        var onOff = e.find(".zm-edit-popup-onOff");
        var label = onOff.children();
        var setting = e.find(".zm-edit-popup-setting");
        var btn = setting.children();
        var ul = e.find(".zm-edit-popup-list");
        /***** 初始化 *****/
        e.find(".zm-edit-text-title").text(title);
        switch(type){
            case "miniPlayer":
                btn.on("click",function(){
                    zmChoiceRadio.choiceRadio({multiple :multi,callBack:pop_return});
                });
                break;
            case "panelPlayer":
                break;
            case "product":
                btn.on("click",function(){
                    zmChoiceRadio.choiceGoods({multiple :multi,callBack:pop_return});
                })
                break;
        }
        //判断是否有开关
        //判断是否设置过链接
        if(ele.attr("data-type-link") == "true"){
            console.log("有链接");
            if(tog == "none"){
                console.log("无开关");
                onOff.hide();
            }else{

            }
            label.addClass("zm-switch-box-on");
            label.children().children().removeClass("fa-minus").addClass("fa-check");
            btn.addClass("choiceColor");
            btn.removeAttr("disabled");
        }else{
            console.log("无连接");
            if(tog == "none"){
                console.log("无开关");
                onOff.hide();
                btn.addClass("choiceColor");
                btn.removeAttr("disabled");
            }else{
                console.log("有开关");
                btn.removeClass("choiceColor");
                btn.attr("disabled","disabled");
            }
        }
        /****** 事件 *****/
        function pop_return(data){
            switch(type){
                case "miniPlayer":
                    setLocal({key: ele.attr("id"),value: data});
                    setDomMiniPlayer(ele,ele.attr("id"),data);
                    setLinkMiniPlayer(ul,data);
                    break;
                case "panelPlayer":
                    break;
                case "product":
                    setLocal({key: ele.attr("id"),value: data});
                    setDomProduct(ele,ele.attr("id"),data);
                    setLinkProduct(ul,data);
                    break;
            }
        };
        return e;
    },
    Family: function (ele, obj) {
        var e = $('<div class="zm-edit-components-Family">'
            + '<span class="zm-edit-text-title"></span>'
            + '<div class="zm-edit-components-Family-wrap"></div></div>'
        );
        e.find(".zm-edit-text-title").text(obj.title);
        var wrap = e.find(".zm-edit-components-Family-wrap");
        var family = zmEditor.component.setItems.strings.family(ele,obj);
        wrap.append(family);
        return e;
    },  //字体组件  liu  ok
    textContent:function(ele,obj) {
        var e =  $('<div >'
            +'<span class="zm-edit-text-title">'+obj.title+'</span>'
            +'<input type="text" value="'+ele.text()+'" class="zm-edit-text-content">'
            +'</div>');
        // e.find('.zm-edit-text-content').on('change',function(){
        //     ele.html($(this).val());
        // });
        e.find('.zm-edit-text-content').zmActionOn('change',function(){
            ele.html($(this).val());
        });
        return e;
    },
    boxShadow: function (ele,obj) {
        var e = $('<div class="zm-edit-components-shadow">'
            +'<div class="zm-edit-components-shadow-onOff"><span class="zm-edit-text-title">阴影</span><label class="zm-switch-box"><span class="zm-switch"><span class="fa fa-minus"></span></span></label></div>'
            +'<div class="zm-edit-components-shadow-wrap">'
            +'<div class="zm-edit-components-shadow-X"></div>'
            +'<div class="zm-edit-components-shadow-Y"></div>'
            +'<div class="zm-edit-components-shadow-B"></div>'
            +'<div class="zm-edit-components-shadow-C"></div>'
            +'</div></div>'
        );
        var X,Y,B,C;
        if(obj.style == "tab"){
            X = zmEditor.component.setItems.slider(ele,{title: "X轴偏移",style: "tab_noColor",isColor: false,param: "shadowX",size: [-20,20],goal: obj.goal}),
            Y = zmEditor.component.setItems.slider(ele,{title: "Y轴偏移",style: "tab_noColor",isColor: false,param: "shadowY",size: [-20,20],goal: obj.goal}),
            B = zmEditor.component.setItems.slider(ele,{title: "阴影模糊",style: "tab_noColor",isColor: false,param: "shadowB",size: [0,20],goal: obj.goal}),
            C = zmEditor.component.setItems.slider(ele,{title: "阴影颜色",style: "tab_color",isColor: true,param: "shadowC",goal: obj.goal});
        }else{
            X = zmEditor.component.setItems.slider(ele,{title: "X轴偏移",style: "noTab_noColor",isColor: false,param: "shadowX",size: [-20,20],goal: obj.goal}),
            Y = zmEditor.component.setItems.slider(ele,{title: "Y轴偏移",style: "noTab_noColor",isColor: false,param: "shadowY",size: [-20,20],goal: obj.goal}),
            B = zmEditor.component.setItems.slider(ele,{title: "模糊",style: "noTab_noColor",isColor: false,param: "shadowB",size: [0,20],goal: obj.goal}),
            C = zmEditor.component.setItems.slider(ele,{title: "阴影颜色",style: "noTab_color",isColor: true,param: "shadowC",goal: obj.goal});
        }
        e.find(".zm-edit-components-shadow-X").append(X);
        e.find(".zm-edit-components-shadow-Y").append(Y);
        e.find(".zm-edit-components-shadow-B").append(B);
        e.find(".zm-edit-components-shadow-C").append(C);

        /* 初始化 */
        var _btn = e.find(".zm-switch-box");
        var goal = zmEditor.component.setItems.strings.future(ele,obj);
        var initJudge = goal.attr("data-judge-shadow");
        var wrap = e.find(".zm-edit-components-shadow-wrap");
        if (initJudge == "true") {
            _btn.addClass("zm-switch-box-on");
            _btn.children().children().removeClass("fa-minus").addClass("fa-check");
            wrap.show();
        }else{
            _btn.removeClass("zm-switch-box-on");
            wrap.hide();
        }
        /* 事件 */
        _btn.on("click", function () {
            var goal = zmEditor.component.setItems.strings.future(ele,obj);
            var judge = goal.attr("data-judge-shadow");
            if(judge == "true"){
                goal.attr({"data-type-shadow":goal.css("boxShadow"),"data-judge-shadow":"false"});
                goal.css("boxShadow","none");
                wrap.slideUp(300);
            }else{
                goal.css("boxShadow",goal.attr("data-type-shadow"));
                goal.attr("data-judge-shadow","true");
                wrap.slideDown(300);
            }
        });
        return e;
    },
    color_on: function (iSelected, str) {
        var s,e,strings,colorArr;
        if (iSelected) {
        } else {
            iSelected = zmEditor.component.nowEdit();
        }
        switch (str) {
            case "mian_border_color"://ye添加
                strings="边框颜色";
                e = zmEditor.globalMethod.initialize_color_html_callback(strings, "mian_border_color");
                console.log("我进了mian_border_color");
                break;
            case "mian_children_childrenLi_bg"://ye添加
                strings="背景颜色";
                e = zmEditor.globalMethod.initialize_color_html_callback(strings, "mian_children_childrenLi_bg");
                console.log("我进了mian_children_childrenLi_bg");
                break;
            case "mian_children_childrenLi_color"://ye添加  nav下的所有li组件的字体色；
                strings="字体颜色";
                e = zmEditor.globalMethod.initialize_color_html_callback(strings, "mian_children_childrenLi_color");
                console.log("我进了mian_children_childrenLi_color");
                break;
            case "mian_children_childrenIndependentLi_hover_color"://ye添加 .
                strings="字体悬停背景色";
                e = zmEditor.globalMethod.initialize_color_html_callback(strings, "mian_children_childrenIndependentLi_hover_color");
                console.log("我进了mian_children_childrenIndependentLi_hover_color");
                break;
            case "mian_children_childrenLi_hover_bg"://ye添加
                strings="光标悬浮背景颜色";
                e = zmEditor.globalMethod.initialize_color_html_callback(strings, "mian_children_childrenLi_hover_bg");
                console.log("我进了mian_children_childrenLi_hover_bg");
                break;
            case "mian_children_childrenLi__hover_color"://ye添加 所有li的光标悬停背景色
                strings="光标悬浮文字颜色";
                e = zmEditor.globalMethod.initialize_color_html_callback(strings, "mian_children_childrenLi__hover_color");
                console.log("我进了mian_children_childrenLi__hover_color");
                break;
            case "mian_children_childrenIndependentLi_bg"://ye添加单个li背景色组件
                strings="背景颜色";
                e = zmEditor.globalMethod.initialize_color_html_callback(strings, "mian_children_childrenIndependentLi_bg");
                console.log("我进了mian_children_childrenIndependentLi_bg");
                console.log("我进了mian_children_childrenIndependentLi_bg");
                break;
            case "mian_children_childrenIndependentLi_hover_bg"://ye添加单个li光标背景色组件
                strings="光标悬浮背景颜色";
                e = zmEditor.globalMethod.initialize_color_html_callback(strings, "mian_children_childrenIndependentLi_hover_bg");
                console.log("我进了mian_children_childrenIndependentLi_hover_bg");
                break;
            case "mian_children_childrenLi_btc"://ye添加单个上边框背景色
                strings="上边框颜色";
                e = zmEditor.globalMethod.initialize_color_html_callback(strings, "mian_children_childrenLi_btc");
                console.log("我进了mian_children_childrenLi_btc");
                break;
            case "mian_children_childrenLi_hover_btc"://ye添加单个li上边框hover色
                strings="光标停留上边框颜色";
                e = zmEditor.globalMethod.initialize_color_html_callback(strings, "mian_children_childrenLi_hover_btc");
                console.log("我进了mian_children_childrenLi_hover_btc");
                break;
            case "mian_children_childrenLi_bbc"://ye添加单个li下边框背景色    one_li_border_bottom_color
                strings="下边框颜色";
                e = zmEditor.globalMethod.initialize_color_html_callback(strings, "mian_children_childrenLi_bbc");
                console.log("我进了mian_children_childrenLi_bbc");
                break;
            case "mian_children_childrenLi_hover_bbc"://ye添加单个li下边框hover色
                strings="光标停留下边框颜色";
                e = zmEditor.globalMethod.initialize_color_html_callback(strings, "mian_children_childrenLi_hover_bbc");
                console.log("mian_children_childrenLi_hover_bbc");
                break;
            case "mian_children_childrenLi_border_color"://ye添加每个li边框色颜色
                strings="边框颜色";
                e = zmEditor.globalMethod.initialize_color_html_callback(strings, "mian_children_childrenLi_border_color");
                console.log("我进了mian_children_childrenLi_border_color");
                break;
            case "mian_children_childrenLi_hover_border_color"://ye添加mian元素的子元素的子元素的每个光标停留边框色颜色
                strings="光标停留边框颜色";
                e = zmEditor.globalMethod.initialize_color_html_callback(strings, "mian_children_childrenLi_hover_border_color");
                console.log("我进了mian_children_childrenLi_hover_border_color");
                break;
            case "mian_children_childrenSpan_bg"://ye添加 设置每个span的颜色
                strings="间隔线颜色";
                e = zmEditor.globalMethod.initialize_color_html_callback(strings, "mian_children_childrenSpan_bg");
                console.log("我进了mian_children_childrenSpan_bg");
                break;
            case "dropdown_bg"://ye添加 设置下拉菜单的的背景颜色
                strings="下拉菜单背景颜色";
                e = zmEditor.globalMethod.initialize_color_html_callback(strings, "dropdown_bg");
                console.log("我进了mian_children_childrenSpan_bg");
                break;
            default:
                break;
        };
        var option = e.find(".zm-colorPicker-switch");
        /* -----  加入颜色组件---*/
        e.find(".zm-colorPicker").each(function () {
            $(this).zmColorPicker();
        });
        /* -----  加入颜色组件---*/
        /****************************** 定义常用颜色 ****************************/
         colorArr = localStorage.Hcolorarr ? localStorage.Hcolorarr.split(",") : ["#ff461f","#3eede7","#b0a4e3","#edd1d8","#60281e","#1bd1a5","#9d2933","#e29c45","#955539","#fcefe8","#ff461f","#3eede7","#b0a4e3","#edd1d8","#60281e","#1bd1a5","#9d2933","#e29c45","#955539","#fcefe8"];
        /****************************** 定义常用颜色 ****************************/
        /****************************** 弹出颜色选择框 ************************/
        option.on("click",function(e){
            var nowColor=$(this).css("backgroundColor");
            var clientX = e.clientX;
            var clientY = e.clientY;
            var moreBox = $(".zm-colorPicker-more");
            //moreBox.find(".colpick_current_color").css("backgroundColor",nowColor);
            $(".colpick_current_color").css("backgroundColor",nowColor);
            moreBox.hide();//隐藏颜色选择器
            $("#picker01").colpick({flat:true});
            var _this = $(this).closest(".zm-colorPicker");
            var thisMoreBox =_this.find(".zm-colorPicker-more");
            /*ay:颜色组件显示位置控制*/
            //此处直接获取颜色选择器宽高会有未知bug发生，故定死宽高
            // var moreBoxW = parseInt(moreBox.css('width'));
            // var moreBoxH = parseInt(moreBox.css('height'));
            var moreBoxW = 387;
            var moreBoxH = 349;
            var windowW = $(window).width();
            var windowH = $(window).height();
            var iLeft=clientX,iTop=clientY;
            if(windowW-clientX<moreBoxW){
                iLeft=clientX-moreBoxW;
            }
            if(windowH-clientY<moreBoxH){
                iTop=clientY-moreBoxH
            }
            thisMoreBox.show().css({"left": iLeft, "top": iTop});
            _this.find("#picker01").append($(".colpick_full"));
            var happR = _this.find("#zm-newColorSpan li");
            var zmColorSpan = happR.splice(0,20);
            for (var i=0;i<colorArr.length;i++) {
                $(zmColorSpan[i]).css("backgroundColor",colorArr[i])
            }
            present = zmEditor.component.setItems.getOpaCol({goal: $(this),type: "backgroundColor"});
            $(".colpick_current_color").css("backgroundColor",nowColor)
        });
        /****************************** 拾色器小圆圈设置颜色 ************************/
        e.zmActionOn("mousemove",".colpick_selector_outer",function () {
            zmEditor.component.setItems.colorChange_on($(this), iSelected);
        })
        /****************************** 拾色器小长条拉动设置颜色 ************************/
        e.zmActionOn("mousemove",".colpick_hue_arrs",function () {
            zmEditor.component.setItems.colorChange_on($(this), iSelected);
        })
        /****************************** 确定按钮设置颜色 ************************/
        e.find("#picker01").zmActionOn("click",".colpick_submit",function(){
            var box,colorBox;
             box = $(this).closest(".zm-colorPicker");
             colorBox = e.find(".colpick_current_color");
            color = box.find(".colpick_new_color").css("background-color");
            colorBox.css("backgroundColor",color);
            zmEditor.component.setItems.colorChange_on($(this), iSelected);
            $(".zm-colorPicker-more").hide();
        });
        /****************************** 喜爱的颜色hover设置颜色 ***********************/
        e.find("#zm-newColorSpan li").on("mouseenter",function(){
            var _this = $(this);
            var nowColor=_this.css("background-color");
            var box =_this.closest(".zm-colorPicker");
            box.find(".zm-colorPicker-value").val( parsingrgbTo16 (nowColor));
            zmEditor.component.setItems.colorChange_on($(this), iSelected);
        });
        /****************************** 点击喜欢的颜色 ***************************/
        e.find("#zm-newColorSpan li").on("click",function(){
            var _this = $(this);
            var nowColor=_this.css("background-color");
            e.find(".zm-colorPicker-value").val( parsingrgbTo16 (nowColor));
            e.find(".colpick_new_color").css("backgroundColor",nowColor)
            zmEditor.component.setItems.colorChange_on($(this), iSelected);
        });
        /****************************** 经典颜色按钮设置颜色 *********************/
        e.find("#zm-frequentlyColorSpan li").on("mouseenter",function(){
            var _this = $(this);
            var nowColor=_this.css("background-color");
            e.find(".zm-colorPicker-value").val(parsingrgbTo16 (nowColor));
            zmEditor.component.setItems.colorChange_on($(this), iSelected);
        });
        /****************************** 点击经典颜色 *********************/
        e.find("#zm-frequentlyColorSpan li").on("click",function(){
            var _this = $(this);
            e.find("#zm-newColorSpan li").css("border","none");
            _this.css("border","1px solid #ffffff").siblings().css("border","none");
            var nowColor=_this.css("background-color");
            e.find(".zm-colorPicker-value").val(parsingrgbTo16 (nowColor));
            e.find(".colpick_new_color").css("backgroundColor",nowColor)
        });
        function  parsingrgbTo16 (color){
            var oxColor = color.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
            delete (oxColor[0]);
            for (var n = 1; n <= 3; ++n) {
                oxColor[n] = parseInt(oxColor[n]).toString(16);
                if (oxColor[n].length == 1) oxColor[n] = '0' + oxColor[n];
            }
            var str = oxColor.join('');
            return str;
        }
        /****************************** 添加喜爱的颜色 ***************************/
        e.find("#pickers0").on("click","#zm-addColorBtn",function(){
            var color = "#"+$(".zm-colorPicker-value").val();
            if($.inArray(color,colorArr) == -1){
                colorArr.unshift(color);
                colorArr.pop();
            }
            var lis = e.find("#zm-newColorSpan > li");
            for(var i in colorArr){
                lis[i].style.backgroundColor = colorArr[i];
            }
            localStorage.Hcolorarr = colorArr;
        });
        /****************************** 点击 X 关闭******************************/
        e.find("#content").on("click","#zm-renoveColorPicker",function(e) { // 关闭颜色弹窗。
            var target = $(e.target);
            if (target.closest(".zm-colorPicker-more").length == 1 && target.closest(".zm-colorPicker-switch").length == 0) {
                $(".zm-colorPicker-more").hide();
            }
        });

        // var color = iSelected.css("color");
        // var bgColor = iSelected.css("backgroundColor");
        // var borderColor = iSelected.css("borderColor");
        // e.find(".zm-colorPicker[data-zm-color-type='color'] .zm-colorPicker-switch").css("backgroundColor", color);
        // e.find(".zm-colorPicker[data-zm-color-type='bg'] .zm-colorPicker-switch").css("backgroundColor", bgColor);
        // e.find(".zm-colorPicker[data-zm-color-type='borderColor'] .zm-colorPicker-switch").css("backgroundColor", borderColor);

        e.zmSlider({goal: iSelected, type: "opacity_style", title: strings, style:"noTab_color", minSize: 0, maxSize: 100,class:str});
        return e;
    },
    colorChange_on: function (e, obj) {
        var _this = $(e);
        var thisColorP = _this.closest(".zm-colorPicker");
        var type = thisColorP.attr("data-zm-color-type");
        // var color = thisColorP.find(".zm-colorPicker-value").val();
        var color = "#" + thisColorP.find(".zm-colorPicker-value").val();
        thisColorP.find(".zm-colorPicker-switch").css("backgroundColor", color);
        var iSelected;
        if (obj) {
            iSelected = obj;
        } else {
            iSelected = zmEditor.component.nowEdit();
        }
        console.log(iSelected);
        console.log(iSelected[0]);
        var a = iSelected[0].classList[4], b = "data-" + iSelected.attr("data-" + a), c = iSelected.children("ul").children("li");// data_a = "data-" + iSelected.attr("data-" + iSelected[0].classList[4])
        console.log(iSelected, "4");//默认第一次拒绝事件ye添加
        console.log(a);
        console.log(type);
        switch (type) {
            //改动过后
            case "mian_border_color"://ye添加 3月15日改动  mian_border_color
                // iSelected.css({"border":""+zmEditor.globalMethod.nav.OneType.mian.borderWidth+zmEditor.globalMethod.nav.OneType.mian.borderStyle+zmEditor.globalMethod.nav.global_prototype("mian","borderColor",color),"box-sizing":"content-box"});
                // iSelected.css({"border-color":""+zmEditor.globalMethod.nav.global_prototype("mian","borderColor",color)});
                if (iSelected.attr("data-" + a)) {
                    // arrLikestyle(b,"mian","sStyle","borderColor",color);arrLikestyle(b,"mian","sStyle","boxSizing","content-box");
                    arrLikestyle(b, "li", "sStyle", "borderTopColor", color);
                    arrLikestyle(b, "li", "sStyle", "borderBottomColor", color);
                    arrLikestyle(b, "li", "sStyle", "borderLeftColor", color);
                    arrLikestyle(b, "li", "sStyle", "borderRightColor", color);
                    arrLikestyle(b, "li", "hHover", "borderTopColor", color);
                    arrLikestyle(b, "li", "hHover", "borderBottomColor", color);
                    arrLikestyle(b, "li", "hHover", "borderLeftColor", color);
                    arrLikestyle(b, "li", "hHover", "borderRightColor", color);
                    arrLikestyle(b, "span", "sStyle", "borderColor", color);
                    // iSelected.css({"borderWidth":zmEditor.globalMethod.nav.data.arrLike[b]["mian"]["sStyle"]["borderWidth"],"borderStyle":zmEditor.globalMethod.nav.data.arrLike[b]["mian"]["sStyle"]["borderStyle"],"borderColor":color,"box-sizing":"content-box"});
                    iSelected.children().children("li").css({
                        "borderTopColor": color,
                        "borderBottomColor": color,
                        "borderLeftColor": color,
                        "borderRightColor": color
                    });
                    iSelected.children().children("span").css("borderColor", color);
                } else {
                    iSelected.css({"borderColor": "" + color});
                }
                break;
            case "mian_children_childrenLi_color"://ye添加 改动的字体色 3月15日改动
                arrLikestyle(b, "li", "sStyle", "color", color);
                c.css("color", color);
                c.each(function (index, ele) {
                    zmEditor.globalMethod.nav.initNavList.endHover($(this), "sStyle", "hHover", "mouseenter" + zmEditor.globalMethod.nav.data.arrLike[b].li.eventClass.mouseenter.color,
                        "mouseleave" + zmEditor.globalMethod.nav.data.arrLike[b].li.eventClass.mouseleave.color, b);
                });
                zmEditor.globalMethod.nav.initNavList.currentPage(iSelected, b, "li", a);
                console.log("我的字体颜色改变了")
                // console.log(zmEditor.globalMethod.nav.data.arrLike[zmEditor.globalMethod.nav.global_compotents_IndependentName(iSelected)]);
                // zmEditor.globalMethod.nav.refreshNav(iSelected);
                break;
            case "mian_children_childrenLi__hover_color"://ye添加 改动的字体hover色   3月15日改动
                arrLikestyle(b, "li", "hHover", "color", color);
                c.each(function (index, ele) {
                    zmEditor.globalMethod.nav.initNavList.endHover($(this), "sStyle", "hHover", "mouseenter" + zmEditor.globalMethod.nav.data.arrLike[b].li.eventClass.mouseenter.color,
                        "mouseleave" + zmEditor.globalMethod.nav.data.arrLike[b].li.eventClass.mouseleave.color, b);
                });
                // console.log("我字体颜色改变了")
                // zmEditor.globalMethod.nav.refreshNav(iSelected);
                break;
            case "mian_children_childrenLi_bg"://ye添加 3月13日改动   mian_children_childrenLi_bg

                arrLikestyle(b, "li", "sStyle", "backgroundColor", color);
               // debugger;
                console.log("我点击了mian_children_childrenLi_bg");
                console.log(zmEditor.globalMethod.nav.data.arrLike[b].li);
                c.css("backgroundColor", color);
                c.each(function (index, element) { // 刷新hover色
                    zmEditor.globalMethod.nav.initNavList.endHover($(this), "sStyle", "hHover", "mouseenter" + zmEditor.globalMethod.nav.data.arrLike[b].li.eventClass.mouseenter.color,
                        "mouseleave" + zmEditor.globalMethod.nav.data.arrLike[b].li.eventClass.mouseleave.color, b)

                    zmEditor.globalMethod.nav.initNavList.endClick($(this), b, undefined, index, a);
                });
                zmEditor.globalMethod.nav.initNavList.currentPage(iSelected, b, "li", a);
                // zmEditor.globalMethod.nav.refreshNav(iSelected);refreshNav
                break;
            case "mian_children_childrenLi_hover_bg"://ye添加  3月13日改动 mian_children_childrenLi_hover_bg  刷新hover色
                arrLikestyle(b, "li", "hHover", "backgroundColor", color);
                c.each(function () {
                    zmEditor.globalMethod.nav.initNavList.endHover($(this), "sStyle", "hHover", "mouseenter" + zmEditor.globalMethod.nav.data.arrLike[b].li.eventClass.mouseenter.color,
                        "mouseleave" + zmEditor.globalMethod.nav.data.arrLike[b].li.eventClass.mouseleave.color, b);
                });

                zmEditor.globalMethod.nav.refreshStyleTable(iSelected,zmEditor.globalMethod.nav.global_compotents_IndependentName(iSelected));
                // zmEditor.globalMethod.nav.refreshNav(iSelected);
                break;
            //单独背景设置
            case "mian_children_childrenIndependentLi_bg"://ye  3.15改动过的独立的背景色
                // $(iSelected.children("ul").children("li")[zmEditor.globalMethod.nav.OneType.li.nav_li_Independent_position]).css("background-color",color_color("backgroundColor",color));
                arrLikestyle(b, "li", "sStyle", "backgroundColor", color);
                $(c[zmEditor.globalMethod.nav.data.arrLike[b].li["nav_li_Independent_position"]]).css("backgroundColor", color);
                c.each(function (index, ele) {
                    zmEditor.globalMethod.nav.initNavList.specialHover($(this), "backgroundColor", color, zmEditor.globalMethod.nav.data.arrLike[b].li.hHover["backgroundColor"],
                        "mouseenter" + zmEditor.globalMethod.nav.data.arrLike[b].li.eventClass.mouseenter.backgroundColor, "mouseleave" +
                        zmEditor.globalMethod.nav.data.arrLike[b].li.eventClass.mouseleave.backgroundColor, index, b);

                });
                console.log(zmEditor.globalMethod.nav.data.arrLike[b]);
                break;
            case "mian_children_childrenIndependentLi_hover_bg"://ye添加 3.15  mian_children_childrenIndependentLi_hover_bg
                //ye 改动过的独立的hover背景色
                arrLikestyle(b, "li", "hHover", "backgroundColor", color);
                c.each(function (index, ele) {
                    zmEditor.globalMethod.nav.initNavList.specialHover($(this), "backgroundColor", zmEditor.globalMethod.nav.data.arrLike[b].li.sStyle["backgroundColor"], color,
                        "mouseenter" + zmEditor.globalMethod.nav.data.arrLike[b].li.eventClass.mouseenter.backgroundColor, "mouseleave" +
                        zmEditor.globalMethod.nav.data.arrLike[b].li.eventClass.mouseleave.backgroundColor, index, b);
                });
                console.log(zmEditor.globalMethod.nav.data.arrLike[b]);

                break;
            case "mian_children_childrenIndependentLi_hover_color"://ye添加 改动的字体色 //独立字体颜色组件待定设置   mian_children_childrenIndependentLi_hover_color
                // iSelected.children("ul").children("li").css("color",color_color("color",color));
                arrLikestyle(b, "li", "hHover", "color", color);
                // $(iSelected.children("ul").children("li")[zmEditor.globalMethod.nav.OneType.li.nav_li_Independent_position]).css("color",zmEditor.globalMethod.nav.OneType.li.hover_color);
                c.each(function (index, ele) {
                    zmEditor.globalMethod.nav.initNavList.specialHover($(this), "color", zmEditor.globalMethod.nav.data.arrLike[b].li.sStyle["color"], color,
                        "mouseenter" + zmEditor.globalMethod.nav.data.arrLike[b].li.eventClass.mouseenter.color, "mouseleave" +
                        zmEditor.globalMethod.nav.data.arrLike[b].li.eventClass.mouseleave.color, index, b);
                });
                break;
            //span样式设置
            case "mian_children_childrenSpan_bg"://ye添加每个span背景颜色   mian_children_childrenSpan_bg
                // iSelected.children().children().css("border-top-color",color_color("border_top_color",color));
                arrLikestyle(b, "span", "sStyle", "backgroundColor", color);
                iSelected.children().children("span").css("background-color", color);
                break;
            //li单边框样式设置
            case "mian_children_childrenLi_btc"://ye添加上边框颜色
                arrLikestyle(b, "li", "sStyle", "borderTopColor", color);
                c.each(function (index, ele) {
                    $(this).css("borderTopColor", color);
                    zmEditor.globalMethod.nav.initNavList.endHover($(this), "sStyle", "hHover", "mouseenter" + zmEditor.globalMethod.nav.data.arrLike[b].li.eventClass.mouseenter.color,
                        "mouseleave" + zmEditor.globalMethod.nav.data.arrLike[b].li.eventClass.mouseleave.color, b);
                });
                // zmEditor.globalMethod.nav.initNavList.currentPage(iSelected, b, "li", a);
                break;
            case "mian_children_childrenLi_hover_btc"://ye添加上边框停留颜色  mian_children_childrenLi_hover_btc
                console.log(color);
                arrLikestyle(b, "li", "hHover", "borderTopColor", color);
                c.each(function (index, ele) {
                    zmEditor.globalMethod.nav.initNavList.endHover($(this), "sStyle", "hHover", "mouseenter" + zmEditor.globalMethod.nav.data.arrLike[b].li.eventClass.mouseenter.color,
                        "mouseleave" + zmEditor.globalMethod.nav.data.arrLike[b].li.eventClass.mouseleave.color, b);
                });
                break;
            case "mian_children_childrenLi_bbc"://ye添加下边框颜色  3.16     mian_children_childrenLi_bbc
                arrLikestyle(b, "li", "sStyle", "borderBottomColor", color);
                c.each(function (index, ele) {
                    $(this).css("borderBottomColor", color);

                    zmEditor.globalMethod.nav.initNavList.endHover($(this), "sStyle", "hHover", "mouseenter" + zmEditor.globalMethod.nav.data.arrLike[b].li.eventClass.mouseenter.color,
                        "mouseleave" + zmEditor.globalMethod.nav.data.arrLike[b].li.eventClass.mouseleave.color, b);
                });
                // zmEditor.globalMethod.nav.initNavList.currentPage(iSelected, b, "li", a);
                break;
            case "mian_children_childrenLi_hover_bbc"://ye添加下边框颜色    3.16   mian_children_childrenLi_hover_bbc
                arrLikestyle(b, "li", "hHover", "borderBottomColor", color);
                c.each(function (index, ele) {
                    zmEditor.globalMethod.nav.initNavList.endHover($(this), "sStyle", "hHover", "mouseenter" + zmEditor.globalMethod.nav.data.arrLike[b].li.eventClass.mouseenter.color,
                        "mouseleave" + zmEditor.globalMethod.nav.data.arrLike[b].li.eventClass.mouseleave.color, b);
                });
                break;
            case "mian_children_childrenLi_border_color"://ye添加每个li边框颜色  3.16  对应横向three组件
                // arrLikestyle(b,"li","sStyle","borderColor",color);
                arrLikestyle(b, "li", "sStyle", "borderTopColor", color);
                arrLikestyle(b, "li", "sStyle", "borderBottomColor", color);
                arrLikestyle(b, "li", "sStyle", "borderLeftColor", color);
                arrLikestyle(b, "li", "sStyle", "borderRightColor", color);
                c.each(function () {
                    $(this).css({
                        "borderTopColor": color,
                        "borderBottomColor": color,
                        "borderLeftColor": color,
                        "borderRightColor": color,
                        "borderStyle": zmEditor.globalMethod.nav.data.arrLike[b].li.sStyle["borderStyle"]
                    });//,"borderWidth":zmEditor.globalMethod.nav.data.arrLike[b].li.sStyle["borderWidth"]
                    zmEditor.globalMethod.nav.initNavList.endHover($(this), "sStyle", "hHover", "mouseenter" + zmEditor.globalMethod.nav.data.arrLike[b].li.eventClass.mouseenter.color,
                        "mouseleave" + zmEditor.globalMethod.nav.data.arrLike[b].li.eventClass.mouseleave.color, b);
                });
                break;
            case "mian_children_childrenLi_hover_border_color"://ye添加每个li边框颜色  mian_children_childrenLi_hover_border_color

                arrLikestyle(b, "li", "hHover", "borderTopColor", color);
                arrLikestyle(b, "li", "hHover", "borderBottomColor", color);
                arrLikestyle(b, "li", "hHover", "borderLeftColor", color);
                arrLikestyle(b, "li", "hHover", "borderRightColor", color);
                c.each(function () {
                    zmEditor.globalMethod.nav.initNavList.endHover($(this), "sStyle", "hHover", "mouseenter" + zmEditor.globalMethod.nav.data.arrLike[b].li.eventClass.mouseenter.color,
                        "mouseleave" + zmEditor.globalMethod.nav.data.arrLike[b].li.eventClass.mouseleave.color, b);
                });
                break;
            case "dropdown_bg"://ye添加每个li边框颜色  mian_children_childrenLi_hover_border_color
                var nav_name = zmEditor.globalMethod.nav.global_compotents_IndependentName(iSelected);
                if (zmEditor.globalMethod.nav.global_verOrcross(iSelected)) {
                    zmEditor.globalMethod.nav.markUlStyle($(".style_nav_" + nav_name + ""), "." + nav_name + "zm-page-setting-liThree", "background-color:" + color + ";");
                    zmEditor.globalMethod.nav.markUlStyle($(".style_nav_" + nav_name + ""), "." + nav_name + "zm-page-setting-liTwo", "background-color:" + color + ";");
                }else{
                    zmEditor.globalMethod.nav.markUlStyle($(".style_nav_" + nav_name + ""), "." + nav_name + "zm-page-setting-ulThree", "background-color:" + color + ";");
                    zmEditor.globalMethod.nav.markUlStyle($(".style_nav_" + nav_name + ""), "." + nav_name + "zm-page-setting-ulTwo", "background-color:" + color + ";");
                }
                // debugger;
                zmEditor.globalMethod.nav.data.arrLike[b]["dropdownBg"] = color;
                // zmEditor.globalMethod.nav.refreshNav(iSelected);
                break;
            //改动过后
            default:
                break;
        }
        function arrLikestyle(b, str, str1, str2, str3) {
            zmEditor.globalMethod.nav.data.arrLike[b][str][str1][str2] = str3;
        }
    },
    COLOR:function(ele,obj){
        var e,option,type,goal,present;
         obj.templateELement? (e=obj.templateELement,e.addClass("zm-colorPicker-templateELement"),e.children().addClass("zm-colorPicker-switch-templateELement"),option=obj.templateELement.find(".zm-colorPicker-switch-templateELement")):
         (e=zmEditor.component.setItems.templateELement.zmColorPicker,option = e.find(".zm-colorPicker-switch")); //可动态改变

         // 表示点击显示颜色框按钮  //插件的子元素，不可改变
         type = obj.param;   // 表示要传入颜色组件的参数  表示设置哪种样式颜色
         goal = zmEditor.component.setItems.strings.future(ele,obj); // 表示处理以后的dom元素
        /****************************** 初始化颜色框 ****************************/
        if(obj.templateELement){
        }else{
            if(goal.findNames){ // 获取后代不同的元素
                if(type instanceof Array){ // 如果传入多种样式
                    type.forEach(function(element,index){
                        initializeColor(element,goal[index],option);
                    })
                }else{
                    goal.each(function(element,index){
                        initializeColor(type,element,option);
                    });
                }
            }else if(goal.custom){ // 自定义后代元素  自定义传入传入样式根据回到函数来解析
               if(obj.findCallbacks.length!=goal.length){ throw  new Error("findCallbacks.length 和goal.length配置参数出现问题，查看对应行.")};
                obj.findCallbacks.forEach(function(fn,index){
                    fn(goal,index,initializeColor);
                })
            } else{  // 正常后代元素
                if(type instanceof Array){   // 如果传入多种样式
                    type.forEach(function(element,index){
                        initializeColor(element,goal,option)
                    })
                }else{
                    initializeColor(type,goal,option);
                }
            }
            // selectElemntAndTypes( initializeColor,{type:type,goal:goal,option:option});
            function initializeColor(type,goal,option){
                switch(type){
                    case "borderColor":
                        var nc;
                        if(navigator.userAgent.indexOf("Firefox") != -1){
                            nc = zmEditor.component.setItems.getOpaCol({goal: goal,type: "borderTopColor"});
                        }else{
                            nc = zmEditor.component.setItems.getOpaCol({goal: goal,type: type});
                        }
                        zmEditor.component.setItems.setOpaCol({goal: option, type: "backgroundColor", value: nc});
                        break;
                    case "color":
                    case "backgroundColor":
                    case "borderTopColor":
                    case "borderBottomColor":
                    case "shadowC":
                    case "fill":
                    case "stroke":
                        var nowColor = zmEditor.component.setItems.getOpaCol({goal: goal,type: type});
                        zmEditor.component.setItems.setOpaCol({goal: option, type: "backgroundColor", value: nowColor});
                        break;
                    case "hoverColor":
                    case "hoverBackgroundColor":
                    case "hoverBorderColor":
                    case "hoverBorderTopColor":
                    case "hoverBorderBottomColor":
                    case "hoverFill":
                        var hover_color = goal.attr("data-type-"+type);
                        var arr = type.slice(5).split("");
                        arr.splice(0,1,arr[0].toLowerCase());
                        var str = arr.join("");
                        if(hover_color){
                            option.css("backgroundColor",hover_color);
                        }else{
                            if(goal.css(str) == undefined){
                                option.css("backgroundColor","rgba(0,0,0,1)");
                            }else{
                                if(goal.css(str) == "rgba(0, 0, 0, 0)"){
                                    option.css("backgroundColor","rgb(0,0,0)")

                                }else{
                                    option.css("backgroundColor",goal.css(str));
                                }
                            }
                        }
                        break;
                    default:
                        console.log("未定义的属性0_1");
                        break;
                }
            }
        }
        function selectElemntAndTypes( callback,callbackParam){
            if(callbackParam.goal.findNames){ // 获取后代不同的元素
                if(obj.param instanceof Array){ // 如果传入多种样式
                    callbackParam.type.forEach(function(element,index){
                        callback(element,callbackParam.goal[index],callbackParam.option);
                    })
                }else{
                    callbackParam.goal.each(function(element,index){
                        callback(callbackParam.type,element,callbackParam.option);
                    });
                }
            }else if(callbackParam.goal.custom){ // 自定义后代元素  自定义传入传入样式根据回到函数来解析
                if(obj.findCallbacks.length!=goal.length){ throw  new Error("findCallbacks.length 和goal.length配置参数出现问题，查看对应行.")};
                obj.findCallbacks.forEach(function(fn,index){
                    fn(callbackParam.goal,index);
                })
            } else{  // 正常后代元素
                if(obj.param instanceof Array){   // 如果传入多种样式
                    callbackParam.type.forEach(function(element,index){
                        callback(element,callbackParam.goal,callbackParam.option)
                    })
                }else{
                    callback(callbackParam.type,callbackParam.goal,callbackParam.option)
                }
            }
        }
        /****************************** 引入颜色插件 ****************************/
        e.each(function(){
            $(this).zmColorPicker();
        });
        /****************************** 定义常用颜色 ****************************/
        var colorArr = localStorage.Hcolorarr ? localStorage.Hcolorarr.split(",") : ["#ff461f","#3eede7","#b0a4e3","#edd1d8","#60281e","#1bd1a5","#9d2933","#e29c45","#955539","#fcefe8","#ff461f","#3eede7","#b0a4e3","#edd1d8","#60281e","#1bd1a5","#9d2933","#e29c45","#955539","#fcefe8"];
        /****************************** 弹出颜色选择框 ************************/
        option.zmActionOn("click",function(e){
            debugger
            // var nowColor=$(this).css("backgroundColor");
            var nowColor= newColorCallback(goal,$(this),type);
            var clientX = e.clientX;
            var clientY = e.clientY;
            var moreBox = $(".zm-colorPicker-more");
            //moreBox.find(".colpick_current_color").css("backgroundColor",nowColor);
            $(".colpick_current_color").css("backgroundColor",nowColor);
            moreBox.hide();//隐藏颜色选择器
            $("#picker01").colpick({flat:true});
            // var _this = $(this).closest(".zm-colorPicker");
            var _this;
            obj.templateELement?_this = $(this).closest(".zm-colorPicker-templateELement"):_this = $(this).closest(".zm-colorPicker");
            var thisMoreBox =_this.find(".zm-colorPicker-more");
            /*ay:颜色组件显示位置控制*/
            //此处直接获取颜色选择器宽高会有未知bug发生，故定死宽高
            // var moreBoxW = parseInt(moreBox.css('width'));
            // var moreBoxH = parseInt(moreBox.css('height'));
            var moreBoxW = 387;
            var moreBoxH = 349;
            var windowW = $(window).width();
            var windowH = $(window).height();
            var iLeft=clientX,iTop=clientY;
            if(windowW-clientX<moreBoxW){
                iLeft=clientX-moreBoxW;
            }
            if(windowH-clientY<moreBoxH){
                iTop=clientY-moreBoxH
            }
            thisMoreBox.show().css({"left": iLeft, "top": iTop});
            _this.find("#picker01").append($(".colpick_full"));
            var happR = _this.find("#zm-newColorSpan li");
            var zmColorSpan = happR.splice(0,20);
            console.log(colorArr.length)
            for (var i=0;i<colorArr.length;i++) { // 编译localStorge 本地缓存颜色，根据option颜色来设置当前色
                zmColorSpan[i].style.backgroundColor=colorArr[i];
            }
            debugger;
            present= zmEditor.component.setItems.rgbaParsing(nowColor);
            // present = zmEditor.component.setItems.getOpaCol({goal: $(this),type: "backgroundColor"});
            $(".colpick_current_color").css("backgroundColor",nowColor);
        }); // 根据option颜色设置color等组件颜色.
        function newColorCallback(goal,_this,type) {
            var color;
            if(obj.templateELement){
                if(goal.length>1){
                    if(type>1){
                        color=  $(goal[0]).css(type[0]);
                        if(color=="rgba(0, 0, 0, 0)"){color="rgba(0, 0, 0, 1)"};
                    }else{
                        color=  $(goal[0]).css(type);
                        if(color=="rgba(0, 0, 0, 0)"){color="rgba(0, 0, 0, 1)"};
                    }
                }else{
                    if(type>1){
                        color= goal.css(type[0]);
                        if(color=="rgba(0, 0, 0, 0)"){color="rgba(0, 0, 0, 1)"};
                    }else{
                        color= goal.css(type);
                        if(color=="rgba(0, 0, 0, 0)"){color="rgba(0, 0, 0, 1)"};
                    }
                }

            }else{
                debugger;
                color= _this.css("backgroundColor");
                if(color=="rgba(0, 0, 0, 0)"){color="rgba(0, 0, 0, 1)"};
            }
            return color;
        }
        /****************************** 拾色器小圆圈设置颜色 ************************/
        function setColor(type,goal,_value,valCol,valOpa){ // 设置不同种类颜色

            switch(type){
                case "color":
                case "backgroundColor":
                case "borderColor":
                case "borderTopColor":
                case "borderBottomColor":
                case "fill":
                case "stroke":
                    zmEditor.component.setItems.setOpaCol({goal: goal,type: type,value: _value});
                    break;
                case "shadowC":
                    var _shadow = goal.css("box-shadow");
                    var _str = _shadow.split(" ");
                    var _arr = [];
                    for(i in _str){
                        if(_str[i].indexOf("px") != -1){
                            _arr.push(_str[i]);
                        }
                    }
                    zmEditor.component.setItems.setOpaCol({goal:goal,type:type,value:_value,shadowXYBS:_arr});
                    break;
                case "hoverColor":
                case "hoverBackgroundColor":
                case "hoverBorderColor":
                case "hoverBorderTopColor":
                case "hoverBorderBottomColor":
                case "hoverFill":
                    var str = "rgba("+valCol[0]+","+valCol[1]+","+valCol[2]+","+valOpa+")";
                    goal.attr("data-type-"+type,str);
                    break;
                default:
                    console.log("未配置的属性0_2");
                    break;
            }
        };
        function setColorCallback(callback,callbackParam){
             if(obj.colorCallback){ //此函数作用为设置组件设置颜色时做的以外的事情；
                 obj.colorCallback(callbackParam.goal);
             }
            if(goal.findNames){ // 获取后代不同的元素
                if(callbackParam.type instanceof Array){ // 如果传入多种样式
                    callbackParam.type.forEach(function(types,index){
                        callback(types,element,callbackParam.goal[index],callbackParam._value,callbackParam.valCol,callbackParam.valOpa);
                    })
                }else{
                    callbackParam.goal.each(function(element,index){
                        callback(callbackParam.type,element,callbackParam._value,callbackParam.valCol,callbackParam.valOpa);
                    });
                }
            }else if(goal.custom){ // 自定义后代元素  自定义传入传入样式根据回到函数来解析
                if(obj.findCallbacks.length!=goal.length){ throw  new Error("findCallbacks.length 和goal.length配置参数出现问题，查看对应行.")};
                obj.findCallbacks.forEach(function(fn,index){
                    fn(callbackParam.type,callbackParam.goal,callbackParam._value,callbackParam.valCol,callbackParam.valOpa);
                })
            } else{  // 正常后代元素
                if(callbackParam.type instanceof Array){   // 如果传入多种样式
                    callbackParam.type.forEach(function(element,index){
                        callback(element,callbackParam.goal,callbackParam._value,callbackParam.valCol,callbackParam.valOpa);
                    })
                }else{
                    callback(callbackParam.type,callbackParam.goal,callbackParam._value,callbackParam.valCol,callbackParam.valOpa);
                }
            }
        };
        function setOpaColCallback(setOpaColObject){  //设置optoin颜色
            if(obj.templateELement){}else{
                zmEditor.component.setItems.setOpaCol({goal: setOpaColObject.option,type: "backgroundColor",value: setOpaColObject._value});
            }
        };
        e.zmActionOn("mousemove",".colpick_selector_outer",function () {
            var goal = zmEditor.component.setItems.strings.future(ele,obj);
            var colorBox = e.find(".colpick_new_color");
            var valOpa = present.opacity;
            var valCol = zmEditor.component.setItems.getOpaCol({goal:colorBox,type:'backgroundColor'}).color;
            var _value = {color: valCol,opacity: valOpa};

            setColorCallback(setColor,{type:type,goal:goal,_value:_value,valCol:valCol,valOpa:valOpa}) // 设置值

            // zmEditor.component.setItems.setOpaCol({goal: option,type: "backgroundColor",value: _value});//设置option值。
            setOpaColCallback({goal: option,value: _value});//设置option值。
        })
        /****************************** 确定按钮设置颜色 ************************/
        e.find("#picker01").zmActionOn("click",".colpick_submit",function(){
            var goal = zmEditor.component.setItems.strings.future(ele,obj);
            var colorBox = e.find(".colpick_new_color");
            var valOpa = present.opacity;
            var valCol = zmEditor.component.setItems.getOpaCol({goal:colorBox,type:'backgroundColor'}).color;
            var _value = {color: valCol,opacity: valOpa};
            // switch(type){
            //     case "color":
            //     case "backgroundColor":
            //     case "borderColor":
            //     case "borderTopColor":
            //     case "borderBottomColor":
            //     case "fill":
            //     case "stroke":
            //         zmEditor.component.setItems.setOpaCol({goal: goal,type: type,value: _value});
            //         break;
            //     case "shadowC":
            //         var _shadow = goal.css("box-shadow");
            //         var _str = _shadow.split(" ");
            //         var _arr = [];
            //         for(var i in _str){
            //             if(_str[i].indexOf("px") != -1){
            //                 _arr.push(_str[i]);
            //             }
            //         }
            //         zmEditor.component.setItems.setOpaCol({goal:goal,type:type,value:_value,shadowXYBS:_arr});
            //         break;
            //     case "hoverColor":
            //     case "hoverBackgroundColor":
            //     case "hoverBorderColor":
            //     case "hoverBorderTopColor":
            //     case "hoverBorderBottomColor":
            //     case "hoverFill":
            //         var str = "rgba("+valCol[0]+","+valCol[1]+","+valCol[2]+","+valOpa+")";
            //         goal.attr("data-type-"+type,str);
            //         break;
            //     default:
            //         console.log("未配置的属性0_2");
            //         break;
            // }
            setColorCallback(setColor,{type:type,goal:goal,_value:_value,valCol:valCol,valOpa:valOpa}) // 设置值
            // zmEditor.component.setItems.setOpaCol({goal: option,type: "backgroundColor",value: _value});
            setOpaColCallback({goal: option,value: _value});//设置option值。
            $(".zm-colorPicker-more").hide();
        });
        /****************************** 喜爱的颜色hover设置颜色 ***********************/
        e.find("#zm-newColorSpan li").zmActionOn("mouseenter",function(){
            var _this = $(this);
            var goal = zmEditor.component.setItems.strings.future(ele,obj);
            var valOpa = present.opacity;
            var valCol = zmEditor.component.setItems.getOpaCol({goal: _this,type: "backgroundColor"}).color;
            var _value = {color: valCol,opacity: valOpa};
            // switch(type){
            //     case "color":
            //     case "backgroundColor":
            //     case "borderColor":
            //     case "borderTopColor":
            //     case "borderBottomColor":
            //     case "fill":
            //     case "stroke":
            //         zmEditor.component.setItems.setOpaCol({goal: goal,type: type,value: _value});
            //         break;
            //     case "shadowC":
            //         var _shadow = goal.css("box-shadow");
            //         var _str = _shadow.split(" ");
            //         var _arr = [];
            //         for(i in _str){
            //             if(_str[i].indexOf("px") != -1){
            //                 _arr.push(_str[i]);
            //             }
            //         }
            //         zmEditor.component.setItems.setOpaCol({goal:goal,type:type,value:_value,shadowXYBS:_arr});
            //         break;
            //     case "hoverColor":
            //     case "hoverBackgroundColor":
            //     case "hoverBorderColor":
            //     case "hoverBorderTopColor":
            //     case "hoverBorderBottomColor":
            //     case "hoverFill":
            //         var str = "rgba("+valCol[0]+","+valCol[1]+","+valCol[2]+","+valOpa+")";
            //         goal.attr("data-type-"+type,str);
            //         break;
            //     default:
            //         console.log("未配置的属性0_4");
            //         break;
            // }
            // debugger;
            setColorCallback(setColor,{type:type,goal:goal,_value:_value,valCol:valCol,valOpa:valOpa}) // 设置值

            // zmEditor.component.setItems.setOpaCol({goal: option,type: "backgroundColor",value: _value});
            setOpaColCallback({goal: option,value: _value});//设置option值。
            //$(".zm-colorPicker-more").hide();
            var nowColor=$(this).css("background-color");
            $(".colpick_current_color").css("backgroundColor",nowColor)
        });
        /****************************** 拾色器小长条拉动设置颜色 ************************/
        e.zmActionOn("mousemove",".colpick_hue_arrs",function () {
            var goal = zmEditor.component.setItems.strings.future(ele,obj);
            var colorBox = e.find(".colpick_new_color");
            var valOpa = present.opacity;
            var valCol = zmEditor.component.setItems.getOpaCol({goal:colorBox,type:'backgroundColor'}).color;
            var _value = {color: valCol,opacity: valOpa};
            // switch(type){
            //     case "color":
            //     case "backgroundColor":
            //     case "borderColor":
            //     case "borderTopColor":
            //     case "borderBottomColor":
            //     case "fill":
            //     case "stroke":
            //         zmEditor.component.setItems.setOpaCol({goal: goal,type: type,value: _value});
            //         break;
            //     case "shadowC":
            //         var _shadow = goal.css("box-shadow");
            //         var _str = _shadow.split(" ");
            //         var _arr = [];
            //         for(i in _str){
            //             if(_str[i].indexOf("px") != -1){
            //                 _arr.push(_str[i]);
            //             }
            //         }
            //         zmEditor.component.setItems.setOpaCol({goal:goal,type:type,value:_value,shadowXYBS:_arr});
            //         break;
            //     case "hoverColor":
            //     case "hoverBackgroundColor":
            //     case "hoverBorderColor":
            //     case "hoverBorderTopColor":
            //     case "hoverBorderBottomColor":
            //     case "hoverFill":
            //         var str = "rgba("+valCol[0]+","+valCol[1]+","+valCol[2]+","+valOpa+")";
            //         goal.attr("data-type-"+type,str);
            //         break;
            //     default:
            //         console.log("未配置的属性0_2");
            //         break;
            // }
            setColorCallback(setColor,{type:type,goal:goal,_value:_value,valCol:valCol,valOpa:valOpa}) // 设置值
            // zmEditor.component.setItems.setOpaCol({goal: option,type: "backgroundColor",value: _value});
            setOpaColCallback({goal: option,value: _value});//设置option值。

        })
        /****************************** 经典颜色按钮设置颜色 *********************/
        e.find("#zm-frequentlyColorSpan li").zmActionOn("mouseenter",function(){
            var goal = zmEditor.component.setItems.strings.future(ele,obj);
            var valOpa = present.opacity;
            var valCol = zmEditor.component.setItems.getOpaCol({goal: $(this),type: "backgroundColor"}).color;
            var _value = {color: valCol,opacity: valOpa};
            // switch(type){
            //     case "color":
            //     case "backgroundColor":
            //     case "borderColor":
            //     case "borderTopColor":
            //     case "borderBottomColor":
            //     case "fill":
            //     case "stroke":
            //         zmEditor.component.setItems.setOpaCol({goal: goal,type: type,value: _value});
            //         break;
            //     case "shadowC":
            //         var _shadow = goal.css("box-shadow");
            //         var _str = _shadow.split(" ");
            //         var _arr = [];
            //         for(i in _str){
            //             if(_str[i].indexOf("px") != -1){
            //                 _arr.push(_str[i]);
            //             }
            //         }
            //         zmEditor.component.setItems.setOpaCol({goal:goal,type:type,value:_value,shadowXYBS:_arr});
            //         break;
            //     case "hoverColor":
            //     case "hoverBackgroundColor":
            //     case "hoverBorderColor":
            //     case "hoverBorderTopColor":
            //     case "hoverBorderBottomColor":
            //     case "hoverFill":
            //         var str = "rgba("+valCol[0]+","+valCol[1]+","+valCol[2]+","+valOpa+")";
            //         goal.attr("data-type-"+type,str);
            //         break;
            //     default:
            //         console.log("未配置的属性0_3");
            //         break;
            // }

            setColorCallback(setColor,{type:type,goal:goal,_value:_value,valCol:valCol,valOpa:valOpa}) // 设置值

            // zmEditor.component.setItems.setOpaCol({goal: option,type: "backgroundColor",value: _value});
            setOpaColCallback({goal: option,value: _value});//设置option值。
            // $(".zm-colorPicker-more").hide();
            var nowColor=$(this).css("background-color");
            $(".colpick_current_color").css("backgroundColor",nowColor)
        });
       // 以下没有switch语句
        /****************************** 点击经典颜色 *********************/
        e.find("#zm-frequentlyColorSpan li").zmActionOn("click",function(){
            var _this = $(this);
            var nowColor=_this.css("background-color");
            var oxColor = nowColor.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
            delete (oxColor[0]);
            for (var n = 1; n <= 3; ++n) {
                oxColor[n] = parseInt(oxColor[n]).toString(16);
                if (oxColor[n].length == 1) oxColor[n] = '0' + oxColor[n];
            }
            var str = oxColor.join('');
            $(".zm-colorPicker-value").val(str);
            $(".colpick_new_color").css("backgroundColor",nowColor)

        });
        /****************************** 点击喜欢的颜色 ***************************/
        e.find("#zm-newColorSpan li").zmActionOn("click",function(){
            var _this = $(this);
            var nowColor=_this.css("background-color");
            var oxColor = nowColor.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
            delete (oxColor[0]);
            for (var n = 1; n <= 3; ++n) {
                oxColor[n] = parseInt(oxColor[n]).toString(16);
                if (oxColor[n].length == 1) oxColor[n] = '0' + oxColor[n];
            }
            var str = oxColor.join('');
            $(".zm-colorPicker-value").val(str);
            $(".colpick_new_color").css("backgroundColor",nowColor)

        });
        /****************************** 添加喜爱的颜色 ***************************/
        e.find("#pickers0").zmActionOn("click","#zm-addColorBtn",function(){
            var color = "#"+$(".zm-colorPicker-value").val();
            if($.inArray(color,colorArr) == -1){
                colorArr.unshift(color);
                colorArr.pop();
            }
            var lis = e.find("#zm-newColorSpan > li");
            for(var i in colorArr){
                lis[i].style.backgroundColor = colorArr[i];
            }
            localStorage.Hcolorarr = colorArr;
        });
        /****************************** 点击 X 关闭******************************/
        e.find("#content").zmActionOn("click","#zm-renoveColorPicker",function() { // 关闭颜色弹窗。
            var target = $(e.target);
            if (target.closest(".zm-colorPicker-more").length == 0 && target.closest(".zm-colorPicker-switch").length == 0) {
                $(".zm-colorPicker-more").hide();
            }
        });
        return e;
    },
    //设置颜色 e = { goal: 对象,type: 属性,value: valCol}
    setOPACol: function (e) {
        var _goal = e.goal;
        var _type = e.type;
        var _value = e.value;
        if (_type == 'shadowC') {
            var _arr = e.shadowXYBS;
            var _newStr = "rgba(" + _value.color[0] + "," + _value.color[1] + "," + _value.color[2] + "," + _value.opacity + ")" + " " + _arr[0] + " " + _arr[1] + " " + _arr[2];
            _goal.css("boxShadow", _newStr);
        } else {
            var _colorValue = "rgba(" + _value.color[0] + "," + _value.color[1] + "," + _value.color[2] + "," + _value.opacity + ")";
            if(_goal.closest('.zm-component-shape-box').length>0){
                _goal.closest('.zm-component-shape-box').attr('data-lineColor',_colorValue)
            }
            if(_goal.is('.zm-component-carousel-pageNumStyle')){
                _goal.html('.itsTurn{background-color:'+_colorValue+'!important}')
            }
            _goal.css(_type, _colorValue);
        }
    },
    fontStyle: function (ele,obj) {
        var e = $('<div><div class="zm-edit-text-fontStyle clearFloat">'
            + '<span data-zm-title="加粗" class="zm-tooltip">B</span>'
            + '<span data-zm-title="倾斜" class="zm-tooltip">I</span>'
            + '<span data-zm-title="下划线" class="zm-tooltip">U</span>'
            + '<span data-zm-title="删除线" class="zm-tooltip">S</span>'
            + '</div></div>');
        var p = e.find(".zm-edit-text-fontStyle span");
        var text = ele||zmEditor.component.nowEdit();
        var curClass = 'zm-edit-text-fontStyle-curSpan';
        if(text.css('font-weight')=='bold'){
            p.eq(0).addClass(curClass)
        }
        if(text.css('font-style')=='italic'){
            p.eq(1).addClass(curClass)
        }
        if((text.css('text-decoration')).split(" ")[0] == 'underline'){
            p.eq(2).addClass(curClass)
        }
        if((text.css('text-decoration')).split(" ")[0] == 'line-through'){
            p.eq(3).addClass(curClass)
        };
        e.find("span").on("click",function(){
            var _this = $(this);
            var index = _this.index();
            var goal;
            if(obj){
                goal = zmEditor.component.setItems.strings.future(text,obj);
            }else{
                goal = text;
            }
            switch(index){
                case 0:
                    if (goal.css("fontWeight") == "bold") {
                        goal.css("fontWeight", "normal")
                    }
                    else {
                        goal.css("fontWeight", "bold")
                    }
                    break;
                case 1:
                    if (goal.css("fontStyle") == "italic") {
                        goal.css("fontStyle", "normal")
                    }
                    else {
                        goal.css("fontStyle", "italic")
                    }
                    break;
                case 2:
                    if ((goal.css("text-decoration")).split(" ")[0] == "underline") {
                        goal.css("text-decoration", "none");
                    }
                    else {
                        goal.css("text-decoration", "underline");
                        p.eq(3).removeClass(curClass);
                    }
                    break;
                case 3:
                    if ((goal.css("text-decoration")).split(" ")[0] == "line-through") {
                        goal.css("text-decoration", "none")
                    }
                    else {
                        goal.css("textDecoration", "line-through");
                        p.eq(2).removeClass(curClass);
                    }
                    break;
            }
            _this.toggleClass(curClass);
        })
        return e;
    },
    paragraphStyle: function (ele) {
        var e = $('<div><div class="zm-edit-text-paragraphStyle clearFloat">'
            + '<span data-zm-title="左对齐"  class="fa fa-align-left zm-tooltip"></span>'
            + '<span data-zm-title="居中" class="fa fa-align-center zm-tooltip"></span>'
            + '<span data-zm-title="右对齐" class="fa fa-align-right zm-tooltip"></span>'
            + '</div></div>');
        var p = e.find(".zm-edit-text-paragraphStyle span");
        var text = ele||zmEditor.component.nowEdit();
        var curClass = 'zm-edit-text-paragraphStyle-curSpan';
        if(text.css('textAlign')=='center'){
            p.eq(1).addClass(curClass)
        }
        else if(text.css('textAlign')=='right'){
            p.eq(2).addClass(curClass)
        }
        else{
            p.eq(0).addClass(curClass)
        }
        e.find("span").on("click",function(){//暂时添加
            var _this = $(this);
            var index = _this.index();
            if(index==1){
                text.css("textAlign",'center');
            }
            else if(index==2){
                text.css("textAlign",'right');
            }
            else{
                text.css("textAlign",'left');
            }
            _this.addClass(curClass).siblings().removeClass(curClass)
        })
        //暂时添加
        return e;
    },
    lineSpace: function (ele, obj) {
        var e = zmEditor.component.setItems.strings.strSize();
        var type = obj.param, title = obj.title, style = obj.style, min = 0, max = 100
        if (obj.size) {
            min = obj.size[0], max = obj.size[1];
        }
        if (obj.isColor) {
            e = zmEditor.component.setItems.strings.strColor();
            min = 0;
            max = 100;
        }
        e.zmSlider({goal: ele, type: type, title: title, style: style, minSize: min, maxSize: max});
        return e;
    },
    fontSpace: function (ele,obj) {
        var e = zmEditor.component.setItems.strings.strSize();
        var type = obj.param, title = obj.title, style = obj.style, min = 0, max = 100
        if (obj.size) {
            min = obj.size[0], max = obj.size[1];
        }
        if (obj.isColor) {
            e = zmEditor.component.setItems.strings.strColor();
            min = 0;
            max = 100;
        }
        e.zmSlider({goal: ele, type: type, title: title, style: style, minSize: min, maxSize: max});
        return e;
    },
    tbPadding: function () {
        var e = $('<div class="zm-edit-slider" id="zm-edit-text-fontSize">'
            + '<span class="zm-edit-text-title">上下边距</span>'
            + '<span class="zm-edit-slider-parent" style="width:165px;" ><span class="zm-edit-slider-child"  ></span></span>'
            + '<input type="text" class="zm-edit-slider-val" maxlength="2">'
            + '</div>');
        var obj = zmEditor.component.nowEdit();
        e.zmSlider({type: "tbPadding", minSize: 0, maxSize: 50, goal: obj});
        return e;
    },
    lrPadding: function () {
        var e = $('<div class="zm-edit-slider" id="zm-edit-text-fontSize">'
            + '<span class="zm-edit-text-title">左右边距</span>'
            + '<span class="zm-edit-slider-parent" style="width:165px;" ><span class="zm-edit-slider-child"  ></span></span>'
            + '<input type="text" class="zm-edit-slider-val" maxlength="2">'
            + '</div>');
        var obj = zmEditor.component.nowEdit();
        e.zmSlider({type: "lrPadding", minSize: 0, maxSize: 50, goal: obj});
        return e;
    },
    width: function (ele,obj) {
        var e = zmEditor.component.setItems.strings.strSize();
        var type = obj.param, title = obj.title, style = obj.style, min = 0, max = 100
        if (obj.size) {

            min = obj.size[0], max = obj.size[1];
        }
        if (obj.isColor) {
            e = zmEditor.component.setItems.strings.strColor();
            min = 0;
            max = 100;
        }
        e.zmSlider({goal: ele, type: type, title: title, style: style, minSize: min, maxSize: max});
        return e;
    },
    height: function (ele,obj) {
        var e = zmEditor.component.setItems.strings.strSize();
        var type = obj.param, title = obj.title, style = obj.style, min = 0, max = 100
        if (obj.size) {
            min = obj.size[0], max = obj.size[1];
        }
        if (obj.isColor) {
            e = zmEditor.component.setItems.strings.strColor();
            min = 0;
            max = 100;
        }
        e.zmSlider({goal: ele, type: type, title: title, style: style, minSize: min, maxSize: max});
        return e;
    },
    scale: function (ele,obj) {
        var e = zmEditor.component.setItems.strings.strSize();
        var type = obj.param, title = obj.title, style = obj.style, min = 0, max = 100
        if (obj.size) {
            min = obj.size[0], max = obj.size[1];
        }
        if (obj.isColor) {
            e = zmEditor.component.setItems.strings.strColor();
            min = 0;
            max = 100;
        }
        e.zmSlider({goal: ele, type: type, title: title, style: style, minSize: min, maxSize: max});
        return e;
    },
    lineClamp: function (ele,obj) {
        var e = zmEditor.component.setItems.strings.strSize();
        var type = obj.param, title = obj.title, style = obj.style, min = 0, max = 100;
        if (obj.size) {
            min = obj.size[0], max = obj.size[1];
        }
        if (obj.isColor) {
            e = zmEditor.component.setItems.strings.strColor();
            min = 0;
            max = 100;
        }
        e.zmSlider({goal: ele, type: type, title: title, style: style, minSize: min, maxSize: max});
        return e;
    },
    //圆角组件 单一可公用
    radiu_ordinary:function(ele,str){//ye 可公用 只作用单一元素。支持动态创建的元素
        var e =$('<div style="margin-top: 22px;">'
            +'<span class="zm-edit-text-title">圆角 <i style="font-size: 12px">(像素</i>)</span>'//圆角(像素)
            +'<div class="zm-edit-border-radius-box"style=" margin: 35px 0 45px 0;">'
            +'<input class="zm-edit-radius-val radiusInput" data-zm-radius="tl" >' //maxlength="2"
            +'<input class="zm-edit-radius-val radiusInput" data-zm-radius="tr" >'
            +'<input class="zm-edit-radius-val radiusInput" data-zm-radius="br" >'
            +'<input class="zm-edit-radius-val radiusInput" data-zm-radius="bl" >'
            +'<div class="zm-edit-border-radius radiusDivborder" style="position: relative">'
            +'<div></div>'
            +'<div></div>'
            +'<div></div>'
            +'<div></div>'
            +'<label class="zm-switch-box" style="position: absolute;top:35px;left: 45px;"><span class="zm-switch" style="border: 1px solid #ccc;"><span class="fa fa-window-minimize"></span></span><span style="position: absolute;top: 1px;left: 21px;z-index:1;font-size: 12px;color: #fff;" class="radius_font">独立</span></label>'
            +'</div>'
            +'</div>'
            +'</div>'),a=false,isSelect;
        ele=ele?ele:zmEditor.component.nowEdit();
        isSelect=ele;
        var radiusTL = ele.css("border-top-left-radius");
        var radiusTR = ele.css("border-top-right-radius");
        var radiusBR = ele.css("border-bottom-right-radius");
        var radiusBL = ele.css("border-bottom-left-radius");
        e.find("input[data-zm-radius='tl']").val(parseInt(radiusTL));
        e.find("input[data-zm-radius='tr']").val(parseInt(radiusTR));
        e.find("input[data-zm-radius='br']").val(parseInt(radiusBR));
        e.find("input[data-zm-radius='bl']").val(parseInt(radiusBL));
        e.find("label").on("click",function(){
            if(str.goal)ele = isSelect.find(str.goal);
            var b=e.find("input[data-zm-radius='tl']").val();
            !a?(e.find(".radius_font").css("left","5px"),e.find(".radius_font").text("同步"),a=true,ele.css({"border-top-left-radius":b+"px","border-top-right-radius":b+"px","border-bottom-right-radius":b+"px","border-bottom-left-radius":b+"px"}),
            e.find("input[data-zm-radius='tl']").val(parseInt(b)),
            e.find("input[data-zm-radius='tr']").val(parseInt(b)),
            e.find("input[data-zm-radius='br']").val(parseInt(b)),
            e.find("input[data-zm-radius='bl']").val(parseInt(b)),
            e.find(".fa").removeClass("fa-window-minimize").addClass("fa-check"),
            e.find(".zm-switch-box").removeClass("radiusindipendent"), //  e.find(".zm-switch").css("border-color","#4ab1a7")
            e.find(".zm-switch-box").addClass("radiusall")
            ):(  e.find(".radius_font").css("left","21px"), e.find(".radius_font").text("独立"),a=false,
            e.find(".fa").removeClass("fa-check").addClass("fa-window-minimize"),
            e.find(".zm-switch").css("border-color","#ccc"), e.find(".zm-switch-box").removeClass("radiusall"), e.find(".zm-switch-box").addClass("radiusindipendent")
            );
        });
        e.on("change",".zm-edit-radius-val",function(){
            if(str.goal)ele = isSelect.find(str.goal);
            var _this = $(this);
            var flag = _this.attr("data-zm-radius");
            var val = parseInt(_this.val());
            if(val==""||val==" "||!val){val=0}
            if(!isNaN(val)){
                if(val<= 0){val=0};
                if(!a){
                    switch (flag){
                        case "tl":
                            ele.css("border-top-left-radius",val);
                            break;
                        case "tr":
                            ele.css("border-top-right-radius",val);
                            break;
                        case "br":
                            ele.css("border-bottom-right-radius",val);
                            break;
                        case "bl":
                            ele.css("border-bottom-left-radius",val);
                            break;
                        default:
                            break;
                    }
                }else{
                    ele.css({"border-top-left-radius":val,"border-top-right-radius":val,"border-bottom-right-radius":val,"border-bottom-left-radius":val});
                    e.find("input").val(val);
                }
                _this.val(val);
            }
            else{
                _this.val("");
            }
        });
        e.find(".zm-edit-border-radius-box input").hover(function(){
            var _this = $(this);
            var index = _this.index();
            a?e.find(".zm-edit-border-radius div").css("border-width","3px"):e.find(".zm-edit-border-radius div").eq(index).css("border-width","3px");
        },function(){
            var _this = $(this);
            var index = _this.index();
           a?e.find(".zm-edit-border-radius div").css("border-width","1px"):e.find(".zm-edit-border-radius div").eq(index).css("border-width","1px");
        });
        return e;
    },
    //圆角组件 可公用
    //圆角组件 作用元素多层级结构可选择 可公用
    radius: function (ele,str,a,_this,e,val,flag) {
        //组件可公用.
        // 可公用。 //可作用于一个元素的圆角,2个元素的圆角。4个元素的圆角。和多个元素的圆角。  str参数若是对象，则str.fn属性可传入一个回调函数写圆角设置后想要执行的代码
        // 若是想作用于2个或是4个元素的圆角，传入ele 元素是一个数组。传入ele参数时按照圆角顺序传入元素并放到一个数组字面量中，传入的元素是你想做作用的圆角元素。
        // 2个作用元素时，可分为横向排列，纵向排列。第二个参数,必须传入一个对象。对象下的vc属性是"vertical"，表示纵向排列的元素，反之表示横向排列的元素。作用的元素的圆角是按照上右下左的顺序。 (传入2个元素时与4个元素类似。2个元素的每个元素对应2个圆角)
        //传入4个元素时,传入参数按照圆角顺序上右下左的顺序。分别作用于one元素->左上，two元素->右上，three元素->右下，four元素->左下的圆角.
        //传入一个或多个元素时可直接传入一个jquery对象即可。分别作用于每个元素的上下左右圆角。
        if(e){}else{
                e = $('<div style="margin-top: 22px;height: 200px" class="zm-edit-components-radius">'
                + '<span class="zm-edit-text-title">圆角 <i style="font-size: 12px">(像素</i>)</span>'//圆角(像素)
                + '<div class="zm-edit-border-radius-box"style=" margin: 35px 0 45px 0;">'
                + '<input class="zm-edit-radius-val radiusInput" data-zm-radius="tl" >' //maxlength="2"
                + '<input class="zm-edit-radius-val radiusInput" data-zm-radius="tr" >'
                + '<input class="zm-edit-radius-val radiusInput" data-zm-radius="br" >'
                + '<input class="zm-edit-radius-val radiusInput" data-zm-radius="bl" >'
                + '<div class="zm-edit-border-radius radiusDivborder" style="position: relative">'
                + '<div></div>'
                + '<div></div>'
                + '<div></div>'
                + '<div></div>'
                + '<label class="zm-switch-box radiusindipendent" style="position: absolute;top:35px;left: 45px;"><span class="zm-switch" style="border: 1px solid #ccc;"><span class="fa fa-window-minimize"></span></span><span style="position: absolute;top: 1px;left: 21px;z-index:1;font-size: 12px;color: #fff;" class="radius_font">独立</span></label>'
                + '</div>'//fa-check  background-color: #ccc
                + '</div>'
                + '</div>');
        }
        a=a?a:false;
        if (ele) {} else {ele = zmEditor.component.nowEdit()};
        var radiusTL, radiusTR, radiusBR, radiusBL,repaintRadius=false;
        function refreshEle(ele,str,a,_this,e,val,flag){
         if(ele instanceof Array){
             //判断ele的第一个子元素是否可获得
             // console.log($(ele[0]).closest(".zm-component-main"));
             if($(ele[0]).closest(".zm-component-main").length>0){
                 return;
             }else{
                 e.off();repaintRadius=true;
                 var isSelectOnce=zmEditor.component.nowEdit();
                 // console.log(zmEditor.globalMethod.nav.initNavList.getRadiusEle(isSelectOnce, isSelectOnce[0].classList[4]))
                 zmEditor.component.setItems.radius(zmEditor.globalMethod.nav.initNavList.getRadiusEle(isSelectOnce, isSelectOnce[0].classList[4]),str,a,_this,e,val,flag);
                 if(_this[0].nodeName.toLowerCase()=="label"){
                     _this.trigger("click");
                     _this.addClass("zm-switch-box-on");
                 }else{
                     _this.trigger("change");
                 }
             }
         }else{
         //判断ele是否可获得
             if($(ele).closest(".zm-component-main").length>0){// console.log(isSelectOnce)
                 return;
             }else{
                 e.off();repaintRadius=true;
                 var isSelectOnce=zmEditor.component.nowEdit();
                 zmEditor.component.setItems.radius( zmEditor.globalMethod.nav.initNavList.getRadiusEle(isSelectOnce, isSelectOnce[0].classList[4]),str,a,_this,e,val,flag);
                 if(_this[0].nodeName.toLowerCase()=="label"){
                     _this.trigger("click");
                     _this.addClass("zm-switch-box-on");
                 }else{
                     _this.trigger("change");
                 }
             }
         }
        }
        // if(!(ele instanceof Array)){
        switch (ele.length) { // 获得边框
            case 1:
                getRadius($(ele), $(ele), $(ele), $(ele),a,val,flag);
                break;
            case 2:
                if (str.vc == "vertical") {
                    getRadius($(ele[0]), $(ele[0]), $(ele[1]), $(ele[1]),a,val,flag);
                } else {
                    getRadius($(ele[0]), $(ele[1]), $(ele[1]), $(ele[0]),a,val,flag);
                }
                break;
            case 4:
                getRadius($(ele[0]), $(ele[1]), $(ele[2]), $(ele[3]),a,val,flag);
                break;
            default:
                getRadius($(ele[0]), $(ele[0]), $(ele[0]), $(ele[0]),a,val,flag);
                break;
        }
        function getRadius(one, two, three, four,a,val,flag) {
            if(val){
                if(a){
                    radiusTL =val;
                    radiusTR =val;
                    radiusBR =val;
                    radiusBL =val;
                }
                else if(flag){
                    switch (flag) {
                    case "tl":
                        radiusTL = val;
                        radiusTR = two.css("border-top-right-radius");
                        radiusBR = three.css("border-bottom-right-radius");
                        radiusBL = four.css("border-bottom-left-radius");
                        break;
                    case "tr":
                        radiusTL = one.css("border-top-left-radius");
                        radiusTR = val;
                        radiusBR = three.css("border-bottom-right-radius");
                        radiusBL = four.css("border-bottom-left-radius");
                        break;
                    case "br":
                        radiusTL = one.css("border-top-left-radius");
                        radiusTR = two.css("border-top-right-radius");
                        radiusBR = val;
                        radiusBL = four.css("border-bottom-left-radius");
                        break;
                    case "bl":
                        radiusTL = one.css("border-top-left-radius");
                        radiusTR = two.css("border-top-right-radius");
                        radiusBR = three.css("border-bottom-right-radius");
                        radiusBL = val;
                        break;
                        case "3":
                            radiusTL =val;
                            radiusTR =val;
                            radiusBR =val;
                            radiusBL =val;
                            break;
                    default:
                        break;
                    }
                }
            }
            else{
                radiusTL = one.css("border-top-left-radius");
                // console.log(one);
                radiusTR = two.css("border-top-right-radius");
                // console.log(two);
                radiusBR = three.css("border-bottom-right-radius");
                radiusBL = four.css("border-bottom-left-radius");
            }
        }
        setinput(radiusTL, radiusTR, radiusBR, radiusBL);
        function setinput(radiusTL, radiusTR, radiusBR, radiusBL) {
            e.find("input[data-zm-radius='tl']").val(parseInt(radiusTL));
            e.find("input[data-zm-radius='tr']").val(parseInt(radiusTR));
            e.find("input[data-zm-radius='br']").val(parseInt(radiusBR));
            e.find("input[data-zm-radius='bl']").val(parseInt(radiusBL));
        }
        sOri();
        function sOri() {
            e.on("click",".zm-switch-box", function (event) {
                // console.log(ele);
                // console.log(ele.onceEle());
                event.stopPropagation();
                $(this).toggleClass("zm-switch-box-on");
                var b;
                b = e.find("input[data-zm-radius='tl']").val();
                refreshEle(ele,str,a,$(this),e,b,"3");
                if(repaintRadius){return}
                if (!a) {
                    e.find(".radius_font").css("left", "5px");
                    e.find(".radius_font").text("同步");
                    // e.find(".zm-switch-box").css("background-color","#4ab1a7");
                    e.find(".zm-switch-box").removeClass("radiusindipendent");
                    e.find(".zm-switch-box").addClass("radiusall");
                    a = true;
                    switch (ele.length) {
                        case 1:
                            setallRadius($(ele), $(ele), $(ele), $(ele), b, a)
                            break;
                        case 2:
                            if (str.vc == "vertical") {
                                setallRadius($(ele[0]), $(ele[0]), $(ele[1]), $(ele[1]), b, a)
                            } else {
                                setallRadius($(ele[0]), $(ele[1]), $(ele[1]), $(ele[0]), b, a)
                            }
                            break;
                        case 4:
                            setallRadius($(ele[0]), $(ele[1]), $(ele[2]), $(ele[3]), b, a)
                            break;
                        default:
                            ele.each(function (index, element) {
                                setallRadius($(element), $(element), $(element), $(element), b, a)
                            });
                            break;
                    };
                    setinput(parseInt(b), parseInt(b), parseInt(b), parseInt(b));
                    e.find(".fa").removeClass("fa-window-minimize").addClass("fa-check");
                    e.find(".zm-switch").css("border-color", "#4ab1a7");
                } else {
                    e.find(".radius_font").css("left", "21px"),
                        e.find(".radius_font").text("独立"), a = false,
                        e.find(".zm-switch-box").css("background-color","#ccc");
                       e.find(".zm-switch-box").removeClass("radiusall");
                       e.find(".zm-switch-box").addClass("radiusindipendent");
                        e.find(".fa").removeClass("fa-check").addClass("fa-window-minimize"),
                        e.find(".zm-switch").css("border-color", "#ccc");
                }
            });
        }
        e.on("change", ".zm-edit-radius-val", allOrin);
        function allOrin() {
            var _this = $(this);
            var flag = _this.attr("data-zm-radius");
            val = parseInt(_this.val());
            if(val==""||val==" "||!val){val=0}
            // console.log(val)
            refreshEle(ele,str,a,$(this),e,val,flag);
            if(repaintRadius){return}
            if (val <= 0) {
                val = 0
            };
            if (!isNaN(val)) {
                if (!a) {
                    switch (ele.length) {
                        case 1:
                            setinRadius(flag, $(ele), $(ele), $(ele), $(ele), val, a);
                            break;
                        case 2:
                            if (str.vc == "vertical") {
                                setinRadius(flag, $(ele[0]), $(ele[0]), $(ele[1]), $(ele[1]), val, a)
                            } else {
                                setinRadius(flag, $(ele[0]), $(ele[1]), $(ele[1]), $(ele[0]), val, a)
                            }
                            break;
                        case 4:
                            setinRadius(flag, $(ele[0]), $(ele[1]), $(ele[2]), $(ele[3]), val, a)
                            break;
                        default:
                            ele.each(function (index, element) {
                                setinRadius(flag, $(element), $(element), $(element), $(element), val, a);
                            })
                            break;
                    }
                } else {
                    switch (ele.length) {
                        case 1:
                            setallRadius($(ele), $(ele), $(ele), $(ele), val, a)
                            break;
                        case 2:
                            if (str.vc == "vertical") {
                                setallRadius($(ele[0]), $(ele[0]), $(ele[1]), $(ele[1]), val, a)
                            } else {
                                setallRadius($(ele[0]), $(ele[1]), $(ele[1]), $(ele[0]), val, a)
                            }
                            break;
                        case 4:
                            setallRadius($(ele[0]), $(ele[1]), $(ele[2]), $(ele[3]), val, a)
                            break;
                        default:
                            ele.each(function (index, element) {
                                setallRadius($(element), $(element), $(element), $(element), val, a)
                            })
                            break;
                    }
                    e.find("input").val(val);
                }
                _this.val(val);
            }
            else {
                _this.val("");
            }
        }
        function setallRadius(ele1, ele2, ele3, ele4, val, a) {
            ele1.css("border-top-left-radius", val + "px");
            ele2.css("border-top-right-radius", val + "px");
            ele3.css("border-bottom-right-radius", val + "px");
            ele4.css("border-bottom-left-radius", val + "px");
            // console.log(val);
            if (str.fn) {
                str.fn(ele,str,a,flag,val);
            }
        }
        function setinRadius(flag, ele1, ele2, ele3, ele4, val, a) {
            switch (flag) {
                case "tl":
                    ele1.css("border-top-left-radius", val + "px");
                    break;
                case "tr":
                    ele2.css("border-top-right-radius", val + "px");
                    break;
                case "br":
                    ele3.css("border-bottom-right-radius", val + "px");
                    break;
                case "bl":
                    ele4.css("border-bottom-left-radius", val + "px");
                    break;
                default:
                    break;
            }
            if (str.fn) {
                str.fn(ele, str, a, flag, val);
            }
        }
        e.find(".zm-edit-border-radius-box input").hover(function () {
            var _this = $(this);
            var index = _this.index();
            a ? e.find(".zm-edit-border-radius div").css("border-width", "3px") : e.find(".zm-edit-border-radius div").eq(index).css("border-width", "3px");
        }, function () {
            var _this = $(this);
            var index = _this.index();
            a ? e.find(".zm-edit-border-radius div").css("border-width", "1px") : e.find(".zm-edit-border-radius div").eq(index).css("border-width", "1px");
        });
        return e;
    },
    //圆角组件 可公用
    bannerStyleChange:function(ele,obj){
        var element=obj.template;
        return element;
    },
    fugaiwenli:function(ele,obj){
        var goal,element;
        goal = zmEditor.component.setItems.strings.future(ele,obj);
        element=obj.template;
        return element;
    },
    PlaybackEffect:function(ele,obj){//视频播放效果,由于视频播放效果更能各不相同，为达到组件复用性高,要设置视频播放效果的js在obj中传入一个名为 PlaybackEffectCallabck 回调函数即可。 ye
        var element,isSelect;
        element=zmEditor.component.setItems.templateELement.PlaybackEffect;
        isSelect=zmEditor.component.setItems.strings.future(ele,obj);
        obj.PlaybackEffectCallabck(element,isSelect);
        return  element;
    },
    pictureShowScale:function(ele,obj){ //图片显示比例html; 由于显示比例组件更能各不相同，要设置显示比例的js在obj中传入一个名为 pictureShowScaleCallabck 回调函数即可。  ye
        var element,isSelect;
        element=zmEditor.component.setItems.templateELement.pictureshowScalHtml;
        isSelect=zmEditor.component.setItems.strings.future(ele,obj);
        obj.pictureShowScaleCallabck(element,isSelect);
       return  element;
    },
    padding: function () {
        var e = $('<div><label>'
            + '<span class="zm-edit-text-title">四周弧度(°)</span><input class="zm-edit-border-radius-input" readonly><span class="zm-edit-text-title">内边距(px)</span><input class="zm-edit-padding-input" readonly>'
            + '<div class="zm-edit-border-radius-box">'
            + '<input class="zm-edit-radius-padding-val" data-zm-radius="tl" maxlength="2">'
            + '<input class="zm-edit-radius-padding-val" data-zm-radius="tr" maxlength="2">'
            + '<input class="zm-edit-radius-padding-val" data-zm-radius="br" maxlength="2">'
            + '<input class="zm-edit-radius-padding-val" data-zm-radius="bl" maxlength="2">'
            + '<div class="zm-edit-border-radius">'
            + '<input class="zm-edit-radius-padding-val" data-zm-radius="t" maxlength="2">'
            + '<input class="zm-edit-radius-padding-val" data-zm-radius="r" maxlength="2">'
            + '<input class="zm-edit-radius-padding-val" data-zm-radius="b" maxlength="2">'
            + ' <input class="zm-edit-radius-padding-val" data-zm-radius="l" maxlength="2">'
            + ' </div>'
            + '</div>'
            + '</label></div>');
        var iSelected = zmEditor.component.nowEdit();
        var radiusTL = iSelected.css("border-top-left-radius");
        var radiusTR = iSelected.css("border-top-right-radius");
        var radiusBR = iSelected.css("border-bottom-left-radius");
        var radiusBL = iSelected.css("border-bottom-left-radius");
        e.find("input[data-zm-radius='tl']").val(parseInt(radiusTL));
        e.find("input[data-zm-radius='tr']").val(parseInt(radiusTR));
        e.find("input[data-zm-radius='br']").val(parseInt(radiusBR));
        e.find("input[data-zm-radius='bl']").val(parseInt(radiusBL));
        //内边距
        var radiusT = iSelected.css("padding-top");
        var radiusR = iSelected.css("padding-right");
        var radiusB = iSelected.css("padding-bottom");
        var radiusL = iSelected.css("padding-left");
        e.find("input[data-zm-radius='t']").val(parseInt(radiusT));
        e.find("input[data-zm-radius='r']").val(parseInt(radiusR));
        e.find("input[data-zm-radius='b']").val(parseInt(radiusB));
        e.find("input[data-zm-radius='l']").val(parseInt(radiusL));
        e.on("change", ".zm-edit-radius-padding-val", function () {
            var elem = zmEditor.component.nowEdit();
            var _this = $(this);
            var flag = _this.attr("data-zm-radius");
            var val = parseInt(_this.val());
            if (!isNaN(val)) {
                switch (flag) {
                    case "tl":
                        elem.css("border-top-left-radius", val);
                        break;
                    case "tr":
                        elem.css("border-top-right-radius", val);
                        break;
                    case "br":
                        elem.css("border-bottom-right-radius", val);
                        break;
                    case "bl":
                        elem.css("border-bottom-left-radius", val);
                        break;
                    case "t":
                        elem.css("padding-top", val);
                        break;
                    case "r":
                        elem.css("padding-right", val);
                        break;
                    case "b":
                        elem.css("padding-bottom", val);
                        break;
                    case "l":
                        elem.css("padding-left", val);
                        break;
                    default:

                        break;
                }
                _this.val(val);
            }
            else {
                _this.val("");
            }
        })
        return e;
    },
    backgroundcolor: function (ele, str) {
        var e = zmEditor.globalMethod.initialize_color_html_callback("光标悬停背景色", "mian_children_childrenLi_hover_bg");
        ele = ele ? ele : zmEditor.component.nowEdit();
        e.zmSlider({type: "opacity_style", minSize: 0, maxSize: 100, class: str});
        return e;
    },
    href:function(ele){
      ele.closest(".zm-component-main");
        var e =$('<div class="zm-edit-components-text-href" style="height: auto">'
            +'<span class="zm-edit-text-title" style="height: 40px;line-height: 40px">链接</span>'
            +'<label class="zm-switch-box"><span class="zm-switch"><span class="fa fa-minus"></span></span></label>'
            +'<span class="zm-edit-text-hrefSet" style="margin-top: 7px">设置链接</span>'
            +'<div class="zm-edit-text-hrefSet-content" style="height: auto;padding-bottom: 7px"></div>'
            +'</div>');
        var on_off = e.find("label");
        var set_href = e.find(".zm-edit-text-hrefSet");
        if(ele.hasClass("zm-setHref-linkBtn")){
            on_off.addClass("zm-switch-box-on zm-switch-box");
            set_href.addClass("clickColor");
        }
        if(ele.attr("data-href")){
            on_off.addClass("zm-switch-box-on");
            set_href.addClass("clickColor");
        }
        var titleCon=ele.attr("data-openhref-content");
        if(ele.hasClass("zm-setHref-linkBtn")){
            e.find(".zm-edit-text-hrefSet-content").html(titleCon);
        }else{
            e.find(".zm-edit-text-hrefSet-content").html("");
        }
        on_off.on("click",function(){
            var _this = $(this);
            if(_this.hasClass("zm-switch-box-on")){
                console.log("关闭");
                ele.removeClass("zm-setHref-linkBtn");
                _this.removeClass(".zm-switch-box-on clickColor");
                set_href.removeClass("clickColor").attr("onclick","");
                e.find(".zm-edit-text-hrefSet-content").html("");
            }else{
                console.log("打开");
                ele.addClass("zm-setHref-linkBtn");
                _this.addClass(".zm-switch-box-on");
                set_href.addClass("clickColor");
                e.find(".zm-edit-text-hrefSet-content").html(titleCon);
            }
        });
        set_href.off("click");
        set_href.on("click",function () {
            if($(this).hasClass("clickColor")){
                zmEditor.dialog.setHref(ele,e);
            }
        });

        return e;
    },
    typeClass: function () {//ye待删除
        var e = $("<div><span class='typeClasspageSet' style='width: 200px;height: 30px;    line-height: 30px;display: block;background-color:#00a4fd;text-align: center; color: #fff;margin: 0 auto;margin-top: 20px;border-radius: 8px;'>" +
            "点击页面设置</span><span class='typeClasspageSetadd' style='width: 200px;height: 30px;    line-height: 30px;display: block;background-color:#00a4fd;text-align: center; color: #fff;margin: 0 auto;margin-top: 20px;border-radius: 8px;'>" +
            "点击添加到导航设置</span></div>");

        e.on("click", ".typeClasspageSet", function () {
            zmEditor.pageSet('pageSet');
        })
        e.on("click", ".typeClasspageSetadd", function () {
            console.log(11);
        })
        // 该组件可自动刷新列表类名，功能比较好拓展.（待删除)..
        var e = $('<div class="zm-edit-class">' +//二级三级列表类名问题
            '<div class="zm-edit-classOne1 clearfix"><span class="classOne1span"></span><div class="zm-edit-classTwo1 clearfix"><span class="classTwo1span"></span><div class="zm-edit-classThree1"><span class="classThree1span"></span></div></div></div>' +
            '<div class="zm-edit-classOne2 clearfix"><span class="classOne2span"></span><div class="zm-edit-classTwo2 clearfix"><span class="classTwo2span"></span><div class="zm-edit-classThree2"><span class="classThree2span"></span></div></div></div>' +
            '<div class="zm-edit-classOne3 clearfix"><span class="classOne3span"></span><div class="zm-edit-classTwo3 clearfix"><span class="classTwo3span"></span><div class="zm-edit-classThree3"><span class="classThree3span"></span></div></div></div>' +
            '<div class="zm-edit-classOne4 clearfix"><span class="classOne4span"></span><div class="zm-edit-classTwo4 clearfix"><span class="classTwo4span"></span><div class="zm-edit-classThree4"><span class="classThree4span"></span></div></div></div>' +
            '<div class="zm-edit-classOne5 clearfix"><span class="classOne5span"></span><div class="zm-edit-classTwo5 clearfix"><span class="classTwo5span"></span><div class="zm-edit-classThree5"><span class="classThree5span"></span></div></div></div>' +
            '<div class="zm-classConfirm zm-classConfirm-ye">确认</div><div class="zm-classConfirm-confirm zm-classConfirm-ye">是否添加到导航栏？点击内容确认添加到导航栏。<br><span>确认</span><span>取消</span></div></div>'), is_selected;
        is_selected = zmEditor.component.nowEdit().find("ul").children("li");
        var l = is_selected.length, arre = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
        e.children("div[class^='zm-edit']").each(function (index, element) {//初始化函数
            addbianji(this, index);
            addbianji_son(this);
        })
        e.find("span[class$='span']").on("click", function (event) {//点击切换按钮
            $(this).closest("div[class^='zm-edit']").children("div[class^='zm-edit']").toggle();
        })
        e.on("click", "input", function () {

        })
        e.on("click", ".zm-classConfirm", function (event) {//弹出确认框
            var x, y;
            x = event.pageX;
            y = event.pageY;
            $(".zm-classConfirm-confirm").css({
                "position": "fixed",
                "left": x + "px",
                "top": y + "px",
                "display": "block"
            });
        })

        e.on("click", ".zm-classConfirm-confirm span:eq(0)", function (event) {//弹出确认框确认按钮
            // $(".zm-classConfirm-confirm").css({"display":"none"});
            confirmreader();
        })
        e.on("click", ".zm-classConfirm-confirm span:eq(1)", function (event) {//弹出确认框取消按钮
            $(".zm-classConfirm-confirm").css({"display": "none"});
        })
        e.on("click", ".classAdd", function (event) {
            var type, tr = /^zm-edit-class(One)|(Two)|(Three)\d$/i, arr = [], arr1, _this = this, a;
            $(_this).parent("div[class^='zm-edit']").after($(this).parent("div[class^='zm-edit']").clone("true"));
            var i;
            i = $(this).closest("div[class^='zm-edit-class']").parent("div[class^='zm-edit-class']");
            i = i.children("div[class^='zm-edit-class']");
            classSort(i);
        })
        e.on("click", ".classDel", classDel);
        function classDel() {
            var i;
            i = $(this).closest("div[class^='zm-edit-class']").parent("div[class^='zm-edit-class']");
            i[0].removeChild($(this).closest("div[class^='zm-edit-class']")[0]);
            i = i.children("div[class^='zm-edit-class']");
            classSort(i);
        }

        function classSort(i) {
            var s, c = /(One|Two|Three|Four|Five|Six|Seven|Eight|Nine)[\d]/, d, a;
            i.each(function (index, element) {
                a = element.classList.item(0);
                $(this).removeClass("" + a).removeClass("clearfix");
                var g = a.replace(c, function (match) {
                    var p = match.replace(/[\d]/, '') + (index + 1);
                    return p;
                });
                $(element).addClass(g).addClass("clearfix");
            })
        }

        function addbianji(ele, index) {
            $(ele).append($("<input type='text' placeholder='请编辑输入内容'>").addClass("classOne1input").val($(is_selected[index]).text() + ""));
            $(ele).append($("<a href='javascript:;' class='classAdd'>添加同级</a> <a href='javascript:;'class='classDel'>删除</a> <a href='javascript:;' class='classLink'>链接</a>"));
        }

        function addbianji_son(ele) {
            $(ele).find("div[class^='zm-edit-class']").append($("<input type='text' placeholder='请编辑输入内容'>").addClass("classOne1input"));
            $(ele).find("div[class^='zm-edit-class']").append($("<a href='javascript:;' class='classAdd'>添加同级</a> <a href='javascript:;'class='classDel'>删除</a> <a href='javascript:;' class='classLink'>链接</a>"));
        }

        function confirmreader() {
            // if(arguments.length)
            var a = $(".zm-edit-class").children("div[class^='zm-edit-class']"), is_select, c, d, e;
            zmEditor.component.nowEdit().find("ul").children("li").remove();
            is_select = zmEditor.component.nowEdit().find("ul");
            a.each(function (index, element) {
                c = $("<li>" + $(element).children("input").val() + "</li>")//生成一级li列表
                c.css("position", "relative");
                c.addClass("zm-edit-classOneli");
                is_select.append(c);//一级列表放入一级ul中
                d = $(element).children("div[class^='zm-edit-classTwo']");//查找二级列表的数量。
                e = $('<ul class="zm-edit-classTwo-ul"></ul>');//生成二级列表的ul
                c.append(e);// 二级ul列表放入一级li列表中
                d.each(function (index, element) {
                    var q, w, t;
                    q = $("<li class='zm-edit-classTwo-ul-li'>" + $(element).children("input").val() + "</li>")//生成二级li列表
                    e.append(q);//二级li列表放入二级ul列表中;
                    t = $('<ul class="zzm-edit-classThree-ul"></ul>'); //生成3级列表的ul
                    q.append(t);//三级列表的ul放入二级列表的li
                    w = $(element).children("div[class^='zm-edit-classThree']");
                    w.each(function (index, element) {
                        var u;
                        u = $("<li class='zzm-edit-classThree-ul-li'>" + $(element).children("input").val() + "</li>");//生成三级列表的Li
                        t.append(u);
                    })
                })
            })
        }
        return e;
    },
    //全屏展示组件 可公用 className为一个对象 默认支持满屏状态下的 纵向满屏和横向满屏。 需传入className.crossORvertical=="cross"表示需要横向满屏或"vertical“ 表示需要纵向满屏。
    // 默认只支持iSelected-》zm-component-main一层元素响应，若要多级响应，看说明自行传入回调函数。
    // 横向回调函数为 满屏状态下为className.fullscreenTure 。 不满屏状态下为className.fullscreenFlase 纵向对应为 verticalfullscreenTrue 和verticalfullscreenFlase
    //bannerController函数中在wresize函数中满屏状态下浏览器变化时响应式浏览器大小。 默认只响应iSelected-》zm-component-main一层响应浏览器，若要子集或是后代元素响应浏览器变化可自行传入回调函数className.wresizeCallback->fn.自行设置你想要响应的代码元素。
    //自定义bannerController组件名，通过传入className.stringwORh 可自定义设置组件名
    bannerController: function (iSelected, className){//ye
        var stringwORh;
        if (iSelected) {} else {iSelected = zmEditor.component.nowEdit();}//初始化iSelecte的宽高颜色。}
        stringwORh = /cross/.test(iSelected[0].classList[4]) ? "满屏宽度" : "满屏长度";
        if(className.stringwORh){stringwORh=className.stringwORh} // 兼容自定义输入满屏组件名
        var e = $('<div class="zm-edit-text-bannerController">' +
            '<div class="zm-edit-text-bannerController-Onediv"">' +
            '<span class="zm-edit-text-bannerController-all">' + stringwORh + '</span> ' +
            '<label class="zm-switch-box"><span class="zm-switch" style="border-color: #ccc"><span class="fa fa-minus"></span></span></label>' +  //fa-minus  fa-window-minimize
            '</div>' +
            '</div>'), l, k, c = true, a, b, d, f, g, y, p, m,r, iSel_ul_li_w,iSelectedOrChildrenOrFind=iSelected,positionXandY;
        if(typeof className=="object"){ //只支持一类元素或者一个选择器元素
            if(className.ChildrenName){
                for(var ChildrenNameA=0;a<className.ChildrenName.length;ChildrenNameA++){
                    iSelectedOrChildrenOrFind=iSelectedChildrenOrFind.children(className.ChildrenName[ChildrenNameA])
                }
            }
            if(className.goal){
                iSelectedOrChildrenOrFind=iSelectedChildrenOrFind.find(className.goal)
            }
        }
        if(iSelected.closest(".zm-component-box1").attr("data-zm-component-type")=="img"){  //兼容图片组件代码
            l = iSelected.children(".mCS_img_loaded").css("width");
            k = iSelected.children(".mCS_img_loaded").css("height");
            iSelected.children(".mCS_img_loaded").remove();
            iSelected.css({"width": l + "", "height": k + ""});
        }
        if(iSelected.closest(".zm-component-nowEdit").attr("data-fullscreen")=="true"||iSelected.closest(".zm-component-nowEdit").attr("data-vertical-fullscreen")=="true"){
             e.find(".zm-switch-box").addClass("zm-switch-box-on");
             e.find(".zm-switch-box").find(".fa").removeClass("fa-minus").addClass("fa-check");
        }else{
            e.find(".zm-switch-box").removeClass("zm-switch-box-on");
            e.find(".zm-switch-box").find(".fa").removeClass("fa-check").addClass("fa-minus");
            if(iSelected.closest(".zm-component-box1").attr("data-zm-component-type")=="nav"){ // nav专有代码
                /cross/.test(iSelected[0].classList[4])?iSelected.closest(".zm-component-nowEdit").attr("data-fullscreen","false"): iSelected.closest(".zm-component-nowEdit").attr("data-vertical-fullscreen","false");
            }else{  //兼容nav以外代码需要给className传入一个为crossORvertical 属性值的字符串表示纵向全屏还是横向全屏。 className.crossORvertical=="cross",表示纵向，className.crossORvertical=="vertical",表示横向。
                className.crossORvertical=="cross"?iSelected.closest(".zm-component-nowEdit").attr("data-fullscreen","false"):iSelected.closest(".zm-component-nowEdit").attr("data-vertical-fullscreen","false");
            }
        }
        if (/cross/.test(iSelected[0].classList[4]) || (className.crossORvertical=="cross"&&(iSelected.closest(".zm-component-box1").attr("data-zm-component-type") == ("banner" || "btn" || "text" || "tab" || "carousel" || "news" || "shape" || "product" || "img" || "map" || "container" || "forum" || "page" || "function" || "blog" || "audio" || "video")))) {
            e.children(".zm-edit-text-bannerController-Onediv:eq(0)").children("label").on("click", function (event) {
                console.log(typeof (iSelected.closest(".zm-component-nowEdit").attr("data-fullscreen")));
                console.log((iSelected.closest(".zm-component-nowEdit").attr("data-fullscreen"))=="false");
                // event.stopPropagation();
                if(iSelected.closest(".zm-component-nowEdit").attr("data-fullscreen")=="false"){
                    $(this).find(".zm-switch").css("border-color", "#4ab1a7");
                    // $(this).find(".fa").removeClass("fa-minus").addClass("fa-check")  //切换圆圈样式  由zmglobal.js doucment 绑定触发事件类名替换。
                    a = iSelected.css("width");//记录
                    // g = iSelected.closest(".zm-row-full");
                    g = iSelected.closest(".zm-all");
                    // b = iSelected.closest(".zm-row-full").css("width");
                    b = iSelected.closest(".zm-all").css("width");
                    f = iSelected.closest(".zm-row").offset().left;
                    // m_r = iSelected.children("ul").children("li").css("marginRight");
                    // iSel_ul_li_w = iSelected.children("ul").children("li").css("width");
                    iSel_ul_li_w = iSelectedOrChildrenOrFind.css("width");
                    // iSel_ul_li_mr = iSelected.children("ul").children("li").css("marginRight");
                    iSelected.attr("data-type-NoFullMian",a+"");
                    iSelected.attr("data-type-FullMian",b+"");
                    d = iSelected.closest(".zm-component-nowEdit").css("left");//获取当前正在编辑元素的顶级编辑元素位置；
                    y = iSelected.closest(".zm-component-nowEdit").css("top");//获取当前正在编辑元素的顶级编辑元素位置；
                    iSelected.attr("data-type-Position",d+"-"+y); //记录位置
                    iSelected.closest(".zm-component-nowEdit").css("width", b + ""); //设置级编辑元素宽度

                    iSelectedOrChildrenOrFind.css({"width": b +""});
                    iSelected.closest(".zm-component-nowEdit").attr({"data-fullScreen": "true"});
                    e.children(".zm-edit-text-bannerController-Onediv:eq(2)").children("input").attr("disabled", "disabled");
                    iSelected.closest(".zm-row").find(".zm-component-resize").find("span:eq(0),span:eq(2),span:eq(3),span:eq(4),span:eq(6),span:eq(7),span:eq(8)").hide();
                    iSelected.closest(".zm-component-nowEdit").css({"left": -f - 3.5 + "px"});//, "top": "0px"

                    if(className.fullscreenTure){className.fullscreenTure()}
                } else {
                    $(this).find(".zm-switch").css("border-color", "#ccc");
                    // $(this).find(".fa").removeClass("fa-check").addClass("fa-minus")  //切换圆圈样式
                    iSelected.closest(".zm-component-nowEdit").css("width", "");
                    iSelectedOrChildrenOrFind.css("width", iSelected.attr("data-type-NoFullMian"));
                    r = iSelected.closest(".zm-component-nowEdit").css("top");
                    positionXandY=iSelected.attr("data-type-Position");
                    p=positionXandY.indexOf("-");
                    iSelected.attr("data-type-Position",positionXandY.substring(0,p)+"-"+r);
                    iSelected.closest(".zm-component-nowEdit").attr({"data-fullScreen": "false"});
                    iSelected.closest(".zm-component-nowEdit").css({"left":  positionXandY.substring(0,p), "top":  r});
                    e.children(".zm-edit-text-bannerController-Onediv:eq(2)").children("input").removeAttr("disabled");
                    iSelected.closest(".zm-row").find(".zm-component-resize").find("span:eq(0),span:eq(2),span:eq(3),span:eq(4),span:eq(6),span:eq(7),span:eq(8)").show();
                    if(className.fullscreenFlase){className.fullscreenFlase()}
                }
                // c = !c;
            });
            function wresize(w,wresizeCallback) {
                $(window).on("resize" + className.className + "", function (w, f) {
                    var m;
                    if (iSelected.closest(".zm-component-nowEdit").attr("data-fullScreen") == "true") {
                        f = iSelected.closest(".zm-row").offset().left;
                        m = iSelected.attr("data-type-Position").replace(/\w+-$/,"");
                        iSelected.closest(".zm-component-nowEdit").css({"left": -f - 3.5 + "px", "top": m});
                        // w = iSelected.closest(".zm-row-full").css("width");
                        w = iSelected.closest(".zm-all").css("width");
                    } else {
                        // w = iSelected.closest(".zm-row-full").find(".zm-component-main").css("width");
                        w = iSelected.closest(".zm-all").find(".zm-component-main").css("width");
                    }
                    iSelected.attr("data-type-FullMian",w+"");
                    iSelected.css("width", w + "");
                    iSelected.closest(".zm-component-nowEdit").css("width", w + "");
                    if (iSelected.closest(".zm-component-nowEdit").attr("data-zm-component-type") == "nav") {
                        var a = iSelected.children("ul").children("li"), c = iSelected.children("ul").children("span"), m = c.css("width");
                        b = (parseInt(w) - c.length * parseInt(m)) / a.length;
                        a.each(function (index, element) {
                            $(this).css("width", b - 1 + "px");
                            $(this).css("box-sizing", "border-box");
                        });
                    } else {
                        iSelected.css("width", w + "");
                    }
                    if(wresizeCallback){wresizeCallback()};
                });
            }
            wresize(null,className.wresizeCallback);
        }
        if (/vertical/.test(iSelected[0].classList[4])|| (className.crossORvertical=="vertical"&&(iSelected.closest(".zm-component-box1").attr("data-zm-component-type") == ("banner" || "btn" || "text" || "tab" || "carousel" || "news" || "shape" || "product" || "img" || "map" || "container" || "forum" || "page" || "function" || "blog" || "audio" || "video")))) {
            e.children(".zm-edit-text-bannerController-Onediv:eq(0)").children("label").on("click", function () {
                    if(iSelected.closest(".zm-component-nowEdit").attr("data-vertical-fullscreen")=="false"){
                        var h,iSel_ul_li_br,hNo;
                    iSelected.closest(".zm-component-nowEdit").attr({"data-vertical-fullScreen": "true"});
                        h = $("html").height();
                        hNo=iSelected.css("height");
                        iSel_ul_li_br = iSelected.closest(".zm-component-box1").position().top+"px";
                        iSelected.attr("data-type-NoFullMian",hNo);
                        iSelected.attr("data-type-FullMian",h);
                        iSelected.attr("data-type-Position","null-"+iSel_ul_li_br); //记录位置
                        iSelected.closest(".zm-component-box1").css("top", "0px");
                        iSelected.css("height", h);
                        if(className.verticalfullscreenTrue){className.verticalfullscreenTrue()}
                } else {
                        iSelected.closest(".zm-component-nowEdit").attr({"data-vertical-fullScreen": "false"});
                        iSelected.css("height",iSelected.attr("data-type-NoFullMian"));
                        iSelected.closest(".zm-component-box1").css("top",iSelected.attr("data-type-Position").replace(/null-/,""));
                        if(className.verticalfullscreenFlase){className.verticalfullscreenFlase()}
                }
            });
        }
        return e;
    },
    //全屏展示组件
    nav_hover_or_click: function (obj, str) {//ye添加
           $('<div class="zm-edit-text-nav_hover_or_click-Onediv" style="position: relative;height: 70px;padding-top: 20px;">' +
            '<span class="zm-edit-text-nav_hover_or_click-all">悬停弹出设置</span> ' +
            '<label class="zm-switch-box" style="float: right;margin-right: 60px"><span class="zm-switch"><span class="fa fa-check "></span></span></label>' +
            '<label class="zm-edit-text-nav_hover_or_click_zhengai"></label>' +
            '</div>' +
            '<div class="zm-edit-text-nav_hover_or_click-Onediv" style="position: relative;height: 70px;padding-top: 20px;">' +
            '<span class="zm-edit-text-nav_hover_or_click-all">点击弹出设置</span> ' +
            '<label class="zm-switch-box" style="float: right;margin-right: 60px"><span class="zm-switch"><span class="fa fa-check "></span></span></label>' +
            '<label class="zm-edit-text-nav_hover_or_click_zhengai"></label>' +
            '</div>');
        var e=$('<div style="position: relative">' +
            '<span style="position: absolute; top: 10px; left: 10px;"> 菜单弹出 <br> 方式:</span>'
            +'<div style=" position: absolute; top: 20px;left: 90px;">'
            +'<b style="width: 18px;height: 18px; border-radius: 50%;border: 2px solid #7a7a7a;display: inline-block;position: relative;top: 3px;"><i style="width: 8px;height: 8px; border-radius: 50%;border: 1px solid #7a7a7a;position: absolute;top: 3px;left: 3px;"></i></b> ' +
            '<span>点击弹出</span>'
            + '</div>'
            + '<div style=" position: absolute; top: 20px;left: 190px;">'
            + '<b style="width: 18px;height: 18px; border-radius: 50%;border: 2px solid #7a7a7a;display: inline-block;position: relative;top: 3px;"><i style="width: 8px;height: 8px; border-radius: 50%;border: 1px solid #7a7a7a;position: absolute;top: 3px;left: 3px;"></i></b>' +  //background-color: #1ab5b3
            ' <span>悬停弹出</span>'
            + '</div>'
            + '</div>'
            ), a = false, b = false, iSelected,c,d;
        if (obj) {iSelected = $(obj);} else {iSelected = $(zmEditor.component.nowEdit());}
        var is_y = iSelected.closest(".zm-component-main"), is_a = is_y[0].classList[4], f = "data-" + is_y.attr("data-" + is_a);
        d=e.children("div>div:eq(0)").children("b");c=e.children("div>div:eq(1)").children("b");
        /hover_or_click_show_string_hover/.test(zmEditor.globalMethod.nav.data.arrLike[f]["hover_or_click_show_string"])?(d.children("i").css("background-color","#fff"),c.children("i").css("background-color","#1ab5b3")):(d.children("i").css("background-color","#1ab5b3"),c.children("i").css("background-color","#fff"));// 根据hover_or_click_show_string_hover参数状态显示悬停还是点击
        c.on("click",function () {
            console.log(111);
            a = !a;
            if(a){
                li_hover(iSelected);
                $(this).children("i").css("background-color","#1ab5b3");
                d.children("i").css("background-color","#fff");
                b = false;
            }else{
                li_click(iSelected);
                $(this).children("i").css("background-color","#fff");
                d.children("i").css("background-color","#1ab5b3");
                b = true;
            }
        })
        d.on("click",function () {
            b = !b;
            if(b){
                li_click(iSelected);
                a = false;
                $(this).children("i").css("background-color","#1ab5b3");
                c.children("i").css("background-color","#fff");
            }else{
                li_hover(iSelected);
                a = true;
                $(this).children("i").css("background-color","#fff");
                c.children("i").css("background-color","#1ab5b3");
            }


        })
        function li_hover(iSelected) {
            zmEditor.globalMethod.nav.data.arrLike[f]["hover_or_click_show_string"] = ".hover_or_click_show_string_hover";
            // zmEditor.globalMethod.nav.global_Threehover_or_click(iSelected, zmEditor.globalMethod.nav.hover_or_click_show(".hover_or_click_show_string_hover"));
            zmEditor.globalMethod.nav.initialize_html_callback($(zmEditor.globalMethod.nav.data.pageSet.html),iSelected,zmEditor.globalMethod.nav.hover_or_click_show(zmEditor.globalMethod.nav.data.arrLike[f].hover_or_click_show_string));//从新渲染nav
        }

        function li_click(iSelected) {
            zmEditor.globalMethod.nav.data.arrLike[f]["hover_or_click_show_string"] = ".hover_or_click_show_string_cilck";
            // zmEditor.globalMethod.nav.global_Threehover_or_click(iSelected, zmEditor.globalMethod.nav.hover_or_click_show(".hover_or_click_show_string_cilck"));
            zmEditor.globalMethod.nav.initialize_html_callback($(zmEditor.globalMethod.nav.data.pageSet.html),iSelected,zmEditor.globalMethod.nav.hover_or_click_show(zmEditor.globalMethod.nav.data.arrLike[f].hover_or_click_show_string));//从新渲染nav
        }

        // $(e[0]).children("label").on("click", function () {
        //     a = !a;
        //     if (a) {
        //         li_hover(iSelected);
        //         $(e[1]).children("label").removeClass("zm-switch-box-on");
        //         b = false;
        //     } else {
        //         li_click(iSelected);
        //         $(e[1]).children("label").addClass("zm-switch-box-on");
        //         b = true;
        //     }
        // });
        //
        // $(e[1]).children("label").on("click", function () {
        //     b = !b;
        //     if (b) {
        //         li_click(iSelected);
        //         $(e[0]).children("label").removeClass("zm-switch-box-on");
        //         a = false;
        //     } else {
        //         li_hover(iSelected);
        //         $(e[0]).children("label").addClass("zm-switch-box-on");
        //         a = true;
        //     }
        // });   zmEditor.globalMethod.nav.hover_or_click_show(zmEditor.globalMethod.nav.hover_or_click_show_string)

        return e;
    },
    borderWidth: function (obj, str) {
        if (obj) {
        } else {
            obj = zmEditor.component.nowEdit();
        }
        if(str.goal){
            obj=iSelected.find(str.goal);
        }
        var e = zmEditor.globalMethod.initialize_slider_html_callback("边框宽度");   //initialize_slider_html_callback

        var e = zmEditor.component.setItems.slider(obj,str);

        // e.zmSlider({type: "borderWidth", minSize: 0, maxSize: 100, goal: obj});
        e.zmSlider({goal: obj, type: "borderWidth",  style:"noTab_noColor", minSize: 0, maxSize: 100});
        return e;
    },
    //文字效果
    fontEffect: function () {
        var e = $('<div class="zm-edit-text-effectBox">'
            + '<span class="zm-edit-text-title">文字效果</span><br>'
            + '<div class="zm-edit-text-effect">'
            + '<span style="text-shadow:none" class="clickBackgroundColor">A</span>'
            + '<span style="text-shadow: 0 0 0.5em #000">A</span>'
            + '<span style="text-shadow:-0.15em -0.15em 0.1em #b8b8b8">B</span>'
            + '<span style="text-shadow:-0.15em 0.15em 0.1em #b8b8b8">C</span>'
            + '<span style="text-shadow: 0.15em -0.15em 0.1em #b8b8b8">D</span>'
            + '<span style="text-shadow: 0.15em 0.15em 0.1em #b8b8b8">E</span>'
            + '<span style="text-shadow:-0.15em -0.15em #bbb">F</span>'
            + '<span style="text-shadow:-0.15em 0.15em #bbb">G</span>'
            + '<span style="text-shadow:0.15em -0.15em #bbb">H</span>'
            + '<span style="text-shadow:0.15em 0.15em #bbb">I</span>'
            + '</div>'
            + '</div>');
        e.find(".zm-edit-text-effect span").on("click", function () {
            var _this = $(this);
            _this.addClass("clickBackgroundColor").siblings().removeClass("clickBackgroundColor");
            var effect = $(this).css("textShadow");
            var text = zmEditor.component.nowEdit();
            text.css("textShadow", effect);
        })
        return e;
    },
    background_opacity: function (iSelected, str) { //ye
        var e = $('<div class="zm-edit-slider" id="zm-edit-text-opacity">'
            + '<span class="zm-edit-text-title">透明度</span><br>'
            + '<span class="zm-edit-slider-parent" style="width:165px;" ><span class="zm-edit-slider-child"  ></span></span>'
            + '<input type="text" class="zm-edit-slider-val" maxlength="2">'
            + '</div>');

        if (iSelected) {
        } else {
            iSelected = zmEditor.component.nowEdit();
        }
        if(str.goal){
            iSelected=iSelected.find(str.goal);
        }
        e.zmSlider({type: "background_opacity", minSize: 0, maxSize: 100});
        return e;
    },
    borderWidth_nav: function (obj) {
        var strings="边框宽度",e = zmEditor.globalMethod.initialize_slider_html_callback(strings);
        if (obj) {
        } else {
            obj = zmEditor.component.nowEdit();
        }
        e.zmSlider({goal: obj, type: "borderWidth_nav", title: strings, style:"noTab_noColor", minSize: 0, maxSize: 5});
        return e;
    },
    borderSetting: function (obj, str) {
        var e = $('<div class="zm-edit-slider borderSettingSlider" style="margin-right: 5px;">'
            + '<span class="zm-edit-text-title" style="width:60px;vertical-align: middle;">'
            + '<i style="display:inline-block;font-size: 12px;width: 60px;text-align: center;">(像素)</i>'
            + '<br><i style="text-align: left">边框宽度</i></span>'
            + '<span class="zm-edit-slider-parent" style="width:130px;margin-left: 15px;" >'
            + '<span class="zm-edit-slider-child" style="width:14px;"></span></span>'
            + '<input type="text" class="zm-edit-slider-val" maxlength="2">px'
            + '</div>');
        var iSelected = obj, maxNum = 10;
        switch (str) {
            case 'img':
                maxNum = 15;
                e.find('.zm-edit-slider-parent').css('width', '140px');
                break;
            default:
                break;
        }
        e.zmSlider({type: "borderSetting", minSize: 0, maxSize: maxNum, goal: iSelected});
        return e;
    },
    //边框样式组件 可公用
    borderStyle: function (obj, str) { // ye
        if (obj) {
        } else {
            obj = zmEditor.component.nowEdit();
        }
        if(str.goal){
            obj=obj.find(str.goal);
        }
        var ele = zmEditor.globalMethod.main_child_childall_border_style_callback(),eleChildren=ele.children(".zm-edit-border-style");
        borderView(obj.css("border-style"));

        ele.find(".zm-edit-border-style").zmActionOn("click", function () {
            ele.find(".zm-edit-border-styleclone").show();
        });
        ele.find("i").zmActionOn("mouseenter", function () {
            ele.find(".zm-edit-border-style").css({"box-shadow": "1px 1px 3px #00c3b0, -1px -1px 3px #00c3b0"});
        });

        ele.find(".zm-edit-border-style").zmActionOn("mouseenter", function () {
            ele.find(".zm-edit-border-style").css({"box-shadow": "1px 1px 3px #00c3b0, -1px -1px 3px #00c3b0"});
        });

        ele.find(".zm-edit-border-style").zmActionOn("mouseleave", function () {
            ele.find(".zm-edit-border-style").css({"box-shadow": "none"});
        });

        ele.find(".zm-edit-border-styleclone").zmActionOn("mouseleave", function () {
            ele.find(".zm-edit-border-styleclone").hide();
            ele.find(".zm-edit-border-style").css({"min-height": "30px", "box-shadow": "none"});
            ele.find(".zm-edit-border-style span").hide();
            borderView(obj.css("border-style"));
        });

        ele.find(".zm-edit-border-styleclone span").zmActionOn("mouseenter",function () {
            $(this).css("background-color", "#eee");
        });
        ele.find(".zm-edit-border-styleclone span").zmActionOn("mouseleave",function () {
            $(this).css("background-color", "#fff");
        });
        ele.find(".zm-edit-border-styleclone span").zmActionOn("click", function (e) {
            e.stopPropagation();
            ele.find(".zm-edit-border-styleclone").hide();
            ele.find(".zm-edit-border-style .zm-edit-border-style span").hide();
            a = $(this).index() - 1;
            var borderStyle = $(this).children("i").css("borderStyle");
            if(str.goal){
                obj=obj.find(str.goal);
            }
            obj.css("borderStyle", borderStyle);
        });
        function borderView(objcss){
            switch(objcss){
                case "solid":
                    eleChildren.children("span:eq(0)").css("display","block");
                    break;
                case "double":
                    eleChildren.children("span:eq(1)").css("display","block");
                    break;
                case "dotted":
                    eleChildren.children("span:eq(2)").css("display","block");
                    break;
                case "dashed":
                    eleChildren.children("span:eq(3)").css("display","block");
                    break;
                default:
                    eleChildren.children("span").each(function(){$(this).css("display","none")});
                    break;
            }}
        return ele;
    },
    //边框样式组件
    //导航多层级组件
    mian_children_childrenLi_bw: function (obj) {//设置所有一级mian盒子下的子元素的子元素的边框宽度
        var strings="边框宽度",e = zmEditor.globalMethod.initialize_slider_html_callback("边框宽度");
        var iSelected;
        if (obj) {
        } else {
            obj = zmEditor.component.nowEdit();
        }
        e.zmSlider({goal: obj, type: "mian_children_childrenLi_bw", title: strings, style:"noTab_noColor", minSize: 0, maxSize: 5});
        return e;
    },
    mian_children_childrenLi_hover_bw: function (obj, str) {//设置所有一级mian盒子下的子元素的子元素的边框宽度
        var strings="光标停留边框宽度",e = zmEditor.globalMethod.initialize_slider_html_callback("光标停留边框宽度");
        var iSelected;
        if (obj) {
        } else {
            obj = zmEditor.component.nowEdit();
        }
        e.zmSlider({goal: obj, type: "mian_children_childrenLi_hover_bw", title: strings, style:"noTab_noColor", minSize: 0, maxSize: 5});
        return e;
    },
    main_children_childrenLi_border_style: function (obj, str) { //ye 设置main_child_childall_border_style下每个元素的边框线点样式.  main_children_childrenLi_border_style
        var ele = zmEditor.globalMethod.main_child_childall_border_style_callback();
        if (obj) {
            iSelected = obj;
        } else {
            iSelected = zmEditor.component.nowEdit();
        }
        var ele = zmEditor.globalMethod.main_child_childall_border_style_callback(), a = 3;
        ele.find(".zm-edit-border-style").on("click", function (e) {
            console.log(e.target);
            ele.find(".zm-edit-border-styleclone").show();
        });
        ele.find("i").on("mouseenter", function () {
            ele.find(".zm-edit-border-style").css({"box-shadow": "1px 1px 3px #00c3b0, -1px -1px 3px #00c3b0"});
        });
        ele.find(".zm-edit-border-style").on("mouseenter", function () {
            ele.find(".zm-edit-border-style").css({"box-shadow": "1px 1px 3px #00c3b0, -1px -1px 3px #00c3b0"});
        });
        ele.find(".zm-edit-border-style").on("mouseleave", function () {
            ele.find(".zm-edit-border-style").css({"box-shadow": "none"});
        });
        ele.find(".zm-edit-border-styleclone").on("mouseleave", function () {

            ele.find(".zm-edit-border-styleclone").hide();
            ele.find(".zm-edit-border-style").css({"min-height": "30px", "box-shadow": "none"});
            ele.find(".zm-edit-border-style span").hide();
            $(ele.find(".zm-edit-border-style span")[a]).show();
        });
        ele.find(".zm-edit-border-styleclone span").hover(function () {
            $(this).css("background-color", "#eee");
        }, function () {
            $(this).css("background-color", "#fff");
        })
        ele.find(".zm-edit-border-styleclone span").on("click", function (e) {
            e.stopPropagation();
            ele.find(".zm-edit-border-styleclone").hide();
            ele.find(".zm-edit-border-style .zm-edit-border-style span").hide();
            a = $(this).index() - 1;
            var borderStyle = $(this).children("i").css("borderStyle");

            iSelected.children().children("li").css("borderStyle", borderStyle);
            //数据
            var data_a = "data-" + iSelected.attr("data-" + iSelected[0].classList[4]);
            iSelected.children().children("li").css("borderStyle", borderStyle);
            zmEditor.globalMethod.nav.data.arrLike[data_a].li.sStyle["borderStyle"] = borderStyle;
            console.log(zmEditor.globalMethod.nav.data.arrLike[data_a].li.sStyle["borderStyle"]);
        });
        return ele;
    },
    mian_children_childrenSpan_height: function (obj, str) {//ye添加针对一级列表之间的上间距通过span_height对应横线间隔粗细.
        var e = zmEditor.globalMethod.initialize_slider_html_callback("行间距");//对应纵向间隔
        if (obj) {
        } else {
            obj = zmEditor.component.nowEdit();
        }
        e.zmSlider({ goal: obj,type: "mian_children_childrenSpan_height",style:"noTab_noColor", minSize: 0, maxSize: 5});
        return e;
    },
    mian_Children_ChildrenSpan_width: function (obj, str) {//ye添加针对一级列表之间的上间距通过span_width对应横线间隔粗细.
        var strings="间隔线宽度",e = zmEditor.globalMethod.initialize_slider_html_callback(strings);//对应横向间隔
        if (obj) {
        } else {
            obj = zmEditor.component.nowEdit();
        }

        e.zmSlider({goal: obj, type: "mian_Children_ChildrenSpan_width", title: strings, style:"noTab_noColor", minSize: 0, maxSize: 80});
        return e;
    },
    mian_children_childrenLi_btw: function (obj, str) {//ye添加
        var strings="上边框宽度",e = zmEditor.globalMethod.initialize_slider_html_callback("上边框宽度");
        if (obj) {
        } else {
            obj = zmEditor.component.nowEdit();
        }
        // e.zmSlider({type: "mian_children_childrenLi_btw", minSize: 0, maxSize: 5, goal: obj});
        e.zmSlider({goal: obj, type: "mian_children_childrenLi_btw", title: strings, style:"noTab_noColor", minSize: 0, maxSize: 5});
        return e;
    },
    mian_children_childrenLi_hover_btw: function (obj, str) {//ye添加
        var strings="光标停留上边框宽度",e = zmEditor.globalMethod.initialize_slider_html_callback("光标停留上边框宽度");
        if (obj) {
        } else {
            obj = zmEditor.component.nowEdit();
        }
        // e.zmSlider({type: "mian_children_childrenLi_hover_btw", minSize: 0, maxSize: 5, goal: obj});
        e.zmSlider({goal: obj, type: "mian_children_childrenLi_hover_btw", title: strings, style:"noTab_noColor", minSize: 0, maxSize: 5});
        return e;
    },
    mian_children_childrenLi_bbw: function (obj, str) {//ye添加
        var strings="下边框宽度",e = zmEditor.globalMethod.initialize_slider_html_callback("下边框宽度");
        if (obj) {
        } else {
            obj = zmEditor.component.nowEdit();
        }
        // e.zmSlider({type: "mian_children_childrenLi_bbw", minSize: 0, maxSize: 5, goal: obj});
        e.zmSlider({goal: obj, type: "mian_children_childrenLi_bbw", title: strings, style:"noTab_noColor", minSize: 0, maxSize: 5});

        return e;
    },
    mian_children_childrenLi_hover_bbw: function (obj, str) {
        var strings="光标停留下边框宽度",e = zmEditor.globalMethod.initialize_slider_html_callback("光标停留下边框宽度");
        if (obj) {
        } else {
            obj = zmEditor.component.nowEdit();
        }
        // e.zmSlider({type: "mian_children_childrenLi_hover_bbw", minSize: 0, maxSize: 5, goal: obj});
        e.zmSlider({goal: obj, type: "mian_children_childrenLi_hover_bbw", title: strings, style:"noTab_noColor", minSize: 0, maxSize: 5});
        return e;
    },
    navNode1Style: function () {
        var e = $('<div class="zm-edit-slider" id="zm-edit-text-fontSize">'
            + '<span class="zm-edit-text-title">宽度</span><br>'
            + '<span class="zm-edit-slider-parent" style="width:165px;" ><span class="zm-edit-slider-child"  ></span></span>'
            + '<input type="text" class="zm-edit-slider-val" maxlength="2">'
            + '</div>');
        var obj = zmEditor.component.nowEdit();
        e.zmSlider({type: "navNode1Style", minSize: 80, maxSize: 500, goal: obj});
        return e;
    },
    //导航多层级组件
    /* 选项卡方法 */
    channelTab:function (ele,obj) {
        return zmEditor.component.tab.method.channelTab(ele,obj);
    }, //频道开关 ok
    channelLink: function (ele) {
        return zmEditor.component.tab.method.channelLink(ele);
    }, //频道链接 ok 和弹窗联动模块未完
    tabTopBdCol: function (ele) {
        return zmEditor.component.tab.method.tabTopBdCol(ele);
    },//上门楣 ok
    tabBotBdCol: function (ele) {
        return zmEditor.component.tab.method.tabBotBdCol(ele);
    },//下门楣 ok 开关
    tabTitLink: function (ele) {
        return zmEditor.component.tab.method.tabTitLink(ele);
    },//网址选择 ok 开关
    tabTitAlign:function (ele) {
        return zmEditor.component.tab.method.tabTitAlign(ele);
    },//对齐方式 ok
    tabLabTopBdCol: function (ele) {
        return zmEditor.component.tab.method.tabLabTopBdCol(ele);
    },//上边线 ok 待改正
    tabLabBotBdCol: function (ele) {
        return zmEditor.component.tab.method.tabLabBotBdCol(ele);
    },//下边线 ok 待改正
    /* 结束 */

    /* 产品方法 */
    //单一
    productLayout:function (ele) {
        return zmEditor.component.product.method.productLayout(ele);
    },
    productLayoutCC:function(ele){
	    return zmEditor.component.product.method.productLayoutCC(ele);
    },
    productRatio:function(ele){
        return zmEditor.component.product.method.productRatio(ele);
    },
    productCartoon: function (ele) {
        return zmEditor.component.product.method.productCartoon(ele);
    },//光标悬浮图像效果 ok
    productChoose: function (ele) {
        return zmEditor.component.product.method.productChoose(ele);
    },//商品选择
    productName: function (ele, obj) {
        return zmEditor.component.product.method.productName(ele,obj);
    },//商品名称
    productRetail: function (ele, obj) {
        return zmEditor.component.product.method.productRetail(ele,obj);
    },//零售价
    productGuide: function (ele, obj) {
        return zmEditor.component.product.method.productGuide(ele,obj)
    },//市场指导价
    productButton: function (ele, obj) {
        return zmEditor.component.product.method.productButton(ele,obj);
    },//按钮
    productText: function (ele) {
        return zmEditor.component.product.method.productText(ele);
    },//文字方向

    /******************** 列表共用方法 ***********************/
    //全屏
    fullScreen: function (ele) {
        var e = $('<div class="zm-components-list-fullScreen">'
            +'<span class="zm-edit-text-title">全屏显示</span>'
            +'<label class="zm-switch-box"><span class="zm-switch"><span class="fa fa-minus"></span></span></label>'
            +'</div>'
        );
        var box = ele.closest(".zm-component-nowEdit");
        var type = box.attr("data-fullScreen");
        var btn = e.find(".zm-switch-box");
        if(type == "true"){
            btn.addClass("zm-switch-box-on");
            btn.children().children().removeClass("fa-minus").addClass("fa-check");
        }
        btn.zmActionOn("click",function(){
            var _type = box.attr("data-fullScreen");
            var _width = parseInt($(window).width());
            var w,l;
            if(_type == "true"){
                w = parseInt(box.attr("data-old-width"));
                l = parseInt(box.attr("data-old-left"));
                ele.css("width",w+"px");
                box.attr("data-fullScreen",false).offset({"left": l});
            }else{
                w = ele.width();
                l = box.offset().left;
                ele.css("width",_width+"px");
                box.attr({"data-fullScreen": true,"data-old-width": w,"data-old-left": l}).offset({"left": 0});
            }
        });
        return e
    },
    //布局样式
    layout: function (ele) {
        var e = $('<div class="zm-components-list-layout">'
            +'<span class="zm-edit-text-title">布局样式</span><br>'
            +'<div class="zm-components-list-wrap">'
            +'<div><span><div class="fa fa-align-left" style="text-align: left"></div></span><label></label></div>'
            +'<div><span><div class="fa fa-align-center" style="text-align: center"></div></span><label></label></div>'
            +'<div><span><div class="fa fa-align-right" style="text-align: right"></div></span><label></label></div>'
            +'<div><span></span><label></label></div>'
            +'</div></div>'
        );
        var label = e.find("label");
        var list = e.find(".zm-components-list-wrap").children();
        var shadow = list.find("span");
        var message = ele.find(".unit-message");
        var wrap = message.children("div");
        if(message.css("display") == "none"){
            label.eq(3).addClass("choice");
            shadow.eq(3).addClass("shadow");
        }else{
            switch(wrap.css("text-align")){
                case "left":
                    label.eq(0).addClass("choice");
                    shadow.eq(0).addClass("shadow");
                    break;
                case "center":
                    label.eq(1).addClass("choice");
                    shadow.eq(1).addClass("shadow");
                    break;
                case "right":
                    label.eq(2).addClass("choice");
                    shadow.eq(2).addClass("shadow");
                    break;
            }
        }

        list.zmActionOn("click",function(){
            var _index = list.index(this);
            var message = ele.find(".unit-message");
            var wrap = message.children("div");
            label.removeClass("choice");
            shadow.removeClass("shadow");
            message.css("display","block");
            label.eq(_index).addClass("choice");
            shadow.eq(_index).addClass("shadow");
            switch(_index){
                case 0:
                    wrap.css({"justify-content":"flex-start","text-align":"left"});
                    break;
                case 1:
                    wrap.css({"justify-content":"center","text-align":"center"});
                    break;
                case 2:
                    wrap.css({"justify-content":"flex-end","text-align":"right"});
                    break;
                case 3:
                    message.css("display","none");
                    break;
            }
        });
        return e;
    },
    //边框样式
    sideLine: function (ele) {
        var e = $('<div class="zm-components-list-sideLine">'
            +'<span class="zm-edit-text-title">边框样式</span>'
            +'<div class="zm-components-list-wrap">'
            +'<div><span><div></div></span><label></label></div>'
            +'<div><span><a style="display: inline-block;width: 65px;height: 50px;border: 1px solid #000"></a><div></div></span><label style="margin-top: 9px"></label></div>'
            +'<div><span style="border: 1px solid #000"><div></div></span><label></label></div>'
            +'<div><span style="border: 1px solid #000"><div style="border-top: 1px solid #000"></div></span><label></label></div>'
            +'</div></div>'
        );
        var label = e.find("label");
        var list = e.find(".zm-components-list-wrap").children();
        var shadow = list.find("span");
        var b_01 = ele.find(".zm-edit-components-list-unit");
        var b_02 = ele.find(".zm-edit-components-list-unit-image-wrap");
        var x = b_01.hasClass("set_border") ? 1 : 2;
        var y = b_02.hasClass("set_border") ? 1 : 2;
        if(x == 2 && y == 2){
            label.eq(0).addClass("choice");
            shadow.eq(0).addClass("shadow");
        }
        if(x == 2 && y == 1){
            label.eq(1).addClass("choice");
            shadow.eq(1).addClass("shadow");
        }
        if(x == 1 && y == 2){
            label.eq(2).addClass("choice");
            shadow.eq(2).addClass("shadow");
        }
        if(x == 1 && y == 1){
            label.eq(3).addClass("choice");
            shadow.eq(3).addClass("shadow");
        }
        list.zmActionOn("click",function(){
            var _index = list.index(this);
            var border01 = ele.find(".zm-edit-components-list-unit");
            var border02 = ele.find(".zm-edit-components-list-unit-image-wrap");
            border01.removeClass("set_border");
            border02.removeClass("set_border");
            switch (_index){
                case 0:
                    break;
                case 1:
                    border02.addClass("set_border");
                    break;
                case 2:
                    border01.addClass("set_border");
                    break;
                case 3:
                    border01.addClass("set_border");
                    border02.addClass("set_border");
                    break;
            }
            label.removeClass("choice");
            label.eq(_index).addClass("choice");
            shadow.removeClass("shadow");
            shadow.eq(_index).addClass("shadow");
        });
        return e;
    },
    //图像比例
    aspectRatio: function (ele,obj) {
        var e = $('<div class="zm-components-aspectRatio">'
            +'<span class="zm-edit-text-title">图片显示比例</span>'
            +'<span class="zm-components-aspectRatio-wrap">'
            +'<div><label></label><span>原始比例</span></div>'
            +'<div><label></label><span>自适应</span></div>'
            +'</span></div>'
        );
        var label = e.find("label");
        var el = ele.find("img").parent();
        if(el.attr("data-type-ratio") == "adaptive"){
            label.eq(1).addClass("choice");
        }else{
            label.eq(0).addClass("choice");
        }

        label.zmActionOn("click",function(){
            var _this = $(this);
            var _index = label.index(_this);
            var wrap = ele.find(obj.goal);
            var img = wrap.find("img");
            label.toggleClass("choice");
            switch(_index){
                case 0:
                    img.css("object-fit","contain");
                    img.parent().attr("data-type-ratio","original");
                    break;
                case 1:
                    img.css("object-fit","cover");
                    img.parent().attr("data-type-ratio","adaptive");
                    break;
            }
        })
        // label.zmActionOn("click",function(){
        //     var _this = $(this);
        //     var _index = label.index(this);
        //     var wrap = ele.find(obj.goal);
        //     var layer = wrap.children();
        //     label.removeClass("choice");
        //     _this.addClass("choice");
        //     switch(_index){
        //         case 0:
        //             var el = ele.find(".zm-edit-components-product-image");
        //             ImgScale(el);
        //             layer.attr("data-type-ratio","original");
        //             // $('<img>').attr("src",wrap.find("img").attr("src")).load(function(){
        //             //     var realWidth = this.width;
        //             //     var realHeight = this.height;
        //             //     var w = wrap.width();
        //             //     var h = wrap.height();
        //             //     var imgW,imgH;
        //             //     var realRatio = realWidth/realHeight;
        //             //     var actualRatio = w/h;
        //             //     var s,f;
        //             //     if(actualRatio > realRatio){
        //             //         imgH = "100%";
        //             //         f = h*realRatio;
        //             //         imgW = (f/w)*100+"%";
        //             //     }else{
        //             //         imgW = "100%";
        //             //         s = w/realRatio;
        //             //         imgH = (s/h)*100+"%";
        //             //     }
        //             //     layer.css({"width":imgW,"height":imgH});
        //             //     layer.attr("data-type-ratio","original");
        //             // });
        //             break;
        //         case 1:
        //             layer.css({"width":"100%","height":"100%"});
        //             layer.attr("data-type-ratio","adaptive");
        //             break;
        //     }
        // });
        return e;
    },
    //悬浮效果
    suspensionEffect: function (ele) {
        var e = $('<div class="zm-components-suspensionEffect">'
            +'<span class="zm-edit-text-title">光标悬浮图像效果</span>'
            +'<div class="zm-components-suspensionEffect-wrap">'
            +'<span><label></label><span>放大</span></span>'
            +'<span><label></label><span>左移</span></span>'
            +'<span><label></label><span>上移</span></span>'
            +'<span><label></label><span>虚化</span></span>'
            +'</div></div>'
        );
        var label = e.find("label");
        var el = ele.find("img");
        if(el.hasClass("suspension-magnify")){
            label.eq(0).addClass("choice");
        }
        if(el.hasClass("suspension-shiftLeft")){
            label.eq(1).addClass("choice");
        }
        if(el.hasClass("suspension-shiftTop")){
            label.eq(2).addClass("choice");
        }
        if(el.hasClass("suspension-emptiness")){
            label.eq(3).addClass("choice");
        }

        label.zmActionOn("click",function(){
            var _this = $(this);
            var _index = label.index(_this);
            var img = ele.find("img");
            img.removeClass();
            switch(_index){
                case 0 :
                    img.addClass("suspension-magnify");
                    break;
                case 1 :
                    img.addClass("suspension-shiftLeft");
                    break;
                case 2 :
                    img.addClass("suspension-shiftTop");
                    break;
                case 3 :
                    img.addClass("suspension-emptiness");
                    break;
                default:
                    console.log("这是个意外");
                    break;
            }
            label.removeClass("choice");
            _this.addClass("choice");
        });
        return e;
    },
    //加载更多按钮
    loadMore:function(ele){
        var e = $('<div class="zm-components-loadMore">'
            +'<div><label><i class="fa fa-check"></i></label><span>按钮</span><input type="text"/></div>'
            +'<div></div>'
            +'<div></div>'
            +'<div></div>'
            +'<div class="zm-components-loadMore-shadow"></div>'
            +'</div>'
        );
        var label = e.find("label");
        var icon = label.children("i");
        var input = e.find("input");
        var shadow = e.find(".zm-components-loadMore-shadow");
        var button = ele.children();
        var font = zmEditor.component.setItems.strings.fontStyle(button,{style: "mini",param: "color"});
        var bc = zmEditor.component.setItems.slider(button,{title: "背景颜色",style: "noTab_color",isColor: true,param: "backgroundColor"});
        var hbc = zmEditor.component.setItems.slider(button,{title: "悬停颜色",style: "noTab_color",isColor: true,param: "hoverBackgroundColor"});
        e.children("div:nth-child(2)").append(font);
        e.children("div:nth-child(3)").append(bc);
        e.children("div:nth-child(4)").append(hbc);
        if(ele.css("display") == "block"){
            icon.addClass("fa-check");
            shadow.css("display","none");
        }else{
            icon.removeClass("fa-check");
            shadow.css("display","block");
        }
        label.zmActionOn("click",function(){
            if(icon.is(".fa-check")){
                ele.css("display","none");
                shadow.css("display","block");
                icon.removeClass("fa-check");
            }else{
                ele.css("display","block");
                shadow.css("display","none");
                icon.addClass("fa-check");
            }
        });
        input.zmActionOn("blur",function(){
            var _this = $(this);
            var _val= _this.val();
            if(_val != ""){
                button.text(_val);
            }
        });
        return e;
    },
    //行,列,间距控制
    RankControl:function(ele,obj){
        var e = $('<div class="zm-component-rankControl">'
            +'<div class="rankControl-row"><span>行&nbsp;&nbsp;&nbsp;数&nbsp;:&nbsp;</span><div class="row"><input type="text"><a class="add fa fa-sort-asc"></a><a class="cut fa fa-sort-desc"></a></div></div>'
            +'<div class="rankControl-col"><span>列&nbsp;&nbsp;&nbsp;数&nbsp;:&nbsp;</span><div class="col"><input type="text"><a class="add fa fa-sort-asc"></a><a class="cut fa fa-sort-desc"></a></div></div>'
            +'<div class="rankControl-rowBetween"><span>行间距&nbsp;:&nbsp;</span><div class="rowBetween"><input type="text"><a class="add fa fa-sort-asc"></a><a class="cut fa fa-sort-desc"></a></div></div>'
            +'<div class="rankControl-colBetween"><span>列间距&nbsp;:&nbsp;</span><div class="colBetween"><input type="text"><a class="add fa fa-sort-asc"></a><a class="cut fa fa-sort-desc"></a></div></div>'
            +'</div>');
        var iSelected = zmEditor.component.nowEdit();
        var _rows = ele.find("li").length;
        var _cols = ele.find("li:first-child").children().length;
        var _margin_row = parseInt(ele.find(".zm-edit-components-list-unit").eq(0).css("margin-bottom"));
        var _margin_col = parseInt(ele.find(".zm-edit-components-list-unit").eq(0).css("margin-right"));
        var _row_input = e.find(".rankControl-row").find("input");
        var _row_add = e.find(".rankControl-row").find(".add");
        var _row_cut = e.find(".rankControl-row").find(".cut");
        var _col_input = e.find(".rankControl-col").find("input");
        var _col_add = e.find(".rankControl-col").find(".add");
        var _col_cut = e.find(".rankControl-col").find(".cut");
        var _row_between_input = e.find(".rankControl-rowBetween").find("input");
        var _row_between_add = e.find(".rankControl-rowBetween").find(".add");
        var _row_between_cut = e.find(".rankControl-rowBetween").find(".cut");
        var _col_between_input = e.find(".rankControl-colBetween").find("input");
        var _col_between_add = e.find(".rankControl-colBetween").find(".add");
        var _col_between_cut = e.find(".rankControl-colBetween").find(".cut");
        _row_input.val(_rows);
        _col_input.val(_cols);
        _row_between_input.val(_margin_row);
        _col_between_input.val(_margin_col);
        //初始化结束
        var goods = ele.find(".zm-edit-components-list-unit").eq(0);
        //行
        _row_input.zmActionOn("change",function(){
            var _this = $(this);
            var oldRow = ele.find("li").length;
            var oldCol = ele.find("li").eq(0).children().length;
            var newRow = _this.val();
            var h = parseInt(ele.find("li").eq(0).css("height"));
            if(newRow > 12){
                newRow = 12;
            }else if(newRow < 1){
                newRow = 1;
            }
            _this.val(newRow);
            var num = newRow - oldRow;
            if(num > 0){
                for(var i=0;i<num;i++){
                    var li = $('<li class="clearFloat"></li>');
                    for(var j=0;j<oldCol;j++){
                        li.append(goods.clone());
                    }
                    ele.append(li);
                }
            }else if(num < 0){
                for(var i=0;i<Math.abs(num);i++){
                    ele.find("li:last-child").remove();
                }
            }
            iSelected.css("height",h*newRow+57+"px");
            loopAssignment({type: obj.type,arr: ele.find(".zm-edit-components-list-unit"),key: iSelected.attr("data-type-list")});
        });
        _row_add.zmActionOn("click",function() {
            var li = ele.find("li:first-child");
            var input = $(this).closest("div").find("input");
            var _val = input.val();
            var h = parseInt(ele.find("li").eq(0).css("height"));
            if(_val < 12){
                input.val(parseInt(input.val())+1);
                ele.append(li.clone());
                iSelected.css("height",h*parseInt(input.val())+57+"px");
                loopAssignment({type: obj.type,arr: ele.find(".zm-edit-components-list-unit"),key: iSelected.attr("data-type-list")});
            }
        });
        _row_cut.zmActionOn("click",function() {
            var input = $(this).closest("div").find("input");
            var _val = input.val();
            var h = parseInt(ele.find("li").eq(0).css("height"));
            if(_val > 1){
                input.val(parseInt(input.val())-1);
                ele.find("li:last-child").remove();
                iSelected.css("height",h*parseInt(input.val())+57+"px");
                loopAssignment({type: obj.type,arr: ele.find(".zm-edit-components-list-unit"),key: iSelected.attr("data-type-list")});
            }
        });
        //列
        _col_input.zmActionOn("change",function() {
            var _this = $(this);
            var oldCol = ele.find("li").eq(0).children().length;
            var nowCol = _this.val();
            var w = ele.find(".zm-edit-components-list-unit").eq(0).outerWidth(true);
            if (nowCol > 6) {
                nowCol = 6;
            } else if (nowCol < 1) {
                nowCol = 1;
            }
            _this.val(nowCol);
            var num = nowCol - oldCol;
            var li = ele.find("li");
            if (num > 0) {
                for (var i = 0; i < num; i++) {
                    li.append(goods.clone());
                }
            } else {
                for (var i = 0; i < Math.abs(num); i++) {
                    li.find(".zm-edit-components-list-unit:last-child").remove();
                }
            }
            iSelected.css("width",w*nowCol+"px");
            loopAssignment({
                type: obj.type,
                arr: ele.find(".zm-edit-components-list-unit"),
                key: ele.attr("data-type-list")
            });
        });
        _col_add.zmActionOn("click",function() {
            var _this = $(this);
            var _input = _this.closest("div").find("input");
            var _val = parseInt(_input.val());
            var w = ele.find(".zm-edit-components-list-unit").eq(0).outerWidth(true);
            var li = ele.find("li");
            if(_val < 6){
                var nowVal = ++_val;
                _input.val(nowVal);
                li.append(goods.clone());
                iSelected.css("width",w*nowVal+"px");
                loopAssignment({
                    type: obj.type,
                    arr: ele.find(".zm-edit-components-list-unit"),
                    key: iSelected.attr("data-type-list")
                });
            }
        });
        _col_cut.zmActionOn("click",function() {
            var _this = $(this);
            var _input = _this.closest("div").find("input");
            var _val = parseInt(_input.val());
            var w = ele.find(".zm-edit-components-list-unit").eq(0).outerWidth(true);
            var li = ele.find("li");
            if(_val > 1){
                var nowVal = --_val;
                _input.val(nowVal);
                li.find(".zm-edit-components-list-unit:last-child").remove();
                iSelected.css("width",w*nowVal+"px");
                loopAssignment({
                    type: obj.type,
                    arr: ele.find(".zm-edit-components-list-unit"),
                    key: iSelected.attr("data-type-list")
                });
            }
        });
        //行距
        _row_between_input.zmActionOn("change",function(){
            var _this = $(this);
            var newVal = _this.val();
            if(newVal > 30){
                newVal = 30;
            }else if(newVal < 0){
                newVal = 0;
            }
            _this.val(newVal);
            ele.find(".zm-edit-components-list-unit").css("margin-bottom",newVal+"px");
        });
        _row_between_add.zmActionOn("click",function(){
            var _this = $(this);
            var _input = _this.closest("div").find("input");
            var _val = _input.val();
            if(_val < 30){
                var nowVal = ++_val;
                _input.val(nowVal);
                ele.find(".zm-edit-components-list-unit").css("margin-bottom",nowVal+"px");
            }
        });
        _row_between_cut.zmActionOn("click",function(){
            var _this = $(this);
            var _input = _this.closest("div").find("input");
            var _val = _input.val();
            if(_val > 0){
                var nowVal = --_val;
                _input.val(nowVal);
                ele.find(".zm-edit-components-list-unit").css("margin-bottom",nowVal+"px");
            }
        });
        //列距
        _col_between_input.zmActionOn("change",function(){
            var _this = $(this);
            var newVal = _this.val();
            if(newVal > 30){
                newVal = 30;
            }else if(newVal < 0){
                newVal = 0;
            }
            _this.val(newVal);
            ele.find(".zm-edit-components-list-unit").css("margin-right",newVal+"px");
        });
        _col_between_add.zmActionOn("click",function(){
            var _this = $(this);
            var _val = _this.closest("div").find("input").val();
            if(_val < 30){
                var nowVal = ++_val;
                _this.closest("div").find("input").val(nowVal);
                ele.find(".zm-edit-components-list-unit").css("margin-right",nowVal+"px");
            }
        });
        _col_between_cut.zmActionOn("click",function(){
            var _this = $(this);
            var _val = _this.closest("div").find("input").val();
            if(_val > 0){
                var nowVal = --_val;
                _this.closest("div").find("input").val(nowVal);
                ele.find(".zm-edit-components-list-unit").css("margin-right",nowVal+"px");
            }
        });
        return e;
    },
    /***********************************************************/
    PLImgScale: function (ele) {
        return zmEditor.component.product.method.PLImgScale(ele);
    },//图片框比例
    PLRanks: function (ele) {
        return zmEditor.component.product.method.PLRanks(ele);
    },//行列控制
    PLButton:function (ele) {
        return zmEditor.component.product.method.PLButton(ele);
    },//加载更过按钮
    PLExhibit:function (ele) {
        return zmEditor.component.product.method.PLExhibit(ele);
    },//展示内容选择
    PLPList:function (ele) {
        return zmEditor.component.product.method.PLPList(ele);
    },//产品展示
    PLSort:function (ele) {
        return zmEditor.component.product.method.PLSort(ele);
    },//产品排序
    PLPName:function (ele,obj) {
        return zmEditor.component.product.method.PLPName(ele,obj);
    },
    PLPRetail:function (ele,obj) {
        return zmEditor.component.product.method.PLPRetail(ele,obj);
    },
    PLPGuide:function (ele,obj) {
        return zmEditor.component.product.method.PLPGuide(ele,obj);
    },
    /* 结束 */
    //video module functions area  start  -- by gui
    video_cutStyle: function (ele) {
        return zmEditor.component.video.videoCutStyle(ele)
    },
    video_HLnumber: function (ele) {
        return zmEditor.component.video.videoHLnumber(ele)
    },
    video_addVideo: function (ele) {
        return zmEditor.component.video.videoAddVideo(ele)
    },
    video_Contenttitle: function (ele,obj) {
        return zmEditor.component.video.videoContenttitle(ele,obj)
    },
    video_Contentintroduct: function (ele,obj) {
        return zmEditor.component.video.videoContentintroduct(ele,obj)
    },
    video_content: function (ele,obj) {
        return zmEditor.component.video.videoContent(ele,obj)
    },
    video_displayStyle: function (ele) {
        return zmEditor.component.video.displayStyle(ele)
    },
    video_titledisplayStyle: function (ele) {
        return zmEditor.component.video.titledisplayStyle(ele)
    },
    video_introducdisplayStyle: function (ele) {
        return zmEditor.component.video.introducdisplayStyle(ele)
    },
    video_commentdisplayStyle: function (ele) {
        return zmEditor.component.video.commentdisplayStyle(ele)
    },
    video_playBtncontent: function (ele) {
        return zmEditor.component.video.videoplayBtncontent(ele)
    },
    video_playBtnStyle: function (ele) {
        return zmEditor.component.video.videoplayBtnStyle(ele)
    },
    //video module functions area  end  -- by gui

    //carousel module functions area  start  -- by oldZhang
    carousel_fullScreen:function(ele){
     return zmEditor.component.carousel.carouselFullScreen(ele)
    },//设置是否全屏滚动 done 2017-3-23 09:42:03
    carousel_cutModule:function (ele) {
      return zmEditor.component.carousel.carouselCutModule(ele)
    },
    carousel_hoverStay:function (ele) {
        return zmEditor.component.carousel.carouselHoverStay(ele)
    },
    carousel_cutStyle:function(ele){
     return zmEditor.component.carousel.carouselCutStyle(ele)
    },//设置展现方式 done 2017-3-15 19:08:14
    carousel_cutArrow:function(ele){
    return zmEditor.component.carousel.carouselCutArrow(ele)
    },//设置翻页箭头功能模块 done 2017-3-17 15:05:39
    carousel_isPageNum:function(ele){
    return zmEditor.component.carousel.carouselIsPageNum(ele)
    },//设置是否显示页码功能 done 2017-3-17 20:03:25
    carousel_pageNumStyle:function(ele){
    return zmEditor.component.carousel.carouselPageNumStyle(ele)
    },//点击设置页码类型, done 2017-3-20 16:05:23
    carousel_pageNumAlign:function(ele){
    return zmEditor.component.carousel.carouselPageNumAlign(ele)
    },//设置页码布局方式  done 2017-3-20 19:15:51
    carousel_imageManage:function(ele){
    return zmEditor.component.carousel.carouselImgManage(ele)
    },//图像-替换、上传、删除图片，图片命名
    carousel_pagePicManage:function(ele){
    return zmEditor.component.carousel.carouselPagePicManage(ele)
    },//轮播图片管理模块
    //carousel module functions area  end  -- by oldZhang
    //img module area start  -- by oldZhang
    img_showImg:function(ele){
      return zmEditor.component.img.imgShowImg(ele)
    },
    img_picScale: function (ele) {
        return zmEditor.component.img.imgPicScale(ele)
    },
    img_borderSet: function (ele) {
        return zmEditor.component.img.imgBorderSet(ele)
    },
    //img module functions area  end  -- by oldZhang
    shape_borderSet:function (ele,flag) {
        return zmEditor.component.shape.shapeBorderSet(ele,flag)
    },
    //shape module functions area end  -- by oldZhang
    //news  module area start -- by oldZhang
    news_newsSetting:function (ele,flag) {
        return zmEditor.component.news.newsHrefSetting(ele,flag)
    },
    news_newsDataSort:function (ele,flag) {
        return zmEditor.component.news.newsDataSort(ele,flag)
    },
    news_newsPicShow:function (ele) {
        return zmEditor.component.news.newsPicShow(ele)
    },
    news_newsPicPosition:function (ele) {
        return zmEditor.component.news.newsPicPosition(ele)
    },
    news_newsPicScale:function (ele,flag) {
        return zmEditor.component.news.newsPicScale(ele,flag)
    },
    news_newsPicHover:function (ele) {
        return zmEditor.component.news.newsPicHover(ele)
    },
    news_newsPicBord:function (ele,flag) {
        return zmEditor.component.news.newsPicBord(ele,flag)
    },
    news_newTitlePoint:function (ele,flag) {
        return zmEditor.component.news.newsTitlePoint(ele,flag)
    },
    news_wordsAlign:function (ele,flag) {
        return zmEditor.component.news.newsWordsAlign(ele,flag)
    },
    news_newsTitleFont:function (ele,flag) {
        return zmEditor.component.news.newsTitleFont(ele,flag)
    },
    news_isShowWords:function (ele,flag) {
        return zmEditor.component.news.newsIsShowWords(ele,flag)
    },
    news_newsWordsFont:function (ele,flag) {
        return zmEditor.component.news.newsWordsFont(ele,flag)
    },
    news_newsShowAnother:function (ele,flag) {
        return zmEditor.component.news.newsShowAnother(ele,flag)
    },
    //news module area end -- by oldZhang
    //function module area start -- by oldZhang
    search_defaultCont:function(ele,flag){
        return zmEditor.component.function.searchMethod.setDefaultContent(ele,flag)
    },
    search_defaultWordsSet:function(ele,flag){
        return zmEditor.component.function.searchMethod.placeholderWordsSet(ele,flag)
    },
    search_searchBtnStyle:function(ele,flag){
        return zmEditor.component.function.searchMethod.searchBtnStyle(ele,flag)
    },
    search_searchResultShow:function(ele){
        return zmEditor.component.function.searchMethod.searchResultShow(ele)
    },
    function_keyToSet:function(ele,flag){
        return zmEditor.component.function.searchMethod.keyToSet(ele,flag)
    },
    function_shoppingCartStyle:function(ele){
        return zmEditor.component.function.shoppingMethod.shoppingCartStyle(ele)
    },
    function_shoppingCartWord:function(ele){
        return zmEditor.component.function.shoppingMethod.shoppingCartWord(ele)
    },
    function_shoppingCartNum:function(ele){
       return zmEditor.component.function.shoppingMethod.shoppingCartNum(ele)
    },
    function_shoppingCartLayOut:function(ele){
        return zmEditor.component.function.shoppingMethod.shoppingCartLayOut(ele)
    },
    function_publicHref:function (ele) {
        return zmEditor.component.function.publicMethod.publicHref(ele)
    },
    file_changeFile:function (ele) {
        return zmEditor.component.function.fileMethod.changeFile(ele)
    },
    file_namedFile:function (ele) {
        return zmEditor.component.function.fileMethod.namedFile(ele)
    },
    share_shareName:function (ele) {
        return zmEditor.component.function.shareMethod.namedShare(ele)
    },
    share_shareBtnSet:function (ele) {
        return zmEditor.component.function.shareMethod.shareBtnSet(ele)
    },
    share_shareOption:function (ele) {
        return zmEditor.component.function.shareMethod.shareOption(ele)
    },
    enter_enterTemplet:function (ele) {
        return zmEditor.component.function.enterMethod.enterTemplet(ele)
    },
    enter_enterLayout:function (ele) {
        return zmEditor.component.function.enterMethod.enterLayout(ele)
    },
    enter_enterIsmember:function (ele) {
        return zmEditor.component.function.enterMethod.enterIsmember(ele)
    },
    enter_enterSubmitWord:function (ele) {
        return zmEditor.component.function.enterMethod.enterSubmitWord(ele)
    },
    option_optionTemplet:function (ele) {
        return zmEditor.component.function.optionMethod.optionTemplet(ele)
    },
    option_optionSubmitSuc:function (ele) {
        return zmEditor.component.function.optionMethod.optionSubmitSuc(ele)
    },
    map_mapLocation:function (ele) {
        return zmEditor.component.function.mapMethod.mapLocation(ele)
    },
    map_mapOption:function (ele) {
        return zmEditor.component.function.mapMethod.mapOption(ele)
    },
    map_mapStyle:function(ele){
        return zmEditor.component.function.mapMethod.mapStyle(ele)
    },
    //function module area end -- by oldZhang
    /******************* Audio start *********************/
    styleSelect:function(ele){
        return zmEditor.component.audio.method.styleSelect(ele);
    },
    showName:function(ele){
        return zmEditor.component.audio.method.showName(ele);
    },
    importName:function(ele){
        return zmEditor.component.audio.method.importName(ele);
    },
    audioFont:function(ele,obj){
        return zmEditor.component.audio.method.audioFont(ele,obj);
    },
    playMode:function(ele){
        return zmEditor.component.audio.method.playMode(ele);
    },
    selAlbum:function(ele){
        return zmEditor.component.audio.method.selAlbum(ele);
    },
    albumInfo:function(ele,obj){
        return zmEditor.component.audio.method.albumInfo(ele,obj);
    },
    commentInfo:function(ele,obj){
        return zmEditor.component.audio.method.commentInfo(ele,obj);
    },
    loadInfo:function(ele,obj){
        return zmEditor.component.audio.method.loadInfo(ele,obj);
    },
    showOnOff:function(ele){
        return zmEditor.component.audio.method.showOnOff(ele);
    },
    listFont:function(ele,obj){
        return zmEditor.component.audio.method.listFont(ele,obj);
    },
    albumLayout:function(ele){
        return zmEditor.component.audio.method.albumLayout(ele);
    },
    albumBorSty:function(ele){
        return zmEditor.component.audio.method.albumBorSty(ele);
    },
    albumChoice:function(ele){
        return zmEditor.component.audio.method.albumChoice(ele);
    },
    albumSort:function(ele){
        return zmEditor.component.audio.method.albumSort(ele);
    },
    albumSinger:function(ele,obj){
        return zmEditor.component.audio.method.albumSinger(ele,obj);
    },
    albumName:function(ele,obj){
        return zmEditor.component.audio.method.albumName(ele,obj);
    },
    albumLoad:function(ele,obj){
        return zmEditor.component.audio.method.albumLoad(ele,obj);
    },
    albumTime:function(ele,obj){
        return zmEditor.component.audio.method.albumTime(ele,obj);
    },
};

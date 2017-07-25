/**
 * Created by Administrator on 2017/4/11.
 */
/*滑动改变属性控件*/
//e={title: ,type: ,minSize: ,maxSize: ,style: ,goal: ,obj: ,}
$.fn.zmSlider = function(e){
    zmEditor.action.getInitState();//保存操作之前组件的初始状态
    var _this = $(this);
    var title = e.title;
    if(title){_this.find('.zm-edit-text-title').html(title);}
    var type = e.type;
    var _element = e.EM;
    var toFixed =e.toFixed?e.toFixed:0;
    var minSize = e.minSize;
    var maxSize = e.maxSize;
    var child = _this.find(".zm-edit-slider-child");
    child.css('width','10px');
    var parent = _this.find(".zm-edit-slider-parent");
    var child_hover=_this.find(".zm-edit-slider-child-hover");
    var parentWidth = 84;
    var enevtObj = e;
    //设置slider样式
    if(e.style){
        switch (e.style){
            case 'noTab_noColor': parentWidth = 156;break;
            case 'noTab_color': parentWidth = 106;break;
            case 'tab_noColor': parentWidth = 136;break;
            case 'tab_noColor1': parentWidth = 106;break;
            case 'tab_color': parentWidth = 84;break;
            default :parentWidth = 84;break;
        }
    }
    parent.css('width',parentWidth);
    var value = _this.find(".zm-edit-slider-val");
    var option = _this.find(".zm-colorPicker-switch");
    var eWidth = child.width();
    var pWidth = parentWidth;
    var sDiff = maxSize - minSize;
    var wDiff = pWidth - eWidth;
    var iSelected;
    if(e.goal){
        iSelected = e.goal;
    }else{
        iSelected = zmEditor.component.nowEdit();
    }
    var goal = zmEditor.component.setItems.strings.future(iSelected,{goal: _element});
    var temporary = goal ? goal : iSelected;
    /********** 第一步 初始化 滑动条及input框 **********/
    var nowSize = 0;
    switch(type){
        case "borderWidth":
            if(navigator.userAgent.indexOf("Firefox") != -1){
                nowSize = parseInt(temporary.css("borderTopWidth"));
            }else{
                nowSize = parseInt(temporary.css("borderWidth"));
            }
            break;
        case "fontSize":
        case "width":
        case "height":
        case "borderTopWidth":
        case "borderBottomWidth":
        case "letter-spacing":
        case "marginBottom":
            nowSize = parseInt(temporary.css(type));
            break;//liu
        case "color":
        case "borderColor":
        case "backgroundColor":
        case "borderTopColor":
        case "borderBottomColor":
        case "fill":
        case "stroke":
            nowSize = zmEditor.component.setItems.getOpaCol({goal: temporary,type: type}).opacity*100;
            break;//liu
        case "hoverBorderTopWidth":
        case "hoverBorderBottomWidth":
            var hover_width = parseInt(temporary.attr("data-type-"+type));
            if(hover_width){
                nowSize = hover_width;
            }else{
                nowSize = 0;
            }
            break;
        case "hoverColor":
        case "hoverBackgroundColor":
        case "hoverBorderColor":
        case "hoverBorderTopColor":
        case "hoverBorderBottomColor":
        case "hoverFill":
            var hover_color = temporary.attr("data-type-"+type);
            if(hover_color){
                var arr = hover_color.split(",");
                if(arr.length == 4){
                    var str = arr[3].slice(0,arr[3].length-1);
                    nowSize = Number(str)*100;
                }else{
                    nowSize = 100;
                }
            }else{
                nowSize = 100;
            }
            break;//liu
        case "tbPadding":
            nowSize = parseInt(iSelected.css("padding-top"));
            break;
        case "lrPadding":
            nowSize = parseInt(iSelected.css("padding-left"));
            break;
        case "lineClamp":
            nowSize = temporary.css("-webkit-line-clamp");
            break;
        case "scale":
             nowSize =parseFloat(temporary.css("width"))/40;
            break;
        case "fontSpace":
            // nowSize=parseInt(temporary.css("letterSpacing"));
            // nowSize = parseFloat(temporary.css("letterSpacing"))/parseFloat(temporary.css('font-size'))*10;
            nowSize = parseFloat(temporary.css("letterSpacing"))/parseFloat(temporary.css('font-size'));
            break;
        case "lineSpace":
            // nowSize = parseInt(temporary.css("line-height"))-parseInt(iSelected.css("font-size"));
            // nowSize = parseFloat(temporary.css("line-height"))/parseFloat(temporary.css('font-size'))*10;
            nowSize = parseFloat(temporary.css("line-height"))/parseFloat(temporary.css('font-size'));
            break;
        case "opacity_style"://ye
            switch (enevtObj.class){
                case "mian_border_color":
                    // nowSize=zmEditor.globalMethod.nav.returnOpacity(zmEditor.globalMethod.nav.data.arrLike[zmEditor.globalMethod.nav.global_compotents_IndependentName(iSelected)]["li"]["sStyle"]["borderLeftColor"]);
                    // if(nowSize<=.9){
                    //     _this.find(".zm-colorPicker-switch").css("background-image","url(./imgs/index/opacity.png)")
                    //     _this.find(".zm-colorPicker-switch").css("background-color","")
                    // }else{
                    //     _this.find(".zm-colorPicker-switch").css("background-image","");
                    // }
                    break;
                case "mian_children_childrenLi_bg":
                    nowSize=zmEditor.globalMethod.nav.returnOpacity(zmEditor.globalMethod.nav.data.arrLike[zmEditor.globalMethod.nav.global_compotents_IndependentName(iSelected)]["li"]["sStyle"]["backgroundColor"]);
                    if(nowSize<=0.9){
                        _this.find(".zm-colorPicker-switch").css("background-image","url(./imgs/index/opacity.png)")
                        _this.find(".zm-colorPicker-switch").css("background-color","")
                    }else{
                        _this.find(".zm-colorPicker-switch").css("background-image","");
                    }
                    break;
                case "":
                    break;
                default:
                    break;
            }
            nowSize = 100;
            break;
        case "borderWidth_nav"://ye
            nowSize = parseInt(iSelected.children().children("li").css("borderTopWidth"));
            break;
        case "mian_Children_ChildrenSpan_width"://
            break;
        case "mian_children_childrenLi_btw"://ye3.15改动过后. 设置一级li上边框的宽度   mian_children_childrenLi_btw
            break
        case "mian_children_childrenLi_hover_btw"://ye
            break;
        case "mian_children_childrenLi_bbw"://ye 设置一级l下上边框的宽度   mian_children_childrenLi_bbw
            break;
        case "mian_children_childrenLi_hover_bbw"://ye  3.16设置一级l下上边框houver的宽度  mian_children_childrenLi_hover_bbw
            break;
        case "mian_children_childrenLi_bw"://ye  3.16  设置一级li边框的宽度  mian_children_childrenLi_bw
            break;
        case "mian_children_childrenLi_hover_bw"://ye 3.16
            break;
        case "mian_children_childrenSpan_height"://ye通过改变为上边框边框改变间距. mian_children_childrenSpan_height
            break;
        case "navNode1Style":
            nowSize = parseInt(iSelected.children("ul").children("li"));
            break;
        case "picCutTime"://laozhang
            var slideSpeedArgs = iSelected.find('.zm-component-carousel-box').attr('data-slide-args');
            nowSize = parseFloat(slideSpeedArgs.split('speed=')[1].split('&')[0])/1000;
            break;
        case "picStayTime"://laozhang
            var slideTimeoutArgs = iSelected.find('.zm-component-carousel-box').attr('data-slide-args');
            nowSize = parseInt(slideTimeoutArgs.split('timeout=')[1].split('&')[0])/1000;
            break;
        case "borderSetting"://laozhang
               nowSize = parseInt(iSelected.eq(0).css("border-left-width"));
            break;
        case "shapeMarginBorR"://laozhang
            if(iSelected.find('path').attr('d').indexOf('L')>0){//竖线
                nowSize = parseInt(iSelected.css('margin-right'))==0?1:parseInt(iSelected.css('margin-right'))
            }else {
                nowSize = parseInt(iSelected.css('margin-bottom'))==0?1:parseInt(iSelected.css('margin-bottom'))
            }
            break;
        case "marginLength"://laozhang
            nowSize = parseInt(iSelected.css("left"));
            break;
        case "searchBtnML":
        case "pageNumMargin"://oldZhang
            nowSize = parseInt(iSelected.css("margin-left"));
            break;
        case "pageGroupMargin"://oldZhang
            nowSize = parseInt(iSelected.css("bottom"));
            break;
        case "stroke-width"://oldzhang
            if(iSelected.attr('data-view')){
                var viewBox = iSelected.attr('data-view').split(' ')
            }
            nowSize = parseInt(iSelected.css('stroke-width'));
            break;
        case "optionCount":
            nowSize = parseInt(iSelected.attr('class').split('optionWidth')[1]);
            break;
        case "newsNum":
            var newsDataNum = iSelected.find('.zm-component-news-content').attr('data-newsNum');
                 newsDataNum = newsDataNum?newsDataNum:2;
            nowSize = parseInt(newsDataNum);
            break;
        case "wordsLineHeight":
           // nowSize = (parseFloat(temporary.css("line-height"))/parseFloat(temporary.css('font-size'))).toFixed(1);
            nowSize = parseFloat(temporary.css("line-height"))/parseFloat(temporary.css('font-size'));
            break;
        case "wordsLineNum":
            nowSize = parseInt(temporary.css("height"))/parseInt(temporary.css("lineHeight"));
            break;
        default:
            var shadow = temporary.css("boxShadow");
            var arr = [];
            if(shadow != "none"){
                var str = shadow.split(" ");
                for(i in str){
                    if(str[i].indexOf("px") != -1){
                        arr.push(str[i]);
                    }
                }
                switch (type){
                    case "shadowX":
                        nowSize = parseInt(arr[0]);
                        break;
                    case "shadowY":
                        nowSize = parseInt(arr[1]);
                        break;
                    case "shadowB":
                        nowSize = parseInt(arr[2]);
                        break;
                    case "shadowC":
                        nowSize = zmEditor.component.setItems.getOpaCol({goal: temporary,type: type}).opacity*100;
                        break;
                }
            }else{
                temporary.css("boxShadow","0 0 0 rgba(0,0,0,1)");
                switch(type){
                    case "shadowX":
                        nowSize = 0;
                        break;
                    case "shadowY":
                        nowSize = 0;
                        break;
                    case "shadowB":
                        nowSize = 0;
                        break;
                    case "shadowC":
                        nowSize = 100;
                        break;
                }
            }
            break;
    }
    // if(type == 'scale'){
    //     value.val(nowSize? nowSize:"1")
    // }else{
        value.val(nowSize);//初始化input框的值
    // }
    if(type == 'width'){
        value.val(nowSize? nowSize:"40")
    }
    if(type == 'height'){
        value.val(nowSize? nowSize:"40")
    }
    if(toFixed!=0){
        value.val(nowSize.toFixed(toFixed))
    }
    // if(type=='fontSpace'||type=='lineSpace'){
    //     // value.val((nowSize/10).toFixed(1))
    //     value.val(nowSize.toFixed(1))
    // }
    var left = (nowSize-minSize)*wDiff/sDiff;
    child.css("left",left);//初始化小圆点位置
    child_hover.css('width',left);
    /********** 第二步 input change事件 *********/
    value.on("change",function(){
        var changedVal;
        // if(type=='fontSpace'||type == 'lineSpace'){
        //     changedVal = parseFloat(value.val()).toFixed(1) || nowSize;
        //     if(changedVal>maxSize/10){changedVal=maxSize/10;}
        //     if(changedVal<minSize/10){changedVal=minSize/10;}
        //     value.val(changedVal);
        // }
        // else{
        //     changedVal = parseInt(value.val()) || nowSize;
        //     if(changedVal>maxSize){changedVal=maxSize;}
        //     if(changedVal<minSize){changedVal=minSize;}
        //     value.val(changedVal);
        // }
        if(toFixed!=0){
            changedVal = parseFloat(value.val()).toFixed(1) || nowSize;
        }
        else{
            changedVal = parseInt(value.val()) || nowSize;
        }
        if(changedVal>maxSize){changedVal=maxSize;}
        if(changedVal<minSize){changedVal=minSize;}
        value.val(changedVal);
        var newISelected = zmEditor.component.setItems.strings.future(iSelected,{goal: _element});
        var temporary = newISelected ? newISelected : iSelected;
        switch(type) {
            case "fontSize":
                if(iSelected.hasClass('zm-edit-components-button')){
                    var borderW =parseInt(iSelected.css('borderWidth'))*2;
                    var btnW = parseInt(iSelected.css('width'));
                    var btnH = parseInt(iSelected.css('height'));
                    if(btnH<=changedVal){
                        btnH=changedVal;
                    }
                    iSelected.css({'line-height':btnH-borderW+'px','min-width':btnW+'px','height':'auto','width':'auto'});
                }
            case "width":
            case "height":
            case "borderWidth":
            case "borderTopWidth":
            case "borderBottomWidth":
            case "letter-spacing":
            case "marginBottom":
                temporary.css(type, changedVal + "px");
                if (iSelected.hasClass('zm-component-carousel-controlBtn')) {
                    var boxHeight = iSelected.closest(".zm-component-carousel-main").height() / 2;
                    iSelected.css({top: boxHeight - iSelected.height() / 2});
                }
                if(iSelected.hasClass('zm-component-enter-inputBox')&&changedVal>20){
                    iSelected.find('i').css({'lineHeight':changedVal+'px'});
                }
                break;//liu
            case "hoverBorderTopWidth":
            case "hoverBorderBottomWidth":
                temporary.attr("data-type-" + type, changedVal);
                break;
            case "color":
            case "borderColor":
            case "backgroundColor":
            case "borderTopColor":
            case "borderBottomColor":
            case "fill":
            case "stroke":
                var _color = zmEditor.component.setItems.getOpaCol({goal: option, type: "backgroundColor"}).color;
                var _opacity = Math.round(changedVal / 10) / 10;
                var _val = {color: _color, opacity: _opacity};
                zmEditor.component.setItems.setOpaCol({goal: option, type: "backgroundColor", value: _val});
                zmEditor.component.setItems.setOpaCol({goal: temporary, type: type, value: _val});
                break;//liu
            case "hoverColor":
            case "hoverBackgroundColor":
            case "hoverBorderColor":
            case "hoverBorderTopColor":
            case "hoverBorderBottomColor":
            case "hoverFill":
                var hovOpa = Math.round(changedVal / 10) / 10;
                var str = temporary.attr("data-type-" + type);
                var Arr = [];
                if (str) {
                    var arr = str.split(",");
                    for (i in arr) {
                        Arr.push((arr[i].match(/\d+/))[0]);
                    }
                    console.log(arr, Arr);
                } else {
                    Arr = [0, 0, 0];
                };
                Str = 'rgba(' + Arr[0] + "," + Arr[1] + "," + Arr[2] + "," + hovOpa + ")";
                debugger;
                temporary.attr("data-type-" + type, Str);
                option.css("backgroundColor", Str);
                break;
            case "lineClamp":
                var a = ["zm-video-introduc1", "zm-video-introduc2", "zm-video-introduc3", "zm-video-introduc4", "zm-video-introduc5"]
                nowSize = changedVal;
                if (nowSize > maxSize) {
                    nowSize = maxSize;
                } else if (nowSize < minSize) {
                    nowSize = minSize;
                }

                temporary.removeClass("zm-video-introduc1 zm-video-introduc2 zm-video-introduc3 zm-video-introduc4 zm-video-introduc5")
                temporary.addClass(a[nowSize - 1])
                break;
            case "scale":
                nowSize = changedVal;
                // if (nowSize > maxSize) {
                //     nowSize = maxSize;
                // }
                // temporary.css("width", nowSize*40);
                // temporary.css("height", nowSize* 40);
                    temporary.css({"width": nowSize* 40+"px","height":nowSize* 40+"px"})

                break;
            case "fontSpace":
                // nowSize = changedVal;
                // if (nowSize > maxSize) {
                //     nowSize = maxSize;
                // }
                // temporary.css({"letterSpacing": nowSize,"padding-left":nowSize});
                nowSize = changedVal;
                // if (nowSize > maxSize/10) {
                //     nowSize = maxSize/10;
                // }
                if(temporary.hasClass('zm-edit-components-button')){
                    temporary.css({"letterSpacing": nowSize+"em","padding-left":nowSize+"em"});
                }
                else{
                    temporary.css({"letterSpacing": nowSize+"em"})
                }
                break;
            case "tbPadding":
                nowSize = changedVal;
                if (nowSize > maxSize) {
                    nowSize = maxSize;
                }

                iSelected.css({"padding-top": nowSize, "padding-bottom": nowSize});
                break;
            case "lrPadding":
                nowSize = changedVal;
                if (nowSize > maxSize) {
                    nowSize = maxSize;
                }
                iSelected.css({"padding-left": nowSize, "padding-right": nowSize});
                break;
            case "lineSpace":
                nowSize = changedVal;
                // temporary.css("lineHeight", changedVal + parseInt(iSelected.css("font-size")) + 'px');
                temporary.css("lineHeight", changedVal + 'em');
                break;
            case "navNode1Style":
                nowSize = changedVal;
                iSelected.children("ul").children("li").css("width", nowSize + "px");
                break;
            //改动过后
            case "borderWidth_nav"://ye 3.15改动过后  设置mian层的整体宽度 设置mian层的整体宽度复用其他组件
                nowSize = changedVal;
                var borderWidth = changedVal+"px";
                var data_a="data-"+iSelected.attr("data-"+iSelected[0].classList[4]);
                zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderTopWidth"]=borderWidth+"px";
                zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["hHover"]["borderTopWidth"]=borderWidth+"px";

                zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderBottomWidth"]=borderWidth+"px";
                zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["hHover"]["borderBottomWidth"]=borderWidth+"px";

                zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderLeftWidth"]=borderWidth+"px";
                zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["hHover"]["borderLeftWidth"]=borderWidth+"px";

                zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderRightWidth"]=borderWidth+"px";
                zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["hHover"]["borderRightWidth"]=borderWidth+"px";

                if(/vertical/.test(iSelected[0].classList[4])){
                    iSelected.children().children("li").css({"borderLeftWidth":borderWidth,"borderRightWidth":borderWidth,"borderStyle":zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderStyle"],"borderColor":zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderTopColor"],"lineHeight":li_height+"px"});
                    iSelected.children().children("li:eq(0)").css({"borderTopWidth":borderWidth,"borderLeftColor":zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderLeftColor"]})
                    iSelected.children().children("li").last().css({"borderBottomWidth":borderWidth,"borderRightColor":zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderRightColor"]});
                }else{
                    var li_height=parseInt(zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["height"])-parseInt(borderWidth)*2;
                    zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["lineHeight"]=li_height+"px";
                    zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["hHover"]["lineHeight"]=li_height+"px";
                    zmEditor.globalMethod.nav.data.arrLike[data_a]["span"]["sStyle"]["borderTopWidth"]=borderWidth+"px";
                    zmEditor.globalMethod.nav.data.arrLike[data_a]["span"]["sStyle"]["borderBottomWidth"]=borderWidth+"px";

                    iSelected.children().children("li").css({"borderTopWidth":borderWidth,"borderBottomWidth":borderWidth,"borderStyle":zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderStyle"],"borderColor":zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderTopColor"],"lineHeight":li_height+"px"});

                    iSelected.children().children("span").css({"borderTopWidth":borderWidth,"borderBottomWidth":borderWidth,"borderStyle":zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderStyle"],"borderColor":zmEditor.globalMethod.nav.data.arrLike[data_a]["span"]["sStyle"]["borderTopColor"]});
                    // zmEditor.globalMethod.nav.refreshNav(iSelected);
                    iSelected.children().children("li:eq(0)").css({"borderLeftWidth":borderWidth,"borderLeftColor":zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderLeftColor"]})
                    iSelected.children().children("li").last().css({"borderRightWidth":borderWidth,"borderRightColor":zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderRightColor"]});
                }
                break;
            case "mian_Children_ChildrenSpan_width":// 3.15改动过后. 设置一级span的宽度   mianChildrenSpan
                nowSize = changedVal;
                console.log(3333);
                var data_a = "data-" + iSelected.attr("data-" + iSelected[0].classList[4]);
                zmEditor.globalMethod.nav.data.arrLike[data_a]["mian"]["sStyle"]["width"] = "";
                iSelected.css("width", "");
                iSelected.children().children("span").css({"width": nowSize + "px"});
                zmEditor.globalMethod.nav.data.arrLike[data_a]["span"]["sStyle"]["width"] = nowSize + "px";
                console.log(zmEditor.globalMethod.nav.data.arrLike);
                break;
            case "mian_children_childrenLi_btw"://ye3.15改动过后. 设置一级li上边框的宽度   mian_children_childrenLi_btw
                nowSize = changedVal;
                var data_a = "data-" + iSelected.attr("data-" + iSelected[0].classList[4]);
                zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderTopWidth"] = nowSize + "px";
                var li_height = zmEditor.globalMethod.nav.calculationLineheight(parseInt(zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["height"]), nowSize);
                zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["lineHeight"] = li_height + "px";
                iSelected.css("width", "");
                iSelected.children("ul").children("li").css({
                    "borderTopWidth": nowSize + "px",
                    "lineHeight": li_height + "px"
                });
                iSelected.children("ul").children("li").each(function (index, ele) {
                    zmEditor.globalMethod.nav.initNavList.endHover($(this), "sStyle", "hHover", "mouseenter" + zmEditor.globalMethod.nav.data.arrLike[data_a].li.eventClass.mouseenter.color,
                        "mouseleave" + zmEditor.globalMethod.nav.data.arrLike[data_a].li.eventClass.mouseleave.color, data_a);
                });
                break;
            case "mian_children_childrenLi_hover_btw"://ye 3.16   mian_children_childrenLi_hover_btw
                nowSize = changedVal;
                var data_a = "data-" + iSelected.attr("data-" + iSelected[0].classList[4]);
                zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["hHover"]["borderTopWidth"] = nowSize + "px";
                var li_height = zmEditor.globalMethod.nav.calculationLineheight(parseInt(zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["hHover"]["height"]), nowSize);
                zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["hHover"]["lineHeight"] = li_height + "px";
                iSelected.children("ul").children("li").each(function (index, ele) {
                    zmEditor.globalMethod.nav.initNavList.endHover($(this), "sStyle", "hHover", "mouseenter" + zmEditor.globalMethod.nav.data.arrLike[data_a].li.eventClass.mouseenter.color,
                        "mouseleave" + zmEditor.globalMethod.nav.data.arrLike[data_a].li.eventClass.mouseleave.color, data_a);
                });
                break;
            case "mian_children_childrenLi_bbw"://ye 设置一级l下上边框的宽度   mian_children_childrenLi_bbw
                nowSize = changedVal;
                var data_a = "data-" + iSelected.attr("data-" + iSelected[0].classList[4]);
                zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderBottomWidth"] = nowSize + "px";
                var li_height = zmEditor.globalMethod.nav.calculationLineheight(parseInt(zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["height"]), parseInt(zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["hHover"]["borderTopWidth"]), nowSize);
                zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["hHover"]["lineHeight"] = li_height + "px";
                iSelected.css("width", "");
                console.log(zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["hHover"]["borderBottomWidth"]);
                iSelected.children("ul").children("li").each(function (index, ele) {
                    $(this).css({"borderBottomWidth": nowSize + "px", "lineHeight": li_height + "px"});
                    zmEditor.globalMethod.nav.initNavList.endHover($(this), "sStyle", "hHover", "mouseenter" + zmEditor.globalMethod.nav.data.arrLike[data_a].li.eventClass.mouseenter.color,
                        "mouseleave" + zmEditor.globalMethod.nav.data.arrLike[data_a].li.eventClass.mouseleave.color, data_a);
                });
                break;
            case "mian_children_childrenLi_hover_bbw"://ye  3.16设置一级l下上边框houver的宽度  mian_children_childrenLi_hover_bbw
                nowSize = changedVal;
                var data_a = "data-" + iSelected.attr("data-" + iSelected[0].classList[4]);
                var li_height = zmEditor.globalMethod.nav.calculationLineheight(parseInt(zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["height"]), parseInt(zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["hHover"]["borderTopWidth"]), nowSize);
                zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["hHover"]["borderBottomWidth"] = nowSize + "px";
                zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["hHover"]["lineHeight"] = li_height + "px";
                iSelected.children("ul").children("li").each(function (index, ele) {
                    zmEditor.globalMethod.nav.initNavList.endHover($(this), "sStyle", "hHover", "mouseenter" + zmEditor.globalMethod.nav.data.arrLike[data_a].li.eventClass.mouseenter.color,
                        "mouseleave" + zmEditor.globalMethod.nav.data.arrLike[data_a].li.eventClass.mouseleave.color, data_a);
                });
                break;
            case "mian_children_childrenLi_bw"://ye  3.16  设置一级li边框的宽度  mian_children_childrenLi_bw
                nowSize = changedVal;
                var data_a = "data-" + iSelected.attr("data-" + iSelected[0].classList[4]);
                zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderTopWidth"] = nowSize + "px";
                zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderBottomWidth"] = nowSize + "px";
                zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderLeftWidth"] = nowSize + "px";
                zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderRightWidth"] = nowSize + "px";
                zmEditor.globalMethod.nav.data.arrLike[data_a]["mian"]["sStyle"]["width"] = "";
                iSelected.css("width", "");
                // var li_height = zmEditor.globalMethod.nav.calculationLineheight(parseFloat(zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["height"]),nowSize,nowSize);
                var li_height =parseFloat(zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["height"])-nowSize*2;
                zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["lineHeight"] = li_height + "px";
                iSelected.children("ul").children("li").each(function (index, ele) {
                    $(this).css({
                        "borderTopWidth": nowSize,
                        "borderBottomWidth": nowSize,
                        "borderLeftWidth": nowSize,
                        "borderRightWidth": nowSize,
                        "borderStyle": zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderStyle"],
                        "lineHeight": li_height + "px"
                    })
                    zmEditor.globalMethod.nav.initNavList.endHover($(this), "sStyle", "hHover", "mouseenter" + zmEditor.globalMethod.nav.data.arrLike[data_a].li.eventClass.mouseenter.color,
                        "mouseleave" + zmEditor.globalMethod.nav.data.arrLike[data_a].li.eventClass.mouseleave.color, data_a);
                });
                break;
            case "mian_children_childrenLi_hover_bw"://ye  3.16   mian_children_childrenLi_hover_bw
                nowSize = changedVal;
                var data_a = "data-" + iSelected.attr("data-" + iSelected[0].classList[4]);
                zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["hHover"]["borderTopWidth"] = nowSize + "px";
                zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["hHover"]["borderBottomWidth"] = nowSize + "px";
                zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["hHover"]["borderLeftWidth"] = nowSize + "px";
                zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["hHover"]["borderRightWidth"] = nowSize + "px";
                // zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["hHover"]["borderWidth"]=nowSize+"px";
                zmEditor.globalMethod.nav.data.arrLike[data_a]["mian"]["sStyle"]["width"] = "";
                iSelected.css("width", "");
                var li_height = zmEditor.globalMethod.nav.calculationLineheight(parseInt(zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["height"]), nowSize, nowSize);
                zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["hHover"]["lineHeight"] = li_height + "px";
                iSelected.children("ul").children("li").each(function (index, ele) {
                    // $(this).css({"boxSizing":"content-box"})
                    zmEditor.globalMethod.nav.initNavList.endHover($(this), "sStyle", "hHover", "mouseenter" + zmEditor.globalMethod.nav.data.arrLike[data_a].li.eventClass.mouseenter.color,
                        "mouseleave" + zmEditor.globalMethod.nav.data.arrLike[data_a].li.eventClass.mouseleave.color, data_a);
                });
                break;
            case "mian_children_childrenSpan_height"://ye通过改变为上边框边框改变间距. mian_children_childrenSpan_height

                var data_a = "data-" + iSelected.attr("data-" + iSelected[0].classList[4]);//上边框边框改变间距.
                nowSize = changedVal;
                zmEditor.globalMethod.nav.data.arrLike[data_a]["span"]["sStyle"]["height"] = nowSize + "px";
                if (nowSize >= 1) {
                    iSelected.children().children("span").css({"width": "100%", "display": "block"});
                }
                iSelected.children().children("span").css({"height": nowSize * 1 + "px"});
                break;
            case "background_opacity"://ye添加    mian_opacity
                var data_a = "data-" + iSelected.attr("data-" + iSelected[0].classList[4]);
                nowSize = changedVal / 100;
                zmEditor.globalMethod.nav.data.arrLike[data_a]["mian"]["sStyle"]["opacity"] = nowSize;
                iSelected.css("opacity", nowSize);
                break;
            case "opacity_style"://ye添加 //3.14添加 .
                nowSize = changedVal;
                var colortype = zmEditor.globalMethod.nav.componentsliderRbga(_this.find(".zm-colorPicker-switch").css("backgroundColor"), changedVal / 100);
                if (nowSize <= 0.9) {
                    _this.find(".zm-colorPicker-switch").css("background-color", "");
                } else {
                    _this.find(".zm-colorPicker-switch").css("backgroundColor", zmEditor.globalMethod.nav.componentsliderRbga(colortype, changedVal / 100));
                }
                zmEditor.globalMethod.nav.componentslider(colortype, enevtObj.class, iSelected);
                break;
            //改动过后
            case "borderSetting"://oldZhang
                nowSize = changedVal;
                var borderStyle = iSelected.css("borderStyle");
                var borderColor = iSelected.css("borderColor");
                if (nowSize > maxSize) {
                    nowSize = maxSize;
                    value.val(maxSize)
                }
                if (borderStyle == "none" || borderStyle == undefined) {
                    borderStyle = "solid"
                }
                if (borderColor == "" || borderColor == undefined) {
                    borderColor = "transparent"
                }
                if (iSelected.length > 1) {
                    iSelected.css({"border": nowSize / 2 + "px " + borderStyle + " " + borderColor});
                } else {
                    iSelected.css({"border": nowSize + "px " + borderStyle + " " + borderColor});
                    iSelected.css({
                        "border-width": nowSize + "px",
                        "border-style": borderStyle,
                        "border-color": borderColor
                    });
                }
                break;
            case "picCutTime"://oldZhang    2017-3-14 14:26:25
                // value.val(parseFloat(left*sDiff/wDiff+minSize).toFixed(1));
                changedVal  = parseFloat(value.val());
                if (nowSize > maxSize) {
                    nowSize = maxSize;
                    value.val(maxSize)
                }
                var slideSpeedArgs = iSelected.find('.zm-component-carousel-box').attr('data-slide-args');
                iSelected.find(".zm-component-carousel-box")
                    .attr('data-slide-args', 'speed=' + ( changedVal * 1000) + '&autoScroll' + slideSpeedArgs.split('autoScroll')[1]);
                iSelected.find(".zm-component-carousel-box").boxSlider('option', 'speed', changedVal * 1000);
                break;
            case "picStayTime"://oldZhang    2017-3-14 14:26:25
                nowSize = changedVal;
                if (nowSize > maxSize) {
                    nowSize = maxSize;
                    //value.val(maxSize)
                }
                var slideTimeoutArgs = iSelected.find('.zm-component-carousel-box').attr('data-slide-args');
                iSelected.find(".zm-component-carousel-box")
                    .attr('data-slide-args', slideTimeoutArgs.split('timeout=')[0] + 'timeout=' + ( nowSize * 1000) + '&effect' + slideTimeoutArgs.split('effect')[1]);
                break;
            case "marginLength"://oldZhang    2017-3-14 14:26:25
                nowSize = changedVal;
                if (nowSize > maxSize) {
                    nowSize = maxSize;
                    value.val(maxSize)
                }
                iSelected.closest(".zm-component-carousel-main")
                    .find(".zm-component-carousel-controlBtn.left").css('left', nowSize+'px');
                iSelected.closest(".zm-component-carousel-main")
                    .find(".zm-component-carousel-controlBtn.right").css('right', nowSize+'px');
                break;
            case "shapeMarginBorR":
                nowSize = changedVal;
                var lineBox = iSelected.closest('.zm-component-shape-main');
                var svg = lineBox.find('svg');
                if (iSelected.find('path').attr('d').indexOf('L') > 0) {//竖线
                    iSelected.css('margin-right', (nowSize) + 'px');
                    lineBox.width(parseInt(svg.eq(0).width()) + nowSize + parseInt(svg.eq(1).width()))
                } else {
                    iSelected.css('margin-bottom', (nowSize) + 'px');
                    lineBox.height(parseInt(svg.eq(0).height()) + nowSize + parseInt(svg.eq(1).height()))
                }
                break;
            case "pageNumMargin"://oldZhang
                nowSize = changedVal;
                if (nowSize > maxSize) {
                    nowSize = maxSize;
                    value.val(maxSize)
                }
                iSelected.css({'margin': '0 ' + nowSize + 'px'});
                var parent = iSelected.parent();
                if (parent.attr('alignStyle') == 'center') {
                    parent.css({left: parent.siblings('.zm-component-carousel-box').width() / 2 - parent.width() / 2})
                }
                break;
            case "pageGroupMargin"://oldZhang
                nowSize = changedVal;
                if (nowSize > maxSize) {
                    nowSize = maxSize;
                    value.val(maxSize)
                }
                switch (iSelected.attr('alignStyle')) {
                    case 'left':
                        iSelected.css({left: nowSize});
                        break;
                    case 'center':
                        iSelected.css({bottom: nowSize});
                        break;
                    case 'right':
                        iSelected.css({left: 'auto', right: nowSize});
                        break;
                    default:
                        break
                }
                break;
            case "stroke-width":
                nowSize = changedVal;
                if (nowSize > maxSize) {
                    nowSize = maxSize;
                    value.val(maxSize)
                }
                if (iSelected.parent().parent().is('.zm-component-shape-line')) {
                    zmEditor.component.shape.changeStrokeW(iSelected, nowSize);
                } else {
                    if(iSelected.attr('data-view')){
                        iSelected[0].setAttribute('viewBox',
                            (parseFloat(viewBox[0])-nowSize/10)+' '+ (parseFloat(viewBox[1])-nowSize/10)+' '
                            +(parseFloat(viewBox[2])+nowSize/5)+' '+(parseFloat(viewBox[3])+nowSize/5)
                        )
                    }
                }
                break;
            case "newsNum":
                var newsCont = iSelected.find('.zm-component-news-content');
                var oldNewsNum = newsCont.children().length;
                nowSize = changedVal;
                if (nowSize > maxSize) {
                    nowSize = maxSize;
                    value.val(maxSize)
                }
                newsCont.attr('data-newsNum', nowSize);
                if(iSelected.is('.zm-component-blog-main'))
                    zmEditor.component.blog.getNewsData(iSelected,oldNewsNum);
                else
                    zmEditor.component.news.getNewsData(iSelected,oldNewsNum);
                break;
            case "wordsLineHeight":
                // value.val(parseFloat(left*sDiff/wDiff+minSize).toFixed(1));
                // changedVal  = parseFloat(value.val());
                // temporary.css({'lineHeight': changedVal + "em",'height': changedVal + "em"});
                // if(!iSelected.find('.zm-component-news-box').hasClass('flexColumn')){
                //     iSelected.find('.zm-component-news-newsPic')
                //         .height(zmEditor.component.news.newsPicHeight(iSelected));
                // }
                nowSize = changedVal;
                // if (nowSize > maxSize/10) {
                //     nowSize = maxSize/10;
                // }
                    temporary.css({"line-height": nowSize+"em","height":nowSize+"em"});
                break;
            case "wordsLineNum":
                nowSize = changedVal;
                var wordsLineH = parseInt(temporary.css('lineHeight'));
                temporary.css({"height":nowSize*wordsLineH + 'px','-webkit-line-clamp':nowSize});
                if(!iSelected.find('.zm-component-news-box').hasClass('flexColumn')){
                    iSelected.find('.zm-component-news-newsPic')
                        .height(zmEditor.component.news.newsPicHeight(iSelected));
                }
                break;
            case "optionCount":
                nowSize = changedVal;
                iSelected.attr('class',iSelected.attr('class').split('optionWidth')[0]+'optionWidth'+nowSize);
                break;
            case "searchBtnML":
                nowSize = changedVal;
                var searchContent = iSelected.closest('.zm-component-function-search-main');
                var origW = parseInt(searchContent.width());
                var origMl = isNaN(parseInt(iSelected.css('margin-left')))?0:parseInt(iSelected.css('margin-left'));
                iSelected.css('margin-left',nowSize);
                searchContent.width(origW+nowSize-origMl);
                break;
            default:
                var shadow = temporary.css("boxShadow");
                var shadowVal = zmEditor.component.setItems.getOpaCol({goal: temporary,type: "shadowC"});
                var shadowArr = shadow.split(" ");
                var l = shadowArr.length;
                var NowArr = [];
                var NowStr;
                for(i in shadowArr){
                    if(shadowArr[i].indexOf("px") != -1){
                        NowArr.push(shadowArr[i]);
                    }
                }
                switch(type){
                    case "shadowX":
                        var x = changedVal+"px";
                        if(l < 8){
                            NowStr = shadowArr[0]+shadowArr[1]+shadowArr[2]+" "+x+" "+NowArr[1]+" "+NowArr[2];
                        }else{
                            NowStr = shadowArr[0]+shadowArr[1]+shadowArr[2]+shadowArr[3]+" "+x+" "+NowArr[1]+" "+NowArr[2];
                        }
                        break;
                    case "shadowY":
                        var y = changedVal+"px";
                        if(l < 8){
                            NowStr = shadowArr[0]+shadowArr[1]+shadowArr[2]+" "+NowArr[0]+" "+y+" "+NowArr[2];
                        }else{
                            NowStr = shadowArr[0]+shadowArr[1]+shadowArr[2]+shadowArr[3]+" "+NowArr[0]+" "+y+" "+NowArr[2];
                        }
                        break;
                    case "shadowB":
                        var b = changedVal+"px";
                        if(l < 8){
                            NowStr = shadowArr[0]+shadowArr[1]+shadowArr[2]+" "+NowArr[0]+" "+NowArr[1]+" "+b;
                        }else{
                            NowStr = shadowArr[0]+shadowArr[1]+shadowArr[2]+shadowArr[3]+" "+NowArr[0]+" "+NowArr[1]+" "+b;
                        }
                        break;
                    case "shadowC":
                        shadowVal.opacity = Math.round(changedVal/10)/10;
                        zmEditor.component.setItems.setOpaCol({goal: option,type: "backgroundColor",value: shadowVal});
                        zmEditor.component.setItems.setOpaCol({goal: temporary,type: "shadowC",value: shadowVal,shadowXYBS: NowArr});
                        if(iSelected.length == 6){
                            zmEditor.component.setItems.setOpaCol({goal: iSelected,type: "backgroundColor",value: shadowVal});
                        }
                        break;
                    default:
                        console.log("还未配置的属性,change事件");
                        break;
                }
                temporary.css("boxShadow",NowStr);
                break;
        }
        var left = (changedVal - minSize) * wDiff / sDiff;
        child.css("left", left);//实时改变小圆点位置
        child_hover.css('width', left);
        zmEditor.action.save();
    });
    /********** 第三步 圆点 滑动事件 *********/
    child.on("mousedown",function(e){
        e.preventDefault();
        var startLeft = parseInt(child.css("left"));
        var height = parseInt(iSelected.css("height"));
        // var oldVal = parseInt(_this.find(".zm-edit-slider-val").val());
        var startX = e.clientX;
        if(option.length != 0){
            var _value = zmEditor.component.setItems.getOpaCol({goal:option,type:"backgroundColor"});
        }//liu
        var newISelected = zmEditor.component.setItems.strings.future(iSelected,{goal: _element});
        var temporary = newISelected ? newISelected : iSelected;
        switch(type){
            case "shadowX":
            case "shadowY":
            case "shadowB":
            case "shadowC":
                var shadow = temporary.css("boxShadow");
                break;
        }
        $(document).mousemove(function(e){
            var left = e.clientX-startX+startLeft;
            if(left >= 0 && left <= pWidth-eWidth){
                value.val(parseFloat(left*sDiff/wDiff+minSize).toFixed(toFixed));
                child.css({"left": left});
                child_hover.css('width',left);
                var changedVal = value.val();
                switch(type){
                    case "fontSize":
                        if(iSelected.hasClass('zm-edit-components-button')){
                            var borderW =parseInt(iSelected.css('borderWidth'))*2;
                            var btnW = parseInt(iSelected.css('width'));
                            var btnH = parseInt(iSelected.css('height'));
                            var fontSize = parseInt(iSelected.css('fontSize'));
                            if(btnH<=fontSize){
                                btnH=fontSize;
                            }
                            console.log(btnW,btnH,borderW)
                            // iSelected.css({'min-width':btnW+'px','height':'auto','width':'auto'});
                            iSelected.css({'line-height':btnH-borderW+'px','min-width':btnW+'px','height':'auto','width':'auto'});
                        }
                    case "width":
                    case "height":
                    case "borderWidth":
                    case "borderTopWidth":
                    case "borderBottomWidth":
                    case "letter-spacing":
                    case "marginBottom":
                        temporary.css(type,changedVal+"px");
                        if(iSelected.hasClass('zm-component-carousel-controlBtn')){
                            var boxHeight = iSelected.closest(".zm-component-carousel-main").height()/2;
                            iSelected.css({top:boxHeight-iSelected.height()/2});
                        }//改变字体大小同时改变左右按钮的上边距
                        if(iSelected.hasClass('zm-component-enter-inputBox')&&changedVal>20){
                            iSelected.find('i').css({'lineHeight':changedVal+'px'});
                        }
                        break;
                    case "color":
                    case "borderColor":
                    case "backgroundColor":
                    case "borderTopColor":
                    case "borderBottomColor":
                    case "fill":
                    case "stroke":
                        _value.opacity = Math.round(changedVal/10)/10;
                        zmEditor.component.setItems.setOpaCol({goal: option,type: "backgroundColor",value: _value});
                        zmEditor.component.setItems.setOpaCol({goal: temporary,type: type,value: _value});
                        break;
                    case "hoverColor":
                    case "hoverBorderColor":
                    case "hoverBackgroundColor":
                    case "hoverBorderTopColor":
                    case "hoverBorderBottomColor":
                    case "hoverFill":
                        var hovOpa = Math.round(changedVal/10)/10;
                        var hovStr = temporary.attr("data-type-"+type);
                        var Arr = [];
                        if(hovStr){
                            var hovArr = hovStr.split(",");
                            for(i in hovArr){
                                Arr.push((hovArr[i].match(/\d+/))[0]);
                            }
                        }else{
                            Arr = [0,0,0];
                        }

                        Str = 'rgba('+Arr[0]+","+Arr[1]+","+Arr[2]+","+hovOpa+")";
                        temporary.attr("data-type-"+type,Str);
                        option.css("backgroundColor",Str);
                        break;
                    case "hoverBorderTopWidth":
                    case "hoverBorderBottomWidth":
                        temporary.attr("data-type-"+type,changedVal);
                        break;
                    case "lineClamp":
                        var a=["zm-video-introduc1","zm-video-introduc2","zm-video-introduc3","zm-video-introduc4","zm-video-introduc5"];
                        temporary.removeClass("zm-video-introduc1 zm-video-introduc2 zm-video-introduc3 zm-video-introduc4 zm-video-introduc5");
                         temporary.addClass(a[changedVal-1]);
                        temporary.css("line-clamp",changedVal);
                        break;
                    case "scale":
                       temporary.css("width",changedVal* 40+"px");
                        temporary.css("height",changedVal* 40+"px");
                        // temporary.css("line-height",changedVal+"px");
                        // temporary.css("font-size",changedVal-24+"px");
                        value.val(parseFloat(left*sDiff/wDiff+minSize).toFixed(toFixed));
                            temporary.css({"width": changedVal*40+"px","height": changedVal*40+"px"});
                        break;
                    case "fontSpace":
                        value.val(parseFloat(left*sDiff/wDiff+minSize).toFixed(toFixed));
                        if(temporary.hasClass('zm-edit-components-button')){
                            temporary.css({"letterSpacing": changedVal+"em","padding-left":changedVal+"em"});
                            temporary.css({"minWidth":temporary.css('width')});
                        }
                        else{
                            temporary.css({"letterSpacing": changedVal+"em"});
                        }
                        break;
                    case "tbPadding":
                        iSelected.css({
                            "padding-top":changedVal+"px",
                            "padding-bottom":changedVal+"px"
                        });
                        break;
                    case "lrPadding":
                        iSelected.css({
                            "padding-left":changedVal+"px",
                            "padding-right":changedVal+"px"
                        });
                        break;
                    case "lineSpace":
                        // temporary.css("lineHeight", changedVal+parseInt(iSelected.css("font-size"))+"px");
                        value.val(parseFloat(left*sDiff/wDiff+minSize).toFixed(toFixed));
                        temporary.css({"lineHeight": changedVal+"em"});
                        break;
                    case "borderWidth_nav"://ye 3.15改动过后  设置mian层的整体宽度 设置mian层的整体宽度复用其他组件
                        nowSize = changedVal;
                        var borderWidth = changedVal+"px";
                        var data_a="data-"+iSelected.attr("data-"+iSelected[0].classList[4]);
                        // if(iSelected.attr("data-"+iSelected[0].classList[4])){zmEditor.globalMethod.nav.data.arrLike[data_a]["mian"]["sStyle"]["borderWidth"]=borderWidth+"px";
                        //     iSelected.css({"borderWidth":borderWidth,"borderStyle":zmEditor.globalMethod.nav.data.arrLike[data_a]["mian"]["sStyle"]["borderStyle"],"borderColor":zmEditor.globalMethod.nav.data.arrLike[data_a]["mian"]["sStyle"]["borderColor"]});
                        // }else{
                        //     iSelected.css({"borderWidth":borderWidth}); //这里兼容nav以外组件，需要设置什么样式以及添加什么样式，可自行设置、
                        // }


                        zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderTopWidth"]=borderWidth+"px";
                        zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["hHover"]["borderTopWidth"]=borderWidth+"px";

                        zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderBottomWidth"]=borderWidth+"px";
                        zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["hHover"]["borderBottomWidth"]=borderWidth+"px";

                        zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderLeftWidth"]=borderWidth+"px";
                        zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["hHover"]["borderLeftWidth"]=borderWidth+"px";

                        zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderRightWidth"]=borderWidth+"px";
                        zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["hHover"]["borderRightWidth"]=borderWidth+"px";

                        if(/vertical/.test(iSelected[0].classList[4])){
                            iSelected.children().children("li").css({"borderLeftWidth":borderWidth,"borderRightWidth":borderWidth,"borderStyle":zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderStyle"],"borderColor":zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderTopColor"],"lineHeight":li_height+"px"});
                            iSelected.children().children("li:eq(0)").css({"borderTopWidth":borderWidth,"borderLeftColor":zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderLeftColor"]})
                            iSelected.children().children("li").last().css({"borderBottomWidth":borderWidth,"borderRightColor":zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderRightColor"]});
                        }else{
                            var li_height=parseInt(zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["height"])-parseInt(borderWidth)*2;
                            zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["lineHeight"]=li_height+"px";
                            zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["hHover"]["lineHeight"]=li_height+"px";
                            zmEditor.globalMethod.nav.data.arrLike[data_a]["span"]["sStyle"]["borderTopWidth"]=borderWidth+"px";
                            zmEditor.globalMethod.nav.data.arrLike[data_a]["span"]["sStyle"]["borderBottomWidth"]=borderWidth+"px";
                            // iSelected.children().children("li").css({"lineHeight":li_height+"px"}); //
                            console.log(borderWidth);
                            console.log(iSelected);
                            iSelected.children().children("li").css({"borderTopWidth":borderWidth,"borderBottomWidth":
                            borderWidth,"borderStyle":zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderStyle"],
                                "borderColor":zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderTopColor"],"lineHeight":li_height+"px"});
                            // console.log(zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["lineHeight"]-borderWidth*2);
                            // console.log(zmEditor.globalMethod.nav.data.arrLike[data_a]["span"]["sStyle"]);
                            iSelected.children().children("span").css({"borderTopWidth":borderWidth, "borderBottomWidth":borderWidth,
                                "borderStyle":zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderStyle"],
                                "borderColor":zmEditor.globalMethod.nav.data.arrLike[data_a]["span"]["sStyle"]["borderTopColor"]});
                            // zmEditor.globalMethod.nav.refreshNav(iSelected);
                            iSelected.children().children("li:eq(0)").css({"borderLeftWidth":borderWidth,"borderLeftColor":zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderLeftColor"]})
                            iSelected.children().children("li").last().css({"borderRightWidth":borderWidth,"borderRightColor":zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderRightColor"]});
                            // if(iSelected.hasClass("zm_nav_general_cross_one"))iSelectedCross_one=true;
                            // if(iSelected.hasClass("zm_nav_general_vertical_three_one"))iSelectedCross_one=true;
                            // if(iSelectedCross_one){iSelected.css("box-sizing","border-box")};
                        }
                        break;
                    case "mian_Children_ChildrenSpan_width":// 3.15改动过后. 设置一级span的宽度
                        nowSize = changedVal;
                        console.log(3333);
                        var data_a="data-"+iSelected.attr("data-"+iSelected[0].classList[4]);
                        zmEditor.globalMethod.nav.data.arrLike[data_a]["mian"]["sStyle"]["width"]="";
                        iSelected.css("width","");
                        // if(nowSize>=1){
                        //     iSelected.children().children("span").css({"width":"100%","display":"block"});
                        // }
                        iSelected.children().children("span").css({"width":nowSize+"px"});//"backgroundColor":color+"",
                        // zmEditor.globalMethod.nav.OneType.span.width=nowSize+"px";
                        zmEditor.globalMethod.nav.data.arrLike[data_a]["span"]["sStyle"]["width"]=nowSize+"px";
                        console.log(zmEditor.globalMethod.nav.data.arrLike);
                        break;
                    case "mian_children_childrenLi_btw"://ye3.15改动过后. 设置一级li上边框的宽度
                        nowSize = changedVal;
                        var data_a="data-"+iSelected.attr("data-"+iSelected[0].classList[4]);
                        zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderTopWidth"]=nowSize+"px";
                        var li_height = zmEditor.globalMethod.nav.calculationLineheight(parseInt(zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["height"]),nowSize);
                        zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["lineHeight"]=li_height+"px";
                        iSelected.css("width","");
                        iSelected.children("ul").children("li").css({"borderTopWidth":nowSize+"px","lineHeight":li_height+"px"});//,"boxSizing":"content-box"
                        iSelected.children("ul").children("li").each(function(index,ele){
                            zmEditor.globalMethod.nav.initNavList.endHover($(this),"sStyle","hHover","mouseenter" + zmEditor.globalMethod.nav.data.arrLike[data_a].li.eventClass.mouseenter.color,
                                "mouseleave" + zmEditor.globalMethod.nav.data.arrLike[data_a].li.eventClass.mouseleave.color,data_a);
                        });
                        break;
                    case "mian_children_childrenLi_hover_btw"://ye 3.16  设置一级li上边框的hover宽度
                        nowSize = changedVal;
                        // zmEditor.globalMethod.nav.OneType.li.hover_borderTopWidth=nowSize;
                        var data_a="data-"+iSelected.attr("data-"+iSelected[0].classList[4]);
                        zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["hHover"]["borderTopWidth"]=nowSize+"px";
                        var li_height = zmEditor.globalMethod.nav.calculationLineheight(parseInt(zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["hHover"]["height"]),nowSize);
                        zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["hHover"]["lineHeight"]=li_height+"px";

                        iSelected.children("ul").children("li").each(function(index,ele){
                            zmEditor.globalMethod.nav.initNavList.endHover($(this),"sStyle","hHover","mouseenter" + zmEditor.globalMethod.nav.data.arrLike[data_a].li.eventClass.mouseenter.color,
                                "mouseleave" + zmEditor.globalMethod.nav.data.arrLike[data_a].li.eventClass.mouseleave.color,data_a);

                        });

                        break;
                    case "mian_children_childrenLi_bbw"://ye 3.16 设置一级l下上边框的宽度   mian_children_childrenLi_bbw
                        nowSize = changedVal;
                        var data_a="data-"+iSelected.attr("data-"+iSelected[0].classList[4]);
                        zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderBottomWidth"]=nowSize+"px";
                        var li_height = zmEditor.globalMethod.nav.calculationLineheight(parseInt(zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["height"]),parseInt(zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["hHover"]["borderTopWidth"]),nowSize);
                        zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["hHover"]["lineHeight"]=li_height+"px";
                        iSelected.css("width","");
                        console.log(zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["hHover"]["borderBottomWidth"]);
                        iSelected.children("ul").children("li").each(function(index,ele){
                            $(this).css({"borderBottomWidth":nowSize+"px","lineHeight":li_height+"px"});
                            zmEditor.globalMethod.nav.initNavList.endHover($(this),"sStyle","hHover","mouseenter" + zmEditor.globalMethod.nav.data.arrLike[data_a].li.eventClass.mouseenter.color,
                                "mouseleave" + zmEditor.globalMethod.nav.data.arrLike[data_a].li.eventClass.mouseleave.color,data_a);
                        });
                        break;
                    case "mian_children_childrenLi_hover_bbw"://ye  3.16设置一级l下上边框houver的宽度  mian_children_childrenLi_hover_bbw
                        nowSize = changedVal;
                        var data_a="data-"+iSelected.attr("data-"+iSelected[0].classList[4]);
                        var li_height = zmEditor.globalMethod.nav.calculationLineheight(parseInt(zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["height"]),parseInt(zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["hHover"]["borderTopWidth"]),nowSize);
                        zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["hHover"]["borderBottomWidth"]=nowSize+"px";
                        zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["hHover"]["lineHeight"]=li_height+"px";
                        iSelected.children("ul").children("li").each(function(index,ele){
                            zmEditor.globalMethod.nav.initNavList.endHover($(this),"sStyle","hHover","mouseenter" + zmEditor.globalMethod.nav.data.arrLike[data_a].li.eventClass.mouseenter.color,
                                "mouseleave" + zmEditor.globalMethod.nav.data.arrLike[data_a].li.eventClass.mouseleave.color,data_a);
                        });
                        break;
                    case "mian_children_childrenLi_bw"://ye  3.16  设置一级li边框的宽度  mian_children_childrenLi_bw
                        nowSize = changedVal;
                        var data_a="data-"+iSelected.attr("data-"+iSelected[0].classList[4]);
                        zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderTopWidth"]=nowSize+"px";
                        zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderBottomWidth"]=nowSize+"px";
                        zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderLeftWidth"]=nowSize+"px";
                        zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderRightWidth"]=nowSize+"px";
                        zmEditor.globalMethod.nav.data.arrLike[data_a]["mian"]["sStyle"]["width"]="";
                        iSelected.css("width","");
                        // var li_height = zmEditor.globalMethod.nav.calculationLineheight(parseInt(zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["height"]),nowSize,nowSize);
                        var li_height = zmEditor.globalMethod.nav.calculationLineheight(parseFloat(zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["height"]),nowSize,nowSize);
                        zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["lineHeight"]=li_height+"px";
                        iSelected.children("ul").children("li").each(function(index,ele){
                            $(this).css({"borderTopWidth":nowSize,"borderBottomWidth":nowSize,"borderLeftWidth":nowSize,"borderRightWidth":nowSize,
                                "borderStyle":zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderStyle"],
                                // "borderTopColor":zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderTopColor"],
                                // "borderBottomColor":zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderBottomColor"],
                                // "borderLeftColor":zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderLeftColor"],
                                // "borderRightColor":zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderRightColor"],
                                "lineHeight":li_height+"px",
                                })
                            zmEditor.globalMethod.nav.initNavList.endHover($(this),"sStyle","hHover","mouseenter" + zmEditor.globalMethod.nav.data.arrLike[data_a].li.eventClass.mouseenter.color,
                                "mouseleave" + zmEditor.globalMethod.nav.data.arrLike[data_a].li.eventClass.mouseleave.color,data_a);
                        });
                        console.log("ppp");
                        break;
                    case "mian_children_childrenLi_hover_bw"://ye 3.16
                        nowSize = changedVal;
                        var data_a="data-"+iSelected.attr("data-"+iSelected[0].classList[4]);
                        zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["hHover"]["borderTopWidth"]=nowSize+"px";
                        zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["hHover"]["borderBottomWidth"]=nowSize+"px";
                        zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["hHover"]["borderLeftWidth"]=nowSize+"px";
                        zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["hHover"]["borderRightWidth"]=nowSize+"px";
                        // zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["hHover"]["borderWidth"]=nowSize+"px";
                        zmEditor.globalMethod.nav.data.arrLike[data_a]["mian"]["sStyle"]["width"]="";
                        iSelected.css("width","");
                        var li_height = zmEditor.globalMethod.nav.calculationLineheight(parseInt(zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["height"]),nowSize,nowSize);
                        zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["hHover"]["lineHeight"]=li_height+"px";
                        iSelected.children("ul").children("li").each(function(index,ele){
                            // $(this).css({"boxSizing":"content-box"})
                            zmEditor.globalMethod.nav.initNavList.endHover($(this),"sStyle","hHover","mouseenter" + zmEditor.globalMethod.nav.data.arrLike[data_a].li.eventClass.mouseenter.color,
                                "mouseleave" + zmEditor.globalMethod.nav.data.arrLike[data_a].li.eventClass.mouseleave.color,data_a);
                        });
                        break;
                    case "mian_children_childrenSpan_height"://ye通过改变为
                        var data_a="data-"+iSelected.attr("data-"+iSelected[0].classList[4]);//上边框边框改变间距.
                        nowSize = changedVal;
                        zmEditor.globalMethod.nav.data.arrLike[data_a]["span"]["sStyle"]["height"]=nowSize+"px";
                        if(nowSize>=1){
                            iSelected.children().children("span").css({"width":"100%","display":"block"});
                        }
                        iSelected.children().children("span").css({"height":nowSize*1+"px"});
                        break;
                    case "background_opacity"://ye添加
                        nowSize = changedVal/100;
                        var data_a="data-"+iSelected.attr("data-"+iSelected[0].classList[4]);
                        zmEditor.globalMethod.nav.data.arrLike[data_a]["mian"]["sStyle"]["opacity"]=nowSize;
                        iSelected.css("opacity",nowSize);
                        console.log(zmEditor.globalMethod.nav.data.arrLike);
                        break;
                    case "opacity_style"://ye添加   //3.14添加 .
                        nowSize = changedVal;
                        var colortype= zmEditor.globalMethod.nav.componentsliderRbga(_this.find(".zm-colorPicker-switch").css("backgroundColor"),changedVal/100);
                    if(nowSize<=0.9){
                         _this.find(".zm-colorPicker-switch").css("background-color","");
                    }else{
                        _this.find(".zm-colorPicker-switch").css("backgroundColor",zmEditor.globalMethod.nav.componentsliderRbga(colortype,changedVal/100));
                    }
                        zmEditor.globalMethod.nav.componentslider(colortype,enevtObj.class,iSelected);
                        break;
                    //改动过后
                    case "navNode1Style":
                        iSelected.children("ul").children("li").css("width",changedVal+"px");
                        break;
                    case "picCutTime"://oldZhang    2017-3-14 14:26:25
                        value.val(parseFloat(left*sDiff/wDiff+minSize).toFixed(1));
                        changedVal  = parseFloat(value.val());
                        var slideSpeedArgs = iSelected.find('.zm-component-carousel-box').attr('data-slide-args');
                        iSelected.find(".zm-component-carousel-box")
                            .attr('data-slide-args','speed='+ ( changedVal * 1000) + '&autoScroll' + slideSpeedArgs.split('autoScroll')[1]);
                        iSelected.find(".zm-component-carousel-box").boxSlider('option','speed',changedVal*1000);
                        break;
                    case "picStayTime"://oldZhang    2017-3-15 13:48:12
                        nowSize = changedVal;
                        var slideTimeoutArgs = iSelected.find('.zm-component-carousel-box').attr('data-slide-args');
                        iSelected.find(".zm-component-carousel-box")
                            .attr('data-slide-args',slideTimeoutArgs.split('timeout=')[0]+'timeout='+ ( nowSize * 1000) + '&effect' + slideTimeoutArgs.split('effect')[1]);
                        break;
                    case "marginLength"://oldZhang    2017-3-14 14:26:25
                        nowSize = changedVal;

                        iSelected.closest(".zm-component-carousel-main")
                            .find(".zm-component-carousel-controlBtn.left").css('left',nowSize+'px');
                        iSelected.closest(".zm-component-carousel-main")
                            .find(".zm-component-carousel-controlBtn.right").css('right',nowSize+'px');
                        break;
                    case "borderSetting"://oldZhang
                        nowSize = changedVal;
                        var borderStyle = iSelected.css("borderStyle");
                        var borderColor = iSelected.css("borderColor");
                        if(nowSize>maxSize){
                            nowSize = maxSize;
                            value.val(maxSize)
                        }
                        if( borderStyle=="none"||borderStyle == undefined  ){
                            borderStyle="solid"
                        }
                        if( borderColor==""||borderColor == undefined ){
                            borderColor="transparent"
                        }
                        if(iSelected.length>1){
                            iSelected.css({"border":nowSize/2+"px "+borderStyle+" "+borderColor});
                        }else {
                            iSelected.css({"border":nowSize+"px "+borderStyle+" "+borderColor});
                            iSelected.css({"border-width":nowSize+"px","border-style":borderStyle,"border-color":borderColor});
                        }
                        break;
                    case "pageNumMargin"://oldZhang
                        nowSize = changedVal;
                        if(nowSize>maxSize){
                            nowSize = maxSize;
                            value.val(maxSize)
                        }
                        iSelected.css({'margin':'0 '+nowSize+'px'});
                        var _parent = iSelected.parent();
                        if(_parent.attr('alignStyle')=='center'){
                            _parent.css({left:_parent.siblings('.zm-component-carousel-box').width()/2 - _parent.width()/2})
                        }
                        break;
                    case "shapeMarginBorR"://oldzhang
                        nowSize = changedVal;
                        var lineBox = iSelected.closest('.zm-component-shape-main');
                        var svg = lineBox.find('svg');
                        if (iSelected.find('path').attr('d').indexOf('L') > 0) {//竖线
                            iSelected.css('margin-right', (nowSize) + 'px');
                            lineBox.width(parseInt(svg.eq(0).width()) + nowSize + parseInt(svg.eq(1).width()))
                        } else {
                            iSelected.css('margin-bottom', (nowSize) + 'px');
                            lineBox.height(parseInt(svg.eq(0).height()) + nowSize + parseInt(svg.eq(1).height()))
                        }
                        break;
                    case "pageGroupMargin"://oldZhang
                        nowSize = changedVal;
                        if(nowSize>maxSize){
                            nowSize = maxSize;
                            value.val(maxSize)
                        }
                        switch (iSelected.attr('alignStyle')){
                            case 'left':
                                iSelected.css({left:nowSize});
                                break;
                            case 'center':
                                iSelected.css({bottom:nowSize});
                                break;
                            case 'right':
                                iSelected.css({left:'auto',right:nowSize});
                                break;
                            default:
                                break
                        }
                        break;
                    case "stroke-width"://oldZhang
                        nowSize = changedVal;
                        if(nowSize>maxSize){
                            nowSize = maxSize;
                            value.val(maxSize)
                        }
                        if(iSelected.parent().parent().is('.zm-component-shape-line')){
                            zmEditor.component.shape.changeStrokeW(iSelected,nowSize);
                        }else {
                            iSelected.css('stroke-Width',nowSize);
                            if(iSelected.attr('data-view')){
                                iSelected[0].setAttribute('viewBox',
                                    (parseFloat(viewBox[0])-nowSize/10)+' '+ (parseFloat(viewBox[1])-nowSize/10)+' '
                                    +(parseFloat(viewBox[2])+nowSize/5)+' '+(parseFloat(viewBox[3])+nowSize/5)
                                )
                            }
                        }
                        break;
                    case "newsNum"://oldZhang
                        var newsCont = iSelected.find('.zm-component-news-content');
                        var oldNewsNum = newsCont.children().length;
                        nowSize = changedVal;
                        if(nowSize>maxSize){
                            nowSize = maxSize;
                            value.val(maxSize)
                        }
                        newsCont.attr('data-newsNum',nowSize);
                        if(iSelected.is('.zm-component-blog-main'))
                            zmEditor.component.blog.getNewsData(iSelected,oldNewsNum);
                        else
                            zmEditor.component.news.getNewsData(iSelected,oldNewsNum);
                        break;
                    case "wordsLineHeight":
                        value.val(parseFloat(left*sDiff/wDiff+minSize).toFixed(1));
                        changedVal  = parseFloat(value.val());
                        temporary.css({'lineHeight': changedVal + "em",'height': changedVal + "em"});
                        if(!iSelected.find('.zm-component-news-box').hasClass('flexColumn')){
                            iSelected.find('.zm-component-news-newsPic')
                                .height(zmEditor.component.news.newsPicHeight(iSelected));
                        }
                        break;
                    case "wordsLineNum":
                        nowSize = changedVal;
                        var wordsLineH = parseInt(temporary.css('lineHeight'));
                        temporary.css({"height":changedVal*wordsLineH + 'px','-webkit-line-clamp':nowSize});
                        if(!iSelected.find('.zm-component-news-box').hasClass('flexColumn')){
                            iSelected.find('.zm-component-news-newsPic')
                                .height(zmEditor.component.news.newsPicHeight(iSelected));
                        }
                        break;
                    case "optionCount":
                        nowSize = changedVal;
                        iSelected.attr('class',iSelected.attr('class').split('optionWidth')[0]+'optionWidth'+nowSize);
                        break;
                    case "searchBtnML":
                        nowSize = changedVal;
                        var searchContent = iSelected.closest('.zm-component-function-search-main');
                        var origW = parseInt(searchContent.width());
                        var origMl = isNaN(parseInt(iSelected.css('margin-left')))?0:parseInt(iSelected.css('margin-left'));
                        iSelected.css('margin-left',nowSize);
                        searchContent.width(origW+nowSize-origMl);
                        break;
                    default:
                        var str = shadow.split(" ");
                        var l = str.length;
                        var arr = [];
                        var nowAttr;
                        for(var i=0;i<str.length;i++){
                            if(str[i].indexOf("px") != -1){
                                arr.push(str[i]);
                            }
                        }
                        switch(type){
                            case "shadowX":
                                var x = changedVal+"px";
                                if(l < 8){
                                    nowAttr = str[0]+str[1]+str[2]+" "+x+" "+arr[1]+" "+arr[2];

                                }else{
                                    nowAttr = str[0]+str[1]+str[2]+str[3]+" "+x+" "+arr[1]+" "+arr[2];
                                }
                                break;
                            case "shadowY":
                                var y = changedVal+"px";
                                if(str.length < 8){
                                    nowAttr = str[0]+str[1]+str[2]+" "+arr[0]+" "+y+" "+arr[2];


                                }else{
                                    nowAttr = str[0]+str[1]+str[2]+str[3]+" "+arr[0]+" "+y+" "+arr[2];
                                }
                                break;
                            case "shadowB":
                                var b = changedVal+"px";
                                if(str.length < 8){
                                    nowAttr = str[0]+str[1]+str[2]+" "+arr[0]+" "+arr[1]+" "+b;

                                }else{
                                    nowAttr = str[0]+str[1]+str[2]+str[3]+" "+arr[0]+" "+arr[1]+" "+b;
                                }
                                break;
                            case "shadowC":
                                _value.opacity = Math.round(changedVal/10)/10;
                                zmEditor.component.setItems.setOpaCol({goal:option,type:"backgroundColor",value:_value});
                                zmEditor.component.setItems.setOpaCol({goal:temporary,type:type,value:_value,shadowXYBS:arr});
                                if(iSelected.length== 6){
                                    zmEditor.component.setItems.setOpaCol({goal:iSelected,type:"backgroundColor",value:_value});
                                }
                                break;
                            default:
                                console.log("不正确的属性");
                                break;
                        }
                        temporary.css("boxShadow",nowAttr);
                        break;
                }
            }
            if(temporary.is(".zm-video-btn")){
                var b = temporary.height();
                temporary.css("line-height",b+"px")
            }
        });
        $(document).mouseup(function(){
            $(document).off('mouseup').off('mousemove');
            zmEditor.action.save();
        });
    });
};
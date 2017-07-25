/**
 * Created by pianYiLiangministrator on 2017/3/2.
 */
/*拖动组件添加至页面*/

$(document).on("mousedown",".zm-components-detail-content fieldset > ul > li",function(e){
    if(!zmManage.flag.isSort) {
        e.preventDefault(e);//阻止firefox默认事件：图片拖动2017-3-10
        var _this = $(this);
        var type = _this.closest(".zm-components-detail-term").attr("data-zm-component-type") || "";
        var isSort = $('.zm-components-detail').data('isSort') || false;
        var thisUl = _this.closest("ul");
        var downX = e.pageX;
        var downY = e.pageY;
        var width = _this.outerWidth();
        var height = _this.outerHeight();
        var sLeft = _this.offset().left;
        var sTop = _this.offset().top;
        var iHolder;
        if (!isSort) {
            _this.before(_this.prop("outerHTML"));//复制元素替代
        }
        else {
            // var iStyle = 'line-height:' + height + 'px;height:' + height + 'px;width:' + width + 'px;';
            // iHolder = $('<li class="zm-drag-box-tempLi" style="' + iStyle + '">移动到这里</li>');
            // _this.after(iHolder)
            iHolder = _this.clone();
            iHolder.css("opacity",0.3);
            _this.after(iHolder);

        }
        _this.addClass('zm-component-fieldset-curLi');
        _this.css({"position": "fixed", "left": sLeft + 5, "top": sTop + 5, 'z-index': 2});
        $(document).off("mousemove").mousemove(function (e) {
            e.preventDefault(e);
            var moveX = e.pageX;
            var moveY = e.pageY;
            //拖拽排序
            if (isSort) {
                thisUl.children("li").not(_this).not(iHolder).each(function () {
                    var other = $(this);
                    var offset = other.offset();
                    var oLeft = offset.left;
                    var oRight = offset.left + other.outerWidth();
                    var oTop = offset.top;
                    var oBottom = offset.top + other.outerHeight();
                    if (moveX > oLeft && moveX < oRight && moveY > oTop && moveY < oBottom) {
                        if (moveY > (oBottom - oTop) / 2 + oTop) {
                            iHolder.insertAfter(other)
                        } else {
                            iHolder.insertBefore(other)
                        }
                    }
                })
            }
            _this.css({"left": moveX - downX + sLeft + 5, "top": moveY - downY + sTop + 5});
        });
        $(document).mouseup(function (e) {
            $(document).off('mouseup').off('mousemove');
            var upX = e.pageX;
            var upY = e.pageY;
            //正常组件拖拽
            if (!isSort) {
                //判断组件是否拖动出一定范围
                if (upX > 100 && upX < 500) {
                    _this.remove();//移除未被拖入的临时组件
                }
                else {
                    $(".zm-row").each(function () {
                        var obj = $(this);
                        var offset = obj.offset();
                        var oTop = offset.top;
                        var oBottom = offset.top + obj.outerHeight();
                        if (upY > oTop && upY < oBottom) {
                            //递归调用autoFindContainer方法遍历相同层级的容器
                            //然后在调用findContainerInSameLevel方法比那里同一层级中的容器
                            zmEditor.component.autoFindContainer(
                                zmEditor.component.findContainerInSameLevel(
                                    {nowContainer: obj, lastContainer: obj}, _this, upX, upY
                                ), _this, upX, upY
                            );
                            return false;
                        }
                    });
                    _this.remove();//移除临时控件
                    $('.zm-components-detail').fadeOut();
                }
            }
            //组件拖拽排序
            else {
                zmManage.flag.isSort = true;
                var p = iHolder.offset();
                _this.animate({"left": p.left, "top": p.top}, 300, function () {
                    _this.css({"position": "static", "left": 0, "top": 0});
                    iHolder.replaceWith(_this);
                    zmManage.flag.isSort = false;
                });
            }
        })
    }
});
/*页面已有组件拖动*/
$(document).on("mousedown",".zm-component-movable .zm-component-main",function(e){
    // if(!$(this).hasClass('zm-component-function-search-main')){
    //     e.preventDefault(e);//阻止firefox默认事件：图片拖动2017-3-10
    // }
    //ay:轮播、tab容器问题特殊处理
    if(zmEditor.component.isSetting(e)){return false;}
    e.stopPropagation();
    $('.zm-component-settingPanel').remove();
    var _this = $(this).closest(".zm-component-box1");
    var optionArea = _this.children('.zm-component-box2').children('.zm-component-main-temp');
    var oldRow = _this.closest(".zm-row");
    var rowLeft=parseInt(oldRow.css('marginLeft'));
    var rowTop=parseInt(oldRow.offset().top);
    var origin = oldRow.offset();
    var rowHeight = oldRow.outerHeight();
    //var scrollTop = $('.zm-all').scrollTop();
    var originX = origin.left;
    var originY = origin.top;
    var rowWidth=parseInt(oldRow.css('width'));
    var pianYiLiang=5;//辅助线允许偏移量
    var thisWidth = _this.outerWidth();
    var thisHeight = _this.outerHeight();
    var isFullScreen=_this.attr("data-fullScreen");
    var thisRowId = _this.closest(".zm-row").attr("data-zm-pageId");
    var downX = e.pageX;
    var downY = e.pageY;
    var downLeft = _this.offset().left;
    var downTop = _this.offset().top;
    var left = parseInt(_this.css("left"));
    var top = parseInt(_this.css("top"));
    //显示组件操作区域
    if(!_this.hasClass('zm-component-nowEdit')){
        zmEditor.component.showOption(_this);
    }
    var hasMove = false;
    $(document).off("mousemove").mousemove(function (e) {
        e.preventDefault(e);
        var moveX = e.pageX;
        var moveY = e.pageY;
        if(Math.abs(moveX-downX)>2||Math.abs(moveY-downY)>2){
            zmEditor.action.getInitState();
            $('#zm-component-edit').hide();
            optionArea.find('.zm-component-resize').hide();
            optionArea.find('.zm-component-location').show();
            optionArea.addClass('zm-component-main-tempBorder');
            hasMove=true;
        }
        var l=0,t=top+e.pageY-downY;
        //判断组件是否设置全屏属性
        if(isFullScreen!=undefined&&isFullScreen=="true") {l = -rowLeft;}
        else{l = left+e.pageX-downX;}
        _this.css({"left": l,"top": t});
        //组件是否拖拽至容器顶部
        // if(_this.offset().top<=120) {_this.find('.zm-component-edit').css('top',0);}
        // else{_this.find('.zm-component-edit').css({left:0,top:'-64px'})}
        // if(_this.offset().top>120) {_this.find('.zm-component-edit').css({left:0,top:'-64px'})}
        var thisOffLeft = _this.offset().left;
        var thisOffTop = _this.offset().top;
        // console.log('offset:'+thisOffLeft,thisOffTop);
        //拖拽辅助线
        var obj = zmEditor.component.dragHelpLine(_this,thisOffLeft,thisOffTop,l,t,originX,originY,pianYiLiang,thisWidth,thisHeight,rowWidth,rowHeight,rowTop);
        //设置组件坐标区显示
        zmEditor.component.setLocation(_this,obj.left-originX,obj.top-originY);
        //设置组件
        // console.log(obj.left-originX,obj.top-originY);
        // console.log(obj.left,obj.top);
        _this.offset({"left": obj.left,"top": obj.top});

    });
    $(document).mouseup(function(e) {
        $(document).off('mouseup').off('mousemove');
        // if(_this.offset().top>120) {_this.find('.zm-component-edit').css({left:0,top:'-64px'})}
        var upX = e.pageX;
        var upY = e.pageY;
        if(Math.abs(upX-downX)>5||Math.abs(upY-downY)>5){
            $(".zm-row").each(function(){
                var obj = $(this);
                var oOffset = obj.offset();
                var oTop = oOffset.top;
                var oBottom = oOffset.top+obj.outerHeight();
                if(upY>oTop&&upY<oBottom) {
                    //console.log(_this.offset().left,_this.offset().top,oLeft,oTop);
                    // 递归调用autoFindContainer方法遍历相同层级的容器
                    // 然后在调用findContainerInSameLevel方法比那里同一层级中的容器
                    zmEditor.component.autoFindContainer(
                        zmEditor.component.findContainerInSameLevel(
                            {nowContainer:obj,lastContainer:obj},_this, upX, upY
                        ),_this, upX, upY
                    );
                    return false;
                }
            })
        }
        if(hasMove){
            zmEditor.component.showOption(_this);
            optionArea.find('.zm-component-resize').show();
            optionArea.find('.zm-component-location').hide();
            optionArea.removeClass('zm-component-main-tempBorder')
        }

        $('.zm-xDragHelpLine,.zm-yDragHelpLine').hide();//隐藏辅助线
    })
});
/*组件旋转*/
$(document).on("mousedown",".zm-component-movable .zm-component-main .zm-component-rotate",function(e){
    e.stopPropagation();e.preventDefault(e);
    var editBtn = $('#zm-component-edit');
    var _this = $(this),box = _this.closest('.zm-component-main'),temp = box.siblings('.zm-component-main-temp');
    var point = box.find('.zm-component-resize span');
    var rHeight = parseInt(_this.height());
    var ex = e.clientX,
        downY = e.clientY;
    var matrix;
    if(box.css('transform') == 'none'){
        matrix =  ["1", " 0", " 0", " 1", " 0", " 0"];
    }else {
        matrix = box.css('transform').split('(')[1].split(')')[0].split(',');
    }
    var deg =  Math.round(Math.atan2(matrix[1],matrix[0]) * (180 / Math.PI));
    var width = parseInt(box.width()),height = parseInt(box.height());
    var ox = parseInt(box.offset().left) + width/2,
        oy = parseInt(box.offset().top) + height/2;
    var nowDeg = Math.asin(Math.abs(downY-oy)/Math.sqrt((ex-ox)*(ex-ox)+(downY-oy)*(downY-oy)))/Math.PI*180;
    var newDeg,secDeg;
    $(document).mousemove(function (e) {
        editBtn.hide();
        var moveX = e.clientX,moveY = e.clientY;
        if(ex<ox&&downY<oy){//2左上
            newDeg = deg + Math.atan2(- moveY + oy,- moveX + ox)*(180/Math.PI) - nowDeg;
        }
        if(ex>=ox&&downY<oy){//1右上
            newDeg = deg + Math.atan2(+ moveX - ox,- moveY + oy)*(180/Math.PI) + nowDeg - 90;
        }
        if(ex<ox&&downY>=oy){//3左下
            newDeg = deg + Math.atan2(- moveX + ox ,+ moveY - oy)*(180/Math.PI) + nowDeg - 90;
        }
        if(ex>=ox&&downY>=oy){//4右下
            newDeg = deg + Math.atan2(+ moveY - oy ,+ moveX - ox)*(180/Math.PI) - nowDeg;
        }
        newDeg = newDeg%360;
        box.css({'transform': 'rotate('+ newDeg +'deg)'}).attr('data-zm-rotate',newDeg);
        temp.width(Math.abs(Math.cos(newDeg*Math.PI/180)*box.outerWidth())
                  +Math.abs(Math.sin(newDeg*Math.PI/180)*box.outerHeight()) - parseInt(point.width())/2)
            .height(Math.abs(Math.sin(newDeg*Math.PI/180)*box.outerWidth())
                   +Math.abs(Math.cos(newDeg*Math.PI/180)*box.outerHeight()) - parseInt(point.width())/2)
            .offset({'left':box.offset().left,'top':box.offset().top})
            .find('.zm-component-location-r')
            .html(Math.round(newDeg<0?360+newDeg:newDeg)+'°');
        secDeg = newDeg<0?360+newDeg:newDeg;
        if(1<secDeg&&secDeg<=90+Math.round(Math.atan2(rHeight,(rHeight+width))*180/Math.PI)){
            temp.children('div').addClass('topper');
        }else {
            temp.children('div').removeClass('topper');
        }
        return 0
    });
    $(document).mouseup(function() {
        zmEditor.component.showOption(box.closest('.zm-component-box1'));
        $(document).off('mouseup').off('mousemove');
        var outDeg = newDeg<0?360+newDeg:newDeg;
        if(337.5<outDeg||outDeg<=22.5){
            point.eq(0).css('cursor','nw-resize').end()
                .eq(1).css('cursor','n-resize').end()
                .eq(2).css('cursor','ne-resize').end()
                .eq(3).css('cursor','e-resize').end()
                .eq(4).css('cursor','se-resize').end()
                .eq(5).css('cursor','s-resize').end()
                .eq(6).css('cursor','sw-resize').end()
                .eq(7).css('cursor','w-resize').end();
        }
        else if(22.5<outDeg&&outDeg<=67.5){
            point.eq(0).css('cursor','n-resize').end()
                .eq(1).css('cursor','ne-resize').end()
                .eq(2).css('cursor','e-resize').end()
                .eq(3).css('cursor','se-resize').end()
                .eq(4).css('cursor','s-resize').end()
                .eq(5).css('cursor','sw-resize').end()
                .eq(6).css('cursor','w-resize').end()
                .eq(7).css('cursor','nw-resize').end();
        }
        else if(67.5<outDeg&&outDeg<=112.5){
            point.eq(0).css('cursor','ne-resize').end()
                .eq(1).css('cursor','e-resize').end()
                .eq(2).css('cursor','se-resize').end()
                .eq(3).css('cursor','s-resize').end()
                .eq(4).css('cursor','sw-resize').end()
                .eq(5).css('cursor','w-resize').end()
                .eq(6).css('cursor','nw-resize').end()
                .eq(7).css('cursor','n-resize').end();
        }
        else if(112.5<outDeg&&outDeg<=157.5){
            point.eq(0).css('cursor','e-resize').end()
                .eq(1).css('cursor','se-resize').end()
                .eq(2).css('cursor','s-resize').end()
                .eq(3).css('cursor','sw-resize').end()
                .eq(4).css('cursor','w-resize').end()
                .eq(5).css('cursor','nw-resize').end()
                .eq(6).css('cursor','n-resize').end()
                .eq(7).css('cursor','ne-resize').end();
        }
        else if(157.5<outDeg&&outDeg<=202.5){
            point.eq(0).css('cursor','se-resize').end()
                .eq(1).css('cursor','s-resize').end()
                .eq(2).css('cursor','sw-resize').end()
                .eq(3).css('cursor','w-resize').end()
                .eq(4).css('cursor','nw-resize').end()
                .eq(5).css('cursor','n-resize').end()
                .eq(6).css('cursor','ne-resize').end()
                .eq(7).css('cursor','e-resize').end();
        }
        else if(202.5<outDeg&&outDeg<=247.5){
            point.eq(0).css('cursor','s-resize').end()
                .eq(1).css('cursor','sw-resize').end()
                .eq(2).css('cursor','w-resize').end()
                .eq(3).css('cursor','nw-resize').end()
                .eq(4).css('cursor','n-resize').end()
                .eq(5).css('cursor','ne-resize').end()
                .eq(6).css('cursor','e-resize').end()
                .eq(7).css('cursor','se-resize').end();
        }
        else if(247.5<outDeg&&outDeg<=292.5){
            point.eq(0).css('cursor','sw-resize').end()
                .eq(1).css('cursor','w-resize').end()
                .eq(2).css('cursor','nw-resize').end()
                .eq(3).css('cursor','n-resize').end()
                .eq(4).css('cursor','ne-resize').end()
                .eq(5).css('cursor','e-resize').end()
                .eq(6).css('cursor','se-resize').end()
                .eq(7).css('cursor','s-resize').end();
        }
        else if(292.5<outDeg&&outDeg<=337.5){
            point.eq(0).css('cursor','w-resize').end()
                .eq(1).css('cursor','nw-resize').end()
                .eq(2).css('cursor','n-resize').end()
                .eq(3).css('cursor','ne-resize').end()
                .eq(4).css('cursor','e-resize').end()
                .eq(5).css('cursor','se-resize').end()
                .eq(6).css('cursor','s-resize').end()
                .eq(7).css('cursor','sw-resize').end();
        }
    });
});
/*改变编辑框大小*/
$(document).on("mousedown",".zm-component-resize>span",function(e){
    e.preventDefault(e);
    e.stopPropagation();
    $('.zm-component-settingPanel').remove();
    $('#zm-component-edit').hide();
    var _this = $(this);
    var thisBox = _this.closest(".zm-component-box1");
    var origin = $('.zm-row:eq(0)').offset();
    var scrollTop = $('.zm-all').scrollTop();
    var originX = origin.left;
    var originY = origin.top-scrollTop;
    // var boxLeft = thisBox.offset().left;
    // var boxTop = thisBox.offset().top;
    var type =thisBox.attr("data-zm-component-type");
    var index =_this.index();
    var component = _this.closest(".zm-component-box1").find(".zm-component-main").eq(0);
    var temp = component.siblings('.zm-component-main-temp');
    var width = component.outerWidth(),
        height = component.outerHeight(),
        origL = component.offset().left,
        origT = component.offset().top,
        scale = width/height;
    var left = parseInt(thisBox.css("left"));
    var top = parseInt(thisBox.css("top"));
    var downX = e.clientX;
    var downY = e.clientY;
    var matrix;
    if(component.css('transform') == 'none'){
        matrix =  ["1", " 0", " 0", " 1", " 0", " 0"];
    }else {
        matrix = component.css('transform').split('(')[1].split(')')[0].split(',');
    }
    var deg = Math.atan2(matrix[1],matrix[0]) * (180 / Math.PI),
        cos = Math.abs(Math.cos(deg*Math.PI/180)),
        sin = Math.abs(Math.sin(deg*Math.PI/180));
    // $('.zm-component-edit').hide();
    zmEditor.action.getInitState();//保存操作之前组件的初始状态

    switch(type){
        case "product":
            var row = component.is(".zm-edit-components-product-row");
            var col = component.is(".zm-edit-components-product-col");
            var title = component.find(".zm-edit-components-product-title");
            var img = component.find(".zm-edit-components-product-image");
            var width_t = parseInt(title.css("width"));
            var width_i = parseInt(img.css("width"));
            break;
        case "audio":
            break;
    }

    $(document).mousemove(function (e) {
        var moveX=e.clientX;
        var moveY=e.clientY;
        var boxLeft = thisBox.offset().left;
        var boxTop = thisBox.offset().top;
        var w,h,l,t,x,y;
        if(parseInt(deg)!=0){
            switch (index){
                case 0:
                    if(deg>0&&deg<=90){
                        h = height - moveY + downY;
                        w = h * width/height;
                        l = origL - cos*(w - width);
                        t = origT - sin*(w - width) - cos*(downY - moveY);
                    }
                    if(deg>90&&deg<=180){
                        w = width + moveX - downX;
                        h = w / scale;
                        l = origL;
                        t = origT - sin*(moveX - downX);
                    }
                    if(deg>-180&&deg<=-90){
                        h = height + moveY - downY;
                        w = h * scale;
                        l = origL - sin*(moveY - downY);
                        t = origT;
                    }
                    if(deg>-90&&deg<=0){
                        w = width - moveX + downX ;
                        h = w / scale;
                        l = origL - cos*(downX - moveX) - sin*(h-height);
                        t = origT - cos*(h-height);
                    }
                    break;
                case 1:
                    w = width;
                    if(deg>0&&deg<=45){
                        h = height - moveY + downY;
                        l = origL ;
                        t = origT - cos*(downY - moveY);
                    }
                    if(deg>45&&deg<=90){
                        h = height + moveX - downX;
                        l = origL ;
                        t = origT - cos*(moveX - downX);
                    }
                    if(deg>90&&deg<=135){
                        h = height + moveX - downX;
                        l = origL;
                        t = origT;
                    }
                    if(deg>135&&deg<=180){
                        h = height + moveY - downY;
                        l = origL;
                        t = origT;
                    }
                    if(deg>-180&&deg<=-135){
                        h = height + moveY - downY;
                        l = origL - sin*(moveY - downY);
                        t = origT;
                    }
                    if(deg>-135&&deg<=-90){
                        h = height - moveX + downX;
                        l = origL - sin*(downX - moveX);
                        t = origT;
                    }
                    if(deg>-90&&deg<=-45){
                        h = height - moveX + downX ;
                        l = origL - sin*(downX - moveX);
                        t = origT - cos*(downX - moveX);
                    }
                    if(deg>-45&&deg<=0){
                        h = height - moveY + downY ;
                        l = origL - sin*(downY - moveY);
                        t = origT - cos*(downY - moveY);
                    }
                    break;
                case 2:
                    if(deg>0&&deg<=90){
                        w = width + moveX - downX;
                        h = w / scale;
                        l = origL;
                        t = origT - cos*(h - height);
                    }
                    if(deg>90&&deg<=180){
                        h = height + moveY - downY;
                        w = h * scale;
                        l = origL - cos*(w - width);
                        t = origT;
                    }
                    if(deg>-180&&deg<=-90){
                        w = width - moveX + downX ;
                        h = w / scale;
                        l = origL - cos*(w - width) - sin*(h-height);
                        t = origT - sin*(downX - moveX);
                    }
                    if(deg>-90&&deg<=0){
                        h = height - moveY + downY;
                        w = h * scale;
                        l = origL - sin*(downY - moveY);
                        t = origT - sin*(w - width) - cos*(downY - moveY);
                    }
                    break;
                case 3:
                    h = height;
                    if(deg>0&&deg<=45){
                        w = width + moveX - downX;
                        l = origL;
                        t = origT;
                    }
                    if(deg>45&&deg<=90){
                        w = width + moveY - downY;
                        l = origL;
                        t = origT;
                    }
                    if(deg>90&&deg<=135){
                        w = width + moveY - downY;
                        l = origL - cos*(moveY - downY);
                        t = origT;
                    }
                    if(deg>135&&deg<=180){
                        w = width + downX - moveX;
                        l = origL - cos*(downX - moveX);
                        t = origT;
                    }
                    if(deg>-180&&deg<=-135){
                        w = width + downX - moveX ;
                        l = origL - cos*(downX - moveX);
                        t = origT - sin*(downX - moveX);
                    }
                    if(deg>-135&&deg<=-90){
                        w = width - moveY + downY ;
                        l = origL - cos*(downY - moveY);
                        t = origT - sin*(downY - moveY);
                    }
                    if(deg>-90&&deg<=-45){
                        w = width - moveY + downY ;
                        l = origL ;
                        t = origT - sin*(downY - moveY);
                    }
                    if(deg>-45&&deg<=0){
                        w = width + moveX - downX ;
                        l = origL ;
                        t = origT - sin*(moveX - downX);
                    }
                    break;
                case 4:
                    if(deg>0&&deg<=90){
                        h = height + moveY - downY;
                        w = h * scale;
                        l = origL - sin*(moveY - downY);
                        t = origT;
                    }
                    if(deg>90&&deg<=180){
                        w = width - moveX + downX ;
                        h = w / scale;
                        l = origL - cos*(downX - moveX) - sin*(h-height);
                        t = origT - cos*(h - height);
                    }
                    if(deg>-180&&deg<=-90){
                        h = height - moveY + downY;
                        w = h * scale;
                        l = origL - cos*(w - width);
                        t = origT - sin*(w - width)-cos*(downY - moveY);
                    }
                    if(deg>-90&&deg<=0){
                        w = width + moveX - downX;
                        h = w / scale;
                        l = origL;
                        t = origT - sin*(moveX - downX);
                    }
                    break;
                case 5:
                    w = width;
                    if(deg>0&&deg<=45){
                        h = height + moveY - downY;
                        l = origL - sin*(moveY - downY);
                        t = origT;
                    }
                    if(deg>45&&deg<=90){
                        h = height - moveX + downX;
                        l = origL - sin*(downX - moveX);
                        t = origT;
                    }
                    if(deg>90&&deg<=135){
                        h = height - moveX + downX;
                        l = origL - sin*(downX - moveX);
                        t = origT - cos*(downX - moveX);
                    }
                    if(deg>135&&deg<=180){
                        h = height - moveY + downY;
                        l = origL - sin*(downY - moveY);
                        t = origT - cos*(downY - moveY);
                    }
                    if(deg>-180&&deg<=-135){
                        h = height - moveY + downY;
                        l = origL;
                        t = origT-cos*(downY - moveY);
                    }
                    if(deg>-135&&deg<=-90){
                        h = height + moveX - downX;
                        l = origL;
                        t = origT-cos*(moveX - downX);
                    }
                    if(deg>-90&&deg<=-45){
                        h = height + moveX - downX;
                        l = origL;
                        t = origT;
                    }
                    if(deg>-45&&deg<=0){
                        h = height + moveY - downY;
                        l = origL;
                        t = origT;
                    }
                    break;
                case 6:
                    if(deg>0&&deg<=90){
                        w = width - moveX + downX ;
                        h = w / scale;
                        l = origL - cos*(w - width) - sin*(h-height);
                        t = origT - sin*(downX - moveX);
                    }
                    if(deg>90&&deg<=180){
                        h = height - moveY + downY;
                        w = h * scale;
                        l = origL - sin*(downY - moveY);
                        t = origT - sin*(w - width)-cos*(downY - moveY);
                    }
                    if(deg>-180&&deg<=-90){
                        w = width + moveX - downX;
                        h = w / scale;
                        l = origL;
                        t = origT - cos*(h - height);
                    }
                    if(deg>-90&&deg<=0){
                        h = height + moveY - downY;
                        w = h * scale;
                        l = origL - cos*(w - width);
                        t = origT;
                    }
                    break;
                case 7:
                    h = height;
                    if(deg>0&&deg<=45){
                        w = width - moveX + downX ;
                        l = origL - cos*(downX - moveX);
                        t = origT - sin*(downX - moveX);
                    }
                    if(deg>45&&deg<=90){
                        w = width - moveY + downY ;
                        l = origL - cos*(downY - moveY);
                        t = origT - sin*(downY - moveY);
                    }
                    if(deg>90&&deg<=135){
                        w = width - moveY + downY ;
                        l = origL;
                        t = origT - sin*(downY - moveY);
                    }
                    if(deg>135&&deg<=180){
                        w = width + moveX - downX ;
                        l = origL;
                        t = origT - sin*(moveX - downX);
                    }
                    if(deg>-180&&deg<=-135){
                        w = width + moveX - downX;
                        l = origL;
                        t = origT;
                    }
                    if(deg>-135&&deg<=-90){
                        w = width + moveY - downY;
                        l = origL;
                        t = origT;
                    }
                    if(deg>-90&&deg<=-45){
                        w = width + moveY - downY;
                        l = origL - cos*(moveY - downY);
                        t = origT;
                    }
                    if(deg>-45&&deg<=0){
                        w = width - moveX + downX;
                        l = origL - cos*(downX - moveX);
                        t = origT;
                    }
                    break;
            }
            component.css({'width': w,'height': h}).offset({'left':l,'top':t});
            temp.width(Math.abs(cos*parseInt(component.outerWidth())) + Math.abs(sin*parseInt(component.outerHeight())))
                .height(Math.abs(sin*parseInt(component.outerWidth())) + Math.abs(cos*parseInt(component.outerHeight())))
                .offset({'left':component.offset().left,'top':component.offset().top});
        }
        else {
            switch(index){
                case 0:
                    l = left+moveX-downX;
                    t = top +moveY-downY;
                    w=width+downX-moveX;
                    h=height+downY-moveY;
                    component.css({"width": w,"height":h});
                    thisBox.css({"left":l,"top":t});
                    break;
                case 1:
                    t = top + moveY - downY;
                    h = height + downY - moveY;
                    component.css({"height":h});
                    thisBox.css({"top":t});
                    break;
                case 2:
                    t = top +moveY-downY;
                    w=width+moveX-downX;
                    h=height+downY-moveY;
                    component.css({"width": w,"height":h});
                    thisBox.css({"top":t});
                    break;
                case 3:
                    w =width+moveX - downX;
                    if(row){
                        x = Math.round(moveX - downX);
                        img.css("width",width_i+x);
                    }//liu
                    component.css({"width": w});
                    break;
                case 4:
                    w =width+moveX - downX;
                    h = height+moveY-downY;
                    component.css({"width": w,"height":h});
                    break;
                case 5:
                    h = height+moveY-downY;
                    component.css({"height":h});
                    break;
                case 6:
                    l = left+moveX-downX;
                    w=width+downX-moveX;
                    h=height+moveY-downY;
                    component.css({"width": w,"height":h});
                    thisBox.css({"left":l});
                    break;
                case 7:
                    l = left+moveX-downX;
                    w = width+downX-moveX;
                    if(row){
                        x = Math.round(downX - moveX);
                        title.css("width",width_t+x);
                    }//liu
                    component.css({"width": w});
                    thisBox.css({"left":l});
                    break;
                default:
                    break;
            }
            switch(type){
                case "product":
                    if(row){
                        switch(index){
                            case 0:
                                console.log("01");
                                break;
                            case 1:
	                            console.log("02");
                                break;
                            case 2:
	                            console.log("03");
                                break;
                            case 3:
	                            console.log("04");
                                break;
                            case 4:
	                            console.log("05");
                                break;
                            case 5:
	                            console.log("06");
                                break;
                            case 6:
	                            console.log("07");
                                break;
                            case 7:
	                            console.log("08");
                                break;

                        }
                    }
                    if(col){
                        switch(index){
                            case 0:
	                            console.log("001");
                                break;
                            case 1:
	                            console.log("002");
                                break;
                            case 2:
	                            console.log("003");
                                break;
                            case 3:
	                            console.log("004");
                                break;
                            case 4:
	                            console.log("005");
                                break;
                            case 5:
	                            console.log("006");
                                break;
                            case 6:
	                            console.log("007");
                                break;
                            case 7:
	                            console.log("008");
                                break;
                        }
                    }
                    break;
            }
          if(component.find('.zm-component-rotate').length>0){
              temp.width(parseInt(component.outerWidth())).height(parseInt(component.outerHeight()));
          }
        }
        //设置组件坐标区显示
        // zmEditor.component.setLocation(thisBox,l,t,w,h);
        zmEditor.component.setLocation(thisBox,boxLeft-originX,boxTop-originY,w,h);
        //after
        debugger;
        switch (type){
            case "text":
                component.css({'width':w,'min-height':h,'height':'auto'});
                component.children().css({'width':w,'min-height':h,'height':'auto'});
                zmEditor.component.setLocation(thisBox,boxLeft-originX,boxTop-originY,w,thisBox.css('height'));
                break;
            case "btn":
                // component.css({'min-width':w,'min-height':h,'height':'auto','width':'auto'});
                // component.children().css({'min-width':w,'min-height':h,'lineHeight':h+'px','height':'auto','width':'auto'});
                // zmEditor.component.setLocation(thisBox,boxLeft-originX,boxTop-originY,thisBox.css('width'),thisBox.css('height'));
                // console.log(w,h);
                // console.log(thisBox.css('width'),thisBox.css('height'))
                var fontSize = parseInt(component.children().css('fontSize'));
                if(h<=fontSize){
                    h=fontSize;
                }
                component.css({'min-width':w,'min-height':h,'height':'auto','width':'auto'});
                component.children().css({'min-width':w,'min-height':h,'line-height':h+'px','height':'auto','width':'auto'});
                zmEditor.component.setLocation(thisBox,boxLeft-originX,boxTop-originY,thisBox.css('width'),h);
                break;
            case "nav":
                zmEditor.globalMethod.nav.main_child_child_style(w,h,component);//ye添加.
                break;
            case "banner":
                zmEditor.component.banner.dragDrop(w,h,component);//ye添加.
            case "shape":
                component.find('.zm-component-shape-line').length>0?
                    zmEditor.component.shape.lineSpanStyle(component,h,w):
                    zmEditor.component.shape.svgScale(width,height,origL,origT,downX,downY,moveX,moveY,index);
                break;
            case "img":
                var imgMain = component.find('.zm-component-img-content');
                var picScale = parseFloat(imgMain.attr('data-picScale'));
                if(imgMain.attr('isOriScale') == 'true'){
                    zmEditor.component.shape.publicFun.sameScaleResize(width,height,origL,origT,downX,downY,moveX,moveY,index,picScale);
                }
                break;
            case "news":
            case "blog":
                var newsCont = component.find('.zm-component-news-content'),
                    newsPic = newsCont.find('.zm-component-news-newsPic');
                if (newsCont.attr('picOriScale')) {
                    zmEditor.component.news.newsPicOriScale(newsCont,newsPic)
                } else {
                    component.removeClass('newsPicVertC newsPicHorzC')
                }
                break;
            case "carousel":
                var pageNumGroupWidth =
                        parseInt(component.find('.zm-component-carousel-pointGroup').css('width')),
                    carouselControlHeight =
                        parseInt(component.find('.zm-component-carousel-controlBtn:eq(0)').css('height'));
                if(h||w){
                        // thisBox.css({"height":h+"px","width":w+"px"});
                        component.attr({'data-origWidth':w,'data-origHeight':h})
                                .find('.zm-component-carousel-pointGroup').css('left',w/2-pageNumGroupWidth/2).end()
                                 .find('.zm-component-carousel-controlBtn').css('top',h/2-carouselControlHeight/2)
                    }
                component.find(".zm-component-carousel-box").removeClass('maxWidth1200');
                break;
            case "function":
                 var contentType = component.find('.zm-component-function-content').attr('data-functionType');
                 switch (contentType){
                     case "search":
                         zmEditor.component.function.searchMethod.resizeSearchBar(component,w,h);
                         break;
                     case "shopping":
                         zmEditor.component.function.shoppingMethod.resizeShoppingCart(component,w,h);
                         break;
                     case "file":
                         zmEditor.component.function.fileMethod.resizeFile(component,w,h);
                         break;
                     case "share":
                         zmEditor.component.function.shareMethod.resizeShare(component,w,h);
                         break;
                     default:
                         zmEditor.component.function.registrationMethod.resizeRegistration(component,contentType,w,h);
                         break;
                 }
                 break;
            default:
                break;
        }
    });
    $(document).mouseup(function() {
        if(type == "product"){
            if(component.hasClass("zm-product-goods")){
                if(component.find(".zm-edit-components-product-wrap").attr("data-type-ratio") == "original"){
                    ImgScale(component.find(".zm-edit-components-product-image"));
                }
            }
        }
        $(document).off('mouseup').off('mousemove');
        zmEditor.component.showOption(thisBox);
        zmEditor.action.save();
    });
});
//点击组件盒子显示组件操作按钮
$(document).on("mousedown",".zm-editor .zm-row .zm-component-main",function(e){

});
/*编辑区编辑模式or拖动模式*/
$(document).on("dblclick",".zm-component-editor",function(e){
    e.preventDefault();
    var _this = $(this);
    var type=_this.attr("data-zm-component-type");
    if(type=="text"){
        var obj = _this.find(".zm-component-main:eq(0)").children();
        _this.removeClass("zm-component-movable").addClass("zm-component-editable");
        obj.attr("contenteditable",true).focus();
        obj.select();
    }
});
$(document).on("blur",".zm-component-editor",function(){
    var _this =$(this);
    var type=_this.attr("data-zm-component-type");
    if(type=="text"){
        _this.addClass("zm-component-movable").removeClass("zm-component-editable");
        _this.find(".zm-component-main").attr("contenteditable",false);
    }
});

//2017.4.7注释。。
// $(document).on("mousedown",".zm-component-box2",function(){
//     $(".zm-component-resize,.zm-component-edit,.zm-component-carousel-picTip").stop().fadeOut();
//     $(".zm-component-box2-isEdit").removeClass("zm-component-box2-isEdit")
//     $(this).addClass("zm-component-box2-isEdit").find(".zm-component-resize,.zm-component-edit,.zm-component-carousel-picTip").stop().fadeIn();
// });

/*改变网页宽度方法*/
$(document).on("mousedown",".zm-editor-ruler-x-switch-box",function(e){
    e.preventDefault();
    var _this=$(this);
    $('#zm-component-edit').hide();
    var left = parseInt($(".zm-row:eq(0)").offset().left);
    var width = parseInt($(".zm-editor-ruler-x-width").html());
    var startX = e.clientX;
    $(document).mousemove(function (e) {
        var w = width+e.clientX - startX;
        if(w<1401&&w>899){
            _this.css({"left": w+left});
            _this.find(".zm-editor-ruler-x-width").html(w+"px")
        }
    });
    $(document).mouseup(function() {
        $(document).off('mouseup').off('mousemove');
        var width = parseInt($(".zm-editor-ruler-x-width").html());
        $('.zm-yStaticHelpLineBox').css({width:width});
        zmEditor.setRuler(width);
        zmEditor.component.showOption(zmEditor.component.nowBox1())
    });
});
/*改变zm-row高度*/
$(document).on("mousedown",".zm-row-resize",function(e){
    e.preventDefault()
    $('#zm-component-edit').hide();
    var thisRow = $(this).parent();
    var height = thisRow.height();
    var startY = e.clientY;
    console.log(height);
    $(document).mousemove(function (e) {
        thisRow.css({
            "height": (e.clientY - startY + height )
        });
    });
    $(document).mouseup(function() {
        $(document).off('mouseup').off('mousemove');
        zmEditor.component.showOption(zmEditor.component.nowBox1())
    });
});
/*按f11提示消息*/
$(".zm-editor-prompt-btn").click(function(){
    $(".zm-prompt-box").fadeOut(500,function(){
        $(this).remove()
    })
});

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
* 点击带有提示信息的标签隐藏提示信息
* */
/*   鼠标滑过提示效果   */
/*   为元素添加data-title类名  添加 data-title="需提示的文字" */
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
// zmBind('click','.zm-components-detail-term-anchor>span',function(){
//    var _this = $(this);
//    var anchorCur = 'zm-components-detail-term-anchorCur';
//    _this.addClass(anchorCur).siblings().removeClass(anchorCur);
//     var type = _this.attr('data-zm-anchor');
//    _this.closest('.zm-components-detail-term-anchorBox').prev().mCustomScrollbar('scrollTo','#'+type);
// });
$(document).on('mousedown','.zm-row-full',function(e){
    //移除设置窗口
    $('.zm-component-settingPanel').remove();
    /*移除组件编辑标示*/
    $(".zm-component-edit").hide();
    $(".zm-component-nowEdit").find('.zm-component-resize,.zm-component-rotate,.zm-component-carousel-picTip').hide();
    $(".zm-component-nowEdit").removeClass('zm-component-nowEdit');
    /**/
    var fullRow = $(this);
    /*隐藏其他zm-row-resize，显示当前的zm-row-resize*/
    $('.zm-row-resize').hide();
    fullRow.find('.zm-row-resize').show();
    /**/
    var fullRowW = fullRow.outerWidth();
    var left = e.pageX;
    var top = e.pageY+$('.zm-all').scrollTop()-48;
    /*其他移除，当前添加class*/
    $('.zm-row-full').removeClass('zm-row-nowEdit');
    fullRow.addClass('zm-row-nowEdit');
    /**/
    /*其他移除，当前添加边框*/
    $('.zm-row-edit-temp').remove();
    fullRow.append('<div class="zm-row-edit-temp" style="position:absolute;top:0;left:0;width:100%;height:100%;border:3px dashed deepskyblue"></div>');
    /**/
    var rowEdit = $('.zm-row-edit');
    if(left>fullRowW-240){
        left=left-240;
    }
    rowEdit.attr('style','').offset({'left':left,'top':top}).show();
})
$(document).on('mousedown','.zm-row-edit',function(e){
    e.stopPropagation()
})
$(document).on("mousedown",function(e){
    var target = $(e.target);
    // if(target.closest('.zm-component-box').length ==0){
    //     if(target.closest('.zm-row-full').length ==1){
    //         $('.zm-row-full').removeClass('zm-row-nowEdit')
    //         var fullRow = target.closest('.zm-row-full');
    //         fullRow.addClass('zm-row-nowEdit');
    //         $('.zm-row-edit-temp').remove();
    //         fullRow.append('<div class="zm-row-edit-temp" style="position:absolute;top:0;left:0;width:100%;height:100%;border:3px dashed deepskyblue"></div>');
    //         var rowEdit = $('.zm-row-edit');
    //         rowEdit.offset({'left':e.pageX,'top':e.pageY});
    //         rowEdit.show();
    //     }
    //     else{
    //         if(target.closest('.zm-row-edit').length ==0){
    //             $('.zm-row-full').removeClass('zm-row-nowEdit');
    //             $('.zm-row-edit').hide()
    //         }
    //
    //     }
    // }
    //颜色选择器之外点击
    if(target.closest(".zm-colorPicker-more").length == 0&&target.closest(".zm-colorPicker-switch").length == 0){
        $(".zm-colorPicker-more").hide();
    }
    if(target.closest(".zm-dialog-son").length==0){
        $(".zm-dialog-son").remove();
    }

});

$('.zm-components-detail-close').on('mousedown',function(e){
    e.stopPropagation();
    console.log("haha")
})
/**
 * Created by Administrator on 2017/1/6.
 */
var zmEditor={
    arr:{
        actionList:[],//修改动作
        changedComponentsList:[],//修改的控件列表
        componentsList:[],//组件列表
        templateList:[],//模板列表
        pageList:[],
        componentTypes:{}//组件type名称
    },
    //全局字符串
    str:{
        component:{
            /*组件容器html（在拖动元素添加至页面的时候用到）*/
            box1:'<div class="zm-component-box1 zm-component-editor zm-component-movable">'
            +'<div class="zm-component-box2">'
                +'<div class="zm-component-main-temp">'
                //ay：将按钮设置区域移动至全局，
                    // +'<div class="zm-component-edit">'
                    //     +'<button class="zm-component-edit-open zm-tooltip" onclick="zmEditor.component.style(this)" data-zm-title="样式"><i class="fa fa-pencil"></i> </button>'
                    //     +'<button class="zm-component-edit-open zm-tooltip" onclick="zmEditor.component.setting(this)" data-zm-title="设置"><i class="fa fa-gear"></i> </button>'
                    //     +'<button class=" zm-tooltip" onclick="zmEditor.component.options.delete(this)" data-zm-title="删除"><i class="fa fa-trash-o"></i> </button>'
                    // +'</div>'
                    +'<div class="zm-component-location">'
                        +'<span>x:</span><span class="zm-component-location-x"></span> '
                        +'<span> , y:</span><span class="zm-component-location-y"></span>'
                        +'<span> , w:</span><span class="zm-component-location-w"></span>'
                        +'<span> , h:</span><span class="zm-component-location-h"></span>'
                    +'</div>'
                    +'<div class="zm-component-resize">'
                        +'<span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>'
                    +'</div>'
                +'</div>'
                +'<div class="zm-component-main zm-component-main-text">'
                    +'</div>'
            +'</div></div>',
            rotate:'<div class="zm-component-rotate"><span class="fa  fa-rotate-left"></span></div>',
            resize: '<div class="zm-component-resize">'
            +'<span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>'
            +'</div>',
            rotateVal:'<span> , r:</span><span class="zm-component-location-r"></span>',
            //组件操作标签（在界面初始化的时候用到，给每个组件append）
            box2:'<div class="zm-component-edit">'
                    +'<button class="zm-component-edit-open zm-tooltip" onclick="zmEditor.component.style(this)" data-zm-title="样式"><i class="fa fa-pencil"></i> </button>'
                    +'<button class="zm-component-edit-open zm-tooltip" onclick="zmEditor.component.setting(this)" data-zm-title="设置"><i class="fa fa-gear"></i> </button>'
                    +'<button class=" zm-tooltip" onclick="zmEditor.component.options.delete(this)" data-zm-title="删除"><i class="fa fa-trash-o"></i> </button>'
                +'</div>'
            +'<div class="zm-component-location">'
            +'<span>x:</span><span class="zm-component-location-x"></span> '
            +'<span> , y:</span><span class="zm-component-location-y"></span>'
            +'<span> , w:</span><span class="zm-component-location-w"></span>'
            +'<span> , h:</span><span class="zm-component-location-h"></span>'
            +'</div>'
            +'<div class="zm-component-resize">'
            +'<span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>'
            +'</div>',
            mainT: '<div class="zm-component-main-temp">'
            +'<div class="zm-component-edit">'
            +'<button class="zm-component-edit-open zm-tooltip" onclick="zmEditor.component.style(this)" data-zm-title="样式"><i class="fa fa-pencil"></i> </button>'
            +'<button class="zm-component-edit-open zm-tooltip" onclick="zmEditor.component.setting(this)" data-zm-title="设置"><i class="fa fa-gear"></i> </button>'
            +'<button class=" zm-tooltip" onclick="zmEditor.component.options.delete(this)" data-zm-title="删除"><i class="fa fa-trash-o"></i> </button>'
            +'</div>'
            +'<div class="zm-component-location">'
            +'<span>x:</span><span class="zm-component-location-x"></span> '
            +'<span> , y:</span><span class="zm-component-location-y"></span>'
            +'<span> , w:</span><span class="zm-component-location-w"></span>'
            +'<span> , h:</span><span class="zm-component-location-h"></span>'
            +'</div>'
            +'<div class="zm-component-resize">'
            +'<span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>'
            +'</div>'
            +'</div>',
            edit:'<div id="zm-component-edit" class="zm-component-edit zmAnimate zmBounceIn">'+
            '<button class="zm-component-edit-open zm-tooltip" onclick="zmEditor.component.style(this)" data-zm-title="样式"><i class="fa fa-pencil"></i> </button>'+
            '<button class="zm-component-edit-open zm-tooltip" onclick="zmEditor.component.setting(this)" data-zm-title="设置"><i class="fa fa-gear"></i> </button>'+
            '<button class=" zm-tooltip" onclick="zmEditor.component.options.delete(this)" data-zm-title="删除"><i class="fa fa-trash-o"></i> </button>'+
            '</div>'
        },
        row:{
            line:'<div class="zm-row-line"></div>',
            resize:'<div class="zm-row-resize"><span class="fa fa-arrows-v"></span></div>',
            type:'',
            html:'<div class="zm-row" style="width:1200px;" data-zm-pageid="">'
            +'<div class="zm-row-type"><span>header(public)</span></div>'
            +'<div class="zm-row-resize"><span class="fa fa-arrows-v"></span></div>'
            +'</div>'
        }
    },
    //全局扩展属性方法
    globalMethod:{//ye写  2016/3/27
      lowerStr:function (str){ //作用,把驼峰命名方式的css属性名改为以短横杠命名方式的属性名.
      var a=/[A-Z]/g,b;
       if(a.test(str)){
        b=lowerStrSon(str);
        if(a.test(b)){
            lowerStr(b);
        }else{
            return b;
        }
      }
       function lowerStrSon(str){
        return str.replace(/[A-Z]/g,function(martch,offset,str){
            return "-"+martch.toLowerCase();
        });
       }
       },
        getCurrentStyle:function (obj,attr){//ye  2017/2/23
            if(obj&&obj.currentStyle){
                return obj.currentStyle[attr];
            }else {
                return getComputedStyle(obj,null)[attr];
            }
        },
        array:function(n){//ye  2017/5/4
          return Array.prototype.slice.call(this,n||0);
        },
        parseInt:function(str){
            return Number(str.replace(/[a-zA-Z]+/gi,""));
        },
        initialize_color_html_callback : function (string,string1){//ye 2017/2/23.
            var b="",e;
            e=$('<div class="zm-edit-text-color">'
                +'<div><span class="zm-edit-text-title" style="width:70px;vertical-align: middle;text-align: center;"></span>'//<br>这层div原先是label标签，给替换了。出错容易点
                +'<div class="zm-edit-slider" id="zm-edit-text-opacity" style="display: inline-block;padding: 0px;">'
                +'<span class="zm-edit-slider-parent" style="width : 100px;" ><span class="zm-edit-slider-child"></span><span class="zm-edit-slider-child-hover" style="width: 59px;"></span> </span>'
                + '<input type="text" class="zm-edit-slider-val" maxlength="3" value="100" style="background-color: #ececec">'
                +'<i style="margin-left: 8px;">%</i>'
                + '</div>'
                +'<div class="zm-colorPicker" data-zm-color-type="'+string1+'" style="top: 15px;right: 0px">'
                +'<span class="zm-colorPicker-switch" ></span></div></div>'
                +'</div>');
            string.length==8?e.find(".zm-edit-text-title").css("width",69+"px"):e.find(".zm-edit-text-title").css("width",70+"px");
            if(string.length>6){
                for(var m=0;m<string.length;m++){
                    if(m==4) {
                        b=b+"<br/>"+string[m]
                    }else{
                        b=b+string[m]
                    }
                }
                string=b;
            }
            e.find(".zm-edit-text-title").html(string)
            e.find("input").hover(function(){
            $(this).css("background-color","#dbefed");
            },function(){
            $(this).css("background-color","#ececec");
            });
            return  e;
        },
        initialize_radius_html_callback:function (){//ye 2016/2/23
           return $('<div style="margin-top: 22px;">'
               +'<span class="zm-edit-text-title">四周弧度(°)</span>'
               +'<div class="zm-edit-border-radius-box" style=" margin: 35px 0 45px 0;">'
               +'<input class="zm-edit-radius-val" data-zm-radius="tl" maxlength="2">'
               +'<input class="zm-edit-radius-val" data-zm-radius="tr" maxlength="2">'
               +'<input class="zm-edit-radius-val" data-zm-radius="br" maxlength="2">'
               +'<input class="zm-edit-radius-val" data-zm-radius="bl" maxlength="2">'
               +'<div class="zm-edit-border-radius "style="position: relative">'
               +'<div></div>'
               +'<div></div>'
               +'<div></div>'
               +'<div></div>'
               +'</div>'
               +'</div>'
               +'</div>');
                } ,
        initialize_slider_html_callback:function (string) {//ye 2016/2/23
            var b = "", e;
            if (string.length > 6) {
                for (var m = 0; m < string.length; m++) {
                    if (m == 4) {
                        b = b + "<br>" + string[m]
                    } else {
                        b = b + string[m]
                    }
                }
                string = b;
            }
            // if(string=="间隔线宽度"){debugger}
            e = $('<div class="zm-edit-slider ss" id="zm-edit-text-opacity" style="margin-right: 5px;">'
                + '<span class="zm-edit-text-title" style="width:70px;vertical-align: middle;text-align: center"><i style="font-size: 12px"> (像素) </i><br>' + string + '</span>'//<br>
                + '<span class="zm-edit-slider-parent" style="width:200px;" ><span class="zm-edit-slider-child" style="width:14px;"></span><span class="zm-edit-slider-child-hover" style="width: 59px;"></span></span>'
                + '<input type="text" class="zm-edit-slider-val" maxlength="2" style="background-color: #ececec;">'
                + '</div>');
            e.find("input").hover(function () {
                $(this).css("background-color", "#dbefed");
            }, function () {
                $(this).css("background-color", "#ececec");
            });
            return e
        },
        main_child_childall_border_style_callback :function (){//ye 2016/2/23
        return $('<div style="position:relative;">'
            +'<span class="zm-edit-text-title" style="margin-top: 20px;">线条类型</span>'
            +'<div class="zm-edit-border-style" style="width:216px;min-height: 30px;;border:1px solid #b9b9b9;margin-top: 15px;left: 75px;position:absolute;top: 0px;border-radius: 5px;z-index: 1;background-color: #fff;">'
            +'<i style="border: 7px solid #666666;border-left: 4px solid transparent;border-right: 4px solid transparent;border-bottom: 5px solid transparent;position: absolute;top:11px;right: 15px;z-index:2;"></i>'
            +'<span style="border:1px solid  #000; width: 168px;height: 0px;display:none;margin-top:13px;"></span>'//实线
            +'<span style="border:3px double #000; width: 168px;height: 0px;display:none;margin-top:13px;"></span>'//双线
            +'<span style="border:1px dotted #000; width: 168px;height: 0px;display:none;margin-top:13px;"></span>'//点状
            +'<span style="border:1px dashed #000; width: 168px;height: 0px;display:none;margin-top:13px;"></span>'//虚线
            +'</div>'
            +'<div class="zm-edit-border-styleclone" style="width:216px;min-height: 80px;;border:1px solid #b9b9b9;margin-top: 15px;left: 75px;position:absolute;top: 0px;border-radius: 5px;z-index: 1;background-color: #fff;box-shadow:1px 1px 3px #00c3b0, -1px -1px 3px #00c3b0;display: none">'
            +'<i style="border: 7px solid #666666;border-left: 4px solid transparent;border-right: 4px solid transparent;border-bottom: 5px solid transparent;position: absolute;top:11px;right: 15px;z-index:2;"></i>'
            +'<span style="display: block;margin-left: 10px;margin-top:13px;height:14px;width: 168px;padding-top: 4px;" ><i style="border:1px solid  #000; width: 168px;height: 0px;display:block;"></i></span>'//实线
            +'<span style="display: block;margin-left: 10px;margin-top:13px;height:14px;width: 168px;padding-top: 4px;" ><i style="border:3px double  #000; width: 168px;height: 0px;display:block;"></i></span>'//双线
            +'<span style="display: block;margin-left: 10px;margin-top:13px;height:14px;width: 168px;padding-top: 4px;" ><i style="border:1px dotted  #000; width: 168px;height: 0px;display:block;"></i></span>'//点状
            +'<span style="display: block;margin-left: 10px;margin-top:13px;height:14px;width: 168px;padding-top: 4px;" ><i style="border:1px dashed  #000; width: 168px;height: 0px;display:block;"></i></span>'//虚线
            +'</div>'
            +'</div>');
            },
    },
    //编辑器标志
    flag:{
        isComponentController:false,
        isShiftKeyDown:false,
        isFirstPushComponentToHead:true
    },
    //初始化编辑器
    init:function(){
        //zmEditor.template.getInfoById(103);//根据id获取模板数据
        //zmEditor.getNavigationPageById();//根据id获取页面数据
        zmEditor.component.init();//初始化右侧组件列表
        zmEditor.template.getAllList();//获取模板列表
        zmEditor.setRuler(1200);//设置网站头部刻度尺
    },
    //组件相关方法
    component:{
        //初始化组件列表
        init:function(){
            $('.zm-components-ul li').each(function(){
                var _thisType = $(this);
                zmEditor.arr.componentTypes[_thisType.attr("data-zm-component-type")]=_thisType.text()
            })

            // $.getJSON("components.json",function(data){
            //     zmEditor.arr.componentsList=data;
            //     // console.log(JSON.stringify(zmEditor.arr.widgetList))
            //     /*点击组件类型，显示组件详情*/
            //     $(".zm-components-ul li").on("click",function(){
            //         zmEditor.component.showDetail(this);
            //     });
            // })
            $.zmAjax({
                type: "get",
                url: zmEditor.url.getComponentsList,
                dataType: "json",
                success: function(e){
                    zmEditor.arr.componentsList=e.data;
                },
                error:function(){
                    $(".zm-components-type>ul").html('<li style="width:100%"> 数据库连接出错咯~</li>');
                }
            });
        },
        //显示组件列表
        showDetail:function(e){
            var _this = $(e);
            var box = _this.closest('.zm-components');
            var detailBox = box.find('.zm-components-detail');
            var detailContent=box.find(".zm-components-detail-content");
            var detailTitle=box.find(".zm-components-detail-title");
            detailTitle.hide();
            var curLi = 'zm-components-type-curLi';
            var attrTypeStr='data-zm-component-type';
            if(detailBox.data('isSort')){zmManage.componentListIsSort();return;}
            _this.remove('.zm-components-li-svgBox2');
            _this.append('<div class="zm-components-li-svgBox2"> <svg viewBox="0 0 14 68"> <path d="M0,14v40c7.731,0,14,6.268,14,14V0C14,7.732,7.731,14,0,14z"/> </svg></div>')
            var index = _this.index();
            var detail = detailContent.children("div.zm-components-detail-term").eq(index);
            detail.attr('data-zm-isShow',true).siblings().attr('data-zm-isShow',false);
            //判断是否点击过了
            if(!_this.data("hasLoading")||_this.data("hasLoading")==undefined){
                var type = _this.attr(attrTypeStr);
                detail.attr(attrTypeStr,type);
                var list =zmEditor.arr.componentsList[type];
                var allHtml ="";
                //var anchorHtml ='';
                if(list!=undefined){
                    var len=list.length;
                    for(var i=0;i<len;i++){
                        var list2 = list[i];
                        var len2 =list2.list.length;
                        var ulHtml ="";
                        for(var j= 0;j<len2;j++){
                            var list3 = list2.list[j];
                            if(type=='banner'||type=='nav'||type=='carousel'||type=='tab'||type=='video'||type=='product'||type=='lightbox'){
                                ulHtml+='<li data-zm-fId="'+list3.fId+'" data-zm-fName="'+list3.fName+'">'+list3.fContext+'<div class="zm-component-fieldset-liName">'+list3.fName+'</div></li>';
                            }
                            else{
                                ulHtml+='<li data-zm-fId="'+list3.fId+'" data-zm-fName="'+list3.fName+'">'+list3.fContext+'</li>';
                            }

                        }
                        // allHtml+='<fieldset id="'+type+'anchor'+i+'" class="zm-component-fieldset " data-zm-fId="'+list2.fComponentType+'"><legend>'+list2.fComponentTypeName+'</legend><ul>'+ulHtml+'</ul></fieldset>'
                        allHtml+='<fieldset class="zm-component-fieldset " data-zm-fId="'+list2.fComponentType+'"><legend>'+list2.fComponentTypeName+'</legend><ul>'+ulHtml+'</ul></fieldset>'
                        //anchorHtml+='<span data-zm-anchor="'+type+'anchor'+i+'"></span>'
                    }
                    //detail.after('<div class="zm-components-detail-term-anchorBox"><div class="zm-components-detail-term-anchor">'+anchorHtml+'</div></div>');
                }
                else{
                    allHtml='<div style="height: 50px;line-height: 50px;margin: 0 auto;font-size: 16px;text-align: center;">亲~数据库出错啦( >﹏< )!<br>程序员哥哥正在玩命修复中...</div>'
                }
                _this.data("hasLoading",true);
                if(detail.hasClass('mCustomScrollbar')){
                    detail.find('.mCSB_container').html(allHtml).mCustomScrollbar({theme:"minimal"});
                }
                else{
                    detail.html(allHtml).mCustomScrollbar({theme:"minimal"});
                }
            }
            _this.addClass(curLi).siblings().removeClass(curLi);
            detail.show().siblings('.zm-components-detail-term').hide();
            // var thisAnchorEle = detail.next();
            // thisAnchorEle.show().siblings('.zm-components-detail-term-anchorBox').hide();
            // thisAnchorEle.find('span:eq(0)').addClass('zm-components-detail-term-anchorCur').siblings().removeClass('zm-components-detail-term-anchorCur');
            detailBox.show();
            detailTitle.text(_this.attr('title')).slideDown()//标题
        },
        /*
        *将组件添加至页面过程中'拖拽框体'大小缩放函数
        *scale为缩放倍数，若需要全屏显示则将scaleW赋值为'fullScreen',
        */
        moveToPageScale:function(thisLi,type){
            var scaleW,scaleH;
            switch (type){
                case 'carousel':
                    var carouselMain = thisLi.find('.zm-component-carousel-main');
                    var fullW = carouselMain.attr('data-fullWidth');
                    var tempImg = new Image();
                    tempImg.src = thisLi.find('img').attr('src');
                    var w = carouselMain.width(),h = carouselMain.height();
                      scaleW = fullW?'fullScreen':(tempImg.width/w);
                      scaleH = tempImg.height/h;
                    break;
                case 'shape':
                    var shapeBox = thisLi.find('.zm-component-shape-main');
                    scaleW=shapeBox.hasClass('blockShape')?3:1;
                    scaleH=shapeBox.hasClass('blockShape')?3:1;
                    break;
                case 'container':
                    scaleW=3;scaleH=3;
                    break;
                case 'banner':
                    scaleW='fullScreen';scaleH=4;
                    break;
                case 'video':
                    scaleW=1;scaleH=1;
                    break;
                case 'tab':
                    scaleW=1.5;scaleH=1.5;
                    break;
                case 'product':
                    if(thisLi.find(".zm-product-goods").length != 0){
                        scaleW=1.5;scaleH=1.5;
                    }
                    if(thisLi.find(".list_product").length != 0){
                        scaleW=3;scaleH=3;
                    }
                    break;
                case 'audio':
                    if(thisLi.find(".list_album").length != 0){
                        scaleW=3;scaleH=3;
                    }else{
                        scaleW=1;scaleH=1;
                    }
                    break;
                case 'function':
                    var fnCont = thisLi.find('.zm-component-function-content');
                    if(fnCont.attr('data-functionType')==='map'){
                        scaleW=2;scaleH=2;
                    }else {
                        scaleW=1;scaleH=1;
                    }
                    break;
                case 'blog':
                    if(thisLi.find('.zm-component-microBlog-main').length>0){
                        scaleW=2;scaleH=2;
                    }else {
                        scaleW=1;scaleH=1;
                    }
                    break;
                case 'lightbox':
                    scaleW="fullScreen";
                    break;
                default://默认值无缩放['text','btn']
                    scaleW=1;scaleH=1;
                    break;
            }
            return {scaleW:scaleW,scaleH:scaleH};
        },
        //拖拽组件加载之前
        willMount:function(_this,type,main,component,box,boxId){
            switch (type){
                case "text":
                    //main.css({"width":"400px"});
                    // main.css({"minWidth":"80px", "minHeight":"30px"});
                    break;
                case "btn":
                    // main.children().css({"textAlign":"center","width":"auto","height":"auto","minWidth":main.children().css('width'),"minHeight":main.children().css('height')});
                    break;
                case "nav":
                    component.children("ul").html("");
                    break;
                case "container":
                case "banner":
                case "tab":
                case "carousel":
                    box.addClass('zm-container');
                    break;
                case "shape":
                    break;
                case "product":
                    break;
                case "function":
                    break;
                case "audio":
                    break;
                case "lightbox":
                    $(".zm-lightBox-view").find(".lightBox-icon").children().toggle();
                    break;
                case "video":
                    // main.css({"width":"300px"})
                    break;
                default:

                    break;
            }
        },
        //拖拽组件已经加载
        didMount:function(_this,type,main,component,box,boxId){
            switch (type){
                case "text":
                    //是否只允许改变组件宽度
                    zmEditor.component.onlyResizeWidth(box);
                    box.find('.zm-component-resize>span').eq(5).show();
                    main.children().css({'line-height':'1em'})
                    break;
                case "btn":
                    main.children().css({"textAlign":"center","width":"auto","height":"auto","minWidth":main.children().css('width'),"minHeight":main.children().css('height')});
                    break;
                case "container":
                    main.css({'width':parseInt(main.css('width'))*3,'height':parseInt(main.css('height'))*3})
                    break;
                case "nav":
                    zmEditor.globalMethod.nav.main_style(box,type);//ye添加。
                    break;
                case "banner":
                    zmEditor.component.banner.didMount(box.find(".zm-component-main"),{"height":box.find(".zm-component-main").children("div").css("height"),"width":box.closest(".zm-body").css("width")});
                    break;
                case "carousel":
                    var slideStyle = _this.find(".zm-component-carousel-box").attr("slide-type");
                    //获取图片轮播方式by oldZhang 2017-3-11 16:55:01
                    var thisImgSrc = _this.find(".zm-component-carousel-box img").attr("src");
                    //获取当前图片的路径
                    zmEditor.component.carousel.getImgsInfo(main,slideStyle,thisImgSrc);
                    break;
                case "tab":
                    if(main.hasClass("tab_style_01")){
                        main.find(".zm-edit-components-tabs-tit-lab > li").attr({"data-judge-htc":"true","data-type-hoverbordertopwidth":"3","data-type-hoverbackgroundcolor":"rgb(255,255,255)","data-type-hoverbordertopcolor":"rgba(74,177,167,1)"})
                    }
                    if(main.hasClass("tab_style_02")){
                        main.find(".zm-edit-components-tabs-tit-lab > li").attr("data-type-hoverbackgroundcolor","rgb(255,255,255)");
                    }
                    if(main.hasClass("tab_style_03")){
                        main.find(".zm-edit-components-tabs-tit-lab > li").attr({"data-judge-hbc": true,"data-type-hoverborderbottomwidth": "3","data-type-hoverborderbottomcolor": "rgba(74,177,167)"});
                    }
                    main.css({"width": "450px","height": "300px"});
                    break;
                case "product":
                    if(main.hasClass("zm-product-goods")){
                        main.css({"width":"450px","height":"300px"});
                    }
                    if(main.hasClass("list_product")){
                        main.empty();
                        if(getLocal("hotProduct")){
                        }else {
                            setLocal({key: "hotProduct", value: goodsList()});
                        }
                        var html = listComponent({col: 5,row: 2,key: "hotProduct",type: "product"});
                        for(var i in html){
                            main.append(html[i]);
                        }
                        main.css({"width":"950px","height":"580px"}).attr("data-type-list","hotProduct");
                    }
                    break;
                case "audio":
                    //快捷播放
                    if(main.hasClass("mini_player")){
                        var AudioArr = getLocal("hotAudio");
                        if(AudioArr){
                            setDomMiniPlayer(main,"hotAudio",AudioArr);
                        }else{
                            //1.请求ajax数据
                            //2.存储ajax数据
                            //设置Dom元素节点
                            setLocal({key: "hotAudio",value: imitate()});
                            setDomMiniPlayer(main,"hotAudio",imitate());
                        }
                    }
                    //面板列表测试版
                    if(main.hasClass("zm-edit-components-audio-playerMusic")){
                        setLocal({key: main.attr("id"),value: imitate()});
                        musicList({key: main.attr("id"),list: main.find("ul")});

                    }
                    //播放面板
                    if(main.hasClass("play_panel")){
                        var AudioArr = getLocal("hotAudio");
                        if(AudioArr){
                            setDomPlayPanel(main,"hotAudio",AudioArr);
                        }else{
                            setLocal({key: "hotAudio",value: imitate()});
                            setDomPlayPanel(main,"hotAudio",imitate())
                        }
                        zmEditor.component.onlyResizeWidth(box);
                    }
                    //专辑列表
                    if(main.hasClass("list_album")){
                        main.empty();
                        if(getLocal("hotAlbum")){
                        }else{
                            setLocal({key: "hotAlbum",value: albumList()});
                        }
                        var html = listComponent({col: 5,row: 2,key: "hotAlbum",type: "album"});
                        for(var i in html){
                            main.append(html[i]);
                        }
                        main.css({"width": "950px","height": "580px"}).attr("data-type-list","hotAlbum");
                    }
                    break;
                case "lightbox":
                    box.css({"top": "0","z-index":"980",});
                    main.css({width: '100%',height: '100%',position: 'fixed',top: '0',left: '0'});
                    main.find(".zm-component-lightBox-box").append(zmEditor.component.setItems.templateELement.lightClose).append(zmEditor.component.setItems.templateELement.lightRow01);
                    break;
                case "video":
                    main.css({"overflow":"hidden","width":"300px"});
                    $.post(zmEditor.url.hotProduct,function(result){
                        var obj=result.data;
                        zmEditor.component.video.getVideoList(main,obj);
                    });
                    break;
                case "img":
                    zmEditor.component.isRotate(box);
                    zmEditor.component.img.picResize(main);
                    break;
                case "shape":
                    zmEditor.component.isRotate(box);
                    var isLine = main.find('.zm-component-shape-line');
                    var rootBox = isLine.closest('.zm-component-box1');
                    var pathD = isLine.find('path').attr('d');
                    if(isLine.length>0){
                        var line = main.find('.zm-component-shape-box');
                        main.css({'padding':'10px'});
                        pathD.indexOf('L')>0?
                            zmEditor.component.onlyResizeHeight(rootBox):
                            zmEditor.component.onlyResizeWidth(rootBox)
                    }
                    else
                        zmEditor.component.shape.shapeOriScale(main);
                    break;
                case "news":
                    main.css('width','300px').find('.zm-component-news-content').css('width','100%');
                    zmEditor.component.news.newsAllData();
                    zmEditor.component.news.setNewsStyle(main);
                    zmEditor.component.news.newsHoverPubic(main);
                    break;
                case "blog":
                    var blogType = main.children('div').attr('data-type');
                    zmEditor.component.blog.newsAllData();

                    if(blogType === 'microBlog'){
                        zmEditor.component.blog.microBlog.getReady(main)
                    }else {
                        main.css('width','300px').find('.zm-component-news-content').css('width','100%');
                        zmEditor.component.blog.setNewsStyle(main);
                        zmEditor.component.news.newsHoverPubic(main);
                    }
                    break;
                case "function":
                    var functionType =  main.find('.zm-component-function-content').attr('data-functionType');
                    switch (functionType){
                        case "search":
                            zmEditor.component.function.searchMethod.searchBarGetReady(main);
                            break;
                        case "shopping":
                            zmEditor.component.function.shoppingMethod.shoppingCartGetReady(main);
                            break;
                        case "file":
                            zmEditor.component.function.fileMethod.fileGetReady(main);
                            break;
                        case "share":
                            zmEditor.component.function.shareMethod.shareGetReady(main);
                            break;
                        case "enter":
                            zmEditor.component.function.enterMethod.enterGetReady(main);
                            break;
                        case "option":
                            zmEditor.component.function.optionMethod.optionGetReady(main);
                            break;
                        case "map":
                            zmEditor.component.function.mapMethod.mapGetReady(main);
                            break;
                        default:
                            zmEditor.component.function.registrationMethod.sundryGetReady(main,functionType);
                            break
                    }
                    break;
                default:
                    break;
            }
        },
        //当前编辑的组件
        nowEdit:function(){
            return $(".zm-component-nowEdit").find(".zm-component-main").eq(0);
        },
        //当前组件的box1
        nowBox1:function(e){
            if(e){
                return e.closest('.zm-component-box1');
            }
            else{
                return $('.zm-component-nowEdit');
            }
        },
        //页面组件list
        box1List:function(){
            return $('.zm-component-box1');
        },
        //是否可旋转
        isRotate:function(box){
            box.find('.zm-component-resize').remove();
            box.find('.zm-component-box2 .zm-component-main').append(zmEditor.str.component.resize)
            box.children('.zm-component-box2').find('.zm-component-main').append(zmEditor.str.component.rotate);
            box.children('.zm-component-box2').find('.zm-component-location').append(zmEditor.str.component.rotateVal);
            var r = box.find('.zm-component-box2').find('.zm-component-main').attr('data-zm-rotate');
            if(r){
                box.find(".zm-component-location-r").eq(0).html(parseInt(r)+'°');
            }
            else{
                box.find(".zm-component-location-r").eq(0).html(0+'°');
            }
        },
        //只允许组件改变宽度
        onlyResizeWidth:function(e){
            e.find(".zm-component-resize>span").each(function(){
                if($(this).index()!=3&&$(this).index()!=7){
                    $(this).hide();
                }
            })
        },
        //只允许组件改变宽度
        onlyResizeHeight:function(e){
            e.find(".zm-component-resize>span").each(function(){
                if($(this).index()!=1&&$(this).index()!=5){
                    $(this).hide();
                }
            })
        },
        //获取并设置组件坐标区域x,y,w
        setLocation:function(e,x,y,w,h){
            // console.log('location'+x,y);
            if(x!=undefined){
                e.find(".zm-component-location-x").eq(0).html(parseInt(x));
            }
            if(y!=undefined){
                e.find(".zm-component-location-y").eq(0).html(parseInt(y));
            }
            if(w!=undefined){
                e.find(".zm-component-location-w").eq(0).html(parseInt(w));
            }
            if(h!=undefined){
                e.find(".zm-component-location-h").eq(0).html(parseInt(h));
            }
        },
        //显示组件操作区域
        showOption:function(box1,flag,tag,downX,downY){
            // $('.zm-selectedText').removeClass('zm-selectedText')
            // $('#zm-editor-text-iframe').remove()
            $('.zm-components-li-svgBox2').remove();
            switch (flag){
                case "row":
                    //移除设置窗口
                    $('.zm-component-settingPanel').remove();
                    /*移除组件编辑标示*/
                    $(".zm-component-edit").hide();
                    $(".zm-component-nowEdit").find('.zm-component-resize,.zm-component-rotate,.zm-component-carousel-picTip').hide();
                    $(".zm-component-nowEdit").removeClass('zm-component-nowEdit');
                    /**/
                    var fullRow = tag.closest('.zm-row-full');
                    /*隐藏其他zm-row-resize，显示当前的zm-row-resize*/
                    $('.zm-row-resize').hide();
                    fullRow.find('.zm-row-resize').show();
                    /**/
                    var fullRowW = fullRow.outerWidth();
                    var left = downX;
                    var top = downY+$('.zm-all').scrollTop()-48;
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
                    break;
                case "lightBox":
                    //移除设置窗口
                    $('.zm-component-settingPanel').remove();
                    /*移除组件编辑标示*/
                    $(".zm-component-edit,.zm-row-edit").hide();
                    $(".zm-component-nowEdit").find('.zm-component-resize,.zm-component-rotate,.zm-component-carousel-picTip').hide();
                    $(".zm-component-nowEdit").removeClass('zm-component-nowEdit');
                    /**/
                    /*隐藏其他zm-row-resize，显示当前的zm-row-resize*/
                    $('.zm-row-resize').hide();
                    /**/
                    var left = downX?downX:200;
                    var top = downX?downY+$('.zm-all').scrollTop()-48:$('.zm-all').scrollTop()+15;
                    /**/
                    $('.zm-lightBox-edit').attr('style','').offset({'left':left,'top':top}).show();
                    break;
                default:
                    if(box1.length>0){
                        var editBtns = $('#zm-component-edit');
                        editBtns.hide();
                        var box2=box1.children('.zm-component-box2');
                        var mainTemp = box2.children('.zm-component-main-temp');
                        var boxLeft = mainTemp.offset().left;
                        var boxTop = mainTemp.offset().top;
                        var left,top;
                        if(boxTop<120) {top=boxTop+mainTemp.outerHeight()}
                        else {top=boxTop+$('.zm-all').scrollTop()-52}
                        if(boxLeft<150){
                            if(box1.attr("data-fullScreen")=="true"){
                                left=$('.zm-all .zm-row:eq(0)').offset().left+5;
                            }
                            else{
                                left=155;
                            }
                        }
                        else{
                            left=boxLeft;
                        }
                        $(".zm-component-nowEdit").find('.zm-component-resize,.zm-component-rotate,.zm-component-carousel-picTip').hide();
                        $(".zm-component-nowEdit").removeClass("zm-component-nowEdit");
                        box1.addClass("zm-component-nowEdit");
                        box2.children('.zm-component-carousel-picTip').show();
                        box2.children('.zm-component-main-temp').find('.zm-component-resize,.zm-component-rotate').show();
                        box2.children('.zm-component-main').children('.zm-component-resize,.zm-component-rotate').show();
                        /*是否显示样式选择按钮*/
                        var main = box2.children('.zm-component-main');
                        if(main.hasClass('zm-component-function-share-main')||
                            main.hasClass('zm-component-map-main'))
                        {
                            editBtns.find('button:eq(0)').hide();
                        }
                        else{editBtns.find('button:eq(0)').show()}
                        $('.zm-row-edit-temp').remove();//移除row编辑标示
                        $('.zm-row-edit,.zm-lightBox-edit').hide();
                        editBtns.attr('style','').offset({'top':top}).css({'left':left}).show();
                    }
                    break;
            }
        },
        //设置而非拖动
        isSetting:function(e){
            if($(e.target).closest('.zm-component-main-temp').length>0){return true;}
            else{return false;}
        },
        //拖拽辅助线
        dragHelpLine:function(box,boxOffLeft,boxOffTop,left,top,originX,originY,pyl,boxWidth,boxHeight,rowWidth,rowHeight,rowTop){
            var xLineTop=boxOffTop,yLineLeft=boxOffLeft,xLineShow,yLineShow;
            /*
            *竖向辅助线
            * */
            //左边线
            if(boxOffLeft-originX>-pyl && boxOffLeft-originX<pyl){
                yLineLeft=originX;
                boxOffLeft=originX;
                yLineShow='block';
            }
            //右边线
            else if(boxOffLeft+boxWidth-(originX+rowWidth)>-pyl && boxOffLeft+boxWidth-(originX+rowWidth)<pyl){
                yLineLeft=originX+rowWidth;
                boxOffLeft=originX+rowWidth-boxWidth;
                yLineShow='block';
            }
            //中线
            else if(boxOffLeft+boxWidth/2-(originX+rowWidth/2)>-pyl && boxOffLeft+boxWidth/2-(originX+rowWidth/2)<pyl){
                yLineLeft=originX+rowWidth/2;
                boxOffLeft=originX+rowWidth/2-boxWidth/2;
                yLineShow='block';
            }
            //固定辅助线&组件之间
            else{
                var findBoxY=false;
                $('.zm-yStaticHelpLineBox>div').each(function(){
                    var line = $(this);
                    var lineLeft = line.offset().left;
                    if(boxOffLeft-lineLeft>-pyl && boxOffLeft-lineLeft<pyl){
                        findBoxY=true;
                        yLineLeft=lineLeft;
                        boxOffLeft=lineLeft;
                        yLineShow='block';
                        return false;
                    }
                    else if(boxOffLeft+boxWidth-lineLeft>-pyl && boxOffLeft+boxWidth-lineLeft<pyl){
                        findBoxY=true;
                        yLineLeft=lineLeft;
                        boxOffLeft=lineLeft-boxWidth;
                        yLineShow='block';
                        return false;
                    }
                });
                if(!findBoxY){
                    zmEditor.component.box1List().not(box).not(box.find('.zm-component-box1')).each(function(){
                        var otherLeft=$(this).offset().left;
                        var otherWidth = $(this).outerWidth();
                        if(boxOffLeft-otherLeft>-pyl && boxOffLeft-otherLeft<pyl){
                            findBoxY=true;
                            yLineLeft=otherLeft;
                            boxOffLeft=otherLeft;
                            yLineShow='block';
                            return false;
                        }
                        else if(boxOffLeft+boxWidth-(otherLeft+otherWidth)>-pyl && boxOffLeft+boxWidth-(otherLeft+otherWidth)<pyl){
                            findBoxY=true;
                            yLineLeft=otherLeft+otherWidth;
                            boxOffLeft=otherLeft+otherWidth-boxWidth;
                            yLineShow='block';
                            return false;
                        }
                    });
                    if(!findBoxY){
                        yLineShow='none';
                    }
                }
            }
            /*
             *横向辅助线
             * */
            /*
             *竖向辅助线
             * */
            //row上边线
            if(boxOffTop-rowTop>-pyl*2 && boxOffTop-rowTop<pyl*2){
                xLineTop=rowTop;
                boxOffTop=rowTop;
                xLineShow='block';
            }
            //row下边线
            else if(boxOffTop+boxHeight-(rowTop+rowHeight)>-pyl*2 && boxOffTop+boxHeight-(rowTop+rowHeight)<pyl*2){
                xLineTop=rowTop+rowHeight;
                boxOffTop=rowTop+rowHeight-boxHeight;
                xLineShow='block';
            }
            else{
                var findBoxX=false;
                zmEditor.component.box1List().not(box).not(box.find('.zm-component-box1')).each(function(){
                    var otherTop=$(this).offset().top;
                    var otherHeight = $(this).outerHeight();
                    if(boxOffTop-otherTop>-pyl && boxOffTop-otherTop<pyl){
                        findBoxX=true;
                        xLineTop=otherTop;
                        boxOffTop=otherTop;
                        xLineShow='block';
                        return false;
                    }
                    else if(boxOffTop+boxHeight-(otherTop+otherHeight)>-pyl && boxOffTop+boxHeight-(otherTop+otherHeight)<pyl){
                        findBoxX=true;
                        xLineTop=otherTop+otherHeight;
                        boxOffTop=otherTop+otherHeight-boxHeight;
                        xLineShow='block';
                        return false;
                    }
                });
                if(!findBoxX){
                    xLineShow='none';
                }
            }
            //end
            $('.zm-xDragHelpLine').css({display:xLineShow,top:xLineTop});
            $('.zm-yDragHelpLine').css({display:yLineShow,left:yLineLeft});
            return {left:boxOffLeft,top:boxOffTop}
        },
        //将组件放入容器中
        pushComponentToContainer:function(container,_this){
            // debugger;
            var isInRow = container.closest('zm-row').length!=0?true:false;
            var containerId = container.attr("id");
            var headRow = $('.zm-row:eq(0)');
            var headRowH = headRow.outerHeight();
            var origin = headRow.offset();
            var scrollTop = $('.zm-all').scrollTop();
            var originX = origin.left;
            var originY = origin.top-scrollTop;
            var cOffset = container.offset();
            var cLeft = cOffset.left;
            //var cRight = cOffset.left+container.outerWidth();
            var cTop = cOffset.top;
            //var cBottom = cOffset.top+container.outerHeight();
            var tOffset = _this.offset();
            var tLeft = tOffset.left;
            var tTop = tOffset.top;
            var box;
            if(cTop<origin.top+headRowH && isInRow){
                if(zmEditor.flag.isFirstPushComponentToHead){
                    zmEditor.dialog.open({
                        title: '提示：',//弹窗标题，（支持文字，html标签，jq对象）
                        content: '<div class="zm-dialog-msgBox"><div class="zm-dialog-msg" style="line-height: 26px;">页眉区域内容将在所有页面进行显示！</div></div>',//弹窗内容，（支持文字，html标签，jq对象）
                        footer: '<div class="zm-dialog-footer"><span class="zm-dialog-btnOK" onclick="javascript:$(this).zmDialog(\'remove\')">我知道了</span> </div>',//底部按钮区，（支持文字，html标签，jq对象）
                        width: 380,//弹窗宽度（只能是数字）
                        height: 150,//弹窗高度（只能是数字）
                        movable:true,//弹窗是否可拖动（true：可拖动，false：不可拖动）
                        animate:'zm-dialog-animate-002',
                        target:$('body')//弹窗寄生的父级元素，
                    })
                }
                zmEditor.flag.isFirstPushComponentToHead=false;

            }
            var containerMaxIndex = parseInt(container.attr('data-zm-maxIndex'))||0;
            // var containerMinIndex = parseInt(container.attr('data-zm-minIndex'))||0;
            container.attr({'data-zm-maxIndex':containerMaxIndex+1});
            //从组件列表拖入页面
            if(_this[0].tagName.match(/li/i)){

                var type = _this.closest(".zm-components-detail-term").attr("data-zm-component-type")||"";
                var type2 = _this.closest(".zm-component-fieldset ").attr("data-zm-fId")||"";
                var name = _this.attr('data-zm-fName');
                var component = _this.children();
                component.show();
                box = $(zmEditor.str.component.box1);
                var boxId = zmEditor.createId(box);
                var fId = _this.attr("data-zm-fId");
                var main = box.find(".zm-component-main");
                if(type=='text'||type=='btn'){
                    // var tComponent = $(component.prop('outerHTML'));
                    // main.css({'width':component.outerWidth()+'px'})
                    // component.css({'width':'100%','height':'100%'});
                    main.append(component.prop('outerHTML'))
                }
                else{
                    var style = component.attr("style");
                    var iClass = component.attr("class");
                    main.attr("style",style).addClass(iClass).css({'overflow':'visible'}).append(component.html());
                }
                //组件装载before
                zmEditor.component.willMount(_this,type,main,component,box,boxId);
                //组件装载ing
                box.attr({"data-zm-component-type":type,"data-zm-component-type2":type2,"data-zm-fId":fId,"data-zm-fName":name,
                    "data-zm-containerId":containerId, "data-zm-index":containerMaxIndex+1})
                    .css({"position": "absolute", "left": tLeft - cLeft, "top": tTop - cTop,"z-index":containerMaxIndex+1})
                    .appendTo(container);
                //组件装载after
                zmEditor.component.didMount(_this,type,main,component,box,boxId);
                if(type=='lightbox'){
                    zmEditor.component.showOption(undefined,'lightBox',undefined);
                }
                else{
                    zmEditor.component.showOption(box);
                    var r = box.children('.zm-component-box2').find('.zm-component-main').css('transform')
                    //设置组件坐标区显示
                    // zmEditor.component.setLocation(box,tLeft-cLeft-1,tTop-cTop,box.outerWidth(),box.outerHeight(),r);
                    zmEditor.component.setLocation(box,tLeft-originX,tTop-originY,box.outerWidth(),box.outerHeight(),r);
                    box.find('.zm-component-location').hide();
                    zmEditor.action.save('add');
                }
            }
            //页面中已有组件拖动
            else{
                box=_this;
                var lastContainerId = box.attr('data-zm-containerId');
                if(containerId!=lastContainerId){
                    box.css({"position": "absolute", "left": tLeft - cLeft-1, "top": tTop - cTop,"z-index":containerMaxIndex+1});
                    box.attr({'data-zm-containerId':containerId,"data-zm-index":containerMaxIndex+1});
                    container.append(box);
                }
                // var r = box.children('.zm-component-box2').find('.zm-component-main').css('transform');
                box.find('.zm-component-location').hide();
                //设置组件坐标区显示
                // zmEditor.component.setLocation(box,tLeft-originX,tTop-originY,box.outerWidth(),box.outerHeight(),r);
                zmEditor.action.save();
                //_this.attr("data-zm-pageId",obj.attr("data-zm-pageId"))
            }

            //保存操作动作
            //组件发布保存为草稿按钮专用遮罩层
            //$('.zm-publish-save-mask').show();
        },
        //在同一层级中遍历所有满足条件的容器并返回层级最高的容器
        findContainerInSameLevel:function(e,_this, upX, upY){
            var containerList =[],outPut={};
            outPut.lastContainer = e.lastContainer;
            if(e.nowContainer.children('.zm-container').not(_this).length>0){
                e.nowContainer.children('.zm-container').not(_this).each(function(){
                    var obj = $(this);
                    var offset = obj.offset();
                    var oLeft = offset.left;
                    var oRight = offset.left+obj.outerWidth();
                    var oTop = offset.top;
                    var oBottom = offset.top+obj.outerHeight();
                    if(upX>oLeft&&upX<oRight&&upY>oTop&&upY<oBottom){
                        containerList.push({container:obj,iIndex:obj.css('zIndex')});
                        // console.log(oLeft,upX,oRight,oTop,upY,oBottom)
                    }
                })
            }
            //在满足坐标的容器中筛选最佳容器
            if(containerList.length>0){
                var i=0,len = containerList.length,maxIndex =containerList[0];
                for(;i<len;i++){
                    if(containerList[i].iIndex>maxIndex.iIndex){
                        maxIndex=containerList[i];
                    }
                }
                outPut.nowContainer = maxIndex.container;
            }
            return outPut;
        },
        //按层级递归遍历对应层级中的容器
        autoFindContainer:function(containers,_this, upX, upY){
            //满足条件则回调本身
            if(containers.nowContainer){
                zmEditor.component.autoFindContainer(
                    zmEditor.component.findContainerInSameLevel(
                        {nowContainer:containers.nowContainer,lastContainer:containers.nowContainer},_this, upX, upY
                    ),_this, upX, upY
                );
            }
            //不满足条件则说明已经找到最适合容器，那么就将组件放入该容器中
            else{
                var obj = containers.lastContainer;
                var containerId = obj.attr("id");
                var containerType = obj.attr('data-zm-component-type');
                switch(containerType){
                    //tab组件特殊处理
                    case "tab":
                        obj=obj.find('.zm-edit-components-tabs-cont:eq(0)');
                        obj.children('div').each(function(){
                            var tabItem = $(this);
                            if(tabItem.css('display')=='block'){
                                obj = tabItem;
                                obj.attr('id',containerId+'-'+obj.index());
                                zmEditor.component.autoFindContainer(
                                    zmEditor.component.findContainerInSameLevel(
                                        {nowContainer: obj, lastContainer: obj}, _this, upX, upY
                                    ), _this, upX, upY
                                );
                                return false;
                            }
                        })
                        break;
                    //轮播组件特殊处理
                    case "carousel":
                        var index = obj.children('.zm-component-box2').children('.zm-component-carousel-picTip').children('.zm-component-carousel-pageTip').children('span:eq(0)').text();
                        obj=obj.find('.zm-component-carousel-box:eq(0)').children('figure').eq(index-1);
                        obj.attr('id',containerId+'-'+obj.index());
                        zmEditor.component.autoFindContainer(
                            zmEditor.component.findContainerInSameLevel(
                                {nowContainer: obj, lastContainer: obj}, _this, upX, upY
                            ), _this, upX, upY
                        );
                        break;
                    default:
                        zmEditor.component.pushComponentToContainer(obj,_this,upX,upY);
                        break;

                }
            }
        },
        //beforeStyle
        beforeStyle:function(type,list,box){
            var iSelected=zmEditor.component.nowEdit();
            switch (type){
                case "btn":
                    break;
                case "shape":
                    list = iSelected.hasClass('blockShape')?[list[1],list[2],list[3]]:[list[0]];
                    break;
                case "function":
                    var functionType = iSelected.find('.zm-component-function-content').attr('data-functionType');
                    switch (functionType){
                        case 'search':
                            list = [list[0]];
                            break;
                        case 'shopping':
                            list = [list[1]];
                            break;
                        case 'file':
                            list = [list[3]];
                            break;
                        case 'enter':
                            list = [list[5]];
                            break;
                        case 'option':
                            list = [list[6]];
                            break;
                        default:
                            list = [list[2]];
                            break;
                    }
                    break;
                case "nav":
                    box.addClass('data-nav-Independent-nav');
                    if(/vertical/.test(iSelected[0].classList[4])){
                        list=[list[1]]
                    }else{
                        list=[list[0]]
                    }
                    break;
                case "banner":
                    break;
                default:
                    break;
            };
            return list;
        },
        //点击改变样式
        changeStyle:function(type,_this){
            var iSelected = zmEditor.component.nowEdit();
            var com_box=zmEditor.component.nowBox1();
            var curFlag = '<span class="zm-component-settingPanel-curLiFlag fa fa-check"></span>';
            var id = _this.attr('data-zm-fid');
            com_box.attr('data-zm-fid',id);
            $('.zm-component-settingPanel-curLiFlag').remove();
            $('.zm-component-settingPanel-curLi').removeClass('zm-component-settingPanel-curLi');
            _this.addClass('zm-component-settingPanel-curLi');
            _this.append(curFlag);
            switch(type){
                case "btn":
                    var this_style=_this.find("div").attr("style");
                    com_box.find(".zm-component-main:eq(0)").css({'width':'auto','height':'auto'});
                    com_box.find(".zm-component-main:eq(0)").children().attr("style",this_style).css({'width':'auto','height':'auto'});
                    break;
                case "nav":
                    if($(_this).closest("ul").parent()[0].tagName.toLowerCase()=="div"){
                        var a,b,nav_name;
                        a=$(_this).closest(".zm-nav")[0].classList[2];//获取样式标志
                        // b=$(this).closest(".zm-component-box1").children(".zm-component-box2").children(".zm-component-main");
                        b=zmEditor.component.nowEdit();
                        console.log(b);
                        nav_name=zmEditor.globalMethod.nav.global_compotents_IndependentName(b);
                        zmEditor.globalMethod.nav.initNavList.nav_ele_style_assignment(zmEditor.globalMethod.nav.OneType.li, a, "sStyle", "initStyle","li",nav_name,["width","height","lineHeight"]);
                        zmEditor.globalMethod.nav.initNavList.nav_ele_style_assignment(zmEditor.globalMethod.nav.OneType.li, a, "hHover", "initHover","li",nav_name,["width","height","lineHeight"]);
                        zmEditor.globalMethod.nav.initNavList.nav_ele_style_assignment_initclickhover(zmEditor.globalMethod.nav.OneType.li, a, "clickhover", "initclickhover","li",nav_name);
                        zmEditor.globalMethod.nav.initNavList.nav_ele_style_assignment(zmEditor.globalMethod.nav.OneType.span, a, "sStyle", "initStyle","span",nav_name,["width","height"]);
                        zmEditor.globalMethod.nav.initNavList.dropdownBg(zmEditor.globalMethod.nav.TwoType.ul.sStyle, "backgroundColor","dropdownBg",nav_name,a); //下拉列表的颜色
                        // console.log(zmEditor.globalMethod.nav.data.arrLike[nav_name])
                        // console.log(b);
                        var c,d,e,f;
                        c=b[0].classList[3],d=b[0].classList[4]; //移除类名
                        b.removeClass(c).removeClass(d);
                        e=$(_this).closest(".zm-nav")[0].classList[1];
                        b.addClass(e).addClass(a);
                        // console.log(nav_name);
                        f=nav_name.replace(/-([A-z]+|_)*(\d+)/i,function(match,p1,p2,offset,string){
                            // console.log(match)
                            // console.log(p1)
                            // console.log(p2)
                            //本身以及子节点替换类名nav类型   //three:替换dom元素属性
                            // 替换mainCLss
                            b.removeAttr("data-"+p1);
                            b.attr("data-"+a,a+p2+"");
                            // 替换mainCLss
                            // 替换styleCLss
                            $(".style_nav_data-"+p1+p2).removeClass("style_nav_data-"+p1+p2).addClass("style_nav_data-"+a+p2);
                            // 替换styleCLss
                            // b 值未找到。
                            //  b.find("li").each(function(index,ele){
                            //  var li ,refreshLi;
                            //  li=$(this)[0].classList[0];
                            //  $(this).removeClass(li);
                            //  refreshLi=li.replace(/-([A-z]+|_)*/i,function(ma,p,t){
                            //    console.log(ma)
                            //    console.log(p)
                            //    console.log(t)
                            //      return "-"+a;
                            //  })
                            // $(this).addClass(refreshLi);
                            //  })
                            //本身以及子节点替换类名nav类型
                            return "-"+a+p2+"";
                        });
                        console.log(zmEditor.globalMethod.nav.data.arrLike)
                        zmEditor.globalMethod.nav.data.arrLike[nav_name]   // one: 让对象下属性名变更;
                        zmEditor.globalMethod.nav.data.arrLike[f]=zmEditor.globalMethod.nav.data.arrLike[nav_name];
                        if(f==nav_name)return;else delete zmEditor.globalMethod.nav.data.arrLike[nav_name];//two:删除原有属性

                        //three:替换dom元素属性
                        console.log(zmEditor.globalMethod.nav.data.arrLike)
                        console.log(zmEditor.globalMethod.nav.data.arrLike[f]);
                        console.log(b);
                        // zmEditor.globalMethod.nav.initialize_html_callback($(zmEditor.globalMethod.nav.data.pageSet.html),b,zmEditor.globalMethod.nav.mouseenterOrleaveHover);
                        zmEditor.globalMethod.nav.initialize_html_callback($(zmEditor.globalMethod.nav.data.pageSet.html),b,zmEditor.globalMethod.nav.hover_or_click_show(zmEditor.globalMethod.nav.data.arrLike[f].hover_or_click_show_string));//从新渲染nav
                    }
                    break;
                case "banner":
                    zmEditor.component.banner.changeStyle(_this,iSelected);
                    break;
                case "container":
                    zmEditor.component.container.changeStyle(_this,iSelected);
                    break;
                case "product":
                    var nowEle = _this.children();
                    if(nowEle.is(".zm-product-goods")){
                        if(nowEle.is(".zm-edit-components-product-row")){
                            iSelected.removeClass("zm-edit-components-product-col").addClass("zm-edit-components-product-row");
                        }
                        if(nowEle.is(".zm-edit-components-product-col")){
                            iSelected.removeClass("zm-edit-components-product-row").addClass("zm-edit-components-product-col");
                        }
                    }
                    if(nowEle.is(".zm-product-goodsList")){
                        console.log(nowEle);
                    }
                    break;
                case "tab":
                    if(_this.children("div").hasClass("tab_style_01")){
                        iSelected.removeClass("tab_style_02 tab_style_03").addClass("tab_style_01");
                    };
                    if(_this.children("div").hasClass("tab_style_02")){
                        iSelected.removeClass("tab_style_01 tab_style_03").addClass("tab_style_02");
                    };
                    if(_this.children("div").hasClass("tab_style_03")){
                        iSelected.removeClass("tab_style_01 tab_style_02").addClass("tab_style_03");
                    };
                    break;
                case "audio":
                    zmEditor.component.audio.method.setAudioStyle(iSelected,_this);
                    break;
                case "carousel":
                    zmEditor.component.carousel.setCarouselStyle(iSelected,_this);
                    break;
                case "img":
                    zmEditor.component.img.setImgStyle(iSelected,_this);
                    break;
                case "shape":
                    zmEditor.component.shape.setShapeStyle(iSelected,_this);
                    break;
                case "video":
                    zmEditor.component.video.setVideoStyle(iSelected,_this);
                    break;
                case "news":
                case "blog":
                    zmEditor.component.news.setNewsBlogStyle(iSelected,_this);
                    break;
                case "function":
                    var functionType = iSelected.find('.zm-component-function-content').attr('data-functionType');
                    switch (functionType){
                        case 'search':
                            zmEditor.component.function.searchMethod.setSearchBarStyle(_this);
                            break;
                        case 'shopping':
                            zmEditor.component.function.shoppingMethod.setShoppingCartStyle(_this);
                            break;
                        case 'file':
                            zmEditor.component.function.fileMethod.setFileStyle(_this);
                            break;
                        case 'enter':
                            zmEditor.component.function.enterMethod.setEnterStyle(_this);
                            break;
                        case 'option':
                            zmEditor.component.function.optionMethod.setOptionStyle(_this);
                            break;
                        default:
                            break
                    }
                    break;
                default:
                    var this_style=_this.find("div").attr("style");
                    com_box.find(".zm-component-main:eq(0)").css({'width':'auto','height':'auto'})
                    com_box.find(".zm-component-main:eq(0)").children().attr("style",this_style);
                    break;
            }
        },
        //样式选择
        style:function(e){
            var box = zmEditor.dialog.box();
            var content = box.find(".zm-dialog-content");
            var tabs;
            var com_box = zmEditor.component.nowBox1();
            var type = com_box.attr("data-zm-component-type")||"";
            var dialogTitle = zmEditor.arr.componentTypes[type]||'样式';
            var lastBox = $(".zm-dialog-box").not('.zm-dialog-box-pageSet');
            var lastLeft=lastBox.css("left");
            var lastTop=lastBox.css("top");
            box.css({'left':lastLeft,'top':lastTop}).addClass('zm-component-settingPanel');
            lastBox.remove();//ay：移除其他设置窗
            tabs=$('<div class="zm-edit-text"></div>');
            var list =zmEditor.arr.componentsList[type];
            var fielHtml="";
            var iSelected=zmEditor.component.nowEdit();
            list = zmEditor.component.beforeStyle(type,list,box);
            /*
            此方法提取至zmEditor.component.beforeStyle中
            */
            // switch (type){
            //     case "btn":
            //         break;
            //     case "shape":
            //         list = iSelected.hasClass('blockShape')?[list[1],list[2],list[3]]:[list[0]];
            //         break;
            //     case "function":
            //         var functionType = iSelected.find('.zm-component-function-content').attr('data-functionType');
            //         switch (functionType){
            //             case 'search':
            //                 list = [list[0]];
            //                 break;
            //             case 'shopping':
            //                 list = [list[1]];
            //                 break;
            //             case 'file':
            //                 list = [list[3]];
            //                 break;
            //             case 'enter':
            //                 list = [list[5]];
            //                 break;
            //             case 'option':
            //                 list = [list[6]];
            //                 break;
            //             default:
            //                 list = [list[2]];
            //                 break;
            //         }
            //         break;
            //     case "nav":
            //         box.addClass('data-nav-Independent-nav');
            //         if(/vertical/.test(com_main[0].classList[4])){
            //             list=[list[1]]
            //         }else{
            //             list=[list[0]]
            //         }
            //         break;
            //     case "banner":
            //         break;
            //     default:
            //         break;
            // }
            var fId = com_box.attr('data-zm-fid');
            var curFlag = '<span class="zm-component-settingPanel-curLiFlag fa fa-check"></span>';
            if(list!=undefined){
                var len=list.length;
                for(var i=0;i<len;i++){
                    var list2 = list[i];
                    var len2 =list2.list.length;
                    var ulHtml ="";
                    for(var j= 0;j<len2;j++){
                        var list3 = list2.list[j];
                        if(list3.fId==fId){
                            ulHtml+='<li data-zm-fId="'+list3.fId+'" class="zm-component-settingPanel-curLi">'+list3.fContext+curFlag+'</li>';
                        }
                        else{
                            ulHtml+='<li data-zm-fId="'+list3.fId+'">'+list3.fContext+'</li>';
                        }

                    }
                    fielHtml+='<fieldset class="zm-component-fieldset" data-zm-fId="'+list2.fComponentType+'"><legend>'+list2.fComponentTypeName+'</legend><ul>'+ulHtml+'</ul></fieldset>'
                };
            }
            else{
                fielHtml='<div style="height:100px;margin:0 auto;">亲~该分类暂时没有组件！</div>'
            }
            tabs.html(fielHtml);
            //ay:点击风格样式切换组件风格
            tabs.find("fieldset li").on("click",function(){
                zmEditor.component.changeStyle(type,$(this));
                /*
                 此方法提取至zmEditor.component.changeStyle中
                 */
                // var _this = $(this);
                // var iSelected = zmEditor.component.nowEdit();
                // var this_style=$(this).find("div").attr("style");
                // var id = _this.attr('data-zm-fid');
                // zmEditor.component.nowBox1().attr('data-zm-fid',id);
                // tabs.find('.zm-component-settingPanel-curLiFlag').remove();
                // _this.append(curFlag);
                // switch(type){
                //     case "nav":
                //         // debugger;
                //         if($(this).closest("ul").parent()[0].tagName.toLowerCase()=="div"){
                //             var a,b,nav_name;
                //         a=$(this).closest(".zm-nav")[0].classList[2];//获取样式标志
                //         // b=$(this).closest(".zm-component-box1").children(".zm-component-box2").children(".zm-component-main");
                //         b=zmEditor.component.nowEdit();
                //   console.log(b);
                //             nav_name=zmEditor.globalMethod.nav.global_compotents_IndependentName(b);
                //             zmEditor.globalMethod.nav.initNavList.nav_ele_style_assignment(zmEditor.globalMethod.nav.OneType.li, a, "sStyle", "initStyle","li",nav_name,["width","height","lineHeight"]);
                //             zmEditor.globalMethod.nav.initNavList.nav_ele_style_assignment(zmEditor.globalMethod.nav.OneType.li, a, "hHover", "initHover","li",nav_name,["width","height","lineHeight"]);
                //             zmEditor.globalMethod.nav.initNavList.nav_ele_style_assignment_initclickhover(zmEditor.globalMethod.nav.OneType.li, a, "clickhover", "initclickhover","li",nav_name);
                //             zmEditor.globalMethod.nav.initNavList.nav_ele_style_assignment(zmEditor.globalMethod.nav.OneType.span, a, "sStyle", "initStyle","span",nav_name,["width","height"]);
                //             zmEditor.globalMethod.nav.initNavList.dropdownBg(zmEditor.globalMethod.nav.TwoType.ul.sStyle, "backgroundColor","dropdownBg",nav_name,a); //下拉列表的颜色
                //             // console.log(zmEditor.globalMethod.nav.data.arrLike[nav_name])
                //             // console.log(b);
                //               var c,d,e,f;
                //               c=b[0].classList[3],d=b[0].classList[4]; //移除类名
                //               b.removeClass(c).removeClass(d);
                //               e=$(this).closest(".zm-nav")[0].classList[1];
                //               b.addClass(e).addClass(a);
                //             // console.log(nav_name);
                //               f=nav_name.replace(/-([A-z]+|_)*(\d+)/i,function(match,p1,p2,offset,string){
                //                   // console.log(match)
                //                   // console.log(p1)
                //                   // console.log(p2)
                //                  //本身以及子节点替换类名nav类型   //three:替换dom元素属性
                //                   // 替换mainCLss
                //                   b.removeAttr("data-"+p1);
                //                   b.attr("data-"+a,a+p2+"");
                //                   // 替换mainCLss
                //                   // 替换styleCLss
                //                   $(".style_nav_data-"+p1+p2).removeClass("style_nav_data-"+p1+p2).addClass("style_nav_data-"+a+p2);
                //                   // 替换styleCLss
                //                   // b 值未找到。
                //                  //  b.find("li").each(function(index,ele){
                //                  //  var li ,refreshLi;
                //                  //  li=$(this)[0].classList[0];
                //                  //  $(this).removeClass(li);
                //                  //  refreshLi=li.replace(/-([A-z]+|_)*/i,function(ma,p,t){
                //                  //    console.log(ma)
                //                  //    console.log(p)
                //                  //    console.log(t)
                //                  //      return "-"+a;
                //                  //  })
                //                  // $(this).addClass(refreshLi);
                //                  //  })
                //                   //本身以及子节点替换类名nav类型
                //                   return "-"+a+p2+"";
                //               });
                //             console.log(zmEditor.globalMethod.nav.data.arrLike)
                //             zmEditor.globalMethod.nav.data.arrLike[nav_name]   // one: 让对象下属性名变更;
                //             zmEditor.globalMethod.nav.data.arrLike[f]=zmEditor.globalMethod.nav.data.arrLike[nav_name];
                //               if(f==nav_name)return;else delete zmEditor.globalMethod.nav.data.arrLike[nav_name];//two:删除原有属性
                //
                //                 //three:替换dom元素属性
                //             console.log(zmEditor.globalMethod.nav.data.arrLike)
                //             console.log(zmEditor.globalMethod.nav.data.arrLike[f]);
                //             console.log(b);
                //             // zmEditor.globalMethod.nav.initialize_html_callback($(zmEditor.globalMethod.nav.data.pageSet.html),b,zmEditor.globalMethod.nav.mouseenterOrleaveHover);
                //             zmEditor.globalMethod.nav.initialize_html_callback($(zmEditor.globalMethod.nav.data.pageSet.html),b,zmEditor.globalMethod.nav.hover_or_click_show(zmEditor.globalMethod.nav.data.arrLike[f].hover_or_click_show_string));//从新渲染nav
                //         }
                //         break;
                //     case "product":
                //         var nowEle = _this.children();
                //         if(nowEle.is(".zm-product-goods")){
                //             if(nowEle.is(".zm-edit-components-product-row")){
                //                 iSelected.removeClass("zm-edit-components-product-col").addClass("zm-edit-components-product-row");
                //             }
                //             if(nowEle.is(".zm-edit-components-product-col")){
                //                 iSelected.removeClass("zm-edit-components-product-row").addClass("zm-edit-components-product-col");
                //             }
                //         }
                //         if(nowEle.is(".zm-product-goodsList")){
                //             console.log(nowEle);
                //         }
                //
                //         break;
                //     case "tab":
                //
                //         break;
                //     case "carousel":
                //         var carouselBox = '.zm-component-carousel-box';
                //         var slideStyle = _this.find(carouselBox).attr("slide-type");
                //         zmEditor.component.carousel.render(iSelected,slideStyle);
                //         var slideArgs = iSelected.find(carouselBox).attr('data-slide-args');
                //         iSelected.find(carouselBox).attr({'data-slide-args':
                //         slideArgs.split('effect=')[0] + 'effect=' + slideStyle + '&hoverStop' +
                //         slideArgs.split('&hoverStop')[1],'slide-type':slideStyle});
                //         if(iSelected.find(carouselBox).hasClass('maxWidth1200')){
                //             iSelected.width('1200px')
                //         }
                //         if(_this.find('.zm-component-carousel-pageCutBtn').length>0){
                //             iSelected.find('.zm-component-carousel-controlBtn').show()
                //         }
                //         if(_this.find('.zm-component-carousel-point').length>0){
                //             iSelected.find('.zm-component-carousel-pointGroup').show()
                //         }
                //         break;
                //     case "img":
                //         zmEditor.component.img.setImgStyle(iSelected,_this);
                //         break;
                //     case "shape":
                //         zmEditor.component.shape.setShapeStyle(iSelected,_this);
                //         break;
                //     case "video":
                //         zmEditor.component.video.setVideoStyle(iSelected,_this);
                //         console.log(222222222)
                //         break;
                //     case "news":
                //     case "blog":
                //         zmEditor.component.news.setNewsBlogStyle(iSelected,_this);
                //         break;
                //     case "function":
                //         var functionType = iSelected.find('.zm-component-function-content').attr('data-functionType');
                //         switch (functionType){
                //             case 'search':
                //                 zmEditor.component.function.searchMethod.setSearchBarStyle(_this);
                //                 break;
                //             case 'shopping':
                //                 zmEditor.component.function.shoppingMethod.setShoppingCartStyle(_this);
                //                 break;
                //             case 'file':
                //                 zmEditor.component.function.fileMethod.setFileStyle(_this);
                //                 break;
                //             case 'enter':
                //                 zmEditor.component.function.enterMethod.setEnterStyle(_this);
                //                 break;
                //             case 'option':
                //                 zmEditor.component.function.optionMethod.setOptionStyle(_this);
                //                 break;
                //             default:
                //                 break
                //         }
                //         break;
                //     default:
                //         com_box.find(".zm-component-main:eq(0)").css({'width':'auto','height':'auto'})
                //         com_box.find(".zm-component-main:eq(0)").children().attr("style",this_style);
                //         break;
                // }
            });
            // content.append('<button class="zm-edit-go2"  onclick="zmEditor.component.setting(this)">设置<span class="fa fa-angle-double-right"></span></button>')
            box.find('.zm-dialog-header').append('<button class="zm-dialog-header-btn zm-tooltip" data-zm-title="设置"  onclick="zmEditor.component.setting(this)"><span class=" fa fa-cog"></span></button>');
            content.append(tabs);
            $('body').append(box);
            box.find(".zm-dialog-title").text(dialogTitle+'样式');
            zmEditor.dialog.setBtnInfo(box,zmEditor.component.dialogBtnInfo[type].style);//设置弹窗中关闭跟问号按钮内容
            box.find('.zm-dialog-close').on('click',function(){
                $(this).zmDialog('remove')
            })
            switch (type){
                case "banner":
                    tabs.before(zmEditor.component.banner.bannerSetting(iSelected,{},tabs));
                    tabs.closest(".zm-dialog").children(".zm-dialog-header").children("button:eq(2)").remove();
                    tabs.css("height","415px");
                    tabs.mCustomScrollbar({theme:"minimal"});//加滚动条
                    break;
                case "text":
                    break;
                default:
                    break;
            }
            box.zmDialog();
        },
        //组件设置窗
        setting:function(e){
            var box = zmEditor.dialog.box();
            var content = box.find(".zm-dialog-content");
            var tabs;
            var com_box = zmEditor.component.nowBox1();
            var main = com_box.find('.zm-component-main');
            var type = com_box.attr("data-zm-component-type")||"";
            var lastBox = $(".zm-dialog-box").not('.zm-dialog-box-pageSet');
            var lastLeft=lastBox.css("left");
            var lastTop=lastBox.css("top");
            box.css({'left':lastLeft,'top':lastTop}).addClass('zm-component-settingPanel');
            lastBox.remove();//ay：移除其他设置窗
            tabs = zmEditor.component[type].setting(box);
            var dialogTitle=zmEditor.arr.componentTypes[type]||'弹窗';
            box.find('.zm-dialog-header').append('<button class="zm-dialog-header-btn zm-tooltip" data-zm-title="替换样式"  onclick="zmEditor.component.style(this)"><span class=" fa fa-navicon"></span></button>');
            if(main.hasClass('zm-component-share-function-main')|| main.hasClass('zm-component-map-main')){//分享和地图组件删除切换样式按钮2017-7-20
                box.find('.zm-dialog-header button').eq(2).remove()
            }
            if(main.closest(".zm-component-box1").attr("data-zm-component-type")=="banner"){ // 由于banner组件不需要组件切换按钮，在这里remove掉。 2017.7.10
                box.find('.zm-dialog-header').find('button:eq(2)').remove();
            }
            content.append(tabs);//设置窗口主体内容
            $('body').append(box);//给组件加载设置窗口
            box.find(".zm-dialog-title").text(dialogTitle+'设置');//设置弹窗title
            zmEditor.dialog.setBtnInfo(box,zmEditor.component.dialogBtnInfo[type].setting);//设置弹窗中关闭跟问号按钮内容
            box.find('.zm-dialog-close').on('click',function(){
                $(this).zmDialog('remove')
            });
            // if(windowH-250>635){
            //     box.find('.zm-dialog-content').css({height:'635px'})
            // }else{
            //     box.find('.zm-dialog-content').css({height:windowH-250})
            // }
            box.zmDialog();
        }
    },
    //模板相关方法
    template:{
        //模板选择
        choice:function(){
            var template = $(".zm-template");
            var allTemplates = $(".zm-template-all");
            allTemplates.animate({"top":0},300);
            $(".zm-template-list").show();
        },
        //获取所有模板
        getAllList:function(){
            var template = $(".zm-template");
            var allTemplates = $(".zm-template-all");
            $('.zm-template-o-close').click(function(){
                allTemplates.animate({"top":"-100%"},300);
            })
            //返回模板列表页
            allTemplates.on("click",".zm-template-o-back",function(){
                $(".zm-template-list").fadeIn();
                $(".zm-template-view").fadeOut();
            });
            $.ajax({
                type: "get",
                url: zmEditor.url.getTemplatesList,
                dataType: "json",
                success: function(e){
                    var list1 = e.data;
                     // console.log(JSON.stringify(list1))
                    var type1Html = "";
                    var tList=[];
                    list1.forEach(function(type1){
                        var list2 = type1.list;
                        var type2Html = "";
                        list2.forEach(function(type2){
                            type2Html+='<a class="zm-template-type-t" data-zm-fId="'+type2.fTypeId2+'">'+type2.fTypeName2+'</a>';
                            tList.push({"id":type2.fTypeId2,"list":type2.list});
                        })
                        type2Html='<div>'+type2Html+'</div>';
                        type1Html+='<div><p>'+type1.fTypeName1+'</p>'+type2Html+'</div>';
                    });
                    zmEditor.arr.templateList=tList;
                    allTemplates.find(".zm-template-all-menu").html(type1Html);
                    //点击模板小类显示模板列表
                    allTemplates.find(".zm-template-type-t").on("click",function(){
                        zmEditor.template.getListByType2($(this).attr("data-zm-fId"),tList);
                        $(this).closest('.zm-template-all-menu').stop().fadeOut(300);
                    });
                    allTemplates.find(".zm-template-all-menu-li").hover(function(){
                        $(this).find('.zm-template-all-menu').stop().fadeIn(300);
                    },function(){
                        $(this).find('.zm-template-all-menu').stop().fadeOut(300);
                    });
                    //模板查看
                    allTemplates.on("click",".zm-template-o-view",function(){
                        allTemplates.find('.zm-template-o-use2').attr('data-zm-fId',$(this).attr("data-zm-fId"));
                        zmEditor.template.view($(this).attr("data-zm-fId"));
                    });
                    //模板使用
                    allTemplates.on("click",".zm-template-o-use",function(){
                        zmEditor.template.use($(this).attr("data-zm-fId"));
                    });
                    //模板使用2
                    allTemplates.on("click",".zm-template-o-use2",function(){
                        zmEditor.template.use($(this).attr("data-zm-fId"));
                    });
                }
            });
        },
        //点击模板小类获取模板列表
        getListByType2:function(id,data){
            var windowH = $(window).height();
            var len = data.length;
            for(var i=0;i<len;i++){
                if(id==data[i].id){
                    var list = data[i].list;
                    var html ="";
                    list.forEach(function(e){
                        html+='<div class="zm-template-item"><img src="'+e.fImage+'"/>'+e.fName
                            +'<div class="zm-template-item-hover">'
                            +'<div><a class="zm-template-o-view" data-zm-fId="'+e.fId+'"><span class="fa fa-search"></span> 查看</a>'
                            +'<a  class="zm-template-o-use" data-zm-fId="'+e.fId+'"><span class="fa fa-check"></span> 使用</a></div>'
                            +'</div></div>'
                    });
                    break;
                }
            }
            $(".zm-template-all-body-right").html(html);
            $(".zm-template-all-body-right").css({"height":windowH-120})
        },
        //通过id获取模板信息
        getInfoById:function(id,cb){
            $.ajax({
                type: "get",
                url: zmEditor.url.getTemplateById,
                data : {"fTempletId":id},
                dataType: "json",
                success: function(e){
                    var list = e.data;
                    console.log(JSON.stringify(list))
                    //console.log(e.data)
                    if(cb){
                        cb(list);
                    }
                },
                error:function(){
                    console.error("error:getTemplateInfoById !!!")
                }
            });
        },
        //初始化html
        initHtml:function(list){
            var template = $(".zm-template");
            var pages = list.pages;
            var tempPage = "";
            var hHtml="",fHtml="",bHtml="";
            template.find(".zm-row").remove();
            var defaultPage = true;
            pages.forEach(function(page) {
                if(page.fHtml==undefined||page.fHtml==""){
                    tempPage = $(zmEditor.str.row.html);
                }
                else{
                    tempPage = $(page.fHtml);
                }
                tempPage.attr("data-zm-pageId", page.fId);
                if (page.fPageType == 1) {
                    template.find(".zm-head .zm-row-line").before(tempPage);
                }
                else if (page.fPageType == 3) {
                    template.find(".zm-foot .zm-row-line").before(tempPage);
                }
                else {
                    template.find(".zm-body .zm-row-line").before(tempPage);
                    if (defaultPage) {
                        defaultPage = false;
                    }
                    else {
                        tempPage.hide();
                    }
                }
            })
        },
        //查看模板
        view:function(id){
            $(".zm-template-list").hide();
            $(".zm-template-view").stop().fadeIn();
            //获取模板信息
            zmEditor.template.getInfoById(id,callback);
            function callback(list) {
                $(".zm-template-all-header-title").html("<span >---正在预览的模板编号为：" + id + "</span>")
                var windowH = $(window).height();
                var headerH = $('.zm-template-all-header').height();
                var pages = list.pages;
                var hHtml = "", fHtml = "", bHtml = "";
                console.log(pages)
                pages.forEach(function (page) {
                    if (page.fHtml) {
                        if (page.fPageType == 1) {
                            hHtml = page.fHtml;
                        }
                        else if (page.fPageType == 3) {
                            fHtml = page.fHtml;
                        }
                        else {
                            bHtml += page.fHtml;
                        }
                    }
                });
                $(".zm-template-view-body").css('height', windowH - headerH).html(hHtml + bHtml + fHtml);
            }
        },
        //使用模板
        use:function(id){
            $(".zm-template-view").hide();
            $(".zm-template-list").stop().fadeIn();
            var template = $(".zm-template");
            var allTemplates = $(".zm-template-all");
            template.attr("data-zm-templateId",id)
            allTemplates.animate({"top":"-100%"},300);
            //zmEditor.controller.template.choseDialog("hide")
            //获取模板信息
            zmEditor.template.getInfoById(id,callBack);
            function callBack(list){
                //初始化模板代码
                zmEditor.template.initHtml(list);
                template.find(".zm-row").css({"border-left":"1px dotted deepskyblue","border-right":"1px dotted deepskyblue"});
                template.find(".zm-row").append(zmEditor.str.row.resize)
                template.find(".zm-row-full").append(zmEditor.str.row.line);
                //template.find(".zm-row-line,.zm-row-resize,.zm-row-type").remove();
                template.find(".zm-component-box1").each(function(){
                    var _this = $(this);
                    var main = _this.find(".zm-component-main");
                    _this.addClass("zm-component-editor zm-component-movable");
                    _this.children().append(zmEditor.str.component.mainT);
                    _this.children().append(zmEditor.str.component.resize);
                    //main.attr("contenteditable",true)
                    //thisBox.prop("outerHTML",thisElement.prop("outerHTML"))
                })
            }
        },
        //模板预览
        preview:function(){
            var allHtml = $(".zm-all").prop("outerHTML")
            localStorage.setItem("zmPreviewHtml", allHtml);
            localStorage.setItem("zmPreviewStyle", $(document).find('head').html());
            localStorage.setItem("zmPreviewScript", $('#zmPreviewScript').html());
            // localStorage.setItem("previewObject", {html:allHtml,styleList:$(document).find('head').html(),scriptList:$('body').nextAll()});
            window.open('website-preview.html','_blank')
        }
    },
    /*头部刻度尺设置*/
    setRuler:function(width){
        var w=$(document).width();
        var h = $(window).height();
        var headerH = $(".zm-header").height();
        $(".zm-all").css("height",h-headerH);
        $(".zm-row").css({"width":width});
        var rowLeft =100;
        if($(".zm-row:eq(0)").length>0){
            rowLeft=$(".zm-row:eq(0)").offset().left
        }
        var startI = -(w-width)/2;
        $(".zm-editor-ruler-x-switch-box").css({"left":rowLeft+width});
        $(".zm-editor-ruler-x-width").html(width+"px");
        var rulerHtml="";
        var rulerStart=startI%5;
        var i=parseInt(startI/5);
        var len = (w-rowLeft)/5;
        for(;i<=len;i++){
            if(i<0){
                if(i%10==0){
                    rulerHtml+="<span class='zm-editor-ruler-x-span2'><span>"+i*5+"</span></span>"
                }else{
                    rulerHtml+="<span class='zm-editor-ruler-x-span'></span>"
                }
            }else{
                if(i==0){
                    rulerHtml+="<span class='zm-editor-ruler-x-firstSpan2'><span>0</span></span>"
                }
                else if(i==width/5){
                    if(i%10==0){
                        rulerHtml+="<span class='zm-editor-ruler-x-endSpan2'><span>"+i*5+"</span></span>"
                    }else{
                        rulerHtml+="<span class='zm-editor-ruler-x-endSpan2'></span>"
                    }
                }
                else{
                    if(i%10==0){
                        rulerHtml+="<span class='zm-editor-ruler-x-span2'><span>"+i*5+"</span></span>"
                    }else{
                        rulerHtml+="<span class='zm-editor-ruler-x-span'></span>"
                    }
                }
            }
        }
        $(".zm-editor-ruler-x").html(rulerHtml);
        $(".zm-editor-ruler-x").css("left",Math.abs(rulerStart)-8);
        //$(".zm-editor-ruler-x").css({"width":width+1,"marginLeft":(w-width)/2})

    },
    /*
    生成唯一id，前四位十六进制随机数，后四位十进制随机数，中间是毫秒时间戳
    理论上不会重复，真重复了，那你就可以去买彩票了
    */
    createId:function(e){
        var _this = $(e);
        var id = (Math.random()*10000000).toString(16).substr(0,4)+'-'+(new Date()).getTime()+'-'+Math.random().toString().substr(2,5);
        _this.attr("id",id+"-b");
        _this.find(".zm-component-main").attr("id",id+"-m");
        return id+'-b';
        // var pId = _this.parent().attr("data-zm-id");
        // _this.attr("data-zm-pid", pId);
    },
    getNavigationPageList:function(){
        $.ajax({
            type: "get",
            url: zmEditor.url.getNavigationPageList,
            dataType: "json",
            success: function(e){
                var list = e.data;
                zmEditor.arr.pageList=list;
                var html = "";
                list.forEach(function(e){
                    html+='<li data-zm-pageId="'+e.fId+'">'
                        +'<span>'+e.fName+'</span>'
                        +'<div>'
                        +'<ul>'
                        +'<li><span>标题</span><input value="'+e.fName+'"></li>'
                        +'<li><span>页面地址</span><input value="'+e.fName+'"></li>'
                        +'<li><span>设为主页</span><input value="'+e.fName+'"></li>'
                        +'<li><span>选择模板</span><input value="'+e.fName+'"></li>'
                        +'<li><span>SEO标题</span><input value="'+e.fName+'"></li>'
                        +'<li><span>SEO关键字</span><input value="'+e.fName+'"></li>'
                        +'<li class="zm-page-set-pageDescribe"><span>页面描述</span><textarea ></textarea></li>'
                        +'</ul>'
                        +'<div class="zm-page-set-savePage"><button>保 存</button></div>'
                        +'</div>'
                        +'</li>'
                })
                var ul = $(".zm-header .zm-page-set ul");
                var addPage = '<li class="zm-page-set-addPage"><button>+添加页面</button></li>'
                ul.html(html+addPage)
                var defaultPageId = ul.children("li").eq(0).attr("data-zm-pageId");//默认pageid为首页
                $(".zm-all").attr("data-zm-pageId",defaultPageId)
            }
        });
    },
    getNavigationPageById:function(id){
        $(".zm-all").find(".zm-component-box2").each(function(){
            var _this = $(this);
            _this.append(zmEditor.str.component.box2);
            _this.parent().addClass("zm-component-editor zm-component-movable")
        })
        zmEditor.setRuler(1200);//动态生成刻度尺默认1200px
    },
    //发布
    publish:function(){
        var all = $($(".zm-all").prop("outerHTML"));
        var pageId = all.attr("data-zm-pageId")!=""?all.attr("data-zm-pageId"):"";
        var width = parseInt($(".zm-editor-ruler-x-width").html())
        var list = zmEditor.arr.changedComponentsList;
        var componentsList =[];
        var cssList =[];
        var jsList =[];
        var rowList =[];
        list.forEach(function(e){
            var _this = all.find("[data-zm-id='"+e+"']");
            var rowId = _this.attr("data-zm-rowid");
            _this.removeClass("zm-component-editor zm-component-movable");
            _this.find(".zm-component-resize,.zm-component-edit").remove();
            var main = _this.find(".zm-component-main");
            main.attr("contenteditable",false);
            var html = _this.prop("outerHTML");
            componentsList.push({"id":e,"pId":"","rowId":rowId,"type":"text","params":"","html":html});
        })
        $("link[isuse='true']").each(function(){
            var _this = $(this);
            var src = _this.attr("href");
            var rel = _this.attr("rel");
            var srcId = _this.attr("srcid");
            var isUse = _this.attr("isuse");
            cssList.push({"src":src,"srcId":srcId,"isUse":isUse})
        })
        $("script[isuse='true']").each(function(){
            var _this = $(this);
            var src = _this.attr("src");
            var srcId = _this.attr("srcid");
            var isUse = _this.attr("isuse");
            jsList.push({"src":src,"srcId":srcId,"isUse":isUse})
        });
        all.find(".zm-row").each(function(){
            var _this = $(this);
            var id = _this.attr("data-zm-id");
            var clas= _this.attr("class");
            var style = _this.attr("style");
            rowList.push({"id":id,"clas":clas,"style":style})
        });
        var json={"componentsList":componentsList,"cssList":cssList,"jsList":jsList,"webWidth":width,"rowList":rowList,"pageId":pageId};
        $.ajax({
            type: "post",
            url: zmEditor.url.publish,
            data:{"json": JSON.stringify(json)},
            dataType: "json",
            success: function(e){
                $.ajax({
                    type: "get",
                    url: zmEditor.url.getNavigationPageById,
                    dataType: "json",
                    success: function(e){
                        var data= e.data.fJsonText;
                        localStorage.setItem("publishHtml", data);
                        window.open('test.html','_blank');
                    },
                    error:function(){
                        console.error("2出错了！！")
                    }
                });
            },
            error:function(){
                console.error("1出错了！！")
            }
        });
    },
    zmScreenShot:function(){
        var tempDiv = $('<div class="zm-dialog-screenShot-shotBox">'
                + '<div class="zm-dialog-screenShot-area">'
                + '<button class="zm-dialog-screenShot-btn zm-tooltip" data-zm-title="完成">'
                + '<i class="fa fa-check"></i></button>'
                + '<canvas class=".zm-dialog-screenShot-realArea"></canvas>'
                + '<div class="zm-dialog-screenShot-resize">'
                + '<span></span><span></span><span></span><span></span>'
                + '<span></span><span></span><span></span><span></span>'
                + '</div></div></div>');
        var shotArea = tempDiv.find('.zm-dialog-screenShot-area');
        var shotBtn = shotArea.find('.zm-dialog-screenShot-btn');
        var point = shotArea.find('.zm-dialog-screenShot-resize>span');
        var realArea = shotArea.find('.zm-dialog-screenShot-realArea');
        
        $('body').append(tempDiv);

        shotArea.on('mousedown',function (e) {
            e.preventDefault(e);
            var doc = $(document),_this = $(this);
            var fullW = parseInt(document.documentElement.clientWidth),
                fullH = parseInt(document.documentElement.clientHeight);
            var _thisW = parseInt(_this.width()),_thisH = parseInt(_this.height());
            var origL = _this.offset().left,origT = _this.offset().top;
            var downX = e.pageX,downY = e.pageY;
            doc.on('mousemove',function (e) {
                var moveX = e.pageX,moveY = e.pageY;
                var newL = origL + moveX - downX,
                    newT = origT + moveY - downY;
                if(newL<0){newL = 0}
                if(newL>fullW-_thisW){newL = fullW-_thisW}
                if(newT<0){newT = 0}
                if(newT>fullH - _thisH){newT = fullH - _thisH}
                 _this.css({left:newL,top:newT});
                shotBtn.css('top',newT<30?_thisH + 5:-25)
            }).on('mouseup',function () {
                doc.off('mouseup').off('mousemove');
            })
        });//移动截图区域位置

        point.on('mousedown',function (e) {
            e.preventDefault(e);
            e.stopPropagation();
            var doc = $(document),_this = $(this),index = _this.index();
            var origW = shotArea.width(),origH = shotArea.height(),
                origL = shotArea.offset().left,origT = shotArea.offset().top;
            var downX = e.clientX,downY = e.clientY;
            doc.on('mousemove',function (e) {
                var moveX = e.clientX,moveY = e.clientY;
                var w,h,l,t;
                switch (index){
                    case 0:
                        w = origW + downX - moveX;
                        h = origH + downY - moveY;
                        l = origL - downX + moveX;
                        t = origT - downY + moveY;
                        break;
                    case 1:
                        h = origH + downY - moveY;
                        t = origT - downY + moveY;
                        break;
                    case 2:
                        w = origW - downX + moveX;
                        h = origH + downY - moveY;
                        t = origT - downY + moveY;
                        break;
                    case 3:
                        w = origW - downX + moveX;
                        break;
                    case 4:
                        w = origW - downX + moveX;
                        h = origH - downY + moveY;
                        break;
                    case 5:
                        h = origH - downY + moveY;
                        break;
                    case 6:
                        w = origW + downX - moveX;
                        h = origH - downY + moveY;
                        l = origL - downX + moveX;
                        break;
                    case 7:
                        w = origW + downX - moveX;
                        l = origL - downX + moveX;
                        break;
                    default:
                        break
                }
                shotArea.css({width:w,height:h}).offset({left:l,top:t})
            }).on('mouseup',function () {
                doc.off('mouseup').off('mousemove')
            })
        });

        shotBtn.on('click',function () {
            //canvas渲染不给力啊！！！
            // html2canvas($('body'),{
            //     allowTaint: false,
            //     taintTest: true,
            //     useCORS: false,
            //     proxy:   false,
            //     onrendered:function (canvas) {
            //         var dataUrl = canvas.toDataURL();
            //         console.log(dataUrl)
            //     }
            // })
            var w = shotArea.width(),h = shotArea.height(),
                x = shotArea.offset().left,y = shotArea.offset().top;
            console.log(x,y,w,h);
            var c = document.getElementsByClassName('.zm-dialog-screenShot-realArea')[0];
            var ctx = c.getContext('2d');
            // var zmAll = document.getElementsByClassName('.zm-all')[0];
            // ctx.drawImage(zmAll,5,5);

            console.log(ctx.getImageData(x,y,w,h))
        });//生成图片
        $(document).on('keydown',function (e) {
            if(e.keyCode === 27){
                tempDiv.remove()
            }
        })
    }
};

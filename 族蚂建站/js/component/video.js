/**
 * Created by guixuefeng on 2017/4/14.
 */
zmEditor.component.video={
    setting:function(box){
        var nowEdit = zmEditor.component.nowEdit();
        nowEdit.css("overflow","hidden");
        //布局
        // var tabs1 = $('<div></div>');
        var config1 = [
            {type:'video_cutStyle',element:nowEdit, flag: ''},
            {type: "video_HLnumber",element: nowEdit},
            {type: "slider",element: nowEdit,flag: {title: "背景颜色",style: "noTab_color",isColor: true,param: "backgroundColor"}},
            {type: "slider",element: nowEdit,flag: {title: "边框颜色",style: "noTab_color",isColor: true,param: "borderColor",goal:".zm-videoPack"}},
            {type: "slider",element: nowEdit,flag: {title: "边框宽度",style: "noTab_noColor",isColor: false,param: "borderWidth",size: [0,5],goal:".zm-videoPack"}},
        ];
        var tabs1 = zmEditor.component.setItems.config(config1);
        // items1.forEach(function (e) {
        //     tabs1.append(e);
        // });
        //视频
        // var tabs2 = $('<div></div>');
        var config2 = [
            {type:'video_addVideo',element:nowEdit, flag: ''}
        ];
        var tabs2 = zmEditor.component.setItems.config(config2);
        // items2.forEach(function (e) {
        //     tabs2.append(e);
        // });

        //播放键

        //按钮式
        // var tabs3_1_c1=$('<div></div>');
        var config3_1_c1 = [
            {type: "video_displayStyle",element: nowEdit},
            {type: "video_playBtncontent",element: nowEdit},
            {type:'Family',element:nowEdit,flag:{title:'字体类型',style:'tab',param:'normal',goal:".zm-videobtn-text"}},
            {type:'slider',element: nowEdit,flag: {title: "文字大小<br><span>（像素）</span>", style: "tab_noColor",isColor:false, param: "fontSize", size: [12,25],goal:".zm-videobtn-text"}},
            {type:'slider',element:nowEdit,flag:{title:'文字颜色',style:'tab_color',isColor:true, param:'color', size: [12,180],goal:".zm-videobtn-text"}},
            {type:'fontStyle',element:nowEdit,flag:{title:'',style:'normal',param:'',goal:".zm-videobtn-text"}},
            {type:'slider',element: nowEdit,flag: {title: "字间距<br><span>（像素）</span>", style: "tab_noColor",isColor:false,param:'fontSpace',size: [0,25],goal:".zm-videobtn-text"}},
            //{type:'slider',element:nowEdit,flag:{title:'(光标悬停)字体颜色',style:'tab_color',isColor:true, param:'color', size: [12,180],goal:".zm-video-btn"}},
            {type: 'slider',element: nowEdit,flag: {title:'(光标悬停)文字颜色', style: "tab_color",isColor:true,param:'hoverColor',goal:".zm-videobtn-text"}}
        ];
        //{type:'fontStyle',element:nowEdit,flag:{title:'',style:'normal',param:'',goal:".zm-video-title"}},
        var tabs3_1_c1 = zmEditor.component.setItems.config(config3_1_c1);
        // items3_1_c1.forEach(function(e){
        //     tabs3_1_c1.append(e);
        // });

        // var tabs3_1_c2=$('<div></div>');
       // var btnWidth=nowEdit.find(".zm-videoBlackcover .zm-video-btn2").length>0? nowEdit.find(".zm-video-btn2"):nowEdit.find(".zm-video-btn1")
        var config3_1_c2 = [
            {type:'slider',element: nowEdit,flag: {title: "按钮长度", style: "tab_noColor",isColor:false,param:'width',size: [40,200],goal:".zm-videobtn-text"}},
            {type:'slider',element: nowEdit,flag: {title: "按钮高度", style: "tab_noColor",isColor:false,param:'height',size: [20,50],goal:".zm-videobtn-text"}},
            {type: "slider",element: nowEdit,flag: {title: "背景颜色", style: "tab_color",isColor:true,  param: "backgroundColor", size: [0,100],goal:".zm-videobtn-text"}},
            {type: "slider",element: nowEdit,flag: {title: "边线颜色", style: "tab_color",isColor:true,  param: "borderColor", size: [0,100],goal:".zm-videobtn-text"}},
            {type: "slider",element: nowEdit,flag: {title: "边线粗细<br><span>（像素）</span>", style: "tab_noColor",isColor:false,  param: "borderWidth", size: [0,5],goal:".zm-videobtn-text"}},
            {type:'radiu_ordinary',element:nowEdit,flag:{goal:".zm-videobtn-text"}}
        ];
        var tabs3_1_c2 = zmEditor.component.setItems.config(config3_1_c2);
        // items3_1_c2.forEach(function(e){
        //     tabs3_1_c2.append(e);
        // });

        // var tabs3_1_c3=$('<div></div>');
        var config3_1_c3 = [
            //{type: "boxShadow",element: nowEdit,flag: {style: "noTab"}},
            {type:'boxShadow',element:nowEdit,flag:{style:"tab",goal:".zm-videobtn-text"}}
        ];
        var tabs3_1_c3 = zmEditor.component.setItems.config(config3_1_c3);
        // items3_1_c3.forEach(function(e){
        //     tabs3_1_c3.append(e);
        //     e.find(".zm-edit-text-title").width("72px");
        // });

        var tabs1List_1 = [
            {title:"<span class='fa fa-text-width'></span><br>文字",content:tabs3_1_c1},
            {title:"<span class='fa fa-star'></span><br>形状",content:tabs3_1_c2},
            {title:"<span class='fa fa-map'></span><br>阴影",content:tabs3_1_c3}
        ];
        var tabs3_1 = zmEditor.component.setItems.tabs_child(tabs1List_1);

       //图标式
       //  var tabs3_2_c1=$('<div></div>');
        //var btnScale=nowEdit.find(".zm-videoBlackcover .zm-video-btn1").length>0? nowEdit.find(".zm-videoBlackcover .zm-video-btn1"):nowEdit.find(".zm-videoBlackcover .zm-video-btn2")
        var config3_2_c1 = [
            {type: "video_displayStyle",element: nowEdit},
            {type: "video_playBtnStyle",element: nowEdit},
            {type:'slider1',element: nowEdit,flag: {title: "等比例<br>&nbsp;缩放", style: "tab_noColor1",isColor:false,param:'scale',size: [0.2,3],goal:".video-playBtn-style1",toFixed:1}},
            {type: "slider",element: nowEdit,flag: {title: "背景颜色", style: "tab_color",isColor:true,  param: "fill", size: [0,100],goal:"svg"}},
            {type:'slider',element:nowEdit,flag:{title:'(光标悬停)背景颜色',style: "tab_color",isColor:true,param:'hoverBackgroundColor',goal:"svg"}}
        ];


        // type: "slider", element: nowEdit.find('svg'), flag: {
        //title: "背景颜色", style: "noTab_color", isColor: true, param: "fill"
        var tabs3_2_c1 = zmEditor.component.setItems.config(config3_2_c1);
        // items3_2_c1.forEach(function(e){
        //     tabs3_2_c1.append(e);
        // });
        // var tabs3_2_c2=$('<div></div>');
         var textBtnShadow=nowEdit.find(".zm-videobtn-text").length>0? nowEdit.find(".zm-videobtn-text"):nowEdit.find(".zm-video-btn");
        var config3_2_c2 = [
            {type:'boxShadow',element:textBtnShadow,flag:{style:"tab"}}
        ];
        var tabs3_2_c2 = zmEditor.component.setItems.config(config3_2_c2);
        // items3_2_c2.forEach(function(e){
        //     tabs3_2_c2.append(e);
        // });
        var tabs1List_2 = [
            {title:"<span class='fa fa-qrcode'></span><br>常规",content:tabs3_2_c1},
            {title:"<span class='fa fa-map'></span><br>阴影",content:tabs3_2_c2}
        ];
        var tabs3_2 = zmEditor.component.setItems.tabs_child(tabs1List_2);
        var a=zmEditor.component.nowEdit().find(".zm-videobtn-text");
        var b=zmEditor.component.nowEdit().find(".video-playBtn-style1");
            a=a.eq(0);
            b=b.eq(0);
        var tabs3_2_1,tabs3_2_2,tabs3_2_3;
        if(a.css("display")=="block"&& b.css("display")=="none"){
             tabs3_2_1=true;
             tabs3_2_2=false;
             tabs3_2_3=false;
        }else if(b.css("display")=="block"&& a.css("display")=="none"){
             tabs3_2_1=false;
             tabs3_2_2=true;
             tabs3_2_3=false;
        }else if(a.css("display")=="none"&& b.css("display")=="none"){
            tabs3_2_1=false;
            tabs3_2_2=false;
            tabs3_2_3=true;
        }
        console.log(a)

        //无播放键
        var tabs3_3 = $('<div></div>');
        var tabs1List3 = [
            {title:"<div class='zm-videoPlay-btnchoice'><label style='border: 1px solid #aeaeae' ></label><span>按钮式</span></div>",content:tabs3_1,callBack:fn1,isShow:tabs3_2_1},
            {title:"<div class='zm-videoPlay-btnchoice'><label style='border: 1px solid #aeaeae' ></label><span>图形式</span></div>",content:tabs3_2,callBack:fn2,isShow:tabs3_2_2},
            {title:"<div class='zm-videoPlay-btnchoice'><label style='border: 1px solid #aeaeae' ></label><span>无播放键</span></div>",content:tabs3_3,callBack:fn3,isShow:tabs3_2_3}
        ];
        function fn1(){
            var a=zmEditor.component.nowEdit().find(".zm-videobtn-text");
            var b=zmEditor.component.nowEdit().find(".video-playBtn-style1");
            var zmWrapHover= zmEditor.component.nowEdit().find(".zm-videoPack");
            var zmWrapHoverDel=zmEditor.component.nowEdit().find(".zm-videoBlackcover");
            var c=$(".video-dispay-StyleContore label");
            zmWrapHoverDel.attr("data-hoverType","none")
            zmWrapHoverDel.css("display","block")
            zmWrapHover.unbind("mouseenter").unbind("mouseleave");
            a.css("display","block");
            b.css("display","none");
            c.eq(0).addClass("choice");
            c.eq(2).addClass("choice");
            c.eq(1).removeClass("choice");
            c.eq(3).removeClass("choice");

        }
        function fn2(){
            var a=zmEditor.component.nowEdit().find(".zm-videobtn-text");
            var b=zmEditor.component.nowEdit().find(".video-playBtn-style1");
            var zmWrapHover= zmEditor.component.nowEdit().find(".zm-videoPack");
            var zmWrapHoverDel=zmEditor.component.nowEdit().find(".zm-videoBlackcover");
            zmWrapHoverDel.attr("data-hoverType","none")
            zmWrapHoverDel.css("display","block")
            zmWrapHover.unbind("mouseenter").unbind("mouseleave");
            var c=$(".video-dispay-StyleContore label");
            b.css("display","block");
            a.css("display","none");
            c.eq(0).addClass("choice");
            c.eq(2).addClass("choice");
            c.eq(1).removeClass("choice");
            c.eq(3).removeClass("choice");
        }

        function fn3(){
            var a=zmEditor.component.nowEdit().find(".zm-videobtn-text");
            var b=zmEditor.component.nowEdit().find(".video-playBtn-style1");
            var zmWrapHover= zmEditor.component.nowEdit().find(".zm-videoPack");
            var zmWrapHoverDel=zmEditor.component.nowEdit().find(".zm-videoBlackcover");
            zmWrapHoverDel.attr("data-hoverType","none")
            zmWrapHoverDel.css("display","block")
            zmWrapHover.unbind("mouseenter").unbind("mouseleave");
            a.css("display","none");
            b.css("display","none");

        }
        var tabs3=zmEditor.component.setItems.tabs_other(tabs1List3);
        tabs3.on('click','')

        //内容
        //内容布局
        // var tabs4_c1=$('<div></div>');
        var config4_c1 =[
            {type:'paragraphStyle',element:nowEdit,flag:{title:'',style:'normal',param:'',goal:".zm-videoInfo-text"}},
            {type:'slider',element:nowEdit,flag:{title:'背景颜色',style: "tab_color",isColor:true, param:'backgroundColor',goal:".zm-videoInfo-text"}},
        ];
        var tabs4_c1 = zmEditor.component.setItems.config(config4_c1);
        // items4_c1.forEach(function(e){
        //     tabs4_c1.append(e);
        // });
        //内容标题
        // var tabs4_c2=$('<div></div>');
        var config4_c2 =[
            {type:"video_Contenttitle",element:nowEdit,flag: {style: "mini",goal: ".zm-video-title",param: "color"}},
            //{type:"video_content",element:nowEdit.find(".zm-video-title"),flag:{title: "视频名称"}},
            {type:'fontStyle',element:nowEdit,flag:{title:'',style:'normal',param:'',goal:".zm-video-title"}},
            {type: 'slider',element: nowEdit,flag: {title:'(光标悬停)文字颜色', style: "tab_color",isColor:true,param:'hoverColor',goal:".zm-video-title"}},
            {type: "video_titledisplayStyle",element: nowEdit}
        ];
        var tabs4_c2 = zmEditor.component.setItems.config(config4_c2);
        // items4_c2.forEach(function(e){
        //     tabs4_c2.append(e);
        // });
        //内容简介
        // var tabs4_c3=$('<div></div>');
        var config4_c3 =[
            {type:"video_Contentintroduct",element:nowEdit,flag: {style: "mini",goal: ".zm-video-introduc",param: "color"}},
            {type:'fontStyle',element:nowEdit,flag:{title:'',style:'normal',param:'',goal:".zm-video-introduc"}},
            {type: 'slider', element: nowEdit, flag: {title: '显示行数', style: 'tab_noColor', isColor: false, param: 'wordsLineNum', size: [1, 5], goal: '.zm-video-introduc'}},
            // {type:'slider',element:nowEdit,flag:{title:'显示行数',style:'tab_noColor',param:'lineClamp',goal:".zm-video-introduc",size: [1,5]}},
            {type:'slider',element: nowEdit,flag: {title: "内容字间距<br><span>（像素）</span>", style: "tab_noColor",isColor:false,param:'fontSpace',size: [0,5],toFixed:1,goal:".zm-video-introduc"}},
            {type:'slider',element: nowEdit,flag: {title: '内容行距<br/>(像素)', style: 'tab_noColor', isColor: false, param: 'wordsLineHeight', size: [0, 10],toFixed:1,goal:".zm-video-introduc"}},
            //{type:'slider',element: nowEdit,flag: {title: "内容行间距<br><span>（像素）</span>", style: "tab_noColor",isColor:false,param:'lineSpace',size: [-20,10],goal:".zm-video-introduc"}},
            {type: "video_introducdisplayStyle",element: nowEdit}
        ];
        var tabs4_c3 = zmEditor.component.setItems.config(config4_c3);
        // items4_c3.forEach(function(e){
        //     tabs4_c3.append(e);
        // });
        //内容评论
        // var tabs4_c4=$('<div></div>');
        var config4_c4 =[
            {type:"video_content",element:nowEdit,flag: {style: "mini",goal: ".zm-video-comment",param: "color"}},
            //{type:"video_content",element:nowEdit,style:"tab",flag:{title: "视频名称"}},
            {type:'fontStyle',element:nowEdit,flag:{title:'',style:'normal',param:'',goal:".zm-video-comment"}},
            {type: "video_commentdisplayStyle",element: nowEdit}
        ];
        var tabs4_c4 = zmEditor.component.setItems.config(config4_c4);
        // items4_c4.forEach(function(e){
        //     tabs4_c4.append(e);
        // });
        //...****
        var tabs1List4 = [
            {title:"<span class='fa fa-th-large'></span><br>布局",content:tabs4_c1},
            {title:"<span class='fa fa-header'></span><br>标题",content:tabs4_c2},
            {title:"<span class='fa fa-file-text-o'></span><br>简介",content:tabs4_c3},
            {title:"<span class='fa fa-commenting'></span><br>评论",content:tabs4_c4}
        ];
        var tabs4 = zmEditor.component.setItems.tabs_child(tabs1List4);
        //阴影
        // var tabs5 = $('<div></div>');
        var config5 = [{type:'boxShadow',element:nowEdit,flag:''}];
        var tabs5 = zmEditor.component.setItems.config(config5);
        // items5.forEach(function (e) {
        //     tabs5.append(e);
        // });
        var tabsList = [{title:"布局",content:tabs1},{title:"视频",content:tabs2},{title:"播放键",content:tabs3},{title:"内容",content:tabs4},{title:"阴影",content:tabs5}];
        var tabs = zmEditor.component.setItems.tabs(tabsList);
        return tabs
    },
    videoCutStyle:function(ele){
        var iSelected = ele;
        var e =$('<div style="height: 330px;padding:10px 0px;margin: 0 20px" >'
            +'<div style="width: 320px;height: 192px;"><dvi class="zm-edit-videoStyle">'
            +'<div class="zm-edit-videoStyle-leftArrow zm-edit-videoStyleArrowBtn fa fa-chevron-left"></div>'
            +'<div class="zm-edit-videoStyleWrap"><div class="zm-edit-videoStylebox">'
            + '<ul class="zm-edit-videoStyleList">'
            +'<li data-type="1"><img src="imgs/video001.png" ></li>'
            +'<li data-type="2"><img src="imgs/video002.png" ></li>'
            +'<li data-type="3"><img src="imgs/video003.png" ></li>'
            +'<li data-type="4"><img src="imgs/video004.png" ></li>'
            +'<li data-type="5"><img src="imgs/video005.png" ></li>'
            +'<li data-type="6"><img src="imgs/video006.png" ></li>'
            +'<li data-type="7"><img src="imgs/video007.png" ></li>'
            +'<li data-type="8"><img src="imgs/video008.png" ></li>'
            +'</ul>'
            + '</div></div>'
            +'<div class="zm-edit-videoStyle-rightArrow zm-edit-videoStyleArrowBtn fa fa-chevron-right"></div>'
            +'</dvi></div>'
            + '<div style="height: 115px;">'
            + '<div class="zm-videoStyle-sizeWrap">'
            +'<div class="zm-videoStyle-sizeWrapLeft"><span>视频区显示比例：</span></div>'
            + '<div class="zm-videoStyle-sizeWrapRight">'
            +'<li><label style="border: 1px solid #aeaeae" ></label><span>16:9</span></li>'
            +'<li><label style="border: 1px solid #aeaeae"></label><span>4:3</span></li>'
            +'<li><label style="border: 1px solid #aeaeae"></label><span>3:2</span></li>'
            +'<li><label style="border: 1px solid #aeaeae"></label><span>2:5</span></li>'
            +'<li><label style="border: 1px solid #aeaeae"></label><span>1:2</span></li>'
            +'</div>'
            + '</div>'
            + '</div>'
            +'</div>');
        var videoBox =   iSelected.find(".zm-videoBox");
        var selectVideostyle = videoBox.attr('data-type');
        //轮播
        var a=(selectVideostyle-1);
        e.find(".zm-edit-videoStyleList li").eq(selectVideostyle-1).addClass("video-style0")
        e.find(".zm-edit-videoStyleList").css("left",-206*a+"px");
        e.find(".zm-edit-videoStyle-leftArrow").on("click",function () {
            if(a==0){a=8;}
            a--;
            $(".zm-edit-videoStyleList").animate({"left":-206*a+"px"},"100")
            //$(".zm-imgBigbackground").css("left",-510*a+"px");
        })
        //$(".zm-imgBigbackground").css("left",-510*a+"px");
        e.find(".zm-edit-videoStyle-rightArrow").on("click",function () {
            a++;
            if(a==8){ a=0;}
            $(".zm-edit-videoStyleList").animate({"left":-206*a+"px"},"100");
        })
        e.find(".zm-edit-videoStyleList li").on("click",function () {
            var b='',_this=$(this);
            var a=_this.attr("data-type");
            switch (a){
                case "1":
                    b='<div class="zm-videop-thumb"><div class="zm-videop-thumb-wrap">'
                        +'<div class="zm-videop-time zm-videop-timeRb">02:28</div><a class="zm-videoBlackcover" title="" >'
                        +'<span class="zm-videobtn-setplace1 zm-video-btn zm-videobtn-text"></span><span class="zm-videobtn-setplace1 zm-video-btn video-playBtn-style1">'
                        +'<svg class="video-playBtn-styles1" style="width: 100%; height: 100%;vertical-align: middle;overflow: hidden;" viewBox="0 0 1024 1024"  xmlns="http://www.w3.org/2000/svg"><path   d="M512 922.496c-226.752 0-410.56-183.808-410.56-410.496 0-226.752 183.808-410.56 410.56-410.56 226.752 0 410.56 183.808 410.56 410.56C922.56 738.752 738.752 922.496 512 922.496zM686.592 503.936c-21.12-12.224-268.416-155.008-280.768-162.112C390.336 332.992 374.72 344.256 374.72 359.36c0 11.648 0 307.968 0 324.864 0 16.64 17.28 24.704 30.464 17.408 17.984-9.984 266.24-153.536 281.408-162.496C700.224 531.136 700.416 512 686.592 503.936z"></path><path d="M365 315 L715 520 L365 725  Z" fill="#ffffff" p-id="3114"></path></svg>'
                        +'</span></a>'
                        +'<img class="zm-videoQuic" src="//r1.ykimg.com/0515000058F4F053ADB91206D400962B"></div></div>'
                        +'<ul class="zm-videoInfo-list"><li class="zm-videoInfo-title zm-video-title zm-videoInfo-text">这是新闻的标题</li>'
                        +'<li class="zm-videoInfo-introduc zm-video-introduc zm-videoInfo-text">这是一个新闻的简介欢迎阅读。</li>'
                        +'<li class="zm-videoInfo-comment zm-video-comment zm-videoInfo-text"><span>464次播放</span><span>0次评论</span></li></ul>';
                    break;
                case "2":
                    b='<div class="zm-videop-thumb"><div class="zm-videop-thumb-wrap">'
                        +'<div class="zm-videop-time zm-videop-timeRt">02:28</div><a class="zm-videoBlackcover" title="" >'
                        +'<span class="zm-videobtn-setplace1 zm-video-btn zm-videobtn-text"></span><span class="zm-videobtn-setplace1 zm-video-btn video-playBtn-style1">'
                        +'<svg class="video-playBtn-styles1" style="width: 100%; height: 100%;vertical-align: middle;overflow: hidden;" viewBox="0 0 1024 1024"  xmlns="http://www.w3.org/2000/svg"><path   d="M512 922.496c-226.752 0-410.56-183.808-410.56-410.496 0-226.752 183.808-410.56 410.56-410.56 226.752 0 410.56 183.808 410.56 410.56C922.56 738.752 738.752 922.496 512 922.496zM686.592 503.936c-21.12-12.224-268.416-155.008-280.768-162.112C390.336 332.992 374.72 344.256 374.72 359.36c0 11.648 0 307.968 0 324.864 0 16.64 17.28 24.704 30.464 17.408 17.984-9.984 266.24-153.536 281.408-162.496C700.224 531.136 700.416 512 686.592 503.936z"></path><path d="M365 315 L715 520 L365 725  Z" fill="#ffffff" p-id="3114"></path></svg>'
                        +'</span></a>'
                        +'<img class="zm-videoQuic" src="//r1.ykimg.com/05150000590DF466AD9E0705060C5CC4"></div></div>'
                        +'<ul class="zm-videoInfo-list"><li class="zm-videoInfo-title zm-video-title zm-videoInfo-text">这是新闻的标题</li>'
                        +'<li class="zm-videoInfo-introduc zm-video-introduc zm-videoInfo-text">这是一个新闻的简介欢迎阅读。</li>'
                        +'<li class="zm-videoInfo-comment zm-video-comment zm-videoInfo-text"><span>464次播放</span><span>0次评论</span></li></ul>';
                    break;
                case "3":
                    b='<div class="zm-videop-thumb"><div class="zm-videop-thumb-wrap">'
                        +'<div class="zm-videop-time zm-videop-timeLt1">00:58</div>'
                        +'<a class="zm-videoTextWrap" data-type="1"><div class="zm-video-title zm-videoInfo-text">这是新闻的标题</div>'
                        +'<ul class="zm-videoInfo-list1"><li class="zm-videoInfo-introduc zm-video-introduc zm-videoInfo-text">这是一个新闻的简介，欢迎阅读。</li>'
                        +'<li class="zm-videoInfo-comment zm-video-comment zm-videoInfo-text"><span>464次播放</span><span>0次评论</span></li></ul></a>'
                        + '<a class="zm-videoBlackcover" title="" >'
                        +'<span class="zm-videobtn-setplace1 zm-video-btn zm-videobtn-text"></span><span class="zm-videobtn-setplace1 zm-video-btn video-playBtn-style1">'
                        +'<svg class="video-playBtn-styles1" style="width: 100%; height: 100%;vertical-align: middle;overflow: hidden;" viewBox="0 0 1024 1024"  xmlns="http://www.w3.org/2000/svg"><path   d="M512 922.496c-226.752 0-410.56-183.808-410.56-410.496 0-226.752 183.808-410.56 410.56-410.56 226.752 0 410.56 183.808 410.56 410.56C922.56 738.752 738.752 922.496 512 922.496zM686.592 503.936c-21.12-12.224-268.416-155.008-280.768-162.112C390.336 332.992 374.72 344.256 374.72 359.36c0 11.648 0 307.968 0 324.864 0 16.64 17.28 24.704 30.464 17.408 17.984-9.984 266.24-153.536 281.408-162.496C700.224 531.136 700.416 512 686.592 503.936z"></path><path d="M365 315 L715 520 L365 725  Z" fill="#ffffff" p-id="3114"></path></svg>'
                        +'</span></a>'
                        +'<img class="zm-videoQuic" src="//r1.ykimg.com/0515000057A07A7567BC3D05050A8239"></div></div>'
                    break;
                case "4":
                    b='<div class="zm-videop-thumb"><div class="zm-videop-thumb-wrap">'
                        +'<div class="zm-videop-time zm-videop-timeRb">00:58</div>'
                        +'<a class="zm-videoTextWrap" data-type="1"><ul class="zm-videoInfo-list2"><li class="zm-video-title zm-videoInfo-text">这是新闻的标题<li>'
                        +'<li class="zm-videoInfo-introduc zm-video-introduc zm-videoInfo-text">这是一个新闻的简介，欢迎阅读。</li></ul>'
                        +'<div class="zm-videoInfo-comment1 zm-video-comment zm-videoInfo-text"><span>464次播放</span><span>0次评论</span></div></a>'
                        +'<a class="zm-videoBlackcover" title="" >'
                        +'<span class="zm-videobtn-setplace1 zm-video-btn zm-videobtn-text"></span><span class="zm-videobtn-setplace1 zm-video-btn video-playBtn-style1">'
                        +'<svg class="video-playBtn-styles1" style="width: 100%; height: 100%;vertical-align: middle;overflow: hidden;" viewBox="0 0 1024 1024"  xmlns="http://www.w3.org/2000/svg"><path   d="M512 922.496c-226.752 0-410.56-183.808-410.56-410.496 0-226.752 183.808-410.56 410.56-410.56 226.752 0 410.56 183.808 410.56 410.56C922.56 738.752 738.752 922.496 512 922.496zM686.592 503.936c-21.12-12.224-268.416-155.008-280.768-162.112C390.336 332.992 374.72 344.256 374.72 359.36c0 11.648 0 307.968 0 324.864 0 16.64 17.28 24.704 30.464 17.408 17.984-9.984 266.24-153.536 281.408-162.496C700.224 531.136 700.416 512 686.592 503.936z"></path><path d="M365 315 L715 520 L365 725  Z" fill="#ffffff" p-id="3114"></path></svg>'
                        +'</span>'
                        +'</a>'
                        +'<img class="zm-videoQuic" src="//r1.ykimg.com/0515000058218C8767BC3C7F870ADED4"></div></div>'
                    break;
                case "5":
                    b='<div class="zm-videop-thumb"><div class="zm-videop-thumb-wrap">'
                    +'<div class="zm-videop-time zm-videop-timeRb">02:28</div><a class="zm-videoBlackcover" title="" ><span class="zm-videobtn-setplace1 zm-video-btn zm-videobtn-text" style="display: block;"></span><span class="zm-videobtn-setplace1 zm-video-btn video-playBtn-style1" style="display: none;">'
                    +'立即播放 <svg class="video-playBtn-styles1" style="width: 100%; height: 100%;vertical-align: middle;overflow: hidden;" viewBox="0 0 1024 1024"  xmlns="http://www.w3.org/2000/svg"><path   d="M512 922.496c-226.752 0-410.56-183.808-410.56-410.496 0-226.752 183.808-410.56 410.56-410.56 226.752 0 410.56 183.808 410.56 410.56C922.56 738.752 738.752 922.496 512 922.496zM686.592 503.936c-21.12-12.224-268.416-155.008-280.768-162.112C390.336 332.992 374.72 344.256 374.72 359.36c0 11.648 0 307.968 0 324.864 0 16.64 17.28 24.704 30.464 17.408 17.984-9.984 266.24-153.536 281.408-162.496C700.224 531.136 700.416 512 686.592 503.936z"></path><path d="M365 315 L715 520 L365 725  Z" fill="#ffffff" p-id="3114"></path></svg></span></a><img class="zm-videoQuic" src="//r1.ykimg.com/0515000058218C8767BC3C7F870ADED4"></div></div><ul class="zm-videoInfo-list">'
                    +'<li class="zm-videoInfo-title zm-video-title zm-videoInfo-text">这是新闻的标题</li>'
                    +'<li class="zm-videoInfo-introduc zm-video-introduc zm-videoInfo-text">这是一个新闻的简介，欢迎阅读。</li><li class="zm-videoInfo-comment zm-video-comment zm-videoInfo-text">'
                    +'<span>464次播放</span><span>0次评论</span></li></ul>'
                    break;
                case "6":
                    b='<div class="zm-videop-thumb"><div class="zm-videop-thumb-wrap">'
                        +'<div class="zm-videop-time zm-videop-timeRb">02:28</div><a class="zm-videoBlackcover" title="" >'
                        +'<span class="zm-videobtn-setplace2 zm-video-btn zm-videobtn-text"></span><span class="zm-videobtn-setplace2 zm-video-btn video-playBtn-style1">'
                        +'<svg class="video-playBtn-styles1" style="width: 100%; height: 100%;vertical-align: middle;overflow: hidden;" viewBox="0 0 1024 1024"  xmlns="http://www.w3.org/2000/svg"><path   d="M512 922.496c-226.752 0-410.56-183.808-410.56-410.496 0-226.752 183.808-410.56 410.56-410.56 226.752 0 410.56 183.808 410.56 410.56C922.56 738.752 738.752 922.496 512 922.496zM686.592 503.936c-21.12-12.224-268.416-155.008-280.768-162.112C390.336 332.992 374.72 344.256 374.72 359.36c0 11.648 0 307.968 0 324.864 0 16.64 17.28 24.704 30.464 17.408 17.984-9.984 266.24-153.536 281.408-162.496C700.224 531.136 700.416 512 686.592 503.936z"></path><path d="M365 315 L715 520 L365 725  Z" fill="#ffffff" p-id="3114"></path></svg>'
                        +'</span></a>'
                        +'<img class="zm-videoQuic" src="//r1.ykimg.com/0515000058DA3764ADBAC3814E03DC40"></div></div><ul class="zm-videoInfo-list">'
                        +'<li class="zm-videoInfo-title zm-video-title zm-videoInfo-text">这是新闻的标题</li>'
                        +'<li class="zm-videoInfo-introduc zm-video-introduc zm-videoInfo-text">这是一个新闻的简介，欢迎阅读。</li>'
                        +'<li class="zm-videoInfo-comment zm-video-comment zm-videoInfo-text"><span>464次播放</span><span>0次评论</span></li></ul>'
                    break;
                case "7":
                    b='<div class="zm-videop-thumb"><div class="zm-videop-thumb-wrap">'
                        +'<div class="zm-videop-time zm-videop-timeRt">00:58</div>'
                        +'<a class="zm-videoTextWrap" data-type="1"><span class="zm-videobtn-setplace1 zm-video-btn1 zm-video-btn2  zm-video-btnHover"></span><div class="zm-videoInfo-list3"><div class="zm-videoInfo-title zm-video-title zm-videoInfo-text">这是新闻的标题</div>'
                        +'<div class="zm-videoInfo-introduc zm-video-introduc zm-videoInfo-text">这是一个新闻的简介，欢迎阅读。</div>'
                        +'<div class="zm-videoInfo-comment zm-video-comment zm-videoInfo-text"><span>464次播放</span><span>0次评论</span></div></div></a>'
                        + '<a class="zm-videoBlackcover" title="" >'
                        +'<span class="zm-videobtn-setplace1 zm-video-btn zm-videobtn-text"></span><span class="zm-videobtn-setplace1 zm-video-btn video-playBtn-style1">'
                        +'<svg class="video-playBtn-styles1" style="width: 100%; height: 100%;vertical-align: middle;overflow: hidden;" viewBox="0 0 1024 1024"  xmlns="http://www.w3.org/2000/svg"><path   d="M512 922.496c-226.752 0-410.56-183.808-410.56-410.496 0-226.752 183.808-410.56 410.56-410.56 226.752 0 410.56 183.808 410.56 410.56C922.56 738.752 738.752 922.496 512 922.496zM686.592 503.936c-21.12-12.224-268.416-155.008-280.768-162.112C390.336 332.992 374.72 344.256 374.72 359.36c0 11.648 0 307.968 0 324.864 0 16.64 17.28 24.704 30.464 17.408 17.984-9.984 266.24-153.536 281.408-162.496C700.224 531.136 700.416 512 686.592 503.936z"></path><path d="M365 315 L715 520 L365 725  Z" fill="#ffffff" p-id="3114"></path></svg>'
                        +'</span></a>'
                        +'<img class="zm-videoQuic" src="//r1.ykimg.com/05150000574BF54667BC3C24CF04FD2B"></div></div>'
                    break;
                case "8":
                    b='<div class="zm-videop-thumb"><div class="zm-videop-thumb-wrap">'
                        +'<div class="zm-videop-time zm-videop-timeRb">00:58</div>'
                        +'<a class="zm-videoTextWrap" data-type="1"><span class="zm-videobtn-setplace1 zm-video-btn1 zm-video-btn2  zm-video-btnHover"></span><div class="zm-videoInfo-list4"><div class="zm-videoInfo-title zm-video-title zm-videoInfo-text">这是新闻的标题</div>'
                        +'<div class="zm-videoInfo-introduc zm-video-introduc zm-videoInfo-text">这是一个新闻的简介，欢迎阅读。</div>'
                        +'<div class="zm-videoInfo-comment zm-video-comment zm-videoInfo-text"><span>464次播放</span><span>0次评论</span></div></div></a>'
                        +'<a class="zm-videoBlackcover" title="" >'
                        +'<span class="zm-videobtn-setplace2 zm-video-btn zm-videobtn-text"></span><span class="zm-videobtn-setplace2 zm-video-btn video-playBtn-style1">'
                        +'<svg class="video-playBtn-styles1" style="width: 100%; height: 100%;vertical-align: middle;overflow: hidden;" viewBox="0 0 1024 1024"  xmlns="http://www.w3.org/2000/svg"><path   d="M512 922.496c-226.752 0-410.56-183.808-410.56-410.496 0-226.752 183.808-410.56 410.56-410.56 226.752 0 410.56 183.808 410.56 410.56C922.56 738.752 738.752 922.496 512 922.496zM686.592 503.936c-21.12-12.224-268.416-155.008-280.768-162.112C390.336 332.992 374.72 344.256 374.72 359.36c0 11.648 0 307.968 0 324.864 0 16.64 17.28 24.704 30.464 17.408 17.984-9.984 266.24-153.536 281.408-162.496C700.224 531.136 700.416 512 686.592 503.936z"></path><path d="M365 315 L715 520 L365 725  Z" fill="#ffffff" p-id="3114"></path></svg>'
                        +'</span></a>'
                        +'<img class="zm-videoQuic" src="https://r1.ykimg.com/0541040858ECE81C6F0E650386F84287"></div></div>'
                    break;
            }
           //iSelected.html(b);
            iSelected.find(".zm-videoPack").html(b);
            iSelected.find(".zm-videoBox").attr("data-type",a)
            console.log(iSelected)
            ///*************************************
            var thpb=e.find(".zm-videoStyle-sizeWrapRight label");
            thpb.removeClass("choice");
            thpb.eq(0).addClass("choice");
            //**************************************
            _this.addClass("video-style0").siblings().removeClass("video-style0");
            zmEditor.component.setting(this)

        });

           ////视频区显示比例
        var thumPding=iSelected.find(".zm-videop-thumb").eq(0).attr("data-type");
        var thumPdingLab=e.find(".zm-videoStyle-sizeWrapRight label");
        switch (thumPding){
            case undefined:
                thumPdingLab.removeClass("choice");
                thumPdingLab.eq(0).addClass("choice");
            break
            case "0":
                thumPdingLab.removeClass("choice");
                thumPdingLab.eq(0).addClass("choice");
                break;
            case "1":
                thumPdingLab.removeClass("choice");
                thumPdingLab.eq(1).addClass("choice");
                break;
            case "2":
                thumPdingLab.removeClass("choice");
                thumPdingLab.eq(2).addClass("choice");
                break;
            case "3":
                thumPdingLab.removeClass("choice");
                thumPdingLab.eq(3).addClass("choice");
                break;
            case "4":
                thumPdingLab.removeClass("choice");
                thumPdingLab.eq(4).addClass("choice");
                break;
        }
        //e.find(".zm-videoStyle-sizeWrapRight label:first").addClass("choice");
        e.find(".zm-videoStyle-sizeWrapRight label").zmActionOn("click",function () {
            var _this=$(this);
           var _index = e.find(".zm-videoStyle-sizeWrapRight label").index(this);
            e.find(".zm-videoStyle-sizeWrapRight label").removeClass("choice");
            _this.addClass("choice");
            var minThum=ele.find(".zm-videop-thumb");
            switch(_index){
                case 0:

                    minThum.css("padding-bottom","56.25%");
                    minThum.attr("data-type",0)
                    //16:9
                    break;
                case 1:
                    minThum.css("padding-bottom","75%");
                    minThum.attr("data-type",1)
                    //4:3
                    break;
                case 2:
                    minThum.css("padding-bottom","66.67%");
                    minThum.attr("data-type",2)
                    //3:2
                    break;
                case 3:
                    minThum.css("padding-bottom","250%");
                    minThum.attr("data-type",3)
                    //2:5
                    break;
                case 4:
                    minThum.css("padding-bottom","200%");
                    minThum.attr("data-type",4)
                    //1:2
                    break;
            }

        })
        return e;
    },
    videoHLnumber:function(ele) {
        var e = $('<div style="margin:0 20px ;" class="zm-edit-components-productList-ranks">'
            + '<div class="zm-edit-components-productList-ranks-rows"><span>行数 :</span><div><input class="zm-video-listH" type="text" value="1"/><i class="fa fa-sort-asc zm-video-listHadd"></i><em class="fa fa-sort-desc zm-video-listHdele"></em></div></div>'
            + '<div class="zm-edit-components-productList-ranks-cols"><span>列数 :</span><div><input class="zm-video-listL" type="text" value="1"/><i class="fa fa-sort-asc zm-video-listLadd"></i><em class="fa fa-sort-desc zm-video-listLdele"></em></div></div>'
            + '<div class="zm-edit-components-productList-ranks-rowBetween"><span>行间距 :</span><div><input class="zm-video-listHsp" type="text" value="0"/><i class="fa fa-sort-asc zm-video-listHspadd"></i><em class="fa fa-sort-desc zm-video-listHspdele"></em></div></div>'
            + '<div class="zm-edit-components-productList-ranks-colBetween"><span>列间距 :</span><div><input class="zm-video-listLsp" type="text" value="0"/><i class="fa fa-sort-asc zm-video-listLspadd"></i><em class="fa fa-sort-desc zm-video-listLspdele"></em></div></div>'
            + '</div>'
        );
        //初始化input值
        var _rows = ele.find(".zm-videoBox").length;
        var _cols = ele.find(".zm-videoBox").eq(0).children("li").length;
        var _margin_col = parseInt(ele.find(".zm-videoPack").eq(1).css("margin-left"))||0;
        var _margin_row = parseInt(ele.find(".zm-videoBox").eq(1).css("margin-top"))||0;
        var rowNumber_input = e.find(".zm-edit-components-productList-ranks-rows").find("input");
        var colNumber_input = e.find(".zm-edit-components-productList-ranks-cols").find("input");
        var rowSpace_input = e.find(".zm-edit-components-productList-ranks-rowBetween").find("input");
        var rowSpace_add = e.find(".zm-edit-components-productList-ranks-rowBetween").find("i");
        var rowSpace_cut = e.find(".zm-edit-components-productList-ranks-rowBetween").find("em");
        var colSpace_input = e.find(".zm-edit-components-productList-ranks-colBetween").find("input");
        var colSpace_add = e.find(".zm-edit-components-productList-ranks-colBetween").find("i");
        var coSpace_cut = e.find(".zm-edit-components-productList-ranks-colBetween").find("em");
        rowNumber_input.val(_rows);
        colNumber_input.val(_cols);
        rowSpace_input.val(_margin_row);
        colSpace_input.val(_margin_col);
        //改变行数
        rowNumber_input.on("change",function(){
            var rowBetw=e.find(".zm-video-listHsp").val();
            var _this = $(this);
            var oldRow = ele.find(".zm-videoBox").length;
            var h = parseInt(ele.find(".zm-videoPack").eq(0).css("height"));
            var magTop=e.find(".zm-video-listHsp").val();
            var newRow = _this.val();
            if(newRow > 12){
                newRow = 12;
            }else if(newRow < 1){
                newRow = 1;
            }
            _this.val(newRow);
            var num = newRow - oldRow;
            var li = ele.find(".zm-videoBox:first-child");
            if(num > 0){
                for(var i=0;i<num;i++){
                    ele.append(li.clone());
                }
            }else if(num < 0){
                for(var i=0;i<Math.abs(num);i++){
                    ele.find(".zm-videoBox:last-child").remove();
                }
            }
            ele.find(".zm-videoBox").css("margin-top",rowBetw+"px");
            ele.find(".zm-videoBox:first").css("margin-top","0px");
            ele.css("height",h*newRow+(newRow-1)*magTop+"px");
            zmEditor.component.video.getVideoList(ele)
        });

        e.find(".zm-video-listHadd").click(function () {
            var rowBetw=e.find(".zm-video-listHsp").val();
            var lih = parseInt(ele.find(".zm-videoPack").eq(0).css("height"));
            var magTop=e.find(".zm-video-listHsp").val();
            var b=ele.find(".zm-videoBox");
            var f=b.attr("data-type")
            var c='',h='';
            if(b.length==1){
                c=ele.find(".zm-videoBox").clone();
            }else{
                c=ele.find(".zm-videoBox").eq(0).clone();
            }
            var a=$(".zm-video-listH").val();
            a++;
            if(a>=12){
                a=12;
            }
            $(".zm-video-listH").val(a);
            for(var i=b.length;i<a;i++){
                h+='<ul class="zm-videoBox" data-type="'+f+'">'+c[0].innerHTML+'</ul>';
                ele.append(h)
            }
            ele.find(".zm-videoBox").css("margin-top",rowBetw+"px");
            ele.find(".zm-videoBox:first").css("margin-top","0px");
            ele.css("height",lih*a+(a-1)*magTop+"px");
            zmEditor.component.video.getVideoList(ele)
        })
        e.find(".zm-video-listHdele").click(function () {
            var rowBetw=e.find(".zm-video-listHsp").val();
            var lih = parseInt(ele.find(".zm-videoPack").eq(0).css("height"));
            var magTop=e.find(".zm-video-listHsp").val();
            // var b=ele.find(".zm-videoBox");
            var a=$(".zm-video-listH").val();
            a--;
            if(a<=0){
                a=1;
            }
            $(".zm-video-listH").val(a);
            if(a!=0){
                ele.find(".zm-videoBox").eq(1).remove();
            }
            ele.find(".zm-videoBox").css("margin-top",rowBetw+"px");
            ele.find(".zm-videoBox:first").css("margin-top","0px");
            ele.css("height",lih*a+(a-1)*magTop+"px");
            zmEditor.component.video.getVideoList(ele)
        })
        //改变列数
        colNumber_input.on("change",function(){
            var cowBetw=e.find(".zm-video-listLsp").val();
            var liw = parseInt(ele.find(".zm-videoPack").eq(0).css("width"));
            var magLeft=e.find(".zm-video-listLsp").val();
            var _this = $(this);
            var oldVal = ele.find(".zm-videoBox").eq(0).children("li").length;
            var nowVal = _this.val();
            if(nowVal > 6){
                nowVal = 6;
            }else if(nowVal < 1){
                nowVal = 1;
            }
            _this.val(nowVal);
            var num = nowVal - oldVal;
            var li = ele.find(".zm-videoBox");
            var goods=ele.find(".zm-videoBox").eq(0).children(".zm-videoPack:first-child")
            if(num > 0){
                for(var i=0;i<num;i++){
                    li.append(goods.clone());
                }
            }else{
                for(var i=0;i<Math.abs(num);i++){
                    li.find(".zm-videoPack:last-child").remove();
                }
            }
            ele.find(".zm-videoPack").css("margin-left",cowBetw+"px");
            ele.find(".zm-videoBox").each(function () {
                $(this).find(".zm-videoPack:first").css("margin-left","0px");
            })
            ele.css("width",liw*nowVal+(nowVal-1)*magLeft+"px");
            zmEditor.component.video.getVideoList(ele)
        });
        e.find(".zm-video-listLadd").click(function (){
            var cowBetw=e.find(".zm-video-listLsp").val();
            var liw = parseInt(ele.find(".zm-videoPack").eq(0).css("width"));
            var magLeft=e.find(".zm-video-listLsp").val();
            var _this = $(this);
            var _input = _this.closest("div").find("input");
            var _val = parseInt(_input.val());
            var li = ele.find(".zm-videoBox");
            var goods=ele.find(".zm-videoBox").eq(0).children(".zm-videoPack:first-child")
            if(_val < 6){
                var nowVal = ++_val;
                _input.val(nowVal);
                li.append(goods.clone());
            }
            ele.find(".zm-videoPack").css("margin-left",cowBetw+"px");
            ele.find(".zm-videoBox").each(function () {
                $(this).find(".zm-videoPack:first").css("margin-left","0px");
            })
            ele.css("width",liw*_val+(_val-1)*magLeft+"px");
            zmEditor.component.video.getVideoList(ele)
        });
        e.find(".zm-video-listLdele").click(function (){
            var cowBetw=e.find(".zm-video-listLsp").val();
            var liw = parseInt(ele.find(".zm-videoPack").eq(0).css("width"));
            var magLeft=e.find(".zm-video-listLsp").val();
            var _this = $(this);
            var _input = _this.closest("div").find("input");
            var _val = parseInt(_input.val());
            var li = ele.find(".zm-videoBox");
            if(_val > 1){
                var nowVal = --_val;
                _input.val(nowVal);
                li.find(".zm-videoPack:last-child").remove();
            }
            ele.find(".zm-videoPack").css("margin-left",cowBetw+"px");
            ele.find(".zm-videoBox").each(function () {
                $(this).find(".zm-videoPack:first").css("margin-left","0px");
            })
            ele.css("width",liw*_val+(_val-1)*magLeft+"px");
            zmEditor.component.video.getVideoList(ele)
        });

        //行间距
        e.find(".zm-video-listHsp").on("change",function () {
            var a=e.find(".zm-video-listHsp").val();
            if(a>30){
                a=30
            }else if(a<0){
                a=0
            }
            e.find(".zm-video-listHsp").val(a)
            ele.find(".zm-videoBox").css("margin-top",a+"px");
            ele.find(".zm-videoBox:first").css("margin-top","0px");
            console.log(a)
        })

        rowSpace_add.on("click",function(){
            var _this = $(this);
            var _input = _this.closest("div").find("input");
            var _val = _input.val();
            if(_val < 30){
                var nowVal = ++_val;
                _input.val(nowVal);
                ele.find(".zm-videoBox").css("margin-top",nowVal+"px");
                ele.find(".zm-videoBox:first").css("margin-top","0px");
            }
        });
        rowSpace_cut.on("click",function(){
            var _this = $(this);
            var _input = _this.closest("div").find("input");
            var _val = _input.val();
            if(_val > 0){
                var nowVal = --_val;
                _input.val(nowVal);
                ele.find(".zm-videoBox").css("margin-top",nowVal+"px");
                ele.find(".zm-videoBox:first").css("margin-top","0px");
            }
        });
        //列间距
        e.find(".zm-video-listLsp").on("change",function () {
            var a=e.find(".zm-video-listLsp").val();
            if(a>30){
                a=30
            }else if(a<0){
                a=0
            }
            e.find(".zm-video-listLsp").val(a)
            ele.find(".zm-videoPack").css("margin-left",a+"px");
            ele.find(".zm-videoBox").each(function () {
                $(this).find(".zm-videoPack:first").css("margin-left","0px");
            })
        })

        colSpace_add.on("click",function(){
            var _this = $(this);
            var _val = _this.closest("div").find("input").val();
            if(_val < 30){
                var nowVal = ++_val;
                _this.closest("div").find("input").val(nowVal);
                ele.find(".zm-videoPack").css("margin-left",nowVal+"px");
                ele.find(".zm-videoBox").each(function () {
                    $(this).find(".zm-videoPack:first").css("margin-left","0px");
                })
            }
        });
        coSpace_cut.on("click",function(){
            var _this = $(this);
            var _val = _this.closest("div").find("input").val();
            if(_val > 0){
                var nowVal = --_val;
                _this.closest("div").find("input").val(nowVal);
                ele.find(".zm-videoPack").css("margin-left",nowVal+"px");
                ele.find(".zm-videoBox").each(function () {
                    $(this).find(".zm-videoPack:first").css("margin-left","0px");
                })
            }
        });
        zmEditor.component.video.getVideoList(ele)
        return e;

    },
    videoAddVideo:function (ele) {
        var e=$('<div style="margin-top: 10px;"><span>添加视频：</span><div class="video-setAddvideo">'
            +'<li><label style="border: 1px solid #aeaeae" ></label><span>选择视频</span></li>'
            +'<li><label style="border: 1px solid #aeaeae"></label><span>选择视频类目</span></li></div>'
            +'<div class="video-setAddvideo-choice"><span>选择</span><span class="video-setAddvideo-setbtn" onclick="zmChoiceRadio.choiceVideo({multiple:11,callBack:zmChoiceRadio.callBack.choiceAddVideo})" >设置</span>'
            +'</div><div class="video-setAddvideoList"></div>'
            +'<div style="height: 1px;width:355px;background-color: #CCCCCC;margin-left: -33px"></div><div class="video-setList-style">'
            +'<li style="margin-top: 10px">排序方式:</li><li><label style="border: 1px solid #aeaeae" ></label><span>随机排序</span></li>'
            +'<li><label style="border: 1px solid #aeaeae"></label><span>按上传时间先后</span></li></div>'
            +'</div>');
        //选择添加视频或选择视频类目
        e.find(".video-setAddvideo label:first").addClass("choice");
        e.find(".video-setAddvideo label").click(function () {
            var _this=$(this);
            e.find(".video-setAddvideo label").removeClass("choice");
            _this.addClass("choice");
        })
          //选择视频的排序方式
        e.find(".video-setList-style label:first").addClass("choice");
        e.find(".video-setList-style label").click(function () {
            var _this=$(this);
            e.find(".video-setList-style label").removeClass("choice");
            _this.addClass("choice");
        })
        return e;
    },
    displayStyleContent:function (ele,f,c) {
        var e=$('<div style="padding: 20px 7px" class="video-dispay-Style" ><div>显示方式</div>'
            +'<li style="margin-left: 30px"><label style="border: 1px solid #aeaeae" ></label><span>永远显示</span></li>'
            +'<li><label style="border: 1px solid #aeaeae"></label><span>光标悬浮显示</span></li></div>');
        e.find("label:first").addClass("choice");
        e.find("label").click(function () {
            var _this=$(this);
            e.find("label").removeClass("choice");
            _this.addClass("choice");
            var b=_this.closest("li").index()
            // var c=ele.find(".zm-videoBlackcover");
            var d=ele.find(".zm-videoPack");
            //console.log(b)
            // if(b==1){
            //    // console.log(c)
            //     c.css("display","block")
            //     console.log(c.css("display"))
            //     d.unbind('mouseenter').unbind('mouseleave')
            // }if(b==2){
            //     c.css("display","none");
            //     d.hover(function () {
            //         // var e=$(this).find(".zm-videoBlackcover")
            //         var e=$(this).find(f)
            //         e.css("display","block")
            //     },function () {
            //         // var e=$(this).find(".zm-videoBlackcover")
            //         var e=$(this).find(f)
            //         e.css("display","none");
            //     })
            //
            // }
               if(b==1){
                   var g=$(this).find(f)
                   g.css("display","block")
                   d.unbind('mouseenter').unbind('mouseleave')
                  // c.css("display","block")
               }else{
                       c.css("display","none");
                   d.mouseenter(function () {
                          var e=$(this).find(f)
                          e.css("display","block")
                      });
                   d.mouseleave(function () {
                          var e=$(this).find(f)
                              e.css("display","none");
                      })
               }

        })
        return e;
    },
    displayStyle:function (ele) {
        // var ele=ele,f=".zm-videoBlackcover",c=ele.find(".zm-videoBlackcover");
        // return zmEditor.component.video.displayStyleContent(ele,f,c);
        var e=$('<div style="padding: 20px 7px" class="video-dispay-Style video-dispay-StyleContore" ><div>显示方式</div>'
            +'<li style="margin-left: 30px"><label style="border: 1px solid #aeaeae" ></label><span>永远显示</span></li>'
            +'<li><label style="border: 1px solid #aeaeae"></label><span>光标悬浮显示</span></li></div>');
        e.find("label:first").addClass("choice");
        var judgeBtn=ele.find(".zm-videoBlackcover").attr("data-hoverType");
        if(judgeBtn=="block"){
            e.find("label:first").removeClass("choice");
            e.find("label:last").addClass("choice");
        }else{
            e.find("label:first").addClass("choice");
            e.find("label:last").removeClass("choice");
        }
        e.find("label").click(function () {
            var _this = $(this);
            e.find("label").removeClass("choice");
            _this.addClass("choice");
            var b = _this.closest("li").index()
             var c=ele.find(".zm-videoBlackcover");
            var d = ele.find(".zm-videoPack");
            if(b==1){
                d.attr("data-type1")==1;
                c.attr("data-hoverType","none");
                c.css("display","block")
                //d.unbind('mouseenter').unbind('mouseleave')
                //if(d.attr("data-type1")!=1){
                    d.hover(function () {
                        var e=$(this).find(".zm-videoBlackcover");
                        e.css("display","block")
                    },function () {
                        var e=$(this).find(".zm-videoBlackcover");
                        e.css("display","block");
                    })
                //}
            }if(b==2){
                c.attr("data-hoverType","block");
               // if(d.attr("data-type1")!=1){
                    c.css("display","none");
                    d.hover(function () {
                        var e=$(this).find(".zm-videoBlackcover");
                        e.css("display","block")
                    },function () {
                        var e=$(this).find(".zm-videoBlackcover");
                        e.css("display","none");
                    })
                //}


             }
        })
        return e;

    },
    titledisplayStyle:function (ele) {
        // var f=".zm-video-title",c=ele.find(".zm-video-title");
        // return zmEditor.component.video.displayStyleContent(ele,f,c);
        var e=$('<div style="padding: 20px 7px" class="video-dispay-Style" ><div>显示方式</div>'
            +'<li style="margin-left: 30px"><label style="border: 1px solid #aeaeae" ></label><span>永远显示</span></li>'
            +'<li><label style="border: 1px solid #aeaeae"></label><span>光标悬浮显示</span></li></div>');
        e.find("label:first").addClass("choice");
        e.find("label").click(function () {
            if (ele.find(".zm-videoTextWrap").attr("data-type") == 1) {
            var _this = $(this);
            e.find("label").removeClass("choice");
            _this.addClass("choice");
            var b = _this.closest("li").index()
            var c = ele.find(".zm-video-title");
            var d = ele.find(".zm-videoPack");
            if (b == 1) {
                c.css("display", "block")
                // d.unbind('mouseenter').unbind('mouseleave')
                d.hover(function () {
                    // var e=$(this).find(".zm-videoBlackcover")
                    var e = $(this).find(".zm-video-title")
                    e.css("display", "block")
                }, function () {
                    // var e=$(this).find(".zm-videoBlackcover")
                    var e = $(this).find(".zm-video-title")
                    e.css("display", "block");
                })
            }
            if (b == 2) {
                c.css("display", "none");
                d.hover(function () {
                    // var e=$(this).find(".zm-videoBlackcover")
                    var e = $(this).find(".zm-video-title")
                    e.css("display", "block")
                }, function () {
                    // var e=$(this).find(".zm-videoBlackcover")
                    var e = $(this).find(".zm-video-title")
                    e.css("display", "none");
                })

            }
        }
        })
        return e;

    },
    introducdisplayStyle:function (ele) {
        // var f=".zm-video-introduc",c=ele.find(".zm-video-introduc");
        // return zmEditor.component.video.displayStyleContent(ele,f,c);
        var e=$('<div style="padding: 20px 7px" class="video-dispay-Style" ><div>显示方式</div>'
            +'<li style="margin-left: 30px"><label style="border: 1px solid #aeaeae" ></label><span>永远显示</span></li>'
            +'<li><label style="border: 1px solid #aeaeae"></label><span>光标悬浮显示</span></li></div>');
        e.find("label:first").addClass("choice");
        e.find("label").click(function () {
            if (ele.find(".zm-videoTextWrap").attr("data-type") == 1) {
            var _this = $(this);
            e.find("label").removeClass("choice");
            _this.addClass("choice");
            var b = _this.closest("li").index()
            var c = ele.find(".zm-video-introduc");
            var d = ele.find(".zm-videoPack");
            if (b == 1) {
                c.css("display", "block")
                //d.unbind('mouseenter').unbind('mouseleave')
                d.hover(function () {
                    var e = $(this).find(".zm-video-introduc")
                    e.css("display", "block")
                }, function () {
                    var e = $(this).find(".zm-video-introduc")
                    e.css("display", "block");
                })
            }
            if (b == 2) {
                c.css("display", "none");
                d.hover(function () {
                    // var e=$(this).find(".zm-videoBlackcover")
                    var e = $(this).find(".zm-video-introduc")
                    e.css("display", "block")
                }, function () {
                    // var e=$(this).find(".zm-videoBlackcover")
                    var e = $(this).find(".zm-video-introduc")
                    e.css("display", "none");
                })

            }
        }
        })
        return e;
    },
    commentdisplayStyle:function (ele) {
        var e=$('<div style="padding: 20px 7px" class="video-dispay-Style" ><div>显示方式</div>'
            +'<li style="margin-left: 30px"><label style="border: 1px solid #aeaeae" ></label><span>永远显示</span></li>'
            +'<li><label style="border: 1px solid #aeaeae"></label><span>光标悬浮显示</span></li></div>');
        e.find("label:first").addClass("choice");
            e.find("label").click(function () {
              if(ele.find(".zm-videoTextWrap").attr("data-type")==1){
                var _this = $(this);
                e.find("label").removeClass("choice");
                _this.addClass("choice");
                var b = _this.closest("li").index()
                var c=ele.find(".zm-video-comment");
                var d = ele.find(".zm-videoPack");
                if(b==1){
                    c.css("display","block")
                    //d.unbind('mouseenter').unbind('mouseleave')
                    d.hover(function () {
                        var e=$(this).find(".zm-video-comment")
                        e.css("display","block")
                    },function () {
                        var e=$(this).find(".zm-video-comment")
                        e.css("display","block");
                    })
                }if(b==2){
                    c.css("display","none");
                    d.hover(function () {
                        var e=$(this).find(".zm-video-comment")
                        e.css("display","block")
                    },function () {
                        var e=$(this).find(".zm-video-comment")
                        e.css("display","none");
                    })

                }
                }//if
            })//点击
        return e;
    },
    videoplayBtncontent:function (ele) {
        var e=$('<div style="position: relative;padding: 20px 7px"> <span>文字内容</span><input class="video-playBtntext" type="text" />'
            +'<p class="video-playBtntitle">请输入小于10个字符或5个汉字</p></div>');
        // +'<p class="video-playBtntitle">请输入小于10个字符或5个汉字</p></div>');
        e.find('.video-playBtntext').on('keyup',function(){
            // if(zmChoiceRadio.getByteLen($(".video-playBtntext").val())>10){
            //     $(".video-playBtntitle").css("display","block");
            // }else {
            //     $(".video-playBtntitle").css("display","none");
            //      ele.find(".zm-videobtn-text").html($(this).val());
            // }
            limitLength($(this),10)
            ele.find(".zm-videobtn-text").html($(this).val());
        });

        return e;
    },
    videoplayBtnStyle:function (ele) {
        var e=$('<div style="height: 200px;padding: 20px 7px"><span>图标样式</span><div class="viedo-palyBtn-picstyle">'
            +'<li><div class=" video-playBtn-styleBox"><svg class="video-playBtn-style1" style="width: 100%; height: 100%;vertical-align: middle;overflow: hidden;" viewBox="0 0 1024 1024"  xmlns="http://www.w3.org/2000/svg"><path d="M512 922.496c-226.752 0-410.56-183.808-410.56-410.496 0-226.752 183.808-410.56 410.56-410.56 226.752 0 410.56 183.808 410.56 410.56C922.56 738.752 738.752 922.496 512 922.496zM686.592 503.936c-21.12-12.224-268.416-155.008-280.768-162.112C390.336 332.992 374.72 344.256 374.72 359.36c0 11.648 0 307.968 0 324.864 0 16.64 17.28 24.704 30.464 17.408 17.984-9.984 266.24-153.536 281.408-162.496C700.224 531.136 700.416 512 686.592 503.936z"></path></svg>	</div><label style="border: 1px solid #aeaeae" ></label></li>'
            +'<li><div class="video-playBtn-styleBox "><svg class="video-playBtn-style2" style="width: 100%; height: 100%;vertical-align: middle;overflow: hidden;" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M96 0 96 1024 928 512Z"></path></svg></div><label style="border: 1px solid #aeaeae" ></label></li>'
            +'<li><div class="video-playBtn-styleBox "><svg class="video-playBtn-style3" style="width: 104%; height:100%;vertical-align: middle;overflow: hidden;" viewBox="0 0 1072 1024" xmlns="http://www.w3.org/2000/svg"><path d="M480.528292 810.483333M559.497037 0c-282.759057 0-512.023158 229.264101-512.023158 511.976842 0 282.805373 229.217785 512.023158 512.023158 512.023158s512.023158-229.217785 512.023158-512.023158C1071.520195 229.217785 842.302411 0 559.497037 0zM556.115971 931.877516c-231.34832 0-418.835406-187.533403-418.835406-418.881722 0-231.34832 187.533403-418.835406 418.835406-418.835406 231.34832 0 418.881722 187.533403 418.881722 418.835406C974.997693 744.344113 787.464291 931.877516 556.115971 931.877516zM463.159799 701.223936l326.064499-186.097607L463.159799 323.887648 463.159799 701.223936z"></path></svg></div><label style="border: 1px solid #aeaeae" ></label></li>'
            +'<li><div class="video-playBtn-styleBox "><svg class="video-playBtn-style4" style="width:100%; height: 100%;vertical-align: middle;overflow: hidden;" viewBox="0 0 1194 1024" xmlns="http://www.w3.org/2000/svg"><path d="M1045.333333 0H149.333333C67.157333 0 0 57.6 0 128v768c0 70.4 67.157333 128 149.333333 128h896c82.176 0 149.333333-57.6 149.333334-128v-768c0-70.4-67.157333-128-149.333334-128z m-597.333333 848.042667V175.872L896 512 448 848.042667z"></path></svg></div><label style="border: 1px solid #aeaeae" ></label></li>'
            +'<li><div class="video-playBtn-styleBox "><svg class="video-playBtn-style5" style="width:145%; height: 100%;vertical-align: middle;overflow: hidden;" viewBox="0 0 1792 1024" xmlns="http://www.w3.org/2000/svg"><path d="M0 153.2928A153.7024 153.7024 0 0 1 153.6 0h1484.8c84.8384 0 153.6 68.7616 153.6 153.2928v717.4144A153.7024 153.7024 0 0 1 1638.4 1024H153.6c-84.8384 0-153.6-68.7616-153.6-153.2928V153.2928zM1210.9312 481.28l-427.7248-269.568a46.2336 46.2336 0 0 0-43.6736-2.6112c-13.9776 6.4512-22.7328 19.3536-22.7328 33.4336v539.0848c0 14.0288 8.7552 26.9312 22.7328 33.3824a45.9776 45.9776 0 0 0 43.6736-2.6624l427.7248-269.5168A36.608 36.608 0 0 0 1228.8 512c0-12.288-6.656-23.7568-17.8688-30.7712z"></path></svg></div><label style="border: 1px solid #aeaeae" ></label></li>'
            +'<li><div class="video-playBtn-styleBox"><svg class="video-playBtn-style6" style="width: 100%; height:100%;vertical-align: middle;overflow: hidden;" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M377.971959 333.319481 690.656471 511.932462 377.971959 690.678472 377.971959 333.319481zM958.70846 243.88252l0 536.102954c0 98.730629-79.971379 178.744987-178.615027 178.744987L243.903497 958.730461c-98.642624 0-178.61298-80.013335-178.61298-178.744987L65.290517 243.88252c0-98.644671 79.969333-178.615027 178.61298-178.615027l536.190959 0C878.73708 65.267493 958.70846 145.236825 958.70846 243.88252zM869.401458 288.643979c0-74.080206-59.989279-134.069485-134.069485-134.069485L288.667004 154.574494c-74.082252 0-134.115534 59.989279-134.115534 134.069485L154.55147 735.309972c0 74.03825 60.033281 134.113487 134.115534 134.113487l446.664969 0c74.080206 0 134.069485-60.075237 134.069485-134.113487L869.401458 288.643979z"></path></svg></div><label style="border: 1px solid #aeaeae" ></label></li></div></div>');
        var btnNumber=ele.find(".video-playBtn-style1 svg").length>0? ele.find(".video-playBtn-style1 svg").attr("class"):"video-playBtn-styles1";
        console.log()
        var btnNumbers;
        //console.log(btnNumbers)
        if(typeof(btnNumber)=="string"){
            btnNumbers=btnNumber.substr(btnNumber.length-1,1)
        }
        e.find(".viedo-palyBtn-picstyle label").eq(btnNumbers-1).addClass("choice");
        //e.find(".viedo-palyBtn-picstyle label:first").addClass("choice");
        e.find(".viedo-palyBtn-picstyle label").click(function () {
            var _this=$(this);
            e.find(".viedo-palyBtn-picstyle label").removeClass("choice");
            _this.addClass("choice");
            var a=_this.closest("li").index();
           //var b='video-playBtn-style'+(a+1);
            var d=zmEditor.component.nowEdit().find(".video-playBtn-style1");
            var btnStyle='';
            switch (a){
                case 0:
                    btnStyle='<svg class="video-playBtn-styles1" style="width: 100%; height:100%;vertical-align: middle;overflow: hidden;" viewBox="0 0 1024 1024"  xmlns="http://www.w3.org/2000/svg">' +
                        '<path   d="M512 922.496c-226.752 0-410.56-183.808-410.56-410.496 0-226.752 183.808-410.56 410.56-410.56 226.752 0 410.56 183.808 410.56 410.56C922.56 738.752 738.752 922.496 512 922.496zM686.592 503.936c-21.12-12.224-268.416-155.008-280.768-162.112C390.336 332.992 374.72 344.256 374.72 359.36c0 11.648 0 307.968 0 324.864 0 16.64 17.28 24.704 30.464 17.408 17.984-9.984 266.24-153.536 281.408-162.496C700.224 531.136 700.416 512 686.592 503.936z"></path>' +
                        '<path d="M365 315 L715 520 L365 725  Z" fill="#ffffff" p-id="3114"></path></svg>';
                    break;
                case 1:
                    btnStyle='<svg class="video-playBtn-styles2" style="width: 100%; height: 100%;vertical-align: middle;overflow: hidden;" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">' +
                        '<path d="M96 0 96 1024 928 512Z"></path></svg>';
                    break;
                case 2:
                    btnStyle='<svg class="video-playBtn-styles3" style="width:100%; height: 100%;vertical-align: middle;overflow: hidden;" viewBox="0 0 1072 1024" xmlns="http://www.w3.org/2000/svg">' +
                        '<circle cx="50%" cy="50%" r="450"stroke-width="2" fill="#ffffff"/>' +
                        '<path d="M480.528292 810.483333M559.497037 0c-282.759057 0-512.023158 229.264101-512.023158 511.976842 0 282.805373 229.217785 512.023158 512.023158 512.023158s512.023158-229.217785 512.023158-512.023158C1071.520195 229.217785 842.302411 0 559.497037 0zM556.115971 931.877516c-231.34832 0-418.835406-187.533403-418.835406-418.881722 0-231.34832 187.533403-418.835406 418.835406-418.835406 231.34832 0 418.881722 187.533403 418.881722 418.835406C974.997693 744.344113 787.464291 931.877516 556.115971 931.877516zM463.159799 701.223936l326.064499-186.097607L463.159799 323.887648 463.159799 701.223936z"></path></svg>';
                    break;
                case 3:
                    btnStyle='<svg class="video-playBtn-styles4" style="width: 100%; height: 100%;vertical-align: middle;overflow: hidden;" viewBox="0 0 1194 1024" xmlns="http://www.w3.org/2000/svg">' +
                        '<path d="M1045.333333 0H149.333333C67.157333 0 0 57.6 0 128v768c0 70.4 67.157333 128 149.333333 128h896c82.176 0 149.333333-57.6 149.333334-128v-768c0-70.4-67.157333-128-149.333334-128z m-597.333333 848.042667V175.872L896 512 448 848.042667z"></path>' +
                        '<path d="M430 170 L1000 490 L430 855  Z" fill="#ffffff" p-id="3114"></path></svg>';
                    break;
                case 4:
                    btnStyle='<svg class="video-playBtn-styles5" style="width: 145%; height: 100%;vertical-align: middle;overflow: hidden;" viewBox="0 0 1792 1024" xmlns="http://www.w3.org/2000/svg">' +
                        '<path d="M0 153.2928A153.7024 153.7024 0 0 1 153.6 0h1484.8c84.8384 0 153.6 68.7616 153.6 153.2928v717.4144A153.7024 153.7024 0 0 1 1638.4 1024H153.6c-84.8384 0-153.6-68.7616-153.6-153.2928V153.2928zM1210.9312 481.28l-427.7248-269.568a46.2336 46.2336 0 0 0-43.6736-2.6112c-13.9776 6.4512-22.7328 19.3536-22.7328 33.4336v539.0848c0 14.0288 8.7552 26.9312 22.7328 33.3824a45.9776 45.9776 0 0 0 43.6736-2.6624l427.7248-269.5168A36.608 36.608 0 0 0 1228.8 512c0-12.288-6.656-23.7568-17.8688-30.7712z"></path>' +
                        '<path d="M715 175 L1300 490 L715 850  Z" fill="#ffffff" p-id="3114"></path></svg>';
                    break;
                case 5:
                    btnStyle='<svg class="video-playBtn-styles6" style="width: 100%; height: 100%;vertical-align: middle;overflow: hidden;" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">' +
                        '<path d="M130 150 L900 150 L900 870 L130 870 Z" fill="#ffffff" p-id="3114"></path>' +
                        '<path d="M377.971959 333.319481 690.656471 511.932462 377.971959 690.678472 377.971959 333.319481zM958.70846 243.88252l0 536.102954c0 98.730629-79.971379 178.744987-178.615027 178.744987L243.903497 958.730461c-98.642624 0-178.61298-80.013335-178.61298-178.744987L65.290517 243.88252c0-98.644671 79.969333-178.615027 178.61298-178.615027l536.190959 0C878.73708 65.267493 958.70846 145.236825 958.70846 243.88252zM869.401458 288.643979c0-74.080206-59.989279-134.069485-134.069485-134.069485L288.667004 154.574494c-74.082252 0-134.115534 59.989279-134.115534 134.069485L154.55147 735.309972c0 74.03825 60.033281 134.113487 134.115534 134.113487l446.664969 0c74.080206 0 134.069485-60.075237 134.069485-134.113487L869.401458 288.643979z"></path></svg>';
                    break;
            }
            if(a==4){
                zmEditor.component.nowEdit().find(".zm-videobtn-setplace1").css("transform","translate(-72%,-50%)")
            }else{
                zmEditor.component.nowEdit().find(".zm-videobtn-setplace1").css("transform","translate(-50%,-50%)")
            }
            d.html(btnStyle);
        })
        return e;
    },
    videoPLPStr:function(ele,obj,str){
    var e = $('<div class="zm-edit-components-productList-PLPStr" style="border: none">'
        +'<div class="zm-edit-components-productList-PLPStr-title"><label><i class="fa fa-check"></i></label><span style="width: 127px"></span></div>'
        +'<div class="zm-edit-components-productList-PLPStr-wrap"></div>'
        +'</div>'
    );
    e.find(".zm-edit-components-productList-PLPStr-title > span").text(str);
    var _wrap = e.find(".zm-edit-components-productList-PLPStr-wrap");
    var _font =  $('<div class="zm-edit-components-fontStyle">'
        +'<div></div>'
        +'<div></div>'
        +'<div></div>'
        +'</div>');
    var family = _font.children("div").eq(0),
        size = _font.children("div").eq(1),
        color =_font.children("div").eq(2);
    var _family = zmEditor.component.setItems.strings.family(ele,obj),
        _size = zmEditor.component.setItems.strings.size(ele,obj),
        _color = zmEditor.component.setItems.strings.color(ele,obj);
    family.append(_family);
    size.append(_size);
    color.append(_color);
    _wrap.append(_font);
    var shadow = $('<div></div>').addClass("zm-edit-components-videoList-shadow");
    e.append(shadow);

    var label = e.find("label");
    var icon = label.children();
    label.on("click",function(){
        var goal;
        if(obj.goal){
            goal = ele.find(obj.goal);
        }else{
            goal = ele;
        }
        if(icon.is(".fa-check")){
            icon.removeClass("fa-check");
            shadow.css("display","block");
            goal.hide();
        }else{
            icon.addClass("fa-check");
            shadow.css("display","none");
            goal.show();
        }
    });
    return e;
},
    videoContenttitle:function(ele,obj){
        return zmEditor.component.video.videoPLPStr(ele,obj,"视频名称");
    },
    videoContentintroduct:function(ele,obj){
        return zmEditor.component.video.videoPLPStr(ele,obj,"视频简介");
    },
    videoContent:function(ele,obj){
        return zmEditor.component.video.videoPLPStr(ele,obj,"播放次数及评论数量");
    },
    setVideoStyle:function ( ele,clickEle) {
        var _this = clickEle;
        var iSelected = ele;
        var listVideoMain = _this.find('.zm-videoBox-wrap');
        var videoType = listVideoMain.find('.zm-videoBox').attr('data-type');
        //var nowEditVideoType = iSelected.find('.zm-videoBox').attr('data-type');
        var b='';
        console.log(videoType,iSelected.find('.zm-videoPack'))
        switch (videoType){
            case "1":
                b='<div class="zm-videop-thumb"><div class="zm-videop-thumb-wrap">'
                    +'<div class="zm-videop-time zm-videop-timeRb">02:28</div><a class="zm-videoBlackcover" title="" >'
                    +'<span class="zm-videobtn-setplace1 zm-video-btn zm-videobtn-text"></span><span class="zm-videobtn-setplace1 zm-video-btn video-playBtn-style1">'
                    +'<svg class="video-playBtn-styles1" style="width: 100%; height: 100%;vertical-align: middle;fill: #00AA91;overflow: hidden;" viewBox="0 0 1024 1024"  xmlns="http://www.w3.org/2000/svg"><path   d="M512 922.496c-226.752 0-410.56-183.808-410.56-410.496 0-226.752 183.808-410.56 410.56-410.56 226.752 0 410.56 183.808 410.56 410.56C922.56 738.752 738.752 922.496 512 922.496zM686.592 503.936c-21.12-12.224-268.416-155.008-280.768-162.112C390.336 332.992 374.72 344.256 374.72 359.36c0 11.648 0 307.968 0 324.864 0 16.64 17.28 24.704 30.464 17.408 17.984-9.984 266.24-153.536 281.408-162.496C700.224 531.136 700.416 512 686.592 503.936z"></path><path d="M365 315 L715 520 L365 725  Z" fill="#ffffff" p-id="3114"></path></svg>'
                    +'</span></a>'
                    +'<img class="zm-videoQuic" src="//r1.ykimg.com/0515000058F4F053ADB91206D400962B"></div></div>'
                    +'<ul class="zm-videoInfo-list"><li class="zm-videoInfo-title zm-video-title zm-videoInfo-text">这是新闻的标题</li>'
                    +'<li class="zm-videoInfo-introduc zm-video-introduc zm-videoInfo-text">这是一个新闻的简介欢迎阅读。</li>'
                    +'<li class="zm-videoInfo-comment zm-video-comment zm-videoInfo-text"><span>464次播放</span><span>0次评论</span></li></ul>';
                break;
            case "2":
                b='<div class="zm-videop-thumb"><div class="zm-videop-thumb-wrap">'
                    +'<div class="zm-videop-time zm-videop-timeRt">02:28</div><a class="zm-videoBlackcover" title="" >'
                    +'<span class="zm-videobtn-setplace1 zm-video-btn zm-videobtn-text"></span><span class="zm-videobtn-setplace1 zm-video-btn video-playBtn-style1">'
                    +'<svg class="video-playBtn-styles1" style="width: 100%; height: 100%;vertical-align: middle;fill: #00AA91;overflow: hidden;" viewBox="0 0 1024 1024"  xmlns="http://www.w3.org/2000/svg"><path   d="M512 922.496c-226.752 0-410.56-183.808-410.56-410.496 0-226.752 183.808-410.56 410.56-410.56 226.752 0 410.56 183.808 410.56 410.56C922.56 738.752 738.752 922.496 512 922.496zM686.592 503.936c-21.12-12.224-268.416-155.008-280.768-162.112C390.336 332.992 374.72 344.256 374.72 359.36c0 11.648 0 307.968 0 324.864 0 16.64 17.28 24.704 30.464 17.408 17.984-9.984 266.24-153.536 281.408-162.496C700.224 531.136 700.416 512 686.592 503.936z"></path><path d="M365 315 L715 520 L365 725  Z" fill="#ffffff" p-id="3114"></path></svg>'
                    +'</span></a>'
                    +'<img class="zm-videoQuic" src="//puui.qpic.cn/vcover_vt_pic/0/2xxul4n2j8y0rxi1493347926/260"></div></div>'
                    +'<ul class="zm-videoInfo-list"><li class="zm-videoInfo-title zm-video-title zm-videoInfo-text">这是新闻的标题</li>'
                    +'<li class="zm-videoInfo-introduc zm-video-introduc zm-videoInfo-text">这是一个新闻的简介欢迎阅读。</li>'
                    +'<li class="zm-videoInfo-comment zm-video-comment zm-videoInfo-text"><span>464次播放</span><span>0次评论</span></li></ul>';
                break;
            case "3":
                b='<div class="zm-videop-thumb"><div class="zm-videop-thumb-wrap">'
                    +'<div class="zm-videop-time zm-videop-timeLt1">00:58</div>'
                    +'<a class="zm-videoTextWrap" data-type="1"><div class="zm-video-title zm-videoInfo-text">这是新闻的标题</div>'
                    +'<ul class="zm-videoInfo-list1"><li class="zm-videoInfo-introduc zm-video-introduc zm-videoInfo-text">这是一个新闻的简介，欢迎阅读。</li>'
                    +'<li class="zm-videoInfo-comment zm-video-comment zm-videoInfo-text"><span>464次播放</span><span>0次评论</span></li></ul></a>'
                    + '<a class="zm-videoBlackcover" title="" >'
                    +'<span class="zm-videobtn-setplace1 zm-video-btn zm-videobtn-text"></span><span class="zm-videobtn-setplace1 zm-video-btn video-playBtn-style1">'
                    +'<svg class="video-playBtn-styles1" style="width: 100%; height: 100%;vertical-align: middle;fill: #00AA91;overflow: hidden;" viewBox="0 0 1024 1024"  xmlns="http://www.w3.org/2000/svg"><path   d="M512 922.496c-226.752 0-410.56-183.808-410.56-410.496 0-226.752 183.808-410.56 410.56-410.56 226.752 0 410.56 183.808 410.56 410.56C922.56 738.752 738.752 922.496 512 922.496zM686.592 503.936c-21.12-12.224-268.416-155.008-280.768-162.112C390.336 332.992 374.72 344.256 374.72 359.36c0 11.648 0 307.968 0 324.864 0 16.64 17.28 24.704 30.464 17.408 17.984-9.984 266.24-153.536 281.408-162.496C700.224 531.136 700.416 512 686.592 503.936z"></path><path d="M365 315 L715 520 L365 725  Z" fill="#ffffff" p-id="3114"></path></svg>'
                    +'</span></a>'
                    +'<img class="zm-videoQuic" src="//r1.ykimg.com/0515000057A07A7567BC3D05050A8239"></div></div>'
                break;
            case "4":
                b='<div class="zm-videop-thumb"><div class="zm-videop-thumb-wrap">'
                    +'<div class="zm-videop-time zm-videop-timeRb">00:58</div>'
                    +'<a class="zm-videoTextWrap" data-type="1"><ul class="zm-videoInfo-list2"><li class="zm-video-title zm-videoInfo-text">这是新闻的标题<li>'
                    +'<li class="zm-videoInfo-introduc zm-video-introduc zm-videoInfo-text">这是一个新闻的简介，欢迎阅读。</li></ul>'
                    +'<div class="zm-videoInfo-comment1 zm-video-comment zm-videoInfo-text"><span>464次播放</span><span>0次评论</span></div></a>'
                    +'<a class="zm-videoBlackcover" title="" >'
                    +'<span class="zm-videobtn-setplace1 zm-video-btn zm-videobtn-text"></span><span class="zm-videobtn-setplace1 zm-video-btn video-playBtn-style1">'
                    +'<svg class="video-playBtn-styles1" style="width: 100%; height: 100%;vertical-align: middle;fill: #00AA91;overflow: hidden;" viewBox="0 0 1024 1024"  xmlns="http://www.w3.org/2000/svg"><path   d="M512 922.496c-226.752 0-410.56-183.808-410.56-410.496 0-226.752 183.808-410.56 410.56-410.56 226.752 0 410.56 183.808 410.56 410.56C922.56 738.752 738.752 922.496 512 922.496zM686.592 503.936c-21.12-12.224-268.416-155.008-280.768-162.112C390.336 332.992 374.72 344.256 374.72 359.36c0 11.648 0 307.968 0 324.864 0 16.64 17.28 24.704 30.464 17.408 17.984-9.984 266.24-153.536 281.408-162.496C700.224 531.136 700.416 512 686.592 503.936z"></path><path d="M365 315 L715 520 L365 725  Z" fill="#ffffff" p-id="3114"></path></svg>'
                    +'</span>'
                    +'</a>'
                    +'<img class="zm-videoQuic" src="//r1.ykimg.com/0515000058218C8767BC3C7F870ADED4"></div></div>'
                break;
            case "5":
                b='<div class="zm-videop-thumb"><div class="zm-videop-thumb-wrap">'
                    +'<div class="zm-videop-time zm-videop-timeRb">02:28</div><a class="zm-videoBlackcover" title="" ><span class="zm-videobtn-setplace1 zm-video-btn zm-videobtn-text" style="display: block;"></span><span class="zm-videobtn-setplace1 zm-video-btn video-playBtn-style1" style="display: none;">'
                    +'立即播放 <svg class="video-playBtn-styles1" style="width: 100%; height: 100%;vertical-align: middle;fill: #00AA91;overflow: hidden;" viewBox="0 0 1024 1024"  xmlns="http://www.w3.org/2000/svg"><path   d="M512 922.496c-226.752 0-410.56-183.808-410.56-410.496 0-226.752 183.808-410.56 410.56-410.56 226.752 0 410.56 183.808 410.56 410.56C922.56 738.752 738.752 922.496 512 922.496zM686.592 503.936c-21.12-12.224-268.416-155.008-280.768-162.112C390.336 332.992 374.72 344.256 374.72 359.36c0 11.648 0 307.968 0 324.864 0 16.64 17.28 24.704 30.464 17.408 17.984-9.984 266.24-153.536 281.408-162.496C700.224 531.136 700.416 512 686.592 503.936z"></path><path d="M365 315 L715 520 L365 725  Z" fill="#ffffff" p-id="3114"></path></svg></span></a><img class="zm-videoQuic" src="//r1.ykimg.com/0515000058218C8767BC3C7F870ADED4"></div></div><ul class="zm-videoInfo-list">'
                    +'<li class="zm-videoInfo-title zm-video-title zm-videoInfo-text">这是新闻的标题</li>'
                    +'<li class="zm-videoInfo-introduc zm-video-introduc zm-videoInfo-text">这是一个新闻的简介，欢迎阅读。</li><li class="zm-videoInfo-comment zm-video-comment zm-videoInfo-text">'
                    +'<span>464次播放</span><span>0次评论</span></li></ul>'
                break;
            case "6":
                b='<div class="zm-videop-thumb"><div class="zm-videop-thumb-wrap">'
                    +'<div class="zm-videop-time zm-videop-timeRb">02:28</div><a class="zm-videoBlackcover" title="" >'
                    +'<span class="zm-videobtn-setplace2 zm-video-btn zm-videobtn-text"></span><span class="zm-videobtn-setplace2 zm-video-btn video-playBtn-style1">'
                    +'<svg class="video-playBtn-style1" style="width: 100%; height: 100%;vertical-align: middle;fill: #00AA91;overflow: hidden;" viewBox="0 0 1024 1024"  xmlns="http://www.w3.org/2000/svg"><path   d="M512 922.496c-226.752 0-410.56-183.808-410.56-410.496 0-226.752 183.808-410.56 410.56-410.56 226.752 0 410.56 183.808 410.56 410.56C922.56 738.752 738.752 922.496 512 922.496zM686.592 503.936c-21.12-12.224-268.416-155.008-280.768-162.112C390.336 332.992 374.72 344.256 374.72 359.36c0 11.648 0 307.968 0 324.864 0 16.64 17.28 24.704 30.464 17.408 17.984-9.984 266.24-153.536 281.408-162.496C700.224 531.136 700.416 512 686.592 503.936z"></path><path d="M365 315 L715 520 L365 725  Z" fill="#ffffff" p-id="3114"></path></svg>'
                    +'</span></a>'
                    +'<img class="zm-videoQuic" src="//r1.ykimg.com/0515000058DA3764ADBAC3814E03DC40"></div></div><ul class="zm-videoInfo-list">'
                    +'<li class="zm-videoInfo-title zm-video-title zm-videoInfo-text">这是新闻的标题</li>'
                    +'<li class="zm-videoInfo-introduc zm-video-introduc zm-videoInfo-text">这是一个新闻的简介，欢迎阅读。</li>'
                    +'<li class="zm-videoInfo-comment zm-video-comment zm-videoInfo-text"><span>464次播放</span><span>0次评论</span></li></ul>'
                break;
            case "7":
                b='<div class="zm-videop-thumb"><div class="zm-videop-thumb-wrap">'
                    +'<div class="zm-videop-time zm-videop-timeRt">00:58</div>'
                    +'<a class="zm-videoTextWrap" data-type="1"><div class="zm-videoInfo-list3"><div class="zm-videoInfo-title zm-video-title zm-videoInfo-text">这是新闻的标题</div>'
                    +'<div class="zm-videoInfo-introduc zm-video-introduc zm-videoInfo-text">这是一个新闻的简介，欢迎阅读。</div>'
                    +'<div class="zm-videoInfo-comment zm-video-comment zm-videoInfo-text"><span>464次播放</span><span>0次评论</span></div></div></a>'
                    + '<a class="zm-videoBlackcover" title="" >'
                    +'<span class="zm-videobtn-setplace1 zm-video-btn zm-videobtn-text"></span><span class="zm-videobtn-setplace1 zm-video-btn video-playBtn-style1">'
                    +'<svg class="video-playBtn-styles1" style="width: 100%; height: 100%;vertical-align: middle;fill: #00AA91;overflow: hidden;" viewBox="0 0 1024 1024"  xmlns="http://www.w3.org/2000/svg"><path   d="M512 922.496c-226.752 0-410.56-183.808-410.56-410.496 0-226.752 183.808-410.56 410.56-410.56 226.752 0 410.56 183.808 410.56 410.56C922.56 738.752 738.752 922.496 512 922.496zM686.592 503.936c-21.12-12.224-268.416-155.008-280.768-162.112C390.336 332.992 374.72 344.256 374.72 359.36c0 11.648 0 307.968 0 324.864 0 16.64 17.28 24.704 30.464 17.408 17.984-9.984 266.24-153.536 281.408-162.496C700.224 531.136 700.416 512 686.592 503.936z"></path><path d="M365 315 L715 520 L365 725  Z" fill="#ffffff" p-id="3114"></path></svg>'
                    +'</span></a>'
                    +'<img class="zm-videoQuic" src="//r1.ykimg.com/05150000574BF54667BC3C24CF04FD2B"></div></div>'
                break;
            case "8":
                b='<div class="zm-videop-thumb"><div class="zm-videop-thumb-wrap">'
                    +'<div class="zm-videop-time zm-videop-timeRb">00:58</div>'
                    +'<a class="zm-videoTextWrap" data-type="1"><div class="zm-videoInfo-list4"><div class="zm-videoInfo-title zm-video-title zm-videoInfo-text">这是新闻的标题</div>'
                    +'<div class="zm-videoInfo-introduc zm-video-introduc zm-videoInfo-text">这是一个新闻的简介，欢迎阅读。</div>'
                    +'<div class="zm-videoInfo-comment zm-video-comment zm-videoInfo-text"><span>464次播放</span><span>0次评论</span></div></div></a>'
                    +'<a class="zm-videoBlackcover" title="" >'
                    +'<span class="zm-videobtn-setplace2 zm-video-btn zm-videobtn-text"></span><span class="zm-videobtn-setplace2 zm-video-btn video-playBtn-style1">'
                    +'<svg class="video-playBtn-style1" style="width: 100%; height: 100%;vertical-align: middle;fill: #00AA91;overflow: hidden;" viewBox="0 0 1024 1024"  xmlns="http://www.w3.org/2000/svg"><path   d="M512 922.496c-226.752 0-410.56-183.808-410.56-410.496 0-226.752 183.808-410.56 410.56-410.56 226.752 0 410.56 183.808 410.56 410.56C922.56 738.752 738.752 922.496 512 922.496zM686.592 503.936c-21.12-12.224-268.416-155.008-280.768-162.112C390.336 332.992 374.72 344.256 374.72 359.36c0 11.648 0 307.968 0 324.864 0 16.64 17.28 24.704 30.464 17.408 17.984-9.984 266.24-153.536 281.408-162.496C700.224 531.136 700.416 512 686.592 503.936z"></path><path d="M365 315 L715 520 L365 725  Z" fill="#ffffff" p-id="3114"></path></svg>'
                    +'</span></a>'
                    +'<img class="zm-videoQuic" src="https://r1.ykimg.com/0541040858ECE81C6F0E650386F84287"></div></div>'
                break;
        }
        //iSelected.html(b);
        iSelected.find(".zm-videoPack").html(b);
        iSelected.find(".zm-videoBox").attr("data-type",videoType);
        zmEditor.component.video.getVideoList(ele)
    },
    getVideoList:function (ele,obj) {
        var e=ele.find(".zm-videoPack");
        //zm-videop-timehttp://192.168.0.122/image/001.jpg
        var url = 'http://192.168.0.122/';
        var goodsList = [
            {fId: "007",fMainUrl: url + "image/001.jpg",fName: "联想(Lenovo)拯救者R720 15.6英寸游戏笔记本电脑(i7-7700HQ 8G 1T GTX1050 2G IPS 黑)",fRetail: "01:58",fGuide: "我是视频标题",fComment:"123",fThumb:"321"},
            {fId: "218",fMainUrl: url + "image/002.jpg",fName: "飞利浦(PHILIPS)扫地机器人FC8710/82自动智能家用纤薄吸尘器",fRetail: "00:02",fGuide: "我是视频标题",fComment:"123",fThumb:"321"},
            {fId: "056",fMainUrl: url + "image/003.jpg",fName: "苹果新品iphone7 骚红色",fRetail: "00:41",fGuide: "我是视频标题",fComment:"123",fThumb:"321"},
            {fId: "756",fMainUrl: url + "image/007.jpg",fName: "魅族(meizu) pro8 领先一个时代",fRetail: "00:27",fGuide: "我是视频标题",fComment:"123",fThumb:"321"},
            {fId: "896",fMainUrl: url + "image/008.jpg",fName: "充电5分钟 通话30s 你值得拥有",fRetail: "00:15",fGuide: "我是视频标题",fComment:"123",fThumb:"321"},
            {fId: "732",fMainUrl: url + "image/009.jpg",fName: "华为nova2 智能美颜 年轻20岁",fRetail: "00:35",fGuide: "我是视频标题",fComment:"123",fThumb:"321"},
            {fId: "563",fMainUrl: url + "image/010.jpg",fName: "暖床服务 每日一单 先到先得",fRetail: "01:18",fGuide: "我是视频标题",fComment:"123",fThumb:"321"},
            {fId: "158",fMainUrl: url + "image/004.jpg",fName: "华为电脑 ",fRetail: "3599",fRetail: "02:32",fGuide: "我是视频标题",fComment:"123",fThumb:"321"},
            {fId: "456",fMainUrl: url + "image/005.jpg",fName: "华硕笔记本 就是那么美",fRetail: "04:25",fGuide: "我是视频标题",fComment:"123",fThumb:"321"},
            {fId: "093",fMainUrl: url + "image/006.jpg",fName: "三星智能等离子电视",fRetail: "00:58",fGuide: "我是视频标题",fComment:"123",fThumb:"321"},
            {fId: "756",fMainUrl: url + "image/017.jpg",fName: "魅族(meizu) pro8 领先一个时代",fRetail: "00:58",fGuide: "我是视频标题",fComment:"123",fThumb:"321"},
            {fId: "896",fMainUrl: url + "image/018.jpg",fName: "充电5分钟 通话30s 你值得拥有",fRetail: "00:58",fGuide: "我是视频标题",fComment:"123",fThumb:"321"},
            {fId: "007",fMainUrl: url + "image/011.jpg",fName: "小米电视 43寸 新品预售",fRetail: "00:58",fGuide: "我是视频标题",fComment:"123",fThumb:"321"},
            {fId: "218",fMainUrl: url + "image/012.jpg",fName: "小米手机6 66666",fRetail: "00:58",fGuide: "我是视频标题",fComment:"123",fThumb:"321"},
            {fId: "056",fMainUrl: url + "image/013.jpg",fName: "苹果新品iphone7 骚红色",fRetail: "00:58",fGuide: "我是视频标题",fComment:"123",fThumb:"321"},
            {fId: "158",fMainUrl: url + "image/014.jpg",fName: "华为电脑 ",fRetail: "00:58",fGuide: "我是视频标题",fComment:"123",fThumb:"321"},
            {fId: "456",fMainUrl: url + "image/015.jpg",fName: "华硕笔记本 就是那么美",fRetail: "00:58",fGuide: "我是视频标题",fComment:"123",fThumb:"321"},
            {fId: "093",fMainUrl: url + "image/016.jpg",fName: "三星智能等离子电视",fRetail: "00:58",fGuide: "我是视频标题",fComment:"123",fThumb:"321"},
            {fId: "007",fMainUrl: url + "image/001.jpg",fName: "联想(Lenovo)拯救者R720 15.6英寸游戏笔记本电脑(i7-7700HQ 8G 1T GTX1050 2G IPS 黑)",fRetail: "00:58",fGuide: "我是视频标题",fComment:"123",fThumb:"321"},
            {fId: "218",fMainUrl: url + "image/002.jpg",fName: "飞利浦(PHILIPS)扫地机器人FC8710/82自动智能家用纤薄吸尘器",fRetail: "00:58",fGuide: "我是视频标题",fComment:"123",fThumb:"321"},
            {fId: "056",fMainUrl: url + "image/003.jpg",fName: "苹果新品iphone7 骚红色",fRetail: "00:58",fGuide: "我是视频标题",fComment:"123",fThumb:"321"},
            {fId: "756",fMainUrl: url + "image/007.jpg",fName: "魅族(meizu) pro8 领先一个时代",fRetail: "00:58",fGuide: "我是视频标题",fComment:"123",fThumb:"321"},
            {fId: "896",fMainUrl: url + "image/008.jpg",fName: "充电5分钟 通话30s 你值得拥有",fRetail: "00:58",fGuide: "我是视频标题",fComment:"123",fThumb:"321"},
            {fId: "732",fMainUrl: url + "image/019.jpg",fName: "华为nova2 智能美颜 年轻20岁",fRetail: "00:58",fGuide: "我是视频标题",fComment:"123",fThumb:"321"},
            {fId: "563",fMainUrl: url + "image/020.jpg",fName: "暖床服务 每日一单 先到先得",fRetail: "00:58",fGuide: "我是视频标题",fComment:"123",fThumb:"321"},
            {fId: "007",fMainUrl: url + "image/011.jpg",fName: "小米电视 43寸 新品预售",fRetail: "00:58",fGuide: "我是视频标题",fComment:"123",fThumb:"321"},
            {fId: "218",fMainUrl: url + "image/012.jpg",fName: "小米手机6 66666",fRetail: "00:58",fGuide: "我是视频标题",fComment:"123",fThumb:"321"},
            {fId: "056",fMainUrl: url + "image/013.jpg",fName: "苹果新品iphone7 骚红色",fRetail: "00:58",fGuide: "我是视频标题",fComment:"123",fThumb:"321"},
            {fId: "158",fMainUrl: url + "image/014.jpg",fName: "华为电脑 ",fRetail: "00:58",fGuide: "我是视频标题",fComment:"123",fThumb:"321"},
            {fId: "456",fMainUrl: url + "image/015.jpg",fName: "华硕笔记本 就是那么美",fRetail: "00:58",fGuide: "我是视频标题",fComment:"123",fThumb:"321"},
            {fId: "093",fMainUrl: url + "image/016.jpg",fName: "三星智能等离子电视",fRetail: "00:58",fGuide: "我是视频标题",fComment:"123",fThumb:"321"},
            {fId: "007",fMainUrl: url + "image/001.jpg",fName: "联想(Lenovo)拯救者R720 15.6英寸游戏笔记本电脑(i7-7700HQ 8G 1T GTX1050 2G IPS 黑)",fRetail: "00:58",fGuide: "我是视频标题",fComment:"123",fThumb:"321"},
            {fId: "218",fMainUrl: url + "image/002.jpg",fName: "飞利浦(PHILIPS)扫地机器人FC8710/82自动智能家用纤薄吸尘器",fRetail: "2899",fGuide: "2899"},
            {fId: "056",fMainUrl: url + "image/003.jpg",fName: "苹果新品iphone7 骚红色",fRetail: "00:58",fGuide: "我是视频标题",fComment:"123",fThumb:"321"},
            {fId: "756",fMainUrl: url + "image/007.jpg",fName: "魅族(meizu) pro8 领先一个时代",fRetail: "00:58",fGuide: "我是视频标题",fComment:"123",fThumb:"321"},
            {fId: "896",fMainUrl: url + "image/008.jpg",fName: "充电5分钟 通话30s 你值得拥有",fRetail: "00:58",fGuide: "我是视频标题",fComment:"123",fThumb:"321"},
            {fId: "732",fMainUrl: url + "image/009.jpg",fName: "华为nova2 智能美颜 年轻20岁",fRetail: "00:58",fGuide: "我是视频标题",fComment:"123",fThumb:"321"},
            {fId: "563",fMainUrl: url + "image/010.jpg",fName: "暖床服务 每日一单 先到先得",fRetail: "00:58",fGuide: "我是视频标题",fComment:"123",fThumb:"321"},
            {fId: "158",fMainUrl: url + "image/004.jpg",fName: "华为电脑 ",fRetail: "00:58",fGuide: "我是视频标题",fComment:"123",fThumb:"321"},
            {fId: "456",fMainUrl: url + "image/005.jpg",fName: "华硕笔记本 就是那么美",fRetail: "00:58",fGuide: "我是视频标题",fComment:"123",fThumb:"321"},
            {fId: "093",fMainUrl: url + "image/006.jpg",fName: "三星智能等离子电视",fRetail: "00:58",fGuide: "我是视频标题",fComment:"123",fThumb:"321"},
            {fId: "756",fMainUrl: url + "image/017.jpg",fName: "魅族(meizu) pro8 领先一个时代",fRetail: "00:58",fGuide: "我是视频标题",fComment:"123",fThumb:"321"},
            {fId: "007",fMainUrl: url + "image/011.jpg",fName: "小米电视 43寸 新品预售",fRetail: "00:58",fGuide: "我是视频标题",fComment:"123",fThumb:"321"},
            {fId: "218",fMainUrl: url + "image/012.jpg",fName: "小米手机6 66666",fRetail: "00:58",fGuide: "我是视频标题",fComment:"123",fThumb:"321"},
            {fId: "056",fMainUrl: url + "image/013.jpg",fName: "苹果新品iphone7 骚红色",fRetail: "00:58",fGuide: "我是视频标题",fComment:"123",fThumb:"321"},
            {fId: "158",fMainUrl: url + "image/014.jpg",fName: "华为电脑 ",fRetail: "00:58",fGuide: "我是视频标题",fComment:"123",fThumb:"321"},
            {fId: "456",fMainUrl: url + "image/015.jpg",fName: "华硕笔记本 就是那么美",fRetail: "00:58",fGuide: "我是视频标题",fComment:"123",fThumb:"321"},
            {fId: "093",fMainUrl: url + "image/016.jpg",fName: "三星智能等离子电视",fRetail: "00:58",fGuide: "我是视频标题",fComment:"123",fThumb:"321"},
            {fId: "007",fMainUrl: url + "image/001.jpg",fName: "联想(Lenovo)拯救者R720 15.6英寸游戏笔记本电脑(i7-7700HQ 8G 1T GTX1050 2G IPS 黑)",fRetail: "00:58",fGuide: "我是视频标题",fComment:"123",fThumb:"321"},
            {fId: "218",fMainUrl: url + "image/002.jpg",fName: "飞利浦(PHILIPS)扫地机器人FC8710/82自动智能家用纤薄吸尘器",fRetail: "00:58",fGuide: "我是视频标题",fComment:"123",fThumb:"321"},
            {fId: "056",fMainUrl: url + "image/003.jpg",fName: "苹果新品iphone7 骚红色",fRetail: "00:58",fGuide: "我是视频标题",fComment:"123",fThumb:"321"},
            {fId: "756",fMainUrl: url + "image/007.jpg",fName: "魅族(meizu) pro8 领先一个时代",fRetail: "00:58",fGuide: "我是视频标题",fComment:"123",fThumb:"321"},
            {fId: "896",fMainUrl: url + "image/008.jpg",fName: "充电5分钟 通话30s 你值得拥有",fRetail: "00:58",fGuide: "我是视频标题",fComment:"123",fThumb:"321"},
            {fId: "896",fMainUrl: url + "image/018.jpg",fName: "充电5分钟 通话30s 你值得拥有",fRetail: "00:58",fGuide: "我是视频标题",fComment:"123",fThumb:"321"},
            {fId: "732",fMainUrl: url + "image/019.jpg",fName: "华为nova2 智能美颜 年轻20岁",fRetail: "00:58",fGuide: "我是视频标题",fComment:"123",fThumb:"321"},
            {fId: "563",fMainUrl: url + "image/020.jpg",fName: "暖床服务 每日一单 先到先得",fRetail: "00:58",fGuide: "我是视频标题",fComment:"123",fThumb:"321"},
            {fId: "007",fMainUrl: url + "image/011.jpg",fName: "小米电视 43寸 新品预售",fRetail: "00:58",fGuide: "我是视频标题",fComment:"123",fThumb:"321"},
            {fId: "218",fMainUrl: url + "image/012.jpg",fName: "小米手机6 66666",fRetail: "00:58",fGuide: "我是视频标题",fComment:"123",fThumb:"321"},
            {fId: "056",fMainUrl: url + "image/013.jpg",fName: "苹果新品iphone7 骚红色",fRetail: "00:58",fGuide: "我是视频标题",fComment:"123",fThumb:"321"},
            {fId: "158",fMainUrl: url + "image/014.jpg",fName: "华为电脑 ",fRetail: "00:58",fGuide: "我是视频标题",fComment:"123",fThumb:"321"},
            {fId: "456",fMainUrl: url + "image/015.jpg",fName: "华硕笔记本 就是那么美",fRetail: "00:58",fGuide: "我是视频标题",fComment:"123",fThumb:"321"},
            {fId: "093",fMainUrl: url + "image/016.jpg",fName: "三星智能等离子电视",fRetail: "00:58",fGuide: "我是视频标题",fComment:"123",fThumb:"321"},
            {fId: "007",fMainUrl: url + "image/001.jpg",fName: "联想(Lenovo)拯救者R720 15.6英寸游戏笔记本电脑(i7-7700HQ 8G 1T GTX1050 2G IPS 黑)",fRetail: "00:58",fGuide: "我是视频标题",fComment:"123",fThumb:"321"},
            {fId: "218",fMainUrl: url + "image/002.jpg",fName: "飞利浦(PHILIPS)扫地机器人FC8710/82自动智能家用纤薄吸尘器",fRetail: "00:58",fGuide: "我是视频标题",fComment:"123",fThumb:"321"},
            {fId: "056",fMainUrl: url + "image/003.jpg",fName: "苹果新品iphone7 骚红色",fRetail: "00:58",fGuide: "我是视频标题",fComment:"123",fThumb:"321"},
            {fId: "756",fMainUrl: url + "image/007.jpg",fName: "魅族(meizu) pro8 领先一个时代",fRetail: "00:58",fGuide: "我是视频标题",fComment:"123",fThumb:"321"},
            {fId: "896",fMainUrl: url + "image/008.jpg",fName: "充电5分钟 通话30s 你值得拥有",fRetail: "00:58",fGuide: "我是视频标题",fComment:"123",fThumb:"321"},
            {fId: "732",fMainUrl: url + "image/009.jpg",fName: "华为nova2 智能美颜 年轻20岁",fRetail: "00:58",fGuide: "我是视频标题",fComment:"123",fThumb:"321"},
            {fId: "563",fMainUrl: url + "image/010.jpg",fName: "暖床服务 每日一单 先到先得",fRetail: "00:58",fGuide: "我是视频标题",fComment:"123",fThumb:"321"},
            {fId: "158",fMainUrl: url + "image/004.jpg",fName: "华为电脑 ",fRetail: "00:58",fGuide: "我是视频标题",fComment:"123",fThumb:"321"},
            {fId: "456",fMainUrl: url + "image/005.jpg",fName: "华硕笔记本 就是那么美",fRetail: "00:58",fGuide: "我是视频标题",fComment:"123",fThumb:"321"},
            {fId: "093",fMainUrl: url + "image/006.jpg",fName: "三星智能等离子电视",fRetail: "00:58",fGuide: "我是视频标题",fComment:"123",fThumb:"321"},
            {fId: "756",fMainUrl: url + "image/017.jpg",fName: "魅族(meizu) pro8 领先一个时代",fRetail: "00:58",fGuide: "我是视频标题",fComment:"123",fThumb:"321"},
            {fId: "896",fMainUrl: url + "image/018.jpg",fName: "充电5分钟 通话30s 你值得拥有",fRetail: "00:58",fGuide: "我是视频标题",fComment:"123",fThumb:"321"},
            {fId: "732",fMainUrl: url + "image/019.jpg",fName: "华为nova2 智能美颜 年轻20岁",fRetail: "00:58",fGuide: "我是视频标题",fComment:"123",fThumb:"321"},
            {fId: "563",fMainUrl: url + "image/020.jpg",fName: "暖床服务 每日一单 先到先得",fRetail: "00:58",fGuide: "我是视频标题",fComment:"123",fThumb:"321"},
            {fId: "007",fMainUrl: url + "image/011.jpg",fName: "小米电视 43寸 新品预售",fRetail: "00:58",fGuide: "我是视频标题",fComment:"123",fThumb:"321"},
            {fId: "218",fMainUrl: url + "image/012.jpg",fName: "小米手机6 66666",fRetail: "00:58",fGuide: "我是视频标题",fComment:"123",fThumb:"321"},
            {fId: "056",fMainUrl: url + "image/013.jpg",fName: "苹果新品iphone7 骚红色",fRetail: "00:58",fGuide: "我是视频标题",fComment:"123",fThumb:"321"},
            {fId: "158",fMainUrl: url + "image/014.jpg",fName: "华为电脑 ",fRetail: "00:58",fGuide: "我是视频标题",fComment:"123",fThumb:"321"},
            {fId: "456",fMainUrl: url + "image/015.jpg",fName: "华硕笔记本 就是那么美",fRetail: "00:58",fGuide: "我是视频标题",fComment:"123",fThumb:"321"},
            {fId: "093",fMainUrl: url + "image/016.jpg",fName: "三星智能等离子电视",fRetail: "00:58",fGuide: "我是视频标题",fComment:"123",fThumb:"321"},
        ];
        for(var i=0;i<goodsList.length;i++){
            var videoTime=e.eq(i).find(".zm-videop-time");
            var videoImg=e.eq(i).find(".zm-videoQuic");
            var videoTitle=e.eq(i).find(".zm-video-title");
            var videoIntroduc=e.eq(i).find(".zm-video-introduc");
            var videoComment=e.eq(i).find(".zm-video-comment");
            videoTime.html(goodsList[i].fRetail)
            videoImg.attr("src",goodsList[i].fMainUrl)
            videoTitle.html(goodsList[i].fGuide)
            videoIntroduc.html(goodsList[i].fName)
            videoComment.html(goodsList[i].fComment+"次播放"+goodsList[i].fThumb+"次点赞")
        }


    },
},

$(document).on('mouseover','.zm-videoPack',function () {
    var _this = $(this).find(".zm-video-title");
    _this.attr('data-oldColor',_this.css('color')).css('color',_this.attr('data-type-hoverColor'))
}).on('mouseout','.zm-videoPack',function () {
    var _this = $(this).find(".zm-video-title");
    _this.css('color',_this.attr('data-oldColor'))
});

$(document).on('mouseover','.video-playBtn-style1>svg',function () {
    var _this = $(this);
    _this.attr('data-oldColor',_this.css('fill'));
    _this.css("fill",this.getAttribute('data-type-hoverbackgroundcolor'))
}).on('mouseout','.video-playBtn-style1>svg',function () {
    var _this = $(this);
    _this.css('fill',_this.attr('data-oldColor'))
});
$(document).on('mouseover','.zm-videobtn-text',function () {
    var _this = $(this);
    _this.attr('data-oldColor',_this.css('color')).css('color',_this.attr('data-type-hoverColor'));
}).on('mouseout','.zm-videobtn-text',function () {
    var _this = $(this);
    _this.css('color',_this.attr('data-oldColor'))
});


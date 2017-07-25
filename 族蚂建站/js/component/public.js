/**
 * Created by liuhuan on 2017/6/5.
 */

/************************* 列表的一些方法 产品&&专辑  start***************************/
//存储localStorage数据 {key: ,value: } 遍历数组对象 转成字符串
function setLocal(obj){
    var key = obj.key;
    var val = obj.value;
    var str = "";
    val.forEach(function(e){
        str += JSON.stringify(e) + "#";
    });
    str = str.slice(0,str.length-1);
    localStorage.setItem(key,str);
}
//获取localStrong数据 key = hotAudio || hotProduct || hotAlbum 字符串转对象数组
function getLocal(key){
    var Arr = [];
    var str = localStorage.getItem(key);
    if(str != null){
        str.split("#").forEach(function(e){
            Arr.push(JSON.parse(e));
        });
        return Arr;
    }else{
        return null;
    }
}
/********** 音频弹窗函数 **********/
//DOM元素赋值 快捷播放
function setDomMiniPlayer(ele,key,data){
    var wrap = ele.find(".zm-edit-components-audio-message-wrap");
    wrap.find(".composer").text(data[0].creator);
    wrap.find(".songName").text(data[0].fName);
    ele.attr({"data-audio-id": data[0].fId,"data-audio-key": key});
}
//链接设置项赋值 快捷播放
function setLinkMiniPlayer(ele,data){
    ele.empty();
    var str = "";
    data.forEach(function(e){
        str += '<li><i class="fa fa-link fa-flip-horizontal"></i><span>'+e.creator+' - '+e.fName+'</span></li>'
    })
    ele.append(str);
}

function setDomPlayPanel(ele,key,data){
    ele.find(".intact-title-singer").text(data[0].creator);
    ele.find(".intact-title-name").text(data[0].fName);
    ele.find(".zm-edit-components-audio-intact-totalTime").find("span").text(data[0].fTime);
    ele.attr({"data-audio-id": data[0].fId,"data-audio-key": key});
}
function setLinkPlayPanel(){}


/********************************/

//选择弹窗返回函数 音频
function pop_return_audio(data){
    var iSelected = zmEditor.component.nowEdit();
    //存到local中
    setLocal({key: iSelected.attr("id"),value: data});
    //展示在页面
    iSelected.find(".composer").text(data[0].creator);
    iSelected.find(".songName").text(data[0].fName);
    //展示在设置项
    var ul = $(".zm-component-settingPanel").find(".popup_wind").find(".zm-edit-popup-list");
    var str = setLink(data);
    ul.empty().append(str);
}

/********** 产品弹窗函数 **********/
function setDomProduct(ele,key,data){
    var wrap = ele.find(".zm-edit-components-product-title");
    wrap.find(".zm-edit-components-product-NE").text(data[0].fName);
    wrap.find(".zm-edit-components-product-RP").text("零售价 ¥"+data[0].fRetail);
    wrap.find(".zm-edit-components-product-MP").text("市场指导价 ¥"+data[0].fGuide);
    ele.attr({"data-audio-id": data[0].fId,"data-audio-key": key});
}
function setLinkProduct(ul,data){}


/********************************/



//设置链接样式
function setLink(data){
    var str = "";
    data.forEach(function(element){
        str += "<li><i class='fa fa-link fa-flip-horizontal'></i><span>"+element.creator+" - "+element.fName+"</span></li>"
    });
    return str;
}



//专辑弹窗设置项
function setInstAlbum(ele,data){
    console.log(ele,data);
    ele.empty();
    var str = '';
    data.forEach(function(element){
        str += '<li><i class="fa fa-link fa-flip-horizontal"></i><span>'+element.creator+' - '+element.fName+'</span></li>'
    });
    ele.append(str);
}
//图片比例 原比例计算
function ImgScale(ele){
    $('<img>').attr("src",ele.find("img").attr("src")).load(function(){
        var realWidth = this.width;
        var realHeight = this.height;
        var w = ele.width();
        var h = ele.height();
        var realRatio = realWidth/realHeight;
        var actualRatio = w/h;
        var wrapW,wrapH,s,f;
        if(actualRatio > realRatio){
            wrapH = "100%";
            f = h*realRatio;
            wrapW = (f/w)*100+"%";
        }else{
            wrapW = "100%";
            s = w/realRatio;
            wrapH = (s/h)*100+"%";
        }
        ele.children().css({"width": wrapW,"height": wrapH});
    })
}

//产品列表弹窗设置
function setInstProd(ele,data){
    console.log(ele,data);
}

function setListProd(ele,data){
    console.log(ele,data);
}

//面板列表更新数据
function musicList(obj){
    var key = obj.key;
    var ul = obj.list;
    var arr = getLocal(key);
    ul.empty();
    arr.forEach(function(element,index){
        var index = index + 1;
        var number;
        if(index<10){
            number = "0"+index;
        }else{
            number = index;
        }
        var money;
        if(element.fMoney == "" || element.fMoney == "null" || element.fMoney == "0"){
            money = "免费下载";
        }else{
            money = "下载 "+element.fMoney+"元";

        }

        var li = zmEditor.component.setItems.strings.unityAudioLi();
        li.find(".list-index").children().text(number);
        li.find(".list-name").children().text(element.fName);
        li.find(".list-album").children().text(element.fAlbum);
        li.find(".list-singer").children().text(element.creator);
        li.find(".list-time").children().text(element.fTime);
        li.find(".list-load").children().text(money);
        li.find(".list-playNumber").children().text(element.playN+"次播放");
        li.find(".list-loadNumber").children().text(element.loadN+"次下载");
        ul.append(li);
    })
}
//动态生成列表 商品列表/专辑列表 obj={type,}
function listComponent(obj){
    var col = obj.col ? obj.col : 5;
    var row = obj.row ? obj.row : 3;
    var key = obj.key;
    var type = obj.type;
    var list = getLocal(key);
    var ul = $('<ul class="zm-edit-components-list-wrap clearFloat"></ul>');
    var btn = $('<div class="zm-edit-components-list-loadMore clearFloat"><span>load More</span></div>');
    var unit;
    switch(type){
        case "album":
            unit = zmEditor.component.setItems.strings.unityAlbum();
            break;
        case "product":
            unit = zmEditor.component.setItems.strings.unityProduct();
            break;
        default:
            console.log("未配置的属性");
            break;
    }
    for(var i=0;i<row;i++){
        var li = $('<li class="clearFloat"></li>');
        for(var j=0;j<col;j++){
            li.append(unit.clone());
        }
        ul.append(li);
    }
    loopAssignment({type: type,arr: ul.children().children(),key: key});
    return [ul,btn];
}
//列表循环赋值 obj = {type: album || product,arr: "要赋值的列表", key: "localStrage存的数据名字"}
function loopAssignment(obj){
    var type = obj.type;
    var arr = obj.arr;
    var key = obj.key;
    var list = getLocal(key);
    switch(type){
        case "album":
            arr.each(function(index){
                var _this = $(this);
                _this.attr("data-id",list[index].fId);
                _this.find("img").attr("src",list[index].fSrc);
                _this.find(".zm-edit-components-list-unit-message-01").find("a").text(list[index].fCreator);
                _this.find(".zm-edit-components-list-unit-message-02").find("a").text(list[index].fName);
                _this.find(".zm-edit-components-list-unit-message-03").find("a").text(list[index].fMoney);
                _this.find(".zm-edit-components-list-unit-message-04").find("a").text(list[index].fTime);
            });
            break;
        case "product":
            arr.each(function(index){
                var _this = $(this);
                _this.attr("data-id",list[index].fId);
                _this.find("img").attr("src",list[index].fMainUrl);
                _this.find(".zm-edit-components-list-unit-message-01").find("span").text(list[index].fName);
                _this.find(".zm-edit-components-list-unit-message-02").find("span").text("¥"+list[index].fRetail);
                _this.find(".zm-edit-components-list-unit-message-02").find("del").text("¥"+list[index].fGuide);
            });
            break;
        default:
            console.log("未配置的属性");
            break;
    }
}
//加载更多按钮
$(document).on("click",".zm-edit-components-list-loadMore> span",function(){
    var _this = $(this);
    var iSelected = zmEditor.component.nowEdit();
    var li = iSelected.find("li:first-child");
    var h = parseInt(li.css("height"));
    var num = iSelected.find("li").length;
    var type;
    if(_this.closest(".list_product").length != 0){
        type = "product";
        console.log("我是产品列表");
    }
    if(_this.closest(".list_album").length != 0){
        type = "album";
        console.log("我是专辑列表");
    }
    num++;
    iSelected.find(".zm-edit-components-list-wrap").append(li.clone());//添加行数
    iSelected.css("height",num*h+57+"px");//重置高度
    loopAssignment({type: type,arr: iSelected.find(".zm-edit-components-list-unit"),key: iSelected.attr("data-type-list")})//重置数据
});
/****************************** END ********************************/

function pop_return_album(data){
    var iSelected = zmEditor.component.nowEdit();
    //存到local中
    setLocal(iSelected,{key: iSelected.attr("id"),value: data});
    //展示在页面
    iSelected.find(".composer").text(data[0].creator);
    iSelected.find(".songName").text(data[0].fName);
    //展示在设置项
    var ul = $(".zm-component-settingPanel").find(".zm-edit-component-open-popup").find(".zm-edit-popup-list");
    var str = setLink(data);
    ul.empty().append(str);


}

//选择弹窗返回函数 单一产品
function pop_return_product(data){
    console.log("123=木头人");

}
//选择弹窗返回函数 图片
function pop_return_images(data){
    console.log(data);
}
/********************************************************************************************************/
//模拟数据 待删除
function imitate(){
    /* 模拟数据开始 */
    var mus = "http://192.168.0.122/";
    var sos = [
        {
            "fId": 1,
            "creator": "李行亮",
            "fName": "回忆里的那个人",
            "fAlbum": "回忆里的那个人",
            "fTime": "03:46",
            "fMoney": "2.0",
            "loadN": "13579",
            "playN": "246810",
            "fImgSrc": mus+"image/001.jpg",
            "fMusicSrc": mus+"song/01.mp3"
        },
        {
            "fId": 20,
            "creator": "杨坤",
            "fName": "空城",
            "fAlbum": "空城",
            "fTime": "03:46",
            "fMoney": "1.5",
            "loadN": "8787832",
            "playN": "031480",
            "fImgSrc": mus+"image/002.jpg",
            "fMusicSrc": mus+"song/02.mp3"
        },
        {
            "fId": 13,
            "creator": "银临",
            "fName": "牵丝戏",
            "fAlbum": "牵丝戏",
            "fTime": "03:46",
            "fMoney": "0",
            "loadN": "13579",
            "playN": "246810",
            "fImgSrc": mus+"image/003.jpg",
            "fMusicSrc": mus+"song/03.mp3"
        },
        {
            "fId": 24,
            "creator": "孙子涵",
            "fName": "傻傻等",
            "fAlbum": "花间一壶酒",
            "fTime": "03:46",
            "fMoney": "2",
            "loadN": "13579",
            "playN": "246810",
            "fImgSrc": mus+"image/004.jpg",
            "fMusicSrc": mus+"song/04.mp3"
        },
        {
            "fId": 85,
            "creator": "陈粒",
            "fName": "小半",
            "fAlbum": "如也",
            "fTime": "03:46",
            "fMoney": "0",
            "loadN": "13579",
            "playN": "246810",
            "fImgSrc": mus+"image/005.jpg",
            "fMusicSrc": mus+"song/05.mp3"
        },
        {
            "fId": 46,
            "creator": "Jam",
            "fName": "七月上",
            "fAlbum": "七月上",
            "fTime": "03:46",
            "fMoney": "2",
            "loadN": "13579",
            "playN": "246810",
            "fImgSrc": mus+"image/006.jpg",
            "fMusicSrc": mus+"song/06.mp3"
        },
        {
            "fId": 37,
            "creator": "未知歌手",
            "fName": "九九八十一",
            "fAlbum": "反串合集",
            "fTime": "03:46",
            "fMoney": "0",
            "loadN": "13579",
            "playN": "246810",
            "fImgSrc": mus+"image/007.jpg",
            "fMusicSrc": mus+"song/07.mp3"
        },
        {
            "fId": 18,
            "creator": "赵雷",
            "fName": "成都",
            "fAlbum": "成都",
            "fTime": "03:46",
            "fMoney": "2",
            "loadN": "13579",
            "playN": "246810",
            "fImgSrc": mus+"image/008.jpg",
            "fMusicSrc": mus+"song/08.mp3"
        },
        {
            "fId": 29,
            "creator": "薛之谦",
            "fName": "丑八怪",
            "fAlbum": "意外",
            "fTime": "03:46",
            "fMoney": "0",
            "loadN": "13579",
            "playN": "246810",
            "fImgSrc": mus+"image/009.jpg",
            "fMusicSrc": mus+"song/09.mp3"
        },
        {
            "fId": 10,
            "creator": "周杰伦",
            "fName": "告白气球",
            "fAlbum": "床边故事",
            "fTime": "03:46",
            "fMoney": "2",
            "loadN": "13579",
            "playN": "246810",
            "fImgSrc": mus+"image/010.jpg",
            "fMusicSrc": mus+"song/10.mp3"
        }
    ];
    return sos;
    /* 模拟数据结束 */
}
function albumList(){
    var url = 'resource/images/';
    var albumList = [
        {fId: '012',fName: '初学者',fCreator: '薛之谦',fTime: '2016',fMoney: '20',fSrc: url+'001.jpg'},
        {fId: '045',fName: '周杰伦的床边故事',fCreator: '周杰伦',fTime: '2016',fMoney: '0',fSrc: url+'002.jpg'},
        {fId: '125',fName: '放 & 披风',fCreator: '陈奕迅',fTime: '2017',fMoney: '6',fSrc: url+'003.jpg'},
        {fId: '360',fName: 'MADE',fCreator: 'blgbang',fTime: '2016',fMoney: '2',fSrc: url+'004.jpg'},
        {fId: '099',fName: '你在终点等我',fCreator: '王菲',fTime: '2016',fMoney: '8',fSrc: url+'005.jpg'},
        {fId: '009',fName: '有理想',fCreator: '李荣浩',fTime: '2016',fMoney: '6',fSrc: url+'006.jpg'},
        {fId: '066',fName: '再见',fCreator: '邓紫棋',fTime: '2016',fMoney: '8',fSrc: url+'007.jpg'},
        {fId: '035',fName: 'My Dear Art',fCreator: '陈粒',fTime: '2017',fMoney: '12',fSrc: url+'008.jpg'},
        {fId: '078',fName: '彩虹金刚',fCreator: '孙燕姿',fTime: '2016',fMoney: '18',fSrc: url+'009.jpg'},
        {fId: '156',fName: '春风十里不如你',fCreator: '李建',fTime: '2016',fMoney: '0',fSrc: url+'010.jpg'},
        {fId: '012',fName: '初学者',fCreator: '薛之谦',fTime: '2016',fMoney: '20',fSrc: url+'011.jpg'},
        {fId: '045',fName: '周杰伦的床边故事',fCreator: '周杰伦',fTime: '2016',fMoney: '0',fSrc: url+'012.jpg'},
        {fId: '125',fName: '放 & 披风',fCreator: '陈奕迅',fTime: '2017',fMoney: '6',fSrc: url+'013.jpg'},
        {fId: '360',fName: 'MADE',fCreator: 'blgbang',fTime: '2016',fMoney: '2',fSrc: url+'014.jpg'},
        {fId: '099',fName: '你在终点等我',fCreator: '王菲',fTime: '2016',fMoney: '8',fSrc: url+'015.jpg'},
        {fId: '009',fName: '有理想',fCreator: '李荣浩',fTime: '2016',fMoney: '6',fSrc: url+'016.jpg'},
        {fId: '066',fName: '再见',fCreator: '邓紫棋',fTime: '2016',fMoney: '8',fSrc: url+'017.jpg'},
        {fId: '035',fName: 'My Dear Art',fCreator: '陈粒',fTime: '2017',fMoney: '12',fSrc: url+'018.jpg'},
        {fId: '078',fName: '彩虹金刚',fCreator: '孙燕姿',fTime: '2016',fMoney: '18',fSrc: url+'019.jpg'},
        {fId: '156',fName: '春风十里不如你',fCreator: '李建',fTime: '2016',fMoney: '0',fSrc: url+'020.jpg'},
        {fId: '012',fName: '初学者',fCreator: '薛之谦',fTime: '2016',fMoney: '20',fSrc: url+'001.jpg'},
        {fId: '045',fName: '周杰伦的床边故事',fCreator: '周杰伦',fTime: '2016',fMoney: '0',fSrc: url+'002.jpg'},
        {fId: '125',fName: '放 & 披风',fCreator: '陈奕迅',fTime: '2017',fMoney: '6',fSrc: url+'003.jpg'},
        {fId: '360',fName: 'MADE',fCreator: 'blgbang',fTime: '2016',fMoney: '2',fSrc: url+'004.jpg'},
        {fId: '099',fName: '你在终点等我',fCreator: '王菲',fTime: '2016',fMoney: '8',fSrc: url+'005.jpg'},
        {fId: '009',fName: '有理想',fCreator: '李荣浩',fTime: '2016',fMoney: '6',fSrc: url+'006.jpg'},
        {fId: '066',fName: '再见',fCreator: '邓紫棋',fTime: '2016',fMoney: '8',fSrc: url+'007.jpg'},
        {fId: '035',fName: 'My Dear Art',fCreator: '陈粒',fTime: '2017',fMoney: '12',fSrc: url+'008.jpg'},
        {fId: '078',fName: '彩虹金刚',fCreator: '孙燕姿',fTime: '2016',fMoney: '18',fSrc: url+'009.jpg'},
        {fId: '156',fName: '春风十里不如你',fCreator: '李建',fTime: '2016',fMoney: '0',fSrc: url+'010.jpg'},
        {fId: '012',fName: '初学者',fCreator: '薛之谦',fTime: '2016',fMoney: '20',fSrc: url+'011.jpg'},
        {fId: '045',fName: '周杰伦的床边故事',fCreator: '周杰伦',fTime: '2016',fMoney: '0',fSrc: url+'012.jpg'},
        {fId: '125',fName: '放 & 披风',fCreator: '陈奕迅',fTime: '2017',fMoney: '6',fSrc: url+'013.jpg'},
        {fId: '360',fName: 'MADE',fCreator: 'blgbang',fTime: '2016',fMoney: '2',fSrc: url+'014.jpg'},
        {fId: '099',fName: '你在终点等我',fCreator: '王菲',fTime: '2016',fMoney: '8',fSrc: url+'015.jpg'},
        {fId: '009',fName: '有理想',fCreator: '李荣浩',fTime: '2016',fMoney: '6',fSrc: url+'016.jpg'},
        {fId: '066',fName: '再见',fCreator: '邓紫棋',fTime: '2016',fMoney: '8',fSrc: url+'017.jpg'},
        {fId: '035',fName: 'My Dear Art',fCreator: '陈粒',fTime: '2017',fMoney: '12',fSrc: url+'018.jpg'},
        {fId: '078',fName: '彩虹金刚',fCreator: '孙燕姿',fTime: '2016',fMoney: '18',fSrc: url+'019.jpg'},
        {fId: '156',fName: '春风十里不如你',fCreator: '李建',fTime: '2016',fMoney: '0',fSrc: url+'020.jpg'},
        {fId: '035',fName: 'My Dear Art',fCreator: '陈粒',fTime: '2017',fMoney: '12',fSrc: url+'008.jpg'},
        {fId: '078',fName: '彩虹金刚',fCreator: '孙燕姿',fTime: '2016',fMoney: '18',fSrc: url+'009.jpg'},
        {fId: '156',fName: '春风十里不如你',fCreator: '李建',fTime: '2016',fMoney: '0',fSrc: url+'010.jpg'},
        {fId: '012',fName: '初学者',fCreator: '薛之谦',fTime: '2016',fMoney: '20',fSrc: url+'011.jpg'},
        {fId: '045',fName: '周杰伦的床边故事',fCreator: '周杰伦',fTime: '2016',fMoney: '0',fSrc: url+'012.jpg'},
        {fId: '125',fName: '放 & 披风',fCreator: '陈奕迅',fTime: '2017',fMoney: '6',fSrc: url+'013.jpg'},
        {fId: '360',fName: 'MADE',fCreator: 'blgbang',fTime: '2016',fMoney: '2',fSrc: url+'014.jpg'},
        {fId: '099',fName: '你在终点等我',fCreator: '王菲',fTime: '2016',fMoney: '8',fSrc: url+'015.jpg'},
        {fId: '009',fName: '有理想',fCreator: '李荣浩',fTime: '2016',fMoney: '6',fSrc: url+'016.jpg'},
        {fId: '066',fName: '再见',fCreator: '邓紫棋',fTime: '2016',fMoney: '8',fSrc: url+'017.jpg'},
        {fId: '035',fName: 'My Dear Art',fCreator: '陈粒',fTime: '2017',fMoney: '12',fSrc: url+'018.jpg'},
        {fId: '078',fName: '彩虹金刚',fCreator: '孙燕姿',fTime: '2016',fMoney: '18',fSrc: url+'019.jpg'},
        {fId: '156',fName: '春风十里不如你',fCreator: '李建',fTime: '2016',fMoney: '0',fSrc: url+'020.jpg'},
        {fId: '012',fName: '初学者',fCreator: '薛之谦',fTime: '2016',fMoney: '20',fSrc: url+'001.jpg'},
        {fId: '045',fName: '周杰伦的床边故事',fCreator: '周杰伦',fTime: '2016',fMoney: '0',fSrc: url+'002.jpg'},
        {fId: '125',fName: '放 & 披风',fCreator: '陈奕迅',fTime: '2017',fMoney: '6',fSrc: url+'003.jpg'},
        {fId: '360',fName: 'MADE',fCreator: 'blgbang',fTime: '2016',fMoney: '2',fSrc: url+'004.jpg'},
        {fId: '099',fName: '你在终点等我',fCreator: '王菲',fTime: '2016',fMoney: '8',fSrc: url+'005.jpg'},
        {fId: '009',fName: '有理想',fCreator: '李荣浩',fTime: '2016',fMoney: '6',fSrc: url+'006.jpg'},
        {fId: '066',fName: '再见',fCreator: '邓紫棋',fTime: '2016',fMoney: '8',fSrc: url+'007.jpg'},
        {fId: '035',fName: 'My Dear Art',fCreator: '陈粒',fTime: '2017',fMoney: '12',fSrc: url+'008.jpg'},
        {fId: '078',fName: '彩虹金刚',fCreator: '孙燕姿',fTime: '2016',fMoney: '18',fSrc: url+'009.jpg'},
    ];
    return albumList;
}
function goodsList(){
    var url = 'resource/images/';
    var goodsList = [
        {fId: "007",fMainUrl: url + "001.jpg",fName: "联想(Lenovo)拯救者R720 15.6英寸游戏笔记本电脑(i7-7700HQ 8G 1T GTX1050 2G IPS 黑)",fRetail: "3299",fGuide: "3699"},
        {fId: "218",fMainUrl: url + "002.jpg",fName: "飞利浦(PHILIPS)扫地机器人FC8710/82自动智能家用纤薄吸尘器",fRetail: "2899",fGuide: "2899"},
        {fId: "056",fMainUrl: url + "003.jpg",fName: "苹果新品iphone7 骚红色",fRetail: "6399",fGuide: "6899"},
        {fId: "756",fMainUrl: url + "007.jpg",fName: "魅族(meizu) pro8 领先一个时代",fRetail: "2799",fGuide: "3299"},
        {fId: "896",fMainUrl: url + "008.jpg",fName: "充电5分钟 通话30s 你值得拥有",fRetail: "2499",fGuide: "2899"},
        {fId: "732",fMainUrl: url + "009.jpg",fName: "华为nova2 智能美颜 年轻20岁",fRetail: "2899",fGuide: "2899"},
        {fId: "563",fMainUrl: url + "010.jpg",fName: "暖床服务 每日一单 先到先得",fRetail: "99.8",fGuide: "998"},
        {fId: "007",fMainUrl: url + "011.jpg",fName: "小米电视 43寸 新品预售",fRetail: "3299",fGuide: "3699"},
        {fId: "218",fMainUrl: url + "012.jpg",fName: "小米手机6 66666",fRetail: "2899",fGuide: "2899"},
        {fId: "056",fMainUrl: url + "013.jpg",fName: "苹果新品iphone7 骚红色",fRetail: "6399",fGuide: "6899"},
        {fId: "158",fMainUrl: url + "014.jpg",fName: "华为电脑 ",fRetail: "3599",fGuide: "3999"},
        {fId: "456",fMainUrl: url + "015.jpg",fName: "华硕笔记本 就是那么美",fRetail: "5499",fGuide: "5899"},
        {fId: "093",fMainUrl: url + "016.jpg",fName: "三星智能等离子电视",fRetail: "9899",fGuide: "9999"},
        {fId: "007",fMainUrl: url + "001.jpg",fName: "联想(Lenovo)拯救者R720 15.6英寸游戏笔记本电脑(i7-7700HQ 8G 1T GTX1050 2G IPS 黑)",fRetail: "3299",fGuide: "3699"},
        {fId: "218",fMainUrl: url + "002.jpg",fName: "飞利浦(PHILIPS)扫地机器人FC8710/82自动智能家用纤薄吸尘器",fRetail: "2899",fGuide: "2899"},
        {fId: "056",fMainUrl: url + "003.jpg",fName: "苹果新品iphone7 骚红色",fRetail: "6399",fGuide: "6899"},
        {fId: "756",fMainUrl: url + "007.jpg",fName: "魅族(meizu) pro8 领先一个时代",fRetail: "2799",fGuide: "3299"},
        {fId: "896",fMainUrl: url + "008.jpg",fName: "充电5分钟 通话30s 你值得拥有",fRetail: "2499",fGuide: "2899"},
        {fId: "732",fMainUrl: url + "019.jpg",fName: "华为nova2 智能美颜 年轻20岁",fRetail: "2899",fGuide: "2899"},
        {fId: "563",fMainUrl: url + "020.jpg",fName: "暖床服务 每日一单 先到先得",fRetail: "99.8",fGuide: "998"},
        {fId: "007",fMainUrl: url + "011.jpg",fName: "小米电视 43寸 新品预售",fRetail: "3299",fGuide: "3699"},
        {fId: "218",fMainUrl: url + "012.jpg",fName: "小米手机6 66666",fRetail: "2899",fGuide: "2899"},
        {fId: "056",fMainUrl: url + "013.jpg",fName: "苹果新品iphone7 骚红色",fRetail: "6399",fGuide: "6899"},
        {fId: "158",fMainUrl: url + "014.jpg",fName: "华为电脑 ",fRetail: "3599",fGuide: "3999"},
        {fId: "456",fMainUrl: url + "015.jpg",fName: "华硕笔记本 就是那么美",fRetail: "5499",fGuide: "5899"},
        {fId: "093",fMainUrl: url + "016.jpg",fName: "三星智能等离子电视",fRetail: "9899",fGuide: "9999"},
        {fId: "007",fMainUrl: url + "001.jpg",fName: "联想(Lenovo)拯救者R720 15.6英寸游戏笔记本电脑(i7-7700HQ 8G 1T GTX1050 2G IPS 黑)",fRetail: "3299",fGuide: "3699"},
        {fId: "218",fMainUrl: url + "002.jpg",fName: "飞利浦(PHILIPS)扫地机器人FC8710/82自动智能家用纤薄吸尘器",fRetail: "2899",fGuide: "2899"},
        {fId: "056",fMainUrl: url + "003.jpg",fName: "苹果新品iphone7 骚红色",fRetail: "6399",fGuide: "6899"},
        {fId: "756",fMainUrl: url + "007.jpg",fName: "魅族(meizu) pro8 领先一个时代",fRetail: "2799",fGuide: "3299"},
        {fId: "896",fMainUrl: url + "008.jpg",fName: "充电5分钟 通话30s 你值得拥有",fRetail: "2499",fGuide: "2899"},
        {fId: "732",fMainUrl: url + "009.jpg",fName: "华为nova2 智能美颜 年轻20岁",fRetail: "2899",fGuide: "2899"},
        {fId: "563",fMainUrl: url + "010.jpg",fName: "暖床服务 每日一单 先到先得",fRetail: "99.8",fGuide: "998"},
        {fId: "158",fMainUrl: url + "004.jpg",fName: "华为电脑 ",fRetail: "3599",fGuide: "3999"},
        {fId: "218",fMainUrl: url + "012.jpg",fName: "小米手机6 66666",fRetail: "2899",fGuide: "2899"},
        {fId: "056",fMainUrl: url + "013.jpg",fName: "苹果新品iphone7 骚红色",fRetail: "6399",fGuide: "6899"},
        {fId: "158",fMainUrl: url + "014.jpg",fName: "华为电脑 ",fRetail: "3599",fGuide: "3999"},
        {fId: "456",fMainUrl: url + "015.jpg",fName: "华硕笔记本 就是那么美",fRetail: "5499",fGuide: "5899"},
        {fId: "093",fMainUrl: url + "016.jpg",fName: "三星智能等离子电视",fRetail: "9899",fGuide: "9999"},
        {fId: "007",fMainUrl: url + "001.jpg",fName: "联想(Lenovo)拯救者R720 15.6英寸游戏笔记本电脑(i7-7700HQ 8G 1T GTX1050 2G IPS 黑)",fRetail: "3299",fGuide: "3699"},
        {fId: "218",fMainUrl: url + "002.jpg",fName: "飞利浦(PHILIPS)扫地机器人FC8710/82自动智能家用纤薄吸尘器",fRetail: "2899",fGuide: "2899"},
        {fId: "056",fMainUrl: url + "003.jpg",fName: "苹果新品iphone7 骚红色",fRetail: "6399",fGuide: "6899"},
        {fId: "756",fMainUrl: url + "007.jpg",fName: "魅族(meizu) pro8 领先一个时代",fRetail: "2799",fGuide: "3299"},
        {fId: "896",fMainUrl: url + "008.jpg",fName: "充电5分钟 通话30s 你值得拥有",fRetail: "2499",fGuide: "2899"},
        {fId: "896",fMainUrl: url + "018.jpg",fName: "充电5分钟 通话30s 你值得拥有",fRetail: "2499",fGuide: "2899"},
        {fId: "732",fMainUrl: url + "019.jpg",fName: "华为nova2 智能美颜 年轻20岁",fRetail: "2899",fGuide: "2899"},
        {fId: "563",fMainUrl: url + "020.jpg",fName: "暖床服务 每日一单 先到先得",fRetail: "99.8",fGuide: "998"},
        {fId: "007",fMainUrl: url + "011.jpg",fName: "小米电视 43寸 新品预售",fRetail: "3299",fGuide: "3699"},
        {fId: "218",fMainUrl: url + "012.jpg",fName: "小米手机6 66666",fRetail: "2899",fGuide: "2899"},
        {fId: "056",fMainUrl: url + "013.jpg",fName: "苹果新品iphone7 骚红色",fRetail: "6399",fGuide: "6899"},
        {fId: "158",fMainUrl: url + "014.jpg",fName: "华为电脑 ",fRetail: "3599",fGuide: "3999"},
        {fId: "456",fMainUrl: url + "015.jpg",fName: "华硕笔记本 就是那么美",fRetail: "5499",fGuide: "5899"},
        {fId: "093",fMainUrl: url + "016.jpg",fName: "三星智能等离子电视",fRetail: "9899",fGuide: "9999"},
        {fId: "218",fMainUrl: url + "002.jpg",fName: "飞利浦(PHILIPS)扫地机器人FC8710/82自动智能家用纤薄吸尘器",fRetail: "2899",fGuide: "2899"},
        {fId: "056",fMainUrl: url + "003.jpg",fName: "苹果新品iphone7 骚红色",fRetail: "6399",fGuide: "6899"},
        {fId: "756",fMainUrl: url + "007.jpg",fName: "魅族(meizu) pro8 领先一个时代",fRetail: "2799",fGuide: "3299"},
        {fId: "896",fMainUrl: url + "008.jpg",fName: "充电5分钟 通话30s 你值得拥有",fRetail: "2499",fGuide: "2899"},
        {fId: "732",fMainUrl: url + "009.jpg",fName: "华为nova2 智能美颜 年轻20岁",fRetail: "2899",fGuide: "2899"},
        {fId: "563",fMainUrl: url + "010.jpg",fName: "暖床服务 每日一单 先到先得",fRetail: "99.8",fGuide: "998"},
        {fId: "158",fMainUrl: url + "004.jpg",fName: "华为电脑 ",fRetail: "3599",fGuide: "3999"},
        {fId: "456",fMainUrl: url + "005.jpg",fName: "华硕笔记本 就是那么美",fRetail: "5499",fGuide: "5899"},
        {fId: "093",fMainUrl: url + "006.jpg",fName: "三星智能等离子电视",fRetail: "9899",fGuide: "9999"},
        {fId: "756",fMainUrl: url + "017.jpg",fName: "魅族(meizu) pro8 领先一个时代",fRetail: "2799",fGuide: "3299"},
        {fId: "896",fMainUrl: url + "018.jpg",fName: "充电5分钟 通话30s 你值得拥有",fRetail: "2499",fGuide: "2899"},
        {fId: "732",fMainUrl: url + "019.jpg",fName: "华为nova2 智能美颜 年轻20岁",fRetail: "2899",fGuide: "2899"},
        {fId: "563",fMainUrl: url + "020.jpg",fName: "暖床服务 每日一单 先到先得",fRetail: "99.8",fGuide: "998"},
        {fId: "007",fMainUrl: url + "011.jpg",fName: "小米电视 43寸 新品预售",fRetail: "3299",fGuide: "3699"},
        {fId: "218",fMainUrl: url + "012.jpg",fName: "小米手机6 66666",fRetail: "2899",fGuide: "2899"},
        {fId: "056",fMainUrl: url + "013.jpg",fName: "苹果新品iphone7 骚红色",fRetail: "6399",fGuide: "6899"},
        {fId: "158",fMainUrl: url + "014.jpg",fName: "华为电脑 ",fRetail: "3599",fGuide: "3999"},
        {fId: "456",fMainUrl: url + "015.jpg",fName: "华硕笔记本 就是那么美",fRetail: "5499",fGuide: "5899"},
        {fId: "093",fMainUrl: url + "016.jpg",fName: "三星智能等离子电视",fRetail: "9899",fGuide: "9999"},
    ];
    return goodsList;
}
function repository(){
    return {
        image: [
	        {name: '001',s_url: 'resource/images/001.jpg',hd_url: 'resource/images/001.jpg'},
	        {name: '002',s_url: 'resource/images/002.jpg',hd_url: 'resource/images/002.jpg'},
	        {name: '003',s_url: 'resource/images/003.jpg',hd_url: 'resource/images/003.jpg'},
	        {name: '004',s_url: 'resource/images/004.jpg',hd_url: 'resource/images/004.jpg'},
	        {name: '005',s_url: 'resource/images/005.jpg',hd_url: 'resource/images/005.jpg'},
	        {name: '006',s_url: 'resource/images/006.jpg',hd_url: 'resource/images/006.jpg'},
	        {name: '007',s_url: 'resource/images/007.jpg',hd_url: 'resource/images/007.jpg'},
	        {name: '008',s_url: 'resource/images/008.jpg',hd_url: 'resource/images/008.jpg'},
	        {name: '009',s_url: 'resource/images/009.jpg',hd_url: 'resource/images/009.jpg'},
	        {name: '010',s_url: 'resource/images/010.jpg',hd_url: 'resource/images/010.jpg'},
	        {name: '011',s_url: 'resource/images/011.jpg',hd_url: 'resource/images/011.jpg'},
	        {name: '012',s_url: 'resource/images/012.jpg',hd_url: 'resource/images/012.jpg'},
	        {name: '013',s_url: 'resource/images/013.jpg',hd_url: 'resource/images/013.jpg'},
	        {name: '014',s_url: 'resource/images/014.jpg',hd_url: 'resource/images/014.jpg'},
	        {name: '015',s_url: 'resource/images/015.jpg',hd_url: 'resource/images/015.jpg'},
	        {name: '016',s_url: 'resource/images/016.jpg',hd_url: 'resource/images/016.jpg'},
	        {name: '017',s_url: 'resource/images/017.jpg',hd_url: 'resource/images/017.jpg'},
	        {name: '018',s_url: 'resource/images/018.jpg',hd_url: 'resource/images/018.jpg'},
	        {name: '019',s_url: 'resource/images/019.jpg',hd_url: 'resource/images/019.jpg'},
	        {name: '020',s_url: 'resource/images/020.jpg',hd_url: 'resource/images/020.jpg'},
	        {name: '021',s_url: 'resource/images/021.jpg',hd_url: 'resource/images/021.jpg'},
	        {name: '022',s_url: 'resource/images/022.jpg',hd_url: 'resource/images/022.jpg'},
	        {name: '023',s_url: 'resource/images/023.jpg',hd_url: 'resource/images/023.jpg'},
	        {name: '024',s_url: 'resource/images/024.jpg',hd_url: 'resource/images/024.jpg'},
	        {name: '025',s_url: 'resource/images/025.jpg',hd_url: 'resource/images/025.jpg'},
	        {name: '026',s_url: 'resource/images/026.jpg',hd_url: 'resource/images/026.jpg'},
	        {name: '027',s_url: 'resource/images/027.jpg',hd_url: 'resource/images/027.jpg'},
	        {name: '028',s_url: 'resource/images/028.jpg',hd_url: 'resource/images/028.jpg'},
	        {name: '029',s_url: 'resource/images/029.jpg',hd_url: 'resource/images/029.jpg'},
        ],
        video: [
	        {name: '可口可乐',s_url: 'resource/images/video_thum/video_001.png',vid_url: 'resource/video/001.mp4',time: '00:15'},
	        {name: '多乐滋',s_url: 'resource/images/video_thum/video_002.png',vid_url: 'resource/video/002.mp4',time: '00:15'},
	        {name: '肯德基宅急送',s_url: 'resource/images/video_thum/video_003.png',vid_url: 'resource/video/003.mp4',time: '00:15'},
	        {name: 'OPPO R11',s_url: 'resource/images/video_thum/video_004.png',vid_url: 'resource/video/004.mp4',time: '00:15'},
        ],
	    translucent: [
            {name: "pop Art",sm_bg: "#3eede7 url(resource/images/bg/01.webp) repeat",hd_bg: "#3eede7 url(resource/images/bg/hd_01.webp) repeat"},
            {name: "sprites",sm_bg: "#b0a4e3 url(resource/images/bg/02.png) repeat",hd_bg: "#b0a4e3 url(resource/images/bg/hd_02.png) repeat"},
            {name: "red confetti",sm_bg: "#3de1ad url(resource/images/bg/03.png) repeat",hd_bg: "#3de1ad url(resource/images/bg/hd_03.png) repeat"},
            {name: "rain drops",sm_bg: "#ffc773 url(resource/images/bg/04.png) repeat",hd_bg: "#ffc773 url(resource/images/bg/hd_04.png) repeat"},
            {name: "triangles",sm_bg: "#fff2df url(resource/images/bg/05.png) repeat",hd_bg: "#fff2df url(resource/images/bg/hd_05.png) repeat"},
        ]
    };
}
/********************************************************************************************************/
//限制input框输入长度
function limitLength(el,n){
    var str = el.val();
    var strLen = str.length;
    var maxLen = n;
    var maxI = 0;
    var myLen = 0;
    for(var i=0;i<strLen;i++){
        if(str.charCodeAt(i) > 256){
            myLen += 2;
        }else{
            myLen += 1;

        }
        if(myLen >= maxLen){
            if(myLen > maxLen){
                maxI = i;
            }else{
                maxI = i + 1;
            }
            el.attr("maxLength",maxI);
            break;
        }
    }
    if(myLen < maxLen){
        el.attr("maxLength",maxLen - myLen + strLen);
    }
}
/********************************************************************************************************/
//选项卡切换效果
$(document).on("click",".zm-edit-components-tabs-tit-lab > li",function(){
    var _cont = $(".zm-edit-components-tabs-cont > div");
    var _list = $(".zm-edit-components-tabs-tit-lab > li");
    var _index = _list.index(this);
    _cont.eq(_index).show().siblings().hide();
});
//选项卡 hove 效果
$(document).on("mouseenter",".zm-edit-components-tabs-tit-lab > li",function(){
    var _this = $(this);
    var val01,val02,val03,val04,val05,val06;
    if(_this.attr("data-type-hoverBorderTopColor")){
        if(_this.attr("data-type-oldVal01") == undefined){
            val01 = _this.css("borderTopColor");
            _this.attr("data-type-oldVal01",val01);
        }else{
            val01 = _this.attr("data-type-oldVal01");
        }
        _this.css("borderTopColor",_this.attr("data-type-hoverBorderTopColor")).siblings().css("borderTopColor",val01);
    }
    if(_this.attr("data-type-hoverBorderBottomColor")){
        if(_this.attr("data-type-oldVal02") == undefined){
            val02 = _this.css("borderBottomColor");
            _this.attr("data-type-oldVal02",val02);
        }else{
            val02 = _this.attr("data-type-oldVal02");
        }
        _this.css("borderBottomColor",_this.attr("data-type-hoverBorderBottomColor")).siblings().css("borderBottomColor",val02);
    }
    if(_this.attr("data-type-hoverBorderTopWidth")){
        if(_this.attr("data-type-oldVal03") == undefined){
            val03 = _this.css("borderTopWidth");
            _this.attr("data-type-oldVal03",val03);
        }else{
            val03 = _this.attr("data-type-oldVal03");
        }
        _this.css("borderTopWidth",_this.attr("data-type-hoverBorderTopWidth")+"px").siblings().css("borderTopWidth",val03);
    }
    if(_this.attr("data-type-hoverBorderBottomWidth")){
        if(_this.attr("data-type-oldVal04") == undefined){
            val04 = _this.css("borderBottomWidth")
            _this.attr("data-type-oldVal04",val04);
        }else{
            val04 = _this.attr("data-type-oldVal04");
        }
        _this.css("borderBottomWidth",_this.attr("data-type-hoverBorderBottomWidth")+"px").siblings().css("borderBottomWidth",val04);
    }
    if(_this.attr("data-type-hoverColor")){
        if(_this.attr("data-type-oldVal05") == undefined){
            val05 = _this.css("color");
            _this.attr("data-type-oldVal05",val05);
        }else{
            val05 = _this.attr("data-type-oldVal05");
        }
        _this.css("color",_this.attr("data-type-hoverColor")).siblings().css("color",val05);
    }
    if(_this.attr("data-type-hoverBackgroundColor")){
        if(_this.attr("data-type-oldVal06") == undefined){
            val06 = _this.css("backgroundColor");
            _this.attr("data-type-oldVal06",val06);
        }else{
            val06 = _this.attr("data-type-oldVal06");
        }
        _this.css("backgroundColor",_this.attr("data-type-hoverBackgroundColor")).siblings().css("backgroundColor",val06);
    }

});
//频道 hove 效果
$(document).on("mouseenter mouseleave",".zm-edit-components-tabs-tit-channel",function(e){
    var _this = $(this);
    if(e.type == "mouseenter"){
        if(_this.attr("data-type-hoverColor")){
            _this.attr("data-type-old01",_this.css("color")).css("color",_this.attr("data-type-hoverColor"));
        }
    }
    if(e.type == "mouseleave"){
        _this.css("color",_this.attr("data-type-old01"));
    }
});
/******   音频各hover效果   ******/
//播放按钮点击跳转到播放页
$(document).on("click",".zm-edit-components-audio-player-svg",function(){
    var _this = $(this);
    console.log(_this);
    var id = _this.closest(".zm-component-main").attr("data-audio-id");
    var key = _this.closest(".zm-component-main").attr("data-audio-key");
    var url = "musicPlayer.html?id="+id+"&key="+key;
    window.open(url,"族蚂音乐");
});
//快捷播放 播放按钮 图标边框颜色悬停||图标填充颜色悬停
$(document).on("mouseenter mouseleave",".zm-edit-components-audio-player-svg",function(e){
    var _this = $(this);
    var _val_01 = _this.attr("data-type-hoverbordercolor");
    var _val_02 = _this.attr("data-type-hoverbackgroundcolor");
    if(_val_01){
        if(e.type == "mouseenter"){
            _this.attr("data-old-borderColor",_this.css("borderColor")).css("borderColor",_val_01);
        }
        if(e.type == "mouseleave"){
            _this.css("borderColor",_this.attr("data-old-borderColor"));
        }
    }
    if(_val_02){
        if(e.type == "mouseenter"){
            _this.attr("data-old-backgroundColor",_this.css("backgroundColor")).css("backgroundColor",_val_02);
        }
        if(e.type == "mouseleave"){
            _this.css("backgroundColor",_this.attr("data-old-backgroundColor"));
        }
    }
});
//快捷播放 播放按钮 箭头颜色悬停
$(document).on("mouseenter mouseleave",".zm-edit-components-audio-player svg",function(e){
    var _this = $(this);
    var _val = _this.attr("data-type-hoverFill");
    if(_val){
        if(e.type == "mouseenter"){
            _this.attr("data-old-fill",_this.css("fill")).css("fill",_val);
        }
        if(e.type == "mouseleave"){
            _this.css("fill",_this.attr("data-old-fill"));
        }
    }
});
//歌曲信息文字悬停
$(document).on("mouseenter mouseleave",".zm-edit-components-audio-message",function(e){
    var _this = $(this);
    var _val = _this.attr("data-type-hoverColor");
    if(_val){
        if(e.type == "mouseenter"){
            _this.attr("data-old-color",_this.css("color")).css("color",_val);
        }
        if(e.type == "mouseleave"){
            _this.css("color",_this.attr("data-old-color"));
        }
    }
});
//

$(document).on("mouseenter mouseleave",".zm-components-audio-intact-player > div",function(e){
    var _this = $(this);
    var _val_01 = _this.attr("data-type-hoverbordercolor");
    var _val_02 = _this.attr("data-type-hoverbackgroundcolor");
    if(_val_01){
        if(e.type == "mouseenter"){
            _this.attr("data-old-borderColor",_this.css("borderColor")).css("borderColor",_val_01);
        }
        if(e.type == "mouseleave"){
            _this.css("borderColor",_this.attr("data-old-borderColor"));
        }
    }
    if(_val_02){
        if(e.type == "mouseenter"){
            _this.attr("data-old-backgroundColor",_this.css("backgroundColor")).css("backgroundColor",_val_02);
        }
        if(e.type == "mouseleave"){
            _this.css("backgroundColor",_this.attr("data-old-backgroundColor"));
        }
    }
});
$(document).on("mouseenter mouseleave",".zm-components-audio-intact-player svg",function(e){
    var _this = $(this);
    var _val = _this.attr("data-type-hoverFill");
    if(_val){
        if(e.type == "mouseenter"){
            _this.attr("data-old-fill",_this.css("fill")).css("fill",_val);
        }
        if(e.type == "mouseleave"){
            _this.css("fill",_this.attr("data-old-fill"));
        }
    }
});

/* 加载更多按钮 划过改变颜色事件 */
$(document).on("mouseenter mouseleave",".zm-edit-components-list-loadMore > span",function(e){
    var _this = $(this);
    var _val = _this.attr("data-type-hoverBackgroundColor");
    if(_val){
        if(e.type == "mouseenter"){
            _this.attr("data-type-oldBC",_this.css("backgroundColor")).css("backgroundColor",_val);
        }
        if(e.type == "mouseleave"){
            _this.css("backgroundColor",_this.attr("data-type-oldBC"));
        }
    }
});
//音频列表下载按钮hover
$(document).on("mouseenter mouseleave",".player-otherInfo-button span",function(e){
    var _this = $(this);
    var _val = _this.attr("data-type-hoverBackgroundColor");
    if(_val){
        if(e.type == "mouseenter"){
            _this.attr("data-type-oldBC",_this.css("backgroundColor")).css("backgroundColor",_val);
        }
        if(e.type == "mouseleave"){
            _this.css("backgroundColor",_this.attr("data-type-oldBC"));
        }
    }
});
//音频列表文字hover
$(document).on("mouseenter mouseleave",".player-otherInfo-button span",function(e){
    var _this = $(this);
    var _val = _this.attr("data-type-hoverBackgroundColor");
    if(_val){
        if(e.type == "mouseenter"){
            _this.attr("data-type-oldBC",_this.css("backgroundColor")).css("backgroundColor",_val);
        }
        if(e.type == "mouseleave"){
            _this.css("backgroundColor",_this.attr("data-type-oldBC"));
        }
    }
});
$(document).on("mouseenter mouseleave",".list-name",function(e){
    var _this = $(this);
    var _val = _this.closest(".zm-audio-player-list").attr("data-type-hoverColor");
    if(_val){
        if(e.type == "mouseenter"){
            _this.attr("data-type-old",_this.css("color")).css("color",_val);
        }
        if(e.type == "mouseleave"){
            _this.css("color",_this.attr("data-type-old"));
        }
    }
});
$(document).on("mouseenter mouseleave",".list-albumName",function(e){
    var _this = $(this);
    var _val = _this.closest(".zm-audio-player-list").attr("data-type-hoverColor");
    if(_val){
        if(e.type == "mouseenter"){
            _this.attr("data-type-old",_this.css("color")).css("color",_val);
        }
        if(e.type == "mouseleave"){
            _this.css("color",_this.attr("data-type-old"));
        }
    }
});
$(document).on("mouseenter mouseleave",".list-singer",function(e){
    var _this = $(this);
    var _val = _this.closest(".zm-audio-player-list").attr("data-type-hoverColor");
    if(_val){
        if(e.type == "mouseenter"){
            _this.attr("data-type-old",_this.css("color")).css("color",_val);
        }
        if(e.type == "mouseleave"){
            _this.css("color",_this.attr("data-type-old"));
        }
    }
});
$(document).on("mouseenter mouseleave",".list-load",function(e){
    var _this = $(this);
    var _val = _this.closest(".zm-audio-player-list").attr("data-type-hoverColor");
    if(_val){
        if(e.type == "mouseenter"){
            _this.attr("data-type-old",_this.css("color")).css("color",_val);
        }
        if(e.type == "mouseleave"){
            _this.css("color",_this.attr("data-type-old"));
        }
    }
});
//音频列表图标hover
$(document).on("mouseenter mouseleave",".list-icon",function(e){
    var _this = $(this);
    var _val = _this.attr("data-type-hoverColor");
    if(_val){
        if(e.type == "mouseenter"){
            _this.attr("data-type-old",_this.css("color")).css("color",_val);
        }
        if(e.type == "mouseleave"){
            _this.css("color",_this.attr("data-type-old"));
        }
    }
});
//mini列表滑过
$(document).on("mouseenter mouseleave",".player-album-button span",function(e){
    var _this = $(this);
    var _val = _this.attr("data-type-hoverBackgroundColor");
    if(_val){
        if(e.type == "mouseenter"){
            _this.attr("data-type-old",_this.css("backgroundColor")).css("backgroundColor",_val);
        }
        if(e.type == "mouseleave"){
            _this.css("backgroundColor",_this.attr("data-type-old"));
        }
    }
});
/****** 音频列表各种点击功能 ******/
//选择框
$(document).on("click",".zm-edit-components-audio-player-album .list-choice",function(){
    var _this = $(this);
    _this.children().toggleClass("fa-check");
});
$(document).on("click",".zm-edit-components-audio-player-album-mini .list-choice",function(){
    var _this = $(this);
    _this.children().toggleClass("fa-check");
});
//全选
$(document).on("click",".zm-edit-components-audio-player-album .otherInfo-selectAll",function(){
    var _this = $(this);
    _this.closest(".zm-edit-components-audio-player-album").find(".list-choice").children().addClass("fa-check");
});
$(document).on("click",".zm-edit-components-audio-player-album-mini .checkAll",function(){
    var _this = $(this);
    _this.closest(".zm-edit-components-audio-player-album-mini").find(".list-choice").children().addClass("fa-check");
});
//反选
$(document).on("click",".zm-edit-components-audio-player-album .otherInfo-invert",function(){
    var _this = $(this);
    _this.closest(".zm-edit-components-audio-player-album").find(".list-choice").children().toggleClass("fa-check");
});
$(document).on("click",".zm-edit-components-audio-player-album-mini .unCheck",function(){
    var _this = $(this);
    _this.closest(".zm-edit-components-audio-player-album-mini").find(".list-choice").children().toggleClass("fa-check");
});
//下载专辑

//下载选中

//灯箱视图控制
$(document).on("click",".zm-lightBox-view",function(){
    var lightBox = $(".zm-component-lightBox");
    var box1 = lightBox.closest(".zm-component-box1");
    if(box1.length != 0){
        $(this).find(".lightBox-icon").children().toggle();
        if(box1.css("display") == "block"){
            box1.hide();
        }else{
            box1.show();
            zmEditor.component.showOption(undefined,'lightBox',undefined);
        }
    }
});
//图片/视频预览窗
$(document).on("mouseenter mouseleave",".zm-QuickLook",function(e){
    var _this = $(this);
    var _bg = _this.attr("data-prev-bg");
    var _type = _this.attr("data-prev-type");
    var _name = _this.attr("data-prev-name");
    var _time = _this.attr("data-prev-time");
    if(e.type == "mouseenter"){
        var x = e.clientX,
            y = e.clientY,
            l = e.offsetX,
            t = e.offsetY,
            w = _this.width(),
            h = _this.height();
        var pre_x = x - l + w + 5,
            pre_y = y - t - (198 - h)/2;
        var popup = zmEditor.component.setItems.previewPane({bg: _bg,type: _type,name: _name,time: _time});
        popup.css({left: pre_x,top: pre_y});
        $("body").append(popup);
    }
    if(e.type == "mouseleave"){
        $(".zm-QuickPreview-popup").remove();
    }
});




















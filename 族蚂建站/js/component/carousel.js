/**
 * Created by zhanghuaizhong on 2017/7/22.
 */
zmEditor.component.carousel = {
    setting: function (box) {
        var nowEdit = zmEditor.component.nowEdit();
        var carouselBox = nowEdit.find('.zm-component-carousel-box');

        var config1 = [
            {type: 'carousel_fullScreen', element: nowEdit, flag: ''},
            {
                type: 'slider',
                element: carouselBox,
                flag: {
                    title: "边框宽度<br/>(px)",
                    style: "noTab_noColor",
                    isColor: false,
                    param: "borderSetting",
                    size: [0, 15]
                }
            },
            {
                type: 'slider',
                element: carouselBox,
                flag: {title: "边框颜色", style: "noTab_color", isColor: true, param: "borderColor", size: [0, 100]}
            }
        ];
        var tabs1 = zmEditor.component.setItems.config(config1);

        var config2= [
            {type: 'carousel_cutArrow', element: nowEdit, flag: ''},
            {type: 'carousel_cutModule', element: nowEdit, flag: ''},
            {
                type: 'slider',
                element: nowEdit,
                flag: {title: "翻页耗时<br/>(秒)",
                    style: "noTab_noColor",
                    isColor: false,
                    param: "picCutTime",
                    size: [.5, 3],
                    toFixed:1
                }
            },
            {
                type: 'slider',
                element: nowEdit,
                flag: {title: "展现时长<br/>(秒)",
                    style: "noTab_noColor",
                    isColor: false,
                    param: "picStayTime",
                    size: [.5, 5],
                    toFixed:1
            }
            },
            {type: 'carousel_hoverStay',element:nowEdit,flag:''},
            {type: 'carousel_cutStyle', element: nowEdit, flag: ''}
        ];
        var tabs2 = zmEditor.component.setItems.config(config2);

        var config3 = [
            {type: 'carousel_isPageNum', element: nowEdit, flag: ''},
            {type: 'carousel_pageNumStyle', element: nowEdit, flag: ''},
            {type: 'carousel_pageNumAlign', element: nowEdit, flag: ''},
            {
                type: 'slider',
                element:  nowEdit.find(".zm-component-carousel-pagePoint"),
                flag: {title: "页码颜色", style: "noTab_color", isColor: true, param: "backgroundColor"}
            },
            {
                type: 'slider',
                element: nowEdit.find(".zm-component-carousel-pageNumStyle"),
                flag: {
                    title: "浮点颜色",
                    style: "noTab_color",
                    isColor: true,
                    param: "backgroundColor"
                }
            },
            {
                type: 'slider',
                element: nowEdit.find(".zm-component-carousel-pagePoint"),
                flag: {
                    title: "页码间距<br/>(px)",
                    style: "noTab_noColor",
                    isColor: false,
                    param: "pageNumMargin",
                    size: [0, 50]
                }
            },
            {
                type: 'slider',
                element: nowEdit.find(".zm-component-carousel-pointGroup"),
                flag: {
                    title: "页码边距<br/>(px)",
                    style: "noTab_noColor",
                    isColor: false,
                    param: "pageGroupMargin",
                    size: [-50, 50]
                }
            }
        ];
        var tabs3 = zmEditor.component.setItems.config(config3);

        var config4 = [{type: 'boxShadow', element: carouselBox, flag: ''}];
        var tabs4 = zmEditor.component.setItems.config(config4);

        var tabsList = [{title: "常规", content: tabs1},
            {title: "翻页", content: tabs2},
            {title: "页码", content: tabs3},
            {title: "阴影", content: tabs4}];

        return zmEditor.component.setItems.tabs(tabsList);
    },
    zmResource:{
        //--resource/images/
        images:{
            vein:{
                //--resource/images/vein/
                dark:['dark_01.png','dark_02.png','dark_03.png','dark_04.png',
                    'dark_05.png','dark_06.png','dark_07.png'],
                light:['light_01.png','light_02.png','light_03.png','light_04.png',
                    'light_05.png','light_06.png','light_07.png'],
                pic:['png_01.png','png_02.png','png_03.png','png_04.png',
                    'png_05.png','png_06.png','png_07.png','png_08.png']
            },
            video_thum:[
                {imgUrl:'resource/images/video_thum/video_001.png',imgTitle:'video_001'},
                {imgUrl:'resource/images/video_thum/video_002.png',imgTitle:'video_002'},
                {imgUrl:'resource/images/video_thum/video_003.png',imgTitle:'video_003'},
                {imgUrl:'resource/images/video_thum/video_004.png',imgTitle:'video_004'}
            ],
            image:[]//--resource/images/
        },
        video:[
            {url:'resource/video/001.mp4',time:'15',name:'可口可乐，一起嗨'},
            {url:'resource/video/002.mp4',time:'15',name:'多力多滋，放胆来试'},
            {url:'resource/video/003.mp4',time:'15',name:'肯德基宅急送，尽情送自在'},
            {url:'resource/video/004.mp4',time:'15',name:'vivoX9s，照亮你的美'}
        ]
    },
    productImgList: [
        {name: '折叠按摩床鲁班-艾娃', href: '', url: 'imgs/carousel-product001.jpg'},
        {name: '豪华按摩床凯撒-德鲁克', href: '', url: 'imgs/carousel-product005.jpg'},
        {name: '按摩床克拉斯-福特', href: '', url: 'imgs/carousel-product006.jpg'},
        {name: '英芬尼双层置物车', href: '', url: 'imgs/carousel-product007.jpg'},
        {name: '升降按摩床卢克-德鲁克', href: '', url: 'imgs/carousel-product008.jpg'}
    ],
    adImgList: [
        {name: '海尔冰箱广告1', href: '', url: 'imgs/carousel-ad002.jpg'},
        {name: '机械时代', href: '', url: 'imgs/carousel-ad001.jpg'},
        {name: '京东超市宝贝趴', href: '', url: 'imgs/carousel-ad003.jpg'},
        {name: '医药广告', href: '', url: 'imgs/carousel-ad004.jpg'},
        {name: '海尔冰箱广告2', href: '', url: 'imgs/carousel-ad005.jpg'}
    ],
    imgList: [
        {name: 'lightRing', href: '', url: 'imgs/carousel001.png'},
        {name: 'spiderMan', href: '', url: 'imgs/carousel002.png'},
        {name: 'goddess', href: '', url: 'imgs/carousel004.png'},
        {name: 'jumpingCat', href: '', url: 'imgs/carousel005.png'},
        {name: 'dreamTown', href: '', url: 'imgs/carousel006.png'},
        {name: 'houseOnSea', href: '', url: 'imgs/carousel007.png'},
        {name: 'floatIsland', href: '', url: 'imgs/carousel008.png'},
        {name: 'flyingShip', href: '', url: 'imgs/carousel009.png'},
        {name: 'thePlanet', href: '', url: 'imgs/carousel010.png'}
    ],
    sintangList:[
        {name: '按摩床系列-奢华之巅', href: '', url: 'imgs/carousel-massage01.jpg'},
        {name: '热石系列-能量所出', href: '', url: 'imgs/carousel-massage02.jpg'},
        {name: '按摩床配件-相得益彰', href: '', url: 'imgs/carousel-massage03.jpg'},
        {name: '精油系列-得以滋润', href: '', url: 'imgs/carousel-massage04.jpg'},
        {name: '按摩相关-何以养生', href: '', url: 'imgs/carousel-massage05.jpg'}
    ],
    svg:{
        setting:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><path d="M883.824 603.006h-46.922c-7.612 27.613-18.546 53.772-32.526 78.063l43.357 43.322c27.752 27.751 27.752 72.735 0 100.485l-25.121 25.122c-27.751 27.752-72.735 27.752-100.486 0l-43.634-43.634c-24.187 13.77-50.278 24.535-77.75 32.007v45.502c0 39.241-31.8 71.04-71.04 71.04H494.2c-39.24 0-71.074-31.799-71.074-71.04V838.37c-27.439-7.473-53.53-18.236-77.751-32.007l-43.635 43.634c-27.715 27.752-72.699 27.752-100.45 0l-25.122-25.122c-27.751-27.75-27.751-72.734 0-100.485l43.357-43.322c-13.98-24.29-24.914-50.45-32.56-78.063h-46.887c-39.24 0-71.04-31.8-71.04-71.004v-35.539c0-39.24 31.8-71.04 71.04-71.04h46.332c7.336-27.335 17.856-53.357 31.454-77.508l-41.696-41.663c-27.751-27.749-27.751-72.733 0-100.485l25.122-25.12c27.751-27.754 72.735-27.754 100.45 0l40.866 40.9c25.018-14.569 52.008-25.917 80.521-33.704v-47.717c0-39.242 31.834-71.04 71.074-71.04h35.502c39.24 0 71.04 31.798 71.04 71.04v47.717c28.546 7.786 55.535 19.134 80.52 33.704l40.865-40.9c27.751-27.754 72.735-27.754 100.486 0l25.121 25.12c27.752 27.752 27.752 72.736 0 100.485l-41.696 41.663c13.6 24.152 24.084 50.173 31.454 77.507h46.333c39.24 0 71.038 31.801 71.038 71.041v35.539c-0.002 39.203-31.801 71.004-71.04 71.004z m-371.876-283.05c-107.89 0-195.364 87.475-195.364 195.367 0 107.89 87.474 195.364 195.364 195.364 107.893 0 195.367-87.474 195.367-195.364s-87.473-195.367-195.367-195.367z m0 281.94c-49.03 0-88.824-39.721-88.824-88.788 0-49.068 39.794-88.79 88.824-88.79 49.033 0 88.793 39.72 88.793 88.79 0 49.066-39.76 88.788-88.793 88.788z"/></svg>',
        color:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><path d="M816.2 570.5L309.7 64 271 102.7l134.5 134.5L72.3 570.5l371.9 371.9 372.1-371.8-0.1-0.1z m-630.3-32.1L444.3 280 702 538.4H185.9zM945.4 898.3l-86-175.5-86.2 175.3c-4 10.4-6.3 21.6-6.3 33.5 0 51 41.4 92.4 92.4 92.4s92.4-41.4 92.4-92.4c0-11.8-2.3-23-6.3-33.3z"></path></svg>',
        picture:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1078 1024" version="1.1"><path d="M754.526316 269.473684m-134.736842 0a2.5 2.5 0 1 0 269.473684 0 2.5 2.5 0 1 0-269.473684 0Z"></path><path d="M970.105263 0 107.789474 0C48.505263 0 0 48.505263 0 107.789474l0 808.421053c0 59.284211 48.505263 107.789474 107.789474 107.789474l862.315789 0c59.284211 0 107.789474-48.505263 107.789474-107.789474L1077.894737 107.789474C1077.894737 48.505263 1029.389474 0 970.105263 0zM1024 867.705263l0-32.336842-264.084211-339.536842C754.526316 490.442105 732.968421 485.052632 722.189474 495.831579l-102.4 97.010526L436.547368 339.536842C425.768421 323.368421 409.6 323.368421 393.431579 334.147368L53.894737 716.8l0 32.336842 0 0 0-32.336842 0 0L53.894737 107.789474c0-26.947368 21.557895-53.894737 53.894737-53.894737l862.315789 0c26.947368 0 53.894737 21.557895 53.894737 53.894737l0 732.968421 0 0L1024 867.705263 1024 867.705263z"></path></svg>',
        video:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><path d="M921.008 705.903l-0.227-387.806c-0.008-11.069-11.549-17.979-20.773-12.439L730.11 396.831c-4.291 2.577-9.66-0.64-9.66-5.788v-85.479c0-24.995-19.691-45.446-43.762-45.446H146.753c-24.068 0-43.761 20.451-43.761 45.446v412.871c0 24.996 19.692 45.447 43.761 45.447h529.935c24.068 0 43.76-20.451 43.76-45.447v-85.34c0-5.145 5.363-8.361 9.654-5.791l170.145 91.064c9.233 5.528 20.767-1.396 20.761-12.465z"></path></svg>',
        play:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><path d="M428.859077 296.093538c-5.632-3.899077-12.878769-4.371692-18.865231-1.181538-6.025846 3.150769-9.806769 9.373538-9.806769 16.187077l0 417.988923c0 6.852923 3.859692 13.154462 10.043077 16.265846 2.56 1.339077 5.395692 2.008615 8.231385 2.008615 3.820308 0 7.601231-1.220923 10.791385-3.544615l292.548923-214.449231c4.765538-3.505231 7.522462-9.019077 7.443692-14.966154s-2.993231-11.421538-7.837538-14.808615L428.859077 296.093538z"></path><path d="M512 0C229.691077 0 0 229.691077 0 512c0 282.308923 229.691077 512 512 512 282.308923 0 512-229.691077 512-512C1024 229.691077 794.308923 0 512 0zM512 926.404923C283.490462 926.404923 97.595077 740.509538 97.595077 512 97.595077 283.490462 283.490462 97.595077 512 97.595077c228.509538 0 414.404923 185.895385 414.404923 414.404923C926.404923 740.509538 740.509538 926.404923 512 926.404923z"></path></svg>',
        style:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1029 1024" version="1.1"><path d="M0 230.033094c0-31.442106 25.304316-56.885592 56.497759-56.885592l910.962527 0c31.193443 0 56.497759 25.221428 56.497759 56.885592 0 31.444153-25.304316 56.885592-56.497759 56.885592L56.496735 286.918685C25.304316 286.918685 0 261.587763 0 230.033094z"></path><path d="M0 514.466168c0-31.444153 25.304316-56.886615 56.497759-56.886615l910.962527 0c31.193443 0 56.497759 25.220405 56.497759 56.886615 0 31.442106-25.304316 56.885592-56.497759 56.885592L56.496735 571.35176C25.304316 571.35176 0 546.019815 0 514.466168z"></path><path d="M0 798.899242c0-31.444153 25.304316-56.887638 56.497759-56.887638l910.962527 0c31.193443 0 56.497759 25.220405 56.497759 56.887638 0 31.442106-25.304316 56.885592-56.497759 56.885592L56.496735 855.784834C25.304316 855.784834 0 830.452889 0 798.899242z"></path></svg>',
        running:'<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M766.6 364c47.1 0 85.2-38.6 85.2-86.2 0-47.6-38.1-86.2-85.2-86.2-47.1 0-85.2 38.6-85.2 86.2C681.4 325.4 719.6 364 766.6 364zM906.8 339.2c-48.9 69.4-114.4 77.4-184.9 35-4.8-2.9-26.1-14.8-30.8-17.6-113.4-68.1-226.7-41.4-302.7 66.3-32.3 45.8 42.4 89.2 74.3 43.9 39.3-55.6 89.2-71.7 143.7-54.1-27.9 49.1-52.4 97.9-86.9 167.2-34.5 69.3-110.6 124.7-183.8 81.4C283 630.1 235.4 706.9 288 738c99.9 59.1 217 22.8 276.8-54 2.1 1.1 4.3 2.1 6.7 3 48.8 17.2 112.9 63.1 132.4 79.3 19.5 16.3 53 99 72.9 140.6 24.1 50.5 102.1 13.7 77.9-37-22.6-47.2-60.4-141.4-90-165.2C741 685.6 695 650.1 656 629.9c26.4-51.7 53.9-102.9 82.8-153.2 92.2 28.6 179.9-5.1 242.3-93.6C1013.4 337.3 938.7 293.9 906.8 339.2zM312.5 248.4l271.9 0c8.7 0 15.8-6.4 15.8-14.3 0-7.9-7.1-14.3-15.8-14.3L312.5 219.8c-8.7 0-15.8 6.4-15.8 14.3C296.7 242 303.8 248.4 312.5 248.4zM56 409.6l225.5 0c8.4 0 15.2-6.4 15.2-14.3s-6.8-14.2-15.2-14.2L56 381.1c-8.4 0-15.2 6.4-15.2 14.2S47.7 409.6 56 409.6zM135.6 585c0 7.8 6.8 14.2 15.2 14.2l225.7 0c8.4 0 15.2-6.4 15.2-14.2s-6.8-14.2-15.2-14.2L150.8 570.8C142.4 570.8 135.6 577.1 135.6 585zM234 760.5 37.4 760.5c-8.6 0-15.5 6.4-15.5 14.2 0 7.8 6.9 14.2 15.5 14.2L234 788.9c8.6 0 15.5-6.4 15.5-14.2C249.4 766.8 242.5 760.5 234 760.5z"></path></svg>'
    },
    sliderBox1:{
        word1:function (disc,style) {
            var e = $('<div class="zm-component-box1 zm-component-movable zm-component-editor" ' +
                ' data-zm-component-type="text" data-zm-component-type2="23" ' +
                'data-zm-fid="226" data-zm-fname="段落样式2" data-zm-index="1" ' +
                'style="'+ style +'">'+
                '<div class="zm-component-box2" style="height: 100%;display: table">' +
                '<div class="zm-component-main-temp">' +
                '<div class="zm-component-location">' +
                '<span>x:</span><span class="zm-component-location-x"></span> ' +
                '<span> , y:</span><span class="zm-component-location-y"></span>' +
                '<span> , w:</span><span class="zm-component-location-w">200</span>' +
                '<span> , h:</span><span class="zm-component-location-h">396</span></div>' +
                '<div class="zm-component-resize">' +
                '<span style="display: none;"></span><span style="display: none;"></span>' +
                '<span style="display: none;"></span><span></span>' +
                '<span style="display: none;"></span><span></span>' +
                '<span style="display: none;"></span><span></span></div>' +
                '</div>' +
                '<div class="zm-component-main zm-component-main-text"' +
                ' style="display:table-cell;background-color: rgba(0,0,0,.6);' +
                'width: 100%;height: 100%;vertical-align:middle;padding:10px;' +
                'text-align:center;color: #fff;font-size: 24px;">' +
                '<div class="zm-component-main-text">' +
                disc +
                '<br/>sale 50%' +
                '<br/><span style="font-size: 14px">关闭自动轮播<br/>方便编辑此处内容</span></div></div></div></div>');
            zmEditor.createId(e);
            return e
        }
    },
    sliderStr:{
        slider:function (name,url,box1) {
            var box1Str = box1?box1:'';
            return '<figure class="zm-component-carousel-slide">'
                +'<div class="zm-component-carousel-slideDataBox noVideo noLine noColor" '
                +'data-title="'+ name +'" data-bgUrl="'+ url +'">'
                +'<div class="zm-component-carousel-bgColor"></div>'
                +'<div class="zm-component-carousel-bgImgBox" style="background-image: url('+url +')"></div>'
                +'<div class="zm-component-carousel-bgVideo"><video loop=""></video></div>'
                +'<div class="zm-component-carousel-bgLine"></div>'
                +'</div>'
                + box1Str
                + '</figure>'
        }
    },
    getImgsInfo: function (main, slideStyle, thisImgSrc) {
        //第一个参数：.zm-component-carousel-main .zm-component-main
        //第二个参数：传入的默认轮播方式
        //第三个参数：组件列表里略缩图的路径
        //此处图片列表来源应该为：根据传入借口参数不同，得到不同图片；
        var carouselBox = main.find('.zm-component-carousel-box').eq(0), imgStr = "", pagePointStr = "",
            imgNum = isNaN(parseInt(carouselBox.attr('data-pageNum'))) ?
                5 :parseInt(carouselBox.attr('data-pageNum')),
            imgList, theSlideImgList = carouselBox.attr('data-imgs'),reverse = carouselBox.attr('data-reverse');
        var cutStyle = slideStyle,disc = false,tempStr,tmpStrStyle,pointGroupStyle,isFullwidth = false;
        switch (theSlideImgList) {
            case 'productimgList':
                disc = true;
                tmpStrStyle = 'top: 0;left:66.66%;height: 98%;margin-top:1%';
                pointGroupStyle = 'zm-component-carousel-pagePoints1';
                imgList = zmEditor.component.carousel.productImgList;
                for (var i = 0; i < imgNum; i++) {
                    tempStr = zmEditor.component.carousel.sliderBox1.word1(imgList[i].name,tmpStrStyle)
                        .prop('outerHTML');
                    imgStr += zmEditor.component.carousel.sliderStr
                        .slider(imgList[i].name,imgList[i].url,tempStr);
                }
                break;
            case 'adimgList':
                imgList = zmEditor.component.carousel.adImgList;
                pointGroupStyle = 'zm-component-carousel-pagePoints0';
                isFullwidth = true;
                carouselBox
                // .addClass('maxWidth1200')
                    .closest('.zm-component-box1').css('left', '0');
                for (var i = 0; i < imgNum; i++) {
                    imgStr +=  zmEditor.component.carousel.sliderStr.slider(imgList[i].name,imgList[i].url);
                }
                break;
            case 'sintangList':
                isFullwidth = true;
                imgList = zmEditor.component.carousel.sintangList;
                pointGroupStyle = 'zm-component-carousel-pagePoints1';
                for (var i = 0; i < imgNum; i++) {
                    imgStr += zmEditor.component.carousel.sliderStr.slider(imgList[i].name,imgList[i].url);
                }
                break;
            default:
                imgList = zmEditor.component.carousel.imgList;
                pointGroupStyle = 'zm-component-carousel-pagePoints0';
                for (var i = 0; i < imgNum; i++) {
                    imgStr += zmEditor.component.carousel.sliderStr.slider(imgList[i].name,imgList[i].url);
                }
                break
        }

        for (var i = 0; i < imgNum; i++) {
            // imgStr += '<figure  class="zm-component-carousel-slide clearFloat">'
            //     + '<img title="' + imgList[i].name + '" src=' + imgList[i].url + '></figure>';
            pagePointStr += "<div class='zm-component-carousel-pagePoint "+ pointGroupStyle + "'" +
                " slideIndex=" + i + ">" + (i + 1) + "</div>"
        }

        var imgWidth = parseInt(carouselBox.width()),imgHeight = carouselBox.height();
        var tempWidth = disc?parseInt($(tempStr).find('.zm-component-main').width()):0;
        main.css({'width': imgWidth + tempWidth, 'height': imgHeight + imgHeight*tempWidth/imgWidth})
            .attr({'data-origWidth':imgWidth,'data-origHeight':imgHeight})
            .find('.zm-component-carousel-slidePicDisc').remove().end()
            .closest('.zm-component-box1').attr('data-fullScreen',isFullwidth?'true':'false');

        if(main.closest('.zm-component-box1').attr('data-fullScreen')=='true'){
            main.width(main.width()-20).closest('.zm-component-box1').css('left','-351px')
        }

        main.before("<div class='zm-component-carousel-picTip'>" +
            "<div class='zm-component-carousel-prevPic fa fa-arrow-circle-left zm-tooltip' " +
            "data-zm-title='上一页'></div>" +
            "<div class='zm-component-carousel-pageTip'>第<span>1</span>页,共<i>" + imgNum + "</i>页</div>" +
            "<div class='zm-component-carousel-nextPic fa fa-arrow-circle-right zm-tooltip' " +
            "data-zm-title='下一页'></div></div>");

        var pageCutBtn = $('<div class="zm-component-carousel-controlBtn left fa fa-angle-left fa-3x"></div>' +
            '<div class="zm-component-carousel-controlBtn right  fa fa-angle-right fa-3x"></div>');
        var pagePoints = $('<div class="zm-component-carousel-pointGroup clearFloat" style="display: none">'
            + pagePointStr + '</div>');
        main.append(pageCutBtn, pagePoints)
            .prepend('<style style="background-color: rgba(255,255,255,1)" ' +
                'class="zm-component-carousel-pageNumStyle"></style>');
        main.find('.zm-component-carousel-pagePoint:eq(0)').addClass('itsTurn');
        if (main.find('.zm-component-carousel-point').length > 0) {
            main.find('.zm-component-carousel-point').remove();
            main.find('.zm-component-carousel-pointGroup').show()
        } else {
            main.find('.zm-component-carousel-pointGroup').hide()
        }
        if (main.find('.zm-component-carousel-pageCutBtn').length > 0) {
            main.find('.zm-component-carousel-pageCutBtn').remove();
            main.find('.zm-component-carousel-controlBtn').show().css('color', '#fff')
        } else {
            main.find('.zm-component-carousel-controlBtn').hide()
        }

        var theLeftPosition = imgWidth - pagePoints.width();
        theLeftPosition = theLeftPosition / imgWidth / 2;
        pagePoints.css({left: theLeftPosition * 100 + '%'}).attr("alignStyle", "center");

        var slideControlBtn = main.find(".zm-component-carousel-controlBtn");
        var pagePoint = main.find(".zm-component-carousel-pagePoint");
        slideControlBtn.css({top: imgHeight / 2 - slideControlBtn.height() / 2});
        //添加并隐藏暂时不需要的功能：页面切换按钮、页码提示原点

        carouselBox.attr('data-slide-args', 'speed=1000&autoScroll=false&timeout=1000&effect='
            + cutStyle + '&hoverStop=false');
        //设置轮播图初始参数
        var slideArgs = carouselBox.attr('data-slide-args');
        pagePoint.on('click',function () {
            carouselBox.boxSlider('showSlide',$(this).attr('slideIndex'))
        });

        carouselBox.html(imgStr)
            .boxSlider({
                speed: parseInt(slideArgs.split('speed=')[1].split('&')[0]),
                autoScroll: false,
                pauseOnHover:false,
                prev: main.find(".zm-component-carousel-controlBtn.left"),
                next: main.find(".zm-component-carousel-controlBtn.right"),
                timeout: parseInt(slideArgs.split('timeout=')[1].split('&')[0]),
                effect: slideArgs.split('effect=')[1].split('&')[0],
                // reverse:reverse.toBoolean(),
                onbefore: zmEditor.component.carousel.getImgIndex
            });

        main.prev().find(".zm-component-carousel-prevPic").click(function () {
            main.find('.zm-component-carousel-controlBtn.left').triggerHandler('click');
        });
        main.prev().find(".zm-component-carousel-nextPic").click(function () {
            main.find('.zm-component-carousel-controlBtn.right').triggerHandler('click');
        });//添加左右按钮点击翻页事件

        if (thisImgSrc) {
            for (var x = 0; x < imgNum; x++) {
                if (imgList[x].url == thisImgSrc) {
                    carouselBox.boxSlider('showSlide', x);
                    pagePoint.eq(x).addClass("itsTurn");
                    main.prev().find(".zm-component-carousel-pageTip span").text(x + 1)
                }
            }
        }
    },//轮播模块准备事件
    //拖拽上传图片ele:string图片盒子ID、cb回调函数(data)
    // data:array[imgTitle:图片名称,imgUrl:图片名称路径,fileList:图片全部信息]
    dragLocalImgUpdate: function (ele, cb) {
        $(document).on({
            dragleave: function (e) {e.preventDefault();}, drop: function (e) {e.preventDefault();},
            dragenter: function (e) {e.preventDefault();}, dragover: function (e) {e.preventDefault();}
        });
        var box = document.getElementById(ele);
        box.addEventListener("drop", function (e) {
            e.preventDefault();
            var imgArr = [];
            var fileList = e.dataTransfer.files;
            if (fileList.length == 0) {
                return false;
            }
            for (var i = 0; i < fileList.length; i++) {
                if (fileList[i].type.indexOf('image') != -1 && Math.floor((fileList[i].size) / 1048576) < 5) {
                    imgArr.push({
                        imgUrl: window.URL.createObjectURL(fileList[i]),
                        imgTitle: fileList[i].name,
                        fileList: fileList[i]
                    })
                }
            }
            if (cb) {
                cb(imgArr);
            }
        }, false);
    },
    slidePicManage: function (ele) {
        var picListStr = "", storageImgUrlStr = "", thePicListBox = $(".zm-dialog-carousel-contLeftImgGroup"),
            picNum = 0;
        var carouselPicList = [], iSelected = ele, carouselSlideBox = iSelected.find(".zm-component-carousel-box");
        var imgInPage = carouselSlideBox.find('.zm-component-carousel-slide img');

        function spanListStr(tab, tit, src, place) {
            return '<li><figure class="zm-dialog-carousel-slidePic" tabindex="' + tab + '" data-name="' + place + '">'
                + '<span class="zm-dialog-carousel-checkbox fa fa-check transparent"></span>'
                + '<img style="width: 100%;height: 100%;cursor: move" data-title="' + tit + '" src="' + src + '" />'
                + '<input class="zm-dialog-carousel-namePic" type="text" readonly value="' + place + '">'
                + '<div class="zm-dialog-carousel-picSetting clearFloat">'
                + '<span class="fa fa-search"  data-zm-title="放大"></span>'
                + '<span class="fa fa-pencil" data-zm-title="重命名"></span>'
                + '<span class="fa fa-trash"  data-zm-title="删除"></span>'
                + '<span class="fa fa-download" data-zm-title="下载到本地"></span>'
                + '<span class="fa fa-eye"  data-zm-title="展示"></span>'
                + '</div></figure></li>'
        }

        for (var i = 0; i < imgInPage.length; i++) {
            carouselPicList.push({imgUrl: imgInPage[i].src, imgTitle: imgInPage[i].title});//获取当前轮播图片
        }
        $.each(carouselPicList, function (index, val) {
            val.imgTitle = val.imgTitle == "" ? val.imgUrl : val.imgTitle;
            picListStr += spanListStr(index + 1, val.imgTitle, val.imgUrl, val.imgTitle);
            storageImgUrlStr += val.imgUrl;
        });
        thePicListBox.html('<ul class="zm-drag-box clearFloat">' + picListStr + '</ul>');

        thePicListBox
            .on('mousedown', 'li figure', function () {
                var _this = $(this), isShow = $('.zm-dialog-carousel-crimIsShow .zm-switch-box');
                picNum = _this.parent().index();
                thePicListBox.find('li figure').removeClass('theManagingPic');
                _this.addClass('theManagingPic');
                if (_this.find('img').attr('title')) {
                    $('.zm-dialog-carousel-crimNameImg input').val(_this.find('img').attr('title'))
                } else {
                    $('.zm-dialog-carousel-crimNameImg input').attr('placeholder', _this.find('img').attr('title'))
                }
                if (_this.find('.zm-dialog-carousel-picSetting .fa-eye').hasClass('fa-eye-slash')) {
                    isShow.removeClass('zm-switch-box-on').find('.fa').removeClass('fa-check').addClass('fa-minus')
                } else {
                    isShow.addClass('zm-switch-box-on').find('.fa').removeClass('fa-minus').addClass('fa-check')
                }
            })
            .on('mouseenter', 'li', function (e) {
                e.stopPropagation();
                var _this = $(this);
                _this.find('.zm-dialog-carousel-checkbox').fadeIn(150);
                _this.find('.zm-dialog-carousel-namePic').css('display', 'inline-block');
            })
            .on('mouseleave', 'li', function () {
                var _this = $(this);
                _this.find('.zm-dialog-carousel-namePic').hide();
                if (_this.find('.zm-dialog-carousel-checkbox').hasClass('transparent')) {
                    _this.find('.zm-dialog-carousel-checkbox').fadeOut(150)
                }
            });

        thePicListBox.on('mouseenter','.zm-dialog-carousel-picSetting span',function (e) {
            e.stopPropagation();
            var _this = $(this);
            $('body').append('<div class="zm-carousel-tooltipBox"></div>');
            var _tooltip = $('.zm-carousel-tooltipBox');
            _tooltip.html(_this.attr("data-zm-title"));
            var l=_this.offset().left;
            var t=_this.offset().top;
            var w=_this.outerWidth();
            var tip_w=_tooltip.outerWidth();
            var tip_h=_tooltip.outerHeight();
            _tooltip.stop().show().css({"left":l-tip_w/2+w/2,"top":t-tip_h-10})
        })
            .on('mouseleave','figure .zm-dialog-carousel-picSetting span',function () {
                $('.zm-carousel-tooltipBox').remove()
            });

        thePicListBox.on('mousedown', 'figure .zm-dialog-carousel-namePic', function (e) {
            e.stopPropagation();
        });

        thePicListBox.on('mousedown', 'figure .zm-dialog-carousel-checkbox', function (e) {
            e.stopPropagation();
            $(this).toggleClass('transparent');
        });//点击选中

        thePicListBox.on('mousedown', 'li .zm-dialog-carousel-picSetting span', function (e) {
            e.stopPropagation();
            var _this = $(this);
            var theIndex = _this.index();
            switch (theIndex) {
                case 0://放大
                    var theImage = new Image();
                    theImage.src = _this.closest('figure').find('img').attr("src");
                    var imageWidth = theImage.width;
                    var imageHeight = theImage.height;
                    zmEditor.dialog.open({
                        title: '',
                        content: '<img src="' + theImage.src + '"/>',
                        width: imageWidth,
                        height: imageHeight + 50,
                        movable: true,
                        target: $('body')
                    });
                    break;
                case 1://重命名
                    _this.closest('figure').find('.zm-dialog-carousel-namePic').show()
                        .removeAttr('readonly').focus();
                    break;
                case 2://删除
                    _this.closest('li').remove();
                    break;
                case 3://下载到本地
                    break;
                case 4://是否展示
                    _this.toggleClass('fa-eye-slash');
                    $('.zm-dialog-carousel-crimIsShow .zm-switch-box').toggleClass('zm-switch-box-on')
                        .find('.fa').toggleClass('fa-check fa-minus');
                    break;
                default:
                    break
            }
        });
        thePicListBox.on('blur', 'li figure .zm-dialog-carousel-namePic', function () {
            if($(this).val()!=''){
                $(".zm-dialog-carousel-crimNameImg input").attr('placeholder',$(this).val())
            }else {
                $(this).val($(this).closest('figure').attr('data-name'));
                $(".zm-dialog-carousel-crimNameImg input").attr('placeholder',$(this).closest('figure').attr('data-name'))
            }
        });
        var pages = thePicListBox.find("figure");
        $(".zm-dialog-carousel-btns .ImgUpdate").click(function () {//点击添加图片
            zmChoiceRadio.choicePicture({multiple :'true',callBack: function (e) {
                var  addPicStr = '';
                $.each(e, function (index, val) {
                    addPicStr += spanListStr(pages.length + index + 1, val.fName, val.fCoverUrl, val.fName);
                });
                thePicListBox.find('.zm-drag-box').append($(addPicStr));
                if (thePicListBox.find("figure").length > 50) {
                    return false
                }
            }})
        });//点击上传图片

        zmEditor.component.carousel.dragLocalImgUpdate('zm-dialog-carousel-contLeftImgGroup', function (data) {
            console.table(data);
            var imgStr = '';
            for (var i = 0; i < data.length; i++) {
                imgStr += spanListStr(thePicListBox.find('li').length + i + 1, data[i].imgTitle, data[i].imgUrl, data[i].imgTitle)
            }
            thePicListBox.find('.zm-drag-box').append($(imgStr));
            thePicListBox.removeClass('dragLocalImgTip')
        });//拖拽上传图片


        $('.zm-dialog-carousel-btns .imgDelete').click(function () {
            var theSlide = thePicListBox.find('figure');
            for (var i = 0; i < theSlide.length; i++) {
                if (theSlide.eq(i).find('.zm-dialog-carousel-checkbox').hasClass('transparent')) {
                } else {
                    theSlide.eq(i).parent().remove();
                    //暂时不从数据中删除
                }
            }
        });//批量删除图片

        $('.zm-dialog-carousel-crimIsShow .zm-switch-box').click(function () {
            thePicListBox.find("figure:eq(" + picNum + ") .fa-eye").toggleClass('fa-eye-slash')
        });//右侧点击切换是否展示

        $(".zm-dialog-carousel-crimNameImg input").on('blur', function () {
            var theManagingFig = thePicListBox.find('figure');
            for (var l = 0; l < theManagingFig.length; l++) {
                if (theManagingFig.eq(l).hasClass('theManagingPic')) {
                    if($(this).val()!=''){
                        theManagingFig.eq(l).find('.zm-dialog-carousel-namePic').val($(this).val())
                    }
                    // else {
                    //     theManagingFig.eq(l).find('.zm-dialog-carousel-namePic')
                    //                         .val(theManagingFig.eq(l).attr('data-name'));
                    //     $(this).attr('placeholder',theManagingFig.eq(l).attr('data-name'))
                    // }
                }
            }
        });//右侧点击图片命名

        $('.zm-dialog-carousel-crimSetHref .zm-switch-box').on("click", function () {
            var _this = $(this), thisHrefBtn = _this.next('.zm-edit-carousel-setHrefBtn');
            if (_this.hasClass("zm-switch-box-on")) {
                thisHrefBtn.attr("onclick", "").removeClass('setHrefBtn')
            } else {
                thisHrefBtn.attr("onclick", "zmEditor.dialog.setHref(this)").addClass('setHrefBtn');
            }
        });//设置链接

        $('.zm-dialog-carousel-manageSave').zmActionOn('click',function () {
            zmEditor.dialog.open({
                title: '温馨提示',
                content: '<div style="margin: 10px"><h3>当前轮播图片将变为该图片列表内图片</h3></div>',
                footer: $('<div class="zm-dialog-footer"><span class="zm-dialog-btnCancel">取 消</span>' +
                    '<span class="zm-dialog-btnOK beSure">确 定</span></div>'),
                width: 330,
                height: 200,
                movable: true,
                target: $('body')
            }, function () {
                $('.zm-dialog-btnOK.beSure').click(function () {
                    var figureStr = '', thePicSlide = thePicListBox.find('li figure')
                        , pageSlider = carouselSlideBox.find('figure')
                        , styles = pageSlider.eq(pageSlider.length - 1).attr('style');
                    for (var k = 0; k < thePicSlide.length; k++) {
                        var inputVal = thePicSlide.eq(k).find('.zm-dialog-carousel-namePic').val();
                        if (inputVal == '') {
                            inputVal = thePicSlide.eq(k).find('.zm-dialog-carousel-namePic').attr('placeholder')
                        }
                        if (!thePicSlide.eq(k).find('.fa-eye').hasClass('fa-eye-slash')) {
                            figureStr += '<figure class="zm-component-carousel-slide" style="' + styles + '">'
                                + '<img src="' + thePicSlide.eq(k).find("img").attr("src") + '" title="' + inputVal + '">'
                                + '</figure>'
                        }
                    }
                    carouselSlideBox.find('figure').remove().end().prepend(figureStr);
                    iSelected.prev().find('.zm-component-carousel-pageTip i').text(carouselSlideBox.find('figure').length);
                    var pageNumGroup = iSelected.find('.zm-component-carousel-pointGroup .zm-component-carousel-pagePoint');
                    if (pageNumGroup.length > carouselSlideBox.find('figure').length) {
                        pageNumGroup.eq(carouselSlideBox.find('figure').length - 1).nextAll().remove();
                    } else if (pageNumGroup.length < carouselSlideBox.find('figure').length) {
                        for (var q = 0; q < carouselSlideBox.find('figure').length - pageNumGroup.length; q++) {
                            pageNumGroup.eq(pageNumGroup.length - 1).clone().attr('slideIndex', pageNumGroup.length + q)
                                .text(pageNumGroup.length + q + 1).appendTo(pageNumGroup.parent())
                        }
                    }
                    $('.zm-dialog-box').remove();
                })
            });
        });//点击保存设置
    },//管理轮播图片面板
    getImgIndex: function ($c, $n, currIndex, nextIndex) {
        var _this = $(this),slideType = _this.attr('slide-type'),_thisParent = _this.parent();
        switch (slideType) {
            case 'scrollHorz':
                _this.find("figure").css('top','0');
                break;
            case 'scrollVert':
                _this.find("figure").css('left','0');
                break;
            default:
                break
        }
        _this.attr('data-nowNum',nextIndex+1);
        _thisParent.prev().find(".zm-component-carousel-pageTip span").text(nextIndex+1);//轮播模块右上角位置
        _thisParent.find(".zm-component-carousel-pagePoint").removeClass('itsTurn')
            .eq(nextIndex).addClass('itsTurn');
    },//每次轮播绑定事件
    /***********************************************/
    //以下为轮播组件功能设置项

    carouselFullScreen: function (ele) {
        var iSelected = ele, wrap = iSelected.closest(".zm-component-box1"),
            thisWidth = parseInt(iSelected.attr('data-origWidth'))>1200?1200:iSelected.attr('data-origWidth'),
            thisHeight = parseInt(iSelected.attr('data-origWidth'))>1200?
                1200/parseInt(iSelected.attr('data-origWidth'))*parseInt(iSelected.attr('data-origHeight')):
                iSelected.attr('data-origHeight'),
            e = zmEditor.component.carousel.public.toggleBox('满屏宽度',wrap.attr("data-fullScreen")),
            global = iSelected.closest(".zm-all"),
            fullWidth = global.width(), fullHeight = (fullWidth * thisHeight / thisWidth).toFixed(2);
        e.find(".zm-toggle-key").zmActionOn("click", function () {
            // $(this).toggleClass('zm-toggle-off zm-toggle-on');
            var pageNumGroupWidth = parseInt(iSelected.find('.zm-component-carousel-pointGroup').width()),
                carouselControlHeight = parseInt(iSelected.find('.zm-component-carousel-controlBtn:eq(0)').height());
            var isFullScreen = wrap.attr("data-fullScreen");
            if (isFullScreen == "true") {
                iSelected.css({width: thisWidth,height: thisHeight});
                wrap.css('left',parseInt(iSelected.attr('data-origWidth'))>1200?0:fullWidth/2 - thisWidth/2 - 351)
                    .attr('data-fullScreen','false');
                iSelected.find('.zm-component-carousel-pointGroup')
                    .css('left', thisWidth / 2 - pageNumGroupWidth / 2).end()
                    .find('.zm-component-carousel-controlBtn')
                    .css('top', thisHeight / 2 - carouselControlHeight / 2);
            }
            else {
                // iSelected.find('.zm-component-carousel-box').removeClass('maxWidth1200');
                iSelected.css({ width: fullWidth,height: fullHeight});
                wrap.css('left','-351px').attr('data-fullScreen','true');

                iSelected.find('.zm-component-carousel-pointGroup')
                    .css('left', fullWidth / 2 - pageNumGroupWidth / 2).end()
                    .find('.zm-component-carousel-controlBtn')
                    .css('top', fullHeight / 2 - carouselControlHeight / 2);
            }
            zmEditor.component.showOption(wrap)
        });

        return e;
    },//全屏开关
    carouselCutModule:function (ele) {
        var pub = zmEditor.component.carousel.public;
        var tempArr =  ['<span>自动轮播</span>','<span>手动轮播</span>'];
        var carouselBox = ele.children(".zm-component-carousel-box");
        var slideArgs = carouselBox.attr('data-slide-args');
        var autoScrollArg = slideArgs.split('autoScroll=')[1].split('&')[0];
        var e = $('<div></div>');
        e.append( pub.moduleList(tempArr,'轮播方式'));
        var modKey = e.find('.zm-edit-module-tempModule');
        modKey.append('<span class="zm-edit-carousel-cutType" style="padding-left: 10px">'+
            (autoScrollArg.toBoolean()?tempArr[0]:tempArr[1]) +'</span>');
        e.find('.zm-edit-module-moduleList li').on('click',function () {
            var  _this = $(this);
            if(_this.index()===0){
                autoScrollArg = 'true';
                e.next().next().show()
            }else {
                autoScrollArg = 'false';
                e.next().next().hide()
            }
            e.find('.zm-edit-carousel-cutType').html(_this.find('span').html());
            carouselBox.attr('data-slide-args',slideArgs.split('autoScroll=')[0]
                + 'autoScroll=' + autoScrollArg + '&timeout' + slideArgs.split('timeout')[1]);
        });
        return e
    },//手自切换
    carouselHoverStay:function (ele) {
        var iSelected = ele,
            carouselBox = iSelected.children(".zm-component-carousel-box");
        var slideArgs = carouselBox.attr('data-slide-args');
        var hoverStopArg = slideArgs.split('hoverStop=')[1];
        var e = zmEditor.component.carousel.public.toggleBox('光标停顿',hoverStopArg,'zm-edit-carousel-hoverStay');
        var theHoverCut = e.find(".zm-edit-carousel-hoverStay");
        theHoverCut.zmActionOn("click", function () {
            if(hoverStopArg === 'true'){
                hoverStopArg = 'false';
            }else {
                hoverStopArg = 'true'
            }
            carouselBox.attr('data-slide-args',slideArgs.split('hoverStop=')[0] + 'hoverStop=' + hoverStopArg)
        }); //是否光标停顿

        return e
    },//光标停顿
    carouselCutStyle: function (ele) {
        var run = zmEditor.component.carousel.svg.running;
        var iSelected = ele,
            e = $('<div class="zm-edit-slider" style="padding: 10px 7px;">'
                + '<span>翻页方式</span>'
                + '<ul class="zm-edit-carousel-cutStyleList clearFloat">'
                + '<li data-slide="scrollHorz" data-reverse="true"> '+ run + '<span>由左至右</span></li>'
                + '<li data-slide="scrollHorz" data-reverse="false">'+ run + '<span>由右至左</span></li>'
                + '<li data-slide="scrollVert" data-reverse="true"> '+ run + '<span>由下至上</span></li>'
                + '<li data-slide="scrollVert" data-reverse="false">'+ run + '<span>由上至下</span></li>'
                + '</ul></div>');
        var carouselBox = iSelected.find(".zm-component-carousel-box");
        var slideEffectArg = carouselBox.attr('data-slide-args');
        var slideStyleLi = e.find(".zm-edit-carousel-cutStyleList>li");
        slideStyleLi.zmActionOn('click',function () {
            var _this = $(this);
            _this.removeClass('styleCheck').addClass('styleCheck').siblings().removeClass('styleCheck');
            var slideStyle = _this.attr("data-slide"),reverse = _this.attr('data-reverse');
            iSelected.find(".zm-component-carousel-box").attr('slide-type', slideStyle);
            carouselBox.attr('data-slide-args',
                    slideEffectArg.split('effect=')[0]
                    + 'effect=' + slideStyle + '&hoverStop' + slideEffectArg.split('hoverStop')[1])
                .attr('data-reverse',reverse);
        });
        return e;
    },//轮播效果
    carouselCutArrow: function (ele) {
        var arrowArr = [
            '<div class="fa fa-angle-left"></div><span>单线箭头</span>',
            '<div class="fa fa-angle-double-left"></div><span>双线箭头</span>',
            '<div class="fa fa-long-arrow-left"></div><span>长箭头</span>',
            '<div class="fa fa-caret-left"></div><span>三角箭头</span>'
            ];
        var pub = zmEditor.component.carousel.public;
        var iSelected = ele,
            carouselBox = iSelected.find('.zm-component-carousel-box'),
            tempKey = iSelected.find(".zm-component-carousel-controlBtn"),
            controlBtnL = iSelected.find(".zm-component-carousel-controlBtn:eq(0)"),
            controlBtnR = iSelected.find(".zm-component-carousel-controlBtn:eq(1)"),
            cutControlBtn = iSelected.find(".zm-component-carousel-controlBtn"),
            e = $('<div class="zm-edit-slider" ' +
                'style="position: relative;overflow: hidden;">'
                + '<div class="zm-component-carousel-cutArrow">'
                + pub.toggleBox('翻页箭头',carouselBox.attr('data-showArrow')).prop('outerHTML')
                + '<div class="zm-component-carousel-iSarrow"></div>'
                + '<div class="zm-edit-carousel-arrowStyleBox"></div>'
                + '<div class="zm-component-carousel-arrowSize"></div>'
                + '<div class="zm-component-carousel-arrowColor"></div>'
                + '<div class="zm-component-carousel-arrowBgcolor"></div>'
                + '<div class="zm-component-carousel-arrowMargin"></div></div></div>');
        var mod = pub.moduleList(arrowArr,'箭头样式');
        var modBox = e.find('.zm-edit-carousel-arrowStyleBox');
        var showArrowKey = e.find(".zm-component-carousel-iSarrow");

        modBox.append(mod);
        var arrowClass = controlBtnL.attr('class').split('fa-')[1].split('-left')[0];
        var module = e.find('.zm-edit-module-tempModule');
        var styleName = '';
        switch (arrowClass){
            case "angle":       styleName = '单线箭头'; break;
            case "angle-double":styleName = '双线箭头'; break;
            case "long-arrow":  styleName = '长箭头'; break;
            case "caret":       styleName = '三角箭头'; break;
            default:                                   break
        }
        module.append('<div class="fa fa-'+arrowClass+'-left"></div>')
            .append('<span>'+ styleName +'</span>');

        e.find(".zm-toggle-key").zmActionOn("click", function () {
            $(this).toggleClass('zm-toggle-on zm-toggle-off');
            tempKey.toggle();
            if (tempKey.css('display') === 'block') {
                showArrowKey.fadeOut('slow');
                e.animate({height:'340px'});
                carouselBox.attr('data-showArrow', 'true')
            } else {
                showArrowKey.fadeIn('slow');
                e.animate({height:'55px'});
                carouselBox.attr('data-showArrow', 'false')
            }
        });//是否显示翻页按钮
        if (carouselBox.attr('data-showArrow') === 'true' ||
            iSelected.find(".zm-component-carousel-controlBtn").css('display') === 'block') {
            e.height('340px');
            showArrowKey.css('display', 'none');
        } else {
            e.height('55px');
            showArrowKey.css('display', 'block');
        }

        e.find("li").on('click',function () {
            var _this = $(this);
            module.children('div.fa').attr('class',_this.find('.fa').attr('class')).end()
                .children('span').html(_this.find('span').html());

            var newArrowStyle = _this.find(".fa").attr('class')
                                .toLocaleString().split('fa-')[1].split('-left')[0];
            var oldArrowStyleB = controlBtnL.attr('class').toLocaleString().split('-left')[0];
            var oldArrowStyleA = oldArrowStyleB.split('fa-')[0];
            controlBtnL.attr('class', oldArrowStyleA + ' fa-' + newArrowStyle + "-left fa-3x");
            controlBtnR.attr('class', oldArrowStyleA + ' fa-' + newArrowStyle + "-right fa-3x")
                .removeClass('left').addClass('right');
        });//点击切换箭头样式

        e.find(".zm-component-carousel-arrowColor").append(
            zmEditor.component.setItems.slider(cutControlBtn,
                {title: "箭头颜色", style: "noTab_color", isColor: true, param: "color", size: [0, 100]}));
        e.find(".zm-component-carousel-arrowBgcolor").append(
            zmEditor.component.setItems.slider(cutControlBtn,
                {title: "背景颜色", style: "noTab_color", isColor: true, param: "backgroundColor", size: [0, 100]}));

        e.find(".zm-component-carousel-arrowSize").append(
            zmEditor.component.setItems.slider(cutControlBtn,
                {title: "箭头大小<br/>(px)", style: "noTab_noColor", isColor: false, param: "fontSize", size: [40, 160]})
        );
        e.find(".zm-component-carousel-arrowMargin").append(
            zmEditor.component.setItems.slider(cutControlBtn,
                {title: "页边距<br/>(px)", style: "noTab_noColor", isColor: false, param: "marginLength", size: [0, 100]}));
        return e;
    },//翻页箭头
    carouselIsPageNum: function (ele) {
        var iSelected = ele,
            carouselBox = iSelected.find('.zm-component-carousel-box'),
            pageNumGroup = iSelected.find(".zm-component-carousel-pointGroup"),
            e = $('<div style="position: relative;">'
                + '<div class="zm-component-carousel-showPageNum"></div>'
                + '</div>');
        var tog = zmEditor.component.carousel.public.toggleBox('显示页码',carouselBox.attr('showPageNum'));
        var showPageNum = e.find(".zm-component-carousel-showPageNum"),
            theKey = e.find(".zm-toggle-key ");
        e.append(tog);

        theKey.zmActionOn("click", function () {
            pageNumGroup.toggle();
            if (pageNumGroup.css("display") === "block") {
                showPageNum.fadeOut('fast');
                carouselBox.attr('showPageNum', 'true');
            } else {
                showPageNum.fadeIn('fast');
                carouselBox.attr('showPageNum', 'false')
            }
        });
        if (pageNumGroup.css("display") === "block") {
            showPageNum.hide()
        } else {
            showPageNum.show()
        }
        return e
    },
    carouselPageNumStyle: function (ele) {
        var iSelected = ele,
            e = $('<div class="zm-edit-slider" style="height: 135px;padding: 5px">'
                + '<span style="display: block;margin-top: 15px">页码类型</span>'
                + '<div class="zm-edit-carousel-cutStyle" style="height: 70px"> '
                + '<div class="zm-edit-carousel-cutBtn left fa fa-angle-double-left fa-3x"  style="padding: 13px  4px;"></div>'
                + '<ul class="zm-edit-carousel-pageNumList clearFloat" style="margin-left: 30px">'
                + '<li class="pagePointStyle0" data-pageNum="0"><span></span><span></span><span></span></li>'
                + '<li class="pagePointStyle1" data-pageNum="1"><span></span><span></span><span></span></li>'
                + '<li class="pagePointStyle3" data-pageNum="3"><span>1</span><span>2</span><span>3</span></li>'
                + '</ul>'
                + '<div class="zm-edit-carousel-cutBtn right fa fa-angle-double-right fa-3x" style="padding: 13px 4px;"></div>'
                + '</div></div>'),
            ulMarginLeft = e.find(".zm-edit-carousel-pageNumList").css('margin-left').split('px')[0];
        var pointNum = iSelected.find('.zm-component-carousel-pagePoint').attr('class');
        var pointLi = e.find('.zm-edit-carousel-pageNumList li');
        if(pointNum.indexOf('0')>-1){pointLi.eq(0).addClass('pointCheck')}
        else if(pointNum.indexOf('1')>-1){pointLi.eq(1).addClass('pointCheck')}
        else if(pointNum.indexOf('3')>-1){pointLi.eq(2).addClass('pointCheck')}

        e.find("div.zm-edit-carousel-cutBtn").click(function () {
            if ($(this).hasClass("left")) ulMarginLeft += 102;
            ulMarginLeft = ulMarginLeft > 30 ? 30 : ulMarginLeft;
            if ($(this).hasClass("right")) ulMarginLeft -= 102;
            ulMarginLeft = ulMarginLeft < -72 ? -72 : ulMarginLeft;
            e.find(".zm-edit-carousel-pageNumList").animate({'margin-left': ulMarginLeft + "px"}, 150)
        });//点击滑动pageNumList
        e.find(".zm-edit-carousel-pageNumList li").zmActionOn("click", function () {
            var _this = $(this);
            _this.removeClass('pointCheck').addClass('pointCheck').siblings().removeClass('pointCheck');
            var pageNumStyleIndex = _this.attr('data-pageNum');
            var pointStyleEle = iSelected.find(".zm-component-carousel-pointGroup>div");
            pointStyleEle.each(function () {
                var _this = $(this);
                if (_this.hasClass('itsTurn')) {
                    _this.attr("class", "zm-component-carousel-pagePoint zm-component-carousel-pagePoints"
                        + pageNumStyleIndex + " itsTurn")
                } else {
                    _this.attr("class", "zm-component-carousel-pagePoint zm-component-carousel-pagePoints" + pageNumStyleIndex)
                }
            })
        });//点击切换轮播页码样式
        return e
    },
    carouselPageNumAlign: function (ele) {
        var iSelected = ele,
            e = $('<div class="zm-edit-slider" style="padding: 10px 0">'
                + '<span>页码布局</span>'
                + '<div class="zm-edit-components-pageNumAlign clearFloat">'
                + '<span alignStyle="left" data-zm-title="居左" class="fa fa-align-left fa-2x zm-tooltip"></span>'
                + '<span alignStyle="center" data-zm-title="居中" class="fa fa-align-center fa-2x zm-tooltip"></span>'
                + '<span alignStyle="right" data-zm-title="居右" class="fa fa-align-right fa-2x zm-tooltip"></span>'
                + '</div></div>'
            );
        var pointStyleEle = iSelected.find(".zm-component-carousel-pointGroup");
        var pointAlign = pointStyleEle.attr('alignStyle');
        e.find('.fa').removeClass('alignCheck');
        switch (pointAlign){
            case 'left':
                e.find('.fa').eq(0).addClass('alignCheck');
                break;
            case 'right':
                e.find('.fa').eq(2).addClass('alignCheck');
                break;
            case 'center':
            default:
                e.find('.fa').eq(1).addClass('alignCheck');
                break;
        }
        e.find(".zm-edit-components-pageNumAlign span").zmActionOn('click',function () {
            var _this = $(this);
            _this.removeClass('alignCheck').addClass('alignCheck').siblings().removeClass('alignCheck');
            switch ($(this).attr("alignStyle")) {
                case "left":
                    pointStyleEle.css({left: '3%',right:'auto'}).attr("alignStyle", "left");
                    break;
                case "center":
                    pointStyleEle.css({left: iSelected.find(".zm-component-carousel-box").width() / 2 - pointStyleEle.width() / 2
                        ,right:'auto'})
                        .attr("alignStyle", "center");
                    break;
                case "right":
                    pointStyleEle.css({left: "auto", right: '3%'}).attr("alignStyle", "right");
                    break;
                default:
                    break
            }
        });
        return e
    },
    /**********************************************/
    carouselImgManage:function (ele) {//新版需求，2017-7-13
        var svg = zmEditor.component.carousel.svg,
            zmVideo = zmEditor.component.carousel.zmResource.video,
            zmImgs = zmEditor.component.carousel.zmResource.images,
            vein = zmImgs.vein;
        var iSelected = ele,
            pageCarouselBox = iSelected.find(".zm-component-carousel-box"),
            pageNumGroup = iSelected.find('.zm-component-carousel-pointGroup'),
            pageGroupDiv = pageNumGroup.find('div'),
            imgInPage = pageCarouselBox.find(".zm-component-carousel-slide"),
            imgListStr = "",imgsDataArr = [],
            nowNum = pageCarouselBox.attr('data-nowNum')?pageCarouselBox.attr('data-nowNum'):1,
            pageIndex = nowNum-1,
            e = $('<div class="zm-edit-carousel-imgsControl">'
                + '<div class="zm-edit-carousel-imgManage">'
                + '<div class="zm-edit-carousel-cutPicBtn">'
                + '<div class="fa fa-angle-left" style="left: 3%;padding-left: 6px"></div>'
                + '<div class="fa fa-angle-right" style="right: 3%"></div></div>'
                + '<div class="zm-edit-carousel-box clearFloat"></div></div>'
                + '<div class="fa fa-trash fa-2x zm-edit-carousel-removeImg"></div>'
                + '<div class="zm-edit-carousel-settingBtn">'
                + '<div class="zm-edit-carousel-svgBox settingBtn">'
                + '<i>'+ svg.setting +'</i><span>设置</span></div>'
                + '<div class="zm-edit-carousel-svgBox slideVideoPlay">'
                + '<i style="margin: 0">'+ svg.play +'</i></div></div>'
                + '<div class="zm-edit-carousel-setSourceBtn">'
                + '<div class="zm-edit-carousel-svgBox getColorBox">'
                + '<i>'+ svg.color +'</i><span>颜色</span></div>'
                + '<div class="zm-edit-carousel-svgBox getImgBox">'
                + '<i>'+ svg.picture +'</i><span>图片</span></div>'
                + '<div class="zm-edit-carousel-svgBox getVideoBox">'
                + '<i>'+ svg.video +'</i><span>视频</span></div></div>'
                + '<div class="zm-edit-carousel-pages"><i>'+ nowNum +'</i>/'
                + '<span>'+(imgInPage.length+1)+'</span></div>'
                + '<div class="zm-edit-carousel-sourceBoxTitle">族蚂资源库</div>'
                + '<div class="zm-edit-carousel-sourceBox mCustomScrollbar" data-msc-theme="minimal">'
                + '<ul class="zm-edit-carousel-resourceList clearFloat"></ul>'
                + '</div>'
                + '<div class="zm-edit-carousel-settingBox"></div>'
                + '</div>');
        /**************浏览当前轮播图片---start******************/
        for (var i = 0; i < imgInPage.length; i++) {
            var sliderDataBox = $(imgInPage[i]).find('.zm-component-carousel-slideDataBox');
            imgsDataArr.push({
                imgUrl: sliderDataBox.attr('data-bgUrl'),
                imgTitle: sliderDataBox.attr('data-title')
            });//获取当前轮播图片
        }
        $.each(imgsDataArr, function (index, val) {
            imgListStr += '<figure class="zm-edit-carousel-slide" >'
                + '<div class="zm-edit-carousel-sliderBgImg" '
                + 'style="background-image: url('+ val.imgUrl +')"></div>'
                + '</figure>';
        });
        var carouselBox = e.find(".zm-edit-carousel-box");
        carouselBox.html(imgListStr);
        //将轮播图片添加到预览列表里
        function addEmptyPage() {
            return $('<figure class="zm-edit-carousel-slide">'
                + '<div class="zm-edit-carousel-sliderBgImg"></div>'
                + '</figure>');
        }

        carouselBox.append(addEmptyPage());//给预览图片列表最后加入上传图片功能

        carouselBox.find('.zm-edit-carousel-slide').eq(nowNum-1).show().siblings().hide();

        e.find(".zm-edit-carousel-cutPicBtn div").click(function () {
            var picLength = carouselBox.find(".zm-edit-carousel-slide").length - 1;
            var _this = $(this);
            if (_this.attr('class').indexOf('left') > 0) pageIndex--;
            pageIndex = pageIndex < 0 ? picLength : pageIndex;
            if (_this.attr('class').indexOf('right') > 0) pageIndex++;
            pageIndex = pageIndex > picLength ? 0 : pageIndex;
            carouselBox.find(".zm-edit-carousel-slide").eq(pageIndex).show().siblings().hide();
            e.find('.zm-edit-carousel-pages i').html(pageIndex+1)
        });//切换当前浏览图片
        /****************浏览当前轮播图片---end****************/
        var nowSlider = carouselBox.find('figure').eq(pageIndex).find('div');
        e.find('.getColorBox').append(zmEditor.component.setItems.strings.color(
            nowSlider,{style:'mini',param:'backgroundColor'}
        )).on('click',function () {
            nowSlider.css('backgroundImage','none')
        });
        /*****************族蚂资源库---start********************/

        var tempArr = [];
        for(var i=0;i<39;i++){
            tempArr.push(
                {
                    imgUrl:'resource/images/0'+((i+1)<10?'0'+(i+1):(i+1))+'.jpg',
                    imgTitle:'img-0'+((i+1)<10?'0'+(i+1):(i+1))}
            )
        }
        var imgBox = imgsDataArr.concat(zmImgs.video_thum).concat(tempArr);
        //族蚂资源库数据包
        var resList = e.find('.zm-edit-carousel-resourceList'),
            liStr='',videoTime='',videoUrl,videoName,videoSpan='';
        imgBox.forEach(function (p) {
            videoUrl = p.imgUrl;
            videoName = p.imgTitle;
            if(videoName.indexOf('video')>-1){
                var index = Number(videoName.split('video_')[1]);
                videoTime = 'data-prev-time="00:'+ zmVideo[index-1].time +'"';
                videoUrl = zmVideo[index-1].url;
                videoName = zmVideo[index-1].name;
                videoSpan = '<span>'+svg.video+'</span>'
            }else {
                videoTime='';
                videoSpan = ''
            }
            liStr+='<li class="zm-QuickLook" data-prev-url="'+ videoUrl +'" '
                +'data-prev-name="'+ videoName +'" '+ videoTime +' '
                +'style="background-image: url('+ p.imgUrl +')">'+videoSpan+'</li>'
        });
        resList.html(liStr).on('click','li',function () {
            console.log(pageIndex)

        });
        /*****************族蚂资源库---end********************/

        carouselBox.zmActionOn("click", ".zm-edit-carousel-imgCommitBtn", function () {
            var _this = $(this), parentSlider = _this.closest('.zm-edit-carousel-slide');
            var pageNum = carouselBox.find("figure").length;
            var styles = pageCarouselBox.find("figure").eq(pageCarouselBox.find("figure").length - 1)
                    .attr("style"),
                pageNumStyle = pageGroupDiv.eq(pageGroupDiv.length - 1).attr('class');
            var slideInPageStr = '', slideHereStr = '', slideInPageNumStr = '';

            if (_this.find('span').text() == "上传图片") {
                zmChoiceRadio.choicePicture({multiple :'true',callBack: function (e) {
                    $.each(e, function (index, val) {
                        slideInPageStr += '<figure class="zm-component-carousel-slide" style="' + styles + '">'
                            + '<img title="'+ val.fName +'" src="' + val.fCoverUrl + '"></figure>';
                        slideHereStr += '<figure class="zm-edit-carousel-slide">'
                            + '<img title="'+ val.fName +'" src="' + val.fCoverUrl + '" />'
                            + '</figure>';
                        slideInPageNumStr += '<div class="' + pageNumStyle + '" '
                            + 'slideindex="' + (pageGroupDiv.length + index + 1) + '">'
                            + (pageGroupDiv.length + index + 1) + '</div>'
                    });
                    parentSlider.hide().before($(slideHereStr));
                    carouselBox.find('figure').hide().end().find('figure').eq(pageNum - 1).show();
                    for (var i = 0; i < carouselBox.find('figure').length; i++) {
                        carouselBox.find('figure').eq(i).find('.zm-edit-carousel-pages i').text(i + 1);
                        carouselBox.find('figure').eq(i).find('.zm-edit-carousel-pages span')
                            .text(carouselBox.find('figure').length);
                    }
                    pageCarouselBox.append($(slideInPageStr));
                    iSelected.parent().find(".zm-component-carousel-pageTip i")
                        .text(pageCarouselBox.find('figure').length);
                    pageNumGroup.append($(slideInPageNumStr));

                    for (var i = 0; i < carouselBox.find('.zm-edit-carousel-picName').length; i++) {
                        if (!carouselBox.find('.zm-edit-carousel-picName').eq(i).attr('placeholder')) {
                            carouselBox.find('.zm-edit-carousel-picName').eq(i).attr('placeholder',
                                carouselBox.find('figure img').eq(i).attr('src'))
                        }
                    }

                    if (pageCarouselBox.find('figure').length > 50) {
                        return false
                    }//图片数量不能超过50张
                }})
            } else if (_this.find('span').text() == "替换图片") {
                zmChoiceRadio.choicePicture({multiple :'false',callBack: function (e) {
                    parentSlider.find('img').attr({'src':e[0].fCoverUrl,'title':e[0].fName}).end()
                        .find('input').val(e[0].fName);
                    pageCarouselBox.find('figure:eq(' + parentSlider.index() + ') img')
                        .attr({'src':e[0].fCoverUrl,'title':e[0].fName})
                }})
            }
        });
        //上传和替换当前轮播图片

        carouselBox.zmActionOn("click", ".zm-edit-carousel-removeImg", function () {
            var _this = $(this), parentPage = _this.closest('.zm-edit-carousel-slide')
                , thisIndex = parseInt(parentPage.find(".zm-edit-carousel-pages i").text())
                , pageList = carouselBox.find('.zm-edit-carousel-slide');
            var theNextAllSlide = carouselBox.find('.zm-edit-carousel-slide').eq(thisIndex - 1).nextAll();
            for (var i = 0; i < theNextAllSlide.length; i++) {
                $(theNextAllSlide[i]).find('.zm-edit-carousel-pages i').text(thisIndex + i)
            }
            carouselBox.find(parentPage).remove();
            carouselBox.find('.zm-edit-carousel-slide').eq(thisIndex - 1).show();
            carouselBox.find('.zm-edit-carousel-slide .zm-edit-carousel-pages span')
                .text(pageList.length - 1);
            pageNumGroup.find('div').eq(pageNumGroup.find('div').length - 1).remove();
            pageCarouselBox.find('figure').eq(thisIndex - 1).remove();
            iSelected.prev().find(".zm-component-carousel-pageTip i")
                .text(pageCarouselBox.find('figure').length);

            $(this).closest('.zm-dialog-box').remove()
        });



        carouselBox.zmActionOn('click', '.zm-edit-carousel-showThisPic .zm-switch-box', function () {
            var _this = $(this), thisImg = _this.closest('figure').find('img'),
                theIndex = _this.closest('figure').index()
                , pageSlideFigure = pageCarouselBox.find('figure')
                , thisImgUrl = thisImg.attr('src'),
                styles = pageSlideFigure.eq(pageSlideFigure.length - 1).attr('style');
            //if(thisImg.attr('isNew')=="new"){
            _this.parent().toggleClass("theKeyToShow");
            if (_this.parent().hasClass('theKeyToShow')) {
                pageCarouselBox.find('figure').eq(theIndex).before(
                    $('<figure class="zm-component-carousel-slide" style="' + styles + '">'
                        + '<img title="'
                        + _this.closest('figure').find(".zm-edit-carousel-picName").val() + '" '
                        + 'src="' + thisImgUrl + '"></figure>'));

                pageNumGroup.find('div').eq(pageNumGroup.find('div').length - 1)
                    .clone().appendTo(pageNumGroup).attr('slideindex', pageNumGroup.find('div').length - 1)
                    .text(pageCarouselBox.find('figure').length);
            } else {
                pageCarouselBox.find('figure').eq(theIndex).remove();
                pageNumGroup.find('div').eq(pageNumGroup.find('div').length - 1).remove();
            }
            iSelected.parent().find(".zm-component-carousel-pageTip i")
                .text(pageCarouselBox.find('figure').length);
            //}
        });
        //是否在页面轮播图中显示当前图片

        carouselBox.on("click", '.zm-edit-carousel-setHref .zm-switch-box', function () {
            var _this = $(this), thisHrefBtn = _this.next('.zm-edit-carousel-setHrefBtn');
            if (_this.hasClass("zm-switch-box-on")) {
                thisHrefBtn.attr("onclick", "").removeClass('setHrefBtn')
            } else {
                thisHrefBtn.attr("onclick", "zmEditor.dialog.setHref(this)").addClass('setHrefBtn');
            }
        });//设置链接

        return e;
    },
    carouselPagePicManage: function (ele) {
        var iSelected = ele,
            e = $('<div class="zm-edit-carousel-slideImgController"><button>管理滚屏图像</button></div>');
        e.find('button').on('click', function () {
            zmEditor.dialog.open('carouselImgManage.html', function () {
                zmEditor.component.carousel.slidePicManage(iSelected);
                $('.zm-dialog-content').mCustomScrollbar('destroy');
                $('.zm-dialog-carousel-contLeftImgGroup').mCustomScrollbar({theme: 'minimal'})
            });
            e.closest('.zm-dialog-box').fadeOut(200).remove()
        });//点击弹出轮播图片管理模块
        return e
    },
    setCarouselStyle:function(iSelected,_this){
        var carouselBox = '.zm-component-carousel-box';
        var slideStyle = _this.find(carouselBox).attr("slide-type");
        var slideArgs = iSelected.find(carouselBox).attr('data-slide-args');
        // var isAuto = slideArgs.split('autoScroll=')[1].split('&')[0];
        // var nowP = parseInt(iSelected.find(carouselBox).attr('data-nowNum'))-1;
        zmEditor.component.carousel.render(iSelected,slideStyle);
        iSelected.find(carouselBox).attr({
            'data-slide-args':slideArgs.split('effect=')[0]
            + 'effect=' + slideStyle
            + '&hoverStop=false',
            'slide-type':slideStyle
        }).css({'width':'100%','height':'100%'});

        if(iSelected.find(carouselBox).hasClass('maxWidth1200')){
            iSelected.width('1200px')
        }
        if(_this.find('.zm-component-carousel-pageCutBtn').length>0){
            iSelected.find('.zm-component-carousel-controlBtn').show()
        }else {
            iSelected.find('.zm-component-carousel-controlBtn').hide()
        }
        if(_this.find('.zm-component-carousel-point').length>0){
            iSelected.find('.zm-component-carousel-pointGroup').show()
        }else {
            iSelected.find('.zm-component-carousel-pointGroup').hide()
        }
    },
    render: function (ele, slideStyle,reverse) {
        var carouselBox = ele.find('.zm-component-carousel-box');
        var slideEffectArg = carouselBox.attr('data-slide-args');
        var slideType = slideStyle ? slideStyle : carouselBox.attr('slide-type');
        carouselBox.boxSlider('destroy')
            .boxSlider({
                speed: parseInt(slideEffectArg.split('speed=')[1].split('&')[0]),
                autoScroll: false,
                pauseOnHover:false,
                prev: ele.find(".zm-component-carousel-controlBtn.left"),
                next: ele.find(".zm-component-carousel-controlBtn.right"),
                timeout: parseInt(slideEffectArg.split('timeout=')[1].split('&')[0]),
                effect: slideType,
                // reverse:(reverse?reverse:'').toBoolean(),
                onbefore: zmEditor.component.carousel.getImgIndex
            });
        // ele.prev().find(".zm-component-carousel-pageTip span").html(1)
    },
    public:{
        toggleBox:function (str,flag,c) {
            var e= $('<div class="zm-toggleBox clearFloat">'
                +'<div>'+ (str?str:'开关') +'</div>'
                +'<div class=" '+ (c?c:'')
                +' zm-toggle-key zm-toggle-'+ ((flag?flag:'false').toBoolean()?'on':'off') +'"></div>'
                +'</div>');
            e.find('.zm-toggle-key').on('click',function () {
               $(this).toggleClass('zm-toggle-on zm-toggle-off')
            });
            return e
        },
        moduleList:function (arr,title,c) {
            var e = $('<div class="zm-edit-module-modulesBox '+(c?c:'')+'">'
                + '<span class="zm-edit-module-title">'+ title +'</span>'
                + '<div class="zm-edit-module-tempModule"><em class="fa fa-caret-down"></em>'
                + '<ul class="zm-edit-module-moduleList"></ul>'
                + '</div></div>'),
             ul = e.find('.zm-edit-module-moduleList'),
             mod = e.find('.zm-edit-module-tempModule'),liStr='';
            arr.map(function (p1) {liStr+='<li>'+p1+'</li>'});
             ul.html(liStr);
            mod.on('click',function () {
               ul.toggle()
            });
            ul.find('li').on('click',function () {
                ul.slideUp()
            });
            return e
        }
    }
};


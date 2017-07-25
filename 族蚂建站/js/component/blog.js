/**
 * Created by laozhang on 2017/4/22.
 */
zmEditor.component.blog = {
    newsData: {},
    setting: function (box) {
        var nowEdit = zmEditor.component.nowEdit();
        var newsMain = nowEdit.find('.zm-component-news-content');

        var config1 = [
            {
                type: "slider", element: nowEdit, flag: {
                title: "博客条数", style: "noTab_noColor", isColor: false, param: "newsNum", size: [1, 50]
             }
            },
            {
                type: 'slider', element: nowEdit, flag: {
                title: '背景颜色', style: 'notab_color', isColor: true, param: 'backgroundColor'}
            },
            {type: "news_newsSetting", element: newsMain, flag: {title: '博客'}},
            {type: "news_newsDataSort", element: newsMain, flag: {title: '博客'}}
        ];
        var tabs1 = zmEditor.component.setItems.config(config1);

        var config2_c1 = [
            {type: "news_newsPicShow", element: newsMain, flag: ""},
            {type: "news_newsPicPosition", element: newsMain, flag: ".zm-component-news-newsPic"},
            {type: "news_newsPicScale", element: newsMain, flag: ".zm-component-news-newsPic"},
            {type: "news_newsPicHover", element: newsMain, flag: ""},
            {type: "news_newsPicBord", element: newsMain, flag: ".zm-component-news-newsPic"},
            {
                type: 'slider', element: newsMain, flag: {
                title: '边框颜色', style: 'tab_color', isColor: true, param: 'borderColor',
                goal: '.zm-component-news-newsPic'
             }
            },
            {
                type: 'slider', element: newsMain, flag: {
                title: '边框宽度<br/>(像素)',
                style: 'tab_noColor', isColor: false, param: 'borderWidth',
                size: [0, 5], goal: '.zm-component-news-newsPic'
            }
            }
        ];
        var tabs2_c1 = zmEditor.component.setItems.config(config2_c1);

        var config2_c2 = [{
            type: 'boxShadow',
            element: newsMain,
            flag: {style:'tab',goal:'.zm-component-news-newsPic'}
        }];
        var tabs2_c2 = zmEditor.component.setItems.config(config2_c2);

        var tabs2List = [
            {title: "<span class='fa fa-th-large fa-lg'></span><br>常规", content: tabs2_c1},
            {title: "<span class='fa fa-clipboard'></span><br>阴影", content: tabs2_c2}
        ];
        var tabs2 = zmEditor.component.setItems.tabs_child(tabs2List);

        var config3 = [
            {type: "news_newTitlePoint", element: newsMain, flag: ".zm-component-news-titlePoint"},
            {
                type: 'slider', element: newsMain, flag: {
                title: '标题符号<br/>颜色', style: 'noTab_color', isColor: true, param: 'backgroundColor',
                goal: '.zm-component-news-titlePoint'
            }
            },
            {
                type: 'news_newsTitleFont', element: newsMain,
                flag: {style: 'mini', goal: '.zm-component-news-titleCont', param: "color"}
            },
            {type: 'news_wordsAlign', element: newsMain, flag: {title: '', goal: '.zm-component-news-titleCont'}},
            {
                type: 'slider', element: newsMain, flag: {
                title: '文字颜色<br/>(光标悬停)', style: 'noTab_color', isColor: true, param: 'hoverColor',
                goal: '.zm-component-news-titleCont'
            }
            },
            {
                type: 'slider', element: newsMain, flag: {
                title: '标题字间距<br/>(像素)', style: 'noTab_noColor', isColor: false, param: 'fontSpace',
                size: [0, 20], goal: '.zm-component-news-titleCont'
            }
            },
            {
                type: 'slider', element: newsMain, flag: {
                title: '标题行距', style: 'noTab_noColor', isColor: false, param: 'wordsLineHeight',
                size: [0, 3], goal: '.zm-component-news-title'
            }//换成文字放大倍率
            }
        ];
        var tabs3 = zmEditor.component.setItems.config(config3);

        var config4 = [
            {type: 'news_isShowWords', element: newsMain, flag: {title: '博客', goal: '.zm-component-news-words'}},
            {
                type: 'news_newsWordsFont', element: newsMain,
                flag: {title: '博客', style: 'mini', goal: '.zm-component-news-words', param: "color"}
            },
            {type: 'news_wordsAlign', element: newsMain, flag: {title: '', goal: '.zm-component-news-words'}},
            {
                type: 'slider', element: newsMain, flag: {
                title: '显示行数', style: 'noTab_noColor', isColor: false, param: 'wordsLineNum',
                size: [0, 10], goal: '.zm-component-news-words'
            }
            },
            {
                type: 'slider', element: newsMain, flag: {
                title: '内容字间距<br/>(像素)', style: 'noTab_noColor', isColor: false, param: 'fontSpace',
                size: [0, 20], goal: '.zm-component-news-words'
            }
            },
            {
                type: 'slider', element: newsMain, flag: {
                title: '内容行距<br/>(像素)', style: 'noTab_noColor', isColor: false, param: 'wordsLineHeight',
                size: [0, 2], goal: '.zm-component-news-words'
            }
            },
            {
                type: 'slider', element: newsMain, flag: {
                title: '文字颜色<br/>(光标悬停)', style: 'noTab_color', isColor: true, param: 'hoverColor',
                goal: '.zm-component-news-words'
            }
            }
        ];
        var tabs4 = zmEditor.component.setItems.config(config4);

        var config5 = [
            {type: 'news_newsShowAnother', element: newsMain, flag: ''}
        ];
        var tabs5 = zmEditor.component.setItems.config(config5);

        var tabsList = [{title: "列表", content: tabs1},
                        {title: "图片", content: tabs2},
                        {title: "标题", content: tabs3},
                        {title: "内容", content: tabs4},
                        {title: "其他", content: tabs5}];
        var tabsList1 = [{title: "列表", content: tabs5},
                         {title: "标题", content: tabs5},
                         {title: "内容", content: tabs5},
                         {title: "其他", content: tabs5}];
        var tabs = newsMain.length>0?
            zmEditor.component.setItems.tabs(tabsList):
            zmEditor.component.setItems.tabs(tabsList1);
        box.css({"width": "350px", "height": "685px"});
        return tabs;
    },
    //get ready area
    getNewsData: function (ele, num) {
        var newsCont = ele.find('.zm-component-news-content');
        var oldNewsNum = num ? num : 0;
        var newsNum = newsCont.attr('data-newsNum') ? newsCont.attr('data-newsNum') : 2;
        var newsData = zmEditor.component.blog.newsData;
        if (newsNum > oldNewsNum) {
            $.each(newsData.data, function (index, val) {
                if (index < newsNum && index > oldNewsNum - 1) {
                    newsCont.find('.zm-component-news-box:eq(0)').clone()
                        .attr('data-newsId', val.fId)
                        .find('img').attr('src', $(val.fContent).find('img').eq(0).attr("src")).end()
                        .find('.zm-component-news-title a').text(val.fTitle).end()
                        .find('.zm-component-news-getDate').text(val.fCreateTime).end()
                        .find('.zm-component-news-words').text($(val.fContent).text()).end()
                    // .find('.zm-component-news-praise').text(val.fLikeCount).end()
                    // .find('.zm-component-news-transmit').text(val.fForwardCount).end()
                    // .find('.zm-component-news-collect').text(val.fCollectCount).end()
                    // .find('.zm-component-news-comment').text(val.replyCount).end()
                        .appendTo(newsCont);
                }
            })
        } else {
            for (var x = 0; x < oldNewsNum - newsNum; x++) {
                newsCont.find('.zm-component-news-box').eq(-1).remove()
            }
        }
        var newsBox = newsCont.find('.zm-component-news-box'),
            newsPic = newsCont.find('.zm-component-news-newsPic');
        var editTitleList = ele.find('.zm-component-news-title'), editTitleStr = "";
        if (newsCont.attr('data-newsDir') == 'flex') {
            newsBox.addClass('flexColumn');
            newsPic.height('130px');
        } else {
            newsBox.removeClass('flexColumn');
            newsPic.height(zmEditor.component.news.newsPicHeight(ele));
        }
        if (newsCont.attr('picOriScale')) {
            zmEditor.component.news.newsPicOriScale(newsCont, newsPic)
        } else {
            ele.removeClass('newsPicVertC newsPicHorzC')
        }
        var picHoverEffect = newsCont.attr('data-picEffect') ? newsCont.attr('data-picEffect') : 'bigger';
        newsPic.addClass(picHoverEffect);
        for (var i = 0; i < editTitleList.length; i++) {
            editTitleStr += '<li><span>博客：</span>' + editTitleList.eq(i).text() + '</li>'
        }
        $('.zm-edit-news-settingBox .zm-edit-news-titleList ul').html(editTitleStr);
        $('.zm-edit-news-settingBox .zm-edit-news-titleList').mCustomScrollbar({theme: "minimal"});

    },//获取新闻数据并拼入html
    newsAllData: function () {
        var url = zmEditor.url.getNewsData;
        $.ajax({
            async: false,
            type: 'get',
            url: url,
            dataType: 'json',
            success: function (e) {
                zmEditor.component.blog.newsData = e;
            },
            error: function (e) {
                console.log(e.status)
            }
        });
    },//与后台交互获取新闻数据
    setNewsStyle: function (ele)  {
        ele.css({width:'350px',padding:'15px',backgroundColor:'#fff'});
        var newsCont = ele.find('.zm-component-news-content'), newsType = newsCont.attr('data-newsType');
        newsCont.attr('data-allLink','true');
        var newsNum = newsCont.attr('data-newsNum') ? newsCont.attr('data-newsNum') : 2, str = "";
        var newsData = zmEditor.component.blog.newsData;
        $.each(newsData.data, function (index, val) {
            var likeCount = val.fLikeCount ? val.fLikeCount : 0;
            var forwardCount = val.fForwardCount ? val.fForwardCount : 0;
            var collectCount = val.fCollectCount ? val.fCollectCount : 0;
            var replyCount = val.replyCount ? val.replyCount : 0;
            if (index < newsNum) {
                str += '<div class="zm-component-news-box" data-newsId = "' + val.fId + '">'
                    + '<div class="zm-component-news-newsPic">'
                    + '<img src="' + $(val.fContent).find('img').eq(0).attr("src") + '"></div>'
                    + '<div class="zm-component-news-wrap">'
                    + '<div class="zm-component-news-title">'
                    + '<span class="list_style"><em class="zm-component-news-titlePoint"></em></span>'
                    + '<a href="#" class="zm-component-news-titleCont">' + val.fTitle + '</a></div>'
                    + '<div class="zm-component-news-source">'
                    + '<span class="zm-component-news-getDate">' + val.fCreateTime + '</span></div>'
                    + '<div class="zm-component-news-words">' + $(val.fContent).text() + '</div>'
                    + '<div class="zm-component-news-interact">'
                    + '<span class="zm-component-news-praise">点赞(<i>' + likeCount + '</i>)</span>'
                    + '<span class="zm-component-news-transmit">转发(<i>' + forwardCount + '</i>)</span>'
                    + '<span class="zm-component-news-collect">收藏</span>'
                    + '<span class="zm-component-news-comment">评论(<i>' + replyCount + '</i>)</span>'
                    + '</div></div></div>'
                //replyCount 评论 ；fCollectCount 收藏；fForwardCount 转发；fLikeCount 点赞；
            }
        });
        newsCont.html(str);
        var newsBox = newsCont.find('.zm-component-news-box'),
            newsWrap = newsCont.find('.zm-component-news-wrap'),
            newsPic = newsCont.find('.zm-component-news-newsPic'),
            newsTitle = newsCont.find('.zm-component-news-title');
        if (newsCont.attr('data-newsDir')) {
            newsBox.addClass('flexColumn')
        } else {
            newsBox.removeClass('flexColumn')
        }
        switch (newsType) {
            case "wordList":
                newsCont.addClass('noPic noSource noWords  noPraise noTransmit noCollect noComment');
                newsTitle.find('a').css('color', '#193f8a');
                break;
            case "titleNews":
                newsCont.addClass('noPic noTitI noPraise noTransmit noCollect noComment');
                newsTitle.find('a').css('border-bottom', '1px solid');
                break;
            case "picLNews":
                newsCont.addClass('noTitI');
                break;
            case "picTNews":
                newsCont.addClass('noTitI  noPraise noTransmit noCollect noComment')
                    .attr('data-newsDir', 'flex');
                newsBox.addClass('flexColumn');
                break;
            default:
                break;
        }
        newsCont.attr('data-picEffect', 'bigger');
        newsPic.addClass('bigger');
        if (!newsBox.hasClass('flexColumn')) {
            newsPic.height(newsWrap.height());
        } else {
            newsPic.height('130px');
        }
    },//设置新闻模块初始样式
    microBlog:{
        getReady:function (ele) {
            var blogData = zmEditor.component.blog.newsData.data;
            ele.css({'width':'640px','padding':'20px','backgroundColor':'#fff'})
                .find('img').css({'width':'100%'});
            blogData.map(function (p1,p2) {
                //replyCount 评论 ；fCollectCount 收藏；fForwardCount 转发；fLikeCount 点赞；
                var cont = $(p1.fContent),//内容
                    title = p1.fTitle,//标题
                    time = p1.fCreateTime,//时间
                    coll = p1.fCollectCount,//收藏
                    read = p1.readCount,//阅读
                    repl = p1.replyCount,//评论
                    like = p1.fLikeCount,//点赞
                    forw = p1.fForwardCount;//转发
                var imgList = cont.find('img');
                console.log(imgList)
            })
        }
    }
};
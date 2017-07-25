/**
 * Created by laozhang on 2017/5/10.
 */
zmEditor.component.function = {
    setting: function () {
        var nowEdit = zmEditor.component.nowEdit();
        var content = nowEdit.find('.zm-component-function-content');
        var functionType = content.attr('data-functionType');
        var publicM = zmEditor.component.function.publicMethod,res;
        switch (functionType) {
            case "search":
                res = publicM.searchSetting(content);
                break;
            case "shopping":
                res = publicM.shoppingSetting(content);
                break;
            case "text":
                res = publicM.textSetting(content);
                break;
            case "img":
                res = publicM.imgSetting(content);
                break;
            case "btn":
                res = publicM.btnSetting(content);
                break;
            case "shape":
                res = publicM.shapeSetting(content);
                break;
            case "file":
                res = publicM.fileSetting(content);
                break;
            case "share":
                res = publicM.shareSetting(content);
                break;
            case "enter":
                res = publicM.enterSetting(content);
                break;
            case "option":
                res = publicM.optionSetting(content);
                break;
            case "map":
                res = publicM.mapSetting(content);
                break;
            default:
                break;
        }
        return res
    },
    searchMethod: {
        searchBarGetReady: function (ele) {
            var searchMain = ele, searchContent = searchMain.find('.zm-component-function-content');
            var searchBtn = searchMain.find('.zm-component-function-searchBtn');
            var searchBar = searchContent.find('.zm-component-function-searchBar');
            var tempSpan = $('<span class="searchBarTempCont">请输入关键字</span>');
            searchMain.css({'width': '302px'});
            searchBar.find('input').attr('placeholder', '').end().append(tempSpan);
            searchContent.attr('data-btnScale',
                parseInt(searchBtn.width() / searchBtn.height()));
            tempSpan.on('click', function () {
                $(this).prev().focus()
            });

            searchContent.append('<div class="zm-component-function-searchSuggest"></div>');

            var searchSuggest = searchContent.find('.zm-component-function-searchSuggest');

            searchBar.find('input').on('focus', function () {
                var _this = $(this).parent(), focusColor = _this.attr('data-type-hoverColor');
                if (focusColor) {
                    _this.attr('data-oldColor', _this.css('border-color')).css('border-color', focusColor)
                }
                if (searchBar.attr('data-showRecommend') == 'true') {
                    searchSuggest.show()
                }
                //searchBar.attr('data-showRecommend')=='true'?searchSuggest.show():searchSuggest.hide();
            }).on('blur', function () {
                searchSuggest.hide();
                var _this = $(this).parent();
                _this.css('border-color', _this.attr('data-oldColor'));
                if ($(this).val() == '')
                    tempSpan.show()
            }).on('input', function () {
                tempSpan.hide()
            });

            searchBtn.on('mouseenter mouseleave', function (eve) {
                var _this = $(this);
                if (eve.type == 'mouseenter') {
                    if (_this.attr('data-type-hoverbordercolor')) {
                        _this.attr('bdColor', _this.css('border-Color'))
                            .css('borderColor', _this.attr('data-type-hoverbordercolor'))
                    }
                    if (_this.attr('data-type-hoverbackgroundcolor')) {
                        _this.attr('bgColor', _this.css('backgroundColor'))
                            .css('backgroundColor', _this.attr('data-type-hoverbackgroundcolor'))
                    }

                    if (_this.attr('data-type-hovercolor')) {
                        _this.attr('fontColor', _this.css('color'))
                            .css('color', _this.attr('data-type-hovercolor'))
                    }

                } else if (eve.type == 'mouseleave') {
                    if (_this.attr('bgColor')) {
                        _this.css({'backgroundColor': _this.attr('bgColor')})
                    }
                    if (_this.attr('bdColor')) {
                        _this.css({'borderColor': _this.attr('bdColor')})
                    }
                    if (_this.attr('fontColor')) {
                        _this.css({'color': _this.attr('fontColor')})
                    }
                }
            }).attr('target', '_self')
        },
        setDefaultContent: function (ele, flag) {
            var e = $('<div class="zm-edit-function-search-defaultCont" style="line-height: 61px">'
                + '<span class="zm-edit-search-title">' + flag.title + '</span>'
                + '<input type="text" placeholder="'+$.trim(ele.text())+'" '
                + 'style="padding: 0 5px;margin-left: 10px;border-radius: 5px">'
                + '</div>');
            if (ele.attr('class') == 'zm-component-function-searchBtn') {
                e.find('input').on('input', function () {
                    ele.find('div').text($(this).val());
                }).on('blur', function () {
                    var _this = $(this);
                    if (_this.val() == '') {
                        ele.find('div').text(_this.attr('placeholder'))
                    } else {
                        ele.find('div').text(_this.val())
                    }
                });
            } else {
                e.find('input').on('input', function () {
                    ele.hide().prev().val($(this).val())
                }).on('blur', function () {
                    ele.show().html($(this).val()).prev().val('')
                });
            }
            return e
        },
        placeholderWordsSet: function (ele, flag) {
            var e = $('<div class="zm-edit-search-placeholderWords" style="padding: 12px 7px">'
                + '<span>' + flag.content + ':</span>'
                + '<div class="zm-edit-search-placeholderCont" style="margin-top: 10px"></div></div>');
            e.find('.zm-edit-search-placeholderCont').append(zmEditor.component.setItems.strings.fontStyle(ele, flag));
            return e
        },
        searchBtnStyle: function (ele) {
            var e = $('<div class="zm-edit-function-searchBtnStyleList" style="padding: 10px 7px">'
                + '<span>按钮样式</span><ul class="clearFloat">'
                + '<li><span class="zm-edit-function-choicePoint" data-scale="1"></span>'
                + '<div class="zm-edit-function-btnStyle" style="width: 36px">'
                + '<div class="fa fa-search"></div></div></li>'
                + '<li style="margin-left: 24px"><span class="zm-edit-function-choicePoint" data-scale="2"></span>'
                + '<div class="zm-edit-function-btnStyle" style="width: 72px">'
                + '<div class="fa fa-search"></div></div></li>'
                + '<li style="margin-left: 24px"><span class="zm-edit-function-choicePoint" data-scale="3"></span>'
                + '<div class="zm-edit-function-btnStyle" style="width: 108px">'
                + '<div class="fa fa-search"></div></div></li>'
                + '<li><span class="zm-edit-function-choicePoint" data-scale="1"></span>'
                + '<div class="zm-edit-function-btnStyle" style="width: 36px">'
                + '<div class="searchBtnFont">搜索</div></div></li>'
                + '<li style="margin-left: 24px"><span class="zm-edit-function-choicePoint" data-scale="2"></span>'
                + '<div class="zm-edit-function-btnStyle" style="width: 72px">'
                + '<div class="searchBtnFont">搜索</div></div></li>'
                + '<li style="margin-left: 24px"><span class="zm-edit-function-choicePoint" data-scale="3"></span>'
                + '<div class="zm-edit-function-btnStyle" style="width: 108px">'
                + '<div class="searchBtnFont">搜索</div></div></li></ul></div>');
            var choicePoint = e.find('.zm-edit-function-choicePoint'), iSelected = zmEditor.component.nowEdit();
            var searchBar = iSelected.find('.zm-component-function-searchBar');
            var li = e.find('li');
            var btnScale = Math.round(parseInt(ele.width())/parseInt(ele.height()));
            choicePoint.removeClass('choose');
            if(ele.find('.fa').length>0){
                switch (btnScale){
                    case 1:
                        li.eq(0).find('span').addClass('choose');
                        break;
                    case 2:
                        li.eq(1).find('span').addClass('choose');
                        break;
                    case 3:
                        li.eq(2).find('span').addClass('choose');
                        break
                }
            }else {
                switch (btnScale){
                    case 1:
                        li.eq(3).find('span').addClass('choose');
                        break;
                    case 2:
                        li.eq(4).find('span').addClass('choose');
                        break;
                    case 3:
                        li.eq(5).find('span').addClass('choose');
                        break
                }
            }

            choicePoint.zmActionOn('click', function () {
                var _this = $(this);
                e.find('.zm-edit-function-choicePoint').removeClass('choose');
                _this.addClass('choose');

                var origHeight = parseInt(ele.height());
                var scale = parseInt(_this.attr('data-scale'));

                iSelected.find('.zm-component-function-content').attr('data-btnScale', _this.attr('data-scale'));


                var newWidth = parseInt(iSelected.width())
                    - origHeight * scale
                    - parseInt(searchBar.css('borderWidth'))*2
                    - parseInt(ele.css('borderWidth'))*2
                    - parseInt(ele.css('margin-left')) - 2;

                searchBar.width(newWidth);

                ele.html(_this.next().html()).width(origHeight * scale);

            });
            return e
        },
        searchResultShow: function (ele) {
            var e = $('<div class="zm-edit-function-searchResultTarget clearFloat" style="line-height: 61px;">'
                + '<span>展示方式</span>'
                + '<span class="zm-edit-function-choicePoint choose"></span><span>当前页跳转</span>'
                + '<span class="zm-edit-function-choicePoint"></span><span>弹出新页面</span>'
                + '</div>');
            var chooseBtn = e.find('.zm-edit-function-choicePoint');
            var searchBtn = ele.find('.zm-component-function-searchBtn');
            var searchSuggest = ele.find('.zm-component-function-searchSuggest li a');

            if (searchBtn.attr('target') == '_blank') {
                e.find('span').removeClass('choose').eq(3).addClass('choose')
            } else {
                e.find('span').removeClass('choose').eq(1).addClass('choose')
            }

            chooseBtn.on('click', function () {
                var _this = $(this);
                e.find('.zm-edit-function-choicePoint').removeClass('choose');
                _this.addClass('choose');
                if (_this.index() == '1') {
                    searchBtn.attr('target', '_self');
                    searchSuggest.attr('target', '_self')
                }
                if (_this.index() == '3') {
                    searchBtn.attr('target', '_blank');
                    searchSuggest.attr('target', '_blank')
                }
            });
            return e
        },
        keyToSet: function (ele, flag) {
            var e = $(zmEditor.component.function.publicMethod.switchKeyStr(flag.title, 'zm-edit-search-keyToSet'));
            e.find('label').on('click', function () {
                var key = $(this).attr('class').indexOf('on') > 0 ? 'off' : 'on';
                ele.css('boxShadow', key == 'on' ? 'inset 0 0 5px #aaa' : '0 0 0').attr('data-shadow-inset', key);
            });
            if(ele.css('boxShadow').indexOf('inset')>-1){
                e.find('label').addClass('zm-switch-box-on').end()
                    .find('.fa').removeClass('fa-minus').addClass('fa-check');
            }
            var d = $('<div class="zm-edit-search-keyToSet" style="border-bottom: 0">'
                + zmEditor.component.function.publicMethod.switchKeyStr(flag.title.first, "zm-edit-search-showHistory")
                + zmEditor.component.function.publicMethod.switchKeyStr(flag.title.second, "zm-edit-search-showRecommend")
                + '</div>');
            d.find('.zm-edit-search-showRecommend').css('padding', '0 0 20px 0');

            d.find('.zm-edit-search-showHistory label').on('click', function () {
                var _this = $(this);
                var key = _this.attr('class').indexOf('on') > 0 ? 'off' : 'on';
                ele.attr({
                    'data-showHistory': key == 'on' ? 'true' : 'false',
                    'data-showRecommend': key == 'on' ? 'false' : 'true'
                });
                //d.find('.zm-edit-search-showRecommend label').removeClass('zm-switch-box-on');
                //d.find('.zm-edit-search-showRecommend .zm-switch fa').removeClass('fa-check').addClass('fa-minus');
            });

            d.find('.zm-edit-search-showRecommend label').on('click', function () {
                var _this = $(this), tempStr = '';
                var key = _this.attr('class').indexOf('on') > 0 ? 'off' : 'on';
                ele.attr({
                    'data-showRecommend': key == 'on' ? 'true' : 'false',
                    'data-showHistory': key == 'on' ? 'false' : 'true'
                });
                var searchSuggest = ele.siblings('.zm-component-function-searchSuggest');
                var suggestData = zmEditor.component.function.publicMethod.searchSuggestStr();
                for (var i = 0, len = suggestData.length; i < len; i++) {
                    tempStr += '<li><a>' + suggestData[i] + '</a></li>'
                }
                searchSuggest.html('<ul>' + tempStr + '</ul>');
                //ele.attr('data-showRecommend')=='true'?searchSuggest.show():searchSuggest.hide();
                //d.find('.zm-edit-search-showHistory label').removeClass('zm-switch-box-on');
                //d.find('.zm-edit-search-showHistory .zm-switch fa').removeClass('fa-check').addClass('fa-minus');
            });
            return flag.param && flag.param == 'two' ? d : e
        },
        setSearchBarStyle: function (ele) {
            var nowEdit = zmEditor.component.nowEdit(),
                nowCont = nowEdit.find('.zm-component-function-content'),
                btn = nowCont.find('.zm-component-function-searchBtn'),
                nowBar = nowCont.find('.zm-component-function-searchBar'),
                nowBtn = btn.find('div'),
                _this = ele,
                thisCont = _this.find('.zm-component-function-content'),
                thisBtn = thisCont.find('.zm-component-function-searchBtn div'),
                scale = parseInt(thisBtn.width()/thisBtn.height()),
                totalWidth = parseInt(nowEdit.width());
            nowCont[0].className = thisCont[0].className;
            nowBtn[0].className = thisBtn[0].className;
            nowBtn.html(thisBtn.html()).width(parseInt(nowBtn.height())*scale);
            nowCont.attr('data-btnScale',
                parseInt(thisBtn.parent().width() /thisBtn.parent().height()));
            nowBar.width(totalWidth
                - parseInt(nowBar.css('border-top-width'))*2
                - parseInt(btn.width())
                - parseInt(btn.css('marginLeft'))
                - parseInt(btn.css('border-top-width'))*2  + 'px')
        },
        resizeSearchBar: function (ele, w, h) {
            var component = ele;
            var searchContent = component.find('.zm-component-function-searchBar');
            var searchBtn = component.find('.zm-component-function-searchBtn');
            var btnScale = parseInt(component.find('.zm-component-function-content').attr('data-btnScale'));
            var totalW = parseInt(component.width())
                        - parseInt(searchContent.css('border-top-width'))
                        - parseInt(searchBtn.css('border-top-width'))*2
                        - parseInt(searchBtn.css('margin-left')) - 2 ;
            if (h) {
                searchContent.width(totalW - h * btnScale - parseInt(searchBtn.css('border-top-width')));
                searchBtn.width((h * btnScale) + 'px');
            }
            if (w) {
                searchContent.css('width',
                    w - 2
                    - parseInt(searchBtn.width())
                    - parseInt(searchBtn.css('border-top-width'))*2
                    - parseInt(searchBtn.css('marginLeft')) + 'px')
            }
        }
    },
    shoppingMethod: {
        shoppingCartPath: {
            hollow: 'M373.845 766.655c-52.878 0-95.745 42.868-95.745 95.752 0 52.876 42.866 95.745 95.745 95.745 52.882 0 95.748-42.868 95.748-95.745 0-52.884-42.867-95.752-95.748-95.752z m0 148.943c-29.377 0-53.193-23.816-53.193-53.197 0-29.373 23.816-53.19 53.193-53.19 29.378 0 53.194 23.817 53.194 53.19 0 29.38-23.816 53.197-53.194 53.197zM215.002 192.167L192.99 64.499H65.325v42.558h88.78l102.717 595.77h595.766v-42.554H295.71l-11.512-66.769 568.389-60.897 106.388-297.882v-42.558H215.002z m616.31 297.885l-554.332 61.59-54.641-316.917h687.533l-78.56 255.327z m-95.75 276.603c-52.879 0-95.748 42.868-95.748 95.752 0 52.876 42.868 95.745 95.748 95.745s95.747-42.868 95.747-95.745c0-52.884-42.869-95.752-95.747-95.752z m0 148.943c-29.38 0-53.194-23.816-53.194-53.197 0-29.378 23.815-53.192 53.194-53.192 29.377 0 53.193 23.814 53.193 53.192 0 29.38-23.816 53.197-53.193 53.197z',
            block: 'M382.249495 837.880176C355.873183 837.880176 333.369295 846.988893 314.689119 865.157617 296.033298 883.326341 286.705387 905.270068 286.705387 930.940088 286.705387 956.634463 296.033298 978.57819 314.689119 996.746914 333.369295 1014.915638 355.873183 1024 382.249495 1024 408.625806 1024 431.154049 1014.915638 449.834225 996.746914 468.490046 978.57819 477.817957 956.634463 477.817957 930.940088 477.817957 905.270068 468.490046 883.326341 449.834225 865.157617 431.154049 846.988893 408.625806 837.880176 382.249495 837.880176ZM1051.228731 837.880176C1024.828065 837.880176 1002.324176 846.988893 983.644 865.157617 964.988179 883.326341 955.660269 905.270068 955.660269 930.940088 955.660269 956.634463 964.988179 978.57819 983.644 996.746914 1002.324176 1014.915638 1024.828065 1024 1051.228731 1024 1077.580687 1024 1100.108931 1014.915638 1118.789107 996.746914 1137.444928 978.57819 1146.772839 956.634463 1146.772839 930.940088 1146.772839 905.270068 1137.444928 883.326341 1118.789107 865.157617 1100.108931 846.988893 1077.580687 837.880176 1051.228731 837.880176ZM1228.166774 107.234439C1218.692734 98.052658 1207.489499 93.425235 1194.55707 93.425235 1194.55707 93.425235 297.884267 93.425235 297.884267 93.425235 297.39717 90.03991 296.276846 83.878131 294.523296 74.891188 292.794102 65.9286 291.43023 58.792627 290.43168 53.458913 289.433131 48.125199 287.557807 41.695517 284.830063 34.169866 282.077964 26.668569 278.863123 20.725984 275.112475 16.366465 271.386181 12.006945 266.41779 8.256297 260.182947 5.090165 253.972458 1.948389 246.86084 0.365323 238.921156 0.365323 238.921156 0.365323 47.784231 0.365323 47.784231 0.365323 34.827447 0.365323 23.624212 4.992746 14.174527 14.198882 4.724842 23.405018 0 34.315995 0 46.907456 0 59.523273 4.724842 70.409894 14.174527 79.61603 23.624212 88.822167 34.827447 93.425235 47.784231 93.425235 47.784231 93.425235 200.099512 93.425235 200.099512 93.425235 200.099512 93.425235 332.248971 691.751029 332.248971 691.751029 331.226067 693.699417 326.135902 702.905554 316.929766 719.393792 307.723629 735.882031 300.368462 750.275752 294.912974 762.64802 289.433131 774.995933 286.705387 784.591747 286.705387 791.362397 286.705387 803.978214 291.43023 814.864835 300.879914 824.070972 310.329599 833.301463 321.532834 837.880176 334.489618 837.880176 334.489618 837.880176 1098.988607 837.880176 1098.988607 837.880176 1111.945392 837.880176 1123.124272 833.301463 1132.598311 824.070972 1142.047996 814.864835 1146.772839 803.978214 1146.772839 791.362397 1146.772839 778.770936 1142.047996 767.85996 1132.598311 758.653823 1123.124272 749.447687 1111.945392 744.844619 1098.988607 744.844619 1098.988607 744.844619 412.132905 744.844619 412.132905 744.844619 424.066786 721.561375 430.033726 706.071685 430.033726 698.302485 430.033726 693.455869 429.424854 688.122155 428.182757 682.301344 426.916304 676.504888 425.430658 670.075205 423.701463 663.036651 421.947913 656.022452 420.827589 650.810513 420.340492 647.425187 420.340492 647.425187 1199.793364 558.724795 1199.793364 558.724795 1212.214342 557.263503 1222.443382 552.051564 1230.407421 543.088976 1238.347104 534.126388 1242.341301 523.824284 1242.341301 512.182661 1242.341301 512.182661 1242.341301 139.967368 1242.341301 139.967368 1242.341301 127.375907 1237.616459 116.46493 1228.166774 107.234439Z',
            plus: 'M731.428571 402.285714q0-14.857143-10.857143-25.714286t-25.714286-10.857143l-73.142857 0 0-73.142857q0-14.857143-10.857143-25.714286t-25.714286-10.857143-25.714286 10.857143-10.857143 25.714286l0 73.142857-73.142857 0q-14.857143 0-25.714286 10.857143t-10.857143 25.714286 10.857143 25.714286 25.714286 10.857143l73.142857 0 0 73.142857q0 14.857143 10.857143 25.714286t25.714286 10.857143 25.714286-10.857143 10.857143-25.714286l0-73.142857 73.142857 0q14.857143 0 25.714286-10.857143t10.857143-25.714286zm-329.142857 475.428571q0 30.285714-21.428571 51.714286t-51.714286 21.428571-51.714286-21.428571-21.428571-51.714286 21.428571-51.714286 51.714286-21.428571 51.714286 21.428571 21.428571 51.714286zm512 0q0 30.285714-21.428571 51.714286t-51.714286 21.428571-51.714286-21.428571-21.428571-51.714286 21.428571-51.714286 51.714286-21.428571 51.714286 21.428571 21.428571 51.714286zm73.142857-621.714286l0 292.571429q0 13.714286-9.142857 24.285714t-23.428571 12.285714l-596.571429 69.714286q0.571429 4 2.571429 12.285714t3.428571 15.142857 1.428571 12.571429q0 9.142857-13.714286 36.571429l525.714286 0q14.857143 0 25.714286 10.857143t10.857143 25.714286-10.857143 25.714286-25.714286 10.857143l-585.142857 0q-14.857143 0-25.714286-10.857143t-10.857143-25.714286q0-8 6.285714-22.571429t16.857143-34 11.714286-21.714286l-101.142857-470.285714-116.571429 0q-14.857143 0-25.714286-10.857143t-10.857143-25.714286 10.857143-25.714286 25.714286-10.857143l146.285714 0q9.142857 0 16.285714 3.714286t11.428571 8.857143 7.428571 14 4.285714 15.142857 3.142857 16.857143 2.571429 14.571429l686.285714 0q14.857143 0 25.714286 10.857143t10.857143 25.714286z',
            net: 'M253.36601 185.087439 131.137201 185.087439c-14.211676 0-25.732058-11.523451-25.732058-25.733081 0-14.2127 11.519358-25.733081 25.732058-25.733081l122.228809 0c14.2127 0 25.733081 11.519358 25.733081 25.733081C279.099091 173.563988 267.57871 185.087439 253.36601 185.087439L253.36601 185.087439zM806.610366 725.464743 388.460848 725.464743c-14.210653 0-25.732058-11.522428-25.732058-25.731034 0-14.213723 11.521404-25.733081 25.732058-25.733081L806.611389 674.000628c14.211676 0 25.733081 11.520381 25.733081 25.733081C832.34447 713.943338 820.822043 725.464743 806.610366 725.464743L806.610366 725.464743zM903.108141 288.017716 291.96512 288.017716c-14.213723 0-25.734104-11.523451-25.734104-25.733081 0-14.213723 11.519358-25.733081 25.734104-25.733081l611.141998 0c14.213723 0 25.733081 11.518335 25.733081 25.733081C928.840198 276.495288 917.32084 288.017716 903.108141 288.017716L903.108141 288.017716zM862.900394 442.409039 332.171843 442.409039c-14.214746 0-25.733081-11.520381-25.733081-25.733081 0-14.20963 11.518335-25.732058 25.733081-25.732058l530.72855 0c14.213723 0 25.733081 11.522428 25.733081 25.732058C888.633475 430.888657 877.113093 442.409039 862.900394 442.409039L862.900394 442.409039zM825.910944 596.802408 372.377544 596.802408c-14.211676 0-25.732058-11.518335-25.732058-25.732058 0-14.211676 11.521404-25.732058 25.732058-25.732058L825.910944 545.338293c14.214746 0 25.732058 11.521404 25.732058 25.732058C851.644025 585.284073 840.125691 596.802408 825.910944 596.802408L825.910944 596.802408zM591.102081 593.58718c-14.210653 0-25.732058-11.521404-25.732058-25.734104L565.370023 291.232944c0-14.2127 11.521404-25.734104 25.732058-25.734104 14.21577 0 25.733081 11.521404 25.733081 25.734104l0 276.621155C616.836185 582.066799 605.318874 593.58718 591.102081 593.58718L591.102081 593.58718zM768.211824 272.762267 735.286947 547.419697c-1.695618 14.108323-14.503319 24.175609-28.615735 22.485107-14.108323-1.691525-24.178679-14.502295-22.488177-28.608571l32.927947-274.659477c1.692548-14.109346 14.506389-24.175609 28.614711-22.484084C759.83811 245.844198 769.906419 258.651898 768.211824 272.762267L768.211824 272.762267zM927.37687 269.225721l-74.14979 299.165614c-3.399423 13.799284-17.3389 22.234397-31.140231 18.833951-13.798261-3.396353-22.233374-17.334807-18.835997-31.135114L877.403712 256.924557c3.396353-13.798261 17.336854-22.23235 31.135114-18.837021C922.339134 241.484913 930.7722 255.422344 927.37687 269.225721L927.37687 269.225721zM476.377176 573.857836c-14.097066 1.808182-26.988678-8.15575-28.794813-22.251793l-33.127492-258.424724c-1.809205-14.096043 8.154727-26.989701 22.252817-28.79379 14.096043-1.808182 26.986631 8.154727 28.792767 22.251793l33.125445 258.424724C500.437152 559.159066 490.472196 572.051701 476.377176 573.857836L476.377176 573.857836zM393.244804 719.426213c-13.827937 3.431146-27.826765-4.967128-31.268144-18.764366l-132.190695-529.828041c-3.440355-13.796214 4.977361-27.760251 18.807345-31.193443 13.826913-3.433192 27.824719 4.968152 31.268144 18.763342l132.187625 529.829064C415.493527 702.028984 407.073764 715.995067 393.244804 719.426213L393.244804 719.426213zM433.491437 854.125031c-28.42233 0-51.464115-23.039739-51.464115-51.461045 0-28.423353 23.042809-51.466162 51.464115-51.466162 28.424376 0 51.464115 23.042809 51.464115 51.466162C484.956575 831.085292 461.915813 854.125031 433.491437 854.125031L433.491437 854.125031zM748.714771 854.125031c-28.423353 0-51.464115-23.039739-51.464115-51.461045 0-28.423353 23.040762-51.466162 51.464115-51.466162 28.420283 0 51.463092 23.042809 51.463092 51.466162C800.177863 831.085292 777.135054 854.125031 748.714771 854.125031L748.714771 854.125031z'
        },
        shoppingCartGetReady: function (ele) {
            var shoppingWord = ele.find('.zm-component-function-shopping-cartWord');
            var cartNum = ele.find('.zm-component-function-shopping-num');
            var cartBtn = ele.find('.zm-component-function-shopping-cartBtn');
            var numLeft = parseInt(cartNum.width()) + parseInt(shoppingWord.width());
            if (!cartNum.hasClass('cartTop')) {
                ele.width(numLeft + parseInt(cartBtn.width()));
            }
            ele.on('mouseenter mouseleave', function (eve) {
                if (eve.type == 'mouseenter') {
                    if (shoppingWord.attr('data-type-hovercolor')) {
                        shoppingWord.attr('fontColor', shoppingWord.css('color'))
                            .css('color', shoppingWord.attr('data-type-hovercolor'))
                    }
                } else if (eve.type == 'mouseleave') {
                    if (shoppingWord.attr('fontColor')) {
                        shoppingWord.css({'color': shoppingWord.attr('fontColor')})
                    }
                }
            })
        },
        shoppingCartStyle: function (ele) {
            var cartPath = zmEditor.component.function.shoppingMethod.shoppingCartPath;
            var e = $('<div class="zm-edit-function-shopping-slider" style="padding: 10px 7px;">'
                + '<span>展现方式</span>'
                + '<div class="zm-edit-shopping-cutStyle">'
                + '<div class="zm-edit-shopping-cutBtn fa fa-angle-double-left fa-3x" ' +
                'style="border-top-left-radius:3px;border-bottom-left-radius: 3px "></div>'
                + '<ul class="zm-edit-shopping-cutStyleList clearFloat">'
                + '<li data-type="hollow"><svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">'
                + '<path d="' + cartPath.hollow + '"></path></svg></li>'
                + '<li data-type="block"><svg viewBox="0 0 1243 1024" xmlns="http://www.w3.org/2000/svg">'
                + '<path d="' + cartPath.block + '"></path></svg></li>'
                + '<li data-type="plus"><svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">'
                + '<path d="' + cartPath.plus + '"></path></svg></li>'
                + '<li data-type="net" class="itsChecked">'
                + '<svg viewBox="100 120 850 800" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">'
                + '<path d="' + cartPath.net + '" style="transform: scaleY(.65) translateY(42%);"></path></svg></li></ul>'
                + '<div class="zm-edit-shopping-cutBtn fa fa-angle-double-right fa-3x" ' +
                'style="right: 0;border-top-right-radius:3px;border-bottom-right-radius: 3px "></div>'
                + '</div></div>');
            var ulMarginLeft = e.find("ul").css('margin-left');
            e.find('.zm-edit-shopping-cutBtn').on('click', function () {
                var _this = $(this);
                if (_this.attr("class").indexOf('right') > 0) {
                    ulMarginLeft -= 80;
                    ulMarginLeft = ulMarginLeft < -50 ? -50 : ulMarginLeft;
                } else {
                    ulMarginLeft += 80;
                    ulMarginLeft = ulMarginLeft > 30 ? 30 : ulMarginLeft;
                }
                e.find("ul").animate({'margin-left': ulMarginLeft + "px"}, 150)
            });
            var elePath = ele.find('path').attr('d');
            var eleLi = e.find('li'), len = eleLi.length;
            eleLi.removeClass('itsChecked');
            for (var i = 0; i < len; i++) {
                if (eleLi.eq(i).find('path').attr('d') == elePath) {
                    eleLi.eq(i).addClass('itsChecked')
                }
            }
            e.find('li').zmActionOn('click', function () {
                e.find('li').removeClass('itsChecked');
                var _this = $(this), _thisPath = _this.find('svg path');
                var style = _thisPath.attr('style') ? _thisPath.attr('style') : '';
                _this.addClass('itsChecked');
                var _thisViewBox = _this[0].getElementsByTagName('svg')[0].getAttribute('viewBox');
                ele[0].getElementsByTagName('svg')[0].setAttribute('viewBox', _thisViewBox);
                ele.find('path').attr({'d': _thisPath.attr('d')});
            });
            return e
        },
        shoppingCartWord: function (ele) {
            var iSelected = zmEditor.component.nowEdit(), iSelectedW = parseInt(iSelected.width());
            var cartNum = iSelected.find('.zm-component-function-shopping-num');
            var cartBtn = iSelected.find('.zm-component-function-shopping-cartBtn');
            var e = $('<div class="zm-edit-shopping-setCartWord" style="line-height: 61px">'
                + '<span>购物车文字</span>'
                + '<input type="text" placeholder="' + ele.html() + '" style="padding: 0 5px;margin-left: 10px;border-radius: 5px">'
                + '</div>');
            var origWidth = parseInt(ele.width());
            e.find('input').on('input', function () {
                ele.html($(this).val());
                if (!cartNum.hasClass('cartTop')) {
                    cartNum.css('left', ((parseInt(ele.width()) + parseInt(cartBtn.width())) - 2) + 'px')
                }
                iSelected.width(iSelectedW + parseInt(ele.width()) - origWidth)
            });
            return e
        },
        shoppingCartNum: function (ele) {
            var e = $('<div class="zm-edit-shopping-cartNum clearFloat" style="padding: 10px 7px;">'
                + '<span>数量显示方式</span>'
                + '<div class="zm-edit-shopping-cartNumStyle">'
                + '<span class="zm-edit-function-choicePoint choose" style="margin-left: 30px;"></span>'
                + '<span class="redBgWhiteCol shoppingNum">0</span>'
                + '<span style="font-size: 12px;">图标</span>'
                + '<span class="zm-edit-function-choicePoint"></span>'
                + '<span class="noBgBlueCol shoppingNum">0</span>'
                + '<span style="font-size: 12px;">数字</span>'
                + '</div></div>');
            var choiceBtn = e.find('.zm-edit-function-choicePoint');
            choiceBtn.removeClass('choose');
            if (ele.hasClass('noBgBlueCol'))
                e.find('div span').eq(3).addClass('choose');
            if (ele.hasClass('redBgWhiteCol'))
                e.find('div span').eq(0).addClass('choose');

            choiceBtn.zmActionOn('click', function () {
                e.find('.zm-edit-function-choicePoint').removeClass('choose');
                var _this = $(this);
                _this.addClass('choose');
                if (_this.index() == '0') {
                    ele.removeClass('redBgWhiteCol noBgBlueCol').addClass('redBgWhiteCol')
                }
                if (_this.index() == '3') {
                    ele.removeClass('redBgWhiteCol noBgBlueCol').addClass('noBgBlueCol')
                }
            });
            return e
        },
        shoppingCartLayOut: function (ele) {
            var cartPath = zmEditor.component.function.shoppingMethod.shoppingCartPath.net;
            var tempStr = function (style, type) {
                return '<li class="zm-component-function-shopping-main">'
                    + '<div class="zm-component-function-content">'
                    + '<div class="zm-component-function-shopping-cartBtn">'
                    + '<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">'
                    + '<path d="' + cartPath + '"></path></svg></div>'
                    + '<div class="zm-component-function-shopping-num redBgWhiteCol" style="' + style + '">0</div>'
                    + '<div class="zm-component-function-shopping-cartWord">购物车</div></div>'
                    + '<span class="zm-edit-function-choicePoint" data-type="' + type + '"></span></li>'
            };
            var e = $('<div class="zm-edit-shopping-cartLayout" style="padding: 10px 7px">'
                + '<span>排版布局</span><ul class="clearFloat">'
                + tempStr("left:10px;top:2px;", 'cartTop')
                + tempStr("right: 5px;top: 10px;", 'cartTopRight')
                + tempStr("right: 2px;bottom: 2px;", 'cartRight')
                + '</ul></div>');
            var chooseBtn = e.find('li .zm-edit-function-choicePoint');
            var numPos = ele.find('.zm-component-function-shopping-num');
            var cartBtn = ele.find('.zm-component-function-shopping-cartBtn');
            var cartWord = ele.find('.zm-component-function-shopping-cartWord');
            var finalH = parseInt(cartBtn.width());
            var cartNumH = parseInt(numPos.height());
            if (numPos.hasClass('cartTop')) {
                chooseBtn.eq(0).addClass('choose')
            }
            if (numPos.hasClass('cartTopRight')) {
                chooseBtn.eq(1).addClass('choose')
            }
            if (numPos.hasClass('cartRight')) {
                chooseBtn.eq(2).addClass('choose')
            }
            chooseBtn.zmActionOn('click', function () {
                e.find('.zm-edit-function-choicePoint').removeClass('choose');
                numPos.removeClass('cartTop cartTopRight cartRight');
                var _this = $(this);
                _this.addClass('choose');
                numPos.addClass(_this.attr('data-type'));
                cartWord.css({'left': finalH});
                switch (_this.attr('data-type')){
                    case "cartTop":
                        var diffH = finalH + cartNumH;
                        numPos.css({'left': finalH / 2 - parseInt(numPos.height()) / 2 + 2,
                            'bottom':diffH>parseInt(ele.height())?(finalH - cartNumH/2):finalH});
                        break;
                    case "cartTopRight":
                        numPos.css({'left': parseInt(cartWord.width()) + finalH, 'bottom': finalH / 2});
                        break;
                    case "cartRight":
                        numPos.css({'left': parseInt(cartWord.width()) + finalH, 'bottom': '4%'});
                        break;
                    default:
                        break
                }

                return false
            });
            return e
        },
        setShoppingCartStyle: function (ele) {
            var nowEdit = zmEditor.component.nowEdit(), _this = ele,
                content = _this.find('.zm-component-function-content'),
                theNum = content.find('.zm-component-function-shopping-num'),
                nowCont = nowEdit.find('.zm-component-function-content'),
                nowBtn = nowEdit.find('.zm-component-function-shopping-cartBtn'),
                finalH = parseInt(nowBtn.width()),
                nowNum = nowEdit.find('.zm-component-function-shopping-num');
            nowCont[0].className = content[0].className;
            nowNum[0].className = theNum[0].className;
            nowCont.find('svg').html(content.find('svg').html());
            zmEditor.component.function.shoppingMethod.setCartNumPos(nowEdit, finalH);
        },
        resizeShoppingCart: function (ele, w, h) {
            var cartCont = ele.find('.zm-component-function-content');
            var cartNum = cartCont.find('.zm-component-function-shopping-num');
            var cartBtn = cartCont.find('.zm-component-function-shopping-cartBtn');
            var cartWord = cartCont.find('.zm-component-function-shopping-cartWord');
            if (h) {
                var finalH = h - parseInt(cartNum.height()) * 3 / 4 - 1;
                cartBtn.css({'width': finalH, 'height': finalH});
                zmEditor.component.function.shoppingMethod.setCartNumPos(ele, finalH)
            }
        },
        setCartNumPos: function (ele, h) {
            var cartCont = ele.find('.zm-component-function-content');
            var cartNum = cartCont.find('.zm-component-function-shopping-num');
            var cartBtn = cartCont.find('.zm-component-function-shopping-cartBtn');
            var cartWord = cartCont.find('.zm-component-function-shopping-cartWord');
            var finalH = h ? h : parseInt(cartBtn.width());
            var cartNumH = parseInt(cartNum.height());
            cartWord.css({'left': finalH});
            if (cartNum.hasClass('cartTop')) {
                var diffH = finalH + cartNumH;
                cartNum.css({'left': finalH / 2 - parseInt(cartNum.height()) / 2 + 2,
                    'bottom':diffH>parseInt(ele.height())?(finalH - cartNumH/2):finalH});
            }
            if (cartNum.hasClass('cartTopRight')) {
                cartNum.css({'left': parseInt(cartWord.width()) + finalH, 'bottom': finalH / 2});
            }
            if (cartNum.hasClass('cartRight')) {
                cartNum.css({'left': parseInt(cartWord.width()) + finalH, 'bottom': '4%'})
            }
            ele.width(finalH + parseInt(cartWord.width()) + parseInt(cartNum.width()));
        }
    },
    registrationMethod:{
        sundryGetReady:function (ele,type) {
            switch(type){
                case "text":
                    zmEditor.component.onlyResizeWidth(ele.closest('.zm-component-box2'));
                    break;
                case "btn":
                    break;
                case "shape":
                    break;
                case "img":
                    break;
            }
        },
        resizeRegistration:function (ele,type,w,h) {

        }
    },
    fileMethod: {
        fileGetReady: function (ele) {
            var imgBox = ele.find('.zm-component-file-imgBox'), img = ele.find('img'),
                fileName = ele.find('.zm-component-file-fileName');
            var totalH = parseInt(img.height()) + parseInt(fileName.css('font-size')) + 20;
            var imgScale = parseInt(img.width()) / parseInt(img.height());
            ele.css({'width': '100px', 'padding': '5px', 'height': totalH});
            imgBox.css({
                'height': 100 * parseInt(img.height()) / (parseInt(ele.height())) + '%',
                'max-height': parseInt(img.css('width')) / imgScale
            });
            img.attr('data-scale', imgScale).css({
                // 'width':100*parseInt(img.width())/parseInt(ele.width())+'%',
                'height': '100%',
                // 'min-height': parseInt(img.css('min-width')) / imgScale,
                'min-height':'20px',
                'max-height': parseInt(img.css('max-width')) / imgScale
            });
            fileName.html(img.attr('title') == '' ? img.attr('src') : img.attr('title'))
        },
        setFileStyle: function (ele) {
            var _this = ele, nowEle = zmEditor.component.nowEdit();
            var _thisImg = _this.find('img'), nowImg = nowEle.find('img');
            var _thisName = _this.find('.zm-component-file-fileName'),
                nowName = nowEle.find('.zm-component-file-fileName');
            var tempImg = new Image();
            tempImg.src = _thisImg.attr('src');
            var tempH = tempImg.height;
            nowImg.attr({'src': _thisImg.attr('src'), 'title': _thisImg.attr('title')});
            nowName.html(_thisName.html());
            nowImg.parent().height(100 * tempH / parseInt(nowEle.height()) + "%");
            var nameH = parseInt(nowName.css('font-size')) + 20;
            var totalH = parseInt(nowImg.parent().height()) + nameH;
            nowEle.height(totalH);
        },
        resizeFile: function (ele, w,h) {
            var img = ele.find('img'), name = ele.find('.zm-component-file-fileName');
            var imgBox = img.parent();
            var scale = img.attr('data-scale');
            var nameH = parseInt(name.css('font-size')) + 20;
            var minH =  parseInt(img.css('minHeight')) + nameH;
            var totalH = parseInt(imgBox.height()) + nameH;
            if(w){
                if ( w < 101) {
                    img.css({
                        'width': 100 * parseInt(img.width()) / parseInt(ele.width()) + '%',
                        'height': 'auto'
                    });
                    imgBox.height(img.height());
                    ele.height(totalH);
                } else {
                    img.css({
                        'width': 'auto',
                        'height': '100%'
                    });
                    imgBox.height(100*parseInt(img.height())/totalH + '%');
                }
            }
            if(h){
                ele.height( h < minH ? minH : h )
            }
        },
        changeFile: function (ele) {
            var fileName = ele.find('.zm-component-file-fileName');
            var e = $('<div class="zm-edit-file-changeFile" style="padding: 10px 7px">'
                + '<div class="zm-edit-file-changeFileBtn">更换文件</div>'
                + '<div class="zm-edit-file-fName">文件名：' + fileName.html() + '</div>'
                + '</div>');
            var changeFileBtn = e.find('.zm-edit-file-changeFileBtn');
            changeFileBtn.on('click', function () {
                //待添加选择文件功能
            });
            return e
        },
        namedFile: function (ele) {
            var e = $('<div class="zm-edit-file-showFileName" style="padding: 10px 7px;position: relative">'
                + '<div class="zm-edit-file-isShowName">'
                + '<span>显示文件名</span>'
                + '<label class="zm-switch-box zm-switch-box-on" style="margin-left: 20px"><span class="zm-switch"><span class="fa fa-check"></span></span></label>'
                + '</div>'
                + '<input type="text" class="zm-edit-file-namingFile" placeholder="' + ele.html() + '">'
                + '<div class="zm-edit-file-fileNameShadow"></div>'
                + '</div>');
            var theKey = e.find('.zm-edit-file-fileNameShadow');
            var nowEdit = ele.closest('.zm-component-function-file-main');
            var fileImg = nowEdit.find('.zm-component-file-imgBox');
            var imgH = parseInt(fileImg.height());
            var totalH = parseInt(nowEdit.height());
            var scale = imgH / totalH;
            e.find('label').zmActionOn('click', function () {
                ele.toggle();
                theKey.toggle();
                if (ele.css('display') == 'none') {
                    nowEdit.height(totalH - parseInt(ele.height()));
                    fileImg.height('100%');
                } else {
                    nowEdit.height(imgH + parseInt(ele.height()) + 10);
                    fileImg.height(100 * scale + '%');
                }
            });
            e.find('input').on('input', function () {
                ele.html($(this).val())
            }).on('blur', function () {
                if ($(this).val() == '') {
                    ele.html(fileImg.find('img').attr('src'))
                }
            });
            return e
        }
    },
    shareMethod:{
        shareToIcon: {
            weixin: '<svg viewBox = "0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">'
            + '<path d="M668.416 389.504c11.52 0 20.224 0 31.808 2.944-28.928-133.76-167.936-229.76-330.112-229.76C190.528 162.688 42.816 284.8 42.816 441.792c0 90.176 49.28 165.76 130.304 220.992l-31.808 98.88 112.896-58.112c40.576 8.704 72.448 17.408 115.84 17.408h31.872a271.104 271.104 0 0 1-8.64-69.76C390.336 505.792 512 389.504 668.416 389.504z m-176.64-90.176c25.984 0 40.512 17.472 40.512 40.704a39.68 39.68 0 0 1-40.576 40.704c-23.168 0-49.28-17.408-49.28-40.704 0-23.232 26.112-40.704 49.28-40.704zM262.848 380.8c-23.168 0-49.28-17.408-49.28-40.704 0-26.176 26.112-40.704 49.28-40.704a39.68 39.68 0 0 1 40.576 40.704c0 26.24-14.528 40.704-40.576 40.704z"></path>'
            + '<path d="M966.72 645.376c0-130.816-130.368-238.464-278.08-238.464-156.352 0-278.016 107.648-278.016 238.464 0 130.88 121.6 238.4 278.016 238.4 31.872 0 66.624-8.704 98.496-17.408l89.792 49.408-23.168-81.408c63.68-49.472 112.96-116.288 112.96-188.992z m-367.808-40.704c-17.408 0-31.872-17.472-31.872-32 0-17.472 17.344-32 31.872-32 26.048 0 40.512 17.472 40.512 32 0 14.528-17.344 32-40.512 32z m179.52 0c-17.344 0-31.872-17.472-31.872-32 0-17.472 17.408-32 31.872-32 23.168 0 40.576 17.472 40.576 32 0 14.528-14.528 32-40.576 32z"></path>'
            + '</svg>',
            sina: '<svg viewbox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">'
            + '<path d="M757.12 491.776c-40.32-6.336-21.76-28.48-21.76-28.48s37.312-63.168-6.144-110.592c-55.872-56.96-195.52 6.336-195.52 6.336-52.736 15.808-40.32-6.336-30.976-50.56 0-50.56-15.552-132.8-158.272-82.176-142.72 50.56-263.744 221.184-263.744 221.184C-3.2 561.28 6.208 649.792 6.208 649.792c21.76 195.968 226.56 249.728 384.768 262.336 167.552 12.608 394.112-60.032 462.336-205.44 68.288-148.544-55.808-205.44-96.192-214.912z m-353.728 366.592C235.84 867.84 102.4 782.528 102.4 668.8s133.44-202.24 300.992-211.712c167.552-6.336 300.992 63.232 300.992 173.824 0 113.728-133.44 221.248-300.992 227.52z"></path>'
            + '<path d="M369.28 532.864c-167.616 18.944-148.992 180.096-148.992 180.096s-3.072 50.56 43.52 75.904c96.128 53.76 198.528 22.08 248.192-44.288 55.872-69.504 24.832-230.72-142.72-211.712z m-40.32 224.384c-31.04 3.2-55.872-15.808-55.872-41.088s21.76-53.76 52.736-56.896c37.248-3.2 58.944 18.944 58.944 44.288 0 25.28-24.832 47.36-55.872 53.696z m99.2-85.312c-9.28 9.472-24.768 6.272-27.84-3.2-6.208-9.472-3.136-25.216 6.144-31.616 12.416-9.408 24.832-6.272 31.04 3.2 3.136 6.272 0 22.08-9.28 31.616zM837.76 422.208a29.888 29.888 0 0 0 27.968-22.08v-3.2c21.76-186.432-148.928-154.88-148.928-154.88a28.096 28.096 0 0 0-27.904 28.48c0 15.808 12.416 28.416 27.904 28.416 124.16-28.416 96.192 98.048 96.192 98.048-3.136 12.608 9.28 25.216 24.832 25.216z"></path>'
            + '<path d="M819.2 96.64c-58.944-12.608-121.024-3.136-136.512 0 0 0-3.136 0-3.136 3.2-15.488 6.4-27.904 22.144-27.904 37.952 0 22.144 18.56 41.088 40.32 41.088 0 0 21.76-3.2 37.248-9.472 15.488-6.336 136.512-3.2 198.592 97.984 34.112 75.84 15.488 126.4 12.416 135.872 0 0-9.344 18.944-9.344 37.952 0 22.08 18.624 37.888 40.32 37.888 18.688 0 34.176-3.136 37.312-34.752 62.08-218.048-83.84-322.368-189.312-347.648z"></path>'
            + '</svg>',
            tencent: '<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">'
            + '<path d="M767.500115 383.675356c-70.64906 0-127.921461-57.272401-127.921461-127.921461s57.272401-127.921461 127.921461-127.921461 127.921461 57.272401 127.921461 127.921461c0 17.662265 14.3181 31.980365 31.980365 31.980365 17.662265-0.001023 31.980365-14.3181 31.980365-31.980365 0-105.97359-85.908602-191.882192-191.882192-191.882192s-191.882192 85.908602-191.882192 191.882192 85.908602 191.882192 191.882192 191.882192c17.662265 0 31.980365-14.3181 31.980365-31.980365S785.16238 383.675356 767.500115 383.675356zM447.697485 447.635063c0-70.64906-57.272401-127.921461-127.921461-127.921461s-127.921461 57.272401-127.921461 127.921461c0 27.438932 8.642844 52.856835 23.348778 73.688279-43.234687 74.680886-86.86437 199.886493-87.188758 401.99663-0.170892 1.341554-0.26913 2.706645-0.26913 4.094248 0 17.703197 14.351869 32.055067 32.055067 32.055067s32.055067-14.351869 32.055067-32.055067c0-0.61603-0.021489-1.226944-0.056282-1.834788l0.164752 0c0-189.025121 40.414455-277.778514 74.317613-347.252819 1.998517-4.096295 3.999081-8.052396 5.993504-11.887748 14.686491 5.878894 30.714536 9.117658 47.50085 9.117658C390.425084 575.556525 447.697485 518.284123 447.697485 447.635063zM319.776024 191.793164c-141.29812 0-255.842922 114.544803-255.842922 255.842922 0 22.086018 2.798742 43.517119 8.060583 63.960731l0.806365 2.40477c3.816932 12.428054 15.900132 30.045293 33.562397 30.045293s31.980365-14.3181 31.980365-31.980365c0-0.157589-0.00921-0.313132-0.01228-0.469698l-0.065492-1.64343c-0.327458-5.006014-1.805112-9.694803-4.174066-13.81054-4.040013-15.493879-6.198166-31.747051-6.198166-48.50676 0-105.97359 85.908602-191.882192 191.882192-191.882192S511.657192 341.662497 511.657192 447.636087 425.74859 639.518279 319.775001 639.518279c-17.662265 0-31.980365 14.3181-31.980365 31.980365s14.3181 31.980365 31.980365 31.980365c141.29812 0 255.842922-114.544803 255.842922-255.842922S461.074144 191.793164 319.776024 191.793164zM938.805666 385.65136c-14.567787-7.402597-78.473259-42.037419-116.228141-97.386004 5.636371-9.528004 8.883321-20.638039 8.883321-32.511461 0-35.32453-28.636201-63.960731-63.960731-63.960731s-63.960731 28.636201-63.960731 63.960731c0 35.062564 28.216645 63.520709 63.179948 63.941288 49.148373 75.270311 132.333958 117.804033 146.288784 124.563994 0.286526 0.143263 0.575098 0.282433 0.865717 0.416486 0.457418 0.217964 0.793062 0.375553 0.979304 0.461511l0.007163-0.016373c3.832282 1.61887 8.04421 2.514263 12.465916 2.514263 17.703197 0 32.055067-14.351869 32.055067-32.055067C959.382307 401.922952 950.8377 390.268518 938.805666 385.65136z"></path>'
            + '</svg>',
            renren: '<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">'
            + '<path d="M313.472 346.368v12.928c20.864 133.248 73.152 227.84 173.44 283.648a289.536 289.536 0 0 1-27.136-120.32c0-55.872 14.592-109.632 43.84-152.64 27.2 43.008 43.904 94.592 43.904 152.64 0 49.472-12.544 94.592-33.472 135.36 2.112 0 0 2.176 0 2.176 114.944-66.624 156.8-165.504 177.664-298.752V245.376c-83.584 8.576-148.352 55.872-190.144 124.608-41.792-66.56-104.512-111.744-181.824-122.432-4.16 14.976-6.272 92.352-6.272 98.816zM794.112 339.904v17.216c0 139.712 62.72 236.416 175.552 290.176 18.816-38.72 33.408-81.728 33.408-126.848 0-137.536-104.448-249.28-208.96-275.072V339.84zM229.888 363.52V245.44C104.448 269.056 14.592 382.912 14.592 520.448c0 51.648 12.544 100.992 35.584 141.824 119.04-66.56 179.712-165.44 179.712-298.688zM282.112 513.984c-35.52 88.192-98.24 161.216-181.76 212.8 48 45.12 110.72 75.2 179.648 75.2a249.792 249.792 0 0 0 175.552-70.912c-79.36-49.408-133.76-122.496-173.44-217.088zM735.616 507.52c-39.68 92.48-100.288 165.504-190.208 221.44 46.016 45.12 108.672 70.912 177.664 70.912 71.04 0 133.76-30.08 181.76-77.376-75.2-49.472-133.76-122.496-169.216-214.912z"></path>'
            + '</svg>',
            kaixin: '<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">'
            + '<path d="M912.975882 556.558845c146.186454-157.676136-55.020104-157.676136-55.020104-158.087505-180.266643 0-157.684322-34.08019-161.789826-78.840626-3.698229-39.830147-18.476817-146.593729-18.476817-146.593729C655.100674 26.851555 553.679773 60.524468 553.679773 60.524468 486.332922 72.019267 384.912022 173.447331 362.323561 207.117175c-33.666774 33.672914-44.75839 33.672914-112.512517 0C58.460971 94.605681 69.545424 229.703589 69.545424 229.703589c0 157.680229 78.844719 259.104199 112.511493 304.276005-39.415708 48.447409-33.666774 281.696754-33.666774 281.696754 5.335519 170.81948 157.677159 78.83244 157.677159 78.83244l124.010385-90.329285 122.369002 112.511493c181.908026 142.066623 167.538761-33.680077 167.538761-33.680077 0-78.831416 0-213.939557 0-213.939557C823.462173 646.902456 912.975882 556.558845 912.975882 556.558845zM238.726591 488.807788c-11.084453 0-33.672914-22.581298-33.672914-45.168736 0-22.581298 22.588461-33.669844 33.672914-33.669844 22.582321 0 33.673937 11.497868 33.673937 33.669844C272.400528 466.225467 261.308913 488.807788 238.726591 488.807788zM283.898397 477.723336c0 0 0 304.273958 315.360458 124.013455C261.308913 860.84099 283.898397 511.394203 283.898397 477.723336zM621.4339 409.969209c0 0-11.496845 112.512517-67.754127 157.686369-90.336448 56.250118-101.42704-67.760267-101.42704-67.760267s-146.18543 78.844719-112.512517-101.424994c0 0 22.99676-92.3892 78.838579-112.511493 68.575842-30.388101 90.342588 22.582321 90.342588 56.256258C508.922407 342.215082 632.925628 263.373433 621.4339 409.969209zM678.097434 635.403564c-22.581298 0-45.171806-22.581298-45.171806-45.164642s22.589484-45.171806 45.171806-45.171806c11.084453 0 33.673937 22.588461 33.673937 45.171806S689.181887 635.403564 678.097434 635.403564zM464.16504 319.629691c-22.588461-6.160303-34.087353 22.585391-45.171806 45.171806-11.497868 34.08019-11.906168 63.23623 11.084453 67.750033 11.498892 0 34.087353-22.582321 45.171806-45.168736C486.332922 353.713974 478.534306 328.253092 464.16504 319.629691zM576.66937 376.296295c-11.083429 0-22.581298 11.087523-33.665751 33.673937-11.497868 22.582321-2.87856 51.739385 11.084453 56.256258 12.726859 1.642406 22.581298-11.087523 33.672914-33.673937C599.258854 409.969209 599.258854 376.296295 576.66937 376.296295z"></path>'
            + '</svg>',
            baidu: '<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">'
            + '<path d="M224.576 532.48c95.552-20.48 81.92-136.576 81.92-160.448-3.392-37.568-51.2-105.792-112.64-102.4C115.328 276.48 105.088 389.12 105.088 389.12c-13.632 54.592 23.936 163.84 119.488 143.36z m102.4 201.344c-3.392 6.848-10.24 27.392-3.392 47.808 10.24 40.96 44.352 40.96 44.352 40.96h51.2v-122.88h-54.592c-23.936 6.848-34.176 27.328-37.568 34.112z m78.528-392.512c54.592 0 95.552-61.44 95.552-136.512 0-75.136-44.352-136.576-95.552-136.576-54.656 0-95.616 61.44-95.616 136.576-3.392 75.072 40.96 136.512 95.616 136.512z m228.672 6.848c71.68 10.24 116.032-68.288 126.272-122.88 10.24-58.048-37.504-122.88-88.704-136.576-51.2-10.24-112.64 68.288-119.488 122.88-6.848 64.896 10.24 129.728 81.92 136.576z m174.08 341.312S699.008 604.16 634.24 512c-88.768-136.576-211.648-81.92-252.608-10.24C340.608 569.984 275.84 614.4 265.6 624.64c-10.24 10.24-133.12 78.464-105.792 201.344 27.264 122.88 122.88 119.488 122.88 119.488s71.68 6.848 153.6-10.24c81.92-17.088 153.6 3.392 153.6 3.392s194.56 64.896 245.76-61.44c54.592-122.88-27.328-187.712-27.328-187.712z m-331.072 184.32H350.848c-54.592-10.24-75.072-47.808-78.464-54.592-3.456-6.848-17.088-37.568-10.24-85.376 23.872-75.072 88.704-81.92 88.704-81.92H419.2v-81.92h58.048v303.808z m235.52 0h-143.36c-54.656-13.632-58.048-54.592-58.048-54.592v-160.448h58.048v143.36c3.392 13.632 23.872 17.088 23.872 17.088h58.048v-160.448h61.44v215.04z m204.8-426.688c0-27.264-23.936-109.184-109.248-109.184-85.312 0-95.552 78.464-95.552 133.12 0 51.2 3.392 126.272 109.184 122.88 105.856-3.392 95.616-119.488 95.616-146.816z"></path>'
            + '</svg>',
            qqzone: '<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">'
            + '<path d="M989.888 399.552c0-9.664 0-6.4-9.984-6.4h-285.44l-43.072-74.304L535.232 102.4h-19.904l-106.24 216.448-43.136 74.24H34.112v3.264l59.776 41.984 165.888 145.408-36.48 329.472c0 9.664 3.328 9.664 23.232 9.664l275.392-164.736 275.456 164.736c9.984 0 9.984 0 19.904-9.664l-53.12-329.472 159.36-132.48 66.368-51.712z m-692.096 326.4L600.96 479.808l-283.392-49.28h431.744l-263.68 236.352 273.536 59.072h-461.44z"></path>'
            + '</svg>',
            douban: '<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">'
            + '<path d="M132.736 120.64h761.6v84.928h-761.6zM827.52 630.336V293.568H199.488v336.768h628.032zM290.56 381.504h448.96v163.84H290.56v-163.84zM691.008 824.512c27.328-42.496 54.592-91.072 75.84-145.664l-91.008-33.344a1224.32 1224.32 0 0 1-81.92 179.008H436.16c-27.328-69.76-57.664-130.496-91.008-179.008l-84.992 33.344c33.408 51.584 63.744 100.16 84.992 145.664h-233.6v84.928h803.968v-84.928h-224.512z"></path>'
            + '</svg>'
        },
        shareIconsHtml:function () {
            var iconPath = zmEditor.component.function.shareMethod.shareToIcon;
            return  $('<div class="zm-component-share-iconBox" style="display: none">'
                +'<div class="zm-edit-share-reserveAngle"></div>'
                +'<ul class="zm-component-share-iconList clearFloat">'
                +'<li class="weinxinIco" title="微信">'+ iconPath.weixin +'</li>'
                +'<li class="sinaIco" title="新浪微博">'+ iconPath.sina +'</li>'
                +'<li class="tencentIco" title="腾讯微博">'+ iconPath.tencent +'</li>'
                +'<li class="renrenIco" title="人人网">'+ iconPath.renren +'</li>'
                +'<li class="kaixinIco" title="开心网">'+ iconPath.kaixin +'</li>'
                +'<li class="baiduIco" title="百度贴吧">'+ iconPath.baidu +'</li>'
                +'<li class="qqzoneIco" title="QQ空间">'+ iconPath.qqzone +'</li>'
                +'<li class="doubanIco" title="豆瓣网">'+ iconPath.douban +'</li>'
                +'</ul></div>')
        },
        shareGetReady:function (ele) {
            var svgCont = ele.find('.zm-component-function-content');
            var icoList = zmEditor.component.function.shareMethod.shareIconsHtml();
            ele.append($('<div class="zm-component-share-shareTitle">分享到</div>')).append(icoList);
            ele.addClass('clearFloat').css({'width':'auto','height':'auto'});
            svgCont.on('click',function () {
                icoList.fadeIn(150)
            });
            $(document).on('mousedown',function (e) {
                if($(e.target).not(svgCont)){
                    icoList.fadeOut(150)
                }
            });
            svgCont.find('svg').on('mouseover',function () {
                var _this = $(this);
                if( _this.attr('data-type-hoverFill')){
                    _this.attr('data-oldColor', _this.css('fill')).css('fill', _this.attr('data-type-hoverFill'));
                }
            }).on('mouseout',function () {
                var _this = $(this);
                if( _this.attr('data-oldColor')){
                    _this.css('fill', _this.attr('data-oldColor'))
                }
            })
        },
        resizeShare:function (ele, w,h) {
            var svgTitle = ele.find('.zm-component-share-shareTitle'),
                svgCont = ele.find('.zm-component-function-content');
            if(h){
                svgCont.height(h).width(h);
            }
            if(w&&w<parseInt(svgTitle.width())+parseInt(svgCont.width())+10){
            }
        },
        namedShare:function (ele) {
            var e = $('<div style="padding: 15px 7px">'
                + '<span>标题文字</span>'
                + '<input type="text" style="width: 208px;margin-left: 20px;border-radius: 3px" '
                + 'placeholder="' + ele.html() + '"></div>');
            e.find('input').on('input',function () {
                ele.text($(this).val()).css({'width':'auto'});
            });
            return e
        },
        shareBtnSet:function (ele) {
            var dataArr = zmEditor.arr.componentsList.function[4].list,liStr = '';
            dataArr.forEach(function (e) {
                liStr += '<li class="zm-edit-share-shareIcon">'+ $(e.fContext).find('svg').prop("outerHTML") +'</li>'
            });
            var e = $('<div class="zm-edit-share-setBtn" style="padding: 15px 7px">'
                + '<span>分享图标</span>'
                + '<div class="zm-edit-share-cutStyle">'
                + '<div class="fa fa-angle-double-left fa-2x"></div>'
                + '<ul style="margin-left: 20px" class="clearFloat">'+ liStr +'</ul>'
                + '<div class="fa fa-angle-double-right fa-2x" style="right: 0;"></div>'
                + '</div></div>');
            var btnLi = e.find('li'),len = btnLi.length;
            for(var i = 0;i<len;i++){
                if(btnLi.eq(i).find('path').attr('d') == ele.find('path').attr('d')){
                    btnLi.eq(i).addClass('checked')
                }
            }
            var ulMarginLeft = parseInt(e.find("ul").css('margin-left'));
            e.find('.fa').on('click',function () {
                var _this = $(this);
                if (_this.attr("class").indexOf('right') > 0) {
                    ulMarginLeft -= 61;
                    ulMarginLeft = ulMarginLeft < -285 ? -285 : ulMarginLeft;
                } else {
                    ulMarginLeft += 61;
                    ulMarginLeft = ulMarginLeft > 20 ? 20 : ulMarginLeft;
                }
                e.find("ul").animate({'margin-left': ulMarginLeft + "px"}, 150)
            });
            e.find('li').zmActionOn('click',function () {
                e.find('li').removeClass('checked');
                var _this = $(this), _thisPath = _this.find('svg path');
                _this.addClass('checked');
                var _thisViewBox = _this[0].getElementsByTagName('svg')[0].getAttribute('viewBox');
                ele[0].setAttribute('viewBox', _thisViewBox);
                ele.find('path').attr({'d': _thisPath.attr('d')});
            });
            return e
        },
        shareOption:function (ele) {
            var e  = $('<div style="padding: 15px 7px">'
                +'<span>分享选项<span class="atLeast" style="display: none">(至少保留一项)</span></span>'
                +'<div class="zm-edit-share-optionList" style="margin-top: 5px">'
                +'<ul class="clearFloat">'
                +'<li><span class="fa fa-check"></span><i>微信</i></li>'
                +'<li><span class="fa fa-check"></span><i>新浪微博</i></li>'
                +'<li><span class="fa fa-check"></span><i>腾讯微博</i></li>'
                +'<li><span class="fa fa-check"></span><i>人人网</i></li>'
                +'<li><span class="fa fa-check"></span><i>开心网</i></li>'
                +'<li><span class="fa fa-check"></span><i>百度贴吧</i></li>'
                +'<li><span class="fa fa-check"></span><i>QQ空间</i></li>'
                +'<li><span class="fa fa-check"></span><i>豆瓣网</i></li>'
                +'</ul></div>'
                +'</div>');
            var icoList = ele.find('.zm-component-share-iconBox'),
                listWidth = parseInt(icoList.width()),
                icoLi = icoList.find('li'),
                liWidth = parseInt(icoLi.outerWidth())+parseInt(icoLi.css('marginLeft')),
                len = icoLi.length;
            for(var i=0;i<len;i++){
                if(icoLi.eq(i).css('display')=='none'){
                    e.find('li:eq('+ i +') span').addClass('cancelCheck')
                }
            }
            e.find('li span').zmActionOn('click',function () {
                var _this = $(this),index = _this.parent().index();
                _this.toggleClass('cancelCheck');
                if(_this.hasClass('cancelCheck')){
                    if(e.find('.cancelCheck').length>e.find('li').length-1){
                        return
                    }else {
                        icoList.find('li').eq(index).hide();
                        listWidth -= liWidth;
                    }
                }else {
                    icoList.find('li').eq(index).show();
                    listWidth += liWidth;
                }
                icoList.width(listWidth+'px')
            });
            return e
        },
        shareLayout:function (ele) {

        }
    },
    enterMethod:{
        enterGetReady:function (ele) {
            var form = ele.find('form'),
                option = ele.find('.zm-component-enter-options'),
                inputBox = option.children('div'),
                input = inputBox.find('.zm-component-enter-input'),
                select = option.find('.zm-component-enter-selectBox'),
                submitBtn = form.find('.zm-component-enter-submit');

                input.on('input',function () {
                    $(this).prev().hide()
                }).on('blur',function () {
                    var _this = $(this);
                    if(_this.val()==''&&form.hasClass('infoInside')){
                      _this.prev().show()
                    }
                });


            form.attr('data-onlyMember','false');
            select.append('<div class="zm-component-enter-input" style="line-height: '+ select.height() +'px"></div>').end()
                .on('mousedown','li',function (e) {
                    select.find('i').hide().end()
                        .find('.zm-component-enter-input').html($(this).html()).end().blur();
                }).end()
                .find('.zm-component-enter-select').attr('class','zm-component-enter-inputBox zm-component-enter-select');

            inputBox.find('.zm-component-enter-input')
                .attr('tabindex','2').on('focus blur', function (eve) {
                var _this = $(this).parent();
                if (eve.type == 'focus') {
                    if (inputBox.attr('data-type-hoverbordercolor')) {
                        inputBox.attr('borderColor', inputBox.css('borderColor'));
                        _this.css('borderColor', inputBox.attr('data-type-hoverbordercolor'))
                    }
                    _this.find('ul').show();
                } else if (eve.type == 'blur') {
                    if (inputBox.attr('borderColor')) {
                        _this.css({'borderColor': inputBox.attr('borderColor')})
                    }
                    _this.find('ul').hide();
                }
            });

            submitBtn.on('mouseover mouseout',function (e) {
                var _this = $(this);
                if(e.type == "mouseover"){
                    if (_this.attr('data-type-hoverbordercolor')) {
                        _this.attr('borderColor', _this.css('borderColor'));
                        _this.css('borderColor', _this.attr('data-type-hoverbordercolor'))
                    }
                    if (_this.attr('data-type-hoverBackgroundColor')) {
                        _this.attr('bgColor', _this.css('backgroundColor'));
                        _this.css('backgroundColor', _this.attr('data-type-hoverBackgroundColor'))
                    }
                    if (_this.attr('data-type-hovercolor')) {
                        _this.attr('color', _this.css('color'));
                        _this.css('color', _this.attr('data-type-hovercolor'))
                    }
                }
                else if(e.type == "mouseout"){
                    if (_this.attr('borderColor')) {
                        _this.css({'borderColor': _this.attr('borderColor')})
                    }
                    if (_this.attr('color')) {
                        _this.css({'color': _this.attr('color')})
                    }
                    if (_this.attr('bgColor')) {
                        _this.css({'backgroundColor': _this.attr('bgColor')})
                    }
                }
            })
        },
        enterTemplet:function (ele) {
            var e = $('<div class="zm-edit-enter-templet" style="padding: 12px 7px">'
                +'<span>选择问卷模板</span>'
                +'<div class="zm-edit-enter-tempBox" tabindex="2">'
                +'<span class="zm-edit-enter-tempName">==请选择==</span> '
                +'<span class="fa fa-sort-desc"></span>'
                +'<ul class="zm-edit-enter-tempList"></ul>'
                +'</div>'
                +'<div class="zm-edit-enter-addTemp">'
                +'<span class="fa fa-plus-square-o"></span>'
                +'<span style="padding-left: 5px;">添加模板</span></div>'
                +'</div>');
            var addBtn = e.find('.zm-edit-enter-addTemp');
            console.log(ele);
            addBtn.on('click',function () {

            });

            return  e
        },//此功能还需与后台交互
        enterLayout:function (ele) {
            var e =  $('<div class="zm-component-edit-enterLayout" style="padding: 12px 7px">'
                +'<span style="display: inline-block;margin-bottom: 10px">题目显示位置</span><br/>'
                +'<label class="zm-edit-function-choicePoint" style="margin-left: 0;"></label><span>文本框内</span>'
                +'<label class="zm-edit-function-choicePoint" data-style="out"></label><span>文本框外侧</span>'
                +'</div>');
            var form = ele.find('form');
            var label = e.find('label');
            label.removeClass('choose');
            if(form.hasClass('infoInside')){
                label.eq(0).addClass('choose')
            }else {
                label.eq(1).addClass('choose')
            }
            label.zmActionOn('click',function () {
                var _this = $(this);
                e.find('label').removeClass('choose');
                _this.addClass('choose');
                if(_this.attr('data-style')=='out'){
                    form.removeClass('infoInside').addClass('infoOutside')
                }else {
                    form.removeClass('infoOutside').addClass('infoInside')
                }
            });
            return e
        },
        enterIsmember:function (ele) {
            var e =  $('<div class="zm-component-edit-enterLayout" style="padding: 12px 7px">'
                +'<span style="display: inline-block;margin-bottom: 10px">答卷会员限制</span><br/>'
                +'<label class="zm-edit-function-choicePoint" style="margin-left: 0;"></label><span>仅限登录会员</span>'
                +'<label class="zm-edit-function-choicePoint" data-key="false"></label><span>允许所有人答卷</span>'
                +'</div>');
            var label = e.find('label');
            label.removeClass('choose');
            if(ele.attr('data-onlyMember')=='true'){
                label.eq(0).addClass('choose')
            }else {
                label.eq(1).addClass('choose')
            }
            label.zmActionOn('click',function () {
                var _this = $(this);
                e.find('label').removeClass('choose');
                _this.addClass('choose');
                if(_this.attr('data-key')=='false'){
                    ele.attr('data-onlyMember','false')
                }else {
                    ele.attr('data-onlyMember','true')
                }
            });
            return e
        },
        enterSubmitWord:function (ele) {
            var e = $('<div style="padding: 15px 7px">'
                + '<span>文字内容</span>'
                + '<input type="text" style="width: 208px;margin-left: 20px;border-radius: 3px" '
                + 'placeholder="' + ele.html() + '"></div>');
            e.find('input').on('input',function () {
                ele.text($(this).val());
            });
            return e
        },
        setEnterStyle:function (ele) {
            var iSelected = zmEditor.component.nowEdit(),
                thisForm = ele.find('.zm-component-enter-form'),
                nowForm = iSelected.find('.zm-component-enter-form');
            var input = nowForm.find('.zm-component-enter-input');
            nowForm.attr('class',thisForm.attr('class'));
            if(nowForm.hasClass('infoInside')){
                for(var i = 0;i<input.length;i++){
                    if(input.eq(i).val()!=''||input.eq(i).text()!=''){
                        input.eq(i).prev().hide();

                    }else {
                        input.eq(i).prev().not('ul').css('display','table-cell');

                    }
                }
            }else {
                input.prev().hide();
            }
        }
    },
    optionMethod:{
        optionGetReady:function (ele) {
            var form = ele.find('.zm-component-option-form'),
                option = ele.find('.zm-component-option-options'),
                submitBtn = form.find('.zm-component-option-submitBtn');
            form.attr('data-submitSucWord','您的问卷已成功提交，感谢您的配合！');
            submitBtn.on('mouseover mouseout',function (e) {
                var _this = $(this);
                if(e.type == "mouseover"){
                    if (_this.attr('data-type-hoverbordercolor')) {
                        _this.attr('borderColor', _this.css('borderColor'));
                        _this.css('borderColor', _this.attr('data-type-hoverbordercolor'))
                    }
                    if (_this.attr('data-type-hoverBackgroundColor')) {
                        _this.attr('bgColor', _this.css('backgroundColor'));
                        _this.css('backgroundColor', _this.attr('data-type-hoverBackgroundColor'))
                    }
                    if (_this.attr('data-type-hovercolor')) {
                        _this.attr('color', _this.css('color'));
                        _this.css('color', _this.attr('data-type-hovercolor'))
                    }
                }
                else if(e.type == "mouseout"){
                    if (_this.attr('borderColor')) {
                        _this.css({'borderColor': _this.attr('borderColor')})
                    }
                    if (_this.attr('color')) {
                        _this.css({'color': _this.attr('color')})
                    }
                    if (_this.attr('bgColor')) {
                        _this.css({'backgroundColor': _this.attr('bgColor')})
                    }
                }
            }).attr('title','当前页跳转，保留页眉、页尾、中间底色；空白区域高度至少700px，' +
                '提示语居中显示，距离页眉底部60px，默认与标题文字同宽')
        },
        optionTemplet:function (ele) {
            var e = $('<div class="zm-edit-enter-templet" style="padding: 12px 7px">'
                +'<span>选择调研问卷模板</span>'
                +'<div class="zm-edit-enter-tempBox" tabindex="2">'
                +'<span class="zm-edit-enter-tempName">==请选择==</span> '
                +'<span class="fa fa-sort-desc"></span>'
                +'<ul class="zm-edit-enter-tempList"></ul>'
                +'</div>'
                +'<div class="zm-edit-enter-addTemp">'
                +'<span class="fa fa-plus-square-o"></span>'
                +'<span style="padding-left: 5px;">添加模板</span></div>'
                +'</div>');
            var addBtn = e.find('.zm-edit-enter-addTemp');
            console.log(ele);
            addBtn.on('click',function () {

            });

            return  e
        },
        optionSubmitSuc:function (ele) {
            var word = ele.attr('data-submitSucWord'),newWord;
            var e = $('<div class="zm-edit-option-submitSucWord" style="padding: 12px 7px;">'
                    +'<div style="margin-bottom: 10px">提交成功提示语</div>'
                    +'<input type="text" placeholder="'+ word +'" style="width: 100%">'
                    +'</div>');
            e.find('input').on('blur',function () {
                var _this = $(this);
                newWord = _this.val() == ''?word:_this.val();
                ele.attr('data-submitSucWord',newWord)
            });
            return e
        },
        setOptionStyle:function (ele) {
            var iSelected = zmEditor.component.nowEdit(),
                thisForm = ele.find('.zm-component-option-form'),
                nowForm = iSelected.find('.zm-component-option-form');
            nowForm.attr('class',thisForm.attr('class'));
        }
    },
    mapMethod:{
        mapCont:{},//全局对象用于存储map对象
        mapStyleData:[
            {style:'默认',val:'normal'},{style:'清新蓝风格',val:'light'},
            {style:'黑夜风格',val:'dark'},{style:'红色警戒风格',val:'redalert'},
            {style:'精简风格',val:'googlelite'},{style:'自然绿风格',val:'grassgreen'},
            {style:'午夜蓝风格',val:'midnight'},{style:'浪漫粉风格',val:'pink'},
            {style:'青春绿风格',val:'darkgreen'},{style:'清新蓝绿风格',val:'bluish'},
            {style:'高端灰风格',val:'grayscale'},{style:'强边界风格',val:'hardedge'}
        ],
        mapGetReady:function (ele) {
            var mapCont = ele.find('.zm-component-function-content');
            mapCont.empty().attr({'data-drag':'false','data-type':'light'});
            var dragKey = mapCont.attr('data-drag');
            var map = new BMap.Map(mapCont[0]); // 创建Map实例
            this.mapCont = map;

            var zmPoint = new BMap.Point(121.357242, 30.891832);//上海新帑实业有限公司坐标

            map.centerAndZoom(zmPoint,10); // --------------设置中心点坐标和地图级别

            map.addControl(new BMap.NavigationControl());//-添加缩放控件

            map.addControl(new BMap.MapTypeControl()); //---添加地图类型控件

            var stCtrl = new BMap.PanoramaControl({anchor: BMAP_ANCHOR_BOTTOM_RIGHT});//------构造全景控件

            map.addControl(stCtrl);//-----------------------添加全景控件

            dragKey.toBoolean()?map.enableDragging():map.disableDragging();
            // map.disableDragging();//---------------------禁止拖拽
            // map.enableDragging();//----------------------允许拖拽
            // map.enableScrollWheelZoom(true); //----------开启鼠标滚轮缩放

            map.setMapStyle({style:'light'});//改变主题

            var label = new BMap.Label('上海族蚂信息科技有限公司',{offset:new BMap.Size(20,0)});
            var opts = {width:200,height:50,
                        title:'上海新帑实业有限公司',
                        addrInfo:'上海市金山区亭林镇林盛路136号',
                        message:'上海族蚂信息科技有限公司全体员工欢迎您的加入~'};
            var infoWindow = new BMap.InfoWindow(opts.addrInfo,opts);
            var marker = new BMap.Marker(zmPoint);
            var geolocation = new BMap.Geolocation();
            mapCont.attr({
                    'data-addrInfo':opts.addrInfo,
                    'data-addrPoint':zmPoint,
                    'data-addrTitle':opts.title
            });
            geolocation.getCurrentPosition(function (r) {
               if (this.getStatus() == BMAP_STATUS_SUCCESS) {
                    map.addOverlay(marker);
                    map.panTo(zmPoint);
                    marker.setLabel(label);
                    marker.addEventListener('click',function(){
                        map.openInfoWindow(infoWindow,zmPoint)
                    });
               } else {
                   console.log('failed' + this.getStatus());
               }
            },{enableHighAccuracy: true});

            var myGeo = new BMap.Geocoder();//获取位置信息

            map.addEventListener("click", function(e){
                // console.log(e.point,marker.point);
                map.removeOverlay(marker);//删除旧标记点
                var thisPoint = new BMap.Point(e.point.lng, e.point.lat);
                var thisOp = {
                    width:200,height:50,
                    title:'我的所在地：',enableMessage:true,
                    offset:new BMap.Size(0,-25)
                };
                myGeo.getLocation(thisPoint, function(rs){
                    var addComp = rs.addressComponents;
                    var addrInfo = addComp.province + addComp.city + addComp.district+
                                   addComp.street + addComp.streetNumber;
                    var thisInfo = new BMap.InfoWindow(addrInfo,thisOp);

                    mapCont.attr({
                        'data-addrInfo':addrInfo,
                        'data-addrPoint':thisPoint,
                        'data-addrTitle':thisOp.title
                    });

                    marker = new BMap.Marker(thisPoint);

                    map.addOverlay(marker);

                    map.panTo(thisPoint);

                    map.openInfoWindow(thisInfo,thisPoint);

                });
            });
            mapCont.on('mouseenter mouseleave','.BMap_Marker',function (ev) {
                var addrInfo = mapCont.attr('data-addrInfo');
                var addrOp = {
                    width:200,height:50,
                    title:mapCont.attr('data-addrTitle'),
                    enableMessage:true,
                    offset:new BMap.Size(0,-25)
                };
                var hoverInfo = new BMap.InfoWindow(addrInfo,addrOp);
               if(ev.type==='mouseenter'){
                   map.openInfoWindow(hoverInfo,marker.point);
               }
               else if(ev.type==='mouseleave'){
                   map.closeInfoWindow()
               }
            });
            mapCont.on('mousedown','.BMap_button',function (event) {
                event.stopPropagation()
            })
        },
        mapLocation:function (ele) {
            var e = $('<div class="zm-edit-function-setAddr" style="border-bottom: 0">'
                +'<div class="zm-edit-function-showAddr">'
                +'<p>显示地址：</p>'
                +'<input type="text" value="'+ ele.attr('data-addrInfo') +'">'
                +'<span class="fa fa-search"></span>'
                +'</div>'
                +'<div class="zm-edit-function-addrTitle">'
                +'<p>地址标题：</p>'
                +'<input type="text" value="'+ ele.attr('data-addrTitle') +'">'
                +'</div>'
                + '</div>');
            var addr,addrTitle ,setBtn = e.find('.fa');
            var map = zmEditor.component.function.mapMethod.mapCont;
            var myGeo = new BMap.Geocoder();
            // 将地址解析结果显示在地图上,并调整地图视野
            setBtn.on('click',function () {
                map.clearOverlays();//删除旧标记点
                addr = e.find('.zm-edit-function-showAddr input').val();
                addrTitle = e.find('.zm-edit-function-addrTitle input').val();
                var thisOp = {
                    width:200,height:50,
                    title:addrTitle+'：',enableMessage:true,
                    offset:new BMap.Size(0,-25)
                };
                myGeo.getPoint(addr, function(point){
                    if (point) {
                        var info = new BMap.InfoWindow(addr,thisOp);

                        map.centerAndZoom(point, 14);
                        map.addOverlay(new BMap.Marker(point));

                        map.openInfoWindow(info,point);

                        ele.attr({
                            'data-addrInfo':addr,
                            'data-addrTitle':thisOp.title,
                            'data-addrPoint':point
                        })
                    }else{
                        console.log("您选择地址没有解析到结果!");
                    }
                });
            });

            return e
        },
        mapOption:function (ele) {
            var switchOn = 'zm-switch-box-on';
            var e = $('<div class="zm-edit-function-mapCrtlsBox zm-edit-public-highTitle">'
                +'<div class="zm-edit-public-title">地图要素</div>'
                +'<div class="zm-edit-map-crtlOption">'
                +'<span>允许缩放地图</span>'
                +'<label class="zm-switch-box '+(ele.hasClass('noZoomCtrl')?'':switchOn)+'">'
                +'<span class="zm-switch">'
                +'<span class="fa fa-'+(ele.hasClass('noZoomCtrl')?'minus':'check')+'"></span>'
                +'</span></label>'
                +'</div>'
                +'<div class="zm-edit-map-crtlOption">'
                +'<span>允许显示卫星地图</span>'
                +'<label class="zm-switch-box '+(ele.hasClass('noTypeCtrl')?'':switchOn)+'">'
                +'<span class="zm-switch">'
                +'<span class="fa fa-'+(ele.hasClass('noTypeCtrl')?'minus':'check')+'"></span>'
                +'</span></label>'
                +'</div>'
                +'<div class="zm-edit-map-crtlOption">'
                +'<span>允许街景视图</span>'
                +'<label class="zm-switch-box '+(ele.hasClass('noVistaCtrl')?'':switchOn)+'">'
                +'<span class="zm-switch">'
                +'<span class="fa fa-'+(ele.hasClass('noVistaCtrl')?'minus':'check')+'"></span>'
                +'</span></label>'
                +'</div>'
                +'<div class="zm-edit-map-crtlOption">'
                +'<span>允许拖拽移动</span>'
                +'<label class="zm-switch-box '+(ele.attr('data-drag').toBoolean()?switchOn:'')+'">'
                +'<span class="zm-switch">'
                +'<span class="fa fa-'+(ele.attr('data-drag').toBoolean()?'check':'minus')+'"></span>'
                +'</span></label>'
                +'</div>'
                +'</div>');
            var option = e.find('.zm-edit-map-crtlOption');
            option.on('click','label',function () {
                var _this = $(this),index = _this.parent().index();
                switch (index){
                    case 1:
                        ele.toggleClass('noZoomCtrl');
                        break;
                    case 2:
                        ele.toggleClass('noTypeCtrl');
                        break;
                    case 3:
                        ele.toggleClass('noVistaCtrl');
                        break;
                    case 4:
                        ele.attr('data-drag',ele.attr('data-drag')==='true'?'false':'true');
                        break;
                    default:
                        break
                }

            });
            return e
        },
        mapStyle:function (ele) {
            var liStr = '',check,style,type = ele.attr('data-type'),
                list = this.mapStyleData,
                theMap = this.mapCont;
            for(var i = 0,len = list.length;i<len;i++){
                check = list[i].val===type?'zm-edit-map-theType':'';
                if(list[i].val===type)style = list[i].style;
                liStr+='<li class="'+ check +'" data-type="'+ list[i].val +'">'+ list[i].style +'</li>'
            }
            var e = $('<div class="zm-edit-function-mapStyleBox">'
                +'<span class="zm-edit-public-title">地图主题</span>'
                +'<div class="zm-edit-map-typeBox">'
                +'<div class="zm-edit-map-typeTitle" tabindex="1">'+ style +'</div>'
                +'<span class="fa fa-sort-desc"></span>'
                +'<ul class="zm-edit-map-typeList"></ul>'
                +'</div>'
                +'<div class="zm-edit-map-typeShadow" style="display: none"></div>'
                +'</div>');
            var typeTitle = e.find('.zm-edit-map-typeTitle'),
                ul = e.find('ul'),
                shad = e.find('.zm-edit-map-typeShadow');
            ul.html(liStr).hide();
            typeTitle.on('click',function () {
                ul.toggle();
                shad.toggle();
            });
            e.find('.fa').on('click',function (e) {
                e.stopPropagation();
                ul.toggle();
                shad.toggle();
            });
            e.find('li').on('click',function () {
                var _this = $(this),mapType = _this.attr('data-type');
                _this.addClass('zm-edit-map-theType').siblings().removeClass('zm-edit-map-theType');
                theMap.setMapStyle({style:mapType});
                ele.attr('data-type',mapType);
                typeTitle.text(_this.text());
                ul.hide();
                shad.hide()
            });
            return e
        }
    },
    publicMethod: {
        publicHref: function (ele) {
            var e = $('<div class="zm-edit-function-hrefSet clearFloat" style="line-height: 61px">'
                + '<span style="margin-right: 20px">链接</span>'
                + '<span class="zm-edit-function-choicePoint" style="margin: 22px 10px"></span><span>登录</span>'
                + '<span class="zm-edit-function-choicePoint" style="margin: 22px 10px"></span><span>注册</span>'
                + '</div>');
            e.find('span').removeClass('choose');
            if (ele.attr('data-loadUrl') == 'login') {
                e.find('span').eq(1).addClass('choose');
            }
            if (ele.attr('data-loadUrl') == 'register') {
                e.find('span').eq(3).addClass('choose');
            }
            e.find('span').on('click', function () {
                e.find('span').removeClass('choose');
                var _this = $(this);
                _this.addClass('choose');
                if (_this.index() == '1') {
                    ele.attr('data-loadUrl', 'login')
                }
                if (_this.index() == '3') {
                    ele.attr('data-loadUrl', 'register')
                }
            });
            return e;
        },
        switchKeyStr: function (title, editName) {
            return '<div class="' + editName + '" style="padding: 20px 0">'
                + '<span class="zm-edit-search-title">' + title + '</span>'
                + '<label class="zm-switch-box" style="margin-left: 20px;">'
                + '<span class="zm-switch"><span class="fa fa-minus"></span></span>'
                + '</label></div>'
        },
        searchSuggestStr: function () {
            var url = zmEditor.url.getNewsData, arr = [];
            $.ajax({
                async: false,
                type: 'get',
                url: url,
                dataType: 'json',
                success: function (e) {
                    $.each(e.data, function (index, val) {
                        if (index < 10) {
                            arr.push(val.fTitle);
                        }
                    })
                }
            });
            return arr;
        },
        /***********some config start***********/
        searchSetting:function (content) {
            var nowEdit = content;
            var searchBar = nowEdit.find('.zm-component-function-searchBar');
            var searchDefaultCont = searchBar.find('.searchBarTempCont');
            var searchBtn = nowEdit.find('.zm-component-function-searchBtn');

            var config1_c1 = [
                {
                    type: 'slider',
                    element: searchBar,
                    flag: {
                        title: "边框颜色",
                        style: "tab_color",
                        isColor: true,
                        param: "borderColor"
                    }
                },
                {
                    type: 'slider',
                    element: searchBar,
                    flag: {
                        title: '边框颜色<br/>(获取焦点)',
                        style: 'tab_color',
                        isColor: true,
                        param: 'hoverColor'
                    }
                },
                {
                    type: 'slider',
                    element: searchBar,
                    flag: {
                        title: "边框宽度<br/>(像素)",
                        style: "tab_noColor",
                        isColor: false,
                        param: "borderSetting",
                        size: [0, 10]
                    }
                },
                {
                    type: 'slider',
                    element: searchBar,
                    flag: {
                        title: "搜索框<br/>填充色",
                        style: "tab_color",
                        isColor: true,
                        param: "backgroundColor"
                    }
                },
                {type: 'function_keyToSet', element: searchBar, flag: {title: '内部阴影'}},
                {type: 'radius', element: searchBar, flag: ''}
            ];
            var config1_c2 = [
                {type: 'search_defaultCont', element: searchDefaultCont, flag: {title: '默认内容'}},
                {
                    type: 'search_defaultWordsSet', element: searchDefaultCont,
                    flag: {style: 'tab_mini', param: "color", content: '默认文字内容设置'}
                },
                {
                    type: 'search_defaultWordsSet', element: searchBar.find('input'),
                    flag: {style: 'tab_mini', param: "color", content: '键入文字内容设置'}
                },
                {
                    type: 'function_keyToSet', element: searchBar,
                    flag: {title: {first: '显示搜索历史', second: '显示搜索建议'}, param: 'two'}
                }
            ];
            var config2_c1 = [
                {
                    type: 'slider',
                    element: searchBtn,
                    flag: {
                        title: "按钮与搜<br/>索框距离",
                        style: "tab_noColor",
                        isColor: false,
                        param: "searchBtnML",
                        size: [-1, 30]
                    }
                },
                {
                    type: 'slider',
                    element: searchBtn,
                    flag: {
                        title: "搜索按钮<br/>边线颜色",
                        style: "tab_color",
                        isColor: true,
                        param: "borderColor"
                    }
                },
                {
                    type: 'slider',
                    element: searchBtn,
                    flag: {
                        title: "边线宽度<br/>(像素)",
                        style: "tab_noColor",
                        isColor: false,
                        param: "borderSetting",
                        size: [0, 10]
                    }
                },
                {
                    type: 'slider',
                    element: searchBtn,
                    flag: {
                        title: "边线颜色<br/>(光标悬浮)",
                        style: "tab_color",
                        isColor: true,
                        param: "hoverBorderColor"
                    }
                },
                {
                    type: 'slider',
                    element: searchBtn,
                    flag: {
                        title: "填充色",
                        style: "tab_color",
                        isColor: true,
                        param: "backgroundColor"
                    }
                },
                {
                    type: 'slider',
                    element: searchBtn,
                    flag: {
                        title: "按钮颜色<br/>(光标悬浮)",
                        style: "tab_color",
                        isColor: true,
                        param: "hoverBackgroundColor"
                    }
                },
                {type: 'radius', element: searchBtn, flag: ''}
            ];
            var config2_c2 = [
                {type: 'search_searchBtnStyle', element: searchBtn, flag: ''},
                {type: 'search_defaultCont', element: searchBtn, flag: {title: '按钮文字内容'}},
                {
                    type: 'search_defaultWordsSet', element: searchBtn,
                    flag: {style: 'tab_mini', param: "color", content: '按钮文字内容设置'}
                },
                {
                    type: 'slider',
                    element: searchBtn,
                    flag: {
                        title: "文字颜色<br/>(光标悬浮)",
                        style: "tab_color",
                        isColor: true,
                        param: "hoverColor"
                    }
                },
                {
                    type: 'slider',
                    element: searchBtn,
                    flag: {
                        title: "按钮<br/>图标颜色",
                        style: "tab_color",
                        isColor: true,
                        param: "color"
                    }
                },
                {type: 'href', element: searchBtn, flag: ''}
            ];
            var config3 = [
                {type: 'search_searchResultShow', element: nowEdit, flag: ''},
                {
                    type: 'slider',
                    element: nowEdit,
                    flag: {
                        title: "搜索结果<br/>页面背景色",
                        style: "noTab_color",
                        isColor: true,
                        param: "color"
                    }
                },
                {
                    type: 'search_defaultWordsSet', element: nowEdit,
                    flag: {style: 'mini', param: "color", content: '搜索结果标题文字设置'}
                },
                {
                    type: 'search_defaultWordsSet', element: nowEdit,
                    flag: {style: 'mini', param: "color", content: '搜索结果描述文字设置'}
                }
            ];
            var tabs1_c1 = zmEditor.component.setItems.config(config1_c1);

            var tabs1_c2 = zmEditor.component.setItems.config(config1_c2);

            var tabs1List = [
                {title: "<span class='fa fa-square-o'></span><br>框体", content: tabs1_c1},
                {title: "<span class='fa fa-file-text'></span><br>内容", content: tabs1_c2}
            ];

            var tabA1 = zmEditor.component.setItems.tabs_child(tabs1List);
            var tabs2_c1 = zmEditor.component.setItems.config(config2_c1);

            var tabs2_c2 = zmEditor.component.setItems.config(config2_c2);

            var tabs2List = [
                {title: "<span class='fa fa fa-th-large fa-lg'></span><br>常规", content: tabs2_c1},
                {title: "<span class='fa fa-file-text'></span><br>内容", content: tabs2_c2}
            ];
            var tabA2 = zmEditor.component.setItems.tabs_child(tabs2List);
            var tabA3 = zmEditor.component.setItems.config(config3);

           var tabsList = [
                {title: "搜索框", content: tabA1},
                {title: "按钮", content: tabA2},
                {title: "搜索结果", content: tabA3}
            ];
            return zmEditor.component.setItems.tabs(tabsList);
        },
        shoppingSetting:function (content) {
            var nowEdit = content;
            var configB1 = [
                {
                    type: 'function_shoppingCartStyle',
                    element: nowEdit.find('.zm-component-function-shopping-cartBtn'),
                    flag: ''
                },
                {
                    type: 'function_shoppingCartWord',
                    element: nowEdit.find('.zm-component-function-shopping-cartWord'),
                    flag: ''
                },
                {
                    type: 'function_shoppingCartNum',
                    element: nowEdit.find('.zm-component-function-shopping-num'),
                    flag: ''
                },
                {type: 'function_shoppingCartLayOut', element: nowEdit, flag: ''}
            ];
            var configB2 = [
                {
                    type: 'slider',
                    element: nowEdit.find('.zm-component-function-shopping-cartBtn svg'),
                    flag: {
                        title: "购物车<br/>填充色",
                        style: "noTab_color",
                        isColor: true,
                        param: "fill"
                    }
                },
                {
                    type: 'search_defaultWordsSet', element: nowEdit.find('.zm-component-function-shopping-cartWord'),
                    flag: {style: 'mini', param: "color", content: '购物车文字设置'}
                },
                {
                    type: 'slider',
                    element: nowEdit.find('.zm-component-function-shopping-cartWord'),
                    flag: {
                        title: "文字颜色<br/>(光标悬浮)",
                        style: "noTab_color",
                        isColor: true,
                        param: "hoverColor"
                    }
                },
                {
                    type: 'slider',
                    element: nowEdit.find('.zm-component-function-shopping-num'),
                    flag: {
                        title: "数量标识<br/>颜色",
                        style: "noTab_color",
                        isColor: true,
                        param: "color"
                    }
                },
                {type: 'href', element: nowEdit, flag: ''}
            ];
            var tabB1 = zmEditor.component.setItems.config(configB1);
            var tabB2 = zmEditor.component.setItems.config(configB2);
            var tabsList = [{title: "排版", content: tabB1}, {title: "设置", content: tabB2}];
            return zmEditor.component.setItems.tabs(tabsList);
        },
        textSetting: function (ele) {
            var nowEdit = ele;
            var config1 = [
                {type: 'search_defaultCont', element: nowEdit, flag: {title: '默认内容'}},
                {type: 'Family', element: nowEdit, flag: {title: '字体类型', style: 'normal', param: 'normal'}},
                {
                    type: 'slider',
                    element: nowEdit,
                    flag: {
                        title: "文字大小<br/>(像素)",
                        style: "noTab_noColor",
                        isColor: false,
                        param: "fontSize",
                        size: [12, 180]
                    }
                },
                {
                    type: 'slider',
                    element: nowEdit,
                    flag: {title: '文字颜色', style: 'noTab_color', isColor: true, param: 'color', size: [12, 180]}
                },
                {
                    type: 'slider',
                    element: nowEdit,
                    flag: {
                        title: '背景颜色',
                        style: 'noTab_color',
                        isColor: true,
                        param: 'backgroundColor',
                        size: [12, 180]
                    }
                },
                {type: 'fontStyle', element: nowEdit, flag: {title: '', style: 'normal', param: ''}},
                {type: 'paragraphStyle', element: nowEdit, flag: {title: '', style: 'normal', param: ''}},
                {
                    type: 'slider',
                    element: nowEdit,
                    flag: {
                        title: "字间距<br/>(像素)",
                        style: "noTab_noColor",
                        isColor: false,
                        param: 'fontSpace',
                        size: [-20, 50]
                    }
                },
                {type: 'fontEffect', element: nowEdit, flag: {title: '字体效果', style: '', param: ''}}
            ];
            var tabs1 = zmEditor.component.setItems.config(config1);

            var config2 = [{type: 'function_publicHref', element: nowEdit, flag: ''}];
            var tabs2 = zmEditor.component.setItems.config(config2);

            var tabsList = [
                {title: "常规", content: tabs1},
                {title: "链接", content: tabs2}
            ];
            return zmEditor.component.setItems.tabs(tabsList);
        },
        btnSetting: function (ele) {
            var nowEdit = ele;

            var config1 = [
                {type: 'textContent', element: nowEdit, flag: {title: '文字内容', style: 'normal', param: 'textContent'}},
                {type: 'Family', element: nowEdit, flag: {title: '字体', style: 'normal', param: 'color'}},
                {
                    type: "slider",
                    element: nowEdit,
                    flag: {
                        title: "文字大小<br/>(像素)",
                        style: "noTab_noColor",
                        param: "fontSize",
                        size: [12, 180]
                    }
                },
                {
                    type: "slider",
                    element: nowEdit,
                    flag: {title: "文字颜色", style: "noTab_color", isColor: true, param: "color"}
                },
                {type: 'fontStyle', element: nowEdit, flag: {title: '', style: 'normal', param: ''}},
                {
                    type: "slider",
                    element: nowEdit,
                    flag: {
                        title: "字间距<br/>(像素)",
                        style: "noTab_noColor",
                        isColor: false,
                        param: "fontSpace",
                        size: [-20, 100]
                    }
                },
                {type: 'function_publicHref', element: nowEdit, flag: ''}
              ];
            var tabs1 = zmEditor.component.setItems.config(config1);

            var config2 = [
                {
                    type: "slider",
                    element: nowEdit,
                    flag: {title: "背景颜色", style: "noTab_color", isColor: true, param: "backgroundColor"}
                },
                {
                    type: "slider",
                    element: nowEdit,
                    flag: {title: "边线颜色", style: "noTab_color", isColor: true, param: "borderColor"}
                },
                {type: 'borderStyle', element: nowEdit, flag: {title: '线条类型', style: 'normal', param: 'borderColor'}},
                {
                    type: "slider",
                    element: nowEdit,
                    flag: {
                        title: "边线粗细<br/>(像素)",
                        style: "noTab_noColor",
                        isColor: false,
                        param: "borderWidth",
                        size: [0, 10]
                    }
                },
                {type: 'radius', element: nowEdit, flag: {title: '', style: 'normal', param: ''}}
            ];
            var tabs2 = zmEditor.component.setItems.config(config2);

            var config4 = [
                {type: 'boxShadow', element: nowEdit, flag: {title: '字间距', style: 'normal', param: ''}}
            ];
            var tabs4 = zmEditor.component.setItems.config(config4);

            var tabsList = [
                {title: "常规", content: tabs1},
                {title: "形状", content: tabs2},
                {title: "阴影", content: tabs4}
            ];
            return zmEditor.component.setItems.tabs(tabsList);
        },
        imgSetting: function (ele) {
            var nowEdit = ele, imgHexagon = nowEdit.find('.zm-component-img-hexagonLine'),
                imgContent = imgHexagon.length > 0 ? imgHexagon : nowEdit.find('.zm-component-img-content');

            var config1 = [
                {type: 'img_showImg', element: nowEdit, flag: ''},
                {type: 'img_picScale', element: nowEdit, flag: ''},
                {type: 'function_publicHref', element: nowEdit, flag: ''}
            ];
            var tabs1 = zmEditor.component.setItems.config(config1);

            var config2 = [
                {
                    type: 'slider',
                    element: imgContent,
                    flag: {title: '边框颜色', style: 'noTab_color', isColor: true, param: 'borderColor', size: [0, 100]}
                },
                {type: 'img_borderSet', element: imgContent, flag: ''},
                {
                    type: 'slider',
                    element: imgContent,
                    flag: {
                        title: '边框宽度<br/>(像素)',
                        style: 'noTab_noColor',
                        isColor: false,
                        param: 'borderSetting',
                        size: [0, 15]
                    }
                },
                {type: 'radius', element: imgContent, flag: ''}
            ];
            var tabs2 = zmEditor.component.setItems.config(config2);

            tabs2.find('.zm-edit-img-borderStyleBox').css('width', '200px');
            tabs2.find('.borderSettingSlider').css('margin-right', '25px');

            var config3 = [{type: 'boxShadow', element: imgContent, flag: ''}];
            var tabs3 = zmEditor.component.setItems.config(config3);

            var tabsList = [
                {title: "常规", content: tabs1},
                {title: "边框", content: tabs2},
                {title: "阴影", content: tabs3}
            ];
            return zmEditor.component.setItems.tabs(tabsList)
        },
        shapeSetting: function (ele) {
            var nowEdit = ele, shapeBox = nowEdit.find('svg');

            var config3 = [
                {
                    type: "slider", element: shapeBox, flag: {
                    title: "背景颜色", style: "noTab_color", isColor: true, param: "fill"
                }
                },
                {
                    type: "slider", element: shapeBox, flag: {
                    title: "边框颜色", style: "noTab_color", isColor: true, param: "stroke"
                }
                },
                {
                    type: "slider", element: shapeBox, flag: {
                    title: "边框宽度<br/>(像素)",
                    style: "noTab_noColor",
                    isColor: false,
                    param: "stroke-width",
                    size: [0, 10]
                }
                }
            ];
            var config4 = [{type: 'function_publicHref', element: shapeBox, flag: ''}];
            var tabs = zmEditor.component.setItems.config(config3);

            var tabs2 = zmEditor.component.setItems.config(config4);

            var tabsList = [{title: "常规", content: tabs}, {title: "链接", content: tabs2}];
            return zmEditor.component.setItems.tabs(tabsList);
        },
        fileSetting: function (ele) {
            var nowEdit = ele, file = nowEdit.find('img'), fileName = nowEdit.find('.zm-component-file-fileName');

            var config1 = [
                {type: 'file_changeFile', element: nowEdit, flag: ''},
                {type: 'file_namedFile', element: fileName, flag: ''},
                {
                    type: 'search_defaultWordsSet', element: fileName,
                    flag: {style: 'tab_mini', param: "color", content: '文件名文字设置'}
                },
                {
                    type: 'slider',
                    element: fileName,
                    flag: {
                        title: "字间距",
                        style: "noTab_noColor",
                        isColor: false,
                        param: 'fontSpace',
                        size: [1, 10]
                    }
                },
                {type: 'href', element: file, flag: ''}
            ];
            var tabs1 = zmEditor.component.setItems.config(config1);

            var config2 = [{type: 'boxShadow', element: file, flag: ''}];
            var tabs2 = zmEditor.component.setItems.config(config2);

            var tabsList = [
                {title: "常规", content: tabs1},
                {title: "阴影", content: tabs2}
            ];
            return zmEditor.component.setItems.tabs(tabsList);
        },
        shareSetting:function (ele) {
            var nowEdit = ele,main = nowEdit.parent(),
                svgEle = nowEdit.find('svg'),
                svgName = main.find('.zm-component-share-shareTitle');

            var config = [
                {type:'share_shareName',element:svgName,flag:''},
                {
                    type: 'search_defaultWordsSet', element: svgName,
                    flag: {style: 'mini', param: "color", content: '标题文字设置'}
                },
                {type: "share_shareBtnSet", element: svgEle, flag: ''},
                {
                    type: "slider", element: svgEle, flag: {
                    title: "图标填充色", style: "noTab_color", isColor: true, param: "fill"
                }
                },
                {
                    type: "slider", element: svgEle, flag: {
                    title: "图标光标<br/>悬浮色", style: "noTab_color", isColor: true, param: "hoverFill"
                }
                },
                {type: "share_shareOption", element: main, flag: ''}
            ];

            return zmEditor.component.setItems.config(config);
        },
        enterSetting:function (ele) {
            var nowEdit = ele,
                form = nowEdit.find('.zm-component-enter-form'),
                option = nowEdit.find('.zm-component-enter-options'),
                formTitle = nowEdit.find('.zm-component-enter-formTitle'),
                enterWord = nowEdit.find('.zm-component-enter-input'),
                inputBox = option.children('div'),
                inputName = form.hasClass('infoInside')?option.find('i'):option.find('span'),
                submitBtn = form.find('.zm-component-enter-submit');

            var config1 = [
                {type:'enter_enterTemplet',element:nowEdit,flag:''},
                {type:'enter_enterLayout',element:nowEdit,flag:''},
                {
                    type: 'search_defaultWordsSet', element: formTitle,
                    flag: {style: 'mini', param: "color", content: '模板标题文字设置'}
                },
                {
                    type: 'search_defaultWordsSet', element: inputName,
                    flag: {style: 'mini', param: "color", content: '题目文字设置'}
                },
                {
                    type: 'search_defaultWordsSet', element: enterWord,
                    flag: {style: 'mini', param: "color", content: '键入文字设置'}
                },
                {type:'enter_enterIsmember',element:form,flag:''}
            ];
            var tabs1 = zmEditor.component.setItems.config(config1);

            var config2 = [
                {type:'slider',element:option,flag:{
                    title: "行间距", style: "noTab_noColor", isColor: false, param: "marginBottom",size:[10,40]
                }},
                {type:'slider',element:inputBox,flag:{
                    title: "边框颜色", style: "noTab_color", isColor: true, param: "borderColor"
                }},
                {type:'slider',element:inputBox,flag:{
                    title: "边框颜色<br/>(获取焦点)", style: "noTab_color", isColor: true, param: "hoverBorderColor"
                }},
                {type:'slider',element:inputBox,flag:{
                    title: "边框宽度<br/>(像素)", style: "noTab_noColor", isColor: false, param: "borderWidth",size:[1,3]
                }},
                {type:'slider',element:inputBox.not('.textAreaBox'),flag:{
                    title: "文本框<br/>高度", style: "noTab_noColor", isColor: false, param: "height",size:[20,40]
                }},
                {type:'radius',element:inputBox,flag:''}
            ];
            var tabs2 = zmEditor.component.setItems.config(config2);

            var config3 = [
                {type:'enter_enterSubmitWord',element:submitBtn,flag:''},
                {
                    type: 'search_defaultWordsSet', element: submitBtn,
                    flag: {style: 'mini', param: "color", content: '按钮文字设置'}
                },
                {type:'slider',element:submitBtn,flag:{
                    title: "文字颜色<br/>(光标悬浮)", style: "noTab_color", isColor: true, param: "hoverColor"
                }},
                {type:'slider',element:submitBtn,flag:{
                    title: "按钮边框", style: "noTab_color", isColor: true, param: "borderColor"
                }},
                {type:'slider',element:submitBtn,flag:{
                    title: "边框宽度<br/>(像素)", style: "noTab_noColor", isColor: false, param: "borderWidth",size:[1,5]
                }},
                {type:'slider',element:submitBtn,flag:{
                    title: "边框颜色<br/>(光标悬浮)", style: "noTab_color", isColor: true, param: "hoverBorderColor"
                }},
                {type:'slider',element:submitBtn,flag:{
                    title: "填充色", style: "noTab_color", isColor: true, param: "backgroundColor"
                }},
                {type:'slider',element:submitBtn,flag:{
                    title: "填充色<br/>(光标悬浮)", style: "noTab_color", isColor: true, param: "hoverBackgroundColor"
                }},
                {type:'radius',element:submitBtn,flag:''}
            ];
            var tabs3 =  zmEditor.component.setItems.config(config3);

            var tabsList = [
                {title: "常规", content: tabs1},
                {title: "文本框", content: tabs2},
                {title: "按钮", content: tabs3}
            ];
            return zmEditor.component.setItems.tabs(tabsList);
        },
        optionSetting:function (ele) {
            var nowEdit = ele,
                form = nowEdit.find('.zm-component-option-form'),
                option = nowEdit.find('.zm-component-option-options'),
                optionTitle = option.find('.zm-component-option-optionTitle'),
                formTitle = nowEdit.find('.zm-component-option-formTitle'),
                submitBtn = form.find('.zm-component-option-submitBtn');

            var config1 = [
                {type:'option_optionTemplet',element:nowEdit,flag:''},
                {
                    type: 'search_defaultWordsSet', element: formTitle,
                    flag: {style: 'mini', param: "color", content: '标题文字设置'}
                },
                {
                    type: 'search_defaultWordsSet', element: optionTitle,
                    flag: {style: 'mini', param: "color", content: '题目文字设置'}
                },
                {type:'slider',element:form,flag:{
                    title: "字间距", style: "noTab_noColor", isColor: false, param: "letter-spacing",size:[0,10]
                }},
                {type:'slider',element:option.children('div'),flag:{
                    title: "行间距", style: "noTab_noColor", isColor: false, param: "marginBottom",size:[10,40]
                }},
                {type:'slider',element:form,flag:{
                    title: "每行选项<br/>数量", style: "noTab_noColor", isColor: false, param: "optionCount",size:[1,4]
                }},
                {type:'enter_enterIsmember',element:form,flag:''},
                {type:'option_optionSubmitSuc',element:form,flag:''}
            ];
            var tab1 = zmEditor.component.setItems.config(config1);

            var config2 = [
                {type:'enter_enterSubmitWord',element:submitBtn,flag:''},
                {
                    type: 'search_defaultWordsSet', element: submitBtn,
                    flag: {style: 'mini', param: "color", content: '按钮文字设置'}
                },
                {type:'slider',element:submitBtn,flag:{
                    title: "文字颜色<br/>(光标悬浮)", style: "noTab_color", isColor: true, param: "hoverColor"
                }},
                {type:'slider',element:submitBtn,flag:{
                    title: "按钮边框", style: "noTab_color", isColor: true, param: "borderColor"
                }},
                {type:'slider',element:submitBtn,flag:{
                    title: "边框宽度<br/>(像素)", style: "noTab_noColor", isColor: false, param: "borderWidth",size:[0,5]
                }},
                {type:'slider',element:submitBtn,flag:{
                    title: "边框颜色<br/>(光标悬浮)", style: "noTab_color", isColor: true, param: "hoverBorderColor"
                }},
                {type:'slider',element:submitBtn,flag:{
                    title: "填充色", style: "noTab_color", isColor: true, param: "backgroundColor"
                }},
                {type:'slider',element:submitBtn,flag:{
                    title: "填充色<br/>(光标悬浮)", style: "noTab_color", isColor: true, param: "hoverBackgroundColor"
                }},
                {type:'radius',element:submitBtn,flag:''}
            ];
            var tab2 = zmEditor.component.setItems.config(config2);

            var tabsList = [{title: "内容", content: tab1},{title: "按钮", content: tab2}];
            return zmEditor.component.setItems.tabs(tabsList);
        },
        mapSetting:function (ele) {
            var config = [
                {type:'map_mapStyle',element:ele,flag:''},
                {type:'map_mapLocation',element:ele,flag:''},
                {type:'map_mapOption',element:ele,flag:''}
            ];
            return zmEditor.component.setItems.config(config);
        }
        /***********some config end***********/
    }
};

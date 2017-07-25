

/**
 * @author:yerui
 * @type {{setting: zmEditor.component.nav.setting}}
 */
zmEditor.component.nav = {
    setting: function (box) {
        var iSelected = zmEditor.component.nowEdit(),
            iSelected_show_type,iSelected;   //zm_nav_general_  zm_nav_general_
        if (iSelected.hasClass("zm_nav_general_cross_one")) iSelected_show_type = "General-cross_one";
        if (iSelected.hasClass("zm_nav_general_cross_two")) iSelected_show_type = "General-cross_two";
        if (iSelected.hasClass("zm_nav_general_cross_three")) iSelected_show_type = "General-cross_three";
        if (iSelected.hasClass("zm_nav_general_cross_four")) iSelected_show_type = "General-cross_four";
        if (iSelected.hasClass("zm_nav_general_vertical_one_one")) iSelected_show_type = "General-vertical_one_one";
        if (iSelected.hasClass("zm_nav_general_vertical_two_one")) iSelected_show_type = "General-vertical_two_one";
        if (iSelected.hasClass("zm_nav_general_vertical_three_one")) iSelected_show_type = "General-vertical_three_one";
        console.log(iSelected_show_type);
        switch (iSelected_show_type) {
            case "General-cross_one":
                var tabs1 = $('<div></div>');
                // tabs1.append(a);
                var config1;
                    config1 = [{type:'bannerController',element:iSelected,flag:{className:'.nav.Resize'}},
                        {type:'color_on',element:iSelected,flag:'mian_children_childrenLi_bg'},
                        {type:'color_on',element:iSelected,flag:'mian_children_childrenLi_hover_bg'},
                        {type:'color_on',element:iSelected,flag:'mian_children_childrenLi_color'},
                        {type:'color_on',element:iSelected,flag:'mian_children_childrenLi__hover_color'},
                        {type:'Family',element:iSelected.find("p"),flag:{title:'字体类型',style:'normal',param:'normal'}},
                        {type:'slider',element: iSelected,flag: {title: "文字大小", style: "noTab_noColor",isColor:false, param: "fontSize", size: [12,40]}},
                        {type:'fontStyle',element:iSelected,flag:{title:'',style:'normal',param:'',goal:"li"}},
                         {type:'paragraphStyle',element:iSelected,flag:{title:'',style:'normal',param:''}},
                        {type:'slider',element: iSelected,flag: {title: "字间距", style: "noTab_noColor",isColor:false, param: "fontSpace", size: [0,40]}}
                         ];
                var items1 = zmEditor.component.setItems.config(config1);
                items1.forEach(function (e) {
                    tabs1.append(e);
                });
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs1, 1, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "backgroundColor", "backgroundColor", "cross_one", "sStyle", "initStyle"));
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs1, 2, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "backgroundColor", "backgroundColor", "cross_one", "hHover", "initHover"));
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs1, 3, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "color ", "color", "cross_one", "sStyle", "initStyle"));
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs1, 4, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "color", "color", "cross_one", "hHover", "initHover"));
                nav_child_on(tabs1,iSelected);
                var tabs2 = $('<div></div>');
                var config2 = [
                    {type:'color_on',element:iSelected,flag:'mian_border_color'},
                    {type:'borderWidth_nav',element:iSelected,flag:''},
                    {type:'radius',element:[iSelected.children().children("li")[0],iSelected.children().children("li")[iSelected.children().children("li").length-1]],flag:{vc:"corss",fn:zmEditor.globalMethod.nav.initNavList.saveRadius}}
                    ];// "borderStyle",
                var items2 = zmEditor.component.setItems.config(config2);
                items2.forEach(function (e) {
                    tabs2.append(e); //zm-colorPicker
                });
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs2,0, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "borderTopColor", "borderTopColor", "cross_one", "sStyle", "initStyle"));
                var tabs3 = $('<div></div>');   //{type:'nav_hover_or_click',element:iSelected,flag:''}
                var config3 = [{type:'boxShadow',element: iSelected,flag: {style: "noTab"}}];
                var items3 = zmEditor.component.setItems.config(config3);
                items3.forEach(function (e) {
                    tabs3.append(e);
                });
                var tabs4 = $('<div></div>');
                var config4 = [
                    {type:'color_on',element:iSelected,flag:'mian_children_childrenSpan_bg'},
                    {type:'mian_Children_ChildrenSpan_width',element:iSelected,flag:''},
                            ];// "shadow", "shadowX", "shadowY",
                var items4 = zmEditor.component.setItems.config(config4);                                                                                                     //{type:'background_opacity',element:iSelected,flag:''}
                items4.forEach(function (e) {
                    tabs4.append(e);
                });
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs4,0, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.span, "backgroundColor", "backgroundColor", "cross_one", "sStyle", "initStyle"));

                tabs4.children(".zm-edit-slider-borderSpace_sc").on("click", function () {
                    iSelected = zmEditor.component.nowEdit();
                    if (iSelected.closest(".zm-component-nowEdit").attr("data-fullScreen") == "true") {
                        alert("请关闭全屏状态，可以设置竖线间隔粗细");
                    }
                });
                var tabs5 = $('<div></div>');   //{type:'nav_hover_or_click',element:iSelected,flag:''}
                var config5 = [ {type:'color_on',element:iSelected,flag:'dropdown_bg'},
                    {type:'nav_hover_or_click',element:iSelected,flag:''},
                ];//{type:'nav_hover_or_click',element:iSelected,flag:''}
                var items5 = zmEditor.component.setItems.config(config5);
                items5.forEach(function (e) {
                    tabs5.append(e);
                });
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs5,0, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "backgroundColor", "backgroundColor", "cross_one", "hHover", "initHover"));
                tabs5.append(zmEditor.globalMethod.nav.menuadministration());
                var tabsList = [{title: "常规", content: tabs1}, {title: "边框", content: tabs2}, {title: "阴影", content: tabs3}, {title: "间距", content: tabs4}, {title: "菜单", content: tabs5}];
                break;
            case "General-cross_two":
                var tabs1 = $('<div></div>');
                // tabs1.append(a);
                var config1 = [{type:'bannerController',element:iSelected,flag:{className:'.nav.Resize'}},
                    {type:'color_on',element:iSelected,flag:'mian_children_childrenLi_bg'},
                    {type:'color_on',element:iSelected,flag:'mian_children_childrenLi_hover_bg'},
                    {type:'color_on',element:iSelected,flag:'mian_children_childrenLi_color'},
                    {type:'color_on',element:iSelected,flag:'mian_children_childrenLi__hover_color'},
                    {type:'Family',element:iSelected.find("p"),flag:{title:'字体类型',style:'normal',param:'normal'}},
                    {type:'slider',element: iSelected,flag: {title: "文字大小", style: "noTab_noColor",isColor:false, param: "fontSize", size: [12,40]}},
                    {type:'fontStyle',element:iSelected,flag:{title:'',style:'normal',param:'',goal:"li"}},
                    {type:'paragraphStyle',element:iSelected,flag:{title:'',style:'normal',param:''}},
                    {type:'slider',element: iSelected,flag: {title: "字间距", style: "noTab_noColor",isColor:false, param: "fontSpace", size: [0,40]}}
                    ];//,{type:'fontEffect',element:iSelected,flag:{title:'文字颜色',style:'normal',param:'backgroundCot:iSelected,flag:'mian_children_childrenIndependentLi_hover_bg'}, {type:'color_on',element:iSelected,flag:'mian_children_childrenLi_color'}, {type:'color_on',element:iSelected,flag:'mian_children_childrenLi__hover_color'}, {type:'fontStyle',element:iSelected,flag:''}  ];//, "family", "size", "fontSpace", "paragraphStyle", "fontEffect", "navNode1Style"
                var items1 = zmEditor.component.setItems.config(config1);
                items1.forEach(function (e) {
                    tabs1.append(e);
                });
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs1, 1, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "backgroundColor", "backgroundColor", "cross_two", "sStyle", "initStyle"));
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs1, 2, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "backgroundColor", "backgroundColor", "cross_two", "hHover", "initHover"));
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs1, 3, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "color", "color", "cross_two", "sStyle", "initStyle"));
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs1, 4, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "color", "color", "cross_two", "hHover", "initHover"));
                nav_child_on(tabs1,iSelected);
                var tabs2 = $('<div></div>');
                var config2 = [{type:'color_on',element:iSelected,flag:'mian_children_childrenLi_btc'},
                    {type:'color_on',element:iSelected,flag:'mian_children_childrenLi_hover_btc'},
                    {type:'mian_children_childrenLi_btw',element:iSelected,flag:''},
                    {type:'mian_children_childrenLi_hover_btw',element:iSelected,flag:''},
                    {type:'color_on',element:iSelected,flag:'mian_children_childrenLi_bbc'},
                    {type:'color_on',element:iSelected,flag:'mian_children_childrenLi_hover_bbc'},
                    {type:'mian_children_childrenLi_bbw',element:iSelected,flag:''},
                    {type:'mian_children_childrenLi_hover_bbw',element:iSelected,flag:''},];// {type:'main_children_childrenLi_border_style',element:iSelected,flag:''},  {type:'radius_whole',element:iSelected,flag:'radius_whole_nav'}
                var items2 = zmEditor.component.setItems.config(config2);
                items2.forEach(function (e) {
                    tabs2.append(e);
                });
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs2, 0, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "borderTopColor", "borderTopColor", "cross_two", "sStyle", "initStyle"));
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs2, 1, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "borderTopColor", "borderTopColor", "cross_two", "hHover", "initHover"));
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs2, 4, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "borderBottomColor", "borderBottomColor", "cross_two", "sStyle", "initStyle"));
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs2, 5, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "borderBottomColor: ", "borderBottomColor", "cross_two", "hHover", "initHover"));

                var tabs3 = $('<div></div>');   //{type:'nav_hover_or_click',element:iSelected,flag:''}
                var config3 = [{type:'boxShadow',element: iSelected,flag: {style: "noTab"}}];
                var items3 = zmEditor.component.setItems.config(config3);
                items3.forEach(function (e) {
                    tabs3.append(e);
                });
                var tabs4 = $('<div></div>');
                var config4 = [ {type:'color_on',element:iSelected,flag:'mian_children_childrenSpan_bg'},{type:'mian_Children_ChildrenSpan_width',element:iSelected,flag:''},];
                var items4= zmEditor.component.setItems.config(config4);                                                                                                   // "shadow", "shadowX", "shadowY", ,{type:'background_opacity',element:iSelected,flag:''}
                items4.forEach(function (e) {
                    tabs4.append(e);
                });
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs4,0, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.span, "backgroundColor", "backgroundColor", "cross_two", "sStyle", "initStyle"));

                tabs4.children(".zm-edit-slider-borderSpace_sc").on("click", function () {
                    iSelected = zmEditor.component.nowEdit();
                    if (iSelected.closest(".zm-component-nowEdit").attr("data-fullScreen") == "true") {
                        alert("请关闭全屏状态，可以设置竖线间隔粗细");
                    }
                });
                var tabs5 = $('<div></div>');
                var config5 = [{type:'color_on',element:iSelected,flag:'dropdown_bg'},
                    {type:'nav_hover_or_click',element:iSelected,flag:''},
                ];
                var items5 = zmEditor.component.setItems.config(config5);
                items5.forEach(function (e) {
                    tabs5.append(e);
                });
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs5, 0, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "backgroundColor", "backgroundColor", "cross_two", "hHover", "initHover"));

                tabs5.append(zmEditor.globalMethod.nav.menuadministration());
                var tabsList = [{title: "常规", content: tabs1}, {title: "边框", content: tabs2}, {title: "阴影", content: tabs3}, {title: "间距", content: tabs4}, {title: "菜单", content: tabs5}];
                break;
            case "General-cross_three":

                var tabs1 = $('<div></div>');
                // tabs1.append(a);
                var config1 = [{type:'bannerController',element:iSelected,flag:{className:'.nav.Resize'}},
                    {type:'color_on',element:iSelected,flag:'mian_children_childrenLi_bg'},
                    {type:'color_on',element:iSelected,flag:'mian_children_childrenLi_hover_bg'},
                    {type:'color_on',element:iSelected,flag:'mian_children_childrenLi_color'},
                    {type:'color_on',element:iSelected,flag:'mian_children_childrenLi__hover_color'},
                    {type:'Family',element:iSelected.find("p"),flag:{title:'字体类型',style:'normal',param:'normal'}},
                    {type:'slider',element: iSelected,flag: {title: "文字大小", style: "noTab_noColor",isColor:false, param: "fontSize", size: [12,40]}},
                    {type:'fontStyle',element:iSelected,flag:{title:'',style:'normal',param:'',goal:"li"}},
                    {type:'paragraphStyle',element:iSelected,flag:{title:'',style:'normal',param:''}},
                    {type:'slider',element: iSelected,flag: {title: "字间距", style: "noTab_noColor",isColor:false, param: "fontSpace", size: [0,40]}}
                    ];//,{type:'fontEffect',element:iSelected,flag:{title:'文字颜色',style:'normal',param:'backgroundColor'}},
                var items1 = zmEditor.component.setItems.config(config1);
                items1.forEach(function (e) {
                    tabs1.append(e);
                });
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs1, 1, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "backgroundColor", "backgroundColor", "cross_three", "sStyle", "initStyle"));
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs1, 2, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "backgroundColor", "backgroundColor", "cross_three", "hHover", "initHover"));
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs1, 3, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "color ", "color", "cross_three", "sStyle", "initStyle"));
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs1, 4, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "color", "color", "cross_three", "hHover", "initHover"));
                nav_child_on(tabs1,iSelected);
                var tabs2 = $('<div></div>');
                var config2 = [{type:'color_on',element:iSelected,flag:'mian_children_childrenLi_border_color'},
                    {type:'color_on',element:iSelected,flag:'mian_children_childrenLi_hover_border_color'},
                    {type:'mian_children_childrenLi_bw',element:iSelected,flag:''},
                    {type:'mian_children_childrenLi_hover_bw',element:iSelected,flag:''},
                    {type:'radius',element:$(iSelected.children().children("li")),flag:{vc:"corss",fn:zmEditor.globalMethod.nav.initNavList.saveRadius}}
                     ];
                var items2 = zmEditor.component.setItems.config(config2);
                items2.forEach(function (e) {
                    tabs2.append(e);
                });

                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs2, 0, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "borderColor", "borderColor", "cross_three", "sStyle", "initStyle"));
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs2, 1, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "borderColor ", "borderColor", "cross_three", "hHover", "initHover"));

                var tabs3 = $('<div></div>');   //{type:'nav_hover_or_click',element:iSelected,flag:''}
                var config3 = [{type:'boxShadow',element: iSelected,flag: {style: "noTab"}}];
                var items3 = zmEditor.component.setItems.config(config3);
                items3.forEach(function (e) {
                    tabs3.append(e);
                });

                var tabs4 = $('<div></div>');
                var config4 = [{type:'mian_Children_ChildrenSpan_width',element:iSelected,flag:''}]; //"shadow","shadowX","shadowY",  , {type:'background_opacity',element:iSelected,flag:''}
                var items4 = zmEditor.component.setItems.config(config4);
                items4.forEach(function (e) {
                    tabs4.append(e);
                });

                tabs4.children(".zm-edit-slider-borderSpace_sc").on("click", function () {
                    iSelected = zmEditor.component.nowEdit();
                    if (iSelected.closest(".zm-component-nowEdit").attr("data-fullScreen") == "true") {
                        alert("请关闭全屏状态，可以设置竖线间隔粗细");
                    }
                });

                var tabs5 = $('<div></div>');
                var config5 = [{type:'color_on',element:iSelected,flag:'dropdown_bg'},
                    {type:'nav_hover_or_click',element:iSelected,flag:''},
                ];
                var items5 = zmEditor.component.setItems.config(config5);
                items5.forEach(function (e) {
                    tabs5.append(e);
                });
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs5, 0, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "backgroundColor", "backgroundColor", "cross_three", "sStyle", "initStyle"));

                tabs5.append(zmEditor.globalMethod.nav.menuadministration());
                var tabsList = [{title: "常规", content: tabs1}, {title: "边框", content: tabs2}, {title: "阴影", content: tabs3}, {title: "间距", content: tabs4}, {title: "菜单", content: tabs5}]
                break;
            case "General-vertical_one_one":
                // var a = pageset();
                // a.on("click", ".typeClasspageSet", function () {
                //     zmEditor.pageSet('pageSet');
                // });
                var tabs1 = $('<div></div>');
                // tabs1.append(a);
                var config1 = [{type:'bannerController',element:iSelected,flag:{className:'.nav.Resize'}},
                    {type:'color_on',element:iSelected,flag:'mian_children_childrenLi_bg'},
                    {type:'color_on',element:iSelected,flag:'mian_children_childrenLi_hover_bg'},
                    {type:'color_on',element:iSelected,flag:'mian_children_childrenLi_color'},
                    {type:'color_on',element:iSelected,flag:'mian_children_childrenLi__hover_color'},
                    {type:'Family',element:iSelected.find("p"),flag:{title:'字体类型',style:'normal',param:'normal'}},
                    {type:'slider',element: iSelected,flag: {title: "文字大小", style: "noTab_noColor",isColor:false, param: "fontSize", size: [12,40]}},
                    {type:'fontStyle',element:iSelected,flag:{title:'',style:'normal',param:'',goal:"li"}},
                    {type:'paragraphStyle',element:iSelected,flag:{title:'',style:'normal',param:''}},
                    {type:'slider',element: iSelected,flag: {title: "字间距", style: "noTab_noColor",isColor:false, param: "fontSpace", size: [0,40]}}
                ];

                var items1 = zmEditor.component.setItems.config(config1);
                items1.forEach(function (e) {
                    tabs1.append(e);
                });

                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs1, 1, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "backgroundColor", "backgroundColor", "vertical_one", "sStyle", "initStyle"));
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs1, 2, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "backgroundColor", "backgroundColor", "vertical_one", "hHover", "initHover"));
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs1, 3, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "color", "color", "vertical_one", "sStyle", "initStyle"));
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs1, 4, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "color", "color", "vertical_one", "hHover", "initHover"));

                nav_child_vertical_on(tabs1);
                nav_child_vertical_on_child_remove(tabs1)
                var tabs2 = $('<div></div>');
                var config2 = [{type:'color_on',element:iSelected,flag:'mian_children_childrenLi_btc'},
                    {type:'color_on',element:iSelected,flag:'mian_children_childrenLi_hover_btc'},
                    {type:'mian_children_childrenLi_btw',element:iSelected,flag:''},
                    {type:'mian_children_childrenLi_hover_btw',element:iSelected,flag:''},
                    {type:'color_on',element:iSelected,flag:'mian_children_childrenLi_bbc'},
                    {type:'color_on',element:iSelected,flag:'mian_children_childrenLi_hover_bbc'},
                    {type:'mian_children_childrenLi_bbw',element:iSelected,flag:''},
                    {type:'mian_children_childrenLi_hover_bbw',element:iSelected,flag:''},
                    {type:'main_children_childrenLi_border_style',element:iSelected,flag:''},
                    // {type:'radius_whole',element:iSelected,flag:'radius_whole_all_child'}
                    ];
                var items2 = zmEditor.component.setItems.config(config2);
                items2.forEach(function (e) {
                    tabs2.append(e);
                });
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs2, 0, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "borderTopColor", "borderTopColor", "vertical_one", "sStyle", "initStyle"));
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs2, 1, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "borderTopColor", "borderTopColor", "vertical_one", "hHover", "initHover"));
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs2, 4, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "borderBottomColor", "borderBottomColor", "vertical_one", "sStyle", "initStyle"));
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs2, 5, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "borderBottomColor", "borderBottomColor", "vertical_one", "hHover", "initHover"));


                var tabs3 = $('<div></div>');
                var config3 = [{type:'color_on',element:iSelected,flag:'dropdown_bg'},
                    {type:'nav_hover_or_click',element:iSelected,flag:''},
                ];
                var items3 = zmEditor.component.setItems.config(config3);
                items3.forEach(function (e) {
                    tabs3.append(e);
                });
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs3, 0, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "backgroundColor", "backgroundColor", "cross_three", "sStyle", "initStyle"));
                tabs3.append(zmEditor.globalMethod.nav.menuadministration());
                var tabsList = [{title: "导航条", content: tabs1}, {title: "边框", content: tabs2}, {
                    title: "菜单",
                    content: tabs3
                }]; //{title:"间距",content:tabs3},
                break;
            case "General-vertical_two_one":
                var tabs1 = $('<div></div>');
                var config1 = [{type:'bannerController',element:iSelected,flag:{className:'.nav.Resize'}},
                    {type:'color_on',element:iSelected,flag:'mian_children_childrenLi_bg'},
                    {type:'color_on',element:iSelected,flag:'mian_children_childrenLi_hover_bg'},
                    {type:'color_on',element:iSelected,flag:'mian_children_childrenLi_color'},
                    {type:'color_on',element:iSelected,flag:'mian_children_childrenLi__hover_color'},
                    {type:'Family',element:iSelected.find("p"),flag:{title:'字体类型',style:'normal',param:'normal'}},
                    {type:'slider',element: iSelected,flag: {title: "文字大小", style: "noTab_noColor",isColor:false, param: "fontSize", size: [12,40]}},
                    {type:'fontStyle',element:iSelected,flag:{title:'',style:'normal',param:'',goal:"li"}},
                    {type:'paragraphStyle',element:iSelected,flag:{title:'',style:'normal',param:''}},
                    {type:'slider',element: iSelected,flag: {title: "字间距", style: "noTab_noColor",isColor:false, param: "fontSpace", size: [0,40]}}
                ];
                var items1 = zmEditor.component.setItems.config(config1);
                items1.forEach(function (e) {
                    tabs1.append(e);
                });

                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs1, 1, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "backgroundColor", "backgroundColor", "vertical_two", "sStyle", "initStyle"));
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs1, 2, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "backgroundColor", "backgroundColor", "vertical_two", "hHover", "initHover"));
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs1, 3, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "color ", "color", "vertical_two", "sStyle", "initStyle"));
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs1, 4, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "color", "color", "vertical_two", "hHover", "initHover"));

                nav_child_vertical_on(tabs1);
                nav_child_vertical_on_child_remove(tabs1)

                var tabs2 = $('<div></div>');
                var config2 = [{type:'color_on',element:iSelected,flag:'mian_children_childrenLi_border_color'},
                    {type:'color_on',element:iSelected,flag:'mian_children_childrenLi_hover_border_color'},
                    {type:'mian_children_childrenLi_bw',element:iSelected,flag:''},
                    {type:'mian_children_childrenLi_hover_bw',element:iSelected,flag:''},
                    {type:'main_children_childrenLi_border_style',element:iSelected,flag:''},
                    {type:'radius',element:$(iSelected.children().children("li")),flag:{vc:"corss",fn:zmEditor.globalMethod.nav.initNavList.saveRadius}}
                    ];

                var items2 = zmEditor.component.setItems.config(config2);

                items2.forEach(function (e) {
                    tabs2.append(e);
                });
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs2, 0, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "borderColor", "borderColor", "vertical_two", "sStyle", "initStyle"));
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs2, 1, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "borderColor ", "borderColor", "vertical_two", "hHover", "initHover"));
                var tabs3 = $('<div></div>');
                var config3 = [{type:'mian_children_childrenSpan_height',element:iSelected,flag:''}]; //"shadow","shadowX","shadowY", , {type:'background_opacity',element:iSelected,flag:''}
                var items3 = zmEditor.component.setItems.config(config3);
                items3.forEach(function (e) {
                    tabs3.append(e);
                });
                tabs3.children(".zm-edit-slider-borderSpace_sc").on("click", function () {
                    iSelected = zmEditor.component.nowEdit();
                    if (iSelected.closest(".zm-component-nowEdit").attr("data-fullScreen") == "true") {
                        alert("请关闭全屏状态，可以设置竖线间隔粗细");
                    }
                });

                var tabs4 = $('<div></div>');
                var config4 = [{type:'color_on',element:iSelected,flag:'dropdown_bg'},{type:'nav_hover_or_click',element:iSelected,flag:''},];
                var items4 = zmEditor.component.setItems.config(config4);
                items4.forEach(function (e) {
                    tabs4.append(e);
                });
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs4, 0, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "backgroundColor", "backgroundColor", "cross_three", "sStyle", "initStyle"));
                tabs4.append(zmEditor.globalMethod.nav.menuadministration());
                var tabsList = [{title: "导航条", content: tabs1}, {title: "边框", content: tabs2}, {
                    title: "间距",
                    content: tabs3
                }, {title: "菜单", content: tabs4}];
                break;

            case "General-vertical_three_one":
                var tabs1 = $('<div></div>');
                // tabs1.append(a);                                                                                                                                                                                                                                                                                                                                                                        {type:'fontStyle',element:iSelected,flag:''}
                var config1 = [{type:'bannerController',element:iSelected,flag:{className:'.nav.Resize'}},
                    {type:'color_on',element:iSelected,flag:'mian_children_childrenLi_bg'},
                    {type:'color_on',element:iSelected,flag:'mian_children_childrenLi_hover_bg'},
                    {type:'color_on',element:iSelected,flag:'mian_children_childrenLi_color'},
                    {type:'color_on',element:iSelected,flag:'mian_children_childrenLi__hover_color'},
                    {type:'Family',element:iSelected.find("p"),flag:{title:'字体类型',style:'normal',param:'normal'}},
                    {type:'slider',element: iSelected,flag: {title: "文字大小", style: "noTab_noColor",isColor:false, param: "fontSize", size: [12,40]}},
                    {type:'fontStyle',element:iSelected,flag:{title:'',style:'normal',param:'',goal:"li"}},
                    {type:'paragraphStyle',element:iSelected,flag:{title:'',style:'normal',param:''}},
                    {type:'slider',element: iSelected,flag: {title: "字间距", style: "noTab_noColor",isColor:false, param: "fontSpace", size: [0,40]}}
                ];
                var items1 = zmEditor.component.setItems.config(config1);
                items1.forEach(function (e) {
                    tabs1.append(e);
                });
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs1, 1, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "backgroundColor", "backgroundColor", "vertical_three", "sStyle", "initStyle"));
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs1, 2, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "backgroundColor", "backgroundColor", "vertical_three", "hHover", "initHover"));
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs1, 3, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "color", "color", "vertical_three", "sStyle", "initStyle")); //zm_nav_general_vertical_three_one
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs1, 4, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "color", "color", "vertical_three", "hHover", "initHover"));
                nav_child_vertical_on(tabs1);
                nav_child_vertical_on_child_remove(tabs1)
                var tabs2 = $('<div></div>');
                var config2 = [{type:'borderWidth_nav',element:iSelected,flag:''},
                    {type:'color_on',element:iSelected,flag:'mian_border_color'},
                    {type:'main_children_childrenLi_border_style',element:iSelected,flag:''},
                    {type:'radius',element:[iSelected.children().children("li")[0],iSelected.children().children("li")[iSelected.children().children("li").length-1]],flag:{vc:"vertical",fn:zmEditor.globalMethod.nav.initNavList.saveRadius}}
                    ];
                var items2 = zmEditor.component.setItems.config(config2);
                items2.forEach(function (e) {
                    tabs2.append(e); //zm-colorPicker
                });
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs2, 1, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "borderTopColor", "borderTopColor", "vertical_three", "sStyle", "initStyle"));

                var tabs3 = $('<div></div>');
                var config3 = [{type:'color_on',element:iSelected,flag:'mian_children_childrenSpan_bg'}, {type:'mian_children_childrenSpan_height',element:iSelected,flag:''}];
                var items3 = zmEditor.component.setItems.config(config3);                                                                                                     //"shadow", "shadowX", "shadowY",  , {type:'background_opacity',element:iSelected,flag:''}
                items3.forEach(function (e) {
                    tabs3.append(e);
                });
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs3, 0, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.span, "backgroundColor", "backgroundColor", "vertical_three", "sStyle", "initStyle"));
                tabs3.children(".zm-edit-slider-borderSpace_sc").on("click", function () {
                    iSelected = zmEditor.component.nowEdit();
                    if (iSelected.closest(".zm-component-nowEdit").attr("data-fullScreen") == "true") {
                        alert("请关闭全屏状态，可以设置竖线间隔粗细");
                    }
                });
                var tabs4 = $('<div></div>');
                var config4 = [{type:'color_on',element:iSelected,flag:'dropdown_bg'},  {type:'nav_hover_or_click',element:iSelected,flag:''},];   //   {type:'mian_children_childrenSpan_height',element:iSelected,flag:''}
                var items4 = zmEditor.component.setItems.config(config4);
                items4.forEach(function (e) {
                    tabs4.append(e);
                });
                zmEditor.globalMethod.nav.OneType.initialize_nva_li_style(tabs4, 0, zmEditor.globalMethod.nav.OneType.initialize_nva_li_style_callbacka(iSelected, zmEditor.globalMethod.nav.OneType.li, "backgroundColor", "backgroundColor", "cross_three", "sStyle", "initStyle"));
                tabs4.append(zmEditor.globalMethod.nav.menuadministration());
                var tabsList = [{title: "导航条", content: tabs1}, {title: "边框", content: tabs2}, {
                    title: "间距",
                    content: tabs3
                }, {title: "菜单", content: tabs4}];
                break;
            default:
                break;

        };
        function pageset() {
            return $("<div><span class='typeClasspageSet' style='width: 100px;height: 50px;  line-height: 50px;" +
                "display: block;background-color:#4ab1a7;text-align: center; color: #fff;border-radius: 8px;margin: 7px 0 0 40px;'>" +
                "页面设置</span></div>");
        };
        function nav_child_vertical_on(tabs) {
            tabs.children(".zm-edit-text-bannerController").children("div:eq(0)").on("click", function () {
                var iSelected = zmEditor.component.nowEdit(), ul = iSelected.children("ul");
                if (iSelected.closest(".zm-component-nowEdit").attr("data-vertical-fullScreen") == "true") {
                    zmEditor.globalMethod.nav.main_child_child_style(parseInt(iSelected.css("width")),parseInt(iSelected.attr("data-type-FullMian")),iSelected);//ye添加.
                } else {
                    zmEditor.globalMethod.nav.main_child_child_style(parseInt(iSelected.css("width")),parseInt(iSelected.attr("data-type-NoFullMian")),iSelected);//ye添加.
                }
            });
        }
        function nav_child_vertical_on_child_remove(tabs1) {
            tabs1.children(".zm-edit-text-bannerController").children(".zm-edit-text-bannerController-Onediv").each(function (index, ele) {
                if (index == 0) {
                    return true;
                }
                $(this).remove();
            })
            tabs1.children(".zm-edit-text-bannerController").css("height", "70px");
        }
        function nav_child_on(tabs,iSelected) {
            var iSel_ul_li_w, iSel_ul_li_br;
            tabs.children(".zm-edit-text-bannerController").children("div:eq(0)").on("click", function () {
                //  iSelected = zmEditor.component.nowEdit(),
                var   ul = iSelected.children("ul"), a, b, c,d, w, f, iSel_ul_li_mian, e_zm_bS, e_zm_Sc,initial_li_width;
                if(iSelected.hasClass("zm-component-main")){}else{ iSelected=iSelected.find(".zm-component-main")};
                if (iSelected.closest(".zm-component-nowEdit").attr("data-fullScreen") == "true") {
                    zmEditor.globalMethod.nav.main_child_child_style(parseInt(iSelected.attr("data-type-FullMian")),parseInt(iSelected.css("height")),iSelected);//ye添加.
                    e_zm_bS = $(this).closest(".zm-dialog").find(".zm-edit-slider-borderSpace"); //全屏默认不让调整宽度
                    if (e_zm_bS.length > 0) {
                        console.log(123);
                        e_zm_bS.find(".zm-edit-slider-child").css("backgroundColor", "#ebebe4"); //设置间距框的js
                        e_zm_bS.children("input[type='text']").attr("disabled", "disabled"); //设置间距框的js
                        e_zm_bS.css("position", "relative"); //设置间距框的js
                        e_zm_bS.append($("<div class='zm-edit-slider-borderSpaceOnediv' style='width: 450px;height: 72px;position: absolute;left: 0;top: 0;'></div>"))
                    };
                    e_zm_Sc = $(this).closest(".zm-dialog").find(".zm-edit-slider-borderSpace_sc");
                    e_zm_Sc.css("position", "relative"); //设置间距框的js
                    e_zm_Sc.append($("<div class='zm-edit-slider-borderSpace_scOnediv' style='width: 450px;height: 72px;position: absolute;left: 0;top: 0;background-color:rgba(169,169,169,0.4);'></div>"));
                    $(this).closest(".zm-dialog").find(".zm-edit-slider-borderSpace").find(".zm-edit-slider-child").css("left", "0px");
                    $(this).closest(".zm-dialog").find(".zm-edit-slider-borderSpace").children("input[type='text']").val("0");
                    } else {
                    zmEditor.globalMethod.nav.main_child_child_style(parseInt(iSelected.attr("data-type-NoFullMian")),parseInt(iSelected.css("height")),iSelected);//ye添加.
                    e_zm_bS = $(this).closest(".zm-dialog").find(".zm-edit-slider-borderSpace");
                    if (e_zm_bS.length > 0) {
                        e_zm_bS.find(".zm-edit-slider-child").css("backgroundColor", "deepskyblue"); //设置间距框的js
                        e_zm_bS.children("input[type='text']").removeAttr("disabled"); //设置间距框的js
                        e_zm_bS.children(".zm-edit-slider-borderSpaceOnediv").remove(); //设置间距框的js
                        e_zm_bS.css("position", ""); //设置间距框的js
                      }
                    e_zm_Sc = $(this).closest(".zm-dialog").find(".zm-edit-slider-borderSpace_sc");
                    e_zm_Sc.css("position", ""); //设置间距框的js
                    e_zm_Sc.children(".zm-edit-slider-borderSpace_scOnediv").remove();
                }
            });
        }
        tabs = zmEditor.component.setItems.tabs(tabsList);
        box.css({"width": "", "height": "685px"});//400px
        box.addClass("data-nav-Independent");
        return tabs;
    },
};
zmEditor.globalMethod.nav = {
    Nav: function (isSelect, mark, content) {
        return new zmEditor.globalMethod.nav.init(isSelect, mark, content);
    },
    n: "",
    data: {//存储数据
        arrLike:{},
        dataString: {},
        pageSet:{
            ObJect:"",
            html:'<ul class="zm-page-setting-ul" style="width:430px; position: relative">'
            +'<li class="zm-page-setting-li zm-page-homePage" data-nav-display="constant">'+
            '<div class="zm-nav-oneLi-div" ><span class="zm-nav-yuliu_shousuo"></span><span class="zm-nav-yuliu_line"></span>' +
            '<i class="fa fa-th" ></i>' +
            '<a class="zm-page-setting-a" >首页</a>' +
            '<span class="pageSeteyes fa fa-eye" style="margin-left: 10px"></span>' +
            '<i class="fa fa-cog zm-page-setting-right-icon"></i><b>完成</b>' +
            '</div>' +
            '<input type="text" class="zm-nav-oneLi-input">' +
            '</li>'
            +'<li class="zm-page-setting-li" data-nav-display="block">' +
            '<div  class="zm-nav-oneLi-div" ><span class="zm-nav-yuliu_shousuo"><span class="zm-nav-yuliu_line"></span></span><i class="fa fa-th"></i><a class="zm-page-setting-a" >企业动态</a><span class="pageSeteyes fa fa-eye" style="margin-left: 10px"></span><i class="fa fa-cog zm-page-setting-right-icon"></i>  <b>完成</b></div> ' +
            '<input type="text" class="zm-nav-oneLi-input">' +
            '</li>'
            +'<li class="zm-page-setting-li" data-nav-display="block">' +
            '<div class="zm-nav-oneLi-div" ><span class="zm-nav-yuliu_shousuo"><span class="zm-nav-yuliu_line"></span></span><i class="fa fa-th" ></i><a class="zm-page-setting-a" >企业新闻</a><span class="pageSeteyes fa fa-eye" style="margin-left: 10px"></span><i class="fa fa-cog zm-page-setting-right-icon"></i> <b>完成</b></div>' +
            '<input type="text" class="zm-nav-oneLi-input">' +
            '</li>'
            +'<li class="zm-page-setting-li" data-nav-display="block">' +
            '<div class="zm-nav-oneLi-div" ><span class="zm-nav-yuliu_shousuo"><span class="zm-nav-yuliu_line"></span></span><i class="fa fa-th" ></i><a class="zm-page-setting-a" >关于我们</a><span class="pageSeteyes fa fa-eye" style="margin-left: 10px"></span><i class="fa fa-cog zm-page-setting-right-icon"></i> <b>完成</b></div>' +
            '<input type="text" class="zm-nav-oneLi-input">' +
            '</li>'
            +'<li class="zm-page-setting-li" data-nav-display="block">' +
            '<div class="zm-nav-oneLi-div" ><span class="zm-nav-yuliu_shousuo"><span class="zm-nav-yuliu_line"></span></span><i class="fa fa-th" ></i><a class="zm-page-setting-a" >友情链接</a><span class="pageSeteyes fa fa-eye" style="margin-left: 10px"></span><i class="fa fa-cog zm-page-setting-right-icon"></i> <b>完成</b></div>' +
            '<input type="text" class="zm-nav-oneLi-input">' +
            '</li>'
            +'</ul>',

        },
        savePageSet:function(){
            if($(".zm-dialog-box-pageSet").length==0){
                console.log($(".zm-dialog-box-pageSet"));
                return zmEditor.globalMethod.nav.data.pageSet.html;
            }else{
                return zmEditor.globalMethod.nav.data.pageSet.html=$(".zm-dialog-box-pageSet").find(".mCSB_container>ul")[0].outerHTML;
            }
        }
    },
    init: function (isSelect, mark, content) {
        var a, b, c, d,e,f,style_nav;
        a = isSelect[0].classList[4];
        b = zmEditor.globalMethod.nav.global_verOrcross_type(a);
        console.log(b);
        this.navMian = isSelect;  //进行对上次拖拽的nav保存;
        this.navMian.removeClass(this.navMian[0].classList[5]);//移除css样式
        this.id = a;
        e=new Date().getTime();
        // a=a.toLowerCase();
        this.navMian.attr("data-"+a,""+a+e);
        zmEditor.globalMethod.nav.n = this.navMian;
        f="data-"+a+e;
        zmEditor.globalMethod.nav.data.arrLike[f]={};

        style_nav=$("<style class='style_nav_"+f+"'></style>");
        isSelect.append(style_nav);
        d = a;

        zmEditor.globalMethod.nav.initNavList.nav_ele_style_assignment(zmEditor.globalMethod.nav.OneType.li, d, "sStyle", "initStyle","li",f);//style 去掉后两个参数就是单版本
        zmEditor.globalMethod.nav.initNavList.nav_ele_style_assignment(zmEditor.globalMethod.nav.OneType.li, d, "hHover", "initHover","li",f);//hoverstyle
        zmEditor.globalMethod.nav.initNavList.nav_ele_style_assignment_initclickhover(zmEditor.globalMethod.nav.OneType.li, d, "clickhover", "initclickhover","li",f);//clickhover所在的元素

        zmEditor.globalMethod.nav.initNavList.dropdownBg(zmEditor.globalMethod.nav.TwoType.ul.sStyle, "backgroundColor","dropdownBg",f,d); //下拉列表的颜色  //

        zmEditor.globalMethod.nav.initNavList.nav_ele_style_Independent_assignment(zmEditor.globalMethod.nav.OneType.li, "eventClass","li",f); //li下的事件类名    // 待删除
        zmEditor.globalMethod.nav.initNavList.nav_ele_style_Independent_assignment(zmEditor.globalMethod.nav, "hover_or_click_show_string", "hover_or_click_show_string",f); //初始化nav的展现方式  // 待删除

        zmEditor.globalMethod.nav.initNavList.nav_ele_style_Independent_assignment_callback(zmEditor.globalMethod.nav.OneType.li, "nav_li_Independent_position","li",f,b); //li下的nav_li_Independent_position 独立的背景色索引初始化、 待删除

        zmEditor.globalMethod.nav.initNavList.nav_ele_style_assignment(zmEditor.globalMethod.nav.OneType.span, d, "sStyle", "initStyle","span",f);//初始化span
        zmEditor.globalMethod.nav.initNavList.nav_ele_style_assignment(zmEditor.globalMethod.nav.OneType.mian, d, "sStyle", "initStyle","mian",f);//初始化mian

        console.log(zmEditor.globalMethod.nav.data.arrLike[f].hover_or_click_show_string);
        console.log(zmEditor.globalMethod.nav.data.arrLike[f].li.hHover);

        zmEditor.globalMethod.nav.initialize_html_callback($(zmEditor.globalMethod.nav.data.pageSet.html),this.navMian,zmEditor.globalMethod.nav.hover_or_click_show(zmEditor.globalMethod.nav.data.arrLike[f].hover_or_click_show_string));


    },
    initNavList: {
        // 待删除
        nav_ele_style_Independent_assignment_callback:function (ele,sStyle,str,f,b) {
            if(zmEditor.globalMethod.nav.initNavList.IndependentConfirm(b)){
                zmEditor.globalMethod.nav.data.arrLike[f][str][sStyle]=ele[sStyle];
                return;
            }
        },
        // 待删除
        // 待删除
        IndependentConfirm:function (string,fn) { //判断是不是独立的nav
            return string =="one_four" || string == "one_two" || string == "two_one" || string == "two_two" || string == "vertical_one_one" || string == "vertical_three_one";
        },
        // 待删除
        nav_ele_style_assignment_initclickhover:function(ele, d, sStyle, initStyle,str,f){//3月31日第二版改动
            zmEditor.globalMethod.nav.data.arrLike[f][str][sStyle]=ele[initStyle][d];
        },
        // 待删除
        nav_ele_style_Independent_assignment:function(ele,sStyle,str,f){
            if(sStyle==str){
               zmEditor.globalMethod.nav.data.arrLike[f][sStyle]=ele[sStyle];
            }else{
                zmEditor.globalMethod.nav.data.arrLike[f][str][sStyle]=ele[sStyle];
            }
        },
        // 待删除
        dropdownBg:function(ele,sStyle,str,f,d){
            zmEditor.globalMethod.nav.data.arrLike[f][str]=ele[sStyle][d];
        },
        nav_ele_style_assignment: function (ele, d, sStyle, initStyle,str,f,filter) {
            if(!zmEditor.globalMethod.nav.data.arrLike[f][str])zmEditor.globalMethod.nav.data.arrLike[f][str]={};//如果参数不为对象，赋值为对象
            if(!zmEditor.globalMethod.nav.data.arrLike[f][str][sStyle])zmEditor.globalMethod.nav.data.arrLike[f][str][sStyle]={};
                for (var k in ele[sStyle]) {
                    if(filter){if(k==filter[0]||k==filter[1]||k==filter[2])continue;}
                    // typeof ele[initStyle][k] === "object" ? ( ele[sStyle][k] = ele[initStyle][k][d] ? ele[initStyle][k][d] : "") : ele[sStyle][k] = ele[initStyle][k];
                    if(typeof ele[initStyle][k] === "object"){
                        if(ele[initStyle][k][d]){
                            zmEditor.globalMethod.nav.data.arrLike[f][str][sStyle][k]=ele[initStyle][k][d];
                        }else{
                            zmEditor.globalMethod.nav.data.arrLike[f][str][sStyle][k]="";
                        }
                    }else{
                        zmEditor.globalMethod.nav.data.arrLike[f][str][sStyle][k]= ele[initStyle][k];
                    }
        }
        },
        styleCallback_initialize_cg_rs: function (select, j, k,f,a,radius_arr) {//单执行所对应的样式赋值、   d,  b,  // js版本
            if(j.substr(-6, 6)== "Radius"){
                    zmEditor.globalMethod.nav.initNavList.styleCallback_initialize_radius(select,zmEditor.globalMethod.nav.data.arrLike[f][k].sStyle[j],a,radius_arr)
            }else if(/border.*Width/i.test(j)){

                zmEditor.globalMethod.nav.initNavList.initBorder(select,f,a,j);
            }else{
                select.children().children("li").each(function (i, e) {
                        $(this).css(j, zmEditor.globalMethod.nav.data.arrLike[f][k].sStyle[j]);
                });
            }
        },

        styleCallback_initialize_radius: function (select, style, i, radius_arr) {//初始圆角样式设置
            //此时的i为a 就是类名
            radius_arr.push(style);
            console.log(i);
            zmEditor.globalMethod.nav.initNavList.setallRadius_assignment(zmEditor.globalMethod.nav.initNavList.getRadiusEle(select,i),i,radius_arr)
        },
        styleCallback:function (select,f,a) {  //js版本       b,  ,d
            var mian_str=[],li_str=[],span_str=[],radius_arr=[];

            zmEditor.globalMethod.nav.initNavList.againCalculationMianWidth(select,f); //重新计算main的宽度,为兼容用户没有托拽nav就操作页面设置弹窗

            for (var k in zmEditor.globalMethod.nav.data.arrLike[f]) {
                for (var j in zmEditor.globalMethod.nav.data.arrLike[f][k].sStyle){
                    console.log(zmEditor.globalMethod.nav.data.arrLike[f][k].sStyle[j]);
                    switch (k) {
                        case "mian":
                            select.css(j, zmEditor.globalMethod.nav.data.arrLike[f][k].sStyle[j]);
                            // mian_str.push(j+":"+zmEditor.globalMethod.nav.data.arrLike[f][k].sStyle[j]+";");
                            break;
                        case "span":
                            // select.children("").children("span").css(j, zmEditor.globalMethod.nav.data.arrLike[f][k].sStyle[j]);
                            select.children("ul").children("span").css(j, zmEditor.globalMethod.nav.data.arrLike[f][k].sStyle[j]);   //添加小点到mian层兼容改动
                            // span_str.push(j+":"+zmEditor.globalMethod.nav.data.arrLike[f][k].sStyle[j]+";")
                            break;
                        case "li":
                            switch (a) {
                                case "zm_nav_general_cross_one_one":
                                case "zm_nav_general_cross_one_two":
                                case "zm_nav_general_cross_one_three":
                                case "zm_nav_general_cross_one_four":
                                case "zm_nav_general_cross_one_five":
                                    zmEditor.globalMethod.nav.initNavList.styleCallback_initialize_cg_rs(select, j, k,f,a,radius_arr);  // b,  d,
                                    zmEditor.globalMethod.nav.initNavList.currentPage(select,f,k,a);
                                    break;
                                // case "zm_nav_general_cross_two_one":
                                //     zmEditor.globalMethod.nav.initNavList.styleCallback_initialize_cg_rs(select, b, j, d, k,f,a,radius_arr);
                                //     // li_str.push(j+":",zmEditor.globalMethod.nav.data.arrLike[f][k].sStyle[j]+";")
                                //     // for(var m in zmEditor.globalMethod.nav.data.arrLike[f][k].hHover){
                                //     //     $(select.children().children("li")[zmEditor.globalMethod.nav.data.arrLike[f][k].clickhover]).css(m,zmEditor.globalMethod.nav.data.arrLike[f][k].hHover[m]);
                                //     // }
                                //     zmEditor.globalMethod.nav.initNavList.currentPage(select,f,k,a);
                                //     break;
                                case "zm_nav_general_vertical_one_one":
                                case "zm_nav_general_vertical_two_one":
                                case "zm_nav_general_vertical_three_one":
                                    if(j=="height")continue;  //纵向导航一级li不设置高度，需要continue关键字跳出
                                    zmEditor.globalMethod.nav.initNavList.styleCallback_initialize_cg_rs(select, j,  k,f,a,radius_arr); // b,  d,
                                    // li_str.push(j+":",zmEditor.globalMethod.nav.data.arrLike[f][k].sStyle[j]+";")
                                    // for(var m in zmEditor.globalMethod.nav.data.arrLike[f][k].hHover){
                                    //     $(select.children().children("li")[zmEditor.globalMethod.nav.data.arrLike[f][k].clickhover]).css(m,zmEditor.globalMethod.nav.data.arrLike[f][k].hHover[m]);
                                    // }
                                    zmEditor.globalMethod.nav.initNavList.currentPage(select,f,k,a);
                                    break;
                                default:
                                        select.children().children("li").css(j,zmEditor.globalMethod.nav.data.arrLike[f][k].sStyle[j]);
                                   // for(var m in zmEditor.globalMethod.nav.data.arrLike[f][k].hHover){
                                   //     $(select.children().children("li")[zmEditor.globalMethod.nav.data.arrLike[f][k].clickhover]).css(m,zmEditor.globalMethod.nav.data.arrLike[f][k].hHover[m]);
                                   // }
                                    zmEditor.globalMethod.nav.initNavList.currentPage(select,f,k,a);
                                    break;
                            }
                            break;
                        default:
                            break;
                    }
                }
            }
            console.log(zmEditor.globalMethod.nav.data.arrLike[f]);
            console.log(zmEditor.globalMethod.nav.data.arrLike[f]["mian"].sStyle);
            console.log(zmEditor.globalMethod.nav.data.arrLike[f]["li"].sStyle);
            console.log(zmEditor.globalMethod.nav.data.arrLike[f]["li"].sStyle);
            console.log(mian_str)
            console.log(span_str)
            // zmEditor.globalMethod.nav.styleCallback_initialize_add_regexp(style_nav,'div[data-'+a+'='+'"'+a+e+'"] li',zmEditor.globalMethod.lowerStr(li_str.join("")));
            return "我初始化了";
        },
        hover_styleCallback:  function (navMian,f,a){   //b,
            navMian.children().children("li").each(function(index,ele){
                zmEditor.globalMethod.nav.initNavList.endHover($(this),"sStyle","hHover","mouseenter" + zmEditor.globalMethod.nav.data.arrLike[f].li.eventClass.mouseenter.color, "mouseleave" + zmEditor.globalMethod.nav.data.arrLike[f].li.eventClass.mouseleave.color,f);
                zmEditor.globalMethod.nav.initNavList.endClick($(this),f,navMian,index,a);
            })
    },
        // 待删除
        hover: function (ele, css, style, hover, evenType1, evenType2,f) {
            if (css == "backgroundColor") {
                ele.off(zmEditor.globalMethod.nav.data.arrLike[f].li.eventClass.mouseenter[css]);
                ele.on(evenType1, function () {
                    console.log('我执行了');
                    ele.stop().animate({"backgroundColor":hover},1000, "linear");
                    // ele.animate({[css]: hover}, 1000, "linear");
                });
                ele.on(evenType2, function () {
                    console.log('我走了');
                    $(this).stop(true, true);
                    ele.css(css, style);
                    console.log(style);
                });
            } else {
                ele.off(zmEditor.globalMethod.nav.data.arrLike[f].li.eventClass.mouseenter[css]);
                ele.on(evenType1, function () {
                    console.log('我hover了');
                    ele.css(css, hover);
                    console.log(hover)
                });
                ele.on(evenType2, function () {
                    console.log('我离开了');
                    ele.css(css, style);
                    console.log(style)
                });
            }
        },
        // 待删除
        // 待删除
        specialHover: function (ele, css, style, hover, evenType1, evenType2,index,f) {
            if (css == "backgroundColor") {
                ele.off( zmEditor.globalMethod.nav.data.arrLike[f].li.eventClass.mouseenter.backgroundColor);
                ele.on(evenType1, function () {
                    ele.stop().animate({"backgroundColor":hover},1000, "linear");
                });
                ele.on(evenType2, function () {
                    $(this).stop(true, true);
                    ele.css(css,"#fff");//独立背景色比较特殊
                    $(ele.closest("ul").children("li")[zmEditor.globalMethod.nav.data.arrLike[f].li.nav_li_Independent_position]).css({"backgroundColor":style});
                });
            } else if (css == "color") {
                ele.off( zmEditor.globalMethod.nav.data.arrLike[f].li.eventClass.mouseenter.color);
                ele.on(evenType1, function () {
                    console.log('我hover了');
                    ele.css(css, hover);
                });
                ele.on(evenType2, function () {
                    console.log('我color离开了');
                    ele.css(css, style);
                    $(ele.closest("ul").children("li")[zmEditor.globalMethod.nav.data.arrLike[f].li.nav_li_Independent_position]).css({"color":zmEditor.globalMethod.nav.data.arrLike[f].li.hHover.color});
                });
            }
            // ele.off("click"+zmEditor.globalMethod.nav.OneType.li.eventClass.click.click);
            ele.off("click"+zmEditor.globalMethod.nav.data.arrLike[f].li.eventClass.click.click);
            console.log("我解绑了");
            // ele.on("click"+zmEditor.globalMethod.nav.OneType.li.eventClass.click.click,function(){
            ele.on("click"+zmEditor.globalMethod.nav.data.arrLike[f].li.eventClass.click.click,function(){
               ele.closest("ul").children("li") .each(function(){
                    // $(this).css({"backgroundColor":"#fff","color":zmEditor.globalMethod.nav.OneType.li.sStyle.color});//清空所有背景色.
                    $(this).css({"backgroundColor":"#fff","color":zmEditor.globalMethod.nav.data.arrLike[f].li.sStyle.color});//清空所有背景色.
                })
                // zmEditor.globalMethod.nav.OneType.li.nav_li_Independent_position=index;
                zmEditor.globalMethod.nav.data.arrLike[f].li.nav_li_Independent_position=index;
                // $(ele.closest("ul").children("li")[zmEditor.globalMethod.nav.OneType.li.nav_li_Independent_position]).css("color",zmEditor.globalMethod.nav.OneType.li.hHover.color)
                $(ele.closest("ul").children("li")[zmEditor.globalMethod.nav.data.arrLike[f].li.nav_li_Independent_position]).css("color",zmEditor.globalMethod.nav.data.arrLike[f].li.hHover.color);
                // $(ele.closest("ul").children("li")[zmEditor.globalMethod.nav.OneType.li.nav_li_Independent_position]).animate({"backgroundColor":zmEditor.globalMethod.nav.OneType.li.sStyle.backgroundColor},1000, "linear")
                $(ele.closest("ul").children("li")[zmEditor.globalMethod.nav.data.arrLike[f].li.nav_li_Independent_position]).animate({"backgroundColor":zmEditor.globalMethod.nav.data.arrLike[f].li.hHover.backgroundColor},1000, "linear")
                // $(ele.closest("ul").children("li")[zmEditor.globalMethod.nav.data.arrLike[f].li.nav_li_Independent_position]).animate({"backgroundColor":zmEditor.globalMethod.nav.data.arrLike[f].li.sStyle.backgroundColor},1000, "linear")

            });
        },
        // 待删除
        endHover: function (ele, style, hover, evenType1, evenType2,f) {
            // console.log(ele);
            ele.off(zmEditor.globalMethod.nav.data.arrLike[f].li.eventClass.mouseenter.color);
            ele.on(evenType1, function () {
                var a,b;
                b=$(this).closest(".zm-component-main"),a=b[0].classList[4];
                if($(this).closest("ul").children("li").index(ele)==zmEditor.globalMethod.nav.data.arrLike[f].li.clickhover){
                    return false;
                }
                for (var m in zmEditor.globalMethod.nav.data.arrLike[f]["li"][hover]){
                    if (m) {
                        if (m == "backgroundColor") {
                            console.log(hover+"--->"+m+"-->"+zmEditor.globalMethod.nav.data.arrLike[f]["li"][hover][m]);
                            ele.stop().animate({"backgroundColor": zmEditor.globalMethod.nav.data.arrLike[f]["li"][hover][m]}, 1000, "linear");
                        }else{
                            if( m.substr(-6, 6)== "Radius"){//所有nav没有radius
                              continue;
                            }
                            zmEditor.globalMethod.nav.initNavList.singlestyle(ele,m,f,"hHover",undefined,a,"li",true);
                            //     if(/zm_nav_general_cross_one/.test(f)){
                            //         if(/border/.test(m)){//第一种横向导航的边框不做改变
                            //         continue;
                            //     }
                            // }
                            // ele.css(m, zmEditor.globalMethod.nav.data.arrLike[f]["li"][hover][m]);
                        }
                    }
                }
            });
            ele.on(evenType2, function () {
                var a,b;
                b=$(this).closest(".zm-component-main"),a=b[0].classList[4];
                if($(this).closest("ul").children("li").index(ele)==zmEditor.globalMethod.nav.data.arrLike[f].li.clickhover){
                    return false;
                }
                for (var m in zmEditor.globalMethod.nav.data.arrLike[f]["li"][style]){
                    if (m) {
                        if (m == "backgroundColor") {
                            // console.log(m+"-->"+zmEditor.globalMethod.nav.data.arrLike[f]["li"][style][m]);
                            ele.stop(true, true).css({"backgroundColor":zmEditor.globalMethod.nav.data.arrLike[f]["li"][style][m]});
                        }else{
                            if( m.substr(-6, 6)== "Radius"){
                                continue;
                            }
                            // if(/border/.test(m)){//第一种横向导航的边框不做改变
                            //     if(/zm_nav_general_cross_one/.test(f)){
                            //         continue;

                            //     }
                            // }
                            zmEditor.globalMethod.nav.initNavList.singlestyle(ele,m,f,"sStyle",undefined,a,"li");
                            console.log(zmEditor.globalMethod.nav.data.arrLike[f]["li"][style][m]);
                            // ele.stop(true, true).css(m, zmEditor.globalMethod.nav.data.arrLike[f]["li"][style][m]);
                            console.log(m+"---->"+zmEditor.globalMethod.nav.data.arrLike[f]["li"][style][m]);
                        }
                    }
                }
            });
        },
        endClick:function(ele,f,navMian,i,a,fn){
            ele.off("click"+zmEditor.globalMethod.nav.data.arrLike[f].li.eventClass.click.click);
            ele.on("click"+zmEditor.globalMethod.nav.data.arrLike[f].li.eventClass.click.click,function(){
                var element=$(this).closest("ul").children("li"),index=element.index($(this));
                if(index==zmEditor.globalMethod.nav.data.arrLike[f].li.clickhover){
                    return false;
                }
                // debugger;
                for(var n in zmEditor.globalMethod.nav.data.arrLike[f].li["sStyle"]){
                    if( n.substr(-6, 6)== "Radius")continue;
                    if(zmEditor.globalMethod.nav.data.arrLike[f].li["sStyle"][n]){
                        zmEditor.globalMethod.nav.initNavList.singlestyle($(element),n,f,"sStyle",navMian,a,"li");
                    }
                }
              for(var m in zmEditor.globalMethod.nav.data.arrLike[f].li["hHover"]){
                  if( m.substr(-6, 6)== "Radius")continue;
                  if(m){
                            // $(this).css({m:zmEditor.globalMethod.nav.data.arrLike[f].li["hHover"][m]});//先默认以hover样式为点击样式..
                      zmEditor.globalMethod.nav.initNavList.singlestyle($(this),m,f,"hHover",navMian,a,"li")
                            console.log(zmEditor.globalMethod.nav.data.arrLike[f].li["hHover"][m]);
                  }
                    }
                zmEditor.globalMethod.nav.data.arrLike[f].li.clickhover=index;
          console.log( zmEditor.globalMethod.nav.data.arrLike[f].li.clickhover);
                if(fn){
                    fn();
                }
                })
            },
        setallRadius: function (ele1,ele2,ele3,ele4,val){
            // console.log(ele2);
            // console.log(val);
            // console.log(val[1]);
            $(ele1).css("border-top-left-radius",val[0]);
            $(ele2).css("border-top-right-radius",val[1]);
            $(ele3).css("border-bottom-right-radius",val[2]);
            $(ele4).css("border-bottom-left-radius",val[3]);
          },
        setallRadius_assignment:function (ele,str,val) {
            // console.log(str);
            // console.log(ele);
            // console.log(val);
            if(val.length==4){
                // console.log("radius_arr没有到4个");
            switch (ele.length){
                case 1:
                    zmEditor.globalMethod.nav.initNavList.setallRadius($(ele),$(ele),$(ele),$(ele),val)
                    break;
                case 2:
                    if(/vertical/.test(str)){
                     zmEditor.globalMethod.nav.initNavList.setallRadius(ele[0],ele[0],ele[1],ele[1],val)
                    }else{
                        // console.log("我进来了->setallRadius_assignment");
                     zmEditor.globalMethod.nav.initNavList.setallRadius(ele[0],ele[1],ele[1],ele[0],val)
                    }
                    break;
                case 4:
                    zmEditor.globalMethod.nav.initNavList.setallRadius(ele[0],ele[1],ele[2],ele[3],val)
                    break;
                default:
                    ele.each(function(index,element){
                        // console.log('我进所有radius了');
                    zmEditor.globalMethod.nav.initNavList.setallRadius($(element),$(element),$(element),$(element),val)
                    })
                    break;
            }
            }
        },
        getRadiusEle:function(ele,a){
            var b=[],c=ele.children().children("li");
         if(/zm_nav_general_cross_one/.test(a)||/zm_nav_general_vertical_three/.test(a)){
             $(b.push(c[0],c[c.length-1]));
             // console.log(ele);
             // console.log(c);
             // console.log(b);
           return $(b);
         }else if(/zm_nav_general_cross_three/.test(a)||/zm_nav_general_vertical_two/.test(a)){//
             return $(c);
         }else{
             console.log(ele);
          return ele;
         }
        },
        saveRadius:function(ele,str,a,flag,val){
            console.log($(ele[0]));
            var nowEdit=$(ele[0]).closest(".zm-component-main");
            console.log(nowEdit);
            console.log(nowEdit[0]);
            strings=nowEdit[0].classList[4];
            console.log(strings);
            console.log(str.fn);
            data_a=zmEditor.globalMethod.nav.global_compotents_IndependentName(nowEdit);
            console.log(data_a);
           switch (strings){
               case "zm_nav_general_cross_one_one":
               case "zm_nav_general_cross_one_two":
               case "zm_nav_general_cross_one_three":
               case "zm_nav_general_cross_one_four":
               case "zm_nav_general_cross_one_five":
               case "zm_nav_general_cross_two_one":
               case "zm_nav_general_cross_two_two":
               case "zm_nav_general_cross_three_one":
               case "zm_nav_general_cross_three_two":
               case "zm_nav_general_cross_three_three":
               case "zm_nav_general_cross_three_four":
               case "zm_nav_general_cross_three_five":
               case "zm_nav_general_vertical_three_one":
               case "zm_nav_general_vertical_three_two":
               case "zm_nav_general_vertical_three_three":
                   if(a){
                       assignmentNavPrototype(data_a,"li","sStyle","borderTopLeftRadius",val)
                       assignmentNavPrototype(data_a,"li","sStyle","borderTopRightRadius",val)
                       assignmentNavPrototype(data_a,"li","sStyle","borderBottomRightRadius",val)
                       assignmentNavPrototype(data_a,"li","sStyle","borderBottomLeftRadius",val)
                       console.log(flag);
                       console.log(val);
                       console.log(zmEditor.globalMethod.nav.data.arrLike[data_a])
                   }else {
                       console.log(flag);
                       switch (flag) {
                           case "tl":
                               assignmentNavPrototype(data_a, "li", "sStyle", "borderTopLeftRadius", val)
                               break;
                           case "tr":
                               assignmentNavPrototype(data_a, "li", "sStyle", "borderTopRightRadius", val)
                               break;
                           case "br":
                               assignmentNavPrototype(data_a, "li", "sStyle", "borderBottomRightRadius", val)
                               break;
                           case "bl":
                               assignmentNavPrototype(data_a, "li", "sStyle", "borderBottomLeftRadius", val)
                               break;

                           default:
                               break;
                       }
                       console.log(val)
                       console.log(zmEditor.globalMethod.nav.data.arrLike[data_a])
                   }

                   break;
               default:
                   break;
           }
           function assignmentNavPrototype(data_a,li,sStyle,prototype,val) {
               zmEditor.globalMethod.nav.data.arrLike[data_a][li][sStyle][prototype]=val+"px";
           }
        },
        currentPage:function (select,f,k,a){//表示当前页渲染样式
            console.log(a);
             switch (a){
                 case "zm_nav_general_cross_one_one":
                 case "zm_nav_general_cross_one_two":
                 case "zm_nav_general_cross_one_three":
                 case "zm_nav_general_cross_one_four":
                 case "zm_nav_general_cross_one_five":
                 case "zm_nav_general_vertical_three_one":
                     for(var m in zmEditor.globalMethod.nav.data.arrLike[f][k].hHover) {
                         if (m == "backgroundColor" || m == "color") {
                             $(select.children().children("li")[zmEditor.globalMethod.nav.data.arrLike[f][k].clickhover]).css(m, zmEditor.globalMethod.nav.data.arrLike[f][k].hHover[m]);
                             console.log(m);
                             }
                     }
                     break;
                 default:
                     for(var m in zmEditor.globalMethod.nav.data.arrLike[f][k].hHover){
                         if(m!="width"||m!="height"){
                             $(select.children().children("li")[zmEditor.globalMethod.nav.data.arrLike[f][k].clickhover]).css(m,zmEditor.globalMethod.nav.data.arrLike[f][k].hHover[m]);
                         }
                     }
                     break;
             }
        },
        initBorder:function(select,data_a,a,j){
            switch (a){
                case "zm_nav_general_cross_one_one":
                case "zm_nav_general_cross_one_two":
                case "zm_nav_general_cross_one_three":
                case "zm_nav_general_cross_one_four":
                case "zm_nav_general_cross_one_five":
                    // console.log( zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderLeftWidth"]);
                    // console.log( zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderLeftColor"]);
                    select.children().children("li").css({"borderTopWidth":zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderTopWidth"],
                                                          "borderTopColor":zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderTopColor"],
                                                          "borderBottomWidth":zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderBottomWidth"],
                                                          "borderBottomColor":zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderBottomColor"]});
                    select.children().children("li:eq(0)").css({"borderLeftWidth":zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderLeftWidth"],"borderLeftColor":zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderLeftColor"]})
                    select.children().children("li").last().css({"borderRightWidth":zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderRightWidth"],"borderRightColor":zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderRightColor"]});
                    break;
                case "zm_nav_general_cross_two_one":
                case "zm_nav_general_cross_two_two":
                    break;
                case "zm_nav_general_vertical_two_one":
                    select.children().children("li").css({"borderTopWidth":zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderTopWidth"],
                        "borderLeftWidth":zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderLeftWidth"],
                        "borderBottomWidth":zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderBottomWidth"],
                        "borderRightWidth":zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderRightWidth"]});
                    break;
                case "zm_nav_general_vertical_three_one":
                    // console.log("我是width--->"+j);
                    // console.log(a)
                    // console.log(select.children().children("li"));
                    if(j=="borderLeftWidth"||j=="borderLeftColor"||j=="borderRightWidth"||j=="borderRightColor")
                    select.children().children("li").css({
                        "borderLeftWidth":zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderTopWidth"],
                        "borderLeftColor":zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderTopColor"],
                        "borderRightWidth":zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderBottomWidth"],
                        "borderRightColor":zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderBottomColor"]
                    });
                    if(j=="borderTopWidth"||j=="borderTopColor"||j=="borderBottomWidth"||j=="borderBottomColor"){
                        select.children().children("li:eq(0)").css({"borderTopWidth":zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderLeftWidth"],"borderTopColor":zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderLeftColor"]});
                        select.children().children("li").last().css({"borderBottomWidth":zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderRightWidth"],"borderBottomColor":zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderRightColor"]});
                    }
                    break;
                default:
                    break;
            }
        },
        singlestyle:function (_this,m,f,hOrS,navMian,a,ele,boolean) {//endclick and endhover
              switch(a){
                  case "zm_nav_general_cross_one_one":
                  case "zm_nav_general_cross_one_two":
                  case "zm_nav_general_cross_one_three":
                  case "zm_nav_general_cross_one_four":
                  case "zm_nav_general_cross_one_five":
                  case "zm_nav_general_vertical_three_one":
              // debugger;
                      if(m == "backgroundColor" || m =="color") {
                          console.log("我调用了并改变样式了"+'---->'+m+"--->"+zmEditor.globalMethod.nav.data.arrLike[f][ele][hOrS][m]);
                          console.log(zmEditor.globalMethod.nav.data.arrLike[f]);
                          // console.log(_this);
                          if(boolean){
                              _this.css(m,zmEditor.globalMethod.nav.data.arrLike[f][ele][hOrS][m])
                          }else{
                              _this.stop(true,true).css(m,zmEditor.globalMethod.nav.data.arrLike[f][ele][hOrS][m])
                          }
                      }
                      break;
                  case "zm_nav_general_cross_two_one":
                  case "zm_nav_general_cross_two_two":
                  case "zm_nav_general_vertical_one_one":
                      if(m == "backgroundColor"|| m =="color"||m=="borderTopColor"||m=="borderBottomColor"||m=="borderTopWidth"||m=="borderBottomWidth") {
                          console.log("我调用了并改变样式了"+'---->'+m+"--->"+zmEditor.globalMethod.nav.data.arrLike[f][ele][hOrS][m]);
                          console.log(zmEditor.globalMethod.nav.data.arrLike[f]);
                          // console.log(_this);
                          if(boolean){
                              _this.css(m,zmEditor.globalMethod.nav.data.arrLike[f][ele][hOrS][m])
                          }else{
                              _this.stop(true,true).css(m,zmEditor.globalMethod.nav.data.arrLike[f][ele][hOrS][m])
                          }
                      }
                      break;
                  // case "zm_nav_general_vertical_three_one":
                  // case "zm_nav_general_vertical_three_two":
                  // case "zm_nav_general_vertical_three_three":
                  //     break;
                  default:
                      if(m !="height"||m!="wdith"){
                          if(boolean){
                              _this.css(m,zmEditor.globalMethod.nav.data.arrLike[f][ele][hOrS][m])
                          }else{
                              _this.stop(true,true).css(m,zmEditor.globalMethod.nav.data.arrLike[f][ele][hOrS][m])
                          }
                      }
                      break;
              }
        },
        //重新计算main的宽度,为兼容用户没有托拽nav就操作页面设置弹窗
        againCalculationMianWidth: function (select,ObjIndependentClass){
            if(!(/vertical/.test(select[0].classList[4]))){
                var a,b,c,d,e;
                e=select.children("ul"); //添加小点到mian层兼容改动
                // e=select.children("");
                a=e.children("li").length;
                b=e.children("span").length;
                console.log(ObjIndependentClass);
                console.log(zmEditor.globalMethod.nav.data.arrLike[ObjIndependentClass]["mian"]);
                console.log(zmEditor.globalMethod.nav.data.arrLike[ObjIndependentClass]["li"].sStyle.width);
                console.log(zmEditor.globalMethod.nav.data.arrLike[ObjIndependentClass]["span"].sStyle.width);
                c=parseInt(zmEditor.globalMethod.nav.data.arrLike[ObjIndependentClass]["mian"].sStyle.width);
                d=a*parseInt(zmEditor.globalMethod.nav.data.arrLike[ObjIndependentClass]["li"].sStyle.width)+ b*parseInt(zmEditor.globalMethod.nav.data.arrLike[ObjIndependentClass]["span"].sStyle.width); //psrseint 用的有问题
                console.log(d);
                console.log(c);
                if(c===d)return c+"px";else  return zmEditor.globalMethod.nav.data.arrLike[ObjIndependentClass]["mian"].sStyle.width= d+"px";

            }
        },
    },
    OneType: {
        mian: {
            sStyle: {
                // borderColor: "",
                // borderWidth: "",
                // borderStyle: "",
                // border: "",
                borderRadius: "",
                lineHeight: "",
                height:"",
                width: "",
                boxSizing: "",
                fontSize:"",
                textAlign: "",
            },
            initStyle: {
                borderRadius: {
                    "zm_nav_general_cross_one_one": "",
                    "zm_nav_general_cross_one_two": "",
                    "zm_nav_general_cross_one_three": "10px 0 10px 0",
                    "zm_nav_general_cross_one_four": "10px 10px 10px 10px",
                    "zm_nav_general_cross_two_one": "",
                    "zm_nav_general_cross_two_two": "",
                    "zm_nav_general_cross_three_one": "",
                    "zm_nav_general_cross_three_two": "",
                    "zm_nav_general_cross_three_three": "",
                    "zm_nav_general_cross_three_four": "",
                    "zm_nav_general_cross_three_five": "",
                    "zm_nav_general_vertical_one_one": "",
                    "zm_nav_general_vertical_two_one": "",
                    "zm_nav_general_vertical_three_one": "0 10px 0 0",
                },
                // borderTopRightRadius: "10px",
                // border: {
                //     "zm_nav_general_cross_one_one": "",
                //     "zm_nav_general_cross_one_two": "1px solid #00f6ff",
                //     "zm_nav_general_cross_one_three": "",
                //     "zm_nav_general_cross_one_four": "1px solid #ed1566",
                //     "zm_nav_general_cross_two_one": "",
                //     "zm_nav_general_cross_two_two": "",
                //     "zm_nav_general_cross_three_one": "",
                //     "zm_nav_general_cross_three_two": "",
                //     "zm_nav_general_cross_three_three": "",
                //     "zm_nav_general_cross_three_four": "",
                //     "zm_nav_general_cross_three_five": "",
                //     "zm_nav_general_vertical_one_one": "",
                //     "zm_nav_general_vertical_two_one": "",
                //     "zm_nav_general_vertical_three_one": "1px solid #79c959",
                // },
                // borderColor: {
                //     "zm_nav_general_cross_one_one": "deepskyblue",
                //     "zm_nav_general_cross_one_two": "deepskyblue",
                //     "zm_nav_general_cross_one_three": "deepskyblue",
                //     "zm_nav_general_cross_one_four": "#ed1566",
                //     "zm_nav_general_cross_two_one": "#000",
                //     "zm_nav_general_cross_two_two": "#000",
                //     "zm_nav_general_cross_three_one": "#000",
                //     "zm_nav_general_cross_three_two": "#000",
                //     "zm_nav_general_cross_three_three": "#000",
                //     "zm_nav_general_cross_three_four": "#000",
                //     "zm_nav_general_cross_three_five": "#000",
                //     "zm_nav_general_vertical_one_one": "#000",
                //     "zm_nav_general_vertical_two_one": "#000",
                //     "zm_nav_general_vertical_three_one": "#79c959",
                // },
                // borderWidth: {
                //     "zm_nav_general_cross_one_one": "",
                //     "zm_nav_general_cross_one_two": "",
                //     "zm_nav_general_cross_one_three": "",
                //     "zm_nav_general_cross_one_four": "",
                //     "zm_nav_general_cross_two_one": "",
                //     "zm_nav_general_cross_two_two": "",
                //     "zm_nav_general_cross_three_one": "",
                //     "zm_nav_general_cross_three_two": "",
                //     "zm_nav_general_cross_three_three": "",
                //     "zm_nav_general_cross_three_four": "",
                //     "zm_nav_general_cross_three_five": "",
                //     "zm_nav_general_vertical_one_one": "",
                //     "zm_nav_general_vertical_two_one": "",
                //     "zm_nav_general_vertical_three_one": "1px",
                // },
                // borderStyle: {
                //     "zm_nav_general_cross_one_one": "solid",
                //     "zm_nav_general_cross_one_two": "solid",
                //     "zm_nav_general_cross_one_three": "solid",
                //     "zm_nav_general_cross_one_four": "solid",
                //     "zm_nav_general_cross_two_one": "solid",
                //     "zm_nav_general_cross_two_two": "solid",
                //     "zm_nav_general_cross_three_one": "solid",
                //     "zm_nav_general_cross_three_two": "solid",
                //     "zm_nav_general_cross_three_three": "solid",
                //     "zm_nav_general_cross_three_four": "solid",
                //     "zm_nav_general_cross_three_five": "solid",
                //     "zm_nav_general_vertical_one_one": "solid",
                //     "zm_nav_general_vertical_two_one": "solid",
                //     "zm_nav_general_vertical_three_one": "solid",
                // },
                height: {
                    "zm_nav_general_cross_one_one": "50px",
                    "zm_nav_general_cross_one_two": "50px",
                    "zm_nav_general_cross_one_three": "50px",
                    "zm_nav_general_cross_one_four": "50px",
                    "zm_nav_general_cross_one_five": "50px",
                    "zm_nav_general_cross_two_one": "50px",
                    "zm_nav_general_cross_two_two": "50px",
                    "zm_nav_general_cross_three_one": "50px",
                    "zm_nav_general_cross_three_two": "50px",
                    "zm_nav_general_cross_three_three": "50px",
                    "zm_nav_general_cross_three_four": "50px",
                    "zm_nav_general_vertical_one_one": "",
                    "zm_nav_general_vertical_two_one": "",
                    "zm_nav_general_vertical_three_one": "",
                },
                width: { // 样式表版本
                    "zm_nav_general_cross_one_one": "804px",//804px
                    "zm_nav_general_cross_one_two": "804px",//804px
                    "zm_nav_general_cross_one_three": "804px",//804px
                    "zm_nav_general_cross_one_four": "800px",//800px
                    "zm_nav_general_cross_two_one": "804px",//804px
                    "zm_nav_general_cross_two_two": "804px",//804px
                    "zm_nav_general_cross_three_one": "820px",//820px
                    "zm_nav_general_cross_three_two": "820px",//820px
                    "zm_nav_general_cross_three_three": "820px",//820px
                    "zm_nav_general_cross_three_four": "820px",//820px
                    "zm_nav_general_cross_three_five": "812px",//812px
                    "zm_nav_general_vertical_one_one": "",
                    "zm_nav_general_vertical_two_one": "",
                    "zm_nav_general_vertical_three_one": "",
                },
                // width: { // js 版本
                //     "zm_nav_general_cross_one_one": "804px",
                //     "zm_nav_general_cross_one_two": "804px",
                //     "zm_nav_general_cross_one_three": "804px",
                //     "zm_nav_general_cross_one_four": "800px",
                //     "zm_nav_general_cross_two_one": "804px",
                //     "zm_nav_general_cross_two_two": "804px",
                //     "zm_nav_general_cross_three_one": "820px",
                //     "zm_nav_general_cross_three_two": "820px",
                //     "zm_nav_general_cross_three_three": "824px",
                //     "zm_nav_general_cross_three_four": "824px",
                //     "zm_nav_general_cross_three_five": "812px",
                //     "zm_nav_general_vertical_one_one": "",
                //     "zm_nav_general_vertical_two_one": "",
                //     "zm_nav_general_vertical_three_one": "",
                // },
                fontSize:{
                    "zm_nav_general_cross_one_one": "20px",
                    "zm_nav_general_cross_one_two": "20px",
                    "zm_nav_general_cross_one_three": "20px",
                    "zm_nav_general_cross_one_four": "20px",
                    "zm_nav_general_cross_one_five": "20px",
                    "zm_nav_general_cross_two_one": "20px",
                    "zm_nav_general_cross_two_two": "20px",
                    "zm_nav_general_cross_three_one": "20px",
                    "zm_nav_general_cross_three_two": "20px",
                    "zm_nav_general_cross_three_three": "20px",
                    "zm_nav_general_cross_three_four": "20px",
                    "zm_nav_general_vertical_one_one": "20px",
                    "zm_nav_general_vertical_two_one": "20px",
                    "zm_nav_general_vertical_three_one": "20px",
                },
                lineHeight: "50px",
                boxSizing: "content-box",  //border-box //添加小点到mian层兼容改动
                textAlign: "center",
            },
        },
        span: {
            length: "4",
            sStyle: {
                backgroundColor: "",
                width: "",
                height: "100%",
                display:"block",
                borderTopColor:"",
                borderTopWidth:"",
                borderBottomColor:"",
                borderBottomWidth:"",
                borderStyle:"",
            },
            initStyle: {
                backgroundColor: {
                    "zm_nav_general_cross_one_one": "#fff",
                    "zm_nav_general_cross_one_two": "#fff",
                    "zm_nav_general_cross_one_three": "#fff",
                    "zm_nav_general_cross_one_four": "#fff",
                    "zm_nav_general_cross_one_five": "#fff",
                    "zm_nav_general_cross_two_one": "#fff",
                    "zm_nav_general_cross_two_two": "#fff",
                    "zm_nav_general_cross_three_one": "#fff",
                    "zm_nav_general_cross_three_two": "#fff",
                    "zm_nav_general_cross_three_three": "#fff",
                    "zm_nav_general_cross_three_four": "#fff",
                    "zm_nav_general_vertical_one_one": "#2b6ca3",
                    "zm_nav_general_vertical_two_one": "#fff",
                    "zm_nav_general_vertical_three_one": "#79c959",
                },
                width: {
                    "zm_nav_general_cross_one_one": "1px",
                    "zm_nav_general_cross_one_two": "1px",
                    "zm_nav_general_cross_one_three": "1px",
                    "zm_nav_general_cross_one_four": "0px",
                    "zm_nav_general_cross_one_five": "0px",
                    "zm_nav_general_cross_two_one": "1px",
                    "zm_nav_general_cross_two_two": "1px",
                    "zm_nav_general_cross_three_one": "5px",
                    "zm_nav_general_cross_three_two": "5px",
                    "zm_nav_general_cross_three_three": "5px",
                    "zm_nav_general_cross_three_four": "5px",
                    "zm_nav_general_cross_three_five": "2px",
                    "zm_nav_general_vertical_one_one": "210px",
                    "zm_nav_general_vertical_two_one": "210px",
                    "zm_nav_general_vertical_three_one": "210px",
                },
                height: {
                    "zm_nav_general_cross_one_one": "100%",
                    "zm_nav_general_cross_one_two": "100%",
                    "zm_nav_general_cross_one_three": "100%",
                    "zm_nav_general_cross_one_four": "100%",
                    "zm_nav_general_cross_one_five": "100%",
                    "zm_nav_general_cross_two_one": "100%",
                    "zm_nav_general_cross_two_two": "100%",
                    "zm_nav_general_cross_three_one": "100%",
                    "zm_nav_general_cross_three_two": "100%",
                    "zm_nav_general_cross_three_three": "100%",
                    "zm_nav_general_cross_three_four": "100%",
                    "zm_nav_general_vertical_one_one": "1px",
                    "zm_nav_general_vertical_two_one": "2px",
                    "zm_nav_general_vertical_three_one": "1px",
                },
                display: {
                    "zm_nav_general_cross_one_one": "block",
                    "zm_nav_general_cross_one_two": "block",
                    "zm_nav_general_cross_one_three": "block",
                    "zm_nav_general_cross_one_four": "block",
                    "zm_nav_general_cross_two_one": "block",
                    "zm_nav_general_cross_two_two": "block",
                    "zm_nav_general_cross_three_one": "block",
                    "zm_nav_general_cross_three_two": "block",
                    "zm_nav_general_cross_three_three": "block",
                    "zm_nav_general_cross_three_four": "block",
                    "zm_nav_general_cross_three_five": "block",
                    "zm_nav_general_vertical_one_one": "block",
                    "zm_nav_general_vertical_two_one": "block",
                    "zm_nav_general_vertical_three_one": "block",
                },
                borderTopColor: {
                    "zm_nav_general_cross_one_one": "deepskyblue",
                    "zm_nav_general_cross_one_two": "deepskyblue",
                    "zm_nav_general_cross_one_three": "deepskyblue",
                    "zm_nav_general_cross_one_four": "deepskyblue",
                    "zm_nav_general_cross_one_five": "deepskyblue",
                    "zm_nav_general_cross_two_one": "deepskyblue",
                    "zm_nav_general_cross_two_two": "deepskyblue",
                    "zm_nav_general_cross_three_one": "deepskyblue",
                    "zm_nav_general_cross_three_two": "deepskyblue",
                    "zm_nav_general_cross_three_three": "deepskyblue",
                    "zm_nav_general_cross_three_four": "deepskyblue",
                    "zm_nav_general_vertical_one_one": "deepskyblue",
                    "zm_nav_general_vertical_two_one": "deepskyblue",
                    "zm_nav_general_vertical_three_one": "deepskyblue",
                },
                borderTopWidth: {
                    "zm_nav_general_cross_one_one": "",
                    "zm_nav_general_cross_one_two": "",
                    "zm_nav_general_cross_one_three": "",
                    "zm_nav_general_cross_one_four": "",
                    "zm_nav_general_cross_two_one": "",
                    "zm_nav_general_cross_two_two": "",
                    "zm_nav_general_cross_three_one": "",
                    "zm_nav_general_cross_three_two": "",
                    "zm_nav_general_cross_three_three": "",
                    "zm_nav_general_cross_three_four": "",
                    "zm_nav_general_cross_three_five": "",
                    "zm_nav_general_vertical_one_one": "",
                    "zm_nav_general_vertical_two_one": "",
                    "zm_nav_general_vertical_three_one": "",
                },
                borderBottomColor: {
                    "zm_nav_general_cross_one_one": "deepskyblue",
                    "zm_nav_general_cross_one_two": "deepskyblue",
                    "zm_nav_general_cross_one_three": "deepskyblue",
                    "zm_nav_general_cross_one_four": "deepskyblue",
                    "zm_nav_general_cross_one_five": "deepskyblue",
                    "zm_nav_general_cross_two_one": "deepskyblue",
                    "zm_nav_general_cross_two_two": "deepskyblue",
                    "zm_nav_general_cross_three_one": "deepskyblue",
                    "zm_nav_general_cross_three_two": "deepskyblue",
                    "zm_nav_general_cross_three_three": "deepskyblue",
                    "zm_nav_general_cross_three_four": "deepskyblue",
                    "zm_nav_general_vertical_one_one": "deepskyblue",
                    "zm_nav_general_vertical_two_one": "deepskyblue",
                    "zm_nav_general_vertical_three_one": "deepskyblue",
                },
                borderBottomWidth: {
                    "zm_nav_general_cross_one_one": "",
                    "zm_nav_general_cross_one_two": "",
                    "zm_nav_general_cross_one_three": "",
                    "zm_nav_general_cross_one_four": "",
                    "zm_nav_general_cross_two_one": "",
                    "zm_nav_general_cross_two_two": "",
                    "zm_nav_general_cross_three_one": "",
                    "zm_nav_general_cross_three_two": "",
                    "zm_nav_general_cross_three_three": "",
                    "zm_nav_general_cross_three_four": "",
                    "zm_nav_general_cross_three_five": "",
                    "zm_nav_general_vertical_one_one": "",
                    "zm_nav_general_vertical_two_one": "",
                    "zm_nav_general_vertical_three_one": "",
                },
                borderStyle: {
                    "zm_nav_general_cross_one_one": "solid",
                    "zm_nav_general_cross_one_two": "solid",
                    "zm_nav_general_cross_one_three": "solid",
                    "zm_nav_general_cross_one_four": "solid",
                    "zm_nav_general_cross_two_one": "solid",
                    "zm_nav_general_cross_two_two": "solid",
                    "zm_nav_general_cross_three_one": "solid",
                    "zm_nav_general_cross_three_two": "solid",
                    "zm_nav_general_cross_three_three": "solid",
                    "zm_nav_general_cross_three_four": "solid",
                    "zm_nav_general_cross_three_five": "solid",
                    "zm_nav_general_vertical_one_one": "solid",
                    "zm_nav_general_vertical_two_one": "solid",
                    "zm_nav_general_vertical_three_one": "solid",
                },
            },
            hHover: {},
            initHover: {},
        },
        li: {
            length: "5",
            clickhover:0,
            initclickhover:{
                "zm_nav_general_cross_one_one": 0,
                "zm_nav_general_cross_one_two": 0,
                "zm_nav_general_cross_one_three": 0,
                "zm_nav_general_cross_one_four": 0,
                "zm_nav_general_cross_one_five": 0,
                "zm_nav_general_cross_two_one": 0,
                "zm_nav_general_cross_two_two": 0,
                "zm_nav_general_cross_three_one": 0,
                "zm_nav_general_cross_three_two": 0,
                "zm_nav_general_cross_three_three": 0,
                "zm_nav_general_cross_three_four": 0,
                "zm_nav_general_vertical_one_one": 0,
                "zm_nav_general_vertical_two_one": 0,
                "zm_nav_general_vertical_three_one": 0,
            },
            sStyle: {
                backgroundColor: "",//backgroundColor
                borderColor: "",//border_all_bg
                // borderWidth: "",//border_all_width
                borderStyle: "",//border_all_style
                borderTopColor: "",//border_top_color
                borderTopWidth: "",//border_top_width
                borderBottomColor: "",//border_bottom_color
                borderBottomWidth: "",//border_bottom_width
                borderLeftColor: "",//border_bottom_width
                borderLeftWidth: "",//border_bottom_width
                borderRightColor: "",//border_bottom_width
                borderRightWidth: "",//border_bottom_width
                color: '', //color_bg
                width: "",
                height: "",
                lineHeight: "",
                borderTopLeftRadius: "",
                borderTopRightRadius: "",
                borderBottomRightRadius: "",
                borderBottomLeftRadius: "",
                padding:"",
            },
            initStyle: {
                backgroundColor: {//backgroundColor_bg
                    "zm_nav_general_cross_one_one": "#2b6ca3",
                    "zm_nav_general_cross_one_two": "#1fbab8",
                    "zm_nav_general_cross_one_three": "#edf1f5",
                    "zm_nav_general_cross_one_four": "#9e0433",
                    "zm_nav_general_cross_one_five": "#ffffff",
                    "zm_nav_general_cross_two_one": "#fff",
                    "zm_nav_general_cross_two_two": "#fff",
                    "zm_nav_general_cross_three_one": "#f5f5f5",
                    "zm_nav_general_cross_three_two": "#ea3e7e",
                    "zm_nav_general_cross_three_three": "#187035",
                    "zm_nav_general_cross_three_four": "#d41c62",
                    "zm_nav_general_cross_three_five": "#002f5d",
                    "zm_nav_general_vertical_one_one": "#fff",
                    "zm_nav_general_vertical_two_one": "#009591",
                    "zm_nav_general_vertical_three_one": "#fff",
                },
                borderTopColor: {//border_top_color_bg
                    "zm_nav_general_cross_one_one": "deepskyblue",
                    "zm_nav_general_cross_one_two": "deepskyblue",
                    "zm_nav_general_cross_one_three": "deepskyblue",
                    "zm_nav_general_cross_one_four": "deepskyblue",
                    "zm_nav_general_cross_one_five": "deepskyblue",
                    "zm_nav_general_cross_two_one": "#1ad435",
                    "zm_nav_general_cross_two_two": "#d41a53",
                    "zm_nav_general_cross_three_one": "#fff",
                    "zm_nav_general_cross_three_two": "#fff",
                    "zm_nav_general_cross_three_three": "#fff",
                    "zm_nav_general_cross_three_four": "#fff",
                    "zm_nav_general_cross_three_five": "#fff",
                    "zm_nav_general_vertical_one_one": "#fff",
                    "zm_nav_general_vertical_three_one": "#79c959"
                },
                borderTopWidth: {
                    "zm_nav_general_cross_one_one": "",
                    "zm_nav_general_cross_one_two": "",
                    "zm_nav_general_cross_one_three": "",
                    "zm_nav_general_cross_one_four": "",
                    "zm_nav_general_cross_one_five": "",
                    "zm_nav_general_cross_two_one": "1px",
                    "zm_nav_general_cross_two_two": "1px",
                    "zm_nav_general_cross_three_one": "",
                    "zm_nav_general_cross_three_two": "",
                    "zm_nav_general_cross_three_three": "",
                    "zm_nav_general_cross_three_four": "",
                    "zm_nav_general_cross_three_five": "",
                    "zm_nav_general_vertical_one_one": "",
                    "zm_nav_general_vertical_two_one": "",
                    "zm_nav_general_vertical_three_one": "1px",
                },//
                borderBottomColor: {//border_bottom_color_bg
                    "zm_nav_general_cross_one_one": "deepskyblue",
                    "zm_nav_general_cross_one_two": "deepskyblue",
                    "zm_nav_general_cross_one_three": "deepskyblue",
                    "zm_nav_general_cross_one_four": "deepskyblue",
                    "zm_nav_general_cross_one_five": "deepskyblue",
                    "zm_nav_general_cross_two_one": "#1ad435",
                    "zm_nav_general_cross_two_two": "#fff",
                    "zm_nav_general_cross_three_one": "#fff",
                    "zm_nav_general_cross_three_two": "#fff",
                    "zm_nav_general_cross_three_three": "#fff",
                    "zm_nav_general_cross_three_four": "#fff",
                    "zm_nav_general_cross_three_five": "#fff",
                    "zm_nav_general_vertical_one_one": "#2b6ca3",
                    "zm_nav_general_vertical_three_one": "#79c959"
                },
                borderBottomWidth: {
                    "zm_nav_general_cross_one_one": "",
                    "zm_nav_general_cross_one_two": "",
                    "zm_nav_general_cross_one_three": "",
                    "zm_nav_general_cross_one_four": "",
                    "zm_nav_general_cross_one_five": "",
                    "zm_nav_general_cross_two_one": "1px",
                    "zm_nav_general_cross_two_two": "1px",
                    "zm_nav_general_cross_three_one": "",
                    "zm_nav_general_cross_three_two": "",
                    "zm_nav_general_cross_three_three": "",
                    "zm_nav_general_cross_three_four": "",
                    "zm_nav_general_cross_three_five": "",
                    "zm_nav_general_vertical_one_one": "",
                    "zm_nav_general_vertical_two_one": "",
                    "zm_nav_general_vertical_three_one": "1px",
                },//
                borderLeftColor: {//border_bottom_color_bg
                    "zm_nav_general_cross_one_one": "deepskyblue",
                    "zm_nav_general_cross_one_two": "deepskyblue",
                    "zm_nav_general_cross_one_three": "deepskyblue",
                    "zm_nav_general_cross_one_four": "deepskyblue",
                    "zm_nav_general_cross_one_five": "deepskyblue",
                    "zm_nav_general_cross_two_one": "#1ad435",
                    "zm_nav_general_cross_two_two": "#fff",
                    "zm_nav_general_cross_three_one": "#fff",
                    "zm_nav_general_cross_three_two": "#fff",
                    "zm_nav_general_cross_three_three": "#fff",
                    "zm_nav_general_cross_three_four": "#fff",
                    "zm_nav_general_cross_three_five": "#fff",
                    "zm_nav_general_vertical_one_one": "#2b6ca3",
                    "zm_nav_general_vertical_three_one": "#79c959"
                },
                borderLeftWidth: {
                    "zm_nav_general_cross_one_one": "",
                    "zm_nav_general_cross_one_two": "",
                    "zm_nav_general_cross_one_three": "",
                    "zm_nav_general_cross_one_four": "",
                    "zm_nav_general_cross_one_five": "",
                    "zm_nav_general_cross_two_one": "",
                    "zm_nav_general_cross_two_two": "",
                    "zm_nav_general_cross_three_one": "",
                    "zm_nav_general_cross_three_two": "",
                    "zm_nav_general_cross_three_three": "",
                    "zm_nav_general_cross_three_four": "",
                    "zm_nav_general_cross_three_five": "",
                    "zm_nav_general_vertical_one_one": "",
                    "zm_nav_general_vertical_two_one": "",
                    "zm_nav_general_vertical_three_one": "1px",
                },//
                borderRightColor: {//border_bottom_color_bg
                    "zm_nav_general_cross_one_one": "deepskyblue",
                    "zm_nav_general_cross_one_two": "deepskyblue",
                    "zm_nav_general_cross_one_three": "deepskyblue",
                    "zm_nav_general_cross_one_four": "deepskyblue",
                    "zm_nav_general_cross_one_five": "deepskyblue",
                    "zm_nav_general_cross_two_one": "#1ad435",
                    "zm_nav_general_cross_two_two": "#fff",
                    "zm_nav_general_cross_three_one": "#fff",
                    "zm_nav_general_cross_three_two": "#fff",
                    "zm_nav_general_cross_three_three": "#fff",
                    "zm_nav_general_cross_three_four": "#fff",
                    "zm_nav_general_cross_three_five": "#fff",
                    "zm_nav_general_vertical_one_one": "#2b6ca3",
                    "zm_nav_general_vertical_three_one": "#79c959"
                },
                borderRightWidth: {
                    "zm_nav_general_cross_one_one": "",
                    "zm_nav_general_cross_one_two": "",
                    "zm_nav_general_cross_one_three": "",
                    "zm_nav_general_cross_one_four": "",
                    "zm_nav_general_cross_one_five": "",
                    "zm_nav_general_cross_two_one": "",
                    "zm_nav_general_cross_two_two": "",
                    "zm_nav_general_cross_three_one": "",
                    "zm_nav_general_cross_three_two": "",
                    "zm_nav_general_cross_three_three": "",
                    "zm_nav_general_cross_three_four": "",
                    "zm_nav_general_cross_three_five": "",
                    "zm_nav_general_vertical_one_one": "",
                    "zm_nav_general_vertical_two_one": "",
                    "zm_nav_general_vertical_three_one": "1px",
                },//
                borderColor: {//border_all_bg_bg
                    "zm_nav_general_cross_three_one": "#fff",
                    "zm_nav_general_cross_three_two": "#fff",
                    "zm_nav_general_cross_three_three": "#fff",
                    "zm_nav_general_cross_three_four": "#fff",
                    "zm_nav_general_cross_three_five": "#fff",
                    "zm_nav_general_vertical_two_one": "#fff",
                },
                // borderWidth: {
                //     "zm_nav_general_cross_one_one": "",
                //     "zm_nav_general_cross_one_two": "",
                //     "zm_nav_general_cross_one_three": "",
                //     "zm_nav_general_cross_one_four": "",
                //     "zm_nav_general_cross_one_five": "",
                //     "zm_nav_general_cross_two_one": "",
                //     "zm_nav_general_cross_two_two": "",
                //     "zm_nav_general_cross_three_one": "",
                //     "zm_nav_general_cross_three_two": "",
                //     "zm_nav_general_cross_three_three": "",
                //     "zm_nav_general_cross_three_four": "",
                //     "zm_nav_general_cross_three_five": "",
                //     "zm_nav_general_vertical_one_one": "",
                //     "zm_nav_general_vertical_two_one": "",
                //     "zm_nav_general_vertical_three_one": "",
                // },//
                borderStyle: "solid",//
                color: { //color_bg_bg
                    "zm_nav_general_cross_one_one": "#fff",
                    "zm_nav_general_cross_one_two": "#fff",
                    "zm_nav_general_cross_one_three": "#000",
                    "zm_nav_general_cross_one_four": "#fff",
                    "zm_nav_general_cross_one_five": "#1fbab8",
                    "zm_nav_general_cross_two_one": "#1ad435",
                    "zm_nav_general_cross_two_two": "#d41a53",
                    "zm_nav_general_cross_three_one": "#dd959b",
                    "zm_nav_general_cross_three_two": "#fff",
                    "zm_nav_general_cross_three_three": "#fff",
                    "zm_nav_general_cross_three_four": "#fff",
                    "zm_nav_general_cross_three_five": "#fff",
                    "zm_nav_general_vertical_one_one": "#2b6ca3",
                    "zm_nav_general_vertical_two_one": "#fff",
                    "zm_nav_general_vertical_three_one": "#79c959",
                },
                width: {
                    "zm_nav_general_cross_one_one": "160px",
                    "zm_nav_general_cross_one_two": "160px",
                    "zm_nav_general_cross_one_three": "160px",
                    "zm_nav_general_cross_one_four": "160px",
                    "zm_nav_general_cross_one_five": "160px",
                    "zm_nav_general_cross_two_one": "160px",
                    "zm_nav_general_cross_two_two": "160px",
                    "zm_nav_general_cross_three_one": "160px",
                    "zm_nav_general_cross_three_two": "160px",
                    "zm_nav_general_cross_three_three": "160px",
                    "zm_nav_general_cross_three_four": "160px",
                    "zm_nav_general_cross_three_five": "160px",
                    "zm_nav_general_vertical_one_one": "210px",
                    "zm_nav_general_vertical_two_one": "210px",
                    "zm_nav_general_vertical_three_one": "210px",
                },
                height: {
                    "zm_nav_general_cross_one_one": "50px",
                    "zm_nav_general_cross_one_two": "50px",
                    "zm_nav_general_cross_one_four": "50px",
                    "zm_nav_general_cross_one_three": "50px",
                    "zm_nav_general_cross_one_five": "50px",
                    "zm_nav_general_cross_two_one": "50px",
                    "zm_nav_general_cross_two_two": "50px",
                    "zm_nav_general_cross_three_one": "50px",
                    "zm_nav_general_cross_three_two": "50px",
                    "zm_nav_general_cross_three_three": "50px",
                    "zm_nav_general_cross_three_four": "50px",
                    "zm_nav_general_cross_three_five": "50px",
                    "zm_nav_general_vertical_one_one": "50px",
                    "zm_nav_general_vertical_two_one": "50px",//
                    "zm_nav_general_vertical_three_one": "50px",
                },
                lineHeight:  {
                    "zm_nav_general_cross_one_one": "50px",
                    "zm_nav_general_cross_one_two": "50px",
                    "zm_nav_general_cross_one_four": "50px",
                    "zm_nav_general_cross_one_five": "50px",
                    "zm_nav_general_cross_two_one": "50px",
                    "zm_nav_general_cross_two_two": "50px",
                    "zm_nav_general_cross_three_one": "50px",
                    "zm_nav_general_cross_three_two": "50px",
                    "zm_nav_general_cross_three_three": "50px",
                    "zm_nav_general_cross_three_four": "50px",
                    "zm_nav_general_cross_three_five": "50px",
                    "zm_nav_general_vertical_one_one": "50px",
                    "zm_nav_general_vertical_two_one": "50px",
                    "zm_nav_general_vertical_three_one": "50px",
                },
                borderTopLeftRadius: {
                    "zm_nav_general_cross_one_one": "",
                    "zm_nav_general_cross_one_two": "",
                    "zm_nav_general_cross_one_three": "10px",
                    "zm_nav_general_cross_one_four": "10px",
                    "zm_nav_general_cross_two_one": "",
                    "zm_nav_general_cross_two_two": "",
                    "zm_nav_general_cross_three_one": "20px",
                    "zm_nav_general_cross_three_two": "",
                    "zm_nav_general_cross_three_three": "15px",
                    "zm_nav_general_cross_three_four": "10px",
                    "zm_nav_general_cross_three_five": "",
                    "zm_nav_general_vertical_one_one": "",
                    "zm_nav_general_vertical_two_one": "10px",
                    "zm_nav_general_vertical_three_one": "",
                },
                borderTopRightRadius: {
                    "zm_nav_general_cross_one_one": "",
                    "zm_nav_general_cross_one_two": "",
                    "zm_nav_general_cross_one_three": "",
                    "zm_nav_general_cross_one_four": "10px",
                    "zm_nav_general_cross_two_one": "",
                    "zm_nav_general_cross_two_two": "",
                    "zm_nav_general_cross_three_one": "20px",
                    "zm_nav_general_cross_three_two": "",
                    "zm_nav_general_cross_three_three": "15px",
                    "zm_nav_general_cross_three_four": "10px",
                    "zm_nav_general_cross_three_five": "",
                    "zm_nav_general_vertical_one_one": "",
                    "zm_nav_general_vertical_two_one": "10px",
                    "zm_nav_general_vertical_three_one": "10px",
                },
                borderBottomLeftRadius: {
                    "zm_nav_general_cross_one_one": "",
                    "zm_nav_general_cross_one_two": "",
                    "zm_nav_general_cross_one_three": "",
                    "zm_nav_general_cross_one_four": "10px",
                    "zm_nav_general_cross_two_one": "",
                    "zm_nav_general_cross_two_two": "",
                    "zm_nav_general_cross_three_one": "20px",
                    "zm_nav_general_cross_three_two": "",
                    "zm_nav_general_cross_three_three": "15px",
                    "zm_nav_general_cross_three_four": "",
                    "zm_nav_general_cross_three_five": "",
                    "zm_nav_general_vertical_one_one": "",
                    "zm_nav_general_vertical_two_one": "10px",
                    "zm_nav_general_vertical_three_one": "",
                },
                borderBottomRightRadius: {
                    "zm_nav_general_cross_one_one": "",
                    "zm_nav_general_cross_one_two": "",
                    "zm_nav_general_cross_one_three": "10px",
                    "zm_nav_general_cross_one_four": "10px",
                    "zm_nav_general_cross_two_one": "",
                    "zm_nav_general_cross_two_two": "",
                    "zm_nav_general_cross_three_one": "20px",
                    "zm_nav_general_cross_three_two": "",
                    "zm_nav_general_cross_three_three": "15px",
                    "zm_nav_general_cross_three_four": "",
                    "zm_nav_general_cross_three_five": "",
                    "zm_nav_general_vertical_one_one": "",
                    "zm_nav_general_vertical_two_one": "10px",
                    "zm_nav_general_vertical_three_one": "",
                },
                padding:{
                    "zm_nav_general_cross_one_one": "",
                    "zm_nav_general_cross_one_two": "",
                    "zm_nav_general_cross_one_four": "",
                    "zm_nav_general_cross_one_five": "",
                    "zm_nav_general_cross_two_one": "",
                    "zm_nav_general_cross_two_two": "",
                    "zm_nav_general_cross_three_one": "",
                    "zm_nav_general_cross_three_two": "",
                    "zm_nav_general_cross_three_three": "",
                    "zm_nav_general_cross_three_four": "",
                    "zm_nav_general_cross_three_five": "",
                    "zm_nav_general_vertical_one_one": "", //0 20px 0 20px
                    "zm_nav_general_vertical_two_one": "",//0 20px 0 20px
                    "zm_nav_general_vertical_three_one": "",//0 20px 0 20px
                },
            },
            hHover: {
                backgroundColor: "",//
                borderColor: "",//
                borderTopColor: "",//
                borderTopWidth: "",//
                borderBottomColor: "",//
                borderBottomWidth: "",//
                borderLeftColor: "",//
                borderLeftWidth: "",//
                borderRightColor: "",//
                borderRightWidth: "",//
                // borderWidth: "",//
                borderStyle: "",//
                color: '', //
                // width: "",
                // height: "",
                lineHeight:"",
            },
            initHover: {
                backgroundColor: {//hover_backgroundColor_bg
                    "zm_nav_general_cross_one_one": "#045184",
                    "zm_nav_general_cross_one_two": "#009c9a",
                    "zm_nav_general_cross_one_three": "#a57d6d",
                    "zm_nav_general_cross_one_four": "#7f042d",
                    "zm_nav_general_cross_one_five": "#1fbab8",
                    "zm_nav_general_cross_two_one": "#1ad435",
                    "zm_nav_general_cross_two_two": "#ffffff",
                    "zm_nav_general_cross_three_one": "#c0214b",
                    "zm_nav_general_cross_three_two": "#e27293",
                    "zm_nav_general_cross_three_three": "#114c22",
                    "zm_nav_general_cross_three_four": "#be004f",
                    "zm_nav_general_cross_three_five": "#001a33",
                    "zm_nav_general_vertical_one_one": "#2b6ca3",
                    "zm_nav_general_vertical_two_one": "#006c6d",
                    "zm_nav_general_vertical_three_one": "#79c959",
                },
                borderTopColor: {//border_top_stall_color_bg
                    "zm_nav_general_cross_one_one": "deepskyblue",
                    "zm_nav_general_cross_one_two": "deepskyblue",
                    "zm_nav_general_cross_one_three": "deepskyblue",
                    "zm_nav_general_cross_one_four": "deepskyblue",
                    "zm_nav_general_cross_one_five": "deepskyblue",
                    "zm_nav_general_cross_two_one": "#1ad435",
                    "zm_nav_general_cross_two_two": "#d41a53",
                    "zm_nav_general_cross_three_one": "",
                    "zm_nav_general_cross_three_two": "",
                    "zm_nav_general_cross_three_three": "",
                    "zm_nav_general_cross_three_four": "",
                    "zm_nav_general_cross_three_five": "",
                    "zm_nav_general_vertical_one_one": "#fff",
                    "zm_nav_general_vertical_two_one": "",
                    "zm_nav_general_vertical_three_one": "",
                },
                borderTopWidth: {
                    "zm_nav_general_cross_one_one": "",
                    "zm_nav_general_cross_one_two": "",
                    "zm_nav_general_cross_one_three": "",
                    "zm_nav_general_cross_one_four": "",
                    "zm_nav_general_cross_one_five": "",
                    "zm_nav_general_cross_two_one": "1px",
                    "zm_nav_general_cross_two_two": "2px",
                    "zm_nav_general_cross_three_one": "",
                    "zm_nav_general_cross_three_two": "",
                    "zm_nav_general_cross_three_three": "",
                    "zm_nav_general_cross_three_four": "",
                    "zm_nav_general_cross_three_five": "",
                    "zm_nav_general_vertical_one_one": "",
                    "zm_nav_general_vertical_two_one": "",
                    "zm_nav_general_vertical_three_one": "",
                },//border_top_width_hover
                borderBottomColor: {//border_bottom_stall_color_bg
                    "zm_nav_general_cross_one_one": "deepskyblue",
                    "zm_nav_general_cross_one_two": "deepskyblue",
                    "zm_nav_general_cross_one_three": "deepskyblue",
                    "zm_nav_general_cross_one_four": "deepskyblue",
                    "zm_nav_general_cross_one_five": "deepskyblue",
                    "zm_nav_general_cross_two_one": "#1ad435",
                    "zm_nav_general_cross_two_two": "#fff",
                    "zm_nav_general_vertical_one_one": "#2b6ca3",
                },
                borderBottomWidth: {
                    "zm_nav_general_cross_one_one": "",
                    "zm_nav_general_cross_one_two": "",
                    "zm_nav_general_cross_one_three": "",
                    "zm_nav_general_cross_one_four": "",
                    "zm_nav_general_cross_one_five": "",
                    "zm_nav_general_cross_two_one": "1px",
                    "zm_nav_general_cross_two_two": "",
                    "zm_nav_general_cross_three_one": "",
                    "zm_nav_general_cross_three_two": "",
                    "zm_nav_general_cross_three_three": "",
                    "zm_nav_general_cross_three_four": "",
                    "zm_nav_general_cross_three_five": "",
                    "zm_nav_general_vertical_one_one": "",
                    "zm_nav_general_vertical_two_one": "",
                    "zm_nav_general_vertical_three_one": "",

                },//border_bottom_width
                borderLeftColor: {
                    "zm_nav_general_cross_one_one": "",
                    "zm_nav_general_cross_one_two": "",
                    "zm_nav_general_cross_one_three": "",
                    "zm_nav_general_cross_one_four": "",
                    "zm_nav_general_cross_one_five": "",
                    "zm_nav_general_cross_two_one": "#1ad435",
                    "zm_nav_general_cross_two_two": "#d41a53",
                    "zm_nav_general_cross_three_one": "",
                    "zm_nav_general_cross_three_two": "",
                    "zm_nav_general_cross_three_three": "",
                    "zm_nav_general_cross_three_four": "",
                    "zm_nav_general_cross_three_five": "",
                    "zm_nav_general_vertical_one_one": "#fff",
                    "zm_nav_general_vertical_two_one": "",
                    "zm_nav_general_vertical_three_one": "",
                },
                borderLeftWidth: {
                    "zm_nav_general_cross_one_one": "",
                    "zm_nav_general_cross_one_two": "",
                    "zm_nav_general_cross_one_three": "",
                    "zm_nav_general_cross_one_four": "",
                    "zm_nav_general_cross_one_five": "",
                    "zm_nav_general_cross_two_one": "",
                    "zm_nav_general_cross_two_two": "",
                    "zm_nav_general_cross_three_one": "",
                    "zm_nav_general_cross_three_two": "",
                    "zm_nav_general_cross_three_three": "",
                    "zm_nav_general_cross_three_four": "",
                    "zm_nav_general_cross_three_five": "",
                    "zm_nav_general_vertical_one_one": "",
                    "zm_nav_general_vertical_two_one": "",
                    "zm_nav_general_vertical_three_one": "",
                },
                borderRightColor: {
                    "zm_nav_general_cross_one_one": "",
                    "zm_nav_general_cross_one_two": "",
                    "zm_nav_general_cross_one_three": "",
                    "zm_nav_general_cross_one_four": "",
                    "zm_nav_general_cross_one_five": "",
                    "zm_nav_general_cross_two_one": "#1ad435",
                    "zm_nav_general_cross_two_two": "#d41a53",
                    "zm_nav_general_cross_three_one": "",
                    "zm_nav_general_cross_three_two": "",
                    "zm_nav_general_cross_three_three": "",
                    "zm_nav_general_cross_three_four": "",
                    "zm_nav_general_cross_three_five": "",
                    "zm_nav_general_vertical_one_one": "#fff",
                    "zm_nav_general_vertical_two_one": "",
                    "zm_nav_general_vertical_three_one": "",
                },
                borderRightWidth: {
                    "zm_nav_general_cross_one_one": "",
                    "zm_nav_general_cross_one_two": "",
                    "zm_nav_general_cross_one_three": "",
                    "zm_nav_general_cross_one_four": "",
                    "zm_nav_general_cross_one_five": "",
                    "zm_nav_general_cross_two_one": "",
                    "zm_nav_general_cross_two_two": "",
                    "zm_nav_general_cross_three_one": "",
                    "zm_nav_general_cross_three_two": "",
                    "zm_nav_general_cross_three_three": "",
                    "zm_nav_general_cross_three_four": "",
                    "zm_nav_general_cross_three_five": "",
                    "zm_nav_general_vertical_one_one": "",
                    "zm_nav_general_vertical_two_one": "",
                    "zm_nav_general_vertical_three_one": "",
                },
                borderColor: {//border_all_stall_bg_bg
                    "zm_nav_general_cross_three_one": "#fff",
                    "zm_nav_general_cross_three_two": "#fff",
                    "zm_nav_general_cross_three_three": "#fff",
                    "zm_nav_general_cross_three_four": "#fff",
                    "zm_nav_general_cross_three_five": "#fff",
                    "zm_nav_general_vertical_two_one": "#fff",
                },
                // borderLeftWidth: {
                //     "zm_nav_general_cross_one_one": "",
                //     "zm_nav_general_cross_one_two": "",
                //     "zm_nav_general_cross_one_three": "",
                //     "zm_nav_general_cross_one_four": "",
                //     "zm_nav_general_cross_one_five": "",
                //     "zm_nav_general_cross_two_one": "",
                //     "zm_nav_general_cross_two_two": "",
                //     "zm_nav_general_cross_three_one": "",
                //     "zm_nav_general_cross_three_two": "",
                //     "zm_nav_general_cross_three_three": "",
                //     "zm_nav_general_cross_three_four": "",
                //     "zm_nav_general_cross_three_five": "",
                //     "zm_nav_general_vertical_one_one": "",
                //     "zm_nav_general_vertical_two_one": "",
                //     "zm_nav_general_vertical_three_one": "",
                //
                // },
                // borderLeftColor: {
                //     "zm_nav_general_cross_one_one": "",
                //     "zm_nav_general_cross_one_two": "",
                //     "zm_nav_general_cross_one_three": "",
                //     "zm_nav_general_cross_one_four": "",
                //     "zm_nav_general_cross_one_five": "",
                //     "zm_nav_general_cross_two_one": "",
                //     "zm_nav_general_cross_two_two": "",
                //     "zm_nav_general_cross_three_one": "",
                //     "zm_nav_general_cross_three_two": "",
                //     "zm_nav_general_cross_three_three": "",
                //     "zm_nav_general_cross_three_four": "",
                //     "zm_nav_general_cross_three_five": "",
                //     "zm_nav_general_vertical_one_one": "",
                //     "zm_nav_general_vertical_two_one": "",
                //     "zm_nav_general_vertical_three_one": "",
                //
                // },
                // borderRightWidth: {
                //     "zm_nav_general_cross_one_one": "",
                //     "zm_nav_general_cross_one_two": "",
                //     "zm_nav_general_cross_one_three": "",
                //     "zm_nav_general_cross_one_four": "",
                //     "zm_nav_general_cross_one_five": "",
                //     "zm_nav_general_cross_two_one": "",
                //     "zm_nav_general_cross_two_two": "",
                //     "zm_nav_general_cross_three_one": "",
                //     "zm_nav_general_cross_three_two": "",
                //     "zm_nav_general_cross_three_three": "",
                //     "zm_nav_general_cross_three_four": "",
                //     "zm_nav_general_cross_three_five": "",
                //     "zm_nav_general_vertical_one_one": "",
                //     "zm_nav_general_vertical_two_one": "",
                //     "zm_nav_general_vertical_three_one": "",
                //
                // },//border_bottom_width
                // borderRightColor: {
                //     "zm_nav_general_cross_one_one": "",
                //     "zm_nav_general_cross_one_two": "",
                //     "zm_nav_general_cross_one_three": "",
                //     "zm_nav_general_cross_one_four": "",
                //     "zm_nav_general_cross_one_five": "",
                //     "zm_nav_general_cross_two_one": "",
                //     "zm_nav_general_cross_two_two": "",
                //     "zm_nav_general_cross_three_one": "",
                //     "zm_nav_general_cross_three_two": "",
                //     "zm_nav_general_cross_three_three": "",
                //     "zm_nav_general_cross_three_four": "",
                //     "zm_nav_general_cross_three_five": "",
                //     "zm_nav_general_vertical_one_one": "",
                //     "zm_nav_general_vertical_two_one": "",
                //     "zm_nav_general_vertical_three_one": "",
                //
                // },
                // borderWidth: "1px",//border_all_width
                borderStyle: "solid",//border_all_style
                color: {//color_Stall_bg_bg
                    "zm_nav_general_cross_one_one": "#fff",
                    "zm_nav_general_cross_one_two": "#fff",
                    "zm_nav_general_cross_one_three": "#000",
                    "zm_nav_general_cross_one_four": "#fff",
                    "zm_nav_general_cross_one_five": "#fff",
                    "zm_nav_general_cross_two_one": "#fff",
                    "zm_nav_general_cross_two_two": "#000",
                    "zm_nav_general_cross_three_one": "#fff",
                    "zm_nav_general_cross_three_two": "#fff",
                    "zm_nav_general_cross_three_three": "#fff",



                    
                    "zm_nav_general_cross_three_four": "#fff",
                    "zm_nav_general_cross_three_five": "#fff",
                    "zm_nav_general_vertical_one_one": "#fff",
                    "zm_nav_general_vertical_two_one": "#fff",
                    "zm_nav_general_vertical_three_one": "#fff",
                },
                lineHeight:"50px",
            },
            nav_li_Independent_position: "0",
            // borderWidth_all: "1px",
            eventClass: {
                mouseenter: {
                    backgroundColor: ".nav_o_l_b_hoverInitialization",
                    color: ".nav_o_l_c_hoverInitialization",
                    borderTopColor:".nav_o_l_btc_hoverInitialization",
                    borderTopWidth:".nav_o_l_btw_hoverInitialization",
                    borderBottomColor:".nav_o_l_bbc_hoverInitialization",
                    borderBottomWidth:".nav_o_l_bbw_hoverInitialization",
                    borderColor:".nav_o_l_bc_hoverInitialization",
                    borderWidth:".nav_o_l_bw_hoverInitialization",
                    display:"nav_display_hoverInitialization",
                },
                mouseleave: {
                    backgroundColor: ".nav_o_l_b_hoverInitialization",
                    color: ".nav_o_l_c_hoverInitialization",
                    borderTopColor:".nav_o_l_btc_hoverInitialization",
                    borderTopWidth:".nav_o_l_btw_hoverInitialization",
                    borderBottomColor:".nav_o_l_bbc_hoverInitialization",
                    borderBottomWidth:".nav_o_l_bbw_hoverInitialization",
                    borderColor:".nav_o_l_bc_hoverInitialization",
                    borderWidth:".nav_o_l_bw_hoverInitialization",
                    display:"nav_display_hoverInitialization",
                },
                click:{
                    click:".nav_o_l_btw_hoverInitializationClick"
                }
            },
        },
        ul: { //ul是span和li的父级
            backgroundColor: "",
            border_color: "#fff",
            border_width: "0px",
            border_style: "solid",
            top: "1px",
            left: "-1px",
        },
        Count_li_width: function (iSelected, w) {
            var a, b, c, f;
            if (w) {
            } else {
                // w = iSelected.closest(".zm-row-full").css("width");
                w = iSelected.closest(".zm-all").css("width");
            }
            a = iSelected.children("ul").children("li");
            c = iSelected.children("ul").children("span");
            w=parseInt(w)-2;//2像素外边托拉拽线的边框问题
            if (c.length > 0) {
                f = parseInt(c.css("width"));
                b = (w - f * c.length) / a.length
            } else {
                b = w/ a.length;
            }

            // $(a).css({"marginRight": "0px", "border-right-width": "", "box-sizing": "border-box"}); //全屏默认清楚选择样式
            $(a).each(function (index, element) {

                $(this).css("width", b + "px");
            });
            console.log(a.length)
            console.log(c.length)
            console.log(b);
            return b;
        },
        wd_callback: function (ele, ele_width) {
            var a, c, f, w, b;
            a = ele.children("ul").children("li");
            c = ele.children("ul").children("span");
            // w = iSelected.closest(".zm-row-full").css("width");
            // c = ele_width / i.length - 1;
            if (c.length > 0) {
                f = parseInt(c.css("width"));
                b = (parseInt(ele_width) - f * c.length) / a.length
            } else {
                b = parseInt(ele_width) / a.length;
            }
            $(ele.children("ul").children("li")).each(function () {
                $(this).css({"width": b + "px", "box-sizing": "border-box"})
                $(this).css("marginRight", "");
                $(this).css("border-right-width", "")
            });
            console.log("nav_OneType_li_width_callback" + b);
            return b;
        },
        Count_add_span_width: function (iSelected, w) {
            var a, b, c;
            c = parseInt(iSelected.children("ul").children("span").css("width"));
            console.log(iSelected.css("width"));

           console.log(zmEditor.globalMethod.nav.data.arrLike[zmEditor.globalMethod.nav.global_compotents_IndependentName(iSelected)].span.sStyle.width)
            // zmEditor.globalMethod.nav.data.arrLike[zmEditor.globalMethod.nav.global_compotents_IndependentName(iSelected)].span.sStyle.width
            if (parseInt(zmEditor.globalMethod.nav.OneType.span.width) < c) {
                zmEditor.globalMethod.nav.OneType.span.width = c + "px";
            }
            return c;
        },
        initialize_nva_li_style_callbacka: function (iSelected, li, string1, string2, stringtype, s_h, init_s_h) {
            var hoverBg = iSelected[0].classList[4];
            switch (hoverBg) {
                case "zm_nav_general_" + stringtype + "_one":
                    li[s_h][string1] = li[init_s_h][string2]["zm_nav_general_" + stringtype + "_one"];
                    break;
                case "zm_nav_general_" + stringtype + "_two":
                    // console.log(string1);
                    // console.log(string2);
                    // console.log(stringtype);
                    li[s_h][string1] = li[init_s_h][string2]["zm_nav_general_" + stringtype + "_two"];
                    break;
                case "zm_nav_general_" + stringtype + "_three":

                    li[s_h][string1] = li[init_s_h][string2]["zm_nav_general_" + stringtype + "_three"];

                    break;
                case "zm_nav_general_" + stringtype + "_four":
                    li[s_h][string1] = li[init_s_h][string2]["zm_nav_general_" + stringtype + "_four"];
                    break;
                case "zm_nav_general_" + stringtype + "_five":
                    li[s_h][string1] = li[init_s_h][string2]["zm_nav_general_" + stringtype + "_five"];
                    break;
                default:
                    break;
            }
            return li[s_h][string1];
        },
        initialize_nva_li_style: function (isSelect, num, string) {
            $(isSelect.children("div:eq(" + num + ")")).children("div").children(".zm-colorPicker").children(".zm-colorPicker-switch").css("background-color", string);
        },
    },
    TwoType: {
        ul: {
            sStyle:{
            wd: "none",
            height: "200px",
            backgroundColor:{
                "zm_nav_general_cross_one_one": "#2b6ca3",
                "zm_nav_general_cross_one_two": "#1fbab8",
                "zm_nav_general_cross_one_three": "#edf1f5",
                "zm_nav_general_cross_one_four": "#9e0433",
                "zm_nav_general_cross_one_five": "#fff",
                "zm_nav_general_cross_two_one": "#fff",
                "zm_nav_general_cross_two_two": "#fff",
                "zm_nav_general_cross_three_one": "#f5f5f5",
                "zm_nav_general_cross_three_two": "#ea3e7e",
                "zm_nav_general_cross_three_three": "#187035",
                "zm_nav_general_cross_three_four": "#d41c62",
                "zm_nav_general_vertical_one_one": "#fff",
                "zm_nav_general_vertical_two_one": "#009591",
                "zm_nav_general_vertical_three_one": "#fff",
            },
            },
            top: function () {
                return zmEditor.globalMethod.nav.OneType.li.sStyle.height;
            },
            left:function(){

            },
        },
        li: {
            wd: "none",
            bg: "none",
            backgroundColor:{
                "zm_nav_general_cross_one_one": "#fff",
                "zm_nav_general_cross_one_two": "#00f6ff",
                "zm_nav_general_cross_one_three": "#fff",
                "zm_nav_general_cross_one_four": "#fff",
                "zm_nav_general_cross_one_five": "#fff",
                "zm_nav_general_cross_two_one": "#fff",
                "zm_nav_general_cross_two_two": "#fff",
                "zm_nav_general_cross_three_one": "#fff",
                "zm_nav_general_cross_three_two": "#fff",
                "zm_nav_general_cross_three_three": "#fff",
                "zm_nav_general_cross_three_four": "#fff",
                "zm_nav_general_vertical_one_one": "#2b6ca3",
                "zm_nav_general_vertical_two_one": "#fff",
                "zm_nav_general_vertical_three_one": "#79c959",
            },
        },

    },
    ThreeType: {
        ul: {
            width: "none",
            height: "none",
            backgroundColor:{
                "zm_nav_general_cross_one_one": "#fff",
                "zm_nav_general_cross_one_two": "#00f6ff",
                "zm_nav_general_cross_one_three": "#fff",
                "zm_nav_general_cross_one_four": "#fff",
                "zm_nav_general_cross_one_five": "#fff",
                "zm_nav_general_cross_two_one": "#fff",
                "zm_nav_general_cross_two_two": "#fff",
                "zm_nav_general_cross_three_one": "#fff",
                "zm_nav_general_cross_three_two": "#fff",
                "zm_nav_general_cross_three_three": "#fff",
                "zm_nav_general_cross_three_four": "#fff",
                "zm_nav_general_vertical_one_one": "#2b6ca3",
                "zm_nav_general_vertical_two_one": "#fff",
                "zm_nav_general_vertical_three_one": "#79c959",
            },
            top: function () {

            },
            left: function (nav_name) {
                return parseInt(zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.width) + 0.5 + "px";
            },
        },
        li: {
            wd: "none",
            bg: "none",
            backgroundColor:{
                "zm_nav_general_cross_one_one": "#fff",
                "zm_nav_general_cross_one_two": "#00f6ff",
                "zm_nav_general_cross_one_three": "#fff",
                "zm_nav_general_cross_one_four": "#fff",
                "zm_nav_general_cross_one_five": "#fff",
                "zm_nav_general_cross_two_one": "#fff",
                "zm_nav_general_cross_two_two": "#fff",
                "zm_nav_general_cross_three_one": "#fff",
                "zm_nav_general_cross_three_two": "#fff",
                "zm_nav_general_cross_three_three": "#fff",
                "zm_nav_general_cross_three_four": "#fff",
                "zm_nav_general_vertical_one_one": "#2b6ca3",
                "zm_nav_general_vertical_two_one": "#fff",
                "zm_nav_general_vertical_three_one": "#79c959",
            },
        },
    },
    initialize_html_callback: function (_this, iSelected, callback) {
        //添加到导航栏设置点击事件
        // iSelected.css("width","");
        // console.log(iSelected);
        var ul = iSelected.children("ul");
        var ulNav =$(zmEditor.globalMethod.nav.data.savePageSet());//保存页面设置的字符串并获取渲染字符串;
        console.log(ulNav);
        var t, y, u, i, o, p, z, x, c, v, l, k,nav_name,typeStr;
        var a,e,b,d,c_split,arrPreservation={};
        a = iSelected[0].classList[4];
        b = zmEditor.globalMethod.nav.global_verOrcross_type(a);
        d = a;//把-换成_;
        console.log(a);
        console.log(d);
        console.log("是否相等"+"--->"+(a==d));
        v = ulNav.children("li");
        x = (Number.parseInt(ul.css("width")) / v.length);
        nav_name=zmEditor.globalMethod.nav.global_compotents_IndependentName(iSelected);
        typeStr=zmEditor.globalMethod.nav.global_verOrcross_type(nav_name);
        if (zmEditor.globalMethod.nav.global_verOrcross(iSelected)) {
            function nav_One_li(ObjectStyle, iSelected, index) {
                return $("<li class='"+nav_name+"zm-page-setting-liOne' style='position: relative;'><p>" + ObjectStyle.text + "</p></li>");
            }
            ul.html("");
            $(v).each(function (index, ele){
                //一级栏目循环//待预留添加栏目的各种属性类名等等。
                u = nav_One_li({
                    text: $(this).children(".zm-nav-oneLi-div").children(".zm-page-setting-a").text()
                },iSelected, index);
                if(u.length>0)arrPreservation["u"]=u;
                if($(this).children(".zm-nav-oneLi-div").children(".pageSeteyes").hasClass("fa-eye")) {
                    k = $("<span ></span>");
                    callback(u, "." + nav_name + "zm-page-setting-ulTwo" + index + ""); //添加二级ul类名hover点击显示隐藏事件
                    ul.append(u);//一级ul添加一级li;
                    if (index != v.length - 1) { // 如果后面为最后一个li则不添加span
                        ul.append(k);//一级ul添加一级span;
                    }
                    t = $(this).children(".zm-dialog-content-pageSet-childulTwo");
                    if (t.length > 0) {
                        arrPreservation["t"] = t;
                    }
                    if (t.length > 0) {
                        i = $("<ul class='" + nav_name + "zm-page-setting-ulTwo" + index + " " + nav_name + "zm-page-setting-ulTwo' style=''></ul>");
                        if (i.length > 0) arrPreservation["i"] = i;
                        u.append(i);//二级ul和一级li放在里面
                        // ul.append(i); //二级ul和一级li放在同一父元素.
                        if (t.children("li").length > 0) {
                            $(t.children("li")).each(function (index, ele) {//二级栏目循环//position: relative;
                                if ($(this).children(".zm-nav-oneLi-div").children(".pageSeteyes").hasClass("fa-eye")){
                                    o = $("<li class='" + nav_name + "zm-page-setting-liTwo' style=''> <p>" + $(this).children(".zm-nav-oneLi-div").children(".zm-page-setting-a").text() + "</p></li>");
                                    if (o.length > 0) arrPreservation["o"] = o;
                                    callback(o)// //添加三级ul类名hover点击显示隐藏事件
                                    i.append(o);//二级ul添加二级li
                                    y = $(this).children(".zm-dialog-content-pageSet-childulThree");
                                    if (y.length > 0) {
                                        l = zmEditor.globalMethod.nav.typeClass_two_ul_height(arrPreservation.i, y.children("li").length, zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.height);
                                        console.log(zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.height);
                                        var ulThreeHeight=y.children("li").length>4?" ":parseInt(zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.lineHeight)*4+"px";
                                        console.log(ulThreeHeight);
                                        p = $("<ul class='" + nav_name + "zm-page-setting-ulThree' style='height:"+ulThreeHeight+"'></ul>");//二级li级添加三级ul;//  三级ul的高度设置  //"+"height:"+l+"
                                        if (y.length > 0) arrPreservation["y"] = y;
                                        console.log(arrPreservation["y"]);
                                        if (p.length > 0) arrPreservation["p"] = p;
                                        o.append(p);
                                        if (y.children("li").length > 0) {//三级栏目循环
                                            $(y.children("li")).each(function (index, ele) {  //";margin-top:"+zmEditor.globalMethod.nav.typeClass_ul_li_two_marginTop(parseInt(u.css("height")),y.children("li").length, l, i)"+
                                                if ($(this).children(".zm-nav-oneLi-div").children(".pageSeteyes").hasClass("fa-eye")){
                                                    z = $("<li class='" + nav_name + "zm-page-setting-liThree' style=''> <p>" + $(this).children(".zm-nav-oneLi-div").children(".zm-page-setting-a").text() + "</p></li>");
                                                    console.log(o.children("p"));
                                                    if(!(o.children("p").children("b").length>0)){
                                                        o.children("p").append("<b style='float: right;margin-right: 10px;'>&#155<b/>") //如果有是三级li，就添加大于号箭头
                                                    }
                                                    if (z.length > 0) arrPreservation["z"] = z;
                                                    p.append(z);
                                                }
                                            })
                                        }
                                    }
                                }
                            })
                        }
                    }
                }
            });
            u=arrPreservation.u;
            t=arrPreservation.t;
            i=arrPreservation.i;
            o=arrPreservation.o;
            p=arrPreservation.p;
            z=arrPreservation.z;
            y=arrPreservation.y;
            // console.log(t);// console.log(i);// console.log(u);// console.log(y);// console.log(iSelected);// console.log(nav_name);// console.log(zmEditor.globalMethod.nav.data.arrLike);// console.log(zmEditor.globalMethod.nav.data.arrLike[nav_name]);
            $(".style_nav_"+nav_name+"").html("");//样式表清空
            // 一级li样式和hover事件
            zmEditor.globalMethod.nav.initNavList.styleCallback(iSelected,nav_name,a); //一级li和span样式; ,a   ,b,d
            // iSelected.css("width","");//清空iSelected宽度
            zmEditor.globalMethod.nav.initNavList.hover_styleCallback(iSelected,nav_name,a);// 对应一级列表 li hover初始化   b,
            // 一级li样式和hover事件
            //2 级ul 和li 的样式以及hover
            if(i&&t&&u){
                // l = zmEditor.globalMethod.nav.typeClass_two_ul_height(i, t.children("li").length,zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.height);//二级ul的高度 传入二级ul,以及二级ul下所对应的li设置ul的高度;
                zmEditor.globalMethod.nav.markUlStyle($(".style_nav_"+nav_name+""),"."+nav_name+"zm-page-setting-ulTwo",  //";height:"+l+  "width:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.width +
                    ";background-color:#fff;padding-left:10px;display:none;box-shadow: #ccc 0px 1px 5px, #ccc 0px 0px 5px;box-sizing:content-box;");// left:;top:; position: absolute;

                zmEditor.globalMethod.nav.markUlStyle($(".style_nav_"+nav_name+""),"."+nav_name+"zm-page-setting-liTwo",
                    ";background-color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name]["dropdownBg"]+";width:"+(parseInt(zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.width)-10+"px")+";padding:0 10px;color:"
                    +zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.color+";position: relative;height:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.height+";border-bottom: 1px "+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.borderStyle+" "+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.borderBottomColor+";", //box-sizing:content-box;   margin:10px 0;
                    "transition:all 1s ease-out;","background-color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.hHover.backgroundColor+";color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.hHover.color+";" //";background-color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name]["dropdownBg"]+
                );
                zmEditor.globalMethod.nav.markUlStyle($(".style_nav_"+nav_name+""),"."+nav_name+"zm-page-setting-liTwo:last-of-type","border-bottom:0px solid #fff"); //渲染最后一个li的边框清零
            }
            // 2 级ul 和li 的样式以及hover
            // 3 级ul 和li 的样式以及hover
            console.log(zmEditor.globalMethod.nav.data.arrLike[nav_name]["dropdownBg"]);
            console.log(zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.color);
            if(y){
                zmEditor.globalMethod.nav.markUlStyle($(".style_nav_"+nav_name+""),"."+nav_name+"zm-page-setting-ulThree", //"width:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.width +   padding:10px 0;     zmEditor.globalMethod.nav.ThreeType.ul.left(nav_name)
                    ";background-color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name]["dropdownBg"]+";display:none;box-shadow: #ccc 0px 1px 5px, #ccc 0px 0px 5px;position: absolute;top:0px; left:" +(parseInt(zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.width) -10+ 0.5 + "px") + ";color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.color+";");
                zmEditor.globalMethod.nav.markUlStyle($(".style_nav_"+nav_name+""),"."+nav_name+"zm-page-setting-liThree",
                    "width:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.width+";padding:0 10px;height:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.height+";border-bottom: 1px "+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.borderStyle+" "+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.borderBottomColor+";",//";margin-top:"+zmEditor.globalMethod.nav.typeClass_ul_li_two_marginTop(parseInt(u.css("height")),y.children("li").length, l, i)+  margin:10px 0;
                    "transition:all 1s ease-out;","background-color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.hHover.backgroundColor+";color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.hHover.color+";")//;background-color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name]["dropdownBg"]+"
            }
        } else {
            function nav_One_li(ObjectStyle, iSelected, index) {
                    return $("<li class='"+nav_name+"zm-page-setting-liOne' style='position: relative;'><p>" + ObjectStyle.text + "</p></li>");
            }
            ul.html("");
            console.log("我清空了");
            // debugger;
            $(v).each(function (index, ele){
                //一级栏目循环//待预留添加栏目的各种属性类名等等。
                u = nav_One_li({
                    text: $(this).children(".zm-nav-oneLi-div").children(".zm-page-setting-a").text()
                },iSelected, index);
                if(u.length>0)arrPreservation["u"]=u;
                if($(this).children(".zm-nav-oneLi-div").children(".pageSeteyes").hasClass("fa-eye")) {
                    k = $("<span ></span>");
                    callback(u, "." + nav_name + "zm-page-setting-ulTwo" + index + ""); //添加二级ul类名hover点击显示隐藏事件
                    // callback(u); //添加二级ul类名hover点击显示隐藏事件
                    ul.append(u);//一级ul添加一级li;
                    console.log("我调用了");
                    if (index != v.length - 1) {
                        ul.append(k);//一级ul添加一级span;
                    }
                    t = $(this).children(".zm-dialog-content-pageSet-childulTwo");
                    if (t.length > 0) {
                        arrPreservation["t"] = t;
                    }
                    console.log($(this));
                    console.log(t);
                    console.log(t.length);
                    if (t.length > 0) {
                        i = $("<ul class='" + nav_name + "zm-page-setting-ulTwo" + index + " " + nav_name + "zm-page-setting-ulTwo' style=''></ul>");//一li级添加二级ul;/;width:" + zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.width + ";height:"+zmEditor.globalMethod.nav.TwoType.ul["sStyle"].height+";background-color:" + zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.backgroundColor +";

                        if (i.length > 0) arrPreservation["i"] = i;
                        // u.append(i);
                        ul.append(i); //二级ul和一级li放在同一父元素.
                        if (t.children("li").length > 0) {
                            $(t.children("li")).each(function (index, ele) {//二级栏目循环//position: relative;
                                if ($(this).children(".zm-nav-oneLi-div").children(".pageSeteyes").hasClass("fa-eye")){
                                    o = $("<li class='" + nav_name + "zm-page-setting-liTwo' style=''><p>" + $(this).children(".zm-nav-oneLi-div").children(".zm-page-setting-a").text() + "</p></li>");//width: " + zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.width + "; background-color:" + zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.backgroundColor + ";margin-top: " + zmEditor.globalMethod.nav.typeClass_ul_li_two_marginTop(parseInt(u.css("height")), t.children("li").length, l, i) + "

                                if (o.length > 0) arrPreservation["o"] = o;
                                callback(o)// //添加三级ul类名hover点击显示隐藏事件
                                i.append(o);//二级ul添加二级li
                                y = $(this).children(".zm-dialog-content-pageSet-childulThree");
                                if (y.length > 0) {                                                       //arrPreservation.t.children("li").length
                                    l = zmEditor.globalMethod.nav.typeClass_two_ul_height(arrPreservation.i, y.children("li").length, zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.height);
                                    p = $("<ul class='" + nav_name + "zm-page-setting-ulThree' style=''></ul>");//二级li级添加三级ul;//  三级ul的高度设置  //"+"height:"+l+"

                                    if (y.length > 0) arrPreservation["y"] = y;
                                    console.log(arrPreservation["y"]);
                                    if (p.length > 0) arrPreservation["p"] = p;
                                    o.append(p);
                                    if (y.children("li").length > 0) {//三级栏目循环

                                        $(y.children("li")).each(function (index, ele) {  //";margin-top:"+zmEditor.globalMethod.nav.typeClass_ul_li_two_marginTop(parseInt(u.css("height")),y.children("li").length, l, i)"+
                                            if ($(this).children(".zm-nav-oneLi-div").children(".pageSeteyes").hasClass("fa-eye")){
                                                z = $("<li class='" + nav_name + "zm-page-setting-liThree' style=''><p>" + $(this).children(".zm-nav-oneLi-div").children(".zm-page-setting-a").text() + "</p></li>");//三级ul添加三级li  width: " + zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.width + ";background-color:" + zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.backgroundColor + ";

                                            if (z.length > 0) arrPreservation["z"] = z;
                                            p.append(z);
                                        }
                                        })
                                    }
                                }
                            }
                            })
                        }
                    }
                }
            });
            u=arrPreservation.u;
            t=arrPreservation.t;
            i=arrPreservation.i;
            o=arrPreservation.o;
            p=arrPreservation.p;
            z=arrPreservation.z;
            y=arrPreservation.y;
            console.log(t);
            console.log(i);
            console.log(u);
            console.log(y);
            function markLiStyleYe(typeClass,a,b,d,c){ //zm-page-setting-liTwo
                /** yerui
                 * typeClass 即是要改变的style表
                 * a 即传入的类名
                 * b 即传入普通样式
                 * d 即传入transition样式
                 * c 即hover样式
                 */
                var q,w,e,r,t,y,u,i;
                typeClass.text(function(index,text){
                    console.log(text);
                    text=text.replace(/\s/g,"");
                    console.log(text);
                    if(text){
                        if(text.indexOf(a)==-1){//&&text.indexOf(a+":hover")>-1    //2 a是一个新的类名.
                            return text+a+"{"+b+d+"}"+a+":hover{"+c+"}";
                        }else{
                           q=text.indexOf(a)// 判断a在
                        if(q>-1){  //3
                        }
                        text.replace(/a/,function(){})
                        }
                    }else{
                        return ""+a+"{"+b+d+"}"+a+":hover{"+c+"}";   //1
                    }
                });
            }
            console.log(iSelected);
            console.log(nav_name);
            console.log(zmEditor.globalMethod.nav.data.arrLike);
            console.log(zmEditor.globalMethod.nav.data.arrLike[nav_name]);
           $(".style_nav_"+nav_name+"").html("");//样式表清空
            // 一级li样式和hover事件
            zmEditor.globalMethod.nav.initNavList.styleCallback(iSelected,nav_name,a); //一级li和span样式; ,a   ,b,d
            // iSelected.css("width","");//清空iSelected宽度
            zmEditor.globalMethod.nav.initNavList.hover_styleCallback(iSelected,nav_name,a);// 对应一级列表 li hover初始化   b,
            // 一级li样式和hover事件
            //2 级ul 和li 的样式以及hover
            if(i&&t&&u){
                // l = zmEditor.globalMethod.nav.typeClass_two_ul_height(i, t.children("li").length,zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.height);//二级ul的高度 传入二级ul,以及二级ul下所对应的li设置ul的高度;
                zmEditor.globalMethod.nav.markUlStyle($(".style_nav_"+nav_name+""),"."+nav_name+"zm-page-setting-ulTwo",  //";height:"+l+  "width:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.width +
                 ";background-color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name]["dropdownBg"]+";padding:10px 0;display:none;box-shadow: #ccc 0px 1px 5px, #ccc 0px 0px 5px;box-sizing:content-box;position: absolute;");// left:;top:;
                // c=zmEditor.globalMethod.nav.typeClass_ul_li_two_marginTop(parseInt(u.css("height")), t.children("li").length, l, i);  top:"+(parseInt(zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.height)+0.5+"px")+";

                zmEditor.globalMethod.nav.styleCallback_add_moreUlClass_regexp($(".style_nav_"+nav_name+""),zmEditor.globalMethod.nav.setTwoUlTopClass(iSelected,nav_name));
                zmEditor.globalMethod.nav.styleCallback_add_moreUlClass_regexp($(".style_nav_"+nav_name+""),zmEditor.globalMethod.nav.setTwoUlLeftClass(iSelected,nav_name));

                zmEditor.globalMethod.nav.markUlStyle($(".style_nav_"+nav_name+""),"."+nav_name+"zm-page-setting-liTwo",
                "width:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.width+";margin:10px 0;padding:0 10px;color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.color+";height:50px;", //box-sizing:content-box;
                    "transition:all 1s ease-out;","background-color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.hHover.backgroundColor+";color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.hHover.color+";" //";background-color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name]["dropdownBg"]+
                )
            }
            // 2 级ul 和li 的样式以及hover
            // 3 级ul 和li 的样式以及hover
            console.log(zmEditor.globalMethod.nav.data.arrLike[nav_name]["dropdownBg"]);
            console.log(zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.color);
            if(y){
                zmEditor.globalMethod.nav.markUlStyle($(".style_nav_"+nav_name+""),"."+nav_name+"zm-page-setting-ulThree", //"width:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.width +
                    ";background-color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name]["dropdownBg"]+";padding:10px 0;display:none;box-shadow: #ccc 0px 1px 5px, #ccc 0px 0px 5px;position: absolute;top:0px; left:" + zmEditor.globalMethod.nav.ThreeType.ul.left(nav_name) + ";color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.color+";");
                zmEditor.globalMethod.nav.markUlStyle($(".style_nav_"+nav_name+""),"."+nav_name+"zm-page-setting-liThree",
                    "width:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.width+";margin:10px 0;padding:0 10px;height:50px;",//";margin-top:"+zmEditor.globalMethod.nav.typeClass_ul_li_two_marginTop(parseInt(u.css("height")),y.children("li").length, l, i)+
                    "transition:all 1s ease-out;","background-color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.hHover.backgroundColor+";color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.hHover.color+";")//;background-color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name]["dropdownBg"]+"
            }
            // 3 级ul 和li 的样式以及hover
        }
    },
    styleCallback_add_moreUlClass_regexp:function(typeClass,a){
        typeClass.html(function(index,text){
            return text+"\n"+a+"\n";
        });
    },
    markUlStyle:function (typeClass,a,b,d,c){ //zm-page-setting-liTwo
    /** yerui
     * typeClass 即是要改变的style表
     * a 即传入的类名
     * b 即传入普通样式
     * d 即传入transition样式
     * c 即hover样式
     */
    var q,w,e,r,t,y,u,i,match_str,match_text;
    typeClass.html(function(index,text){
        u={};
        q=text.indexOf(a);//
        if(q>-1){
            if(text){
                e=new RegExp(""+a+"{(.*)}","i");
                match_text=text.replace(e,function(match,p1,offset,string){
                    match_str=match;
                    console.log(b);
                    if(b){
                        console.log(b);
                        b=b.split(";");
                        console.log(b);
                        b=b.filter(function(element){
                            return element!=""
                        })
                        console.log(b);
                        for( var ttt=0;ttt<b.length;ttt++){
                            y=/(.*):(.*)/.exec(b[ttt])
                            u[y[1]]=y[2];
                        }
                        for( var k in u){
                            var aaa=new RegExp("("+k+"):(.*?)(?=;);","i"); //  width:(.*?)(?=;)
                            match_str=match_str.replace(aaa,function(match,p1,p2,offset,string){
                                // console.log("match-->"+match);
                                // console.log("p1-->"+p1);
                                // console.log("p2-->"+p2);
                                // // console.log("offset-->"+offset);
                                // // console.log("string-->"+string);
                                // console.log(k+"--->"+u[k]);
                                return   ""+p1+":"+u[k]+";"
                            })
                        }
                        return match_str;
                    }
                });
                return match_text;
            }
        }else{//如果没有这个类名
            if(d){
                if(c){return text+a+"{"+b+d+"}\n"+a+":hover{"+c+"}\n";}
                return text+"\n"+a+"{"+b+d+"}\n";
            }
            if(text){
                return text+a+"{"+b+"}\n"; //1
            }else{
                return a+"{"+b+"}\n"; //1
            }
        }
    });
  },
    typeClass_two_ul_height: function (ul, li_length, height) {
        var a;
        // ul.css({"padding": "10px 0"});//parseInt(zmEditor.globalMethod.nav.OneType.li.ht)先设置死高度为50； li_length*50+px
        // a = li_length >= 4? li_length*parseInt(height+15)+40:200;    //小于4个和大于4个元素时的li显示方式.
        // a = li_length*parseInt(height)>80?li_length*parseInt(height):80;    //小于4个和大于4个元素时的li显示方式.
        a = li_length*parseInt(height)+20;
        // console.log(height);
        // console.log(li_length);
        // console.log(li_length*parseInt(height+20));
        // console.log(a);
        return a+"px";
    },
    setTwoUlLeft:function(index,li_width,span_width,islect){
        // var lilength=islect.children().children("li"),wlength=islect.children().children("span"),a,b;
        // console.log(index);
        // debugger;
        if(/vertical/i.test(islect[0].classList[4])){return parseInt(li_width)+0.5+"px";}
        if(index==0){
        return 0+"px";
        }else{
            // console.log(index*(parseInt(li_width)+parseInt(span_width)))
        return index*(parseInt(li_width)+parseInt(span_width))+"px";
        }
    },
    setTwoUlLeftClass:function (iSelected,nav_name) {
        var iSelectedLength,strings="";
        iSelectedLength=iSelected.children().children("li").length;
        for(var i=0;i<iSelectedLength;i++){
            strings+="."+nav_name+"zm-page-setting-ulTwo"+i+"{left:"+zmEditor.globalMethod.nav.setTwoUlLeft(i,zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.width,zmEditor.globalMethod.nav.data.arrLike[nav_name].span.sStyle.width,iSelected)+";}\n"
        }
        return strings;
    },
    setTwoUlTopClass:function (iSelected,nav_name) {
        var iSelectedLength,strings="";
        iSelectedLength=iSelected.children().children("li").length;
        for(var i=0;i<iSelectedLength;i++){
            strings+="."+nav_name+"zm-page-setting-ulTwo"+i+"{top:"+zmEditor.globalMethod.nav.setTwoUlTop(i,zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.height,zmEditor.globalMethod.nav.data.arrLike[nav_name].span.sStyle.height,iSelected)+";}\n"
        }
        return strings;
    },
    setTwoUlTop:function(index,li_height,span_height,islect){
        // var lilength=islect.children().children("li"),wlength=islect.children().children("span"),a,b;
        // console.log(index);
        // debugger;
        if(/cross/i.test(islect[0].classList[4])){return parseInt(li_height)+0.5+"px";}
        if(index==0){
            return 0+"px";
        }else{
            // console.log(index*(parseInt(li_height)+parseInt(span_height)))
            return index*(parseInt(li_height)+parseInt(span_height))+"px";
        }
    },
    // 待删除
    mouseenterOrleaveHover: function (u,classnanme) {
        u.off();//".hover_or_click_showclick"
        u.on("mouseenter",function(){//+eventType1
            if(classnanme){
                $(classnanme).css("display", "block");
                $(classnanme).off("mouseenter mouseleave");
                $(classnanme).on("mouseenter",function(){
                    $(classnanme).css("display", "block");
                }).on("mouseleave",function(){
                    $(classnanme).css("display", "none");
                });

            }else{
                $(this).children("ul").css("display", "block");
            }
        });
        u.on("mouseleave",function(){//+eventType1
            if(classnanme){
                $(classnanme).css("display", "none");
            }else{
                $(this).children("ul").css("display", "none");
            }
        });
    },
    // 待删除
    refreshStyleTable:function (nowEdit,nav_name){
        /**重绘演示表*/
        $(".style_nav_"+nav_name+"").html("");//样式表清空
        if (zmEditor.globalMethod.nav.global_verOrcross(nowEdit)) {
            zmEditor.globalMethod.nav.markUlStyle($(".style_nav_"+nav_name+""),"."+nav_name+"zm-page-setting-ulTwo",  //";height:"+l+  "width:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.width +
                ";background-color:#fff;;padding-left:10px;display:none;box-shadow: #ccc 0px 1px 5px, #ccc 0px 0px 5px;box-sizing:content-box;");// left:;top:; position: absolute;
            zmEditor.globalMethod.nav.markUlStyle($(".style_nav_"+nav_name+""),"."+nav_name+"zm-page-setting-liTwo",
                "width:"+(parseInt(zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.width)-10+"px")+";padding:0 10px;color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.color+";position: relative;height:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.height+
                ";background-color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name]["dropdownBg"]+";border-bottom: 1px "+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.borderStyle+" "+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.borderBottomColor+";", //box-sizing:content-box;   margin:10px 0;
                "transition:all 1s ease-out;","background-color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.hHover.backgroundColor+";color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.hHover.color+";" //";background-color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name]["dropdownBg"]+
            )
            zmEditor.globalMethod.nav.markUlStyle($(".style_nav_"+nav_name+""),"."+nav_name+"zm-page-setting-liTwo:last-of-type","border-bottom:0px solid #fff"); //渲染最后一个li的边框清零

            zmEditor.globalMethod.nav.markUlStyle($(".style_nav_"+nav_name+""),"."+nav_name+"zm-page-setting-ulThree", //"width:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.width +   padding:10px 0;     zmEditor.globalMethod.nav.ThreeType.ul.left(nav_name)
                ";background-color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name]["dropdownBg"]+";display:none;box-shadow: #ccc 0px 1px 5px, #ccc 0px 0px 5px;position: absolute;top:0px; left:" +(parseInt(zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.width) -10+ 0.5 + "px") + ";color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.color+";");
               console.log(zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.height)
            zmEditor.globalMethod.nav.markUlStyle($(".style_nav_"+nav_name+""),"."+nav_name+"zm-page-setting-liThree",
                "width:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.width+";padding:0 10px;height:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.height+";border-bottom: 1px "+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.borderStyle+" "+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.borderBottomColor+";",//";margin-top:"+zmEditor.globalMethod.nav.typeClass_ul_li_two_marginTop(parseInt(u.css("height")),y.children("li").length, l, i)+  margin:10px 0;
                "transition:all 1s ease-out;","background-color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.hHover.backgroundColor+";color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.hHover.color+";")//;background-color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name]["dropdownBg"]+"

        }else{
            // left=zmEditor.globalMethod.nav.setTwoUlLeft(a,zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.width,zmEditor.globalMethod.nav.data.arrLike[nav_name].span.sStyle.width,nowEdit)
            // console.log(parseInt(zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.height)+2+"px");

            zmEditor.globalMethod.nav.markUlStyle($(".style_nav_"+nav_name+""),"."+nav_name+"zm-page-setting-ulTwo",//"width:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.width +  box-sizing:content-box;
                ";background-color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name]["dropdownBg"]+";padding:10px 0;display:none;box-shadow: #ccc 0px 1px 5px, #ccc 0px 0px 5px;position: absolute;");
            // left:;top:;  top:"+(parseInt(zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.height)+0.5+"px")+";
            zmEditor.globalMethod.nav.styleCallback_add_moreUlClass_regexp($(".style_nav_"+nav_name+""),zmEditor.globalMethod.nav.setTwoUlTopClass(nowEdit,nav_name));
            zmEditor.globalMethod.nav.styleCallback_add_moreUlClass_regexp($(".style_nav_"+nav_name+""),zmEditor.globalMethod.nav.setTwoUlLeftClass(nowEdit,nav_name));
            zmEditor.globalMethod.nav.markUlStyle($(".style_nav_"+nav_name+""),"."+nav_name+"zm-page-setting-liTwo",//";background-color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name]["dropdownBg"]+
                "width:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.width+";margin:10px 0;padding:0 10px;color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.color+";height:50px;", //"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.height+"
                "transition:all 1s ease-out;","color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.hHover.color+";background-color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.hHover.backgroundColor+";"//"background-color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.hHover.backgroundColor+
            )
            // 2 级ul 和li 的样式以及hover
            // 3 级ul 和li 的样式以及hover
            zmEditor.globalMethod.nav.markUlStyle($(".style_nav_"+nav_name+""),"."+nav_name+"zm-page-setting-ulThree",//"width:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.width +
                ";background-color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name]["dropdownBg"]+";padding:10px 0;display:none;box-shadow: #ccc 0px 1px 5px, #ccc 0px 0px 5px;position: absolute;top:0px; left:" + zmEditor.globalMethod.nav.ThreeType.ul.left(nav_name) + ";color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.color+";");
            zmEditor.globalMethod.nav.markUlStyle($(".style_nav_"+nav_name+""),"."+nav_name+"zm-page-setting-liThree",//;background-color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name]["dropdownBg"]+"
                "width:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.sStyle.width+";margin:10px 0;padding:0 10px;height:50px;",//";margin-top:"+zmEditor.globalMethod.nav.typeClass_ul_li_two_marginTop(parseInt(u.css("height")),y.children("li").length, l, i)+
                "transition:all 1s ease-out;","color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.hHover.color+";background-color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.hHover.backgroundColor+";")//"background-color:"+zmEditor.globalMethod.nav.data.arrLike[nav_name].li.hHover.backgroundColor+
        }
    },
    hover: function (u,classnanme) {
        u.off(".hover_or_click_show_string_cilck");//".hover_or_click_showclick"
        u.on("mouseenter.hover_or_click_show_string_hover",function(){//+eventType1
            if(classnanme){
                $(classnanme).css("display", "block");
                // $(classnanme).off("mouseenter mouseleave");
                $(classnanme).off(".hover_or_click_show_string_hover");
                $(classnanme).on("mouseenter.hover_or_click_show_string_hover",function(){
                    $(classnanme).css("display", "block");
                }).on("mouseleave.hover_or_click_show_string_hover",function(){
                    $(classnanme).css("display", "none");
                });
            }else{
                $(this).children("ul").css("display", "block");
            }
        });
        u.on("mouseleave.hover_or_click_show_string_hover",function(){//+eventType1
            if(classnanme){
                $(classnanme).css("display", "none");
            }else{
                $(this).children("ul").css("display", "none");
            }
        });
    },
    click: function (u, classnanme) {
        // debugger;
        u.off(".hover_or_click_show_string_hover");
        u.on("click.hover_or_click_show_string_cilck",function(){//+eventType1
            if(classnanme){
                $(classnanme).css("display", "block");  //此处有问题
                // $(classnanme).off("mouseenter.hover_or_click_show_string_cilck  mouseleave.hover_or_click_show_string_cilck");
                $(classnanme).off(".hover_or_click_show_string_cilck");
                // $(classnanme).off("mouseenter mouseleave");
                $(classnanme).on("mouseenter.hover_or_click_show_string_cilck",function(){
                    $(classnanme).css("display", "block");
                }).on("mouseleave.hover_or_click_show_string_cilck",function(){
                    $(classnanme).css("display", "none");
                });
            }else{
                $(this).children("ul").css("display", "block");
            }
        });
        u.on("mouseleave.hover_or_click_show_string_cilck",function(){//+eventType1
            if(classnanme){
                $(classnanme).css("display", "none");
            }else{
                $(this).children("ul").css("display", "none");
            }
        });
    },
    hover_or_click_show: function (h_or_c) {
        if (h_or_c == ".hover_or_click_show_string_hover") {
            return zmEditor.globalMethod.nav.hover;
        }
        if (h_or_c == ".hover_or_click_show_string_cilck") {
            return zmEditor.globalMethod.nav.click;
        }
    },
    hover_or_click_show_string: ".hover_or_click_show_string_hover",
    // 待删除
    global_prototype: function (ele, prototype, prototype_child) {
        console.log(zmEditor.globalMethod.nav.OneType["li"]["backgroundColor_bg"]["zm_nav_general_cross_one_four"]);
        return zmEditor.globalMethod.nav.OneType[ele][prototype] = prototype_child;
    },
    // 待删除
    global_verOrcross: function (select) { //if it is vertical nav,return true.
        return /vertical/.test(select[0].classList[4]);
    },
    global_compotents_IndependentName:function(select){ //获取独立的class
        if(!select) return undefined;
        return "data-"+select.attr("data-"+select[0].classList[4]);
    },
    global_verOrcross_type: function (string) {
        if (/vertical/.test(string)) {
            // return string.substring(string.indexOf("_") - 8);
            return string.substring(15);
        }
        return string.substring(21);
        // return string.substring(string.indexOf("_") + 1);
    },
    each:function(isSelect,fn,type3){
        isSelect.children("ul").children("li").each(fn);
    },
    componentslider:function(color,styleType,isSelect){
        var a,b;b=isSelect[0].classList[4]; a="data-"+isSelect.attr("data-"+b);
        /** 3月13日 为nav下的组件设置滚动颜色样式
         */
        switch (styleType){
            //改动过后
            case "mian_border_color"://ye添加

                arrLikestyle(a,"li","sStyle","borderColor",color);arrLikestyle(a,"span","sStyle","borderColor","color");

                isSelect.children().children("li").css("borderColor",color);
                isSelect.children().children("span").css("borderColor",color);
                break;
            case "mian_children_childrenLi_bg"://ye添加  对应mian下的ul下的所有li的背景色 3.14
                console.log("我背景色改变了");
                arrLikestyle(a,"li","sStyle","backgroundColor",color);
                zmEditor.globalMethod.nav.each(isSelect,function(i,ele){
                    $(this).css("backgroundColor",color);
                    zmEditor.globalMethod.nav.initNavList.endHover($(this), "sStyle", "hHover", "mouseenter" + zmEditor.globalMethod.nav.data.arrLike[a].li.eventClass.mouseenter.color,
                        "mouseleave" + zmEditor.globalMethod.nav.data.arrLike[a].li.eventClass.mouseleave.color,a);
                    zmEditor.globalMethod.nav.initNavList.endClick($(this), a, undefined, i, b);
                })
                zmEditor.globalMethod.nav.initNavList.currentPage(isSelect, a, "li", b);
                break;
            case "mian_children_childrenLi_hover_bg"://ye添加所有li背景色的hover   3.14
                arrLikestyle(a,"li","hHover","backgroundColor",color);
                zmEditor.globalMethod.nav.each(isSelect,function(){
                    zmEditor.globalMethod.nav.initNavList.endHover($(this), "sStyle", "hHover", "mouseenter" + zmEditor.globalMethod.nav.data.arrLike[a].li.eventClass.mouseenter.color,
                        "mouseleave" + zmEditor.globalMethod.nav.data.arrLike[a].li.eventClass.mouseleave.color, a);
                });
                break;
            case "mian_children_childrenLi_color"://ye添加 对应main下的所有字体色
                arrLikestyle(a,"li","sStyle","color",color);
                    zmEditor.globalMethod.nav.each(isSelect,function(){
                        $(this).css("color",color);
                        zmEditor.globalMethod.nav.initNavList.endHover($(this), "sStyle", "hHover", "mouseenter" + zmEditor.globalMethod.nav.data.arrLike[a].li.eventClass.mouseenter.color,
                            "mouseleave" + zmEditor.globalMethod.nav.data.arrLike[a].li.eventClass.mouseleave.color, a);
                });
                zmEditor.globalMethod.nav.initNavList.currentPage(isSelect, a, "li", b);
                break;
            case "mian_children_childrenLi__hover_color"://ye添加   对应main下的所有字体hover色
                arrLikestyle(a,"li","hHover","color",color);
                zmEditor.globalMethod.nav.each(isSelect,function(){
                    zmEditor.globalMethod.nav.initNavList.endHover($(this), "sStyle", "hHover", "mouseenter" + zmEditor.globalMethod.nav.data.arrLike[a].li.eventClass.mouseenter.color,
                        "mouseleave" + zmEditor.globalMethod.nav.data.arrLike[a].li.eventClass.mouseleave.color, a);
                });
                break;
           //span样式设置
            case "mian_children_childrenSpan_bg"://ye添加mian元素的子元素的子元素的每个上边框色颜色
                arrLikestyle(a,"span","sStyle","backgroundColor",color);
                isSelect.children().children("span").css("backgroundColor",color);
                console.log(zmEditor.globalMethod.nav.data.arrLike);
                break;
            //li单边框样式设置
            case "mian_children_childrenLi_btc"://ye添加单个上边框背景色
                arrLikestyle(a,"li","sStyle","borderTopColor",color);
                zmEditor.globalMethod.nav.each(isSelect,function(index,ele){
                    $(this).css("borderTopColor",color);
                    zmEditor.globalMethod.nav.initNavList.endHover($(this), "sStyle", "hHover", "mouseenter" + zmEditor.globalMethod.nav.data.arrLike[a].li.eventClass.mouseenter.color,
                        "mouseleave" + zmEditor.globalMethod.nav.data.arrLike[a].li.eventClass.mouseleave.color, a);
                });
                break;
            case "mian_children_childrenLi_hover_btc"://ye添加单个li上边框hover色 3.16
                arrLikestyle(a,"li","hHover","borderTopColor",color);
                zmEditor.globalMethod.nav.each(isSelect,function(index,ele){
                    zmEditor.globalMethod.nav.initNavList.endHover($(this), "sStyle", "hHover", "mouseenter" + zmEditor.globalMethod.nav.data.arrLike[a].li.eventClass.mouseenter.color,
                        "mouseleave" + zmEditor.globalMethod.nav.data.arrLike[a].li.eventClass.mouseleave.color, a);
                });
                break;
            case "mian_children_childrenLi_bbc"://ye添加单个li下边框背景色    one_li_border_bottom_color 3.16
                arrLikestyle(a,"li","sStyle","borderBottomColor",color);
                zmEditor.globalMethod.nav.each(isSelect,function(index,ele){
                    $(this).css("borderBottomColor",color);
                    zmEditor.globalMethod.nav.initNavList.endHover($(this), "sStyle", "hHover", "mouseenter" + zmEditor.globalMethod.nav.data.arrLike[a].li.eventClass.mouseenter.color,
                        "mouseleave" + zmEditor.globalMethod.nav.data.arrLike[a].li.eventClass.mouseleave.color, a);
                });
                break;
            case "mian_children_childrenLi_hover_bbc"://ye添加单个li下边框hover色  3.16
                arrLikestyle(a,"li","hHover","borderBottomColor",color);
                zmEditor.globalMethod.nav.each(isSelect,function(index,ele){
                    zmEditor.globalMethod.nav.initNavList.endHover($(this), "sStyle", "hHover", "mouseenter" + zmEditor.globalMethod.nav.data.arrLike[a].li.eventClass.mouseenter.color,
                        "mouseleave" + zmEditor.globalMethod.nav.data.arrLike[a].li.eventClass.mouseleave.color, a);
                });
                break;
            case "mian_children_childrenLi_border_color"://ye添加每个li边框色颜色         3.16 对应横向three组件
                arrLikestyle(a,"li","sStyle","borderColor",color);
                zmEditor.globalMethod.nav.each(isSelect,function(){
                    $(this).css({"borderColor":color,
                        "borderStyle":zmEditor.globalMethod.nav.data.arrLike[a].li.sStyle["borderStyle"],
                        "borderWidth":zmEditor.globalMethod.nav.data.arrLike[a].li.sStyle["borderWidth"]})
                    zmEditor.globalMethod.nav.initNavList.endHover($(this), "sStyle", "hHover", "mouseenter" + zmEditor.globalMethod.nav.data.arrLike[a].li.eventClass.mouseenter.color,
                        "mouseleave" + zmEditor.globalMethod.nav.data.arrLike[a].li.eventClass.mouseleave.color, a);
                });
                break;
            case "mian_children_childrenLi_hover_border_color"://ye添加mian元素的子元素的子元素的每个光标停留边框色颜色
                arrLikestyle(a,"li","hHover","borderColor",color);
                zmEditor.globalMethod.nav.each(isSelect,function(){
                    zmEditor.globalMethod.nav.initNavList.endHover($(this), "sStyle", "hHover", "mouseenter" + zmEditor.globalMethod.nav.data.arrLike[a].li.eventClass.mouseenter.color,
                        "mouseleave" + zmEditor.globalMethod.nav.data.arrLike[a].li.eventClass.mouseleave.color, a);
                });
                break;
            case "dropdown_bg"://ye添加mian元素的子元素的子元素的每个光标停留边框色颜色
                zmEditor.globalMethod.nav.data.arrLike[a]["dropdownBg"]=color;
                zmEditor.globalMethod.nav.markUlStyle($(".style_nav_"+a+""),"."+a+"zm-page-setting-ulThree", "background-color:"+color+";");
                // zmEditor.globalMethod.nav.markUlStyle($(".style_nav_"+a+""),"."+a+"zm-page-setting-liTwo", "background-color:"+color+";");
                zmEditor.globalMethod.nav.markUlStyle($(".style_nav_"+a+""),"."+a+"zm-page-setting-ulTwo","background-color:"+color+";");
                // zmEditor.globalMethod.nav.markUlStyle($(".style_nav_"+a+""),"."+a+"zm-page-setting-liThree","background-color:"+color+";");
                console.log("我进dropdown_bg来了");
                break;
            //改动过后
            default:
                break;
        };
        function arrLikestyle(b,str,str1,str2,str3){
            zmEditor.globalMethod.nav.data.arrLike[b][str][str1][str2]=str3;
        }
    },
    componentsliderRbga:function (str,str1) {
        var a;
        if(str.charAt(3)=="a"){
            str1=Number(str1).toFixed(2);
             a =/\w+\((\d+),\s?(\d+),\s?(\d+),\s?(\d?.?\d*)\)/gi.exec(str);
            return "rgba("+a[1]+","+a[2]+","+a[3]+","+str1+")"
        }else{
             a =/\w+\((\d+),\s?(\d+),\s?(\d+)\)/gi.exec(str);
            console.log( /\w+\((\d+),\s?(\d+),\s?(\d+)\)/gi.exec(str));
            return "rgba("+a[1]+","+a[2]+","+a[3]+","+str1+")"
        }
    },
    returnOpacity:function(color){
        var a;
        a=  /\w+\((\d+),\s?(\d+),\s?(\d+),\s?(\d?.?\d*)\)/gi.exec(color)
        console.log(a);
        // debugger;
        if(!color){
            return 100;
        }else if(!a){
            return 100;
        }else{
            return a[4]*100;
        }
    },
    menuadministration:function(ele,str){//nav菜单管理方法.
     e=$('<div style="background-color: #f1f9f8;width: 80px;height: 20px;border-radius: 5px;    margin-left: 35px;    text-align: center;margin-top: 20px;box-shadow: #ccc 1px 1px 5px 1px, #ccc -1px -1px 5px 1px;"> 菜单管理</div>');
     e.on("click",function(){
         if($(".zm-components-detail").css("display")=="block"){
             $(".zm-components-detail").hide();
         }else{
             zmEditor.component.showDetail($('li[data-zm-component-type="nav"]'));
         }
     });
     return e;
    },
    calculationLineheight:function(height,tbw,bbw){
        var li_height;
        tbw=tbw?tbw:0;
        bbw=bbw?bbw:0;
        li_height=height- tbw-bbw;
        return li_height;
    },
    main_style: function (nav_type, reserved_parameter_one, reserved_parameter_two, reserved_parameter_three) {
        var isSelect = nav_type.find(".zm-component-main");
        zmEditor.globalMethod.nav.Nav(isSelect);
    },
    main_child_child_style: function () {
        var a, b, c, d, e, f, g, h, i, j, k, l,li_height,li_hover_height,select,cross_width;
        select=arguments[2][0].classList[4];
        console.log(select);
        var data_a="data-"+arguments[2].attr("data-"+select); //表示当前正在编辑的nav
        try {
            if (/vertical/.test(select)){
                if (arguments[0]){
                    arguments[2].children("ul").children().css("width", arguments[0] + "px"); //添加小点到mian层兼容改动
                    zmEditor.globalMethod.nav.data.arrLike[data_a]["mian"]["sStyle"]["width"]= arguments[0] + "px";
                    zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["width"]= arguments[0] + "px";
                    zmEditor.globalMethod.nav.data.arrLike[data_a]["span"]["sStyle"]["width"]= arguments[0] + "px";

                    zmEditor.globalMethod.nav.refreshStyleTable(arguments[2],data_a);  //zmEditor.globalMethod.nav.global_compotents_IndependentName(argument2)

                }
                if (arguments[1]) {
                    a = arguments[2].children().children("li");
                    b = a.length;
                    c = arguments[2].children("ul").children("span");
                    f = c.length;
                    d = parseInt(c.css("height"));
                    e = parseInt(a.css("height"));
                    d = isNaN(d) ? 0 : d;
                    if (d > 0) {
                        g = (arguments[1] - d * f) / b;
                    } else {
                        g = arguments[1] / b;
                    }
                    var li_height= zmEditor.globalMethod.nav.calculationLineheight(g,parseInt(zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderTopWidth"]),parseInt(zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderBottomWidth"]));
                    var hover_height= zmEditor.globalMethod.nav.calculationLineheight(g,parseInt(zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["hHover"]["borderTopWidth"]),parseInt(zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["hHover"]["borderBottomWidth"]));
                    zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["lineHeight"]= li_height + "px";
                    zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["hHover"]["lineHeight"]= hover_height + "px";
                    zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["height"]= g + "px";

                    switch (select){
                        case 1:
                            break;
                        default:
                            arguments[2].children().children("li").css({"line-height":li_height+ "px","height":g});  //由于以box-sizing为盒子模型设置方式,设置此设置方式
                            break;
                    }
                    //"height":g + "px", 为了兼容纵向导航2级ul在一级li下  arguments[2].children().children("li").css({"line-height":li_height+ "px"});
                    // 行内遍历版本
                    arguments[2].children().children("li").each(function(index,ele){
                        $(this).children("ul").children("li").each(function(index,ele){
                            if($(this).children("ul").length>4) $(this).children("ul").css({"height":""});else $(this).children("ul").css({"height":g*4+"px"});
                        })
                    })
                    // 转化为改变样式表的版本
                    zmEditor.globalMethod.nav.refreshStyleTable(arguments[2],data_a);

                    arguments[2].children().children("li").each(function(){
                        // $(this).css({"height":g + "px","line-height":li_height+ "px"});
                        zmEditor.globalMethod.nav.initNavList.endHover($(this), "sStyle", "hHover", "mouseenter" + zmEditor.globalMethod.nav.data.arrLike[b].li.eventClass.mouseenter.color,
                            "mouseleave" + zmEditor.globalMethod.nav.data.arrLike[data_a].li.eventClass.mouseleave.color,data_a);
                    })
                    zmEditor.globalMethod.nav.initNavList.currentPage(arguments[0], data_a, "li",arguments[2][0].classList[4]);
                    console.log(zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["height"]);
                }
            } else {
                hasspan(arguments[0], arguments[1], arguments[2]);
                function hasspan(argument0, argument1, argument2) {
                    // argument2.css("width",""); //为兼容移动小圆点外面层边框导致换行问题
                    argument2.closest(".zm-component-box1").css("box-sizing","content-box");
                    if (argument0) {
                        h = argument2.children("ul").children("span");
                        j = h.length;
                        k =  parseFloat(h.css("width"));
                        k = isNaN(k) ? parseFloat(zmEditor.globalMethod.nav.data.arrLike[data_a]["span"]["sStyle"]["width"]): k;
                        //l = zmEditor.globalMethod.nav.OneType.mian.borderWidth; 由于使用box-sizing;边框包括在宽度之内
                        if (j > 0) {
                            i = (argument0 - k * j) / argument2.children().children("li").length;
                        } else {
                            i = argument0 / argument2.children().children("li").length;

                        }
                        // console.log(j,k,i,argument0)
                        // argument2.css("width",argument0+"px"); //赋值mian宽度使其能够移出content层;

                        argument2.children().children("li").css("width", i + "px");
                        zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["width"]= i + "px";

                        zmEditor.globalMethod.nav.refreshStyleTable(argument2,zmEditor.globalMethod.nav.global_compotents_IndependentName(argument2));

                    }
                    if (argument1) {
                        var l=parseInt(argument2.css("font-size"));
                        // console.log(l);
                        if(argument1<=l){
                            argument2.css("height",l+"px")
                            return "宽度不能再减小了";
                        };
                        //设置行高的高度
                        li_height = zmEditor.globalMethod.nav.calculationLineheight(argument1,parseInt(zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderTopWidth"]),parseInt(zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["borderBottomWidth"]));
                        li_hover_height=zmEditor.globalMethod.nav.calculationLineheight(argument1,parseInt(zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["hHover"]["borderTopWidth"]),parseInt(zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["hHover"]["borderBottomWidth"]));
                        //设置行高的高度
                        zmEditor.globalMethod.nav.data.arrLike[data_a]["mian"]["sStyle"]["height"]= argument1 + "px";
                        zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["height"]= argument1 + "px";
                        zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["sStyle"]["lineHeight"]= li_height+ "px";
                        zmEditor.globalMethod.nav.data.arrLike[data_a]["li"]["hHover"]["lineHeight"]= li_hover_height+ "px";
                        argument2.children().children("li").each(function () {
                            $(this).css("height", argument1 + "px");
                            $(this).css("line-height", li_height + "px");
                        });
                        zmEditor.globalMethod.nav.refreshStyleTable(argument2,zmEditor.globalMethod.nav.global_compotents_IndependentName(argument2));

                    }
                }
            };
        } catch (e) {
        }
    },
};









/**
 * Created by Administrator on 2017/3/10.
 */
zmEditor.component.container={
    setting:function(box){
        var iSelected = zmEditor.component.nowEdit();
        var config1 =[
            {type:'slider',element:iSelected.find(".zm-component-container"),flag:{title:'背景颜色',style:'noTab_color',isColor:true, param:'backgroundColor', size: [0,100]}},
            {type:'slider',element:iSelected.find(".zm-component-container"),flag:{title:'边框颜色',style:'noTab_color',isColor:true, param:'borderColor', size: [0,100]}},
            {type: "slider",element: iSelected.find(".zm-component-container"),flag: {title: "<span>（像素）</span><br>边线粗细", style: "noTab_noColor",isColor:false,  param: "borderWidth", size: [0,15]}},
            {type:'borderStyle',element:iSelected.find(".zm-component-container"),flag:''},
            {type:'radius',element:iSelected.find(".zm-component-container"),flag:''}
        ];
        var tabs1 = zmEditor.component.setItems.config(config1);

        tabs1.find(".zm-edit-components-string-LC .zm-edit-text-title").css("width","65px");
        tabs1.find(".zm-edit-components-string-SC .zm-edit-text-title").css("width","65px");
        tabs1.find(".zm-edit-components-string-SC").css({"padding":"0 25px"});
        tabs1.find(".zm-edit-components-string-SC .zm-edit-slider-val ").css({"margin-left":"35px"});

        var config2 =[{type:'boxShadow',element:iSelected.find(".zm-component-container"),flag:{title:'字间距',style:'normal',param:''}}];

        var tabs2 = zmEditor.component.setItems.config(config2);
        var tabsList = [{title:"常规",content:tabs1},{title:"阴影",content:tabs2}];
        var tabs = zmEditor.component.setItems.tabs(tabsList);
        //box.css({"width":"350px","height":"650px"});
        return tabs;
    }
}

zmEditor.component.container.changeStyle=function(_this,iSelected){
    var select,selectClass;
    select=_this.children("div").clone(true);
    select.attr("id",iSelected.attr("id"));
    selectClass=select[0].classList[0];
    select.attr("class","");
    select.addClass(iSelected[0].classList[0]);
    select.addClass(iSelected[0].classList[1]);
    select.addClass(selectClass);
    iSelected.replaceWith(select);
    zmEditor.component.didMount(null,"container",select,null,null,null);
};

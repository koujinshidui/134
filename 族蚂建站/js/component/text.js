/**
 * Created by Administrator on 2017/2/23.
 */
zmEditor.component.text={
    setting:function(box){
        var nowEdit = zmEditor.component.nowEdit().children();
        // if(window.getSelection()){
        //     var selectedEle = window.getSelection().getRangeAt(0);
        //     var selectedText = selectedEle.toString();
        //     if(selectedText!=""){
        //         var newEle = document.createElement("span");
        //         newEle.innerHTML = selectedText;
        //         newEle.setAttribute("class","zm-selectedText")
        //         selectedEle.deleteContents();
        //         selectedEle.insertNode(newEle);
        //         nowEdit=nowEdit.find('.zm-selectedText')
        //     }
        //     else{
        //         nowEdit.addClass('zm-selectedText')
        //     }
        // }
        // else{
        //     nowEdit.addClass('zm-selectedText')
        // }
        var config =[
            {type:'Family',element:nowEdit,flag:{title:'字体',style:'normal',param:'normal'}},
            {type:'slider',element: nowEdit,flag: {title: "文字大小<br><span>（像素）</span>", style: "noTab_noColor",isColor:false, param: "fontSize", size: [12,180]}},
            {type:'slider',element:nowEdit,flag:{title:'文字颜色',style:'noTab_color',isColor:true, param:'color', size: [12,180]}},
            {type:'slider',element:nowEdit,flag:{title:'背景颜色',style:'noTab_color',isColor:true, param:'backgroundColor', size: [12,180]}},
            {type:'fontStyle',element:nowEdit,flag:{title:'',style:'normal',param:''}},
            {type:'paragraphStyle',element:nowEdit,flag:{title:'',style:'normal',param:''}},
            {type:'slider',element: nowEdit,flag: {title: "字间距", style: "noTab_noColor",isColor:false,param:'fontSpace',size: [-0.1,9.9],toFixed:1}},
            {type:'slider',element: nowEdit,flag: {title: "行间距", style: "noTab_noColor",isColor:false,  param: "lineSpace", size: [0.5,3],toFixed:1}},
            {type:'fontEffect',element:nowEdit,flag:{title:'字体效果',style:'',param:''}},
            {type:'href',element:nowEdit,flag:{title:'链接',style:'normal',param:''}},
        ];
        if(nowEdit.hasClass("zm-edit-component-text-titleCont")){
            config =[
                {type:'Family',element:nowEdit,flag:{title:'字体',style:'normal',param:'normal'}},
                {type:'slider',element: nowEdit,flag: {title: "文字大小<br><span>（像素）</span>", style: "noTab_noColor",isColor:false, param: "fontSize", size: [12,180]}},
                {type:'slider',element:nowEdit,flag:{title:'文字颜色',style:'noTab_color',isColor:true, param:'color', size: [12,180]}},
                {type:'slider',element:nowEdit,flag:{title:'背景颜色',style:'noTab_color',isColor:true, param:'backgroundColor', size: [12,180]}},
                {type:'fontStyle',element:nowEdit.find("p"),flag:{title:'',style:'normal',param:''}},
                {type:'paragraphStyle',element:nowEdit.find("p"),flag:{title:'',style:'normal',param:''}},
                {type:'slider',element: nowEdit.find("p"),flag: {title: "字间距", style: "noTab_noColor",isColor:false,param:'fontSpace',size: [-1,99],toFixed:1}},
                {type:'slider',element: nowEdit.find("p"),flag: {title: "行间距", style: "noTab_noColor",isColor:false,  param: "lineSpace", size: [-20,100],toFixed:1}},
                {type:'fontEffect',element:nowEdit.find("p"),flag:{title:'字体效果',style:'',param:''}},
                {type:'href',element:nowEdit,flag:{title:'链接',style:'normal',param:''}},
            ];
        }
        var tabs = zmEditor.component.setItems.config(config);
        // items.forEach(function(e){
        //     tabs.append(e);
        // });
        return tabs
    }
};

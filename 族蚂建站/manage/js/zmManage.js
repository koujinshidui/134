/**
 * Created by Administrator on 2017/3/22.
 */
var zmManage = {
    url:{

    },
    flag:{
        isSort:false
    },
    component:{
        //发布组件
        publish:function(flag){
            zmEditor.dialog.open('manage/publishComponent.html',function(){
                $.zmAjax({
                    type: "get",
                    url: zmEditor.url.getComponentType1,
                    data : {"fType":"WIDGET_TYPE"},
                    dataType: "json",
                    success: function(e){
                        var data = e.data;
                        var len = data.length;
                        var opHtml ="";
                        for(var i =0;i<len;i++){
                            opHtml+='<option value="'+data[i].fValue+'">'+data[i].fText+'</option>'
                        }
                        var selectType1=$(".zm-select-component-type1");
                        var selectType2=$(".zm-select-component-type2");
                        selectType1.html(opHtml);
                        var fId,title,btn;
                        var box = $('.zm-component-box1')
                        var id=box.attr('data-zm-fid');
                        var name=box.attr('data-zm-fname');
                        var type=box.attr('data-zm-component-type');
                        var type2=box.attr('data-zm-component-type2');
                        var componentHtml=$('.zm-component-publish-box').find('.zm-component-main').prop('outerHTML');
                        $('.zm-component-publish-view').html(componentHtml)

                        var dialog = $('#zm-component-publish');
                        if(flag=='save'){
                            fId= parseInt($('.zm-component-box1').attr('data-zm-fid'));
                            $('#zm-component-publish').find('input[name="fId"]').val(fId);
                            title='保存组件';
                            btn='保存为草稿';
                        }else{
                            fId='';
                            title='另存组件';
                            btn='另存为草稿';
                        }
                        dialog.find('.zm-dialog-title').html(title);
                        dialog.find('input[name="fName"]').val(name+'-副本');
                        dialog.find('input[name="fName"]').focus(function(){ this.select(); }).focus();
                        selectType1.val(type);
                        zmManage.component.getType2ByType1(type,initComponentType2)
                        dialog.find('.zm-publish-save-btn').html(btn)
                        function initComponentType2(){
                            selectType2.val(type2);
                        }
                    },
                });
                // $(document).on("change",".zm-select-component-type1",function(){
                //     console.log('change..')
                //     zmManage.component.getType2ByType1($(this).val())
                // });
            })
        },
        //取消提交
        publishCancel:function(e){
            $(e).zmDialog('remove')
            var myForm = $("#zm-component-publish-form")
            console.log(myForm.serializeArray())
            var hahahah = myForm.serializeArray();
        },
        //保存并提交
        publishSubmit:function(e){
            zmEditor.dialog.open({
                title: '提示：',//弹窗标题，（支持文字，html标签，jq对象）
                content: '<div class="zm-dialog-msgBox"><img class="zm-dialog-msgImg" src="../imgs/index/warming.png"><div class="zm-dialog-msg" style="padding-top:15px">重新保存提交后，组件将回到待审核状态，请进入后台进行审核！确认要覆盖原有组件么？</div></div>',//弹窗内容，（支持文字，html标签，jq对象）
                footer: '<div class="zm-dialog-footer"> <span class="zm-dialog-btnCancel"  onclick="zmManage.component.publishCancel(this)">取 消</span> <span class="zm-dialog-btnOK" onclick="zmManage.component.publishSubmitOK(this)">确 定</span> </div>',//底部按钮区，（支持文字，html标签，jq对象）
                width: 500,//弹窗宽度（只能是数字）
                height: 250,//弹窗高度（只能是数字）
                movable:true,//弹窗是否可拖动（true：可拖动，false：不可拖动）
                animate:'zm-dialog-animate-010',
                target:$(e).closest('.zm-dialog-footer')//弹窗寄生的父级元素，
            })
        },
        //保存并提交》确定
        publishSubmitOK:function(e){
            zmManage.component.publishOK(2,callBack);
            function callBack(){
                $(e).closest("#zm-component-publish").zmDialog('remove');
                zmEditor.dialog.open({
                    title: '提示：',//弹窗标题，（支持文字，html标签，jq对象）
                    content: '<div class="zm-dialog-msgBox"><img class="zm-dialog-msgImg" src="../imgs/index/success.png"><div class="zm-dialog-msg" style="padding-top:30px">已保存并提交该组件！</div></div>',//弹窗内容，（支持文字，html标签，jq对象）
                    footer: '<div class="zm-dialog-footer"><span class="zm-dialog-btnOK" onclick="zmManage.component.publishCancel(this)">我知道了</span> </div>',//底部按钮区，（支持文字，html标签，jq对象）
                    width: 500,//弹窗宽度（只能是数字）
                    height: 250,//弹窗高度（只能是数字）
                    movable:true,//弹窗是否可拖动（true：可拖动，false：不可拖动）
                    animate:'slide',
                    target: $('body')//弹窗寄生的父级元素，
                })
            }
        },
        //保存
        publishSave:function(e){
            zmEditor.dialog.open({
                title: '提示：',//弹窗标题，（支持文字，html标签，jq对象）
                content: '<div class="zm-dialog-msgBox"><img class="zm-dialog-msgImg" src="../imgs/index/warming.png"><div class="zm-dialog-msg" style="padding-top:15px">重新保存后，组件将回到初始状态，请进入后台进行组件提交！确认要覆盖原有组件么？</div></div>',//弹窗内容，（支持文字，html标签，jq对象）
                footer: '<div class="zm-dialog-footer"><span class="zm-dialog-btnCancel" onclick="zmManage.component.publishCancel(this)">取 消</span><span class="zm-dialog-btnOK" onclick="zmManage.component.publishSaveOK(this)">确 定</span> </div>',//底部按钮区，（支持文字，html标签，jq对象）
                width: 500,//弹窗宽度（只能是数字）
                height: 250,//弹窗高度（只能是数字）
                movable:true,//弹窗是否可拖动（true：可拖动，false：不可拖动）
                animate:'zm-dialog-animate-010',
                target: $(e).closest('.zm-dialog-footer')//弹窗寄生的父级元素，
            })
        },
        //保存》确定
        publishSaveOK:function(e){
            zmManage.component.publishOK(1,callBack);
            function callBack(){
                $(e).closest("#zm-component-publish").zmDialog('remove');
                zmEditor.dialog.open({
                    title: '提示：',//弹窗标题，（支持文字，html标签，jq对象）
                    content: '<div class="zm-dialog-msgBox"><img class="zm-dialog-msgImg" src="../imgs/index/success.png"><div class="zm-dialog-msg" style="padding-top:30px">已重新保存该组件！</div></div>',//弹窗内容，（支持文字，html标签，jq对象）
                    footer: '<div class="zm-dialog-footer"><span class="zm-dialog-btnOK" onclick="zmManage.component.publishCancel(this)">我知道了</span> </div>',//底部按钮区，（支持文字，html标签，jq对象）
                    width: 500,//弹窗宽度（只能是数字）
                    height: 250,//弹窗高度（只能是数字）
                    movable:true,//弹窗是否可拖动（true：可拖动，false：不可拖动）
                    animate:'slide',
                    target: $('body')//弹窗寄生的父级元素，
                })
            }
        },
        //发布组件>提交
        publishOK:function(flag,cb){
            var myForm = $("#zm-component-publish-form")
            var fContext = $('.zm-component-publish-view').html();
            myForm.find("input[name='fContext']").val(fContext);
            var fStatus=flag;
            var fId = myForm.attr("data-zm-fId");
            myForm.find("input[name='fStatus']").val(fStatus);
            $.ajax({
                type: "post",
                url: zmEditor.url.publishComponent,
                data : myForm.serializeArray(),
                dataType: "json",
                success: function(e){
                    cb();
                    //window.location.reload()
                },
                error:function(){
                    console.error("失败!")
                }
            });
            console.log($("#zm-components-publish-form").serializeArray())
            var hahahah = $("#zm-components-publish-form").serializeArray();
        },
        //我的组件列表
        myList:{
            load:function(){
                zmEditor.dialog.open('manage/myComponentsList.html',zmManage.component.myList.after());
            },
            after:function(){
                $.ajax({
                    type: "get",
                    url: zmEditor.url.getMyComponentsList,
                    dataType: "json",
                    success: function(e){
                        var data = e.data,i=0,len=data.length,html;
                        if(len!=0){
                            for(;i<len;i++){
                                var item=data[i],statusClass='',optionClass='';
                                if(item.fStatusStr=="初始"){
                                    statusClass=' zm-myComponents-table-status1 ';
                                    optionClass=' zm-myComponents-table-option1 '
                                }else{
                                    statusClass=' zm-myComponents-table-status2 ';
                                    optionClass=' zm-myComponents-table-option2 '
                                }
                                html+='<tr>' +
                                    '<td><span class="zm-myComponents-table-num">'+parseInt(i+1)+'</span></td>' +
                                    //'<td><img src="'+item.fPreviewImg+'"></td>' +
                                    '<td>'+item.fContext+'</td>' +
                                    '<td><span class="zm-myComponents-table-item-name">'+item.fName+'</span></td>' +
                                    '<td>'+item.fTypeName+'</td>' +
                                    '<td>'+item.fComponentTypeName+'</td>' +
                                    '<td>'+item.fUpdateTime+'</td>' +
                                    '<td class="'+statusClass+'">'+item.fStatusStr+'</td>' +
                                    '<td>无</td>' +
                                    '<td data-zm-fId="'+item.fId+'" data-zm-fName="'+item.fName+'" data-zm-fType="'+item.fType+'"  data-zm-fComponentType="'+item.fComponentType+'" class="'+optionClass+'">' +
                                    '<a class="zm-myComponents-table-item-edit"><span class="fa fa-pencil"></span>编辑</a> ' +
                                    '<a class="zm-myComponents-table-item-delete"><span class="fa fa-trash-o"></span>删除</a>' +
                                    '<div class="zm-myComponents-table-item-html">'+ item.fContext+'</div>' +
                                    '</td>' +
                                    '</tr>'
                            }
                        }
                        else{
                            html='<tr><td colspan="9">暂无数据哦，赶紧去制作自己的组件吧！</td></tr>'
                        }
                        $('.zm-myComponents-table tbody').html(html);
                    },
                    error:function(){
                        $('.zm-myComponents-table tbody').html('<tr><td colspan="9">数据库连接出错啦！</td></tr>');
                    }
                });
            },
            //从【我的组件列表】中编辑组件
            edit:function(id,name,context,type1,type2){
                var component = $(context);
                var box = $(zmEditor.str.component.box1);
                //是否只允许改变组件宽度
                // if(type=="text"||type=="btn"){
                //     zmEditor.component.onlyResizeWidth(box)
                // }
                // var component = _this.children();
                box.attr({"data-zm-fId":id,"data-zm-component-type":type1});
                box.css({left:'100px',top:'100px'});
                component.addClass('zm-component-main zm-component-main-text')
                box.find('.zm-component-main').prop('outerHTML',component.prop('outerHTML'));
                $('.zm-row').html(box)
                $('.zm-row').find('.zm-component-box1').data({"data-zm-fId":id,"data-zm-fName":name,"data-zm-fType":type1,"data-zm-fComponentType":type2})
                //组件发布保存为草稿按钮专用遮罩层
                $('.zm-publish-save-mask').hide();
            },

        },
        //根据组件大类获取组件小类
        getType2ByType1:function(type,cb){
            $.ajax({
                type: "get",
                url: zmEditor.url.getComponentType2ByType1 ,
                data : {"fType":type},
                dataType: "json",
                success: function(e){
                    var data = e.data;
                    var len = data.length;
                    if(len==0){
                        $(".zm-select-component-type2").html('<option>该类型下面没有分类</option>');
                    }
                    else{
                        var opHtml ="";
                        for(var i =0;i<len;i++){
                            opHtml+='<option value="'+data[i].fValue+'">'+data[i].fText+'</option>'
                        }
                        $(".zm-select-component-type2").html(opHtml);
                        if(cb){cb()}
                    }
                }
            })
        }
    },
    template:{
        //发布模板
        publish:function(flag){
            zmEditor.dialog.open('manage/publishTemplate.html',function(){
                $.ajax({
                    type: "get",
                    url: zmEditor.url.getTemplateType1,
                    data:{"fParentId":""},
                    dataType: "json",
                    success: function(e){
                        var data = e.data;
                        var len = data.length;
                        var opHtml ="";
                        for(var i =0;i<len;i++){
                            opHtml+='<option value="'+data[i].fValue+'">'+data[i].fText+'</option>'
                        }
                        opHtml='<option>--请选择--</option>'+opHtml;
                        var selectType1=$(".zm-select-template-type1");
                        var selectType2=$(".zm-select-template-type2");
                        selectType1.html(opHtml);
                        var fId,title,btn;

                        var componentHtml=$('.zm-template-publish-box').find('.zm-component-main').prop('outerHTML');
                        $('.zm-template-publish-view').html(componentHtml)

                        var dialog = $('#zm-template-publish');
                        if(flag=='save'){
                            fId= parseInt($('.zm-component-box1').attr('data-zm-fid'));
                            $('#zm-template-publish').find('input[name="fId"]').val(fId);
                            title='保存模板';
                            btn='保存为草稿';
                        }else{
                            fId='';
                            title='另存模板';
                            btn='另存为草稿';
                        }
                        dialog.find('.zm-dialog-title').html(title);
                        // dialog.find('input[name="fName"]').val(name);
                        //zmManage.template.getType2ByType1(type,initComponentType2)
                        dialog.find('.zm-publish-save-btn').html(btn)
                        function initComponentType2(){
                            selectType2.val(type2);
                        }
                    }
                });
            })
        },
        //取消提交
        publishCancel:function(e){
            $(e).zmDialog('remove')
        },
        //保存并提交
        publishSubmit:function(e){
            zmEditor.dialog.open({
                title: '提示：',//弹窗标题，（支持文字，html标签，jq对象）
                content: '<div class="zm-dialog-msgBox"><img class="zm-dialog-msgImg" src="../imgs/index/warming.png"><div class="zm-dialog-msg" style="padding-top:15px">重新保存提交后，模板将回到待审核状态，请进入后台进行审核！确认要覆盖原有模板么？</div></div>',//弹窗内容，（支持文字，html标签，jq对象）
                footer: '<div class="zm-dialog-footer"> <span class="zm-dialog-btnCancel"  onclick="zmManage.template.publishCancel(this)">取 消</span> <span class="zm-dialog-btnOK" onclick="zmManage.template.publishSubmitOK(this)">确 定</span> </div>',//底部按钮区，（支持文字，html标签，jq对象）
                width: 500,//弹窗宽度（只能是数字）
                height: 250,//弹窗高度（只能是数字）
                movable:true,//弹窗是否可拖动（true：可拖动，false：不可拖动）
                animate:'zm-dialog-animate-010',
                target:$(e).closest('.zm-dialog-footer')//弹窗寄生的父级元素，
            })
        },
        //保存并提交》确定
        publishSubmitOK:function(e){
            zmManage.component.publishOK(2,callBack);
            function callBack(){
                $(e).closest("#zm-template-publish").zmDialog('remove');
                zmEditor.dialog.open({
                    title: '提示：',//弹窗标题，（支持文字，html标签，jq对象）
                    content: '<div class="zm-dialog-msgBox"><img class="zm-dialog-msgImg" src="../imgs/index/success.png"><div class="zm-dialog-msg" style="padding-top:30px">已保存并提交该模板！</div></div>',//弹窗内容，（支持文字，html标签，jq对象）
                    footer: '<div class="zm-dialog-footer"><span class="zm-dialog-btnOK" onclick="zmManage.template.publishCancel(this)">我知道了</span> </div>',//底部按钮区，（支持文字，html标签，jq对象）
                    width: 500,//弹窗宽度（只能是数字）
                    height: 250,//弹窗高度（只能是数字）
                    movable:true,//弹窗是否可拖动（true：可拖动，false：不可拖动）
                    animate:'slide',
                    target: $('body')//弹窗寄生的父级元素，
                })
            }
        },
        //保存
        publishSave:function(e){
            zmEditor.dialog.open({
                title: '提示：',//弹窗标题，（支持文字，html标签，jq对象）
                content: '<div class="zm-dialog-msgBox"><img class="zm-dialog-msgImg" src="../imgs/index/warming.png"><div class="zm-dialog-msg" style="padding-top:15px">重新保存后，模板将回到初始状态，请进入后台进行组件提交！确认要覆盖原有模板么？</div></div>',//弹窗内容，（支持文字，html标签，jq对象）
                footer: '<div class="zm-dialog-footer"><span class="zm-dialog-btnCancel" onclick="zmManage.template.publishCancel(this)">取 消</span><span class="zm-dialog-btnOK" onclick="zmManage.template.publishSaveOK(this)">确 定</span> </div>',//底部按钮区，（支持文字，html标签，jq对象）
                width: 500,//弹窗宽度（只能是数字）
                height: 250,//弹窗高度（只能是数字）
                movable:true,//弹窗是否可拖动（true：可拖动，false：不可拖动）
                animate:'zm-dialog-animate-010',
                target: $(e).closest('.zm-dialog-footer')//弹窗寄生的父级元素，
            })
        },
        //保存》确定
        publishSaveOK:function(e){
            zmManage.component.publishOK(1,callBack);
            function callBack(){
                $(e).closest("#zm-template-publish").zmDialog('remove');
                zmEditor.dialog.open({
                    title: '提示：',//弹窗标题，（支持文字，html标签，jq对象）
                    content: '<div class="zm-dialog-msgBox"><img class="zm-dialog-msgImg" src="../imgs/index/success.png"><div class="zm-dialog-msg" style="padding-top:30px">已重新保存该模板！</div></div>',//弹窗内容，（支持文字，html标签，jq对象）
                    footer: '<div class="zm-dialog-footer"><span class="zm-dialog-btnOK" onclick="zmManage.template.publishCancel(this)">我知道了</span> </div>',//底部按钮区，（支持文字，html标签，jq对象）
                    width: 500,//弹窗宽度（只能是数字）
                    height: 250,//弹窗高度（只能是数字）
                    movable:true,//弹窗是否可拖动（true：可拖动，false：不可拖动）
                    animate:'slide',
                    target: $('body')//弹窗寄生的父级元素，
                })
            }
        },
        //发布模板>提交
        publishOK:function(flag,cb){
            //提交发布模板
            var myForm = $('#zm-template-publish');
            var pages=[];
            var tempAll = $($(".zm-template").prop("outerHTML"))
            tempAll.find(".zm-row").css({"border-left":"1px solid transparent","border-right":"1px solid transparent"});
            tempAll.find(".zm-row-line,.zm-row-resize,.zm-row-type").remove();
            tempAll.find(".zm-component-box1").each(function(){
                var _this = $(this);
                var main = _this.find(".zm-component-main");
                _this.removeClass("zm-component-editor zm-component-movable");
                _this.find(".zm-component-resize,.zm-component-edit,.zm-component-location").remove();
                main.attr("contenteditable",false)
                //thisBox.prop("outerHTML",thisElement.prop("outerHTML"))
            })
            tempAll.find(".zm-row").each(function(){
                var _this = $(this);
                var pageId = _this.attr("data-zm-pageId");
                var pageHtml = _this.prop("outerHTML");
                pages.push({"fId":pageId,"fHtml":pageHtml});
            });
            var templateId = $(".zm-template").attr("data-zm-templateId")||"";
            var data = {
                fId:templateId,
                fName:myForm.find("[name='fName']").val(),
                fImage:'',
                fCss:'',
                fJs:'',
                fSysTypeId:myForm.find("[name='fSysTypeId']").val(),
                fComponents:'',
                pages:pages
            };
            $.ajax({
                type: "post",
                url: zmEditor.url.publishTemplate,
                data:{"data":JSON.stringify(data)},
                dataType: "json",
                success: function(e){
                    $(".zm-template").attr({"data-zm-templateId":e.data.fId});
                    cb();
                    console.log("success:publishTemplate ！");
                    //window.location.reload()
                },
                error:function(){
                    console.error("error:publishTemplate !")
                }
            });
        },
        //根据模板大类获取小类集合
        getType2ByType1:function(type,cb){
            $.ajax({
                type: "get",
                url: zmEditor.url.getTemplateType2ByType1 ,
                data : {'fParentId':type},
                dataType: "json",
                success: function(e){
                    var data = e.data;
                    var len = data.length;
                    if(len==0){
                        $(".zm-select-template-type2").html('<option>该类型下面没有分类0</option>');
                    }
                    else{
                        var opHtml ="";
                        for(var i =0;i<len;i++){
                            opHtml+='<option value="'+data[i].fValue+'">'+data[i].fText+'</option>'
                        }
                        $(".zm-select-template-type2").html('<option>--请选择--</option>'+opHtml);
                        if(cb){cb()}
                    }
                }
            })
        },
        //我的组件列表
        myList:{
            load:function(){
                zmEditor.dialog.open('manage/myTemplatesList.html',zmManage.template.myList.after());
            },
            after:function(){
                $.ajax({
                    type: "get",
                    url: zmEditor.url.getMyComponentsList,
                    dataType: "json",
                    success: function(e){
                        var data = e.data,i=0,len=data.length,html;
                        console.log(data)
                        if(len!=0){
                            for(;i<len;i++){
                                var item=data[i],statusClass='',optionClass='';
                                if(item.fStatusStr=="初始"){
                                    statusClass=' zm-myComponents-table-status1 ';
                                    optionClass=' zm-myComponents-table-option1 '
                                }else{
                                    statusClass=' zm-myComponents-table-status2 ';
                                    optionClass=' zm-myComponents-table-option2 '
                                }
                                html+='<tr>' +
                                    '<td><span class="zm-myComponents-table-num">'+parseInt(i+1)+'</span></td>' +
                                    //'<td><img src="'+item.fPreviewImg+'"></td>' +
                                    '<td>'+item.fContext+'</td>' +
                                    '<td><span class="zm-myComponents-table-item-name">'+item.fName+'</span></td>' +
                                    '<td>'+item.fTypeName+'</td>' +
                                    '<td>'+item.fComponentTypeName+'</td>' +
                                    '<td>'+item.fUpdateTime+'</td>' +
                                    '<td class="'+statusClass+'">'+item.fStatusStr+'</td>' +
                                    '<td>无</td>' +
                                    '<td data-zm-fId="'+item.fId+'" data-zm-fName="'+item.fName+'" data-zm-fType="'+item.fType+'"  data-zm-fComponentType="'+item.fComponentType+'" class="'+optionClass+'">' +
                                    '<a class="zm-myComponents-table-item-edit"><span class="fa fa-pencil"></span>编辑</a> ' +
                                    '<a class="zm-myComponents-table-item-delete"><span class="fa fa-trash-o"></span>删除</a>' +
                                    '<div class="zm-myComponents-table-item-html">'+ item.fContext+'</div>' +
                                    '</td>' +
                                    '</tr>'
                            }
                        }
                        else{
                            html='<tr><td colspan="9">暂无数据哦，赶紧去制作自己的组件吧！</td></tr>'
                        }
                        $('.zm-myComponents-table tbody').html(html);
                    },
                    error:function(){
                        $('.zm-myComponents-table tbody').html('<tr><td colspan="9">数据库连接出错啦！</td></tr>');
                    }
                });
            },
            //从【我的组件列表】中编辑组件
            edit:function(id,name,context,type1,type2){
                var component = $(context);
                var box = $(zmEditor.str.component.box1);
                //是否只允许改变组件宽度
                // if(type=="text"||type=="btn"){
                //     zmEditor.component.onlyResizeWidth(box)
                // }
                // var component = _this.children();
                box.attr({"data-zm-fId":id,"data-zm-component-type":type1});
                box.css({left:'100px',top:'100px'});
                component.addClass('zm-component-main zm-component-main-text')
                box.find('.zm-component-main').prop('outerHTML',component.prop('outerHTML'));
                $('.zm-row').html(box)
                $('.zm-row').find('.zm-component-box1').data({"data-zm-fId":id,"data-zm-fName":name,"data-zm-fType":type1,"data-zm-fComponentType":type2})
                //组件发布保存为草稿按钮专用遮罩层
                $('.zm-publish-save-mask').hide();
            },

        },
        //保存-
    },
    componentEditor:function(){
        $('.zm-all').html('<div class="zm-row zm-container zm-component-publish-box" id="zm-component-editor" style="height:100%;width:1200px;"></div>')
        //$('.zm-editor-ruler-x-switch-box').hide();//
        $('.zm-header-right').html('' +
            '<div class="zm-publish-save-mask"></div>' +
            '<div class="zm-publish zm-option" onclick="zmManage.component.myList.load()"><span><span class="fa fa-list"></span> 我的组件列表</span></div>' +
            '<div class="zm-publish zm-option" onclick="zmManage.component.publish(\'save\')"><span><span class="fa fa-file-o"></span> 保存组件</span></div>' +
            '<div class="zm-publish zm-option" onclick="zmManage.component.publish(\'saveas\')"><span><span class="fa fa-copy"></span> 另存组件</span></div>' +
            '');
        $('.zm-components-detail-header').append('' +
            '<button class="zm-box-header-btn zm-components-sort-open zm-tooltip" data-zm-title="【改变排序】功能开起后可拖动组件进行排序<br>【保存排序】或【取消排序】后可恢复正常使用" ><span class=" fa fa-sort-numeric-asc"></span></button>'+
            '<button class="zm-box-header-btn zm-components-sort-cancel zm-tooltip" data-zm-title="取消排序" ><span class=" fa fa-reply"></span></button>' +
            '<button class="zm-box-header-btn zm-components-sort-save zm-tooltip" data-zm-title="保存排序" > <span class=" fa fa-check"></span></button>'+

            '')
    },
    templateEditor:function(){
        $('.zm-header-right').html('' +
            '<div class="zm-publish zm-option" onclick="zmManage.template.myList.load()"><span><span class="fa fa-list"></span> 我的模板列表</span></div>' +
            '<div class="zm-publish zm-option" onclick="zmManage.template.publish(\'save\')"><span><span class="fa fa-file-o"></span> 保存模板</span></div>' +
            '<div class="zm-publish zm-option" onclick="zmManage.template.publish(\'saveas\')"><span><span class="fa fa-copy"></span> 另存模板</span></div>' +
            '')
    },
    websiteEditor:function(){

    },
    //是否排序
    isSort:function(){
        if($('.zm-components-detail').data('isSort')){
            zmManage.componentListIsSort();
            return;
        }
    },

    //组件列表是否处于排序状态
    componentListIsSort:function() {
        zmEditor.dialog.open({
            title: '标题',
            content: '<div style="margin:0 auto;padding-top:30px;text-align: center;"><h3>(`⌒`)亲~您正在进行排序操作哦！<br>请先【保存排序】或者【取消排序】</h3><h3>(`⌒`)亲~您正在进行排序操作哦！<br>请先【保存排序】或者【取消排序】</h3><h3>(`⌒`)亲~您正在进行排序操作哦！<br>请先【保存排序】或者【取消排序】</h3><h3>(`⌒`)亲~您正在进行排序操作哦！<br>请先【保存排序】或者【取消排序】</h3><h3>(`⌒`)亲~您正在进行排序操作哦！<br>请先【保存排序】或者【取消排序】</h3><h3>(`⌒`)亲~您正在进行排序操作哦！<br>请先【保存排序】或者【取消排序】</h3><h3>(`⌒`)亲~您正在进行排序操作哦！<br>请先【保存排序】或者【取消排序】</h3><h3>(`⌒`)亲~您正在进行排序操作哦！<br>请先【保存排序】或者【取消排序】</h3></div>',
            footer: $('<div class="zm-dialog-footer"><span class="zm-dialog-btnOK">确 定</span></div>'),
            width: 330,
            height: 200,
            movable: true,
            target: $('body')
        });
    },
}

//选择进入组件制作
$('.zm-make-component').click(function(){
    zmManage.componentEditor()
})
//选择进入模板制作
$('.zm-make-template').click(function(){
    //$('.zm-all').html('')
    zmManage.templateEditor()
})
//选择进入网站制作
$('.zm-make-website').click(function(){
    zmManage.websiteEditor()
});

//组件列表排序功能
$(document).on('click','.zm-components-sort-open',function(){
    $(this).hide();
    $(".zm-components-sort-save,.zm-components-sort-cancel").show();
    $('.zm-components-detail').data('isSort',true);
    $(".zm-components-detail-term[data-zm-isShow='true']").find('li').addClass('zm-components-detail-contentSortLi');
});
$(document).on('click','.zm-components-sort-save',function(){
    $(".zm-components-sort-save,.zm-components-sort-cancel").hide()
    $(".zm-components-sort-open").show();
    $('.zm-components-detail').removeData("isSort")
    var detailBox = $(".zm-components-detail-content");
    var detail = detailBox.find(".zm-components-detail-term[data-zm-isShow='true']");
    var comType = detail.attr("data-zm-component-type");
    detail.find('li').removeClass('zm-components-detail-contentSortLi');
    //排序
    var data = {};
    data[comType]=[];
    var ulList =[];
    detail.find("fieldset").each(function(){
        var _this = $(this);
        var liList = [];
        _this.children("ul").children("li").each(function(){
            liList.push({fId:$(this).attr("data-zm-fId")});
        });
        ulList.push({fComponentType:_this.attr("data-zm-fId"),list:liList})
    });
    data[comType]=ulList;
    $.ajax({
        url: zmEditor.url.saveComponentsSort,
        type : "post",
        data : {"data":JSON.stringify(data)},
        success: function(e){
            console.log("success---组件排序成功")
        }

    })
});
$(document).on('click','.zm-components-sort-cancel',function(){
    $(".zm-components-sort-save,.zm-components-sort-cancel").hide()
    $(".zm-components-sort-open").show();
    $('.zm-components-detail').removeData("isSort");
    $(".zm-components-detail-term[data-zm-isShow='true']").find('li').removeClass('zm-components-detail-contentSortLi');
    var curType=$('.zm-components-type-curLi');
    curType.data('hasLoading',false);
    zmEditor.component.showDetail(curType);
});
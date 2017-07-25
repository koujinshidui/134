/**
 * Created by Administrator on 2017/7/6.
 */

zmEditor.website = {
    loading:function (flag,t,fn) {
        var temp = $('<div class="zm-website-save-loadingBox"  data-animate="slide">'
            +'<div class="zm-website-save-loadingClose"><span class=" fa fa-remove"></span></div>'
            +'<div class="zm-website-save-loadingTitle">'+ flag +'网站</div>'
            +'<div class="zm-website-save-loadingBar"><div class="zm-website-save-loading"></div></div>'
            +'<div class="zm-website-save-loadingWord">正在'+ flag +'...</div>'
            +'<div class="zm-website-save-loadingBg"></div>'
            +'</div>');
        $('body').append(temp);
        var loading = temp.find('.zm-website-save-loading');
        loading.animate({width:'100%'},t,function () {
            temp.find('.zm-website-save-loadingWord').html(flag+'完成');
            temp.slideUp().remove();
            if(fn){
                fn()
            }
        });
        temp.find('.zm-website-save-loadingClose').click(function () {
            temp.slideUp().remove()
        })
    },//进度条,假进度
    slideInputBox:function (e,flag) {
        var slider = $(e).parent().parent();
        var setDNSBox = $('#zm-website-setDNS');
        var dataBox = setDNSBox.find('.zm-website-setDNS-dataBox');
        dataBox.attr('data-DNSType',flag);
        switch (flag){
            case "personal":
                slider.animate({left:'-100%'}).siblings().animate({left:'0'});
                break;
            case "zmSecond":
                slider.animate({left:'100%'}).siblings().animate({left:'0'});
                break;
            default:
                break;
        }
    },//切换自定义域名和族蚂二级域名
    save:function () {
        var num = 0;
        num++;
        sessionStorage.setItem('data-saveCunt',num);//保存次数，生成固定IP1
        sessionStorage.setItem('data-saveIP',num>1?'zumaIP'+num:'zumaIP');//保存次数大于1，数据存储到IP1
        zmEditor.website.loading('保存',1000,function () {
            zmEditor.dialog.open('settingDNS.html',zmEditor.website.regDNS())
        });
    },//点击保存站点
    publish:function () {
        var num = 0;
        num++;
        sessionStorage.setItem('data-publishCunt',num);//发布次数，生成固定IP2，数据存储到IP1
        sessionStorage.setItem('data-publishIP',num>1?'zumaIP'+num:'zumaIP');//发布次数大于1，数据存储到IP1和IP2
        zmEditor.website.loading('保存',1000,function () {
            zmEditor.website.loading('发布',1000,function () {
                zmEditor.dialog.open('settingDNS.html',zmEditor.website.regDNS())
            });
        });
    },//点击发布站点
    regDNS:function (e) {
        var input = $(e);
        var isLegal = input.closest('.zm-website-setDNS-setBox').find('.zm-website-setDNS-urlError');
        var reg =/[a-zA-Z\d-]{4,20}$/,val='';
        //域名合法性验证
        input.on('input',function () {
            var _this = $(this);
            val = _this.val();
            if(reg.test(val)){
                isLegal.hide();
                _this.removeClass('errorUrl')
            }else {
                isLegal.show();
                _this.addClass('errorUrl')
            }
        });
    },//验证自定义域名
    saveClose:function(e){
        var setDNSBox =$(e).closest('#zm-website-setDNS');
        var dataBox = setDNSBox.find('.zm-website-setDNS-dataBox');
        var zumaSec = setDNSBox.find('.zm-website-setDNS-zumaSecInput').val();
        var personal = setDNSBox.find('.zm-website-setDNS-personalInput').val();
        var urlType = dataBox.attr('data-DNSType');
        var realUrl = urlType=='zmSecond'?zumaSec:personal;
        dataBox.attr('data-officialUrl','http://website.zuma.com/'+realUrl);
        var key = setDNSBox.find('.zm-website-setDNS-setDataBox').attr('data-dnsRepeat');
        // if(key){
        //     //域名重复小弹窗,前台验证or后台验证
        // }else {
        //     setDNSBox.remove();
        // }
        zmEditor.dialog.open({
            title:'提示',
            content:'<div class="zm-website-setDNS-repeatTip"  style="height: 100px;padding: 20px;text-indent: 10px;">'
            +'本域名DNS解析地址已指向其他IP地址！'
            +'有站点正在使用本域名！您确认使用本域名么？</div>',
            footer:'<div class="zm-dialog-footer">'
            +'<span class="zm-dialog-btnOK setWebsiteBtn" onclick="zmEditor.website.dnsSetCancle(this)">修改域名</span>'
            +'<span class="zm-dialog-btnOK" onclick="zmEditor.website.dnsSetOK(this)">确认使用</span>'
            +'</div>',
            width:300,
            height:210,
            movable:false,
            animate:'fade',
            target:$(e).closest('.zm-website-setDNS')
        })
    },//确认并关闭按钮
    dnsSetOK:function (e) {
        var setDNSBox =$(e).closest('#zm-website-setDNS');
        setDNSBox.remove();
    },
    dnsSetCancle:function (e) {
        var setDNSBox =$(e).closest('#zm-website-setDNS');
        $(e).closest('.zm-dialog-box').remove();
        setDNSBox.find('.zm-website-setDNS-personalInput').focus()
    },
    publishNext:function (e) {
        var setDNSBox =$(e).closest('#zm-website-setDNS');
        var dnsBox = setDNSBox.find('.zm-website-setDNS');
        var dataBox = setDNSBox.find('.zm-website-setDNS-dataBox');
        var serviceBox = setDNSBox.find('.zm-website-setService');
        var zumaSec = setDNSBox.find('.zm-website-setDNS-zumaSecInput').val();
        var personal = setDNSBox.find('.zm-website-setDNS-personalInput').val();
        var urlType = dataBox.attr('data-DNSType');
        var realUrl = urlType=='zmSecond'?zumaSec:personal;
        dataBox.attr('data-officialUrl','http://website.zuma.com/'+realUrl);
        var options = {
            nameID:true,
            websiteID:true
        },tempStr = '';
        if(!options.nameID)tempStr = '您尚未实名认证，';
        if(!options.websiteID)tempStr = '您的站点尚未认证，';
        if(options.nameID&&options.websiteID){
            dnsBox.css({
                'transform':'rotateX(90deg) translateY(-350px)',
                'transition':'.75s','opacity':0});
            serviceBox.css({
                'transform':'rotateX(0deg) translateY(-350px)',
                'transition':'.75s'});
            zmEditor.website.publishSite(setDNSBox)
        }
        else {
            zmEditor.dialog.open({
                title:'提示',
                content:'<div class="zm-website-setDNS-repeatTip"  style="height: 100px;padding: 20px;text-indent: 10px;">'
                + tempStr +'不能发布此站点！</div>',
                footer:'<div class="zm-dialog-footer">'
                +'<span class="zm-dialog-btnOK setWebsiteBtn" '
                +'onclick="zmEditor.website.dnsSetCancle(this)">我知道了</span>'
                +'<span class="zm-dialog-btnOK" onclick="">前去认证</span>'
                +'</div>',
                width:300,
                height:210,
                movable:false,
                animate:'fade',
                target:$(e).closest('.zm-website-setDNS')
            })
        }
    },
    publishSite:function (e) {
        var box = $(e).closest('#zm-website-setDNS');
        var dataBox = box.find('.zm-website-setService-dataBox');
        var typeBox = $(e).find('.zm-website-setService-servType'),typeLi = typeBox.find('li');
        var freeBox = box.find('.zm-website-setService-main .zm-website-setService-zmFree'),
            personBox = box.find('.zm-website-setService-main .zm-website-setService-personal');
        var pServ = personBox.find('.zm-website-setService-servName');
        var pServBox = personBox.find('.zm-website-setService-serviceBox'),
            pSinfoBox = pServBox.find('.zm-website-setService-serviceInfo');
        dataBox.attr({
            'data-zmPUrl-name':'上海大哥大服务器',
            'data-zmPUrl-ip':'163.110.120.125',
            'data-zmPUrl-port':'3080',
            'data-zmPUrl-valid':'true'
        });
        typeBox.on('click',function () {
            $(this).find('ul').toggle()
        }).on('blur',function () {
            $(this).find('ul').hide()
        });
        typeLi.on('click',function () {
            var _this = $(this);
            typeBox.find('p').html(_this.html());
            dataBox.attr('data-serviceType',_this.attr('data-type'));
            if(_this.index()==0){
                freeBox.animate({'marginLeft':'0'}).show();
                personBox.animate({'marginLeft':'700px'}).hide();
            }else if(_this.index()==1){
                freeBox.animate({'marginLeft':'-700px'}).hide();
                personBox.animate({'marginLeft':'0'}).show();
            }
            _this.parent().slideUp();
        });
        freeBox.find('li').on('click',function () {
            var _this = $(this);
            _this.addClass('zm-website-setService-freeServ')
                .siblings().removeClass('zm-website-setService-freeServ');
            dataBox.attr('data-zmFUrl',_this.html())
        });
        pServ.on('click',function () {
            $(this).find('ul').toggle()
        }).on('blur',function () {
            $(this).find('ul').hide()
        });
        pServ.find('li').on('click',function () {
            var _this = $(this);
            _this.addClass('zm-pServCheck').siblings().removeClass('zm-pServCheck');
            dataBox.attr({
                'data-zmPUrl-name':_this.html(),
                'data-zmPUrl-ip':_this.attr('data-ip'),
                'data-zmPUrl-port':_this.attr('data-port'),
                'data-zmPUrl-valid':_this.attr('data-valid')
            });
            pSinfoBox.find('span').eq(0).html(_this.html()).end()
                .find('span').eq(1).html(_this.attr('data-ip')).end()
                .find('span').eq(2).html(_this.attr('data-port')).end()
                .find('span').eq(3).html(_this.attr('data-valid')==='true'?'有效':'无效');
            pSinfoBox.next().attr('data-index',_this.index());
            _this.parent().slideUp();
        });
    },
    serviceTest:function (e) {
        var temp = $('<div class="zm-website-save-loadingBox"  data-animate="slide">'
            +'<div class="zm-website-save-loadingClose"><span class=" fa fa-remove"></span></div>'
            +'<div class="zm-website-save-loadingTitle">连接服务器...</div>'
            +'<div class="zm-website-save-loadingBar"><div class="zm-website-save-loading"></div></div>'
            +'<div class="zm-website-save-loadingWord"></div>'
            +'<div class="zm-website-save-loadingBg"></div>'
            +'</div>');
        $('body').append(temp);
        var loading = temp.find('.zm-website-save-loading');
        loading.animate({width:'100%'},1000,function () {
            temp.find('.zm-website-save-loadingWord').html('测试完成');
            temp.slideUp().remove();
        });
        temp.find('.zm-website-save-loadingClose').click(function () {
            temp.slideUp().remove()
        })
    },
    serviceEdit:function (ele,flag) {
        event.stopPropagation();
        var pServBox = $(ele).closest('.zm-website-setService-personal');
        var pServNum = pServBox.find('.zm-website-setService-servName');
        var pServIndex = $(ele).parent().attr('data-index');
        if(flag=='add'){
            if(pServNum.find('li').length>3){
                zmEditor.dialog.open({
                    title:'提示',
                    content:'<div style="padding: 25px;text-align: center">'
                    +'您已添加3个服务器，请删除无效服务器再进行添加！</div>',
                    footer:'<span class="zm-dialog-btnOK" '
                    +'style="display: inline-block;margin: 0 82px 10px 82px;padding: 0 15px;'
                    +'height: 30px;line-height: 30px;color: #fff;border-radius: 15px;cursor: pointer"'
                    +' onclick="zmEditor.website.pubWinClose(this)">我知道了</span>',
                    target:$('body'),
                    height:150,
                    width:250
                })
            }
            else {
                editServ(ele,flag);
            }
        }else if(flag=='edit'){
            editServ(ele,flag);
        }
        function editServ(o,str) {
            var dataBox = $(o).closest('#zm-website-setDNS').find('.zm-website-setService-dataBox');
            var psName = str=='edit'?dataBox.attr('data-zmPUrl-name'):'',
                psIp = str=='edit'?dataBox.attr('data-zmPUrl-ip'):'',
                psPort = str=='edit'?dataBox.attr('data-zmPUrl-port'):'',
                psValid = str=='edit'?dataBox.attr('data-zmPUrl-valid'):'';
            zmEditor.dialog.open({
                title:'编辑服务器信息',
                width:540,
                height:400,
                footer:'<div class="zm-dialog-footer" style="text-align: center">'
                +'<span class="zm-dialog-btnOK" onclick="zmEditor.website.serviceTest(this)">链接测试</span>'
                +'<span class="zm-dialog-btnOK" onclick="zmEditor.website.serviceSave(this)">保存</span>'
                +'<span class="zm-dialog-btnCancel" onclick="zmEditor.website.pubWinClose(this)">取消</span>'
                +'</div>',
                target:$(o).closest('#zm-website-setDNS'),
                content:'<div class="zm-website-editServ-box">'
                +'<div class="zm-website-editServ-nameBox">'
                +'<span><i>*</i>服务器名称：</span><input type="text" value="'+ psName +'">'
                +'<p>*服务器名称不得重名！必填！不得超过20个字符！不接受除“-”外的特殊字符！</p>'
                +'</div>'
                +'<div class="zm-website-editServ-ipBox">'
                +'<span><i>*</i>IP地址：</span><input type="text" value="'+ psIp +'">'
                +'<p>*请出入有效的IP地址！</p>'
                +'</div>'
                +'<div class="zm-website-editServ-portBox">'
                +'<span><i>*</i>端口：</span><input type="text" value="'+ psPort +'">'
                +'<p>*请输入有效的端口值！</p>'
                +'</div>'
                +'<div class="zm-website-editServ-uidBox">'
                +'<span><i>*</i>用户名：</span><input type="text" value="">'
                +'<p>*请输入不超过20个字符！不接受除“-”外的特殊字符！</p>'
                +'</div>'
                +'<div class="zm-website-editServ-upwBox">'
                +'<span><i>*</i>登陆密码：</span><input type="text" value="">'
                +'<p>*必填！</p>'
                +'</div>'
                +'<div class="zm-website-editServ-validBox">'
                +'<span>状态：</span><select><option value="0">有效</option><option value="1">无效</option></select>'
                +'</div>'
                +'</div>'
            })
        }

    },
    serviceSave:function (e) {
        var box = $(e).closest('#zm-website-setDNS');
        var totalKey = false;
        var infoBox = $(e).closest('.zm-dialog').find('.zm-website-editServ-box'),
            psName = infoBox.find('.zm-website-editServ-nameBox input').val(),
            psIP = infoBox.find('.zm-website-editServ-ipBox input').val(),
            psPort = infoBox.find('.zm-website-editServ-portBox input').val(),
            psUid = infoBox.find('.zm-website-editServ-uidBox input').val(),
            psUpw = infoBox.find('.zm-website-editServ-upwBox input').val();
        var newLi ='';
        if(psName!=''&&psIP!=''&&psPort!=''){
            //    验证填写内容是否规范
            newLi = '<li data-ip="'+ psIP +'" data-port="'+ psPort +'" data-valid="true">'+ psName +'</li>';
            totalKey = true
        }
        if(totalKey){
            box.find('.zm-website-setService-servName ul').prepend($(newLi));
            zmEditor.website.pubWinClose(e)
        }
    },
    serviceDel:function (e) {
        var index = $(e).parent().attr('data-index');
        var box = $(e).closest('.zm-website-setService-personal'),
            nameBox = box.find('.zm-website-setService-servName'),
            infoBox = box.find('.zm-website-setService-serviceInfo');

        box.find('li').eq(index).remove();
        nameBox.find('p').html(box.find('li').eq(0).html());
        infoBox.find('span').eq(0).html(box.find('li').eq(0).html()).end()
            .find('span').eq(1).html(box.find('li').eq(0).attr('data-ip')).end()
            .find('span').eq(2).html(box.find('li').eq(0).attr('data-port')).end()
            .find('span').eq(3).html(box.find('li').eq(0).attr('data-valid')=='true'?'有效':'无效');
        $(e).parent().attr('data-index','0')
    },
    publishNow:function (e) {
        var siteBox = $(e).closest('#zm-website-setDNS');
        var url = siteBox.find('.zm-website-setDNS-dataBox').attr('data-officialUrl');
        siteBox.remove();
        zmEditor.dialog.open({
            title:'发布成功',
            content:
            '<div class="zm-website-publishSec">'
            +'<div class="zm-website-publish-congBox">'
            +'<span class="fa fa-smile-o"></span>'
            +'<span>恭喜您，您的网站已成功发布！</span>'
            +'</div>'
            +'<div class="zm-website-publish-urlBox">'
            +'<div class="zm-website-publish-btnGroup">'
            +'<span class="fa fa-arrow-left"></span><span class="fa fa-repeat"></span></div>'
            +'<div class="zm-website-publish-inputBox">'
            +'<input placeholder="" value="'+ url +'" readonly></div></div></div>',
            footer:'<div class="zm-dialog-footer">'
            +'<span class="zm-dialog-btnOK setWebsiteBtn" style="width: auto;padding: 0 20px" onclick="">'
            +'进入网站看看</span>'
            +'<span class="zm-dialog-btnOK" onclick="zmEditor.website.pubWinClose(this)">关闭窗口</span>'
            +'</div>',
            width:700,
            height:300,
            movable:false,
            animate:'fade',
            target:$('body')
        })
    },
    pubWinClose:function (e) {
        $(e).closest('.zm-dialog-box').remove()
    }
};
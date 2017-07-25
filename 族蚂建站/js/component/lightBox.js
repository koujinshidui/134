zmEditor.component.lightBox = function(ele,iSelected){
	var prev_wrap = ele.find('.zm-edit-component-preview-wrap'),
		res_wrap = ele.find('.zm-edit-component-tab-resource-wrap'),
		setting_wrap = ele.find('.zm-edit-component-tab-setting-wrap');
		// vein_wrap = ele.find('.zm-edit-component-setting-vein-wrap'),
		// mainCol_wrap = ele.find('.zm-edit-component-setting-mainColor-wrap'),
		// botCol_wrap = ele.find('.zm-edit-component-setting-botColor-wrap'),
		// topCol_wrap = ele.find('.zm-edit-component-setting-topColor-wrap'),
		// zoom_wrap = ele.find('.zm-edit-component-setting-zoom-wrap'),
		// playE_wrap = ele.find('.zm-edit-component-setting-playerEffect-wrap');
	prev_wrap.append(zmEditor.component.setItems.templateELement.PreviewHTML);
	res_wrap.append(zmEditor.component.setItems.templateELement.repositoryHTML);
	var layer_image = ele.find(".preview-image"),
		layer_vein = ele.find(".preview-vein");
	var lb_image = iSelected.find(".zm-component-lightBox-wrap-image"),
		lb_vein = iSelected.find(".zm-component-lightBox-wrap-video");
	layer_image.addClass("image_choice");
	lb_image.addClass("image_choice");
	layer_vein.addClass("vein_choice");
	lb_vein.addClass("vein_choice");
	var _image = $(".image_choice"),
		_vein = $(".vein_choice");

	/***** 预览窗 *****/
	var btn_set = ele.find(".preview-setWrap-setting"),
	    btn_play = ele.find(".preview-setWrap-play"),
	    btn_style = ele.find(".zm-edit-component-preview-style"),
	    btn_color = ele.find(".preview-choice-color"),
	    btn_image = ele.find(".preview-choice-image"),
	    btn_video = ele.find(".preview-choice-video");
	var choice_wrap = ele.find(".zm-edit-component-preview-choice"),
		btn_set_wrap = ele.find(".zm-edit-component-preview-setWrap");

	//初始化
	layer_image.css("background",lb_image.css("background"));
	layer_vein.css("background",lb_vein.css("background"));
	btn_color.append(zmEditor.component.setItems.strings.color(_image,{style: "mini",param: "backgroundColor"}));

	btn_set.on("click",function(){
		event.stopPropagation();
		event.preventDefault();
		var type = $(this).attr("data-preview-type");
		choice_wrap.hide();
		btn_set_wrap.hide();
		btn_style.show();
		setting_wrap.append(zmEditor.component.setItems.strings.closeLB(iSelected));
		switch(type){
			case "color":
				setting_wrap.append($('<div class="zm-edit-component-setting-mainColor-wrap"></div>').append(zmEditor.component.setItems.slider(_image,{title: "灯箱主色",style: "noTab_color",isColor: true,param: "backgroundColor"})));
				break;
			case "image":
			case "png":
				setting_wrap.append($('<div class="zm-edit-component-setting-vein-wrap"></div>').append(zmEditor.component.setItems.vein(_vein))).append($('<div class="zm-edit-component-setting-topColor-wrap"></div>').append(zmEditor.component.setItems.slider(_image,{title: "背景颜色",style: "noTab_color",isColor: true,param: "backgroundColor"}))).append($('<div class="zm-edit-component-setting-botColor-wrap"></div>').append(zmEditor.component.setItems.slider(_vein,{title: "覆盖颜色",style: "noTab_color",isColor: true,param: "backgroundColor"}))).append($('<div class="zm-edit-component-setting-zoom-wrap"></div>').append(zmEditor.component.setItems.imgZoom(_image)));
				break;
			case "video":
				setting_wrap.append($('<div class="zm-edit-component-setting-vein-wrap"></div>').append(zmEditor.component.setItems.vein(_vein))).append($('<div class="zm-edit-component-setting-botColor-wrap"></div>').append(zmEditor.component.setItems.slider(_vein,{title: "覆盖颜色",style: "noTab_color",isColor: true,param: "backgroundColor"}))).append($('<div class="zm-edit-component-setting-playerEffect-wrap"></div>').append(zmEditor.component.setItems.playerEffect()));
				break;
			default:
				setting_wrap.append($('<div class="zm-edit-component-setting-mainColor-wrap"></div>').append(zmEditor.component.setItems.slider(_image,{title: "灯箱主色",style: "noTab_color",isColor: true,param: "backgroundColor"})));
				console.log("132");
				break;

		}
		setting_wrap.slideDown();
		res_wrap.slideUp();
	});
	btn_play.on("click",function(){

	});
	btn_style.on("click",function(){
		choice_wrap.show();
		btn_set_wrap.show();
		btn_style.hide();
		setting_wrap.slideUp();
		res_wrap.slideDown();
		setting_wrap.empty();
	});
	btn_color.on("click",function(){
		btn_set.attr("data-preview-type","color");
		_image.css("backgroundImage","");


	});
	btn_image.on("click",function(){
		btn_set.attr("data-preview-type","image");
		zmChoiceRadio.choicePicture({multiple :'',callBack:image_preview})

	});
	btn_video.on("click",function(){
		btn_set.attr("data-preview-type","video");
		zmChoiceRadio.choiceVideo({multiple :'',callBack:video_preview})

	});
	function image_preview(data){
		console.log(data,"123");

	}
	function video_preview(data){
		console.log(data,"321");

	}
	/***** 预览窗结束 *****/
	/***** 资源窗 *****/
	var li = res_wrap.find("li");
	li.on("click",function(){
		var _this = $(this);
		btn_set.attr("data-preview-type",_this.attr("data-prev-type"));
		_image.css("background",_this.attr("data-prev-bg"));
	});
	/***** 资源窗 *****/
};
/*
 author:ye
 name: templateELement;
 function: 样式设置好的纯html组件.
* */

zmEditor.component.setItems.templateELement={
    StyleChange:$(' <div class="banner-style-father"><div class="banner-style">' +
        '<div class="styles" onclick="zmEditor.component.style(this)">'+
        '<i>'+
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1029 1024" version="1.1"> <path d="M0 230.033094c0-31.442106 25.304316-56.885592 56.497759-56.885592l910.962527 0c31.193443 0 56.497759 25.221428 56.497759 56.885592 0 31.444153-25.304316 56.885592-56.497759 56.885592L56.496735 286.918685C25.304316 286.918685 0 261.587763 0 230.033094z"></path> <path d="M0 514.466168c0-31.444153 25.304316-56.886615 56.497759-56.886615l910.962527 0c31.193443 0 56.497759 25.220405 56.497759 56.886615 0 31.442106-25.304316 56.885592-56.497759 56.885592L56.496735 571.35176C25.304316 571.35176 0 546.019815 0 514.466168z"></path> <path d="M0 798.899242c0-31.444153 25.304316-56.887638 56.497759-56.887638l910.962527 0c31.193443 0 56.497759 25.220405 56.497759 56.887638 0 31.442106-25.304316 56.885592-56.497759 56.885592L56.496735 855.784834C25.304316 855.784834 0 830.452889 0 798.899242z"></path> </svg>'+
        '</i>'+
        '<span>样式</span>'+
        '</div>' +
        '</div>' +
        '</div>'),
    fiGaiWenli:$('<div class="fugaiwenli"> <div class="u361"> <p><span>覆盖纹理</span></p> </div> <div class="u351"></div> <div  class="u353"></div> <div  class="u355"> </div> <div  class="u357 "> </div> <div  class="u359"> </div> <div  class="u3591"> </div> <div class="u3592"> </div> <div  class="u3593"> </div> <div  class="u375"> <p><span>浅色</span></p> </div> <div  class="u377"> <p><span>深色</span></p> </div> </div>'), // 对应覆盖纹理
    //颜色组件html.
    zmColorPicker:$('<div class="zm-colorPicker"><span class="zm-colorPicker-switch"></span></div>'),
    //previewHTML
    previewHTML:$('<div class="zm-edit-pageFull-preview">' //
            +'<div class="preview-bg"><div class="prev-a"></div><div class="prev-b"></div><div class="prev-c"></div></div>'
            +'<div class="preview-setting">'
            +'<div class="setting"><div class="setting-set"><i><svg xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><pat	h d="M883.824 603.006h-46.922c-7.612 27.613-18.546 53.772-32.526 78.063l43.357 43.322c27.752 27.751 27.752 72.735 0 100.485l-25.121 25.122c-27.751 27.752-72.735 27.752-100.486 0l-43.634-43.634c-24.187 13.77-50.278 24.535-77.75 32.007v45.502c0 39.241-31.8 71.04-71.04 71.04H494.2c-39.24 0-71.074-31.799-71.074-71.04V838.37c-27.439-7.473-53.53-18.236-77.751-32.007l-43.635 43.634c-27.715 27.752-72.699 27.752-100.45 0l-25.122-25.122c-27.751-27.75-27.751-72.734 0-100.485l43.357-43.322c-13.98-24.29-24.914-50.45-32.56-78.063h-46.887c-39.24 0-71.04-31.8-71.04-71.004v-35.539c0-39.24 31.8-71.04 71.04-71.04h46.332c7.336-27.335 17.856-53.357 31.454-77.508l-41.696-41.663c-27.751-27.749-27.751-72.733 0-100.485l25.122-25.12c27.751-27.754 72.735-27.754 100.45 0l40.866 40.9c25.018-14.569 52.008-25.917 80.521-33.704v-47.717c0-39.242 31.834-71.04 71.074-71.04h35.502c39.24 0 71.04 31.798 71.04 71.04v47.717c28.546 7.786 55.535 19.134 80.52 33.704l40.865-40.9c27.751-27.754 72.735-27.754 100.486 0l25.121 25.12c27.752 27.752 27.752 72.736 0 100.485l-41.696 41.663c13.6 24.152 24.084 50.173 31.454 77.507h46.333c39.24 0 71.038 31.801 71.038 71.041v35.539c-0.002 39.203-31.801 71.004-71.04 71.004z m-371.876-283.05c-107.89 0-195.364 87.475-195.364 195.367 0 107.89 87.474 195.364 195.364 195.364 107.893 0 195.367-87.474 195.367-195.364s-87.473-195.367-195.367-195.367z m0 281.94c-49.03 0-88.824-39.721-88.824-88.788 0-49.068 39.794-88.79 88.824-88.79 49.033 0 88.793 39.72 88.793 88.79 0 49.066-39.76 88.788-88.793 88.788z" fill="" p-id="1014"/></svg></i><span>设置</span></div><div class="setting-play"><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><path d="M428.859077 296.093538c-5.632-3.899077-12.878769-4.371692-18.865231-1.181538-6.025846 3.150769-9.806769 9.373538-9.806769 16.187077l0 417.988923c0 6.852923 3.859692 13.154462 10.043077 16.265846 2.56 1.339077 5.395692 2.008615 8.231385 2.008615 3.820308 0 7.601231-1.220923 10.791385-3.544615l292.548923-214.449231c4.765538-3.505231 7.522462-9.019077 7.443692-14.966154s-2.993231-11.421538-7.837538-14.808615L428.859077 296.093538z"/><path d="M512 0C229.691077 0 0 229.691077 0 512c0 282.308923 229.691077 512 512 512 282.308923 0 512-229.691077 512-512C1024 229.691077 794.308923 0 512 0zM512 926.404923C283.490462 926.404923 97.595077 740.509538 97.595077 512 97.595077 283.490462 283.490462 97.595077 512 97.595077c228.509538 0 414.404923 185.895385 414.404923 414.404923C926.404923 740.509538 740.509538 926.404923 512 926.404923z"/></svg></i><i style="display: none"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><path d="M512 994.505C245.931 994.505 29.495 778.07 29.495 512 29.495 245.959 245.93 29.495 512 29.495c266.041 0 482.505 216.435 482.505 482.505S778.041 994.505 512 994.505z m0-897.278C283.283 97.227 97.199 283.285 97.199 512S283.283 926.801 512 926.801 926.773 740.743 926.773 512c0-228.69-186.058-414.773-414.773-414.773z"/><path d="M361.739 323.663h67.731c18.688 0 33.865 15.15 33.865 33.891v338.572c0 18.688-15.15 33.891-33.865 33.891h-67.731c-18.688 0-33.865-15.124-33.865-33.891V357.528c0-18.717 15.178-33.865 33.865-33.865zM598.767 323.663h67.676c18.688 0 33.891 15.15 33.891 33.891v338.572c0 18.688-15.178 33.891-33.891 33.891h-67.676c-18.688 0-33.891-15.124-33.891-33.891V357.528c0.025-18.717 15.203-33.865 33.891-33.865z"/></svg></i></div></div>'
            +'<div class="styles"><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1029 1024" version="1.1"><path d="M0 230.033094c0-31.442106 25.304316-56.885592 56.497759-56.885592l910.962527 0c31.193443 0 56.497759 25.221428 56.497759 56.885592 0 31.444153-25.304316 56.885592-56.497759 56.885592L56.496735 286.918685C25.304316 286.918685 0 261.587763 0 230.033094z"/><path d="M0 514.466168c0-31.444153 25.304316-56.886615 56.497759-56.886615l910.962527 0c31.193443 0 56.497759 25.220405 56.497759 56.886615 0 31.442106-25.304316 56.885592-56.497759 56.885592L56.496735 571.35176C25.304316 571.35176 0 546.019815 0 514.466168z"/><path d="M0 798.899242c0-31.444153 25.304316-56.887638 56.497759-56.887638l910.962527 0c31.193443 0 56.497759 25.220405 56.497759 56.887638 0 31.442106-25.304316 56.885592-56.497759 56.885592L56.496735 855.784834C25.304316 855.784834 0 830.452889 0 798.899242z"/></svg></i><span>样式</span></div></div>'
            +'<div class="preview-choice">'
            +'<div class="preview-choice-color"><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><path d="M816.2 570.5L309.7 64 271 102.7l134.5 134.5L72.3 570.5l371.9 371.9 372.1-371.8-0.1-0.1z m-630.3-32.1L444.3 280 702 538.4H185.9zM945.4 898.3l-86-175.5-86.2 175.3c-4 10.4-6.3 21.6-6.3 33.5 0 51 41.4 92.4 92.4 92.4s92.4-41.4 92.4-92.4c0-11.8-2.3-23-6.3-33.3z"/></svg></i><span>颜色</span></div>'
            +'<div class="preview-choice-image"><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1078 1024" version="1.1"><path d="M754.526316 269.473684m-134.736842 0a2.5 2.5 0 1 0 269.473684 0 2.5 2.5 0 1 0-269.473684 0Z" p-id="5266"/><path d="M970.105263 0 107.789474 0C48.505263 0 0 48.505263 0 107.789474l0 808.421053c0 59.284211 48.505263 107.789474 107.789474 107.789474l862.315789 0c59.284211 0 107.789474-48.505263 107.789474-107.789474L1077.894737 107.789474C1077.894737 48.505263 1029.389474 0 970.105263 0zM1024 867.705263l0-32.336842-264.084211-339.536842C754.526316 490.442105 732.968421 485.052632 722.189474 495.831579l-102.4 97.010526L436.547368 339.536842C425.768421 323.368421 409.6 323.368421 393.431579 334.147368L53.894737 716.8l0 32.336842 0 0 0-32.336842 0 0L53.894737 107.789474c0-26.947368 21.557895-53.894737 53.894737-53.894737l862.315789 0c26.947368 0 53.894737 21.557895 53.894737 53.894737l0 732.968421 0 0L1024 867.705263 1024 867.705263z"/></svg></i><span>图片</span></div>'
            +'<div class="preview-choice-video"><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><path d="M921.008 705.903l-0.227-387.806c-0.008-11.069-11.549-17.979-20.773-12.439L730.11 396.831c-4.291 2.577-9.66-0.64-9.66-5.788v-85.479c0-24.995-19.691-45.446-43.762-45.446H146.753c-24.068 0-43.761 20.451-43.761 45.446v412.871c0 24.996 19.692 45.447 43.761 45.447h529.935c24.068 0 43.76-20.451 43.76-45.447v-85.34c0-5.145 5.363-8.361 9.654-5.791l170.145 91.064c9.233 5.528 20.767-1.396 20.761-12.465z"/></svg></i><span>视频</span></div>'
            +'</div></div>'
        ),
    //图片显示比例html
    pictureshowScalHtml:$('<div class="zm-comptent-showScalHtml">' +
        '<p>显示比例</p><div class="zm-comptent-showScalHtml-showDialog-show">自适应 </div><span class="zm-icon-sanjiaoYe"></span>' +
        '<div class="zm-comptent-showScalHtml-showDialog">' +
        '<div class="zm-comptent-showScalHtml-showDialogLi1">原始比例</div>' +
        '<div class="zm-comptent-showScalHtml-showDialogLi2">自适应</div>' +
        '<div class="zm-comptent-showScalHtml-showDialogLi3">平铺</div>' +
        '</div>' +
        '</div>'),
    //视频播放效果html
    PlaybackEffect:$('<div class="zm-component-PlaybackEffect"> ' +
        '<div class="PlaybackEffectText"><p>播放效果</p></div> <div class="PlaybackEffectComponent"> <span> 播放速度:&nbsp;</span> <div class="PlaybackEffectDiv"><span class="playShowText">正常播放</span> <span class="zm-icon-sanjiaoYe"></span></div>' +
        ' <div class="PlaybackEffectDivDiolag"> <div class="PlaybackEffectDiv1" data-video-rate="0.25">0.25慢速</div> <div class="PlaybackEffectDiv2" data-video-rate="0.5">0.5慢速</div> <div class="PlaybackEffectDiv3" data-video-rate="1">正常播放</div> <div class="PlaybackEffectDiv4" data-video-rate="1.25">1.25倍快速</div> <div class="PlaybackEffectDiv5" data-video-rate="1.5">1.5倍快速</div> <div class="PlaybackEffectDiv6" data-video-rate="2">2倍快速</div> </div> </div> ' +
        '<div class="PlaybackEffectComponentLoop"><span> 循环播放：</span><label class="zm-switch-box"><span class="zm-switch"><span class="fa fa-minus"></span></span></label></div> ' +
        '</div>'),
    PreviewHTML:
	    $('<div class="zm-edit-component-preview">'
		+'<div class="zm-edit-component-preview-bg"><div class="preview-image"></div><div class="preview-vein"></div></div>'
		+'<div class="zm-edit-component-preview-setting">'
		+'<div class="zm-edit-component-preview-setWrap"><div class="preview-setWrap-setting"><i><svg xmlns="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><path d="M883.824 603.006h-46.922c-7.612 27.613-18.546 53.772-32.526 78.063l43.357 43.322c27.752 27.751 27.752 72.735 0 100.485l-25.121 25.122c-27.751 27.752-72.735 27.752-100.486 0l-43.634-43.634c-24.187 13.77-50.278 24.535-77.75 32.007v45.502c0 39.241-31.8 71.04-71.04 71.04H494.2c-39.24 0-71.074-31.799-71.074-71.04V838.37c-27.439-7.473-53.53-18.236-77.751-32.007l-43.635 43.634c-27.715 27.752-72.699 27.752-100.45 0l-25.122-25.122c-27.751-27.75-27.751-72.734 0-100.485l43.357-43.322c-13.98-24.29-24.914-50.45-32.56-78.063h-46.887c-39.24 0-71.04-31.8-71.04-71.004v-35.539c0-39.24 31.8-71.04 71.04-71.04h46.332c7.336-27.335 17.856-53.357 31.454-77.508l-41.696-41.663c-27.751-27.749-27.751-72.733 0-100.485l25.122-25.12c27.751-27.754 72.735-27.754 100.45 0l40.866 40.9c25.018-14.569 52.008-25.917 80.521-33.704v-47.717c0-39.242 31.834-71.04 71.074-71.04h35.502c39.24 0 71.04 31.798 71.04 71.04v47.717c28.546 7.786 55.535 19.134 80.52 33.704l40.865-40.9c27.751-27.754 72.735-27.754 100.486 0l25.121 25.12c27.752 27.752 27.752 72.736 0 100.485l-41.696 41.663c13.6 24.152 24.084 50.173 31.454 77.507h46.333c39.24 0 71.038 31.801 71.038 71.041v35.539c-0.002 39.203-31.801 71.004-71.04 71.004z m-371.876-283.05c-107.89 0-195.364 87.475-195.364 195.367 0 107.89 87.474 195.364 195.364 195.364 107.893 0 195.367-87.474 195.367-195.364s-87.473-195.367-195.367-195.367z m0 281.94c-49.03 0-88.824-39.721-88.824-88.788 0-49.068 39.794-88.79 88.824-88.79 49.033 0 88.793 39.72 88.793 88.79 0 49.066-39.76 88.788-88.793 88.788z"/></svg></i><span>设置</span></div><div class="preview-setWrap-play"><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><path d="M428.859077 296.093538c-5.632-3.899077-12.878769-4.371692-18.865231-1.181538-6.025846 3.150769-9.806769 9.373538-9.806769 16.187077l0 417.988923c0 6.852923 3.859692 13.154462 10.043077 16.265846 2.56 1.339077 5.395692 2.008615 8.231385 2.008615 3.820308 0 7.601231-1.220923 10.791385-3.544615l292.548923-214.449231c4.765538-3.505231 7.522462-9.019077 7.443692-14.966154s-2.993231-11.421538-7.837538-14.808615L428.859077 296.093538z"/><path d="M512 0C229.691077 0 0 229.691077 0 512c0 282.308923 229.691077 512 512 512 282.308923 0 512-229.691077 512-512C1024 229.691077 794.308923 0 512 0zM512 926.404923C283.490462 926.404923 97.595077 740.509538 97.595077 512 97.595077 283.490462 283.490462 97.595077 512 97.595077c228.509538 0 414.404923 185.895385 414.404923 414.404923C926.404923 740.509538 740.509538 926.404923 512 926.404923z"/></svg></i><i style="display: none"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><path d="M512 994.505C245.931 994.505 29.495 778.07 29.495 512 29.495 245.959 245.93 29.495 512 29.495c266.041 0 482.505 216.435 482.505 482.505S778.041 994.505 512 994.505z m0-897.278C283.283 97.227 97.199 283.285 97.199 512S283.283 926.801 512 926.801 926.773 740.743 926.773 512c0-228.69-186.058-414.773-414.773-414.773z"/><path d="M361.739 323.663h67.731c18.688 0 33.865 15.15 33.865 33.891v338.572c0 18.688-15.15 33.891-33.865 33.891h-67.731c-18.688 0-33.865-15.124-33.865-33.891V357.528c0-18.717 15.178-33.865 33.865-33.865zM598.767 323.663h67.676c18.688 0 33.891 15.15 33.891 33.891v338.572c0 18.688-15.178 33.891-33.891 33.891h-67.676c-18.688 0-33.891-15.124-33.891-33.891V357.528c0.025-18.717 15.203-33.865 33.891-33.865z"/></svg></i></div></div>'
		+'<div class="zm-edit-component-preview-style"><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1029 1024" version="1.1"><path d="M0 230.033094c0-31.442106 25.304316-56.885592 56.497759-56.885592l910.962527 0c31.193443 0 56.497759 25.221428 56.497759 56.885592 0 31.444153-25.304316 56.885592-56.497759 56.885592L56.496735 286.918685C25.304316 286.918685 0 261.587763 0 230.033094z"/><path d="M0 514.466168c0-31.444153 25.304316-56.886615 56.497759-56.886615l910.962527 0c31.193443 0 56.497759 25.220405 56.497759 56.886615 0 31.442106-25.304316 56.885592-56.497759 56.885592L56.496735 571.35176C25.304316 571.35176 0 546.019815 0 514.466168z"/><path d="M0 798.899242c0-31.444153 25.304316-56.887638 56.497759-56.887638l910.962527 0c31.193443 0 56.497759 25.220405 56.497759 56.887638 0 31.442106-25.304316 56.885592-56.497759 56.885592L56.496735 855.784834C25.304316 855.784834 0 830.452889 0 798.899242z"/></svg></i><span>样式</span></div></div>'
		+'<div class="zm-edit-component-preview-choice">'
		+'<div class="preview-choice-color"><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><path d="M816.2 570.5L309.7 64 271 102.7l134.5 134.5L72.3 570.5l371.9 371.9 372.1-371.8-0.1-0.1z m-630.3-32.1L444.3 280 702 538.4H185.9zM945.4 898.3l-86-175.5-86.2 175.3c-4 10.4-6.3 21.6-6.3 33.5 0 51 41.4 92.4 92.4 92.4s92.4-41.4 92.4-92.4c0-11.8-2.3-23-6.3-33.3z"/></svg></i><span>颜色</span></div>'
		+'<div class="preview-choice-image"><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1078 1024" version="1.1"><path d="M754.526316 269.473684m-134.736842 0a2.5 2.5 0 1 0 269.473684 0 2.5 2.5 0 1 0-269.473684 0Z" p-id="5266"/><path d="M970.105263 0 107.789474 0C48.505263 0 0 48.505263 0 107.789474l0 808.421053c0 59.284211 48.505263 107.789474 107.789474 107.789474l862.315789 0c59.284211 0 107.789474-48.505263 107.789474-107.789474L1077.894737 107.789474C1077.894737 48.505263 1029.389474 0 970.105263 0zM1024 867.705263l0-32.336842-264.084211-339.536842C754.526316 490.442105 732.968421 485.052632 722.189474 495.831579l-102.4 97.010526L436.547368 339.536842C425.768421 323.368421 409.6 323.368421 393.431579 334.147368L53.894737 716.8l0 32.336842 0 0 0-32.336842 0 0L53.894737 107.789474c0-26.947368 21.557895-53.894737 53.894737-53.894737l862.315789 0c26.947368 0 53.894737 21.557895 53.894737 53.894737l0 732.968421 0 0L1024 867.705263 1024 867.705263z"/></svg></i><span>图片</span></div>'
		+'<div class="preview-choice-video"><i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><path d="M921.008 705.903l-0.227-387.806c-0.008-11.069-11.549-17.979-20.773-12.439L730.11 396.831c-4.291 2.577-9.66-0.64-9.66-5.788v-85.479c0-24.995-19.691-45.446-43.762-45.446H146.753c-24.068 0-43.761 20.451-43.761 45.446v412.871c0 24.996 19.692 45.447 43.761 45.447h529.935c24.068 0 43.76-20.451 43.76-45.447v-85.34c0-5.145 5.363-8.361 9.654-5.791l170.145 91.064c9.233 5.528 20.767-1.396 20.761-12.465z"/></svg></i><span>视频</span></div>'
		+'</div></div>'),
    resourceHTML:
	    $('<div class="zm-edit-component-resource">'
	    +'<div class="zm-edit-component-resource-title">族蚂资源库</div>'
	    +'<div class="zm-edit-component-resource-content mCustomScrollbar" data-mcs-theme="minimal">'
	    +'<ul class="zm-edit-component-resource-content-list clearFloat">'
		+'<li class="lump zm-QuickLook" data-prev-type="video" data-prev-bg="resource/video/001.mp4" data-prev-name="可口可乐广告" data-prev-time="00:15" style="background-image: url(resource/images/video_thum/video_001.png)"></li>'
		+'<li class="lump zm-QuickLook" data-prev-type="video" data-prev-bg="resource/video/002.mp4" data-prev-name="手机广告" data-prev-time="00:15" style="background-image: url(resource/images/video_thum/video_002.png)"></li>'
		+'<li class="lump zm-QuickLook" data-prev-type="video" data-prev-bg="resource/video/003.mp4" data-prev-name="酸奶广告" data-prev-time="00:15" style="background-image: url(resource/images/video_thum/video_003.png)"></li>'
		+'<li class="lump zm-QuickLook" data-prev-type="video" data-prev-bg="resource/video/004.mp4" data-prev-name="可口可乐广告" data-prev-time="00:15" style="background-image: url(resource/images/video_thum/video_004.png)"></li>'
		+'<li class="lump zm-QuickLook" data-prev-type="video" data-prev-bg="resource/video/005.mp4" data-prev-name="吉利汽车" data-prev-time="00:15" style="background-image: url(resource/images/video_thum/video_005.png)"></li>'
		+'<li class="lump zm-QuickLook" data-prev-type="video" data-prev-bg="resource/video/006.mp4" data-prev-name="百威啤酒广告" data-prev-time="00:15" style="background-image: url(resource/images/video_thum/video_006.png)"></li>'
		+'<li class="lump zm-QuickLook" data-prev-type="image" data-prev-bg="url(resource/images/scenery/001.jpg)" data-prev-name="世界各地01" style="background-image: url(resource/images/scenery/001.jpg)"></li>'
		+'<li class="lump zm-QuickLook" data-prev-type="image" data-prev-bg="url(resource/images/scenery/002.jpg)" data-prev-name="世界各地02" style="background-image: url(resource/images/scenery/002.jpg)"></li>'
		+'<li class="lump zm-QuickLook" data-prev-type="image" data-prev-bg="url(resource/images/scenery/003.jpg)" data-prev-name="世界各地03" style="background-image: url(resource/images/scenery/003.jpg)"></li>'
		+'<li class="lump zm-QuickLook" data-prev-type="image" data-prev-bg="url(resource/images/scenery/004.jpg)" data-prev-name="世界各地04" style="background-image: url(resource/images/scenery/004.jpg)"></li>'
		+'<li class="lump zm-QuickLook" data-prev-type="image" data-prev-bg="url(resource/images/scenery/005.jpg)" data-prev-name="世界各地05" style="background-image: url(resource/images/scenery/005.jpg)"></li>'
		+'<li class="lump zm-QuickLook" data-prev-type="image" data-prev-bg="url(resource/images/scenery/006.jpg)" data-prev-name="世界各地06" style="background-image: url(resource/images/scenery/006.jpg)"></li>'
		+'<li class="lump zm-QuickLook" data-prev-type="image" data-prev-bg="url(resource/images/scenery/007.jpg)" data-prev-name="世界各地07" style="background-image: url(resource/images/scenery/007.jpg)"></li>'
		+'<li class="lump zm-QuickLook" data-prev-type="image" data-prev-bg="url(resource/images/scenery/008.jpg)" data-prev-name="世界各地08" style="background-image: url(resource/images/scenery/008.jpg)"></li>'
		+'<li class="lump zm-QuickLook" data-prev-type="image" data-prev-bg="url(resource/images/scenery/009.jpg)" data-prev-name="世界各地09" style="background-image: url(resource/images/scenery/009.jpg)"></li>'
		+'<li class="lump zm-QuickLook" data-prev-type="image" data-prev-bg="url(resource/images/scenery/010.jpg)" data-prev-name="世界各地10" style="background-image: url(resource/images/scenery/010.jpg)"></li>'
		+'<li class="lump zm-QuickLook" data-prev-type="image" data-prev-bg="url(resource/images/scenery/011.jpg)" data-prev-name="世界各地11" style="background-image: url(resource/images/scenery/011.jpg)"></li>'
		+'<li class="lump zm-QuickLook" data-prev-type="image" data-prev-bg="url(resource/images/scenery/012.jpg)" data-prev-name="世界各地12" style="background-image: url(resource/images/scenery/012.jpg)"></li>'
		+'<li class="lump zm-QuickLook" data-prev-type="image" data-prev-bg="url(resource/images/scenery/013.jpg)" data-prev-name="世界各地13" style="background-image: url(resource/images/scenery/013.jpg)"></li>'
		+'<li class="lump zm-QuickLook" data-prev-type="image" data-prev-bg="url(resource/images/scenery/014.jpg)" data-prev-name="世界各地14" style="background-image: url(resource/images/scenery/014.jpg)"></li>'
        +'</ul></div></div>'),
    repositoryHTML:
	    $('<div class="zm-edit-component-resource">'
	    +'<div class="zm-edit-component-resource-title">族蚂资源库</div>'
	    +'<div class="zm-edit-component-resource-content mCustomScrollbar" data-mcs-theme="minimal">'
	    +'<ul class="zm-edit-component-resource-content-list clearFloat">'
        +'<li class="zm-QuickLook sliver" data-prev-type="png" data-prev-bg="url(resource/images/bg/hd_02.png)" data-prev-name="短红线" style="background:url(resource/images/bg/02.png)"></li>'
        +'<li class="zm-QuickLook sliver" data-prev-type="png" data-prev-bg="url(resource/images/bg/hd_03.png)" data-prev-name="斜线" style="background:url(resource/images/bg/03.png)"></li>'
        +'<li class="zm-QuickLook sliver" data-prev-type="png" data-prev-bg="rgba(51,136,255,.5) url(resource/images/bg/hd_04.png)" data-prev-name="雨滴" style="background:#3388ff url(resource/images/bg/04.png)"></li>'
        +'<li class="zm-QuickLook sliver" data-prev-type="png" data-prev-bg="rgba(255,117,0,.5) url(resource/images/bg/hd_05.png)" data-prev-name="三角形" style="background:#ff7500 url(resource/images/bg/05.png)"></li>'
        +'<li class="sliver" data-prev-type="color" data-prev-bg="rgba(0,0,0,.8)" style="background:rgba(0,0,0,.8) url(resource/images/bg/opacity.png)"></li>'
        +'<li class="sliver" data-prev-type="color" data-prev-bg="rgba(0,0,0,.6)" style="background:rgba(0,0,0,.6) url(resource/images/bg/opacity.png)"></li>'
        +'<li class="sliver" data-prev-type="color" data-prev-bg="rgba(0,0,0,.4)" style="background:rgba(0,0,0,.4) url(resource/images/bg/opacity.png)"></li>'
        +'</ul></div></div>'),
	veinHTML:
		$('<div class="zm-edit-component-coverVein">'
			+'<div class="zm-edit-component-coverVein-title">覆盖纹理</div>'
			+'<div class="zm-edit-component-coverVein-styles">'
			+'<span class="active"></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>'
			+'</div>'
			+'<div class="zm-edit-component-coverVein-level" data-level="light"><div><span class="coverVein-level-light active">浅色</span><span class="coverVein-level-dark">深色</span></div></div>'
			+'</div>'),
	lightClose:
		$('<div class="zm-component-box1 zm-component-editor zm-component-movable" id="9319-1500614959979-51008-b" data-zm-component-type="btn" data-zm-component-type2="5" data-zm-fid="241" data-zm-fname="普通按钮13" data-zm-containerid="zmid1495179799823r" data-zm-index="1" style="position: absolute; right: 150px; top: 150px; z-index: 1;">'
			+'<div class="zm-component-box2">'
			+'<div class="zm-component-main-temp">'
			+'<div class="zm-component-resize" style="display: none;">'
			+'<span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>'
			+'</div></div>'
			+'<div class="zm-component-main zm-component-main-text" id="9319-1500614959979-51008-m">'
			+'<div class="zm-edit-components-button" style="width: 50px; height: 50px;cursor: pointer;background-color: #fff; color: #000;  line-height: 50px; text-align: center; font-size: 42px; border-radius: 50%;">X</div>'
			+'</div></div></div>'),
	lightRow01:
		$('<div class="zm-component-box1 zm-component-editor zm-component-movable zm-container zm-component-nowEdit" id="7226-1500617638469-54777-b" data-zm-component-type="container" data-zm-component-type2="52" data-zm-fid="363" data-zm-fname="实心容器2" data-zm-containerid="zmid1495179799823r" data-zm-index="1" style="position: absolute; left: 607px; top: 233px; z-index: 1;" data-zm-maxindex="9">'
			+'<div class="zm-component-box2">'
			+'<div class="zm-component-main-temp">'
			+'<div class="zm-component-location" style="display: none;">'
			+'<span>x:</span><span class="zm-component-location-x">209</span>'
			+'<span> , y:</span><span class="zm-component-location-y">133</span>'
			+'<span> , w:</span><span class="zm-component-location-w">585</span>'
			+'<span> , h:</span><span class="zm-component-location-h">435</span>'
			+'</div>'
			+'<div class="zm-component-resize" style="display: block;">'
			+'<span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>'
			+'</div></div>'
			+'<div class="zm-component-main zm-component-main-text" id="7226-1500617638469-54777-m" style="width: 585px; height: 435px; display: block; overflow: visible;">'
			+'<div class="zm-component-container" style="background-color: rgb(74, 177, 167); border-radius: 5px; box-shadow: rgb(0, 0, 0) 0px 0px 0px;"></div>'
			+'</div></div>'
			+'<div class="zm-component-box1 zm-component-editor zm-component-movable" id="1e3c-1500617655099-62733-b" data-zm-component-type="text" data-zm-component-type2="2" data-zm-fid="12" data-zm-fname="超大标题文字" data-zm-containerid="7226-1500617638469-54777-b" data-zm-index="1" style="position: absolute; left: 153px; top: 48px; z-index: 1;">'
			+'<div class="zm-component-box2">'
			+'<div class="zm-component-main-temp">'
			+'<div class="zm-component-location" style="display: none;"><span>x:</span><span class="zm-component-location-x">357</span>'
			+'<span> , y:</span><span class="zm-component-location-y">149</span><span> , w:</span><span class="zm-component-location-w">304</span><span> , h:</span><span class="zm-component-location-h">54</span></div>'
			+'<div class="zm-component-resize" style="display: none;"><span style="display: none;"></span><span style="display: none;"></span><span style="display: none;"></span><span></span><span style="display: none;"></span><span style="display: block;"></span><span style="display: none;"></span><span></span></div></div>'
			+'<div class="zm-component-main zm-component-main-text" id="1e3c-1500617655099-62733-m"><div class="zm-component-main zm-component-main-text" style="width: 300px; font-size: 48px; font-family: 微软雅黑; display: block; line-height: 1em;">超大标题文字</div></div></div></div>'
			+'<div class="zm-component-box1 zm-component-editor zm-component-movable" id="fed8-1500617862604-06038-b" data-zm-component-type="text" data-zm-component-type2="23" data-zm-fid="225" data-zm-fname="段落样式" data-zm-containerid="7226-1500617638469-54777-b" data-zm-index="3" style="position: absolute; left: 153px; top: 139px; z-index: 3;">'
			+'<div class="zm-component-box2"><div class="zm-component-main-temp">'
			+'<div class="zm-component-location" style="display: none;"><span>x:</span><span class="zm-component-location-x">357</span><span> , y:</span><span class="zm-component-location-y">240</span><span> , w:</span><span class="zm-component-location-w">304</span><span> , h:</span><span class="zm-component-location-h">126</span></div>'
			+'<div class="zm-component-resize" style="display: none;"><span style="display: none;"></span><span style="display: none;"></span><span style="display: none;"></span><span></span><span style="display: none;"></span><span style="display: block;"></span><span style="display: none;"></span><span></span></div></div>'
			+'<div class="zm-component-main zm-component-main-text" id="fed8-1500617862604-06038-m" style="height: auto; min-height: 122px;">'
			+'<div class="zm-component-main zm-component-main-text" style="width: 300px; font-size: 14px; font-family: 微软雅黑; display: block; line-height: 1em; min-height: 122px; height: auto;">'
			+'本段落可编辑，文本框大小可调节，文字大小可调，文字可编排，背景色可编辑...（请勿使用带有暴力、淫秽以及其他违法的文字描述）'
			+'</div></div></div></div>'
			+'<div class="zm-component-box1 zm-component-editor zm-component-movable" id="6705-1500617882378-97737-b" data-zm-component-type="btn" data-zm-component-type2="5" data-zm-fid="229" data-zm-fname="普通按钮01" data-zm-containerid="7226-1500617638469-54777-b" data-zm-index="6" style="position: absolute; left: 179px; top: 299px; z-index: 6;">'
			+'<div class="zm-component-box2"><div class="zm-component-main-temp">'
			+'<div class="zm-component-location" style="display: none;"><span>x:</span><span class="zm-component-location-x">383</span><span> , y:</span><span class="zm-component-location-y">400</span><span> , w:</span><span class="zm-component-location-w">224</span><span> , h:</span><span class="zm-component-location-h">42</span></div>'
			+'<div class="zm-component-resize" style="display: none;"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div></div>'
			+'<div class="zm-component-main zm-component-main-text" id="6705-1500617882378-97737-m" style="width: auto; min-width: 220px; height: auto;">'
			+'<div class="zm-edit-components-button" style="cursor: pointer; background-color: rgb(255, 255, 255); border: 1px solid rgb(74, 177, 167); color: rgb(51, 51, 51); width: auto; height: auto; line-height: 36px; text-align: center; font-size: 24px; display: block; min-width: 220px; min-height: 36px;" data-zm-oldcolor="rgb(51, 51, 51)">Button</div>'
			+'</div></div></div></div>'),
};
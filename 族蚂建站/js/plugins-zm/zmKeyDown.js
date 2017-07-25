/**
 * Created by Administrator on 2017/4/21.
 */

$(document).keydown(function(e){
    if($('.zm-component-settingPanel').length==0){
        var nowBox1 = zmEditor.component.nowBox1(zmEditor.component.nowEdit());
        if(nowBox1.find('.zm-component-main:eq(0)').children().attr('contenteditable')=='true') {

        }
        else{
            if (e.ctrlKey == true) {//ctrl
                if (e.keyCode == 67) {//c：复制
                    zmEditor.component.options.copy();
                }
                if (e.keyCode == 88) {//x：剪切
                    $('#zm-component-edit').hide();
                    $('.zm-component-settingPanel').remove();
                    zmEditor.component.options.cut();
                }
                if (e.keyCode == 86) {//v：粘贴
                    $('.zm-component-settingPanel').remove();
                    zmEditor.component.options.paste();
                }
                if (e.keyCode == 89) {//y:下一步
                    $('.zm-component-settingPanel').remove();
                    zmEditor.component.options.nextStep();
                }
                if (e.keyCode == 90) {//z：上一步
                    $('.zm-component-settingPanel').remove();
                    zmEditor.component.options.prevStep();
                }
            }

            if (e.keyCode == 27) {//ESC
                $('.zm-dialog-box').remove();
            }
            if (e.keyCode == 46) { //del
                zmEditor.component.options.delete(nowBox1)
            }
            if (e.keyCode == 13) { //enter
                $('.zm-dialog-btnOK').click();
            }
            //上下左右键改变组件位置
            if (e.keyCode >= 37 && e.keyCode <= 40) {
                $('#zm-component-edit').hide();
                var origin = $('.zm-row:eq(0)').offset();
                var originX = origin.left;
                var originY = origin.top;
                var left = nowBox1.offset().left;
                var top = nowBox1.offset().top;
                if (e.keyCode == 37) { //left
                    nowBox1.offset({'left': left - 1});
                    nowBox1.find(".zm-component-location-x").html(left - originX - 1)
                }
                if (e.keyCode == 38) { //up
                    nowBox1.offset({'top': top - 1});
                    nowBox1.find(".zm-component-location-y").html(top - originY - 1)
                }
                if (e.keyCode == 39) { //right
                    nowBox1.offset({'left': left + 1});
                    nowBox1.find(".zm-component-location-x").html(left - originX + 1);
                }
                if (e.keyCode == 40) { //down
                    nowBox1.offset({'top': top + 1});
                    nowBox1.find(".zm-component-location-y").html(top - originY + 1)
                }
                return false;
            }

            if (e.keyCode == 16) {//shift
                zmEditor.flag.isShiftKeyDown = true;
            }
        }
        // else{
        //     if (e.ctrlKey == true) {//ctrl
        //         if (e.keyCode == 88) {//x：剪切
        //             zmEditor.action.save();
        //         }
        //         if (e.keyCode == 86) {//v：粘贴
        //             zmEditor.action.save();
        //         }
        //         if (e.keyCode == 89) {//y:下一步
        //             zmEditor.action.save();
        //         }
        //         if (e.keyCode == 90) {//z：上一步
        //             zmEditor.action.save();
        //         }
        //     }
        // }
    }
}).keyup(function (e) {
    if($('.zm-component-settingPanel').length==0) {
        var nowBox1 = zmEditor.component.nowBox1(zmEditor.component.nowEdit());
        if(nowBox1.find('.zm-component-main:eq(0)').children().attr('contenteditable')=='false') {
            if (e.keyCode >= 37 && e.keyCode <= 40) {
                zmEditor.component.showOption(zmEditor.component.nowBox1())
            }
            if (e.keyCode == 16) {
                zmEditor.flag.isShiftKeyDown = false;
            }
        }
    }
});
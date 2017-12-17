var lang_flag = 0;
timeline_contentWrite();
$('.cn').click(function(){
    lang_flag = 0;
    timeline_contentWrite();
});
$('.en').click(function(){
    lang_flag = 1;
    timeline_contentWrite();
});

function timeline_contentWrite() {
    //时间轴填写内容
    for(item in timelineData) {
        var timeline_length = timelineData[item].length;

        //timeline for循环写入内容
        function timeline_for(name) {
            for(var i=0; i < timeline_length; i++) {
                var timeline_content = timelineData[item][i];
                var itemClass_old = '.' + name;
                var itemClass = '.' + item;
                //修改class名
                $(itemClass_old).addClass(item);
                //写入内容
                $(itemClass).eq(i).html(timeline_content);
                $(itemClass).removeClass(item);
            };
        }

        if(lang_flag == 0) {
        //中文
            switch(item) {
                case 'timeline-month-cn':
                    timeline_for('timeline-month');
                break;
                case 'timeline-cap-right-cn':
                    timeline_for('timeline-cap-right');
                break;
                case 'timeline-cap-left-cn':
                    timeline_for('timeline-cap-left');
                break;
                case 'timeline-content-right-cn':
                    timeline_for('timeline-content-right');
                break;
                case 'timeline-content-left-cn':
                    timeline_for('timeline-content-left');
                break;
            }
        }else {
        //英文
            switch(item) {
                case 'timeline-month-en':
                    timeline_for('timeline-month');
                    break;
                case 'timeline-cap-right-en':
                    timeline_for('timeline-cap-right');

                    break;
                case 'timeline-cap-left-en':
                    timeline_for('timeline-cap-left');
                    break;
                case 'timeline-content-right-en':
                    timeline_for('timeline-content-right');
                    break;
                case 'timeline-content-left-en':
                    timeline_for('timeline-content-left');
                    break;
            }
        }

        //填写date和day
        for(var i=0; i < timeline_length; i++) {
            var timeline_content = timelineData[item][i];
            var itemClass = '.' + item;
            $(itemClass).eq(i).html(timeline_content);
        }

    }
}
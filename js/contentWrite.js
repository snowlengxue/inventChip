var lang_flag = 0;
contentWrite();
$('.cn').click(function(){
    lang_flag = 0;
    contentWrite();
});
$('.en').click(function(){
    lang_flag = 1;
    contentWrite();
});

function contentWrite() {
    $('.title').html(title[lang_flag]);
    $('.cn').html(cn[lang_flag]+'/');
    $('.en').html(en[lang_flag]);
    //首页大banner 大标题
    $('.hero-caption').html(hero_caption[lang_flag]);
    //首页大banner 小标题
    $('.hero-subhead').html(hero_subhead[lang_flag]);
    //首页大banner 了解详情按钮
    $('#getStarted').html(hero_getStarted[lang_flag]);
    //首页导航栏
    for(item in navData) {
        for(i in navData[item]) {
            var classN = '.' + i;
            $(classN).html(navData[item][i][lang_flag]);
        }
    }

    //首页各个板块标题
    for(item in adwordsData) {
        var classN = '.' + item;
        $(classN).html(adwordsData[item][lang_flag]);
    }


    //首页招聘信息
    for(item in jobsData) {
        for(i in jobsData[item]) {
            var id = '#' + i;
            $(id).html(jobsData[item][i][lang_flag]);
        }
    }
    $('.jobAdd').html(campnyInfo.add[lang_flag]);
    $('.more').html(more[lang_flag]);

    //首页联系我们
    $('#add').html(campnyInfo.add[lang_flag]);
    $('#tel').html(campnyInfo.tel);
    $('#email').html(campnyInfo.email);
    $('#frontPage').html(frontPage[lang_flag]);
};


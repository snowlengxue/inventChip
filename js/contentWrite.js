var lang_flag;
if(!(window.localStorage.lang_flag)) {
    window.localStorage.lang_flag = '0';
    lang_flag = 0;
    contentWrite();
}else if (window.localStorage.lang_flag == '1') {
    window.localStorage.lang_flag = '1';
    lang_flag = 1;
    contentWrite();
}else {
    window.localStorage.lang_flag = '0';
    lang_flag = 0;
    contentWrite();
}

$('.cn').click(function(){
    lang_flag = 0;
    window.localStorage.lang_flag = '0';
    contentWrite();
});
$('.en').click(function(){
    lang_flag = 1;
    window.localStorage.lang_flag = '1';
    contentWrite();
});

function contentWrite() {
/* ==================================================
    首页
================================================== */


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
    // for(item in navData) {
    //     for(i in navData[item]) {
    //         var classN = '.' + i;
    //         $(classN).html(navData[item][i][lang_flag]);
    //     }
    // }

    //ie 浏览器 首页导航栏
    $.each(navData,function (item) {
        $.each(navData[item],function (i) {
            var classN = '.' + i;
            $(classN).html(navData[item][i][lang_flag])
        });
    });

    //首页各个板块标题
    $.each(adwordsData,function(item) {
        var classN = '.' + item;
        $(classN).html(adwordsData[item][lang_flag]);
    });


    // for(item in adwordsData) {
    //     var classN = '.' + item;
    //     $(classN).html(adwordsData[item][lang_flag]);
    // }

    //首页招聘信息
    // $.each(jobsData,function (item) {
    //     $.each(jobsData[item],function (i) {
    //         var id = '#' + i;
    //         $(id).html(jobsData[item][i][lang_flag]);
    //     });
    // });

    //首页招聘信息
    $.each(jobsData,function (item) {
        var parentId = '#' + item;
        $.each(jobsData[item],function (i) {
            var parograph = '.' + i;
            $(parentId).find(parograph).html(jobsData[item][i][lang_flag]);
        });
    });


    // for(item in jobsData) {
    //     for(i in jobsData[item]) {
    //         var id = '#' + i;
    //         $(id).html(jobsData[item][i][lang_flag]);
    //     }
    // }
    $('.jobAdd').html(campnyInfo.add[lang_flag]);
    $('.more').html(more[lang_flag]);

    /* ==================================================
        行业信息
    ================================================== */
    var newsKeys = Object.keys(newsData.href);
    var h4Html1 = '<h4 class="panel panel-heading show keyi"><a class="color-black" href="';
    var h4Html2 = '" target="_blank">';
    var h4Html3 = '</a></h4>';
    for (var i = 0; i < newsKeys.length; i++) {
        var aLink = newsData["href"][i];
        var aCap = newsData["aCap"][i];
        var html = h4Html1 + aLink + h4Html2 + aCap + h4Html3;
        $('#hiddenresult1').prepend(html);
    };

    /* ==================================================
      技术文档
  ================================================== */
    var docKeys = Object.keys(docData.href);
    var doch4Html1 = '<h4 class="panel panel-heading show keyj"><a class="color-black" href="';
    var doch4Html2 = '" target="_blank">';
    var doch4Html3 = '</a></h4>';
    for (var j = 0; j < docKeys.length; j++) {
        var docaLink = docData["href"][j];
        var docaCap = docData["aCap"][j];
        var dochtml = doch4Html1 + docaLink + doch4Html2 + docaCap + doch4Html3;
        $('#hiddenresult2').prepend(dochtml);
    };

    //首页联系我们
    $('#add').html(campnyInfo.add[lang_flag]);
    $('#tel').html(campnyInfo.tel);
    $('#email').html(campnyInfo.email);
    $('#frontPage').html(frontPage[lang_flag]);
};


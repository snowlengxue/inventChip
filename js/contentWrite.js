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
    $('#title').html(title[lang_flag]);
    $('.cn').html(cn[lang_flag]+'/');
    $('.en').html(en[lang_flag]);

    $('.hero-caption').html(hero_caption[lang_flag]);
    $('.hero-subhead').html(hero_subhead[lang_flag]);
    $('#getStarted').html(hero_getStarted[lang_flag]);

    for(item in navData) {
        for(i in navData[item]) {
            var id = '#' + i;
            $(id).html(navData[item][i][lang_flag]);
        }
    }

    // for(item in adData) {
    //     var id = '#' + i;
    //     $(id).html(adData[item][lang_flag]);
    // }

    $('.inventChip').html(inventChip[lang_flag]);
    $('#add').html(campnyInfo.add[lang_flag]);
    $('#tel').html(campnyInfo.tel);
    $('#email').html(campnyInfo.email);
    $('#frontPage').html(frontPage[lang_flag]);
};


var lang_flag = 0;
text();
function text() {
    $('#lang').html(lang_flag);
    $('.like').html(like[lang_flag]);
    $('.love').html(love[lang_flag]);
};

$('.cn').click(function(){
    lang_flag = 0;
    text();
});
$('.en').click(function(){
    lang_flag = 1;
    text();
});



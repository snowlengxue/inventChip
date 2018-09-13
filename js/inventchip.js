
$(document).ready(function() {
    /* ==================================================
    about页面的动效及“回到顶层”按钮
================================================== */


    // Initiate superfish on nav menu
    $('.nav-menu').superfish({
        animation: {opacity:'show'},
        speed: 400
    });

    // Mobile Navigation
    if( $('#nav-menu-container').length ) {
        var $mobile_nav = $('#nav-menu-container').clone().prop({ id: 'mobile-nav'});
        $mobile_nav.find('> ul').attr({ 'class' : '', 'id' : '' });
        $('body').append( $mobile_nav );
        $('body').prepend( '<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>' );
        $('body').append( '<div id="mobile-body-overly"></div>' );
        $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');

        $(document).on('click', '.menu-has-children i', function(e){
            $(this).next().toggleClass('menu-item-active');
            $(this).nextAll('ul').eq(0).slideToggle();
            $(this).toggleClass("fa-chevron-up fa-chevron-down");
        });

        $(document).on('click', '#mobile-nav-toggle', function(e){
            $('body').toggleClass('mobile-nav-active');
            $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
            $('#mobile-body-overly').toggle();
        });

        $(document).click(function (e) {
            var container = $("#mobile-nav, #mobile-nav-toggle");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ( $('body').hasClass('mobile-nav-active') ) {
                    $('body').removeClass('mobile-nav-active');
                    $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
                    $('#mobile-body-overly').fadeOut();
                }
            }
        });
    } else if ( $("#mobile-nav, #mobile-nav-toggle").length ) {
        $("#mobile-nav, #mobile-nav-toggle").hide();
    }

    // Stick the header at top on scroll
    $("#header").sticky({topSpacing:0, zIndex: '50'});

    // Counting numbers

    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 1000
    });

    // Tooltip & popovers
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();

    // Background image via data tag
    $('[data-block-bg-img]').each(function() {
        // @todo - invoke backstretch plugin if multiple images
        var $this = $(this),
            bgImg = $this.data('block-bg-img');

        $this.css('backgroundImage','url('+ bgImg + ')').addClass('block-bg-img');
    });

    // jQuery counterUp
    if(jQuery().counterUp) {
        $('[data-counter-up]').counterUp({
            delay: 20,
        });
    }

    // Scroll Top link
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrolltop').fadeIn();
        } else {
            $('.scrolltop').fadeOut();
        }
    });

    $('.scrolltop, #logo a').click(function(){
        $("html, body").animate({
            scrollTop: 0
        }, 1000, 'easeInOutExpo');
        return false;
    });
    /* ==================================================
   页面跳转
================================================== */
    //获取参数 get parm
    var url = location.href;
    var tmp = url.split("?")[1];
    var parm = tmp.split("=")[1];

    $("li[class^='about_']").removeClass('active');
    $("li[class^='tech_']").removeClass('active');
    $("li[class^='product_']").removeClass('active');
    $('.tab-pane').removeClass('active in');

    switch(parm) {
        case "profile":
            active('profile');
            break;
        case "values":
            active('values');
            break;
        case "org":
            active('org');
            break;
        case "events":
            active('events');
            break;
        //technology 页面
        case "news":
            active('news');
            break;
        case "links":
            active('links');
            break;
        case "documentation":
            active('documentation');
            break;
        case "WBG":
            active('WBG');
            break;
        case "power":
            active('power');
            break;
        case "gate":
            active('gate');
            break;
        case "IPM":
            active('IPM');
            break;
        //product 页面
        case "1200V":
            active('1200V');
            break;
        case "650V":
            active('650V');
            break;
        case "gateDriver":
            active('gateDriver');
            break;
    }
});

function active(id) {
    $('#about_' + id).addClass('active');
    $('#tech_' + id).addClass('active');
    $('#product_' + id).addClass('active');
    $('#' + id).addClass('active in');
}
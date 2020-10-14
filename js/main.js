$(document).ready(function(){

    $('.icon img').each(function(){
        var $img = $(this);
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
        $.get(imgURL, function(data) {
            var $svg = $(data).find('svg');
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }
            $svg = $svg.removeAttr('xmlns:a');
            if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }
            $img.replaceWith($svg);
        }, 'xml');
    });


    $('.hamburger').click(function () {
        $('.mobile_menu').toggleClass('open');
        $('html').toggleClass('page-noscroll');

        $('.mobile_menu .mm_close').click(function () {
            $('.mobile_menu').removeClass('open');
            $('html').removeClass('page-noscroll');
        });
        return false;
    });
    $(document).on('click', function(e) {
        if (!$(e.target).closest(".mobile_menu.open").length) {
            $(".mobile_menu.open").removeClass('open');
            $("html").removeClass('page-noscroll');
        }
        e.stopPropagation();
    });


    var arrow='<span class="arrow"></span>';
    $('.main_menu .sub-menu').before(arrow);

    $('.search_btn').click(function(){
        $(this).parent().toggleClass('show');
    });
    $('.search_close').click(function(){
        $('.search_box').removeClass('show');
    });


    $('.main_menu .arrow').click(function(){
        $(this).next().slideToggle();
        $(this).toggleClass('act');
    });




    if($('.main_slider > div').length >1){
        $('.main_slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots:true,
            fade:true,
            //autoplay: true,
            //speed: 1000,
            //autoplaySpeed:9000,
            //dotsClass: 'custom_paging',
        });
    }




    $('.c_menu li>.arrow').click(function(){
        $(this).next().slideToggle();
        $(this).parent().toggleClass('act');
    });

    $('.c_menu_box').each(function(){
        var c_menu_head=$(this).find('.c_menu_head');
        $(c_menu_head).click(function(){
            $(c_menu_head).next().slideToggle();
        });
    });



    $(window).resize(function(){
        var c_menu_box1_head_width = $('.c_menu_box1 .c_menu_head').outerWidth();
        var c_menu_width = $('.c_menu_box1 .c_menu_body').outerWidth();
        var c_menu_top = $('.c_menu_box1').offset().top;
        var c_menu_left = $('.c_menu_box1').offset().left;
        var m_width = 1375 - c_menu_width;
        var m_left = c_menu_width + c_menu_left;
        $('.c_menu_box1 .sub_menu_box').css({
            'left': m_left+'px',
            'top': c_menu_top+'px',
            'max-width':m_width+'px'
            //'height': c_menu_height+'px',
        });

        var c_menu_box2_head_width = $('.c_menu_box2 .c_menu_head').outerWidth();
        var c_menu_top2 = $('.c_menu_box2').offset().top;
        var c_menu_left2 = $('.c_menu_box2').offset().left;
        var m_width2 = 1375 - c_menu_left2 -  c_menu_box1_head_width - 30;
        var m_left2 =  c_menu_left2 + c_menu_box2_head_width;
        $('.c_menu_box2 .sub_menu_box').css({
            'left': m_left2+'px',
            'top': c_menu_top2+'px',
            'max-width':m_width2+'px'
            //'height': c_menu_height+'px',
        });
    });
    $(window).resize();


    $('.product_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        //fade: true,
        asNavFor: '.product_slider_nav'
    });
    $('.product_slider_nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.product_slider',
        dots: false,
        arrows:true,
        //centerMode: true,
        focusOnSelect: true,
        vertical:true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 575,

                settings: {
                    slidesToShow: 3
                }
            }
        ]
    });



    $('.show_tags').click(function(){
        $('.tags_list li').removeClass('d-none');
        $(this).hide();
    });

    $('.show_subcat').click(function(){
        if($('#subcat').is(':visible')){
            $(this).text('Показать подкатегории');
            $('#subcat').slideUp();
        }else{
            $(this).text('Скрыть');
            $('#subcat').slideDown();
        }
    });

});



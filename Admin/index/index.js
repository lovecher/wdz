$(function () {
    // 大图swiper
    var swiper = new Swiper('.swiper-container', {
        speed:1000,
        loop: true,
        loopFillGroupWithBlank: false,
        autoplay: {
            delay: 300000000,
            stopOnLastSlide: false,
            disableOnInteraction: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    });
    $('.swiper-slide').mouseenter(function () {
        swiper.autoplay.stop();
    });
    $('.swiper-slide').mouseleave(function () {
        swiper.autoplay.start();
    });
    // 小图swiper
    var swiper1 = new Swiper('.swiper-container1', {
        speed:1000,
        slidesPerView: 4,
        spaceBetween: 20,
        slidesPerGroup: 4,
        loop: true,
        loopFillGroupWithBlank: false,
        pagination: {
            el: '.swiper-pagination1',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next1',
            prevEl: '.swiper-button-prev1'
        }
    });
    $(document).on('mouseenter','.swiper-slide-active',function () {
        $(this).find('.swiper_ban_trans').find('.mouse_move').css('animation','laihui 2.4s linear infinite')
    });
    $(document).on('mouseleave','.swiper-slide-active',function () {
        $(this).find('.swiper_ban_trans').find('.mouse_move').css('animation','none')
    });

    // 新闻大图移动
    $(document).on('mouseenter','.news_cont_left',function () {
        $('.left_smtit').css('transform','translate(10px,0)').css('transition','All 0.4s ease-in-out').
            css('color','#41d1aa')
    });
    $(document).on('mouseleave','.news_cont_left',function () {
        $('.left_smtit').css('transform','translate(0px,0)').css('transition','All 0.4s ease-in-out').
        css('color','#4c4c4c')
    });
    //小标题移动
    $(document).on('mouseenter','.news_cont_right ul li',function () {
        $(this).find('.time_right').find('p:first-child').css('transform','translate(10px,0)').css('transition','All 0.4s ease-in-out').
        css('color','#41d1aa')
    });
    $(document).on('mouseleave','.news_cont_right ul li',function () {
        $(this).find('.time_right').find('p:first-child').css('transform','translate(0px,0)').css('transition','All 0.4s ease-in-out').
        css('color','#4c4c4c')
    });
    // 新闻动态button
    $(document).on('mouseenter','.anim',function () {
        $(this).css('color','#fff');
        $('.anim_ac').css('width','152px').css('background-color','rgba(65,209,170,0.9)').css('border','none')
    });
    $(document).on('mouseleave','.anim',function () {
        $(this).css('color','#ccc');
        $('.anim_ac').css('width','0').css('background-color','#fff').css('border','none')
    });
    // 关于我们button
    $(document).on('mouseenter','.au_anmi',function () {
        $(this).css('color','#fff');
        $('.au_ac').css('width','152px').css('background-color','rgba(65,209,170,0.9)').css('border','none')
    });
    $(document).on('mouseleave','.au_anmi',function () {
        $(this).css('color','#ccc');
        $('.au_ac').css('width','0').css('background-color','#fff').css('border','none')
    });

});


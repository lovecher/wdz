$(function () {
    $(document).on('mouseenter', '.summarize_cont ul li', function () {
        $(this).find('.summarize_down').find('p:first-child').css('color', '#41d1aa');
    });
    $(document).on('mouseleave', '.summarize_cont ul li', function () {
        $(this).find('.summarize_down').find('p:first-child').css('color', '#333');
    });
    // 方案简介上浮动画
    $(document).on('mouseenter', '.case_cont ul li div', function () {
        let img_1 = $(this).find('img').attr('src').split('_')[0];
        $(this).find('img').attr('src', img_1 + '_2.png');
    });
    $(document).on('mouseleave', '.case_cont ul li div', function () {
        let img_1 = $(this).find('img').attr('src').split('_')[0];
        $(this).find('img').attr('src', img_1 + '_1.png');
    });
    //小标题移动
    $(document).on('mouseenter','.news_example ul li',function () {
        $(this).find('.examp_content').find('.examp_two p:first-child').css('transform','translate(10px,0)').css('transition','All 0.4s ease-in-out').
        css('color','#41d1aa')
    });
    $(document).on('mouseleave','.news_example ul li',function () {
        $(this).find('.examp_content').find('.examp_two p:first-child').css('transform','translate(0px,0)').css('transition','All 0.4s ease-in-out').
        css('color','#4c4c4c')
    });
    // 自定义滑动button
    $(document).on('mouseenter', '.anim', function () {
        $(this).css('color', '#fff');
        $(this).siblings('.anim_ac').css('width', '120px').css('background-color', 'rgba(65,209,170,0.9)').css('border', 'none')
    });
    $(document).on('mouseleave', '.anim', function () {
        $(this).css('color', '#ccc');
        $(this).siblings('.anim_ac').css('width', '0').css('background-color', '#fff').css('border', 'none')
    });
});
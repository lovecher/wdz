$(function () {
    // 方案简介上浮动画
    $(document).on('mouseenter','.case_cont ul li div',function () {
        let img_1 = $(this).find('img').attr('src').split('_')[0];
        console.log(img_1)
        $(this).find('img').attr('src',img_1+'_2.png');
    });
    $(document).on('mouseleave','.case_cont ul li div',function () {
        let img_1 = $(this).find('img').attr('src').split('_')[0];
        console.log(img_1)
        $(this).find('img').attr('src',img_1+'_1.png');
    })
});
$(function () {
    $(document).on('mouseenter','.img_1,.img_2,.img_3',function () {
        $(this).find('p:nth-child(2),p:nth-child(3)').css('color','#41d1aa')
    });
    $(document).on('mouseleave','.img_1,.img_2,.img_3',function () {
        $(this).find('p:nth-child(2),p:nth-child(3)').css('color','#333')
    })
});
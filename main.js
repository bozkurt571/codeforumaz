$(window).on('scroll', function(){
    if($(window).scrollTop()){
        $('.about-text').css('animation', 'txt 2s');
        $('.about-img').css('animation', 'img 2s');
    }
});

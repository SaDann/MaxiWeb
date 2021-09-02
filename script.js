$(document).ready(function(){
    $(window).scroll(function(){
        // NAVBAR BY DnSaDan
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // Scroll Show BY DnSaDan
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // SLIDE BY DnSaDan
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // REMOVER ANIMACAO SMOOTH BY DnSaDan
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // ADICIONAR ANIMACAO SMOOTH BY DnSaDan
        $('html').css("scrollBehavior", "smooth");
    });

    // MENU / NAV BAR BY DnSaDan
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // CAROUSEL BY DnSaDan
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
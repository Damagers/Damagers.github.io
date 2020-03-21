
document.addEventListener("DOMContentLoaded", function() {

    $(window).ready(function(){
        let windowWidth = $(window).width();
        if(windowWidth < 992) {
            $(".navigation").removeClass("header__nav");
            $(".navigation").addClass("burger-menu");

        }
        else { 
                $(".navigation").removeClass("burger-menu");
                $(".navigation").addClass("header__nav");
            }
      });
      $(window).resize(function(){
        let windowWidth = $(window).width();
        if(windowWidth < 992) {
            $(".navigation").removeClass("header__nav");
            $(".navigation").addClass("burger-menu");

        }
        else { 
                $(".navigation").removeClass("burger-menu");
                $(".navigation").addClass("header__nav");
            }
      });
    
    function burgerMenu(selector) {
        let menu = $(selector);
        let button = menu.find('.burger-menu__button');
        let links = menu.find('.nav__item');
        let overlay = menu.find('.burger-menu__overlay');
    
        button.on('click', (e) => {
            e.preventDefault();
            toggleMenu();
        });
    
        links.on('click', () => toggleMenu());
        overlay.on('click', () => toggleMenu());
    
        function toggleMenu() {
            menu.toggleClass('burger-menu_active');
    
            if (menu.hasClass('burger-menu_active')) {
                $('body').css('overflow', 'hidden');
                $('.h')
            }else {
                $('body').css('overflow', 'visible');
            }
        }
    }
    
    burgerMenu('.navigation');
    
    

});


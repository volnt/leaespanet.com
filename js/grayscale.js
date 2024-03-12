/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 700, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$(function() {
    $('.grid img').on('click', function() {
        $('.imagepreview').attr('src', $(this).attr('src'));
        $('#imagemodal').modal('show');
    });
});

// Init plugin mixitup
let mixer = mixitup( '.test-container', {
    load: {
        filter: '.general'
    }
} );

let buttons = document.querySelectorAll('.bouton')

buttons.forEach((button) => {
    button.addEventListener("click", ()=> {
        buttons.forEach((button) => {
            button.classList.remove("selected")
        })
        button.classList.add("selected")
    })
})

//BTN-Back-up

window.addEventListener('scroll', function() {
    let scro = document.getElementById('btn-scro');
    let posPortfolio = document.getElementById('portfolio')
    let scrollTop = window.pageYOffset || this.document.documentElement.scrollTop;
    let portfolioPosition = posPortfolio.getBoundingClientRect().top;

    if(scrollTop <= portfolioPosition + 3800){
        scro.classList.remove('btn-back-top-display')
    } else {
        scro.classList.add('btn-back-top-display')
    }


    if(scrollTop <= portfolioPosition + 4000){
        scro.classList.remove('btn-back-top')
    } else {
        scro.classList.add('btn-back-top')
    }
})
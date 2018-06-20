$(document).ready(function () {
    let autoplaySpeed;
    if ($(window).width() > 480) {
        autoplaySpeed = 4500;
    }
    else {
        autoplaySpeed = 2000;
    }

    $('.photo_carousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('#nav-bar').fadeIn(200);
            $('#nav-bar').css('display', 'flex');
        } else {
            $('#nav-bar').fadeOut(200);
        }
    });

    function close_accordion_section() {
        $('.accordion .accordion-section-title').removeClass('active');
        $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
    }

    $('.accordion-section-title').click(function (e) {
        // Grab current anchor value
        var currentAttrValue = $(this).attr('href');

        if ($(e.target).is('.active')) {
            close_accordion_section();
        } else {
            close_accordion_section();

            // Add active class to section title
            $(this).addClass('active');
            // Open up the hidden content panel
            $('.accordion ' + currentAttrValue).slideDown(300).addClass('open');
        }

        e.preventDefault();
    });
});
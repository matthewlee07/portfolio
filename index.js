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
});

function openInfo(event, section) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(section).style.display = "block";
    event.currentTarget.className += " active";
}

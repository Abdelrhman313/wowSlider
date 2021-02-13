$(() => {
    // Navigation
    links = [...$('nav ul li a')];
    links.forEach(link => {
        link.addEventListener('click', () => {
            target = link.dataset.class;
            section = document.querySelector(target);
            section.scrollIntoView({
                behavior: "smooth"
            });
        });
    });
    // Second sliders
    $('.sliders .slider #second-anim').owlCarousel({
        loop: true,
        margin: 0,
        dots: false,
        nav: false,
        mouseDrag: false,
        autoplay: true,
        smartSpeed: 450,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        },
        animateOut: 'flipOutY',
    });
    $('.sliders .slider #third-anim').owlCarousel({
        loop: true,
        margin: 0,
        dots: false,
        nav: false,
        mouseDrag: false,
        autoplay: true,
        smartSpeed: 450,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        },
        animateOut: 'slideOutUp',
    });

    // Third sliders
    $('.my-sliders .my-slider #fourth-anim').owlCarousel({
        loop: true,
        margin: 0,
        dots: false,
        nav: false,
        mouseDrag: false,
        autoplay: true,
        smartSpeed: 450,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        },
        animateOut: 'bounceOutLeft',
    });
    $('.my-sliders .my-slider #fifth-anim').owlCarousel({
        loop: true,
        margin: 0,
        dots: false,
        nav: false,
        mouseDrag: false,
        autoplay: true,
        smartSpeed: 450,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        },
        animateOut: 'rollOut',
    });
    $('.my-sliders .my-slider #sixth-anim').owlCarousel({
        loop: true,
        margin: 0,
        dots: false,
        nav: false,
        mouseDrag: false,
        autoplay: true,
        smartSpeed: 450,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        },
        animateOut: 'bounceOutRight',
    });

    // last sliders
    $('.last-sliders .last-slider #seven-anim').owlCarousel({
        loop: true,
        margin: 0,
        dots: false,
        nav: false,
        mouseDrag: false,
        autoplay: true,
        animateOut: 'rotateOut',
        smartSpeed: 450,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    $('.last-sliders .last-slider #eight-anim').owlCarousel({
        loop: true,
        margin: 0,
        dots: false,
        nav: false,
        mouseDrag: false,
        autoplay: true,
        animateOut: 'rotateOutDownLeft',
        smartSpeed: 450,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    $('.last-sliders .last-slider #nine-anim').owlCarousel({
        loop: true,
        margin: 0,
        dots: false,
        nav: false,
        mouseDrag: false,
        autoplay: true,
        animateOut: 'lightSpeedOut',
        smartSpeed: 450,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    $('.last-sliders .last-slider #ten-anim').owlCarousel({
        loop: true,
        margin: 0,
        dots: false,
        nav: false,
        mouseDrag: false,
        autoplay: true,
        animateOut: 'bounceOutDown',
        smartSpeed: 450,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    //nice scroll
    $('body').niceScroll({
        cursorcolor: "#4caf50",
        cursorwidth: "15px",
        background: "rgba(255, 255, 255, 0.4)",
        zIndex: 20000
    });
})
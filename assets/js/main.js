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

    // Third sliders
    firstCarouselOptions = {
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
    };
    secondCarouselOptions = {
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
    };
    thirdCarouselOptions = {
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
    };

    $('.my-sliders .my-slider #fourth-anim,.my-sliders .my-slider #anim5,.my-sliders .my-slider #anim8').owlCarousel(firstCarouselOptions);
    $('.my-sliders .my-slider #fifth-anim,.my-sliders .my-slider #anim6,.my-sliders .my-slider #anim9').owlCarousel(secondCarouselOptions);
    $('.my-sliders .my-slider #sixth-anim,.my-sliders .my-slider #anim7,.my-sliders .my-slider #anim10').owlCarousel(thirdCarouselOptions);

    // last sliders
    Options1 = {
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
    };
    Options2 = {
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
    };
    Options3 = {
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
    };
    Options4 = {
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
    };
    $('.last-sliders .last-slider #seven-anim,.last-sliders .last-slider #anim421,.last-sliders .last-slider #anim431').owlCarousel(Options1);
    $('.last-sliders .last-slider #eight-anim,.last-sliders .last-slider #anim422,.last-sliders .last-slider #anim432').owlCarousel(Options2);
    $('.last-sliders .last-slider #nine-anim,.last-sliders .last-slider #anim423,.last-sliders .last-slider #anim433').owlCarousel(Options3);
    $('.last-sliders .last-slider #ten-anim,.last-sliders .last-slider #anim424,.last-sliders .last-slider #anim434').owlCarousel(Options4);

    //nice scroll
    $('body').niceScroll({
        cursorcolor: "#4caf50",
        cursorwidth: "15px",
        background: "rgba(255, 255, 255, 0.4)",
        zIndex: 20000
    });
})
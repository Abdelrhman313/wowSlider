$(() => {
    // Scroll Content
    mainSlickOptions={
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        dots: false,
        easing: 'linear',
        infinite: true,
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: 'linear',
        verticalReverse: false,
    }
    $('.mySlick').slick(mainSlickOptions);
    
    // Navigation
    links = [...$('nav ul li a')];
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            target = link.dataset.class;
            section = document.querySelector(target);
            section.scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // SideBar Carousel
    sidebarOptions = {
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        dots: false,
        easing: 'linear',
        infinite: true,
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        cssEase: 'linear',
    }

    sideOptionLeft = sidebarOptions;
    sideOptionLeft['verticalReverse'] = true;
    sideOptionLeft['asNavFor'] = '.allItems.right';
    $('.allItems.left').slick(sideOptionLeft);

    sideOptionRight = sidebarOptions;
    sideOptionRight['verticalReverse'] = false;
    sideOptionRight['asNavFor'] = '.allItems.left';
    $('.allItems.right').slick(sideOptionRight);

    // Main Slider Options 
    mainOptions = {
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
    }

    // Third sliders
    firstCarouselOptions = mainOptions;
    firstCarouselOptions['animateOut'] = 'animate__bounceOutLeft';
    $('.my-sliders .my-slider .fourth-anim').owlCarousel(firstCarouselOptions);

    secondCarouselOptions = mainOptions;
    secondCarouselOptions['animateOut'] = 'animate__bounceOut';
    $('.my-sliders .my-slider .fifth-anim').owlCarousel(secondCarouselOptions);

    thirdCarouselOptions = mainOptions;
    thirdCarouselOptions['animateOut'] = 'animate__bounceOutRight';
    $('.my-sliders .my-slider .sixth-anim').owlCarousel(thirdCarouselOptions);

    fourthCarouselOptions = mainOptions;
    fourthCarouselOptions['animateOut'] = 'animate__backOutLeft';
    $('.my-slider .anim5').owlCarousel(fourthCarouselOptions);

    fifthCarouselOptions = mainOptions;
    fifthCarouselOptions['animateOut'] = 'animate__backOutDown';
    $('.my-slider .anim6').owlCarousel(fifthCarouselOptions);

    sixthCarouselOptions = mainOptions;
    sixthCarouselOptions['animateOut'] = 'animate__backOutRight';
    $('.my-slider .anim7').owlCarousel(sixthCarouselOptions);

    seventhCarouselOptions = mainOptions;
    seventhCarouselOptions['animateOut'] = 'animate__rotateOutUpLeft';
    $('.my-slider .anim8').owlCarousel(seventhCarouselOptions);

    eighthCarouselOptions = mainOptions;
    eighthCarouselOptions['animateOut'] = 'animate__rotateOut';
    $('.my-slider .anim9').owlCarousel(eighthCarouselOptions);

    ninethCarouselOptions = mainOptions;
    ninethCarouselOptions['animateOut'] = 'animate__rotateOutDownRight';
    $('.my-slider .anim10').owlCarousel(ninethCarouselOptions);

    // last sliders
    $slider1 = mainOptions;
    $slider1['animateOut'] = 'animate__zoomOutLeft';
    $('.last-sliders .last-slider .seven-anim').owlCarousel($slider1);

    $slider2 = mainOptions;
    $slider2['animateOut'] = 'animate__zoomOutDown';
    $('.last-sliders .last-slider .eight-anim').owlCarousel($slider2);

    $slider3 = mainOptions;
    $slider3['animateOut'] = 'animate__zoomOutUp';
    $('.last-sliders .last-slider .nine-anim').owlCarousel($slider3);

    $slider4 = mainOptions;
    $slider4['animateOut'] = 'animate__zoomOutRight';
    $('.last-sliders .last-slider .ten-anim').owlCarousel($slider4);

    $slider5 = mainOptions;
    $slider5['animateOut'] = 'animate__fadeOutTopLeft';
    $('.last-sliders .last-slider .anim421').owlCarousel($slider5);

    $slider6 = mainOptions;
    $slider6['animateOut'] = 'animate__fadeOutTopRight';
    $('.last-sliders .last-slider .anim422').owlCarousel($slider6);

    $slider7 = mainOptions;
    $slider7['animateOut'] = 'animate__fadeOutBottomLeft';
    $('.last-sliders .last-slider .anim423').owlCarousel($slider7);

    $slider8 = mainOptions;
    $slider8['animateOut'] = 'animate__fadeOutBottomRight';
    $('.last-sliders .last-slider .anim424').owlCarousel($slider8);


    $slider9 = mainOptions;
    $slider9['animateOut'] = 'animate__lightSpeedOutLeft';
    $('.last-sliders .last-slider .anim431').owlCarousel($slider9);

    $slider10 = mainOptions;
    $slider10['animateOut'] = 'animate__hinge';
    $('.last-sliders .last-slider .anim432').owlCarousel($slider10);

    $slider11 = mainOptions;
    $slider11['animateOut'] = 'animate__jackInTheBox';
    $('.last-sliders .last-slider .anim433').owlCarousel($slider11);

    $slider12 = mainOptions;
    $slider12['animateOut'] = 'animate__lightSpeedOutRight';
    $('.last-sliders .last-slider .anim434').owlCarousel($slider12);

    //nice scroll
    $('body').niceScroll({
        cursorcolor: "#4caf50",
        cursorwidth: "15px",
        background: "rgba(255, 255, 255, 0.4)",
        zIndex: 20000
    });
})
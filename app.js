// slider block

new Swiper('.swiper',{
    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
    },
    loop:true,
    pagination:{
        el:".swiper-pagination",
        clickable:true,
    },
    scrollbar:{
        el:".swiper-scrollbar",
        draggable:true,
    },
     breakpoints:{
            320:{
                slidesPerView:1,
            },
            480:{
                slidesPerView:2,
            },
            992:{
                slidesPerView:3,
            }
        },
        simulateTouch:true,
        touchRatio:1,
        touchAngle:45,
        grabCursor:true,
        keyboard:{
        
            enabled:true,
            onlyInViewport:true,
            pageUpDown:true,
    
        },
        mousewheel:{
            sensitivity:1,
            eventsTarget:".swiper"
        },
        freemode:true,

})
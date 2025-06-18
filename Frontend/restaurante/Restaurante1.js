var swiper1 = new Swiper (".mySwiper-1", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop:true,
    pagination: {
        el:".swiper-pagination",
        clickable:true,
    },
    navigation: {
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    }
});

var swiper2 = new Swiper (".mySwiper-2", {
    slidesPerView: 1, // Cambiado a 1 para evitar el warning de loop
    spaceBetween: 20,
    loop:true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
    breakpoints : {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        }
    }
});

let tabInputs = document.querySelectorAll('.tabInput');
tabInputs.forEach(function(input) {
    input.addEventListener('change', function() {
        let id = input.value;
        let thisSwiper = document.getElementById('swiper' + id);
        if (thisSwiper && thisSwiper.swiper) {
            thisSwiper.swiper.update();
        }
    });
});


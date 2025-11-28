
const text = "SXdesign"
const speed = 200
const element = document.getElementById("typewriter")

let index = 0

function typeWriter() {
    if (index < text.length) {
        element.innerHTML += text[index]
        index++
        setTimeout(typeWriter, speed)
    }
}

typeWriter()

const swiper = new Swiper(".mySwiper", {
    direction: "horizontal",
    slidesPerView: "auto",
    spaceBetween: 30,
    centeredSlides: true,
    allowTouchMove: true,

    freeMode: {
        enabled: false,
    },

    speed: 400,

    // Настройки колеса мыши
    mousewheel: {
        enabled: true,
        sensitivity: 2, // Можно настроить чувствительность (чем меньше число, тем медленнее)
        thresholdDelta: 50,
        thresholdTime: 100,
    },

    loop: true,

    navigation: {
        nextEl: ".swiper-button-next", // Класс кнопки "Вперед"
        prevEl: ".swiper-button-prev", // Класс кнопки "Назад"
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },

    breakpoints: {
        1200: {
            mousewheel: {
                enabled: false,
            },
        }
    }
});

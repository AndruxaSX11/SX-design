
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
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    allowTouchMove: true,

    freeMode: {
        enabled: false,
        momentum: false, // <--- ГЛАВНАЯ НАСТРОЙКА: отключает инерцию
        momentumBounce: false, // Отключает "отпружинивание" в конце
    },

    speed: 600,
    preventInteractionOnTransition: true,

    // Настройки колеса мыши
    mousewheel: {
        enabled: true,
        sensitivity: 0.1, // Можно настроить чувствительность (чем меньше число, тем медленнее)
        thresholdDelta: 50,
        thresholdTime: 100,
    },
});

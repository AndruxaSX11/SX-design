const track = document.querySelector('.carousel-track')
const cards = document.querySelectorAll('.card')
const prevButton = document.querySelector('.prev-button')
const nextButton = document.querySelector('.next-button')

let activeIndex = Math.floor(cards.length / 2)

function updateCarousel() {
    cards.forEach((card, index) => {
        if (index === activeIndex) {
            card.classList.add('active')
        } else {
            card.classList.remove('active')
        }
    })

    const cardWidth = cards[0].offsetWidth
    const gap = 70

    const currentCardPosition = activeIndex * (cardWidth + gap)
    const centerOffset = cardWidth / 2

    const translateValue = -(currentCardPosition + centerOffset)

    track.style.transform = `translateX(${translateValue}px)`
}

prevButton.addEventListener('click', () => {
    if (activeIndex > 0) {
        activeIndex--
        updateCarousel()
    }
})

nextButton.addEventListener('click', () => {
    if (activeIndex < cards.length - 1) {
        activeIndex++
        updateCarousel()
    }
})

cards.forEach((card, index) => {
    card.addEventListener('click', () => {
        activeIndex = index;
        updateCarousel()
    })
})

updateCarousel()

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


const images = [
    "css/img/how.jpg",
    "css/img/bloom.jpg",
    "css/img/rose_1.jpg",
    "css/img/japanese.jpg",
    "css/img/choker.jpg",
    "css/img/life.jpg",
    "css/img/face.jpg",
    "css/img/statue.jpg",
    "css/img/noworld.jpg",
    "css/img/baloon.jpg",
    "css/img/smoke.jpg",
    "css/img/banana.jpg"
]

var topBar = document.getElementById("topbar")
var info = document.getElementById("info"),
    cross = document.getElementById("cross"),
    infoTrigger = document.getElementById("info-trigger")

let cache = () => {
    images.forEach(img => {
        const cachedImg = new Image()
        cachedImg.src = img
    })
}

let loadImages = () => {
const allImages = document.querySelectorAll(".content__container__img");
    allImages.forEach(img => {
        const newImage = new Image()
        newImage.src = img.src
        
        var imgContainer = img.parentElement
        var spinnerContainer = document.createElement("div"),
            spinner = document.createElement("div")
        spinnerContainer.classList.add("spinner__container")
        spinner.classList.add("spinner")
        spinnerContainer.appendChild(spinner)
        imgContainer.appendChild(spinnerContainer)
        
        newImage.onload = () => {
            spinnerContainer.remove()
        }
    })
}
        
loadImages()

window.onload = () => {
    cache()
}

window.onscroll = () => {
    var offset = document.documentElement.scrollTop
    if (offset > 10) {
        topBar.style.boxShadow = "0 5px 10px rgba(0,0,0,.1)"
    } else {
        topBar.style.boxShadow = "none"
    }
}

cross.addEventListener("click", () => {
    info.classList.remove("show")
    info.classList.add("hide")
    infoTrigger.style.display = 'block'
})

infoTrigger.addEventListener("click", () => {
    info.classList.remove("hide")
    info.classList.add("show")
    infoTrigger.style.display = 'none'
})

const menuTag = document.querySelector("main div.menu-tag_wrapper")
const menuText = document.querySelector("main div.menu-tag_text ")
const mainTag = document.querySelector("main.main-wrapper")
const navTag = document.querySelector("div.nav_component")

// function to add 'is-open' to main-wrapper which translates the main-wrapper 15rem to the right
const closeMenu = function() {
    mainTag.classList.toggle("is-open")

    if (mainTag.classList.contains("is-open")) {
        menuText.innerHTML = "CLOSE"
    } else {
        menuText.innerHTML = "OPEN"
    }
    
}

// pick all images and layer them using z-index
const slideArea = document.querySelector("div.home-header_image-wrapper")
// images become a list
const images = slideArea.querySelectorAll("img")

// keeping track of current image and z-index
let currentSlide = 0
let z = 1

// when slieArea is clicked, change the slide based on z-index
slideArea.addEventListener("click", function () {
    currentSlide += 1
    z += 1

    if (currentSlide > images.length - 1) {
        currentSlide = 1
      }
      
    images[currentSlide].style.zIndex = z
})



// event listener for the menu icon
menuTag.addEventListener("click", function() {
    closeMenu()
})

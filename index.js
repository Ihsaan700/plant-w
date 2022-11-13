const menuTag = document.querySelector("div img.menu-tag_icon")
const mainTag = document.querySelector("main.main-wrapper")
const navTag = document.querySelector("div.nav_component")

// function to add 'is-open' to main-wrapper which translates(moves) the main-wrapper 15rem to the right
const closeMenu = function() {
    mainTag.classList.toggle("is-open")
}

// event listener for the menu icon
menuTag.addEventListener("click", function() {
    closeMenu()
})
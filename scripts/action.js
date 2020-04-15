let closeBar = (e) => {
    console.log(e);
    e.parentNode.parentNode.style.animation = 'hide 500ms ease-in-out forwards';
    e.parentNode.style.display = 'none'
}
let sidebar = () => {
    document.querySelector('#sidebar').style.display = "block";
    document.querySelector('#menu-icon').style.display = 'none';
    document.querySelector('#sidebar').style.animation = "revealSidebar 700ms ease-in-out forwards";
    document.querySelector('#sidebar').style.animationPlayState = 'running';
    document.querySelector('#box').style.animation = 'shiftBoxRight 700ms ease-in-out forwards'
}
let hideBar = () => {
    document.querySelector('#menu-icon').style.display = 'block';
    document.querySelector('#sidebar').style.animation = "hideSidebar 700ms ease-in-out forwards";
    document.querySelector('#box').style.animation = 'shiftBoxLeft 700ms ease-in-out forwards';
    setTimeout(() => { document.querySelector('#sidebar').style.display = "none" }, 1000)
}
var initial_y = 0;
var POS;
var pagination = document.querySelector(".bar.dblue.n-space.pagination");
window.onscroll = (e) => {
    var ch = document.querySelectorAll(".jumbo-content");
    var current_y = window.pageYOffset;
    var moved = current_y - initial_y;
    moved *= 0.1;
    if ((moved) > 0) {
        POS = "DOWN";
        ch.forEach((ind) => { ind.style.transform = "translateY(-" + moved.toString() + "px)" })
    } else {
        POS = "UP";
        ch.forEach((ind) => { ind.style.transform = "translateY(" + moved.toString() + "px)" })
    }
    changeColor(POS)
}
let changeColor = (pos) => { if (pos == "DOWN") { pagination.style.background = "#07658a" } else { pagination.style.background = "#0349ca" } }
window.onload = () => {
    if (window.location.href.endsWith("/") || window.location.href.endsWith("index.html")) {
        slideshow(1, ".jumbo-content.bshade.master", 4, "jpg", 5000);
        var jumboBoxes = document.querySelectorAll(".jumbo-content");
        jumboBoxes.forEach((elem) => {
            var num = elem.getAttribute("data-box");
            elem.style.transition = "all " + num * 0.25 + "s ease-in-out"
        })
    }
}
let slideshow = (slide_start, target_container, max_slides, ext, interval) => {
    var slides_container = document.querySelector(target_container);
    var slide = slide_start;
    var MAX_SLIDES = max_slides;
    var EXT = ext;
    setInterval(() => {
        slides_container.animate([{ "opacity": 0.7 }, { "opacity": 1.0 }], { duration: 1000, iterations: 1 });
        slides_container.style.backgroundImage = "url('../assets/images/slides/img" + slide.toString() + "." + EXT + "')";
        slide = slide == MAX_SLIDES ? 1 : slide + 1
    }, interval)
}
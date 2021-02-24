let button = document.querySelector('#menu_burger');

let navigation = document.querySelector('.header__navigation');
let menuClose = document.querySelector('.header__navigation_close');
let sectionOverlay = document.querySelector('.section__overlay');

navigation.style.display = "none";

button.addEventListener('click', function () {
    if (navigation.style.display == "none") {
        if (sectionOverlay)
            sectionOverlay.style.display = "block";
        navigation.style.display = "block";
        navigation.style.zIndex = "1";
    }
    else {
        navigation.style.display = "none";
        if (sectionOverlay)
            sectionOverlay.style.display = "none";
    }
});

menuClose.addEventListener("click", function () {
    if (sectionOverlay)
        sectionOverlay.style.display = "none";
    navigation.style.display = "none";
})
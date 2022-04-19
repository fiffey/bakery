
let header = document.querySelector('.header');

window.onscroll = function () {
    "use strict";
    if (window.pageYOffset > header.clientHeight) {

        header.classList.add("scroll");
    } else {

        header.classList.remove("scroll");
    }
};


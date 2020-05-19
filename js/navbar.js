window.addEventListener('scroll', function (e) {
    if(document.documentElement.scrollTop !== 0) {
        document.querySelector(".main-nav").classList.remove("is-primary");
        document.querySelector(".main-nav").classList.add("is-dark");
    } else {
        document.querySelector(".main-nav").classList.add("is-primary");
        document.querySelector(".main-nav").classList.remove("is-dark");
    }
});
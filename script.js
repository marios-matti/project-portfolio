let menubtn = document.querySelector('.menu-btn');
let lest = document.querySelector('.list');
menubtn.addEventListener('click', function () {
    lest.classList.toggle('active');
    menubtn.classList.toggle('active');
})
let btnUp = document.querySelector('.to-top');
document.addEventListener('scroll', function () {
    if (window.pageYOffset >= 400) {
        btnUp.classList.add('show-btn');
    } else {
        btnUp.classList.remove('show-btn');
    }
    console.log(window.pageYOffset);
})
btnUp.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
})
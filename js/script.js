// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector
('.navbar-nav');

//Ketika hamburger menu di klik
document.querySelector('#hamburger-menu').
onclick = () => {
    navbarNav.classList.toggle('active');
};



//Toggle class active untuk link gdrive
const link = document.querySelector('.link');

//Ketika tautan di klik
document.querySelector('#tautan').
onclick = (e) => {
    link.classList.toggle('active');
    e.preventDefault();
};

//Klik diluar elemen 
const hm = document.querySelector('#hamburger-menu'); //hm = hamburger menu
const tautan = document.querySelector('#tautan');

document.addEventListener('click', function(e) {
    if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
    if (!tautan.contains(e.target) && !link.contains(e.target)) {
        link.classList.remove('active');
    }
})

//Clear Form Before Unload
window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
        form.reset();
    }
}




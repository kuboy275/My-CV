// show btn back top


const btnTop = document.querySelector(".back__top");
window.addEventListener("scroll", function() {
    if (this.scrollY > 500) {
        btnTop.classList.add("active");
    } else {
        btnTop.classList.remove("active");
    }
});


// Add class sider nav list when click and srcoll page

let sections = document.querySelectorAll('.section_item');
let links = document.querySelectorAll('.sidebar__nav li:not(:last-child) a');
window.scroll(0, 10);

function activeClassLink(link_item) {
    links.forEach((item) => { item.classList.remove('active') });
    link_item.classList.add('active');
};


window.onscroll = () => {
    sections.forEach((sec_item) => {

        let scrollTop = window.scrollY;
        let sec_top = sec_item.offsetTop;
        let sec_height = sec_item.offsetHeight;
        let sec_id = sec_item.getAttribute('id');


        if (scrollTop + 200 >= sec_top && scrollTop < sec_top + sec_height) {
            let target_href = document.querySelector(`[href="#${sec_id}"]`);
            activeClassLink(target_href);
        }

    })
}

links.forEach((item) => {
    item.addEventListener("click", function() {
        activeClassLink(item);
    });
});

// button dark mode
const toggle = document.querySelector('.dark__switch .checkbox');
const currentThemeLocalStorage = localStorage.getItem('theme');
if (currentThemeLocalStorage) {
    document.documentElement.setAttribute('data-theme', currentThemeLocalStorage);
    if (currentThemeLocalStorage == 'dark') {
        toggle.checked = true;
    }
}
toggle.addEventListener('change', function(e) {
    // if checked input == true 
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light')
    }
})

// button hambuger
const btnHambuger = document.querySelector(".nav__icon");
const sidebar = document.querySelector(".sidebar");
const mainContent = document.querySelector(".content");

if (sidebar.classList.contains('active')) {
    btnHambuger.classList.add('open');
} else {
    btnHambuger.classList.remove('open');
}

window.addEventListener('resize', function() {
    if (window.innerWidth < 767) {
        console.log(true);
        sidebar.classList.remove('active');
        mainContent.classList.add('expand');
        btnHambuger.classList.remove('open');
    }
});


btnHambuger.addEventListener("click", function() {
    btnHambuger.classList.toggle('open');
    sidebar.classList.toggle('active');
    mainContent.classList.toggle('expand');
})



// TYPING EFFECT

const typedText = document.querySelector(".header__text--effect .typed--text");
const cursorText = document.querySelector(".header__text--effect .cursor--text");

const textArray = ["Cong Nghia.", "Developer.", "love Front-end."];
const typingDelay = 50;
const erasingDelay = 50;
const newTextDelay = 2000;
const firstElementDelay = 0;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorText.classList.contains('typing--stop')) {
            cursorText.classList.add('typing--stop')
        };
        typedText.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
        // console.log(charIndex, textArray[textArrayIndex].length);
    } else {
        cursorText.classList.remove('typing--stop');
        setTimeout(removeText, newTextDelay);
    }
}

function removeText() {
    if (charIndex > 0) {
        if (!cursorText.classList.contains('typing--stop')) {
            cursorText.classList.add('typing--stop')
        };
        typedText.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(removeText, erasingDelay);
    } else {
        cursorText.classList.remove('typing--stop');
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) {
            textArrayIndex = 0;
        }
        setTimeout(type, typingDelay + 1000);
    }

};

document.addEventListener("DOMContentLoaded", function() {
    if (textArray.length) setTimeout(type, newTextDelay + 250);
})

// TABS WORK

let tabs = document.querySelectorAll(".tab-link");
let tabContents = document.querySelectorAll(".work__show--wrap");

tabs.forEach((tab) => {
    tab.addEventListener('click', function(e) {

        e.preventDefault();
        // get value data-target on tab link
        let tabItem = e.currentTarget;
        let data_target = tabItem.dataset.target;

        tabContents.forEach((tabContent) => {
            tabContent.classList.remove('active');
        })

        tabs.forEach((el) => {
            el.classList.remove('active');
        })

        document.querySelector('#' + data_target).classList.add('active');
        tabItem.classList.add('active');

    })
})
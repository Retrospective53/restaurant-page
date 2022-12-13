import header from './pages/header'
import home from './pages/home'
import menu from './pages/menu'
import about from './pages/about'
import '../src/styles/index.css'

header();
home();
menu();
about();

// const tabContent = document.getElementsByClassName('tabContent');
// for (let i = 0; i < tabContent.length; i++) {
//     tabContent[i].style.display = 'none';
// }

const tabs = document.querySelectorAll('[data-tab-target');
const tabContents = document.querySelectorAll('.tabContent');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget);
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active');
        })
        tabs.forEach(tab => {
            tab.classList.remove('active');
        })
        tab.classList.add('active');
        target.classList.add('active');
    })
}) 


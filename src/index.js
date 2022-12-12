import './style.css';

alert('Ayy Lmao');
console.log('asdasda');

// selector
const body = document.querySelector('body');

const title = document.createElement('h1');
title.textContent = 'Restaurant Menu';
const content = document.createElement('div');
const tab1 = document.createElement('h2');
tab1.textContent = 'Home';
const tab2 = document.createElement('h2');
tab2.textContent = 'Menu';
const tab3 = document.createElement('h2');
tab3.textContent = 'About';
const text1 = document.createElement('p');
text1.textContent = 'asdasdasdsa';
const text2 = document.createElement('p');
text2.textContent = 'hahahahahaha';
const text3 = document.createElement('p');
text2.textContent = 'lololololololol';

tab1.classList.add('tabContent');
tab2.classList.add('tabContent');
tab3.classList.add('tabContent');


// get all elements with class tabcontent and hide them
function openPage() {

    const tabContent = document.getElementsByClassName('tabContent');
    for (let i = 0; i < tabContent.length ; i++) {
        tabContent[i].style.display = 'none';
    }
}

openPage();

body.appendChild(title);
body.appendChild(content);
content.appendChild(tab1);
content.appendChild(tab2);
content.appendChild(tab3);

tab1.appendChild(text1);
tab2.appendChild(text2);
tab3.appendChild(text3);

// const tabbed = 
import './style.css';
import koishi from '../src/images/70531218_p0.png';

console.log('asdasda');

const body = document.querySelector('body');
const content = document.getElementById('content');

// Header
const header = document.createElement('div');
header.classList.add('header');
// header.textContent = 'Header';

const headerButtons = document.createElement('ul');
const headerHomeButton = document.createElement('li');
headerHomeButton.textContent = 'Home';
const headerMenuButton = document.createElement('li');
headerMenuButton.textContent = 'Menu';
const headerAboutButton = document.createElement('li');
headerAboutButton.textContent = 'About';

headerButtons.appendChild(headerHomeButton);
headerButtons.appendChild(headerMenuButton);
headerButtons.appendChild(headerAboutButton);
header.appendChild(headerButtons);

content.appendChild(header);


// home
const backgroundHome = document.createElement('img');
backgroundHome.id="backgroundHome";
backgroundHome.src = koishi;
content.appendChild(backgroundHome); 

const paragraphContainer = document.createElement('div');
paragraphContainer.classList.add('paragraphContainer')
const paragraph = document.createElement('p');
paragraph.textContent = "Sip into something extraordinary with our delicious, hand-crafted blends of tea! Made with only the finest ingredients and steeped to perfection, our tea will awaken your senses and transport you to a world of unmatched flavor and aroma. Whether you prefer traditional black tea, or something more exotic like green tea or herbal tea, we have something for every palate. So why not treat yourself to a cup of our tasty tea today? You deserve it!"

paragraphContainer.appendChild(paragraph);
content.appendChild(paragraphContainer);

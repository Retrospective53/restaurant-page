import '../styles/header.css';


const headerLoad = function() {
    // Header
    const header = document.createElement('div');
    header.classList.add('header');

    // header.textContent = 'Header';

    const headerButtons = document.createElement('ul');
    const headerHomeButton = document.createElement('li');
    // headerHomeButton.textContent = 'Home';
    const headerMenuButton = document.createElement('li');
    // headerMenuButton.textContent = 'Menu';
    const headerAboutButton = document.createElement('li');
    // headerAboutButton.textContent = 'About';

    const homeText = document.createElement('p');
    const menuText = document.createElement('p');
    const aboutText = document.createElement('p');
    homeText.textContent = 'Home';
    menuText.textContent = 'Menu';
    aboutText.textContent = 'About';

    headerHomeButton.appendChild(homeText);
    headerMenuButton.appendChild(menuText);
    headerAboutButton.appendChild(aboutText);

    headerButtons.appendChild(headerHomeButton);
    headerButtons.appendChild(headerMenuButton);
    headerButtons.appendChild(headerAboutButton);
    header.appendChild(headerButtons);

    header.dataset.indexNumber = 0;

    headerHomeButton.dataset.tabTarget = '#home';
    headerMenuButton.dataset.tabTarget = '#menu';
    headerAboutButton.dataset.tabTarget = '#about';

    const tabs = document.querySelectorAll('[data-tab-target');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = document.querySelector(tab.dataset.tabTarget)
            target.classList.add('active');
        })
    }) 

    content.appendChild(header);
}

export default headerLoad;
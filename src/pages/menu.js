import '../styles/menu.css';
import flandre from '../images/67448332_p0.png'

const menuLoad = function() {
    // Create div for tabContent
    const content = document.getElementById('content');
    const tabContentMenu = document.createElement('div');
    tabContentMenu.classList.add('tabContent');
    tabContentMenu.id = 'menu';

    // background
    const backgroundMenu = document.createElement('img');
    backgroundMenu.src = flandre;
    backgroundMenu.id = 'backgroundMenu';
    tabContentMenu.appendChild(backgroundMenu);

    // Menus
    const menuContainer = document.createElement('div');
    const menuList = document.createElement('ul');
    const menu1 = document.createElement('li');
    const menu2 = document.createElement('li');
    const menu3 = document.createElement('li');
    const menu4 = document.createElement('li');

    menuContainer.id = 'menuContainer';
    menuList.className = 'menuList';
    menu1.className = 'menus';
    menu2.className = 'menus';
    menu3.className = 'menus';
    menu4.className = 'menus';

    menuList.appendChild(menu1);
    menuList.appendChild(menu2);
    menuList.appendChild(menu3);
    menuList.appendChild(menu4);
    menuContainer.appendChild(menuList);
    tabContentMenu.appendChild(menuContainer);

    content.appendChild(tabContentMenu);
}

export default menuLoad;
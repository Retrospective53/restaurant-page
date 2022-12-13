import '../styles/about.css'
import koishi2 from '../images/69512535_p0.png'

const aboutLoad = function() {

    const content = document.getElementById('content');
    const tabAbout = document.createElement('div');
    tabAbout.id = 'about';
    tabAbout.classList.add('tabContent');
    
    
    const backgroundAbout = document.createElement('img');
    backgroundAbout.id = 'backgroundAbout';
    backgroundAbout.src = koishi2;
    
    tabAbout.appendChild(backgroundAbout);
    content.appendChild(tabAbout);
}

export default aboutLoad;
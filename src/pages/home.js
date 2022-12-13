import '../styles/home.css';
import koishi from '../images/70531218_p0.png';

const homeLoad = function() {

    console.log('asdasda');


    const content = document.getElementById('content');
    const tabContentHome = document.createElement('div');
    tabContentHome.className = "tabContent active";
    tabContentHome.id = 'home';


    // home
    
    const paragraphContainer = document.createElement('div');
    paragraphContainer.classList.add('paragraphContainer')
    const paragraph = document.createElement('p');
    paragraph.textContent = "Sip into something extraordinary with our delicious, hand-crafted blends of tea! Made with only the finest ingredients and steeped to perfection, our tea will awaken your senses and transport you to a world of unmatched flavor and aroma. Whether you prefer traditional black tea, or something more exotic like green tea or herbal tea, we have something for every palate. So why not treat yourself to a cup of our tasty tea today? You deserve it!"
    
    paragraphContainer.appendChild(paragraph);
    
    
    tabContentHome.appendChild(paragraphContainer);
    content.appendChild(tabContentHome);
    
    const backgroundHome = document.createElement('img');
    backgroundHome.id="backgroundHome";
    backgroundHome.src = koishi;
    tabContentHome.appendChild(backgroundHome); 
}

export default homeLoad;
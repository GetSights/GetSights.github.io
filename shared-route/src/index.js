import Map from './Map';
import directionsButtonsHandlers from './directionsButtonsHandlers';
import {
  ENGLISH,
  RUSSIAN,
  ALL_CONTENT,
  SUPPORTED_LANGUAGES,
  PLAY_MARKET_ID,
  APP_STORE_ID,
} from './constants';
import getQueryParams from './utils/getQueryParams';
import logoIcon from '../../assets/icons/logo.png';
import googlePlayIcon from '../../assets/icons/GooglePlay.png';
import appleStoreIcon from '../../assets/icons/AppleStore.png';
import './style.scss';

// import mockedRoute from '../mockedRoute';

const map = new Map();

function renderHeader() {
  return `
    <header class="header" id="header">
      <div class="headerContainer">
        <a href="https://info.get-sights.com">
          <img src="${logoIcon}" alt="Logo" />
        </a>
        <h1 class="mainTitle">GetSights</h1>
      </div>
    </header>
  `;
};

function renderButtomSlides(points) {
  return points.reduce((acc, currentPoint, index) => {
    acc += `<li>
      <span class="number">${index + 1}</span>
      <img src="${currentPoint.imageSrc}" alt="${currentPoint.address.country}" />
    </li>`;

    return acc;
  }, '');
}

function fetchRoute() {
  const params = getQueryParams();
  const lang = (window.navigator.language === 'ru' || window.navigator.language === RUSSIAN)
    ? 'ru'
    : 'en'; // TODO: Add function to detect lang here

  if (params.id) {
    return fetch(`https://api.get-sights.com/api/routes/display?id=${params.id}&lang=${lang}`)
      .then((response) => response.json());

    // return new Promise((res) => {
    //   setTimeout(() => { res(mockedRoute); }, 100);
    // });
  } else {
    return Promise.resolve();
  }
}

function registerMoreDescriptionButtonClickHandler() {
  const moreDescriptionButton = document.getElementById('moreDescriptionButton');
  const moreDescriptionContainer = document.getElementById('moreDescriptionContainer');

  moreDescriptionButton.addEventListener('click', () => {
    moreDescriptionContainer.classList.toggle('open');
  });
}

function addBottomSlideshowHandler() {
  let currentIndex;
  const bottomSlideshow = document.getElementById('BottomSlideshow');

  bottomSlideshow.addEventListener('click', (e) => {
    const element = e.target.closest('li');
    const index = Array.prototype.indexOf.call(bottomSlideshow.children, element);

    if (index >= 0) {
      bottomSlideshow.children[currentIndex]
        && bottomSlideshow.children[currentIndex].classList.remove('current');
      bottomSlideshow.children[index]
        && bottomSlideshow.children[index].classList.add('current');
      currentIndex = index;
      map.renderMarkers(currentIndex);
    }
  });
}

function renderSectionWithAppDescription(data) {
  return `
    <section class="appDescriptionSection">
      <div class="contentContainer">
        <p>${data.lessDescription}</p>
        <div class="moreDescriptionContainer" id="moreDescriptionContainer">
          <p>${data.moreDescription}</p>
        </div>
        <div class="moreDescriptionButtonContainer">
          <button type="button" class="moreDescriptionButton" id="moreDescriptionButton">
            ${data.buttonTitle}
          </button>
        </div>
      </div>
    </section>
  `;
};

function renderSectionWithLinksToStores(data) {
  return `
    <section class="storeLinksSection">
      <div class="contentContainer">
        <p>${data.description}</p>
        <div class="storeLinks">
          <a id="${PLAY_MARKET_ID}" href="https://play.google.com/store/apps/details?id=com.app.getsights" target="_blank">
            <img src="${googlePlayIcon}" alt="Google Play" />
          </a>
          <a id="${APP_STORE_ID}" href="https://apps.apple.com/app/getsights/id1542986310" target="_blank">
            <img src="${appleStoreIcon}" alt="App Store" />
          </a>
        </div>
      </div>
    </section>
  `;
};

function renderSectionWithRouteName(name) {
  return `
    <section class="routeNameSection">
      <div class="contentContainer">
        <p>${name}</p>
      </div>
    </section>
  `;
};

async function renderContent(currentLanguage) {
  const main = document.querySelector('main');
  const content = ALL_CONTENT[currentLanguage];

  try {
    const route = await fetchRoute();
    const header = renderHeader();
    const sectionWithAppDescription = renderSectionWithAppDescription(content.sectionWithAppDescription);
    const sectionWithLinksToStores = renderSectionWithLinksToStores(content.sectionWithLinksToStores);
    const sectionWithRouteName = renderSectionWithRouteName(route.name);

    const markup = `
      ${sectionWithAppDescription}
      ${sectionWithLinksToStores}
      ${sectionWithRouteName}
      <div class="container">
        <div class="controlsDirection">
          <button type="button" class="walk" id="Walk">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M13.55 13.95l-1.94-2.18.05-2.72 1.81 1.65c.32.29.81.27 1.1-.05.29-.32.27-.81-.05-1.1L11.7 6.97l.02-.87c0-.98-.8-1.89-1.77-1.77-.62.08-1.32.69-1.4.82L6.12 8.08C5.85 8.42 5.71 8.86 5.73 9.29l.08 1.73c.02.43.38.76.81.74s.76-.38.74-.81L7.29 9.53C7.28 9.27 7.37 9 7.53 8.79l.83-1.06.09 4.06-.49 2.62c-.03.14-.08.28-.16.4L5.34 18.8c-.23.37-.11.84.25 1.07.37.23.84.11 1.07-.25l2.62-4.26c.07-.11.12-.24.15-.37l.53-2.36 2.05 1.98c.2.19.33.44.37.71l.66 4.01c.06.36.36.63.72.65.06 0 .11 0 .17-.01.42-.07.71-.47.64-.89l-.74-4.5C13.82 14.35 13.71 14.13 13.55 13.95zM9.9 4.08c1.12 0 2.04-.91 2.04-2.04C11.94.92 11.03 0 9.9 0S7.86.92 7.86 2.04C7.86 3.17 8.78 4.08 9.9 4.08z"/>
            </svg>
            ${content.directionButtons.walk}
          </button>
          <button type="button" class="drive" id="Drive">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M18.8 8.38l-1.55-4.09c-.65-1.72-2.22-2.83-3.99-2.83H6.94c-1.68 0-3.21 1.03-3.91 2.63l-1.86 4.3C.52 8.44 0 8.98 0 9.65v4.18c0 .7.57 1.27 1.27 1.27h17.45c.7 0 1.27-.57 1.27-1.27V9.65C20 8.97 19.47 8.42 18.8 8.38zM4.3 4.64c.48-1.09 1.51-1.8 2.64-1.8h6.32c1.19 0 2.25.76 2.7 1.94l.99 2.62H3.1L4.3 4.64zM3.89 13.26c-.92 0-1.67-.75-1.67-1.67 0-.92.75-1.67 1.67-1.67s1.67.75 1.67 1.67C5.56 12.51 4.81 13.26 3.89 13.26zM8.46 13H8.12v-2.81h.34V13zM10.24 13H9.9v-2.81h.34V13zM11.98 13h-.34v-2.81h.34V13zM15.99 13.26c-.92 0-1.67-.75-1.67-1.67 0-.92.75-1.67 1.67-1.67s1.67.75 1.67 1.67C17.66 12.51 16.91 13.26 15.99 13.26zM4.59 15.49v2.03c0 .56-.57 1.02-1.28 1.02l0 0c-.7 0-1.28-.46-1.28-1.02v-2.03C2.03 15.49 4.59 15.49 4.59 15.49zM17.76 15.49v2.03c0 .56-.57 1.02-1.28 1.02l0 0c-.7 0-1.28-.46-1.28-1.02v-2.03C15.2 15.49 17.76 15.49 17.76 15.49z"/>
            </svg>
            ${content.directionButtons.drive}
          </button>
          <button type="button" class="direction" id="Directions">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14">
              <path d="M13.5 5.9L8.1.4C7.5-.2 6.5-.2 6 .4L.4 5.9c-.6.6-.6 1.6 0 2.1l5.5 5.5c.6.6 1.6.6 2.1 0L13.5 8c.6-.5.6-1.5 0-2.1zm-3.3.8L8.1 8.2c-.2.1-.4 0-.4-.2V7H5.4c-.4 0-.7.3-.7.7v1.5h-.9V7.7c0-.9.7-1.6 1.6-1.6h2.3v-1c0-.2.2-.3.4-.2l2.1 1.5c.1.1.1.2 0 .3z"/>
            </svg>
            ${content.directionButtons.direction}
          </button>
        </div>
        <div id="map" class="map"></div>
        <ul id="BottomSlideshow" class="bottomSlideshow">${renderButtomSlides(route.points)}</ul>
      </div>
    `;

    main.insertAdjacentHTML('beforebegin', header);
    main.innerHTML = markup;

    registerHandlers(route);
    map.renderMap(route);
  } catch(e) {
    main.innerHTML = `
      <div class="notFoundContainer">
        <span>${content.notFound}</span>
      </div>
    `;
  }
}

function getCurrentLanguage() {
  const userLanguage = window.navigator.language;

  return SUPPORTED_LANGUAGES[userLanguage] || SUPPORTED_LANGUAGES[ENGLISH];
}

function registerScrollPageHandler() {
  const header = document.getElementById('header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  });
}

function registerClickByPlayMarketHandler() {
  var playMarketButton = document.getElementById(PLAY_MARKET_ID);

  playMarketButton.addEventListener('click', () => {
    gtag('event', 'click_by_PlayMarket_link_on_shared_route_page', {
      event_category: 'links_to_stores',
      event_label: 'Click by PlayMarket',
      event_action: 'click',
    });
  });
}

function registerClickByAppStoreHandler() {
  var appStoreButton = document.getElementById(APP_STORE_ID);

  appStoreButton.addEventListener('click', () => {
    gtag('event', 'click_by_AppStore_link_on_shared_route_page', {
      event_category: 'links_to_stores',
      event_label: 'Click by AppStore',
      event_action: 'click',
    });
  });
}

function registerHandlers(route) {
  registerMoreDescriptionButtonClickHandler();
  addBottomSlideshowHandler();
  directionsButtonsHandlers(route);
  registerScrollPageHandler();

  if (gtag) {
    registerClickByPlayMarketHandler();
    registerClickByAppStoreHandler();
  }
}

function init() {
  const currentLanguage = getCurrentLanguage();

  renderContent(currentLanguage);
}

window.addEventListener('load', init);

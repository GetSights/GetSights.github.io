import renderModalWithOptions from './ModalWithOptions';
import renderModalWithRouteInfo from './ModalWithRouteInfo';
import {
  renderModalWithSlideInfo,
  registerOpenMoreSlideInfoButtonHandler,
} from './ModalWithSlideInfo';
import getQueryParams from './utils/getQueryParams';
import useImageSize from './utils/useImageSize';
import getImageOriginalSize from './utils/getImageOriginalSize';
import formatDate from './utils/formatDate';
import './style.scss';

const ENGLISH = 'en-US';
const RUSSIAN = 'ru-RU';
const SUPPORTED_LANGUAGES = {
  [ENGLISH]: ENGLISH,
  [RUSSIAN]: RUSSIAN,
};

const ALL_CONTENT = {
  [ENGLISH]: {
    notFound: 'Route not found',
    author: 'Photo by',
    modal: {
      info: 'Info',
      openOnTheMap: 'Open on the map',
    },
    modalWithRouteInfo: {
      name: 'Name',
      createdAt: 'Created at',
      updatedAt: 'Updated at',
    },
  },
  [RUSSIAN]: {
    notFound: 'Маршрут не найден',
    author: 'Фото',
    modal: {
      info: 'Информация',
      openOnTheMap: 'Открыть на карте',
    },
    modalWithRouteInfo: {
      name: 'Название',
      createdAt: 'Создан',
      updatedAt: 'Обновлён',
    },
  },
};

let currentSlideIndex = 0;
let lastSlideIndex;

function goToPrev(slideshow, bottomSlideshow, slideshowWidth, bottomSlideshowItemWidth) {
  const prevIndex = currentSlideIndex > 0
    ? currentSlideIndex - 1
    : currentSlideIndex;

  goToSlide(prevIndex, slideshow, bottomSlideshow, slideshowWidth, bottomSlideshowItemWidth);
}

function goToNext(slideshow, bottomSlideshow, slideshowWidth, bottomSlideshowItemWidth) {
  const nextIndex = currentSlideIndex < lastSlideIndex
    ? currentSlideIndex + 1
    : currentSlideIndex;

  goToSlide(nextIndex, slideshow, bottomSlideshow, slideshowWidth, bottomSlideshowItemWidth);
}

function goToSlide(index, slideshow, bottomSlideshow, slideshowWidth, bottomSlideshowItemWidth) {
  if (index < 0 || index > lastSlideIndex) {
    return;
  }

  slideshow.style.transform = `translate(${-(slideshowWidth * index)}px, 0)`;
  bottomSlideshow.scrollTo({
    top: 0,
    left: bottomSlideshowItemWidth * index,
    behavior: 'smooth',
  });

  bottomSlideshow.children[currentSlideIndex].classList.remove('current');
  bottomSlideshow.children[index].classList.add('current');

  currentSlideIndex = index;
}

function bottomSlideshowClick(e, slideshow, bottomSlideshow, slideshowWidth, bottomSlideshowItemWidth) {
  const element = e.target.closest('li');
  const index = Array.prototype.indexOf.call(bottomSlideshow.children, element);

  goToSlide(index, slideshow, bottomSlideshow, slideshowWidth, bottomSlideshowItemWidth);
}

let buttonPrevHandler;
let buttonNextHandler;
let bottomSlideshowClickHandler;

function initSlideshow() {
  const container = document.querySelector('.container');
  const slideshow = document.querySelector('.slideshow');
  const bottomSlideshow = document.querySelector('.bottomSlideshow');
  const buttonPrev = container.querySelector('.prev');
  const buttonNext = container.querySelector('.next');
  const slideshowWidth = slideshow.offsetWidth;
  const bottomSlideshowItemWidth = slideshowWidth / 2.6;

  if (lastSlideIndex === undefined) {
    lastSlideIndex = slideshow.children.length - 1;
    bottomSlideshow.children[currentSlideIndex].classList.add('current');
  } else {
    buttonPrev.removeEventListener('click', buttonPrevHandler);
    buttonNext.removeEventListener('click', buttonNextHandler);
    bottomSlideshow.removeEventListener('click', bottomSlideshowClickHandler);
    goToSlide(currentSlideIndex, slideshow, bottomSlideshow, slideshowWidth, bottomSlideshowItemWidth);
  }

  buttonPrevHandler = () => goToPrev(slideshow, bottomSlideshow, slideshowWidth, bottomSlideshowItemWidth);
  buttonNextHandler = () => goToNext(slideshow, bottomSlideshow, slideshowWidth, bottomSlideshowItemWidth);
  bottomSlideshowClickHandler = (e) => bottomSlideshowClick(e, slideshow, bottomSlideshow, slideshowWidth, bottomSlideshowItemWidth);

  buttonPrev.addEventListener('click', buttonPrevHandler);
  buttonNext.addEventListener('click', buttonNextHandler);
  bottomSlideshow.addEventListener('click', bottomSlideshowClickHandler);
}

/* */

const renderInstagram = (instagram) => {
  return `
    <a href="${instagram}">${instagram.match(/[^/]+$/)[0]}</a>
  `;
};

async function renderSlides(points, content) {
  const container = document.querySelector('.slideshow');

  const slides = await Promise.all(
    points.map(async (point) => {
      const imageOriginalSize = await getImageOriginalSize(point.imageSrcBig);
      const containerSize = { width: container.offsetWidth, height: container.offsetHeight - 40 }; // author block height
      const data = useImageSize(containerSize, imageOriginalSize);

      return `<li>
        <div class="slide">
          <div class="imageContainer">
            <img
              src="${point.imageSrcBig}"
              alt="${point.address.country}"
              style="width:${data.width}px;height:${data.height}px;"
              data-scale="${data.scale}"
            />
          </div>
          <div class="info">
            <span class="icon">
              <button type="button" class="openMoreSlideInfoButton">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                  <path fill="white" d="M18.83 12.7l-8.58-3.26a.774.774 0 00-.52 0L1.17 12.7a.73.73 0 01-.95-.44l-.17-.47c-.14-.39.05-.82.43-.97L9.73 7.3c.17-.06.35-.06.52 0l9.27 3.52c.38.15.58.58.44.97l-.17.47c-.15.39-.58.59-.96.44z"/>
                </svg>
              </button>
            </span>
            <span class="country">${point.address.country}</span>
            <span class="city">${point.address.city}</span>
            <div class="streetAndDateContainer">
              <span class="street">${point.address.street}</span>
              <span class="date">${formatDate(point.createdAt)}</span>
            </div>
          </div>
        </div>
        <div class="authorContainer">
          <span class="text">
            ${content.author}: ${point.author.instagram
              ? renderInstagram(point.author.instagram)
              : point.author.name
            }
          </span>
        </div>
      </li>`;
    }));

  const combinedSlides = slides.reduce((acc, currentSlide) => acc += currentSlide);

  container.innerHTML = combinedSlides;
  container.addEventListener('click', toggleSlidesScale);
}

let scaledSlides = true;
function toggleSlidesScale(e) {
  Array.prototype.forEach.call(e.currentTarget.children, (item) => {
    const img = item.querySelector('img');
    const header = document.querySelector('.header');
    const info = item.querySelector('.info');

    const valueToScaleImage = scaledSlides ? img.dataset.scale : 1;
    const valueToTranslateHeader = scaledSlides ? header.offsetHeight + 10 : 0;
    const valueToTranslateInfo = scaledSlides ? info.offsetHeight + 10 : 0;

    img.style.transform = `scale(${valueToScaleImage})`;
    header.style.transform = `translateY(-${valueToTranslateHeader}px)`;
    info.style.transform = `translateY(${valueToTranslateInfo}px)`;
  });

  scaledSlides = !scaledSlides;
}

function renderButtomSlides(points) {
  return points.reduce((acc, currentPoint) => {
    acc += `<li>
      <img src="${currentPoint.imageSrcSmall}" alt="${currentPoint.address.country}" />
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
  } else {
    return Promise.resolve();
  }
}

async function renderContent(currentLanguage) {
  const main = document.querySelector('main');
  const content = ALL_CONTENT[currentLanguage];

  const route = await fetchRoute();

  const markup = route
    ? `
      <div class="container">
        <div class="header">
          <span class="routeName">${route.name} ${route.name} ${route.name} ${route.name} ${route.name}</span>
          <button class="buttonWithOptions">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path fill="white" d="M.04 10c0-1.31 1.07-2.38 2.38-2.38S4.8 8.68 4.8 10c0 1.31-1.05 2.38-2.38 2.38C1.11 12.38.04 11.31.04 10zM15.2 10c0-1.31 1.07-2.38 2.38-2.38s2.38 1.06 2.38 2.38c0 1.31-1.05 2.38-2.38 2.38C16.27 12.38 15.2 11.31 15.2 10zM7.62 10c0-1.31 1.07-2.38 2.38-2.38s2.38 1.06 2.38 2.38c0 1.31-1.05 2.38-2.38 2.38C8.69 12.38 7.62 11.31 7.62 10z"/>
            </svg>
          </button>
        </div>
        <div class="containerSlideshow">
          <ul class="slideshow">Loading ...</ul>
        </div>
        <ul class="bottomSlideshow">${renderButtomSlides(route.points)}</ul>
        <div class="controls">
          <button class="prev">Prev</button>
          <button class="next">Next</button>
        </div>
      </div>
    `
    : `<h2>${content.notFound}</h2>`;

  main.innerHTML = markup;

  await renderSlides(route.points, content);
  initSlideshow();
  renderModalWithSlideInfo(route.points);
  renderModalWithOptions(route, content.modal);
  renderModalWithRouteInfo(route, content.modalWithRouteInfo);

  window.addEventListener('resize', async () => {
    await renderSlides(route.points, content);
    initSlideshow();
    registerOpenMoreSlideInfoButtonHandler(route.points);
  });
}

function getCurrentLanguage() {
  const userLanguage = window.navigator.language;

  return SUPPORTED_LANGUAGES[userLanguage] || SUPPORTED_LANGUAGES[ENGLISH];
}

function init() {
  const currentLanguage = getCurrentLanguage();

  renderContent(currentLanguage);
}

window.addEventListener('load', init);

var ENGLISH = 'en';
var RUSSIAN = 'ru';
var UKRAINIAN = 'uk';
var SUPPORTED_LANGUAGES = {
  'en': ENGLISH,
  'en-US': ENGLISH,
  'en-UK': ENGLISH,
  'ru': RUSSIAN,
  'ru-RU': RUSSIAN,
  'ua': RUSSIAN,
  'ua-UA': RUSSIAN,
  'uk': RUSSIAN, // TODO: Set UKRAINIAN here
  'uk-UA': RUSSIAN, // TODO: Set UKRAINIAN here
};

var ALL_CONTENT = {
  [ENGLISH]: {
    mainTitle: 'Terms for uploading photo',
    sectionWithNotAllowedRules: {
      title: 'Please do not upload:',
      items: [
        {
          src: '../assets/terms/noFood.png',
          title: 'No food',
          text: 'Enjoy your meal, but do not upload your food please',
        },
        {
          src: '../assets/terms/noPets.png',
          title: 'No pets',
          text: 'We do like pets too, but please try do not upload it photos',
        },
        {
          src: '../assets/terms/noTogether.png',
          title: 'No together photo',
          text: 'Together photo is great idea, but please do not upload it',
        },
        {
          src: '../assets/terms/noPoorQuality.png',
          title: 'No poor quality',
          text: 'Please upload photo with good quality only and with appropriate content',
        },
        {
          src: '../assets/terms/noSelfie.png',
          title: 'No selfie',
          text: 'Selfie is great, but please do not upload it',
        },
      ],
    },
    sectionWithAllowedRules: {
      title: 'You can upload:',
      items: [
        {
          src: '../assets/terms/sights.png',
          title: 'Sightseeing',
          text: 'Popular and not so popular sightseeing',
        },
        {
          src: '../assets/terms/interestingPlaces.png',
          title: 'Interesting Places',
          text: 'Famous places or places people don\'t know about',
        },
        {
          src: '../assets/terms/beautifulViews.png',
          title: 'Beautiful Views',
          text: 'Beautiful views, view points etc...',
        },
        {
          src: '../assets/terms/popularPhotoPlaces.png',
          title: 'Popular Photo Places',
          text: 'Popular and unusual places for photos',
        },
        {
          src: '../assets/terms/monuments.png',
          title: 'Monuments',
          text: 'Modern Art, monuments, street art etc...',
        },
      ],
    },
  },
  [RUSSIAN]: {
    mainTitle: 'Правила загрузки фото',
    sectionWithNotAllowedRules: {
      title: 'Пожалуйста не загружайте:',
      items: [
        {
          src: '../assets/terms/noFood.png',
          title: 'Без еды',
          text: 'Наслаждайтесь едой не загружая её фото',
        },
        {
          src: '../assets/terms/noPets.png',
          title: 'Без животных',
          text: 'Да, мы тоже любим домашних животных, но постарайтесь не загружать их фото',
        },
        {
          src: '../assets/terms/noTogether.png',
          title: 'Без совместных фото',
          text: 'Сделать совместное фото - хорошая идея, но пожалуйста не загружайте его',
        },
        {
          src: '../assets/terms/noPoorQuality.png',
          title: 'Хорошее качество фото',
          text: 'Пожалуйста загружайте фото с хорошим качеством и с подходящим контентом',
        },
        {
          src: '../assets/terms/noSelfie.png',
          title: 'Без селфи',
          text: 'Селфи это круто, но постарайтесь не загружать его',
        },
      ],
    },
    sectionWithAllowedRules: {
      title: 'Вы можете загружать:',
      items: [
        {
          src: '../assets/terms/sights.png',
          title: 'Достопримечательности',
          text: 'Популярные и не очень достопримечательности',
        },
        {
          src: '../assets/terms/interestingPlaces.png',
          title: 'Интересные места',
          text: 'Известные интересные места или те, о которых мало кто знает',
        },
        {
          src: '../assets/terms/beautifulViews.png',
          title: 'Красивые виды',
          text: 'Красивые виды, обзорные, смотровые площадки и прочее',
        },
        {
          src: '../assets/terms/popularPhotoPlaces.png',
          title: 'Популярные места',
          text: 'Популярные и необычные места для фото',
        },
        {
          src: '../assets/terms/monuments.png',
          title: 'Памятники',
          text: 'Арт объекты, памятники, современное исскуство, стрит арт и так далее',
        },
      ],
    },
  },
};

function renderHeader(title) {
  return `
    <header class="header" id="header">
      <div class="headerContainer">
        <a href="https://info.get-sights.com">
          <img src="../assets/icons/logo.png" alt="Logo" />
        </a>
        <h1 class="mainTitle">${title}</h1>
      </div>
    </header>
  `;
};

function getItem(item) {
  return `
    <li>
      <span class="title">${item.title}</span>
      <img src="${item.src}" alt="${item.title}" />
      <span class="text">${item.text}</span>
    </li>
  `;
}

function renderSectionWithRules(data) {
  var items = data.items.reduce((acc, next) => acc += getItem(next), '');

  return `
    <section class="rules">
      <h2>${data.title}</h2>
      <div class="contentContainer">
        <ul>
          ${items}
        </ul>
      </div>
    </section>
  `;
};

function renderContent(currentLanguage) {
  var main = document.querySelector('main');
  var content = ALL_CONTENT[currentLanguage];

  var header = renderHeader(content.mainTitle);
  var sectionWithNotAllowedRules = renderSectionWithRules(content.sectionWithNotAllowedRules);
  var sectionWithAllowedRules = renderSectionWithRules(content.sectionWithAllowedRules);

  main.insertAdjacentHTML('beforebegin', header);
  main.innerHTML = `
    ${sectionWithNotAllowedRules}
    ${sectionWithAllowedRules}
  `;
}

function getCurrentLanguage() {
  const userLanguage = window.navigator.language;

  return SUPPORTED_LANGUAGES[userLanguage] || SUPPORTED_LANGUAGES[ENGLISH];
}

function registerScrollPageHandler() {
  var header = document.getElementById('header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  });
}

function registerHandlers() {
  registerScrollPageHandler();
}

function init() {
  var currentLanguage = getCurrentLanguage();

  renderContent(currentLanguage);
  registerHandlers();
}

window.addEventListener('load', init);

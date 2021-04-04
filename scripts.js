var ENGLISH = 'en';
var RUSSIAN = 'ru';
var UKRAINIAN = 'uk';
var SUPPORTED_LANGUAGES = {
  'en': ENGLISH,
  'en-US': ENGLISH,
  'en-UK': ENGLISH,
  'ru': RUSSIAN,
  'ru-RU': RUSSIAN,
  'ua': RUSSIAN, // TODO: Set UKRAINIAN here
  'ua-UA': RUSSIAN, // TODO: Set UKRAINIAN here
  'uk': RUSSIAN, // TODO: Set UKRAINIAN here
  'uk-UA': RUSSIAN, // TODO: Set UKRAINIAN here
};

var PLAY_MARKET_ID = 'GooglePlayLinkToStore';
var APP_STORE_ID = 'AppleStoreLinkToStore';

var ALL_CONTENT = {
  [ENGLISH]: {
    sectionWithScreenshots: {
      allScreens: {
        src: './assets/screenshots/allScreens.png',
        alt: 'All screens',
      },
    },
    sectionWithDescription: {
      title: 'What is GetSights?',
      description: `
        <p>
          Plan your trip or regular walk, find the best sightseeing and routes, created by travel bloggers, professional travellers and other users, create your own route, share it with friends and more – all from your mobile device.
        </p>
      `,
      keyFeaturesTitle: 'Key Features:',
      keyFeatures: `
        <li>Find the best sightseeing and routes</li>
        <li>Create your own route and share it</li>
        <li>Open route with Google Map (Navigator)</li>
        <li>etc...</li>
      `,
      geolocation: `
        Each photo has geolocation so you can get to this great location by car, bicycle, electric scooter or by feet.
      `,
      wishes: 'Enjoy your trip!',
    },
    sectionWithIntroVideo: {
      title: 'How to use GetSights',
      videoId: 'ilLtKEPzXtc',
    },
    sectionWithFeedbackForm: {
      title: 'Feedback',
      description: 'It is really important for us to know what do you think about GetSights.<br /> Please feel free to message us on social media or fill out feedback form.',
      link: 'https://forms.gle/ypHBeWos5dJ8MvvCA',
      name: 'Link to feedback form',
    },
    sectionWithSocialMedia: {
      title: 'Follow us on social media',
    },
    sectionWithFaq: {
      title: 'Frequently asked questions',
      name: 'Go to Faq',
    },
    sectionWithPrivacyAndPolicy: {
      title: 'Please read our Privacy and Policy',
      name: 'Go to Privacy and Policy',
    },
    sectionWithLoginViaGoogle: {
      title: 'Login via Google',
      description: 'We are using login via Google to make authentication process more clearly and easily for you. We are using your personal data(name and avatar) just to display it. To know that you are an authorized user.',
    },
    sectionWithLoginViaFacebook: {
      title: 'Login via Facebook',
      description: 'We are using login via Facebook to make authentication process more clearly and easily for you. We are using your personal data(name and avatar) just to display it. To know that you are an authorized user.',
    },
    sectionWithLoginViaInstagram: {
      title: 'Login via Instagram',
      description: 'We are using login via Instagram to make authentication process more clearly and easily for you. We are using your personal data(name and avatar) just to display it. To know that you are an authorized user.',
    },
  },
  [RUSSIAN]: {
    sectionWithScreenshots: {
      allScreens: {
        src: './assets/screenshots/allScreens_ru.png',
        alt: 'Экраны всех страниц',
      },
    },
    sectionWithDescription: {
      title: 'Что такое GetSights?',
      description: `
        <p>
          Планировать ваше путешествие или обычную прогулку, находить лучшие достопримечательности и маршруты, созданные путешествующими блогерами, профессиональными путешественниками или другими пользователями, создавать свои собственные маршруты, делиться ими с друзьями и многое другое – в вашем мобильном телефоне.
        </p>
      `,
      keyFeaturesTitle: 'Ключевые возможности:',
      keyFeatures: `
        <li>Находить лучшие достопримечательности и маршруты</li>
        <li>Создавать свои собственные маршруты и делиться ими с друзьями</li>
        <li>Открывать маршруты в Гугл карте (Навигаторе)</li>
        <li>другое...</li>
      `,
      geolocation: `
        У каждого места есть геолокация с которой, вы можете без проблем, добраться на машине, велосипеде, электро самокате или пешком.
      `,
      wishes: 'Хорошего путешествия!',
    },
    sectionWithIntroVideo: {
      title: 'Как пользоваться GetSights',
      videoId: 'ED0rBiXrgv8',
    },
    sectionWithFeedbackForm: {
      title: 'Обратная связь',
      description: 'Нам очень важно знать, что вы думаете о GetSights.<br /> Напишите нам в социальных сетях или заполните форму обратной связи.',
      link: 'https://forms.gle/wCxXmAeTUPseTH9d7',
      name: 'Ссылка на форму обратной связи',
    },
    sectionWithSocialMedia: {
      title: 'Подписывайтесь на нас в социальных сетях',
    },
    sectionWithFaq: {
      title: 'Часто задаваемые вопросы',
      name: 'Перейти к часто задаваемым вопросам',
    },
    sectionWithPrivacyAndPolicy: {
      title: 'Пожалуйста ознакомьтесь с нашей политикой конфиденциальности',
      name: 'Перейти к политике конфиденциальности',
    },
    sectionWithLoginViaGoogle: {
      title: 'Вход с помощью Google',
      description: 'Мы используем вход через Google, чтобы сделать процесс авторизации легче и проще для вас. Мы используем ваши персональные данные(имя и аватар) для отображения их, чтобы понимать, что вы авторизованный пользователь.',
    },
    sectionWithLoginViaFacebook: {
      title: 'Вход с помощью Facebook',
      description: 'Мы используем вход через Facebook, чтобы сделать процесс авторизации легче и проще для вас. Мы используем ваши персональные данные(имя и аватар) для отображения их, чтобы понимать, что вы авторизованный пользователь.',
    },
    sectionWithLoginViaInstagram: {
      title: 'Вход с помощью Instagram',
      description: 'Мы используем вход через Instagram, чтобы сделать процесс авторизации легче и проще для вас. Мы используем ваши персональные данные(имя и аватар) для отображения их, чтобы понимать, что вы авторизованный пользователь.',
    },
  },
};

function renderHeader() {
  return `
    <header class="header" id="header">
      <div class="headerContainer">
        <a href="https://info.get-sights.com">
          <img src="./assets/icons/logo.png" alt="Logo" />
        </a>
        <h1 class="mainTitle">GetSights</h1>
      </div>
    </header>
  `;
};

function renderSectionWithScreenshots(data) {
  return `
    <section class="screenshots">
      <div class="contentContainer">
        <div class="scrollContainer">
          <img src="${data.allScreens.src}" alt="${data.allScreens.alt}" />
        </div>
      </div>
    </section>
  `;
};

function renderSectionWithLinksToStores(data) {
  return `
    <section class="storeLinksSection">
      <div class="contentContainer">
        <div class="storeLinks">
          <a id="${PLAY_MARKET_ID}" href="https://play.google.com/store/apps/details?id=com.app.getsights" target="_blank">
            <img src="./assets/icons/GooglePlay.png" alt="Google Play" />
          </a>
          <a id="${APP_STORE_ID}" href="https://apps.apple.com/app/getsights/id1542986310" target="_blank">
            <img src="./assets/icons/AppleStore.png" alt="App Store" />
          </a>
        </div>
      </div>
    </section>
  `;
};

function renderSectionWithDescription(data) {
  return `
    <section>
      <h2>${data.title}</h2>
      <div class="contentContainer">
        ${data.description}
        <h3>${data.keyFeaturesTitle}</h3>
        <ul class="listOfPosibilities">
          ${data.keyFeatures}
        </ul>
        <p>
          ${data.geolocation}
        </p>
        <h3>${data.wishes}</h3>
      </div>
    </section>
  `;
};

function renderSectionWithIntroVideo(data) {
  return `
    <section>
    <h2>${data.title}</h2>
    <div class="contentContainer">
      <div class="responsiveVideoContainer">
        <iframe
          type="text/html"
          src="https://www.youtube.com/embed/${data.videoId}"
          frameborder="0"
        >
        </iframe>
      </div>
    </div>
    </section>
  `;
};

function renderSectionWithFeedbackForm(data) {
  return `
    <section class="feedbackForm">
    <h2>${data.title}</h2>
    <div class="contentContainer">
      <p>${data.description}</p>
      <a href="${data.link}" target="_blank">
        ${data.name}
      </a>
    </div>
    </section>
  `;
};

function renderSectionWithSocialMedia(data) {
  return `
    <section class="social-media" id="social-media">
      <h2>${data.title}</h2>
      <div class="contentContainer">
        <ul>
          <li>
            <a href="https://www.instagram.com/getsights" target="_blank" class="instagram">
              <img src="./assets/icons/instagram.png" alt="Instagram" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/GetSights" target="_blank">
              <img src="./assets/icons/twitter.png" alt="Twitter" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/getsights" target="_blank" class="linkedin">
              <img src="./assets/icons/linkedin.png" alt="Linkedin" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/get.sights" target="_blank" class="facebook">
              <img src="./assets/icons/facebook.png" alt="Facebook" />
            </a>
          </li>
          <li>
            <a href="https://www.tiktok.com/@getsights" target="_blank" class="tiktok">
              <img src="./assets/icons/tiktok.png" alt="TikTok" />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UCNaiXRFoz3ZhDHYbplmzNWA" target="_blank" class="youtube">
              <img src="./assets/icons/youtube.png" alt="YouTube" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  `;
};

function renderSectionWithPrivacyAndPolicy(data) {
  return `
    <section>
      <h2>${data.title}</h2>
      <div class="contentContainer">
        <a href="https://info.get-sights.com/privacy-and-policy/" target="_blank">
          ${data.name}
        </a>
      </div>
    </section>
  `;
}

function renderSectionWithFaq(data) {
  return `
    <section>
      <h2>${data.title}</h2>
      <div class="contentContainer">
        <a href="https://info.get-sights.com/faq/" target="_blank">
          ${data.name}
        </a>
      </div>
    </section>
  `;
}

function renderSectionWithLoginViaThirdPartyProvider(data) {
  return `
    <section>
      <h2>${data.title}</h2>
      <div class="contentContainer">
        <p>
          ${data.description}
        </p>
      </div>
    </section>
  `;
}

function renderContent(content) {
  var main = document.querySelector('main');

  var header = renderHeader();
  var sectionWithScreenshots = renderSectionWithScreenshots(content.sectionWithScreenshots);
  var sectionWithLinksToStores = renderSectionWithLinksToStores(content.sectionWithLinksToStores);
  var sectionWithDescription = renderSectionWithDescription(content.sectionWithDescription);
  var sectionWithIntroVideo = renderSectionWithIntroVideo(content.sectionWithIntroVideo);
  var sectionWithFeedbackForm = renderSectionWithFeedbackForm(content.sectionWithFeedbackForm);
  var sectionWithSocialMedia = renderSectionWithSocialMedia(content.sectionWithSocialMedia);
  var sectionWithFaq = renderSectionWithFaq(content.sectionWithFaq);
  var sectionWithPrivacyAndPolicy = renderSectionWithPrivacyAndPolicy(content.sectionWithPrivacyAndPolicy);
  var sectionWithLoginViaGoogle = renderSectionWithLoginViaThirdPartyProvider(content.sectionWithLoginViaGoogle);
  var sectionWithLoginViaFacebook = renderSectionWithLoginViaThirdPartyProvider(content.sectionWithLoginViaFacebook);
  var sectionWithLoginViaInstagram = renderSectionWithLoginViaThirdPartyProvider(content.sectionWithLoginViaInstagram);

  main.insertAdjacentHTML('beforebegin', header);
  main.innerHTML = `
    ${sectionWithScreenshots}
    ${sectionWithLinksToStores}
    ${sectionWithDescription}
    ${sectionWithIntroVideo}
    ${sectionWithFeedbackForm}
    ${sectionWithSocialMedia}
    ${sectionWithFaq}
    ${sectionWithPrivacyAndPolicy}
    ${sectionWithLoginViaGoogle}
    ${sectionWithLoginViaFacebook}
    ${sectionWithLoginViaInstagram}
  `;
}

function getCurrentLanguage() {
  var userLanguage = window.navigator.language;

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

function registerClickByPlayMarketHandler() {
  var playMarketButton = document.getElementById(PLAY_MARKET_ID);

  playMarketButton.addEventListener('click', () => {
    gtag('event', 'click_by_PlayMarket_link_on_main_page', {
      event_category: 'links_to_stores',
      event_label: 'Click by PlayMarket',
      event_action: 'click',
    });
  });
}

function registerClickByAppStoreHandler() {
  var appStoreButton = document.getElementById(APP_STORE_ID);

  appStoreButton.addEventListener('click', () => {
    gtag('event', 'click_by_AppStore_link_on_main_page', {
      event_category: 'links_to_stores',
      event_label: 'Click by AppStore',
      event_action: 'click',
    });
  });
}

function registerHandlers() {
  registerScrollPageHandler();

  if (gtag) {
    registerClickByPlayMarketHandler();
    registerClickByAppStoreHandler();
  }
}

function init() {
  var currentLanguage = getCurrentLanguage();
  var content = ALL_CONTENT[currentLanguage];

  renderContent(content);
  registerHandlers();
}

window.addEventListener('load', init);

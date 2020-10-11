var ENGLISH = 'en-US';
var RUSSIAN = 'ru-RU';
var UKRAINIAN = 'uk-UA';
var BELORUSSIAN = 'be-BY';
var SUPPORTED_LANGUAGES = {
  [ENGLISH]: ENGLISH,
  [RUSSIAN]: RUSSIAN,
};

var ALL_CONTENT = {
  [RUSSIAN]: {
    mainTitle: 'GetSights мобильное приложение',
    sectionWithScreenshots: {
      title: 'Скриншоты',
      homeScreen: '<img src="./assets/screenshots/homeScreen_ru.png" alt="Экран главной страницы" />',
      mapScreen: '<img src="./assets/screenshots/mapScreen_ru.png" alt="Экран карты" />',
      uploadScreen: '<img src="./assets/screenshots/uploadScreen_ru.png" alt="Экран загрузки" />',
      profileScreen: '<img src="./assets/screenshots/profileScreen_ru.png" alt="Экран профиля" />',
    },
    sectionWithLinksToStores: {
      title: 'Ссылки к сторам',
    },
    sectionWithDescription: {
      title: 'Что такое GetSights?',
      description: `
        <p>
          Вы можете находить <strong>лучшие достопримечательности</strong>, <strong>красивые места</strong>, <strong>отличные локации</strong> и <strong>интересные маршруты</strong>, используя мобильное приложение <strong>GetSights</strong>
        </p>
        <p>
          Планировать ваше <strong>путешествие</strong> или обычную <strong>прогулку</strong>, находить <strong>лучшие достопримечательности</strong> и <strong>маршруты</strong>, созданные <strong>путешествующими блогерами</strong>, <strong>профессиональными путешественниками</strong> или другими пользователями, создавать <strong>свои собственные маршруты</strong>, делиться ими с друзьями и многое другое в вашем мобильном телефоне.
        </p>
      `,
      keyFeaturesTitle: 'Ключевые возможности:',
      keyFeatures: `
        <li>находить <strong>лучшие достопримечательности</strong>, <strong>любимые места</strong> или <strong>интересные локации</strong> по всему миру</li>
        <li>искать <strong>достопримечательностей</strong> и <strong>интересные маршруты</strong> в любой области карты</li>
        <li>просматривать только <strong>качественный</strong> контент, потому что каждое фото проверяется нашими модераторами</li>
        <li>создавать свои собственные <strong>маршруты</strong> из понравившихся вам фотографий</li>
        <li>открывать маршруты на <strong>Гугл карте</strong> (Навигаторе)</li>
        <li>сохранять ваши собственные <strong>маршруты</strong></li>
        <li>делиться вашими <strong>маршрутами</strong> с друзьями</li>
        <li>делать <strong>маршруты</strong> приватными или публичными</li>
        <li>добавлять ссылку на ваш instagram профиль к каждому загруженному вами <strong>фото</strong></li>
        <li>находить <strong>интересные маршруты</strong> от <strong>путешествующих блогеров</strong>, <strong>профессиональных путешественников</strong> или других пользователей</li>
        <li>другое...</li>
      `,
      geolocation: `
        У каждого <strong>места</strong> есть описание, категория и <strong>геолокация</strong> с которой вы можете без проблем добраться на машине, велосипеде, электро самокате или пешком.
        Если вы столкнётесь с фото у которого указана не правильная <strong>геолокация</strong>, вы можете пожаловаться на него, а также указать правильную геолокацию.
      `,
      feedback: 'Если вы хотите написать нам, как улучшить <strong>GetSights</strong> или поддержать нас, пожалуйста отправляйте свои письма на',
      wishes: 'Хорошего путешествия!',
    },
    sectionWithSocialMedia: {
      title: 'Подписывайтесь на нас в социальных сетях',
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

function translateMainTitle(title) {
  var mainTitle = document.querySelector('.mainTitle');

  mainTitle.textContent = title;
};

function translateSectionWithScreenshots(data) {
  var section = document.querySelector('.screenshots');

  section.innerHTML = `
    <h2>${data.title}</h2>
    <div class="contentContainer">
      <div class="scrollContainer">
        <ul>
          <li>${data.homeScreen}</li>
          <li>${data.mapScreen}</li>
          <li>${data.uploadScreen}</li>
          <li>${data.profileScreen}</li>
        </ul>
      </div>
    </div>
  `;
};

function translateSectionWithLinksToStores(data) {
  var title = document.querySelector('.linksToStores h2');

  title.textContent = data.title;
};

function translateSectionWithDescription(data) {
  var section = document.querySelector('.description');

  section.innerHTML = `
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
      <p>
        ${data.feedback} <a href="mailto:getsights.info@gmail.com">getsights.info@gmail.com</a>
      </p>
      <h3>${data.wishes}</h3>
    </div>
  `;
};

function renderSectionWithSocialMedia(data) {
  return `
    <h2>${data.title}</h2>
    <div class="contentContainer">
      <ul>
        <li>
          <a href="https://www.instagram.com/getsights" target="_blank">
            <img src="./assets/icons/instagram.png" alt="Instagram" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/GetSights" target="_blank">
            <img src="./assets/icons/twitter.png" alt="Twitter" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/company/getsights" target="_blank">
            <img src="./assets/icons/linkedin.png" alt="Linkedin" />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/get.sights" target="_blank">
            <img src="./assets/icons/facebook.png" alt="Facebook" />
          </a>
        </li>
      </ul>
    </div>
  `;
};

function renderSectionWithPrivacyAndPolicy(data) {
  return `
    <h2>${data.title}</h2>
    <div class="contentContainer">
      <a href="https://info.get-sights.com/privacy-and-policy/" target="_blank">
        ${data.name}
      </a>
    </div>
  `;
}

function renderSectionWithLoginViaThirdPartyProvider(data) {
  return `
    <h2>${data.title}</h2>
    <div class="contentContainer">
      <p>
        ${data.description}
      </p>
    </div>
  `;
}

function renderContentDependingOnLanguage(currentLanguage) {
  var content = ALL_CONTENT[currentLanguage];

  translateMainTitle(content.mainTitle);
  translateSectionWithScreenshots(content.sectionWithScreenshots);
  translateSectionWithLinksToStores(content.sectionWithLinksToStores);
  translateSectionWithDescription(content.sectionWithDescription);

  // const sectionWithSocialMedia = renderSectionWithSocialMedia(content.sectionWithSocialMedia);
  // const sectionWithPrivacyAndPolicy = renderSectionWithPrivacyAndPolicy(content.sectionWithPrivacyAndPolicy);
  // const sectionWithLoginViaGoogle = renderSectionWithLoginViaThirdPartyProvider(content.sectionWithLoginViaGoogle);
  // const sectionWithLoginViaFacebook = renderSectionWithLoginViaThirdPartyProvider(content.sectionWithLoginViaFacebook);
  // const sectionWithLoginViaInstagram = renderSectionWithLoginViaThirdPartyProvider(content.sectionWithLoginViaInstagram);
}

function getCurrentLanguage() {
  const userLanguage = window.navigator.language;

  return SUPPORTED_LANGUAGES[userLanguage] || SUPPORTED_LANGUAGES[ENGLISH];
}

function registerHandlers() {
  var linkToAppleStore = document.getElementById('AppleStoreLink');

  linkToAppleStore.addEventListener('click', function() {
    alert('Unfortunately GetSights has not released to Apple Store yet :( \n\nIf you would like to know exact release date please drop your email to getsights.info@gmail.com or follow us on social media');
  })
}

function init() {
  var currentLanguage = getCurrentLanguage();

  if (currentLanguage === RUSSIAN || currentLanguage === UKRAINIAN || currentLanguage === BELORUSSIAN) {
    renderContentDependingOnLanguage(currentLanguage);
  }

  registerHandlers();
}

window.addEventListener('load', init);

var ENGLISH = 'en-US';
var RUSSIAN = 'ru-RU';
var SUPPORTED_LANGUAGES = {
  [ENGLISH]: ENGLISH,
  [RUSSIAN]: RUSSIAN,
};

var ALL_CONTENT = {
  [ENGLISH]: {
    mainTitle: 'GetSights mobile app for Android',
    sectionWithScreenshots: {
      title: 'Screenshots',
      homeScreen: {
        src: '../assets/screenshots/homeScreen.png',
        alt: 'Home screen',
      },
      mapScreen: {
        src: '../assets/screenshots/mapScreen.png',
        alt: 'Map screen',
      },
      uploadScreen: {
        src: '../assets/screenshots/uploadScreen.png',
        alt: 'Upload screen',
      },
      profileScreen: {
        src: '../assets/screenshots/profileScreen.png',
        alt: 'Profile screen',
      },
    },
    sectionWithLinksToStores: {
      title: 'Links to Stores',
    },
    sectionWithFeedbackForm: {
      title: 'Feedback form',
      description: 'Please fill out feedback form. We would like to know what do you thing about GetSights!',
      link: 'https://forms.gle/ypHBeWos5dJ8MvvCA',
      name: 'Link to feedback form',
    },
    sectionWithIntroVideo: {
      title: 'How to use GetSights',
      videoId: 'ilLtKEPzXtc',
    },
    sectionWithDescription: {
      title: 'What is GetSights?',
      description: `
        <p>
          You can find <strong>the best sightseeing</strong>, <strong>lovely places</strong>, <strong>great locations</strong> and <strong>interesting routes</strong> around you, using <strong>GetSights</strong>'s Mobile App.
        </p>
        <p>
          Plan your <strong>trip</strong> or regular <strong>walk</strong>, find the best <strong>sights</strong> and <strong>routes</strong>, created by <strong>travel bloggers</strong>, <strong>professional travellers</strong> or other users, create your <strong>own routes</strong>, share its with friends and more – all from your mobile device.
        </p>
      `,
      keyFeaturesTitle: 'Key Features:',
      keyFeatures: `
        <li>find the best <strong>sightseeing</strong>, lovely <strong>places</strong> or great <strong>locations</strong> around the world</li>
        <li>draw you own polygon to <strong>search sights</strong></li>
        <li>see only <strong>good quality</strong> content, because each photo will be reviewed by our moderators</li>
        <li>create your own <strong>routes</strong> from liked photos</li>
        <li>open <strong>routes</strong> on <strong>Google Map</strong> (Navigator)</li>
        <li>save your <strong>routes</strong></li>
        <li>share your <strong>routes</strong> with other people</li>
        <li>mark your <strong>routes</strong> like a private or public</li>
        <li>add link to your instagram profile to each photo uploaded by you</li>
        <li>find <strong>routes</strong> from travel <strong>bloggers</strong>, professional <strong>travellers</strong> or other users</li>
        <li>etc...</li>
      `,
      geolocation: `
        Each <strong>place</strong> has description, category and geolocation so you can get to this <strong>great location</strong> by car, bicycle, electric scooter or by feet.
        If you know that some place has incorrect <strong>geolocation</strong> you can make a report and send correct geolocation as well.
      `,
      feedback: 'If you would like to send feedback, improve <strong>GetSights</strong> or support us please feel free to send your email to',
      wishes: 'Enjoy your trip!',
    },
    sectionWithSocialMedia: {
      title: 'Follow us on social media',
    },
  },
  [RUSSIAN]: {
    mainTitle: 'GetSights мобильное приложение для Android',
    sectionWithScreenshots: {
      title: 'Скриншоты',
      homeScreen: {
        src: '../assets/screenshots/homeScreen_ru.png',
        alt: 'Экран главной страницы',
      },
      mapScreen: {
        src: '../assets/screenshots/mapScreen_ru.png',
        alt: 'Экран карты',
      },
      uploadScreen: {
        src: '../assets/screenshots/uploadScreen_ru.png',
        alt: 'Экран загрузки',
      },
      profileScreen: {
        src: '../assets/screenshots/profileScreen_ru.png',
        alt: 'Экран профиля',
      },
    },
    sectionWithLinksToStores: {
      title: 'Ссылки к сторам',
    },
    sectionWithFeedbackForm: {
      title: 'Форма обратной связи',
      description: 'Пожалуйста заполните форму обратной связи. Нам очень важно узнать что вы думаете о GetSights!',
      link: 'https://forms.gle/wCxXmAeTUPseTH9d7',
      name: 'Ссылка на форму обратной связи',
    },
    sectionWithIntroVideo: {
      title: 'Как пользоваться GetSights',
      videoId: 'ED0rBiXrgv8',
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
  },
};

function renderMainTitle(title) {
  return `
    <h1 class="mainTitle">${title}</h1>
  `;
};

function renderSectionWithScreenshots(data) {
  return `
    <section class="screenshots">
      <h2>${data.title}</h2>
      <div class="contentContainer">
        <div class="scrollContainer">
          <ul>
            <li>
              <img src="${data.homeScreen.src}" alt="${data.homeScreen.alt}" />
            </li>
            <li>
              <img src="${data.mapScreen.src}" alt="${data.mapScreen.alt}" />
            </li>
            <li>
              <img src="${data.uploadScreen.src}" alt="${data.uploadScreen.alt}" />
            </li>
            <li>
              <img src="${data.profileScreen.src}" alt="${data.profileScreen.alt}" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  `;
};

function renderSectionWithLinksToStores(data) {
  return `
    <section class="storeLinksSection">
      <h2>${data.title}</h2>
      <div class="contentContainer">
        <div class="storeLinks">
          <a href="https://play.google.com/store/apps/details?id=com.app.getsights" id="GooglePlayLinkToStore" target="_blank">
            <img src="../assets/icons/GooglePlay.png" alt="Google Play" />
          </a>
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
        <p>
          ${data.feedback} <a href="mailto:getsights.info@gmail.com" target="_blank">getsights.info@gmail.com</a>
        </p>
        <h3>${data.wishes}</h3>
      </div>
    </section>
  `;
};

function renderSectionWithSocialMedia(data) {
  return `
    <section class="social-media">
      <h2>${data.title}</h2>
      <div class="contentContainer">
        <ul>
          <li>
            <a href="https://www.instagram.com/getsights" target="_blank">
              <img src="../assets/icons/instagram.png" alt="Instagram" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/GetSights" target="_blank">
              <img src="../assets/icons/twitter.png" alt="Twitter" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/getsights" target="_blank">
              <img src="../assets/icons/linkedin.png" alt="Linkedin" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/get.sights" target="_blank">
              <img src="../assets/icons/facebook.png" alt="Facebook" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  `;
};

function renderContent(currentLanguage) {
  var main = document.querySelector('main');
  var content = ALL_CONTENT[currentLanguage];

  const mainTitle = renderMainTitle(content.mainTitle);
  const sectionWithScreenshots = renderSectionWithScreenshots(content.sectionWithScreenshots);
  const sectionWithLinksToStores = renderSectionWithLinksToStores(content.sectionWithLinksToStores);
  const sectionWithFeedbackForm = renderSectionWithFeedbackForm(content.sectionWithFeedbackForm);
  const sectionWithIntroVideo = renderSectionWithIntroVideo(content.sectionWithIntroVideo);
  const sectionWithDescription = renderSectionWithDescription(content.sectionWithDescription);
  const sectionWithSocialMedia = renderSectionWithSocialMedia(content.sectionWithSocialMedia);

  main.innerHTML = `
    ${mainTitle}
    ${sectionWithScreenshots}
    ${sectionWithLinksToStores}
    ${sectionWithFeedbackForm}
    ${sectionWithIntroVideo}
    ${sectionWithDescription}
    ${sectionWithSocialMedia}
  `;
}

function getCurrentLanguage() {
  const userLanguage = window.navigator.language;

  return SUPPORTED_LANGUAGES[userLanguage] || SUPPORTED_LANGUAGES[ENGLISH];
}

function init() {
  var currentLanguage = getCurrentLanguage();

  renderContent(currentLanguage);
}

window.addEventListener('load', init);

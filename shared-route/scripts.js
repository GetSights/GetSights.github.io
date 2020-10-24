var ENGLISH = 'en-US';
var RUSSIAN = 'ru-RU';
var SUPPORTED_LANGUAGES = {
  [ENGLISH]: ENGLISH,
  [RUSSIAN]: RUSSIAN,
};

var ALL_CONTENT = {
  [ENGLISH]: {
    mainTitle: 'GetSights Shared Route',
  },
  [RUSSIAN]: {
    mainTitle: 'GetSights Отправленный маршрут',
  },
};

function renderMainTitle(title) {
  return `
    <h1 class="mainTitle">${title}</h1>
  `;
};

function renderRoutePoint(item) {
  return `<li><img src="${item.imageSrcSmall}" alt="${item.address.country}" /></li>`;
}

function renderRoute() {
  var routeId = 'NWY5MTJmZWQ4MzZhYzcwZDI5ZjAxOTY5';
  var lang = (window.navigator.language === 'ru' || window.navigator.language === RUSSIAN)
    ? 'ru'
    : 'en'; // TODO: Add function to detect lang here
  fetch(`https://api.get-sights.com/api/routes/display?id=${routeId}&lang=${lang}`)
    .then(response => response.json())
    .then(data => console.log(data));

  const route = [];

  if (Array.isArray(route) && route.length) {
    return `<ul>${route.map(renderRoutePoint)}</ul>`;
  }

  return '';
}

function renderContent(currentLanguage) {
  var main = document.querySelector('main');
  var content = ALL_CONTENT[currentLanguage];

  const mainTitle = renderMainTitle(content.mainTitle);
  const route = renderRoute();

  main.innerHTML = `
    ${mainTitle}
    ${route}
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

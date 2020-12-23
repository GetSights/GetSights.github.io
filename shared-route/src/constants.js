export const ENGLISH = 'en';
export const RUSSIAN = 'ru';
// export const UKRAINIAN = 'uk';
export const SUPPORTED_LANGUAGES = {
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
export const PLAY_MARKET_ID = 'GooglePlayLinkToStore';
export const APP_STORE_ID = 'AppleStoreLinkToStore';

export const ALL_CONTENT = {
  [ENGLISH]: {
    sectionWithLinksToStores: {
      description: 'To install GetSights - press to one of links below',
    },
    sectionWithAppDescription: {
      lessDescription: 'With GetSights you can find the best sightseeing, lovely places and routes around you!',
      moreDescription: 'Plan your trip or regular walk, find the best sights and routes, created by travel bloggers, professional travellers or other users, create your own routes, share it\'s with friends and more. <br /><br /> We will be happy if you help our users and us to learn about new interesting places. <br /><br /> Upload your photos to GetSights, add the geolocation and share GetSights with your friends 🤗 <br /><br /> Together we can make travel even brighter and more interesting.',
      buttonTitle: 'More info',
    },
    directionButtons: {
      walk: 'Walk',
      drive: 'Drive',
      direction: 'Direction',
    },
    notFound: 'Route not found!',
  },
  [RUSSIAN]: {
    sectionWithLinksToStores: {
      description: 'Чтобы установить GetSights - перейдите по одной из ссылок ниже',
    },
    sectionWithAppDescription: ' <br /> ',
    sectionWithAppDescription: {
      lessDescription: 'Вместе с GetSights вы можете находить лучшие достопримечательности, красивые места и интересные локации!',
      moreDescription: 'А так же, планировать ваше путешествие или обычную прогулку, находить достопримечательности и маршруты, созданные путешествующими блогерами, профессиональными путешественниками или другими пользователями, создавать свои маршруты, делиться ими с друзьями и многое другое. <br /><br /> Мы будем рады если вы поможете нашим пользователям и нам, узнать о новых и интересных местах. <br /><br /> Загружайте свои фото в GetSights, отмечайте геолокацию и делись приложением с друзьями 🤗 <br /><br /> Вместе мы сможем сделать путешествия ещё ярче и интересней.',
      buttonTitle: 'Больше информации',
    },
    directionButtons: {
      walk: 'Пешком',
      drive: 'Машиной',
      direction: 'В путь',
    },
    notFound: 'Маршрут не найден!',
  },
};

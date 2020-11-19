export const ENGLISH = 'en-US';
export const RUSSIAN = 'ru-RU';
export const SUPPORTED_LANGUAGES = {
  [ENGLISH]: ENGLISH,
  [RUSSIAN]: RUSSIAN,
};

export const ALL_CONTENT = {
  [ENGLISH]: {
    sectionWithLinksToStores: {
      description: 'To install GetSights - press to one of links below',
    },
    appStoreExplanation: 'Unfortunately GetSights has not released to App Store yet :( \n\nIf you do not want to miss out release date, please follow us on social media',
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
    appStoreExplanation: 'К сожалению GetSights пока ещё не добавлен в App Store :( \n\nЕсли вы не хотите пропустить дату публикации приложения следите за нами в социальных сетях',
    directionButtons: {
      walk: 'Пешком',
      drive: 'Машиной',
      direction: 'В путь',
    },
    notFound: 'Маршрут не найден!',
  },
};

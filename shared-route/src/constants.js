export const ENGLISH = 'en-US';
export const RUSSIAN = 'ru-RU';
export const SUPPORTED_LANGUAGES = {
  [ENGLISH]: ENGLISH,
  [RUSSIAN]: RUSSIAN,
};

export const ALL_CONTENT = {
  [ENGLISH]: {
    directionButtons: {
      walk: 'Walk',
      drive: 'Drive',
      direction: 'Direction',
    },
    notFound: 'Route not found!',
  },
  [RUSSIAN]: {
    directionButtons: {
      walk: 'Пешком',
      drive: 'Машиной',
      direction: 'В путь',
    },
    notFound: 'Маршрут не найден!',
  },
};

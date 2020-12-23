var ENGLISH = 'en';
var RUSSIAN = 'ru';
var UKRAINIAN = 'uk';
var SUPPORTED_LANGUAGES = {
  'en': ENGLISH,
  'en-US': ENGLISH,
  'en-UK': ENGLISH,
  'ru': RUSSIAN,
  'ru-RU': RUSSIAN,
  'ua': UKRAINIAN,
  'ua-UA': UKRAINIAN,
  'uk': UKRAINIAN,
  'uk-UA': UKRAINIAN,
};

var getYoutubeVideoMarkup = (id) => {
  return `
    <div class="resizableContainer">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/${id}">
      </iframe>
    </div>
  `;
};

var ALL_CONTENT = {
  [ENGLISH]: {
    mainTitle: 'Frequently Asked Questions',
    sectionWithQuestions: [
      {
        question: 'What is GetSights?',
        answer: [
          '<strong>GetSights</strong> is free mobile app.',
          'With <strong>GetSights</strong> you can find the best sightseeing, lovely places, routes around you, plan your trip or regular walk, create your own routes and share its with friends.',
          'For more info about <strong>GetSights</strong> please visit official <a href="https://info.get-sights.com" target="_blank">site</a>.',
        ],
      },
      {
        question: 'How can I find sightseeing?',
        answer: [
          '1. Go to Home screen',
          '2. Move map',
          '3. Press by "Search in this area" button.',
          'Sightseeing will appear on the grid below the map, if you can not see them, please choose another place on the map.',
          getYoutubeVideoMarkup('n5_E4RbVP4s'),
        ],
      },
      {
        question: 'How can I see full screen photo?',
        answer: [
          '1. Go to Home screen',
          '2. Find some sights',
          '3. Long Press by any of photo inside grid with sights',
          '4. Modal with fullscreen photo will appear',
          getYoutubeVideoMarkup('cXWMcYFdBSk'),
        ],
      },
      {
        question: 'How can I find routes?',
        answer: [
          '1. Go to Home screen',
          '2. Press by filter between Map and Grid',
          '3. Popup with options will appear',
          '4. Press by "Routes inside this area" option.',
          'Routes will appear on the grid below the map, if you can not see them, please choose another place on the map.',
          getYoutubeVideoMarkup('eudguy_ta_Q'),
        ],
      },
      {
        question: 'How can I create my own route?',
        answer: [
          '1. Go to Home screen',
          '2. Find some sights',
          '3. Press by star icon on the top-right corner of each photo',
          '4. Set at least 2 sights but no more than 10',
          '5. Move to Map screen',
          '6. Select your travel mode(by feet or by car)',
          '7. Press by "Direction" blue button on the top right corner of the screen',
          '8. Choose start route point',
          '9. Route will open inside Google Map-Navigator',
          getYoutubeVideoMarkup('UvIllnEDuvc'),
        ],
      },
      {
        question: 'How can I save my created route?',
        answer: [
          '1. Login in to your account if you have not loggedin yet',
          '2. Create your own route',
          '3. Move to Map screen',
          '4. Press by blue button with plus icon on the left-bottom corner of the map',
          '5. Modal with your route will appear',
          '6. Enter route\'s name',
          '7. Press by "Save" button.',
          getYoutubeVideoMarkup('vqeX3sRTb00'),
        ],
      },
      {
        question: 'How can I open my saved route on the map(navigator)?',
        answer: [
          '1. Go to Profile screen',
          '2. Log in if it needed',
          '3. Press by "My Routes" tab',
          '4. Grid with saved routes will appear',
          '5. Press by any saved route',
          '6. Modal with route will appear',
          '7. Press by three dots icon on the top-right screen corner',
          '8. Popup with options will appear',
          '9. Press by "Show on the map" option',
          '10. Press by any option inside alert to select start route point',
          getYoutubeVideoMarkup('fi71mkL36lM'),
        ],
      },
      {
        question: 'Can I hide/show my route to other users?',
        answer: [
          'Yes, you can. Just toggle private/public status for your route.',
          '1. Go to Profile screen',
          '2. Log in if it needed',
          '3. Press by "My Routes" tab',
          '4. Grid with saved routes will appear',
          '5. Press by lock icon on the right-bottom corner of each route',
          getYoutubeVideoMarkup('J56hojorZBo'),
        ],
      },
      {
        question: 'Why my saved route contains photo which has been removed?',
        answer: [
          'If you see removed photo inside your route that\'s mean that the photo author has been removed his photo from GetSights. So you just need to update your route by removing this photo from your route.',
        ],
      },
      {
        question: 'How can I upload my photo to GetSights?',
        answer: [
          '1. Go to Upload screen',
          '2. Log in if it needed',
          '3. Press by upload icon on the top of screen',
          '4. Popup with options will appear',
          '5. Press by appropriate option for you',
          '6. Make photo or select photo from your device',
          '7. Photo editor will appear, crop your photo if it needed',
          '8. Press by "Continue" button',
          '9. Press by first input with Location',
          '10. Modal with map will appear',
          '11. Move map to choose correct address',
          '12. Press by green tick icon on the top-right screen corner',
          '13. Press by second input with Categories',
          '14. Modal with categories will appear',
          '15. Select appropriate categories to your photo',
          '16. Press by green tick icon on the top-right screen corner',
          '17. Check your prefilled name on the third input',
          '18. Press by fourth input with Instagram (if it applicable)',
          '19. Enter your Instagram login',
          '20. Press by fifth input with Description',
          '21. Modal with description will appear',
          '22. Enter some small description your photo',
          '23. Press by green tick icon on the top-right screen corner',
          '24. Press by "Send" button on the top-right screen corner',
          '<strong>Location</strong>, <strong>Categories</strong>, <strong>Name</strong> or <strong>Instagram</strong> are required fields.',
          getYoutubeVideoMarkup('UVEVB53_gvY'),
        ],
      },
      {
        question: 'Why my uploaded photo still in review?',
        answer: [
          'Each uploaded photo should be reviewed by moderator, so you just need to wait until your photo will be reviewed.',
          'Usually it takes no more than <strong>24 hours</strong>.',
          'But in some cases this process can take an undetermined amount of time.',
        ],
      },
      {
        question: 'Why my photo has been removed from GetSights?',
        answer: [
          'Probably your photo violate our content policies, so it was removed by us.',
          'Please read our - <a href="https://info.get-sights.com/terms/" target="_blank">content policy page</a>',
          'If you think that we were wrong, please contact us by email <a href="mailto:getsights.info@gmail.com" target="_blank">getsights.info@gmail.com</a>',
          'or',
          'ask us on our Instagram page <a href="https://www.instagram.com/getsights/" target="_blank">@getsights</a>',
        ],
      },
      {
        question: 'Why my photo has warning status?',
        answer: [
          'Probably your photo violate our content policies, so we set warning status and do not show your photo to other users.',
          'Please update photo info according to our content policy',
          'Please read our - <a href="https://info.get-sights.com/terms/" target="_blank">content policy page</a>',
          'If you think that we were wrong, please contact us by email <a href="mailto:getsights.info@gmail.com" target="_blank">getsights.info@gmail.com</a>',
          'or',
          'ask us on our Instagram page <a href="https://www.instagram.com/getsights/" target="_blank">@getsights</a>',
        ],
      },
      {
        question: 'What should I do if I found photo with wrong geolocation?',
        answer: [
          'You can report photo',
          '1. Open this photo on fullscreen mode by long pressing on it',
          '2. Press by three dots icon between big photo and list of nearest photo',
          '3. Popup with options will appear',
          '4. Press by "Wrong geolocation" option',
          'Also you can contact us by email <a href="mailto:getsights.info@gmail.com" target="_blank">getsights.info@gmail.com</a>',
          'and write us on our Instagram page <a href="https://www.instagram.com/getsights/" target="_blank">@getsights</a>',
          getYoutubeVideoMarkup('-cdCCfd5ke0'),
        ],
      },
      {
        question: 'How do I report photo?',
        answer: [
          '1. Open this photo to report on fullscreen mode by long pressing on it',
          '2. Press by three dots icon between big photo and list of nearest photo',
          '3. Popup with options will appear',
          '4. Press by appropriate option',
          'or you can contact us by email <a href="mailto:getsights.info@gmail.com" target="_blank">getsights.info@gmail.com</a>',
          'and write us on our Instagram page <a href="https://www.instagram.com/getsights/" target="_blank">@getsights</a>',
          getYoutubeVideoMarkup('ASkq35uce2s'),
        ],
      },
      {
        question: 'How can I write to support team?',
        answer: [
          'Please contact us by email <a href="mailto:getsights.info@gmail.com" target="_blank">getsights.info@gmail.com</a>',
          'or',
          'ask us on our Instagram page <a href="https://www.instagram.com/getsights/" target="_blank">@getsights</a>',
        ],
      },
    ],
  },
  [RUSSIAN]: {
    mainTitle: 'Часто задаваемые вопросы',
    sectionWithQuestions: [
      {
        question: 'Что такое GetSights?',
        answer: [
          '<strong>GetSights</strong> это бесплатное мобильное приложение.',
          'С <strong>GetSights</strong> вы можете находить лучшие достопримечательности, интересные места, маршруты рядом с вами, планировать своё путешествие или обычную прогулку, создавать свои собственные маршруты и делиться ими с друзьями.',
          'Для большей информации о <strong>GetSights</strong> пожалуйста посетите официальный <a href="https://info.get-sights.com" target="_blank">сайт</a>.',
        ],
      },
      {
        question: 'Как искать достопримечательности?',
        answer: [
          '1. Перейдите к главному экрану',
          '2. Двигайте карту',
          '3. Нажмите на кнопку "Искать в этой области".',
          'Достопримечательности появятся в списке ниже карты, если вы их там не увидели, пожалуйста выберете другое место на карте.',
          getYoutubeVideoMarkup('n5_E4RbVP4s'),
        ],
      },
      {
        question: 'Как посмотреть фото в полноэкранном режиме?',
        answer: [
          '1. Перейдите к главному экрану',
          '2. Найдите несколько достопримечательностей',
          '3. Сделайте долгое нажатие на любое фото внутри списка с достопримечательностями',
          '4. Появится модальное окно с фото в полноэкранном режиме',
          getYoutubeVideoMarkup('cXWMcYFdBSk'),
        ],
      },
      {
        question: 'Как искать маршруты?',
        answer: [
          '1. Перейдите к главному экрану',
          '2. Нажмите на фильтр между картой и списком фото',
          '3. Появится всплывающее окно с опциями',
          '4. Нажмите на опцию "Маршруты в этой области".',
          'Маршурты появятся в списке ниже карты, если вы их там не увидели, пожалуйста выберете другое место на карте.',
          getYoutubeVideoMarkup('eudguy_ta_Q'),
        ],
      },
      {
        question: 'Как создавать свой собственный маршрут?',
        answer: [
          '1. Перейдите к главному экрану',
          '2. Найдите несколько достопримечательностей',
          '3. Нажмите на иконку в виде звезды которая находится в правом верхнем углу каждого фото',
          '4. Выберете как минимум две достопримечательности, но не более 10',
          '5. Перейдите к экрану Карты',
          '6. Выберите как хотите пройти маршрут(пешком или машиной)',
          '7. Нажмите на синюю кнопку "В путь" в верхнем правом углу экрана',
          '8. Выберите стартовую точку маршрута',
          '9. Откроется Гугл карта-навигатор',
          getYoutubeVideoMarkup('UvIllnEDuvc'),
        ],
      },
      {
        question: 'Как сохранить свой собственный маршрут?',
        answer: [
          '1. Войдите в свой аккаунт, если вы ещё не вошли',
          '2. Создайте свой маршрут',
          '3. Перейдите к экрану Карта',
          '4. Нажмите на синюю кнопку с иконкой в виде плюса в нижнем левом углу карты',
          '5. Появится модальное окно с маршрутом',
          '6. Введите название маршрута',
          '7. Нажмите на кнопку "Сохранить"',
          getYoutubeVideoMarkup('vqeX3sRTb00'),
        ],
      },
      {
        question: 'Как открыть сохранённый маршрут на карте(навигаторе)?',
        answer: [
          '1. Перейдите к экрану Профиля',
          '2. Войдите в свой аккаунт, если вы не в нём',
          '3. Нажмите на вкладку "Мои Маршруты"',
          '4. Появится список с сохранёнными маршрутами',
          '5. Нажмите на любой сохранённый маршрут',
          '6. Появится модальное окно с маршрутом',
          '7. Нажмите на кнопку с иконкой три точки в верхнем правом углу экрана',
          '8. Появится всплывающее окно с опциями',
          '9. Нажмите на опцию "Открыть на карте"',
          '10. Нажмите на любую опцию в всплывающем окне чтобы выбрать начальную точку маршрута',
          getYoutubeVideoMarkup('fi71mkL36lM'),
        ],
      },
      {
        question: 'Могу ли я скрыть/показать свой маршрут от других пользователей?',
        answer: [
          'Да, это возможно. Просто переключите статус маршрута на приватный/публичный.',
          '1. Перейдите к экрану Профиля',
          '2. Войдите в свой аккаунт, если вы не в нём',
          '3. Нажмите на вкладку "Мои Маршруты"',
          '4. Появится список с сохранёнными маршрутами',
          '5. Нажмите на иконку замка в правом нижнем углу каждого маршрута',
          getYoutubeVideoMarkup('J56hojorZBo'),
        ],
      },
      {
        question: 'Почему мой сохранённый маршрут содержит фото которое было удалено?',
        answer: [
          'Если вы видете удалённое фото в вашем маршруте, значит, что автор этого фото удалил его из GetSights. Поэтому просто обновите ваш маршрут удалив это фото из него.',
        ],
      },
      {
        question: 'Как загружать фото в GetSights?',
        answer: [
          '1. Перейдите к экрану Загрузки',
          '2. Войдите в свой аккаунт, если вы не в нём',
          '3. Нажмите на иконку загрузки',
          '4. Появится всплывающее окно с опциями',
          '5. Нажмите на подходящую для вас опцию',
          '6. Сделать фото или Загрузить с устройства',
          '7. Появится фото редактор, обрежте своё фото если это необходимо',
          '8. Нажмите на кнопку "Продолжить"',
          '9. Нажмите на первое поле ввода с Локацией',
          '10. Появится модальное окно с картой',
          '11. Двигайте карту, чтобы выбрать правильный адрес',
          '12. Нажмите на зелёную галочку справа вверху экрана',
          '13. Нажмите на второе поле ввода с Категориями',
          '14. Появится модальное окно с категориями',
          '15. Выберете подходящие к фото категории',
          '16. Нажмите на зелёную галочку справа вверху экрана',
          '17. Проверьте своё предзаполненное имя в третьем поле ввода',
          '18. Нажмите на чертёртое поле ввода с Instagram (если у вас он есть)',
          '19. Введите ваш Instagram логин',
          '20. Нажмите на пятое поле ввода с Описанием',
          '21. Появится модальное окно с описанием',
          '22. Введите небольшое описание',
          '23. Нажмите на зелёную галочку справа вверху экрана',
          '24. Нажмите на кнопку "Отправить" вверху справа экрана',
          '<strong>Локация</strong>, <strong>Категии</strong>, <strong>Имя</strong> или <strong>Instagram</strong> - обязательные для заполнения поля.',
          getYoutubeVideoMarkup('UVEVB53_gvY'),
        ],
      },
      {
        question: 'Почему моё фото до сих пор не прошло проверку?',
        answer: [
          'Каждое фото проходит проверку у модератора, поэтому просто нужно немного подождать, пока ваше фото будет проверено.',
          'Обычно это занимает не больше чем <strong>24 часа</strong>.',
          'Но в некоторых случаях этот процесс может занимать неопределённое количество времени.',
        ],
      },
      {
        question: 'Почему моё фото было удалено из GetSights?',
        answer: [
          'Вероятно ваше фото нарушило нашу политику контента, поэтому оно было удалено нами.',
          'Пожалуйста ознакомьтесь с нашей - <a href="https://info.get-sights.com/terms/" target="_blank">политикой контента</a>',
          'Если вы считаете, что мы были не правы, пожалуйста напишите нам на почту <a href="mailto:getsights.info@gmail.com" target="_blank">getsights.info@gmail.com</a>',
          'или',
          'спросите нас на нашей Instagram странице <a href="https://www.instagram.com/getsights/" target="_blank">@getsights</a>',
        ],
      },
      {
        question: 'Почему моя фотография имеет статус предупреждения?',
        answer: [
          'Вероятно ваше фото нарушило нашу политику контента, поэтому на ваше фото был установлен статус предупреждения и фото не показывается всем пользователям.',
          'Пожалуйста обновите вашу информацию и фото согласно нашей политике контента',
          'Пожалуйста ознакомьтесь с нашей - <a href="https://info.get-sights.com/terms/" target="_blank">политикой контента</a>',
          'Если вы считаете, что мы были не правы, пожалуйста напишите нам на почту <a href="mailto:getsights.info@gmail.com" target="_blank">getsights.info@gmail.com</a>',
          'или',
          'спросите нас на нашей Instagram странице <a href="https://www.instagram.com/getsights/" target="_blank">@getsights</a>',
        ],
      },
      {
        question: 'Что делать если я нашел фото с неправильной геолокацией?',
        answer: [
          'Вы можете пожаловаться на это фото.',
          '1. Откройте это фото в полноэкранном режиме сделав на нём долгое нажатие',
          '2. Нажать на иконку три точки между большим фото и списком с похожими фото',
          '3. Появится всплывающее окно с опциями',
          '4. Нажмите на опцию "Неправильная геолокация"',
          'Так же вы можете связаться с нами через почту <a href="mailto:getsights.info@gmail.com" target="_blank">getsights.info@gmail.com</a>',
          'и написать нам в наш Instagram <a href="https://www.instagram.com/getsights/" target="_blank">@getsights</a>',
          getYoutubeVideoMarkup('-cdCCfd5ke0'),
        ],
      },
      {
        question: 'Как я могу пожаловаться на картинку?',
        answer: [
          '1. Откройте это фото в полноэкранном режиме сделав на нём долгое нажатие',
          '2. Нажать на иконку три точки между большим фото и списком с похожими фото',
          '3. Появится всплывающее окно с опциями',
          '4. Нажмите на подходящую опцию',
          'Так же вы можете связаться с нами через почту <a href="mailto:getsights.info@gmail.com" target="_blank">getsights.info@gmail.com</a>',
          'и написать нам в наш Instagram <a href="https://www.instagram.com/getsights/" target="_blank">@getsights</a>',
          getYoutubeVideoMarkup('ASkq35uce2s'),
        ],
      },
      {
        question: 'Как мне связаться с командой поддержки?',
        answer: [
          'Пожалуйста напишите нам на почту <a href="mailto:getsights.info@gmail.com" target="_blank">getsights.info@gmail.com</a>',
          'или',
          'спросите нас на нашей Instagram странице <a href="https://www.instagram.com/getsights/" target="_blank">@getsights</a>',
        ],
      },
    ],
  },
  [UKRAINIAN]: {
    mainTitle: 'Часті запитання',
    sectionWithQuestions: [
      {
        question: 'Що таке GetSights?',
        answer: [
          '<strong>GetSights</strong> це безкоштовний мобільний додаток.',
          'З <strong>GetSights</strong> ви можете знаходити найкращі пам\'ятки, цікаві місця, маршрути поруч з вами, планувати свою подорож або звичайну прогулянку, створювати свої власні маршрути і ділитися ними з друзями.',
          'Для більшої інформації про <strong>GetSights</strong> будь ласка відвідайте офіційний <a href="https://info.get-sights.com" target="_blank">сайт</a>.',
        ],
      },
      {
        question: 'Як шукати пам\'ятки?',
        answer: [
          '1. Перейдіть до головного екрану',
          '2. Рухайте карту',
          '3. Натисніть на кнопку "Шукати в цій області".',
          'Пам\'ятки з\'являться в списку нижче карти, якщо ви їх там не побачили, будь ласка виберіть інше місце на карті.',
          getYoutubeVideoMarkup('n5_E4RbVP4s'),
        ],
      },
      {
        question: 'Як подивитися фото в повноекранному режимі?',
        answer: [
          '1. Перейдіть до головного екрану',
          '2. Знайдіть декілька пам\'яток',
          '3. Зробіть довге натискання на будь-яке фото у списку з пам\'ятками',
          '4. З\'явиться модальне вікно з фото в повноекранному режимі',
          getYoutubeVideoMarkup('cXWMcYFdBSk'),
        ],
      },
      {
        question: 'Як шукати маршрути?',
        answer: [
          '1. Перейдіть до головного екрану',
          '2. Натисніть на фільтр між картою і списком фото',
          '3. З\'явиться спливаюче вікно з опціями',
          '4. Натисніть на опцію "Маршрути в цій області".',
          'Маршурти з\'являться в списку нижче карти, якщо ви їх там не побачили, будь ласка виберіть інше місце на карті.',
          getYoutubeVideoMarkup('eudguy_ta_Q'),
        ],
      },
      {
        question: 'Як створювати свій власний маршрут?',
        answer: [
          '1. Перейдіть до головного екрану',
          '2. Знайдіть декілька пам\'яток',
          '3. Натисніть на іконку у вигляді зірки яка знаходиться в правому верхньому кутку кожного фото',
          '4. Виберіть як мінімум дві пам\'ятки, але не більше 10',
          '5. Перейдіть до екрана Карти',
          '6. Оберіть як хочете пройти маршрут (пішки або машиною)',
          '7. Натисніть на синю кнопку "В путь" у верхньому правому куті екрану',
          '8. Виберіть стартову точку маршруту',
          '9. Відкриється Гугл карта-навігатор',
          getYoutubeVideoMarkup('UvIllnEDuvc'),
        ],
      },
      {
        question: 'Як зберегти свій власний маршрут?',
        answer: [
          '1. Увійдіть до свого облікового запису, якщо ви ще не зробили це',
          '2. Створіть свій маршрут',
          '3. Перейдіть до екрана Карти',
          '4. Натисніть на синю кнопку з іконкою у вигляді плюса в нижньому лівому кутку карти',
          '5. З\'явиться модальне вікно з маршрутом',
          '6. Введіть назву маршруту',
          '7. Натисніть на кнопку "Зберегти"',
          getYoutubeVideoMarkup('vqeX3sRTb00'),
        ],
      },
      {
        question: 'Як відкрити збережений маршрут на карті (навігаторі)?',
        answer: [
          '1. Перейдіть до екрана Профіль',
          '2. Увійдіть до свого облікового запису, якщо ви ще не зробили це',
          '3. Натисніть на вкладку "Мої Маршрути"',
          '4. З\'явиться список з збереженими маршрутами',
          '5. Натисніть на будь-який збережений маршрут',
          '6. З\'явиться модальне вікно з маршрутом',
          '7. Натисніть на кнопку з іконкою три точки в верхньому правому куті екрану',
          '8. З\'явиться спливаюче вікно з опціями',
          '9. Натисніть на опцію "Відкрити на карті"',
          '10. Натисніть на будь-яку опцію в спливаючому вікні щоб вибрати початкову точку маршруту',
          getYoutubeVideoMarkup('fi71mkL36lM'),
        ],
      },
      {
        question: 'Чи можу я приховати/показати свій маршрут від інших користувачів?',
        answer: [
          'Так, це можливо. Просто переведіть статус маршруту на приватний/публічний.',
          '1. Перейдіть до екрана Профіль',
          '2. Увійдіть до свого облікового запису, якщо ви ще не зробили це',
          '3. Натисніть на вкладку "Мої Маршрути"',
          '4. З\'явиться список з збереженими маршрутами',
          '5. Натисніть на іконку замка в правому нижньому кутку кожного маршруту',
          getYoutubeVideoMarkup('J56hojorZBo'),
        ],
      },
      {
        question: 'Чому мій збережений маршрут містить фото яке було видалено?',
        answer: [
          'Якщо ви бачите видалене фото у вашому маршруті, це означає, що автор цього фото видалив його з GetSights. Тому просто поновіть ваш маршрут видаливши це фото з нього.',
        ],
      },
      {
        question: 'Як завантажувати фото в GetSights?',
        answer: [
          '1. Перейдите к экрану Загрузки',
          '2. Увійдіть до свого облікового запису, якщо ви ще не зробили це',
          '3. Натисніть на іконку завантаження',
          '4. З\'явиться спливаюче вікно з опціями',
          '5. Натисніть на відповідну для вас опцію',
          '6. Зробити фото або Завантажити з пристрою',
          '7. З\'явиться фото редактор, обріжте своє фото якщо це необхідно',
          '8. Натисніть на кнопку "Продовжити"',
          '9. Натисніть на перше поле введення з Локацією',
          '10. З\'явиться модальне вікно з картою',
          '11. Рухайте карту, щоб вибрати правильну адресу',
          '12. Натисніть на зелену галочку справа вгорі екрану',
          '13. Натисніть на друге поле введення з Категоріями',
          '14. З\'явиться модальне вікно з категоріями',
          '15. Оберіть відповідні до фото категорії',
          '16. Натисніть на зелену галочку справа вгорі екрану',
          '17. Перевірте своє передзаповненое ім\'я в третьому полі введення',
          '18. Натисніть на четверте поле введення з Instagram (якщо у вас він є)',
          '19. Введіть ваш Instagram логін',
          '20. Натисніть на п\'яте поле введення з Описом',
          '21. З\'явиться модальне вікно з описом',
          '22. Введіть невеличкий опис',
          '23. Натисніть на зелену галочку справа вгорі екрану',
          '24. Натисніть на кнопку "Відправити" вгорі праворуч екрану',
          '<strong>Локація</strong>, <strong>Категорії</strong>, <strong>Ім\'я</strong> або <strong>Instagram</strong> - обов\'язкові для заповнення поля.',
          getYoutubeVideoMarkup('UVEVB53_gvY'),
        ],
      },
      {
        question: 'Чому моє фото до сих пір не пройшло перевірку?',
        answer: [
          'Кожне фото проходить перевірку у модератора, тому просто потрібно трохи почекати, поки ваше фото буде перевірено.',
          'Зазвичай це займає не більше ніж <strong>24 години</strong>.',
          'Але в деяких випадках цей процес може займати невизначену кількість часу.',
        ],
      },
      {
        question: 'Чому моє фото було видалено з GetSights?',
        answer: [
          'Ймовірно ваше фото порушило нашу політику контенту, тому воно було видалено нами.',
          'Будь ласка ознайомтеся з нашою - <a href="https://info.get-sights.com/terms/" target="_blank">політикою контенту</a>',
          'Якщо ви вважаєте, що ми були не праві, будь ласка напишіть нам на пошту <a href="mailto:getsights.info@gmail.com" target="_blank">getsights.info@gmail.com</a>',
          'або',
          'запитаєте нас на нашій Instagram сторінці <a href="https://www.instagram.com/getsights/" target="_blank">@getsights</a>',
        ],
      },
      {
        question: 'Чому моя фотографія має статус попередження?',
        answer: [
          'Ймовірно ваше фото порушило нашу політику контенту, тому на ваше фото було встановлено статус попередження і фото не показується іншим користувачам.',
          'Будь ласка оновіть вашу інформацію і фото згідно нашій політиці контенту',
          'Будь ласка ознайомтеся з нашою - <a href="https://info.get-sights.com/terms/" target="_blank">політикою контенту</a>',
          'Якщо ви вважаєте, що ми були не праві, будь ласка напишіть нам на пошту <a href="mailto:getsights.info@gmail.com" target="_blank">getsights.info@gmail.com</a>',
          'або',
          'запитаєте нас на нашій Instagram сторінці <a href="https://www.instagram.com/getsights/" target="_blank">@getsights</a>',
        ],
      },
      {
        question: 'Що робити якщо я знайшов фото з неправильною геолокаціею?',
        answer: [
          'Ви можете поскаржитися на це фото.',
          '1. Відкрийте це фото в полноекранному режимі зробивши на ньому довге натискання',
          '2. Натиснути на іконку три точки між великим фото і списком зі схожими фото',
          '3. З\'явиться спливаюче вікно з опціями',
          '4. Натисніть на опцію "Неправильна геолокація"',
          'Так само ви можете зв\'язатись з нами через пошту <a href="mailto:getsights.info@gmail.com" target="_blank">getsights.info@gmail.com</a>',
          'і написати нам в наш Instagram <a href="https://www.instagram.com/getsights/" target="_blank">@getsights</a>',
          getYoutubeVideoMarkup('-cdCCfd5ke0'),
        ],
      },
      {
        question: 'How do I report photo?',
        answer: [
          '1. Відкрийте це фото в полноекранному режимі зробивши на ньому довге натискання',
          '2. Натиснути на іконку три точки між великим фото і списком зі схожими фото',
          '3. З\'явиться спливаюче вікно з опціями',
          '4. Нажмите на подходящую опцию',
          'Так само ви можете зв\'язатись з нами через пошту <a href="mailto:getsights.info@gmail.com" target="_blank">getsights.info@gmail.com</a>',
          'і написати нам в наш Instagram <a href="https://www.instagram.com/getsights/" target="_blank">@getsights</a>',
          getYoutubeVideoMarkup('ASkq35uce2s'),
        ],
      },
      {
        question: 'Як мені зв\'язатися з командою підтримки?',
        answer: [
          'Будь ласка напишіть нам на пошту <a href="mailto:getsights.info@gmail.com" target="_blank">getsights.info@gmail.com</a>',
          'або',
          'запитаєте нас на нашій Instagram сторінці <a href="https://www.instagram.com/getsights/" target="_blank">@getsights</a>',
        ],
      },
    ],
  },
};

/* */

function renderData(data) {
  return data.reduce((acc, item) => acc += `<p>${item}</p>`, '');
}

function renderListItems(list) {
  return list.reduce((acc, item) => {
      var id = item.question.split(' ').join('_');;

      return acc += `
        <li>
          <input id="${id}" type="checkbox" />
          <label class="question" for="${id}">${item.question}</label>
          <div class="answer">${renderData(item.answer)}</div>
        </li>
      `
    },
    ''
  );
}

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

function renderSectionWithQuestions(data) {
  return `
    <section>
      <div class="contentContainer">
        <ul id="questions" class="questions">
          ${renderListItems(data)}
        </ul>
      </div>
    </section>
  `;
};

function renderContent(currentLanguage) {
  var main = document.querySelector('main');
  var content = ALL_CONTENT[currentLanguage];

  var header = renderHeader(content.mainTitle);
  var sectionWithQuestions = renderSectionWithQuestions(content.sectionWithQuestions);

  main.insertAdjacentHTML('beforebegin', header);
  main.innerHTML = `
    ${sectionWithQuestions}
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

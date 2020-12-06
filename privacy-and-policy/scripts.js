var ENGLISH = 'en-US';
var RUSSIAN = 'ru-RU';
var UKRAINIAN = 'uk-UA';
var SUPPORTED_LANGUAGES = {
  [ENGLISH]: ENGLISH,
  [RUSSIAN]: RUSSIAN,
  [UKRAINIAN]: UKRAINIAN,
};

var ALL_CONTENT = {
  [ENGLISH]: {
    mainTitle: 'Privacy Policy',
    sectionWithIntroduction: {
      title: 'Introduction',
      content: [
        'built the GetSights app as an Ad Supported app. This SERVICE is provided by at no cost and is intended for use as is.',
        'This page is used to inform visitors regarding my policies with the collection, use, and disclosure of Personal Information if anyone decided to use my Service.',
        'If you choose to use my Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that I collect is used for providing and improving the Service. I will not use or share your information with anyone except as described in this Privacy Policy.',
        'The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at GetSights unless otherwise defined in this Privacy Policy.',
      ],
    },
    sectionWithInformationCollectionAndUse: {
      title: 'Information Collection and Use',
      content: [
        'For a better experience, while using our Service, I may require you to provide us with certain personally identifiable information. The information that I request will be retained on your device and is not collected by me in any way.',
        'The app does use third party services that may collect information used to identify you.',
        'Links to privacy policy of third party service providers used by the app',
      ],
    },
    sectionWithLogData: {
      title: 'Log Data',
      content: [
        'I want to inform you that whenever you use my Service, in a case of an error in the app I collect data and information (through third party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilizingmy Service, the time and date of your use of the Service, and other statistics.',
      ],
    },
    sectionWithCookies: {
      title: 'Cookies',
      content: [
        'Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device\'s internal memory.',
        'This Service does not use these “cookies” explicitly. However, the app may use third party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.',
      ],
    },
    sectionWithServiceProviders: {
      title: 'Service Providers',
      content: [
        'I want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.',
        'I may employ third-party companies and individuals due to the following reasons:',
      ],
      list: [
        'To facilitate our Service;',
        'To provide the Service on our behalf;',
        'To perform Service-related services; or',
        'To assist us in analyzing how our Service is used.',
      ],
    },
    sectionWithSecurity: {
      title: 'Security',
      content: [
        'I value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and I cannot guarantee its absolute security.',
      ],
    },
    sectionWithLinksToOtherSites: {
      title: 'Links to Other Sites',
      content: [
        'This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by me. Therefore, I strongly advise you to review the Privacy Policy of these websites. I have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.',
      ],
    },
    sectionWithChildrensPrivacy: {
      title: 'Children’s Privacy',
      content: [
        'These Services do not address anyone under the age of 13. I do not knowingly collect personally identifiable information from children under 13. In the case I discover that a child under 13 has provided me with personal information, I immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact me so that I will be able to do necessary actions.',
      ],
    },
    sectionWithChangesToThisPrivacyPolicy: {
      title: 'Changes to This Privacy Policy',
      content: [
        'I may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. I will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately after they are posted on this page.',
      ],
    },
    sectionWithContactUs: {
      title: 'Contact Us',
      content: [
        'If you have any questions or suggestions about my Privacy Policy, do not hesitate to contact me at <a href="mailto:getsights.info@gmail.com">getsights.info@gmail.com</a>.'
      ],
    },
  },
  [RUSSIAN]: {
    mainTitle: 'Политика Конфиденциальности',
    sectionWithIntroduction: {
      title: 'Вступление',
      content: [
        'Приложение GetSights создано как приложение с поддержкой рекламы. Эта УСЛУГА предоставляется бесплатно и предназначена для использования «как есть».',
        'Эта страница используется для информирования посетителей о моей политике в отношении сбора, использования и раскрытия Личной информации, если кто-то решил использовать мой Сервис.',
        'Если вы решите использовать мой Сервис, вы соглашаетесь на сбор и использование информации в отношении этой политики. Личная информация, которую я собираю, используется для предоставления и улучшения Сервиса. Я не буду использовать или передавать вашу информацию кому-либо, кроме случаев, описанных в настоящей Политике конфиденциальности.',
        'Термины, используемые в настоящей Политике конфиденциальности, имеют то же значение, что и в наших Положениях и условиях, доступных на GetSights, если иное не определено в настоящей Политике конфиденциальности.',
      ],
    },
    sectionWithInformationCollectionAndUse: {
      title: 'Сбор и использование информации',
      content: [
        'Для лучшего опыта при использовании нашего Сервиса я могу потребовать от вас предоставить нам определенную личную информацию. Информация, которую я запрашиваю, будет храниться на вашем устройстве и не будет собираться мной каким-либо образом.',
        'Приложение использует сторонние сервисы, которые могут собирать информацию, используемую для вашей идентификации.',
        'Ссылки на политику конфиденциальности сторонних поставщиков услуг, используемых приложением',
      ],
    },
    sectionWithLogData: {
      title: 'Данные журнала',
      content: [
        'Я хочу сообщить вам, что всякий раз, когда вы используете мой Сервис, в случае ошибки в приложении я собираю данные и информацию (через сторонние продукты) на вашем телефоне, называемые данными журнала. Эти данные журнала могут включать такую информацию, как IP-адрес вашего устройства, имя устройства, версия операционной системы, конфигурация приложения при использовании моего Сервиса, время и дата использования вами Сервиса и другие статистические данные.',
      ],
    },
    sectionWithCookies: {
      title: 'Cookies',
      content: [
        'Файлы cookie - это файлы с небольшим объемом данных, которые обычно используются в качестве анонимных уникальных идентификаторов. Они отправляются в ваш браузер с веб-сайтов, которые вы посещаете, и хранятся во внутренней памяти вашего устройства.',
        'Этот Сервис не использует эти «куки» явно. Однако приложение может использовать сторонний код и библиотеки, которые используют файлы cookie для сбора информации и улучшения своих услуг. У вас есть возможность принять или отклонить эти файлы cookie и узнать, когда файл cookie отправляется на ваше устройство. Если вы решите отказаться от наших файлов cookie, возможно, вы не сможете использовать некоторые части этой Услуги.',
      ],
    },
    sectionWithServiceProviders: {
      title: 'Поставщики услуг',
      content: [
        'Я хочу сообщить пользователям этого Сервиса, что эти третьи стороны имеют доступ к вашей Личной информации. Причина в том, чтобы выполнять поставленные перед ними задачи от нашего имени. Однако они обязаны не раскрывать и не использовать информацию для каких-либо других целей.',
        'Я могу нанимать сторонние компании и частных лиц по следующим причинам:',
      ],
      list: [
        'Чтобы облегчить наш Сервис;',
        'Для предоставления Сервиса от нашего имени;',
        'Для оказания услуг, связанных с Сервисом; или',
        'Чтобы помочь нам в анализе использования нашего Сервиса.',
      ],
    },
    sectionWithSecurity: {
      title: 'Безопасность',
      content: [
        'Я ценю ваше доверие к предоставлению нам вашей личной информации, поэтому мы стремимся использовать коммерчески приемлемые средства ее защиты. Но помните, что ни один метод передачи через Интернет или метод электронного хранения не является на 100% безопасным и надежным, и я не могу гарантировать его абсолютную безопасность.',
      ],
    },
    sectionWithLinksToOtherSites: {
      title: 'Ссылки на другие сайты',
      content: [
        'Этот Сервис может содержать ссылки на другие сайты. Если вы нажмете на стороннюю ссылку, вы будете перенаправлены на этот сайт. Обратите внимание, что этими внешними сайтами я не управляю. Поэтому я настоятельно рекомендую вам ознакомиться с Политикой конфиденциальности этих веб-сайтов. Я не контролирую и не несу ответственности за контент, политику конфиденциальности или действия любых сторонних сайтов или служб.',
      ],
    },
    sectionWithChildrensPrivacy: {
      title: 'Конфиденциальность детей',
      content: [
        'Эти Услуги не предназначены для лиц младше 13 лет. Я сознательно не собираю личную информацию от детей младше 13 лет. В случае, если я обнаруживаю, что ребенок младше 13 лет предоставил мне личную информацию, я немедленно удаляю ее с наших серверов. Если вы являетесь родителем или опекуном и знаете, что ваш ребенок предоставил нам личную информацию, свяжитесь со мной, чтобы я смог предпринять необходимые действия.',
      ],
    },
    sectionWithChangesToThisPrivacyPolicy: {
      title: 'Изменения в настоящей Политике конфиденциальности',
      content: [
        'Я могу время от времени обновлять нашу Политику конфиденциальности. Таким образом, вам рекомендуется периодически просматривать эту страницу на предмет изменений. Я сообщу вам о любых изменениях, разместив новую Политику конфиденциальности на этой странице. Эти изменения вступают в силу сразу после публикации на этой странице.',
      ],
    },
    sectionWithContactUs: {
      title: 'Свяжитесь с нами',
      content: [
        'Если у вас есть какие-либо вопросы или предложения по поводу моей Политики конфиденциальности, не стесняйтесь обращаться ко мне по адресу <a href="mailto:getsights.info@gmail.com">getsights.info@gmail.com</a>.'
      ],
    },
  },
  [UKRAINIAN]: {
    mainTitle: 'Політика Конфіденційності',
    sectionWithIntroduction: {
      title: 'Вступ',
      content: [
        'Додаток GetSights створено як додаток з підтримкою реклами. Ця ПОСЛУГА надається безкоштовно і призначена для використання «як є».',
        'Ця сторінка використовується для інформування відвідувачів про мою політиці щодо збору, використання і розкриття Особистою інформації, якщо хтось вирішив використовувати мій Сервіс.',
        'Якщо ви вирішите використовувати мій Сервіс, ви погоджуєтеся на збір і використання інформації щодо цієї політики. Особиста інформація, яку я збираю, використовується для надання та поліпшення Сервісу. Я не буду використовувати або передавати вашу інформацію кому-небудь, крім випадків, описаних у цій Політиці конфіденційності.',
        'Терміни, які використовуються в цій Політиці конфіденційності, мають те ж значення, що і в наших Положеннях та умовах, доступних на GetSights, якщо інше не визначено в цій Політиці конфіденційності.',
      ],
    },
    sectionWithInformationCollectionAndUse: {
      title: 'Збір і використання інформації',
      content: [
        'Для кращого досвіду при використанні нашого Сервісу я можу вимагати від вас надати нам певну особисту інформацію. Інформація, яку я цікавлюся, буде зберігатися на вашому пристрої і не буде збиратися мною будь-яким чином.',
        'Додаток використовує сторонні сервіси, які можуть збирати інформацію, яка використовується для вашої ідентифікації.',
        'Посилання на політику конфіденційності сторонніх постачальників послуг, використовуваних додатком',
      ],
    },
    sectionWithLogData: {
      title: ' Дані журналу',
      content: [
        'Я хочу повідомити вам, що всякий раз, коли ви використовуєте мій Сервіс, в разі помилки в додатку я збираю дані та інформацію (через сторонні продукти) на вашому телефоні, звані даними журналу. Ці дані журналу можуть включати таку інформацію, як IP-адреса вашого пристрою, ім\'я пристрою, версія операційної системи, конфігурація додатки при використанні мого Сервісу, час і дата використання вами Сервісу та інші статистичні дані.',
      ],
    },
    sectionWithCookies: {
      title: 'Cookies',
      content: [
        'Файли cookie - це файли з невеликим обсягом даних, які зазвичай використовуються в якості анонімних унікальних ідентифікаторів. Вони відправляються в ваш браузер з веб-сайтів, які ви відвідуєте, і зберігаються у внутрішній пам\'яті вашого пристрою.',
        'Цей Сервіс не використовує ці «куки» явно. Однак додаток може використовувати сторонній код і бібліотеки, які використовують файли cookie для збору інформації та поліпшення своїх послуг. У вас є можливість прийняти або відхилити ці файли cookie і дізнатися, коли файл cookie відправляється на ваш пристрій. Якщо ви вирішите відмовитися від наших файлів cookie, можливо, ви не зможете використовувати деякі частини цієї Послуги.',
      ],
    },
    sectionWithServiceProviders: {
      title: 'Постачальники послуг',
      content: [
        'Я хочу повідомити користувачам цього Сервісу, що ці треті сторони мають доступ до вашої Особистої інформації. Причина в тому, щоб виконувати поставлені перед ними завдання від нашого імені. Однак вони зобов\'язані не розголошувати та не використовувати інформацію для будь-яких інших цілей.',
        'Я можу наймати сторонні компанії і приватних осіб з наступних причин:',
      ],
      list: [
        'Щоб полегшити наш Сервіс;',
        'Для надання Сервісу від нашого імені;',
        'Для надання послуг, пов\'язаних з Сервісом; або',
        'Щоб допомогти нам в аналізі використання нашого Сервісу.',
      ],
    },
    sectionWithSecurity: {
      title: 'Безпека',
      content: [
        'Я ціную вашу довіру до надання нам вашої особистої інформації, тому ми прагнемо використовувати комерційно прийнятні засоби її захисту. Але пам\'ятайте, що жоден метод передачі через Інтернет або метод електронного зберігання не є на 100% безпечним і надійним, і я не можу гарантувати його абсолютну безпеку.',
      ],
    },
    sectionWithLinksToOtherSites: {
      title: 'Посилання на інші сайти',
      content: [
        'Цей Сервіс може містити посилання на інші сайти. Якщо ви натиснете на сторонню посилання, ви будете перенаправлені на цей сайт. Зверніть увагу, що цими зовнішніми сайтами я не керую. Тому я настійно рекомендую вам ознайомитися із розділом Про приватну цих веб-сайтів. Я не контролюю і не несу відповідальності за контент, політику конфіденційності або дії будь-яких сторонніх сайтів або служб.',
      ],
    },
    sectionWithChildrensPrivacy: {
      title: 'Конфіденційність дітей',
      content: [
        'Ці Послуги не призначені для осіб молодше 13 років. Я свідомо не збираю особисту інформацію від дітей молодше 13 років. У разі, якщо я виявляю, що дитина віком до 13 років надав мені особисту інформацію, я негайно забираю її з наших серверів. Якщо ви є батьком або опікуном і знаєте, що ваша дитина надав нам особисту інформацію, зв\'яжіться зі мною, щоб я зміг зробити необхідні дії.',
      ],
    },
    sectionWithChangesToThisPrivacyPolicy: {
      title: 'Зміни в цій Політиці конфіденційності',
      content: [
        'Я можу час від часу оновлювати нашу Політику конфіденційності. Таким чином, вам рекомендується періодично переглядати цю сторінку на предмет змін. Я повідомлю вам про будь-які зміни, розмістивши нову політику конфіденційності на цій сторінці. Ці зміни набирають чинності відразу після публікації на цій сторінці.',
      ],
    },
    sectionWithContactUs: {
      title: 'Зв\'яжіться з нами',
      content: [
        'Якщо у вас є які-небудь питання або пропозиції з приводу моєї Політики конфіденційності, не соромтеся звертатися до мене за адресою <a href="mailto:getsights.info@gmail.com">getsights.info@gmail.com</a>.'
      ],
    },
  },
};

function renderData(data) {
  return data.reduce((acc, item) => acc += `<p>${item}</p>`, '');
}
function renderListItems(list) {
  return list.reduce((acc, item) => acc += `<li>${item}</li>`, '');
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

function renderSectionWithData(data) {
  return `
    <section class="rules">
      <h2>${data.title}</h2>
      <div class="contentContainer">
        ${renderData(data.content)}
      </div>
    </section>
  `;
};

function renderSectionWithInformationCollectionAndUse(data) {
  return `
    <section class="rules">
      <h2>${data.title}</h2>
      <div class="contentContainer">
        ${renderData(data.content)}
        <ul>
          <li>
            <a href="https://www.google.com/policies/privacy/" target="_blank">
              Google Play Services
            </a>
          </li>
          <li>
            <a href="https://policies.google.com/privacy" target="_blank">
              Google Analytics
            </a>
          </li>
        </ul>
      </div>
    </section>
  `;
};

function renderSectionWithServiceProviders(data) {
  return `
    <section class="rules">
      <h2>${data.title}</h2>
      <div class="contentContainer">
        ${renderData(data.content)}
        <ul>
          ${renderListItems(data.list)}
        </ul>
      </div>
    </section>
  `;
};

function renderContent(currentLanguage) {
  var main = document.querySelector('main');
  var content = ALL_CONTENT[currentLanguage];

  var header = renderHeader(content.mainTitle);
  var sectionWithIntroduction = renderSectionWithData(content.sectionWithIntroduction);
  var sectionWithInformationCollectionAndUse = renderSectionWithInformationCollectionAndUse(content.sectionWithInformationCollectionAndUse);
  var sectionWithLogData = renderSectionWithData(content.sectionWithLogData);
  var sectionWithCookies = renderSectionWithData(content.sectionWithCookies);
  var sectionWithServiceProviders = renderSectionWithServiceProviders(content.sectionWithServiceProviders);
  var sectionWithSecurity = renderSectionWithData(content.sectionWithSecurity);
  var sectionWithLinksToOtherSites = renderSectionWithData(content.sectionWithLinksToOtherSites);
  var sectionWithChildrensPrivacy = renderSectionWithData(content.sectionWithChildrensPrivacy);
  var sectionWithChangesToThisPrivacyPolicy = renderSectionWithData(content.sectionWithChangesToThisPrivacyPolicy);
  var sectionWithContactUs = renderSectionWithData(content.sectionWithContactUs);

  main.insertAdjacentHTML('beforebegin', header);
  main.innerHTML = `
    ${sectionWithIntroduction}
    ${sectionWithInformationCollectionAndUse}
    ${sectionWithLogData}
    ${sectionWithCookies}
    ${sectionWithServiceProviders}
    ${sectionWithSecurity}
    ${sectionWithLinksToOtherSites}
    ${sectionWithChildrensPrivacy}
    ${sectionWithChangesToThisPrivacyPolicy}
    ${sectionWithContactUs}
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

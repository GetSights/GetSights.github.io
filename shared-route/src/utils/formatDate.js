import ruLocale from 'date-fns/locale/ru';
import format from 'date-fns/format';

const formatDate = (date) => {
  const locale = (window.navigator.language === 'ru' || window.navigator.language === 'ru-RU')
    ? ruLocale
    : undefined;

  return format(new Date(date), 'd MMMM, yyyy', { locale: locale });
};

export default formatDate;

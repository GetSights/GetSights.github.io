const getQueryParams = () => {
  const query = window.location.search;

  return query
    .substring(1) // remove ? sign from start of query
    .split('&')
    .reduce((acc, current) => {
      const data = current.split('=');
      acc[data[0]] = data[1];

      return acc;
    }, {});
};

export default getQueryParams;

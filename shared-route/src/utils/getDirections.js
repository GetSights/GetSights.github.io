/*
 * This code has been taken from GetSights project and modify a little to work with browsers
 */

const isValidLatLng = (num, range) => typeof num === 'number' && num <= range && num >= -1 * range;

const isValidCoordinates = (coords) => (
  isValidLatLng(coords.latitude, 90) && isValidLatLng(coords.longitude, 180)
);

const getParams = (params) => (
  params
    .map(({ key, value }) => `${key}=${value}`)
    .join('&')
);

const getWaypoints = (waypoints) => {
  if (waypoints.length === 0) {
    return '';
  }

  const params = waypoints
    .map((value) => `${value.latitude},${value.longitude}`)
    .join('|');

  return `&waypoints=${params}`;
};

const getDirections = ({ source, destination, params = [], waypoints = [] }) => {
  console.log(source, isValidCoordinates(source));
  if (source && isValidCoordinates(source)) {
    params.push({
      key: 'origin',
      value: `${source.latitude},${source.longitude}`,
    });
  }

  if (destination && isValidCoordinates(destination)) {
    params.push({
      key: 'destination',
      value: `${destination.latitude},${destination.longitude}`,
    });
  }

  const url = `https://www.google.com/maps/dir/?api=1&${getParams(params)}${getWaypoints(waypoints)}`;

  window.location = url;
};

export default getDirections;

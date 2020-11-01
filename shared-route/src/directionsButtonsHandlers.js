import getDirections from './utils/getDirections';

const WALK = 'walking';
const DRIVE = 'driving';
let travelMode = WALK;

const setCurrent = (type, walkButton, driveButton) => {
  travelMode = type;

  if (type === WALK) {
    walkButton.classList.add('current');
    driveButton.classList.remove('current');
  } else {
    walkButton.classList.remove('current');
    driveButton.classList.add('current');
  }
};

const directionsButtonsHandlers = (route) => {
  const walkButton = document.getElementById('Walk');
  const driveButton = document.getElementById('Drive');
  const directionsButton = document.getElementById('Directions');

  setCurrent(WALK, walkButton, driveButton);

  walkButton.addEventListener('click', () => setCurrent(WALK, walkButton, driveButton));
  driveButton.addEventListener('click', () => setCurrent(DRIVE, walkButton, driveButton));
  directionsButton.addEventListener('click', () => {
    const waypoints = route.points.slice();
    const source = waypoints.shift();
    const destination = waypoints.pop();
    const params = [{
      key: 'travelmode',
      value: travelMode,
    }];

    getDirections({ source, destination, params, waypoints });
  });
};

export default directionsButtonsHandlers;

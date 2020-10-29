import getDirections from '../utils/getDirections';
import './style.scss';

const addModal = (content) => {
  const body = document.body;

  const markup = `
    <aside class="modalWithOptions">
      <ul class="options">
        <li><button type="button" id="InfoButton">${content.info}</button></li>
        <li><button type="button" id="OpenOnTheMapButton">${content.openOnTheMap}</button></li>
      </ul>
      <div class="backdrop"></div>
    </aside>
  `;

  body.insertAdjacentHTML('beforeend', markup);
};

const openModal = (modal) => {
  modal.classList.add('visible');
};

const closeModal = (modal) => {
  modal.classList.remove('visible');
};

const renderModalWithOptions = (route, content) => {
  addModal(content);

  const modal = document.querySelector('.modalWithOptions');
  if (!modal) {
    return;
  }

  const buttonWithOptions = document.querySelector('.buttonWithOptions');
  const openOnTheMapButton = document.getElementById('OpenOnTheMapButton');
  const backdrop = document.querySelector('.modalWithOptions .backdrop');

  buttonWithOptions && buttonWithOptions.addEventListener('click', () => openModal(modal));
  backdrop && backdrop.addEventListener('click', () => closeModal(modal));
  openOnTheMapButton && openOnTheMapButton.addEventListener('click', () => {
    const waypoints = route.points.slice();
    const source = waypoints.shift();
    const destination = waypoints.pop();
    const params = [{
      key: 'travelmode',
      value: 'driving',
    }];

    getDirections({ source, destination, params, waypoints });
  });
};

export default renderModalWithOptions;

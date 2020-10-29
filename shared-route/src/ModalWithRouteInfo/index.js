import formatDate from '../utils/formatDate';
import './style.scss';

const addModal = (route, content) => {
  const body = document.body;

  const markup = `
    <aside class="modalWithRouteInfo">
      <ul class="info">
        <li>
          <span>${content.name}:</span>
          <span>${route.name}</span>
        </li>
        <li>
          <span>${content.createdAt}:</span>
          <span class="date">${formatDate(route.createdAt)}</span>
        </li>
        <li>
          <span>${content.updatedAt}:</span>
          <span class="date">${formatDate(route.updatedAt)}</span>
        </li>
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

const renderModalWithRouteInfo = (route, content) => {
  addModal(route, content);

  const modal = document.querySelector('.modalWithRouteInfo');
  const openModalButton = document.getElementById('InfoButton');
  const backdrop = document.querySelector('.modalWithRouteInfo .backdrop');

  if (modal && openModalButton && backdrop) {
    openModalButton.addEventListener('click', () => openModal(modal));
    backdrop.addEventListener('click', () => closeModal(modal));
  }
};

export default renderModalWithRouteInfo;

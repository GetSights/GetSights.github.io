import formatDate from '../utils/formatDate';
import './style.scss'

const addModal = () => {
  const body = document.body;

  const markup = `
    <aside class="modalWithSlideInfo">
      <div class="info">
        <div class="headerInfo">
          <button type="button" class="close" id="CloseModalWithSlideInfoButton">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path fill="white" d="M19.37,16.36c-2.12-2.12-4.24-4.24-6.36-6.36c2.12-2.12,4.24-4.24,6.36-6.36c1.94-1.94-1.07-4.96-3.02-3.02	C14.24,2.75,12.12,4.86,10,6.98C7.88,4.86,5.76,2.75,3.64,0.63C1.7-1.32-1.32,1.7,0.63,3.64C2.75,5.76,4.87,7.88,6.98,10	c-2.12,2.12-4.24,4.24-6.36,6.36c-1.94,1.94,1.07,4.96,3.02,3.02c2.12-2.12,4.24-4.24,6.36-6.36c2.12,2.12,4.24,4.24,6.36,6.36	C18.3,21.32,21.32,18.3,19.37,16.36z"/>
              </svg>
            </span>
          </button>
        </div>
      </div>
      <div class="backdrop"></div>
    </aside>
  `;

  body.insertAdjacentHTML('beforeend', markup);
};

const openModal = (e, modal, slideshow, data) => {
  const info = modal.querySelector('.info');
  const element = e.target.closest('li');
  const index = Array.prototype.indexOf.call(slideshow.children, element);
  const currentSlideInfo = data[index];

  if (!info || !currentSlideInfo) {
    return;
  }

  const markup = `
    <div class="infoContainer">
      <span class="country">${currentSlideInfo.address.country}</span>
      <span class="city">${currentSlideInfo.address.city}</span>
      <span class="street">${currentSlideInfo.address.street}</span>
      <span class="date">${formatDate(currentSlideInfo.createdAt)}</span>
      <span class="description">${(currentSlideInfo.description)}</span>
    </div>
  `;

  info.insertAdjacentHTML('beforeend', markup);
  modal.classList.add('visible');
};

const closeModal = (modal) => {
  const infoContainer = modal.querySelector('.infoContainer');

  if (infoContainer) {
    infoContainer.parentElement.removeChild(infoContainer);
    modal.classList.remove('visible');
  }
};

let xDown = null;
let yDown = null;

const getTouches = (evt) => {
  return evt.touches;
}

const handleTouchStart = (evt) => {
    const firstTouch = getTouches(evt)[0];

    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
};

const handleTouchMove = (evt, modal, slideshow, data) => {
    if (!xDown || !yDown) {
      return;
    }

    const xUp = evt.touches[0].clientX;
    const yUp = evt.touches[0].clientY;

    const xDiff = xDown - xUp;
    const yDiff = yDown - yUp;

    if (Math.abs(xDiff) < Math.abs(yDiff)) {
      if (yDiff > 0) {
        console.log('up swipe');
        openModal(evt, modal, slideshow, data);
      } else {
        console.log('down swipe');
      }
    }

    xDown = null;
    yDown = null;
};

export const renderModalWithSlideInfo = (data) => {
  addModal();

  const modal = document.querySelector('.modalWithSlideInfo');
  const slideshow = document.querySelector('.slideshow');
  const closeButtonModal = document.getElementById('CloseModalWithSlideInfoButton');
  const backdrop = document.querySelector('.modalWithSlideInfo .backdrop');

  if (modal && slideshow && closeButtonModal && backdrop) {
    slideshow.addEventListener('touchstart', handleTouchStart);
    slideshow.addEventListener('touchmove', (e) => handleTouchMove(e, modal, slideshow, data));
    closeButtonModal.addEventListener('click', () => closeModal(modal));
    backdrop.addEventListener('click', () => closeModal(modal));
  }

  registerOpenMoreSlideInfoButtonHandler(data);
};

export const registerOpenMoreSlideInfoButtonHandler = (data) => {
  const modal = document.querySelector('.modalWithSlideInfo');
  const slideshow = document.querySelector('.slideshow');
  const openMoreSlideInfoButtons = document.querySelectorAll('.openMoreSlideInfoButton');

  if (modal && slideshow && openMoreSlideInfoButtons) {
    // TODO: Add delegation instead
    Array.prototype.forEach.call(openMoreSlideInfoButtons, (openMoreSlideInfoButton) => {
      openMoreSlideInfoButton.addEventListener('click', (e) => {
        e.stopPropagation();
        openModal(e, modal, slideshow, data);
      });
    });
  }
};

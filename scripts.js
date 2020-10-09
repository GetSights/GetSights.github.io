function registerHandlers() {
  var linkToAppleStore = document.getElementById('AppleStoreLink');

  linkToAppleStore.addEventListener('click', function() {
    alert('Unfortunately GetSights has not released to Apple Store yet :( \n\nIf you would like to know exact release date please drop your email to getsights.info@gmail.com or follow us on social media');
  })
}

function init() {
  registerHandlers();
}

window.addEventListener('load', init);

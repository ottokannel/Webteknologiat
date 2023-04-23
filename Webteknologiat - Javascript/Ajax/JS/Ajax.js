let searchCount = parseInt(localStorage.getItem('searchCount')) || 0;
const counter = document.getElementById('counter');
counter.textContent = searchCount;

const loadingAnimation = document.querySelector('#loading-animation');
const resultContainer = document.querySelector('#result-container');
const searchButton = document.querySelector('#fetch-button');

searchButton.addEventListener('click', () => {
  // Näytä animaatio
  loadingAnimation.style.display = 'block';
      // Piilota animaatio
      loadingAnimation.style.display = 'none';
    });

counter.textContent = searchCount;
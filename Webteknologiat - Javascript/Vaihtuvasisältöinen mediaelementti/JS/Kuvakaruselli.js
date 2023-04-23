let images = [
  {
    "src": "https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRoT6NNDUONDQmlthWrqIi_frTjsjQT4UZtsJsuxqxLiaFGNl5s3_pBIVxS6-VsFUP_",
    "alt": "Kuva 1",
    "caption": "Ensimmäinen kuva"
  },
  {
    "src": "https://ysao.fi/wp-content/uploads/2022/02/Kissa_hingunniemi.jpg",
    "alt": "Kuva 2",
    "caption": "Toinen kuva"
  },
  {
    "src": "https://www.tassuapu.fi/wp-content/uploads/2022/08/kissa-nuolee-itseaan.jpg",
    "alt": "Kuva 3",
    "caption": "Kolmas kuva"
  }
];

let mediaElement = document.getElementById("image-element");
let intervalId = null; // keep track of the interval ID
let intervalRunning = false; // keep track of whether the interval is running or not
updateMedia();

function updateMedia() {
	$(mediaElement).fadeOut("slow", function() {
	mediaElement.src = images[currentIndex].src;
	mediaElement.type = images[currentIndex].type;
  $(mediaElement).fadeIn("slow");});
  localStorage.setItem('currentIndex', currentIndex);
}

function myFunction(){
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateMedia();
}

function myFunction2() {
  if (intervalRunning) {
    // If the interval is running, stop it
    clearInterval(intervalId);
    intervalRunning = false;
} else {
    // If the interval is not running, start it
    intervalId = setInterval(function() {
        currentIndex = (currentIndex + 1) % images.length;
        imageElement.src = images[currentIndex].src;
    }, 2000);
    intervalRunning = true;
}
}

function myFunction3(){
  currentIndex = (currentIndex + 1) % images.length;
  updateMedia();
  }

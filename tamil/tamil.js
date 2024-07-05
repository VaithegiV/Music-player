/* // Import songs data from an external file (songs.js)
import { songs } from '../data/songs.js';

 // Function to handle play/pause functionality
function playPause() {
  // Find the audio element associated with the clicked control
  let audio = element.closest('.audio').querySelector('.song');
  let ctrlIcon = element.querySelector('.ctrlIcon');

  if (ctrlIcon.classList.contains("fa-pause")) {
    // Pause the audio
    audio.pause();
    // Change icon to play
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
  } else {
    // Play the audio
    audio.play();
    // Change icon to pause
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
  }
} 

// Generate HTML for each song in the 'songs' array
let songsHTML = '';

songs.forEach((song) => {
  songsHTML +=
    `<div class="songqueue">
      <div class="audio">
        <audio class="song">
          <source src="${song.audio}" type="audio/mpeg">
        </audio>
      </div>
      <div class="middle">
        <div class="songname">${song.songname}</div>
        <div class="artistname">${song.artist}</div>
      </div>
      <div class="favorite">
        <img class="add-favorite" src="../media/OIP.jpg">
      </div>
    </div>`;
});

// Insert generated HTML into the DOM
document.querySelector('.song-artist-name').innerHTML = songsHTML;
*/



// Function to play or pause audio
function playPause(songId, iconId) {
  var audio = document.getElementById(songId);
  var icon = document.getElementById(iconId);

  // Check if the audio is paused or not
  if (audio.paused) {
      // Pause any other playing audio
      pauseAllAudios();

      // Play the selected audio
      audio.play();
      // Change icon to pause icon
      icon.classList.remove('fa-play');
      icon.classList.add('fa-pause');
  } else {
      // Pause the audio
      audio.pause();
      // Change icon to play icon
      icon.classList.remove('fa-pause');
      icon.classList.add('fa-play');
  }
}

// Function to pause all audios except the one with the provided id
function pauseAllAudios() {
  var allAudios = document.querySelectorAll('audio');
  var allIcons = document.querySelectorAll('.fa-solid');

  for (var i = 0; i < allAudios.length; i++) {
      if (!allAudios[i].paused) {
          allAudios[i].pause();
          var iconId = allAudios[i].id.replace('song', 'ctrlIcon');
          var icon = document.getElementById(iconId);
          icon.classList.remove('fa-pause');
          icon.classList.add('fa-play');
      }
  }
}

function addToFavourtite(hrtbtnId){
let favBtn = document.getElementById(hrtbtnId);

favBtn.addEventListener("click", function(e){
if(e.target.tagName === "DIV"){
  e.target.classList.toggle("checked");
}
});

};

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


const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const volume = document.getElementById('volume');
const timestamp = document.getElementById('timestamp');

// Play & pause video
function toggleVideoStatus() {
  // Check to see if the video is paused
  if (video.paused) {
    video.play(); // Play video
  } else {
    video.pause(); // Pause video
  }
}

// Update play/pause icon
function updatePlayIcon() {
  // Check to see if the video is paused
  if (video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
  }
}

// Stop video
function stopVideo() {
  video.currentTime = 0; // currentTime is seconds that video is playing
  video.pause();
}

// Update progress & timestamp
function updateProgress() {
  // (time played / whole time) * 100 -> to get %
  progress.value = (video.currentTime / video.duration) * 100;

  // Get minutes
  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) {
    mins = '0' + String(mins);
  }

  // Get seconds
  let secs = Math.floor(video.currentTime % 60);
  if (secs < 10) {
    secs = '0' + String(secs);
  }

  timestamp.innerText = `${mins}:${secs}`;
  // timestamp.innerHTML = `${mins
  //   .toString()
  //   .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// Set video time to progress
function setVideoProgres() {
  // (% * whole time) / 100 -> to get time played
  video.currentTime = (+progress.value * video.duration) / 100;
}

// Set audio volume
function setVideoVolume() {
  video.volume = volume.value;
}

// Event Listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgres);
volume.addEventListener('change', setVideoVolume);

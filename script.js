let audio = document.createElement('audio');
audio.src = 'sound.mp3';
audio.loop = true;



audio.play().catch(function(error) {
  console.log("Audio play failed:", error);
});


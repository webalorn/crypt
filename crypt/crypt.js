function dance(audioPath) {
	var audio = new Audio(audioPath);
	let stairs = document.getElementById("stairs");
	let arrow = document.getElementById("arrow");
	let dancing = document.querySelectorAll(".dancing");
	let putAudio = document.getElementById("put-audio");
	let body = document.querySelector("body");

	stairs.addEventListener('click', event => {
		audio.play();
		audio.addEventListener('ended', function() {
			this.currentTime = 0;
			this.play();
		}, false);

		stairs.style.display = 'none';
		arrow.style.display = 'none';
		putAudio.style.display = 'none';
		for (let img of dancing) {
			img.style.display = 'block';
		}
		setTimeout(function() {
			body.classList.add('floor');
		}, 1000);
		setTimeout(function() {
			body.classList.add('dancefloor');
		}, 2500);
	});
}
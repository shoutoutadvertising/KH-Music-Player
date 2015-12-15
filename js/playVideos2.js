		
		// Loads Video and pauses before plays						
		
		
					
					
					displayMessage = (function displayMessageInit() {
											
											var node = document.querySelector('#message');

											return function displayMessage(message, isError) {
												node.innerHTML = message;
												node.className = isError ? 'error' : 'info';
											};
									}
									
									());
					
					function playSelectedFileInit(idFileInput) {
									
									
									return function (event) {
												
											var file = $(idFileInput)[0].files[0];

											var type = file.type;

											var videoNode = document.querySelector('#videoControls');

											var canPlay = videoNode.canPlayType(type);

											canPlay = (canPlay === '' ? 'no' : canPlay);

											var message = 'Can play type "' + type + '": ' + canPlay;

											var isError = canPlay === 'no';

											displayMessage(message, isError);

											if (isError) {
												return;
											}

											var fileURL = URL.createObjectURL(file);

											videoNode.src = fileURL;
											
											
											
											videoNode.pause();
									
									}
									
					}
					
					
					// Listen for the pushing of the Load Video Button. Load selected video file into the video controls or playback box
					inputNode = document.querySelector('#playVid');
					inputNode.addEventListener('click', playSelectedFileInit('#fileInput', false));

					inputNode2 = document.querySelector('#playVid2');
					inputNode2.addEventListener('click', playSelectedFileInit('#fileInput2', false));

					inputNode3 = document.querySelector('#playVid3');
					inputNode3.addEventListener('click', playSelectedFileInit('#fileInput3', false));

				
				
		
		
		
		// Play or pauses video currently loaded
		pauseVideo = document.querySelector('#stopVid');
		pauseVideo.addEventListener('click', videoControl, false);
		
		function videoControl() {
			
			var myVideo = document.getElementById('videoControls');
			
			if (myVideo.paused) {
				myVideo.play();
				document.getElementById('stopVid').className += " redStop";
				document.getElementById('stopVid').innerHTML = 'Pause';
			} else {
				myVideo.pause();
				document.getElementById('stopVid').className = document.getElementById('stopVid').className.replace	( /(?:^|\s)redStop(?!\S)/g , '' );
				document.getElementById('stopVid').innerHTML = 'Play';
			}
		}

	

		// Make video fullscreen. Find the right method, call on correct element
		
		function launchFullscreen(element) {
		
		  var element = document.querySelector('#videoControls');
		  if(element.requestFullscreen) {
			element.requestFullscreen();
		  } else if(element.mozRequestFullScreen) {
			element.mozRequestFullScreen();
		  } else if(element.webkitRequestFullscreen) {
			element.webkitRequestFullscreen();
		  } else if(element.msRequestFullscreen) {
			element.msRequestFullscreen();
		  } else if (element.webkitSupportsFullscreen) {
		    element.webkitEnterFullscreen();
		  }
		  
		}
		
	
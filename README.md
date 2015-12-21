# KH-Music-Player

Plays music/audio files saved in the assets/music folder. Must be named #.mp3 (Example: 1.mp3)

Plays background music from the same folder. If file missing or corrupt, it moves on to next one.

Plays videos selected from folder or app. Beta version using the playVideos2.js file. 

Seems to work good on desktop browsers and android.

Bugs:  

iOS - I've opened the index.html file to test the player using the built in webViewer in 'Documents 5' and also using the app, HTML Presenter (which wraps the html5 page in cordova uiWebView from my understanding). While playing video selected from the app 'Documents 5' on an iPad Mini (1st Gen) with iOS 9, page crashes. I noticed that sometimes i get a low memory warning prior to crashing. Other times, no warning, then it just crashes. When the video does play with no issue, it buffers to a certain point then buffers no more. This happens on larger videos. But shorter videos of about 2 - 3 minutes play and buffer completely without much issue. 

If i exit fullscreen mode when it is in this state, if i try to click the 'load video' button to refresh the file in the video player box, it sends the 'error' message in the video controls area and the app cannot recuperate.

I'm thinking it has to do with iOS wanting to load the complete video file into the browser page before playing rather than 'stream' it in chunks, buffering a new chunk and getting rid of the old chunk. Perhaps need to see about coding it to play video file in chunks. Or is there a way to just qeue the video file for playing in ios' built in player and handing the file off completely.

Song selecting, after having selected songs, sometimes switching apps and returning to the song player causes the page to 'refresh' thus losing the song numbers that were chosen beforehand by the user.





# KH-Music-Player

Plays music/audio files saved in the assets/music folder. Must be named #.mp3 (Example: 1.mp3)

Plays background music from the same folder. If file missing or corrupt, it moves on to next one.

Plays videos selected from folder or app. Beta version using the playVideos2.js file. 

Seems to work good on desktop browsers and android.

Bugs:  I've opened the index.html file to test the player using the built in webViewer in 'Documents' and also using the app, HTML Presenter (which wraps the html5 page in cordova uiWebView from my understanding). While playing video selected from the app 'Documents' on an iPad Mini (1st Gen) with iOS 9, page crashes. I noticed that sometimes i get a low memory warning prior to crashing. Other times, no warning, then it just crashes. When the video does play with no issue, it buffers to a certain point then buffers no more. If i exit fullscreen mode when it is in this state, if i try to click the 'load video' button to refresh the file in the video player box, it sends the 'error' message in the video controls area and the app cannot recuperate.



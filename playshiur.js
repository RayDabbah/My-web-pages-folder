var myPlayer = document.createElement('audio');
myPlayer.id = 'audioplayer';
document.body.appendChild(myPlayer);
document.getElementById('player').addEventListener('click', playShiur, false);
function playShiur(e) {
document.getElementById('audioplayer').addEventListener('ended', endPlayback, false);

       if (e.target.id === 'paused') {
            e.target.id = 'playing';
            myPlayer.currentTime = holdPlace;
            myPlayer.play();
        } else if (e.target.id !== ('playing') || !('paused')) {
            if (document.querySelector('#paused')) {
            document.querySelector('#paused').id = '';
            }
             if (document.querySelector('#playing')) {
            document.querySelector('#playing').id = '';
            }
            myPlayer.parentNode.removeChild;
            myPlayer.id = 'audioplayer';
            document.body.appendChild(myPlayer);
    var playSource = e.target.getAttribute('data-src');
     e.target.id = 'playing';
    var player = document.getElementById('audioplayer');
     player.setAttribute('src', '');
    player.setAttribute('src', playSource);
    myPlayer.play();
        } else if (e.target.id === 'playing') {
            myPlayer.pause();
            e.target.id = 'paused';
             holdPlace = myPlayer.currentTime;
        } 
function endPlayback() {
   e.target.id = '';
                       }
                     }
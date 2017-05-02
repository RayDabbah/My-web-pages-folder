var myPlayer = document.createElement('audio');
myPlayer.id = 'audioplayer';
//document.body.appendChild(myPlayer);

document.getElementById('player').addEventListener('click', playShiur, false);
function playShiur(e) {
    var playSource = e.target.getAttribute('data-src');
    e.target.appendChild(myPlayer);
    
    var player = document.getElementById('audioplayer');
    player.setAttribute('controls', 'controls');
    player.setAttribute('src', playSource);
    myPlayer.play();
}
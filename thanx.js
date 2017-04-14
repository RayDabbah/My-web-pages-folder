var pix=document.getElementById("pic"),
goRight = true,
goDown = true,
leftPosition = -240,
topPosition = 400;

pix.style.position = 'fixed';
function setPosition(left) {
    leftPosition += left;
    pix.style.left = leftPosition + 'px';
}
function animateLeft ()  {
    if (leftPosition > 920) {
        goRight = false;
    }
    if (leftPosition < -250) {
        goRight = true;
    }
    return goRight ? setPosition(2) : setPosition(-2);
}
function upAndDown (upDown) {
    topPosition += upDown;
pix.style.top = topPosition + 'px';
}
function animateUpDown () {
    if (topPosition < 20) {
        goDown = false;
    }
    if (topPosition > 401) {
        goDown = true;
    }
    return goDown ? upAndDown(-2) : upAndDown(2);
}
setInterval(animateLeft, 15);
setInterval(animateUpDown, 15);
/*var pixa=["lady.png","images/DSCF6233.jpg","images/images.jpg", "images/RReisman.jpg","images/sefer.jpg","images/shiur.jpg","images/Shiur2.jpg",
          "images/sifrei_torah.png","images/yemenite.jpg"];
var pixIndex=0;
function changeImage() {
pix.setAttribute("src",pixa[pixIndex]);
pixIndex++;
 if (pixIndex >= pixa.length){
   pixIndex=0;
   }
  //console.log(pixa[pixIndex]);
}
setInterval(changeImage,2500);
pix.onclick = function () {
  changeImage();/* setInterval(changeImage,7500);
  };*/
  
//console.log(pixa[pixIndex]);

//Dropdown

var thin=document.getElementById("dropdown");
function drop () {
  thin.classList.toggle("show");
  
}
var lick=document.getElementById("button");
lick.onclick = function() {
  console.log("Should be showing");
  drop();
};
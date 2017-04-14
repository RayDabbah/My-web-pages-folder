var pix=document.getElementById("pic");
var pixa=["lady.png","DSCF6233.JPG","images/images.jpg", "images/RReisman.jpg","images/sefer.jpg","images/shiur.jpg","images/Shiur2.jpg",
          "images/sifrei_torah.png","images/yemenite.jpg"];
var pixIndex=0;
function changeImage() {
    pix.setAttribute("src",pixa[pixIndex]);
}   
console.log('length: ' + pixa.length);
/*for (var pixa; pixIndex <= pixa.length; pixIndex++) {
   setTimeout(changeImage,1200); console.log(pixa[pixIndex]);
}*/
while (pixIndex < (pixa.length)) {
    changeImage();
 setTimeout(changeImage,1200);
 pixIndex++;
 console.log(pixIndex);
console.log(pixa[pixIndex]);
}
if (pixIndex === 9){
    pixIndex=0;
}

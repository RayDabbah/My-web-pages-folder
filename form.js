//function totalWrap(){}
var thin=document.getElementById("dropdown");
function drop() {
  thin.classList.toggle("show");
}
var lick=document.getElementById("button");
lick.onclick = function() {
  drop();
};          
/*window.addEventListener('click', function(event) {
  if (event.target === ('button')) {
    thin.classList.toggle('show');
  }    else {
      thin.classList.remove('show');
   }
   console.log(event.target);
  });*/
var first= document.getElementById('first'),
last= document.getElementById('last'),
pass= document.getElementById('password'),
rePass = document.getElementById('repassword'),
est= document.getElementById('est');
 est.disabled = true;
/* document.getElementById('torahform').addEventListener('submit', action);
function action(event){
  event.preventDefault();

}*/
  document.getElementById('sub').innerHTML= 'Subtotal: $0.00<br>Tax: $0.00<br>% 0.00<br>Shipping: $0.00';
document.getElementById('torahform').addEventListener('change', figure);
document.getElementById('torahform').addEventListener('input', figure);
function figure(){
   var cd= parseInt(document.getElementById('cd').value, 10) || 0,
      flash=parseInt(document.getElementById('flash').value, 10) || 0,
      mp3=parseInt(document.getElementById('mp3').value, 10) || 0,
      state=document.getElementById('state').value,
      taxFactor= 1,
      shipping=document.getElementById('shipping').value,
      shipPrice,
      taxRate,
      price=document.getElementById('estimate');
      sub= document.getElementById('sub');
  var myRE=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
var total = parseInt(cd + mp3 +flash);
  if (first.value=== '' || last.value=== '' || pass.value === '' || email.value  === '' || myRE.test(email.value) === false || total === 0 || pass.value !== rePass.value) {
  est.disabled=true;
} else {
  est.disabled= false;
}
if (pass.value !== rePass.value && rePass.value !== '') {
  document.getElementById('error').innerHTML = 'Passwords do not match';
}
else {
   document.getElementById('error').innerHTML = '';
}
console.log(total);
     
   
     
      if (state==='NJ') {
        taxFactor=1.07;
      } else if (state==='CA') {
        taxFactor= 1.075;
        } else if( state==='WA') {
          taxFactor=1.065;
        } else {
          taxFactor= 1;
        }
        switch (shipping) {
          case 'standard':
            shipPrice = 2.75;
            break;
          case 'speedy':
            shipPrice = 10.40;
            break;
            case 'over':
            shipPrice= 93.75;
              break;
        }
         var estimate = (1 * cd) + (15 * flash) + (150 * mp3);
        if (estimate >= 30 &&  shipping==='standard' || estimate===0 ) {
          shipPrice= 0;
        }
        taxRate= ((taxFactor-1) * 10).toFixed(2);
        
      
      //result
      price.value='$' + ((estimate * taxFactor)+ shipPrice).toFixed(2);
      sub.innerHTML= 'Subtotal: $' + estimate.toFixed(2) + '<br>Tax: $' + (estimate * taxRate/10).toFixed(2) + '<br>' + (taxRate * 10).toFixed(2) + '% ' + state + '<br>Shipping: $' + shipPrice.toFixed(2);
}
//countdown clock
function countdown() { var timeLeft= new Date(2017, 7).getTime()-new Date().getTime();
      //=parseInt(t-today, 10);
var second=Math.floor((timeLeft/ 1000) % 60 ),
    seconds = ('0' + second).substr(-2),
    minutes=('0' + Math.floor((timeLeft/ 1000/60) % 60)).substr(-2),
    hours = Math.floor((timeLeft/ 1000/60/60) % 24),
    days = Math.floor(timeLeft/ 1000/ 60 / 60 / 24);
    if (seconds + minutes + hours + days >= 0){
    document.getElementById('countdown').innerHTML= days + ' Days, ' + hours + ' Hours, ' + minutes + ' Minutes, ' + seconds +' Seconds';
    } else {document.getElementById('countdown').innerHTML= 'SORRY BUT OUR SALE HAS EXPIRED!';}
}
countdown();
setInterval(countdown, 1000);
var age= document.getElementById('age'),
reveal = document.getElementById('reveal');
age.style.display = "none";
function hideCheckBox() {
  if (reveal.checked) {
    age.style.display = "";
  } else {
    age.style.display = "none";
  }
}
reveal.addEventListener('click',hideCheckBox);
    
    var picture= document.getElementById('pic'),
    leftPosition = 0,
    goRight = true;
    animateHandle = true;
    picture.style.position = 'fixed';
    picture.style.left = '-300px';
    picture.style.top = '175px';
     
function setPosition (left) {
 leftPosition += left;
 picture.style.left = leftPosition + 'px';
 console.log(picture.style.left);
}
function animate () {
 if (leftPosition > (window.innerWidth - 400)) {
   goRight = false;
 }
 if (leftPosition < -300) {
   goRight = true;
   }
   return goRight ? setPosition(2) : setPosition(-2);
 }
var int = setInterval(animate, 15);
picture.addEventListener('click', function() {
  if (animateHandle === true){
  clearInterval(int);
  animateHandle= false;
  int = null;
  } else if (animateHandle === false) {
    console.log('else ' + animateHandle +'intervalHandle: '  + int);
    animateHandle = true;
    int = setInterval(animate, 15);
  }
});
 
    
   /*var intervalHandle,
    intervalHandle2,
    currentPosition = 0,
    downPosition = 0;
    function beginAnimate () {
      picture.style.position = 'absolute';
      picture.style.left = '0px';
      picture.style.top = '200px';
      console.log(currentPosition);
      intervalHandle = setInterval(animateBox, 10);
    }

    function animateBox() {
      currentPosition += 2;
      downPosition += 1;
      picture.style.left = currentPosition + 'px';
      picture.style.top = downPosition + 'px';
      if (currentPosition > 1000) {
       clearInterval(intervalHandle);
     intervalHandle2 = setInterval(reverseAnimate, 20);
      }
       function reverseAnimate(){
      currentPosition -= 2;
      downPosition = 0;
       picture.style.left = currentPosition + 'px';
      picture.style.top = downPosition + 'px';
      console.log(currentPosition);
       if (currentPosition < 0) {
         clearInterval(intervalHandle2);
        beginAnimate();
    }
       }
     console.log(currentPosition); */
  function clock() {
    var c = document.getElementById('current-time');
	var d = new Date();
	var hours = d.getHours(),
	date= d.toDateString().split(' ');
	ampm = 'AM';
		if (hours > 12) {
			hours -= 12;
			ampm = 'PM';
		}
	if (hours === 12) {
			ampm = 'PM';
	} if (hours===0){
		hours=12;
		ampm='AM';
	}
		
		var sep,
		sec= '0' +d.getTime(),
		foo=sec.substr(11),
		sepClass = '';
		if (foo >=500) {sepClass = 'trans';}
		 else {sepClass = '';}// console.log(foo);
		
		sep = '<span id="' + sepClass + '">:</span>';
		c.innerHTML = date[1]+ ' ' + date[2] + '<br><br>' + hours + sep + ('0' + d.getMinutes()).substr(-2) + ' ' + ampm;
	}
  setInterval(clock, 500);
    
    
/*window.onload = function(){
  totalWrap();
  setTimeout(beginAnimate,2000);
};*/
var thin = document.getElementById("dropdown");

function drop() {
	thin.classList.toggle("show");
}
var lick = document.getElementById("button");
lick.addEventListener('click', function(e) {
	drop();
	e.stopPropagation();
}, false);
document.addEventListener('click', clickOutOf);
function clickOutOf(event) {
  if (event.target === ('button')) {
    thin.classList.toggle('show');
  }    else {
      thin.classList.remove('show');
   }
   
  }
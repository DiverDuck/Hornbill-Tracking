
let button = document.getElementById('time');

button.addEventListener("click",()=>{
	document.getElementById('date').innerHTML = Date();
});
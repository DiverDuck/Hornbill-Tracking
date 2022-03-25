let counterPlusElem = document.getElementById('counter-plus');
let counterDisplayElem = document.getElementById('counter-display');
let counterReset = document.getElementById('reset');
let content = counterDisplayElem.innerHTML;

let count = 0;
if(localstorage.getItem("count") !=null){
	count = localstorage.getItem("count");
}

updateDisplay();

counterPlusElem.addEventListener("click",()=>{
	count++
	updateDisplay();
}); 

counterReset.addEventListener("click",()=>{
	count = 0
	updateDisplay();
});

function updateDisplay(){
	counterDisplayElem.innerHTML = content + count.toString();
};























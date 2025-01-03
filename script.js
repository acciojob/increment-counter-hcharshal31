//your JS code here. If required.
let count = document.querySelector("#counter");
let incr = document.querySelector("#incrementBtn");
let number = 0;
incr.onclick = function(){
	alert(number);
	number++;
	count.innerHTML = number;
}
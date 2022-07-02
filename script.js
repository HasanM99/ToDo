var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

var x = document.querySelector("h1");
x.classList.add('coolTitle');

var y = document.querySelector("p");
y.classList.add('coolTitle2');




function inputLength(){
	return input.value.length;
}

function createListElement (){
	var li = document.createElement("li");
	var deleteBtn = document.createElement("button");
	deleteBtn.classList.toggle("btnStyle");
	deleteBtn.innerHTML = 'Delete';
	var text = document.createTextNode(input.value);
	li.appendChild(text);
	ul.appendChild(li);
	ul.appendChild(deleteBtn);


	// I want the input value (text field) to be an empty string at the end so I set it to an empty string
	input.value="";


	function crossItem(){
		li.classList.toggle("done");
	}
	li.addEventListener("click", crossItem);


	deleteBtn.addEventListener("click", function(){
		ul.removeChild(li);
		ul.removeChild(deleteBtn);
	})
}


function addListAfterClick(){
	if(inputLength()>0){
		createListElement();
	}
	
}


function addListAfterKeypress(event){
	if(inputLength()>0 && event.code=="Enter"){
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);



// adding the ability to press enter to add items instead of just having to click the button

// look for keyboard events online 
//keypress event instead of the click event 
input.addEventListener("keypress", addListAfterKeypress);



//If you click on the list item, it toggles the .done  class on and off



//
var item = document.querySelector("li");

















































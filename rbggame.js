var numSquares = 6;
var color = generateRandomColor(numSquares);
var squares = document.querySelectorAll(".square");
var pickedcolor = pickingcolor();
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easybtn = document.getElementById("easy");
var hardbtn = document.getElementById("hard");
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedcolor;

easybtn.addEventListener("click", function(){
  hardbtn.classList.remove("selected");
  easybtn.classList.add("selected");
  numSquares = 3;
  color = generateRandomColor(numSquares);
  pickedcolor = pickingcolor();
  h1.style.backgroundColor = "steelblue";
  message.textContent = "";
  for(var i=0; i<squares.length; i++){
  	if(color[i]){
  		squares[i].style.backgroundColor = color[i];
  	}
  	else{
  		squares[i].style.display = "none";
  	}
  }

});


hardbtn.addEventListener("click", function(){
  easybtn.classList.remove("selected");
  hardbtn.classList.add("selected");
  var numSquares = 6;
  color = generateRandomColor(numSquares);

  pickedcolor = pickingcolor();
  h1.style.backgroundColor = "steelblue";
  message.textContent = "";
  for(var i=0; i<squares.length; i++){
	squares[i].style.backgroundColor = color[i];
    squares[i].style.display = "block";
  	}
	
  
});

resetButton.addEventListener("click", function(){
    
    //generate new colors
    color = generateRandomColor(numSquares);
    //pick new random color from arr
    pickedcolor = pickingcolor();
    //change colors of squares
    colorDisplay.textContent = pickedcolor;
    //change colors
    for(var i = 0; i < squares.length; i++){
    	squares[i].style.backgroundColor = color[i];
    }
    // h1 to original
    h1.style.backgroundColor = "steelblue";
    //reset  play again button to new color
    resetButton.textContent = "New Colors"
    //changing correct also
    message.textContent = "";


});


for(var i = 0; i < squares.length; i++){ 
	//initilazating color to squares
	squares[i].style.backgroundColor = color[i];
  
    //add click listener
    squares[i].addEventListener("click", function(){
    //grab the rgb of this square
    var clickedcolor = this.style.backgroundColor ;

    if(clickedcolor === pickedcolor){
        message.textContent = "Correct!";
        resetButton.textContent = "Play Again?";
        changeColors(clickedcolor);
        h1.style.backgroundColor = clickedcolor; 
    }

    else{
    	this.style.backgroundColor = "#232323";
        message.textContent = "Try Again!";
    }
    });
}

    function changeColors(thatcolor){
    	//loop through all squares
    	for(var i = 0; i < squares.length; i++){
    		//color change of all squares
    		squares[i].style.backgroundColor = thatcolor;
    	}
    }


    function pickingcolor(){
    	var random = Math.floor(Math.random() * color.length);
    	return color[random];
    }
    
    function generateRandomColor(num){
    	var arr = [];
    	//adding num random color to arr
    	for (var i = 0; i <num; i++) {
    	//get random color and push into arr
    	arr.push(randomColor());
        
    	};
    	return arr;
    }

    function randomColor(){
    	//pick a "red" from "0-255"
    	var r = Math.floor(Math.random() * 256);
    	//pick a "green" from "0-255"
    	var g = Math.floor(Math.random() * 256);
    	//pick a "blue" from "0-255"
    	var b = Math.floor(Math.random() * 256);
       
       return "rgb(" + r +", " + g + ", " + b + ")";    
}



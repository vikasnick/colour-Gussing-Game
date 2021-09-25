var numOfSquares = 6;
var colors = generateRandomColor(numOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var msgDisplay = document.querySelector("#msg");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn")

easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numOfSquares = 3;
    colors = generateRandomColor(numOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor; 
    for(var i=0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
        }else{
            squares[i].style.display = "none";
         }
    }
})
hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numOfSquares = 6;
    colors = generateRandomColor(numOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor; 
    for(var i=0; i<squares.length; i++){
            squares[i].style.background = colors[i];
            squares[i].style.display = "block";
        
    }

})
resetButton.addEventListener("click", function(){
    //generate allnew colors
    colors = generateRandomColor(numOfSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change color of squars
    colorDisplay.textContent = pickedColor;
    
    //change color of square
    for(var i=0; i<squares.length; i++){
        squares[i].style.background = colors[i];
    }
    h1.style.background = "Steelblue";
    msgDisplay.textContent = "";
    
}) 

colorDisplay.textContent = pickedColor;

for(var i = 0; i<squares.length; i++){
    // Add initial color to Squares
    squares[i].style.background = colors[i]; 
      
    //add click istner to squares
    squares[i].addEventListener("click", function(){
        //grab color to clicked squares
        var clickedColor = this.style.background;
        //compare color to pickedColor
        if(clickedColor === pickedColor){
            msgDisplay.textContent = "Correct!";
            resetButton.textContent ="Play Again"; 
            changeColor(clickedColor);
            h1.style.background = clickedColor;
            
        }
        else{
            this.style.background = "#232323";
            msgDisplay.textContent = "Try Again!";
        }   
    });
}
function changeColor(Color){
    //loop through all squares
    for(var i =0; i<colors.length; i++){
        //change each color to match
        squares[i].style.background = Color;
    } 
}

function pickColor(){
    var random = Math.floor(Math.random()*colors.length);
    return colors[random];
}
function generateRandomColor(num){
    //make an array
    var arr=[]
    //repeate num item
    for (var i=0; i<num; i++){
        //get random color and push in to array
        arr.push(randomColor());
    }
    // return that array
    return arr;
}
function randomColor(){
        //pick a "red" from 0 - 255
        var r = Math.floor(Math.random()*256);
        // pick a "Green" from 0 -255
        var g = Math.floor(Math.random()*256);
        //pick a "blue" from 0 -255
        var b = Math.floor(Math.random()*256);
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }
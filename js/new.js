var str = "";

// function infixToPostFix
EX.InfixToPostfix = function(expression){
	var pfixString = "";
	var infixStack = new EX.LinkedStack();

	// Helper function to get the precedence of the operator
	var precedence = function(operator){
		switch(operator){
		case "^":
			return 3;
		case "*":
		case "/":
			return 2;
		case "+":
		case "-":
			return 1;
		default:
			return 0;
		}
	}

	for(var i=0; i<expression.length; i++){
		var c = expression.charAt(i);
		if(!isNaN(parseInt(c))){
			pfixString += c;
		}else if(c === "+" || c==="-" || c === "*" || c==="/" || c==="^"){
			while(c != "^" && !infixStack.isStackEmpty() && (precedence(c) <= precedence(infixStack.stackTop()))){
				pfixString += infixStack.popFromStack().item;
			}
			infixStack.pushToStack(c);
		}
	}
	while(!infixStack.isStackEmpty()){
		pfixString += infixStack.popFromStack().item;
	}



	this.getPostfix = function(){
		return pfixString;
	}
}
// Ending...

function makeStr() {
  str = str + this.value;
  $(".form-control").val(str);
}

function evaluateRes() {
  str = str + ".";
  var regex = /\d+[-./*+]/gi;
  var arr = str.match(regex);
  var newArr = [];
  for(var i = 0; i < arr.length; i++) {
    var string = arr[i];
    string = string.replace( /(\d+)([-./*+])/gi , "$1,$2");
    newArr.push(string);
  }
  newArr = newArr.join(",");
  newArr = newArr.split(",");
  newArr.pop();
  newArr = newArr.join(",");
  var in1 = new EX.InfixToPostfix(newArr); //234*+
  console.log("Postfix " + newArr + " ==> " + in1.getPostfix());
}





$(document).ready(function() {
  $(".btn").on("click" , makeStr);
  $(".equal").on("click" , evaluateRes);
});

var firstNum = null;
var secondNum = null;
var operator = null;
var arr = [];
var i = 0;
function valuePressed() {
  // TO DO
  console.log("Value Pressed");
  $(".form-control").focus();
  var btnVal = $(".form-control").val() + this.innerHTML;
  $(".form-control").val(btnVal);
}

function checkFirstVal() {
  // TO DO
  if(firstNum == null) {
    firstNum = parseFloat($(".form-control").val());
    $(".form-control").val("");
  } else {
    operator = arr[i - 1];
    equalPressed();
  }
}
function operatorPressed() {
  // TO DO
  console.log(arr);
  i += 1;
  arr[i] = this.value;
  console.log("Operator Pressed");
  $(".form-control").focus();

  switch (this.value) {
    case '/':
      operator = '/';
      checkFirstVal();
      break;
    case '*':
      operator = '*';
      checkFirstVal();
      break;
    case '-':
      operator = '-';
      checkFirstVal();
      break;
    case '+':
      operator = '+';
      checkFirstVal();
      break;
    default:

  }


}

function equalPressed() {
  // TO DO
  console.log(arr);
  console.log("Equal Pressed");
  $(".form-control").focus();
  secondNum = parseFloat($(".form-control").val());
  var result;
  switch (operator) {
    case '/':
      result = firstNum / secondNum;
      $(".form-control").val(result);
      break;
    case '*':
      result = firstNum * secondNum;
      $(".form-control").val(result);
      break;
    case '-':
      result = firstNum - secondNum;
      $(".form-control").val(result);
      break;
    case '+':
      result = firstNum + secondNum;
      $(".form-control").val(result);
      break;
    default:
  }
  firstNum = null;
  secondNum = null;
  for(var i = 0; i < arr.length; i++) {
    arr.pop();
  }
}


function delLastChar() {
  // TO DO
  console.log("Delete Pressed");
  $(".form-control").focus();
  var value = $(".form-control").val();
  value = value.split("");
  value.pop();
  value = value.join("");
  $(".form-control").val(value);
}
$(document).ready(function() {
  $(".form-control").val("");
  $(".form-control").focus();
  $(".value").on("click" , valuePressed);
  $(".operator").on("click" , operatorPressed);
  $(".equal").on("click" , equalPressed);
  $(".delete").on("click" , delLastChar);
  $(".clear").on("click" , function() {
    firstNum = null;
    secondNum = null;
    $(".form-control").val("0");
    $(".form-control").focus();
  });

});

var firstNum = null;
var secondNum = null;
var operator = null;
var arr = [];
var i = 0;
function valuePressed() {
  // TO DO
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
    if($(".form-control").val() == "") {
      var value = $(".history").val();
      value = value.replace(value[value.length - 1] , arr[i]);
      $(".history").val(value);
      exit();
    }
    var op = arr[i - 1];
    if(op == '+') {
      firstNum = firstNum + parseFloat($(".form-control").val());
      $(".form-control").val("");
    } else if(op == '-') {
      firstNum = firstNum - parseFloat($(".form-control").val());
      $(".form-control").val("");
    } else if(op == '*') {
      firstNum = firstNum * parseFloat($(".form-control").val());
      $(".form-control").val("");
    } else if(op == '/') {
      firstNum = firstNum / parseFloat($(".form-control").val());
      $(".form-control").val("");
    }
  }
}

function operatorPressed() {
  // TO DO
  i += 1;
  arr[i] = this.value;
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
  }
}

function equalPressed() {
  // TO DO
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
  }
  $(".history").val(result);
  firstNum = null;
  secondNum = null;
  for(var i = 0; i < arr.length; i++) {
    arr.pop();
  }
}


function delLastChar() {
  // TO DO
  $(".form-control").focus();
  var value = $(".form-control").val();
  var value1 = $(".history").val();

  value1 = value1.split("");
  value = value.split("");

  value1.pop();
  value.pop();

  value1 = value1.join("");
  value = value.join("");

  $(".history").val(value1);
  $(".form-control").val(value);
}
$(document).ready(function() {
  $(".form-control").val("");
  $(".history").val("");
  $(".form-control").focus();
  $(".value").on("click" , valuePressed);
  $(".operator").on("click" , operatorPressed);
  $(".equal").on("click" , equalPressed);
  $(".delete").on("click" , delLastChar);
  $(".square").on("click" , function() {
    var value = parseFloat($(".form-control").val());
    if($(".form-control").val() != "") {
      $(".form-control").val(value * value);
      $(".history").val(value * value);
    }
  });
  $(".squareRoot").on("click" , function() {
    var value = parseFloat($(".form-control").val());
    value = Math.sqrt(value);
    if($(".form-control").val() != "") {
      $(".form-control").val(value);
      $(".history").val(value);
    }
  });
  $(".btn").on("click" , function() {
    $(".history").val( $(".history").val() + this.value);
  });
  $(".clear").on("click" , function() {
    firstNum = null;
    secondNum = null;
    $(".form-control").val("0");
    $(".history").val("");
    $(".form-control").focus();
  });
});

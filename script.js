let number1, number2;
let operator = "";

function calculate(event) {
  if (event) { event.preventDefault(); }
  number1 =parseInt(document.getElementById("number1").value);
  number2 = parseInt(document.getElementById("number2").value);

  if (operator == "+") {
    let result = number1 + number2;
    document.getElementById("result").value =
      number1 + "+" + number2 + "=" + result;
  }
  else if (operator == "-") {
    let result = number1 - number2;
    document.getElementById("result").value =
      number1 + "-" + number2 + "=" + result;
    }
    else if (operator == "*") {
        let result = number1 * number2;
        document.getElementById("result").value =
          number1 + "*" + number2 + "=" + result;
      }
      else if (operator == "%") {
        let result = number1 % number2;
        document.getElementById("result").value =
          number1 + "%" + number2 + "=" + result;
      }
}
function add() {
  operator = "+";

}
function minus() {
    operator = "-";
}
function multi() {
    operator = "*";
}
function division() {
    operator = "%";
}

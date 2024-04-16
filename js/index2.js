
<script>
* {
  box-sizing: border-box;
}


body {
  padding: 0;
  margin: 0;
}


.component {
  background-color: black;
  color: white;
  width: 500px;
  padding: 5px;
}


.screen {
  text-align: right;
  padding: 30px 20px;
  color: white;
  font-size: 30px;
}


.cal-button {
  padding: 20px 20px;
  text-align: right;
  background-color: #d8d9db;
  height: 100px;
  width: 23.75%;
  border: none;
  border-radius: 0;
  font-size: 30px;
  text-align: center;
  cursor: pointer;
  border-radius: 3%;
}


.double {
  width: 49.1%;
}


.triple {
  width: 74.5%;
}


.button-row {
  display: flex;
  justify-content: space-between;
  align-content: stretch;
  margin-bottom: 1.5%;
}


.cal-button:last-child {
  background-color: rgb(255, 129, 107);
  color: white;
}


.cal-button:last-child:hover {
  background-color: tomato;
}
.cal-button:last-child:active {
  background-color: red;
}


.cal-button:hover {
  background-color: gray;
}


.cal-button:active {
  background-color: rgb(73, 73, 73);
}


const screen = document.querySelector(“.screen”);
let buffer = “”;
let operator = “”;

function handleInput(value) {
  if (isNaN(value)) {
    handleSymbol(value);
  } else {
    handleNumber(value); 
 }

}

function calculateAnswer() {
  if (operator === null) {
    return;
  } else {
    switch (operator) {
      case "+":
        screen.innerText = parseInt(previousNumber) + parseInt(buffer);
        break;
      case "-":
        screen.innerText = parseInt(previousNumber) - parseInt(buffer);
        break;
      case "*":
        screen.innerText = parseInt(previousNumber) * parseInt(buffer);
        break;
      case "/":
        screen.innerText = parseInt(previousNumber) / parseInt(buffer);
        break;
    }

    buffer = screen.innerText;
    operator = null;
  }
}
👉 If the input received any symbol

function handleSymbol(value) {
  console.log("Symbol");
  switch (value) {
    case "/":
    case "*":
    case "-":
    case "+":
      operator = value;
      previousNumber = buffer;
      buffer = "";
      screen.innerText = 0;
      break;
    case "C":
      buffer = 0;
      rerender();
      break;
    case "⬅":
      if (screen.innerText.length < 2) {
        buffer = 0;
      } else {
        buffer = buffer.slice(0, -1);
      }
      rerender();
      break;
    case "=":
      calculateAnswer();
  }
}


function handleNumber(value) {
  if (buffer === 0) {
    buffer = value;
  } else {
    buffer = buffer + value.toString();
  }
  rerender();
}



function rerender() {

 screen.innerText = buffer;


}


function init() {
  document
    .querySelector(".button-sections")
    .addEventListener("click", function (e) {
      handleInput(e.target.innerText);
    });
}


init();
</script>

let tbody = document.getElementById("tbody");
let inputTxt = document.getElementById("inputTxt");
let outputTxt = document.getElementById("outputTxt");
let restart = document.getElementById("restart");
let check = document.getElementById("check");

let winCard = document.getElementById("winCard");
let finalAttempts = document.getElementById("finalAttempts");
let playAgain = document.getElementById("playAgain");

let randomNum = Math.trunc(Math.random() * 100 + 1);
let attempts = 0;

function addRow() {
  tbody.innerHTML +=`
    <tr>
        <td>Attempt ${String(attempts).padStart(2, "0")}</td>
        <td>${inputTxt.value}</td>
        <td>${outputTxt.textContent}</td>
    </tr>`;
}

// console.log(randomNum);

check.onclick = function () {
  if (isNaN(inputTxt.value) || inputTxt.value === "") {
    outputTxt.textContent = "Enter A number";
  } 
  else if (inputTxt.value < 1 || inputTxt.value > 100) {
    outputTxt.textContent = "Enter Number between 1 and 100";
  } 
  else if (inputTxt.value > randomNum) {
    outputTxt.textContent = "TOO HIGH";
    attempts++;
    addRow();
  } 
  else if (inputTxt.value < randomNum) {
    outputTxt.textContent = "TOO LOW";
    attempts++;
    addRow();
  } 
  else {
    outputTxt.textContent = "Got it!";
    attempts++;
    addRow();
    check.disabled = true;
    finalAttempts.textContent = attempts;
    winCard.classList.add("show");
  }
};
//enter 
 inputTxt.addEventListener("keydown", function (e) {
    if (e.key == "Enter") {
      check.click();
      inputTxt.value=""
    }
  });

  //restart button
restart.onclick = function () {
  randomNum = Math.trunc(Math.random() * 100 + 1);
  tbody.innerHTML = "";
  outputTxt.textContent = "Waiting For Your Signal...";
  attempts = 0;
  inputTxt.value = "";
  check.disabled = false;
};

//play again button im win message
playAgain.onclick = function () {
  winCard.classList.remove("show");
  restart.click();
};

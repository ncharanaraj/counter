const counterBtn = document.querySelector("#incrementor")
const displayMsg = document.querySelector("#display-message")

let counter = 0;

function showMessage(msg) {
    displayMsg.innerHTML = msg
}

function counterHandler() {
    counter = counter + 1;
    showMessage(counter)
}

counterBtn.addEventListener("click", counterHandler)
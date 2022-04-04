"use strict"
const $ = function (element) {
  return document.getElementById(element);  
};

const checkAnswer = function (question) {
    const radioButtons = document.querySelectorAll(`input[name="${question}"]`);
    let selection;
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            selection = radioButton.value;
            break;
        }
    }
    $(`${question}answer`).innerHTML = selection;
};
// input field er value bair korar jonno function
function getInputFieldValueById(inputField) {
    const inputFieldValue = document.getElementById(inputField);
    const inputFieldValueString = inputFieldValue.value;
    const value = parseFloat(inputFieldValueString);
    inputFieldValue.value = "";
    return value;
  }
  
  // element value
  
  function getElementTextById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const value = parseFloat(elementValueString);
    return value;
  }
  
  // set the value to the
  function setTextElementValueById(elementId, newValue) {
    const element = document.getElementById(elementId);
    element.innerText = newValue;
  }
  
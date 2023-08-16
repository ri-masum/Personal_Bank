
document.getElementById("depositBtn").addEventListener("click", function () {
  const depositAmount = getInputFieldValueById("depositAmount");
  const previousDepositValue = getElementTextById("depositTotal");

  const newDepositTotal = depositAmount + previousDepositValue;

  // set the value to the deposit innertext
  setTextElementValueById("depositTotal", newDepositTotal);

  // set total balance
  const previousTotalBalance = getElementTextById("totalBalance");
  const newBalanceTotal = previousTotalBalance + newDepositTotal;
  setTextElementValueById("totalBalance", newBalanceTotal);
});

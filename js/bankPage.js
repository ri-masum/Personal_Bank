/**
 * document.getElementById("depositBtn").addEventListener("click", function () {
  const depositAmount = document.getElementById("depositAmount");
  const depositAmountValueString = depositAmount.value; //amra jokon kunu kisu value akare nibo tokon seta string akare pabo so amaderker eitake number a convert korte hobe

  //converting string to number
  const depositAmountValue = parseFloat(depositAmountValueString);

  // deposit box
  const depositBox = document.getElementById("depositTotal");

  const depositValueString = depositBox.innerText;
  //converting string to number

  const depositValue = parseFloat(depositValueString);

  depositBox.innerText = depositAmountValue + depositValue;

  //total balance increment korte hobe
  const balanceTotal = document.getElementById("totalBalance");
  const totalBalanceString = balanceTotal.innerText;

  // converting into number
  const totalBalance = parseFloat(totalBalanceString);

  const currentBalance = totalBalance + depositAmountValue;

  balanceTotal.innerText = currentBalance;

  //    deposit feild emty
  depositAmount.value = "";
});

// wothdraw part

document.getElementById("withdrawBtn").addEventListener("click", function () {

  const windowAmmount = document.getElementById("withdraw-money");
  const windowAmmountValueString = windowAmmount.value;

  const windowAmmountNumber = parseFloat(windowAmmountValueString);


  const withdrawBox = document.getElementById("withdraw-amount");
  const withdrawBoxValueString = withdrawBox.innerText;

  const withdrawBoxNumber = parseFloat(withdrawBoxValueString);

    const currentWithdrawBalace=withdrawBoxNumber+windowAmmountNumber;

    withdrawBox.innerText=currentWithdrawBalace;
    windowAmmount.value=''


    // now the balance after withdraw money 
    const balanceTotal = document.getElementById("totalBalance");
    const totalBalanceString = balanceTotal.innerText;
  
    // converting into number
    const totalBalance = parseFloat(totalBalanceString);

    const currentBalance=totalBalance-windowAmmountNumber;

    balanceTotal.innerText=currentBalance;

    

});




// deposit part
*/

// setp 1: add event listener to deposit button
//setp 2: get the deposit amount from deposit amount field
//setp 3: convert string deposit amount to number typee
// step4 :clear the deposit feild 
// step 5:get the previous deposit total 
// step6:calculate the total and set the valur to the deposit total
// step7:get current total balance
// step 8: calculate the enw balance and set it to the balance total element 


document.getElementById('depositBtn').addEventListener('click',function(){

  const depositField=document.getElementById('depositAmount');
  // step:2
  const newDepositAmountString=depositField.value;
  // step:3
  const newDepositAmount=parseFloat(newDepositAmountString);

  // step:4
  depositField.value='';

  // step:5
  const depositTotalElement=document.getElementById('depositTotal');
  const priviousDepositTotalString=depositTotalElement.innerText;
  const priviousDepositTotal=parseFloat(priviousDepositTotalString);

// step6
const newDepositTotal=priviousDepositTotal+newDepositAmount;

depositTotalElement.innerText=newDepositTotal;

// step7

const balanceTotalElement=document.getElementById('totalBalance');
const previousBalanceTotalString=balanceTotalElement.innerText;

const previousBalanceTotal=parseFloat(previousBalanceTotalString);

// step 8
const newBalanceTotal=previousBalanceTotal+newDepositAmount;

balanceTotalElement.innerText=newBalanceTotal;


})

// withdraw section
// step1: add event handler with the withdraw button
// step2:get the withdraw amount
// step3: string to number 
// step4:clear the input field
// step5:get the previous withdraw total
// step6:calculate total withdraw

document.getElementById('withdrawBtn').addEventListener('click',function(){

  const withdrawFeild=document.getElementById('withdraw-money');
  const newWithdrawAmountString=withdrawFeild.value;
  const newWithdrawAmount=parseFloat(newWithdrawAmountString);
  withdrawFeild.value='';

  const withdrawTotalElement=document.getElementById('withdraw-amount');

  const previousWithdrawAmountString=withdrawTotalElement.innerText;
  const previousWithdrawAmount=parseFloat(previousWithdrawAmountString);


  const newWithdrawTotal=previousWithdrawAmount+newWithdrawAmount;
  withdrawTotalElement.innerText=newWithdrawTotal;


  const balanceTotalElement=document.getElementById('totalBalance');
  const previousBalanceTotalString=balanceTotalElement.innerText;
  const previousBalanceTotal=parseFloat(previousBalanceTotalString);

  const newBalanceTotal=previousBalanceTotal-newWithdrawAmount;

  balanceTotalElement.innerText=newBalanceTotal;


})


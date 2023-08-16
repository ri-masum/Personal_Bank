// withdraw button work


document.getElementById('withdrawBtn').addEventListener('click',function(){


    const newWithdrawAmount=getInputFieldValueById('withdraw-money');
    const previousWithdrawValue=getElementTextById('withdraw-amount');

    
    

    
    const previousTotalBalance=getElementTextById('totalBalance');

    if(newWithdrawAmount>previousTotalBalance){
        alert('baper kase eto taka nai ')
        return
    }
    
    const newWithdrawAmountTotal=previousWithdrawValue+newWithdrawAmount;
    
    setTextElementValueById('withdraw-amount',newWithdrawAmountTotal);

    const newTotalBalance=previousTotalBalance-newWithdrawAmount;
    
    setTextElementValueById('totalBalance',newTotalBalance);


  
})
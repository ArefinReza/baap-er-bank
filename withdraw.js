//withdraw
document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrowUpper = document.getElementById('withdro-total');
    let previousWithdrowString =  withdrowUpper.innerText;
    const presiousWithdraw = parseFloat(previousWithdrowString);
    
    const withdrawFild = document.getElementById('withdraw-input');
    let newWithdrawAmountString = withdrawFild.value;
    const newWithdraw = parseFloat(newWithdrawAmountString);

    //balance
    const balanceElement = document.getElementById('balance-total');
    let balanceStringwithdraw = balanceElement.innerText;
    const balanceAmountWithdraw = parseFloat(balanceStringwithdraw);

    const cBalance = balanceAmountWithdraw - newWithdraw;
    
    const withdrowTotal = newWithdraw + presiousWithdraw;
    
    
    withdrawFild.value = '';
    if(newWithdraw>balanceAmountWithdraw){
        alert('Baaap er bank a oto tk nai');
        return;
    }
    
    withdrowUpper.innerText = withdrowTotal;
    balanceElement.innerText=cBalance;

    


})
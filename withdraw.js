//withdraw
document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrowUpper = document.getElementById('withdro-total');
    let previousWithdrowString =  withdrowUpper.innerText;
    const presiousWithdraw = parseFloat(previousWithdrowString);
    
    const withdrawFild = document.getElementById('withdraw-input');
    let newWithdrawAmountString = withdrawFild.value;
    const newWithdraw = parseFloat(newWithdrawAmountString);

    

    // if(newWithdraw>presiousWithdraw){
    //     alert('Baaap er bank a oto tk nai');
    //     return;
    // }
    const withdrowTotal = newWithdraw + presiousWithdraw;

    withdrowUpper.innerText = withdrowTotal;

    withdrawFild.value = '';

    //balance
    const balanceElement = document.getElementById('balance-total');
    let balanceStringwithdraw = balanceElement.innerText;
    const balanceAmountWithdraw = parseFloat(balanceStringwithdraw);

    const cBalance = balanceAmountWithdraw - withdrowTotal;
    balanceElement.innerText=cBalance;


})
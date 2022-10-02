//deposit
document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositField = document.getElementById('deposit-input');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);//string convert to number
    //stap 3: get the current deposit

    const depositTotalElement =document.getElementById('deposit-total');
    const previousDepostiTotal = depositTotalElement.innerText;
    const previousDeposit = parseFloat(previousDepostiTotal);

    const currentDeposit = previousDeposit + newDepositAmount;

    depositTotalElement.innerText= currentDeposit;

    //Balance added
    const balanceFild = document.getElementById('balance-total');
    const balanceString = balanceFild.innerText;
    const balanceAmount = parseFloat(balanceString);

    const currentBalance = newDepositAmount + balanceAmount;
    balanceFild.innerText=currentBalance;

    //stape 7 : clear the deposit fild
    depositField.value='';
})

document.getElementById('btn-logout').addEventListener('click',function(){
    window.location.href='index.html'
})
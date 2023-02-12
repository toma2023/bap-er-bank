document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawField=document.getElementById('withdraw-field');
    const newWithdrawAmountString= withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    withdrawField.value = '';
    if(isNaN(newWithdrawAmount)){
        alert('please provide a valid number');
        return;
    }
    const withdrawTotalElement=document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

const balanceTotalElement= document.getElementById('balance-total');
const balanceTotalElementString=balanceTotalElement.innerText;
const previousBalanceTotal =parseFloat(balanceTotalElementString);

if(newWithdrawAmount>previousBalanceTotal){
    alert('bap er bank e eto tk nei');
    return;
}
const currentWithdrawTotal =previousWithdrawTotal + newWithdrawAmount;
withdrawTotalElement.innerText = currentWithdrawTotal;
const newBalanceTotal =previousBalanceTotal - newWithdrawAmount;
balanceTotalElement.innerText =newBalanceTotal;

withdrawField.value = '';
})
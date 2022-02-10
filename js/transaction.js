// handle deposit
document.getElementById('deposit-btn').addEventListener('click', function() {
    const depositAmount = document.getElementById('deposit-input')
    const newDepositValue = depositAmount.value
    console.log(newDepositValue)

    const depositTotal = document.getElementById('deposit-total')

    // deposit amount update
    const currentDepositAmount = depositTotal.innerText
    const addDepositAmount = parseFloat(currentDepositAmount) + parseFloat(newDepositValue)

    // update amount
    depositTotal.innerText = addDepositAmount


    // update account balance
    const BalanceTotalAmount = document.getElementById('balance-total')
    const balanceTotalText = BalanceTotalAmount.innerText
    const previousBalanceTotal = parseFloat(balanceTotalText)
    const newBalanceTotal = parseFloat(previousBalanceTotal) + parseFloat(newDepositValue)
    BalanceTotalAmount.innerText = newBalanceTotal


    // clear deposit input field
    depositAmount.value = ''
})

// handle withdraw
document.getElementById('withdraw-btn').addEventListener('click', function() {
    const withdrawInput = document.getElementById('withdraw-input')
    const withdrawAmountText = withdrawInput.value
    const newWithdrawAmount = parseFloat(withdrawAmountText)

    // set withdraw total amount
    const withdrawTotal = document.getElementById('withdraw-total')
    const prevWithdrawTotalText = withdrawTotal.innerText
    const prevWithdrawTotal = parseFloat(prevWithdrawTotalText)

    const newWithdrawTotal = prevWithdrawTotal + newWithdrawAmount
    withdrawTotal.innerText = newWithdrawTotal

    // update balance
    const balanceTotal = document.getElementById('balance-total')
    const preBalanceTotalText = balanceTotal.innerText
    const preBalanceTotalAmount = parseFloat(preBalanceTotalText)
    const newBalanceTotal = preBalanceTotalAmount - newWithdrawAmount

    balanceTotal.innerText = newBalanceTotal

    // input field clear 
    withdrawInput.value = ''
})
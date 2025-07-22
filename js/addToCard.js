document.getElementById('add-to-card').addEventListener('click', function(){
    removeAdd('add-money')
})

document.getElementById('btn-add-money').addEventListener('click',function(){
    //const mainCash = document.getElementById('main-cash').innerText;
    const mainCash = mainCashInnerText('main-cash');

    const addAmount = getInputFieldValueById('add-amount');
    const phoneNumber = getInputFieldValueById('acc-number');
    const pinNumber = getInputFieldValueById('acc-pin');
    
    //const addAmount = document.getElementById('add-amount').value;
    //const phoneNumber = document.getElementById('acc-number').value;
    //const pinNumber = document.getElementById('acc-pin').value;
    //console.log('phone number :'+phoneNumber,'pin Number :'+ pinNumber)

    if(phoneNumber === 566){
            if(phoneNumber === 566 && pinNumber === 1234){
            const totalAmount = addAmount + mainCash;
            //console.log(totalAmount)
            document.getElementById('main-cash').innerText = totalAmount;
            }
            else{
                alert('Wrong Pin');
            }
    }
    else{
        alert('Phone Number worng');
    }
})
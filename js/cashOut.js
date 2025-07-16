document.getElementById('cash-out').addEventListener('click',function(){
    document.getElementById('cash-out-money').classList.remove('hidden');
    document.getElementById('add-money').classList.add('hidden');
})

document.getElementById('btn-cash-out').addEventListener('click',function(){
    const cashOutAmount = document.getElementById('cash-out-amount').value;
    const mainCash = document.getElementById('main-cash').innerText;
    
    const phoneNumber = document.getElementById('acc-number-co').value;
    const pinNumber = document.getElementById('acc-pin-co').value;
    //console.log('phone number :'+phoneNumber,'pin Number :'+ pinNumber)

    if(phoneNumber){
            if(phoneNumber && pinNumber === '1234'){
            const totalAmount = parseFloat(mainCash) - parseFloat(cashOutAmount);
            //console.log(totalAmount)
            document.getElementById('main-cash').innerText = totalAmount;
        }
        else{
            alert('Wrong Pin');
        }
    }
    else{
        alert('Please Inter account Number');
    }
})
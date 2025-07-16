document.getElementById('add-to-card').addEventListener('click', function(event){

    //event.preventDefault();

    document.getElementById('add-money').classList.remove('hidden');
    document.getElementById('cash-out-money').classList.add('hidden');
    
})

document.getElementById('btn-add-money').addEventListener('click',function(){
    const addAmount = document.getElementById('add-amount').value;
    const mainCash = document.getElementById('main-cash').innerText;
    
    const phoneNumber = document.getElementById('acc-number').value;
    const pinNumber = document.getElementById('acc-pin').value;
    //console.log('phone number :'+phoneNumber,'pin Number :'+ pinNumber)

    if(phoneNumber === '566'){
            if(phoneNumber === '566' && pinNumber === '1234'){
            const totalAmount = parseFloat(addAmount) + parseFloat(mainCash);
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
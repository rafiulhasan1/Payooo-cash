document.getElementById('add-to-card').addEventListener('click', function(){
    removeAdd('add-money');
})

document.getElementById('transaction-history-btn').addEventListener('click',function(){
    removeAdd('transaction-history');
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
            
            // const p = document.createElement('p');
            // p.innerText = `Add Money. Add: ${addAmount} New Balance: ${totalAmount}`
            // document.getElementById('transaction-history').appendChild(p);

            const div = document.createElement('div');
            div.classList.add('bg-green-100');
            div.innerHTML = `
                <h1 class="text-2xl font-bold text-gray-700 p-3">Cash In</h1>
                <h3 class="text-xl font-bold text-gray-700 p-3">Taka : ${addAmount} |  New Balance : ${totalAmount}</h3>
            `
            document.getElementById('transaction-history2').appendChild(div);
            //console.log(div)

            }
            else{
                alert('Wrong Pin');
            }
    }
    else{
        alert('Phone Number worng');
    }
})
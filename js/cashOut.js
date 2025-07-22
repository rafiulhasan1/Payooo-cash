document.getElementById('cash-out').addEventListener('click',function(){
    removeAdd('cash-out-money');
})

document.getElementById('btn-cash-out').addEventListener('click',function(){
    const mainCash = mainCashInnerText('main-cash');

    const cashOutAmount = getInputFieldValueById('cash-out-amount');
    const phoneNumber = getInputFieldValueById('acc-number-co');
    const pinNumber = getInputFieldValueById('acc-pin-co');

    //const cashOutAmount = document.getElementById('cash-out-amount').value;
    //const mainCash = document.getElementById('main-cash').innerText;
    //const phoneNumber = document.getElementById('acc-number-co').value;
    //const pinNumber = document.getElementById('acc-pin-co').value;
    //console.log('phone number :'+phoneNumber,'pin Number :'+ pinNumber)

    if(phoneNumber){
            if(phoneNumber && pinNumber === 1234){
            const totalAmount = mainCash - cashOutAmount;
            //console.log(totalAmount)
            document.getElementById('main-cash').innerText = totalAmount;

            // const p = document.createElement('p');
            // p.innerText = `Cash Out. Out: ${cashOutAmount} New Balance: ${totalAmount}`
            // document.getElementById('transaction-history').appendChild(p);

            const div = document.createElement('div');
            div.classList.add('bg-red-100');
            div.innerHTML = `
                <h1 class="text-2xl font-bold text-gray-700 p-3">withdraw</h1>
                <h3 class="text-xl font-bold text-gray-700 p-3">Taka : ${cashOutAmount} |  New Balance : ${totalAmount}</h3>
            `
            document.getElementById('transaction-history2').appendChild(div);

        }
        else{
            alert('Wrong Pin');
        }
    }
    else{
        alert('Please Inter account Number');
    }
})
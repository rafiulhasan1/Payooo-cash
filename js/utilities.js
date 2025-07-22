function getInputFieldValueById(id){
    const getValue = document.getElementById(id).value;
    const getNumber = parseFloat(getValue);
    return getNumber;
}

function mainCashInnerText(id){
    const innerText = document.getElementById(id).innerText;
    const innerNumber = parseFloat(innerText);
    return innerNumber;
}

function removeAdd(id){

    document.getElementById('add-money').classList.add('hidden');
    document.getElementById('cash-out-money').classList.add('hidden');
    document.getElementById('transaction-history').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}
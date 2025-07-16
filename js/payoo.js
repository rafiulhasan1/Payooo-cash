document.getElementById('btn-id').addEventListener('click', function(event){
    event.preventDefault(); //don't reload this page

    const phoneNumber = document.getElementById('ph-number').value;
    const pinNumber = document.getElementById('btn-pin').value;
    //console.log('phone number :'+phoneNumber,'pin Number :'+ pinNumber)

    if(phoneNumber=== '566'){
            if(phoneNumber === '566' && pinNumber=== '1234'){
            console.log('enrolled')
            window.location.href = '/home.html';
        }
        else{
            alert('Wrong Pin');
        }
    }
    else{
        alert('Phone Number worng');
    }
})
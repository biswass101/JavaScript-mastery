const validateForm = (e) => {
    
    let x = document.forms['myForm']['fName'].value;

    if(x == '') {
        alert("Name must be filled out");
        return false;
    } else {
        alert("Data Validation Successfull");
        return true;
    }
}


const ipt = document.querySelector('#ipt');
const btn = document.querySelector('#btn');
const validation = document.querySelector('#validation');

btn.addEventListener('click', () => {
    const iptVal = ipt.value;
    let status = '';
    if(isNaN(iptVal) || iptVal < 1 || iptVal > 10) {
        status = "Wrong input";
    } else {
        status = `The choosen number is ${iptVal}`;
    }

    validation.innerText = status;
})
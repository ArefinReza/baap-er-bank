// add click even handelar in submit button
document.getElementById('btn-submit').addEventListener('click',function(){
    // stape 2 : get the email address inside the email input fild
    // always remember to use .vlaue to get text from input
    const emailFild = document.getElementById('email');
    const getemail = emailFild.value;
    // console.log(getemail);
    //stape 3
    const passFild = document.getElementById('pass');
    const getpass = passFild.value;
    // console.log(getpass);

    if(getemail=='arefinsaim@gmail.com' && getpass=='arefin'){
        window.location.href='bank.html';/// connect another html or file
    }else{
        alert('Toke ami khun korbo!!');
    }
})
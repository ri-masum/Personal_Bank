// lets call the button to add event listener 

document.getElementById('btn').addEventListener('click',function(){

const userEmail=document.getElementById('email');
const email=userEmail.value;

const userPassword=document.getElementById('pass');
const password=userPassword.value;

console.log(email,password);
if(email=='masum@gmail.com' && password=='masum'){
    console.log('valid');
    
        window.location.href='bankPage.html'

    
}
else{
    alert('এইটা আমার অ্যাকাউন্ট তুই কি করছ এইখানে');
}

})
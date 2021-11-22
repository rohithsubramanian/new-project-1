let name1 = document.getElementById("name1");
let error = document.getElementById("error");

let email = document.getElementById("email");
let error1 = document.getElementById("error1");

let mobileno = document.getElementById("mobno");
let error2 = document.getElementById("error2");

let pswd = document.getElementById("pswd");
let error3 = document.getElementById("error3");

let retypepassword = document.getElementById("repswd");
let error4 = document.getElementById("error4");

function validate0(){
let regexp = /^([A-Za-z0-9\.-]+)$/
let regexp1 = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.)$/
let regexp2 = /^[0]?[789]\d{9}$/;
let regexp3 = /^([A-Za-z0-9\.-]+)$/
let regexp4 = /^([A-Za-z0-9\.-]+)$/

    if(name1.value.trim()==""||email.value.trim()==""||pswd.value.trim()==""||retypepassword.value.trim()==""){
        alert("fields can not be empty");
        return false;
         }
    // else{
    //     return true;
//     // }
// if (name1.value=""){
//     alert("Name can not be empty");
//     return false;
// }    
// if(email.value==""){
//     alert("Email can not be empty");
//     return false;

// }
// if(mobno.value==""){
//     alert("Mobilenumber can not be empty");
//     return false;
// }
// if(pswd.value==""){
//     alert("Password can not be empty");
//     return false;
// }
// if(repswd.value==""){
//     alert("Retype password can not be empty");
//     return false;
// }


// else if(pswd.value==""){
//     alert("Password cannot be empty");
//     return false;
// }
// else if(pwd.value.length<=6){
//     alert("Password is too short");
//     pwd.style.border="2px solid red";
//     return false;
// }
// else{
//     return true;


// }
if((regexp1.test(email.value))==false){
    error1.innerHTML = "Invalid email";
    error1.style.color = "red";
    return false;
}
// if((regexp2.test(mobno.value))==false){
//     error2.innerHTML = "Invalid";
//     error2.style.color = "red";
//     return false;
// }
else if ((regexp2.test(mobileno.value.trim())==false)){
    error2.innerHTML = "Invalid mobileno";
    error2.style.color = "red";
    return false;
}
// else if(mobileno.value.length==10){
//     alert("Mobile number is too short");
//     mobileno.style.border="2px solid red";
//     return false;
// }

else if((regexp3.test(pswd.value.trim())==false||(pswd.value.trim()==""))){
    error3.innerHTML = "Invalid password";
    error3.style.color = "red";
    return false;
}
else if(pswd.value.length<=6){
    alert("Password is too short");
    pswd.style.border="2px solid red";
    return false;
}
else if((regexp4.test(retypepassword.value.trim())==false||(retypepassword.value.trim()==""))){
    error4.innerHTML = "Invalid retype password";
    error4.style.color = "red";
    return false;
}
else if(retypepassword.value.trim()!=pswd.value.trim()){
    alert("Password is mismatch");
    retypepassword.style.border="2px solid red";
    return false;
}
else{
    error1.innerHTML = "valid";
    error1.style.color = "blue";
    error2.innerHTML = "valid";
    error2.style.color = "blue";
    error3.innerHTML = "valid";
    error3.style.color = "blue";
    error4.innerHTML = "valid";
    error4.style.color = "blue";
    return true;
}


}
function passwordstrength(){
    if
}
let email = document.getElementById("email");
let error = document.getElementById("error");
let pwd = document.getElementById("pwd");
let error1 = document.getElementById("error1");
// function validate(){
//     if(email.value.trim()==""||pwd.value.trim()==""){
//         alert("fields can not be empty");
//         return false;
//          }
//     else{
//         return true;
//     }
// if(email.value==""){
//     alert("Email can not be empty");
//     return false;

// // }
// else if(pwd.value==""){
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
// }
function validate(){
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.)$/
    let regexp1 = /^([A-Za-z0-9\.-]+)$/
    if((regexp.test(email.value.trim()))==false){
        error.innerHTML = "Invalid";
        error.style.color = "red";
        return false;
    }
    else if ((regexp1.test(pwd.value.trim())==false||(pwd.value.trim()==""))){
            error1.innerHTML = "Invalid";
            error1.style.color = "red";
            return false;
    }
    else if(pwd.value.length<=6){
        alert("Password is too short");
        pwd.style.border="2px solid red";
        return false;
    }
        
    
else{
    error1.innerHTML = "valid";
    error1.style.color = "blue";
    return true;
}

}
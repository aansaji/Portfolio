const form = document.getElementById("registrationForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    let valid = true;

    // Name
    let name = document.getElementById("name");
    if(!/^[A-Za-z ]{3,30}$/.test(name.value)){
        showError(name,"Only letters allowed (3-30 characters)");
        valid=false;
    }else{
        showSuccess(name);
    }

    // Email
    let email=document.getElementById("email");

    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)){
        showError(email,"Enter valid email");
        valid=false;
    }else{
        showSuccess(email);
    }

    // Phone
    let phone=document.getElementById("phone");

    if(!/^[0-9]{10}$/.test(phone.value)){
        showError(phone,"Enter 10-digit phone number");
        valid=false;
    }else{
        showSuccess(phone);
    }

    
    // Age
    let age=document.getElementById("age");

    if(age.value<17 || age.value>30){
        showError(age,"Age must be between 17 and 30");
        valid=false;
    }else{
        showSuccess(age);
    }

    // DOB
    let dob=document.getElementById("dob");

    if(dob.value==""){
        showError(dob,"Select DOB");
        valid=false;
    }else{
        showSuccess(dob);
    }

    // Gender
    let gender=document.querySelector('input[name="gender"]:checked');

    if(!gender){
        document.getElementById("genderError").innerText="Select Gender";
        valid=false;
    }else{
        document.getElementById("genderError").innerText="";
    }

    // Course
    let course=document.getElementById("course");

    if(course.value==""){
        showError(course,"Select Course");
        valid=false;
    }else{
        showSuccess(course);
    }

    // Address
    let address=document.getElementById("address");

    if(address.value.trim()==""){
        showError(address,"Address Required");
        valid=false;
    }else{
        showSuccess(address);
    }

    // Password
    let password=document.getElementById("password");

    if(!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(password.value)){
        showError(password,"Min 8 chars, uppercase, lowercase, number & special character");
        valid=false;
    }else{
        showSuccess(password);
    }

    // Confirm Password
    let confirm=document.getElementById("confirmPassword");

    if(password.value!==confirm.value){
        showError(confirm,"Passwords do not match");
        valid=false;
    }else{
        showSuccess(confirm);
    }

    if(valid){
        alert("Registration Successful!");
        form.reset();
    }

});

function showError(input,message){

    input.className="error";
    input.nextElementSibling.innerText=message;

}

function showSuccess(input){

    input.className="success";
    input.nextElementSibling.innerText="";

}
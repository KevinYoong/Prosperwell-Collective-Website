/* Validate sign up form*/
function checkSignup() {
    var fullname = document.getElementById("fullname").value;
    var username = document.getElementById("username").value;
    var useremail = document.getElementById("useremail").value;
    var password = document.getElementById("password").value;
    var confirmpass = document.getElementById("confirmpass").value;
    submitOK = "true";

    /* Checks that name field is not empty */
    /* If empty display error message */
    if (fullname.length < 1){
        alert ("Error! The name is empty");
        submitOK = "false";
    }
    /* Checks that username field is not empty */
    /* If empty display error message */
    if (username.length < 1){
        alert ("Error! The username is empty");
        submitOK = "false";
    }
    /* Checks that email field is not empty */
    /* If empty display error message */
    if (useremail.length < 1){
        alert ("Error! The email is empty");
        submitOK = "false";
    }
    /* Checks that email format is correct and has an '@' symbol inside */
    /* If empty display error message */
    if (useremail == -1 || useremail.indexOf('@') == -1){
        alert ("Error! Please enter a valid email address")
        submitOK = "false";
    }
    /* Checks that password field is not empty */
    /* If empty display error message */
    if (password.length < 1){
        alert ("Error! The password is empty");
        submitOK = "false";
    }
    /* Checks that confirm password field is not empty */
    /* If empty display error message */
    if (confirmpass.length < 1){
        alert ("Error! The confirm password is empty");
        submitOK = "false";
    }

    if (submitOK == "false"){
        return false;
    }
    /* If all fields have been input correctly, load login page */
    else{
        window.location.href='login.html'
        return true;
    }
}
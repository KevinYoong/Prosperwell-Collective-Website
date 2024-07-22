/* Validates login form */
function checkLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var useremail = document.getElementById("useremail").value;
    submitOK = "true";

    /* Checks that username field is not empty */
    /* If empty display error message */
    if (username.length < 1){
        alert ("Error! The username is empty");
        submitOK = "false";
    }
    /* Checks that password field is not empty */
    /* If empty display error message */
    if (password.length < 1){
        alert ("Error! The password is empty");
        submitOK = "false";
    }
    /* Checks that email field is not empty */
    /* If empty display error message */
    if (useremail.length < 1){
        alert ("Error! The email is empty");
        submitOK = "false";
    }
    /* Checks that email format is correct and has '@' symbol */
    /* If empty display error message */
    if (useremail == -1 || useremail.indexOf('@') == -1){
        alert ("Error! Please enter a valid email address")
        submitOK = "false";
    }

    if (submitOK == "false"){
        return false;
    }
    /* If all fields input correctly, load homepage */
    else{
        window.location.href='home.html'
        return true;
    }
}
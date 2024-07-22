/* Validates contact form */
function myFunction() {
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    submitOK = "true";

    /* Checks that first name field is not empty */
    /* If empty display error message */
    if (firstname.length < 1){
        alert ("Error! The first name is empty");
        submitOK = "false";
    }
    /* Checks that last name field is not empty */
    /* If empty display error message */
    if (lastname.length < 1){
        alert ("Error! The last name is empty");
        submitOK = "false";
    }
    /* Checks that email field is not empty */
    /* If empty display error message */
    if (email.length < 1){
        alert ("Error! The email is empty");
        submitOK = "false";
    }
    /* Checks that email format is correct and has an '@' symbol */
    /* If empty display error message */
    if (email == -1 || email.indexOf('@') == -1){
        alert ("Error! Please enter a valid email address")
        submitOK = "false";
    }
    /* Checks that message field is not empty */
    /* If empty display error message */
    if (message.length < 1){
        alert ("Error! The message field is empty");
        submitOK = "false";
    }

    if (submitOK == "false"){
        return false;
    }
    /* Display an alert message that signifies the form has been submitted */
    else{
        alert ("Message sent successfully");
        return true;
    }
}
function validate() {
    uname = document.login.uname.value;
    pass = document.login.pass.value;
    cpass = document.login.cpass.value;
    age = document.login.age.value;
    var error = "No Errors"
    if (uname.length < 2) {
        alert("Name should be atleast 6 characters");
    }
    if (pass.length < 6) {
        alert("Password should be atleast 6 characters");
    }
    if (age < 0) {
        alert("Not a Valid Age");
    }
    if (cpass != pass) {
        alert("Password Does Not Match");
    }
}

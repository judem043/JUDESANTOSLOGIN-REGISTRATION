document.addEventListener("DOMContentLoaded", function() {
    const title = document.querySelector('#title');
    const regForm = document.querySelector('.regForm');
    const usernameReg = document.getElementById('usernameReg');
    const passwordReg = document.getElementById('passwordReg');
    const logForm = document.querySelector('.logForm');
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const usernameAndPasswords = {}
    const time = new Date().toLocaleString();


    function checkIfUserExists(username, usernameAndPasswords) {
        if (usernameAndPasswords.hasOwnProperty(username)) {
            return true;
        }
    }


    function validateUserNameAndPassword(username, password, usernameAndPasswords) {
        if (usernameAndPasswords.hasOwnProperty(username) && usernameAndPasswords[username] == password) {
            return true;
        }
    }


    regForm.addEventListener('submit', function (e) {
        e.preventDefault();


        if (usernameReg.value.length == 0 || passwordReg.value.length == 0) {
            alert("Fill out all the forms first");
        } else {

            if (checkIfUserExists(usernameReg.value, usernameAndPasswords)) {
                alert('Username is already taken');
            } else {

                usernameAndPasswords[usernameReg.value] = passwordReg.value;
                console.log(usernameAndPasswords);


                logForm.style.display = "block";
                regForm.style.display = "none";
            }
        }
    });


    logForm.addEventListener('submit', function (e) {
        e.preventDefault();


        if (validateUserNameAndPassword(username.value, password.value, usernameAndPasswords)) {

            logForm.style.display = "none";
            title.style.display = "none";

            document.querySelector('.welcomePanel #greeting').innerHTML = "Good day! " + username.value + ". It's currently " + time;

            alert("Congratulations, " + username.value + "! You have successfully logged in.");
        } else {
            alert("Username and password don't exist");
        }
    });
});

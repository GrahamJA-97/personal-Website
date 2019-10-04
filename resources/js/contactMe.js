// Will add feature
//var submitBtn = document.querySelector("#SubmitBtn");

// radio buttons and comment box
var radios = document.querySelectorAll("#Radio");
var commentGroup = document.querySelector("#CommentGroup");

// adding listeners for showing/hiding comment box
for (var i = 0; i < radios.length; i++) {
    radios[i].addEventListener("change", function (e) {
        var choice = e.target.value;
        if (choice == "showComments") {
            commentGroup.classList.remove("d-none");
        } else if (choice == "hideComments") {
            commentGroup.classList.add("d-none");
        }
    })
}




function submitForm() {
    var formName = document.contactForm.Name;
    var formEmail = document.contactForm.Email;
    var formComments = document.contactForm.Comments;
    
    if (validName(formName)) {
        if (validEmail(formEmail)) {
            sendData(formName, formEmail, formComments);
            console.log("valid submission")
            return true;
        }
    }
    console.log("invalid submission")
    return false;

}

function validName(name) {
    if (name.value.length >= 2 && name.value.length <= 40) {
        return true;
    } else {
        alert("Name field is invalid / length must be between 2-40!");
        name.focus();
        return false;
    }
}

function validEmail(email) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value.match(mailformat)) {
        return true;
    }
    else {
        alert("You have entered an invalid email address!");
        email.focus();
        return false;
    }
}

function sendData(name, email, comments) {
    // Build FormData
    var data = {
        name: name.value,
        email: email.value,
        comments: comments.value
    }
    var FD = new FormData();
    for (point in data) {
        FD.append(point, data[point]);
    }

    var XHR = new XMLHttpRequest();

    // Define what happens on successful data submission
    XHR.addEventListener("load", function (event) {
        alert(event.target.responseText);
    });

    // Define what happens in case of error
    XHR.addEventListener("error", function (event) {
        alert('Oops! Something went wrong.');
    });

    // Set up our request
    XHR.open("POST", "https://example.com/cors.php");

    // The data sent is what the user provided in the form
    XHR.send(FD);
}

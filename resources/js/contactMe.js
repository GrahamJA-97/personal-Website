// form elements
var formName = document.querySelector("#Name");
var formEmail = document.querySelector("#Email");
var formComments = document.querySelector("#Comments");
var commentGroup = document.querySelector("#CommentGroup");
var submitBtn = document.querySelector("#SubmitBtn");

// radio buttons
var radios = document.querySelectorAll("#Radio");
// adding listeners for showing/hiding comment box
for (var i=0; i < radios.length; i++) {
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
    if (valid()) {
    }
}

function valid () {

}
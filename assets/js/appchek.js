// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btntop = document.getElementById("myBtntop");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}
// When the user clicks on the button, open the modal
btntop.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// Email validation
//  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

function handleInput() {
    var validRegex = /^[0-9]+@[.campus.ium.edu.na]/;
    let email = document.getElementById('Apply_email').value;
    let age = document.getElementById('Apply_age').value;

    if (email.match(validRegex) && age <= '26' && age >= '16') {
  
      alert("You meet the minimum requirement. Press OK to be redirected to application page");
        location.href = "/Apply.html"  
    } else if (age >26 || age < 16) {
  
      alert("You do not meet the minimum requirement {Age}");
        location.href = "/public/index.html"
    }
    else {
  
        alert("You do not meet the minimum requirement {Not an IUM student}");
          location.href = "/public/index.html"
      }
}

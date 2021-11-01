// // Get the modal
// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");
// var btntop = document.getElementById("myBtntop");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }
// // When the user clicks on the button, open the modal
// btntop.onclick = function() {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
// // Email validation
// //  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

// function handleInput() {
//     var validRegex = /^[0-9]+@[.campus.ium.edu.na]/;
//     let email = document.getElementById('Apply_email').value;
//     let age = document.getElementById('Apply_age').value;

//     if (email.match(validRegex) && age <= '26' && age >= '16') {
  
//       alert("You meet the minimum requirement. Press OK to be redirected to application page");
//         location.href = "/Apply.html"  
//     } else if (age >26 || age < 16) {
  
//       alert("You do not meet the minimum requirement {Age}");
//         location.href = "/public/index.html"
//     }
//     else {
  
//         alert("You do not meet the minimum requirement {Not an IUM student}");
//           location.href = "/public/index.html"
//       }
// }







// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBuoID-FVQH3stFpUJhQuKFFjRMQuPKnE0",
    authDomain: "beauty-pageant-judging-system.firebaseapp.com",
    projectId: "beauty-pageant-judging-system",
    storageBucket: "beauty-pageant-judging-system.appspot.com",
    messagingSenderId: "327388870081",
    appId: "1:327388870081:web:7cc2a2ee298114ec4a6b40",
    measurementId: "G-RB3GBY1QL6"
  };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    const database = firebase.firestore();
  
  const fname = document.getElementById('name');
  const surname = document.getElementById('surname');
  const email = document.getElementById('email');
  const studentNr = document.getElementById('studentNr');
  const year = document.getElementById('studyYear');
  const cell = document.getElementById('cell');
  const nat = document.getElementById('nationality');
  const hob = document.getElementById('hobbies');
  const agey = document.getElementById('Age');
  const stdyProg = document.getElementById('studyProgram');
  const campus = document.getElementById('campus');
  const why = document.getElementById('why');
  const what = document.getElementById('what');
  const sex = document.getElementById('gender');
  const propic = document.getElementById('profilepic');
  // var constNum = ++2;
  const subappbtn = document.getElementById('subappbtn');
  const applicationss = database.collection('Applications');
  
  subappbtn.addEventListener('click', e => {
    e.preventDefault();
    const ID = applicationss.add({
      // contestnum: constNum,
      firstName: fname.value,
      lastName: surname.value,
      email: email.value,
      StudentNr: studentNr.value, 
      Study_year: year.value, 
      Cellphone: cell.value, 
      Nationality: String(nat.value), 
      Hobby: hob.value, 
      Age: Number(agey.value), 
      Study_Program: stdyProg.value, 
      Campus: String(campus.value), 
      // Why: Text(why.value), 
      // What: what.value,
      Gender: String(sex.value),
      Date_Created: Date.now(),     
      // Applicant_Picture: img
    }).then(function() {
        var tempParams={
        to_name:surname.value,
        applicant_email:email.value
      };
      emailjs.send('service_vvzaw0o', 'template_ev8b3ai', tempParams)
      .then(function(res) {
        console.log('SUCCESS!', res.status, res.text);
      }, function(error) {
        console.log('FAILED...', error);
      });
      alert("Document successfully written!");
      window.location.replace("/public/index.html");
    
    })
    .catch(function(error) {
    // The document probably doesn't exist.
    alert("Error writing document: ", error);
    });
  });
  
  
  
  // var frmvalidator  = new Validator("applicationform");
  
  
  
  
  
  
  
  
  
  // // Your web app's Firebase configuration
  // var firebaseConfig = {
  //   apiKey: "AIzaSyAxh3rwILG9flrPPIuZQoFCEydb25CousY",
  //   authDomain: "test-5805a.firebaseapp.com",
  //   databaseURL: "https://test-5805a-default-rtdb.firebaseio.com",
  //   projectId: "test-5805a",
  //   storageBucket: "test-5805a.appspot.com",
  //   messagingSenderId: "968627721027",
  //   appId: "1:968627721027:web:88544ae67d0e6f0dfc15f6"
  //   };
  // // Initialize Firebase
  // firebase.initializeApp(firebaseConfig);
  // const database = firebase.firestore();
  
  // const fname = document.getElementById('name');
  // const surname = document.getElementById('surname');
  // const email = document.getElementById('email');
  // const studentNr = document.getElementById('studentNr');
  // const year = document.getElementById('studyYear');
  // const cell = document.getElementById('cell');
  // const nat = document.getElementById('nationality');
  // const hob = document.getElementById('hobbies');
  // const agey = document.getElementById('Age');
  // const stdyProg = document.getElementById('studyProgram');
  // const campus = document.getElementById('campus');
  // const why = document.getElementById('why');
  // const what = document.getElementById('what');
  // const sex = document.getElementById('gender');
  // const propic = document.getElementById('profilepic');
  
  // const subappbtn = document.getElementById('subappbtn');
  // const applicationss = database.collection('applications');
  
  // subappbtn.addEventListener('click', e => {
  // e.preventDefault();
  // const ID = applicationss.add({
  //   firstName: fname.value,
  //   lastName: surname.value,
  //   email: email.value,
  //   StudentNr: studentNr.value, 
  //   Study_year: year.value, 
  //   Cellphone: cell.value, 
  //   Nationality: String(nat.value), 
  //   Hobby: hob.value, 
  //   Age: Number(agey.value), 
  //   Study_Program: stdyProg.value, 
  //   Campus: String(campus.value), 
  //   // Why: Text(why.value), 
  //   // What: what.value,
  //   Gender: String(sex.value),
  //   // Applicant_Picture: img
  // }).then(function() {
  //   alert("Document successfully writen!");
  //   location.href = "/public/index.html"
  // })
  // .catch(function(error) {
  // // The document probably doesn't exist.
  // alert("Error writing document: ", error);
  // });
  // });
  
      // function sendMail() {
      // var tempParams={
      //   to_name:surname.value,
      //   applicant_email:email.value
      // };
      // emailjs.send('service_vvzaw0o', 'template_ev8b3ai', tempParams)
      // .then(function(response) {
      //   console.log('SUCCESS!', response.status, response.text);
      // }, function(error) {
      //   console.log('FAILED...', error);
      // });
      // }
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
 
});







// form.addEventListener('submit', e => {
// 	e.preventDefault();
// 	checkInputs();
// });

// function checkInputs() {
// 	// trim to remove the whitespaces
// 	const fnameValue = fname.value.trim();
//   const surnameValue = surname.value.trim();
//   const emailValue = email.value.trim();
// 	const studentNrValue = studentNr.value.trim();
//   const study_yearValue = year.value.trim(); 
//   const CellphoneValue = cell.value.trim(); 
//   const NationalityValue = String(nat.value).trim(); 
//   const HobbyValue = hob.value.trim(); 
//   const AgeValue = Number(agey.value).trim(); 
//   const Study_ProgramValue = stdyProg.value.trim(); 
//   const CampusValue = String(campus.value).trim(); 
//   const WhyValue = Text(why.value).trim(); 
//   const WhatValue = what.value.trim();
//   const GenderValue = String(sex.value).trim();	
  
// 	if(fnameValue === '') {
// 		setErrorFor(fname, 'First name cannot be blank');
// 	} else {
// 		setSuccessFor(fname);
// 	}  

// 	if(surnameValue === '') {
// 		setErrorFor(surname, 'Surname cannot be blank');
// 	} else {
// 		setSuccessFor(surname);
// 	}

//   if(studentNrValue === '') {
// 		setErrorFor(studentNr, 'Student Nr cannot be blank');
// 	}else {
// 		setSuccessFor(studentNr);
// 	}

//   if(study_yearValue === '') {
// 		setErrorFor(year, 'Study year cannot be blank');
// 	} else {
// 		setSuccessFor(year);
// 	}

//   if(CellphoneValue === '') {
// 		setErrorFor(cell, 'Cell cannot be blank');
// 	} else {
// 		setSuccessFor(cell);
// 	}
//   if(NationalityValue === '') {
// 		setErrorFor(nat, 'Nationality cannot be blank');
// 	} else {
// 		setSuccessFor(nat);
// 	}
//   if(HobbyValue === '') {
// 		setErrorFor(hob, 'Hobby cannot be blank');
// 	} else {
// 		setSuccessFor(hob);
// 	}
//   if(AgeValue === '') {
// 		setErrorFor(agey, 'Age cannot be blank');
// 	} else {
// 		setSuccessFor(agey);
// 	}
//   if(Study_ProgramValue === '') {
// 		setErrorFor(stdyProg, 'Study Program cannot be blank');
// 	} else {
// 		setSuccessFor(stdyProg);
// 	}
//   if(CampusValue === '') {
// 		setErrorFor(campus, 'Campus cannot be blank');
// 	} else {
// 		setSuccessFor(campus);
// 	}
//   if(WhyValue === '') {
// 		setErrorFor(why, 'Why textarea cannot be blank');
// 	} else {
// 		setSuccessFor(why);
// 	}
//   if(WhatValue === '') {
// 		setErrorFor(what, 'What textarea cannot be blank');
// 	} else {
// 		setSuccessFor(what);
// 	}
//   if(GenderValue === '') {
// 		setErrorFor(sex, 'Gender cannot be blank');
// 	} else {
// 		setSuccessFor(sex);
// 	}
	
// 	if(emailValue === '') {
// 		setErrorFor(email, 'Email cannot be blank');
// 	} else if (!isEmail(emailValue)) {
// 		setErrorFor(email, 'Not a valid email');
// 	} else {
// 		setSuccessFor(email);
// 	}
	
// }

// function setErrorFor(input, message) {
// 	const formControl = input.parentElement;
// 	const small = formControl.querySelector('small');
// 	formControl.className = 'form-control error';
// 	small.innerText = message;
// }

// function setSuccessFor(input) {
// 	const formControl = input.parentElement;
// 	formControl.className = 'form-control success';
// }
	
// function isEmail(email) {
// 	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
// }











								//email
							// if (!email.value.match(emailRegex)) {
							// alert('Invalid email address.');}
							// //student nr
							// if ((studentNr.length < 6) && (studentNr.length > 8)) {
							// alert('Student Nr must be more than 6 and less than 8 characters long')
							// }
							// //first and last name
							// if (fname.value.trim()=="") {
							// 	alert('First name can not be blank')
							// }
							// if (surname.value.trim()=="") {
							// 	alert('Surname can not be blank')
							// }
							// //year
							// if (year.value=="") {
							// 	alert('Enter Study Year')
							// }
							// //Cell number
							// if (cell.value.trim()=="") {
							// 	alert('Enter cell number')
							// }
							// // nationality
							// if (String(nat.value)=="") {
							// 	alert('Select a nationality')
							// }
							// //Hobbies
							// if (hob.value.trim()=="") {
							// 	alert('Enter your hobbies')
							// }
							// //age
							// if (Number(agey.value)=="") {
							// 	alert('Select age')
							// }
							// //Study Program
							// if (stdyProg.value.trim()=="") {
							// 	alert('Enter Study Program')
							// }
							// //Campus
							// if (String(campus.value)=="") {
							// 	alert('Select Campus')
							// }
							// //gender
							// if (String(sex.value)=="") {
							// 	alert('Select Gender')
							// }
							// //why
							// if (why.value.trim()=="") {
							// 	alert('Enter your reason for applying for competition')
							// }
							// //what
							// if (what.value.trim()=="") {
							// 	alert('Enter what you would do if you won')
							// }





















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
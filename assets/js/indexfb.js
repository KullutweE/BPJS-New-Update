// const firebaseConfig = {
//     apiKey: "AIzaSyAxh3rwILG9flrPPIuZQoFCEydb25CousY",
//     authDomain: "test-5805a.firebaseapp.com",
//     databaseURL: "https://test-5805a-default-rtdb.firebaseio.com",
//     projectId: "test-5805a",
//     storageBucket: "test-5805a.appspot.com",
//     messagingSenderId: "968627721027",
//     appId: "1:968627721027:web:88544ae67d0e6f0dfc15f6"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);

// // let's code 
// //create database 
// var jemail = document.getElementById('jemail').value;
// var jpassword = document.getElementById('jpassword').value;
// var jfname = document.getElementById('jfirstname').value;
// var jlname = document.getElementById('jlastname').value;
// var jjtitle = document.getElementById('jjobtitle').value;
// var jphone = document.getElementById('jphone').value;
// function RegJudge(jemail,jpassword, jfname, jlname, jjtitle, jphone) {

//     // [START rtdb_write_new_user_completion]
//     firebase.database().ref('Judges/' + jemail).set({
//         First_name: jfname,
//         Last_name: jlname,
//         Email: jemail,
//         password: jpassword,
//         Job_title: jjtitle,
//         Phone: jphone
//     }, (error) => {
//       if (error) {
//         alert("Judge entity NOT saved");
//     } else {
//         alert("Judge entity saved");
//     }
//     });
//     // [END rtdb_write_new_user_completion]
//   }

// // var database  = firebase.database().ref('Judges/',jemail);

// function RegJudge() {
// var jemail = document.getElementById('jemail').value;
// var jpassword = document.getElementById('jpassword').value;
// var jfname = document.getElementById('jfirstname').value;
// var jlname = document.getElementById('jlastname').value;
// var jjtitle = document.getElementById('jjobtitle').value;
// var jphone = document.getElementById('jphone').value;
// firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){
    
// }).catch(function (error){
//     var errorcode = error.code;
//     var errormsg = error.message;
// });
//     // //judge creates the table and email is the identifier
//     // db.ref('Judges/',jemail).set({
//     //     First_name: getId("jfname"),
//     //     Last_name: getId("jlname"),
//     //     Email: getId("jemail"),
//     //     password: getId("jpassword"),
//     //     Job_title: getId("jjtitle"),
//     //     Phone: getId("jphone")
//     // })
//     // //alerts admin that record is created
//     // alert("Judge entity saved")

// }
// document.getElementById('form').addEventListener('submit', (e) => {
//     var userInfo = database.push();
//     userInfo.set({
//         First_name: getId("jfname"),
//         Last_name: getId("jlname"),
//         Email: getId("jemail"),
//         password: getId("jpassword"),
//         Job_title: getId("jjtitle"),
//         Phone: getId("jphone")
//     });
//     alert("Judge entity saved");
//     console.log("sent");
//     document.getElementById('form').reset();
// });
// function  getId(id){
//     return document.getElementById(id).value;
// }

// function UserRegister(){
// var jemail = document.getElementById('jemail').value;
// var jpassword = document.getElementById('jpassword').value;
// // var jfname = document.getElementById('jfirstname').value;
// // var jlname = document.getElementById('jlastname').value;
// // var jjtitle = document.getElementById('jjobtitle').value;
// // var jphone = document.getElementById('jphone').value;
// // var password = document.getElementById('lpassword').value;
// firebase.auth().createUserWithEmailAndPassword(jemail,jpassword).then(function(){
    
// }).catch(function (error){
//     var errorcode = error.code;
//     var errormsg = error.message;
// });
// }

// //signin function
// const auth = firebase.auth();
// function SignIn(){
//     var email = document.getElementById('jemail').value;
//     var password = document.getElementById('jpassword').value;
//     const promise = auth.signInWithEmailAndPassword(jemail,jpassword);
//     promise.catch( e => alert(e.msg));
//     window.open("https://www.google.com","_self");
// }

// //Creates a judge entity
// document.getElementById('form').addEventListener('submit', (e) => {
//     e.preventDefault();
//     var userInfo = db.push();
//     userInfo.set({
//         First_name: getId('jfirstname'),
//         Last_name: getId('jlastname'),
//         Email: getId('jemail'),
//         password: getId('jpassword'),
//         Job_title: getId('jjobtitle'),
//         Phone: getId('jphone')
//     });
//     alert("Successfully Signed Up");
//     console.log("sent");
//     document.getElementById('form').reset();
// });
// function  getId(id){
//     return document.getElementById(id).value;
// }


//   /////////////////////////////////////////////////////////////////////////////////////
//   //Show and hide sign in and signout info

// auf.onAuthStateChanged((user) => {
// var logged=  document.getElementById("loggedin")
// var not_logged=  document.getElementById("loginpage")
//     if (user) {
//       not_logged.style.display="none";
//       logged.style.display="block";
//       var uid = user.uid;
//       // ...
//     } else {
//       not_logged.style.display="block";
//       logged.style.display="none";
//     }
//   });


//   /////////////////////////////////////////////////////////////////////////////////////
//   //
//   //logging function
//   function login(event) {
//     event.preventdefault()
//     var un = document.getElementById('email').Value
//     var pass = document.getElementById('password').Value
//     firebase.auth().signInWithEmailAndPassword(un, pass)
//   .then((userCredential) => {
//     // Signed in
//     var user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     console.log(error.Message)
//     window.alert("Error signing in: ",error.Message)
//   }).then(function (user) {
//     if (user) {
//       console.log('welcome')
//       window.alert("Welcome back, You are logged in")

//     }
//   })
// }
//   ///////////////////////////////////////////////////////////////////////////////////
//   //
//   //logging out function
//   function logout() {
//     firebase.auth().signOut().then(() => {
//       // Sign-out successful.
//     }).catch((error) => {
//       // An error happened.
//     });
// }

// function login() {
    
//     var un = document.getElementById("username").Value;
//     var pass = document.getElementById("logpass").Value;

// //get input data for auth
//     firebase.auth().signInWithEmailAndPassword(un, pass)
//   .then((userCredential) => {
//     // Signed in
//     var user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     var errorCode = error.code;
//     var errorMessage = error.message;

//     window.alert("Error: "+ errorMessage)
//   });
// }


//code

// const auth =  firebase.auth();

//   //signup function
//   function signUp(){
//     var email = document.getElementById("email");
//     var password = document.getElementById("password");

//     const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
//     //
//     promise.catch(e=>alert(e.message));
//     alert("SignUp Successfully");
//   }

//   //signIN function
//   function  signIn(){
//     var email = document.getElementById("email");
//     var password  = document.getElementById("password");
//     const promise = auth.signInWithEmailAndPassword(email.value,password.value);
//     promise.catch(e=>alert(e.message));
    
//   }


//   //signOut

//   function signOut(){
//     auth.signOut();
//     alert("SignOut Successfully from System");
//   }















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
  const dbs = firebase.firestore();



// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
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
        location.href = "/index.html"
    }
    else {
  
        alert("You do not meet the minimum requirement {Not an IUM student}");
          location.href = "/index.html"
      }
}
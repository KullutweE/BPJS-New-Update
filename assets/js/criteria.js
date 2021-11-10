
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
const db = firebase.firestore();

const modalWrapperc = document.querySelector('.modal-wrapperc');
// modal add
const addModalc = document.querySelector('.add-modalc');
// btnAddc.addEventListener('click', () => {
//     console.log("works")
//   });
const addModalcForm2 = document.querySelector('.add-modalc .form');

// modal edit
const editModalc = document.querySelector('.edit-modalc');
const editModalcForm2 = document.querySelector('.edit-modalc .form');

const btnAddc = document.querySelector('.btn-addc');

const tableUsersc = document.querySelector('.table-usersc');

let idc;

// Create element and render users
const renderUserc = doc => {
  const tr = `
    <tr data-idc='${doc.id}'>
      <td>${doc.data().Name}</td>
      <td>${doc.data().Rate}</td>
      <td>${doc.data().Description}</td>
      <td>
        <button class="btn btn-editc">Edit</button>
        <button class="btn btn-deletec">Delete</button>
      </td>
    </tr>
  `;
  tableUsersc.insertAdjacentHTML('beforeend', tr);

  // Click edit user
  const btnEdit = document.querySelector(`[data-idc='${doc.id}'] .btn-editc`);
  btnEdit.addEventListener('click', () => {
    editModalc.classList.add('modal-showc');
    idc = doc.id;
    editModalcForm2.Name.value = doc.data().Name;
    editModalcForm2.Rate.value = doc.data().Rate;
    editModalcForm2.Description.value = doc.data().Description;

  });

  // Click delete user
  const btnDelete = document.querySelector(`[data-idc='${doc.id}'] .btn-deletec`);

  btnDelete.addEventListener('click', () => {
    //add confirmation code

    db.collection('Criteria').doc(`${doc.id}`).delete().then(() => {
      console.log('Document successfully deleted!');
      alert('Criteria deleted successfully!')
    }).catch(err => {
      console.log('Error removing document', err);
      alert('Error removing Criteria',err);

    });
  });
}

// Click add user button
btnAddc.addEventListener('click', () => {
  addModalc.classList.add('modal-showc');

  addModalcForm2.Name.value = '';
  addModalcForm2.Rate.value = '';
  addModalcForm2.Description.value = '';
});

// User click anyware outside the modal
window.addEventListener('click', e => {
  if(e.target === addModalc) {
    addModalc.classList.remove('modal-showc');
  }
  if(e.target === editModalc) {
    editModalc.classList.remove('modal-showc');
  }
});

// Get all users
// db.collection('users').get().then(querySnapshot => {
//   querySnapshot.forEach(doc => {
//     renderUserc(doc);
//   })
// });

// Real time listener
db.collection('Criteria').onSnapshot(snapshot => {
  snapshot.docChanges().forEach(change => {
    if(change.type === 'added') {
      renderUserc(change.doc);
    }
    if(change.type === 'removed') {
      let tr = document.querySelector(`[data-idc='${change.doc.id}']`);
      let tbody = tr.parentElement;
      tableUsersc.removeChild(tbody);
    }
    if(change.type === 'modified') {
      let tr = document.querySelector(`[data-idc='${change.doc.id}']`);
      let tbody = tr.parentElement;
      tableUsersc.removeChild(tbody);
      renderUserc(change.doc);
    }
  })
})

// Click submit in add modal
addModalcForm2.addEventListener('submit', e => {
  e.preventDefault();
  db.collection('Criteria').add({
    Name: addModalcForm2.Name.value,
    Rate: addModalcForm2.Rate.value,
    Description: addModalcForm2.Description.value,
  });
  modalWrapperc.classList.remove('modal-showc');
});

// Click submit in edit modal
editModalcForm2.addEventListener('submit', e => {
  e.preventDefault();
  db.collection('Criteria').doc(idc).update({
    Name: editModalcForm2.Name.value,
    Rate: editModalcForm2.Rate.value,
    Description: editModalcForm2.Description.value,
  });
  editModalc.classList.remove('modal-showc');
  
});




//judges code
//
//
const modalWrapper = document.querySelector('.modal-wrapper');
// modal add
const addModal = document.querySelector('.add-modal');
const addModalForm = document.querySelector('.add-modal .form');

// modal edit
const editModal = document.querySelector('.edit-modal');
const editModalForm = document.querySelector('.edit-modal .form');

const btnAdd = document.querySelector('.btn-add');

const tableUsers = document.querySelector('.table-users');

let id;

// Create element and render users
const renderUser = doc => {
  const tr = `
    <tr data-id='${doc.id}'>
      <td>${doc.data().firstName}</td>
      <td>${doc.data().lastName}</td>
      <td>${doc.data().phone}</td>
      <td>${doc.data().email}</td>
      <td>${doc.data().password}</td>
      <td>${doc.data().job_title}</td>
      <td>
        <button class="btn btn-edit">Edit</button>
        <button class="btn btn-delete">Delete</button>
      </td>
    </tr>
  `;
  tableUsers.insertAdjacentHTML('beforeend', tr);

  // Click edit user
  const btnEdit = document.querySelector(`[data-id='${doc.id}'] .btn-edit`);
  btnEdit.addEventListener('click', () => {
    editModal.classList.add('modal-show');

    id = doc.id;
    editModalForm.firstName.value = doc.data().firstName;
    editModalForm.lastName.value = doc.data().lastName;
    editModalForm.phone.value = doc.data().phone;
    editModalForm.email.value = doc.data().email;
    editModalForm.password.value = doc.data().password;
    editModalForm.job_title.value = doc.data().job_title;

  });

  // Click delete user
  const btnDelete = document.querySelector(`[data-id='${doc.id}'] .btn-delete`);
  btnDelete.addEventListener('click', () => {
    db.collection('Judges').doc(`${doc.id}`).delete().then(() => {
      console.log('Document Successfully deleted! but still has user account');
      const user = firebase.auth().currentUser;

    user.delete().then(() => {
      console.log("deleted user acc")
    }).catch((error) => {
      console.log(error.message)
      // ...
    });
      //add code to delete user acc
      alert('Judge account deleted successfully!')
    }).catch(err => {
      console.log('Error removing document', err);
      alert('Error removing Judge account',err);

    });
  });

}

// Click add user button
btnAdd.addEventListener('click', () => {
  addModal.classList.add('modal-show');

  addModalForm.firstName.value = '';
  addModalForm.lastName.value = '';
  addModalForm.phone.value = '';
  addModalForm.email.value = '';
  addModalForm.job_title.value = '';
  addModalForm.password.value = '';
});

// User click anywhere outside the modal
window.addEventListener('click', e => {
  if(e.target === addModal) {
    addModal.classList.remove('modal-show');
  }
  if(e.target === editModal) {
    editModal.classList.remove('modal-show');
  }
});

// Get all users
// db.collection('users').get().then(querySnapshot => {
//   querySnapshot.forEach(doc => {
//     renderUser(doc);
//   })
// });

// Real time listener
db.collection('Judges').onSnapshot(snapshot => {
  snapshot.docChanges().forEach(change => {
    if(change.type === 'added') {
      renderUser(change.doc);
    }
    if(change.type === 'removed') {
      let tr = document.querySelector(`[data-id='${change.doc.id}']`);
      let tbody = tr.parentElement;
      tableUsers.removeChild(tbody);
    }
    if(change.type === 'modified') {
      let tr = document.querySelector(`[data-id='${change.doc.id}']`);
      let tbody = tr.parentElement;
      tableUsers.removeChild(tbody);
      renderUser(change.doc);
    }
  })
})

const auth = firebase.auth();
auth.useDeviceLanguage();


// Click submit in add modal
addModalForm.addEventListener('submit', e => {
  e.preventDefault();
  db.collection('Judges').add({
    firstName: addModalForm.firstName.value,
    lastName: addModalForm.lastName.value,
    phone: addModalForm.phone.value,
    email: addModalForm.email.value,
    job_title: addModalForm.job_title.value,
    password: addModalForm.password.value,
  }).then(() => {
      alert('Judge signed Up Successfully!');
      
      const email = addModalForm.email.value;
      const password = addModalForm.password.value;
      //Built in firebase function responsible for signing up a user
      auth.createUserWithEmailAndPassword(email, password).then(
        preventDefault()
      );
      sendVerificationEmail();
      sendMail()
      e.preventDefault();
      
  })
  .catch(error => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
    alert(errorMessage,errorCode)
  })

const sendVerificationEmail = () => {
  //Built in firebase function responsible for sending the verification email
  auth.currentUser.sendEmailVerification()
  .then(() => {
      console.log('Verification Email Sent Successfully!');
      alert('Verification Email Sent Successfully!');
      //redirecting the user to the profile page once everything is done correctly
      // window.location.assign('../logged/adminscreen.html');
  })
  .catch(error => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
    alert(errorMessage,errorCode)
  })
}
      function sendMail() {
        var tempParams={
          to_name:addModalForm.lastName.value,
          JudgeUser:addModalForm.email.value,
          Judgepass:addModalForm.password.value
        };
        emailjs.send('service_vvzaw0o', 'template_md4dekk', tempParams)
        .then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
          console.log('FAILED...', error);
        });
      }
  modalWrapper.classList.remove('modal-show');
});

// Click submit in edit modal
editModalForm.addEventListener('submit', e => {
  e.preventDefault();
  db.collection('Judges').doc(id).update({
    firstName: editModalForm.firstName.value,
    lastName: editModalForm.lastName.value,
    phone: editModalForm.phone.value,
    email: editModalForm.email.value,
    job_title: editModalForm.job_title.value,
    password: editModalForm.password.value,
  });
  editModal.classList.remove('modal-show');
  
});



// const auth = firebase.auth();


// const mailField = document.getElementById('signupemail');
// const passwordField = document.getElementById('signuppassword');
// const signUp = document.getElementById('signUp');

// //Sends verification emails in the same language as the language used in the
// //user's device
// auth.useDeviceLanguage();

// //Function wrapping all the signup parts including the email verification email
// //triggered once the user clicks on the signup button
// signUp.addEventListener('click', e => {
//     e.preventDefault();
//     const email = mailField.value;
//     const password = passwordField.value;

//     //Built in firebase function responsible for signing up a user
//     auth.createUserWithEmailAndPassword(email, password)
//     .then(() => {
//         alert('Signed Up Successfully !');
//         sendVerificationEmail();
//     })
//     .catch(error => {
//         console.error(error);
//         console.log("fail")
//     })
//   });

// //Function called right after the signUpWithEmailAndPassword to send verification emails
// const sendVerificationEmail = () => {
//     //Built in firebase function responsible for sending the verification email
//     auth.currentUser.sendEmailVerification()
//     .then(() => {
//         console.log('Verification Email Sent Successfully !');
//         alert('Verification Email Sent Successfully !');
//         //redirecting the user to the profile page once everything is done correctly
//         window.location.assign('../logged/adminscreen.html');
//     })
//     .catch(error => {
//         console.error(error);
//     })
// }








// function handleInput() {
//   var validRegex = /^[0-9]+@[.campus.ium.edu.na]/;
  
//   if (email.match(validRegex)) {
//       //Built in firebase function responsible for signing up a user
// auth.createUserWithEmailAndPassword(email, password)
// .then(() => {
//     alert('Judge signed Up Successfully!');
//     sendVerificationEmail();
// })
// .catch(error => {
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   console.log(errorMessage)
//   alert(errorMessage,errorCode)
// })

// const sendVerificationEmail = () => {
// //Built in firebase function responsible for sending the verification email
// auth.currentUser.sendEmailVerification()
// .then(() => {
//     console.log('Verification Email Sent Successfully!');
//     alert('Verification Email Sent Successfully!');
//     //redirecting the user to the profile page once everything is done correctly
//     // window.location.assign('../logged/adminscreen.html');
// })
// .catch(error => {
//   var errorCode = error.code;
//   var errorMessage = error.message;
//   console.log(errorMessage)
//   alert(errorMessage,errorCode)
// })
// }
//   }
//   else {

//       alert("Judge needs IUM email");
//     }
// }

const modalWrapperapp = document.querySelector('.modal-wrapperapp');
// modal add
const addModalapp = document.querySelector('.add-modalapp');
// btnAddc.addEventListener('click', () => {
//     console.log("works")
//   });
const addModalappForm3 = document.querySelector('.add-modalapp .form');

// modal edit
const editModalapp = document.querySelector('.edit-modalapp');
const editModalappForm3 = document.querySelector('.edit-modalapp .form');

const btnAddapp = document.querySelector('.btn-addapp');

const tableUsersapp = document.querySelector('.table-usersapp');

let idapp;

// Create element and render users
const renderUserapp = doc => {
  const tr = `
    <tr data-idapp='${doc.id}'>
      <td>${doc.data().firstName}</td>
      <td>${doc.data().lastName}</td>
      <td>${doc.data().email}</td>
      <td>${doc.data().Nationality}</td>
      <td>${doc.data().StudentNr}</td>
      <td>${doc.data().ContestantNo}</td>
      <td>
        <button class="btn btn-editapp">Edit</button>
        <button class="btn btn-deleteapp">Delete</button>
      </td>
    </tr>
  `;
  tableUsersapp.insertAdjacentHTML('beforeend', tr);

  // Click edit user
  const btnEdit = document.querySelector(`[data-idapp='${doc.id}'] .btn-editapp`);
  btnEdit.addEventListener('click', () => {
    editModalapp.classList.add('modal-showapp');
    idapp = doc.id;
    editModalappForm3.firstname.value = doc.data().firstname;
    editModalappForm3.lastname.value = doc.data().lastname;
    editModalappForm3.email.value = doc.data().email;
    editModalappForm3.Nationality.value = doc.data().Nationality;
    editModalappForm3.StudentNr.value = doc.data().StudentNr;
    editModalappForm3.ContestantNo.value = doc.data().ContestantNo;

  });

  // Click delete user
  const btnDelete = document.querySelector(`[data-idapp='${doc.id}'] .btn-deleteapp`);

  btnDelete.addEventListener('click', () => {
    //add confirmation code

    db.collection('Applications').doc(`${doc.id}`).delete().then(() => {
      console.log('Document successfully deleted!');
      alert('Application deleted successfully!')
    }).catch(err => {
      console.log('Error removing document', err);
      alert('Error removing Application',err);

    });
  });
}

// Click add user button
btnAddapp.addEventListener('click', () => {
  addModalapp.classList.add('modal-showapp');

  addModalappForm3.firstname.value = '';
  addModalappForm3.lastname.value = '';
  addModalappForm3.email.value = '';
  addModalappForm3.Nationality.value = '';
  addModalappForm3.StudentNr.value = '';
  addModalappForm3.ContestantNo.value = '';
});

// User click anywhere outside the modal
window.addEventListener('click', e => {
  if(e.target === addModalapp) {
    addModalapp.classList.remove('modal-showapp');
  }
  if(e.target === editModalapp) {
    editModalapp.classList.remove('modal-showapp');
  }
});

// // Get all users
// db.collection('Applications').get().then(querySnapshot => {
//   querySnapshot.forEach(doc => {
//     renderUserc(doc);
//   })
// });

// Real time listener
db.collection('Applications').onSnapshot(snapshot => {
  snapshot.docChanges().forEach(change => {
    if(change.type === 'added') {
      renderUserapp(change.doc);
    }
    if(change.type === 'removed') {
      let tr = document.querySelector(`[data-idapp='${change.doc.id}']`);
      let tbody = tr.parentElement;
      tableUsersapp.removeChild(tbody);
    }
    if(change.type === 'modified') {
      let tr = document.querySelector(`[data-idapp='${change.doc.id}']`);
      let tbody = tr.parentElement;
      tableUsersapp.removeChild(tbody);
      renderUserapp(change.doc);
    }
  })
})

// Click submit in add modal
addModalappForm2.addEventListener('submit', e => {
  e.preventDefault();
  db.collection('Applications').add({
    firstname:addModalappForm3.firstname.value,
    lastname :addModalappForm3.lastname.value,
    email :addModalappForm3.email.value,
    Nationality :addModalappForm3.Nationality.value,
    StudentNr :addModalappForm3.StudentNr.value,
    ContestantNo :addModalappForm3.ContestantNo.value,
  });
  modalWrapperapp.classList.remove('modal-showapp');
});

// Click submit in edit modal
editModalappForm3.addEventListener('submit', e => {
  e.preventDefault();
  db.collection('Criteria').doc(idapp).update({
    firstname:editModalappForm3.firstname.value,
    lastname :editModalappForm3.lastname.value,
    email :editModalappForm3.email.value,
    Nationality :editModalappForm3.Nationality.value,
    StudentNr :editModalappForm3.StudentNr.value,
    ContestantNo :editModalappForm3.ContestantNo.value,
  });
  editModalapp.classList.remove('modal-showapp');
  
});
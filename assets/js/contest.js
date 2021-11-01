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

const modalWrapperapp = document.querySelector('.modal-wrapperapp');
// modal add
const addModalapp = document.querySelector('.add-modalapp');
// btnAddc.addEventListener('click', () => {
//     console.log("works")
//   });
const addModalappForm2 = document.querySelector('.add-modalapp .form');

// modal edit
const editModalapp = document.querySelector('.edit-modalapp');
const editModalappForm2 = document.querySelector('.edit-modalapp .form');

const btnAddapp = document.querySelector('.btn-addapp');

const tableUsersapp = document.querySelector('.table-usersapp');

let idapp;

// Create element and render users
const renderUserapp = doc => {
  const tr = `
    <tr data-idapp='${doc.id}'>
      <td>${doc.data().Name}</td>
      <td>${doc.data().Rate}</td>
      <td>${doc.data().Description}</td>
      <td>
        <button class="btn btn-editapp">Edit</button>
        <button class="btn btn-deleteapp">Delete</button>
      </td>
    </tr>
  `;
  tableUsersc.insertAdjacentHTML('beforeend', tr);

  // Click edit user
  const btnEdit = document.querySelector(`[data-idapp='${doc.id}'] .btn-editapp`);
  btnEdit.addEventListener('click', () => {
    editModalapp.classList.add('modal-showapp');
    idc = doc.id;
    editModalappForm2.Name.value = doc.data().Name;
    editModalappForm2.Rate.value = doc.data().Rate;
    editModalappForm2.Description.value = doc.data().Description;

  });

  // Click delete user
  const btnDelete = document.querySelector(`[data-idapp='${doc.id}'] .btn-deleteapp`);

  btnDelete.addEventListener('click', () => {
    //add confirmation code

    db.collection('Criteria').doc(`${doc.id}`).delete().then(() => {
      console.log('Document succesfully deleted!');
      alert('Contestant deleted succesfully!')
    }).catch(err => {
      console.log('Error removing document', err);
      alert('Error removing Contestant account',err);

    });
  });
}

// Click add user button
btnAddapp.addEventListener('click', () => {
  addModalapp.classList.add('modal-showapp');

  addModalappForm2.Name.value = '';
  addModalappForm2.Rate.value = '';
  addModalappForm2.Description.value = '';
});

// User click anyware outside the modal
window.addEventListener('click', e => {
  if(e.target === addModalapp) {
    addModalapp.classList.remove('modal-showapp');
  }
  if(e.target === editModalc) {
    editModalapp.classList.remove('modal-showapp');
  }
});

// // Get all users
// db.collection('applications').get().then(querySnapshot => {
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
      let tr = document.querySelector(`[data-idapp='${change.doc.id}']`);
      let tbody = tr.parentElement;
      tableUsersapp.removeChild(tbody);
    }
    if(change.type === 'modified') {
      let tr = document.querySelector(`[data-idapp='${change.doc.id}']`);
      let tbody = tr.parentElement;
      tableUsersapp.removeChild(tbody);
      renderUserc(change.doc);
    }
  })
})

// Click submit in add modal
addModalappForm2.addEventListener('submit', e => {
  e.preventDefault();
  db.collection('Criteria').add({
    Name: addModalappForm2.Name.value,
    Rate: addModalappForm2.Rate.value,
    Description: addModalappForm2.Description.value,
  });
  modalWrapperapp.classList.remove('modal-showapp');
});

// // Click submit in edit modal
// editModalcForm2.addEventListener('submit', e => {
//   e.preventDefault();
//   db.collection('Criteria').doc(idapp).update({
//     Name: editModalappForm2.Name.value,
//     Rate: editModalappForm2.Rate.value,
//     Description: editModalappForm2.Description.value,
//   });
//   editModalapp.classList.remove('modal-showapp');
  
// });

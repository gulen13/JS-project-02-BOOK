
console.log('start v1');
import { initializeApp } from 'firebase/app';
import {
  doc,
  getDoc,
  setDoc,
  getDocs,
  getFirestore,
  collection,
} from 'firebase/firestore';
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  deleteUser,
  reauthenticateWithCredential,
  updateProfile,
  signOut,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCKI9Dj7vqAk2upt61qv5a7F6gdwdA1Pn8',
  authDomain: 'book-project-name.firebaseapp.com',
  databaseURL: 'https://book-project-name-default-rtdb.firebaseio.com',
  projectId: 'book-project-name',
  storageBucket: 'book-project-name.appspot.com',
  messagingSenderId: '1038443063469',
  appId: '1:1038443063469:web:57badc25615bd16ba6fe24',
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const todosCol = collection(db, 'todos');
getDocs(todosCol);
onAuthStateChanged(auth, currentUser => {
  if (currentUser !== null) {
    console.log('logged in!');
    console.log(auth.currentUser.email);
    console.log(auth.currentUser.displayName);
  } else {
    console.log('No user');
  }
});

async function setData() {
  await setDoc(doc(db, 'user', 'nameuser'), {
    id: 1,
    message: 'newmes',
  });
}
setData();
async function getData() {
  const docRef = doc(db, 'user', 'nameuser');
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    console.log('Document data:', docSnap.data());
  } else {
    console.log('No such document!');
  }
}
getData();

function del() {
  updateProfile(auth.currentUser, {
    displayName: 'userName',
  })
    .then(() => {})
    .catch(error => {});
}

const sigInBtn = document
  .querySelector('.sigIn')
  .addEventListener('click', sigInFunc);
const sigOutBtn = document
  .querySelector('.sigOut')
  .addEventListener('click', sigOutFunc);
const regBtn = document
  .querySelector('.reg')
  .addEventListener('click', regFunc);

function sigInFunc() {}
function sigOutFunc() {
  signOut(auth)
    .then(() => {
      // code for redirect user to Log-in page
      // ...
    })
    .catch(error => {
      console.log(error);
    });
}
function regFunc() {}

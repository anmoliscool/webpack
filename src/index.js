import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/auth';
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDqtm7YRTDrpIVSFxHmgR0Js4AU-pB71R4",
  authDomain: "authentication-80145.firebaseapp.com",
  projectId: "authentication-80145",
  storageBucket: "authentication-80145.appspot.com",
  messagingSenderId: "345465498778",
  appId: "1:345465498778:web:81f13ea4d6439f6f7b8323",
  measurementId: "G-PS3CY5DPBM"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

document.getElementById('dashboard');

document.getElementById('login').addEventListener('click', GoogleLogin);
document.getElementById('logout').addEventListener('click', LogoutUser);

let provider = new firebase.auth.GoogleAuthProvider();

function GoogleLogin() {
  console.log('Login Btn Call')
  firebase.auth().signInWithPopup(provider).then(res => {
    console.log(res.user)
    document.getElementById('LoginScreen').style.display = "none"
    document.getElementById('dashboard').style.display = "block"
    showUserDetails(res.user)
  }).catch(e => {
    console.log(e)
  })
}

function showUserDetails(user) {
  document.getElementById('userDetails').innerHTML = `
    <img src="${user.photoURL}" style="width:10%">
    <p>Name: ${user.displayName}</p>
    <p>Email: ${user.email}</p>
  `
}

function checkAuthState() {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      document.getElementById('LoginScreen').style.display = "none"
      document.getElementById('dashboard').style.display = "block"
      showUserDetails(user)
    } else {

    }
  })
}

function LogoutUser() {
  console.log('Logout Btn Call')
  firebase.auth().signOut().then(() => {
    document.getElementById('LoginScreen').style.display = "block"
    document.getElementById('dashboard').style.display = "none"
  }).catch(e => {
    console.log(e)
  })
}
checkAuthState()
console.log("works");

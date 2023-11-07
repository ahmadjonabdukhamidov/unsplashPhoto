import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAYJdUM9FWmJNC6-jlB9QL_LnFtQcrYl30",
  authDomain: "searchphoto-a4d90.firebaseapp.com",
  projectId: "searchphoto-a4d90",
  storageBucket: "searchphoto-a4d90.appspot.com",
  messagingSenderId: "955782516110",
  appId: "1:955782516110:web:21ad75a0141ec6a5d9a8df",
  // measurementId: "G-GSJ0W4SL7W"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth();

const provider = new GoogleAuthProvider();

export const signUpLogin = async () => {
  return signInWithPopup(auth, provider)
    .then((result) => {
      return result;
    })
    .catch((error) => {
      return error;
    });
};

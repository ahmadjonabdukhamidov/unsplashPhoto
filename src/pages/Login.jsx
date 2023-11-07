import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useGlobalContext } from "../hooks/useGlobalContext";

import { signUpLogin } from "../firebase/firebaseConfig";

function Login() {
  const { addUser, user } = useGlobalContext();
  const login = () => {
    signUpLogin()
      .then((result) => {
        addUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="login-page">
      {!user && <h1>Login With Google Account</h1>}
      {
        user && <div className="user-card">
        <h1>{user.displayName}</h1>
        <img className="user-image" src={user.photoURL} alt="" />
        </div>
      }
      <button onClick={login} className="button">
        <span className="button-inner">
          <span>Google</span>
          <FcGoogle />
        </span>
      </button>
    </div>
  );
}

export default Login;

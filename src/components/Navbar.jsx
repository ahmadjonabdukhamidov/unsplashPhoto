import { Link } from "react-router-dom";
// import { GlobalContext } from "../context/GlobalState";
// import { useContext } from "react";

import { useGlobalContext } from "../hooks/useGlobalContext";

function Navbar() {
  const { likedImages, changeMode, mode } = useGlobalContext();

  const changeGlobalMode = () => {
    let newMode = mode === "light" ? "dark" : "light";
    changeMode(newMode);
    // console.log(newMode)
  };

  


  return (
    <div className="navbar container">
      <h3 className="logo">React</h3>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/likedImages">
          Liked-Images <span className="badge">{likedImages.length}</span>
        </Link>
        <Link to="/login">Login</Link>
        <button onClick={changeGlobalMode}>mode</button>
      </nav>
    </div>
  );
}

export default Navbar;

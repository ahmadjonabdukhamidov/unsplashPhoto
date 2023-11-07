import React from "react";
import Galery from "../components/Galery";
import { useGlobalContext } from "../hooks/useGlobalContext";
// import { GlobalContext } from "../context/GlobalState";
// import { useContext } from "react";

function LikedImages() {
  const { likedImages } = useGlobalContext();
  // console.log(likedImages);
  return (
    <>
      <Galery data={{ results: likedImages }} />
    </>
  );
}

export default LikedImages;

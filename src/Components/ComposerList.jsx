import React from "react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../App";
import WelcomeBanner from "./WelcomeBanner";

const ComposerList = () => {
  const { data } = useContext(DataContext);

  const composerGallery = data.map((item, index)=>{
    
    return(
      <div key={index} className="composerListItem">
        <div className="imageContainer"><img src={item.portrait} alt={`${item.complete_name} portrait`}/></div>
        <h2>{item.complete_name}</h2>
      </div>
    )
  });

  return (
    <>
      <WelcomeBanner/>
      <div className="composerListContainer">
        {composerGallery}
      </div>
    </>
  );
};

export default ComposerList;

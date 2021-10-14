import React, { useEffect } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../context/Context";
import WelcomeBanner from "./WelcomeBanner";

const ComposerList = () => {
  const { data, setData, user } = useContext(DataContext);

  useEffect(() => {
    return fetch('http://localhost:5000/composers')
    .then(data => data.json())
    .then(items => {  
      setData(items);
    })
  }, [user]);

  const composerGallery = data.map((item, index)=>{
    return(
      <Link to={{pathname:`/composers/${item.complete_name}`, state: {composer: item}}} key={index} className="composerListItem">
        <div className="imageContainer"><img src={item.portrait} alt={`${item.complete_name} portrait`}/></div>
        <h2>{item.complete_name}</h2>
      </Link>
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

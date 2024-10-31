import React from "react";


function Banniere({ image, texte }) {
  return (
    <div className="banner">
      <img className="banner__img" src={image} alt="Bannière" />
      <span className="banner__txtA">{texte}</span>
    </div>
  );
}

export default Banniere;

// Le composant Banner est un outil efficace pour communiquer 
// visuellement des informations importantes et pour améliorer l'esthétique de ton application.
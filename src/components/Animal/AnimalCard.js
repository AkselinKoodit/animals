import React from "react";
import "./animals.css";

const AnimalCard = ({ name, link, img, desc, aclass }) => {
  const limitWords = (str, no_words) => {
    return str.split(" ").splice(0, no_words).join(" ");
  };

  return (
    <div className="card">
      <h3> {name} </h3>
      <div className="imgContainer">
        <img src={img} alt={name} />
      </div>
      <p>Animal class: {aclass}</p>
      <p>
        Description:
        {limitWords(desc, 20)}...
      </p>

      <a href={link}>Read more here!</a>
    </div>
  );
};

export default AnimalCard;

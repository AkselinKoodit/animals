import React from "react";
import AnimalCard from "./AnimalCard";

const AnimalsList = ({ animals }) => {
  return (
    <div className="animalsListing">
      {animals.map((animal) => (
        <AnimalCard
          key={animal.id}
          name={animal.name}
          img={animal.img}
          desc={animal.desc}
          img={animal.img}
          aclass={animal.aclass}
          link={animal.link}
        />
      ))}
    </div>
  );
};

export default AnimalsList;

import React, { useState, useEffect } from "react";
import AnimalCard from "./AnimalCard";
import AnimalNew from "./AnimalNew";
import axios from "axios";

const AnimalsList = () => {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3010/animals")
      .then((response) => setAnimals(response.data));
  }, []);
  console.log(animals);

  return (
    <div>
      <div className="animalsListing">
        {animals.map((animal) => (
          <AnimalCard
            name={animal.name}
            key={animal.id}
            desc={animal.desc}
            aclass={animal.aclass}
            img={animal.img}
            link={animal.link}
          />
        ))}
      </div>
    </div>
  );
};

// this.setState({ isLoading: true });
// fetch("http://localhost:3003/recipes")
//   .then((response) => response.json())
//   .then((data) => this.setState({ recipes: data, isLoading: false }));

export default AnimalsList;

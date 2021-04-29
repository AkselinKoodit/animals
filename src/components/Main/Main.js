import React, { useState, useEffect } from "react";
import AnimalsList from "../Animal/AnimalsList";
import AnimalNew from "../Animal/AnimalNew";
import axios from "axios";

const Main = () => {
  const [animals, setAnimals] = useState([]);
  const [newAnimal, setNewAnimal] = useState({
    name: "",
    aclass: "student",
    img: "",
    desc: "",
    link: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:3010/animals")
      .then((response) => setAnimals(response.data));
  }, []);

  const valueChangeHandler = (e) => {
    setNewAnimal({ ...newAnimal, [e.target.name]: e.target.value });
  };
  const submitAnimal = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3010/animals", newAnimal)
      .then(() => {
        return axios.get("http://localhost:3010/animals");
      })
      .then((response) => setAnimals(response.data));
    e.target.reset();
  };

  return (
    <main>
      <AnimalsList animals={animals} />
      <AnimalNew change={valueChangeHandler} submit={submitAnimal} />
    </main>
  );
};

export default Main;

import React, { useState, UseEffect } from "react";
import AnimalsList from "../Animal/AnimalsList";
import AnimalNew from "../Animal/AnimalNew";
import axios from "axios";

const Main = () => {
  const [newAnimal, setNewAnimal] = useState({
    name: "",
    aclass: "",
    img: "",
    desc: "",
    link: "",
  });

  const valueChangeHandler = (e) => {
    setNewAnimal({ ...newAnimal, [e.target.name]: e.target.value });
  };
  const submitAnimal = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3010/animals", newAnimal);
  };
  return (
    <main>
      <AnimalsList />
      <AnimalNew change={valueChangeHandler} submit={submitAnimal} />
    </main>
  );
};

export default Main;

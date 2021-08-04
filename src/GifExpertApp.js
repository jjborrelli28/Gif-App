import React, { useState } from "react";
import { AddCategory } from "./Components/AddCategory";
import { GifGrid } from "./Components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([""]);

  return (
    <>
      <header>
        <h2>Gif App</h2>
        <AddCategory setCategories={setCategories} />
        <hr />
      </header>
      <main>
        {categories.map((category) => {
          if (categories !== "") {
            return <GifGrid key={category} category={category} />;
          }
        })}
      </main>
      <footer>By Juan Jose Borrelli - Copyright ©:</footer>
    </>
  );
};

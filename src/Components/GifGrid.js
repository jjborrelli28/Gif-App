import React from "react";
import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../Hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { data: images } = useFetchGifs(category);

  return (
    <div className="container">
      <h2 className="category">{category}</h2>
      {category && <hr />}
      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </div>
  );
};

import React from 'react';
import { useSelector } from 'react-redux';

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites);

  return (
    <div className="favorites">
      <h2>Favorites</h2>
      {favorites.map((recipe, index) => (
        <div key={index} className="favorite-recipe">
          <h3>{recipe.recipe.label}</h3>
          <img src={recipe.recipe.image} alt={recipe.recipe.label} />
        </div>
      ))}
    </div>
  );
};

export default Favorites;
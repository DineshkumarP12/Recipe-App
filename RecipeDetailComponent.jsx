import React from 'react';

const RecipeDetail = ({ recipe }) => {
  if (!recipe) return <p>Select a recipe to view details.</p>;

  return (
    <div className="recipe-detail">
      <h2>{recipe.recipe.label}</h2>
      <img src={recipe.recipe.image} alt={recipe.recipe.label} />
      <h3>Ingredients:</h3>
      <ul>
        {recipe.recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient.text}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <p>{recipe.recipe.url}</p>
    </div>
  );
};

export default RecipeDetail;
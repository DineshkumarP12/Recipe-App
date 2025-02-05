import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes } from '../redux/slices/recipeSlice';

const RecipeList = () => {
  const dispatch = useDispatch();
  const { recipes, status, error } = useSelector((state) => state.recipes);

  useEffect(() => {
    dispatch(fetchRecipes({ query: 'pizza' }));
  }, [dispatch]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  return (
    <div className="recipe-list">
      {recipes.map((recipe, index) => (
        <div key={index} className="recipe-card">
          <img src={recipe.recipe.image} alt={recipe.recipe.label} />
          <h3>{recipe.recipe.label}</h3>
          <p>{recipe.recipe.source}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
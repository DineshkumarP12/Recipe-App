const initialState = {
    recipes: [],
    favorites: [],
  };
  
  const recipeReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_RECIPES":
        return { ...state, recipes: action.payload };
      case "ADD_TO_FAVORITES":
        return {
          ...state,
          favorites: [...state.favorites, action.payload],
        };
      case "REMOVE_FROM_FAVORITES":
        return {
          ...state,
          favorites: state.favorites.filter(
            (fav) => fav.recipe.uri !== action.payload
          ),
        };
      default:
        return state;
    }
  };
  
  export default recipeReducer;
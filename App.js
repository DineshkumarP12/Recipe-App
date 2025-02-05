import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";
import Favorites from "./components/Favorites";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Recipe Finder</h1>
        <SearchBar />
        <RecipeList />
        <Favorites />
      </div>
    </Provider>
  );
}

export default App;
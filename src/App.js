import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from "./components/About";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Home from "./components/home";
import Work from "./components/Work";
import Contact from "./components/Contact";
import RecipeHome from './components/recipe-app/Home';
import Recipes from './components/recipe-app/Recipes';
import RecipeDetail from './components/recipe-app/RecipeDetail';
import Pantry from './components/recipe-app/Pantry'
import RecipeBanner from 'src/components/recipe-app/recipeComponents/Banner.tsx'
import RecipeFooter from 'src/components/recipe-app/recipeComponents/Footer.tsx'
import RecipeNavbar from 'src/components/recipe-app/recipeComponents/Navbar.tsx'

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
      <Route path="/whats-4-dinner" element={<RecipeHome />} />
      <Route path="/whats-4-dinner/recipes" element={<Recipes />} />
      <Route path="/whats-4-dinner/recipes/:id" element={<RecipeDetail />} />
      <Route path="/whats-4-dinner/pantry" element={<Pantry />} />
    </div>
  );
}

export default App;

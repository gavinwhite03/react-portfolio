import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from "./components/About";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Home from "./components/home";
import Work from "./components/Work";
import Contact from "./components/Contact";
import RecipeHome from './components/recipe-app/Home.tsx';
import Recipes from './components/recipe-app/Recipes.tsx';
import RecipeDetail from './components/recipe-app/RecipeDetails.tsx';
import Pantry from './components/recipe-app/Pantry.tsx';
import RecipeBanner from './components/recipe-app/recipeComponents/Banner.tsx';
import RecipeFooter from './components/recipe-app/recipeComponents/Footer.tsx';
import RecipeNavbar from './components/recipe-app/recipeComponents/Navbar.tsx';

// Main portfolio layout component
function PortfolioLayout() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

// Recipe app layout component with recipe-specific navbar/footer
function RecipeLayout({ children }) {
  return (
    <div>
      <RecipeBanner />
      <RecipeNavbar />
      {children}
      <RecipeFooter />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main portfolio page */}
        <Route path="/" element={<PortfolioLayout />} />
        
        {/* Recipe app routes with recipe layout */}
        <Route path="/whats-4-dinner" element={
          <RecipeLayout>
            <RecipeHome />
          </RecipeLayout>
        } />
        <Route path="/whats-4-dinner/recipes" element={
          <RecipeLayout>
            <Recipes />
          </RecipeLayout>
        } />
        <Route path="/whats-4-dinner/recipes/:id" element={
          <RecipeLayout>
            <RecipeDetail />
          </RecipeLayout>
        } />
        <Route path="/whats-4-dinner/pantry" element={
          <RecipeLayout>
            <Pantry />
          </RecipeLayout>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
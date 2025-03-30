import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Layout from "./Layout/Layout.jsx";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route, RouterProvider } from "react-router-dom";
import {
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import About from "./Components/About/About.jsx";
import Home from "./Components/Home/Home.jsx";
import RecipePage from "./Components/Recipe/RecipePage.jsx";
import RecipeDetail from "./Components/Recipe/RecipeDetail.jsx";
import Tips from "./Components/Tips/Tips.jsx";
import Community from "./Components/Community/Community.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/recipes" element={<RecipePage />}></Route>
      <Route path={`recipe/:id`} element={<RecipeDetail />}></Route>
      <Route path="/tips" element={<Tips />}></Route>
      <Route path="/community" element={<Community />}></Route>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

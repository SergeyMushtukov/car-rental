import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

import Layout from "./Layout/Layout";
const Home = lazy(() => import("../pages/Home"));
const Cars = lazy(() => import("../pages/Cars"));
const FavoritesCars = lazy(() => import("../pages/FavoritesCars"));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<Cars />} />
        <Route path="favorites" element={<FavoritesCars />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;

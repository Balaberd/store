import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Icon } from "../shared/Icon/Icon";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import { Catalog } from "./Pages/Catalog/Catalog";
import { Landing } from "./Pages/Landing/Landing";
import { Product } from "./Pages/Product/Product";

export const App: FC = () => {

  return (
    <BrowserRouter>
      <Header />
      <Icon iconName="catalog" />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:id" element={<Product />} />
        <Route path="/catalog" element={<Product />} />
        <Route path="*" element={<Landing />} />

      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;

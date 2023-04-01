import { FC, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useAppDispatch } from "./store/hooks/redux";
import { getBasketFromLocalStorage } from "./store/reducers/basketSlice";
import { getProducts } from "./store/reducers/productsSlice";
import { Header } from "./components/widgets/Header/Header";
import { LandingPage } from "./components/pages/LandingPage/LandingPage";
import { CatalogPage } from "./components/pages/CatalogPage/CatalogPage";
import { ProductPage } from "./components/pages/ProductPage/ProductPage";
import { BasketPage } from "./components/pages/BasketPage/BasketPage";
import { Footer } from "./components/widgets/Footer/Footer";


export const App: FC = () => {

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getBasketFromLocalStorage());
  }, [])


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<ProductPage />} />
        <Route path="/basket" element={<BasketPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

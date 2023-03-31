import { FC, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useAppDispatch } from "../hooks/redux";
import { productsMock } from "../MOCK/MOCK";
import { getBasketFromLocalStorage, refreshLocalStorageBasket } from "../store/reducers/basketSlice";
import { getProducts } from "../store/reducers/productsSlice";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import { BasketPage } from "./Pages/BasketPage/BasketPage";
import { CatalogPage } from "./Pages/CatalogPage/CatalogPage";
import { LandingPage } from "./Pages/LandingPage/LandingPage";
import { ProductPage } from "./Pages/ProductPage/ProductPage";

export const App: FC = () => {

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getBasketFromLocalStorage());
  }, [])


  return (
    <BrowserRouter>
      <Header />
      {/* <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<ProductPage />} />
        <Route path="/basket" element={<BasketPage />} />
      </Routes>
      <Footer /> */}
    </BrowserRouter>
  );
};

export default App;

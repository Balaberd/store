import { FC, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import { BasketPage } from "./Pages/BasketPage/BasketPage";
import { CatalogPage } from "./Pages/CatalogPage/CatalogPage";
import { LandingPage } from "./Pages/LandingPage/LandingPage";
import { ProductPage } from "./Pages/ProductPage/ProductPage";


export interface IBasket {
  [key: number]: number;
}

const getStateFromLocalStorage = () => {
  let localState = localStorage.getItem("basket");
  if (!localState) {
    localState = JSON.stringify({});
  }
  return JSON.parse(localState);
}

const refreshLocalStorage = (newValue: IBasket) => {
  localStorage.setItem("basket", JSON.stringify(newValue));
}

export const App: FC = () => {

  const [basket, setBasket] = useState<IBasket>({});

  useEffect(() => {
    setBasket(getStateFromLocalStorage());
  }, []);

  const handleChangeBasket = (newValue: IBasket): void => {
    refreshLocalStorage(newValue)
    setBasket(newValue)
  }


  return (
    <BrowserRouter>
      <Header basket={basket} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/catalog" element={<CatalogPage basket={basket} setBasket={handleChangeBasket} />} />
        <Route path="/catalog/:id" element={<ProductPage />} />
        <Route path="/basket" element={<BasketPage basket={basket} setBasket={handleChangeBasket} />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

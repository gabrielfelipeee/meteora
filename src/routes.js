import { BrowserRouter, Routes, Route } from "react-router-dom";

import { MenuBannerProvider } from "./commom/context/Menu_Banner";
import { CategoriesProvider } from "./commom/context/Categories";
import { ProductSearchProvider } from "./commom/context/ProductSearch";
import { InfoProductProvider } from "./commom/context/InfoProduct";
import { CartProvider } from "./commom/context/Cart";

import Menu from "./components/Menu";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Favorites from "./pages/Favorites";

function routes() {
  return (
    <BrowserRouter>
      <MenuBannerProvider>
        <ProductSearchProvider>
          <CartProvider>
            <Menu />
            <InfoProductProvider>
              <CategoriesProvider>
                <Routes>
                  <Route
                    path="/"
                    element={
                      <Home />
                    }
                  />
                  <Route
                    path="/favoritos"
                    element={
                      <Favorites />
                    }
                  />
                  <Route
                    path="/carrinho"
                    element={
                      <Cart />
                    }
                  />


                </Routes>
              </CategoriesProvider>
            </InfoProductProvider>
          </CartProvider>
        </ProductSearchProvider>
      </MenuBannerProvider>
    </BrowserRouter>
  );
}
export default routes;

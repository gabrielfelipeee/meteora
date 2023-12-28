import { BrowserRouter, Routes, Route } from "react-router-dom";

import { MenuBannerProvider } from "./commom/context/Menu_Banner";
import { CategoriesProvider } from "./commom/context/Categories";
import { ProductSearchProvider } from "./commom/context/ProductSearch";
import { InfoProductProvider } from "./commom/context/InfoProduct";
import { CartProvider } from "./commom/context/Cart";

import Menu from "./components/Menu";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

function routes() {
  return (
    <BrowserRouter>
      <MenuBannerProvider>
        <ProductSearchProvider>
          <CartProvider>
            <Menu />

            <Routes>
              <Route
                path="/"
                element={
                  <InfoProductProvider>
                    <CategoriesProvider>
                      <Home />
                    </CategoriesProvider>
                  </InfoProductProvider>
                }
              />
              <Route
                path="/carrinho"
                element={
                  <Cart />
                }
              />


            </Routes>
          </CartProvider>
        </ProductSearchProvider>
      </MenuBannerProvider>
    </BrowserRouter>
  );
}
export default routes;

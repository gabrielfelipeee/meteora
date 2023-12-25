import { BrowserRouter, Routes, Route } from "react-router-dom";

import { MenuBannerProvider } from "./commom/context/Menu_Banner";
import { CategoriesProvider } from "./commom/context/Categories";
import { ProductSearchProvider } from "./commom/context/ProductSearch";
import { InfoProductProvider } from "./commom/context/InfoProduct";

import Menu from "./components/Menu";
import Home from "./pages/Home";


function routes() {
  return (
    <BrowserRouter>
      <MenuBannerProvider>
        <ProductSearchProvider>
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


          </Routes>
        </ProductSearchProvider>
      </MenuBannerProvider>
    </BrowserRouter>
  );
}
export default routes;

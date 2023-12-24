import { BrowserRouter, Routes, Route } from "react-router-dom";

import { MenuBannerProvider } from "./commom/context/Menu_Banner";
import { CategoriesProvider } from "./commom/context/Categories";
import { ProductSearchProvider } from "./commom/context/ProductSearch";

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
                <CategoriesProvider>
                  <Home />
                </CategoriesProvider>
              }
            />

            
          </Routes>
        </ProductSearchProvider>
      </MenuBannerProvider>
    </BrowserRouter>
  );
}
export default routes;

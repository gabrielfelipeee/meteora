import { BrowserRouter, Routes, Route } from "react-router-dom";

import { MenuBannerProvider } from "./commom/context/Menu_Banner";
import { CategoriesProvider } from "./commom/context/Categories";


import Menu from "./components/Menu";
import Banner from "./components/Banner";
import Home from "./pages/Home";


function routes() {
  const WrapperMenuBannerProvider = ({ children }) => {
    return <MenuBannerProvider>
      {children}
    </MenuBannerProvider>
  };


  return (
    <BrowserRouter>
      <WrapperMenuBannerProvider>
        <Menu />
        <Banner />
      </WrapperMenuBannerProvider>

      <Routes>
        <Route path='/' element={
          <WrapperMenuBannerProvider>
            <CategoriesProvider>
              <Home />
            </CategoriesProvider>
          </WrapperMenuBannerProvider>
        }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default routes;

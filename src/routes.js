import { BrowserRouter, Routes, Route } from "react-router-dom";

import { MenuBannerProvider } from "./commom/context/Menu_Banner";

import Menu from "./components/Menu";
import Banner from "./components/Banner";



function routes() {
  return (
    <BrowserRouter>
      <MenuBannerProvider>
        <Menu />
        <Banner/>
      </MenuBannerProvider>

      <Routes>
        <Route></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default routes;

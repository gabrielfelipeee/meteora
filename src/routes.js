import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";

import { MenuProvider } from "./commom/context/Menu";


function routes() {
  return (
    <BrowserRouter>
      <MenuProvider>
        <Menu />
      </MenuProvider>


      <Routes>
        <Route></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default routes;

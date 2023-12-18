import { createContext, useContext, useEffect, useState } from "react";


import logoMobile from '../../assets/Mobile/logo-mobile.png';
import logoTablet from '../../assets/Tablet/logo-tablet.png';
import logoDesktop from '../../assets/Desktop/logo-desktop.png';


const MenuContext = createContext();
MenuContext.displayName = "Menu";

const MenuProvider = ({ children }) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [logo, setLogo] = useState('');
    const [displayMenu, setDisplayMenu] = useState("none");


    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if (windowWidth <= 360) {
            setLogo(logoMobile);
        } else if (windowWidth <= 768) {
            setLogo(logoTablet);
        } else {
            setLogo(logoDesktop);
        }
    }, [windowWidth]);


    const toggleMenu = () => {
        setDisplayMenu(displayMenu => displayMenu === "none" || displayMenu === "flex" ? displayMenu === "flex" : "none");
    };


    return (
        <MenuContext.Provider value={{
            windowWidth,
            setWindowWidth,
            logo,
            setLogo,
            displayMenu,
            setDisplayMenu,
            toggleMenu
        }}>
            {children}
        </MenuContext.Provider>
    );
};



const useMenuContext = () => {
    const { logo, toggleMenu, displayMenu } = useContext(MenuContext);
    return {
        logo,
        displayMenu,
        toggleMenu
    };
};

export { MenuProvider, useMenuContext };

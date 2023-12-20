import { createContext, useContext, useEffect, useState } from "react";


import logoMobile from '../../assets/Mobile/logo-mobile.png';
import logoTablet from '../../assets/Tablet/logo-tablet.png';
import logoDesktop from '../../assets/Desktop/logo-desktop.png';


const MenuContext = createContext();
MenuContext.displayName = "Menu";

const MenuProvider = ({ children }) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [logo, setLogo] = useState('');
    const [displayMenu, setDisplayMenu] = useState("");


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
        if (windowWidth <= 950) {
            setLogo(logoMobile);
        } else if (windowWidth <= 1440) {
            setLogo(logoTablet);
        } else {
            setLogo(logoDesktop);
        }
    }, [windowWidth]);


    const toggleMenu = () => {
        setDisplayMenu(display => display === "" || display === "none" ? display = "flex" : "none")
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
    const { logo, toggleMenu, displayMenu, windowWidth } = useContext(MenuContext);
    return {
        logo,
        displayMenu,
        toggleMenu,
        windowWidth
    };
};

export { MenuProvider, useMenuContext };

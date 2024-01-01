import { createContext, useContext, useEffect, useState } from "react";


import logoMobile from '../../assets/Mobile/logo-mobile.png';
import logoTablet from '../../assets/Tablet/logo-tablet.png';
import logoDesktop from '../../assets/Desktop/logo-desktop.png';


import banner1Mobile from '../../assets/Mobile/banner1_360.png';
import banner2Mobile from '../../assets/Mobile/banner2_360.png';
import banner3Mobile from '../../assets/Mobile/banner3_360.png';
import banner1Tablet from '../../assets/Tablet/banner1_768.png';
import banner2Tablet from '../../assets/Tablet/banner2_768.png';
import banner3Tablet from '../../assets/Tablet/banner3_768.png';
import banner1Desktop from '../../assets/Desktop/banner1_1440.png';
import banner2Desktop from '../../assets/Desktop/banner2_1440.png';
import banner3Desktop from '../../assets/Desktop/banner3_1440.png';



const MenuBannerContext = createContext();
MenuBannerContext.displayName = "MenuBanner";

const MenuBannerProvider = ({ children }) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [logo, setLogo] = useState('');
    const [displayMenu, setDisplayMenu] = useState("");

    const [banner1, setBanner1] = useState();
    const [banner2, setBanner2] = useState();
    const [banner3, setBanner3] = useState();




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

        if (windowWidth >= 950) {
            setDisplayMenu("flex");
        } else {
            setDisplayMenu("");
        }
    }, [windowWidth]);


    const toggleMenu = () => {

        setDisplayMenu(display => display === "" || display === "none" ? display = "flex" : "none");
    };




    useEffect(() => {
        if (windowWidth <= 375) {
            setBanner1(banner1Mobile);
            setBanner2(banner2Mobile);
            setBanner3(banner3Mobile);
        } else if (windowWidth <= 768) {
            setBanner1(banner1Tablet);
            setBanner2(banner2Tablet);
            setBanner3(banner3Tablet);
        } else {
            setBanner1(banner1Desktop);
            setBanner2(banner2Desktop);
            setBanner3(banner3Desktop);
        }
    }, [windowWidth, setBanner1, setBanner2, setBanner3]);
    


    return (
        <MenuBannerContext.Provider value={{
            windowWidth,
            setWindowWidth,
            logo,
            setLogo,
            displayMenu,
            setDisplayMenu,
            toggleMenu,
            banner1,
            setBanner1,
            banner2,
            setBanner2,
            banner3,
            setBanner3


        }}>
            {children}
        </MenuBannerContext.Provider>
    );
};



const useMenuBannerContext = () => {
    const {
        logo,
        toggleMenu,
        displayMenu,
        windowWidth,
        banner1,
        banner2,
        banner3 }
        = useContext(MenuBannerContext);

    return {
        logo,
        displayMenu,
        toggleMenu,
        windowWidth,
        banner1,
        banner2,
        banner3
    };
};

export { MenuBannerProvider, useMenuBannerContext };

import { createContext, useContext, useEffect, useState } from "react";

import { useMenuBannerContext } from "./Menu_Banner";

import products from '../../mocks/products.json';

import shirtMobile from '../../assets/Mobile/categories/shirt-mobile.png';
import bagMobile from '../../assets/Mobile/categories/bag-mobile.png';
import shoesMobile from '../../assets/Mobile/categories/shoes-mobile.png';
import pantsMobile from '../../assets/Mobile/categories/pants-mobile.png';
import coatsMobile from '../../assets/Mobile/categories/coats-mobile.png';
import glassesMobile from '../../assets/Mobile/categories/glasses-mobile.png';

import shirtTablet from '../../assets/Tablet/categories/shirt-tablet.png';
import bagTablet from '../../assets/Tablet/categories/bag-tablet.png';
import shoesTablet from '../../assets/Tablet/categories/shoes-tablet.png';
import pantsTablet from '../../assets/Tablet/categories/pants-tablet.png';
import coatsTablet from '../../assets/Tablet/categories/coats-tablet.png';
import glassesTablet from '../../assets/Tablet/categories/glasses-tablet.png';

import shirtDesktop from '../../assets/Desktop/categories/shirt-desktop.png';
import bagDesktop from '../../assets/Desktop/categories/bag-desktop.png';
import shoesDesktop from '../../assets/Desktop/categories/shirt-desktop.png';
import pantsDesktop from '../../assets/Desktop/categories/pants-desktop.png';
import coatsDesktop from '../../assets/Desktop/categories/coats-desktop.png';
import glassesDesktop from '../../assets/Desktop/categories/glasses-desktop.png';





const CategoriesContext = createContext()
CategoriesContext.displayName = "Categories";


const CategoriesProvider = ({ children }) => {
    const { windowWidth } = useMenuBannerContext();


    const [imageShirt, setImageShirt] = useState();
    const [imageBag, setImageBag] = useState();
    const [imageShoes, setImageShoes] = useState();
    const [imagePants, setImagePants] = useState();
    const [imageCoats, setImageCoats] = useState();
    const [imageGlasses, setImageGlasses] = useState();

    const allProducts = products;
    const [productsByCategory, setProductsByCategory] = useState([]);

    useEffect(() => {
        if (windowWidth <= 950) {
            setImageShirt(() => shirtMobile);
            setImageBag(() => bagMobile);
            setImageShoes(() => shoesMobile);
            setImagePants(() => pantsMobile);
            setImageCoats(() => coatsMobile);
            setImageGlasses(() => glassesMobile);
        } else if (windowWidth <= 1440) {
            setImageShirt(() => shirtTablet);
            setImageBag(() => bagTablet);
            setImageShoes(() => shoesTablet);
            setImagePants(() => pantsTablet);
            setImageCoats(() => coatsTablet);
            setImageGlasses(() => glassesTablet);
        } else {
            setImageShirt(() => shirtDesktop);
            setImageBag(() => bagDesktop);
            setImageShoes(() => shoesDesktop);
            setImagePants(() => pantsDesktop);
            setImageCoats(() => coatsDesktop);
            setImageGlasses(() => glassesDesktop);
        }
    }, [
        windowWidth,
        setImageShirt,
        setImageBag,
        setImageShoes,
        setImagePants,
        setImageCoats,
        setImageGlasses
    ]);



    const filterByCategory = (categoryName) => {
        const selectedCategory = allProducts.categories.find(category => category.name === categoryName);
        setProductsByCategory(() => selectedCategory);
    };

    const clearFilter = () => {
        setProductsByCategory(() => []);
    };











    return (
        <CategoriesContext.Provider
            value={{
                windowWidth,
                imageShirt,
                setImageShirt,
                imageBag,
                setImageBag,
                imageShoes,
                setImageShoes,
                imagePants,
                setImagePants,
                imageCoats,
                setImageCoats,
                imageGlasses,
                setImageGlasses,
                productsByCategory,
                setProductsByCategory,
                filterByCategory,
                clearFilter,
                allProducts,
            }}
        >
            {children}
        </CategoriesContext.Provider>
    )
};


const useCategoriesContext = () => {
    const {
        imageShirt,
        imageBag,
        imageShoes,
        imagePants,
        imageCoats,
        imageGlasses,
        filterByCategory,
        productsByCategory,
        allProducts,
        clearFilter
    } = useContext(CategoriesContext);

    return {
        imageShirt,
        imageBag,
        imageShoes,
        imagePants,
        imageCoats,
        imageGlasses,
        filterByCategory,
        productsByCategory,
        clearFilter,
        allProducts
    }
};
export { CategoriesProvider, useCategoriesContext }

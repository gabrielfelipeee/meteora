import { createContext, useContext, useState } from "react";


import products from '../../mocks/products.json';


const InfoProductContext = createContext();
InfoProductContext.displayName = "InfoProduct";



const InfoProductProvider = ({ children }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [infoProductVisible, setInfoProductVisible] = useState();

    const displayDetails = (id) => {

        const foundProduct = products.categories.flatMap(category =>
            category.products.find(product => product.id === id) || []
        );

        // Elimina os produtos undefined e mostra somente o foundProduct
        const filteredClickedProduct = foundProduct.filter(Boolean);

        if (filteredClickedProduct.length > 0) {
            setSelectedProduct(filteredClickedProduct[0]);
            setInfoProductVisible(true);
        } else {
            setSelectedProduct(null);
        }
    };

    const closeDetails = () => {
        setInfoProductVisible(false);
        setSelectedProduct(null);
    };


    return (
        <InfoProductContext.Provider
            value={{
                displayDetails,
                closeDetails,
                selectedProduct,
                setSelectedProduct,
                infoProductVisible,
                setInfoProductVisible
            }}
        >
            {children}
        </InfoProductContext.Provider>
    )
};

const useInfoProductContext = () => {
    const {
        displayDetails,
        closeDetails,
        selectedProduct,
        setSelectedProduct,
        infoProductVisible,
    } = useContext(InfoProductContext);

    return {
        displayDetails,
        closeDetails,
        selectedProduct,
        setSelectedProduct,
        infoProductVisible,

    }
}
export { InfoProductProvider, useInfoProductContext }

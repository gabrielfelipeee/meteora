import { createContext, useContext, useState } from "react";


import products from '../../mocks/products.json';
import Category from "../../pages/Home/Category";


const InfoProductContext = createContext();
InfoProductContext.displayName = "InfoProduct";



const InfoProductProvider = ({ children }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);


    const displayDetails = (id) => {

        const foundProduct = products.categories.flatMap(category =>
            category.products.find(product => product.id === id) || []
        );

        // Elimina os produtos undefined e mostra somente o foundProduct
        const filteredClickedProduct = foundProduct.filter(Boolean);

        if (filteredClickedProduct.length > 0) {
            setSelectedProduct(filteredClickedProduct[0]);
        } else {
            setSelectedProduct(null);
        }
    };


    return (
        <InfoProductContext.Provider
            value={{
                displayDetails,
                selectedProduct,
                setSelectedProduct
            }}
        >
            {children}
        </InfoProductContext.Provider>
    )
};

const useInfoProductContext = () => {
    const { displayDetails, selectedProduct } = useContext(InfoProductContext);

    return {
        displayDetails,
        selectedProduct
    }
}
export { InfoProductProvider, useInfoProductContext }

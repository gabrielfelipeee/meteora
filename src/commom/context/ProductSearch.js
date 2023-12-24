import { createContext, useContext, useState } from "react";

import products from '../../mocks/products.json';

const ProductSearchContext = createContext()
ProductSearchContext.displayName = "Search";

const ProductSearchProvider = ({ children }) => {
    const [textSearch, setTextSearch] = useState("");
    const [search, setSearch] = useState("");
    const productSearch = products.categories.flatMap(category =>
        category.products.filter(product =>
            product.name.toLowerCase().includes(textSearch.toLocaleLowerCase())
        )
    );


    const handleChange = event => {
        setTextSearch(event.target.value)
    };
    const handleSubmit = event => {
        event.preventDefault();
        setSearch(textSearch);
    }

    return (
        <ProductSearchContext.Provider
            value={
                {
                    productSearch,
                    textSearch,
                    setTextSearch,
                    handleChange,
                    handleSubmit,
                    search,
                    setSearch
                }
            }
        >
            {children}
        </ProductSearchContext.Provider>
    )
};

const useProductSearchContext = () => {
    const {
        productSearch,
        textSearch,
        setTextSearch,
        handleChange,
        handleSubmit,
        search,
        setSearch

    } = useContext(ProductSearchContext);

    return {
        productSearch,
        textSearch,
        setTextSearch,
        handleChange,
        handleSubmit,
        search,
        setSearch
    }
}
export { ProductSearchProvider, useProductSearchContext }

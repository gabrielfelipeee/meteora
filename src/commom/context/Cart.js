import { createContext, useContext, useState } from "react";

const CartContext = createContext();
CartContext.displayName = "Cart";


const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const [selectedColor, setSelectedColor] = useState("");
    const [selectedSize, setSelectedSize] = useState("");


    const addProduct = (newProduct) => {
        const inCart = cart.some(product =>
            product?.id === newProduct.id
            && product?.selectedSize === newProduct.selectedSize
            && product?.selectedColor === newProduct.selectedColor
        );

        if (!inCart) {
            newProduct.amount = 1;
            return setCart(prevCart => [...prevCart, newProduct]);
        } else {
            return setCart(prevCart => prevCart.map(product => {
                if (inCart) {
                    product.amount++
                }
                return product
            }));
        }
    };



    const changeColor = (event) => {
        setSelectedColor(event.target.value);
    };
    const changeSize = (event) => {
        setSelectedSize(event.target.value);
    };

    return (
        <CartContext.Provider value={
            {
                selectedSize,
                setSelectedSize,
                selectedColor,
                setSelectedColor,
                changeColor,
                changeSize,
                cart,
                setCart,
                addProduct
            }
        }>
            {children}
        </CartContext.Provider>
    )
};

const useCartContext = () => {
    const {
        selectedSize,
        selectedColor,
        changeColor,
        changeSize,
        cart,
        addProduct
    } = useContext(CartContext);

    return {
        selectedSize,
        selectedColor,
        changeColor,
        changeSize,
        cart,
        addProduct
    }
};
export { CartProvider, useCartContext };

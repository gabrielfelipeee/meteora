import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();
CartContext.displayName = "Cart";


const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [selectedColor, setSelectedColor] = useState("");
    const [selectedSize, setSelectedSize] = useState("");

    const [totalCartProducts, setTotalCartProducts] = useState();
    const [freight, setFreight] = useState("");
    const [totalCart, setTotalCart] = useState(0);


    const addProduct = (newProduct) => {
        const inCart = cart.some(product =>
            product?.name === newProduct.name
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

    const deleteProduct = (id) => {
        const inCart = cart.find(product => product?.id === id);

        inCart && setCart(prevCart => prevCart.filter(product => product.id !== id))
    }



    const decrease = (id) => {
        setCart(cart => cart.map(product => {
            if (product && product.id === id) {
                if (product.amount === 1) {
                    setCart(prevCart => prevCart.filter(prod => prod.id !== id))
                    return null;  // Retorna null para indicar que o item foi removido
                } else {
                    return { ...product, amount: product.amount -1 };
                }
            }
            return product;
        }).filter(Boolean)); // Remove os elementos nulos do array resultante
    };

    const increase = (id) => {
        setCart(cart => cart.map(product => {
            if (product && product.id === id) {
                return { ...product, amount: product.amount + 1 };
            }
            return product;
        }));
    };






    useEffect(() => {
        const total = cart.reduce((counter, product) => {
            return counter + (product.price * product.amount)
        }, 0);
        setTotalCartProducts(total);


        if (total >= 100) {
            setFreight("Grátis");
            setTotalCart(total);
        } else {
            setFreight("13");
            setTotalCart(total + Number(freight));
        }
    }, [cart, freight, totalCart, totalCartProducts]);


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
                addProduct,
                deleteProduct,
                totalCartProducts,
                setTotalCartProducts,
                freight,
                setFreight,
                totalCart,
                setTotalCart,
                decrease,
                increase
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
        addProduct,
        deleteProduct,
        totalCartProducts,
        freight,
        totalCart,
        decrease,
        increase
    } = useContext(CartContext);

    return {
        selectedSize,
        selectedColor,
        changeColor,
        changeSize,
        cart,
        addProduct,
        deleteProduct,
        totalCartProducts,
        freight,
        totalCart,
        decrease,
        increase
    }
};
export { CartProvider, useCartContext };

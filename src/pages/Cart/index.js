import { MdOutlineRemoveShoppingCart } from "react-icons/md";

import './styles.scss';


import { useCartContext } from "../../commom/context/Cart";


import Product from "./Product";

const Cart = () => {
    const { cart, totalCartProducts, freight, totalCart } = useCartContext();

    return (
        <>
            {cart.length >= 1
                ? <main className="box-cart">
                    <ul>
                        {cart.map(product => <Product {...product} key={product.id} />)}
                    </ul>

                    {
                        cart.length > 0 && <div className="info-final">
                            <div>
                                Produtos: {cart.length}
                                <span>R$ {totalCartProducts},00</span>
                            </div>

                            <div>
                                Frete: <span>R$ {freight}</span>
                            </div>

                            <div className="total">
                                Total: <span>R$ {totalCart}</span>
                            </div>

                            <button>Continuar</button>
                        </div>
                    }
                </main>
                : <main className="box-empty-cart">
                    <p>Seu carrinho está vazio!</p>
                    <MdOutlineRemoveShoppingCart className="empty-cart" />
                </main>
            }

        </>

    );
};
export default Cart;

import './styles.scss';



import { useCartContext } from "../../commom/context/Cart";


import Product from "./Product";

const Cart = () => {
    const { cart } = useCartContext();

    return (
        <main className="box-cart">
            <ul>
                {cart.map(product => <Product {...product} key={product.id} />)}
            </ul>


            {
                cart.length > 0 && <div className="info-final">
                    <div>
                        Produtos: {cart.length}
                        <span>R$ 50,00</span>
                    </div>

                    <div>
                        Frete: <span>Grátis</span>
                    </div>


                    <div className="total">
                        Total: <span>R$ {cart[0]?.price},00</span>
                    </div>

                    <button>Continuar</button>
                </div>
            }
        </main>
    );
};
export default Cart;

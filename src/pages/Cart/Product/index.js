import { MdClear } from "react-icons/md";
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import './styles.scss';


import { useCartContext } from "../../../commom/context/Cart";

const Product = ({ image, name, price, selectedSize, selectedColor, amount, id }) => {
    const { deleteProduct, decrease, increase } = useCartContext();


    return (
        <li className="box-product" >
            <div className="info">
                <img src={image} alt={`Ilustração do produto ${name}`} />

                <div>
                    <h3>{name}</h3>
                    <div className="color_size">
                        {selectedColor && <p className="color">
                            Cor: <strong>{selectedColor}</strong>
                        </p>}
                        {selectedSize && <p className="size">
                            Tamanho: <strong>{selectedSize}</strong>
                        </p>}
                    </div>
                </div>
            </div>

            <MdClear className="clear" onClick={() => deleteProduct(id)}/>

            <div className="data">
                <div className="amount">
                    <FiMinus className="icon-amount" onClick={() => decrease(id)}/>
                    <span>{amount}</span>
                    <GoPlus className="icon-amount" onClick={() => increase(id)}/>
                </div>
                <span className="price">R$ {price},00</span>
            </div>
        </li>
    )
};
export default Product;

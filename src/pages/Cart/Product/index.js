import { MdClear } from "react-icons/md";
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";


import './styles.scss';

const Product = ({ image, name, price, selectedSize, selectedColor }) => {
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

            <MdClear className="clear" />

            <div className="data">
                <div className="amount">
                    <FiMinus className="icon-amount" />
                    <span>1</span>
                    <GoPlus className="icon-amount" />
                </div>
                <span className="price">R$ {price},00</span>
            </div>
        </li>
    )
};
export default Product;

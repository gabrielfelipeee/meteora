import { v4 as uuidv4 } from 'uuid';

import { MdClear } from "react-icons/md";
import './styles.scss';


import circle from '../../../assets/check-circle.svg';


import { useInfoProductContext } from "../../../commom/context/InfoProduct";
import { useCartContext } from "../../../commom/context/Cart";


const InfoProduct = ({ image, name, description, price, size, colors, id }) => {
    const { closeDetails } = useInfoProductContext();
    const {
        addProduct,
        changeColor,
        changeSize,
        selectedSize,
        selectedColor,
    } = useCartContext();


    return (
        <section className="box-info-product">
            <div className="box-head">
                <img src={circle} alt="imagem de um círculo amarelo" />
                <h2>Confira detalhes sobre o produto</h2>
                <MdClear className="clear" onClick={() => closeDetails()} />
            </div>

            <div className="box-body">
                <img src={image} alt="imagem do produto"></img>

                <div className="box-info">
                    <h3>{name}</h3>
                    <p className="description">{description}</p>
                    <span className="price">R$ {price},00</span>
                    <p className="store">Vendido e entregue por Meteora</p>

                    {
                        colors && <fieldset className="radios">
                            <legend>Cores:</legend>
                            {colors?.map(color => (
                                <div key={color}>
                                    <input
                                        type="radio"
                                        id={`radio_${color}`}
                                        name="color"
                                        value={color}
                                        onChange={event => changeColor(event)}
                                    />
                                    <label htmlFor={`radio_${color}`}>{color}</label>
                                </div>
                            ))}
                        </fieldset>
                    }
                    {
                        size && <fieldset className="radios">
                            <legend>Tamanhos:</legend>
                            {size?.map(size => (
                                <div key={size}>
                                    <input
                                        type="radio"
                                        id={`radio_${size}`}
                                        name="size"
                                        value={size}
                                        onChange={event => changeSize(event)}
                                    />
                                    <label htmlFor={`radio_${size}`}>{size}</label>
                                </div>
                            ))}
                        </fieldset>
                    }
                    <button
                        onClick={() => {
                            addProduct(
                                {
                                    image,
                                    name,
                                    id: uuidv4(),
                                    price,
                                    selectedSize,
                                    selectedColor,
                                }, id)
                            closeDetails()
                        }}
                    >
                        Adicionar ao carrinho
                    </button>
                </div>
            </div>
        </section >
    )
};
export default InfoProduct;

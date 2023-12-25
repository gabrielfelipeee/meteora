import { MdClear } from "react-icons/md";
import './styles.scss';


import circle from '../../assets/check-circle.svg';

const InfoProduct = ({ image, name, description, price, size, colors }) => {

    return (
        <section className="box-info-product">
            <div className="box-head">
                <img src={circle} />
                <h2>Confira detalhes sobre o produto</h2>
                <MdClear size={32} />
            </div>

            <div className="box-body">
                <img src={image}></img>

                <div className="box-info">
                    <h3>{name}</h3>
                    <p className="description">{description}</p>
                    <span className="price">R$ {price},00</span>
                    <p className="store">Vendido e entregue por Meteora</p>

                    <fieldset className="radios">
                        <legend>Cores:</legend>
                        {colors?.map(size => (
                            <div key={size}>
                                <input
                                    type="radio"
                                    id={`radio_${size}`}
                                    name="size"
                                    value={size}
                                />
                                <label htmlFor={`radio_${size}`}>{size}</label>
                            </div>
                        ))}
                    </fieldset>

                    <fieldset className="radios">
                        <legend>Tamanhos:</legend>
                        {size?.map(size => (
                            <div key={size}>
                                <input
                                    type="radio"
                                    id={`radio_${size}`}
                                    name="size"
                                    value={size}
                                />
                                <label htmlFor={`radio_${size}`}>{size}</label>
                            </div>
                        ))}
                    </fieldset>
                    <button>Adicionar à sacola</button>
                </div>
            </div>
        </section>
    )
};
export default InfoProduct;

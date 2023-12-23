import './styles.scss';

const ProductCard = ({ image, name, description, price }) => {
    return (
        <li className="box-product-card">
            <img src={image} alt={`Ilustração do produto ${name}`} />
            <h3>{name}</h3>
            <p>{description}</p>
            <span>R$ {price},00</span>
            <button>Ver mais</button>
        </li>
    );
};
export default ProductCard;

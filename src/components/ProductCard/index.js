import './styles.scss';
import { GoStar, GoStarFill } from "react-icons/go";



import { useInfoProductContext } from '../../commom/context/InfoProduct';



const ProductCard = ({ image, name, description, price, id }) => {
    const { displayDetails } = useInfoProductContext();

    return (
        <li className="box-product-card">
            <img src={image} alt={`Ilustração do produto ${name}`} />
            <h3>{name}</h3>
            <p>{description}</p>
            <span>R$ {price},00</span>
            <button onClick={() => displayDetails(id)}>Ver mais</button>
            <GoStar className="star"/>
        </li>
    );
};
export default ProductCard;

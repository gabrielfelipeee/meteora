import { GoStar, GoStarFill } from "react-icons/go";
import './styles.scss';


import { useInfoProductContext } from '../../commom/context/InfoProduct';
import { useCategoriesContext } from "../../commom/context/Categories";



const ProductCard = ({ image, name, description, price, id }) => {
    const { displayDetails } = useInfoProductContext();
    const { toggleFavorites, isProductFavorited } = useCategoriesContext();


    return (
        <li className="box-product-card">
            <img src={image} alt={`Ilustração do produto ${name}`} />
            <h3>{name}</h3>
            <p>{description}</p>
            <span>R$ {price},00</span>
            <button onClick={() => displayDetails(id)}>Ver mais</button>

            {isProductFavorited(id)
                ? <GoStarFill className="star" onClick={() => toggleFavorites(id)} />
                : <GoStar className="star" onClick={() => toggleFavorites(id)} />
            }
        </li>
    );
};
export default ProductCard;

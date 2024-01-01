import { TbStarOff } from "react-icons/tb";
import './styles.scss';


import { useCategoriesContext } from '../../commom/context/Categories';

import ProductCard from '../../components/ProductCard';
import Overlay from '../../components/Overlay';


const Favorites = () => {
    const { favorites } = useCategoriesContext();
    return (
        <>
            {favorites.length >= 1
                ? <main className="box-favorites">
                    <Overlay />
                    <ul>
                        {favorites.length >= 1 && favorites.map(product =>
                            <ProductCard {...product} key={product.id} />
                        )}
                    </ul>
                </main>
                : <main className="box-star-off">
                    <p>Nenhum produto adicionado aos favoritos!</p>
                    <TbStarOff className="star-off" />
                </main>
            }
        </>
    )
}
export default Favorites;
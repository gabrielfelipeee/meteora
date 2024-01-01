import { useCategoriesContext } from '../../commom/context/Categories';
import './styles.scss';


import ProductCard from '../../components/ProductCard';
import Overlay from '../../components/Overlay';


const Favorites = () => {
    const { favorites } = useCategoriesContext();

    return (
        <main className="box-favorites">
            <Overlay />
            <ul>
                {favorites.length >= 1 && favorites.map(product =>
                    <ProductCard {...product} key={product.id} />
                )}
            </ul>
        </main>
    )
}
export default Favorites;
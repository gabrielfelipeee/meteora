import Category from "./Category";
import ProductCard from "../../components/ProductCard";

import products from '../../mocks/products.json';

import './styles.scss';

const Home = () => {
    return (
        <main className="box-home">
            <Category />

            <section className="products">
                <h2>Produtos que estão bombando!</h2>
                <ul>
                    {products.categories.map(category => category.products.map(product =>
                        <ProductCard {...product} key={product.id} />
                    ))}
                </ul>
            </section>
        </main>
    )
};
export default Home;

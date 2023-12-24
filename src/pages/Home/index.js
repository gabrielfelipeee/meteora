import Banner from "../../components/Banner";
import Category from "./Category";
import ProductCard from "../../components/ProductCard";
import './styles.scss';

import { useCategoriesContext } from "../../commom/context/Categories";
import { useProductSearchContext } from "../../commom/context/ProductSearch";

const Home = () => {
    const { productsByCategory, allProducts } = useCategoriesContext();
    const { productSearch, search } = useProductSearchContext();

    const RenderProducts = () => {
        if (search.length > 3) {
            return productSearch.map(product =>
                <ProductCard {...product} key={product.id} />
            )
        } else if (productsByCategory.length <= 0) {
            return allProducts.categories.map(category =>
                category.products.map(product =>
                    <ProductCard {...product} key={product.id} />
                )
            )
        } else if (productsByCategory.products?.length >= 1) {
            return productsByCategory.products.map(product =>
                <ProductCard {...product} key={product.id} />
            )
        }
    };

    return (
        <main className="box-home">
            <Banner />
            <Category />

            <section className="products">
                <h2>Produtos que estão bombando!</h2>
                <ul>
                    <RenderProducts />
                </ul>
            </section>
        </main>
    )
};
export default Home;

import Category from "./Category";
import ProductCard from "../../components/ProductCard";


import './styles.scss';
import { useCategoriesContext } from "../../commom/context/Categories";

const Home = () => {
    const { productsByCategory, allProducts } = useCategoriesContext();



    return (
        <main className="box-home">
            <Category />

            <section className="products">
                <h2>Produtos que estão bombando!</h2>
                <ul>
                    {productsByCategory.length <= 0
                        ? allProducts.categories.map(category =>
                            category.products.map(product =>
                                <ProductCard {...product} key={product.id} />
                            )
                        )
                        : productsByCategory.products.map(product =>
                            <ProductCard {...product} key={product.id} />
                        )
                    }
                </ul>
            </section>
        </main>
    )
};
export default Home;

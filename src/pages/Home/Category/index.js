import { MdClear } from "react-icons/md";
import './styles.scss';

import { useCategoriesContext } from '../../../commom/context/Categories';

const Category = () => {
    const {
        imageShirt,
        imageBag,
        imageShoes,
        imagePants,
        imageCoats,
        imageGlasses,
        filterByCategory,
        allProducts,
        clearFilter,
        productsByCategory
    } = useCategoriesContext();

    const getCategory = (category) => {
        switch (category) {
            case 'Camisetas':
                return imageShirt;
            case 'Bolsas':
                return imageBag;
            case 'Calçados':
                return imageShoes;
            case 'Calças':
                return imagePants;
            case 'Casacos':
                return imageCoats;
            case 'Óculos':
                return imageGlasses;
            default:
                return ""
        }
    };


    return (
        <section className="box-categories">
            <h2>Busque por categoria:</h2>

            <ul>
                {allProducts.categories.map(category => {
                    return <li key={category.name} onClick={() => filterByCategory(category.name)}>
                        <img
                            src={getCategory(category.name)}
                            alt={`Foto da categoria ${category.name}`}
                        />
                        <h3>{category.name}</h3>
                    </li>
                })}
            </ul>
            {productsByCategory.products?.length >= 1
                ? <div className="filter" onClick={() => clearFilter()}>
                    <MdClear size={20} />
                    <span>Limpar filtro</span>
                </div>
                : ""
            }
        </section>
    )
};
export default Category;

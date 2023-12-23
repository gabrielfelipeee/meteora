import './styles.scss';


import products from '../../../mocks/products.json';

import { useCategoriesContext } from '../../../commom/context/Categories';

const Category = () => {
    const {
        imageShirt,
        imageBag,
        imageShoes,
        imagePants,
        imageCoats,
        imageGlasses
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
                {products.categories.map(category => {
                    return <li key={category.name}>
                        <img
                            src={getCategory(category.name)}
                            alt={`Foto da categoria ${category.name}`}
                        />
                        <h3>{category.name}</h3>
                    </li>
                })}
            </ul>
            
        </section>
    )
};
export default Category;

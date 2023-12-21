import './styles.scss';


import products from '../../mocks/products.json';

import { useCategoriesContext } from '../../commom/context/Categories';

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
        <div className="box-categories">
            <h1>Busque por categoria:</h1>
            <ul>
                {products.categories.map(category => {
                    return <li key={category.name}>
                        <img
                            src={getCategory(category.name)}
                            alt={`Foto da categoria ${category.name}`}
                        />
                        <h2>{category.name}</h2>
                    </li>
                })}
            </ul>
        </div>
    )
};
export default Category;

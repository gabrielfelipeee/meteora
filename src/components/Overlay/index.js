import './styles.scss';

import { useInfoProductContext } from '../../commom/context/InfoProduct';

import InfoProduct from './InfoProduct';


const Overlay = () => {
    const { infoProductVisible, selectedProduct, closeDetails } = useInfoProductContext();
    return (
        <>
            {selectedProduct && (
                <>
                    <div className="overlay"></div>

                    {infoProductVisible && (
                        <InfoProduct
                            {...selectedProduct}
                            closeDetails={closeDetails}
                        />
                    )}
                </>
            )}
        </>
    )
}
export default Overlay;

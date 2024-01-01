import { useLocation, useNavigate } from "react-router";
import { IoMenu, IoClose } from "react-icons/io5";
import { PiShoppingCartSimpleThin } from "react-icons/pi";
import './styles.scss';


import { useMenuBannerContext } from "../../commom/context/Menu_Banner";


import MenuLink from "./MenuLink";
import { useProductSearchContext } from "../../commom/context/ProductSearch";
import { useCartContext } from "../../commom/context/Cart";



const Menu = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { logo, toggleMenu, displayMenu, windowWidth } = useMenuBannerContext();
    const { handleSubmit, handleChange, textSearch } = useProductSearchContext();
    const { cart } = useCartContext();

    const menuItems = [
        { page: 'Início', link: '/' },
        { page: 'Favoritos', link: '/favoritos' },
        {
            page: <div className="box-cart">
                <PiShoppingCartSimpleThin className="cart" />
                {cart.length >= 1 && <div className="amount">{cart.length}</div>}
            </div>,
            link: '/carrinho'
        }
    ];

    const menuIcons = {
        size: 36,
        onClick: toggleMenu
    };


    return (
        <header className="box-menu">
            <nav>
                <div className="logo_menu">
                    <img
                        src={logo}
                        alt="Logo da loja"
                        onClick={() => navigate('/')}
                    />
                    <IoMenu className="menu" {...menuIcons}></IoMenu>
                </div>

                <ul style={{ display: displayMenu }}>
                    <IoClose className="close-menu" {...menuIcons} />
                    {menuItems.map(item =>
                        <li key={item.page} onClick={() => {
                            if (windowWidth <= 950) {
                                toggleMenu();
                            }
                        }}>
                            <MenuLink
                                page={item.page}
                                link={item.link}
                            />
                        </li>
                    )}
                </ul>
            </nav>
            {location.pathname === '/' &&
                <form onSubmit={event => handleSubmit(event)}>
                    <input
                        type="text"
                        placeholder="Digite o produto"
                        onChange={event => handleChange(event)}
                        value={textSearch}
                    />
                    <input
                        type="submit"
                        value="Buscar"
                    />
                </form>
            }
        </header>
    )
};
export default Menu;

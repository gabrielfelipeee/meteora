import { useNavigate } from "react-router";
import { IoMenu, IoClose } from "react-icons/io5";
import './styles.scss';


import { useMenuBannerContext } from "../../commom/context/Menu_Banner";


import MenuLink from "./MenuLink";
import { useProductSearchContext } from "../../commom/context/ProductSearch";



const Menu = () => {
    const navigate = useNavigate();
    const { logo, toggleMenu, displayMenu, windowWidth } = useMenuBannerContext();
    const { handleSubmit, handleChange, textSearch } = useProductSearchContext();

    const menuItems = [
        { page: 'Início', link: '/' },
        { page: 'Favoritos', link: '/favoritos' },
        { page: 'Carrinho', link: '/carrinho' }
    ];

    const menuIcons = {
        size: 32,
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
                        <li key={item.page}>
                            <MenuLink
                                page={item.page}
                                link={item.link}
                                closeMenu={toggleMenu}
                                windowWidth={windowWidth}
                            />
                        </li>
                    )}
                </ul>
            </nav>
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
        </header>
    )
};
export default Menu;

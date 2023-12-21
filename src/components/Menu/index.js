import { useNavigate } from "react-router";
import { IoMenu, IoClose } from "react-icons/io5";
import './styles.scss';


import { useMenuContext } from "../../commom/context/Menu_Banner";


import MenuLink from "./MenuLink";


const Menu = () => {
    const navigate = useNavigate();
    const { logo, toggleMenu, displayMenu, windowWidth } = useMenuContext();
    const menuItems = [
        { page: 'Início', link: '/' },
        { page: 'Nossas lojas', link: '/nossaslojas' },
        { page: 'Novidades', link: '/novidades' },
        { page: 'Promoções', link: '/promocoes' }
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
            <form>
                <input
                    type="text"
                    placeholder="Digite o produto"
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

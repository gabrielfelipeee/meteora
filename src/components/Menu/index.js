import { Link } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import './styles.scss';




import { useMenuContext } from "../../commom/context/Menu";


const Menu = () => {
    const { logo, toggleMenu, displayMenu } = useMenuContext();

    const menuIcons = {
        size: 32,
        onClick: toggleMenu
    };



    return (
        <header className="box-menu">
            <nav>
                <div className="logo_menu">
                    <img src={logo} alt="Logo da loja"></img>
                    <IoMenu className="menu" {...menuIcons}></IoMenu>
                </div>

                <ul style={{ display: displayMenu }}>
                    <IoClose className="close-menu" {...menuIcons} />
                    <li><Link to='/'>Início</Link></li>
                    <li><Link to='/nossaslojas'>Nossas lojas</Link></li>
                    <li><Link to='/novidades'>Novidades</Link></li>
                    <li><Link to='/promocoes'>Promoções</Link></li>
                </ul>
            </nav>
            <form>
                <input
                    type="text"
                    placeholder="Digite o produto"
                />
                <input
                    type="submit"
                    value="Pesquisar"
                />
            </form>
        </header>
    )
};
export default Menu;
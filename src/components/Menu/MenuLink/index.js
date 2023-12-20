import { Link, useLocation } from "react-router-dom";
import './styles.scss';



const MenuLink = (props) => {
    const location = useLocation();



    return (
        <Link
            className={`box-menu-link ${location.pathname === props.link ? "active" : ""}`}
            to={props.link}
            onClick={() => {
                if (props.windowWidth <= 768) {
                    props.toggleMenu();
                }
            }}
        >
            {props.page}
        </Link>
    )
};
export default MenuLink;

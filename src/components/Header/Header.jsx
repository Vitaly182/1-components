import { NavLink } from 'react-router-dom';
import cl  from './Header.module.css';

const Header = (props) => {
    return (
        <header className={cl.header}>
            <img src='https://i.pinimg.com/originals/cc/7a/d3/cc7ad3d3ba4e80853304bee2dc3015da.png' />

            <div className={cl.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </header>
    )

}

export default Header;
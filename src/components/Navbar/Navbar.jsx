import cl from './Navbar.module.css';
import { NavLink } from "react-router-dom"

const setActive = ({isActive}) => isActive ? cl.activeLink : cl.item;


const Navbar = () => {
    return (
        <nav className={cl.nav}>
            <div className={cl.item}>
                <NavLink to='/profile' className = { setActive }>Profile</NavLink>
            </div>
            <div className={cl.item}>
                <NavLink to='/dialogs' className = { setActive }>Messages</NavLink>
            </div>
            <div className={cl.item}>
                <NavLink to='/news' className = { setActive }>News</NavLink>
            </div>
            <div className={cl.item}>
                <NavLink to='/music' className = { setActive }>Music</NavLink>
            </div>
            <div className={cl.item}>
                <NavLink to='/settings' className = { setActive }>Settings</NavLink>
            </div>
        </nav>
    )

}

export default Navbar;
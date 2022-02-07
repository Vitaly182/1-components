import cl from './Navbar.module.css';
import { NavLink } from "react-router-dom"
import Friend from './Friends/Friends';

const setActive = ({isActive}) => isActive ? cl.activeLink : cl.item;


const Navbar = (props) => {
    let sidebarElements = props.state.friends.map( f => <Friend id={f.id} name={f.name}/> );

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
            <div className={cl.item, cl.settings}>
                <NavLink to='/settings' className = { setActive }>Settings</NavLink>
            </div>
            <div className={cl.item, cl.friends}>
                Friends
            </div>
            <div className={cl.item, cl.friends_item}>
                {sidebarElements}
            </div>
        </nav>
    )

}

export default Navbar;
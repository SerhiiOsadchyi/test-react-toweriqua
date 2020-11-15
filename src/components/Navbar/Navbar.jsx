import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return(
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/users' activeClassName={s.activeNav}>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/faq' activeClassName={s.activeNav}>F.A.Q.</NavLink>
            </div>
        </nav>
    )
}

export default Navbar
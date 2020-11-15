import React from 'react';
import s from './User.module.css'

const User = ({user}) => {

    return (
        <div className={s.user} >
            <h3>{user.name} {user.surname}</h3>
            <div className={s.desc}>{user.desc}</div>
            <hr/>
        </div>
    )
}

export default User

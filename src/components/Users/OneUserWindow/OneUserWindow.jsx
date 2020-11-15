import React, {useEffect, useState} from 'react';
import s from './OneUserWindow.module.css';

const OneUserWindow = ({users}) => {

    let [userIndex, changeCurrentUserIndex] = useState(0);

    useEffect(() => {
        userIndex++;
        const interval = setInterval(() => {
            if (userIndex === users.length - 1) {
                changeCurrentUserIndex(0);
            } else changeCurrentUserIndex(userIndex++)
        }, 8000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={s.user}>
            <h2>{users[userIndex].name} {users[userIndex].surname}</h2>
        </div>
    )
};

export default OneUserWindow
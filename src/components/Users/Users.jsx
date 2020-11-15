import React, {useState} from 'react';
import s from './Users.module.css'
import User from "./User/User";
import OneUserWindow from "./OneUserWindow/OneUserWindow";
import {getUsers} from "../redux/users-reducer";
import {connect} from "react-redux";
import Preloader from "../common/Preloader";

const Users = (props) => {

    let users = props.users;
    const [currentPage, setCurrentPage] = useState(1)

    if (!users) {
        users = props.getUsers();
    }

    let totalCount = users.length;
    let pageCount = Math.ceil(totalCount / 5); // pageSize = 5
    let pages = [];
    for (let page = 1; page < pageCount + 1; page++) {
        pages.push(page)
    }

    let usersOnCurrentPage = 1;

    if (users.length > 0) {
        let indexOfFirstUser = users.indexOf(users[(currentPage - 1) * 5]);
        usersOnCurrentPage = users.slice(indexOfFirstUser, indexOfFirstUser + 5);

        return (
            <div className={s.users}>

                <OneUserWindow users={users}/>

                <div className={s.paginator}> {
                    pages.map( (page) => {
                        return <button className={page === currentPage ? s.selected : ''}
                                        onClick={(e) => {setCurrentPage(page)}} key={page}
                                >{page}</button>
                    })
                } </div>

                <div className={s.usersList}> {
                    usersOnCurrentPage.map((user) =>  <div key={user.id}><User user={user} /></div>)
                } </div>

            </div>
        )
    }
    return <Preloader/>
};

const mapStateToProps = (state) => ({
    users: state.usersPage.users,
    getUsers: state.usersPage.getUsers,
});

export default connect(mapStateToProps, {getUsers})(Users)
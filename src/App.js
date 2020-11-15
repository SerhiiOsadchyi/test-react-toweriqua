import './App.css';
import {Redirect, Route, Switch} from "react-router-dom";
import React from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Users from "./components/Users/Users";
import FAQ from "./components/FAQ/FAQ.";

const App = () => {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Switch>
                    <Route exact path='/' render={() => <Redirect to={'/users'}/>}/>
                    <Route exact path='/users' render={() => <Users/>}/>
                    <Route path='/faq' render={() => <FAQ/>}/>
                </Switch>
            </div>
        </div>
    );
}

export default App;

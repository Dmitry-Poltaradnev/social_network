import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navigation} from "./components/navigation/Navigation";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";
import {v1} from "uuid";
import {Route, BrowserRouter} from 'react-router-dom';
import {Settings} from "./components/settings/Settings";

function App() {

    const posts = [
        {id: '1', text: 'one', likes: 2},
        {id: '2', text: 'two', likes: 3},
        {id: '3', text: 'three', likes: 5},
    ]

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Navigation/>
                <Route path="/dialogs" component={Dialogs}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/settings" component={Settings}/>
            </div>
        </BrowserRouter>
    );
}

export default App;

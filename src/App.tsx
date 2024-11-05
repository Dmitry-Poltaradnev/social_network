import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navigation} from "./components/navigation/Navigation";
import {Profile} from "./components/profile/Profile";
import {Dialogs} from "./components/dialogs/Dialogs";
import {Route} from 'react-router-dom';
import {Users} from "./components/users/Users";

function App() {

    return (
        <div className="App">
            <Header/>
            <Navigation />
            <Route path="/" exact render={() => <Profile/>}/>
            <Route path="/dialogs" render={() => <Dialogs/>}/>
            <Route path="/profile" render={() => <Profile/>}/>
            <Route path="/users" render={() => <Users/>}/>
        </div>
    );
}

export default App;

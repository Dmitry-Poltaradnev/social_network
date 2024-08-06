import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navigation} from "./components/navigation/Navigation";
import {Main} from "./components/main/Main";

function App() {

    const posts = [
        {id: 1, text: 'one', likes: 2},
        {id: 2, text: 'two', likes: 3},
        {id: 3, text: 'three', likes: 5},
    ]

    return (
        <div className="App">
            <Header/>
            <Navigation/>
            <Main posts={posts}/>
        </div>
    );
}

export default App;

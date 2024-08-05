import React, {useState} from 'react';
import './App.css';

function App() {

    const [state, setState] = useState(['1', '323', '1', 20, '110'])

    const deleteItem = (item1: any) => {
        setState(state.filter(item => item !== item1))
    }

    return (
        <div className="App">
            {state.map(item => <ul>
                <li>
                    <button onClick={() => deleteItem(item)}>deleted</button>
                    {item}</li>
            </ul>)}
        </div>
    );
}

export default App;

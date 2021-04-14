import React from 'react';
import './App.scss';
import {DoctorsWidget} from "./components/doctorsWidget/DoctorsWidget";

function App() {
    return (
        <div className="App">
            <DoctorsWidget/>
            {/*<Schedule />*/}
        </div>
    );
}

export default App;

import React from 'react';
import './App.css';
import {DoctorsWidget} from "./components/doctorsWidget/DoctorsWidget";
import {Schedule} from "./components/schedule/Schedule";

function App() {
    return (
        <div className="App">
            <DoctorsWidget />
            <Schedule />
        </div>
    );
}

export default App;

import React from 'react';
import {DoctorsWidget} from "./components/doctorsWidget/DoctorsWidget";
import {Schedule} from "./components/schedule/Schedule";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/doctors">
                    <DoctorsWidget/>
                </Route>
                <Route path="/schedule">
                    <Schedule/>
                </Route>
            </Switch>
        </Router>
    )
}

export default App;

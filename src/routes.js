import React from 'react';
import { Switch, Route } from "react-router-dom";

import Table from './components/table/Table';
import Chart from './components/chart/Chart';


const Routes = ({ filterParams, cones }) => {
    return (
        <Switch>
            <Route exact path="/"><Table filterParams={filterParams} cones={cones} /></Route>
            <Route path="/table"><Table filterParams={filterParams} cones={cones} /></Route>
            <Route path="/chart"><Chart filterParams={filterParams} cones={cones} /></Route>
        </Switch>
    );
}


export default Routes;
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import Routes from './routes';
import Header from './components/layout/Header';
import Filter from './components/filters/Filter';
import ErrorBoundary from './components/ErrorBoundary';


const App = () => {
    const [cones, setCones] = useState([]);

    const [filterParams, setFilterParams] = useState({
        riskLevel: 3, years: 10, initialSum: 10000,
        monthlySum: 200, fee: 0.01
    });

    useEffect(() => {
        fetch('/api/cones')
            .then(res => res.json())
            .then(result => {
                setCones(result);
            });
    }, []);

    const onChangeFilter = e => setFilterParams({ ...filterParams, [e.target.name]: parseInt(e.target.value) || 0 });

    return (
        <Router>
            <div>
                <Header />
                <Filter filterParams={filterParams} onChangeFilter={onChangeFilter} />
                <div className="container" style={{marginTop: "50px"}}>
                    <ErrorBoundary>
                        <Routes filterParams={filterParams} cones={cones} />
                    </ErrorBoundary>
                </div>
            </div>
        </Router>
    );
};


export default App;

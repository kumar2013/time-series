import React from 'react';
import PropTypes from 'prop-types';

import TableBody from './TableBody';
import TableHeader from './TableHeader';
import Spinner from '../Spinner';

import { getTimeSeries, getEntityData } from '../../utilities/utils';


const Table = ({ filterParams, cones }) => {
    if (cones.length < 1) {
        return <Spinner />
    }

    const { riskLevel, years, initialSum, monthlySum, fee } = filterParams;
    const { mu, sigma } = cones.filter(cone => cone.riskLevel == riskLevel)[0];

    const timeSeries = getTimeSeries(mu, sigma, years, initialSum, monthlySum, fee);
    const months = timeSeries.median.map((v, idx) => idx);
    const data = getEntityData(timeSeries);

    return (
        <div className="table-responsive">
            <table className="table table-bordered">
                <TableHeader />
                <TableBody data={data} months={months} />
            </table>
        </div>

    );
}


Table.propTypes = {
    filterParams: PropTypes.object.isRequired,
    cones: PropTypes.array.isRequired
};


export default Table;

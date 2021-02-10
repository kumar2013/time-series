import React from 'react';
import PropTypes from 'prop-types';


const Filter = ({ filterParams, onChangeFilter }) => {
    const { riskLevel, years, initialSum, monthlySum } = filterParams;
    const maxRiskLevel = 25, maxYears = 50;
    const wrapperStyle = {
        backgroundColor: "#77889963",
        padding: "16px",
    };

    return (
        <div className="container-fluid" style={wrapperStyle}>
            <div className="row">
                <div className="form-group col-md-3">
                    <label htmlFor="riskLevel">Risk Level: </label>
                    <select
                        className="form-select"
                        name="riskLevel"
                        value={riskLevel}
                        onChange={e => onChangeFilter(e)}>
                        {getSelectOptions(maxRiskLevel)}
                    </select>
                </div>
                <div className="form-group col-md-3">
                    <label htmlFor="years">Years: </label>
                    <select
                        className="form-select"
                        name="years"
                        value={years}
                        onChange={e => onChangeFilter(e)}>
                        {getSelectOptions(maxYears)}
                    </select>
                </div>
                <div className="form-group col-md-3">
                    <label htmlFor="initialSum">Initial Sum: </label>
                    <input
                        type="text"
                        className="form-control"
                        name="initialSum"
                        value={initialSum}
                        onChange={e => onChangeFilter(e)}
                    />
                </div>
                <div className="form-group col-md-3">
                    <label htmlFor="monthlySum">Monthly Sum: </label>
                    <input
                        type="text"
                        className="form-control"
                        name="monthlySum"
                        value={monthlySum}
                        onChange={e => onChangeFilter(e)}
                    />
                </div>
            </div>
        </div>
    );
}

function getSelectOptions(max) {
    const options = [];

    for (let k = 1; k <= max; ++k) {
        options.push(
            <option key={k} value={k}>{k}</option>
        );
    }

    return options;
}


Filter.propTypes = {
    filterParams: PropTypes.object.isRequired,
    onChangeFilter: PropTypes.func.isRequired
};


export default Filter;
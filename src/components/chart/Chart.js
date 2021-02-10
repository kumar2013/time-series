import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { Chart as ChartJs } from 'chart.js';
import { getTimeSeries, getEntityData } from '../../utilities/utils';
import { getChartConfig } from './chartUtil';

const style = {
    height: "450px",
    width: "650px",
    margin: "auto",
    padding: "25px",
    border: "1px solid lightgrey"
};


const Chart = ({ filterParams, cones }) => {
    const canvasRef = React.useRef(null);
    let myChart;

    useEffect(() => {
        if (cones.length) {
            drawChart();
        }

        return () => {
            myChart && myChart.destroy();
        }
    });

    const drawChart = () => {
        const { riskLevel, years, initialSum, monthlySum, fee } = filterParams;
        const { mu, sigma } = cones.filter(cone => cone.riskLevel == riskLevel)[0];

        const timeSeries = getTimeSeries(mu, sigma, years, initialSum, monthlySum, fee);
        const data = getEntityData(timeSeries);

        const labels = timeSeries.median.map((v, idx) => idx % 12 == 0 ? idx/12 : '');

        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        const config = getChartConfig(data, labels);

        myChart = new ChartJs(context, config);
    }

    return (
        <div style={style}>
            <canvas
                ref={canvasRef}
                width={600}
                height={400}
            />
        </div>
    );
}

Chart.propTypes = {
    filterParams: PropTypes.object.isRequired,
    cones: PropTypes.array.isRequired
};


export default Chart;

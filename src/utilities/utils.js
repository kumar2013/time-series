
function getEntityData(timeSeries) {
    return {
        good: timeSeries.upper95.map(v => v.y),
        median: timeSeries.median.map(v => v.y),
        bad: timeSeries.lower05.map(v => v.y)
    };
}

function getTimeSeries(mu, sigma, years, initialSum, monthlySum, fee) {
    return _calculateTimeSeries({
        mu,
        sigma,
        years,
        initialSum,
        monthlySum,
        fee
    });
}

function _calculateTimeSeries ({ years, mu, sigma, fee, initialSum, monthlySum }) {
    const series = [];
    const allSeries = {
        median: [],
        upper95: [],
        lower05: []
    };

    for (let k = 0; k <= 12 * years; ++k) {
        series.push(_mapDate({ t: k / 12, mu, sigma, fee, initialSum, monthlySum }));
    }

    for (let k = 0; k < series.length; k++) {
        allSeries.median.push({ y: series[k].median, x: series[k].x });
        allSeries.upper95.push({ y: series[k].upper95, x: series[k].x });
        allSeries.lower05.push({ y: series[k].lower05, x: series[k].x });
    }

    return allSeries;
};

function _mapDate({ t, mu, sigma, fee, initialSum, monthlySum }) {
    let yearlyReturn = mu - fee;
    let monthlyReturn = yearlyReturn / 12;
    let month = t * 12;

    let median = initialSum * Math.exp(yearlyReturn * t) + monthlySum * Math.exp(monthlyReturn * (month - Math.floor(month))) * (Math.exp(monthlyReturn * Math.floor(month)) - 1.0) / (Math.exp(monthlyReturn) - 1.0);

    return {
        median: median,
        upper95: Math.exp(Math.log(median) + Math.sqrt(t) * sigma * 1.645),
        lower05: Math.exp(Math.log(median) - Math.sqrt(t) * sigma * 1.645)
    };
};


export {
    getTimeSeries,
    getEntityData
};

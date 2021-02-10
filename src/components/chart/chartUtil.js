
function getChartConfig(data, labels) {
    return {
        type: 'line',
        data: _getChartData(data, labels),
        options: _getChartOptions()
    };
}

function _getChartData(data, labels) {
    const { good, median, bad } = data;

    return {
        datasets: [
            {
                data: good,
                label: 'Good performance',
                borderColor: 'rgba(100, 255, 100, 0.2)',
                fill: false,
                pointRadius: 0
            },
            {
                data: median,
                label: 'Median performance',
                borderColor: 'rgba(100, 100, 100, 0.2)',
                fill: false,
                pointRadius: 0
            },
            {
                data: bad,
                label: 'Bad performance',
                borderColor: 'rgba(255, 100, 100, 0.2)',
                fill: false,
                pointRadius: 0
            }
        ],
        labels
    };
}

function _getChartOptions() {
    return {
        responsive: false,
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Years'
                },
                gridLines: {
                    drawOnChartArea: false
                },
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Valuation (EUR)'
                }
            }]
        }
    };
}


export {
    getChartConfig
};
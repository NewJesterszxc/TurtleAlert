Highcharts.stockChart('Live', {
    chart: {
       
        events: {
       
            load: function () {
                // set up the updating of the chart each second
                const energySeries = this.series[0];
                const temperatureSeries = this.series[1];

                setInterval(function () {
                    const x = (new Date()).getTime(); // current time

                    // Generate new data points for both series
                    const energyY = (Math.random() * 3 - 1.5).toFixed(2) * 10; // Energy between -1.5 and 1.5
                    const temperatureY = (Math.random() * 3 + 28).toFixed(2); // Temperature between 28 and 31

                    energySeries.addPoint([x, parseFloat(energyY)], true, true);
                    temperatureSeries.addPoint([x, parseFloat(temperatureY)], true, true);
                }, 1000);
            }
                
        }
    },

    plotOptions: {
        series: {

            showInNavigator: true
        }
    },

    accessibility: {
        enabled: false
    },

    time: {
        useUTC: false
    },

    rangeSelector: {
        buttons: [{
            count: 1,
            type: 'minute',
            text: '1M'
        }, {
            count: 5,
            type: 'minute',
            text: '5M'
        }, {
            type: 'all',
            text: 'All'
        }],
        
        inputEnabled: false,
        selected: 0
    },
    
    title: {
        text: 'Nest 1 Live'
        
    },

    exporting: {
        enabled: false
    },

    series: [{
        name: 'Energy',
        data: (function () {
            const data = [],
                time = (new Date()).getTime();

            for (let i = -999; i <= 0; i += 1) {
                data.push([
                    time + i * 1000,
                    parseFloat((Math.random() * 3 - 1.5).toFixed(2))// Energy between -1.5 and 1.5
                ]);
            }
            return data;
        }())
    },
    {
        name: 'Temperature',
        
        data: (function () {
            const data = [],
                time = (new Date()).getTime();

            for (let i = -999; i <= 0; i += 1) {
                data.push([
                    time + i * 1000,
                    parseFloat((Math.random() * 3 + 28).toFixed(2)) // Temperature between 28 and 31
                ]);
            }
            return data;
        }())
    }]

    
});

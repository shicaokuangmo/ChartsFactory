const pieData = require('./data.json')
module.exports = {
    id: 'h_pie_3d',
    options: {
        chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45
            }
        },
        title: {
            text: '每周水果消耗量'
        },
        subtitle: {
            text: 'Highcharts 中的3D环形图'
        },
        plotOptions: {
            pie: {
                innerSize: 100,
                depth: 45
            }
        },
        series: [pieData]
    }
}
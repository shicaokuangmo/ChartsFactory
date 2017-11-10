const budgetData = require('./budget.json')
const spendingData = require('./spending.json')

module.exports = {
    id: 'radar',
    options: {
        title: {
            text: '基础雷达图'
        },
        tooltip: {},
        legend: {
            data: [budgetData.title, spendingData.title]
        },
        radar: {
            // shape: 'circle',
            name: {
                textStyle: {
                    color: '#fff',
                    backgroundColor: '#999',
                    borderRadius: 3,
                    padding: [3, 5]
                }
            },
            indicator: [
                { name: '销售（sales）', max: 6500},
                { name: '管理（Administration）', max: 16000},
                { name: '信息技术（Information Techology）', max: 30000},
                { name: '客服（Customer Support）', max: 38000},
                { name: '研发（Development）', max: 52000},
                { name: '市场（Marketing）', max: 25000}
            ]
        },
        series: [{
            name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            // areaStyle: {normal: {}},
            data : [
                {
                    value : budgetData.data,
                    name : budgetData.title
                },
                {
                    value : spendingData.data,
                    name : spendingData.title
                }
            ]
        }]
    }
}
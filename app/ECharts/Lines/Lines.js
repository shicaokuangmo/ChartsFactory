const emailData = require('./email.json')
const lianmengData = require('./lianmeng.json')
const videoData = require('./video.json')
const directData = require('./direct.json')
const searchData = require('./search.json')

module.exports = {
    id: 'lines',
    options: {
        title: {
            text: '堆叠区域图'
        },
        tooltip : {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            data:[emailData.title, lianmengData.title, videoData.title, directData.title, searchData.title]
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : ['周一','周二','周三','周四','周五','周六','周日']
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name: emailData.title,
                type:'line',
                stack: '总量',
                areaStyle: {normal: {}},
                data: emailData.data
            },
            {
                name: lianmengData.title,
                type:'line',
                stack: '总量',
                areaStyle: {normal: {}},
                data: lianmengData.data
            },
            {
                name: videoData.title,
                type:'line',
                stack: '总量',
                areaStyle: {normal: {}},
                data: videoData.data
            },
            {
                name: directData.title,
                type:'line',
                stack: '总量',
                areaStyle: {normal: {}},
                data: directData.data
            },
            {
                name: searchData.title,
                type:'line',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'top'
                    }
                },
                areaStyle: {normal: {}},
                data: searchData.data
            }
        ]
    }
}

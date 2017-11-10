const data = [
    [5, 20], [480, 90], [250, 50], [100, 33], [330, 95],
    [410, 12], [475, 44], [25, 67], [85, 21], [220, 88],
    [600, 150]
];

module.exports = {
    id: 'd_scatter',
    options: {
        type: 'scatter',
        svgInfo: {
            svgWidth: 500,
            svgHeight: 300
        },
        data: data,
        padding: 60
    }
}
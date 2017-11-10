// (1) 生成一个10元素的数组
const data = [0,1,2,3,4,5,6,7,8,9];// (1) 生成一个10元素的数组

module.exports = {
    id: 'd_grid',
    options: {
        type: 'grid',
        svgInfo: {
            svgWidth: 600,
            svgHeight: 400
        },
        data: data,
        gridPadding: 40
    }
}
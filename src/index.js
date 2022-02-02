
// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix || matrix.length === 0) {
        return [];
    } else {
        matrixGood = matrix.map((item, index) => index % 2 === 0 ? item : item.reverse())

        let arr = matrixGood[0];
        for (let i = 0; i < matrixGood.length - 1; i++) {
            arr = arr.concat(matrixGood[i + 1])
        }

        return arr;
    }
}

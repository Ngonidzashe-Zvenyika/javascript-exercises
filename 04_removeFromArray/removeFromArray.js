let removeFromArray = function(array, ...removeItems) {
    for (const item of removeItems) {
        for (let index = array.length - 1; index >= 0; --index) {
            if (item === array[index]) {
                array.splice(index, 1);
            }
        }

    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;

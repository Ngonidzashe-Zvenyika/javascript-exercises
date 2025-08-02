const palindromes = function (string) {
    let strippedString = string.replace(/[.,!\/" "]/g, "").toLowerCase();
    let array = strippedString.split("");
    let reversedArray = array.slice().reverse(); //slice creates a copy of the array
    let reversedString = reversedArray.join("");

    if (strippedString === reversedString) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;

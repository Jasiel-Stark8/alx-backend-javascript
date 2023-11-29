export default function concatArrays(array1, array2, string) {
    let newArray = [];
    newArray.push(...array1, ...array2, ...string);
    return newArray;
}

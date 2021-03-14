/**
 * Return the contents of the array divided into N equally sized arrays.
 * 
 * @param array arrayValues
 * @return array
 */

const array = [1, 2, 3, 4, 5];

const groupArrayElements = (arrayValues, size) => {
    let result = [], divide, remainder;

    // check if values are empty
    if (arrayValues || size) {

        // check if size is positive
        if (Math.sign(size) === 1) {
            divide = arrayValues.length % size;
            remainder = Math.floor(arrayValues.length / size);

            // looping through the array
            for (let i = 0; i < arrayValues.length; i += remainder) {
                let end = remainder + i;
                let add = false;

                // check the value of 0 in divide and start breaking the array
                if (divide !== 0) {
                    end++;
                    divide--;
                    add = true;
                }

                // add to the results
                result.push(arrayValues.slice(i, end));

                // more values then increase value of i
                if (add) {
                    i++;
                }
            }
        }
    }
    return result;
}

console.log(JSON.stringify(groupArrayElements(array, 2)));
console.log(JSON.stringify(groupArrayElements(array, 3)));
console.log(JSON.stringify(groupArrayElements(array, 4)));
console.log(JSON.stringify(groupArrayElements(array, 5)));
console.log(JSON.stringify(groupArrayElements(array, -3)));
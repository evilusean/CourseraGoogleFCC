// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

//METHOD 1: WORKS
function chunk(array, size) {
  const result = []; //ARRAY TO STORE PUSHED VALUES ON
  let index = 0; //DEFAULT STARTS AT 0 '0 BASED INDEX'
  while (index < array.length) {
    //WHILE INDEX IS LESS THAN ARRAY.LENGTH,
    result.push(array.slice(index, index + size)); //PUSH NEW VALUES, array.slice (INDEX VALUE, INDEX VALUE + SIZE) # WILL RETURN NEW SLICE FOR ARRAY
    index += size; //ADDS NEXT SIZE TO INDEX, SO WE CAN PUSH ON THE NEXT SLICE TO THE ARRAY
  }
  return result; //RETURNS THE NEW ARRAY
}

console.log(chunk([1, 2, 3, 4, 5], 4));

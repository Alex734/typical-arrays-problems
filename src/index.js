
exports.min = function min (array) {
  if(array.length == 0 || array == null || array == undefined) {
    return 0;
  }
  else{
    let min_value = array[0];
  array.forEach(arr_elem => {
    if(min_value > arr_elem){
      min_value = arr_elem;
    } 
  });
  return min_value;
  }
  
}

exports.max = function max (array) {
  if(array.length == 0){
    return 0;
  }
  let max_value = array[0];
  array.forEach(arr_elem => {
    if(max_value < arr_elem)
      max_value = arr_elem; 
   });
  return max_value; 
}

exports.avg = function avg (array) {
  if(array.length == 0) {
    return 0;
  }
  let sum = 0;
  array.forEach(arr_elem => {
    sum += arr_elem; 
  });
  let avg_value = sum / array.length;
  return avg_value; 
}

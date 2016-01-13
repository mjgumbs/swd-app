export default function(array, index){
  let obj = array.reduce(function(result, currentItem) {
    if(index === undefined){
      index = 0;
    }
    var key = Object.keys(currentItem)[index];
    result[key] = currentItem[key];
    console.log(result);
    return result;
  },{});
  return obj;
};

function mapClone(fn, fn2, arr){
  return function(){
    return fn(fn2, arr)
  }
}


function iterate(){
  let newArr = [];
  for(i=0; i<arr.length; i++){
    newArr.push(
      fn2(arr[i])
    )
  }
  return newArr;
}
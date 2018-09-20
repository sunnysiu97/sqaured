const input = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function squared(array){
  return _.partition(array, function(root){
    return Math.sqrt(root) % 1 === 0;
  });
}

console.log(squared(input));


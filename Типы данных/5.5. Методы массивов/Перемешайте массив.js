function shuffle(array) {
  let pivot
  for (let i = array.length - 1; i > 0; i--) {
    pivot = Math.floor(Math.random() * (i + 1));
    [array[i], array[pivot]] = [array[pivot], array[i]]
  }
}

let arr = [1, 2, 3]
shuffle(arr)
console.log(arr)
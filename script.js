let unsorted = document.querySelector(".unsorted");
let sorted = document.querySelector(".sorted");
// let unsortedArray = ['d', 'sdf', 'gf', 'ty', 'hb', 'adf'];
let unsortedArray = [3, 1, 8, 9, 333333333, -2, -45, 0, 4, 0.2, 7.9, 5, 2, 6, 7,-70];
let a = unsortedArray;
let temp;

unsorted.innerHTML = unsortedArray;

unsortedArray.map((item, i) => {
  unsortedArray.map((items, j) => {
    // j=j+1;
    if (unsortedArray[i] < unsortedArray[j]) {
      if (j < unsortedArray.length) {
        temp = unsortedArray[i];
        unsortedArray[i] = unsortedArray[j];
        unsortedArray[j] = temp;
      }
    }
  });
});

sorted.innerHTML = unsortedArray;
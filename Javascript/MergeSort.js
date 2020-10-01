let a = [5, 4, 3, 2, 1];
const Merge = (s, e) => {
  let mid = parseInt((s + e) / 2);
  let i = s;
  let j = mid + 1;
  let temp = [];
  while (i <= mid && j <= e) {
    if (a[i] < a[j]) {
      temp.push(a[i]);
      i++;
    } else {
      temp.push(a[j]);
      j++;
    }
  }
  while (i <= mid) {
    temp.push(a[i]);
    i++;
  }
  while (j <= e) {
    temp.push(a[j]);
    j++;
  }
  // console.log(temp)
  for (let i = s; i <= e; i++) {
    a[i] = temp.shift();
    // console.log(temp)
  }
};
const MergeSort = (s, e) => {
  //base Condition
  if (s >= e) {
    return;
  }
  // find mid
  let mid = parseInt((s + e) / 2);
  // divide
  MergeSort(s, mid);
  MergeSort(mid + 1, e);
  //merge
  Merge(s, e);
};
MergeSort(0, a.length - 1);
console.log(a);

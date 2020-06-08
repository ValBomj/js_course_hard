let num = 266219;
let numString = num.toString();
let numArr = numString.split('');
let multiplyRes = 1;
for (let i = 0; i < numArr.length; i++) {
  multiplyRes *= numArr[i];
}
console.log(multiplyRes);
let multiplyResExp = (multiplyRes ** 3).toString();
console.log(multiplyResExp[0] + multiplyResExp[1]);

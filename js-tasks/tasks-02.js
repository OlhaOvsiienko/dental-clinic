1. https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
function stringToArray(string){
  return string.split(" ");
 }

 2. https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
 function DNAtoRNA(dna) {
  return dna.replace(/T/g, 'U');
}

3. https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
var min = function(list) {
  var i;
for (i = 0; i < list.length; i ++) {
  if (list[i] < list[0]) {
    list[0] = list[i];
  }
}
return list[0];
}
var max = function(list) {
  var i;
for (i = 0; i < list.length; i ++) {
  if (list[i] > list[0]) {
    list[0] = list[i];
  }
}
return list[0];
}

4. https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript

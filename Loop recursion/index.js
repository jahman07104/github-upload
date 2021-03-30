const strings = [['h', 'e', 'l', 'l', 'o', ','], ['n', 'i', 'c', 'e'], ['t', 'o'], ['m', 'e', 'e', 't'], ['y', 'o', 'u']];

let sentence = '';

for (i=0; i<strings.length; i++) {
  for (j=0; j<strings[i].length; j++) {
    sentence = sentence + strings[i][j];
  }
  sentence = sentence + ' ';
}

console.log(sentence)
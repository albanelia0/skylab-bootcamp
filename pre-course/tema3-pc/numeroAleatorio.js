function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
}



var comprobarCarton;
  var numbersBag = [];
  for (var i = 1; i <= 30; i++) {
    numbersBag.push(i);
  }
  console.log(numbersBag);
  shuffle(numbersBag);
  console.log(numbersBag);
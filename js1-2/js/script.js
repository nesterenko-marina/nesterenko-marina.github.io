function pow(x, n) {
  var result = x;

  for (var i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

var x = prompt("Введите число", '');
var n = prompt("Введите степень", '');

if (n < 1) {
  console.log('Степень ' + n +
    ' не поддерживается, введите целую степень, большую 1'
  );
} else {
  console.log( pow(x, n) );
}

var arr = [];

for (var i = 0; i < 5; i++) {
    arr.push( prompt('Введите имя', '') );
}

var username = prompt('Введите имя пользователя', '');
   
if (arr.indexOf(username)>=0) {
    alert( username + ', вы успешно вошли' );
}   else {   
    alert( 'Ошибка входа' );
}
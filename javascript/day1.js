let a = prompt('숫자를 입력하세요');
let b = prompt('숫자를 입력하세요');

a = parseInt(a);
b = parseInt(b);

console.log(a);
console.log(b);

if (0<a<10 && 0<b<10) {
  alert(a+b);
}
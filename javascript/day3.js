let a = prompt('숫자를 입력하세요')
let b = prompt('숫자를 입력하세요')

a = parseInt(a)
b = parseInt(b)

if (0 < a && b < 10) {
  alert(a / b)
} else {
  alert('숫자를 다시 입력하세요')
}

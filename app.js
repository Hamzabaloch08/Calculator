function Click(numbers){
    document.getElementById('Screen').value += numbers
}
function Allclear() {
    document.getElementById('Screen').value = ''
}
function  Clear() {
    document.getElementById('Screen').value = document.getElementById('Screen').value.slice(-0, -1)
}

function equal() {
    let calculate = document.getElementById('Screen')
    calculate.value = eval(calculate.value)
}

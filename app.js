function Click(numbers){
    document.getElementById('inp').value += numbers
}
function Allclear() {
    document.getElementById('inp').value = ''
}
function  Clear() {
    document.getElementById('inp').value = document.getElementById('inp').value.slice(-0, -1)
}

function equal() {
    let calculate = document.getElementById('inp')
    calculate.value = eval(calculate.value)
}

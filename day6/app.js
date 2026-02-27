function getValues() {
    var n1 = Number(document.getElementById("num1").value);
    var n2 = Number(document.getElementById("num2").value);
    return [n1, n2];
}
function showResult(value) {
    document.getElementById("result").textContent =
        "Result: " + value;
}
function add() {
    var _a = getValues(), a = _a[0], b = _a[1];
    showResult(a + b);
}
function sub() {
    var _a = getValues(), a = _a[0], b = _a[1];
    showResult(a - b);
}
function mul() {
    var _a = getValues(), a = _a[0], b = _a[1];
    showResult(a * b);
}
function div() {
    var _a = getValues(), a = _a[0], b = _a[1];
    showResult(a / b);
}

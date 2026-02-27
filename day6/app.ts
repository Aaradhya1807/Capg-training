function getValues(): [number, number] {
    const n1 = Number(
        (document.getElementById("num1") as HTMLInputElement).value
    );

    const n2 = Number(
        (document.getElementById("num2") as HTMLInputElement).value
    );

    return [n1, n2];
}

function showResult(value: number): void {
    document.getElementById("result")!.textContent =
        "Result: " + value;
}

function add(): void {
    const [a, b] = getValues();
    showResult(a + b);
}

function sub(): void {
    const [a, b] = getValues();
    showResult(a - b);
}

function mul(): void {
    const [a, b] = getValues();
    showResult(a * b);
}

function div(): void {
    const [a, b] = getValues();
    showResult(a / b);
}
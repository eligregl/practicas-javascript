// Código del cuadrado
console.group("Cuadrados");

function squarePerimeter(side) {
    return side * 4
}
squarePerimeter();

function squareArea(side) {
    return side * side;
}
squareArea();

console.groupEnd();

// Código del tríangulo
console.group("Triángulos");

function trianglePerimeter(side1, side2, base) {
    return side1 + side2 + base;
}

function triangleArea(base, height) {
    return (base * height) / 2;
}

function isoscelesHeight(side, base) {
    return Math.sqrt((side * side) - ((base * base)/4))
}

console.groupEnd();

// Código del círculo
console.group("Círculo");

// Diámetro
function circleDiameter(radius) {
    return radius * 2;
}

// PI
const PI = Math.PI;
console.log(PI);

// Circunferencia
function circlePerimeter(radius) {
    const diameter = circleDiameter(radius);
    return diameter * PI;
}

// Área
function circleArea(radius) {
    return (radius * radius) * PI;
}

console.groupEnd();

//Interacción con el HTML

function calculateSquarePerimeter() {
    const input = document.getElementById("squareInput");
    const value = input.value;

    const perimeter = squarePerimeter(value);

    alert(perimeter);
};

function calculateSquareArea() {
    const input = document.getElementById("squareInput");
    const value = input.value;

    const area = squareArea(value);

    alert(area);
};


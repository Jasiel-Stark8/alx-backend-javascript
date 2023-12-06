interface Point {
    a: number;
    b: number;
}

function logPoint(p: Point) {
    console.log(`${p.a}, ${p.b}`);
}

const point = {a: 10, b: 5}
console.log(logPoint(point));
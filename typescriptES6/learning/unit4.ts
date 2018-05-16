let isDone: boolean = false;
console.log(isDone);

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

console.log(decimal);
console.log(hex);
console.log(binary);
console.log(octal);

let color: string = "blue";
color = 'red';
console.log(color);

let fullName: string = 'Bob Bobbington';
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }.

I'll be ${ age + 1 } years old next month.`;
console.log(sentence);

let list: number[] = [1, 2, 3];
console.log(list.length);
for(let i = 0; i < list.length; i++){
    console.log(list[i]);
}

let list2: Array<number> = [1, 2, 3];


// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK

enum Color {Red = 1, Green = 2, Blue = 4}
let c: Color = Color.Green;

console.log(c);

enum Colors {Red = 1, Green, Blue}
let colorName: string = Colors[2];

console.log(colorName); // Displays 'Green' as its value is 2 above
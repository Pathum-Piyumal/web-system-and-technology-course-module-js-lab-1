// Creating the array
const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
console.log(fruits);
// Print first and last item
console.log("First fruit:", fruits[0]);
console.log("Last fruit:", fruits[fruits.length - 1]);

// Add new fruit at the end
fruits.push("Pineapple");
console.log("After adding:", fruits);

// Remove the second fruit (Banana)
fruits.splice(1, 1); 
console.log("After removing second fruit:", fruits);

// Length of the array
console.log("Array length:", fruits.length);

// Iterate through the array and print each fruit
console.log("Using for loop:");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

console.log("Using forEach():");
fruits.forEach((fruit) => {
  console.log(fruit);
});
const numbers = [2, 5, 8, 10, 12];

// map() → double numbers
const doubled = numbers.map(num => num * 2);
console.log("Doubled:", doubled);

// filter() → keep numbers > 6
const filtered = numbers.filter(num => num > 6);
console.log("Numbers > 6:", filtered);

// reduce() → sum of all numbers
const sum = numbers.reduce((acc, val) => acc + val, 0);
console.log("Sum:", sum);
console.log("Includes 8:", numbers.includes(8));

console.log("Index of 10:", numbers.indexOf(10));

const sorted = [...numbers].sort((a, b) => a - b);
console.log("Sorted ascending:", sorted);


// 3. Objects – Basics Task  
//       3.1: Creating and Accessing Objects 


const student = {
  name: "Kavindu",
  age: 21,
  faculty: "Computing",
  subjects: ["Web Development", "Database Systems", "Programming"]
};

// Print name & faculty
console.log("Name:", student.name);
console.log("Faculty:", student.faculty);

// Add new property year: 2025
student.year = 2025;

// Change age to 22
student.age = 22;

// Print all subjects
student.subjects.forEach(sub => console.log(sub));

// 4. Nested Objects and Arrays
// Task 4.1: Array of Objects
const students = [
  { name: "Kavindu", age: 21, faculty: "Computing" },
  { name: "Nimesha", age: 22, faculty: "Engineering" },
  { name: "Dinuka", age: 23, faculty: "Business" }
];

// Print all student names
students.forEach(std => console.log(std.name));

// Filter students older than 21
const olderStudents = students.filter(std => std.age > 21);
console.log("Students older than 21:", olderStudents);

// Create an array of faculty names
const faculties = students.map(std => std.faculty);
console.log("Faculties:", faculties);

// Task 4.2: Object with Array of Objects
const classroom = {
  className: "IT2025",
  teacher: "Mr. Perera",
  students: [
    { name: "Kavindu", age: 21 },
    { name: "Nimesha", age: 22 },
    { name: "Dinuka", age: 23 }
  ]
};

// Print teacher's name
console.log("Teacher:", classroom.teacher);

// Add a new student
classroom.students.push({ name: "Samantha", age: 20 });

// Print all student names
classroom.students.forEach(s => console.log(s.name));

// 5. Challenge Activity: Total Product Value
const products = [
  { name: "Keyboard", price: 2500, qty: 2 },
  { name: "Mouse", price: 1500, qty: 3 },
  { name: "Monitor", price: 22000, qty: 1 }
];

// Calculate total value (price × qty)
const totalValue = products.reduce((sum, product) => {
  return sum + product.price * product.qty;
}, 0);

console.log("Total Value of Products:", totalValue);

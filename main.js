//5. Filter Method used

document.write('<br>');
document.write('<br>');

document.write("5. Filter Method used");

document.write('<br>');

const employees1 = [
    { name: 'David Carlson', age: 30 },
    { name: 'John Cena', age: 34 },
    { name: 'Mike Sheridan', age: 25 },
    { name: 'John Carte', age: 50 }
];

const filteredEmployees = employees1.filter(emp => emp.name.includes("John"));
console.log(filteredEmployees);
document.write(filteredEmployees);

document.write('<br>');
document.write('<br>');
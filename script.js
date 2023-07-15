/** @format */

let employees = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  employees.map((employee) => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}

function PrintDeveloperbyForEach() {
  employees.forEach((employee) => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}

function addData() {
  const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
  employees.push(newEmployee);
  console.log(employees);
}

function removeAdmin() {
  for (let i = employees.length - 1; i >= 0; i--) {
    if (employees[i].profession === "admin") {
      employees.splice(i, 1);
    }
  }
  console.log(employees);
}

function concatenateArray() {
  const newArray = [
    { id: 5, name: "sanj", age: "22", profession: "designer" },
    { id: 6, name: "sanju", age: "24", profession: "webdeveloper" },
    { id: 7, name: "soni", age: "23", profession: "CEO" }
  ];
  const concatenatedArray = employees.concat(newArray);
  console.log(concatenatedArray);
}

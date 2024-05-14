let company = {
  development: {
      web: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800}],
      internals: [{name: 'Jack', salary: 1300}],
  },
  sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600}],
  designers : [{name: 'Alex', salary: 800}],
};

function calcSum(department) {
  if (Array.isArray(department)) {
    return department.reduce((total, employee) => total + employee.salary, 0);
  }

  let total = 0;
    for (let subDepartment of Object.values(department)) {
      total += calcSum(subDepartment);
    }

    return total;
}

console.log(calcSum(company));


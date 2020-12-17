function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Пиши код ниже этой строки
  const values = Object.values(salaries);
  for (const value of values) {
    if (value.length === 0) {
      totalSalary = 0;
    }
    totalSalary += value;
    // Пиши код выше этой строки
  }
  return totalSalary;
}
console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));
console.log(countTotalSalary({}));
console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }));

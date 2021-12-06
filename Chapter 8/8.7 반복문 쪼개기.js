export function reportYoungestAgeAndTotalSalary(people) {
  let totalSalary = 0;
  for (const p of people) {
    totalSalary += p.salary;
  }

  function totalSalary (){
    return people.reduce((total, p) => total+p.salary, 0);
  }

  let youngest = people[0] ? people[0].age : Infinity;
  for (const p of people) {
    if (p.age < youngest) youngest = p.age;

  return `youngestAge: ${youngest}, totalSalary: ${totalSalary}`;
}

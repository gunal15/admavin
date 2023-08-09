let people = [
  { name: "Alice", age: 21 },
  { name: "Alice", age: 24 },
  { name: "Max", age: 21 },
  { name: "June", age: 23 },
  { name: "July", age: 24 },
];

function groupBy(arr) {
  const grouped = {};

  arr.forEach((obj) => {
    const age = obj.age.toString();
    if (!grouped[age]) {
      grouped[age] = [];
    }
    grouped[age].push(obj);
  });

  return grouped;
}

console.log(groupBy(people));

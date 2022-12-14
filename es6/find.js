let customers = [{
    name: 'ABC Inc',
    credit: 100
}, {
    name: 'ACME Corp',
    credit: 200
}, {
    name: 'IoT AG',
    credit: 300
}];
console.log(customers.find(c => c.credit > 100));

var people = [
    {name: 'Jack', age: 50},
    {name: 'Michael', age: 9}, 
    {name: 'John', age: 40}, 
    {name: 'Ann', age: 19}, 
    {name: 'Elisabeth', age: 16}
  ]
  
  function teenager(person) {
      return person.age > 10 && person.age < 20
  }
  
  var firstTeenager = people.find(teenager)
  
  console.log('First found teenager:', firstTeenager)
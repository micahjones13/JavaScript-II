// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function kingdom() {
  const hero = 'Link'

  console.log(`Hail ${hero}`)

  region(); //must invoke here to get data from region()

  function region() {
    const regionName = 'Hyrule'
    console.log(`${hero}, From ${regionName}`)
    city(); //must invoke here to get data from city()
    function city() {
      const cityName = 'Lost Woods'
      console.log(`${hero}, From ${regionName}, From ${cityName}`)
    }
  }
  
}
console.log(kingdom());

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  return function (){
    count++;
  }

};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2
const newCounter = counter(); 
console.log(newCounter()); //1 
console.log(newCounter()); //2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};

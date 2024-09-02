// Question 1

function lifeInWeeks(age) {
  /************Don't change the code above************/

  //Write your code here.

  const years = 90 - age;
  const months = years * 12;
  const weeks = years * 52;
  const days = years * 365;

  console.log(
    `You have ${days} days, ${weeks} weeks, and ${months} months left`
  );

  /*************Don't change the code below**********/
}

lifeInWeeks(20);

// Question 2

const percentMatch = function (name1, name2) {
  const randInt = function (min, max) {
    return Math.trunc(Math.random() * (max - min) + 1) + min;
  };
  return `${name1} and ${name2} are ${randInt(0, 100)}% match!!`;
};
console.log(percentMatch("Hamid", "Hameedah"));

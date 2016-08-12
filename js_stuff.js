// function tellUser () {
//   alert('HAMMERTIME');
// }

// window.setTimeout(tellUser, 5000);

function hammerTime(time) {
  window.setTimeout(function () {
    alert(`${time} is hammertime!!`);
  }, time);
}
//
// hammerTime(2000);

// function teaBiscuits () {
//   let teaBool = prompt("Would you like some tea?");
//   console.log(teaBool);
//   let biscuitsBool = prompt("Would you like biscuits?");
//   console.log(`So you ${teaBool} want tea and you ${biscuitsBool} want biscuits.`);

// }

// teaBiscuits();

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function teaBiscuits () {
  let teaBool = reader.question("Would you like some tea?", (answer) => {
    console.log(answer);
  });
}

// teaBiscuits ();



function teaAndBiscuits () {
  let first, second;

  reader.question('Would you like some tea?', (res) => {
    first = res;
    console.log(`You replied ${res}.`);

    reader.question('Would you like some biscuits?', (res2) => {
      second = res2;
      console.log(`You replied ${res2}.`);
      const firstRes = (first === 'yes') ? 'do' : 'don\'t';
      const secondRes = (second === 'yes') ? 'do' : 'don\'t';
      console.log(`So you ${firstRes} want tea and you ${secondRes} want biscuits.`);
      reader.close();
    });
  });



}

// teaAndBiscuits();





function Cat () {
  this.name = 'Markov';
  this.age = 3;
}

function Dog () {
  this.name = 'Noodles';
  this.age = 4;
}

Dog.prototype.chase = function (cat) {
  console.log(`My name is ${this.name} and I'm chasing ${cat.name}! Woof!`);
};

const Markov = new Cat ();
const Noodles = new Dog ();

Noodles.chase.apply(Markov, [Noodles]);

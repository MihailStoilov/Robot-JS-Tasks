const phrases = ["Hello", "Welcome", "How are you?", "Today is a good day"];
const i = Math.floor(Math.random() * phrases.length);
const randomPhrase = phrases[i];

function phrase() {
  setTimeout(function () {
    alert(randomPhrase);
  }, 4000);
};

phrase();

let robot1 = {
  name: 'Mario',
  color: 'Orange',
  type: 'Male',
  phrase: randomPhrase
}

let robot2 = {
  name: 'Yovana',
  color: 'Purple',
  type: 'Female',
}
robot2.phrase = `${robot1.phrase}, ${robot2.name}`

console.log(robot2.phrase);

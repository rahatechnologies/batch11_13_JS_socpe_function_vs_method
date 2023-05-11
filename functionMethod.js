const startGameBtn = document.getElementById('start_game_btn');

function startGame() {
  console.log('Game is starting .....');
}

const person = {
  name: 'rahatechnologies',
  greet: function greet() {
    console.log('Hello there!');
  },
};

console.log(person.name);
person.greet(); // method => attached to some object

startGame(); // normal function

startGameBtn.addEventListener('click', startGame);

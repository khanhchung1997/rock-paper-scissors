function computerPlay() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const index = Math.floor(Math.random() * Math.floor(choices.length));
  return choices[index];
}
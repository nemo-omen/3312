/*jslint browser */

const input = document.getElementById('idea-input');
const button = document.getElementById('submit');
const greeting = document.querySelector('.greeting');
const brainstorms = document.querySelector('.brainstorms');
const output = document.querySelector('.output');
const idea = document.getElementById('idea')

button.addEventListener('click', (event) => {
  greet(input.value);
  reveal();
});

function greet(name) {
  greeting.innerText = `Howdy, ${name ? name : 'Scripter'}!`;
}

function reveal() {
  if(Array.from(output.classList).includes('hidden')) {
    output.classList.add('visible');
    output.classList.remove('hidden');
  }
}
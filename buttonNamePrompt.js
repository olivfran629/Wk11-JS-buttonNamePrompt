const button = document.querySelector('button');

button.onclick = function() {
  let age = prompt('How old are you?');
  alert('You are ' + age + ' years old!');
}
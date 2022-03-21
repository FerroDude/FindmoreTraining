const greeting = 'Hello World';
console.log(greeting);

//create a button that prmpts "hello world"
const button = document.createElement('button');
button.innerText = 'Click Me';
document.body.appendChild(button);

button.addEventListener('click', () => {
  alert('Hello World');
});

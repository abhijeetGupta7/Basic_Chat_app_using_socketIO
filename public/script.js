// Create a new socket connection to the server
var socket = io();

// Get the form and input elements from the DOM
const form = document.getElementById('form');
const input = document.getElementById('input');

// Add an event listener for the form submission
form.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent the form from submitting the traditional way
  if (input.value) { // Check if there is a value in the input field
    socket.emit('msg', input.value); // Emit a 'msg' event to the server with the input value
    input.value = ''; // Clear the input field after sending the message
  }
});

// Listen for 'reply' events from the server
socket.on('reply', function(msg) {
  var item = document.createElement('li'); // Create a new list item element
  item.textContent = msg; // Set the text content of the list item to the received message
  messages.appendChild(item); // Append the new list item to the messages list
  window.scrollTo(0, document.body.scrollHeight); // Scroll to the bottom of the page to show the latest message
});

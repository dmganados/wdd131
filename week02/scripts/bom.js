const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Holds each entries chapter title and an associated delete button
const li = document.createElement('li');
li.textContent = input.value;
li.append(deleteButton);
// Delete button
const deleteButton = document.createElement('button');
deleteButton.textContent = '❌';

list.append(li);


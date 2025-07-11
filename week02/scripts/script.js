let text = '';
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
const li = document.createElement('li');
const deleteBotton = document.createElement('button');

li.textContent = input.value;
// deleteButton.textContent = '❌';
// li.append(deleteBotton);
list.append(li);

//check if they is a text inside the input flied 
//or not 
button.addEventListener('click', function () {
  if (input.value.trim() === '') {
    console.log('OOh no')
  } else {
    text += input.value;
  }
})

input.value = '';

//add deleted
deleteBotton.addEventListener('click', function () {
  list.removeChild(li);
  input.focus();
});

input.focus();

document.querySelector('.list').textContent = `<li></li>`
  
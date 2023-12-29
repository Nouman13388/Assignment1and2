document.addEventListener('DOMContentLoaded', function() {
    const bookForm = document.getElementById('bookForm');
    const bookList = document.getElementById('bookList');
  
    bookForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const bookTitleInput = document.getElementById('bookTitle');
      const title = bookTitleInput.value;
  
      if (title !== '') {
        addBookToList(title);
        bookTitleInput.value = '';
      } else {
        alert('Please enter a book title!');
      }
    });
  
    function addBookToList(title) {
      const li = document.createElement('li');
      li.textContent = title;
      li.classList.add('list-group-item');
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Remove';
      deleteButton.classList.add('btn', 'btn-danger', 'btn-sm', 'float-right');
      deleteButton.addEventListener('click', function() {
        bookList.removeChild(li);
      });
  
      li.appendChild(deleteButton);
      bookList.appendChild(li);
    }
  });
  
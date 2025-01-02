// Get DOM Elements
const title = document.getElementById('title');
const author = document.getElementById('author');
const isbn = document.getElementById('isbn');
const submitButton = document.getElementById('submit');
const bookList = document.getElementById('book-list');

// Add Book Event Listener
submitButton.addEventListener('click', addBook);

// Add Book Function
function addBook() {
    const titleValue = title.value.trim();
    const authorValue = author.value.trim();
    const isbnValue = isbn.value.trim();

    if (titleValue === '' || authorValue === '' || isbnValue === '') {
        alert('Please fill in all fields!');
        return;
    }

    // Create table row
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${titleValue}</td>
        <td>${authorValue}</td>
        <td>${isbnValue}</td>
        <td><button class="delete">X</button></td>
    `;

    // Append row to table
    bookList.appendChild(row);

    // Clear input fields
    title.value = '';
    author.value = '';
    isbn.value = '';
}

// Delete Book Event Listener
bookList.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure you want to delete this book?')) {
            e.target.parentElement.parentElement.remove();
        }
    }
});

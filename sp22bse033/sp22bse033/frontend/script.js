const bookList = document.getElementById('bookList');
const searchInput = document.getElementById('searchInput');

async function fetchBooks(query = '') {
  const res = await fetch(`http://localhost:5000/api/books${query ? '?author=' + query : ''}`);
  const books = await res.json();
  displayBooks(books);
}

function displayBooks(books) {
  bookList.innerHTML = '';
  books.forEach(book => {
    const bookCard = document.createElement('div');
    bookCard.className = 'col-md-4';
    bookCard.innerHTML = `
      <a href="${book.link}" target="_blank" class="text-decoration-none text-dark">
        <div class="card mb-3 shadow-sm h-100">
          <div class="card-body">
            <h5 class="card-title">${book.title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${book.author}</h6>
            <p class="card-text">💲${book.price}</p>
          </div>
        </div>
      </a>`;
    bookList.appendChild(bookCard);
  });
}

searchInput.addEventListener('input', (e) => {
  fetchBooks(e.target.value);
});

fetchBooks();
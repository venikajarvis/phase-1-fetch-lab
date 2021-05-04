document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  fetch (
    "https://anapioficeandfire.com/api/books",
    {
      method: "GET",
    }
  ).then (response => response.json()) //isn't response.json the promise?
  .then((data) => {
    const {main} = data
    renderBooks(main)
  });
};

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}


// //WRONG
// function getGithubOrgs(url) {
//   fetch(url).then((response) => response.json());
// }
// getGithubOrgs(
//   "https://api.github.com/users/deekshasharma/orgs"
// ).then((jsonData) => console.log(jsonData));

// //RIGHT
// function getGithubOrgs(url) {
//   return fetch(url).then((response) => response.json());
// }
// getGithubOrgs("https://api.github.com/users/deekshasharma/orgs").then((res) =>
//   console.log(res)
// );
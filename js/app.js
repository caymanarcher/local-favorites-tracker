let favorites = [];
const form = document.getElementById('add-favorite-form');
const favoritesList = document.getElementById('favorites-list');

console.log('app.js connected');
let myFavorite = {
    name: 'La La Land Cafe on Camp Bowie',
    category: 'coffee',
    rating: 5,
    notes: 'Delicious coffee and amazing toasts',
    dateAdded: 'September 2026'
};
console.log(myFavorite.name);
let displayText = myFavorite.name + ' - Rating: ' + myFavorite.rating + '/5';

let today = new Date().toLocaleDateString();
console.log(today); // 9/17/2026
console.log(myFavorite); // click the arrow to expand it
console.log(typeof myFavorite.name); // string
console.log(typeof myFavorite.rating); // number

let placeName = 'La La Land Cafe';
let rating = 5;
console.log(placeName + ' - ' + rating + '/5');
console.log('⭐'.repeat(rating) + ' ' + placeName);

function greetFavorite(placeName, rating) {
    console.log(placeName + ' has ' + rating + ' stars!');
}
greetFavorite('La La Land', 5);

const nameInput = document.getElementById('name');
console.log(nameInput.value); 

function addFavorite(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const category = document.getElementById('category').value;

    if (!name || !category) {
        alert('Please fill in name and category!');
        return;
    }
    const newFavorite = {
        name: name,
        category: category,
        rating: parseInt(document.getElementById('rating').value),
        notes: document.getElementById('notes').value.trim(),
        dateAdded: new Date().toLocaleDateString()
    };

    favorites.push(newFavorite);
    form.reset();
    displayFavorites();
}

form.addEventListener('submit', addFavorite);

function displayFavorites() {
    favoritesList.innerHTML = '';
    if (favorites.length === 0) {
        return;
    }
    favorites.forEach(function(favorite) {
        const stars = '⭐'.repeat(favorite.rating);
        favoritesList.innerHTML += `
            <div class="favorite-card">
                <h3>${favorite.name}</h3>
                <span class="favorite-category">${favorite.category}</span>
                <div class="favorite-rating">${stars} (${favorite.rating}/5)</div>
                <p class="favorite-notes">${favorite.notes}</p>
                <p class="favorite-date">Added: ${favorite.dateAdded}</p>
            </div>`;
    });
}

displayFavorites();
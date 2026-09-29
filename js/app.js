let favorites = [];
const form = document.getElementById('add-favorite-form');
const favoritesList = document.getElementById('favorites-list');

const searchInput = document.getElementById('search-input');
const categoryFilter = document.getElementById('category-filter');

searchInput.addEventListener('input', searchFavorites);
categoryFilter.addEventListener('change', searchFavorites);

console.log('app.js connected');

// Practice Code:
// let myFavorite = {
//     name: 'La La Land Cafe on Camp Bowie',
//     category: 'coffee',
//     rating: 5,
//     notes: 'Delicious coffee and amazing toasts',
//     dateAdded: 'September 2026'
// };
// console.log(myFavorite.name);
// let displayText = myFavorite.name + ' - Rating: ' + myFavorite.rating + '/5';

// let today = new Date().toLocaleDateString();
// console.log(today); 
// console.log(myFavorite); 
// console.log(typeof myFavorite.name);
// console.log(typeof myFavorite.rating); 

// let placeName = 'La La Land Cafe';
// let rating = 5;
// console.log(placeName + ' - ' + rating + '/5');
// console.log('⭐'.repeat(rating) + ' ' + placeName);

// function greetFavorite(placeName, rating) {
//     console.log(placeName + ' has ' + rating + ' stars!');
// }
// greetFavorite('La La Land', 5);

// const nameInput = document.getElementById('name');
// console.log(nameInput.value); 

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
    saveFavorites();
    form.reset();
    searchFavorites();
}

form.addEventListener('submit', addFavorite);


function displayFavorites(filtered) {
    favoritesList.innerHTML = '';
    filtered.forEach(function(favorite) {
            const index = favorites.indexOf(favorite);
            const stars = '⭐'.repeat(favorite.rating);
        favoritesList.innerHTML += `
            <div class="favorite-card">
                <h3>${favorite.name}</h3>
                <span class="favorite-category">${favorite.category}</span>
                <div class="favorite-rating">${stars} (${favorite.rating}/5)</div>
                <p class="favorite-notes">${favorite.notes}</p>
                <p class="favorite-date">Added: ${favorite.dateAdded}</p>
                        <button class="btn-danger" onclick="deleteFavorite(${index})">Delete</button>
                </div>`;
    });
}

function deleteFavorite(index) {
    const favorite = favorites[index];
    if (confirm(`Delete "${favorite.name}"?`)) {
        favorites.splice(index, 1); 
        saveFavorites();
        searchFavorites();
    }
}


function searchFavorites() {
            const searchText = searchInput.value.toLowerCase().trim();
            const selectedCategory = categoryFilter.value;

            const filtered = favorites.filter(function(favorite) {
                 const matchesSearch = searchText === '' ||
                        favorite.name.toLowerCase().includes(searchText) ||
                        favorite.notes.toLowerCase().includes(searchText);
            const matchesCategory = selectedCategory === 'all' ||
                 favorite.category === selectedCategory;
                return matchesSearch && matchesCategory;
            });
                        displayFavorites(filtered);
        }

function saveFavorites() {
    try {
        localStorage.setItem('localFavorites', JSON.stringify(favorites));
    } catch (error) {
        alert('Unable to save favorites. Storage may be disabled.');
    }
}
function loadFavorites() {
    try {
        const saved = localStorage.getItem('localFavorites');
        if (saved) {
            favorites = JSON.parse(saved);
        } else {
            favorites = [];
        }
    } catch (error) {
        favorites = [];
    }
}

loadFavorites();
searchFavorites();

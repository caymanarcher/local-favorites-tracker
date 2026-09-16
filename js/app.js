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
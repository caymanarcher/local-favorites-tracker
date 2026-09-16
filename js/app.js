console.log('app.js connected');
let myFavorite = {
    name: 'Starbucks on University Drive',
    category: 'coffee',
    rating: 5,
    notes: 'Great study spot with fast wifi',
    dateAdded: 'May 2026'
};
console.log(myFavorite.name);
let displayText = myFavorite.name + ' - Rating: ' + myFavorite.rating + '/5';

let today = new Date().toLocaleDateString();
console.log(today); // 9/17/2026
console.log(myFavorite); // click the arrow to expand it
console.log(typeof myFavorite.name); // string
console.log(typeof myFavorite.rating); // number
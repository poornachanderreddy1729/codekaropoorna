// Part 1: User Data Array Manipulation

const users = [
  {
    name: "Alice",
    age: 25,
    gender: "Female",
    location: "New York",
  },
  {
    name: "Bob",
    age: 30,
    gender: "Male",
    location: "Los Angeles",
  },
  {
    name: "Charlie",
    age: 28,
    gender: "Male",
    location: "Chicago",
  },
  {
    name: "Daisy",
    age: 22,
    gender: "Female",
    location: "San Francisco",
  },
  {
    name: "Eva",
    age: 35,
    gender: "Female",
    location: "Miami",
  },
  {
    name: "Frank",
    age: 27,
    gender: "Male",
    location: "Houston",
  },
  {
    name: "Grace",
    age: 31,
    gender: "Female",
    location: "Seattle",
  },
  {
    name: "Henry",
    age: 24,
    gender: "Male",
    location: "Boston",
  },
  {
    name: "Ivy",
    age: 29,
    gender: "Female",
    location: "Denver",
  },
  {
    name: "Jack",
    age: 32,
    gender: "Male",
    location: "Atlanta",
  },
  {
    name: "Katie",
    age: 26,
    gender: "Female",
    location: "Dallas",
  },
  {
    name: "Liam",
    age: 33,
    gender: "Male",
    location: "Phoenix",
  },
  {
    name: "Mia",
    age: 23,
    gender: "Female",
    location: "Philadelphia",
  },
  {
    name: "Noah",
    age: 34,
    gender: "Male",
    location: "San Diego",
  },
  {
    name: "Olivia",
    age: 27,
    gender: "Female",
    location: "Austin",
  },
  {
    name: "Peter",
    age: 30,
    gender: "Male",
    location: "Portland",
  },
];

function isAdult(object) {
  if (object.age >= 18) {
    return true;
  } else {
    return false;
  }
}

console.log("poorna");
console.log(isAdult(users[0]));

let adultarr = users.filter((item) => {
  if (item.age >= 28) {
    return item;
  }
});

console.log(adultarr);

function getFullName(item) {
  return item.name + item.location;
}

console.log(getFullName(users[0]));
console.log(getFullName(users[1]));
console.log(getFullName(users[2]));
console.log(getFullName(users[3]));

let userNames = users.map((item) => {
  return item.name;
});
console.log(userNames);

// Part 2: Chaining User Data Operations**

function filterByGender(object, gender) {
  if (object.gender == gender) {
    return true;
  } else {
    return false;
  }
}

console.log(filterByGender(users[1], "Male"));

// let femaleUsers = users.filter((item) => {
//   if (item.gender == "Female") {
//     return item;
//   }
// });

let femaleUsers = users.filter((item) => {
  if (filterByGender(item, "Female")) {
    return item;
  }
});
console.log(femaleUsers);

let femalefullnames = femaleUsers.map((item) => {
  return getFullName(item);
});

console.log(femalefullnames);

const movies = [
  {
    title: "The Shawshank Redemption",
    genre: "Drama",
    year: 1994,
    rating: 9.3,
  },
  {
    title: "The Godfather",
    genre: "Crime",
    year: 1972,
    rating: 9.2,
  },
  {
    title: "The Dark Knight",
    genre: "Action",
    year: 2008,
    rating: 9.0,
  },
  {
    title: "Pulp Fiction",
    genre: "Crime",
    year: 1994,
    rating: 8.9,
  },
  {
    title: "Forrest Gump",
    genre: "Drama",
    year: 1994,
    rating: 8.8,
  },
  {
    title: "Inception",
    genre: "Sci-Fi",
    year: 2010,
    rating: 8.8,
  },
  {
    title: "The Matrix",
    genre: "Action",
    year: 1999,
    rating: 8.7,
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    genre: "Fantasy",
    year: 2001,
    rating: 8.8,
  },
  {
    title: "Star Wars: Episode IV - A New Hope",
    genre: "Sci-Fi",
    year: 1977,
    rating: 8.6,
  },
  {
    title: "Gladiator",
    genre: "Action",
    year: 2000,
    rating: 8.5,
  },
];

function filterByGenre(item, genre) {
  return item.genre == genre;
}

console.log(filterByGenre(movies[4], "Drama"));

let actionMovies = movies.filter((item) => {
  if (item.genre == "Action") {
    return item;
  }
});
console.log(actionMovies);

let movieTitles = actionMovies.map((item) => {
  return item.title;
});
console.log(movieTitles);

combinedResults = [adultarr, userNames, femalefullnames, movieTitles];
console.log(combinedResults);

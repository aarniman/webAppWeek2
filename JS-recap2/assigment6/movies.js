const amount = Number(prompt("How many movies do you want to add?"));

let movies = [];

for (let i = 0; i < amount; i++) {
    const title = prompt("Enter a movie");
    const rating = prompt("Enter the rating of the movie");
    const movie = {
        title: title,
        rating: rating
    };
    movies.push(movie);
}

movies.sort((a, b) => {
    return a.rating - b.rating;
});
movies.reverse();

console.log("Movies: " + movies);

console.log("Highest rated movie: " + movies[0].title);
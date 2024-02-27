const movies = {
    action: ['Die Hard', 'John Wick', 'The Matrix'],
    comedy: ['The Hangover', 'Bridesmaids', 'Step Brothers'],
    drama: ['The Shawshank Redemption', 'The Godfather', "Schindler's List"],
    horror: ['The Shining', 'A Nightmare on Elm Street', 'The Exorcist'],


    listMoviesByGenre: function (genre) {
        const moviesInGenre = this[genre];
        if (moviesInGenre) {
            console.log(`Фільми у жанрі "${genre}":`);
            moviesInGenre.forEach(function (movie) {
                console.log(movie);
            });
        } else {
            console.log(`Жанр "${genre}" не знайдено.`);
        }
    }
};


movies.listMoviesByGenre('comedy');
movies.listMoviesByGenre('sci-fi');


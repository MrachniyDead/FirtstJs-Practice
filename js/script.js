'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10  && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Error');
}

for (let i = 0; i < 2; i++) {
    const lastFilm = prompt('Один из последних просмотренных фильмов?', '');
    const lastFilmMark = +prompt('На сколько оцените его?', '');
    if (lastFilm != null && lastFilmMark != null && lastFilm != '' && lastFilmMark != '' && lastFilm.length < 50) {
        personalMovieDB.movies[lastFilm] = lastFilmMark;
        console.log('Done');
    } else {
        i--;
        console.log('Error');
    } 
}


// for (let i = 1; i < 3; i++) {
//     let lastFilm;
//     let lastFilmMark;
//     while (!lastFilm || lastFilm.length > 50) {
//         lastFilm = prompt( i + '- Один из последних просмотренных фильмов?', '');
//     }
//     while (!lastFilmMark || lastFilm.length > 50) {
//         lastFilmMark = +prompt(i + '- На сколько оцените его?', '');
//     }
//     personalMovieDB.movies[lastFilm] = lastFilmMark;
// }


console.log(personalMovieDB);


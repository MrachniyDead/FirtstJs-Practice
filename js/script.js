'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastFilm = prompt('Один из последних просмотренных фильмов?', '');
const lastFilmMark = +prompt('На сколько оцените его?', '');

personalMovieDB.movies[lastFilm] = lastFilmMark;

const lastFilm1 = prompt('Один из последних просмотренных фильмов?', '');
const lastFilmMark1 = +prompt('На сколько оцените его?', '');

personalMovieDB.movies[lastFilm1] = lastFilmMark1;


console.log(personalMovieDB);
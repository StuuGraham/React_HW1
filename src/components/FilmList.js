import React, { Fragment } from 'react';
import Film from './Film.js';

const FilmList = ({films}) => {

    const filmArray = films.map(film => {
        return (
            <Film url={film.url}>{film.title}</Film>
        )
    });
    return(
        <Fragment>
            <h1>Upcoming Film Releases For The UK</h1>
            {filmArray}
        </Fragment>
    );
}

export default FilmList;
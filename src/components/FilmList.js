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
            {filmArray}
        </Fragment>
    );
}

export default FilmList;
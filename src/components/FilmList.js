import React, { Fragment } from 'react';
import Film from './Film.js';

const FilmList = ({films}) => {

    const filmArray = films.map(film => {
        return (
            <Fragment>
                <Film title={film.title}>{film.url}</Film>
                <br></br>
            </Fragment>
        )
    });
    return(
        <Fragment>
            {filmArray}
        </Fragment>
    );
}

export default FilmList;
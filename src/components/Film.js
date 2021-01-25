import React, { Fragment } from 'react';

const Film = ({title, children}) => {
    return(
        <Fragment>
            <a href={children}>{title}</a>
        </Fragment>
    );
}

export default Film;
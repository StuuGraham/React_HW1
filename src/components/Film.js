import React, { Fragment } from 'react';

const Film = ({title, children}) => {
    return(
        <Fragment>
            <h4 href={children}>{title}</h4>
        </Fragment>
    );
}

export default Film;
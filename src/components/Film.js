import React, { Fragment } from 'react';

const Film = ({title, children}) => {
    return(
        <Fragment>
            <h4>{children}</h4>
            <p>{title}</p>
        </Fragment>
    );
}

export default Film;
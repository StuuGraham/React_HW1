import React, { Fragment } from 'react';

const Film = ({title, children}) => {
    return(
        <Fragment>
            <h4>{title}</h4>
            <p>{children}</p>
        </Fragment>
    );
}

export default Film;
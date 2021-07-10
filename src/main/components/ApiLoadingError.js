import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ApiLoadingError(props) {
    return (
        <div className='alert alert-danger col-6 offset-3' role='alert'>
            An unexpected error occured, you should try <a className='alert-link' href='#' style={{textDecoration: 'none'}} onClick={() => props.onRefreshClick()}>refreshing&nbsp;<FontAwesomeIcon icon={'sync'} /></a>
        </div>
    );

}
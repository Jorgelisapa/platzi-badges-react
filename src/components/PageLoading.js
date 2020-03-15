import React from 'react';

import './styles/PageLoading.css'
import Loader from '../components/Loader';
import PageError from '../components/PageError';

function PageLoading () {
    return (
        <div className='PageLoading' >
            <Loader />
        </div>
    ) 
    
}

export default PageLoading;
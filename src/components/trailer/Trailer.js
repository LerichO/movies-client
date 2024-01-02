import {useParams} from 'react-router-dom';
import ReactPlater from 'react-player';
import './Trailer.css'

import React from 'react';

const Trailer = () => {
    return (
        <div className="react-player-container">
            {(key!=null)?
                <ReactPlayer control="true" playing={true} url={`https://www.youtube.com/watch?v=${key}`} width='100%' height='100%'/> : null
            }
        </div>
    )
}

export default Trailer
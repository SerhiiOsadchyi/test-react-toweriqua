import loadingImage from '../../images/loading.gif';
import React from "react";

let Preloader = (props) => {
    return <div>
        <img src={loadingImage}/>
    </div>
}

export default Preloader
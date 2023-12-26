import React from 'react';
import './Breadcrumbs.css'
import {Link} from "react-router-dom";

const Breadcrumbs = () => {
    return (
        <div>
            <div className='breadCrumbs'>
                <Link to="/" className='homeBtn'>Home</Link>
                /
                <Link to="/">OBJECT</Link>
                /
                <Link to="/">bracelet-pendant</Link>
            </div>
        </div>
    );
};

export default Breadcrumbs;

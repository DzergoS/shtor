import React from 'react';
import './Scroller.css'
import ScrollImg from "../../../../assets/frstProduct.jpg"

const Scroller = () => {

    return (
        <div className='scroller-container'>
            <h4 className="scroller-title">You also may like</h4>
            <div className="scroller-items">
                <div className="product-item">
                    <img className='product-img' src={ScrollImg} alt="product" />
                    <p className='scroller-subtitle'>OBERIH/clay collar</p>
                </div>
                <div className="product-item">
                    <img className='product-img' src={ScrollImg} alt="product" />
                    <p className='scroller-subtitle'>OBERIH/clay collar</p>
                </div>
                <div className="product-item">
                    <img className='product-img' src={ScrollImg} alt="product" />
                    <p className='scroller-subtitle'>OBERIH/clay collar</p>
                </div>
                <div className="product-item">
                    <img src={ScrollImg} alt="product" />
                    <p className='scroller-subtitle'>OBERIH/clay collar</p>
                </div>
            </div>
        </div>
    );
};

export default Scroller;

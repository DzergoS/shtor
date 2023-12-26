import React, {useRef, useState} from 'react';

import product1 from 'assets/product1.png'
import product2 from 'assets/product2.png'
import product3 from 'assets/product3.png'
import product4 from 'assets/product4.png'
import product5 from 'assets/product5.png'
import product6 from 'assets/product6.png'

import seeMore from 'assets/seeMore.png'

import './Products.css'
import {Link} from "react-router-dom";

const macap = [ {
  category: 'OBERIH',
  title: 'глиняне намисто',
  price: 2800,
  img: product1
}, {
  category: 'OBERIH',
  title: 'підвіс гребінь',
  price: 3000,
  img: product2
}, {
  category: 'OBERIH',
  title: 'автентичні сережки',
  price: 2500,
  img: product3
}, {
  category: 'NATURE',
  title: 'підвіс мушля',
  price: 2000,
  img: product4
}, {
  category: 'NATURE',
  title: 'гребінь для волосся',
  price: 2000,
  img: product5
}, {
  category: 'NATURE',
  title: 'гребінь для волосся',
  price: 2500,
  img: product6
},
]

const Products = () => {
  const rotateElementRef = useRef(null);
  const [show, setShow] = useState({
    animation: false,
    showMore: false,
  });

  const { animation, showMore } = show;

  const handleRotateClick = () => {
    setShow({
      animation: true,
      showMore: false,
    })
    if (rotateElementRef.current) {
      rotateElementRef.current.classList.add('rotate-270');
      setTimeout(() => {
        rotateElementRef.current.classList.add('rotate-ended-270');
      }, 1600)
    }
    setTimeout(() => setShow({
      animation: true,
      showMore: true,
    }), 2200)
  };

  const handleMouseLeave = () => {
    if (rotateElementRef.current && animation) {
      rotateElementRef.current.classList.add('rotate-360');
    }
  };

  return (
    <div className="product-list">
      {macap.map((product, index) => (
        <Link to={'/product'} className="product-list__item" key={index}>
          <img src={product.img} alt={'product-list__item-image'}/>
          <div className="product-list__item-info">
            <h3>{product.category}/{product.title}</h3>
            <p>₴{product.price}</p>
          </div>
        </Link>
      ))}
      {showMore
        ? macap.map((product, index) => (
          <Link to={'/product'} className="product-list__item" key={index}>
            <img src={product.img} alt={'product-list__item-image'}/>
            <div className="product-list__item-info">
              <h3>{product.category}/{product.title}</h3>
              <p>₴{product.price}</p>
            </div>
          </Link>
        ))
        : ''
      }
      <div
          className="see-more"
          onClick={handleRotateClick}
          onMouseLeave={handleMouseLeave}
      >
        <img
            src={seeMore}
            ref={rotateElementRef}
            alt="img-button"
        />
        See More
      </div>
    </div>
  );
};

export default Products;

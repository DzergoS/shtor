import React, {useState} from 'react';

import product1 from '../../../../assets/product1.png'
import product2 from '../../../../assets/product2.png'
import product3 from '../../../../assets/product3.png'
import product4 from '../../../../assets/product4.png'
import product5 from '../../../../assets/product5.png'
import product6 from '../../../../assets/product6.png'

import seeMore from '../../../../assets/seeMore.png'

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
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="products">
      {macap.map((product, index) => (
        <Link to={'/product'} className="product-item" key={index}>
          <img src={product.img} alt={'product-image'}/>
          <h3>{product.category}/{product.title}</h3>
          <p>₴{product.price}</p>
        </Link>
      ))}
      {showMore
        ? macap.map((product, index) => (
          <Link to={'/product'} className="product-item" key={index}>
            <img src={product.img} alt={'product-image'}/>
            <h3>{product.category}/{product.title}</h3>
            <p>₴{product.price}</p>
          </Link>
        ))
        : ''
      }
      <div className='see-more' onClick={() => setShowMore(!showMore)}  >
        <img src={seeMore} alt="img-button" />
        See More
      </div>
    </div>
  );
};

export default Products;

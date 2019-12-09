import React, { useContext, useEffect, useState } from 'react';
import { store } from '../store/store';
import './productlist.css';
import { useParams } from 'react-router-dom';
export default function Productlist() {
  const { state, dispatch } = useContext(store);
  const { data, selectedCategory: category, cart } = state;
  const [products, setproducts] = useState(data);

  const { name } = useParams();

  useEffect(() => {
    if (
      name !== 'All' &&
      name !== 'Watersports' &&
      name !== 'Soccer' &&
      name !== 'Chess'
    )
      dispatch({ type: 'Change Category', payload: 'All' });
    else dispatch({ type: 'Change Category', payload: name });
  }, [name, dispatch]);

  useEffect(() => {
    if (category === 'All') setproducts(data);
    else setproducts(data.filter(d => d.category === category));
  }, [data, category]);

  const add = product => {
    const index = cart.findIndex(c => c.id === product.id);

    if (index === -1) {
      let newproduct = { ...product, count: 1 };
      dispatch({ type: 'ADD', payload: newproduct });
      console.log(newproduct);
    } else {
      let newproduct = { ...product, count: cart[index].count + 1 };
      dispatch({ type: 'Increment Count', payload: newproduct });
    }
  };

  return (
    <div className="col-md-9">
      <div className="row main">
        {products.map(p => {
          return (
            <div className="col-md-4" key={p.id}>
              <div className="card mycard">
                <img
                  className="card-img-top"
                  src={`./${p.image}`}
                  alt={p.name}
                  style={{ width: '257px' }}
                />
                <hr />
                <div className="card-body">
                  <h4 className="card-title">{p.name}</h4>
                  <p className="card-text">{p.description}</p>
                  <button
                    type="button"
                    className="btn btn-outline-success"
                    onClick={() => add(p)}
                  >
                    Add to Cart
                  </button>
                  <span
                    className="badge badge-pill badge-primary"
                    style={{ marginLeft: '20px', fontSize: '1rem' }}
                  >
                    ₨{p.price.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

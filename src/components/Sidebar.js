import React, { useContext } from 'react';
import { store } from '../store/store';
import './header.css';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  const { state, dispatch } = useContext(store);
  const { category, selectedCategory } = state;

  return (
    
        <div className="col-md-3">
          <div>
            <h1
              className="lead"
              style={{ textAlign: 'center', fontSize: '2.5rem' }}
            >
              Categories
            </h1>
            {category.map(c => (
              <React.Fragment key={c}>
                <Link to={c === 'All' ? '/' : `/products/${c}`}>
                  <button
                    type="button"
                    className="btn btn-outline-secondary m-2 mybtn"
                    style={
                      selectedCategory === c
                        ? {
                            width: '96%',
                            backgroundColor: '#474747',
                            color: 'white'
                          }
                        : { width: '96%' }
                    }
                    onClick={() =>
                      dispatch({ type: 'Change Category', payload: c })
                    }
                  >
                    {c}
                  </button>
                </Link>
                <br />
              </React.Fragment>
            ))}
          </div>
        </div>
     
  );
}

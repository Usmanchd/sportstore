import React, { useContext } from 'react';
import { store } from '../store/store';
import { Link } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { cart as cartfav } from 'react-icons-kit/icomoon/cart';

export default function Header() {
  const { state } = useContext(store);
  const { cart } = state;

  // const showcart = () => {
  //   let total = cart.reduce((amount, c) => (amount += c.count * c.price), 0);
  //   alert(
  //     cart.map(
  //       c =>
  //         JSON.stringify(c) +
  //         '\n----------------------------------------------------\n'
  //     ) +
  //       'Total Cost : ' +
  //       total
  //   );
  // };

  return (
    <nav className="navbar fixed-top navbar-dark bg-dark">
      <Link to="/">
        <p className="navbar-brand" style={{ cursor: 'pointer' }}>
          Sports Store
        </p>
      </Link>
      <Link to="/cart">
        <p
          // onClick={showcart}
          style={{
            cursor: 'pointer',
            color: 'white'
          }}
        >
          <Icon icon={cartfav} size={24} style={{ marginRight: '10px' }}></Icon>
          ({cart.length})
        </p>
      </Link>
    </nav>
  );
}

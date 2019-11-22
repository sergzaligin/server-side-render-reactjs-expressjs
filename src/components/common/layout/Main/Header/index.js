import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

export default () => {
  return(
    <header className="header">
      <div className="container" >
        <Link to="/">Header</Link>
      </div>
    </header>
  );
};

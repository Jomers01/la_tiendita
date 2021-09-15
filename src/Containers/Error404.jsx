import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Error404.css';

function Error404 () {
  return (
    <div className="otherDiv">
      <p className="p">
        Esta página no existe. <Link exact to="/"> Volver </Link>
      </p>
    </div>
  )
}

export default Error404;
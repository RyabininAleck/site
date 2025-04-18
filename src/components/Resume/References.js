import React from 'react';
import { Link } from 'react-router-dom';

const References = () => (
  <div className="references">
    <div className="link-to" id="рекомендации" />
    <div className="title">
      <Link to="/contact">
        {/* <h3>Ссылки предоставляются по запросу</h3> */}
      </Link>
    </div>
  </div>
);

export default References;

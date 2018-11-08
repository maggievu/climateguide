import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ active, children, oClick }) => {
  if (active) {
    return <span>{children}</span>;
  }

  return (
    <button onClick={() => {
        oClick();
      }}
    >
      {children}
    </button>
  )
};

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  oClick: PropTypes.func.isRequired
};

export default Link

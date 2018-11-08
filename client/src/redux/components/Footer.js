import React from 'react';
import FLink from '../containers/FilterLink';
import { VisibilityFilters } from '../actions';

const Footer = () => (
  <p>
    Show: <FLink filter={VisibilityFilters.SHOW_ALL}>All</FLink>
    ,
    <FLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FLink>
    ,
    <FLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FLink>
  </p>
);

export default Footer

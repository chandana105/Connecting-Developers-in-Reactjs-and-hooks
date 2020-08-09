import React , { Fragment } from 'react';
import spinnerr from './spinnerr.png';

export default () => (
  <Fragment>
    <img
      src = {spinnerr}
      style= {{width : '200px', margin : 'auto', display : 'block'}}
      alt = 'Loading...'
    />  
  </Fragment>
);
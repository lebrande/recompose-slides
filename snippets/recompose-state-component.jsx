import React, { Fragment } from 'react';
import { withState } from 'recompose';

const Post = ({ visible, setVisible }) => (
  <Fragment>
    <h2>I'm stateless component</h2>
    <button onClick={() => setVisible(!visible)}>
      Toggle content
    </button>
    {visible && <p>It's really smashing!</p>}
  </Fragment>
);

export default withState('visible', 'setVisible', false)(Post);
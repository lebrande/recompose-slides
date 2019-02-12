import React, { Component, Fragment } from 'react';

class Post extends Component {
  state = { showContent: false };

  toggleContent = () => {
    this.setState({
      showContent: !this.state.showContent,
    });
  }

  render () {
    return (
      <Fragment>
        <h2>I'm state component</h2>
        <button onClick={this.toggleContent}>
          Toggle content
        </button>
        {this.state.showContent && 
          <p>You need to write a lot of code
          to create something like that.</p>}
      </Fragment>
    );
  }
}

export default Post;
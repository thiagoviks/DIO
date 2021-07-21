import React, { Component } from 'react';

class Twitter extends Component {
  /*
    Learning about Hooks, more info on 
    https://reactjs.org/docs/hooks-intro.html
  */

  state = {
    tweet: 'title',
  };
  componentDidMount() {
    const { posts, loading } = this.props;
    console.log('componentDidMount', posts);
    console.log('componentDidMount:loading', loading);
  }

  componentDidUpdate(prevProps) {
    const { loading } = this.props;
    if (this.props.loading !== prevProps.loading) {
      console.log('componentDidUpdate:loading', loading);
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount were removed');
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.tweet !== nextState.tweet;
  }

  tweet = () => {
    this.setState({
      tweet: true,
    });
  };
  render() {
    const { posts } = this.props;
    console.log('render', posts);
    return (
      <div>
        <button onClick={this.tweet}>Re-render</button>
        <br />
        tests
      </div>
    );
  }
}

export default Twitter;

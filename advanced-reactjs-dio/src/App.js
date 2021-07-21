import React, { Component } from 'react';
import Twitter from './Twitter';

class App extends Component {
  state = {
    loading: false,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: true,
      });
    }, 3000);
  }
  render() {
    const posts = [
      {
        title: 'xpto',
        description: 'foo',
      },
      {
        title: 'xpto2',
        description: 'bar',
      },
    ];
    return <Twitter posts={posts} loading={this.state.loading} />;
  }
}

export default App;

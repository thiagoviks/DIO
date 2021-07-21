import React, { Component } from 'react';
import Twitter from './Twitter';

class App extends Component {
  state = {
    loading: false,
    active: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: true,
      });
    }, 3000);
  }

  onRemove = () => {
    this.setState({
      active: false,
    });
  };

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

    return (
      <div>
        <button onClick={this.onRemove}>Remove Component</button>
        {this.state.active && (
          <Twitter posts={posts} loading={this.state.loading} />
        )}
      </div>
    );
  }
}

export default App;

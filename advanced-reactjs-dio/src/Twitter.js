/*
    Learning about Hooks, more info on 
    https://reactjs.org/docs/hooks-intro.html
  */

import React, { useEffect, useState, memo } from 'react';

const areEqual = (prevProps, nextProps) => {
  return prevProps.loading === nextProps.loading;
};

function Twitter(props) {
  const { loading } = props;
  const [tweet, setTweet] = useState('title');
  //componentDidMount
  useEffect(() => {
    const { posts, loading } = props;
    console.log('componentDidMount', posts);
    console.log('componentDidMount:loading', loading);
  }, []);

  // componentDidUpdate
  useEffect(() => {
    console.log('componentDidUpdate');
  }, [loading]);

  // componentWillUnmount
  useEffect(() => {
    return () => {
      console.log('componentWillUnmount were removed');
    };
  }, []);
  /* 
    componentDidUpdate = (prevProps) => {
    const { loading } = props;
    if (props.loading !== prevProps.loading) {
      console.log('componentDidUpdate:loading', loading);
    }
  };

  componentWillUnmount = () => {
    console.log('componentWillUnmount were removed');
  };

  shouldComponentUpdate = (nextProps, nextState) => {
    return state.tweet !== nextState.tweet;
  }; */

  const handleTweet = () => {
    setTweet('Tweet updated');
  };

  console.log('Tweet Updated: ', tweet);

  return (
    <div>
      <button onClick={handleTweet}>Re-render</button>
      <br />
      tests
    </div>
  );
}

export default memo(Twitter, areEqual);

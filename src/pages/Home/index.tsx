import * as React from 'react';

const Home = () => {
  const sth = () => {
    // console.log('sth');
  };
  return (
    <div>
      <div>hello, this is HomePage</div>
      <div>
        <button onClick={sth}>sth</button>
      </div>
    </div>
  );
};

export default Home;

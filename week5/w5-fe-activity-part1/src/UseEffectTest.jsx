import { useEffect, useState } from 'react';

const UseEffectTest = () => {
  const [toggleOne, setToggleOne] = useState(false);
  const [toggleTwo, setToggleTwo] = useState(false);

  useEffect(() => {
    console.log('UseEffect1 Ran');
  }, []);

  useEffect(() => {
    console.log('UseEffect2 Ran');

    if (toggleTwo) {
      console.log('toggleTwo slice of state is true so this code runs');
    }
  }, [toggleTwo]);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('Interval is running');
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log('Interval is cleared');
    };
  }, []);

  return (
    <div>
      {console.log('rendered or re-rendered')}

      <h1>UseEffectTest Component</h1>

      <button onClick={() => setToggleOne(!toggleOne)}>
        ToggleOne
      </button>

      <button onClick={() => setToggleTwo(!toggleTwo)}>
        ToggleTwo
      </button>
    </div>
  );
};

export default UseEffectTest;
import React, {useState} from "react";
const App = ({}) => {
  const [count, setCount] = useState(0);
  const changeCount = (msg) => {
    setCount(msg);
  }
  return (
    <div>
      <h1>{count}</h1>
      <Counter value={count} changeCount={changeCount}/>
      <Number value={count} changeCount={changeCount}/>
    </div>
  );
}

function Counter(props) {
  const { value, changeCount } = props;
  const reCount = (msg) => {
      changeCount(msg);
  };
  return (
      <div>counter component：
          <h1>{value}</h1>
          <button onClick={() => reCount(value + 1)}>Increment</button>
      </div>
  );
}

const Number = (props) => {
  const { value, changeCount } = props;
  const reCount = (msg) => {
      changeCount(msg);
  };
  return (
      <div>number component：
          <h1>{value}</h1>
          <button onClick={() => reCount(value + 1)}>Increment</button>
      </div>
  );
};
export default App;

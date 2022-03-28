import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {increment, decrement, signin} from './redux/actions';

const App = ({}) => {
  const [count, setCount] = useState(0);
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.logged);
  const dispatch = useDispatch();

  const changeCount = (msg) => {
    setCount(msg);
  }
  return (
    <div>
      <h1>{count}</h1>
      <h1>Counter {JSON.stringify(counter)}</h1>
      {isLogged && <h3>Valuable Information I shouldn't see</h3>}
      <button onClick={() => dispatch(increment())}>+</button> 
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(signin())}>LOG_IN</button>
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

import './App.css';
import React, { useState } from 'react';

/*
State Hook (useState)
this.state <=> useState
*/

function App() {
  // 여러 stste 변수 선언 가능. Hook을 여러 개 사용할 수 있다. 
  // (대신 rendering 될 때 useState가 사용된 순서대로 실행된다.)
  // 함수 comp.는 this를 가질수 없으므로 useState를 사용해서 직접 comp. 호출&초기화.
  const [count, setCount] = useState(0);
  // const [age, setAge] = useState(36);
  // const [todos, setTodos] = useState([{text: 'Learn Hooks'}]);

  return (
    <div className="App">
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}




/* 위 예시를 class로 구현을 했다면,
constructor 안에 this.state 를 { count: 0 }으로 설정함으로 초기화
return 으로 { this.state.count } 를 hook에서는 걍 count로 사용

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({count:this.state.count +1 })}>
          Click me
        </button>
      </div>
    )
  }
}
*/

export default App;


/*
Effect Hook (useEffect) 함수 comp. 내에서 side effects를 수행할수 있게 해준다.
componentDidMount, componentDidUpdate, componentWillUnmount <=> useEffect
*/
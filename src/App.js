import "./App.css";
import Header from "./components/Header.js";
import { Footer } from "./components/Header";
import { useState } from "react";
// import Counter from './counter'
import Person from './person';

function App() {
  const persons = [
    { name: "sinan", age: 21 },
    { name: "mohammed", age: 21 },
  ];
  return (
    <div className="App">
      {
        // persons.map((obj, index) => {
        //   return (
        //     // <Person key={index} name={obj.name} age={obj.age} />
        //     <Person key={index} {...obj} />
        //   );
        // })
        persons.map((obj,index)=> (<Person key={index} {...obj} />)
        )
      }
    </div>
  );
}

export default App;

 {/* function App() {
  const name1 = "sinan";
  const [count,setCount] = useState(0)
  const addCount = () => {
    setCount(count +1)
  };
  const obj = {
    title:"firstCounter",
    count,
    place:"anamangad"
  }
  return (
    <div>
      <Header name1={name1}></Header>
      <br />
      <button onClick={addCount}>Add</button>
      <Counter {...obj} ></Counter>
      <Counter title="secondCounter" count={count}></Counter>

      <Footer></Footer>
    </div>
  );
} */}

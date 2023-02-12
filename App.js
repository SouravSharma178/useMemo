// useMemo is used to convert and confine a heavy code to a state such that it does not re-render(perform all the calculations) each time other components render and put it into the memory to memorize it such that we only re-render the component on each time that piece of code (function call is made).So using useMemo we are basically converting a heavy piece of code into a code that is stateful
import './App.css';
import Header from './Components/Header';
import { useState,useMemo} from 'react';

function App() {
console.log("inside")
const [count,setCount] = useState(0);
const [name,setName] = useState('');

const expensiveCalculation =(num)=>{
  for(let i=0;i<100;i++){ }
  return num;
}

const calculation = useMemo(()=>{
  expensiveCalculation(count)
},[name])

console.log(calculation)

  return (
    <div className="App">
     <>
     <Header/>
     <button onClick={()=>setCount(count+1)}>Count</button>
     <h1>count:{count}</h1>
     <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
     <h1>Name{name}</h1>
     </>
    </div>
  );

}

export default App;

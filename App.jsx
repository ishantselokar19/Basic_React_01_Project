import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'


function App() {
  let [count , setCount] = useState(15);

  
const AddValue = ()=>{
  if(count != 20)
  setCount(count + 1);
}
const RemoveValue = () =>{
  if(count != 0)
  setCount(count - 1);
}
  return (
    <>
    
      <h1>Chai aur React</h1>
      <h3>counter value:{count}</h3>
      <button onClick={AddValue}>Add value {count}</button>
      <br />
      <button onClick={RemoveValue}>Remove value {count}</button>
      <p>Footer:{count}</p>
    </>
  );
}

export default App

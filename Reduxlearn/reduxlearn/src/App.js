 
import './App.css';
import {useDispatch,useSelector} from "react-redux";
import {multiply,add} from "./Feature/counter/counterSlice"
import { useState } from 'react';
import PostList from './Feature/posts/PostList';


function App() {
    const [value,setValue]=useState(0)
    const [valuetwo,setValuetwo]=useState(0);
 const result= useSelector((state)=>state.counter.value)
 const data = Number(result)
 console.log("dara",data)
 const dispatch = useDispatch()

const handleclickmultiply=() =>{
  dispatch(multiply({value:Number(value),valuetwo:Number(valuetwo)}))
  setValue("")
  setValuetwo("")
}
const handleclickadd=() =>{
  dispatch(add({value:Number(value),valuetwo:Number(valuetwo)}))
  setValue("")
  setValuetwo("")

}
  return (
    <div className="App">
<input type="number" placeholder='enter a value' value={value} onChange={(e)=>setValue(e.target.value)}/>
<input type="number" placeholder='enter a value' value={valuetwo} onChange={(e)=>setValuetwo(e.target.value)}/>
<button onClick={handleclickmultiply} >Multiply</button>
<button  onClick={handleclickadd}>Add</button>
<div>Result value : {data}</div>
  <PostList/>  
    </div>
  );
}

export default App;

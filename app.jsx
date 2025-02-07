mport React from "react";
import { useState } from "react";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');
//logic
let callbmi =(e) =>{
  event.preventDefault();
  if (weight ===0 || height ===0 ){
    alert ('please enter a valid signs')
  }
    else{
      let bmi = (weight / (height*height)*703)
      setBmi(bmi.toFixed(1))
    //
    if(bmi <25 ){
      setMessage ('you are  bhoutt patleeee')
    }else if(bmi>=25 && bmi <30){
      setMessage('bhaii tu fittt hhhh')
    }else {
      setMessage('motiyeeee')
    }

    
  }
}
//reload

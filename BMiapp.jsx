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
  let  reload =()=> {
  window.location.reload()
}










  return (
    <div className='App'>
      <div className='container'>
        <h2>BMI CALCULATOR</h2>
        <form onSubmit ={callbmi}>
          <div>
            <label> Weight </label>
            <input type="text" placeholder='enter weight' value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label> Height </label>
            <input type="text" placeholder='enter height' value={height}
            onChange={(e) => setHeight(e.target.value)} />
          </div>
          <div>
            <button className='btn' type='submit'>submit</button>
            <button className='btn-btn-outline' onClick={reload} type='submit'>Reload</button>
          </div>

          <div className='center'>
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>

          </div>
        </form>
      </div>

    </div>
  )
}

export default App

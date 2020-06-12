import React, {useEffect,useState} from 'react';


function App() {

  const [temperature, setTemperature] = useState(0);
  const [message,setMessage] = useState("")
  const [color, setColor]  = useState("#bbdefb")

  useEffect(()=>{
    let caseTemperature
    if(temperature<0 && temperature>=-50){
      caseTemperature = 1;
    }else if(temperature>=0 && temperature<11){
      caseTemperature = 2;
    }else if(temperature>=11 && temperature<=30){
      caseTemperature = 3;
    }else if(temperature>=31 && temperature<=40){
        caseTemperature = 4;
    }else if(temperature>=41 && temperature<=50){
      caseTemperature = 5;
    }else{
      caseTemperature = 6;
    }
    switch(caseTemperature){
      case 1:setMessage(`It’s super cold today. Be sure you dressed well!`);setColor('#1a237e'); break;
      case 2:setMessage("It’s windy outside, but we are sure you will enjoy your day!");setColor('#bbdefb'); break;
      case 3:setMessage(`It’s time for outdoor walking!`);setColor('#eeff41');break;
      case 4:setMessage("It's so hot outside!");setColor('#ef6c00');break;
      case 5:setMessage(`Welcome to hell!!`);setColor('#dd2c00');break;
      case 6:setMessage(`Please re-check results in 5 mins!`);setColor('');break;
      default : setMessage("It’s super cold today. Be sure you dressed well!");setColor('#bbdefb');break;
    }
  },[temperature])

  return (
    <div className="container" style={{marginTop:'10rem'}}>
      <form action="#">
          <h5>The Temperature = {temperature}°C</h5>
          <p className="range-field">
          <input onChange={e=>setTemperature(e.target.value)} value={temperature} type="range" id="temp" min="-60" max="70" />
          </p>
          <h3 style={{color:`${color}`}}>{message}</h3>
      </form>
    </div>
  );
}

export default App;

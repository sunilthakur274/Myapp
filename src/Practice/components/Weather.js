import {useEffect, useState} from 'react'
import axios from 'axios'
export default function Weather()
{
  const unit = "metric";

  const[input,setInput] = useState('')
  const [getData,setGetData] = useState({})

  const apiKey = "7baf326eb291c2e30faf7873305e31b4";
  const APi = ` https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&units=${unit} `

  const Data = async() =>
  {
      const result= await fetch(APi);
      const response = await result.json();
      return setGetData(response)
  }
 

  const handleChange = (event) =>
  {
      setInput(event.target.value)
  }

  const submit = (event) =>
  {
      event.preventDefault();
      Data();
      setGetData(getData)
      setInput('')
      console.log(getData)
  }
    
  return(
  <>
    <form onSubmit={submit}>

      <input type='text' placeholder='Enter city' value={input} onChange={handleChange}/>

      <button type='submit'>Submit</button><br/><br/>

      {getData.name}

      {getData.id && getData.name && getData.main.temp}<br/>{getData.id}<br/>
      {getData.pressure
}

    
    </form>
  
  </>)
}
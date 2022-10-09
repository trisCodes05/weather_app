import React from 'react'
import axios from 'axios'
import '../App.css';
import { useState } from 'react';


function Home() {
    const [data, setData] =useState({})
    const [location,setLocation]=useState('')
    const  url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=4115ae88e0ba2e58c29bd8968de24a8d`

    const searchLocation =(event) =>{
        if(event.key === 'Enter'){
          axios.get(url).then((response)=>{
            setData(response.data)
            console.log('res',response.data)
          })
          setLocation('')
        }
      }
  return (
     <div className="App">
      <div className="search">
        <input
        value={location}
        onChange={event => setLocation(event.target.value)}
        placeholder="Enter location"
        onKeyPress={searchLocation}
        type="text"/>
      </div>
     <div className="container">
      <div className="top">
        <div className="location">
          <p>{data.name}</p>
        </div>
        <div className="temp">
          {data.main ?  <h1>{data.main.temp.toFixed()}°F</h1> : null}
        </div>
        <div className="description">
          {data.weather ? <p>{data.weather[0].main}</p>:null}
        </div>
      </div>

      {data.name !== undefined && 
      <div className="bottom">
        <div className="feels">
          {data.main ?<p className='bold'>{data.main.feels_like.toFixed()}°F</p>:null }
          <p>Feels like</p>
        </div>
        <div className="humidity">
          {data.main ?  <p className='bold'>{data.main.humidity}%</p> :null}
          <p>Humidity</p>
        </div>
        <div className="wind">
          {data.wind ?<p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
          <p>Wind speed</p>
        </div>
      </div>
      }
     </div>
      
    </div>
  )
}

export default Home

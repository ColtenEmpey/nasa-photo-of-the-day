import React, {useState, useEffect} from "react";
import Header from "./Header"
import Photo from "./Photo"
import Title from "./Title"
import axios  from "axios";
import Information from "./Information"
import "./App.css";

//fetching data from NASA API
//https://api.nasa.gov/planetary/apod?api_key=P2zARKyxFJodh3SNBw2dVdWwVW6lxE4gaBZPLIV4

function App() {
  const [photoURL, setPhotoURL] = useState("")
  const [information, setInformation] = useState("")
  const [title, setTitle] = useState("")
  //add use effect 
  useEffect(() =>{
      axios.get("https://api.nasa.gov/planetary/apod?api_key=P2zARKyxFJodh3SNBw2dVdWwVW6lxE4gaBZPLIV4")
      .then( res =>{
        setTitle(res.data.title)
        setPhotoURL(res.data.hdurl)
        setInformation(res.data.explanation)
      })
      .catch(err => {console.error(err)})
  })
  return (
    
    <div className="App">
      <Header/>
      <div>
        <Photo photoURL={photoURL}/>
        <Title title={title}/>
        <Information information={information}/>
      </div>
    </div>
  );
}

export default App;




// date: "2022-03-27"
// explanation: "Why would the surface of Titan light up with a blinding flash? The reason: a sunglint from liquid seas.  Saturn's moon Titan has numerous smooth lakes of methane that, when the angle is right, reflect sunlight as if they were mirrors.  Pictured here in false-color, the robotic Cassini spacecraft that orbited Saturn from 2004 to 2017 imaged the cloud-covered Titan in 2014 in different bands of cloud-piercing infrared light.  This specular reflection was so bright it saturated one of Cassini's infrared cameras. Although the sunglint was annoying -- it was also useful.  The reflecting regions confirm that northern Titan houses a wide and complex array of seas with a geometry that indicates periods of significant evaporation.  During its numerous passes of our Solar System's most mysterious moon, Cassini has revealed Titan to be a world with active weather -- including times when it rains a liquefied version of natural gas."
// hdurl: "https://apod.nasa.gov/apod/image/2203/TitanGlint_cassini_2002.jpg"
// media_type: "image"
// service_version: "v1"
// title: "Titan Seas Reflect Sunlight"
// url: "https://apod.nasa.gov/apod/image/2203/TitanGlint_cassini_960.jpg"
// [[Prototype]]: Object
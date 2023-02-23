import axios from "axios";
import { useState, useEffect } from "react";
import Card from './components/Card.component'
import edward from './Images/EdwardElric.jpg'
import killua from './Images/KilluaZoldyck.avif'
import roronoa from './Images/Roronoa_Zoro1.webp'
import kz from './Images/KZ.webp'
import saturo from './Images/SaturoGojo.avif'


import './App.css';

function App() {

  const [image, setImage] = useState(null);
  const images = [edward, killua, roronoa, kz, saturo];

  useEffect(()=>{
    const item = images[Math.floor(Math.random()*images.length)];
    setImage(item);
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <div className='container'>

          <h3>Guess the Anime</h3>

     
         <Card img={image}></Card>
      

        </div>
      </header>
    </div>
  );
}

export default App;

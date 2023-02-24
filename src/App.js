import { useState } from "react";
import Card from './components/Card.component'
import Button from './components/Button.component'

import edward from './Images/edwardElric.PNG'
import l from './Images/L.PNG'
import zoro from './Images/RoronoaZoro.jpg'
import killua from './Images/killuaXoldyck.PNG'
import saturo from './Images/saturoGojo.PNG'


import smiling from './Images/icons8-smiling-48.png'
import sad from './Images/icons8-sad-60.png'

import './App.css';

function App() {

  const [image, setImage] = useState(null);
  const images = [edward, l, killua, zoro, saturo ];
  const [item, setItem] = useState(null);

  const handleCorrect = () => {
    const length = images.length;
    const random = Math.floor(Math.random() * length);
    setItem(images[random]);
    setImage(item);
    console.log('correct', random);
  }
  const handleConfused = () => {
    const length = images.length;
    const random = Math.floor(Math.random() * length);
    setItem(images[random]);
    setImage(item);
    console.log('confused', random);

  }

  return (
    <div className="App">
      <header className="App-header">
        <div className='container'>

          <h3>Guess the Anime</h3>
          <div className="iconsContainer">
            <img src={smiling} alt=''></img>
            <img src={sad} alt=''></img>
          </div>
          <Card className='AnimeCharImage' img={image}></Card>
          <h4>Title</h4>
          <div className='btnContainer'>
            <Button handleClick={handleConfused} title='Confused..'></Button>
            <Button handleClick={handleCorrect} title='Correct'></Button>
          </div>

        </div>
      </header>
    </div>
  );
}

export default App;

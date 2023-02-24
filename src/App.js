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
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const anime = [
    {img: edward, from: 'Fullmetal Alchemist'},
    {img: l, from: 'Death Note'},
    {img: killua, from: 'Hunter X Hunter'},
    {img: zoro, from: 'One Piece'},
    {img: saturo, from: 'jujutsu kaisen'}];
  
  const [prevIndex, setPrevIndex] = useState(-1);

  const [startGame, setStartGame] = useState(false);

  const randomUnique = () => {
    const length = anime.length;
    let random = Math.floor(Math.random() * length);
    while (random === prevIndex) {
      random = Math.floor(Math.random() * length);
    }
    setPrevIndex(random);
    return random;
  }

  const changeImg = () => {
    const random = randomUnique();
    setImage(anime[random].img);
    generateTitle();
    console.log('random', random);
  }
  const handleCorrect = () => {
    changeImg();
  }

  const handleConfused = () => {
    changeImg();
  }

  const handleStartGame = () => {
    changeImg();
    setStartGame(true);
  }

  const generateTitle = () => {
    const random = randomUnique();
    setTitle(anime[random].from);
    console.log('random', random);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className='container'>

          <h3>Guess the Anime</h3>
          {startGame ? <><div className="iconsContainer">
            <img src={smiling} alt=''></img>
            <img src={sad} alt=''></img>
          </div>
            <Card className='AnimeCharImage' img={image}></Card>
            <h4>{title}</h4>
            <div className='btnContainer'>
              <Button handleClick={handleConfused} title='Confused..'></Button>
              <Button handleClick={handleCorrect} title='Correct'></Button>
            </div></>
            : <div className="btnContainer"><Button title='Start Game' handleClick={handleStartGame}></Button></div>}
        </div>
      </header>
    </div>
  );
}

export default App;

import { useState, useEffect, useCallback, useMemo } from "react";
import Card from './components/Card.component';
import Button from './components/Button.component';

import edward from './Images/edwardElric.PNG';
import l from './Images/L.PNG';
import zoro from './Images/RoronoaZoro.jpg';
import killua from './Images/killuaXoldyck.PNG';
import saturo from './Images/saturoGojo.PNG';

import smiling from './Images/icons8-smiling-48.png';
import sad from './Images/icons8-sad-60.png';

import './App.css';

function App() {

  const [title, setTitle] = useState('');
  const [currentTitle, setCurrentTitle] = useState('');
  const [image, setCurrentImage] = useState(null);
  const [prevIndex, setPrevIndex] = useState(-1);
  const [startGame, setStartGame] = useState(false);
  const [showSmiley, setShowSmiley] = useState(false);
  const [showSad, setShowSad] = useState(false);
  const [score, setScore] = useState(0);
  const anime = useMemo(() =>
    [
      { img: edward, from: 'Fullmetal Alchemist' },
      { img: l, from: 'Death Note' },
      { img: killua, from: 'Hunter X Hunter' },
      { img: zoro, from: 'One Piece' },
      { img: saturo, from: 'jujutsu kaisen' }], []);

  const randomUnique = useCallback(() => {
    const length = anime.length;
    let random = Math.floor(Math.random() * length);
    while (random === prevIndex) {
      random = Math.floor(Math.random() * length);
    }
    setPrevIndex(random);
    return random;
  }, [anime, prevIndex]);

  const checkAnswer = useCallback((choice) => {
    if (currentTitle === title) {
      if (choice === "correct") {
        console.log('GOOOOOD')
        setShowSmiley(true);
        setShowSad(false);
        setScore(prevState => prevState + 1);
      } else if (choice === "confused") {
        console.log('NOT')
        setShowSmiley(false);
        setShowSad(true);
      }
    } else {
      if (choice === "confused") {
        console.log('GOOOOOD')
        setShowSmiley(true);
        setShowSad(false);
        setScore(prevState => prevState + 1)
      } else if (choice === "correct") {
        console.log('NOT')
        setShowSmiley(false);
        setShowSad(true);
      }
    }
  }, [currentTitle, title]);

  useEffect(() => {
    if (showSmiley) {
      setTimeout(() => {
        setShowSmiley(false);
      }, 2000);
    }
  }, [showSmiley]);

  const changeImg = useCallback(() => {

    if (score < 10) {
      const random = randomUnique();
      const randomTile = randomUnique();
      const animeData = anime[random];
      setCurrentImage(animeData.img);
      setCurrentTitle(animeData.from);
      setTitle(anime[randomTile].from);
      const result = animeData;
      return result;
    } else {
      console.log('Game Over!');
      setScore(0);
    }

  }, [anime, randomUnique, score]);

  const handleCorrect = useCallback(() => {
    checkAnswer('correct');
    changeImg();
  }, [changeImg, checkAnswer]);

  const handleConfused = useCallback(() => {
    checkAnswer('confused');
    changeImg();
  }, [changeImg, checkAnswer]);

  const handleStartGame = useCallback(() => {
    changeImg();
    setStartGame(true);
  }, [changeImg]);

  return (
    <div className="App">
      <header className="App-header">
        <div className='container'>

          <h3>Guess the Anime</h3>
          <h4>Score: {score}</h4>
          {startGame && score < 10 ? <><div className="iconsContainer">

            {showSmiley && <img src={smiling} alt='' />}
            {showSad && <img src={sad} alt='' />}
          </div>
            <Card className='AnimeCharImage' img={image}></Card>
            <h4>{title}</h4>
            <div className='btnContainer'>
              <Button handleClick={() => handleConfused()} title='Confused..'></Button>
              <Button handleClick={() => handleCorrect()} title='Correct'></Button>
            </div></>
            : <div className="btnContainer"><Button title='Start Game' handleClick={() => handleStartGame()}></Button></div>}

        </div>
      </header>
    </div>
  );
}

export default App;


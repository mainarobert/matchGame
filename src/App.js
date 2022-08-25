import { useEffect, useState } from 'react';
import './App.css';
import SingleImage from './components/SingleImage';

const images = [
  {"src": "/img/helmet-1.png", matched: false},
  {"src": "/img/potion-1.png", matched: false},
  {"src": "/img/ring-1.png", matched: false},
  {"src": "/img/scroll-1.png", matched: false},
  {"src": "/img/shield-1.png", matched: false},
  {"src": "/img/sword-1.png", matched: false}
]


function App() {

  const [image, setImage] = useState([])
  const [turns, setTurns] = useState(0)
  const[choice1, setChoice1] = useState(null)
  const [choice2, setChoice2] = useState(null)
  const[disabled, setDisabled] = useState(false)

  // shuffle images
  const shuffleImages = () => {
    const imagesShuffled = [...images, ...images]
      .sort(() => Math.random() - 0.5)
      .map( img => ({...img, id: Math.random()}))

    setChoice1(null)
    setChoice2(null)
    setImage(imagesShuffled)
    setTurns(0)
  }

  // handle a choice
  const handlechoice = (img) => {
    choice1 ? setChoice2(img) : setChoice1(img)
  }

  // compare 2 selected images
  useEffect(() => {
    if(choice1 && choice2) {
      setDisabled(true)
      if(choice1.src === choice2.src) {
        setImage(prevImgs => {
          return prevImgs.map(img => {
            if (img.src === choice1.src) {
              return {...img, matched: true}
            } else {
              return img
            }
          })
        })
        resetTurn()
      } else {
       setTimeout(() => resetTurn(), 1000) 
      }
    }
  }, [choice1, choice2])

  console.log(image)

  // reset choices & increase turn
  const resetTurn = () => {
    setChoice1(null)
    setChoice2(null)
    setTurns(prevTurns => prevTurns + 1)
    setDisabled(false)
  }

  /* start game auto */
  useEffect(() => {
    shuffleImages()
  }, [])


  return (
    <div className="App">
      <h1>The Inventory Match Game</h1>
      <button onClick={shuffleImages}>New Game</button>

      <div className="card-grid">
        {image.map( img => (
            <SingleImage 
              key={img.id} 
              imgProp={img} 
              handlechoice={handlechoice}
              flipped={img === choice1 || img === choice2 || img.matched}
              disabled={disabled}
            />
        ))}
      </div>
      <h3>Turns: {turns}</h3>
    </div>
  );
}

export default App;

import { useState } from 'react';
import './App.css';
import SingleImage from './components/SingleImage';

const images = [
  {"src": "/img/helmet-1.png"},
  {"src": "/img/potion-1.png"},
  {"src": "/img/ring-1.png"},
  {"src": "/img/scroll-1.png"},
  {"src": "/img/shield-1.png"},
  {"src": "/img/sword-1.png"}
]


function App() {

  const [image, setImage] = useState([])
  const [turns, setTurns] = useState(0)

  const shuffleImages = () => {
    const imagesShuffled = [...images, ...images]
      .sort(() => Math.random() - 0.5)
      .map( img => ({...img, id: Math.random()}))

    setImage(imagesShuffled)
    setTurns(0)
  }
  console.log(image, turns)

  return (
    <div className="App">
      <h1>The Inventory Match Game</h1>
      <button onClick={shuffleImages}>New Game</button>

      <div className="card-grid">
        {image.map( img => (
            <SingleImage key={img.id} imgProp={img}/>
        ))}
      </div>
    </div>
  );
}

export default App;

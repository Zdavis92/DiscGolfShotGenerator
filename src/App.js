import { React } from 'react';
import Header from './components/Header';
import Dice from './components/Dice';
import background from './images/bg-image.jpg';

function App() {
  return (
    <div className='bg-fixed h-screen bg-cover bg-center relative' style={{ backgroundImage: `url(${background})`}}>
      <Header></Header>
      <Dice></Dice>
    </div>
  );
}

export default App;

// import './App.css';
import { useState } from 'react';
import Buttons from './components/Buttons';
import Card from './components/Card';
import DropNavbar from './components/DropNavbar';
import Framermotion from './components/Framermotion';

import SlideInComponent from './components/SlideInComponent';
import Slider from './components/Slider';
import Toggle from './components/Toggle';
import Cards from './components/shop/Cards';
import Cart from './components/shop/Cart';
import MyProvider from './MyProvider';


function App() {

  // const [number,setNumber] = useState(0)

  return (
    <MyProvider>
    <div>
    {/* <SlideInComponent/> */}
    {/* <DropNavbar/> */}
    {/* <Framermotion/> */}
    {/* <Slider/> */}
    {/* <Card/> */}
    {/* <Toggle/> */}
    {/* <Buttons/> */}
    <Cart />
    <Cards />
    </div>
    </MyProvider>
  );
}

export default App;

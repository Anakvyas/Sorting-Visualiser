import react from 'react';

import { useState,useEffect } from 'react';

import Bars from '../Box/Bars.jsx';

import Nav from '../navbar/Nav.jsx';
function Fun() {

  let [array, setArray] = useState([]);
  let [colors, setColors] = useState([]);

  useEffect(() => {
    generateArray(50);
  }, []); 


  useEffect(() => {
    setColors(new Array(array.length).fill("#A0C4FF"));
  }, [array]);

    
  function generateArray(size) {
    let arr = []
    for (let i = 0; i < size; i++) {
      let num = Math.floor(Math.random() * 1000) + 1;
      arr.push(num)
    }
    setArray(arr);
  }


  return (
    <>
      <Nav
        generateArray={generateArray}  array ={array} setarray = {setArray}  setColors = {setColors}/>
        <Bars array={array} color = {colors} />
    </>
  )
}


export default Fun;
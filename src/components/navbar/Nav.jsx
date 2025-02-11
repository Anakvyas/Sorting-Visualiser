import './Nav.css';
import { Button } from '@mui/material';
import SliderSizes from './slider/slider';
import { useState, useEffect } from 'react';
import SORTBUTTON from './BUTTONS/buttons';
import Title from './Title';

function Nav(g) {
    let [values, setvalues] = useState(20);
    let [speed, setspeed] = useState(20);
    let [complexity,setcomplexity] = useState();

    let [visible,setvisible] = useState(false);

    return (
        <>
            <div className="navbar">
                <div className='slider-container '>
                    <div className='slider1'>
                        Size of Array: <SliderSizes min={10} max={100} step={10} values={values} setvalues={setvalues}  visible={visible} />
                    </div>

                    <div className='slider1'>
                        Speed of Algorithm: <SliderSizes min={20} max={50} step={10} values={speed} setvalues={setspeed}  visible={visible}/>
                    </div>

                </div>
                {/* creating new array  */}

                <div className='Button'>
                
                <div className='generate'>
                    <Button variant="contained" onClick={() => {
                        g.generateArray(values);
                        g.setColors(new Array(values).fill("#94a0ff"));
                    }} disabled = {visible}>
                        Generate New Array
                    </Button>     


                    <div className='time'>
                        <label>Time Complexity : </label>
                        <input type='text' value = {complexity} readOnly />
                    </div> 

                </div>
                    
                    <SORTBUTTON g = {g} speed = {speed} setcomplexity = {setcomplexity} setvisible = {setvisible} visible = {visible}/>
                
            </div>
            
            <Title/>
            </div>

        </>
    )
}

export default Nav;
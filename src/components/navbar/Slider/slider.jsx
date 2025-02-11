import Slider from '@mui/material/Slider';


function valuetext(value) {
    return `${value}`;
}

export default function SliderSizes(props) {

  
    const handlevalue = (event)=>{
        props.setvalues(event.target.value);
    }

    return (
        <div style={{width:"220px"}}>
            <Slider
                defaultValue={20}
                getAriaValueText={valuetext}
                valueLabelDisplay="auto"
                aria-label="Small"
                disabled = {props.visible}
                shiftStep={30}
                step={props.step}
                value={props.values}
                onChange={handlevalue}
                marks
                min={props.min}
                max={props.max}
                color='primary'
            />

         
        </div>

    );
}
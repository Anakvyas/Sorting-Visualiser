import './Bars.css';
import makeArray from '../makeArray';


function Bars({array,color}){

        return(
            
            <div className="array-container">
            {makeArray(array,color)}
            </div>
        
        )

}

export default Bars;
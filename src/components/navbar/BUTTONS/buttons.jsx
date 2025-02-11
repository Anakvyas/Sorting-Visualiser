import BubbleSort from '../../../algorithm/bubblesort';
import MERGE from '../../../algorithm/merge_sort';
import Selection from '../../../algorithm/Selction_sort';
import Insertion from '../../../algorithm/insertion_sort';
import { Button } from '@mui/material';
import { useState } from 'react';
function SORTBUTTON({ g, speed, setcomplexity, setvisible,visible }) {

    const [borderstyle ,setborderstyle] = useState();

    const handleSort = (func, val,name) => {
        setcomplexity(val);
        setvisible(true);
        setborderstyle(name);
        func(g.array, g.setarray, g.setColors, speed ,setvisible);

    }

    const border = (Name)=>({
        borderColor :(Name === borderstyle) ? "blue":"transparent",
        borderWidth : '2px',
        borderStyle : 'solid'

    })

    return (

        <div className="Button sort">
            <Button
                variant="contained"
                style={border('bubble')}
                onClick={() => handleSort(BubbleSort, 'O(n²)','bubble')}
                disabled={visible}
            >
                BUBBLE Sort
            </Button>

            <Button
                variant="contained"
                style={border('selection')}
                onClick={() => handleSort(Selection, 'O(n²)','selection')}
                disabled={visible}
            >
                SELECTION SORT
            </Button>

            <Button
                variant="contained"
                style={border('insertion')}
                onClick={() => handleSort(Insertion, 'O(n²)','insertion')}
                disabled={visible}
            >
                INSERTION SORT
            </Button>
          
            <Button
                variant="contained"
                style={border('merge')}
                onClick={() => handleSort(MERGE, 'O(n log n)','merge')}
                disabled={visible}
            >
                MERGE Sort
            </Button>

            <Button
                variant="contained"
                onClick={() => handleSort(QuickSort, 'O(n log n)')}
                disabled={visible}
            >
                QUICK Sort
            </Button>

            <Button
                variant="contained"
                onClick={() => handleSort(HeapSort, 'O(n log n)')}
                disabled={visible}
            >
                HEAP Sort
            </Button>
        </div>


    )
}

export default SORTBUTTON;
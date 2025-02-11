
async function MERGE(array,setarray,setColors,speed,setvisible){
    await Merge(array, 0, array.length - 1, setarray, setColors, speed);
    setvisible(false);
}


async function MergeSort(array, start, end, mid, setArray, setColor, colorArray,speed) {
    const sortedColor = "#8AC926";    
    const comparedColor = "#FF595E";   

    
    let arr = [];

    let i = start;
    let j = mid + 1;

    while (i <= mid && j <= end) {
         
        colorArray[i] = comparedColor;
        colorArray[j] = comparedColor;
        setColor([...colorArray]);
        await new Promise(resolve => setTimeout(resolve, (1000 / speed)*10)); // Delay for visualization

        if (array[i] < array[j]) {
            arr.push(array[i]);
            i++;
        } else {
            arr.push(array[j]);
            j++;
        }
        // Reset to default color after comparison
        colorArray[i - 1] = "#A0C4FF";
        colorArray[j - 1] = "#A0C4FF";
        setColor([...colorArray]);
    }

    while (i <= mid) {
        arr.push(array[i]);
        i++;
    }

    while (j <= end) {
        arr.push(array[j]);
        j++;
    }

    for (let i = start, index = 0; i <= end; i++) {
        array[i] = arr[index];
        colorArray[i] = sortedColor; 
        setColor([...colorArray]);
        index++;
        await new Promise(resolve => setTimeout(resolve,(1000 / speed)*10)); // Delay for visualization
    }

    setArray([...array]);
    { console.log(array); }
}

async function Merge(array, start, end, setArray, setColor, speed) {
    if (start >= end) {
        return;
    }

    const defaultColor = "#A0C4FF";
    let colorArray = new Array(array.length).fill(defaultColor);

    let mid = Math.floor((start + end) / 2);

    await Merge(array, start, mid, setArray, setColor, speed);
    await Merge(array, mid + 1, end, setArray, setColor, speed);

    await new Promise(resolve => setTimeout(resolve, (1000 / speed) ));

    await MergeSort(array, start, end, mid, setArray, setColor, colorArray,speed);
}

export default MERGE;

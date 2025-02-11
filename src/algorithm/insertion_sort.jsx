async function swap(array, idx1, idx2, setArray) {
    let temp = array[idx1];
    array[idx1] = array[idx2];
    array[idx2] = temp;

    setArray([...array]);
}

async function Insertion(array, setArray, setColor, speed ,setvisible) {
    const defaultColor = "#A0C4FF";  // Light Blue (calmer and visually pleasing)
    const selectedColor = "#FF595E";  
    const sortedColor = "#8AC926";    
    const checkColor = "#FFD60A";     
    const swapColor = "#FFCA3A"; 

    let colorArray = new Array(array.length).fill(defaultColor);

    for (let i = 1; i < array.length; i++) {
        let curr = array[i];
        let prev = i - 1;

        colorArray[i] = selectedColor;
        setColor([...colorArray]);

        await new Promise(resolve => setTimeout(resolve, (1000 / speed) * 10)); 


        while (prev >= 0 && array[prev] > curr) {
            colorArray[prev] = selectedColor;
            setColor([...colorArray]);
         
            await swap(array, prev, prev + 1, setArray);
       
            colorArray[prev] = swapColor;
            colorArray[prev + 1] = swapColor;
            setColor([...colorArray]);

            await new Promise(resolve => setTimeout(resolve, (1000 / speed) * 10)); 
            prev--;
        }

        
        colorArray[i] = defaultColor; 
        if (prev >= 0) {
            colorArray[prev] = defaultColor; 
        }

        array[prev + 1] = curr;

        colorArray[prev + 1] = sortedColor;
        setColor([...colorArray]);

        setArray([...array]);

        await new Promise(resolve => setTimeout(resolve, (1000 / speed) * 10)); 
    }

    // After all iterations, mark the entire array as sorted
    colorArray.fill(sortedColor);
    setColor([...colorArray]);

    setvisible(false);
}

export default Insertion;

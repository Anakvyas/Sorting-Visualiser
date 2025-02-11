async function swap(array, idx1, idx2, setArray) {
    let temp = array[idx1];
    array[idx1] = array[idx2];
    array[idx2] = temp;

    setArray([...array]);
}

async function Selection(array, setArray, setColor, speed,setvisible) {
    const defaultColor = "#A0C4FF"; 
    const selectedColor = "#FF595E";  
    const sortedColor = "#8AC926";    
    const checkColor = "#FFD60A";     
    const minColor = "#FFCA3A"; 

    let colorArray = new Array(array.length).fill(defaultColor);

    for (let i = 0; i < array.length; i++) {
        let min = i;

        colorArray[i] = checkColor;
        setColor([...colorArray]);
        await new Promise(resolve => setTimeout(resolve, (1000 / speed) * 10)); 

        for (let j = i + 1; j < array.length; j++) {
            
            colorArray[j] = selectedColor;
            setColor([...colorArray]);
            await new Promise(resolve => setTimeout(resolve, (1000 / speed) * 10)); 

         
            if (array[j] < array[min]) {
                
                if (min !== i) {
                    colorArray[min] = defaultColor;
                }
                min = j;
                colorArray[min] = minColor;
                setColor([...colorArray]);
            }

            if (j !== min) {
                colorArray[j] = defaultColor;
            }
            setColor([...colorArray]);
        }

        if (min !== i) {
            await swap(array, i, min, setArray);

       
            colorArray[min] = defaultColor;
            setColor([...colorArray]);
        }

      
        colorArray[i] = sortedColor;
        setColor([...colorArray]);

        await new Promise(resolve => setTimeout(resolve, (1000 / speed) * 10)); 
    }
    setvisible(false);
}

export default Selection;

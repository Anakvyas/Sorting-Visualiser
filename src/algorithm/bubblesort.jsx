
async function BubbleSort(array, setArray, setColor,speed,setvisible) {
    const length = array.length;
    const defaultColor = "#A0C4FF";  // Light Blue (calmer and visually pleasing)
    const sortedColor = "#8AC926";    
    const compareColor = "#FF595E";     
    const swapColor = "#FFD60A"; 
   


    let colorArray = new Array(length).fill(defaultColor);

    for (let i = 1; i <= length - 1; i++) {
        for (let j = 0; j < length - i; j++) {
        
            colorArray[j] = compareColor;
            colorArray[j + 1] = compareColor;
            setColor([...colorArray]);


            await new Promise(resolve => setTimeout(resolve, (1000/speed)*10));

            if (array[j + 1] < array[j]) {
                // Swap the elements
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;

            
                colorArray[j] = swapColor;
                colorArray[j + 1] = swapColor;
                setColor([...colorArray]);

                await new Promise(resolve => setTimeout(resolve, (1000/speed)*10));
            }

      
            colorArray[j] = defaultColor;
            colorArray[j + 1] = defaultColor;
            setColor([...colorArray]);

            setArray([...array]);

            
            await new Promise(resolve => setTimeout(resolve, (1000/speed)));
        }
      
        colorArray[length - i] = sortedColor;
        setColor([...colorArray]);
    }
   
    colorArray[0] = sortedColor;
    setColor([...colorArray]);
    setArray([...array]);
    setvisible(false);
}

export default BubbleSort;

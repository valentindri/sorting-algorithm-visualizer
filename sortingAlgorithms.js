export default class SortingAlgorithms{

    constructor(){

    }
    
    bubbleSort(barList, step, lap){//Only one swap per call

        let length = barList.length;

        let bars = barList;

        if(bars[step - 1].value > bars[step].value){
            
            let temp = bars[step-1];
            bars[step-1] = bars[step];
            bars[step] = temp;

            console.log("swap");
        }
        
        return bars;
        
        
    }


    quickSort(){

    }

    mergeSort(){

    }

  
}
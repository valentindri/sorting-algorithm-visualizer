export default class SortingAlgorithms{
    
    constructor(visualizer, barList){

        this.visualizer = visualizer;
        this.barList = barList;
        this.lap = this.barList.length - 1
        this.step = 1;

      
    }

    run(){
        setInterval(this.bubbleSort, 500);
    }

    bubbleSort(){//Only one swap per call
        
        if(this.lap >= 0){

            if(this.barList[this.step - 1].value > barList[this.step].value){
            
                let temp = this.barList[this.step-1];
                this.barList[this.step-1] = barList[this.step];
                this.barList[this.step] = temp;
            }

            this.step++;

            if((this.step === this.lap)){
                this.step = 1;
                this.lap--;
            }

            this.visualizer.draw(this.barList);
            
        }
        
       
    }


    quickSort(){

    }

    mergeSort(){

    }

  
}
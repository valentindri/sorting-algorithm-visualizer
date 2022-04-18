export default class SortingAlgorithms{
    
    constructor(visualizer, barList){

        this.visualizer = visualizer;
        this.barList = barList;
        this.lap = this.barList.length - 1;
        this.step = 1;
    }

    run(){
        this.sorting = setInterval(this.bubbleSort.bind(this), 20);
    }

    bubbleSort(){//Only one swap per call
        
        if(this.lap > 0){

            if(this.barList[this.step - 1].value > this.barList[this.step].value){
            
                let temp = this.barList[this.step-1];
                this.barList[this.step-1] = this.barList[this.step];
                this.barList[this.step] = temp;
            }

            this.step++;

            if((this.step -1 === this.lap)){
                this.step = 1;
                this.lap--;
            }

            this.visualizer.draw(this.barList);
            
        }
        else 
        {
            this.lap = this.barList.length - 1;
            this.step = 1;
            clearInterval(this.sorting);
        }
    }


    quickSort(){

    }

    mergeSort(){

    }

  
}
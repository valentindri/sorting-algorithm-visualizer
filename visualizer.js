import SortingAlgorithms from "./sortingAlgorithms.js";
export default class Visualizer{
    constructor(c, canvasWidth, canvasHeight, barList){
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;

        this.barList = barList;
        
        this.c = c;

        this.step = 1;
        this.lap = this.barList.length - 1;

        this.algorithms = new SortingAlgorithms();

        this.sorting = false;

        this.draw(this.barList);

        setInterval(this.sort, 500);
    }


    sort(){
        console.log("step");
        console.log(this.sorting);
        
        if(this.sorting){
            if(this.lap >= 0){

                this.barList = this.algorithms.bubbleSort(this.barList, this.step, this.lap);
    
                this.draw();
                
                
                this.step++;
    
                if((this.step == this.lap)){
                    this.step = 1;
                    this.lap--;
                }
               
            }
            else{
                this.sorting = false;
            }
        }
        
        
    }

    draw(){
        this.c.beginPath();
        this.c.clearRect(0,0,this.canvasWidth,this.canvasHeight);
        this.barList.forEach(bar => {
            bar.draw(this.c, this.barList.indexOf(bar));
        });
        
    }

    
}
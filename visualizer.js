import SortingAlgorithms from "./sortingAlgorithms.js";

export default class Visualizer{
    constructor(c, canvasWidth, canvasHeight){
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        
        this.c = c;
    }


    sort(barList){
        this.algorithms = new SortingAlgorithms(this, barList);
        this.algorithms.run();
    }

    draw(barList){
        this.c.beginPath();
        this.c.clearRect(0,0,this.canvasWidth,this.canvasHeight);
        barList.forEach(bar => {
            bar.draw(this.c, barList.indexOf(bar));
        });
        
    }

    
}
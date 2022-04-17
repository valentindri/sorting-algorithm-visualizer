export default class Bar{
    constructor(canvasWidth, canvasHeight, value, maxValue){
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;

        
        this.value = value;

        this.maxValue = maxValue;
        this.height = Math.ceil((this.value*(this.canvasHeight-10))/this.maxValue);
        this.width = 30;

        this.rowPos = this.canvasHeight - this.height;

    }

    draw(c, index){
        c.beginPath();
        c.fillStyle = "black";
        c.fillRect((index*this.width)+index*3, this.rowPos, this.width, this.height);
        
    }

    
}
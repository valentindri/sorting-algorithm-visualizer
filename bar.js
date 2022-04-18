export default class Bar{
    constructor(canvasWidth, canvasHeight, value, maxValue, color){
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;

        this.color = color;
        this.value = value;

        this.maxValue = maxValue;
        this.height = Math.ceil((this.value*(this.canvasHeight-10))/this.maxValue);
        this.width = 9;

        this.rowPos = this.canvasHeight - this.height;

    }

    draw(c, index){
        c.beginPath();
        c.fillStyle = `rgb(${this.color.red},${this.color.green},${this.color.blue})`;
        c.fillRect((index*this.width)+index*3, this.rowPos, this.width, this.height);
        
    }

    
}

export default class BarColor{
    
    constructor(colorList){
        this.colorList = colorList;
    }

    getColor(value, topValue){
        let percentage = (value * 100) / topValue;

        let redCode = this.colorList[Math.floor((percentage * this.colorList.length) / 100)];
        let greenCode = this.getGreenCode(percentage);
        let blueCode = this.getBlueCode(percentage);


        let color = {
            red: redCode,
            green: greenCode,
            blue: blueCode

        };

        return color;

    }

    getGreenCode(percentage){
        let base = ((Math.floor((percentage * this.colorList.length) / 100)) - 512);
        let index = base < 0? this.colorList.length + base: base;
        
        return this.colorList[index];
    }

    getBlueCode(percentage){
        let base = ((Math.floor((percentage * this.colorList.length) / 100)) + 512);
        let index = base > this.colorList.length - 1? base - this.colorList.length: base;
        
        return this.colorList[index];
    }
}
export default class ListBuilder{

    static newList(length, bottom, top){
        let list = [];
        for(let i = 0; i < length; i++){
            list.push(this.getRandomNumber(bottom,top));
        }
        return list;
    }


    static getRandomNumber(bottom, top){
        return Math.floor(Math.random() * (top - bottom) + bottom) 
    }

    static getColorList(){
        let list = [];
        for(let x = 0; x <= 5; x++){
            for(let i = 255; i >= 0; i--){
                if(x == 0 || x == 5){
                    list.push(255);
                }
                else if(x == 1){
                    list.push(i);
                }
                else if(x == 2 || x == 3){
                    list.push(0);
                }
                else if(x == 4){
                    list.push((i - 255)*-1);
                }
                
            }
        }
        //console.log(list);
        return list;
        


    }
}
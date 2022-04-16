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
}
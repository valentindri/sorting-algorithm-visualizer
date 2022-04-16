import Visualizer from "./visualizer.js";
import ListBuilder from "./listBuilder.js";
import Bar from "./bar.js";
import SortingAlgorithms from "./sortingAlgorithms.js";

var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");

var sortButton = document.getElementById("sortButton");
sortButton.addEventListener("click",startSorting);

var unsortedList = ListBuilder.newList(50,1,1000);//new randomly generated list of 20 numbers between 1 and 200

var topValue = Math.max(...unsortedList);//represents the highest value in the array

var barList = [];
for(let i = 0; i < unsortedList.length; i++){
    barList.push(new Bar(1000,500,unsortedList[i],topValue));//an array of Bar objects
}

var visualizer = new Visualizer(c,1000,500,barList);



function startSorting(){
    visualizer.sorting = true;
    
}
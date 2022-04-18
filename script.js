import Visualizer from "./visualizer.js";
import ListBuilder from "./listBuilder.js";
import Bar from "./bar.js";
import SortingAlgorithms from "./sortingAlgorithms.js";
import BarColor from "./colors.js";

var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");

var sortButton = document.getElementById("sortButton");
sortButton.addEventListener("click",startSorting);

var unsortedList = ListBuilder.newList(80,1,1000);//new randomly generated list of 20 numbers between 1 and 200

var topValue = Math.max(...unsortedList);//represents the highest value in the array
var barColor = new BarColor(ListBuilder.getColorList());
var barList = [];
for(let i = 0; i < unsortedList.length; i++){
    var color = barColor.getColor(unsortedList[i], topValue);
    barList.push(new Bar(1000,500,unsortedList[i],topValue, color));//an array of Bar objects
}

var visualizer = new Visualizer(c,1000,500);
visualizer.draw(barList);//Display initial unsorted list

var sortingAlgorithms = new SortingAlgorithms(visualizer,barList);

function startSorting(){
    //ListBuilder.getColorList();
    sortingAlgorithms.run();
}
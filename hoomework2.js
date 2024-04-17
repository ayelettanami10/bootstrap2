
//1
let arr10 = ["Sunday " , "Monday " , "Tuesday " , "Wednesday " , "Thursday " , "Friday " , "Saturday "];
document.write(arr10 + "<br>");

//const sorted = daysarr.sort();
//document.write("sorted days of the week:",sorted );

//function printarr(daysarr){
  //  document.write("unsorted days of the week", daysarr)
//}

//function sorted2 (daysarr){
  //  const sortedarr = daysarr.sort();
  //  document.write("sorted array", sortedarr);

//}
//printarr(daysarr);
//sorted2(daysarr);

//2

let arr20 = [0,1,2,3,4];

function keepnumber(arr20, index){
if(index >= 0 && index < arr20.length){ 
    console.log(arr20[index]);
} else {
    console.log("Sorry, no value in the array for index number:");
}
}

keepnumber(arr20,5)

keepnumber(arr20,0)


















//4
function ifsmall(arr, num) {
    if (arr.map(num => num <= 10)) {
      return num + 5;
    } else {
      return num;
    }
  }
  let array1 = [12, 25, 3, 4, 52];

  let numberToFind2 = 3;
  document.write(ifsmall(array1, numberToFind2)); 
  
  let numberToFind3 = 52;
  document.write(ifsmall(array1, numberToFind3)); 





//5
function findNumber(arr, num) {
    if (arr.includes(num)) {
      return "found"+ "<br>";
    } else {
      return "Not found"+ "<br>";
    }
  }
  
  let array = [1, 2, 3, 4, 5];
  let numberToFind = 3;
  document.write(findNumber(array, numberToFind)); 
  
  let numberToFind4 = 6;
  document.write(findNumber(array, numberToFind4)); 
  
//Write a function that takes in a string and returns it when reversed
// let food = “eating”
function string(food){
    return food.split("").reverse("").join("");
}let food = "eating"
console.log(string(food))


// 2. Write a function that takes in the following array and consoles the target if it is found else
// null
// let num = [2,8,0,23,5,45,76]
// Target = 23

function mergeSort(num){
  if(num.length<=1){
      return num
  }
  let middle = Math.floor(num.length/2);
  let left = num.slice(0,middle);
  let right = num.slice(middle);
  return sortedArray(mergeSort(left),mergeSort(right));
}

function sortedArray(left,right){
  emptyArray = [];
  while(left.length && right.length){
      if(left[0]<right[0]){
          emptyArray.push(left.shift())
      }
      else{
          emptyArray.push(right.shift())

      }
  }
  return emptyArray.concat(left,right)
  // return [...emptyArray,...left,...right];
}
let num = [2,8,0,23,5,45,76]
console.log(mergeSort(num))

function binarySearch(num,target){
  let left = 0;
  let right = num.length-1;
  while(left<=right){
      let middle = Math.floor((left+right)/2);
      if(num[middle]===target){
          return middle
      }
      else if(num[middle]> target){
          right = middle-1
      }
      else{
          left = middle+1
      }
  }
  return null;
}

let target = 23;
let sortedNum = mergeSort(num);
let finalAnswer = binarySearch(sortedNum,target);
console.log(finalAnswer)



// 3. Given years between 2000 and 2023, console all the leap years in the following
// sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”
for (let year=2000; year <= 2023;year++){
  if (year %4== 0 && (year % 100!==0)){
      console.log(year +"is a leap ");
  }
  else{
      console.log(year + "is not a leap year");
  }
}

 

// 4. Given a range of numbers from 0 to 100, console”Fizz” if the numbers are divisible by 3,
// “Buzz” if the numbers are divisible by 5, and “FizzBuzz” if divisible by both 3 and 5.
function numbers(){
    for ( let i=0; i<=100; i++)
    if (i%3===0 && i%5===0){
        console.log("FizzBuzz")
    }
    else if(i%5===0){
        console.log("Buzz")
    }
    else if(i%3===0){
        console.log("Fizz")
    }
    else{
        console.log(i)
    }
}
numbers();


// 5. Write a function that takes in an array of numbers and returns an array that has all
// elements multiplied by 4.
// let numArray = [12,87,45,75,23,64,73]

function multiplyByFour(numArray) {
    let result = [];
    for (let i = 0; i < numArray.length; i++) {
      result.push(numArray[i] * 4);
    }
    return result;
  }
  let numArray = [12, 87, 45, 75, 23, 64, 73];
  let multipliedArray = multiplyByFour(numArray);
  console.log(multipliedArray);


// 6. Write a function that takes in an array of strings and returns an array with every element
// turned into a number
// let nums = [“10”,”24”,”45”,”56”,”67”]

function convertToNumber(strArray) {
    let result = [];
    for (let i = 0; i < strArray.length; i++) {
      result.push(Number(strArray[i]));
    }
    return result;
  }
  let strArray = ["10", "24", "45", "56", "67"];
  let numArrays = convertToNumber(strArray);
  console.log(numArray);
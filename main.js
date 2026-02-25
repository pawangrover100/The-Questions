// 1.	Add "mango" at the end of fruits.
// let fruits=["mango"];
// fruits.push("orange");
// console.log(fruits);
// 2.	Remove last element from nums.
// let nums=[10,20,30,40,50];
// nums.pop(50);
// console.log(nums);

// 3.	Add 0 at start of arr.
// let arr=[1,2,3,4,5];
// arr.unshift(0)
// console.log(arr);
// 4.	Remove first element from data.
// let data =["pawan", "grover"];
// data.shift("pawan")
// console.log(data);
// 5.	Print length of colors.
// let colors ="colors";
// // let arr=colors.length
// console.log(colors.length);
// 6.	Check if "cats" exists in array.
// let animels=[ "dogs", "cats", "cows",  "horses", " lions"," tigers", "elephants"," giraffes","monkeys"]
//   let check=animels.includes("cats");
// console.log(check);

// 7.	Join array using comma ,.
// let animels=[ "dogs", "cats", "cows",  "horses", " lions"," tigers", "elephants"," giraffes","monkeys"]
// let join=animels.join(",")
// console.log(join);
// 8.	Merge a and b.
// let a =["pawan"];
// let b=["grover"]
// let arr=a.concat(b)
// console.log(arr);
// 9.	Convert "HELLO" into array.
// let str="hello";
// let newstr=Array.from(str)
// console.log(newstr);
// 10.	Sort numbers [3,1,2] correctly.
// let num= [3,1,2];
// num.sort()
// console.log(num);
// 11.	Find first value > 50.
// let arr = [10, 25, 45, 60, 80, 30];
// let result = arr.find((num) => num > 50);
// console.log(result);

// 12.	Find index of "pen".
// let nums =["elephent","pen", "pencil","horse","apple"];
// let result=nums.indexOf("pen");
// console.log(result);
// 13.	Slice first 3 elements.
// let nums =["elephent","pen", "pencil","horse","apple"];
// let result=nums.slice(1,4)
// console.log(result);
// 14.	Remove 1 element from index 0.
// let nums =["elephent","pen", "pencil","horse","apple"];
// nums.splice(0,1)
// console.log(nums);
// 15.	Add "A" at index 1 using splice.
// let nums =["elephent","pen", "pencil","horse","apple"];
// nums.splice(1,0,"A")
// console.log(nums);
// 16.	Check if 100 is present.
// let nums=[500,600,900,800,300,100,400,700];
// let result=nums.includes(100);
// console.log(result);

// 17.	Join using "|".
// let nums=[500,600,900,800,300,100,400,700];
// let result=nums.join("|")
// console.log(result);
// 18.	Merge 3 arrays.
// let a=[1,2,3];
// let b=[4,5,6];
// let c=[7,8,9];
// let result=a.concat(b,c)
// console.log(result);
// 19.	Get length after push.
// let nums=[500,600,900,800,300,100,400,700];
// let result=nums.push(1000)
// result.length
// console.log(result);
// 20.	Convert NodeList-like object using Array.from.

// let arr = Array.from(document.querySelectorAll(".item"));
// 21.	Remove 2 elements starting index 2.
// let nums=[500,600,900,800,300,100,400,700];
// nums.splice(0,2)
// console.log(nums);
// 22.	Add two numbers at index 3.
// let nums=[500,600,900,800,300,100,400,700];
// nums.splice(0,3,1,2,3)
// console.log(nums);
// 23.	Slice last 4 values.
// let nums=[500,600,900,800,300,100,400,700];
// let check=nums.slice(0,5);
// console.log(check);
// 24.	Find first even number.

// function number(nums){
//     let check=nums.map((nums)=>{
//         if(nums%2==0){
//         return (`${nums} is even`)
//     }else {
//         return(`${nums} is odd`)
//     }
//     })
//     return check
// }
// console.log(number([955,600,900,800,300,100,400,700]));
// 25.	Find index of value > 20.
// let  arr=[20,15,2,50]
// let index=arr.findIndex(nums=>nums>20)
// console.log(index);
// 26.	Sort descending.
// let arr=[20,23,8,60,2,1,3]
// arr.sort((a,b)=>b-a)
// console.log(arr);
// 27.	Join words with space.
// let word =["elephent","pen", "pencil","horse","apple"];
// let join=word.join(" ")
// console.log(join);
// 28.	Combine names + surnames arrays.
// let name="pawan";
// let surname="grover";
// let fullname=name.concat(surname)
// console.log(fullname);
// 29.	Remove middle element.
// let word =["elephent","pen", "pencil","horse","apple"];
// word.splice(2,2)
// console.log(word);
// 30.	Check "JS" exists.
// let word =["elephent","pen", "js","pencil","horse","apple"];
// let arr=word.includes("js")
// console.log(arr);
// 31.	Add at start & end.
// let arr =["apple","banana","wlephent","tiger"];
// arr.unshift("lion")
// arr.push("pen")
// console.log(arr);
// 32.	Remove first & last.
// let nums=[100,200,300,400,500,600,700,800,900];
// nums.pop(900)
// nums.shift(100)
// console.log(nums);
// 33.	Extract between index 2–5.
// let nums = [100, 200, 300, 400, 500, 600, 700, 800, 900];
// let arr=nums.slice(2,5)
// console.log(arr);
// 34.	Create array from "12345" and convert to numbers.
// let nums="12345"
// let newnums=Number(nums)
// console.log( newnums);
// console.log(typeof newnums);
// 35.	Find first word longer than 5 letters.
// let word =["elephent","pen", "js","pencil","horse","apple"];
// let newarr=word.find(word=>
//  word.length>5
// )
// console.log(newarr);
// 36.	Insert "X" "Y" at middle.
// let word =["elephent","pen", "js","pencil","horse","apple"];
// word.splice(3,0,"x","y")
// console.log(word);
// 37.	Remove all elements except first 2.
//  let word =["elephent","pen", "js","pencil","horse","apple"];
//  word.splice(2)
//  console.log(word);
// 38.	Clone array using slice.
// let word =["elephent","pen", "js","pencil","horse","apple"];
// let clone=word.slice(1)
// console.log(clone);
// 39.	Sort objects by age.
// let age =[25,30,60,40,50,21,64,70]
// let result=age.sort()
// console.log(result);
// 40.	Find user with id 3.
// let ids=[6,3,8,7,5,2,1,6,];
// let newids=ids.find(num=> num===3);
// console.log(`id ${newids}`);
// 41.	Find index of price > 500.
// let prise=[100,800,600,400,300,700,200];
// let found=prise.findIndex(num=>num>500)
// console.log(found);
// 42.	Merge and then sort ascending.
// let lineone=[5,4,3,2,1,];
// let linetwo=[10,9,8,7,6,];
// let merge=lineone.concat(linetwo).sort((a,b)=> a-b)
// console.log(merge);
// 43.	Remove duplicates (use includes).

// let value=["500","pawan", "pawan grover", "pawan", "grover","grover","100","200","500","hero"]
// let found=[];
// for(let i=0; i<value.length; i++ ){
//     if(!found.includes(value[i])){
//         found.push(value[i])
//     }
// }
// console.log(found);

// let value=["500","pawan", "pawan grover", "pawan", "grover","grover","100","200","500","hero"] // new Set() ya method duplicate values return nahi kar to
// let found=new Set(value)
// console.log(found);

// 44.	Create array from Set using Array.from.
// let arr=new Set("javascript");
// let newarray=Array.from(arr)
// console.log(newarray);


// 45.	Replace 2 elements starting index 1.
// let value=["500","pawan", "pawan grover", "pawan", "grover","grover","100","200","500","hero"]
// value.splice(1,2,"horse","dog")
// console.log(value);
// 46.	Join numbers with -.
// let nums=[100,200,300,400,500,600,700,800,900];
// let join=nums.join("-");
// console.log(join);
// 47.	Remove negative numbers using splice.
// let nums=[100,-200,300,-400,-500,600,-700,800,900];
// for(let i=0; i<nums.length; i++){
//     if(nums[i]<0){
//         nums.splice(i,1)
//         i--;
//     }
// }
// console.log(nums);
// 48.	Add multiple elements at start.
//  let nums=[100,-200,300,-400,-500,600,-700,800,900];
//  nums.splice(0,0,"pawan grover","bjp","tesla motor","ratan tata","whats going on");
//  console.log(nums);
 // 49.	Slice without using negative indexes to get last 3.
//   let nums=[100,-200,300,-400,-500,600,-700,800,900];
//   let slice=nums.slice(nums.length-3);
//   console.log(slice);
// 50.	Convert arguments object to array.
// function obj() {
//   return Array.from(arguments);
// }
// console.log(obj(1, 2, 3, 4, 5));
//  51.	Use map() to double every number in an array.
// let nums=[100,-200,300,-400,-500,600,-700,800,900];
// let result=nums.map(n=>n*2)
// console.log(result);
// 52.	Use map() to convert all strings to uppercase.
// let word =["elephent","pen", "js","pencil","horse","apple"];
// let uppercase=word.map(n=>n.toUpperCase());
// console.log(uppercase);
// 53.	Add 5 to each element using map().
// let ele=[5,25,32,62,42,50,85,90,11]
// let add=ele.map((n=>n+5));
// console.log(add);
// 54.	Use filter() to keep only even numbers.
// let nums=[25,32,65,96,44,11,21,31,41,51,]
// let even =nums.filter(item => item%2===0)
// console.log(even);
// 55.	Use filter() to keep numbers > 10.
// let num=[5,12,16,20,22,1,4,11,2,];
// let greater=num.filter(item=>item>10);
// console.log(greater);
// 56.	Use filter() to get words longer than 4 letterits.
// let words = ["js", "html", "react", "node", "angular", "css"];
// let result=words.filter(item => item.length>4);
// console.log(result);
// 57.	Use filter() to keep positive numbers.
// let nums=[-5,85,-66,-100,12,40,50];
// let result=nums.filter(item => item>0);
// console.log(result);
// 58.	Use reduce() to calculate sum of numbers.
// let sum=[45,65,25,32,74,85,69,4]
// let add=sum.reduce((a,b)=>a+b,0)
// console.log(add);
// 59.	Use reduce() to find maximum value.
// let sum=[45,65,25,32,74,85,69,4]
// let max=sum.reduce((a,b)=>{
//      return b>a?b:a
// })
// console.log(max);

// 60.	Use reduce() to count total elements.
// let sum=[45,65,25,32,74,85,69,4];
// let count=sum.reduce((a,b)=>{
//     return a+1
// } ,0)
// console.log(count);

// 61.	Use map() to extract ages from objects.
// let user=[
//     {name:"Pawan",age:22},
//     {name:"Rahul",age:22},
//     {name:"Amit",age:22}
// ]
// let age=user.map(user=>user.age)
// console.log(age);

// let ages = users.map(function(user){
//   return user.age;
// });

// let adults = users
//   .map(user => user.age)
//   .filter(age => age >= 18);

// console.log(adults);
// 62.	Use filter() to get users older than 18.

// let usersolder =[40,20,48,30,18]
// let newuser=usersolder.filter(item=>item>18)
// console.log(newuser);
// 63.	Use map() to add "Mr." before names.
// let names = ["Pawan", "Rahul", "Amit"];
// let result = names.map(name => "Mr. " + name);
// console.log(result);
// 64.	Use filter() to remove falsy values.
// let arr = [0, 1, false, 2, "", 3, null, undefined, NaN];
// let truthyValues = arr.filter(Boolean);
// console.log(truthyValues);
// 65.	Use reduce() to multiply all numbers.
//  let nums=[40,20]
//  let result=nums.reduce((a,b)=>a*b,1)
//  console.log(result);
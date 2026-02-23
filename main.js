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
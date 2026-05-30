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

// //duplicate value found
// 1
// let num= [1, 2, 2, 3, 4, 4];
// let found=[];
// for(let i=0; i<num.length; i++){
//  if(!found.includes(num[i])){
//     found.push(num[i])
//  }
// }
// console.log(found);

// 2️
// let alphbat=["a", "b", "a", "c", "b"]
// let found=[];
// for(let i=0; i<alphbat.length; i++){
//     if(!found.includes(alphbat[i])){
//         found.push(alphbat[i])
//     }
// }
// console.log(found);
// let found=new Set(alphbat)
// console.log(found);

// 3️
// let nums=[5, 5, 5, 5]
// let found=[];
// for(let i=0; i<nums.length; i++){
//     if(!found.includes(nums[i])){
//         found.push(nums[i])
//     }
// }
// console.log(found);

// // 4️
// let duplicate=[1, "1", 2, "2", 1]
// let found=[];
// for(let i=0; i<duplicate.length; i++){
//     if(!found.includes(duplicate[i])){
//         found.push(duplicate[i])
//     }
// }
// console.log(found);
// 5️
// let fruits=["apple", "banana", "apple", "orange"]
// let duplicate=[];
// for(let i=0; i<fruits.length; i++){
//     if(!duplicate.includes(fruits[i])){
//         duplicate.push(fruits[i])
//     }

// }
// console.log(duplicate);

// 6️
// let Boolean=[true, false, true, false]
// let duplicates=[];
// for(let i=0; i<Boolean.length; i++){
//     if(!duplicates.includes(Boolean[i])){
//         duplicates.push(Boolean[i])
//     }
// }
// console.log(duplicates);
// 7️
// let count=[10, 20, 10, 30, 20]
// let found=[];
// for(let i=0; i<count.length; i++){
//     if(!found.includes(count[i])){
//         found.push(count[i])
//     }
// }
// console.log(found);
// let count=[10, 20, 10, 30, 20]
// let found=count.includes(10)
// console.log(found);

// 8️
// let strings=["js", "html", "css", "js"];
// let found=[];
// for(let i=0; i<strings.length; i++){
//     if(!found.includes(strings[i])){
//         found.push(strings[i])
//     }
// }
// console.log(found);
// 9️
// let value=[null, null, 1, 2]
// let found=[];
// for(let i=0; i<value.length; i++){
//     if(!found.includes(value[i])){
//         found.push(value[i])
//     }
// }
// console.log(found);

// 10
// let boolean=[undefined, 1, undefined, 2]
// let duplicate=[];
// for(let i=0; i<boolean.length; i++){
//     if(!duplicate.includes(boolean[i])){
//         duplicate.push(boolean[i])
//     }
// }
// console.log(duplicate);
// 11
// let alphbat=["A", "a", "A", "a"]
// let duplicate=[];
// for (let i=0; i<alphbat.length; i++){
//     if(!duplicate.includes(alphbat[i])){
//         duplicate.push(alphbat[i])
//     }
// }
// console.log(duplicate);
// 12
// let nums=[100, 90, 100, 80, 90]
// let found=[];
// for(let i=0; i<nums.length; i++){
//     if(!found.includes(nums[i])){
//         found.push(nums[i])
//     }
// }
// console.log(found);
// 13
// let strings=["pen", "pencil", "pen", "eraser"]
// let arr=[];
// for(let i=0; i<strings.length; i++){
//     if(!arr.includes(strings[i])){
//         arr.push(strings[i])
//     }
// }
// console.log(arr);
// 14
// let nums=[1, 2, 3, 4, 5,5]
// let newarr=[];
// for(let i=0; i<nums.length; i++){
//     if(!newarr.includes(nums[i])){
//         newarr.push(nums[i])
//     }
// }
// console.log(newarr);
// 15
// let color=["red", "green", "blue", "green"]
// let newcolor=[];
// for(let i=0; i<color.length; i++){
//     if(!newcolor.includes(color[i])){
//         newcolor.push(color[i])
//     }
// }
// console.log(newcolor);
//16
// let nums=["10", 10, "20", 20]
// let check=[];
// for(let i =0; i<nums.length; i++){
//     if(!check.includes(nums[i] ){
//         check.push(nums[i])
//     }
// }
// console.log(check);
// 17
// let value=[NaN, NaN, 1, 2]
// let newvalue=[];
// for(let i=0; i<value.length; i++){
//     if(!newvalue.includes(value[i])){
//         newvalue.push(value[i])
//     }
// }
// console.log(newvalue);
// 18
// let arr=["", "", "a", "b"]
// let newarr=[];
// for(let i=0; i<arr.length; i++){
//     if(!newarr.includes(arr[i]))
//     {
//         newarr.push(arr[i])
//     }
// }
// console.log(newarr);
// 19
// let boolean=[0, false, 0, false]
// let newarr=[];
// for(let i = 0; i < boolean.length; i++){
//     if(!newarr.includes(boolean[i])){
//         newarr.push(boolean[i])
//     }
// }
// console.log(newarr);
// 20
// let animels=["dog", "cat", "dog", "bird"]
// let newline=[];
// for(let i = 0 ; i < animels.length; i++){
//     if(!newline.includes(animels[i])){
//         newline.push(animels[i])
//     }
// }
// console.log(newline);
// 21
// let nums=[3, 1, 2, 3, 1]
// let newline=[];
// for(let i=0; i<nums.length; i++){
//     if(!newline.includes(nums[i])){
//         newline.push(nums[i])
//     }
// }
// console.log(newline);

// 22
// let common=["js", "JS", "js"]
// let module=[];
// for(let i=0; i<common.length; i++){
//     if(!module.includes(common[i])){
//         module.push(common[i])
//          }
// }
// console.log(module);
// 23
// let boolean=[true, true, false]
// let arr=[];
// for(let i=0; i<boolean.length; i++){
//     if(!arr.includes(boolean[i])){
//         arr.push(boolean[i])
//     }
// }
// console.log(arr);
// 24
// let nums=[7, 8, 9, 7, 8]
// let arr=[];
// for(let i =0; i<nums.length; i++){
//     if(!arr.includes(nums[i])){
//         arr.push(nums[i])
//     }
// }
// console.log(arr);
// 25
// let hellow=["hello", "world", "hello"]
// let arr=[];
// for(let i=0; i<hellow.length; i++){
//     if(!arr.includes(hellow[i])){
//         arr.push(hellow[i])
//     }
// }

// console.log(arr);
// “Remove negative numbers using splice”
// 🔹 Practice Questions (Use splice())
// 1
// let nums=[5, -2, 8, -1, 10]
// for(let i=nums.length-1; i>0; i--){
//     if(nums[i] < 0){
//         nums.splice(i,1)
//     }
// }

//  console.log(nums);
// 2
// let nums=[-5, -10, 15, 20]
// let newarr=nums.filter(item=>item>0)
// console.log(newarr);

// 3
// let arr=[1, 2, 3, -3, -4, 5]
// let newarr=arr.filter(item=>item>0)
// console.log(newarr);
// 4
// let nums=[-1, -2, -3, -4,1]
// let newarr=nums.filter(item=>item>0)
// console.log(newarr);
// 5
// let arr=[100, -50, 200, -150, 300]
// let newarr=arr.filter(item=>item>0)
// console.log(newarr);
// 6
// let nums=[0, -1, 2, -3, 4]
// let arr=nums.filter(item=>item>0)
// console.log(arr);
// 7
// let arr=[-10, 10, -20, 20]
// let found=arr.filter(item=>item>0)
// console.log(found);
// 8
// let arr=[7, -7, 14, -14]
// let newarr=arr.filter(item=>item>0)
// console.log(newarr);
// 9
// let nums=[50, 60, -70, 80, -90]
// let arr=nums.filter(item=>item>0)
// console.log(arr);
// 10
// let arr=[-100, 200, -300, 400]
// let found=arr.filter(item=>item>0)
// console.log(found);
// 11
// let arr=[9, -9, 8, -8, 7]
// let newarr=arr.filter(item=>item>0)
// console.log(newarr);
// // 12
// let arr=[-5, 5, -5, 5]
// let found=arr.filter(item=>item>0)
// console.log(found);
// 13
// let arr=[1, -1, 1, -1, 1]
// let newarr=arr.filter(item=>item>0)
// console.log(newarr);
// 14
// let arr=[-2, 4, -6, 8, -10]
// let newarr=arr.filter(item=>item>0)
// console.log(newarr);
// 15
// let nums=[15, -5, 25, -15, 35]
// let newarr=nums.filter(item=>item>0)
// console.log(newarr);
// 16
// let arr=[-3, -6, 9, 12]
// let newarr=arr.filter(item=>item>0)
// console.log(newarr);
// 17
// let arr=[11, -22, 33, -44, 55]
// let newarr=arr.filter(item=>item>0)
// console.log(newarr);
// 18
// let jump=[-7, 14, -21, 28]
// let go=jump.filter(item=>item>0)
// console.log(go);
// 19
// let arr=[2, -4, 6, -8, 10]
// let newarr=arr.filter(item=>item>0)
// console.log(newarr);
// 20
// let arr=[-1, 0, 1, -2, 2]
// let newarr=arr.filter(item=>item>0)
// console.log(newarr);
// //  Rule Reminder (Logic Same Hoga)
// // for (let i = arr.length - 1; i >= 0; i--) {
// //     if (arr[i] < 0) {
// //         arr.splice(i, 1);
// //     }
// // }

// 📘 JavaScript Array Methods – 25 Proper Questions

// map() method का उपयोग करके एक array के सभी elements का square निकालने का program लिखिए।
// let num=[1,2,3,4,5,6,7,8,9]
// let arr=num.map(n=>n*n)
// console.log(arr);

// filter() method की मदद से एक array में से सभी even numbers को अलग कीजिए।
// let num=[1,2,3,4,5,6,7,8,9]
// let even=num.filter(item=>item%2==0)
// console.log(even);
// reduce() method का उपयोग करके array के सभी numbers का sum निकालने का code लिखिए।
//  let num=[1,2,3,4,5,6,7,8,9]
//  let sum=num.reduce((a,b)=>a+b)
//  console.log(sum);
// reduce() method का उपयोग करके array में से सबसे बड़ी value (maximum) खोजिए।
//  let num=[1,2,3,4,5,6,7,8,9]
//  let maxvalue=num.reduce((max,curr)=>{
//     return curr>max ? curr:max},num[0])
//  console.log(maxvalue);
// find() method का उपयोग करके array का पहला element खोजिए जो 50 से बड़ा हो।
// let num=[1,2,11,3,4,5,6,7,8,9,65,52,88,33,45,]
// let find=num.find((n)=>n>50)
// console.log(find);
// findIndex() method की सहायता से किसी दिए गए element का index निकालिए।
// let num=[1,2,11,3,4,5,6,7,8,9,65,52,88,33,45,]
// let index=num.findIndex((n)=>n==52)
// console.log(index);
// includes() method का उपयोग करके जाँच कीजिए कि कोई value array में मौजूद है या नहीं।
// let num=[1,2,11,3,4,5,6,7,8,9,65,52,88,33,45,]
// let checkit=num.includes(65)
// console.log(checkit);
// some() method का उपयोग करके यह जाँचिए कि array में कोई भी negative number मौजूद है या नहीं।
// let num=[1,2,11,3,4,5,6,7,8,9,65,52,88,33,45,-25]
// let arr=num.some((n)=>{
//     return n<0
// })
// console.log(arr);
// every() method का उपयोग करके यह verify कीजिए कि array के सभी numbers positive हैं।
// let numbers = [10, 5, 3, 8, 2];
// let allPositive = numbers.every(num => num > 0);
// console.log(allPositive);
// sort() method की सहायता से numbers को ascending order में sort कीजिए।
//  let num=[1,2,11,3,4,5,6,7,8,9,65,52,88,33,45,-25]
//  let arr=num.sort((a,b)=>
//     a-b
//  )
//  console.log(arr);
// sort() method का उपयोग करके strings को alphabetical order में व्यवस्थित कीजिए।
// let num=[1,2,11,3,4,5,6,7,8,9,65,52,88,33,45,-25]
//  let arr=num.sort((a,b)=>
//     b-a
//  )
//  console.log(arr);
// reverse() method की मदद से array के elements का क्रम उल्टा कीजिए।
// let num=[1,2,11,3,4,5,6,7,8,9,65,52,88,33,45,-25]
//  let arr=num.reverse()

//  console.log(arr);
// slice() method का उपयोग करके array के बीच का हिस्सा निकालिए।
//  let num=[1,2,11,3,4,5,6,7,8,9,65,52,88,33,45,-25]
// let arr=num.slice(2,5)
// console.log(arr);

// splice() method की सहायता से array में एक नया element add कीजिए।
// let num=[1,2,11,3,4,5,6,7,8,9,65,52,88,33,45,-25];
// num.splice(2,0,"grover");
// console.log(num);
// splice() method का उपयोग करके array से किसी element को delete कीजिए।
// let num=[1,2,11,3,4,5,6,7,8,9,65,52,88,33,45,-25];
// num.splice(2,1)
// console.log(num);
// concat() method की मदद से दो arrays को merge कीजिए।
// let a=[12345];
// let b=[678910];
// let arr=a.concat(b)
// console.log(arr);
// flat() method का उपयोग करके nested array को single-level array में बदलिए।
// let num=[1,2,11,3,4,5,6,7,8,9,65,52,88,33,45,25,[23,40]];
// let arr=num.flat()
// console.log(arr);
// join() method की सहायता से array को string में convert कीजिए।
// let num=[1,2,11,3,4,5,6,7,8,9,65,52,88,33,45,25];
// let arr=num.join()
// console.log(arr);
// split() और join() methods का उपयोग करके किसी string को reverse करने का program लिखिए।
// let str="hellow pawan grover";
// let reverse=str.split("").reverse().join()
// console.log(reverse);

// Array.from() method का उपयोग करके string को array में convert कीजिए।
// let str="hellow pawan grover";
// let arr=Array.from(str)
// console.log(arr);
// Set और Array.from() का उपयोग करके array से duplicate values हटाइए।
// let num="pawan grover";
// let dup=Array.from(num);
// let str=new Set(dup)
// console.log(str);

// let str = "pawan grover";
// let uniqueArray = Array.from(new Set(str));
// console.log(uniqueArray);
// push() और pop() methods के बीच अंतर उदाहरण सहित समझाइए।
// let str=["pawan","grover"];
// str.pop()
// str.push("hellow")
// console.log(str);
// // shift() और unshift() methods का उपयोग करके array में element add और remove कीजिए।
// let str=["grover"]
// str.unshift("pawan")
// console.log(str);

// let arr=["pawan", "grover"]
// arr.shift()
// console.log(arr);
// indexOf() method का उपयोग करके array में किसी element को search कीजिए।
// let num=[1,2,11,3,4,5,6,7,8,9,65,52,88,33,45,25];
// let arr=num.indexOf(52)
// console.log(arr);
// forEach() method का उपयोग करके array के सभी elements को print कीजिए।
// let num=[1,2,11,3,4,5,6,7,8,9,65,52,88,33,45,25];
// num.forEach((num)=>{console.log(num)})

// 📘 JavaScript Array Methods – Next 25 Questions (Set-2)

// map() method का उपयोग करके एक array के सभी elements को string में convert कीजिए।
// let num=[1,2,11,3,4,5,6,7,8,9,65,52,88,33,45,25];
// num.map((n)=>String(n)) //toString() method
// console.log(num);
// filter() method की सहायता से array में से सभी values निकालिए जो 10 से बड़ी हों।
// let num=[1,2,11,3,4,5,6,7,8,9,65,52,88,33,45,25];
// let arr=num.filter(item=>item>10)
// console.log(arr);
// reduce() method का उपयोग करके array का average निकालने का program लिखिए।
// let num=[1,2,11,3,4,5,6,7,8,9,65,52,88,33,45,25];
// let sum=num.reduce((a,b)=>a+b,0);
// let average=sum%num.length
// console.log(average);
// reduce() method की मदद से array में total even numbers की count निकालिए।
// let num = [1,2,11,3,4,5,6,7,8,9,65,52,88,33,45,25];
// let count = num.reduce((acc, curr) => {
//   return curr % 2 === 0 ? acc + 1 : acc;
// }, 0);
// console.log(count);
// find() method का उपयोग करके array का पहला even number खोजिए।
// let num=[1,2,11,3,4,5,6,7,8,9,65,52,88,33,45,25];
// let even=num.filter(item=>item%2==0).length
// console.log(even);
// findIndex() method की सहायता से पहले negative number का index निकालिए।
// let num=[1,2,11,3,4,5,6,7,8,9,65,52,88,-33,45,25];
// let index=num.findIndex(n=>n<0)
// console.log(index);

// // includes() method और indexOf() method में अंतर समझाइए।
// let num=[1,2,11,3,4,5,6,7,8,9,65,52,88,-33,45,25];
// let arr=num.includes(11)
// console.log(arr);

// let newarr=num.indexOf(11)
// console.log(newarr);
// some() method का उपयोग करके यह जाँचिए कि कोई भी value string type की है या नहीं।
// let num=[1,2,11,3,4,5,6,7,8,9,65,52,88,-33,45,25];
// let arr=num.some((n)=>typeof n==="string")
// console.log(arr);
// every() method की मदद से यह verify कीजिए कि array के सभी elements numbers हैं।
// let num=[1,2,11,3,4,5,6,7,8,9,65,52,88,-33,45,25];
// let arr=num.every((n)=>typeof n==="number")
// console.log(arr);
// // sort() method का उपयोग करके array को descending order में sort कीजिए।
// let num=[1,2,11,3,4,5,6,7,8,9,65,52,88,-33,45,25];
// let descending=num.sort((a,b)=>b-a)
// console.log(descending);
// sort() method के साथ compare function क्यों आवश्यक होता है? समझाइए।
// let num=[1,2,11,3,4,5,6,7,8,9,65,52,88,-33,45,25];
// let descending=num.sort((a,b)=>a-b)
// console.log(descending);
// reverse() method original array को mutate करता है या नहीं? उदाहरण सहित बताइए।
// let num=[1,2,11,3,4,5,6,7,8,9,65,52,88,33,45,25];
// num.reverse()
// console.log(num); yes
// slice() और splice() methods में अंतर उदाहरण सहित समझाइए।
// let num=[1,2,11,3,4,5,6,7,8,9,65,52,88,33,45,25];
// let slice=num.slice(2,9)
// console.log(slice);

// num.splice(3,2,100,200)
// console.log(num);
// // splice() method का उपयोग करके array के बीच में element insert कीजिए।
// let num=[1,2,11,3,4,5,6,7,8,9,65,52,88,33,45,25];
// num.splice(7,0,100,200,300)
// console.log(num);
// concat() method original array को change करता है या नहीं? समझाइए।
// let a=[12345]
// let b=[6789]
// let concat=a.concat(b)
// console.log(concat); //no
// flat() method में depth parameter का क्या उपयोग है? उदाहरण दीजिए।
// let arr = [1, 2, [3, 4], [5, 6]];
// let result = arr.flat();
// console.log(result);
// join() method में default separator क्या होता है? उदाहरण सहित बताइए।
// let num=[1,2,11,3,4,5,6,7,8,9,65,52,88,33,45,25];
// num.join()
// console.log(num);
// Array.from() और split() method में अंतर समझाइए।
// let num="javaSrcript";
// let arr=Array.from(num)
// console.log(arr);
// let nums="javaSrcript";
// let split=nums.split("")
// console.log(split);
// Set का उपयोग करके duplicate elements कैसे हटाए जाते हैं? program लिखिए।
// let str="JavaScritp";
// let arr=new Set(str)
// console.log(arr);
// push() और unshift() में अंतर उदाहरण सहित समझाइए।
// let str=["pawan"]
// str.push("grover");
// str.unshift("hellow")
// console.log(str);

// pop() और shift() methods में अंतर बताइए।
// let str=["hellow","pawan","grover"]
// str.pop("grover");
// str.shift("hellow")
// console.log(str);
// indexOf() और lastIndexOf() methods का उपयोग करके element search कीजिए।
// let num=[1,2,11,3,4,5,6,7,8,9,65,52,88,33,45,25];
// let arr=num.indexOf(52)
// let last=num.lastIndexOf(25)
// console.log(arr);
// console.log(last);
// forEach() और map() methods में मुख्य अंतर क्या है?
// let num = [1, 2, 3, 4];

// num.forEach(n => {
//   console.log(n * 2);
// });
// num.map(n=>n+5)
// console.log(num);
// for...of loop और forEach() method में अंतर बताइए।
// let arr = [1, 2, 3, 4];

// for (let value of arr) {
//   if (value === 3) break;
//   console.log(value);
// }

// let num = [1, 2, 3, 4];
// num.forEach(value => {
//   if (value === 3) return;
//   console.log(value);
// });
// isArray() method का उपयोग करके यह जाँचिए कि दिया गया data array है या नहीं।
// let data = [10, 20, 30];
// // console.log(Array.isArray([10, 20, 30]));

// 📘 JavaScript Array Methods – Next 25 Questions (Set-3)

// map() method का उपयोग करके array के सभी elements में 5 जोड़कर नया array बनाइए।
// let num=[10,20,30,40,50,60,70,80,90]
// let add=num.map((n)=>n+5)
// console.log(add);
// filter() method की मदद से array में से सभी odd numbers अलग कीजिए।
//  let num=[10,21,30,41,50,63];
//  let odd=num.filter(item => item % 2 !==0)
//  console.log(odd);
// reduce() method का उपयोग करके array में से smallest value (minimum) निकालिए।
// let num=[10,21,30,41,50,63];
// let smallest=num.reduce((a,b)=>a<b?a:b)
// console.log(smallest);
// reduce() method की सहायता से array में total odd numbers की count निकालिए।
// let num = [10,21,30,41,50,63];
// let oddCount = num.reduce((count, current) => {
//   return current % 2 !== 0 ? count + 1 : count;
// }, 0);
// console.log(oddCount);
// find() method का उपयोग करके पहला string element खोजिए।
// let arr=[10,21,30,41,"pawan",50,63];
// let str=arr.find(n=> typeof n==="string")
// console.log(str);
// findLast() method क्या करता है? उदाहरण सहित समझाइए।
// let arr=[10,21,30,41,"pawan",50,63];
// let newarr=arr.findLast(n=> typeof n==="number")
// console.log(newarr);

// let arr=[20,50,60,"pawan",70,80,"grover",100]
// let str=arr.findLast(n=> typeof n ==="string")
// console.log(str);

// let num = [10,21,30,41,50,63];
// let even=num.findLast(n=>n%2===0)
// console.log(even);
// at() method का उपयोग करके array का last element निकालिए।
// let arr = ["pawan", "grover", "javascript"];
// let lastvalue=arr.at(-1);
// console.log(lastvalue);

// 1️⃣ Array का sum निकालिए
// let arr = [10, 20, 30, 40, 50];
// let sum = arr.reduce((a, b) => {
//   return a + b;
// }, 0);
// console.log(sum);

// 2️⃣ Array का largest number निकालिए
// let arr = [12, 45, 7, 89, 23];
// let largest=arr.reduce((a,b)=>a>b?a:b)
// console.log(largest);
// 3️⃣ Array को reverse कीजिए
// let arr = [1, 2, 3, 4, 5];
// let reverse = arr.reverse();
// console.log(reverse);

// 4️⃣ Array में even numbers निकालिए
// let arr = [10, 15, 22, 33, 40, 55];
// let even=arr.filter((item)=>item%2===0)
// console.log(even);

// 5️⃣ Array में odd numbers निकालिए
// let arr = [11, 20, 33, 44, 55];
// let odd = arr.filter((item) => item % 2 !== 0);
// console.log(odd);

// 6️⃣ Array में string find कीजिए
// let arr = [10, 20, "pawan", 30, "hello"];
// let str=arr.filter((item)=> typeof item==="string")
// console.log(str);

// 7️⃣ Array से duplicate remove कीजिए
// let arr = [10, 20, 10, 30, 40, 20];
// let num = new Set(arr);
// console.log(num);

// 8️⃣ Array के सभी numbers का square निकालिए
// let arr = [2, 4, 6, 8];
// let squre=arr.map((n)=>n*2)
// console.log(squre);

// 9️⃣ Array में numbers को ascending order में sort कीजिए
// let arr = [50, 10, 30, 20, 40];
// let ase = arr.sort((a, b) => a - b);
// console.log(ase);

// 🔟 Array में numbers > 25 find कीजिए
// let arr = [10, 25, 30, 15, 40];
// let no=arr.find((n)=>n>25)
// console.log(no);
// 1️⃣1️⃣ Array की length निकालिए
// let arr = [5, 10, 15, 20, 25];
// let newarr=arr.length
//     console.log(newarr);

// 1️⃣2️⃣ Array में smallest number निकालिए
// let arr = [45, 12, 78, 3, 29];
// let smallest =arr.reduce((curr,index)=>curr>index? index:curr)
// console.log(smallest);

// 1️⃣3️⃣ Array में number exist करता है या नहीं
// let arr = [10, 20, 30, 40, 50];
// let array=arr.includes(20)
// console.log(array);

// 1️⃣4️⃣ Array के सभी elements को double कीजिए
// let arr = [2, 4, 6, 8];
// let array=new Set(arr)
// console.log(array);

// 1️⃣5️⃣ Array से negative numbers निकालिए
// let arr = [10, -5, 20, -8, 30];
// let array=arr.filter((item)=>item<0)
// console.log(array);

// 1️⃣6️⃣ Array के numbers का average निकालिए
// let arr = [10, 20, 30, 40];
// let array=arr.reduce((curr,index)=> {return index +curr },0)
// console.log(array);

// 1️⃣7️⃣ Array में strings count कीजिए
// let arr = [10, "hello", 20, "pawan", 30];
// let array=arr.filter(item => typeof item==="string").length
// console.log(array);

// 1️⃣8️⃣ Array को string में convert कीजिए
// let arr = ["HTML", "CSS", "JavaScript"];
// let array=arr.join(" ")
// console.log(array);

// 1️⃣9️⃣ Array का last element निकालिए
// let arr = [100, 200, 300, 400];
// let array=arr.at(-1)
// console.log(array);

// 2️⃣0️⃣ Array में numbers > 20 count कीजिए
// let arr = [10, 25, 30, 5, 40];
// let array=arr.filter((item)=> item>20).length
// console.log(array);

// 2️⃣1️⃣ Array के सभी numbers को add करके total निकालिए
// let arr = [5, 10, 15, 20];
// let array=arr.reduce((index,curr)=> {return index+curr},0)
// console.log(array);

// 2️⃣2️⃣ Array में से 50 से बड़ा पहला number find कीजिए
// let arr = [20, 35, 60, 10, 80];
// let array=arr.find((n)=>n>50)
// console.log(array);
// 2️⃣3️⃣ Array में से केवल numbers निकालिए
// let arr = [10, "hello", 20, "JS", 30];
// let array=arr.filter((item)=> typeof item==="number")
// console.log(array);

// 2️⃣4️⃣ Array के सभी numbers का cube निकालिए
// let arr = [2, 3, 4];
// let array=arr.map((n)=>n*3)
// console.log(array);

// 2️⃣5️⃣ Array में 25 से छोटे numbers निकालिए
// let arr = [10, 25, 5, 40, 20];
// let array=arr.filter((item)=>item<25)
// console.log(array);

// 2️⃣6️⃣ दो arrays को merge कीजिए
// let a = [10, 20];
// let b = [30, 40];
// let c=a.concat(b)
// console.log(c);

// 2️⃣7️⃣ Array में number की frequency count कीजिए
// let arr = [10, 20, 10, 30, 10, 20];
// let array=arr.filter(item => item===10).length
// console.log(array);

// यह पता लगाइए 10 कितनी बार आया है।

// 2️⃣8️⃣ Array को descending order में sort कीजिए
// let arr = [5, 1, 9, 3, 7];
// let array=arr.sort((a,b)=>b-a)
// console.log(array);

// 2️⃣9️⃣ Array में से last two elements निकालिए
// let arr = [10, 20, 30, 40, 50];
// let array=arr.slice(-2)
// console.log(array);

// 3️⃣0️⃣ Array में हर element के साथ "JS" जोड़िए
// let arr = ["HTML", "CSS", "React"];
//  let array=arr.map((n)=>n+ " js")
//  console.log(array);

// 3️⃣1️⃣ Array में सभी numbers को 5 से multiply कीजिए
// let arr = [2, 4, 6, 8];
// let array=arr.map((n)=>n*5)
// console.log(array);
// 3️⃣2️⃣ Array में से 20 से बड़े numbers निकालिए
// let arr = [10, 25, 15, 30, 5];
// let array=arr.filter((item)=>item>20)
// console.log(array);

// 3️⃣3️⃣ Array में से केवल strings निकालिए
// let arr = [10, "HTML", 20, "CSS", 30, "JS"];
// let array=arr.filter(item => typeof item=== "string")
// console.log(array);

// 3️⃣4️⃣ Array में से negative numbers निकालिए
// let arr = [10, -5, 20, -8, 30];
// let array=arr.filter((item)=>item<0)
// console.log(array);

// 3️⃣5️⃣ Array में total elements count कीजिए
// let arr = [5, 10, 15, 20, 25];
// let array=arr.length
// console.log(array);

// 3️⃣6️⃣ Array में से first element निकालिए
// let arr = [100, 200, 300, 400];
// let array=arr.at(0)
// console.log(array);

// 3️⃣7️⃣ Array में से second element निकालिए
// let arr = [50, 60, 70, 80];
// let array=arr.at(1)
// console.log(array);
// 3️⃣8️⃣ Array में सभी elements को uppercase में convert कीजिए
// let arr = ["html", "css", "javascript"];
// let array=arr.map((n)=>n.toUpperCase())
// console.log(array);

// 3️⃣9️⃣ Array में से even numbers count कीजिए
// let arr = [10, 15, 22, 33, 40, 55];
// let array=arr.filter((item)=>item %2===0).length
// console.log(array);

// 4️⃣0️⃣ Array में से odd numbers निकालिए
// let arr = [11, 20, 33, 44, 55];
// let array=arr.filter((item)=>item %2!==0)
// console.log(array);

// 4️⃣1️⃣ Array के सभी elements को string में convert कीजिए
// let arr = [10, 20, 30, 40];
// let array=arr.toString()
// console.log(array);

// 4️⃣2️⃣ Array में smallest number find कीजिए
// let arr = [45, 12, 78, 3, 29];
// let array=arr.reduce((pre,curr)=>{ return pre<curr?pre:curr})
// console.log(array);
// // 4️⃣3️⃣ Array में largest number find कीजिए
// let arr = [10, 50, 30, 70, 20];
// let array=arr.reduce((pre,curr)=>{return pre>curr?pre:curr})
// console.log(array);
// 4️⃣4️⃣ Array को alphabetical order में sort कीजिए
// let arr = ["banana", "apple", "mango", "grapes"];
// let array=arr.sort()
// console.log(array);
// 4️⃣5️⃣ Array में से duplicate values निकालिए
// let arr = [10, 20, 10, 30, 40, 20];
// let array=[...new Set(arr)]
// console.log(array);

// 4️⃣6️⃣ Array के सभी numbers का square निकालिए
// let arr = [2, 3, 4, 5];
// let array=arr.map(n=>n*n)
// console.log(array);

// 4️⃣7️⃣ Array में से 10 से छोटे numbers निकालिए
// let arr = [5, 12, 8, 20, 3];
// let array = arr.filter((item) => item < 10);
// console.log(array);

// 4️⃣8️⃣ Array में सभी strings की length निकालिए
// let arr = ["HTML", "CSS", "JavaScript",22,2];
// let array=arr.filter(n=> typeof n==="string").map(n=>n.length)
// console.log(array);
// 4️⃣9️⃣ Array में total sum निकालिए
// let arr = [10, 20, 30, 40];
// let array = arr.reduce((index, curr) => {
//   return index + curr;
// }, 0);
// console.log(array);

// 5️⃣0️⃣ Array में average निकालिए
// let arr = [10, 20, 30, 40];
// let array = arr.reduce((a, b) => a + b) / arr.length;
// console.log(array);
// 5️⃣1️⃣ Array में से 30 से बड़ा पहला number find कीजिए
// let arr = [10, 25, 35, 40, 5];
// let array = arr.find((n) => n > 30);
// console.log(array);

// 5️⃣2️⃣ Array में check कीजिए कि 50 मौजूद है या नहीं
// let arr = [10, 20, 30, 40, 60];
// let array=arr.includes(50)
// console.log(array);
// 5️⃣3️⃣ Array के सभी numbers को string में convert कीजिए
// let arr = [10, 20, 30];
// let array = arr.map((n) => n.toString());
// console.log(array);

// 5️⃣4️⃣ Array में से केवल even numbers निकालिए
// let arr = [1, 2, 3, 4, 5, 6];
// let array = arr.filter((item) => item % 2 === 0);
// console.log(array);
// 5️⃣5️⃣ Array में से केवल odd numbers count कीजिए
// let arr = [1, 2, 3, 4, 5, 6];
// let array = arr.filter((item) => item % 2 !== 0).length;
// console.log(array);
// 5️⃣6️⃣ Array के सभी numbers को 3 से divide कीजिए
// let arr = [9, 12, 15, 18];
// let array = arr.map((n) => n / 3);
// console.log(array);
// 5️⃣7️⃣ Array में से last element निकालिए
// let arr = [10, 20, 30, 40];
// let array = arr.at(-1);
// console.log(array);
// 5️⃣8️⃣ Array को reverse कीजिए
// let arr = [1, 2, 3, 4, 5];
// let array = arr.reverse();
// console.log(array);

// 5️⃣9️⃣ Array में से strings को remove कीजिए
// let arr = [10, "HTML", 20, "CSS", 30];
// let array = arr.filter((item) => typeof item !== "string")
// console.log(array);
// 6️⃣0️⃣ Array में से duplicate numbers remove कीजिए
// let arr = [1, 2, 2, 3, 4, 4, 5];
// let array=[...new Set(arr)]
// console.log(array);

// 6️⃣1️⃣ Array के सभी numbers का double निकालिए
// let arr = [3, 6, 9, 12];
// let array = arr.map((n) => n + n);
// console.log(array);

// 6️⃣2️⃣ Array में से 15 से बड़े numbers निकालिए
// let arr = [10, 18, 5, 22, 30];
// let array = arr.filter((item) => item > 15);
// console.log(array);
// 6️⃣3️⃣ Array में से पहला even number find कीजिए
// let arr = [11, 15, 18, 21, 24];
// let array = arr.find((n) => n % 2 == 0);
// console.log(array);
// 6️⃣4️⃣ Array के सभी numbers का square sum निकालिए
// let arr = [2, 3, 4];
// let array = arr.map(n => n*n).reduce((a,b)=>a+b)
// console.log(array);
// 6️⃣5️⃣ Array में total elements count कीजिए (loop का उपयोग करके)
// let arr = [10, 20, 30, 40, 50];
// let count = 0

// for(let i=0;i<arr.length;i++){
//  count++
// }

// console.log(count)

// 6️⃣6️⃣ Array में check कीजिए कि कोई number 100 से बड़ा है या नहीं
// let arr = [20, 40, 60, 80, 120];
// let array = arr.some(n => n > 100)
// console.log(array);

// 6️⃣7️⃣ Array में से केवल numbers निकालिए
// let arr = [10, "HTML", 20, "CSS", 30, "JS"];
// let array = arr.filter((item) => typeof item === "number");
// console.log(array);

// 6️⃣8️⃣ Array के सभी strings को lowercase में convert कीजिए
// let arr = ["HTML", "CSS", "JAVASCRIPT"];
// let array = arr.map(n => n.toLowerCase())
// console.log(array);
// 6️⃣9️⃣ Array में से last 3 elements निकालिए
// let arr = [10, 20, 30, 40, 50, 60];
// let array = arr.slice(-3);
// console.log(array);

// 7️⃣0️⃣ Array को ascending order में sort कीजिए
// let arr = [25, 10, 35, 5, 20];
// let array = arr.sort((a, b) => a - b);
// console.log(array);
// 7️⃣1️⃣ Array में से duplicate numbers निकालिए
// let arr = [1, 2, 2, 3, 4, 4, 5];
// let array=let array = [...new Set(arr)]
// console.log(array);
// 7️⃣2️⃣ Array में हर number में 10 add कीजिए
// let arr = [5, 10, 15, 20];
// let array = arr.map((n) => n + 10);
// console.log(array);
// 7️⃣3️⃣ Array में check कीजिए कि सभी numbers positive हैं या नहीं
// let arr = [10, 20, 30, -5, 40];
// let array = let array = arr.every(n => n > 0)
// console.log(array);
// 7️⃣4️⃣ Array में से smallest number find कीजिए
// let arr = [45, 12, 78, 3, 29];
// let array=arr.reduce((pre,curr)=>pre<curr?pre:curr)
// console.log(array);
// 7️⃣5️⃣ Array में से largest number find कीजिए
// let arr = [10, 50, 30, 70, 20];
// let array=arr.reduce((pre,curr)=>pre>curr?pre:curr)
// console.log(array);

// 7️⃣6️⃣ Array को reverse किए बिना last element निकालिए
// let arr = [10, 20, 30, 40, 50];
// console.log(arr[arr.length - 1]);

// 7️⃣7️⃣ Array में सभी elements का product निकालिए
// let arr = [2, 3, 4];
// let product = arr.reduce((acc, curr) => acc * curr, 1);
// console.log(product); // 24
// 7️⃣8️⃣ Array में से duplicate values identify कीजिए (सिर्फ duplicates निकालो)
// let arr = [1, 2, 2, 3, 4, 4, 5];
// let duplicates = arr.filter((item, index) => arr.indexOf(item) !== index);
// console.log(duplicates);

// 7️⃣9️⃣ Array में सबसे ज्यादा बार आने वाला element find कीजिए
// let arr = [1, 2, 2, 3, 3, 3, 4];

// let freq = {};
// let max = 0;
// let result;

// for (let num of arr) {
//   freq[num] = (freq[num] || 0) + 1;
//   if (freq[num] > max) {
//     max = freq[num];
//     result = num;
//   }
// }

// console.log(result); // 3
// 8️⃣0️⃣ Nested array को flat कीजिए (1 level)
// let arr = [1, 2, [3, 4], 5];
// let array = arr.flat();
// console.log(array);
// 8️⃣1️⃣ Array में से falsy values remove कीजिए
// let arr = [0, 1, false, 2, "", 3, null, undefined];
// let array = arr.filter(Boolean);
// console.log(array); // [1, 2, 3]
// 8️⃣2️⃣ Array को chunk में divide कीजिए (size = 2)
// let arr = [1, 2, 3, 4, 5, 6];
// let size = 2;
// let result = [];

// for (let i = 0; i < arr.length; i += size) {
//   result.push(arr.slice(i, i + size));
// }

// console.log(result); // [[1,2],[3,4],[5,6]]
// 8️⃣3️⃣ Array में unique values count कीजिए
// let arr = [1, 2, 2, 3, 4, 4, 5];
// let count = new Set(arr).size;
// console.log(count);
// 8️⃣4️⃣ Array में से string numbers को number में convert कीजिए
// let arr = ["10", "20", "30"];
// let array=arr.map((item)=>Number(item))
// console.log(array);
// 8️⃣5️⃣ Array में से vowels count कीजिए
// let arr = ["a", "b", "e", "g", "i"];
// let count = arr.filter((item) =>
//   ["a", "e", "i", "o", "u"].includes(item),
// ).length;
// console.log(count);
// 8️⃣6️⃣ Array में सभी elements को join करके string बनाइए
// let arr = ["I", "love", "JS"];
// let array=arr.join(" ")
// console.log(array);
// 8️⃣7️⃣ Array में से हर second element निकालिए
// let arr = [10, 20, 30, 40, 50, 60];
// let array = arr.filter((item, index) => index % 2 === 1);
// console.log(array);
// 8️⃣8️⃣ Array में से first 3 smallest numbers निकालिए
// let arr = [10, 5, 20, 3, 8, 15];
// let array = arr.sort((a, b) => a - b).slice(0, 3);
// console.log(array);
// 8️⃣9️⃣ Array में check कीजिए कि कोई duplicate है या नहीं
// let arr = [1, 2, 3, 3, 4, 5];
// let hasDuplicate = new Set(arr).size !== arr.length;
// console.log(hasDuplicate);
// 9️⃣0️⃣ Array को rotate कीजिए (left rotation by 1)
// let arr = [1, 2, 3, 4, 5];
// let first = arr.shift(); // first element nikal liya
// arr.push(first);         // end me daal diya
// console.log(arr);

// 9️⃣1️⃣ Array में second largest number find कीजिए
// let arr = [10, 50, 30, 70, 20];
// let array=arr.sort((a,b)=>a-b).at(-2)
// console.log(array);

// 9️⃣2️⃣ Array में second smallest number find कीजिए
// let arr = [45, 12, 78, 3, 29];
// let array=arr.sort((a,b)=>a-b).at(1)
// console.log(array);
// 9️⃣3️⃣ Array में सभी elements unique हैं या नहीं check कीजिए
// let arr = [1, 2, 3, 4, 5];
// let array=new Set(arr).size===arr.length
// console.log(array);
// 9️⃣4️⃣ दो arrays का intersection निकालिए (common elements)
// let a = [1, 2, 3, 4];
// let b = [3, 4, 5, 6];
// let array=a.filter(item=>b.includes(item))
// console.log(array);
// 9️⃣5️⃣ दो arrays का difference निकालिए
// let a = [1, 2, 3, 4];
// let b = [3, 4, 5, 6];
// let array=a.filter(item=>b.includes(item))
// console.log(array);
// 9️⃣6️⃣ Array में maximum difference (max - min) निकालिए
// let arr = [10, 2, 50, 1, 30];
// let array=arr.sort((a,b)=>a-b)
// let diff=array[array.length-1]-array[0]
// console.log(diff);
// 9️⃣7️⃣ Array में सभी elements palindrome हैं या नहीं check कीजिए
// let arr = ["madam", "level", "wow"];

// let array = arr.map((n) =>
//   n === n.split("").reverse().join("") ? "palindrome" : "not palindrome",
// );

// console.log(array);
// 9️⃣8️⃣ Array में words की total length निकालिए
// let arr = ["JS", "is", "fun"];
// let array=arr.map(n=>n.length)
// console.log(array);
// 9️⃣9️⃣ Array में सबसे लंबा word find कीजिए
// let arr = ["HTML", "CSS", "JavaScript", "React"];
// let longest = arr.reduce((a,b) => a.length > b.length ? a : b);
// console.log(longest);
// 💯 1️⃣0️⃣0️⃣let arr = [1, 2, 3, 4, 5, 6];

// let result = arr.reduce((acc, curr) => {
//   if(curr % 2 === 0){
//     acc.even.push(curr);
//   } else {
//     acc.odd.push(curr);
//   }
//   return acc;
// }, { even: [], odd: [] });

// console.log(result);

// 1.	Add "mango" at the end of fruits
// let fruit =["apple","orange"]
// fruit.push("mango")
// console.log(fruit);

// 2.	Remove last element from nums.
// let num =[1,2,3,4,5]
// num.pop()
// console.log(num);
// 3.	Add 0 at start of arr.
// let num =[1,2,3,4,5]
// num.unshift(0)
// console.log(num);
// 4.	Remove first element from data.
// let color=["orange","red","green"]
// color.shift()
// console.log(color);
// 5.	Print length of colors.
// let color=["orange","red","green"]
// console.log(color.length);
// 6.	Check if "cat" exists in array.
// let animal =["horse","mouse","cat","lion","tiger"]
// let check=animal.includes("cat")
// console.log(check);
// 7.	Join array using comma ,
// let animal =["horse","mouse","cat","lion","tiger"]
// let add=animal.join(",")
// console.log(add);
// 8.	Merge a and b.
// let line1="a";
// let line2="b";
// let merge=line1.concat(line2)
// console.log(merge);
// 9.	Convert "HELLO" into array.
// let arr="HELLO";
// let newarr=Array.from(arr)
// console.log(newarr);
// 10.	Sort numbers [3,1,2] correctly.
// let num=[3,1,2]
// let newarr=num.sort((a,b)=>a-b)
// console.log(newarr);
// 11.	Find first value > 50.
// let num=[2,5,6,20,25,24,55,65,69,77]
// let arr=num.find((n)=>n>50)
// console.log(arr);
// 12.	Find index of "pen".
// let arr=["pen","animal","horse","orange"]
// let newarr=arr.findIndex((n)=>n==="pen")
// console.log(newarr);
// 13.	Slice first 3 elements.
//  let num=[2,5,6,20,25,24,55,65,69,77]
//  let arr=num.slice(0,3)
//  console.log(arr);
// 14.	Remove 1 element from index 0.
//  let num=[2,5,6,20,25,24,55,65,69,77]
//  num.shift()
//  console.log(num);
// // 15.	Add "A" at index 1 using splice.
//  let num=[2,5,6,20,25,24,55,65,69,77]
//  num.splice(1,0,"A")
//  console.log(num);
// 16.	Check if 100 is present.
// let num=[2,5,6,20,25,24,55,65,69,77]
// let arr=num.includes(100)
// console.log(arr);
// 17.	Join using "|".
// let num=[2,5,6,20,25,24,55,65,69,77]
// let arr=num.join("|")
// console.log(arr);
// 18.	Merge 3 arrays.
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 = [7, 8, 9];

// let merged = arr1.concat(arr2, arr3);

// console.log(merged);
// 19.	Get length after push.
// let num = [2, 5, 6, 20, 25, 24, 55, 65, 69, 77];
// num.push(100);
// console.log(num.length);
// 20.	Convert NodeList-like object using Array.from.
// let obj = {
//   0: "HTML",
//   1: "CSS",
//   2: "JavaScript",
//   length: 3,
// };
// let arr = Array.from(obj);
// console.log(arr);
// ________________________________________
// ________________________________________
// 🟡 Medium (21–35)
// 21.	Remove 2 elements starting index 2.
// 22.	Add two numbers at index 3.
// 23.	Slice last 4 values.
// 24.	Find first even number.
// 25.	Find index of value > 20.
// 26.	Sort descending.
// 27.	Join words with space.
// 28.	Combine names + surnames arrays.
// 29.	Remove middle element.
// 30.	Check "JS" exists.
// 31.	Add at start & end.
// 32.	Remove first & last.
// 33.	Extract between index 2–5.
// 34.	Create array from "12345" and convert to numbers.
// 35.	Find first word longer than 5 letters.
// ________________________________________
// ________________________________________
// 🔴 Hard (36–50)
// 36.	Insert "X" "Y" at middle.
// 37.	Remove all elements except first 2.
// 38.	Clone array using slice.
// 39.	Sort objects by age.
// 40.	Find user with id 3.
// 41.	Find index of price > 500.
// 42.	Merge and then sort ascending.
// 43.	Remove duplicates (use includes).
// 44.	Create array from Set using Array.from.
// 45.	Replace 2 elements starting index 1.
// 46.	Join numbers with -.
// 47.	Remove negative numbers using splice.
// 48.	Add multiple elements at start.
// 49.	Slice without using negative indexes to get last 3.
// 50.	Convert arguments object to array.

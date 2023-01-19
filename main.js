// console.log('hello world')
// console.error('this is error')
// console.warn("this is warning");
// alert('this is alert!!!');
// prompt("this is prompt???")

//var

// var name = "aram";
// name = "ahmed"
// var name = "morad"

// let
// let age = 20 ;
// console.log(age)
// // let age = 30 ;
// age = 30 ;
// console.log(age);


// let vs var

// if(true){
//     let x = 10;
//     var y = "hello"
//     console.log("inBlock : ",x)
//     console.log("Y inBlock : ",y)
// }
// // console.log("OutBlock : ",x)
// console.log("Y OutBlock : ",y)

//constant
// // const name = ["majid" , "aram"];

// console.log(name)


//***************datatypes**************/

// let name = "foulen" //string;
// let age = 25 ; //number
// let isStudent = false;//boolean

// let arrOfFalse = [0,"",false , NaN , null , undefined ]
// console.log(Boolean())
// let obj ={
//     name:name,
//     age:age,
//     isStudent:isStudent,
//     favoriteFoods : ["pizza","pasta","ma9loub"],
//     eyeColor:"green"
// }

// let users = [
//     {
//         name:"aram",
//         role:"x"
//     },
//     {
//         name:"morad",
//         role:"y"
//     },
//     {
//         name:"ahmed",
//         role:"a"
//     },
//     {
//         name:"majid",
//         role:"b"
//     }
// ]

// console.table(users)


// console.log(obj)

// console.log(`my name is ${name} i'm ${age} years old and i'm ${isStudent ? "student" : "not student"}`)
// console.table(arrOfFalse)

// let name = "foulen";
// let lastName = ' ben Foulen';

// console.log("my name is" + name + lastName);

// console.log('je m\'appelle wtvr');

// const str = "Hello World";

// console.log(str.toLowerCase())
// console.log(str.toUpperCase())
// console.log(str.length)
// console.table(str.split("l").join('K'))


/**********************Array*****************/

// const arr = ["ahmed", "aram", "elyes" , "majid"];
// arr.push("slh")
// let obj = {}
// arr.unshift("lotfi")
// arr.shift()
// arr.pop()
// arr = 1;
// console.log(arr.indexOf('aram'))


/*************Arith op**************/
// + , - , * , / , % , ++ , -- , **

// let x = 10 ; 
// let y = 5 ;
// let a = x+y
// console.log("FirstOne : ",++y)
// console.log("secondOne : ",y)
// console.log(3*'TEXT')


/*********************Obj literals***************/

// const Student = {
//     name : "aram",
//     age : 20 ,
//     isStudent : true,
//     favoriteFoods : ["pizza","pasta","ma9loub"],
//     frinds:[
//         {
//         name:"ahmed",
        
//         },
//         {
//         name:"majid"
//         }
//     ]
// }

// console.log(Student.favoriteFoods)

// Student.name = "foulen";
// Student.eyeColor = "black"
// Student.favoriteFoods.push("3jja")
// delete(Student.frinds)
// console.log(Student)

// const tab =[1,2,3];
// tab = [1,2]
// // tab[1] = 5;
// console.log(tab)

// let x = true ;
// // let y = "10"
// // y =x 
// console.log(!x)


/**************Logical Ope************/
// // Returns first value if falsy

// console.log(1 && "hello" && null && 0 && 5 )

// // Returns first value if truthy

// console.log(1 || "hello" || null || 0 || 5 )

// const numbers = [22, 55, 66];

// for(num in numbers){
//     console.log(num)
// }
// for(num in numbers){
//     console.log(num)
// }

// let result = '';
// let i = 0;

// do {
//   i = i + 1;
//   result = result + i;
// } while (i < 5);

// console.log(result);

/***************Condition******************/

// let x = 0 ;

// if(x<10){
//     x++
//     console.log(x)
// }else if(x>10){
//     console.log("x grater than 10");
// }else{
//     console.log("x equal to 10")
// }

// ***** Switch (/!\break)
// let number = 5;

// switch (number) {
// case 5:
// console.log('color is red');
// break;
// case 2:
// console.log('color is blue');
// break;
// default:
// console.log('color is neither red nor blue');
// }

// ***** Ternary operator / Shorthand if

// let x =10 ;

// x ===10  ? console.log("x equal to 10 ") : x >10 ? console.log("x grater than 10")  :console.log("x less than 10")

// function add(a,b){
//     console.log(a+b) 
// }

// add(8,9)
// let sum = 0
// const minus = (a,b)=> {
//     return sum = a-b
// }

// minus(5,9)
// console.log(sum)
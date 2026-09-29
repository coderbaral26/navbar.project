//variable
//1-var
//2-let
//3-const

// console.log("hey i am ananya")

// var StudentName = "Ananya Baral"
// var StudentName = "Julie"
// console.log(StudentName);


//1-var  

// var Result = 300;
// var Result = 500;
// console.log(Result)

// re-declar and re-assign

//2- let
// let Student = "Rohan Pradhan"
// Student = "Ananya"

// console.log(Student)

//  No Re-declear but Re-assign

//3-const

// const RollNo = 12;
// RollNo = 28;
// console.log(RollNo)

// No Redeclear No Re-assign

//   1-Primitive Data Types
// a- Number
// let RollNo = 40
// console.log(typeof(RollNo))

//  b-String
//  let name="Ananya"
//  console.log(typeof(name))

//  c-Boolean
// let itsmylapi = true;
// console.log(typsof(itsmylapi))

// let itsmyph=false
// console.log(typeof(itmyph))

//  d-Null
// let money=null
// console.log(typeof(money))

//   e-Undefined
// let ju;
// console.log(typeof(ju))

//    f-BigInt
// let salary=2000000000000000000000000000n
// console.log(typeof(salary))



// 2-Non Primitive
//  a-Object
// let StudentData={
//     Name: "Ananya" ,
//     rollNo :30,
//     regdno:2301298312,
//     mail: "ananyabaral08 @gmail.com",
//     Dist:"Puri",
//     State:"Odisha",
//     FatherName:"Manoranjan Baral",
//     MotherName:"Nirupama Baral"

// }
// console.log(typeof(StudentData))

// //  b-Array
// let CarLists=["Tesia","BMW","Audi","Ferrari","Toyota","Honda","Toyota","Kia","Nissan","Jeep","Lexus","Jaguar","Mustang","camaro","Bugatti","Suzuki","Chevrolet","Lamborgini"]
// console.log(typeof(CarLists))



// let a = 20;
// let b = 50;
// 1-Arithmetic Operations

// a- Addition +
// console.log(a + b)

// b- Substraction -
// console.log(a - b)

// c- Multiplication *
// console.log(a * b)

// d- Division /
// console.log(a / b)

// e- Modulus %
// console.log(a % b)

// f- Exponent **
// console.log(a ** b)

// g- Increment ++
// let c = ++b
// console.log(c)

// h- Decrement -- 
// let d = --b
// console.log(d)





// 2-Assignment Operators

// a-Assign 
// let Name = "Ananya"
// console.log(Name)

// b- Add & Assign
// let x=5;
// x +=20;
// console.log(x)

// c- Substract & Assign
// let y=40;
// y -=10;
// console.log(y)

// d- Multiply & Assign
// let z=10;
// z *=10;
// console.log(z)

// e- Divide & Assign
// let o=5;
// o /=15;
// console.log(o)

// f- Modulus & Assign
// let f=20;
// f %=41;
// console.log(f)








// 3- Comparison Operators
// a- Equalto(value only)
// let a= 20
// let b=5
// console.log(a==b);

// b- Strict equal
// console.log(a===b);

// c-Not Equal
// console.log(a!=b);

// d-Strict Not Equal
// console.log(a!==b);

//  e- Greater than
// console.log(a>b);

//  f- less than
// console.log(a<b);

//  g-Greater than Equal
// console.log(a>=b);

//  h-less than equal
// console.log(a<=b) 


// 4- Logical Operator
//  a- AND (&&)
// let aa=10;
// let bb=15;

// if(aa && bb){
//     console.log("Both are Here")
// }

//  b- OR (||)
// let aa=17;
// let bb=5;
// if(aa || bb){
//     console.log("Both are here")
// }

//  c- NOT(!)
// let aa=true;
// if (!aa){
//     console.log("hey")
// }



//  5- String Operator
// let name="Ananya"
// let title="Baral"

// if FullName =name + Title

//     console.log(FullName)

//     console.log("Arpita"+"Baral")

// 6- Ternary Operator
// let age = 30;
// let number = age >= 18 ? "Vote" : "Not Vote"
// console.log(number)








// LOOPS
// 1-for loop
//  print 1 to 5

// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)

for (let i = 1; i <= 5; i++){
    console.log(i)
}

let student = ["A","B","C","D","E"]
for (let i = 0; i<student.length;i++){
    console.log(student[i]);
}

for(let i=100; i >= 1; i--){
    console.log(i)
}

let sum =0;
for(let i=1; i<=10;i++ ){
    sum+=i
    
}
console.log(sum)
let num=2
for (let i=1;i<=10;i++){
    console.log(num+ "X"+i+"="+num*i);
}

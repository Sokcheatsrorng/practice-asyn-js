'use strict'
// learn function in javascript

// normal function

// function sayHello(){
//     console.log("hello world");
//     return 'Hello everyone';
// }

// const text = sayHello();
// console.log(text);

// // arrow function 
// const sum = () => 10+20; 
// console.log(sum());
//  // no need to use return keyword for arrow functions as 
//  // arrow function with parameters 
//  const mul = (a,b)=> a*b;
//  console.log(mul(5,3));

//  // spread with arrow function
//  const sum1 = (b,...a)=>{
//     // console.log("a : ",a);
//     // console.log("b : ",b);
//     let total = 0;
//     for(let i = 0;i<a.length; i++){
//         total += a[i];
//     }
//     return total;
//  }
//  console.log(sum1(10,20,30,40,50));

//  // Copy Array with 3 ways slice , from, spread operator
//  //slice 
//  const scores = [10,20,30,49];
//  const copyScore1 = scores.slice();
//  console.log(copyScore1);

//  // from function
//  const copyScore2 = Array.from(scores);
//  console.log(copyScore2);

//  // spread operator
//  const copyScore3 = [...scores];
//  console.log(copyScore3);

//  // Destructuring Array 
//  const product = {
//     id: 1,
//     name:"Delulu",
//     price : 1.23,
//     stock: 10
//  };
//  const{id,name,price,stock} = product;
//  console.log("id :",id);
//  console.log("name :",name);
//  console.log("price :",price);
//  console.log("stock :",stock);

//  const printProduct = ({id,name,price,stock})=>{
//     console.log(` id = ${id}`);
//     console.log(` name = ${name}`);
//     console.log(` price= ${price}`);
//     console.log(` stock = ${stock}`);
//  };
// printProduct(product);


// // Destructuring by Array 
// const priceList = [10,20,30,50];
// // const [prcie1,price2,price3,price4] = priceList;
// const [price1,price2,...rest]= priceList;
// console.log(price1,price2,rest);
// // ignore price that we don't wanna display
// const [,,price3,price4]= priceList;
// console.log(price3,price4);








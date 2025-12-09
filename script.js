 // var a=10;
 // function abc(){
 //     // a=20;
 //     console.log(a);
 // }
 // console.log(a);
 // abc();

// function even(num){
//     if(num%2==0){
//         return 'Even';
//     }else{
//         return 'Odd';
//     }
// }

// console.log(even(4));


// const even2 = (num) => { 
//     let mod = num%2==0 ? 'Even' : 'Odd';
//     return mod;
// }
//  arrow function -> used to write shorter functions 
// console.log(even2(5));

// let array= [1,23,231,12];
// console.log(array[3]);

// const student = {
//         name: 'Arush',
//         age: 18
//     };

//      student = {
//          name: 'John'
//      };

//     student.name = 'Piyush'; //this allows the change coz it changes the property of the object not the object itself

// console.log(student.name);


// let a = document.querySelector('p')
// a.addEventListener('click', function(dts){
//     a.innerText = 'You clicked me!';
// })
// let b = document.querySelector('input')
// b.addEventListener('input', function(ats){
//     a.innerText = 'You typed!';
// })
// change to explore (like input)
// b.addEventListener('change', function(ats){
//     a.innerText = 'You changed the input!';
// })

// let c = document.querySelector('h1')
// window.addEventListener("keydown", function(mts){
//     c.innerText = mts.key
// })


let btn1= document.querySelector('#btn1')
btn1.addEventListener('click', function(){
    document.body.style.backgroundColor = 'lightblue';
})

let btn2= document.querySelector('#btn2')
btn2.addEventListener('click', function(){
    document.body.style.backgroundColor = 'gray';
})

let btn3= document.querySelector('#btn3')
btn3.addEventListener('click', function(){
    document.body.style.backgroundColor = 'yellow';
})
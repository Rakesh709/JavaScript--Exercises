//Triangle Pattern — I
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

// for(let i=1; i<=5; i++){
//     let num =''
//     for(let j=1; j<=i; j++){
//         num+=j
//     }
//     console.log(num);
    
// }


// Triangle Pattern — II
// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5
// for(let i=1; i<=5; i++){
//     let num=''
//     for(let j=1; j<=i; j++){
//         num+=i
//     }
//     console.log(num);
    
// }



// for(let i=1; i<=5;i++){
//     let num='';
//     for(let j=1; j<=i ;j++){
//         num+=i
//     }
//     console.log(num);
    
// }

//Triangle Pattern — III

// 1
// 2 3
// 4 5 6
// 7 8 9 10

// let n=4;

// let num=1;

// for(let i=1; i<=n;i++){
//     let row='';
//     for(let j=1; j<=i;j++){
//         row+=num+''
//         num++
//     }
//     console.log(row.trim());
    
// }

// let num =1;
// for(let i=1; i<=4;i++){
//     let row=''
//     for(let j=1; j<=i; j++){
//         row+=num+''
//         num++
//     }
//     console.log(row.trim());
    
// }

//Reverse Triangle — I
// 12345
// 1234
// 123
// 12
// 1

// for(let i=1;i<=5;i++){
//     let num=''
//     for(let j=1; j<=6-i; j++){
//         num+=j
//     }
//     console.log(num); 
// }


//Number Pyramid Pattern — I

//     1
//    123
//   12345
//  1234567
// 123456789

let num =5
let dash=""
for(let i=1;i<=num;i++){
    for(let j=1; j<=num-i; j++){
        dash+=" "
    }

    for(let k=1; k<=2*i-1; k++){
        dash+=k
    }
    dash+="\n"

}
console.log(dash);

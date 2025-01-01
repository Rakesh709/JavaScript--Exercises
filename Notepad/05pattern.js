//Triangle Pattern — I
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

// for(let i=1;i<=5;i++){
//     let num='';
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
//     let row='';
//     for(let j=1; j<=i; j++){
//         row=j+" "  
//     }
//     console.log(row.trim());   
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

let n=4;

let num=1;

for(let i=1; i<=n;i++){
    let row='';
    for(let j=1; j<=i;j++){
        row+=num+''
        num++
    }
    console.log(row.trim());
    
}
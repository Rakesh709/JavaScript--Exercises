//half triangle
//  1
//  12
//  123
//  1234
//  12345
const n=6;
for(let i=1; i<=n; i++){
    let row =" "
    for(let j=1; j<=i; j++){
        row+=j
    }
    //console.log(row)
}

//2. 
// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

let m=5;
for(let i=1;i <=m; i++){
    let row="";
    for(let j=1; j<=i; j++){
        row+=i
    }
    //console.log(row);
    
}

//3. pattern 
// 1
// 2 3
// 4 5 6
// 7 8 9 10

let count =1;
for(let i=1; i<=4;i++){
    for(let j=1; j<=i; j++){
        // console.log(count)
        count++
    }
    console.log(count.trim());
    
}

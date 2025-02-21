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

let o=4;
let count =1;
for(let i=1; i<=0;i++){
    let row =""
    for(let j=1; j<=i; j++){
        row+=count+" "
        count++
    }
    //console.log(row.trim());
    
}

//4. 
// 12345
// 1234
// 123
// 12
// 1

//5
for(let row=1; row<=4; row++){
    let start=""
    for(let col=1; col<=row; col++){
        // process.stdout.write("*")
        start+="*"
        
    }
    //console.log(start.trim());
    
}

//6
// ****
// ****
// ****
// ****
for(let row=1; row<=6; row++){
    let start=""
    for(let col=1; col<=6; col++){
        // process.stdout.write("*")
        start+="*"
    }
    //console.log(start)
}

//7
// *****
// ****
// ***
// **
// *
for(let row=1; row<=5; row++){
    let start=""
    for(let col=1; col<=5-row+1; col++){
        start+="*"
    }
    console.log(start);
    
}


//8 

let x=5
for(let row=0; row<=(2*x); row++){
    let star=""
    let num= row >x ? 2*x -row : row;
    for(let col=0; col<num; col++){
         star+="*"
    }
    console.log(star);
    
}
const input = [5,7,9,11,15,17]
const output = 13 

// for( let i=0; i<input.length; i++){
//     let current = input[i]
//     let next = current+2
//     if(input[i+1] === next) continue;
//     else{
//         console.log(next);
//         break
        
//     }
// }

//optimise code 

for(let i=0; i<input.length; i++){
    let current = input[i];
    let next = current+2;
    if(input[i+1]!==next){
        console.log(next);
        break
        
    }
}
// const searchInput  = document.getElementById("searchInput")

// function debounce(func, delay){
//     let timeout;
//     return function(...args){
//         clearTimeout(timeout);
//        timeout= setTimeout(()=>{
//             func(...args)
//         },delay)
//     }
// }

// const myFunction = function(event){
//     const query = event.target.value;
//     console.log("Query is: ", query)

//     fetch(`http://api.exmaple.com/search?query=${query}`)
//     .then((response) => response.json())
//     .then((data)=>{
//         console.log(data);

//     })
// }

// searchInput.addEventListener("input",debounce(myFunction,500));

// let searchValue = document.getElementById("searchBox");

// function debaunce(func, delay) {
//   let timeout;
//   return function (...args) {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => {
//       func(...args);
//     }, delay);
//   };
// }
                                                                                                        
// const mySearch = function (event) {
//   let query = event.target.value;
//   console.log(query);
                                                                        
//   featch(`http://api.example.com/search?query=${query}`)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//     });
// };

// searchValue.addEventListener("input", debaunce(mySearch, 500));


let inputValue = document.getElementById("searchBox");

let debaounce = function(func,delay){
  let timeout;
  return function(...args){
    clearTimeout(timeout)
    timeout= setTimeout(()=>{
        func(...args)
        
    },delay)
  }
}



const myFunction = function(event){
    let eventValue= event.target.value;
    console.log(eventValue);

    
}





inputValue.addEventListener("input",debaounce(myFunction,500))
 // when ever form submitted it will submit with GET or POST method sai 
 //we need to stop the default action in event action 





const form =document.querySelector('form')
// console.log("below is form");

// console.log(form);

//this usecases will give you empty body
//const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit',function(e){
    e.preventDefault();
    //the above meaning is stop your deafult behaviour of submit button
    //matlab tu submit kr skta hai but abhi maat kr jo tera kaam hai submit

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    const summary = document.querySelector('#summary')


    if(height ===''|| height<0 || isNaN(height)){
        results.innerHTML =`Please give a valid height ${height}`
    } else if( weight===''|| weight<0 || isNaN(weight)){
        results.innerHTML =`Please give a valid weight ${weight}`
    }else{
        const bmi = (weight/((height*height)/10000)).toFixed(2)
        //show the result 

        results.innerHTML= `<span> Your BMI is ${bmi}</span>`

        if(bmi <=18.6){
            summary.innerHTML= `<span> Your BMI is Under Weight</span>`
        }else if(bmi >= 18.6 && bmi <= 24.9){
            summary.innerHTML= `<span> Your BMI is Normal Range</span>`

        }else if(bmi >= 24.9){
            summary.innerHTML= `<span> Your BMI is Over Weight</span>`
        }else{
            summary.innerHTML= `<span> Go to Doctor</span>`
        }


    }

    
})
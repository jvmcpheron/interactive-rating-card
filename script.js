let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');
let btn5 = document.getElementById('btn5');
let btnSub = document.getElementById('sub-btn');
let rating = 0;


btn1.addEventListener('click', (event) =>{
    event.preventDefault()
    btn1.style.backgroundColor = 'hsl(25, 97%, 53%)';
    btn2.style.backgroundColor = 'hsl(216, 12%, 25%)';
    btn3.style.backgroundColor = 'hsl(216, 12%, 25%)';
    btn4.style.backgroundColor = 'hsl(216, 12%, 25%)';
    btn5.style.backgroundColor = 'hsl(216, 12%, 25%)';
    rating = 1;

    
    
    });

btn2.addEventListener('click', (event) =>{
    event.preventDefault()
    btn2.style.backgroundColor = 'hsl(25, 97%, 53%)';
    btn1.style.backgroundColor = 'hsl(216, 12%, 25%)';
    btn3.style.backgroundColor = 'hsl(216, 12%, 25%)';
    btn4.style.backgroundColor = 'hsl(216, 12%, 25%)';
    btn5.style.backgroundColor = 'hsl(216, 12%, 25%)';
    rating = 2;


});

btn3.addEventListener('click', (event) =>{
    event.preventDefault()
    btn3.style.backgroundColor = 'hsl(25, 97%, 53%)';
    btn2.style.backgroundColor = 'hsl(216, 12%, 25%)';
    btn1.style.backgroundColor = 'hsl(216, 12%, 25%)';
    btn4.style.backgroundColor = 'hsl(216, 12%, 25%)';
    btn5.style.backgroundColor = 'hsl(216, 12%, 25%)';
    rating = 3;

});

btn4.addEventListener('click', (event) =>{
    event.preventDefault()
    btn4.style.backgroundColor = 'hsl(25, 97%, 53%)';
    btn2.style.backgroundColor = 'hsl(216, 12%, 25%)';
    btn3.style.backgroundColor = 'hsl(216, 12%, 25%)';
    btn1.style.backgroundColor = 'hsl(216, 12%, 25%)';
    btn5.style.backgroundColor = 'hsl(216, 12%, 25%)';

    rating = 4;

    });

btn5.addEventListener('click', (event) =>{
    event.preventDefault()
    btn5.style.backgroundColor = 'hsl(25, 97%, 53%)';
    btn2.style.backgroundColor = 'hsl(216, 12%, 25%)';
    btn3.style.backgroundColor = 'hsl(216, 12%, 25%)';
    btn4.style.backgroundColor = 'hsl(216, 12%, 25%)';
    btn1.style.backgroundColor = 'hsl(216, 12%, 25%)';

    rating = 5;

    });

btnSub.addEventListener('click', (event) =>{


    event.preventDefault()



    if(rating === 0) {
        alert("You must select a rating.")
    } else{
        alert("Thank you for your feedback! We've recorded your rating of " + rating + " out of 5.")
    }

});
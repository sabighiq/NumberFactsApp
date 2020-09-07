//AJAX method
let fact = document.querySelector('#fact');
let factText = document.querySelector('#factText'); //now we have to write eventlistener because whenever we
//write something in that box number arrow or then delete we want them fire off so we gonna use input event


let numberInput = document.querySelector('#numberInput');
//numberInput.addEventListener('input', getFactAjax); //we want listen to input & when that happens we gonna call
//function getFactAjax
numberInput.addEventListener('input', getFactFetch);

/*
function getFactAjax(){
    //console.log(123); //so whatever we write in box in console we get this number 123 so this is just example
    let number = numberInput.value;
    //console.log(number); 
    
    let xhr = new XMLHttpRequest();
    //xhr.open('GET', 'http://numbersapi.com/11'); //so we not only want 11 we want every other number to test 
    //so what we do here is that we concatenate a variable 'number'
    xhr.open('GET', 'http://numbersapi.com/'+number); //so this is the open method as we all know

    xhr.onload = function(){
        if(this.status == 200 && number != ''){
            //console.log(this.responseText); //now we get what we input means like if we input 9 we get facts
            //of that number so commenting this & then adding one more condition number != ''

            fact.style.display = 'block'; //so previously we hide this Number Fact text using css but we take 
            //it back because the reason is we don't want the facts result in console output we want this
            //in just below Number Facts text so what we do is see below
            factText.innerHTML = this.responseText;

        }
    }
    xhr.send(); //we send the request which is that url in line 58 & then response
} //so this is the ajax method now let's move to fetch so same task fetch se karenge
*/
function getFactFetch() {
    let number = numberInput.value;

    fetch('http://numbersapi.com/'+number) //so fetch works as it returns a promise so when we dealing
    //with promises we have to use .then & what happens is it returns as response.data

    .then(response => response.text())
    .then(data => {
        if(number != '') {
            fact.style.display = 'block';
            //factText.innerHTML = this.responseText; since we are working with data fetching & not with
            //like ajax so we use data
            factText.innerHTML = data;
        }
    })
    .catch(err => console.log(err)); //so what this will do if there is any error it will return that error
    
}
// Accessing an Array inside an Object and then Accessing the Array Element   

const pizza = {
    toppings : [ "cheese", "sauce", "pepperoni" ],
    crust : "deep dish",
    serves : 2
};
console.log( pizza.toppings[2] );


// Find the year Leap Year or not 

function isLeapYear( year ) {
   if ( year % 4 == 0 && year % 100 != 0 || year % 400 == 0 ) {
        console.log( year + " is a leap year." );
        return true;
     
   }

    else {
        console.log( year + " is not a leap year." );
      return false;
   }
}

let myYear = 2300;
let theYear = isLeapYear( myYear );


// Find the age odd or even number

function userAge(age){
    if(age % 2 == 0){
        console.log("Your age is " + age + " and it is an even number");
        return true;
    }
    else{
        console.log("Your age is " + age + " and it is an odd number");
        return false;
    }
}

let peopleAge = 21;
let theAge = userAge(peopleAge);


// Convert Hour to Minute 

function hourToMinute(hour) {
    let minute = hour * 60;
    console.log("The hour " + hour + " is equal to " + minute + " minutes");
}

let myHour = 24;
let theHour = hourToMinute(myHour);

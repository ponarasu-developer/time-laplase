
let year;
let months ;
let days ;
let hours ;
let minutes;
let seconds ;
let oops ;
function cal() {
  let input = document.getElementById("birthyear").value;
if (input > 2020 ) {
   oops = document.getElementById("opps");
  oops.textContent =("OOPS YOU ENTER THE INVALID YEAR");
  
}
else if(input<0){
    oops = document.getElementById("opps");
  oops.textContent =("OOPS YOU ENTER THE INVALID YEAR");
  
}

else{


   year =(2020 - input);
 months =((2020-input)*12);
 days = ((2020-input)*365);
hours = ((2020-input)*365*24);
minutes = ((2020-input)*365*24*60);
seconds = ((2020-input)*365*24*60*60);

let yearanswer = document.getElementById('years');
yearanswer.textContent=(`NO OF YEAR'S YOU SPEND ON EARTH:${year}`);

let monthsanswer = document.getElementById('months');
monthsanswer.textContent = (`NO OF MONTH'S YOU SPEND ON EARTH:${months}`);

let daysanswer = document.getElementById('days');

 daysanswer.textContent = (`NO OF DAY'S YOU SPEND ON EARTH:${days}`);

let hoursanswer = document.getElementById('hours');
hoursanswer.textContent = (`NO OF HOUR'S YOU SPEND ON EARTH:${hours}`);

let minutesanswer = document.getElementById('minutes');
minutesanswer.textContent = (`NO OF MINUTE'S YOU SPEND ON EARTH:${minutes}`);

let secondsanswer = document.getElementById('seconds');secondsanswer.textContent = (`NO OF SECOND'S YOU SPEND ON EARTH:${seconds}`);
console.log(input);
}

}


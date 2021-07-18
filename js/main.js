let inputMonth = document.getElementById("month");
let inputDay = document.getElementById("day");
let inputYear = document.getElementById("year");
const submitData = document.getElementById("submit");




submitData.addEventListener("click", function(e){
    e.preventDefault();
    var month = inputMonth.value;
    var day = inputDay.value;
    var year = inputYear.value;

    console.log(day);
    console.log(month);
    console.log(year);

    
    var yy = year.slice(0,2);
    var cc = year.slice(2,5);
    

    if(month<0 && month>12 && day<0 && day>31){
        alert("Invalid month");
    };



    var radioCh = document.getElementsByName("gender").forEach(radio =>{
        if (radio.checked){
            console.log(radio.value)
        }
    });

    cc = parseInt(cc);
    yy = parseInt(yy);
    month = parseInt(month);
    day = parseInt(day);

    //  ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
    var dayOfTheWeek =  ( ( ((cc)/4) -2*(cc)-1) + ((5*(yy)/4) ) + ((26*(month+1)/10)) + (day) ) % 7;
    dayOfTheWeek = parseInt(dayOfTheWeek);
    console.log((dayOfTheWeek));

});

// getting my html elements and assining them to variables

let inputMonth = document.getElementById("month");
let inputDay = document.getElementById("day");
let inputYear = document.getElementById("year");
const submitData = document.getElementById("submit");
let akanName = document.getElementById("akanName");
let result = document.querySelector("#result");

// Creating my submit event which takes a call back function

submitData.addEventListener("click", function(e){
    // Preventing the default submit event

    e.preventDefault();

    // Creating variables that stores values
    var month = inputMonth.value;
    var day = inputDay.value;
    var year = inputYear.value;

    console.log(day);
    console.log(month);
    console.log(year);

    // Creating century(cc) variableas well as year(yy) variable that splits the Year string variable into 2 parts, cc and yy
    var cc = year.slice(0,2);
    var yy = year.slice(2,5);
    console.log("yy="+yy,"cc="+cc);
    
    // validating the day as well as the month variables to ensure its correct
    month = parseInt(month);
    day = parseInt(day);
    year = parseInt(year)
    console.log(month, day,year);
    console.log(typeof month, typeof day, typeof year);

    // validating dates using momment.js
    function validateDate(){
        if(month<0 && month>12 || day<0 && day>30){
            alert("Enter a valid Month");
        }else{
            alert("valid Date");
        }
    }
    validateDate();
    // result.innerText = moments(`${month}/${date}/${year}`,"MM/DD/YYYY", valid).isValid;

    // validating date inputs
    

    // var radioCh = document.getElementsByName("gender").forEach(radio =>{
    //     if (radio.checked){
    //         console.log(radio.value);
    //     }
    // });

    // creating radioCh variable that stores value that is checked on the input gender radio button
    var radioCh = document.querySelector("input[name='gender']:checked").value;

    console.log(radioCh);

    // Converting string variables to number data type and the variables will be input for the day formulae
    cc = parseInt(cc);
    yy = parseInt(yy);
    month = parseInt(month);
    day = parseInt(day);

    // creating the day variable that calculates the day of the week

    //  ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
    var dayOfTheWeek =  ( ( ((cc)/4) -2*(cc)-1) + ((5*(yy)/4) ) + ((26*(month+1)/10)) + (day) ) % 7;
    dayOfTheWeek = parseInt(dayOfTheWeek);
    console.log((dayOfTheWeek));


    // Assinging akan name depending on the gender entered as well as the day of the week
    if(radioCh=="male" && dayOfTheWeek==0){
        console.log("Your Akan name is Kwasi");
        akanName.innerHTML = "Kwasi";
    }else if(radioCh=="male" && dayOfTheWeek==1){
        console.log("Your Akan Name is Kwodwo");
        akanName.innerHTML = "Kwodwo";
    }else if(radioCh=="male" && dayOfTheWeek==2){
        console.log("Your Akan Name is Kwabena");
        akanName.innerHTML = "Kwabena";
    }else if(radioCh=="male" && dayOfTheWeek==3){
        console.log("Your Akan Name is Kwaku");
        akanName.innerHTML = "Kwaku";
    }else if(radioCh=="male" && dayOfTheWeek==4){
        console.log("Your Akan Name is yaw");
        akanName.innerHTML = "yaw";
    }else if(radioCh=="male" && dayOfTheWeek==5){
        console.log("Your Akan Name is Kofi");
        akanName.innerHTML = "Kofi";
    }else if(radioCh=="male" && dayOfTheWeek==6){
        console.log("Your Akan Name is Kwame");
        akanName.innerHTML = "Kwame";
    }else if(radioCh=="female" && dayOfTheWeek==0){
        console.log("Your Akan name is Akwoso");
        akanName.innerHTML = "Akwoso";
    }else if(radioCh=="female" && dayOfTheWeek==1){
        console.log("Your Akan Name is adwoa");
        akanName.innerHTML = "adwoa";
    }else if(radioCh=="female" && dayOfTheWeek==2){
        console.log("Your Akan Name is Abenaa");
        akanName.innerHTML = "Abenaa";
    }else if(radioCh=="female" && dayOfTheWeek==3){
        console.log("Your Akan Name is Akua");
        akanName.innerHTML = "Akua";
    }else if(radioCh=="female" && dayOfTheWeek==4){
        console.log("Your Akan Name is yaw");
        akanName.innerHTML = "yaw";
    }else if(radioCh=="female" && dayOfTheWeek==5){
        console.log("Your Akan Name is Afua");
        akanName.innerHTML = "Afua";
    }else if(radioCh=="female" && dayOfTheWeek==6){
        console.log("Your Akan Name is Ama");
        akanName.innerHTML = "Ama";
    }else{
        // console.log("Invalid target name for name");
        akanName.innerHTML = "Invalid Name";
    }
});

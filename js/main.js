let inputMonth = document.getElementById("month");
let inputDay = document.getElementById("day");
let inputYear = document.getElementById("year");
const submitData = document.getElementById("submit");
let akanName = document.getElementById("akanName");


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



    // var radioCh = document.getElementsByName("gender").forEach(radio =>{
    //     if (radio.checked){
    //         console.log(radio.value);
    //     }
    // });

    var radioCh = document.querySelector("input[name='gender']:checked").value;

    console.log(radioCh);

    cc = parseInt(cc);
    yy = parseInt(yy);
    month = parseInt(month);
    day = parseInt(day);

    //  ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
    var dayOfTheWeek =  ( ( ((cc)/4) -2*(cc)-1) + ((5*(yy)/4) ) + ((26*(month+1)/10)) + (day) ) % 7;
    dayOfTheWeek = parseInt(dayOfTheWeek);
    console.log((dayOfTheWeek));



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

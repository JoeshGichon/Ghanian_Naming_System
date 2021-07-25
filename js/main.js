// jquery library in form data collection

$(document).ready(function(){
    $("#form").submit(function(event){
        // preventing default form submission to itself
        event.preventDefault();


        // acquiring inputed values
        let dateOfBirth = $("#dateOfBirth").val();
        console.log(dateOfBirth);

        let gender = $("input[name='gender']:checked").val()
        console.log(gender);

        // spliting date values into year, month and day
        let YY =(dateOfBirth.slice(0,4));
        console.log(YY);

        let mm = (dateOfBirth.slice(5,7));
        console.log(mm);

        let dd =(dateOfBirth.slice(8,10));
        console.log(dd);

        // date validation
        while(parseInt(mm)<=0 || parseInt(mm)>12){
            alert("month must be between 1 and 12");
            break;
        };
        while(parseInt(dd)<=0 || parseInt(dd)>31){
            alert("day must be between 1 and 31");
            break;
        };

        let cc = (YY.slice(0,2));
        console.log(cc);

        let yy = (YY.slice(2,4));
        console.log(yy);

        // calculating the day of the week in which one is born which lies between 0 and 6
        let dayOfTheWeek = ( ( (parseInt(cc)/4) -2*parseInt(cc)-1) + ((5*parseInt(yy)/4) ) + ((26*(parseInt(mm)+1)/10)) +parseInt(dd) ) % 7;
        let d = Math.floor(dayOfTheWeek);
        console.log(d);

        let week = {0:"Sunday",1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thrsday",5:"Friday",6:"Saturday"};
        let akanMaleNames=["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi"];
        let akanFemaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];

        if(gender=="male" && d==0){
            console.log("Your Akan name is Kwasi");
            akanName.innerHTML = "Kwasi";
        }else if(gender=="male" && d==1){
            console.log("Your Akan Name is Kwodwo");
            akanName.innerHTML = "Kwodwo";
        }else if(gender=="male" && d==2){
            console.log("Your Akan Name is Kwabena");
            akanName.innerHTML = "Kwabena";
        }else if(gender=="male" && d==3){
            console.log("Your Akan Name is Kwaku");
            akanName.innerHTML = "Kwaku";
        }else if(gender=="male" && d==4){
            console.log("Your Akan Name is yaw");
            akanName.innerHTML = "yaw";
        }else if(gender=="male" && d==5){
            console.log("Your Akan Name is Kofi");
            akanName.innerHTML = "Kofi";
        }else if(gender=="male" && d==6){
            console.log("Your Akan Name is Kwame");
            akanName.innerHTML = "Kwame";
        }else if(gender=="female" && d==0){
            console.log("Your Akan name is Akwoso");
            akanName.innerHTML = "Akwoso";
        }else if(gender=="female" && d==1){
            console.log("Your Akan Name is adwoa");
            akanName.innerHTML = "adwoa";
        }else if(gender=="female" && d==2){
            console.log("Your Akan Name is Abenaa");
            akanName.innerHTML = "Abenaa";
        }else if(gender=="female" && d==3){
            console.log("Your Akan Name is Akua");
            akanName.innerHTML = "Akua";
        }else if(gender=="female" && d==4){
            console.log("Your Akan Name is yaw");
            akanName.innerHTML = "yaw";
        }else if(gender=="female" && d==5){
            console.log("Your Akan Name is Afua");
            akanName.innerHTML = "Afua";
        }else if(gender=="female" && d==6){
            console.log("Your Akan Name is Ama");
            akanName.innerHTML = "Ama";
        }else{
            // console.log("Invalid target name for name");
            akanName.innerHTML = "Invalid Name";
        }
    });
});
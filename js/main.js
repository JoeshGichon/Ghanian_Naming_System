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

    if(month<0 && month>12 && day<0 && day>31){
        alert("Invalid month");
    };

    var radioCh = document.getElementsByName("gender").forEach(radio =>{
        if (radio.checked){
            console.log(radio.value)
        }
    });

        


});



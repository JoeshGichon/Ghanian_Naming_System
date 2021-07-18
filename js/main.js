let inputMonth = document.getElementById("month");
let inputDay = document.getElementById("day");
let inputYear = document.getElementById("year");
const submitData = document.getElementById("submit");




submitData.addEventListener("click", function(e){
    e.preventDefault();
    var month = inputMonth.value;
    var day = inputMonth.value;
    var year = inputMonth.value;

    var radioCh = document.getElementsByName("gender").forEach(radio =>{
        if (radio.checked){
            console.log(radio.value)
        }
    })

});



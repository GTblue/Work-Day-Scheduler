// //
// $(document).ready(function()) {

// var = moment().format();

// //Crate 
// var hours = arrayOfHours[i];
// // Create variables for div classes for text input and save
// var schedule = $("div textarea class='col-md-10 hour'");
// var save = $("div class='col-md-1 saveBtn");

// //var hours = i = 0; i < hours.length; i++; 
// }


$( document ).ready(function() {

    var format = moment().format()

    $(".saveBtn").on("click", function(){
       var textareaValue =  $(this).siblings(".hour").val();
       console.log(textareaValue)
    })

    var currentTime = moment().format(); 
    console.log(currentTime) 
    // (dddd MMMM Do)


});
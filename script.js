$( document ).ready(function() {



    $(".saveBtn").on("click", function(){
       var textareaValue =  $(this).siblings(".hour").val();
       console.log(textareaValue)
    })

    var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a'); 
    console.log(currentTime) 


});

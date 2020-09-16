$(document).ready(function () {

    // Setting Today's date and time
    $("#today").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

    // Assigning a click event listener for the save button
    $(".saveBtn").on("click", function () {

        console.log(this);
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Leveraging time and text into local storage
        localStorage.setItem(time, text)
    })

    // Loading time data saved in local storage 
    $("#8am .description").val(localStorage.getItem("8am"));
    $("#9am .description").val(localStorage.getItem("9am"));
    $("#10am .description").val(localStorage.getItem("10am"));
    $("#11am .description").val(localStorage.getItem("11am"));
    $("#12pm .description").val(localStorage.getItem("12pm"));
    $("#1pm .description").val(localStorage.getItem("1pm"));
    $("#2pm .description").val(localStorage.getItem("2pm"));
    $("#3pm .description").val(localStorage.getItem("3pm"));
    $("#4pm .description").val(localStorage.getItem("4pm"));


    function timeMonitor() {
        // generate current # of hours
        var currentHour = moment().hour();

        // Manking a loop over time block
        $(".time-block").each(function () {
            var timeBlock = parseInt($(this).attr("id").split("hour")[1]);
            console.log(blockHour, currentHour);

            // Check to see if current time has gone past 
            // past
            if (timeBlock < currentHour) {
                $(this).addClass(".past");
                $(this).removeClass(".future");
                $(this).removeClass(".present");
            }
            // present
            else if (timeBlock === currentHour) {
                $(this).removeClass(".past");
                $(this).addClass(".present");
                $(this).removeClass(".future");
            }
            // future
            else {
                $(this).removeClass(".past");
                $(this).removeClass(".present");
                $(this).addClass(".future");
            }

        })
    }



    timeMonitor();
})
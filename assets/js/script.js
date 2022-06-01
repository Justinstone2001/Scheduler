// Setting the current day/month/year at the top of the screen

var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

// Selecting the container class for future reference
var containerEl = $(".container");

// Iterates through the hours 9 am to 5 pm
for (var i = 9; i < 18; i++) {
    var text = $("<textarea>").attr('class', 'col-10');
    var time = $("<div>").attr('class', 'col-1 hour');
    var rows = $("<div class = row>");
    var saveBtn = $("<button>").attr('class', 'col-1 saveBtn');
    saveBtn.text('Save');

    // Set the colors based on the users current time
    if (i === moment().hour()) {
        text.attr("class", "present col-10");
    }

    if (i > moment().hour()) {
        text.attr("class", "future col-10");
    }

    if (i < moment().hour()) {
        text.attr("class", "past col-10");
    }

    // Set the rows up with each time, a space to enter text and a save button
    if (i < 12){
        time.text(i + "AM");
        rows.append(time);
        rows.append(text);
        rows.append(saveBtn);
        containerEl.append(rows);
    }
    if (i === 12){
        time.text(i + "PM");
        rows.append(time);
        rows.append(text);
        rows.append(saveBtn);
        containerEl.append(rows);
    }
    if (i > 12) {
        time.text(i - 12 + "PM");
        rows.append(time);
        rows.append(text);
        rows.append(saveBtn);
        containerEl.append(rows);
    }

}


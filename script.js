var containerEl = $(".container");
var input = $("#input");

for (var i = 9; i < 18; i++) {
    var text = $("<textarea>").attr('class', 'col-10');
    var time = $("<div>").attr('class', 'col-1 hour');
    var rows = $("<div class = row>");
    var saveBtn = $("<button>").attr('class', 'col-1 saveBtn');
    saveBtn.text('Save');

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

var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));



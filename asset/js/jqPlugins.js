$(function(){
    // alert("Got Here")
    $("#tabs").tabs();
    $("#datepicker").datepicker({
        onSelect: function(dateText, inst) {
            $("#title").text("You Picked: " + dateText)
        }
    });
});
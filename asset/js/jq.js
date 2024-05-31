// $(document).ready(function() {
//     alert("This Works");
// });

// $(function() {
//     alert("This Works 1");
// });

$(function() {
    // $("#title").text("Yay, I can now get at the H1 immediately!")
    // $("#first").html("<h2>Great Quotes</h2>")


    // Append and Prepend work INSIDE the given selection
    $("#first").prepend("<h2>Great Quotes</h2>")
    $("#first").append("<h3>..... for your to ponder....</h3>")

    // before, after, insertBefore, insertAfter work OUTSIDE the given selection.

    $("#myAnchor").attr("href", "http://bing.com");

    $("#title").addClass("standout");
});






// var myValue = 3.16;
// var myOtherValue = 3.14;

// var myResult = myValue + myOtherValue;

// alert(myResult);

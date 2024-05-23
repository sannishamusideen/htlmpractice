function substitute() {
    var myValue = document.getElementById('myTextBox').value;

    if (myValue.lenght == 0) {
        alert ('Please enter a real value in the text box!');
        return;
    }
    var myTitle = document.getElementById('title');
    myTitle.innerHTML = myValue;
}

// var myValue = "tabor"; //string
// var myValue = 3.14;  //numbers

//     alert(typeof myValue);




// var myValue = 3.16;
// var myOtherValue = 3.14;

// var myResult = myValue + myOtherValue;

// alert(myResult);


// Boolean 
// var myValue = true;

// alert(typeof myValue);

// Basic String Concatenation
someValue = "Sanni" + " " + "Shamusideen";

alert(someValue);

wordValue = "My \"so called\" life."
// wordValue = "I'm pretty sure this will work";
alert(wordValue);

newlineValue = "Sanni \rwas \nhere"
// r- return character n- new line
alert(newlineValue);



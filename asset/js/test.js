function substitute() {
    var myValue = document.getElementById('myTextBox').value;

    if (myValue.lenght == 0) {
        alert ('Please enter a real value in the text box!');
        return;
    }
    var myTitle = document.getElementById('title');
    myTitle.innerHTML = myValue;
}
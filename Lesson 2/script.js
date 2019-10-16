// used in lesson2.html
var nums = [1, 5, 3, 19, 2, 10];

function sortNumbersAscending(a, b) {
    return a - b;
}

function sortNumbersDescending(a, b) {
    return b - a;
}

function displayAscending() {
    var answer = sortNumbersAscending()
    var stringAnswer = "numbers in ascending order"
    var content = document.createTextNode(stringAnswer);
    displayInformation(content);
} 

function displayInformation(content) {
    var infoToDisplay = document.createElement('p');
    infoToDisplay.appendChild(content);
    document.body.appendChild(infoToDisplay);
}




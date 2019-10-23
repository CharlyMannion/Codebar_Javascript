// used in lesson2.html
var nums = [1, 5, 3, 19, 2, 10];

function sortNumbersAscending(a, b) {
    return a - b;
}

function sortNumbersDescending(a, b) {
    return b - a;
}

function displayAscending() {
    var answer = nums.sort(sortNumbersAscending);
    var stringAnswer = answer.toString();
    var content = document.createTextNode("Ascending: $s".replace('$s', stringAnswer));
    displayInformation(content);
}

function displayDescending() {
    var answer = nums.sort(sortNumbersDescending);
    var stringAnswer = answer.toString();
    var content = document.createTextNode("Descending: " + stringAnswer);
    displayInformation(content);
}

function displayInformation(content) {
    var infoToDisplay = document.createElement('p');
    infoToDisplay.appendChild(content);
    document.body.appendChild(infoToDisplay);
}




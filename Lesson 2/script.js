// used in lesson2.html
var nums = [1, 5, 3, 19, 2, 10];

function sortNumbersAscending(a, b) {
    return a - b;
}

function sortNumbersDescending(a, b) {
    return b - a;
}

function displayInformation(content) {
    var infoToDisplay = document.createElement('p');
    infoToDisplay.appendChild(content);
    document.body.appendChild(infoToDisplay);
}




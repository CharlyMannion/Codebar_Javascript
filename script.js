function sayHello(person) {
    console.log('Hello ' + person + '!');
}

function conversation(person) {
    sayHello(person);
    console.log('How are you ' + person + '?');
    console.log('Goodbye ' + person);
}

function greeting(person) {
    return 'Hello ' + person + '!';
}
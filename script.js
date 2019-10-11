function greeting(person) {
    return 'Hello ' + person + '!';
}

function sayHello(person) {
    console.log(greeting(person));
}

function conversation(person) {
    sayHello(person);
    console.log('How are you ' + person + '?');
    console.log('Goodbye ' + person);
}
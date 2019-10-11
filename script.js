function greeting(person) {
    return 'Hello ' + person + '!';
}

function sayHello(person) {
    console.log(greeting(person));
}

function conversation(person, topic) {
    sayHello(person);
    console.log('How are you ' + person + '?');
    console.log('Do you like ' + topic + '?');
    console.log('Goodbye ' + person);
}
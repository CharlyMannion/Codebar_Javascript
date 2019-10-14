var person = {
    first_name: 'Charly',
    topic: 'Chocolate'
};

function greeting(person) {
    return 'Hello ' + person.first_name + '!'
}

function sayHello(person) {
    console.log(greeting(person));
}

function conversation(person) {
    sayHello(person);
    console.log('How are you ' + person.first_name + '?');
    console.log('Do you like ' + person.topic + '?');
    console.log('Goodbye ' + person.first_name);
}
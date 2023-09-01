let names = [];

function writeCards(names, event) {
    let messages = [];

    for (let i = 0; i < names.length; i++) {
        debugger;
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
        debugger;
    };
    return messages
};

writeCards(["Guadalupe", "Ollie", "Aki"], "surprise")


function countDown(startingNumber) {
    //some code;

    let i = startingNumber;
    while (i >= 0) {
        console.log(i);
        i--;
    };
};

countDown(10);
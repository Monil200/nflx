
var questions = [
        "Always open in new tab?",
        // "Safe search ON?",
        // "Use location while signed in?",
    ];

var answers = [];

function ask(index) {
    process.stdout.write(questions[index]);
}

process.stdin.on('data', function (data) {
    console.log(process.argv['abc']);
    answers.push(data);
    if (answers.length < questions.length) {
        ask(answers.length);
    } else {
        console.log("Settings saved as follows");
        for(var i in answers) {
            console.log(questions[i] + " -> " + answers[i]);
        }
        process.exit();
    }

});

ask(0);


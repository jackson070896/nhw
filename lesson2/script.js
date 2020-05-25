const readline = require('readline');

let score = 0;
let totalAttempts = 0;

function game(totalAttempts, score) {
    let rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let req = rl.question('Орёл или решка? ', (answer) => {
        if (answer.toLowerCase() === 'орёл') {
            answer = 1;
        } else {
            answer = 0;
        }
        let val = Math.floor(Math.random() * Math.floor(2));
        if (val > answer || val < answer) {
            console.log();
            console.log('Проиграл');
            totalAttempts = totalAttempts + 1;
        } else if (val === answer) {
            console.log();
            console.log('Выйграл!');
            totalAttempts = totalAttempts + 1;
            score = score + 1;
        }
        console.log(`Счёт побед = ${score}`);
        console.log(`Кол-во партий = ${totalAttempts}`);
        console.log();
        console.log(`Для выхода нажмите Ctrl + C`);

        rl.close();
        return game(totalAttempts, score);
    });

}

game(totalAttempts, score);
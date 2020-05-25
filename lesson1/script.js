const ansi = require('ansi');

const cursor = ansi(process.stdout);

cursor.hex('#0000ff').bg.yellow().write('Hello World!').reset().bg.reset().write('\n');
function printPattern(lines) {
    // First loop for the increasing pattern
    for (let i = 1; i <= lines; i++) {
    let pattern = '';
    // Alternate starting character based on line number
    let startChar = i % 2 === 0 ? '_' : '*';
    // Build the pattern for the current line
    for (let j = 0; j < i; j++) {
    pattern += (j % 2 === 0) ? startChar : (startChar === '*' ?
    '_' : '*');
    }
    console.log(pattern);
    }
    // Second loop for the decreasing pattern
    for (let i = lines-1; i > 0; i--) {
    let pattern = '';
   // Alternate starting character based on line number
    let startChar = i % 2 === 0 ? '_' : '*';
    // Build the pattern for the current line
    for (let j = 0; j < i; j++) {
    pattern += (j % 2 === 0) ? startChar : (startChar === '*' ?
    '_' : '*');
    }
    console.log(pattern);
    }
    }
    printPattern(5)
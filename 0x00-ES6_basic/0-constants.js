export function taskFrist() {
    const task = 'I prefer to use const when i can.';
    return task;
}

export function getLast() {
    return ' is okay';
}

export function taskNext() {
    let combination = 'But sometimes let';
    combination += getLast();

    return combination;
}
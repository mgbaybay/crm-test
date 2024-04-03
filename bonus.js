function summarizeArgs(...args) {
    return args.reduce((sum, num) => {
        return sum + num;
    })
}

console.log(summarizeArgs(1, 11, 3, 8));

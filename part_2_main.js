/**
 * @param str = string
 * @param n = integer
 * @param char = string
 */
function countCharacter(str, n, char) {
    if (typeof(str) !== "string" || typeof(char) !== "string") {
        return 'String and character should be of type "string".'
    } else if (typeof(n) !== "number" || n < 1) {
        return 'N should be a positive integer.'
    }
    
    const newStr = str.repeat(Math.ceil(n/str.length)),
        finalStr = newStr.slice(0, n),
        count = finalStr.split(char).length - 1;

    return `${count} occurrence${count > 1 ? 's' : ''}`
}

console.log(countCharacter('abcd', 11, 'a'));

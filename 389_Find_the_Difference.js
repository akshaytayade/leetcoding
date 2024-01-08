//Using ASCII method
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let ascii_s = 0
    let ascii_t = 0
    let result
    for (let i = 0; i < s.length; i++){
        ascii_s += s.charCodeAt(i)
    }
    for (let j = 0; j < t.length; j++){
        ascii_t += t.charCodeAt(j)
    }
result = ascii_t - ascii_s
return String.fromCharCode(result)
};
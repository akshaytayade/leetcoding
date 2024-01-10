//2942. Find Words Containing Character
/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let resultArr = []
    // console.log(words.length)
    for (let i = 0; i < words.length; i++){
        for (let j = 0; j < words[i].length; j++){
            // console.log(words[i][j])
            if (words[i][j] == x){
                resultArr.push(i)
                break
            }
        }
    }
    return resultArr
};
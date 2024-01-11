// 1431_kids-with-the-greatest-number-of-candies

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let highest = candies[0]
    let resultArr = []
    for(let i=1;i<candies.length;i++){
        if(highest < candies[i]){
            highest = candies[i]
        }
    }
    for (let i = 0; i < candies.length; i++) {
        if (candies[i]+extraCandies >= highest){
            resultArr.push(true)
        }
        else{
            resultArr.push(false)
        }
    }
    return resultArr
};
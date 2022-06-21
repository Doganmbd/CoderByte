/* 
Coin Determiner
Have the function CoinDeterminer(num) take the input, which will be an integer ranging from 1 to 250, and return an integer output that will specify the least number of coins, that when added, equal the input integer. Coins are based on a system as follows: there are coins representing the integers 1, 5, 7, 9, and 11. So for example: if num is 16, then the output should be 2 because you can achieve the number 16 with the coins 9 and 7. If num is 25, then the output should be 3 because you can achieve 25 with either 11, 9, and 5 coins or with 9, 9, and 7 coins.
Examples
Input: 6
Output: 2
Input: 16
Output: 2
*/

function CoinDeterminer(num) { 

    let coins = [1,5,7,9,11]
    let counter = 1 
    let coinSum = coins ;
  
    const result = (coins,sums) => {
      let output = [] ;
  
      for(let i = 0 ; i < coins.length ; i++) {
        for (let j = 0 ; j < sums.length ; j++){
          output.push(coins[i] + sums[j]) ;
        }
      }
      return output ;
  
    }
  
  
    while(!coinSum.includes(num)) {
      coinSum = result(coins,coinSum) ;
      counter++ ;
    }
    return counter
  }
     
  // keep this function call here 
  console.log(CoinDeterminer(readline()));
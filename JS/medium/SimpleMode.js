/* Simple Mode
Have the function SimpleMode(arr) take the array of numbers stored in arr and return the number that appears most frequently (the mode). For example: if arr contains [10, 4, 5, 2, 4] the output should be 4. If there is more than one mode return the one that appeared in the array first (ie. [5, 10, 10, 6, 5] should return 5 because it appeared first). If there is no mode return -1. The array will not be empty.

Examples

Input: [5,5,2,2,1]
Output: 5

Input: [3,4,1,6,10]
Output: -1

*/

function SimpleMode(arr) { 
  
    // I created a storage in the object for the mod and wrote the number(Mod için nesnede bir depo oluşturdum ve sayısını yazdım)
    let mode = {integer: null, count: 1};
    
    // Build table with key-value pairs of integer: count
    // Build table with key-value pairs of integer: count
    //*reduce fonksiyonu temelde max ve curr olmak üzere iki parametre alır. İlk parametrede callback fonksiyonu diğeri ilk değerdir,  (o anki index elemanı yer alır.)
    let table = arr.reduce((memo, value) => {
    
      // Increase integer count by 1 if already exists in table. Otherwise, create integer with count of 1.
    // Tabloda zaten varsa tamsayı sayısını 1 artırın. Aksi takdirde, 1 sayısıyla tamsayı oluşturun
      value in memo ? memo[value]++ : memo[value] = 1;
      
      // If any number repeats more than previous mode does, then we've found a new mode!
      // Herhangi bir sayı önceki moddan daha fazla tekrar ediyorsa, o zaman yeni bir mod bulduk!
      if (memo[value] > mode.count) {
          mode.count = memo[value];
          mode.integer = value;
      }
          
      // Don't forget to return the table every time we call reduce!
      
//  azaltma dediğimiz her zaman tablo  dönmeyi unutmayın!
      return memo;
      
      // Second argument sets memo to empty object for first reduction.
      // İkinci argüman, notu ilk indirgeme için boş nesneye ayarlar.
      }, {});
    
    // If no numbers repeat, return -1. Otherwise, return the mode!
    // Sayılar tekrar etmezse, -1 döndürün. Aksi takdirde, moda dönün!
    return mode.count > 1 ? mode.integer : -1;      
  }

  SimpleMode([5,5,2,2,1]);
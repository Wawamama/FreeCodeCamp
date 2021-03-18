function convertToRoman(num) {
 const romans = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
 const divisers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

 let romanNum = "";

 for (let i=0; i<divisers.length; i++) {
   while (divisers[i] <= num) {
      romanNum += romans[i];
      num -= divisers[i];
   }
 }
 return romanNum;
}

convertToRoman(136);
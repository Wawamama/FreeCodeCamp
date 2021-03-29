function checkCashRegister(price, cash, cid) {
  let changeDue = cash - price;
  let result = {
    status: "",
    change: []
  }
  let moneyArr = [];
  let change =[];
  let currencies = [100, 20, 10, 5, 1, 0.25, 0.10, 0.05, 0.01];
  let currenciesNames = ['ONE HUNDRED', 'TWENTY', 'TEN', 'FIVE', 'ONE', 'QUARTER', 'DIME', 'NICKEL', 'PENNY']
  
  for (let i=0; i<cid.length; i++) {
    moneyArr.unshift(cid[i][1]);
  }

  let totalInDrawer = moneyArr.reduce((total, money) => Math.round((total +=money)*100)/100)

  // when not enough cash
  if (changeDue > totalInDrawer) {
    result.status = 'INSUFFICIENT_FUNDS';
    return result;
  }

  // when exactly enough cash
  if (changeDue == totalInDrawer) {
    result.status = 'CLOSED';
    result.change = cid
    return result;
  }

  // otherwise
  result.status= 'OPEN';
  for (let i=0; i<moneyArr.length; i++) {
    while(currencies[i]<=changeDue && moneyArr[i]>0) {
      let idealChange = Math.trunc(changeDue/currencies[i])*currencies[i];
      let realChange = 0;
        if (idealChange>moneyArr[i]) {
          realChange = moneyArr[i];
          
        } else {
          realChange = idealChange;
        }
        moneyArr[i] -= realChange; // deduce what we take from drawer
        changeDue = Math.round((changeDue - realChange)*100)/100;
        change.push([currenciesNames[i], realChange])
    } // end while
  } // end for
  
  
  if (changeDue>0) {
    console.log('we\'re fucked');
    result.status = 'INSUFFICIENT_FUNDS';
    return result
  } else {
     result.change = change; // change value of the 'change' Key
     return result;
  }
 
}

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
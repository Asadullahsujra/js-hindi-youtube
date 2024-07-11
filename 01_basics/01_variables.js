const accountId = 144553
let accountEmail = "asad@gmail.com"
var accountPassword = "12345"
accountCity = "Lahore"
let accountState;


// accountId = 1 // not allowed

accountEmail = "asad@hotmail.com"
accountPassword = "124578"
accountCity = "Sargodha"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional sxope
*/

console.table([accountId, accountEmail,accountPassword, accountCity, accountState]);
class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    // throw an exception if amount is negative
    if (amount > 0) {
    this.#amount += amount;
        }  
         else {
          try {
            throw Error("importo negativo")
          }
          catch (err) {
            console.log(err.message)
          }
        } 
  }

  withdraw(amount) {
    // throw an exception if amount is negative or if withdrawal amount is greater than current amount
    if(amount > 0 && amount < this.#amount){
    this.#amount -= amount;
  } else {
    try{
      throw Error("Importo superiore al saldo corrente");
    }
    catch (err){
      console.log(err.message)
    }
  }
  }

  view() {
    console.log(this.#amount);
  }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(10000); // This operation should not be possible, because you cannot withdraw more than the account balance
bankAccount.view();
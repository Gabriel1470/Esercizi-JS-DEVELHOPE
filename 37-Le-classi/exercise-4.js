class BankAccount{
  saldo = 0;
  constructor(saldo){
    this.saldo=saldo;
  }


deposit(saldo){
  this.saldo += saldo;
}

withdraw(saldo){
  this.saldo -= saldo;
}

view(){
  console.log(this.saldo)
}

}

const bankAccount = new BankAccount(1000);
 bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800); 
bankAccount.view();
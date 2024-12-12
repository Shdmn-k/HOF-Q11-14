//PART 1 COUNTER (PART 2 BELOW THIS)
function createCounter() {
    let count = 0;
    return {
      increment: function() {
        count++;  
               console.log(`Current count: ${count}`);
      },
  
      decrement: function() {
        count--;  
        console.log(`Current count: ${count}`);
      },
  
      display: function() {
        console.log(`Current count: ${count}`);  
      }
    };
  }
  const counter1 = createCounter();
  counter1.increment(); 
  counter1.increment(); 
  counter1.decrement(); 
  counter1.display();     

  //PART 2 STARTS HERE BANK ACCOUNT QUESTION
  function createBankAccount() {
    let balance = 0;  
       let transactionHistory = [];

    
    function deposit(amount) {
        if (amount > 0) {
            balance += amount;
            transactionHistory.push('Deposited: $' + amount);
        }
    }
    function withdraw(amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            transactionHistory.push('Withdrawn: $' + amount);
        }
    }
    function checkBalance() {
        return balance;
    }

    function viewTransactions() {
        return transactionHistory;
    }

    
    return {
        deposit: deposit,
        withdraw: withdraw,
        checkBalance: checkBalance,
        viewTransactions: viewTransactions
    };
}

let userAccount = createBankAccount();

// userAccount.deposit(100);
// userAccount.deposit(50);
// userAccount.withdraw(30);

// console.log(myAccount.checkBalance());  
// console.log(myAccount.viewTransactions());

//usage in question

userAccount.deposit(500); // Output: Deposited: 500
userAccount.withdraw(200); // Output: Withdrawn: 200
userAccount.withdraw(400); // Output: Insufficient balance
console.log(userAccount.balance); // Output: undefined
 console.log(userAccount.viewTransactions());

  
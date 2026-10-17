let clg = console.log;

// clg("A");

// const promise = new Promise((resolve) => {
//     clg("B");
//     resolve("Done");
// });

// clg("C");

// promise.then(value => clg(value));

function checkInventory(callback) {
  setTimeout(() => {
    clg("Checking Inventory...");
    callback();
  }, 2000);
}

function createOrder(callback) {
  setTimeout(() => {
    clg("Creating Order...");

    const error = new Error("Order creation failed");
    callback(error);
  }, 1000);
}

function chargePayment(callback) {
  setTimeout(() => {
    clg("Charging Payment...");
    const error = null;
    const chargedAmount = 100;
    callback(error, chargedAmount);
  }, 2000);
}

function sendInvoice(callback) {
  setTimeout(() => {
    clg("Sending Invoice...");
    callback();
  }, 1000);
}

function main() {

  // callback hell
  checkInventory(() => {
    createOrder((err) => {
      if(err) {
        clg(err);
      }
      chargePayment((err, chargedAmount) => {
        if(err) {
          clg("Error occured!");
          return;
        }

        clg("Charged Amount: ", chargedAmount);
        sendInvoice(() => {
          clg("All Done!");
        });
      });
    });
  });
  clg("Processing Other tasks");
}

main();

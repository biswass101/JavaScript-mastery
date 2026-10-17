let clg = console.log;

// clg("A");

// const promise = new Promise((resolve) => {
//     clg("B");
//     resolve("Done");
// });

// clg("C");

// promise.then(value => clg(value));

function checkInventory() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      clg("Checking Inventory...");
      // let inStock = 4;
      // resolve(inStock);
      reject(new Error("Failed to check inventory!"));
    }, 2000);
  });

  return promise;
}

function createOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      clg("Creating Order...");
      resolve();
    }, 1000);
  });
}

function chargePayment() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      clg("Charging Payment");
      resolve();
    }, 2000);
  });
}

function sendInvoice() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      clg("Sending Invoice...");
      resolve();
    }, 1000);
  });
}

async function main() {
  // callback hell
  // checkInventory(() => {
  //   createOrder((err) => {
  //     if(err) {
  //       clg(err);
  //     }
  //     chargePayment((err, chargedAmount) => {
  //       if(err) {
  //         clg("Error occured!");
  //         return;
  //       }

  //       clg("Charged Amount: ", chargedAmount);
  //       sendInvoice(() => {
  //         clg("All Done!");
  //       });
  //     });
  //   });
  // });

  // no callback hell
  // checkInventory()
  //   .then(createOrder)
  //   .catch((err) => {
  //     clg("err", err);
  //   }) // handling error
  //   .then(chargePayment)
  //   .then(sendInvoice);

  setTimeout(() => {
    clg("Other request processing...");
  }, 3000);

  try {
    await checkInventory();
  } catch (err) {
    clg("err", err);
  }

  try {
    await createOrder();
  } catch (err) {
    clg("err", err);
  }

  try {
    await chargePayment();
  } catch (err) {
    clg("err", err);
  }

  try {
    await sendInvoice();
  } catch (err) {
    clg("err", err);
  }

  clg("Processing Other tasks");
}

main();

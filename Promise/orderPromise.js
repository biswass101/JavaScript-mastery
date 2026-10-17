let clg = console.log;

const orderPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Order Confirmed!");
    }, 1000);
});

orderPromise.then(res => clg("Success: ", res))
            .catch(res => clg("Error: ", res))
            .finally(res => clg("Done"));


const paymentPromise = new Promise((resolve, reject) => {
    const isPaymentSuccess = false;

    if(isPaymentSuccess) {
        resolve("Payment completed");
    } else {
        reject(new Error ("Payment failed"));
    }
});

paymentPromise.then(res => clg("Success: ", res))
              .catch(res => clg("Error: ", res))
              .finally(res => clg("Process finished!"));
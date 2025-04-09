//creating Promises

const myPromise = new Promise((resolve, reject) => {
    const success = true;

    if(success) {
        resolve("It worked!");
    } else {
        reject("Something went wrong!!!");
    }
})

// console.log(myPromise);
myPromise
 .then(res => console.log("Success:", res))
 .catch(err => console.log("Error:", err))
 .finally(() => console.log("Done!"));

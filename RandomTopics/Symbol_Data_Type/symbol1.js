const req = {
    name: "Request Object"
}

const loggerId = Symbol('id');
req[loggerId] = 1;

const authId = Symbol("id");
req[authId] = 45;

const rateId = Symbol("id");
req[rateId] = 99;

//final result --->
console.log(req);
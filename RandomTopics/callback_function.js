function ask(question, yes, no) {
    if(typeof question === "string") yes();
    else no();
}

function yes() {
    console.log("This is a valid string");
}

function no() {
    console.log("This is not a valid string");
}

ask("Naeem Biswass Niloy", yes, no);
ask("", yes, no);
ask('', yes, no);
ask(10, yes, no);



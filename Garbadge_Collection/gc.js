let user = {
    name: "John",
    age: 25
}

let admin = user;

user = null;

console.log(admin.name); // Still reachable
console.log(user.name); // TypeError

admin = null;

console.log(admin.age); // TypeError

// the garbadge { name: "John", age: 25 } is collected

/*
    Step-1: 

    user--------
                |
                | 
                { name: "John", age: 25 }
                |
    admin--------

    Step-2: 
    
    user--------X
                
                 
                { name: "John", age: 25 }
                |
    admin--------

    Step-3: 
    
    user--------X
                
                 
                { name: "John", age: 25 } // Garbadge collected automatically
                
    admin-------X

*/
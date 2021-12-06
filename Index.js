let myCollection = [
    {
      name: "School of Code mug",
      count: 1,
      whatILike: "It has my cute pixel character on it!"
    },
    {
      name: "School of Code hat",
      count: 2,
      whatILike: "An often overlooked fashion accessory"
    },
    {
      name: "School of Code pillow",
      count: 1,
      whatILike: "Eat. Sleep. Code. Repeat :)"
    }
]
console.log(myCollection);

//2c. Create a function called describeItem, which should take in an item as a parameter (the argument handed to this function would be an item from our collection). The function should console.log a message according to how many of the item you have.
// If there's only one of the item in your collection, it should log "I have a name. Here's what I like about it: whatILike". If you have more than one of it, the message should log "I have count names. Here's what I like about them: whatILike".

// For example, the result of calling the describeItem function with the first item in our collection would be: "I have a School of Code mug. Here's what I like about it: It has my cute pixel character on it!"

// Call your function below where you've defined it, handing in the first item in myCollection.

//takes in an item as a parameter
//look at each item - nameofarray.forEach - (have to put a function in)
//if item === 1, console.log `I have a ${name}. Here's what I like about it: ${whatILike}".
//if items > 1, console.log `I have a ${count} ${name}s. Here's what I like about it: ${whatILike}".

function describeItem(name){
    myCollection.forEach(element => {
        if (element.name === name){
            if (element.count === 1){
                console.log(`I have a ${name}. Here's what I like about it: ${whatILike}`);
            } else { 
                console.log `I have a ${count} ${name}s. Here's what I like about it: ${whatILike}".
            }
        });
}}



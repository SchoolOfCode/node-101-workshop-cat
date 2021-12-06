import collection from './collection.js';
import chalk from 'chalk';

function describeItem(item) {
    let name = chalk.cyan(item.name)
    let count = chalk.yellow(item.count)
    let likes = chalk.green(item.whatILike)
    let iLike = chalk.bold(chalk.italic("I like"))
    let iHave = chalk.bgMagenta("I have")

    item.count === 1 ? console.log(`${iHave} a ${name}. Here's what ${iLike} about it: ${likes}`) 
                     : console.log(`${iHave} ${count} ${name}s. Here's what ${iLike} about them: ${likes}`)
        
  }

describeItem(collection[0]);


function describeCollection(array) {
    array.forEach((a) => {
        describeItem(a);
    })
}

describeCollection(collection);
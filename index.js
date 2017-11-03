const chalk = require('chalk');

var title = "\n\t\tWow Shouldn't have Done That\n\n";
var author = "\t\t\tBy: Landon Rice\n";
var first = "There once was a boy who got very lazy. ";
var second = "He became so lazy that he put of all his homework for a week.  ";
var third = "Because of this, he had to do twice the amount of school work.\n\n";
var end = "\t\t\tTHE END\n";

function story() {

    console.log(chalk.underline.red.bold(title));
    console.log(chalk.red(author));
    console.log(chalk.blue(first));
    console.log(chalk.green(second));
    console.log(chalk.yellow(third));
    console.log(chalk.cyanBright(end));
}
story();
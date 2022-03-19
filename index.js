const db = require("./db/connection");
const inquirer = require("inquirer");

const init = async function() {
    await db.connect(err => {
        if (err) throw err;
    })
};

const prompt = function() {
    return inquirer.prompt([
        {
            type: "input",
            name: "test",
            message: "write something"
        }
    ])
}

init()
.then(() => {
    console.log("Connected!");
    prompt()
    .then(res => {
        console.log(res);
    })
})
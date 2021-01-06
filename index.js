const superagent = require('superagent');
const inquirer = require('inquirer');

const fs = require('fs');

const file = fs.readFileSync('./data.json');
const data = JSON.parse(file);

// const severUrl = 'https://powerful-earth-91256.herokuapp.com/map/position';
// const severUrl = 'http://localhost:3000/map/position';

async function sendData(url, index) {
    console.log(data.data[index]);

    await superagent
        .post(url)
        .send(data.data[index])
}
let index = 1500;

async function initSimulation() {

    const userAnswers = await inquirer.prompt([
        {
            type: "input",
            message: "Entrez le nom de la route du serveur",
            name: "url"
        },
        {
            type: "input",
            message: "Entrez l'intervale de temps désiré",
            name: "timeInterval"
        }
    ])

    setInterval(() => {
        sendData(userAnswers.url, index);
        index++
    }, userAnswers.timeInterval);
}

initSimulation();
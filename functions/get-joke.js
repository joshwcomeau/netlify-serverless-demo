const jokes = require("../jokes.json")

const sample = arr => arr[Math.floor(Math.random() * arr.length)]

exports.handler = async function () {
  return {
    statusCode: 200,
    body: JSON.stringify({ joke: sample(jokes) }),
  }
}

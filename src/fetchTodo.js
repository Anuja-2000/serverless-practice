const {v4} = require("uuid")
const AWS = require("aws-sdk");

const fetchTodo = async (event) => {
const {id} = event.queryStringParameters

const dynamodb = new AWS.DynamoDB.DocumentClient()

let todo;

try{
    const result = await dynamodb.get({
        TableName: "TodoTable",
        Key:{ id }
    }).promise()
    todo = result.Item
} catch (error){git 
    console.log(error)
}
  return {
    statusCode: 200,
    body: JSON.stringify(todo),
  };
};

module.exports = {
  handler:fetchTodo
}
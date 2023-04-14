/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
ABOUT THIS NODE.JS EXAMPLE: This example works with the AWS SDK for JavaScript (v3),
which is available at https://github.com/aws/aws-sdk-js-v3. This example is in the 'AWS SDK for JavaScript v3 Developer Guide' at
// https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/dynamodb-example-table-read-write.html.
Purpose:
ddb_putitem.js demonstrates how to create or replace an item in an Amazon DynamoDB table.
INPUTS:
- TABLE_NAME
Running the code:
node ddb_putitem.js
*/
// snippet-start:[dynamodb.JavaScript.item.putItemV3]

// Import required AWS SDK clients and commands for Node.js
import { PutItemCommand } from '@aws-sdk/client-dynamodb';
import { ddbClient } from '../../libs/ddbClient.js'

const handleResponse = (products = {}, status = 200) => ({
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Origin': '*',
  },
  statusCode: status,
  body: JSON.stringify(products),
});

export const handler = async event => {
  const params = {
    TableName: "myProducts",
    Item: {
      id: { S: "7567ec4b-b10c-48c5-9345-fc73c48a80aa" },
      title: { S: "Laptop Intel Celeron N4020 Processor, 4GB DDR4 RAM, 64 GB SSD" },
      description: { S: "This everyday laptop is powered by an Intel Celeron N4020 processor, 4GB DDR4 RAM, and 64 GB M.2 PCIe SSD storage"},
      price: { N: "25.59"}
    },
  };

  try {
    const data = await ddbClient.send(new PutItemCommand(params));
    console.log(data);
    return handleResponse({data}, 200)
  } catch (error) {
    console.error(error);
    return handleResponse({error}, 500)
  }
};


// import { DynamoDB } from 'aws-sdk';

// const db = new DynamoDB.DocumentClient()
// const TableName = 'myProducts'

export default async (event) => {
  const newAnimal = {
    title: event.body.title,
    description: event.body.description,
    price: event.body.price,
  }

//   await db
//     .put({
//       TableName,
//       Item: newAnimal,
//     })
//     .promise()

//   return { statusCode: 200, body: JSON.stringify(newAnimal) }
// }
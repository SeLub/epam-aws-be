import { PutItemCommand } from '@aws-sdk/client-dynamodb';
import { ddbClient } from '../../libs/ddbClient.js'
import { v4 as uuidv4 } from 'uuid';

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
 console.log('PARSED BODY: ', JSON.parse(event.body))
 const newProduct = JSON.parse(event.body)
 newProduct.id = uuidv4()
console.log('New Product: ', newProduct)

  const params = {
    TableName: "myProducts",
    Item: {
      id: { S: newProduct.id },
      title: { S: newProduct.title },
      description: { S: newProduct.description },
      price: { N: newProduct.price }
    },
  };

  try {
    const data = await ddbClient.send(new PutItemCommand(params));
    console.log('Result of product creation:', data);
    return handleResponse({newProduct}, 201)
  } catch (error) {
    console.log('Error during product creation:', error);
    return handleResponse({error}, 500)
  }
};

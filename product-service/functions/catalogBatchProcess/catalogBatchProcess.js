import { Client } from 'pg';
import AWS from 'aws-sdk';
import { handleResponse } from '../../libs/handleResponse.js';
import { httpStatus } from '../../libs/httpStatus.js';
import {createNewProduct} from '../../models/createNewProduct.js';

export const handler = async event => {
  
const { SNS_ARN, LOW_PRICE_LIMIT, HIGHT_PRICE, LOW_PRICE } = process.env;

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

  
await asyncForEach(event.Records, async (record) => {

try {

      const messages = JSON.parse(record.body);

   //   console.log(messages);

      const typePrice = messages.price > process.env.LOW_PRICE_LIMIT ? process.env.LOW_HIGHT_PRICE : process.env.LOW_PRICE;

      const {title, description, price, count, imageid} = messages;
   
      const resultCreateProduct = await createNewProduct(title, description, price, count, imageid);

      console.log(resultCreateProduct);

      let params = {
              
                Subject: `Product ${messages.title} added to db. Send ${typePrice} notification`,
      
                Message: JSON.stringify(messages),
              
                TopicArn: process.env.SNS_ARN,
              
                MessageAttributes: {
              
                Price: {
              
                    DataType: 'String',
              
                    StringValue: typePrice
                    },
                }
              };

// Create promise and SNS service object
let publishTextPromise = new AWS.SNS({apiVersion: '2010-03-31', region: 'us-east-1'}).publish(params).promise();

// Handle promise's fulfilled/rejected states
publishTextPromise
 .then( data => {
   console.log(`Product ${messages.title} added to database. Notification ${typePrice} sent to the topic ${params.TopicArn}`)
   console.log("MessageID is " + data.MessageId) })
 .catch( error => console.log(error));


return handleResponse("done", httpStatus.OK);
  } catch (error) {
    return handleResponse(error, httpStatus.SERVER_ERROR);
  }

              
        });
}; 
import AWS from "aws-sdk-mock";
import { handler as importProductsFile} from './importProductsFile.js';
import {expect} from 'chai';

const request = ( method = "GET", qsParam = { "name": "products.csv" } ) => {return { "httpMethod": method, "queryStringParameters": qsParam }}
 
const response = (body = {}, stCode = 200) => {
    return {
        statusCode: stCode,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true,
        },
        body: JSON.stringify(body),
        isBase64Encoded: false
    }
}

describe('importProductsFile', () => {

    const mockUrl = 'https://task-5-csv-uploaded.s3.us-east-1.amazonaws.com/uploaded/products.csv';
    
    const testString = 'test.csv';

    it(`should successfully get \"signedUrl\"`, async () => {
        const result = await importProductsFile(request());
        expect(result.body.split('?')[0]).equal(mockUrl);
    });

      it(`should get \"signedUrl\, created for \"PutObject\"`, async () => {
        const result = await importProductsFile(request());
        expect((new URL(result.body)).searchParams.get("x-id")).equal('PutObject');
    });

    it(`should return Status Code 200 with queryStringParameter \"name\" = products.csv `, async () => {
        const result = await importProductsFile(request());
        expect(result.statusCode).equal(200);    
    });

    it(`should return Status Code \"400 Error\" without parameters `, async () => {
        const result = await importProductsFile(request("GET", null));
        expect(result.statusCode).equal(400);    
    });

    it(`should return Status Code \"400 Error\" with queryStringParameter \"name\" = \"\". `, async () => {
        const result = await importProductsFile( request("GET", { "name": "" }) );
        expect(result.statusCode).equal(400);    
    });

    it(`should return Status Code \"400 Error\" when query does not have \"name\" parameter. `, async () => {
        const result = await importProductsFile( request("GET", { "name22": "" }) );
      expect(result.statusCode).equal(400);    
  });

      it('Test getSignedUrl method by AWS mock', async () => {
    
    const event_test_request = { queryStringParameters: { name: testString } };
  
    AWS.mock('S3', 'getSignedUrl', testString);
  
    expect.assertions(1);

    const response = await importProductsFile(event_test_request, null, null);

    expect(response).equal(
      expect.objectContaining({
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true,
        },
        isBase64Encoded: false,
        body: expect.stringMatching(/test.csv/),
      })
    );
  });

});
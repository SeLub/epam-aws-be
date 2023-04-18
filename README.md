# **Task 5**

Self check:

TOTAL GRADE - _**100%**_

---

## **Evaluation criteria**

- [x] Cr.1: +1 - File serverless.yml contains configuration for importProductsFile function
- [x] Cr.2: +3 - The importProductsFile lambda function returns a correct response which can be used to upload a file into the S3 bucket
- [x] Cr.3: +4 - Frontend application is integrated with importProductsFile lambda
- [x] Cr.4: +5 - The importFileParser lambda function is implemented and serverless.yml contains configuration for the lambda

## **Additional (optional) tasks**

- [x] Ad.1: +1 (for JS only) - async/await is used in lambda functions
- [x] Ad.2: +1 (All languages) - importProductsFile lambda is covered by unit tests ((for JS only) aws-sdk-mock can be used to mock S3 methods
- [x] Ad.3: +1 (All languages) - At the end of the stream the lambda function should move the file from the uploaded folder into the parsed folder (move the file means that file should be copied into parsed folder, and then deleted from uploaded folder)

---

# **Summary Report**

| Evaluation criteria | Description                                                  | URL                                                                                                                     |
| ------------------- | ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| Cr.1                | Link to serverless.yml with importProductsFile function      | https://github.com/SeLub/epam-aws-be/blob/task-5/import-service/serverless.yml                                          |
| Cr.2                | SignedURL to upload CSV in S3 by importProductsFile lambda   | https://48dym36hi5.execute-api.us-east-1.amazonaws.com/dev/import/?name=product.csv                                     |
| Cr.3                | Frontend                                                     | https://d1umma59porlji.cloudfront.net/                                                                                  |
| Cr.4                | Link to importFileParser. Link to serverless.yml see in Cr.1 | https://github.com/SeLub/epam-aws-be/blob/task-5/import-service/functions/importFileParser/importFileParser.js          |
| Ad.1                | async/await is used in importProductsFile                    | https://github.com/SeLub/epam-aws-be/blob/task-5/import-service/functions/importProductsFile/importProductsFile.js      |
| Ad.1                | async/await is used in importFileParser                      | https://github.com/SeLub/epam-aws-be/blob/task-5/import-service/functions/importFileParser/importFileParser.js          |
| Ad.2                | Please check code by link                                    | https://github.com/SeLub/epam-aws-be/blob/task-5/import-service/functions/importProductsFile/importProductsFile.test.js |
| Ad.3                | Please check code (Line 35-36)                               | https://github.com/SeLub/epam-aws-be/blob/task-5/import-service/functions/importFileParser/importFileParser.js          |

---

# **Swagger documentation**

## Product Service

https://app.swaggerhub.com/apis/lubimov/product-service/3891bb50-d022-4173-b95a-9e08a8fa9c65

## Import Service

https://app.swaggerhub.com/apis/lubimov/import-service/32dc6f64-8763-4df6-9780-292b4efc0457

To generate Swagger (OpenAPI) documentation and Postman collection use

```

npm run generate

```

To deploy

```

npm run deploy:latest


```

To run tests:

```

npm run test

```

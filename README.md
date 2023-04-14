# **Task 4**

Self check:

TOTAL GRADE - _**70%**_

---

## **Evalution Criteria**

- [x] 1 - poiproduct-service serverless config contains configuration for 2 lambda functions, API is not working at all, but YAML configuration is correct
- [x] 2 - The getProductsList OR getProductsById lambda function returns a correct response (POINT1)
- [x] 3 - The getProductsById AND getProductsList lambda functions return a correct response code (POINT2)
- [x] 4 - Your own Frontend application is integrated with product service (/products API) and products from product-service are represented on Frontend. AND POINT1 and POINT2 are done.

## **Additional options**

- [x] Async/await is used in lambda functions.
- [x] ES6 modules are used for product-service implementation.
- [x] Webpack is configured for product-service.
- [x] SWAGGER documentation is created for product-service.
- [x] Lambda handlers are covered by basic UNIT tests (NO infrastructure logic is needed to be covered)
- [x] Lambda handlers (getProductsList, getProductsById) code is written not in 1 single module (file) and separated in codebase.
- [x] Main error scenarious are handled by API ("Product not found" error).

---

# **FrontEnd**

- FrontEnd integrated with product service HTTP API & images from S3 Bucket: https://d1umma59porlji.cloudfront.net/
- FrontEnd Task-3 Pull Request : - https://github.com/slubimav/epam-aws-fe/pull/2

# **BackEnd**

| Lambda          | Description                   | Method | URL                                                                                                      |
| --------------- | ----------------------------- | ------ | -------------------------------------------------------------------------------------------------------- |
| getProductsList | get ALL products              | GET    | https://yez09vx27k.execute-api.us-east-1.amazonaws.com/dev/products                                      |
| getProductsById | get ONE product in JSON by id | GET    | https://yez09vx27k.execute-api.us-east-1.amazonaws.com/dev/products/7567ec4b-b10c-48c5-9345-fc73c48a80a2 |
| getProductsById | Product not found             | GET    | https://yez09vx27k.execute-api.us-east-1.amazonaws.com/dev/products/777                                  |

---

# **Swagger documentation**

https://app.swaggerhub.com/apis/lubimov/product-service/3891bb50-d022-4173-b95a-9e08a8fa9c65

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

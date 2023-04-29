# **Task 7**

SELF CHECK GRADE - _** 100%**_

---

## **Evaluation criteria**

- [x] Cr.1: **1** - **authorization-service** is added to the repo, has correct **basicAuthorizer** lambda and correct **serverless.yaml** file
- [x] Cr.2: **3** - **import-service** serverless.yaml file has authorizer configuration for the **importProductsFile** lambda. Request to the **importProductsFile** lambda should work only with correct **authorization_token** being decoded and checked by **basicAuthorizer** lambda. Response should be in 403 HTTP status if access is denied for this user (invalid **authorization_token**) and in 401 HTTP status if Authorization header is not provided.
- [x] Cr.3: **5** - update client application to send Authorization: Basic **authorization_token** header on import. Client should get **authorization_token** value from browser localStorage

## **Additional (optional) tasks**

- [x] Ad.1: **+1** - Client application should display alerts for the responses in 401 and 403 HTTP statuses. This behavior should be added to the **nodejs-aws-fe-main/src/index.tsx** file

---

All tasks have been done.

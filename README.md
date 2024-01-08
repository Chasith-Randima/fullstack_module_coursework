# PUSL3120 Fullstack Coursework Ecommerse Site

Laptop.LK

## Running the Application

### Docker



```bash
docker compose up
```
- api will be hosted on port : 3001
- frontend web application will host on port : 3000
- database will be connected to mongodb online(network connection required)


### without docker

setup frontend and backend separately without docker

### seting up backend

```bash
cd backend
npm install
npm run dev
```


### seting up frontend

```bash
cd frontend
npm install
npm run dev
```



### Running test cases


### backend test cases

```bash
cd backend
npm install
npm run test
```


### frontend test cases

```bash
cd frontend
npm install
npm run test
```
environment variables

```bash
export MONGODB_URL=mongodb://127.0.0.1:27017
export NODE_ENV=dev
export FRONTEND_HOST=http://localhost:3000/
```

### Secrets

JWT secret can be set by using a env variable, also in case where this variable is not present the application
will generate one 

```bash
export SECRET=secret
```

---

### Docs

API documentation can be found on [here](https://documenter.getpostman.com/view/15892759/UzJJucyC#2ad25e08-7d99-4841-a68e-4d5d39438308).

### Project

- common - common code for both frontend and server mostly types
- web - frontend application
- server - rest api

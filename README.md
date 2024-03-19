# nodejs-react-store
This is an example of web application using `React` and `Express js`

### To run local:
This app use `Postgres`, I would also recommend downloading `PgAdmin`.
[download here](https://www.postgresql.org/download/)

After successful installation create new user and database with following parameters:
```env
  DB_USER=postgres
  DB_NAME=online_store
  DB_PASSWORD=9573
  DB_PORT=5432
```
Make sure you are in `ndoejs-react-store` folder and then:
>[!TIP]
>Open 2 terminal tabs for best experiance

1 tab:
```sh
    $ cd client
    $ npm install
    $ npm run start
```
2 tab:
```sh
    $ cd server
    $ npm install
    $ npm run dev
```
Now it should be running on http://localhost:3000

___
### Thank you for attention!

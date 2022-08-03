MVC project Arch
npm init -y
npm i express 
npm i cors mongoose bcrypt jsonwebtoken body-parser dotenv
npm i node-pre-gyp nodemon
npm i http-status-code helmet express-async-errors

express--> create and maintane  a server
cors --> cross origin request support
mongoose--> Mongo db ODM(Object Data modeling) -- it will make our data as an object to store in database
bcrypt --> password encription
jsonwebtoken --> help to stay login
body-parser -->it help us to deal with incomming and outgoing data set
dotenv --> help us to manage complex info like db password
nodemon --> help us to create concurrence --> change data in running server
http-status-code --> holding all the status code http
helmet --> Helmet helps you secure your Express apps by setting various HTTP headers
express-async-errors --> handle
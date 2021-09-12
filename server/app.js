const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema')
const mongoose = require('mongoose');
const cors = require('cors');



mongoose.connect('mongodb+srv://david:mongodb-password@cluster0.espdh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    .catch(err => {
        console.log(err);
    });;
// mongoose.connect('mongodb+srv://david:mongodb-password>@cluster0.espdh.mongodb.net/bookDB?retryWrites=true&w=majority')

mongoose.connection.once('open', () => {
    console.log('connected to db')
})
const app = express();

app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(4000, () => {
    console.log('listen for request on port 4000')
})
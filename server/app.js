const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

connectionString = 'mongodb://dylan:test123@ds011775.mlab.com:11775/df-buildings'
mongoose.connect(connectionString)
mongoose.connection.once('open', () => {
  console.log('connected to database')
})

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(4000, () => {
  console.log('now listening requests');
})
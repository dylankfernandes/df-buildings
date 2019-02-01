const graphql = require('graphql')
const _ = require('lodash')

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLBoolean
} = graphql

const Building = require('../models/building')
const City = require('../models/city')

const BuildingType = new GraphQLObjectType({
  name: 'Building',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    rentable: { type: GraphQLBoolean },
    rentPrice: { type: GraphQLInt },
    buildingType: { type: GraphQLString },
    location: { type: GraphQLString },
    rating: { type: GraphQLInt },
    city: {
      type: CityType,
      resolve(parent, args) {
        return City.findById(parent.authorId)
      }
    }
  })
})

const CityType = new GraphQLObjectType({
  name: 'City',
  fields: () => ({
    name: { type: GraphQLString },
    location: { type: GraphQLString },
    cities: {
      type: GraphQLList(BuildingType),
      resolve(parent, args) {
        return Building.find({ authorId: parent.id })
      }
    }
  })
})